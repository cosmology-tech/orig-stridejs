import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params, DepositRecord, UserRedemptionRecord, EpochUnbondingRecord } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryParamsRequest, QueryParamsResponse, QueryGetUserRedemptionRecordRequest, QueryGetUserRedemptionRecordResponse, QueryAllUserRedemptionRecordRequest, QueryAllUserRedemptionRecordResponse, QueryAllUserRedemptionRecordForUserRequest, QueryAllUserRedemptionRecordForUserResponse, QueryGetEpochUnbondingRecordRequest, QueryGetEpochUnbondingRecordResponse, QueryAllEpochUnbondingRecordRequest, QueryAllEpochUnbondingRecordResponse, QueryGetDepositRecordRequest, QueryGetDepositRecordResponse, QueryAllDepositRecordRequest, QueryAllDepositRecordResponse } from "./query";
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
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `StrideLabs/stride/records/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* Queries a UserRedemptionRecord by id. */
  async userRedemptionRecord(params: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponse> {
    const endpoint = `Stride-Labs/stride/records/user_redemption_record/${params.id}`;
    return await this.request<QueryGetUserRedemptionRecordResponse>(endpoint);
  }

  /* Queries a list of UserRedemptionRecord items. */
  async userRedemptionRecordAll(params: QueryAllUserRedemptionRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllUserRedemptionRecordResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/records/user_redemption_record`;
    return await this.request<QueryAllUserRedemptionRecordResponse>(endpoint, options);
  }

  /* Queries a list of UserRedemptionRecord items by chainId / userId pair. */
  async userRedemptionRecordForUser(params: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/records/user_redemption_record_for_user/${params.chainId}/${params.day}/${params.address}/${params.limit}`;
    return await this.request<QueryAllUserRedemptionRecordForUserResponse>(endpoint, options);
  }

  /* Queries a EpochUnbondingRecord by id. */
  async epochUnbondingRecord(params: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponse> {
    const endpoint = `Stride-Labs/stride/records/epoch_unbonding_record/${params.epochNumber}`;
    return await this.request<QueryGetEpochUnbondingRecordResponse>(endpoint);
  }

  /* Queries a list of EpochUnbondingRecord items. */
  async epochUnbondingRecordAll(params: QueryAllEpochUnbondingRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllEpochUnbondingRecordResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/records/epoch_unbonding_record`;
    return await this.request<QueryAllEpochUnbondingRecordResponse>(endpoint, options);
  }

  /* Queries a DepositRecord by id. */
  async depositRecord(params: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponse> {
    const endpoint = `Stride-Labs/stride/records/deposit_record/${params.id}`;
    return await this.request<QueryGetDepositRecordResponse>(endpoint);
  }

  /* Queries a list of DepositRecord items. */
  async depositRecordAll(params: QueryAllDepositRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllDepositRecordResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/records/deposit_record`;
    return await this.request<QueryAllDepositRecordResponse>(endpoint, options);
  }

}