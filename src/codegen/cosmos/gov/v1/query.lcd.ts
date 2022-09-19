import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryProposalRequest, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsResponseSDKType, QueryVoteRequest, QueryVoteResponseSDKType, QueryVotesRequest, QueryVotesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryDepositRequest, QueryDepositResponseSDKType, QueryDepositsRequest, QueryDepositsResponseSDKType, QueryTallyResultRequest, QueryTallyResultResponseSDKType } from "./query";
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
  /* Proposal queries proposal details based on ProposalID. */


  async proposal(params: QueryProposalRequest): Promise<QueryProposalResponseSDKType> {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}`;
    return await this.get<QueryProposalResponseSDKType>(endpoint);
  }
  /* Proposals queries all proposals based on given status. */


  async proposals(params: QueryProposalsRequest): Promise<QueryProposalsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.proposalStatus !== "undefined") {
      options.params.proposal_status = params.proposalStatus;
    }

    if (typeof params?.voter !== "undefined") {
      options.params.voter = params.voter;
    }

    if (typeof params?.depositor !== "undefined") {
      options.params.depositor = params.depositor;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/gov/v1/proposals`;
    return await this.get<QueryProposalsResponseSDKType>(endpoint, options);
  }
  /* Vote queries voted information based on proposalID, voterAddr. */


  async vote(params: QueryVoteRequest): Promise<QueryVoteResponseSDKType> {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}votes/${params.voter}`;
    return await this.get<QueryVoteResponseSDKType>(endpoint);
  }
  /* Votes queries votes of a given proposal. */


  async votes(params: QueryVotesRequest): Promise<QueryVotesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/votes`;
    return await this.get<QueryVotesResponseSDKType>(endpoint, options);
  }
  /* Params queries all parameters of the gov module. */


  async params(params: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/gov/v1/params/${params.paramsType}`;
    return await this.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Deposit queries single deposit information based proposalID, depositAddr. */


  async deposit(params: QueryDepositRequest): Promise<QueryDepositResponseSDKType> {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}deposits/${params.depositor}`;
    return await this.get<QueryDepositResponseSDKType>(endpoint);
  }
  /* Deposits queries all deposits of a single proposal. */


  async deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/deposits`;
    return await this.get<QueryDepositsResponseSDKType>(endpoint, options);
  }
  /* TallyResult queries the tally of a proposal vote. */


  async tallyResult(params: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType> {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/tally`;
    return await this.get<QueryTallyResultResponseSDKType>(endpoint);
  }

}