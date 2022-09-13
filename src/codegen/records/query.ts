import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params, DepositRecord, UserRedemptionRecord, EpochUnbondingRecord } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long } from "@osmonauts/helpers";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryGetDepositRecordRequest {
  id: Long;
}
export interface QueryGetDepositRecordResponse {
  DepositRecord: DepositRecord;
}
export interface QueryAllDepositRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllDepositRecordResponse {
  DepositRecord: DepositRecord[];
  pagination?: PageResponse;
}
export interface QueryGetUserRedemptionRecordRequest {
  id: string;
}
export interface QueryGetUserRedemptionRecordResponse {
  UserRedemptionRecord: UserRedemptionRecord;
}
export interface QueryAllUserRedemptionRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllUserRedemptionRecordResponse {
  UserRedemptionRecord: UserRedemptionRecord[];
  pagination?: PageResponse;
}

/** Query UserRedemptionRecords by chainId / userId pair */
export interface QueryAllUserRedemptionRecordForUserRequest {
  chainId: string;
  day: Long;
  address: string;
  limit: Long;
  pagination?: PageRequest;
}
export interface QueryAllUserRedemptionRecordForUserResponse {
  UserRedemptionRecord: UserRedemptionRecord[];
  pagination?: PageResponse;
}
export interface QueryGetEpochUnbondingRecordRequest {
  epochNumber: Long;
}
export interface QueryGetEpochUnbondingRecordResponse {
  EpochUnbondingRecord: EpochUnbondingRecord;
}
export interface QueryAllEpochUnbondingRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllEpochUnbondingRecordResponse {
  EpochUnbondingRecord: EpochUnbondingRecord[];
  pagination?: PageResponse;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryGetDepositRecordRequest(): QueryGetDepositRecordRequest {
  return {
    id: Long.UZERO
  };
}

export const QueryGetDepositRecordRequest = {
  encode(message: QueryGetDepositRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDepositRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetDepositRecordRequest {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO
    };
  },

  toJSON(message: QueryGetDepositRecordRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetDepositRecordRequest>): QueryGetDepositRecordRequest {
    const message = createBaseQueryGetDepositRecordRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryGetDepositRecordResponse(): QueryGetDepositRecordResponse {
  return {
    DepositRecord: undefined
  };
}

export const QueryGetDepositRecordResponse = {
  encode(message: QueryGetDepositRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.DepositRecord !== undefined) {
      DepositRecord.encode(message.DepositRecord, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDepositRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.DepositRecord = DepositRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetDepositRecordResponse {
    return {
      DepositRecord: isSet(object.DepositRecord) ? DepositRecord.fromJSON(object.DepositRecord) : undefined
    };
  },

  toJSON(message: QueryGetDepositRecordResponse): unknown {
    const obj: any = {};
    message.DepositRecord !== undefined && (obj.DepositRecord = message.DepositRecord ? DepositRecord.toJSON(message.DepositRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetDepositRecordResponse>): QueryGetDepositRecordResponse {
    const message = createBaseQueryGetDepositRecordResponse();
    message.DepositRecord = object.DepositRecord !== undefined && object.DepositRecord !== null ? DepositRecord.fromPartial(object.DepositRecord) : undefined;
    return message;
  }

};

function createBaseQueryAllDepositRecordRequest(): QueryAllDepositRecordRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllDepositRecordRequest = {
  encode(message: QueryAllDepositRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDepositRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDepositRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllDepositRecordRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllDepositRecordRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllDepositRecordRequest>): QueryAllDepositRecordRequest {
    const message = createBaseQueryAllDepositRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllDepositRecordResponse(): QueryAllDepositRecordResponse {
  return {
    DepositRecord: [],
    pagination: undefined
  };
}

export const QueryAllDepositRecordResponse = {
  encode(message: QueryAllDepositRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.DepositRecord) {
      DepositRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDepositRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDepositRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.DepositRecord.push(DepositRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllDepositRecordResponse {
    return {
      DepositRecord: Array.isArray(object?.DepositRecord) ? object.DepositRecord.map((e: any) => DepositRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllDepositRecordResponse): unknown {
    const obj: any = {};

    if (message.DepositRecord) {
      obj.DepositRecord = message.DepositRecord.map(e => e ? DepositRecord.toJSON(e) : undefined);
    } else {
      obj.DepositRecord = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllDepositRecordResponse>): QueryAllDepositRecordResponse {
    const message = createBaseQueryAllDepositRecordResponse();
    message.DepositRecord = object.DepositRecord?.map(e => DepositRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetUserRedemptionRecordRequest(): QueryGetUserRedemptionRecordRequest {
  return {
    id: ""
  };
}

export const QueryGetUserRedemptionRecordRequest = {
  encode(message: QueryGetUserRedemptionRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserRedemptionRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserRedemptionRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetUserRedemptionRecordRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryGetUserRedemptionRecordRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetUserRedemptionRecordRequest>): QueryGetUserRedemptionRecordRequest {
    const message = createBaseQueryGetUserRedemptionRecordRequest();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryGetUserRedemptionRecordResponse(): QueryGetUserRedemptionRecordResponse {
  return {
    UserRedemptionRecord: undefined
  };
}

export const QueryGetUserRedemptionRecordResponse = {
  encode(message: QueryGetUserRedemptionRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.UserRedemptionRecord !== undefined) {
      UserRedemptionRecord.encode(message.UserRedemptionRecord, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserRedemptionRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserRedemptionRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.UserRedemptionRecord = UserRedemptionRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetUserRedemptionRecordResponse {
    return {
      UserRedemptionRecord: isSet(object.UserRedemptionRecord) ? UserRedemptionRecord.fromJSON(object.UserRedemptionRecord) : undefined
    };
  },

  toJSON(message: QueryGetUserRedemptionRecordResponse): unknown {
    const obj: any = {};
    message.UserRedemptionRecord !== undefined && (obj.UserRedemptionRecord = message.UserRedemptionRecord ? UserRedemptionRecord.toJSON(message.UserRedemptionRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetUserRedemptionRecordResponse>): QueryGetUserRedemptionRecordResponse {
    const message = createBaseQueryGetUserRedemptionRecordResponse();
    message.UserRedemptionRecord = object.UserRedemptionRecord !== undefined && object.UserRedemptionRecord !== null ? UserRedemptionRecord.fromPartial(object.UserRedemptionRecord) : undefined;
    return message;
  }

};

function createBaseQueryAllUserRedemptionRecordRequest(): QueryAllUserRedemptionRecordRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllUserRedemptionRecordRequest = {
  encode(message: QueryAllUserRedemptionRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRedemptionRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllUserRedemptionRecordRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllUserRedemptionRecordRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllUserRedemptionRecordRequest>): QueryAllUserRedemptionRecordRequest {
    const message = createBaseQueryAllUserRedemptionRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllUserRedemptionRecordResponse(): QueryAllUserRedemptionRecordResponse {
  return {
    UserRedemptionRecord: [],
    pagination: undefined
  };
}

export const QueryAllUserRedemptionRecordResponse = {
  encode(message: QueryAllUserRedemptionRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.UserRedemptionRecord) {
      UserRedemptionRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRedemptionRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.UserRedemptionRecord.push(UserRedemptionRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllUserRedemptionRecordResponse {
    return {
      UserRedemptionRecord: Array.isArray(object?.UserRedemptionRecord) ? object.UserRedemptionRecord.map((e: any) => UserRedemptionRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllUserRedemptionRecordResponse): unknown {
    const obj: any = {};

    if (message.UserRedemptionRecord) {
      obj.UserRedemptionRecord = message.UserRedemptionRecord.map(e => e ? UserRedemptionRecord.toJSON(e) : undefined);
    } else {
      obj.UserRedemptionRecord = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllUserRedemptionRecordResponse>): QueryAllUserRedemptionRecordResponse {
    const message = createBaseQueryAllUserRedemptionRecordResponse();
    message.UserRedemptionRecord = object.UserRedemptionRecord?.map(e => UserRedemptionRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllUserRedemptionRecordForUserRequest(): QueryAllUserRedemptionRecordForUserRequest {
  return {
    chainId: "",
    day: Long.UZERO,
    address: "",
    limit: Long.UZERO,
    pagination: undefined
  };
}

export const QueryAllUserRedemptionRecordForUserRequest = {
  encode(message: QueryAllUserRedemptionRecordForUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    if (!message.day.isZero()) {
      writer.uint32(16).uint64(message.day);
    }

    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }

    if (!message.limit.isZero()) {
      writer.uint32(32).uint64(message.limit);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordForUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRedemptionRecordForUserRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        case 2:
          message.day = (reader.uint64() as Long);
          break;

        case 3:
          message.address = reader.string();
          break;

        case 4:
          message.limit = (reader.uint64() as Long);
          break;

        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllUserRedemptionRecordForUserRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      day: isSet(object.day) ? Long.fromString(object.day) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      limit: isSet(object.limit) ? Long.fromString(object.limit) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllUserRedemptionRecordForUserRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.day !== undefined && (obj.day = (message.day || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.limit !== undefined && (obj.limit = (message.limit || Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllUserRedemptionRecordForUserRequest>): QueryAllUserRedemptionRecordForUserRequest {
    const message = createBaseQueryAllUserRedemptionRecordForUserRequest();
    message.chainId = object.chainId ?? "";
    message.day = object.day !== undefined && object.day !== null ? Long.fromValue(object.day) : Long.UZERO;
    message.address = object.address ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllUserRedemptionRecordForUserResponse(): QueryAllUserRedemptionRecordForUserResponse {
  return {
    UserRedemptionRecord: [],
    pagination: undefined
  };
}

export const QueryAllUserRedemptionRecordForUserResponse = {
  encode(message: QueryAllUserRedemptionRecordForUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.UserRedemptionRecord) {
      UserRedemptionRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordForUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRedemptionRecordForUserResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.UserRedemptionRecord.push(UserRedemptionRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllUserRedemptionRecordForUserResponse {
    return {
      UserRedemptionRecord: Array.isArray(object?.UserRedemptionRecord) ? object.UserRedemptionRecord.map((e: any) => UserRedemptionRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllUserRedemptionRecordForUserResponse): unknown {
    const obj: any = {};

    if (message.UserRedemptionRecord) {
      obj.UserRedemptionRecord = message.UserRedemptionRecord.map(e => e ? UserRedemptionRecord.toJSON(e) : undefined);
    } else {
      obj.UserRedemptionRecord = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllUserRedemptionRecordForUserResponse>): QueryAllUserRedemptionRecordForUserResponse {
    const message = createBaseQueryAllUserRedemptionRecordForUserResponse();
    message.UserRedemptionRecord = object.UserRedemptionRecord?.map(e => UserRedemptionRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetEpochUnbondingRecordRequest(): QueryGetEpochUnbondingRecordRequest {
  return {
    epochNumber: Long.UZERO
  };
}

export const QueryGetEpochUnbondingRecordRequest = {
  encode(message: QueryGetEpochUnbondingRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).uint64(message.epochNumber);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochUnbondingRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochUnbondingRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epochNumber = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetEpochUnbondingRecordRequest {
    return {
      epochNumber: isSet(object.epochNumber) ? Long.fromString(object.epochNumber) : Long.UZERO
    };
  },

  toJSON(message: QueryGetEpochUnbondingRecordRequest): unknown {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetEpochUnbondingRecordRequest>): QueryGetEpochUnbondingRecordRequest {
    const message = createBaseQueryGetEpochUnbondingRecordRequest();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    return message;
  }

};

function createBaseQueryGetEpochUnbondingRecordResponse(): QueryGetEpochUnbondingRecordResponse {
  return {
    EpochUnbondingRecord: undefined
  };
}

export const QueryGetEpochUnbondingRecordResponse = {
  encode(message: QueryGetEpochUnbondingRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.EpochUnbondingRecord !== undefined) {
      EpochUnbondingRecord.encode(message.EpochUnbondingRecord, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochUnbondingRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochUnbondingRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.EpochUnbondingRecord = EpochUnbondingRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetEpochUnbondingRecordResponse {
    return {
      EpochUnbondingRecord: isSet(object.EpochUnbondingRecord) ? EpochUnbondingRecord.fromJSON(object.EpochUnbondingRecord) : undefined
    };
  },

  toJSON(message: QueryGetEpochUnbondingRecordResponse): unknown {
    const obj: any = {};
    message.EpochUnbondingRecord !== undefined && (obj.EpochUnbondingRecord = message.EpochUnbondingRecord ? EpochUnbondingRecord.toJSON(message.EpochUnbondingRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetEpochUnbondingRecordResponse>): QueryGetEpochUnbondingRecordResponse {
    const message = createBaseQueryGetEpochUnbondingRecordResponse();
    message.EpochUnbondingRecord = object.EpochUnbondingRecord !== undefined && object.EpochUnbondingRecord !== null ? EpochUnbondingRecord.fromPartial(object.EpochUnbondingRecord) : undefined;
    return message;
  }

};

function createBaseQueryAllEpochUnbondingRecordRequest(): QueryAllEpochUnbondingRecordRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllEpochUnbondingRecordRequest = {
  encode(message: QueryAllEpochUnbondingRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochUnbondingRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochUnbondingRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllEpochUnbondingRecordRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllEpochUnbondingRecordRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllEpochUnbondingRecordRequest>): QueryAllEpochUnbondingRecordRequest {
    const message = createBaseQueryAllEpochUnbondingRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllEpochUnbondingRecordResponse(): QueryAllEpochUnbondingRecordResponse {
  return {
    EpochUnbondingRecord: [],
    pagination: undefined
  };
}

export const QueryAllEpochUnbondingRecordResponse = {
  encode(message: QueryAllEpochUnbondingRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.EpochUnbondingRecord) {
      EpochUnbondingRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochUnbondingRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochUnbondingRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.EpochUnbondingRecord.push(EpochUnbondingRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllEpochUnbondingRecordResponse {
    return {
      EpochUnbondingRecord: Array.isArray(object?.EpochUnbondingRecord) ? object.EpochUnbondingRecord.map((e: any) => EpochUnbondingRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllEpochUnbondingRecordResponse): unknown {
    const obj: any = {};

    if (message.EpochUnbondingRecord) {
      obj.EpochUnbondingRecord = message.EpochUnbondingRecord.map(e => e ? EpochUnbondingRecord.toJSON(e) : undefined);
    } else {
      obj.EpochUnbondingRecord = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllEpochUnbondingRecordResponse>): QueryAllEpochUnbondingRecordResponse {
    const message = createBaseQueryAllEpochUnbondingRecordResponse();
    message.EpochUnbondingRecord = object.EpochUnbondingRecord?.map(e => EpochUnbondingRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};