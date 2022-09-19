import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetCallbackDataRequest, QueryGetCallbackDataResponseSDKType, QueryAllCallbackDataRequest, QueryAllCallbackDataResponseSDKType } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    callbackData(params: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponseSDKType>;
    callbackDataAll(params?: QueryAllCallbackDataRequest): Promise<QueryAllCallbackDataResponseSDKType>;
}
