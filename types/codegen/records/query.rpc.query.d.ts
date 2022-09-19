import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetUserRedemptionRecordRequest, QueryGetUserRedemptionRecordResponseSDKType, QueryAllUserRedemptionRecordRequest, QueryAllUserRedemptionRecordResponseSDKType, QueryAllUserRedemptionRecordForUserRequest, QueryAllUserRedemptionRecordForUserResponseSDKType, QueryGetEpochUnbondingRecordRequest, QueryGetEpochUnbondingRecordResponseSDKType, QueryAllEpochUnbondingRecordRequest, QueryAllEpochUnbondingRecordResponseSDKType, QueryGetDepositRecordRequest, QueryGetDepositRecordResponseSDKType, QueryAllDepositRecordRequest, QueryAllDepositRecordResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    userRedemptionRecord(request: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponseSDKType>;
    userRedemptionRecordAll(request?: QueryAllUserRedemptionRecordRequest): Promise<QueryAllUserRedemptionRecordResponseSDKType>;
    userRedemptionRecordForUser(request: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponseSDKType>;
    epochUnbondingRecord(request: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponseSDKType>;
    epochUnbondingRecordAll(request?: QueryAllEpochUnbondingRecordRequest): Promise<QueryAllEpochUnbondingRecordResponseSDKType>;
    depositRecord(request: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponseSDKType>;
    depositRecordAll(request?: QueryAllDepositRecordRequest): Promise<QueryAllDepositRecordResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    userRedemptionRecord(request: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponseSDKType>;
    userRedemptionRecordAll(request?: QueryAllUserRedemptionRecordRequest): Promise<QueryAllUserRedemptionRecordResponseSDKType>;
    userRedemptionRecordForUser(request: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponseSDKType>;
    epochUnbondingRecord(request: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponseSDKType>;
    epochUnbondingRecordAll(request?: QueryAllEpochUnbondingRecordRequest): Promise<QueryAllEpochUnbondingRecordResponseSDKType>;
    depositRecord(request: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponseSDKType>;
    depositRecordAll(request?: QueryAllDepositRecordRequest): Promise<QueryAllDepositRecordResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    userRedemptionRecord(request: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponseSDKType>;
    userRedemptionRecordAll(request?: QueryAllUserRedemptionRecordRequest): Promise<QueryAllUserRedemptionRecordResponseSDKType>;
    userRedemptionRecordForUser(request: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponseSDKType>;
    epochUnbondingRecord(request: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponseSDKType>;
    epochUnbondingRecordAll(request?: QueryAllEpochUnbondingRecordRequest): Promise<QueryAllEpochUnbondingRecordResponseSDKType>;
    depositRecord(request: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponseSDKType>;
    depositRecordAll(request?: QueryAllDepositRecordRequest): Promise<QueryAllDepositRecordResponseSDKType>;
};
