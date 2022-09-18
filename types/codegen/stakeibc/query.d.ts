import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Validator } from "./validator";
import { ICAAccount } from "./ica_account";
import { HostZone } from "./host_zone";
import { EpochTracker } from "./epoch_tracker";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryInterchainAccountFromAddressRequest is the request type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressRequest {
    owner: string;
    connection_id: string;
}
/** QueryInterchainAccountFromAddressResponse the response type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressResponse {
    interchain_account_address: string;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryGetValidatorsRequest {
    chain_id: string;
}
export interface QueryGetValidatorsResponse {
    validators: Validator[];
}
export interface QueryGetICAAccountRequest {
}
export interface QueryGetICAAccountResponse {
    ICAAccount: ICAAccount;
}
export interface QueryGetHostZoneRequest {
    chain_id: string;
}
export interface QueryGetHostZoneResponse {
    HostZone: HostZone;
}
export interface QueryAllHostZoneRequest {
    pagination?: PageRequest;
}
export interface QueryAllHostZoneResponse {
    HostZone: HostZone[];
    pagination?: PageResponse;
}
export interface QueryModuleAddressRequest {
    name: string;
}
export interface QueryModuleAddressResponse {
    addr: string;
}
export interface QueryGetEpochTrackerRequest {
    epochIdentifier: string;
}
export interface QueryGetEpochTrackerResponse {
    epochTracker: EpochTracker;
}
export interface QueryAllEpochTrackerRequest {
    pagination?: PageRequest;
}
export interface QueryAllEpochTrackerResponse {
    epochTracker: EpochTracker[];
    pagination?: PageResponse;
}
export declare const QueryInterchainAccountFromAddressRequest: {
    encode(message: QueryInterchainAccountFromAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountFromAddressRequest;
    fromJSON(object: any): QueryInterchainAccountFromAddressRequest;
    toJSON(message: QueryInterchainAccountFromAddressRequest): unknown;
    fromPartial(object: DeepPartial<QueryInterchainAccountFromAddressRequest>): QueryInterchainAccountFromAddressRequest;
};
export declare const QueryInterchainAccountFromAddressResponse: {
    encode(message: QueryInterchainAccountFromAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountFromAddressResponse;
    fromJSON(object: any): QueryInterchainAccountFromAddressResponse;
    toJSON(message: QueryInterchainAccountFromAddressResponse): unknown;
    fromPartial(object: DeepPartial<QueryInterchainAccountFromAddressResponse>): QueryInterchainAccountFromAddressResponse;
};
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
export declare const QueryGetValidatorsRequest: {
    encode(message: QueryGetValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetValidatorsRequest;
    fromJSON(object: any): QueryGetValidatorsRequest;
    toJSON(message: QueryGetValidatorsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetValidatorsRequest>): QueryGetValidatorsRequest;
};
export declare const QueryGetValidatorsResponse: {
    encode(message: QueryGetValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetValidatorsResponse;
    fromJSON(object: any): QueryGetValidatorsResponse;
    toJSON(message: QueryGetValidatorsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetValidatorsResponse>): QueryGetValidatorsResponse;
};
export declare const QueryGetICAAccountRequest: {
    encode(_: QueryGetICAAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetICAAccountRequest;
    fromJSON(_: any): QueryGetICAAccountRequest;
    toJSON(_: QueryGetICAAccountRequest): unknown;
    fromPartial(_: DeepPartial<QueryGetICAAccountRequest>): QueryGetICAAccountRequest;
};
export declare const QueryGetICAAccountResponse: {
    encode(message: QueryGetICAAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetICAAccountResponse;
    fromJSON(object: any): QueryGetICAAccountResponse;
    toJSON(message: QueryGetICAAccountResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetICAAccountResponse>): QueryGetICAAccountResponse;
};
export declare const QueryGetHostZoneRequest: {
    encode(message: QueryGetHostZoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHostZoneRequest;
    fromJSON(object: any): QueryGetHostZoneRequest;
    toJSON(message: QueryGetHostZoneRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetHostZoneRequest>): QueryGetHostZoneRequest;
};
export declare const QueryGetHostZoneResponse: {
    encode(message: QueryGetHostZoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHostZoneResponse;
    fromJSON(object: any): QueryGetHostZoneResponse;
    toJSON(message: QueryGetHostZoneResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetHostZoneResponse>): QueryGetHostZoneResponse;
};
export declare const QueryAllHostZoneRequest: {
    encode(message: QueryAllHostZoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHostZoneRequest;
    fromJSON(object: any): QueryAllHostZoneRequest;
    toJSON(message: QueryAllHostZoneRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllHostZoneRequest>): QueryAllHostZoneRequest;
};
export declare const QueryAllHostZoneResponse: {
    encode(message: QueryAllHostZoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHostZoneResponse;
    fromJSON(object: any): QueryAllHostZoneResponse;
    toJSON(message: QueryAllHostZoneResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllHostZoneResponse>): QueryAllHostZoneResponse;
};
export declare const QueryModuleAddressRequest: {
    encode(message: QueryModuleAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAddressRequest;
    fromJSON(object: any): QueryModuleAddressRequest;
    toJSON(message: QueryModuleAddressRequest): unknown;
    fromPartial(object: DeepPartial<QueryModuleAddressRequest>): QueryModuleAddressRequest;
};
export declare const QueryModuleAddressResponse: {
    encode(message: QueryModuleAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAddressResponse;
    fromJSON(object: any): QueryModuleAddressResponse;
    toJSON(message: QueryModuleAddressResponse): unknown;
    fromPartial(object: DeepPartial<QueryModuleAddressResponse>): QueryModuleAddressResponse;
};
export declare const QueryGetEpochTrackerRequest: {
    encode(message: QueryGetEpochTrackerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochTrackerRequest;
    fromJSON(object: any): QueryGetEpochTrackerRequest;
    toJSON(message: QueryGetEpochTrackerRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetEpochTrackerRequest>): QueryGetEpochTrackerRequest;
};
export declare const QueryGetEpochTrackerResponse: {
    encode(message: QueryGetEpochTrackerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochTrackerResponse;
    fromJSON(object: any): QueryGetEpochTrackerResponse;
    toJSON(message: QueryGetEpochTrackerResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetEpochTrackerResponse>): QueryGetEpochTrackerResponse;
};
export declare const QueryAllEpochTrackerRequest: {
    encode(message: QueryAllEpochTrackerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochTrackerRequest;
    fromJSON(object: any): QueryAllEpochTrackerRequest;
    toJSON(message: QueryAllEpochTrackerRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllEpochTrackerRequest>): QueryAllEpochTrackerRequest;
};
export declare const QueryAllEpochTrackerResponse: {
    encode(message: QueryAllEpochTrackerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochTrackerResponse;
    fromJSON(object: any): QueryAllEpochTrackerResponse;
    toJSON(message: QueryAllEpochTrackerResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllEpochTrackerResponse>): QueryAllEpochTrackerResponse;
};
