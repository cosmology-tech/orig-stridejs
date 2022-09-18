import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export declare enum Validator_ValidatorStatus {
    Active = 0,
    Inactive = 1,
    UNRECOGNIZED = -1
}
export declare function validator_ValidatorStatusFromJSON(object: any): Validator_ValidatorStatus;
export declare function validator_ValidatorStatusToJSON(object: Validator_ValidatorStatus): string;
export interface ValidatorExchangeRate {
    internalTokensToSharesRate: string;
    epochNumber: Long;
}
export interface Validator {
    name: string;
    address: string;
    status: Validator_ValidatorStatus;
    commissionRate: Long;
    delegationAmt: Long;
    weight: Long;
    internalExchangeRate: ValidatorExchangeRate;
}
export declare const ValidatorExchangeRate: {
    encode(message: ValidatorExchangeRate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorExchangeRate;
    fromJSON(object: any): ValidatorExchangeRate;
    toJSON(message: ValidatorExchangeRate): unknown;
    fromPartial(object: DeepPartial<ValidatorExchangeRate>): ValidatorExchangeRate;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial(object: DeepPartial<Validator>): Validator;
};
