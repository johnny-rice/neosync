from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf import struct_pb2 as _struct_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class PostgresStreamConfig(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class MysqlStreamConfig(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class AwsDynamoDBStreamConfig(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class AwsS3StreamConfig(_message.Message):
    __slots__ = ("job_id", "job_run_id")
    JOB_ID_FIELD_NUMBER: _ClassVar[int]
    JOB_RUN_ID_FIELD_NUMBER: _ClassVar[int]
    job_id: str
    job_run_id: str
    def __init__(self, job_id: _Optional[str] = ..., job_run_id: _Optional[str] = ...) -> None: ...

class GcpCloudStorageStreamConfig(_message.Message):
    __slots__ = ("job_id", "job_run_id")
    JOB_ID_FIELD_NUMBER: _ClassVar[int]
    JOB_RUN_ID_FIELD_NUMBER: _ClassVar[int]
    job_id: str
    job_run_id: str
    def __init__(self, job_id: _Optional[str] = ..., job_run_id: _Optional[str] = ...) -> None: ...

class ConnectionStreamConfig(_message.Message):
    __slots__ = ("pg_config", "aws_s3_config", "mysql_config", "gcp_cloudstorage_config", "dynamodb_config")
    PG_CONFIG_FIELD_NUMBER: _ClassVar[int]
    AWS_S3_CONFIG_FIELD_NUMBER: _ClassVar[int]
    MYSQL_CONFIG_FIELD_NUMBER: _ClassVar[int]
    GCP_CLOUDSTORAGE_CONFIG_FIELD_NUMBER: _ClassVar[int]
    DYNAMODB_CONFIG_FIELD_NUMBER: _ClassVar[int]
    pg_config: PostgresStreamConfig
    aws_s3_config: AwsS3StreamConfig
    mysql_config: MysqlStreamConfig
    gcp_cloudstorage_config: GcpCloudStorageStreamConfig
    dynamodb_config: AwsDynamoDBStreamConfig
    def __init__(self, pg_config: _Optional[_Union[PostgresStreamConfig, _Mapping]] = ..., aws_s3_config: _Optional[_Union[AwsS3StreamConfig, _Mapping]] = ..., mysql_config: _Optional[_Union[MysqlStreamConfig, _Mapping]] = ..., gcp_cloudstorage_config: _Optional[_Union[GcpCloudStorageStreamConfig, _Mapping]] = ..., dynamodb_config: _Optional[_Union[AwsDynamoDBStreamConfig, _Mapping]] = ...) -> None: ...

class GetConnectionDataStreamRequest(_message.Message):
    __slots__ = ("connection_id", "stream_config", "schema", "table")
    CONNECTION_ID_FIELD_NUMBER: _ClassVar[int]
    STREAM_CONFIG_FIELD_NUMBER: _ClassVar[int]
    SCHEMA_FIELD_NUMBER: _ClassVar[int]
    TABLE_FIELD_NUMBER: _ClassVar[int]
    connection_id: str
    stream_config: ConnectionStreamConfig
    schema: str
    table: str
    def __init__(self, connection_id: _Optional[str] = ..., stream_config: _Optional[_Union[ConnectionStreamConfig, _Mapping]] = ..., schema: _Optional[str] = ..., table: _Optional[str] = ...) -> None: ...

class GetConnectionDataStreamResponse(_message.Message):
    __slots__ = ("row_bytes",)
    ROW_BYTES_FIELD_NUMBER: _ClassVar[int]
    row_bytes: bytes
    def __init__(self, row_bytes: _Optional[bytes] = ...) -> None: ...

class PostgresSchemaConfig(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class MysqlSchemaConfig(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class MssqlSchemaConfig(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class AwsS3SchemaConfig(_message.Message):
    __slots__ = ("job_id", "job_run_id")
    JOB_ID_FIELD_NUMBER: _ClassVar[int]
    JOB_RUN_ID_FIELD_NUMBER: _ClassVar[int]
    job_id: str
    job_run_id: str
    def __init__(self, job_id: _Optional[str] = ..., job_run_id: _Optional[str] = ...) -> None: ...

class MongoSchemaConfig(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class DynamoDBSchemaConfig(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GcpCloudStorageSchemaConfig(_message.Message):
    __slots__ = ("job_id", "job_run_id")
    JOB_ID_FIELD_NUMBER: _ClassVar[int]
    JOB_RUN_ID_FIELD_NUMBER: _ClassVar[int]
    job_id: str
    job_run_id: str
    def __init__(self, job_id: _Optional[str] = ..., job_run_id: _Optional[str] = ...) -> None: ...

class ConnectionSchemaConfig(_message.Message):
    __slots__ = ("pg_config", "aws_s3_config", "mysql_config", "mongo_config", "gcp_cloudstorage_config", "dynamodb_config", "mssql_config")
    PG_CONFIG_FIELD_NUMBER: _ClassVar[int]
    AWS_S3_CONFIG_FIELD_NUMBER: _ClassVar[int]
    MYSQL_CONFIG_FIELD_NUMBER: _ClassVar[int]
    MONGO_CONFIG_FIELD_NUMBER: _ClassVar[int]
    GCP_CLOUDSTORAGE_CONFIG_FIELD_NUMBER: _ClassVar[int]
    DYNAMODB_CONFIG_FIELD_NUMBER: _ClassVar[int]
    MSSQL_CONFIG_FIELD_NUMBER: _ClassVar[int]
    pg_config: PostgresSchemaConfig
    aws_s3_config: AwsS3SchemaConfig
    mysql_config: MysqlSchemaConfig
    mongo_config: MongoSchemaConfig
    gcp_cloudstorage_config: GcpCloudStorageSchemaConfig
    dynamodb_config: DynamoDBSchemaConfig
    mssql_config: MssqlSchemaConfig
    def __init__(self, pg_config: _Optional[_Union[PostgresSchemaConfig, _Mapping]] = ..., aws_s3_config: _Optional[_Union[AwsS3SchemaConfig, _Mapping]] = ..., mysql_config: _Optional[_Union[MysqlSchemaConfig, _Mapping]] = ..., mongo_config: _Optional[_Union[MongoSchemaConfig, _Mapping]] = ..., gcp_cloudstorage_config: _Optional[_Union[GcpCloudStorageSchemaConfig, _Mapping]] = ..., dynamodb_config: _Optional[_Union[DynamoDBSchemaConfig, _Mapping]] = ..., mssql_config: _Optional[_Union[MssqlSchemaConfig, _Mapping]] = ...) -> None: ...

class DatabaseColumn(_message.Message):
    __slots__ = ("schema", "table", "column", "data_type", "is_nullable", "column_default", "generated_type", "identity_generation")
    SCHEMA_FIELD_NUMBER: _ClassVar[int]
    TABLE_FIELD_NUMBER: _ClassVar[int]
    COLUMN_FIELD_NUMBER: _ClassVar[int]
    DATA_TYPE_FIELD_NUMBER: _ClassVar[int]
    IS_NULLABLE_FIELD_NUMBER: _ClassVar[int]
    COLUMN_DEFAULT_FIELD_NUMBER: _ClassVar[int]
    GENERATED_TYPE_FIELD_NUMBER: _ClassVar[int]
    IDENTITY_GENERATION_FIELD_NUMBER: _ClassVar[int]
    schema: str
    table: str
    column: str
    data_type: str
    is_nullable: str
    column_default: str
    generated_type: str
    identity_generation: str
    def __init__(self, schema: _Optional[str] = ..., table: _Optional[str] = ..., column: _Optional[str] = ..., data_type: _Optional[str] = ..., is_nullable: _Optional[str] = ..., column_default: _Optional[str] = ..., generated_type: _Optional[str] = ..., identity_generation: _Optional[str] = ...) -> None: ...

class GetConnectionSchemaRequest(_message.Message):
    __slots__ = ("connection_id", "schema_config")
    CONNECTION_ID_FIELD_NUMBER: _ClassVar[int]
    SCHEMA_CONFIG_FIELD_NUMBER: _ClassVar[int]
    connection_id: str
    schema_config: ConnectionSchemaConfig
    def __init__(self, connection_id: _Optional[str] = ..., schema_config: _Optional[_Union[ConnectionSchemaConfig, _Mapping]] = ...) -> None: ...

class GetConnectionSchemaResponse(_message.Message):
    __slots__ = ("schemas",)
    SCHEMAS_FIELD_NUMBER: _ClassVar[int]
    schemas: _containers.RepeatedCompositeFieldContainer[DatabaseColumn]
    def __init__(self, schemas: _Optional[_Iterable[_Union[DatabaseColumn, _Mapping]]] = ...) -> None: ...

class GetConnectionSchemaMapRequest(_message.Message):
    __slots__ = ("connection_id", "schema_config")
    CONNECTION_ID_FIELD_NUMBER: _ClassVar[int]
    SCHEMA_CONFIG_FIELD_NUMBER: _ClassVar[int]
    connection_id: str
    schema_config: ConnectionSchemaConfig
    def __init__(self, connection_id: _Optional[str] = ..., schema_config: _Optional[_Union[ConnectionSchemaConfig, _Mapping]] = ...) -> None: ...

class GetConnectionSchemaMapResponse(_message.Message):
    __slots__ = ("schema_map",)
    class SchemaMapEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: GetConnectionSchemaResponse
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[GetConnectionSchemaResponse, _Mapping]] = ...) -> None: ...
    SCHEMA_MAP_FIELD_NUMBER: _ClassVar[int]
    schema_map: _containers.MessageMap[str, GetConnectionSchemaResponse]
    def __init__(self, schema_map: _Optional[_Mapping[str, GetConnectionSchemaResponse]] = ...) -> None: ...

class GetConnectionSchemaMapsRequest(_message.Message):
    __slots__ = ("requests",)
    REQUESTS_FIELD_NUMBER: _ClassVar[int]
    requests: _containers.RepeatedCompositeFieldContainer[GetConnectionSchemaMapRequest]
    def __init__(self, requests: _Optional[_Iterable[_Union[GetConnectionSchemaMapRequest, _Mapping]]] = ...) -> None: ...

class GetConnectionSchemaMapsResponse(_message.Message):
    __slots__ = ("responses", "connection_ids")
    RESPONSES_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_IDS_FIELD_NUMBER: _ClassVar[int]
    responses: _containers.RepeatedCompositeFieldContainer[GetConnectionSchemaMapResponse]
    connection_ids: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, responses: _Optional[_Iterable[_Union[GetConnectionSchemaMapResponse, _Mapping]]] = ..., connection_ids: _Optional[_Iterable[str]] = ...) -> None: ...

class ForeignKey(_message.Message):
    __slots__ = ("table", "columns")
    TABLE_FIELD_NUMBER: _ClassVar[int]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    table: str
    columns: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, table: _Optional[str] = ..., columns: _Optional[_Iterable[str]] = ...) -> None: ...

class ForeignConstraint(_message.Message):
    __slots__ = ("foreign_key", "columns", "not_nullable")
    FOREIGN_KEY_FIELD_NUMBER: _ClassVar[int]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    NOT_NULLABLE_FIELD_NUMBER: _ClassVar[int]
    foreign_key: ForeignKey
    columns: _containers.RepeatedScalarFieldContainer[str]
    not_nullable: _containers.RepeatedScalarFieldContainer[bool]
    def __init__(self, foreign_key: _Optional[_Union[ForeignKey, _Mapping]] = ..., columns: _Optional[_Iterable[str]] = ..., not_nullable: _Optional[_Iterable[bool]] = ...) -> None: ...

class ForeignConstraintTables(_message.Message):
    __slots__ = ("constraints",)
    CONSTRAINTS_FIELD_NUMBER: _ClassVar[int]
    constraints: _containers.RepeatedCompositeFieldContainer[ForeignConstraint]
    def __init__(self, constraints: _Optional[_Iterable[_Union[ForeignConstraint, _Mapping]]] = ...) -> None: ...

class InitStatementOptions(_message.Message):
    __slots__ = ("init_schema", "truncate_before_insert", "truncate_cascade")
    INIT_SCHEMA_FIELD_NUMBER: _ClassVar[int]
    TRUNCATE_BEFORE_INSERT_FIELD_NUMBER: _ClassVar[int]
    TRUNCATE_CASCADE_FIELD_NUMBER: _ClassVar[int]
    init_schema: bool
    truncate_before_insert: bool
    truncate_cascade: bool
    def __init__(self, init_schema: bool = ..., truncate_before_insert: bool = ..., truncate_cascade: bool = ...) -> None: ...

class GetConnectionInitStatementsRequest(_message.Message):
    __slots__ = ("connection_id", "options")
    CONNECTION_ID_FIELD_NUMBER: _ClassVar[int]
    OPTIONS_FIELD_NUMBER: _ClassVar[int]
    connection_id: str
    options: InitStatementOptions
    def __init__(self, connection_id: _Optional[str] = ..., options: _Optional[_Union[InitStatementOptions, _Mapping]] = ...) -> None: ...

class SchemaInitStatements(_message.Message):
    __slots__ = ("label", "statements")
    LABEL_FIELD_NUMBER: _ClassVar[int]
    STATEMENTS_FIELD_NUMBER: _ClassVar[int]
    label: str
    statements: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, label: _Optional[str] = ..., statements: _Optional[_Iterable[str]] = ...) -> None: ...

class GetConnectionInitStatementsResponse(_message.Message):
    __slots__ = ("table_init_statements", "table_truncate_statements", "schema_init_statements")
    class TableInitStatementsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    class TableTruncateStatementsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    TABLE_INIT_STATEMENTS_FIELD_NUMBER: _ClassVar[int]
    TABLE_TRUNCATE_STATEMENTS_FIELD_NUMBER: _ClassVar[int]
    SCHEMA_INIT_STATEMENTS_FIELD_NUMBER: _ClassVar[int]
    table_init_statements: _containers.ScalarMap[str, str]
    table_truncate_statements: _containers.ScalarMap[str, str]
    schema_init_statements: _containers.RepeatedCompositeFieldContainer[SchemaInitStatements]
    def __init__(self, table_init_statements: _Optional[_Mapping[str, str]] = ..., table_truncate_statements: _Optional[_Mapping[str, str]] = ..., schema_init_statements: _Optional[_Iterable[_Union[SchemaInitStatements, _Mapping]]] = ...) -> None: ...

class PrimaryConstraint(_message.Message):
    __slots__ = ("columns",)
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    columns: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, columns: _Optional[_Iterable[str]] = ...) -> None: ...

class UniqueConstraint(_message.Message):
    __slots__ = ("columns",)
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    columns: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, columns: _Optional[_Iterable[str]] = ...) -> None: ...

class GetAiGeneratedDataRequest(_message.Message):
    __slots__ = ("ai_connection_id", "count", "model_name", "user_prompt", "data_connection_id", "table")
    AI_CONNECTION_ID_FIELD_NUMBER: _ClassVar[int]
    COUNT_FIELD_NUMBER: _ClassVar[int]
    MODEL_NAME_FIELD_NUMBER: _ClassVar[int]
    USER_PROMPT_FIELD_NUMBER: _ClassVar[int]
    DATA_CONNECTION_ID_FIELD_NUMBER: _ClassVar[int]
    TABLE_FIELD_NUMBER: _ClassVar[int]
    ai_connection_id: str
    count: int
    model_name: str
    user_prompt: str
    data_connection_id: str
    table: DatabaseTable
    def __init__(self, ai_connection_id: _Optional[str] = ..., count: _Optional[int] = ..., model_name: _Optional[str] = ..., user_prompt: _Optional[str] = ..., data_connection_id: _Optional[str] = ..., table: _Optional[_Union[DatabaseTable, _Mapping]] = ...) -> None: ...

class DatabaseTable(_message.Message):
    __slots__ = ("schema", "table")
    SCHEMA_FIELD_NUMBER: _ClassVar[int]
    TABLE_FIELD_NUMBER: _ClassVar[int]
    schema: str
    table: str
    def __init__(self, schema: _Optional[str] = ..., table: _Optional[str] = ...) -> None: ...

class GetAiGeneratedDataResponse(_message.Message):
    __slots__ = ("records",)
    RECORDS_FIELD_NUMBER: _ClassVar[int]
    records: _containers.RepeatedCompositeFieldContainer[_struct_pb2.Struct]
    def __init__(self, records: _Optional[_Iterable[_Union[_struct_pb2.Struct, _Mapping]]] = ...) -> None: ...

class GetConnectionTableConstraintsRequest(_message.Message):
    __slots__ = ("connection_id",)
    CONNECTION_ID_FIELD_NUMBER: _ClassVar[int]
    connection_id: str
    def __init__(self, connection_id: _Optional[str] = ...) -> None: ...

class UniqueConstraints(_message.Message):
    __slots__ = ("constraints",)
    CONSTRAINTS_FIELD_NUMBER: _ClassVar[int]
    constraints: _containers.RepeatedCompositeFieldContainer[UniqueConstraint]
    def __init__(self, constraints: _Optional[_Iterable[_Union[UniqueConstraint, _Mapping]]] = ...) -> None: ...

class UniqueIndexes(_message.Message):
    __slots__ = ("indexes",)
    INDEXES_FIELD_NUMBER: _ClassVar[int]
    indexes: _containers.RepeatedCompositeFieldContainer[UniqueIndex]
    def __init__(self, indexes: _Optional[_Iterable[_Union[UniqueIndex, _Mapping]]] = ...) -> None: ...

class UniqueIndex(_message.Message):
    __slots__ = ("columns",)
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    columns: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, columns: _Optional[_Iterable[str]] = ...) -> None: ...

class GetConnectionTableConstraintsResponse(_message.Message):
    __slots__ = ("foreign_key_constraints", "primary_key_constraints", "unique_constraints", "unique_indexes")
    class ForeignKeyConstraintsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: ForeignConstraintTables
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[ForeignConstraintTables, _Mapping]] = ...) -> None: ...
    class PrimaryKeyConstraintsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: PrimaryConstraint
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[PrimaryConstraint, _Mapping]] = ...) -> None: ...
    class UniqueConstraintsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: UniqueConstraints
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[UniqueConstraints, _Mapping]] = ...) -> None: ...
    class UniqueIndexesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: UniqueIndexes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[UniqueIndexes, _Mapping]] = ...) -> None: ...
    FOREIGN_KEY_CONSTRAINTS_FIELD_NUMBER: _ClassVar[int]
    PRIMARY_KEY_CONSTRAINTS_FIELD_NUMBER: _ClassVar[int]
    UNIQUE_CONSTRAINTS_FIELD_NUMBER: _ClassVar[int]
    UNIQUE_INDEXES_FIELD_NUMBER: _ClassVar[int]
    foreign_key_constraints: _containers.MessageMap[str, ForeignConstraintTables]
    primary_key_constraints: _containers.MessageMap[str, PrimaryConstraint]
    unique_constraints: _containers.MessageMap[str, UniqueConstraints]
    unique_indexes: _containers.MessageMap[str, UniqueIndexes]
    def __init__(self, foreign_key_constraints: _Optional[_Mapping[str, ForeignConstraintTables]] = ..., primary_key_constraints: _Optional[_Mapping[str, PrimaryConstraint]] = ..., unique_constraints: _Optional[_Mapping[str, UniqueConstraints]] = ..., unique_indexes: _Optional[_Mapping[str, UniqueIndexes]] = ...) -> None: ...

class GetTableRowCountRequest(_message.Message):
    __slots__ = ("connection_id", "schema", "table", "where_clause")
    CONNECTION_ID_FIELD_NUMBER: _ClassVar[int]
    SCHEMA_FIELD_NUMBER: _ClassVar[int]
    TABLE_FIELD_NUMBER: _ClassVar[int]
    WHERE_CLAUSE_FIELD_NUMBER: _ClassVar[int]
    connection_id: str
    schema: str
    table: str
    where_clause: str
    def __init__(self, connection_id: _Optional[str] = ..., schema: _Optional[str] = ..., table: _Optional[str] = ..., where_clause: _Optional[str] = ...) -> None: ...

class GetTableRowCountResponse(_message.Message):
    __slots__ = ("count",)
    COUNT_FIELD_NUMBER: _ClassVar[int]
    count: int
    def __init__(self, count: _Optional[int] = ...) -> None: ...

class GetAllSchemasAndTablesRequest(_message.Message):
    __slots__ = ("connection_id",)
    CONNECTION_ID_FIELD_NUMBER: _ClassVar[int]
    connection_id: str
    def __init__(self, connection_id: _Optional[str] = ...) -> None: ...

class GetAllSchemasAndTablesResponse(_message.Message):
    __slots__ = ("schemas", "tables")
    class Schema(_message.Message):
        __slots__ = ("name",)
        NAME_FIELD_NUMBER: _ClassVar[int]
        name: str
        def __init__(self, name: _Optional[str] = ...) -> None: ...
    class Table(_message.Message):
        __slots__ = ("schema_name", "table_name")
        SCHEMA_NAME_FIELD_NUMBER: _ClassVar[int]
        TABLE_NAME_FIELD_NUMBER: _ClassVar[int]
        schema_name: str
        table_name: str
        def __init__(self, schema_name: _Optional[str] = ..., table_name: _Optional[str] = ...) -> None: ...
    SCHEMAS_FIELD_NUMBER: _ClassVar[int]
    TABLES_FIELD_NUMBER: _ClassVar[int]
    schemas: _containers.RepeatedCompositeFieldContainer[GetAllSchemasAndTablesResponse.Schema]
    tables: _containers.RepeatedCompositeFieldContainer[GetAllSchemasAndTablesResponse.Table]
    def __init__(self, schemas: _Optional[_Iterable[_Union[GetAllSchemasAndTablesResponse.Schema, _Mapping]]] = ..., tables: _Optional[_Iterable[_Union[GetAllSchemasAndTablesResponse.Table, _Mapping]]] = ...) -> None: ...
