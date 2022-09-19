import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryParamsResponseSDKType, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse, QueryEpochProvisionsResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Params returns the total set of minting parameters.*/

  epochProvisions(request?: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponseSDKType>;
  /*EpochProvisions current minting epoch provisions value.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.epochProvisions = this.epochProvisions.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.mint.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  epochProvisions(request: QueryEpochProvisionsRequest = {}): Promise<QueryEpochProvisionsResponseSDKType> {
    const data = QueryEpochProvisionsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.mint.v1beta1.Query", "EpochProvisions", data);
    return promise.then(data => QueryEpochProvisionsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
      return queryService.params(request);
    },

    epochProvisions(request?: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponseSDKType> {
      return queryService.epochProvisions(request);
    }

  };
};