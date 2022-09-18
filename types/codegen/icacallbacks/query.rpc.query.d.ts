import { Rpc } from "@osmonauts/helpers";
import { QueryParamsRequest, QueryParamsResponse, QueryGetCallbackDataRequest, QueryGetCallbackDataResponse, QueryAllCallbackDataRequest, QueryAllCallbackDataResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    callbackData(request: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponse>;
    callbackDataAll(request: QueryAllCallbackDataRequest): Promise<QueryAllCallbackDataResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    callbackData(request: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponse>;
    callbackDataAll(request: QueryAllCallbackDataRequest): Promise<QueryAllCallbackDataResponse>;
}
