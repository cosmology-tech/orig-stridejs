import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetCallbackDataRequest, QueryGetCallbackDataResponseSDKType, QueryAllCallbackDataRequest, QueryAllCallbackDataResponseSDKType } from "./query";
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
    const endpoint = `Stride-Labs/stride/icacallbacks/params`;
    return await this.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a CallbackData by index. */


  async callbackData(params: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponseSDKType> {
    const endpoint = `Stride-Labs/stride/icacallbacks/callback_data/${params.callbackKey}`;
    return await this.get<QueryGetCallbackDataResponseSDKType>(endpoint);
  }
  /* Queries a list of CallbackData items. */


  async callbackDataAll(params: QueryAllCallbackDataRequest = {
    pagination: undefined
  }): Promise<QueryAllCallbackDataResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/icacallbacks/callback_data`;
    return await this.get<QueryAllCallbackDataResponseSDKType>(endpoint, options);
  }

}