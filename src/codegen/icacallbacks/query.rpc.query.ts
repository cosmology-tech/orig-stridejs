import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { CallbackData } from "./callback_data";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryParamsRequest, QueryParamsResponse, QueryGetCallbackDataRequest, QueryGetCallbackDataResponse, QueryAllCallbackDataRequest, QueryAllCallbackDataResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Parameters queries the parameters of the module.*/

  callbackData(request: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponse>;
  /*Queries a CallbackData by index.*/

  callbackDataAll(request: QueryAllCallbackDataRequest): Promise<QueryAllCallbackDataResponse>;
  /*Queries a list of CallbackData items.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.callbackData = this.callbackData.bind(this);
    this.callbackDataAll = this.callbackDataAll.bind(this);
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stridelabs.stride.icacallbacks.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  callbackData(request: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponse> {
    const data = QueryGetCallbackDataRequest.encode(request).finish();
    const promise = this.rpc.request("stridelabs.stride.icacallbacks.Query", "CallbackData", data);
    return promise.then(data => QueryGetCallbackDataResponse.decode(new _m0.Reader(data)));
  }

  callbackDataAll(request: QueryAllCallbackDataRequest): Promise<QueryAllCallbackDataResponse> {
    const data = QueryAllCallbackDataRequest.encode(request).finish();
    const promise = this.rpc.request("stridelabs.stride.icacallbacks.Query", "CallbackDataAll", data);
    return promise.then(data => QueryAllCallbackDataResponse.decode(new _m0.Reader(data)));
  }

}