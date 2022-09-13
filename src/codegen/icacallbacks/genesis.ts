import { Params } from "./params";
import { CallbackData } from "./callback_data";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** GenesisState defines the icacallbacks module's genesis state. */
export interface GenesisState {
  params: Params;
  port_id: string;
  callbackDataList: CallbackData[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    port_id: "",
    callbackDataList: []
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

    for (const v of message.callbackDataList) {
      CallbackData.encode(v!, writer.uint32(26).fork()).ldelim();
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

        case 3:
          message.callbackDataList.push(CallbackData.decode(reader, reader.uint32()));
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
      callbackDataList: Array.isArray(object?.callbackDataList) ? object.callbackDataList.map((e: any) => CallbackData.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.port_id !== undefined && (obj.port_id = message.port_id);

    if (message.callbackDataList) {
      obj.callbackDataList = message.callbackDataList.map(e => e ? CallbackData.toJSON(e) : undefined);
    } else {
      obj.callbackDataList = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.port_id = object.port_id ?? "";
    message.callbackDataList = object.callbackDataList?.map(e => CallbackData.fromPartial(e)) || [];
    return message;
  }

};