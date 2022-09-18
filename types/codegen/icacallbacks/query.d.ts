import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { CallbackData } from "./callback_data";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryGetCallbackDataRequest {
    callbackKey: string;
}
export interface QueryGetCallbackDataResponse {
    callbackData: CallbackData;
}
export interface QueryAllCallbackDataRequest {
    pagination?: PageRequest;
}
export interface QueryAllCallbackDataResponse {
    callbackData: CallbackData[];
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
export declare const QueryGetCallbackDataRequest: {
    encode(message: QueryGetCallbackDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCallbackDataRequest;
    fromJSON(object: any): QueryGetCallbackDataRequest;
    toJSON(message: QueryGetCallbackDataRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCallbackDataRequest>): QueryGetCallbackDataRequest;
};
export declare const QueryGetCallbackDataResponse: {
    encode(message: QueryGetCallbackDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCallbackDataResponse;
    fromJSON(object: any): QueryGetCallbackDataResponse;
    toJSON(message: QueryGetCallbackDataResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCallbackDataResponse>): QueryGetCallbackDataResponse;
};
export declare const QueryAllCallbackDataRequest: {
    encode(message: QueryAllCallbackDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCallbackDataRequest;
    fromJSON(object: any): QueryAllCallbackDataRequest;
    toJSON(message: QueryAllCallbackDataRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCallbackDataRequest>): QueryAllCallbackDataRequest;
};
export declare const QueryAllCallbackDataResponse: {
    encode(message: QueryAllCallbackDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCallbackDataResponse;
    fromJSON(object: any): QueryAllCallbackDataResponse;
    toJSON(message: QueryAllCallbackDataResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCallbackDataResponse>): QueryAllCallbackDataResponse;
};
