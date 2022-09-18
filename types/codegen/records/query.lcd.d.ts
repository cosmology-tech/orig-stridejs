import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryGetUserRedemptionRecordRequest, QueryGetUserRedemptionRecordResponse, QueryAllUserRedemptionRecordRequest, QueryAllUserRedemptionRecordResponse, QueryAllUserRedemptionRecordForUserRequest, QueryAllUserRedemptionRecordForUserResponse, QueryGetEpochUnbondingRecordRequest, QueryGetEpochUnbondingRecordResponse, QueryAllEpochUnbondingRecordRequest, QueryAllEpochUnbondingRecordResponse, QueryGetDepositRecordRequest, QueryGetDepositRecordResponse, QueryAllDepositRecordRequest, QueryAllDepositRecordResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
    userRedemptionRecord(params: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponse>;
    userRedemptionRecordAll(params?: QueryAllUserRedemptionRecordRequest): Promise<QueryAllUserRedemptionRecordResponse>;
    userRedemptionRecordForUser(params: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponse>;
    epochUnbondingRecord(params: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponse>;
    epochUnbondingRecordAll(params?: QueryAllEpochUnbondingRecordRequest): Promise<QueryAllEpochUnbondingRecordResponse>;
    depositRecord(params: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponse>;
    depositRecordAll(params?: QueryAllDepositRecordRequest): Promise<QueryAllDepositRecordResponse>;
}
