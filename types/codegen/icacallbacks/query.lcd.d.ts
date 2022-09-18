import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryGetCallbackDataRequest, QueryGetCallbackDataResponse, QueryAllCallbackDataRequest, QueryAllCallbackDataResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
    callbackData(params: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponse>;
    callbackDataAll(params?: QueryAllCallbackDataRequest): Promise<QueryAllCallbackDataResponse>;
}
