import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params, DepositRecord, UserRedemptionRecord, EpochUnbondingRecord } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryGetDepositRecordRequest {
    id: Long;
}
export interface QueryGetDepositRecordResponse {
    DepositRecord: DepositRecord;
}
export interface QueryAllDepositRecordRequest {
    pagination?: PageRequest;
}
export interface QueryAllDepositRecordResponse {
    DepositRecord: DepositRecord[];
    pagination?: PageResponse;
}
export interface QueryGetUserRedemptionRecordRequest {
    id: string;
}
export interface QueryGetUserRedemptionRecordResponse {
    UserRedemptionRecord: UserRedemptionRecord;
}
export interface QueryAllUserRedemptionRecordRequest {
    pagination?: PageRequest;
}
export interface QueryAllUserRedemptionRecordResponse {
    UserRedemptionRecord: UserRedemptionRecord[];
    pagination?: PageResponse;
}
/** Query UserRedemptionRecords by chainId / userId pair */
export interface QueryAllUserRedemptionRecordForUserRequest {
    chainId: string;
    day: Long;
    address: string;
    limit: Long;
    pagination?: PageRequest;
}
export interface QueryAllUserRedemptionRecordForUserResponse {
    UserRedemptionRecord: UserRedemptionRecord[];
    pagination?: PageResponse;
}
export interface QueryGetEpochUnbondingRecordRequest {
    epochNumber: Long;
}
export interface QueryGetEpochUnbondingRecordResponse {
    EpochUnbondingRecord: EpochUnbondingRecord;
}
export interface QueryAllEpochUnbondingRecordRequest {
    pagination?: PageRequest;
}
export interface QueryAllEpochUnbondingRecordResponse {
    EpochUnbondingRecord: EpochUnbondingRecord[];
    pagination?: PageResponse;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetDepositRecordRequest: {
    encode(message: QueryGetDepositRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositRecordRequest;
    fromJSON(object: any): QueryGetDepositRecordRequest;
    toJSON(message: QueryGetDepositRecordRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetDepositRecordRequest>): QueryGetDepositRecordRequest;
};
export declare const QueryGetDepositRecordResponse: {
    encode(message: QueryGetDepositRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositRecordResponse;
    fromJSON(object: any): QueryGetDepositRecordResponse;
    toJSON(message: QueryGetDepositRecordResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetDepositRecordResponse>): QueryGetDepositRecordResponse;
};
export declare const QueryAllDepositRecordRequest: {
    encode(message: QueryAllDepositRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDepositRecordRequest;
    fromJSON(object: any): QueryAllDepositRecordRequest;
    toJSON(message: QueryAllDepositRecordRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllDepositRecordRequest>): QueryAllDepositRecordRequest;
};
export declare const QueryAllDepositRecordResponse: {
    encode(message: QueryAllDepositRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDepositRecordResponse;
    fromJSON(object: any): QueryAllDepositRecordResponse;
    toJSON(message: QueryAllDepositRecordResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllDepositRecordResponse>): QueryAllDepositRecordResponse;
};
export declare const QueryGetUserRedemptionRecordRequest: {
    encode(message: QueryGetUserRedemptionRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserRedemptionRecordRequest;
    fromJSON(object: any): QueryGetUserRedemptionRecordRequest;
    toJSON(message: QueryGetUserRedemptionRecordRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetUserRedemptionRecordRequest>): QueryGetUserRedemptionRecordRequest;
};
export declare const QueryGetUserRedemptionRecordResponse: {
    encode(message: QueryGetUserRedemptionRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserRedemptionRecordResponse;
    fromJSON(object: any): QueryGetUserRedemptionRecordResponse;
    toJSON(message: QueryGetUserRedemptionRecordResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetUserRedemptionRecordResponse>): QueryGetUserRedemptionRecordResponse;
};
export declare const QueryAllUserRedemptionRecordRequest: {
    encode(message: QueryAllUserRedemptionRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordRequest;
    fromJSON(object: any): QueryAllUserRedemptionRecordRequest;
    toJSON(message: QueryAllUserRedemptionRecordRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllUserRedemptionRecordRequest>): QueryAllUserRedemptionRecordRequest;
};
export declare const QueryAllUserRedemptionRecordResponse: {
    encode(message: QueryAllUserRedemptionRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordResponse;
    fromJSON(object: any): QueryAllUserRedemptionRecordResponse;
    toJSON(message: QueryAllUserRedemptionRecordResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllUserRedemptionRecordResponse>): QueryAllUserRedemptionRecordResponse;
};
export declare const QueryAllUserRedemptionRecordForUserRequest: {
    encode(message: QueryAllUserRedemptionRecordForUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordForUserRequest;
    fromJSON(object: any): QueryAllUserRedemptionRecordForUserRequest;
    toJSON(message: QueryAllUserRedemptionRecordForUserRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllUserRedemptionRecordForUserRequest>): QueryAllUserRedemptionRecordForUserRequest;
};
export declare const QueryAllUserRedemptionRecordForUserResponse: {
    encode(message: QueryAllUserRedemptionRecordForUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordForUserResponse;
    fromJSON(object: any): QueryAllUserRedemptionRecordForUserResponse;
    toJSON(message: QueryAllUserRedemptionRecordForUserResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllUserRedemptionRecordForUserResponse>): QueryAllUserRedemptionRecordForUserResponse;
};
export declare const QueryGetEpochUnbondingRecordRequest: {
    encode(message: QueryGetEpochUnbondingRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochUnbondingRecordRequest;
    fromJSON(object: any): QueryGetEpochUnbondingRecordRequest;
    toJSON(message: QueryGetEpochUnbondingRecordRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetEpochUnbondingRecordRequest>): QueryGetEpochUnbondingRecordRequest;
};
export declare const QueryGetEpochUnbondingRecordResponse: {
    encode(message: QueryGetEpochUnbondingRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochUnbondingRecordResponse;
    fromJSON(object: any): QueryGetEpochUnbondingRecordResponse;
    toJSON(message: QueryGetEpochUnbondingRecordResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetEpochUnbondingRecordResponse>): QueryGetEpochUnbondingRecordResponse;
};
export declare const QueryAllEpochUnbondingRecordRequest: {
    encode(message: QueryAllEpochUnbondingRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochUnbondingRecordRequest;
    fromJSON(object: any): QueryAllEpochUnbondingRecordRequest;
    toJSON(message: QueryAllEpochUnbondingRecordRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllEpochUnbondingRecordRequest>): QueryAllEpochUnbondingRecordRequest;
};
export declare const QueryAllEpochUnbondingRecordResponse: {
    encode(message: QueryAllEpochUnbondingRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochUnbondingRecordResponse;
    fromJSON(object: any): QueryAllEpochUnbondingRecordResponse;
    toJSON(message: QueryAllEpochUnbondingRecordResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllEpochUnbondingRecordResponse>): QueryAllEpochUnbondingRecordResponse;
};
