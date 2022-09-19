import { LCDClient } from "@osmonauts/lcd";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochResponseSDKType, QueryEpochInfoRequest, QueryEpochInfoResponseSDKType } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    epochInfos(params?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponseSDKType>;
    currentEpoch(params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponseSDKType>;
    epochInfo(params: QueryEpochInfoRequest): Promise<QueryEpochInfoResponseSDKType>;
}
