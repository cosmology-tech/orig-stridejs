import { Params } from "./params";
import { ICAAccount } from "./ica_account";
import { HostZone } from "./host_zone";
import { EpochTracker } from "./epoch_tracker";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
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
export declare const GenesisState_DenomToHostZoneEntry: {
    encode(message: GenesisState_DenomToHostZoneEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_DenomToHostZoneEntry;
    fromJSON(object: any): GenesisState_DenomToHostZoneEntry;
    toJSON(message: GenesisState_DenomToHostZoneEntry): unknown;
    fromPartial(object: DeepPartial<GenesisState_DenomToHostZoneEntry>): GenesisState_DenomToHostZoneEntry;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
