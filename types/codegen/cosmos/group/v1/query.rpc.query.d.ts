import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryGroupInfoRequest, QueryGroupInfoResponseSDKType, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponseSDKType, QueryGroupMembersRequest, QueryGroupMembersResponseSDKType, QueryGroupsByAdminRequest, QueryGroupsByAdminResponseSDKType, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponseSDKType, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponseSDKType, QueryProposalRequest, QueryProposalResponseSDKType, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponseSDKType, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponseSDKType, QueryVotesByProposalRequest, QueryVotesByProposalResponseSDKType, QueryVotesByVoterRequest, QueryVotesByVoterResponseSDKType, QueryGroupsByMemberRequest, QueryGroupsByMemberResponseSDKType, QueryTallyResultRequest, QueryTallyResultResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponseSDKType>;
    groupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponseSDKType>;
    groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponseSDKType>;
    groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponseSDKType>;
    groupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponseSDKType>;
    groupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponseSDKType>;
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponseSDKType>;
    proposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponseSDKType>;
    voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponseSDKType>;
    votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponseSDKType>;
    votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponseSDKType>;
    groupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponseSDKType>;
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponseSDKType>;
    groupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponseSDKType>;
    groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponseSDKType>;
    groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponseSDKType>;
    groupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponseSDKType>;
    groupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponseSDKType>;
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponseSDKType>;
    proposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponseSDKType>;
    voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponseSDKType>;
    votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponseSDKType>;
    votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponseSDKType>;
    groupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponseSDKType>;
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponseSDKType>;
    groupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponseSDKType>;
    groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponseSDKType>;
    groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponseSDKType>;
    groupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponseSDKType>;
    groupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponseSDKType>;
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponseSDKType>;
    proposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponseSDKType>;
    voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponseSDKType>;
    votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponseSDKType>;
    votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponseSDKType>;
    groupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponseSDKType>;
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType>;
};
