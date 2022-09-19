import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetValidatorsRequest, QueryGetValidatorsResponseSDKType, QueryGetICAAccountRequest, QueryGetICAAccountResponseSDKType, QueryGetHostZoneRequest, QueryGetHostZoneResponseSDKType, QueryAllHostZoneRequest, QueryAllHostZoneResponseSDKType, QueryModuleAddressRequest, QueryModuleAddressResponseSDKType, QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponseSDKType, QueryGetEpochTrackerRequest, QueryGetEpochTrackerResponseSDKType, QueryAllEpochTrackerRequest, QueryAllEpochTrackerResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponseSDKType>;
    iCAAccount(request?: QueryGetICAAccountRequest): Promise<QueryGetICAAccountResponseSDKType>;
    hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponseSDKType>;
    hostZoneAll(request?: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponseSDKType>;
    moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponseSDKType>;
    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponseSDKType>;
    epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponseSDKType>;
    epochTrackerAll(request?: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponseSDKType>;
    iCAAccount(request?: QueryGetICAAccountRequest): Promise<QueryGetICAAccountResponseSDKType>;
    hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponseSDKType>;
    hostZoneAll(request?: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponseSDKType>;
    moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponseSDKType>;
    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponseSDKType>;
    epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponseSDKType>;
    epochTrackerAll(request?: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponseSDKType>;
    iCAAccount(request?: QueryGetICAAccountRequest): Promise<QueryGetICAAccountResponseSDKType>;
    hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponseSDKType>;
    hostZoneAll(request?: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponseSDKType>;
    moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponseSDKType>;
    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponseSDKType>;
    epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponseSDKType>;
    epochTrackerAll(request?: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponseSDKType>;
};
