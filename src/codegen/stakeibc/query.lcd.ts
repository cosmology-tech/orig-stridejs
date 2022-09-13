import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Validator } from "./validator";
import { ICAAccount } from "./ica_account";
import { HostZone } from "./host_zone";
import { EpochTracker } from "./epoch_tracker";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryParamsRequest, QueryParamsResponse, QueryGetValidatorsRequest, QueryGetValidatorsResponse, QueryGetICAAccountRequest, QueryGetICAAccountResponse, QueryGetHostZoneRequest, QueryGetHostZoneResponse, QueryAllHostZoneRequest, QueryAllHostZoneResponse, QueryModuleAddressRequest, QueryModuleAddressResponse, QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponse, QueryGetEpochTrackerRequest, QueryGetEpochTrackerResponse, QueryAllEpochTrackerRequest, QueryAllEpochTrackerResponse } from "./query";
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
    const endpoint = `Stridelabs/stride/stakeibc/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* Queries a Validator by host zone. */
  async validators(params: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponse> {
    const endpoint = `Stride-Labs/stride/stakeibc/validators/${params.chain_id}`;
    return await this.request<QueryGetValidatorsResponse>(endpoint);
  }

  /* Queries a ICAAccount by index. */
  async iCAAccount(_params: QueryGetICAAccountRequest = {}): Promise<QueryGetICAAccountResponse> {
    const endpoint = `Stride-Labs/stride/stakeibc/ica_account`;
    return await this.request<QueryGetICAAccountResponse>(endpoint);
  }

  /* Queries a HostZone by id. */
  async hostZone(params: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponse> {
    const endpoint = `Stride-Labs/stride/stakeibc/host_zone/${params.chain_id}`;
    return await this.request<QueryGetHostZoneResponse>(endpoint);
  }

  /* Queries a list of HostZone items. */
  async hostZoneAll(params: QueryAllHostZoneRequest = {
    pagination: undefined
  }): Promise<QueryAllHostZoneResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/stakeibc/host_zone`;
    return await this.request<QueryAllHostZoneResponse>(endpoint, options);
  }

  /* Queries a list of ModuleAddress items. */
  async moduleAddress(params: QueryModuleAddressRequest): Promise<QueryModuleAddressResponse> {
    const endpoint = `Stride-Labs/stride/stakeibc/module_address/${params.name}`;
    return await this.request<QueryModuleAddressResponse>(endpoint);
  }

  /* Queries a EpochTracker by index. */
  async epochTracker(params: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponse> {
    const endpoint = `Stride-Labs/stride/stakeibc/epoch_tracker/${params.epochIdentifier}`;
    return await this.request<QueryGetEpochTrackerResponse>(endpoint);
  }

  /* Queries a list of EpochTracker items. */
  async epochTrackerAll(params: QueryAllEpochTrackerRequest = {
    pagination: undefined
  }): Promise<QueryAllEpochTrackerResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/stakeibc/epoch_tracker`;
    return await this.request<QueryAllEpochTrackerResponse>(endpoint, options);
  }

}