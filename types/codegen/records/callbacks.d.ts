import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** ---------------------- Transfer Callback ---------------------- // */
export interface TransferCallback {
    depositRecordId: Long;
}
export declare const TransferCallback: {
    encode(message: TransferCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferCallback;
    fromJSON(object: any): TransferCallback;
    toJSON(message: TransferCallback): unknown;
    fromPartial(object: DeepPartial<TransferCallback>): TransferCallback;
};
