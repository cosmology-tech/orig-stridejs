import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetCallbackDataRequest, QueryGetCallbackDataResponseSDKType, QueryAllCallbackDataRequest, QueryAllCallbackDataResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    callbackData(request: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponseSDKType>;
    callbackDataAll(request?: QueryAllCallbackDataRequest): Promise<QueryAllCallbackDataResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    callbackData(request: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponseSDKType>;
    callbackDataAll(request?: QueryAllCallbackDataRequest): Promise<QueryAllCallbackDataResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    callbackData(request: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponseSDKType>;
    callbackDataAll(request?: QueryAllCallbackDataRequest): Promise<QueryAllCallbackDataResponseSDKType>;
};
