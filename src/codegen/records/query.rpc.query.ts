import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryParamsResponseSDKType, QueryGetUserRedemptionRecordRequest, QueryGetUserRedemptionRecordResponse, QueryGetUserRedemptionRecordResponseSDKType, QueryAllUserRedemptionRecordRequest, QueryAllUserRedemptionRecordResponse, QueryAllUserRedemptionRecordResponseSDKType, QueryAllUserRedemptionRecordForUserRequest, QueryAllUserRedemptionRecordForUserResponse, QueryAllUserRedemptionRecordForUserResponseSDKType, QueryGetEpochUnbondingRecordRequest, QueryGetEpochUnbondingRecordResponse, QueryGetEpochUnbondingRecordResponseSDKType, QueryAllEpochUnbondingRecordRequest, QueryAllEpochUnbondingRecordResponse, QueryAllEpochUnbondingRecordResponseSDKType, QueryGetDepositRecordRequest, QueryGetDepositRecordResponse, QueryGetDepositRecordResponseSDKType, QueryAllDepositRecordRequest, QueryAllDepositRecordResponse, QueryAllDepositRecordResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Parameters queries the parameters of the module.*/

  userRedemptionRecord(request: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponseSDKType>;
  /*Queries a UserRedemptionRecord by id.*/

  userRedemptionRecordAll(request?: QueryAllUserRedemptionRecordRequest): Promise<QueryAllUserRedemptionRecordResponseSDKType>;
  /*Queries a list of UserRedemptionRecord items.*/

  userRedemptionRecordForUser(request: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponseSDKType>;
  /*Queries a list of UserRedemptionRecord items by chainId / userId pair.*/

  epochUnbondingRecord(request: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponseSDKType>;
  /*Queries a EpochUnbondingRecord by id.*/

  epochUnbondingRecordAll(request?: QueryAllEpochUnbondingRecordRequest): Promise<QueryAllEpochUnbondingRecordResponseSDKType>;
  /*Queries a list of EpochUnbondingRecord items.*/

  depositRecord(request: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponseSDKType>;
  /*Queries a DepositRecord by id.*/

  depositRecordAll(request?: QueryAllDepositRecordRequest): Promise<QueryAllDepositRecordResponseSDKType>;
  /*Queries a list of DepositRecord items.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.userRedemptionRecord = this.userRedemptionRecord.bind(this);
    this.userRedemptionRecordAll = this.userRedemptionRecordAll.bind(this);
    this.userRedemptionRecordForUser = this.userRedemptionRecordForUser.bind(this);
    this.epochUnbondingRecord = this.epochUnbondingRecord.bind(this);
    this.epochUnbondingRecordAll = this.epochUnbondingRecordAll.bind(this);
    this.depositRecord = this.depositRecord.bind(this);
    this.depositRecordAll = this.depositRecordAll.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.records.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  userRedemptionRecord(request: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponseSDKType> {
    const data = QueryGetUserRedemptionRecordRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.records.Query", "UserRedemptionRecord", data);
    return promise.then(data => QueryGetUserRedemptionRecordResponse.decode(new _m0.Reader(data)));
  }

  userRedemptionRecordAll(request: QueryAllUserRedemptionRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllUserRedemptionRecordResponseSDKType> {
    const data = QueryAllUserRedemptionRecordRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.records.Query", "UserRedemptionRecordAll", data);
    return promise.then(data => QueryAllUserRedemptionRecordResponse.decode(new _m0.Reader(data)));
  }

  userRedemptionRecordForUser(request: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponseSDKType> {
    const data = QueryAllUserRedemptionRecordForUserRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.records.Query", "UserRedemptionRecordForUser", data);
    return promise.then(data => QueryAllUserRedemptionRecordForUserResponse.decode(new _m0.Reader(data)));
  }

  epochUnbondingRecord(request: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponseSDKType> {
    const data = QueryGetEpochUnbondingRecordRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.records.Query", "EpochUnbondingRecord", data);
    return promise.then(data => QueryGetEpochUnbondingRecordResponse.decode(new _m0.Reader(data)));
  }

  epochUnbondingRecordAll(request: QueryAllEpochUnbondingRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllEpochUnbondingRecordResponseSDKType> {
    const data = QueryAllEpochUnbondingRecordRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.records.Query", "EpochUnbondingRecordAll", data);
    return promise.then(data => QueryAllEpochUnbondingRecordResponse.decode(new _m0.Reader(data)));
  }

  depositRecord(request: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponseSDKType> {
    const data = QueryGetDepositRecordRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.records.Query", "DepositRecord", data);
    return promise.then(data => QueryGetDepositRecordResponse.decode(new _m0.Reader(data)));
  }

  depositRecordAll(request: QueryAllDepositRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllDepositRecordResponseSDKType> {
    const data = QueryAllDepositRecordRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.records.Query", "DepositRecordAll", data);
    return promise.then(data => QueryAllDepositRecordResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
      return queryService.params(request);
    },

    userRedemptionRecord(request: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponseSDKType> {
      return queryService.userRedemptionRecord(request);
    },

    userRedemptionRecordAll(request?: QueryAllUserRedemptionRecordRequest): Promise<QueryAllUserRedemptionRecordResponseSDKType> {
      return queryService.userRedemptionRecordAll(request);
    },

    userRedemptionRecordForUser(request: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponseSDKType> {
      return queryService.userRedemptionRecordForUser(request);
    },

    epochUnbondingRecord(request: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponseSDKType> {
      return queryService.epochUnbondingRecord(request);
    },

    epochUnbondingRecordAll(request?: QueryAllEpochUnbondingRecordRequest): Promise<QueryAllEpochUnbondingRecordResponseSDKType> {
      return queryService.epochUnbondingRecordAll(request);
    },

    depositRecord(request: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponseSDKType> {
      return queryService.depositRecord(request);
    },

    depositRecordAll(request?: QueryAllDepositRecordRequest): Promise<QueryAllDepositRecordResponseSDKType> {
      return queryService.depositRecordAll(request);
    }

  };
};