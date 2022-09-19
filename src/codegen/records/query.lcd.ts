import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetUserRedemptionRecordRequest, QueryGetUserRedemptionRecordResponseSDKType, QueryAllUserRedemptionRecordRequest, QueryAllUserRedemptionRecordResponseSDKType, QueryAllUserRedemptionRecordForUserRequest, QueryAllUserRedemptionRecordForUserResponseSDKType, QueryGetEpochUnbondingRecordRequest, QueryGetEpochUnbondingRecordResponseSDKType, QueryAllEpochUnbondingRecordRequest, QueryAllEpochUnbondingRecordResponseSDKType, QueryGetDepositRecordRequest, QueryGetDepositRecordResponseSDKType, QueryAllDepositRecordRequest, QueryAllDepositRecordResponseSDKType } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `StrideLabs/stride/records/params`;
    return await this.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a UserRedemptionRecord by id. */


  async userRedemptionRecord(params: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponseSDKType> {
    const endpoint = `Stride-Labs/stride/records/user_redemption_record/${params.id}`;
    return await this.get<QueryGetUserRedemptionRecordResponseSDKType>(endpoint);
  }
  /* Queries a list of UserRedemptionRecord items. */


  async userRedemptionRecordAll(params: QueryAllUserRedemptionRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllUserRedemptionRecordResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/records/user_redemption_record`;
    return await this.get<QueryAllUserRedemptionRecordResponseSDKType>(endpoint, options);
  }
  /* Queries a list of UserRedemptionRecord items by chainId / userId pair. */


  async userRedemptionRecordForUser(params: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/records/user_redemption_record_for_user/${params.chainId}/${params.day}/${params.address}/${params.limit}`;
    return await this.get<QueryAllUserRedemptionRecordForUserResponseSDKType>(endpoint, options);
  }
  /* Queries a EpochUnbondingRecord by id. */


  async epochUnbondingRecord(params: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponseSDKType> {
    const endpoint = `Stride-Labs/stride/records/epoch_unbonding_record/${params.epochNumber}`;
    return await this.get<QueryGetEpochUnbondingRecordResponseSDKType>(endpoint);
  }
  /* Queries a list of EpochUnbondingRecord items. */


  async epochUnbondingRecordAll(params: QueryAllEpochUnbondingRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllEpochUnbondingRecordResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/records/epoch_unbonding_record`;
    return await this.get<QueryAllEpochUnbondingRecordResponseSDKType>(endpoint, options);
  }
  /* Queries a DepositRecord by id. */


  async depositRecord(params: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponseSDKType> {
    const endpoint = `Stride-Labs/stride/records/deposit_record/${params.id}`;
    return await this.get<QueryGetDepositRecordResponseSDKType>(endpoint);
  }
  /* Queries a list of DepositRecord items. */


  async depositRecordAll(params: QueryAllDepositRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllDepositRecordResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/records/deposit_record`;
    return await this.get<QueryAllDepositRecordResponseSDKType>(endpoint, options);
  }

}