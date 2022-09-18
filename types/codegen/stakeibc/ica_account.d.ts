import { Delegation } from "./delegation";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export declare enum ICAAccountType {
    DELEGATION = 0,
    FEE = 1,
    WITHDRAWAL = 2,
    REDEMPTION = 3,
    UNRECOGNIZED = -1
}
export declare function iCAAccountTypeFromJSON(object: any): ICAAccountType;
export declare function iCAAccountTypeToJSON(object: ICAAccountType): string;
/** TODO(TEST-XX): Update these fields to be more useful (e.g. balances should be coins, maybe store port name directly) */
export interface ICAAccount {
    address: string;
    delegations: Delegation[];
    target: ICAAccountType;
}
export declare const ICAAccount: {
    encode(message: ICAAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ICAAccount;
    fromJSON(object: any): ICAAccount;
    toJSON(message: ICAAccount): unknown;
    fromPartial(object: DeepPartial<ICAAccount>): ICAAccount;
};
