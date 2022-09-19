import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochResponseSDKType, QueryEpochInfoRequest, QueryEpochInfoResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    epochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponseSDKType>;
    currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponseSDKType>;
    epochInfo(request: QueryEpochInfoRequest): Promise<QueryEpochInfoResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    epochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponseSDKType>;
    currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponseSDKType>;
    epochInfo(request: QueryEpochInfoRequest): Promise<QueryEpochInfoResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    epochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponseSDKType>;
    currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponseSDKType>;
    epochInfo(request: QueryEpochInfoRequest): Promise<QueryEpochInfoResponseSDKType>;
};
