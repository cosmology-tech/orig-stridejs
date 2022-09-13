import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface Query {
  id: string;
  connection_id: string;
  chain_id: string;
  query_type: string;
  request: Uint8Array;
  period: string;
  last_height: string;
  callback_id: string;
  ttl: Long;
  height: Long;
}
export interface DataPoint {
  id: string;
  remote_height: string;
  local_height: string;
  value: Uint8Array;
}

/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
  queries: Query[];
}

function createBaseQuery(): Query {
  return {
    id: "",
    connection_id: "",
    chain_id: "",
    query_type: "",
    request: new Uint8Array(),
    period: "",
    last_height: "",
    callback_id: "",
    ttl: Long.UZERO,
    height: Long.ZERO
  };
}

export const Query = {
  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.connection_id !== "") {
      writer.uint32(18).string(message.connection_id);
    }

    if (message.chain_id !== "") {
      writer.uint32(26).string(message.chain_id);
    }

    if (message.query_type !== "") {
      writer.uint32(34).string(message.query_type);
    }

    if (message.request.length !== 0) {
      writer.uint32(42).bytes(message.request);
    }

    if (message.period !== "") {
      writer.uint32(50).string(message.period);
    }

    if (message.last_height !== "") {
      writer.uint32(58).string(message.last_height);
    }

    if (message.callback_id !== "") {
      writer.uint32(66).string(message.callback_id);
    }

    if (!message.ttl.isZero()) {
      writer.uint32(72).uint64(message.ttl);
    }

    if (!message.height.isZero()) {
      writer.uint32(80).int64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuery();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.connection_id = reader.string();
          break;

        case 3:
          message.chain_id = reader.string();
          break;

        case 4:
          message.query_type = reader.string();
          break;

        case 5:
          message.request = reader.bytes();
          break;

        case 6:
          message.period = reader.string();
          break;

        case 7:
          message.last_height = reader.string();
          break;

        case 8:
          message.callback_id = reader.string();
          break;

        case 9:
          message.ttl = (reader.uint64() as Long);
          break;

        case 10:
          message.height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Query {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      query_type: isSet(object.query_type) ? String(object.query_type) : "",
      request: isSet(object.request) ? bytesFromBase64(object.request) : new Uint8Array(),
      period: isSet(object.period) ? String(object.period) : "",
      last_height: isSet(object.last_height) ? String(object.last_height) : "",
      callback_id: isSet(object.callback_id) ? String(object.callback_id) : "",
      ttl: isSet(object.ttl) ? Long.fromString(object.ttl) : Long.UZERO,
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO
    };
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.connection_id !== undefined && (obj.connection_id = message.connection_id);
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.query_type !== undefined && (obj.query_type = message.query_type);
    message.request !== undefined && (obj.request = base64FromBytes(message.request !== undefined ? message.request : new Uint8Array()));
    message.period !== undefined && (obj.period = message.period);
    message.last_height !== undefined && (obj.last_height = message.last_height);
    message.callback_id !== undefined && (obj.callback_id = message.callback_id);
    message.ttl !== undefined && (obj.ttl = (message.ttl || Long.UZERO).toString());
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Query>): Query {
    const message = createBaseQuery();
    message.id = object.id ?? "";
    message.connection_id = object.connection_id ?? "";
    message.chain_id = object.chain_id ?? "";
    message.query_type = object.query_type ?? "";
    message.request = object.request ?? new Uint8Array();
    message.period = object.period ?? "";
    message.last_height = object.last_height ?? "";
    message.callback_id = object.callback_id ?? "";
    message.ttl = object.ttl !== undefined && object.ttl !== null ? Long.fromValue(object.ttl) : Long.UZERO;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }

};

function createBaseDataPoint(): DataPoint {
  return {
    id: "",
    remote_height: "",
    local_height: "",
    value: new Uint8Array()
  };
}

export const DataPoint = {
  encode(message: DataPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.remote_height !== "") {
      writer.uint32(18).string(message.remote_height);
    }

    if (message.local_height !== "") {
      writer.uint32(26).string(message.local_height);
    }

    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataPoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataPoint();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.remote_height = reader.string();
          break;

        case 3:
          message.local_height = reader.string();
          break;

        case 4:
          message.value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DataPoint {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      remote_height: isSet(object.remote_height) ? String(object.remote_height) : "",
      local_height: isSet(object.local_height) ? String(object.local_height) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },

  toJSON(message: DataPoint): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.remote_height !== undefined && (obj.remote_height = message.remote_height);
    message.local_height !== undefined && (obj.local_height = message.local_height);
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<DataPoint>): DataPoint {
    const message = createBaseDataPoint();
    message.id = object.id ?? "";
    message.remote_height = object.remote_height ?? "";
    message.local_height = object.local_height ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    queries: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queries) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.queries.push(Query.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      queries: Array.isArray(object?.queries) ? object.queries.map((e: any) => Query.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.queries) {
      obj.queries = message.queries.map(e => e ? Query.toJSON(e) : undefined);
    } else {
      obj.queries = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.queries = object.queries?.map(e => Query.fromPartial(e)) || [];
    return message;
  }

};