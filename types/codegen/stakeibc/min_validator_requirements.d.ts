import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface MinValidatorRequirements {
    commissionRate: number;
    uptime: number;
}
export interface MinValidatorRequirementsSDKType {
    commissionRate: number;
    uptime: number;
}
export declare const MinValidatorRequirements: {
    encode(message: MinValidatorRequirements, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MinValidatorRequirements;
    fromPartial(object: DeepPartial<MinValidatorRequirements>): MinValidatorRequirements;
};
