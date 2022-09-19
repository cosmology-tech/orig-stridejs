import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryConnectionRequest, QueryConnectionResponseSDKType, QueryConnectionsRequest, QueryConnectionsResponseSDKType, QueryClientConnectionsRequest, QueryClientConnectionsResponseSDKType, QueryConnectionClientStateRequest, QueryConnectionClientStateResponseSDKType, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponseSDKType } from "./query";
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
  /* Connection queries an IBC connection end. */


  async connection(params: QueryConnectionRequest): Promise<QueryConnectionResponseSDKType> {
    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}`;
    return await this.get<QueryConnectionResponseSDKType>(endpoint);
  }
  /* Connections queries all the IBC connections of a chain. */


  async connections(params: QueryConnectionsRequest = {
    pagination: undefined
  }): Promise<QueryConnectionsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/connection/v1/connections`;
    return await this.get<QueryConnectionsResponseSDKType>(endpoint, options);
  }
  /* ClientConnections queries the connection paths associated with a client
  state. */


  async clientConnections(params: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponseSDKType> {
    const endpoint = `ibc/core/connection/v1/client_connections/${params.clientId}`;
    return await this.get<QueryClientConnectionsResponseSDKType>(endpoint);
  }
  /* ConnectionClientState queries the client state associated with the
  connection. */


  async connectionClientState(params: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponseSDKType> {
    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}/client_state`;
    return await this.get<QueryConnectionClientStateResponseSDKType>(endpoint);
  }
  /* ConnectionConsensusState queries the consensus state associated with the
  connection. */


  async connectionConsensusState(params: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponseSDKType> {
    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}/consensus_state/revision/${params.revisionNumber}height/${params.revisionHeight}`;
    return await this.get<QueryConnectionConsensusStateResponseSDKType>(endpoint);
  }

}