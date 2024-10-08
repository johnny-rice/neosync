// @generated by protoc-gen-es v1.10.0 with parameter "target=ts,import_extension=.js"
// @generated from file mgmt/v1alpha1/metrics.proto (package mgmt.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum mgmt.v1alpha1.RangedMetricName
 */
export enum RangedMetricName {
  /**
   * If unspecified, an error will be thrown
   *
   * @generated from enum value: RANGED_METRIC_NAME_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The input_received metric
   *
   * @generated from enum value: RANGED_METRIC_NAME_INPUT_RECEIVED = 1;
   */
  INPUT_RECEIVED = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(RangedMetricName)
proto3.util.setEnumType(RangedMetricName, "mgmt.v1alpha1.RangedMetricName", [
  { no: 0, name: "RANGED_METRIC_NAME_UNSPECIFIED" },
  { no: 1, name: "RANGED_METRIC_NAME_INPUT_RECEIVED" },
]);

/**
 * Represents a whole or partial calendar date, such as a birthday. The time of
 * day and time zone are either specified elsewhere or are insignificant. The
 * date is relative to the Gregorian Calendar. This can represent one of the
 * following:
 *
 * * A full date, with non-zero year, month, and day values
 * * A month and day value, with a zero year, such as an anniversary
 * * A year on its own, with zero month and day values
 * * A year and month value, with a zero day, such as a credit card expiration
 * date
 *
 * Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and
 * `google.protobuf.Timestamp`.
 *
 * @generated from message mgmt.v1alpha1.Date
 */
export class Date extends Message<Date> {
  /**
   * Year of the date. Must be from 1 to 9999, or 0 to specify a date without
   * a year.
   *
   * @generated from field: uint32 year = 1;
   */
  year = 0;

  /**
   * Month of a year. Must be from 1 to 12, or 0 to specify a year without a
   * month and day.
   *
   * @generated from field: uint32 month = 2;
   */
  month = 0;

  /**
   * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0
   * to specify a year by itself or a year and month where the day isn't
   * significant.
   *
   * @generated from field: uint32 day = 3;
   */
  day = 0;

  constructor(data?: PartialMessage<Date>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "mgmt.v1alpha1.Date";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "year", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "month", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "day", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Date {
    return new Date().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Date {
    return new Date().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Date {
    return new Date().fromJsonString(jsonString, options);
  }

  static equals(a: Date | PlainMessage<Date> | undefined, b: Date | PlainMessage<Date> | undefined): boolean {
    return proto3.util.equals(Date, a, b);
  }
}

/**
 * @generated from message mgmt.v1alpha1.GetDailyMetricCountRequest
 */
export class GetDailyMetricCountRequest extends Message<GetDailyMetricCountRequest> {
  /**
   * The start day
   *
   * @generated from field: mgmt.v1alpha1.Date start = 1;
   */
  start?: Date;

  /**
   * The end day
   *
   * @generated from field: mgmt.v1alpha1.Date end = 2;
   */
  end?: Date;

  /**
   * The metric to return
   *
   * @generated from field: mgmt.v1alpha1.RangedMetricName metric = 3;
   */
  metric = RangedMetricName.UNSPECIFIED;

  /**
   * @generated from oneof mgmt.v1alpha1.GetDailyMetricCountRequest.identifier
   */
  identifier: {
    /**
     * The account identifier that will be used to filter by
     *
     * @generated from field: string account_id = 4;
     */
    value: string;
    case: "accountId";
  } | {
    /**
     * The job identifier that will be used to filter by
     *
     * @generated from field: string job_id = 5;
     */
    value: string;
    case: "jobId";
  } | {
    /**
     * The run identifier that will be used to filter by
     *
     * @generated from field: string run_id = 6;
     */
    value: string;
    case: "runId";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<GetDailyMetricCountRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "mgmt.v1alpha1.GetDailyMetricCountRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "start", kind: "message", T: Date },
    { no: 2, name: "end", kind: "message", T: Date },
    { no: 3, name: "metric", kind: "enum", T: proto3.getEnumType(RangedMetricName) },
    { no: 4, name: "account_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "identifier" },
    { no: 5, name: "job_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "identifier" },
    { no: 6, name: "run_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "identifier" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDailyMetricCountRequest {
    return new GetDailyMetricCountRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDailyMetricCountRequest {
    return new GetDailyMetricCountRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDailyMetricCountRequest {
    return new GetDailyMetricCountRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetDailyMetricCountRequest | PlainMessage<GetDailyMetricCountRequest> | undefined, b: GetDailyMetricCountRequest | PlainMessage<GetDailyMetricCountRequest> | undefined): boolean {
    return proto3.util.equals(GetDailyMetricCountRequest, a, b);
  }
}

/**
 * @generated from message mgmt.v1alpha1.GetDailyMetricCountResponse
 */
export class GetDailyMetricCountResponse extends Message<GetDailyMetricCountResponse> {
  /**
   * @generated from field: repeated mgmt.v1alpha1.DayResult results = 1;
   */
  results: DayResult[] = [];

  constructor(data?: PartialMessage<GetDailyMetricCountResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "mgmt.v1alpha1.GetDailyMetricCountResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: DayResult, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDailyMetricCountResponse {
    return new GetDailyMetricCountResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDailyMetricCountResponse {
    return new GetDailyMetricCountResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDailyMetricCountResponse {
    return new GetDailyMetricCountResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetDailyMetricCountResponse | PlainMessage<GetDailyMetricCountResponse> | undefined, b: GetDailyMetricCountResponse | PlainMessage<GetDailyMetricCountResponse> | undefined): boolean {
    return proto3.util.equals(GetDailyMetricCountResponse, a, b);
  }
}

/**
 * @generated from message mgmt.v1alpha1.DayResult
 */
export class DayResult extends Message<DayResult> {
  /**
   * @generated from field: mgmt.v1alpha1.Date date = 1;
   */
  date?: Date;

  /**
   * @generated from field: uint64 count = 2;
   */
  count = protoInt64.zero;

  constructor(data?: PartialMessage<DayResult>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "mgmt.v1alpha1.DayResult";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "date", kind: "message", T: Date },
    { no: 2, name: "count", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DayResult {
    return new DayResult().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DayResult {
    return new DayResult().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DayResult {
    return new DayResult().fromJsonString(jsonString, options);
  }

  static equals(a: DayResult | PlainMessage<DayResult> | undefined, b: DayResult | PlainMessage<DayResult> | undefined): boolean {
    return proto3.util.equals(DayResult, a, b);
  }
}

/**
 * @generated from message mgmt.v1alpha1.GetMetricCountRequest
 */
export class GetMetricCountRequest extends Message<GetMetricCountRequest> {
  /**
   * @deprecated - use start_day
   *
   * @generated from field: google.protobuf.Timestamp start = 1;
   */
  start?: Timestamp;

  /**
   * @deprecated - use end_day
   *
   * @generated from field: google.protobuf.Timestamp end = 2;
   */
  end?: Timestamp;

  /**
   * The metric to return
   *
   * @generated from field: mgmt.v1alpha1.RangedMetricName metric = 3;
   */
  metric = RangedMetricName.UNSPECIFIED;

  /**
   * @generated from oneof mgmt.v1alpha1.GetMetricCountRequest.identifier
   */
  identifier: {
    /**
     * The account identifier that will be used to filter by
     *
     * @generated from field: string account_id = 4;
     */
    value: string;
    case: "accountId";
  } | {
    /**
     * The job identifier that will be used to filter by
     *
     * @generated from field: string job_id = 5;
     */
    value: string;
    case: "jobId";
  } | {
    /**
     * The run identifier that will be used to filter by
     *
     * @generated from field: string run_id = 6;
     */
    value: string;
    case: "runId";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * @generated from field: mgmt.v1alpha1.Date start_day = 7;
   */
  startDay?: Date;

  /**
   * @generated from field: mgmt.v1alpha1.Date end_day = 8;
   */
  endDay?: Date;

  constructor(data?: PartialMessage<GetMetricCountRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "mgmt.v1alpha1.GetMetricCountRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "start", kind: "message", T: Timestamp },
    { no: 2, name: "end", kind: "message", T: Timestamp },
    { no: 3, name: "metric", kind: "enum", T: proto3.getEnumType(RangedMetricName) },
    { no: 4, name: "account_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "identifier" },
    { no: 5, name: "job_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "identifier" },
    { no: 6, name: "run_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "identifier" },
    { no: 7, name: "start_day", kind: "message", T: Date },
    { no: 8, name: "end_day", kind: "message", T: Date },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMetricCountRequest {
    return new GetMetricCountRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMetricCountRequest {
    return new GetMetricCountRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMetricCountRequest {
    return new GetMetricCountRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetMetricCountRequest | PlainMessage<GetMetricCountRequest> | undefined, b: GetMetricCountRequest | PlainMessage<GetMetricCountRequest> | undefined): boolean {
    return proto3.util.equals(GetMetricCountRequest, a, b);
  }
}

/**
 * @generated from message mgmt.v1alpha1.GetMetricCountResponse
 */
export class GetMetricCountResponse extends Message<GetMetricCountResponse> {
  /**
   * The summed up count of the metric based on the input query and timerange specified
   *
   * @generated from field: uint64 count = 1;
   */
  count = protoInt64.zero;

  constructor(data?: PartialMessage<GetMetricCountResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "mgmt.v1alpha1.GetMetricCountResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMetricCountResponse {
    return new GetMetricCountResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMetricCountResponse {
    return new GetMetricCountResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMetricCountResponse {
    return new GetMetricCountResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetMetricCountResponse | PlainMessage<GetMetricCountResponse> | undefined, b: GetMetricCountResponse | PlainMessage<GetMetricCountResponse> | undefined): boolean {
    return proto3.util.equals(GetMetricCountResponse, a, b);
  }
}

