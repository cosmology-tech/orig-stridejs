import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochResponseSDKType, QueryEpochInfoRequest, QueryEpochInfoResponseSDKType } from "./query";
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
  /* EpochInfos provide running epochInfos */


  async epochInfos(params: QueryEpochsInfoRequest = {
    pagination: undefined
  }): Promise<QueryEpochsInfoResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stridelabs/stride/epochs`;
    return await this.get<QueryEpochsInfoResponseSDKType>(endpoint, options);
  }
  /* CurrentEpoch provide current epoch of specified identifier */


  async currentEpoch(params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.identifier !== "undefined") {
      options.params.identifier = params.identifier;
    }

    const endpoint = `Stridelabs/stride/epochs/current_epoch`;
    return await this.get<QueryCurrentEpochResponseSDKType>(endpoint, options);
  }
  /* CurrentEpoch provide current epoch of specified identifier */


  async epochInfo(params: QueryEpochInfoRequest): Promise<QueryEpochInfoResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.identifier !== "undefined") {
      options.params.identifier = params.identifier;
    }

    const endpoint = `Stridelabs/stride/epochs/epoch_info`;
    return await this.get<QueryEpochInfoResponseSDKType>(endpoint, options);
  }

}