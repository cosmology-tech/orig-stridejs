import { Params } from "./params";
import { ICAAccount } from "./ica_account";
import { HostZone } from "./host_zone";
import { EpochTracker } from "./epoch_tracker";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long, isObject } from "@osmonauts/helpers";
export interface GenesisState_DenomToHostZoneEntry {
  key: string;
  value: string;
}

/** GenesisState defines the stakeibc module's genesis state. */
export interface GenesisState {
  params: Params;
  port_id: string;

  /** list of zones that are registered by the protocol */
  iCAAccount: ICAAccount;
  hostZoneList: HostZone[];
  hostZoneCount: Long;

  /** stores a map from hostZone base denom to hostZone */
  denomToHostZone: {
    [key: string]: string;
  };
  epochTrackerList: EpochTracker[];
}

function createBaseGenesisState_DenomToHostZoneEntry(): GenesisState_DenomToHostZoneEntry {
  return {
    key: "",
    value: ""
  };
}

export const GenesisState_DenomToHostZoneEntry = {
  encode(message: GenesisState_DenomToHostZoneEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_DenomToHostZoneEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_DenomToHostZoneEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState_DenomToHostZoneEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: GenesisState_DenomToHostZoneEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState_DenomToHostZoneEntry>): GenesisState_DenomToHostZoneEntry {
    const message = createBaseGenesisState_DenomToHostZoneEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    port_id: "",
    iCAAccount: undefined,
    hostZoneList: [],
    hostZoneCount: Long.UZERO,
    denomToHostZone: {},
    epochTrackerList: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.port_id !== "") {
      writer.uint32(18).string(message.port_id);
    }

    if (message.iCAAccount !== undefined) {
      ICAAccount.encode(message.iCAAccount, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.hostZoneList) {
      HostZone.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (!message.hostZoneCount.isZero()) {
      writer.uint32(48).uint64(message.hostZoneCount);
    }

    Object.entries(message.denomToHostZone).forEach(([key, value]) => {
      GenesisState_DenomToHostZoneEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(74).fork()).ldelim();
    });

    for (const v of message.epochTrackerList) {
      EpochTracker.encode(v!, writer.uint32(82).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.port_id = reader.string();
          break;

        case 4:
          message.iCAAccount = ICAAccount.decode(reader, reader.uint32());
          break;

        case 5:
          message.hostZoneList.push(HostZone.decode(reader, reader.uint32()));
          break;

        case 6:
          message.hostZoneCount = (reader.uint64() as Long);
          break;

        case 9:
          const entry9 = GenesisState_DenomToHostZoneEntry.decode(reader, reader.uint32());

          if (entry9.value !== undefined) {
            message.denomToHostZone[entry9.key] = entry9.value;
          }

          break;

        case 10:
          message.epochTrackerList.push(EpochTracker.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      iCAAccount: isSet(object.iCAAccount) ? ICAAccount.fromJSON(object.iCAAccount) : undefined,
      hostZoneList: Array.isArray(object?.hostZoneList) ? object.hostZoneList.map((e: any) => HostZone.fromJSON(e)) : [],
      hostZoneCount: isSet(object.hostZoneCount) ? Long.fromString(object.hostZoneCount) : Long.UZERO,
      denomToHostZone: isObject(object.denomToHostZone) ? Object.entries(object.denomToHostZone).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      epochTrackerList: Array.isArray(object?.epochTrackerList) ? object.epochTrackerList.map((e: any) => EpochTracker.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.iCAAccount !== undefined && (obj.iCAAccount = message.iCAAccount ? ICAAccount.toJSON(message.iCAAccount) : undefined);

    if (message.hostZoneList) {
      obj.hostZoneList = message.hostZoneList.map(e => e ? HostZone.toJSON(e) : undefined);
    } else {
      obj.hostZoneList = [];
    }

    message.hostZoneCount !== undefined && (obj.hostZoneCount = (message.hostZoneCount || Long.UZERO).toString());
    obj.denomToHostZone = {};

    if (message.denomToHostZone) {
      Object.entries(message.denomToHostZone).forEach(([k, v]) => {
        obj.denomToHostZone[k] = v;
      });
    }

    if (message.epochTrackerList) {
      obj.epochTrackerList = message.epochTrackerList.map(e => e ? EpochTracker.toJSON(e) : undefined);
    } else {
      obj.epochTrackerList = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.port_id = object.port_id ?? "";
    message.iCAAccount = object.iCAAccount !== undefined && object.iCAAccount !== null ? ICAAccount.fromPartial(object.iCAAccount) : undefined;
    message.hostZoneList = object.hostZoneList?.map(e => HostZone.fromPartial(e)) || [];
    message.hostZoneCount = object.hostZoneCount !== undefined && object.hostZoneCount !== null ? Long.fromValue(object.hostZoneCount) : Long.UZERO;
    message.denomToHostZone = Object.entries(object.denomToHostZone ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.epochTrackerList = object.epochTrackerList?.map(e => EpochTracker.fromPartial(e)) || [];
    return message;
  }

};