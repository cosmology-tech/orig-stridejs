import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { EpochInfo } from "./genesis";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse, QueryEpochInfoRequest, QueryEpochInfoResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  epochInfos(request: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
  /*EpochInfos provide running epochInfos*/

  currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
  /*CurrentEpoch provide current epoch of specified identifier*/

  epochInfo(request: QueryEpochInfoRequest): Promise<QueryEpochInfoResponse>;
  /*CurrentEpoch provide current epoch of specified identifier*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.epochInfos = this.epochInfos.bind(this);
    this.currentEpoch = this.currentEpoch.bind(this);
    this.epochInfo = this.epochInfo.bind(this);
  }

  epochInfos(request: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse> {
    const data = QueryEpochsInfoRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.epochs.Query", "EpochInfos", data);
    return promise.then(data => QueryEpochsInfoResponse.decode(new _m0.Reader(data)));
  }

  currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
    const data = QueryCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.epochs.Query", "CurrentEpoch", data);
    return promise.then(data => QueryCurrentEpochResponse.decode(new _m0.Reader(data)));
  }

  epochInfo(request: QueryEpochInfoRequest): Promise<QueryEpochInfoResponse> {
    const data = QueryEpochInfoRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.epochs.Query", "EpochInfo", data);
    return promise.then(data => QueryEpochInfoResponse.decode(new _m0.Reader(data)));
  }

}