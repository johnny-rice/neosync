// @generated by protoc-gen-connect-query v1.4.2 with parameter "target=ts,import_extension=.js"
// @generated from file mgmt/v1alpha1/job.proto (package mgmt.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { CancelJobRunRequest, CancelJobRunResponse, CreateJobDestinationConnectionsRequest, CreateJobDestinationConnectionsResponse, CreateJobRequest, CreateJobResponse, CreateJobRunRequest, CreateJobRunResponse, DeleteJobDestinationConnectionRequest, DeleteJobDestinationConnectionResponse, DeleteJobRequest, DeleteJobResponse, DeleteJobRunRequest, DeleteJobRunResponse, GetJobNextRunsRequest, GetJobNextRunsResponse, GetJobRecentRunsRequest, GetJobRecentRunsResponse, GetJobRequest, GetJobResponse, GetJobRunEventsRequest, GetJobRunEventsResponse, GetJobRunRequest, GetJobRunResponse, GetJobRunsRequest, GetJobRunsResponse, GetJobsRequest, GetJobsResponse, GetJobStatusesRequest, GetJobStatusesResponse, GetJobStatusRequest, GetJobStatusResponse, GetRunContextRequest, GetRunContextResponse, IsJobNameAvailableRequest, IsJobNameAvailableResponse, PauseJobRequest, PauseJobResponse, SetJobSourceSqlConnectionSubsetsRequest, SetJobSourceSqlConnectionSubsetsResponse, SetJobSyncOptionsRequest, SetJobSyncOptionsResponse, SetJobWorkflowOptionsRequest, SetJobWorkflowOptionsResponse, SetRunContextRequest, SetRunContextResponse, TerminateJobRunRequest, TerminateJobRunResponse, UpdateJobDestinationConnectionRequest, UpdateJobDestinationConnectionResponse, UpdateJobScheduleRequest, UpdateJobScheduleResponse, UpdateJobSourceConnectionRequest, UpdateJobSourceConnectionResponse, ValidateJobMappingsRequest, ValidateJobMappingsResponse } from "./job_pb.js";

/**
 * @generated from rpc mgmt.v1alpha1.JobService.GetJobs
 */
export const getJobs = {
  localName: "getJobs",
  name: "GetJobs",
  kind: MethodKind.Unary,
  I: GetJobsRequest,
  O: GetJobsResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.GetJob
 */
export const getJob = {
  localName: "getJob",
  name: "GetJob",
  kind: MethodKind.Unary,
  I: GetJobRequest,
  O: GetJobResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.CreateJob
 */
export const createJob = {
  localName: "createJob",
  name: "CreateJob",
  kind: MethodKind.Unary,
  I: CreateJobRequest,
  O: CreateJobResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.DeleteJob
 */
export const deleteJob = {
  localName: "deleteJob",
  name: "DeleteJob",
  kind: MethodKind.Unary,
  I: DeleteJobRequest,
  O: DeleteJobResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.IsJobNameAvailable
 */
export const isJobNameAvailable = {
  localName: "isJobNameAvailable",
  name: "IsJobNameAvailable",
  kind: MethodKind.Unary,
  I: IsJobNameAvailableRequest,
  O: IsJobNameAvailableResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.UpdateJobSchedule
 */
export const updateJobSchedule = {
  localName: "updateJobSchedule",
  name: "UpdateJobSchedule",
  kind: MethodKind.Unary,
  I: UpdateJobScheduleRequest,
  O: UpdateJobScheduleResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.UpdateJobSourceConnection
 */
export const updateJobSourceConnection = {
  localName: "updateJobSourceConnection",
  name: "UpdateJobSourceConnection",
  kind: MethodKind.Unary,
  I: UpdateJobSourceConnectionRequest,
  O: UpdateJobSourceConnectionResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.SetJobSourceSqlConnectionSubsets
 */
export const setJobSourceSqlConnectionSubsets = {
  localName: "setJobSourceSqlConnectionSubsets",
  name: "SetJobSourceSqlConnectionSubsets",
  kind: MethodKind.Unary,
  I: SetJobSourceSqlConnectionSubsetsRequest,
  O: SetJobSourceSqlConnectionSubsetsResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.UpdateJobDestinationConnection
 */
export const updateJobDestinationConnection = {
  localName: "updateJobDestinationConnection",
  name: "UpdateJobDestinationConnection",
  kind: MethodKind.Unary,
  I: UpdateJobDestinationConnectionRequest,
  O: UpdateJobDestinationConnectionResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.DeleteJobDestinationConnection
 */
export const deleteJobDestinationConnection = {
  localName: "deleteJobDestinationConnection",
  name: "DeleteJobDestinationConnection",
  kind: MethodKind.Unary,
  I: DeleteJobDestinationConnectionRequest,
  O: DeleteJobDestinationConnectionResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.CreateJobDestinationConnections
 */
export const createJobDestinationConnections = {
  localName: "createJobDestinationConnections",
  name: "CreateJobDestinationConnections",
  kind: MethodKind.Unary,
  I: CreateJobDestinationConnectionsRequest,
  O: CreateJobDestinationConnectionsResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.PauseJob
 */
export const pauseJob = {
  localName: "pauseJob",
  name: "PauseJob",
  kind: MethodKind.Unary,
  I: PauseJobRequest,
  O: PauseJobResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * Returns a list of recently invoked job runs baseds on the Temporal cron scheduler. This will return a list of job runs that include archived runs
 *
 * @generated from rpc mgmt.v1alpha1.JobService.GetJobRecentRuns
 */
export const getJobRecentRuns = {
  localName: "getJobRecentRuns",
  name: "GetJobRecentRuns",
  kind: MethodKind.Unary,
  I: GetJobRecentRunsRequest,
  O: GetJobRecentRunsResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * Returns a list of runs that are scheduled for execution based on the Temporal cron scheduler.
 *
 * @generated from rpc mgmt.v1alpha1.JobService.GetJobNextRuns
 */
export const getJobNextRuns = {
  localName: "getJobNextRuns",
  name: "GetJobNextRuns",
  kind: MethodKind.Unary,
  I: GetJobNextRunsRequest,
  O: GetJobNextRunsResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.GetJobStatus
 */
export const getJobStatus = {
  localName: "getJobStatus",
  name: "GetJobStatus",
  kind: MethodKind.Unary,
  I: GetJobStatusRequest,
  O: GetJobStatusResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.GetJobStatuses
 */
export const getJobStatuses = {
  localName: "getJobStatuses",
  name: "GetJobStatuses",
  kind: MethodKind.Unary,
  I: GetJobStatusesRequest,
  O: GetJobStatusesResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * Returns a list of job runs by either account or job
 *
 * @generated from rpc mgmt.v1alpha1.JobService.GetJobRuns
 */
export const getJobRuns = {
  localName: "getJobRuns",
  name: "GetJobRuns",
  kind: MethodKind.Unary,
  I: GetJobRunsRequest,
  O: GetJobRunsResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.GetJobRunEvents
 */
export const getJobRunEvents = {
  localName: "getJobRunEvents",
  name: "GetJobRunEvents",
  kind: MethodKind.Unary,
  I: GetJobRunEventsRequest,
  O: GetJobRunEventsResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * Returns a specific job run, along with any of its pending activities
 *
 * @generated from rpc mgmt.v1alpha1.JobService.GetJobRun
 */
export const getJobRun = {
  localName: "getJobRun",
  name: "GetJobRun",
  kind: MethodKind.Unary,
  I: GetJobRunRequest,
  O: GetJobRunResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.DeleteJobRun
 */
export const deleteJobRun = {
  localName: "deleteJobRun",
  name: "DeleteJobRun",
  kind: MethodKind.Unary,
  I: DeleteJobRunRequest,
  O: DeleteJobRunResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.CreateJobRun
 */
export const createJobRun = {
  localName: "createJobRun",
  name: "CreateJobRun",
  kind: MethodKind.Unary,
  I: CreateJobRunRequest,
  O: CreateJobRunResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.CancelJobRun
 */
export const cancelJobRun = {
  localName: "cancelJobRun",
  name: "CancelJobRun",
  kind: MethodKind.Unary,
  I: CancelJobRunRequest,
  O: CancelJobRunResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * @generated from rpc mgmt.v1alpha1.JobService.TerminateJobRun
 */
export const terminateJobRun = {
  localName: "terminateJobRun",
  name: "TerminateJobRun",
  kind: MethodKind.Unary,
  I: TerminateJobRunRequest,
  O: TerminateJobRunResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * Set any job workflow options. Must provide entire object as is it will fully override the previous configuration
 *
 * @generated from rpc mgmt.v1alpha1.JobService.SetJobWorkflowOptions
 */
export const setJobWorkflowOptions = {
  localName: "setJobWorkflowOptions",
  name: "SetJobWorkflowOptions",
  kind: MethodKind.Unary,
  I: SetJobWorkflowOptionsRequest,
  O: SetJobWorkflowOptionsResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * Set the job sync options. Must provide entire object as it will fully override the previous configuration
 *
 * @generated from rpc mgmt.v1alpha1.JobService.SetJobSyncOptions
 */
export const setJobSyncOptions = {
  localName: "setJobSyncOptions",
  name: "SetJobSyncOptions",
  kind: MethodKind.Unary,
  I: SetJobSyncOptionsRequest,
  O: SetJobSyncOptionsResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * validates that the jobmapping configured can run with table constraints
 *
 * @generated from rpc mgmt.v1alpha1.JobService.ValidateJobMappings
 */
export const validateJobMappings = {
  localName: "validateJobMappings",
  name: "ValidateJobMappings",
  kind: MethodKind.Unary,
  I: ValidateJobMappingsRequest,
  O: ValidateJobMappingsResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * Gets a run context to be used by a workflow run
 *
 * @generated from rpc mgmt.v1alpha1.JobService.GetRunContext
 */
export const getRunContext = {
  localName: "getRunContext",
  name: "GetRunContext",
  kind: MethodKind.Unary,
  I: GetRunContextRequest,
  O: GetRunContextResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;

/**
 * Sets a run context to be used by a workflow run
 *
 * @generated from rpc mgmt.v1alpha1.JobService.SetRunContext
 */
export const setRunContext = {
  localName: "setRunContext",
  name: "SetRunContext",
  kind: MethodKind.Unary,
  I: SetRunContextRequest,
  O: SetRunContextResponse,
  service: {
    typeName: "mgmt.v1alpha1.JobService"
  }
} as const;
