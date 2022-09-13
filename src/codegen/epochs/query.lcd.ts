import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { EpochInfo } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse, QueryEpochInfoRequest, QueryEpochInfoResponse } from "./query";
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
  }): Promise<QueryEpochsInfoResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stridelabs/stride/epochs`;
    return await this.request<QueryEpochsInfoResponse>(endpoint, options);
  }

  /* CurrentEpoch provide current epoch of specified identifier */
  async currentEpoch(params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.identifier !== "undefined") {
      options.params.identifier = params.identifier;
    }

    const endpoint = `Stridelabs/stride/epochs/current_epoch`;
    return await this.request<QueryCurrentEpochResponse>(endpoint, options);
  }

  /* CurrentEpoch provide current epoch of specified identifier */
  async epochInfo(params: QueryEpochInfoRequest): Promise<QueryEpochInfoResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.identifier !== "undefined") {
      options.params.identifier = params.identifier;
    }

    const endpoint = `Stridelabs/stride/epochs/epoch_info`;
    return await this.request<QueryEpochInfoResponse>(endpoint, options);
  }

}