import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface IcacallbacksPacketData {
    noData?: NoData;
}
export interface NoData {
}
export declare const IcacallbacksPacketData: {
    encode(message: IcacallbacksPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IcacallbacksPacketData;
    fromJSON(object: any): IcacallbacksPacketData;
    toJSON(message: IcacallbacksPacketData): unknown;
    fromPartial(object: DeepPartial<IcacallbacksPacketData>): IcacallbacksPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoData;
    fromJSON(_: any): NoData;
    toJSON(_: NoData): unknown;
    fromPartial(_: DeepPartial<NoData>): NoData;
};
