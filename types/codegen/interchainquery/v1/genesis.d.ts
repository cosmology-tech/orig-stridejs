import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Query {
    id: string;
    connection_id: string;
    chain_id: string;
    query_type: string;
    request: Uint8Array;
    period: string;
    last_height: string;
    callback_id: string;
    ttl: Long;
    height: Long;
}
export interface DataPoint {
    id: string;
    remote_height: string;
    local_height: string;
    value: Uint8Array;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
    queries: Query[];
}
export declare const Query: {
    encode(message: Query, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Query;
    fromJSON(object: any): Query;
    toJSON(message: Query): unknown;
    fromPartial(object: DeepPartial<Query>): Query;
};
export declare const DataPoint: {
    encode(message: DataPoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataPoint;
    fromJSON(object: any): DataPoint;
    toJSON(message: DataPoint): unknown;
    fromPartial(object: DeepPartial<DataPoint>): DataPoint;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
