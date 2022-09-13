import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Validator } from "./validator";
import { ICAAccount } from "./ica_account";
import { HostZone } from "./host_zone";
import { EpochTracker } from "./epoch_tracker";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryParamsRequest, QueryParamsResponse, QueryGetValidatorsRequest, QueryGetValidatorsResponse, QueryGetICAAccountRequest, QueryGetICAAccountResponse, QueryGetHostZoneRequest, QueryGetHostZoneResponse, QueryAllHostZoneRequest, QueryAllHostZoneResponse, QueryModuleAddressRequest, QueryModuleAddressResponse, QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponse, QueryGetEpochTrackerRequest, QueryGetEpochTrackerResponse, QueryAllEpochTrackerRequest, QueryAllEpochTrackerResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Parameters queries the parameters of the module.*/

  validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponse>;
  /*Queries a Validator by host zone.*/

  iCAAccount(request: QueryGetICAAccountRequest): Promise<QueryGetICAAccountResponse>;
  /*Queries a ICAAccount by index.*/

  hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponse>;
  /*Queries a HostZone by id.*/

  hostZoneAll(request: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponse>;
  /*Queries a list of HostZone items.*/

  moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponse>;
  /*Queries a list of ModuleAddress items.*/

  interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
  /*QueryInterchainAccountFromAddress returns the interchain account for given owner address on a given connection pair*/

  epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponse>;
  /*Queries a EpochTracker by index.*/

  epochTrackerAll(request: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponse>;
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

  params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponse> {
    const data = QueryGetValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "Validators", data);
    return promise.then(data => QueryGetValidatorsResponse.decode(new _m0.Reader(data)));
  }

  iCAAccount(request: QueryGetICAAccountRequest): Promise<QueryGetICAAccountResponse> {
    const data = QueryGetICAAccountRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "ICAAccount", data);
    return promise.then(data => QueryGetICAAccountResponse.decode(new _m0.Reader(data)));
  }

  hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponse> {
    const data = QueryGetHostZoneRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "HostZone", data);
    return promise.then(data => QueryGetHostZoneResponse.decode(new _m0.Reader(data)));
  }

  hostZoneAll(request: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponse> {
    const data = QueryAllHostZoneRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "HostZoneAll", data);
    return promise.then(data => QueryAllHostZoneResponse.decode(new _m0.Reader(data)));
  }

  moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponse> {
    const data = QueryModuleAddressRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "ModuleAddress", data);
    return promise.then(data => QueryModuleAddressResponse.decode(new _m0.Reader(data)));
  }

  interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse> {
    const data = QueryInterchainAccountFromAddressRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "InterchainAccountFromAddress", data);
    return promise.then(data => QueryInterchainAccountFromAddressResponse.decode(new _m0.Reader(data)));
  }

  epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponse> {
    const data = QueryGetEpochTrackerRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "EpochTracker", data);
    return promise.then(data => QueryGetEpochTrackerResponse.decode(new _m0.Reader(data)));
  }

  epochTrackerAll(request: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponse> {
    const data = QueryAllEpochTrackerRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Query", "EpochTrackerAll", data);
    return promise.then(data => QueryAllEpochTrackerResponse.decode(new _m0.Reader(data)));
  }

}