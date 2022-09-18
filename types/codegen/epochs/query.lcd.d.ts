import { LCDClient } from "@osmonauts/lcd";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse, QueryEpochInfoRequest, QueryEpochInfoResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    epochInfos(params?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
    currentEpoch(params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
    epochInfo(params: QueryEpochInfoRequest): Promise<QueryEpochInfoResponse>;
}
