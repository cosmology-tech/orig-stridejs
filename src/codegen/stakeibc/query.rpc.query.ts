import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryParamsResponseSDKType, QueryGetValidatorsRequest, QueryGetValidatorsResponse, QueryGetValidatorsResponseSDKType, QueryGetICAAccountRequest, QueryGetICAAccountResponse, QueryGetICAAccountResponseSDKType, QueryGetHostZoneRequest, QueryGetHostZoneResponse, QueryGetHostZoneResponseSDKType, QueryAllHostZoneRequest, QueryAllHostZoneResponse, QueryAllHostZoneResponseSDKType, QueryModuleAddressRequest, QueryModuleAddressResponse, QueryModuleAddressResponseSDKType, QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponse, QueryInterchainAccountFromAddressResponseSDKType, QueryGetEpochTrackerRequest, QueryGetEpochTrackerResponse, QueryGetEpochTrackerResponseSDKType, QueryAllEpochTrackerRequest, QueryAllEpochTrackerResponse, QueryAllEpochTrackerResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Parameters queries the parameters of the module.*/

  validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponseSDKType>;
  /*Queries a Validator by host zone.*/

  iCAAccount(request?: QueryGetICAAccountRequest): Promise<QueryGetICAAccountResponseSDKType>;
  /*Queries a ICAAccount by index.*/

  hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponseSDKType>;
  /*Queries a HostZone by id.*/

  hostZoneAll(request?: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponseSDKType>;
  /*Queries a list of HostZone items.*/

  moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponseSDKType>;
  /*Queries a list of ModuleAddress items.*/

  interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponseSDKType>;
  /*QueryInterchainAccountFromAddress returns the interchain account for given owner address on a given connection pair*/

  epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponseSDKType>;
  /*Queries a EpochTracker by index.*/

  epochTrackerAll(request?: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponseSDKType>;
  /*Queries a list of EpochTracker items.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.validators = this.validators.bind(this);
    this.iCAAccount = this.iCAAccount.bind(this);
    this.hostZone = this.hostZone.bind(this);
    this.hostZoneAll = this.hostZoneAll.bind(this);
    this.moduleAddress = this.moduleAddress.bind(this);
    this.interchainAccountFromAddress = this.interchainAccountFromAddress.bind(this);
    this.epochTracker = this.epochTracker.bind(this);
    this.epochTrackerAll = this.epochTrackerAll.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponseSDKType> {
    const data = QueryGetValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "Validators", data);
    return promise.then(data => QueryGetValidatorsResponse.decode(new _m0.Reader(data)));
  }

  iCAAccount(request: QueryGetICAAccountRequest = {}): Promise<QueryGetICAAccountResponseSDKType> {
    const data = QueryGetICAAccountRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "ICAAccount", data);
    return promise.then(data => QueryGetICAAccountResponse.decode(new _m0.Reader(data)));
  }

  hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponseSDKType> {
    const data = QueryGetHostZoneRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "HostZone", data);
    return promise.then(data => QueryGetHostZoneResponse.decode(new _m0.Reader(data)));
  }

  hostZoneAll(request: QueryAllHostZoneRequest = {
    pagination: undefined
  }): Promise<QueryAllHostZoneResponseSDKType> {
    const data = QueryAllHostZoneRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "HostZoneAll", data);
    return promise.then(data => QueryAllHostZoneResponse.decode(new _m0.Reader(data)));
  }

  moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponseSDKType> {
    const data = QueryModuleAddressRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "ModuleAddress", data);
    return promise.then(data => QueryModuleAddressResponse.decode(new _m0.Reader(data)));
  }

  interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponseSDKType> {
    const data = QueryInterchainAccountFromAddressRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "InterchainAccountFromAddress", data);
    return promise.then(data => QueryInterchainAccountFromAddressResponse.decode(new _m0.Reader(data)));
  }

  epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponseSDKType> {
    const data = QueryGetEpochTrackerRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "EpochTracker", data);
    return promise.then(data => QueryGetEpochTrackerResponse.decode(new _m0.Reader(data)));
  }

  epochTrackerAll(request: QueryAllEpochTrackerRequest = {
    pagination: undefined
  }): Promise<QueryAllEpochTrackerResponseSDKType> {
    const data = QueryAllEpochTrackerRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "EpochTrackerAll", data);
    return promise.then(data => QueryAllEpochTrackerResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
      return queryService.params(request);
    },

    validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponseSDKType> {
      return queryService.validators(request);
    },

    iCAAccount(request?: QueryGetICAAccountRequest): Promise<QueryGetICAAccountResponseSDKType> {
      return queryService.iCAAccount(request);
    },

    hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponseSDKType> {
      return queryService.hostZone(request);
    },

    hostZoneAll(request?: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponseSDKType> {
      return queryService.hostZoneAll(request);
    },

    moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponseSDKType> {
      return queryService.moduleAddress(request);
    },

    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponseSDKType> {
      return queryService.interchainAccountFromAddress(request);
    },

    epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponseSDKType> {
      return queryService.epochTracker(request);
    },

    epochTrackerAll(request?: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponseSDKType> {
      return queryService.epochTrackerAll(request);
    }

  };
};