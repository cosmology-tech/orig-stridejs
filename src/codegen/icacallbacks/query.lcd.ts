import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { CallbackData } from "./callback_data";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryParamsRequest, QueryParamsResponse, QueryGetCallbackDataRequest, QueryGetCallbackDataResponse, QueryAllCallbackDataRequest, QueryAllCallbackDataResponse } from "./query";
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
    const endpoint = `Stride-Labs/stride/icacallbacks/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* Queries a CallbackData by index. */
  async callbackData(params: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponse> {
    const endpoint = `Stride-Labs/stride/icacallbacks/callback_data/${params.callbackKey}`;
    return await this.request<QueryGetCallbackDataResponse>(endpoint);
  }

  /* Queries a list of CallbackData items. */
  async callbackDataAll(params: QueryAllCallbackDataRequest = {
    pagination: undefined
  }): Promise<QueryAllCallbackDataResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/icacallbacks/callback_data`;
    return await this.request<QueryAllCallbackDataResponse>(endpoint, options);
  }

}