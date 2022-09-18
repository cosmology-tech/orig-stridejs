import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface StakeibcPacketData {
    noData?: NoData;
}
export interface NoData {
}
export declare const StakeibcPacketData: {
    encode(message: StakeibcPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakeibcPacketData;
    fromJSON(object: any): StakeibcPacketData;
    toJSON(message: StakeibcPacketData): unknown;
    fromPartial(object: DeepPartial<StakeibcPacketData>): StakeibcPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoData;
    fromJSON(_: any): NoData;
    toJSON(_: NoData): unknown;
    fromPartial(_: DeepPartial<NoData>): NoData;
};
