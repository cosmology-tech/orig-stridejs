import { Rpc } from "@osmonauts/helpers";
import { MsgLiquidStake, MsgLiquidStakeResponseSDKType, MsgRedeemStake, MsgRedeemStakeResponseSDKType, MsgRegisterHostZone, MsgRegisterHostZoneResponseSDKType, MsgClaimUndelegatedTokens, MsgClaimUndelegatedTokensResponseSDKType, MsgRebalanceValidators, MsgRebalanceValidatorsResponseSDKType, MsgAddValidator, MsgAddValidatorResponseSDKType, MsgChangeValidatorWeight, MsgChangeValidatorWeightResponseSDKType, MsgDeleteValidator, MsgDeleteValidatorResponseSDKType, MsgRestoreInterchainAccount, MsgRestoreInterchainAccountResponseSDKType, MsgUpdateValidatorSharesExchRate, MsgUpdateValidatorSharesExchRateResponseSDKType, MsgClearBalance, MsgClearBalanceResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponseSDKType>;
    redeemStake(request: MsgRedeemStake): Promise<MsgRedeemStakeResponseSDKType>;
    registerHostZone(request: MsgRegisterHostZone): Promise<MsgRegisterHostZoneResponseSDKType>;
    claimUndelegatedTokens(request: MsgClaimUndelegatedTokens): Promise<MsgClaimUndelegatedTokensResponseSDKType>;
    rebalanceValidators(request: MsgRebalanceValidators): Promise<MsgRebalanceValidatorsResponseSDKType>;
    addValidator(request: MsgAddValidator): Promise<MsgAddValidatorResponseSDKType>;
    changeValidatorWeight(request: MsgChangeValidatorWeight): Promise<MsgChangeValidatorWeightResponseSDKType>;
    deleteValidator(request: MsgDeleteValidator): Promise<MsgDeleteValidatorResponseSDKType>;
    restoreInterchainAccount(request: MsgRestoreInterchainAccount): Promise<MsgRestoreInterchainAccountResponseSDKType>;
    updateValidatorSharesExchRate(request: MsgUpdateValidatorSharesExchRate): Promise<MsgUpdateValidatorSharesExchRateResponseSDKType>;
    clearBalance(request: MsgClearBalance): Promise<MsgClearBalanceResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponseSDKType>;
    redeemStake(request: MsgRedeemStake): Promise<MsgRedeemStakeResponseSDKType>;
    registerHostZone(request: MsgRegisterHostZone): Promise<MsgRegisterHostZoneResponseSDKType>;
    claimUndelegatedTokens(request: MsgClaimUndelegatedTokens): Promise<MsgClaimUndelegatedTokensResponseSDKType>;
    rebalanceValidators(request: MsgRebalanceValidators): Promise<MsgRebalanceValidatorsResponseSDKType>;
    addValidator(request: MsgAddValidator): Promise<MsgAddValidatorResponseSDKType>;
    changeValidatorWeight(request: MsgChangeValidatorWeight): Promise<MsgChangeValidatorWeightResponseSDKType>;
    deleteValidator(request: MsgDeleteValidator): Promise<MsgDeleteValidatorResponseSDKType>;
    restoreInterchainAccount(request: MsgRestoreInterchainAccount): Promise<MsgRestoreInterchainAccountResponseSDKType>;
    updateValidatorSharesExchRate(request: MsgUpdateValidatorSharesExchRate): Promise<MsgUpdateValidatorSharesExchRateResponseSDKType>;
    clearBalance(request: MsgClearBalance): Promise<MsgClearBalanceResponseSDKType>;
}
