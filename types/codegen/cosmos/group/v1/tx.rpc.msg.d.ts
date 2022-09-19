import { Rpc } from "@osmonauts/helpers";
import { MsgCreateGroup, MsgCreateGroupResponseSDKType, MsgUpdateGroupMembers, MsgUpdateGroupMembersResponseSDKType, MsgUpdateGroupAdmin, MsgUpdateGroupAdminResponseSDKType, MsgUpdateGroupMetadata, MsgUpdateGroupMetadataResponseSDKType, MsgCreateGroupPolicy, MsgCreateGroupPolicyResponseSDKType, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicyResponseSDKType, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyAdminResponseSDKType, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyDecisionPolicyResponseSDKType, MsgUpdateGroupPolicyMetadata, MsgUpdateGroupPolicyMetadataResponseSDKType, MsgSubmitProposal, MsgSubmitProposalResponseSDKType, MsgWithdrawProposal, MsgWithdrawProposalResponseSDKType, MsgVote, MsgVoteResponseSDKType, MsgExec, MsgExecResponseSDKType, MsgLeaveGroup, MsgLeaveGroupResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    createGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponseSDKType>;
    updateGroupMembers(request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponseSDKType>;
    updateGroupAdmin(request: MsgUpdateGroupAdmin): Promise<MsgUpdateGroupAdminResponseSDKType>;
    updateGroupMetadata(request: MsgUpdateGroupMetadata): Promise<MsgUpdateGroupMetadataResponseSDKType>;
    createGroupPolicy(request: MsgCreateGroupPolicy): Promise<MsgCreateGroupPolicyResponseSDKType>;
    createGroupWithPolicy(request: MsgCreateGroupWithPolicy): Promise<MsgCreateGroupWithPolicyResponseSDKType>;
    updateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin): Promise<MsgUpdateGroupPolicyAdminResponseSDKType>;
    updateGroupPolicyDecisionPolicy(request: MsgUpdateGroupPolicyDecisionPolicy): Promise<MsgUpdateGroupPolicyDecisionPolicyResponseSDKType>;
    updateGroupPolicyMetadata(request: MsgUpdateGroupPolicyMetadata): Promise<MsgUpdateGroupPolicyMetadataResponseSDKType>;
    submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponseSDKType>;
    withdrawProposal(request: MsgWithdrawProposal): Promise<MsgWithdrawProposalResponseSDKType>;
    vote(request: MsgVote): Promise<MsgVoteResponseSDKType>;
    exec(request: MsgExec): Promise<MsgExecResponseSDKType>;
    leaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponseSDKType>;
    updateGroupMembers(request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponseSDKType>;
    updateGroupAdmin(request: MsgUpdateGroupAdmin): Promise<MsgUpdateGroupAdminResponseSDKType>;
    updateGroupMetadata(request: MsgUpdateGroupMetadata): Promise<MsgUpdateGroupMetadataResponseSDKType>;
    createGroupPolicy(request: MsgCreateGroupPolicy): Promise<MsgCreateGroupPolicyResponseSDKType>;
    createGroupWithPolicy(request: MsgCreateGroupWithPolicy): Promise<MsgCreateGroupWithPolicyResponseSDKType>;
    updateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin): Promise<MsgUpdateGroupPolicyAdminResponseSDKType>;
    updateGroupPolicyDecisionPolicy(request: MsgUpdateGroupPolicyDecisionPolicy): Promise<MsgUpdateGroupPolicyDecisionPolicyResponseSDKType>;
    updateGroupPolicyMetadata(request: MsgUpdateGroupPolicyMetadata): Promise<MsgUpdateGroupPolicyMetadataResponseSDKType>;
    submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponseSDKType>;
    withdrawProposal(request: MsgWithdrawProposal): Promise<MsgWithdrawProposalResponseSDKType>;
    vote(request: MsgVote): Promise<MsgVoteResponseSDKType>;
    exec(request: MsgExec): Promise<MsgExecResponseSDKType>;
    leaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponseSDKType>;
}
