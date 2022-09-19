import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryEpochProvisionsRequest, QueryEpochProvisionsResponseSDKType } from "./query";
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
  /* Params returns the total set of minting parameters. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `mint/v1beta1/params`;
    return await this.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* EpochProvisions current minting epoch provisions value. */


  async epochProvisions(_params: QueryEpochProvisionsRequest = {}): Promise<QueryEpochProvisionsResponseSDKType> {
    const endpoint = `mint/v1beta1/epoch_provisions`;
    return await this.get<QueryEpochProvisionsResponseSDKType>(endpoint);
  }

}