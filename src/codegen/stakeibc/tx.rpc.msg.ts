import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgLiquidStake, MsgLiquidStakeResponse, MsgLiquidStakeResponseSDKType, MsgRedeemStake, MsgRedeemStakeResponse, MsgRedeemStakeResponseSDKType, MsgRegisterHostZone, MsgRegisterHostZoneResponse, MsgRegisterHostZoneResponseSDKType, MsgClaimUndelegatedTokens, MsgClaimUndelegatedTokensResponse, MsgClaimUndelegatedTokensResponseSDKType, MsgRebalanceValidators, MsgRebalanceValidatorsResponse, MsgRebalanceValidatorsResponseSDKType, MsgAddValidator, MsgAddValidatorResponse, MsgAddValidatorResponseSDKType, MsgChangeValidatorWeight, MsgChangeValidatorWeightResponse, MsgChangeValidatorWeightResponseSDKType, MsgDeleteValidator, MsgDeleteValidatorResponse, MsgDeleteValidatorResponseSDKType, MsgRestoreInterchainAccount, MsgRestoreInterchainAccountResponse, MsgRestoreInterchainAccountResponseSDKType, MsgUpdateValidatorSharesExchRate, MsgUpdateValidatorSharesExchRateResponse, MsgUpdateValidatorSharesExchRateResponseSDKType, MsgClearBalance, MsgClearBalanceResponse, MsgClearBalanceResponseSDKType } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponseSDKType>;
  /*null*/

  redeemStake(request: MsgRedeemStake): Promise<MsgRedeemStakeResponseSDKType>;
  /*null*/

  registerHostZone(request: MsgRegisterHostZone): Promise<MsgRegisterHostZoneResponseSDKType>;
  /*TODO(TEST-53): Remove this pre-launch (no need for clients to create / interact with ICAs)*/

  claimUndelegatedTokens(request: MsgClaimUndelegatedTokens): Promise<MsgClaimUndelegatedTokensResponseSDKType>;
  /*null*/

  rebalanceValidators(request: MsgRebalanceValidators): Promise<MsgRebalanceValidatorsResponseSDKType>;
  /*null*/

  addValidator(request: MsgAddValidator): Promise<MsgAddValidatorResponseSDKType>;
  /*null*/

  changeValidatorWeight(request: MsgChangeValidatorWeight): Promise<MsgChangeValidatorWeightResponseSDKType>;
  /*null*/

  deleteValidator(request: MsgDeleteValidator): Promise<MsgDeleteValidatorResponseSDKType>;
  /*null*/

  restoreInterchainAccount(request: MsgRestoreInterchainAccount): Promise<MsgRestoreInterchainAccountResponseSDKType>;
  /*null*/

  updateValidatorSharesExchRate(request: MsgUpdateValidatorSharesExchRate): Promise<MsgUpdateValidatorSharesExchRateResponseSDKType>;
  /*null*/

  clearBalance(request: MsgClearBalance): Promise<MsgClearBalanceResponseSDKType>;
  /*null*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.liquidStake = this.liquidStake.bind(this);
    this.redeemStake = this.redeemStake.bind(this);
    this.registerHostZone = this.registerHostZone.bind(this);
    this.claimUndelegatedTokens = this.claimUndelegatedTokens.bind(this);
    this.rebalanceValidators = this.rebalanceValidators.bind(this);
    this.addValidator = this.addValidator.bind(this);
    this.changeValidatorWeight = this.changeValidatorWeight.bind(this);
    this.deleteValidator = this.deleteValidator.bind(this);
    this.restoreInterchainAccount = this.restoreInterchainAccount.bind(this);
    this.updateValidatorSharesExchRate = this.updateValidatorSharesExchRate.bind(this);
    this.clearBalance = this.clearBalance.bind(this);
  }

  liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponseSDKType> {
    const data = MsgLiquidStake.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Msg", "LiquidStake", data);
    return promise.then(data => MsgLiquidStakeResponse.decode(new _m0.Reader(data)));
  }

  redeemStake(request: MsgRedeemStake): Promise<MsgRedeemStakeResponseSDKType> {
    const data = MsgRedeemStake.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Msg", "RedeemStake", data);
    return promise.then(data => MsgRedeemStakeResponse.decode(new _m0.Reader(data)));
  }

  registerHostZone(request: MsgRegisterHostZone): Promise<MsgRegisterHostZoneResponseSDKType> {
    const data = MsgRegisterHostZone.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Msg", "RegisterHostZone", data);
    return promise.then(data => MsgRegisterHostZoneResponse.decode(new _m0.Reader(data)));
  }

  claimUndelegatedTokens(request: MsgClaimUndelegatedTokens): Promise<MsgClaimUndelegatedTokensResponseSDKType> {
    const data = MsgClaimUndelegatedTokens.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Msg", "ClaimUndelegatedTokens", data);
    return promise.then(data => MsgClaimUndelegatedTokensResponse.decode(new _m0.Reader(data)));
  }

  rebalanceValidators(request: MsgRebalanceValidators): Promise<MsgRebalanceValidatorsResponseSDKType> {
    const data = MsgRebalanceValidators.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Msg", "RebalanceValidators", data);
    return promise.then(data => MsgRebalanceValidatorsResponse.decode(new _m0.Reader(data)));
  }

  addValidator(request: MsgAddValidator): Promise<MsgAddValidatorResponseSDKType> {
    const data = MsgAddValidator.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Msg", "AddValidator", data);
    return promise.then(data => MsgAddValidatorResponse.decode(new _m0.Reader(data)));
  }

  changeValidatorWeight(request: MsgChangeValidatorWeight): Promise<MsgChangeValidatorWeightResponseSDKType> {
    const data = MsgChangeValidatorWeight.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Msg", "ChangeValidatorWeight", data);
    return promise.then(data => MsgChangeValidatorWeightResponse.decode(new _m0.Reader(data)));
  }

  deleteValidator(request: MsgDeleteValidator): Promise<MsgDeleteValidatorResponseSDKType> {
    const data = MsgDeleteValidator.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Msg", "DeleteValidator", data);
    return promise.then(data => MsgDeleteValidatorResponse.decode(new _m0.Reader(data)));
  }

  restoreInterchainAccount(request: MsgRestoreInterchainAccount): Promise<MsgRestoreInterchainAccountResponseSDKType> {
    const data = MsgRestoreInterchainAccount.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Msg", "RestoreInterchainAccount", data);
    return promise.then(data => MsgRestoreInterchainAccountResponse.decode(new _m0.Reader(data)));
  }

  updateValidatorSharesExchRate(request: MsgUpdateValidatorSharesExchRate): Promise<MsgUpdateValidatorSharesExchRateResponseSDKType> {
    const data = MsgUpdateValidatorSharesExchRate.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Msg", "UpdateValidatorSharesExchRate", data);
    return promise.then(data => MsgUpdateValidatorSharesExchRateResponse.decode(new _m0.Reader(data)));
  }

  clearBalance(request: MsgClearBalance): Promise<MsgClearBalanceResponseSDKType> {
    const data = MsgClearBalance.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.stakeibc.Msg", "ClearBalance", data);
    return promise.then(data => MsgClearBalanceResponse.decode(new _m0.Reader(data)));
  }

}