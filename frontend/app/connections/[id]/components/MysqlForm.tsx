'use client';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  CheckConnectionConfigRequest,
  CheckConnectionConfigResponse,
  ConnectionConfig,
  MysqlConnection,
  MysqlConnectionConfig,
  UpdateConnectionRequest,
  UpdateConnectionResponse,
} from '@/neosync-api-client/mgmt/v1alpha1/connection_pb';
import { yupResolver } from '@hookform/resolvers/yup';
import { ExclamationTriangleIcon, RocketIcon } from '@radix-ui/react-icons';
import { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const FORM_SCHEMA = Yup.object({
  connectionName: Yup.string().required(),

  db: Yup.object({
    host: Yup.string().required(),
    name: Yup.string().required(),
    user: Yup.string().required(),
    pass: Yup.string().required(),
    port: Yup.number().integer().positive().required(),
    protocol: Yup.string().required(),
  }).required(),
});

type FormValues = Yup.InferType<typeof FORM_SCHEMA>;

interface Props {
  connectionId: string;
  defaultValues: FormValues;
  onSaved(updatedConnectionResp: UpdateConnectionResponse): void;
  onSaveFailed(err: unknown): void;
}

export default function MysqlForm(props: Props) {
  const { connectionId, defaultValues, onSaved, onSaveFailed } = props;
  const form = useForm<FormValues>({
    resolver: yupResolver(FORM_SCHEMA),
    defaultValues: {
      connectionName: '',
      db: {
        host: '',
        name: '',
        user: '',
        pass: '',
        port: 3306,
        protocol: 'tcp',
      },
    },
    values: defaultValues,
  });
  const [checkResp, setCheckResp] = useState<
    CheckConnectionConfigResponse | undefined
  >();

  async function onSubmit(values: FormValues) {
    try {
      const connectionResp = await updatePostgresConnection(
        connectionId,
        values.db
      );
      onSaved(connectionResp);
    } catch (err) {
      console.error(err);
      onSaveFailed(err);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="connectionName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input disabled placeholder="Connection Name" {...field} />
              </FormControl>
              <FormDescription>
                The unique name of the connection.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="db.host"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Host" {...field} />
              </FormControl>
              <FormDescription>Host</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="db.port"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="3306" {...field} />
              </FormControl>
              <FormDescription>The port of the database</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="db.name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="mysql" {...field} />
              </FormControl>
              <FormDescription>The name of the database</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="db.user"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="mysql" {...field} />
              </FormControl>
              <FormDescription>The username</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="db.pass"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="mysql" {...field} />
              </FormControl>
              <FormDescription>Password</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="db.protocol"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="tcp" {...field} />
              </FormControl>
              <FormDescription>Protocol</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <TestConnectionResult resp={checkResp} />
        <div className="flex flex-row gap-3 justify-end">
          <Button
            onClick={async () => {
              try {
                const resp = await checkPostgresConnection(form.getValues().db);
                setCheckResp(resp);
              } catch (err) {
                setCheckResp(
                  new CheckConnectionConfigResponse({
                    isConnected: false,
                    connectionError:
                      err instanceof Error ? err.message : 'unknown error',
                  })
                );
              }
            }}
            type="button"
            variant="secondary"
          >
            Test Connection
          </Button>

          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}

interface TestConnectionResultProps {
  resp: CheckConnectionConfigResponse | undefined;
}

function TestConnectionResult(props: TestConnectionResultProps): ReactElement {
  const { resp } = props;
  if (resp) {
    if (resp.isConnected) {
      return (
        <SuccessAlert
          title="Woohoo!"
          description="Successfully connected to database!"
        />
      );
    } else {
      return (
        <ErrorAlert
          title="Unable to connect"
          description={resp.connectionError ?? 'no error returned'}
        />
      );
    }
  }
  return <div />;
}

interface SuccessAlertProps {
  title: string;
  description: string;
}

function SuccessAlert(props: SuccessAlertProps): ReactElement {
  const { title, description } = props;
  return (
    <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}

interface ErrorAlertProps {
  title: string;
  description: string;
}

function ErrorAlert(props: ErrorAlertProps): ReactElement {
  const { title, description } = props;
  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}

async function updatePostgresConnection(
  connectionId: string,
  db: FormValues['db']
): Promise<UpdateConnectionResponse> {
  const res = await fetch(`/api/connections/${connectionId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(
      new UpdateConnectionRequest({
        id: connectionId,
        connectionConfig: new ConnectionConfig({
          config: {
            case: 'mysqlConfig',
            value: new MysqlConnectionConfig({
              connectionConfig: {
                case: 'connection',
                value: new MysqlConnection({
                  host: db.host,
                  name: db.name,
                  user: db.user,
                  pass: db.pass,
                  port: db.port,
                  protocol: db.protocol,
                }),
              },
            }),
          },
        }),
      })
    ),
  });
  if (!res.ok) {
    const body = await res.json();
    throw new Error(body.message);
  }
  return UpdateConnectionResponse.fromJson(await res.json());
}

async function checkPostgresConnection(
  db: FormValues['db']
): Promise<CheckConnectionConfigResponse> {
  const res = await fetch(`/api/connections/check`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(
      new CheckConnectionConfigRequest({
        connectionConfig: new ConnectionConfig({
          config: {
            case: 'mysqlConfig',
            value: new MysqlConnectionConfig({
              connectionConfig: {
                case: 'connection',
                value: new MysqlConnection({
                  host: db.host,
                  name: db.name,
                  user: db.user,
                  pass: db.pass,
                  port: db.port,
                  protocol: db.protocol,
                }),
              },
            }),
          },
        }),
      })
    ),
  });
  if (!res.ok) {
    const body = await res.json();
    throw new Error(body.message);
  }
  return CheckConnectionConfigResponse.fromJson(await res.json());
}