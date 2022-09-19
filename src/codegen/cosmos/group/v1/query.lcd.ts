import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryGroupInfoRequest, QueryGroupInfoResponseSDKType, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponseSDKType, QueryGroupMembersRequest, QueryGroupMembersResponseSDKType, QueryGroupsByAdminRequest, QueryGroupsByAdminResponseSDKType, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponseSDKType, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponseSDKType, QueryProposalRequest, QueryProposalResponseSDKType, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponseSDKType, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponseSDKType, QueryVotesByProposalRequest, QueryVotesByProposalResponseSDKType, QueryVotesByVoterRequest, QueryVotesByVoterResponseSDKType, QueryGroupsByMemberRequest, QueryGroupsByMemberResponseSDKType, QueryTallyResultRequest, QueryTallyResultResponseSDKType } from "./query";
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
  /* GroupInfo queries group info based on group id. */


  async groupInfo(params: QueryGroupInfoRequest): Promise<QueryGroupInfoResponseSDKType> {
    const endpoint = `cosmos/group/v1/group_info/${params.groupId}`;
    return await this.get<QueryGroupInfoResponseSDKType>(endpoint);
  }
  /* GroupPolicyInfo queries group policy info based on account address of group policy. */


  async groupPolicyInfo(params: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponseSDKType> {
    const endpoint = `cosmos/group/v1/group_policy_info/${params.address}`;
    return await this.get<QueryGroupPolicyInfoResponseSDKType>(endpoint);
  }
  /* GroupMembers queries members of a group */


  async groupMembers(params: QueryGroupMembersRequest): Promise<QueryGroupMembersResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/group_members/${params.groupId}`;
    return await this.get<QueryGroupMembersResponseSDKType>(endpoint, options);
  }
  /* GroupsByAdmin queries groups by admin address. */


  async groupsByAdmin(params: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/groups_by_admin/${params.admin}`;
    return await this.get<QueryGroupsByAdminResponseSDKType>(endpoint, options);
  }
  /* GroupPoliciesByGroup queries group policies by group id. */


  async groupPoliciesByGroup(params: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/group_policies_by_group/${params.groupId}`;
    return await this.get<QueryGroupPoliciesByGroupResponseSDKType>(endpoint, options);
  }
  /* GroupsByAdmin queries group policies by admin address. */


  async groupPoliciesByAdmin(params: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/group_policies_by_admin/${params.admin}`;
    return await this.get<QueryGroupPoliciesByAdminResponseSDKType>(endpoint, options);
  }
  /* Proposal queries a proposal based on proposal id. */


  async proposal(params: QueryProposalRequest): Promise<QueryProposalResponseSDKType> {
    const endpoint = `cosmos/group/v1/proposal/${params.proposalId}`;
    return await this.get<QueryProposalResponseSDKType>(endpoint);
  }
  /* ProposalsByGroupPolicy queries proposals based on account address of group policy. */


  async proposalsByGroupPolicy(params: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/proposals_by_group_policy/${params.address}`;
    return await this.get<QueryProposalsByGroupPolicyResponseSDKType>(endpoint, options);
  }
  /* VoteByProposalVoter queries a vote by proposal id and voter. */


  async voteByProposalVoter(params: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponseSDKType> {
    const endpoint = `cosmos/group/v1/vote_by_proposal_voter/${params.proposalId}/${params.voter}`;
    return await this.get<QueryVoteByProposalVoterResponseSDKType>(endpoint);
  }
  /* VotesByProposal queries a vote by proposal. */


  async votesByProposal(params: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/votes_by_proposal/${params.proposalId}`;
    return await this.get<QueryVotesByProposalResponseSDKType>(endpoint, options);
  }
  /* VotesByVoter queries a vote by voter. */


  async votesByVoter(params: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/votes_by_voter/${params.voter}`;
    return await this.get<QueryVotesByVoterResponseSDKType>(endpoint, options);
  }
  /* GroupsByMember queries groups by member address. */


  async groupsByMember(params: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/groups_by_member/${params.address}`;
    return await this.get<QueryGroupsByMemberResponseSDKType>(endpoint, options);
  }
  /* TallyResult queries the tally of a proposal votes. */


  async tallyResult(params: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType> {
    const endpoint = `cosmos/group/v1/proposals/${params.proposalId}/tally`;
    return await this.get<QueryTallyResultResponseSDKType>(endpoint);
  }

}