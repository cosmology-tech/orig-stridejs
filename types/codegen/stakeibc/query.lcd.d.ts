import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryGetValidatorsRequest, QueryGetValidatorsResponse, QueryGetICAAccountRequest, QueryGetICAAccountResponse, QueryGetHostZoneRequest, QueryGetHostZoneResponse, QueryAllHostZoneRequest, QueryAllHostZoneResponse, QueryModuleAddressRequest, QueryModuleAddressResponse, QueryGetEpochTrackerRequest, QueryGetEpochTrackerResponse, QueryAllEpochTrackerRequest, QueryAllEpochTrackerResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
    validators(params: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponse>;
    iCAAccount(_params?: QueryGetICAAccountRequest): Promise<QueryGetICAAccountResponse>;
    hostZone(params: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponse>;
    hostZoneAll(params?: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponse>;
    moduleAddress(params: QueryModuleAddressRequest): Promise<QueryModuleAddressResponse>;
    epochTracker(params: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponse>;
    epochTrackerAll(params?: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponse>;
}
