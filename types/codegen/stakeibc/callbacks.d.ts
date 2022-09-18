import { Coin } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** ---------------------- Delegation Callbacks ---------------------- // */
export interface SplitDelegation {
    validator: string;
    amount: Long;
}
export interface DelegateCallback {
    hostZoneId: string;
    depositRecordId: Long;
    splitDelegations: SplitDelegation[];
}
export interface ClaimCallback {
    userRedemptionRecordId: string;
    chainId: string;
    epochNumber: Long;
}
/** ---------------------- Reinvest Callback ---------------------- // */
export interface ReinvestCallback {
    reinvestAmount: Coin;
    hostZoneId: string;
}
/** ---------------------- Undelegation Callbacks ---------------------- // */
export interface UndelegateCallback {
    hostZoneId: string;
    splitDelegations: SplitDelegation[];
    epochUnbondingRecordIds: Long[];
}
/** ---------------------- Redemption Callbacks ---------------------- // */
export interface RedemptionCallback {
    hostZoneId: string;
    epochUnbondingRecordIds: Long[];
}
export declare const SplitDelegation: {
    encode(message: SplitDelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SplitDelegation;
    fromJSON(object: any): SplitDelegation;
    toJSON(message: SplitDelegation): unknown;
    fromPartial(object: DeepPartial<SplitDelegation>): SplitDelegation;
};
export declare const DelegateCallback: {
    encode(message: DelegateCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegateCallback;
    fromJSON(object: any): DelegateCallback;
    toJSON(message: DelegateCallback): unknown;
    fromPartial(object: DeepPartial<DelegateCallback>): DelegateCallback;
};
export declare const ClaimCallback: {
    encode(message: ClaimCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimCallback;
    fromJSON(object: any): ClaimCallback;
    toJSON(message: ClaimCallback): unknown;
    fromPartial(object: DeepPartial<ClaimCallback>): ClaimCallback;
};
export declare const ReinvestCallback: {
    encode(message: ReinvestCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReinvestCallback;
    fromJSON(object: any): ReinvestCallback;
    toJSON(message: ReinvestCallback): unknown;
    fromPartial(object: DeepPartial<ReinvestCallback>): ReinvestCallback;
};
export declare const UndelegateCallback: {
    encode(message: UndelegateCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UndelegateCallback;
    fromJSON(object: any): UndelegateCallback;
    toJSON(message: UndelegateCallback): unknown;
    fromPartial(object: DeepPartial<UndelegateCallback>): UndelegateCallback;
};
export declare const RedemptionCallback: {
    encode(message: RedemptionCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedemptionCallback;
    fromJSON(object: any): RedemptionCallback;
    toJSON(message: RedemptionCallback): unknown;
    fromPartial(object: DeepPartial<RedemptionCallback>): RedemptionCallback;
};
