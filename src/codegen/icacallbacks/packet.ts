import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface IcacallbacksPacketData {
  noData?: NoData;
}
export interface NoData {}

function createBaseIcacallbacksPacketData(): IcacallbacksPacketData {
  return {
    noData: undefined
  };
}

export const IcacallbacksPacketData = {
  encode(message: IcacallbacksPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IcacallbacksPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIcacallbacksPacketData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IcacallbacksPacketData {
    return {
      noData: isSet(object.noData) ? NoData.fromJSON(object.noData) : undefined
    };
  },

  toJSON(message: IcacallbacksPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined && (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<IcacallbacksPacketData>): IcacallbacksPacketData {
    const message = createBaseIcacallbacksPacketData();
    message.noData = object.noData !== undefined && object.noData !== null ? NoData.fromPartial(object.noData) : undefined;
    return message;
  }

};

function createBaseNoData(): NoData {
  return {};
}

export const NoData = {
  encode(_: NoData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoData();

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

  fromJSON(_: any): NoData {
    return {};
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = createBaseNoData();
    return message;
  }

};