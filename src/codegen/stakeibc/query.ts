import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Validator } from "./validator";
import { ICAAccount } from "./ica_account";
import { HostZone } from "./host_zone";
import { EpochTracker } from "./epoch_tracker";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** QueryInterchainAccountFromAddressRequest is the request type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressRequest {
  owner: string;
  connection_id: string;
}

/** QueryInterchainAccountFromAddressResponse the response type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressResponse {
  interchain_account_address: string;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryGetValidatorsRequest {
  chain_id: string;
}
export interface QueryGetValidatorsResponse {
  validators: Validator[];
}
export interface QueryGetICAAccountRequest {}
export interface QueryGetICAAccountResponse {
  ICAAccount: ICAAccount;
}
export interface QueryGetHostZoneRequest {
  chain_id: string;
}
export interface QueryGetHostZoneResponse {
  HostZone: HostZone;
}
export interface QueryAllHostZoneRequest {
  pagination?: PageRequest;
}
export interface QueryAllHostZoneResponse {
  HostZone: HostZone[];
  pagination?: PageResponse;
}
export interface QueryModuleAddressRequest {
  name: string;
}
export interface QueryModuleAddressResponse {
  addr: string;
}
export interface QueryGetEpochTrackerRequest {
  epochIdentifier: string;
}
export interface QueryGetEpochTrackerResponse {
  epochTracker: EpochTracker;
}
export interface QueryAllEpochTrackerRequest {
  pagination?: PageRequest;
}
export interface QueryAllEpochTrackerResponse {
  epochTracker: EpochTracker[];
  pagination?: PageResponse;
}

function createBaseQueryInterchainAccountFromAddressRequest(): QueryInterchainAccountFromAddressRequest {
  return {
    owner: "",
    connection_id: ""
  };
}

export const QueryInterchainAccountFromAddressRequest = {
  encode(message: QueryInterchainAccountFromAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.connection_id !== "") {
      writer.uint32(18).string(message.connection_id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountFromAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountFromAddressRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.connection_id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryInterchainAccountFromAddressRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : ""
    };
  },

  toJSON(message: QueryInterchainAccountFromAddressRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connection_id !== undefined && (obj.connection_id = message.connection_id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryInterchainAccountFromAddressRequest>): QueryInterchainAccountFromAddressRequest {
    const message = createBaseQueryInterchainAccountFromAddressRequest();
    message.owner = object.owner ?? "";
    message.connection_id = object.connection_id ?? "";
    return message;
  }

};

function createBaseQueryInterchainAccountFromAddressResponse(): QueryInterchainAccountFromAddressResponse {
  return {
    interchain_account_address: ""
  };
}

export const QueryInterchainAccountFromAddressResponse = {
  encode(message: QueryInterchainAccountFromAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interchain_account_address !== "") {
      writer.uint32(10).string(message.interchain_account_address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountFromAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountFromAddressResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.interchain_account_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryInterchainAccountFromAddressResponse {
    return {
      interchain_account_address: isSet(object.interchain_account_address) ? String(object.interchain_account_address) : ""
    };
  },

  toJSON(message: QueryInterchainAccountFromAddressResponse): unknown {
    const obj: any = {};
    message.interchain_account_address !== undefined && (obj.interchain_account_address = message.interchain_account_address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryInterchainAccountFromAddressResponse>): QueryInterchainAccountFromAddressResponse {
    const message = createBaseQueryInterchainAccountFromAddressResponse();
    message.interchain_account_address = object.interchain_account_address ?? "";
    return message;
  }

};

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

function createBaseQueryGetValidatorsRequest(): QueryGetValidatorsRequest {
  return {
    chain_id: ""
  };
}

export const QueryGetValidatorsRequest = {
  encode(message: QueryGetValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetValidatorsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetValidatorsRequest {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : ""
    };
  },

  toJSON(message: QueryGetValidatorsRequest): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetValidatorsRequest>): QueryGetValidatorsRequest {
    const message = createBaseQueryGetValidatorsRequest();
    message.chain_id = object.chain_id ?? "";
    return message;
  }

};

function createBaseQueryGetValidatorsResponse(): QueryGetValidatorsResponse {
  return {
    validators: []
  };
}

export const QueryGetValidatorsResponse = {
  encode(message: QueryGetValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetValidatorsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryGetValidatorsResponse): unknown {
    const obj: any = {};

    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetValidatorsResponse>): QueryGetValidatorsResponse {
    const message = createBaseQueryGetValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryGetICAAccountRequest(): QueryGetICAAccountRequest {
  return {};
}

export const QueryGetICAAccountRequest = {
  encode(_: QueryGetICAAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetICAAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetICAAccountRequest();

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

  fromJSON(_: any): QueryGetICAAccountRequest {
    return {};
  },

  toJSON(_: QueryGetICAAccountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGetICAAccountRequest>): QueryGetICAAccountRequest {
    const message = createBaseQueryGetICAAccountRequest();
    return message;
  }

};

function createBaseQueryGetICAAccountResponse(): QueryGetICAAccountResponse {
  return {
    ICAAccount: undefined
  };
}

export const QueryGetICAAccountResponse = {
  encode(message: QueryGetICAAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ICAAccount !== undefined) {
      ICAAccount.encode(message.ICAAccount, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetICAAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetICAAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ICAAccount = ICAAccount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetICAAccountResponse {
    return {
      ICAAccount: isSet(object.ICAAccount) ? ICAAccount.fromJSON(object.ICAAccount) : undefined
    };
  },

  toJSON(message: QueryGetICAAccountResponse): unknown {
    const obj: any = {};
    message.ICAAccount !== undefined && (obj.ICAAccount = message.ICAAccount ? ICAAccount.toJSON(message.ICAAccount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetICAAccountResponse>): QueryGetICAAccountResponse {
    const message = createBaseQueryGetICAAccountResponse();
    message.ICAAccount = object.ICAAccount !== undefined && object.ICAAccount !== null ? ICAAccount.fromPartial(object.ICAAccount) : undefined;
    return message;
  }

};

function createBaseQueryGetHostZoneRequest(): QueryGetHostZoneRequest {
  return {
    chain_id: ""
  };
}

export const QueryGetHostZoneRequest = {
  encode(message: QueryGetHostZoneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHostZoneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHostZoneRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetHostZoneRequest {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : ""
    };
  },

  toJSON(message: QueryGetHostZoneRequest): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetHostZoneRequest>): QueryGetHostZoneRequest {
    const message = createBaseQueryGetHostZoneRequest();
    message.chain_id = object.chain_id ?? "";
    return message;
  }

};

function createBaseQueryGetHostZoneResponse(): QueryGetHostZoneResponse {
  return {
    HostZone: undefined
  };
}

export const QueryGetHostZoneResponse = {
  encode(message: QueryGetHostZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.HostZone !== undefined) {
      HostZone.encode(message.HostZone, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHostZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHostZoneResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.HostZone = HostZone.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetHostZoneResponse {
    return {
      HostZone: isSet(object.HostZone) ? HostZone.fromJSON(object.HostZone) : undefined
    };
  },

  toJSON(message: QueryGetHostZoneResponse): unknown {
    const obj: any = {};
    message.HostZone !== undefined && (obj.HostZone = message.HostZone ? HostZone.toJSON(message.HostZone) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetHostZoneResponse>): QueryGetHostZoneResponse {
    const message = createBaseQueryGetHostZoneResponse();
    message.HostZone = object.HostZone !== undefined && object.HostZone !== null ? HostZone.fromPartial(object.HostZone) : undefined;
    return message;
  }

};

function createBaseQueryAllHostZoneRequest(): QueryAllHostZoneRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllHostZoneRequest = {
  encode(message: QueryAllHostZoneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHostZoneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostZoneRequest();

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

  fromJSON(object: any): QueryAllHostZoneRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllHostZoneRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllHostZoneRequest>): QueryAllHostZoneRequest {
    const message = createBaseQueryAllHostZoneRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllHostZoneResponse(): QueryAllHostZoneResponse {
  return {
    HostZone: [],
    pagination: undefined
  };
}

export const QueryAllHostZoneResponse = {
  encode(message: QueryAllHostZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.HostZone) {
      HostZone.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHostZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostZoneResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.HostZone.push(HostZone.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllHostZoneResponse {
    return {
      HostZone: Array.isArray(object?.HostZone) ? object.HostZone.map((e: any) => HostZone.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllHostZoneResponse): unknown {
    const obj: any = {};

    if (message.HostZone) {
      obj.HostZone = message.HostZone.map(e => e ? HostZone.toJSON(e) : undefined);
    } else {
      obj.HostZone = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllHostZoneResponse>): QueryAllHostZoneResponse {
    const message = createBaseQueryAllHostZoneResponse();
    message.HostZone = object.HostZone?.map(e => HostZone.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryModuleAddressRequest(): QueryModuleAddressRequest {
  return {
    name: ""
  };
}

export const QueryModuleAddressRequest = {
  encode(message: QueryModuleAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAddressRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryModuleAddressRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: QueryModuleAddressRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryModuleAddressRequest>): QueryModuleAddressRequest {
    const message = createBaseQueryModuleAddressRequest();
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseQueryModuleAddressResponse(): QueryModuleAddressResponse {
  return {
    addr: ""
  };
}

export const QueryModuleAddressResponse = {
  encode(message: QueryModuleAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAddressResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryModuleAddressResponse {
    return {
      addr: isSet(object.addr) ? String(object.addr) : ""
    };
  },

  toJSON(message: QueryModuleAddressResponse): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryModuleAddressResponse>): QueryModuleAddressResponse {
    const message = createBaseQueryModuleAddressResponse();
    message.addr = object.addr ?? "";
    return message;
  }

};

function createBaseQueryGetEpochTrackerRequest(): QueryGetEpochTrackerRequest {
  return {
    epochIdentifier: ""
  };
}

export const QueryGetEpochTrackerRequest = {
  encode(message: QueryGetEpochTrackerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochIdentifier !== "") {
      writer.uint32(10).string(message.epochIdentifier);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochTrackerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochTrackerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epochIdentifier = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetEpochTrackerRequest {
    return {
      epochIdentifier: isSet(object.epochIdentifier) ? String(object.epochIdentifier) : ""
    };
  },

  toJSON(message: QueryGetEpochTrackerRequest): unknown {
    const obj: any = {};
    message.epochIdentifier !== undefined && (obj.epochIdentifier = message.epochIdentifier);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetEpochTrackerRequest>): QueryGetEpochTrackerRequest {
    const message = createBaseQueryGetEpochTrackerRequest();
    message.epochIdentifier = object.epochIdentifier ?? "";
    return message;
  }

};

function createBaseQueryGetEpochTrackerResponse(): QueryGetEpochTrackerResponse {
  return {
    epochTracker: undefined
  };
}

export const QueryGetEpochTrackerResponse = {
  encode(message: QueryGetEpochTrackerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochTracker !== undefined) {
      EpochTracker.encode(message.epochTracker, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochTrackerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochTrackerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epochTracker = EpochTracker.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetEpochTrackerResponse {
    return {
      epochTracker: isSet(object.epochTracker) ? EpochTracker.fromJSON(object.epochTracker) : undefined
    };
  },

  toJSON(message: QueryGetEpochTrackerResponse): unknown {
    const obj: any = {};
    message.epochTracker !== undefined && (obj.epochTracker = message.epochTracker ? EpochTracker.toJSON(message.epochTracker) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetEpochTrackerResponse>): QueryGetEpochTrackerResponse {
    const message = createBaseQueryGetEpochTrackerResponse();
    message.epochTracker = object.epochTracker !== undefined && object.epochTracker !== null ? EpochTracker.fromPartial(object.epochTracker) : undefined;
    return message;
  }

};

function createBaseQueryAllEpochTrackerRequest(): QueryAllEpochTrackerRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllEpochTrackerRequest = {
  encode(message: QueryAllEpochTrackerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochTrackerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochTrackerRequest();

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

  fromJSON(object: any): QueryAllEpochTrackerRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllEpochTrackerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllEpochTrackerRequest>): QueryAllEpochTrackerRequest {
    const message = createBaseQueryAllEpochTrackerRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllEpochTrackerResponse(): QueryAllEpochTrackerResponse {
  return {
    epochTracker: [],
    pagination: undefined
  };
}

export const QueryAllEpochTrackerResponse = {
  encode(message: QueryAllEpochTrackerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.epochTracker) {
      EpochTracker.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochTrackerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochTrackerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epochTracker.push(EpochTracker.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllEpochTrackerResponse {
    return {
      epochTracker: Array.isArray(object?.epochTracker) ? object.epochTracker.map((e: any) => EpochTracker.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllEpochTrackerResponse): unknown {
    const obj: any = {};

    if (message.epochTracker) {
      obj.epochTracker = message.epochTracker.map(e => e ? EpochTracker.toJSON(e) : undefined);
    } else {
      obj.epochTracker = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllEpochTrackerResponse>): QueryAllEpochTrackerResponse {
    const message = createBaseQueryAllEpochTrackerResponse();
    message.epochTracker = object.epochTracker?.map(e => EpochTracker.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};