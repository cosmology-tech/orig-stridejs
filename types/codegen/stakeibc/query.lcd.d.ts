import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetValidatorsRequest, QueryGetValidatorsResponseSDKType, QueryGetICAAccountRequest, QueryGetICAAccountResponseSDKType, QueryGetHostZoneRequest, QueryGetHostZoneResponseSDKType, QueryAllHostZoneRequest, QueryAllHostZoneResponseSDKType, QueryModuleAddressRequest, QueryModuleAddressResponseSDKType, QueryGetEpochTrackerRequest, QueryGetEpochTrackerResponseSDKType, QueryAllEpochTrackerRequest, QueryAllEpochTrackerResponseSDKType } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    validators(params: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponseSDKType>;
    iCAAccount(_params?: QueryGetICAAccountRequest): Promise<QueryGetICAAccountResponseSDKType>;
    hostZone(params: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponseSDKType>;
    hostZoneAll(params?: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponseSDKType>;
    moduleAddress(params: QueryModuleAddressRequest): Promise<QueryModuleAddressResponseSDKType>;
    epochTracker(params: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponseSDKType>;
    epochTrackerAll(params?: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponseSDKType>;
}
