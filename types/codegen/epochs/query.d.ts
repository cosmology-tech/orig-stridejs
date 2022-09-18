import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { EpochInfo } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryEpochsInfoRequest {
    pagination?: PageRequest;
}
export interface QueryEpochsInfoResponse {
    epochs: EpochInfo[];
    pagination?: PageResponse;
}
export interface QueryCurrentEpochRequest {
    identifier: string;
}
export interface QueryCurrentEpochResponse {
    current_epoch: Long;
}
export interface QueryEpochInfoRequest {
    identifier: string;
}
export interface QueryEpochInfoResponse {
    epoch: EpochInfo;
}
export declare const QueryEpochsInfoRequest: {
    encode(message: QueryEpochsInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsInfoRequest;
    fromJSON(object: any): QueryEpochsInfoRequest;
    toJSON(message: QueryEpochsInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryEpochsInfoRequest>): QueryEpochsInfoRequest;
};
export declare const QueryEpochsInfoResponse: {
    encode(message: QueryEpochsInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsInfoResponse;
    fromJSON(object: any): QueryEpochsInfoResponse;
    toJSON(message: QueryEpochsInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryEpochsInfoResponse>): QueryEpochsInfoResponse;
};
export declare const QueryCurrentEpochRequest: {
    encode(message: QueryCurrentEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochRequest;
    fromJSON(object: any): QueryCurrentEpochRequest;
    toJSON(message: QueryCurrentEpochRequest): unknown;
    fromPartial(object: DeepPartial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest;
};
export declare const QueryCurrentEpochResponse: {
    encode(message: QueryCurrentEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochResponse;
    fromJSON(object: any): QueryCurrentEpochResponse;
    toJSON(message: QueryCurrentEpochResponse): unknown;
    fromPartial(object: DeepPartial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse;
};
export declare const QueryEpochInfoRequest: {
    encode(message: QueryEpochInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochInfoRequest;
    fromJSON(object: any): QueryEpochInfoRequest;
    toJSON(message: QueryEpochInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryEpochInfoRequest>): QueryEpochInfoRequest;
};
export declare const QueryEpochInfoResponse: {
    encode(message: QueryEpochInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochInfoResponse;
    fromJSON(object: any): QueryEpochInfoResponse;
    toJSON(message: QueryEpochInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryEpochInfoResponse>): QueryEpochInfoResponse;
};
