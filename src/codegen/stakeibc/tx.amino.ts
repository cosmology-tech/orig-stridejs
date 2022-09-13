import { ICAAccountType, iCAAccountTypeFromJSON } from "./ica_account";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidator, MsgChangeValidatorWeight, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgClearBalance } from "./tx";
export interface AminoMsgLiquidStake extends AminoMsg {
  type: "/Stridelabs.stride.stakeibc.MsgLiquidStake";
  value: {
    creator: string;
    amount: string;
    host_denom: string;
  };
}
export interface AminoMsgRedeemStake extends AminoMsg {
  type: "/Stridelabs.stride.stakeibc.MsgRedeemStake";
  value: {
    creator: string;
    amount: string;
    hostZone: string;
    receiver: string;
  };
}
export interface AminoMsgRegisterHostZone extends AminoMsg {
  type: "/Stridelabs.stride.stakeibc.MsgRegisterHostZone";
  value: {
    connection_id: string;
    bech32prefix: string;
    host_denom: string;
    ibc_denom: string;
    creator: string;
    transfer_channel_id: string;
    unbonding_frequency: string;
  };
}
export interface AminoMsgClaimUndelegatedTokens extends AminoMsg {
  type: "/Stridelabs.stride.stakeibc.MsgClaimUndelegatedTokens";
  value: {
    creator: string;
    hostZoneId: string;
    epoch: string;
    sender: string;
  };
}
export interface AminoMsgRebalanceValidators extends AminoMsg {
  type: "/Stridelabs.stride.stakeibc.MsgRebalanceValidators";
  value: {
    creator: string;
    hostZone: string;
    numRebalance: string;
  };
}
export interface AminoMsgAddValidator extends AminoMsg {
  type: "/Stridelabs.stride.stakeibc.MsgAddValidator";
  value: {
    creator: string;
    hostZone: string;
    name: string;
    address: string;
    commission: string;
    weight: string;
  };
}
export interface AminoMsgChangeValidatorWeight extends AminoMsg {
  type: "/Stridelabs.stride.stakeibc.MsgChangeValidatorWeight";
  value: {
    creator: string;
    hostZone: string;
    valAddr: string;
    weight: string;
  };
}
export interface AminoMsgDeleteValidator extends AminoMsg {
  type: "/Stridelabs.stride.stakeibc.MsgDeleteValidator";
  value: {
    creator: string;
    hostZone: string;
    valAddr: string;
  };
}
export interface AminoMsgRestoreInterchainAccount extends AminoMsg {
  type: "/Stridelabs.stride.stakeibc.MsgRestoreInterchainAccount";
  value: {
    creator: string;
    chainId: string;
    accountType: number;
  };
}
export interface AminoMsgUpdateValidatorSharesExchRate extends AminoMsg {
  type: "/Stridelabs.stride.stakeibc.MsgUpdateValidatorSharesExchRate";
  value: {
    creator: string;
    chainId: string;
    valoper: string;
  };
}
export interface AminoMsgClearBalance extends AminoMsg {
  type: "/Stridelabs.stride.stakeibc.MsgClearBalance";
  value: {
    creator: string;
    chain_id: string;
    amount: string;
    channel: string;
  };
}
export const AminoConverter = {
  "/Stridelabs.stride.stakeibc.MsgLiquidStake": {
    aminoType: "/Stridelabs.stride.stakeibc.MsgLiquidStake",
    toAmino: ({
      creator,
      amount,
      host_denom
    }: MsgLiquidStake): AminoMsgLiquidStake["value"] => {
      return {
        creator,
        amount: amount.toString(),
        host_denom
      };
    },
    fromAmino: ({
      creator,
      amount,
      host_denom
    }: AminoMsgLiquidStake["value"]): MsgLiquidStake => {
      return {
        creator,
        amount: Long.fromString(amount),
        host_denom
      };
    }
  },
  "/Stridelabs.stride.stakeibc.MsgRedeemStake": {
    aminoType: "/Stridelabs.stride.stakeibc.MsgRedeemStake",
    toAmino: ({
      creator,
      amount,
      hostZone,
      receiver
    }: MsgRedeemStake): AminoMsgRedeemStake["value"] => {
      return {
        creator,
        amount: amount.toString(),
        hostZone,
        receiver
      };
    },
    fromAmino: ({
      creator,
      amount,
      hostZone,
      receiver
    }: AminoMsgRedeemStake["value"]): MsgRedeemStake => {
      return {
        creator,
        amount: Long.fromString(amount),
        hostZone,
        receiver
      };
    }
  },
  "/Stridelabs.stride.stakeibc.MsgRegisterHostZone": {
    aminoType: "/Stridelabs.stride.stakeibc.MsgRegisterHostZone",
    toAmino: ({
      connection_id,
      bech32prefix,
      host_denom,
      ibc_denom,
      creator,
      transfer_channel_id,
      unbonding_frequency
    }: MsgRegisterHostZone): AminoMsgRegisterHostZone["value"] => {
      return {
        connection_id,
        bech32prefix,
        host_denom,
        ibc_denom,
        creator,
        transfer_channel_id,
        unbonding_frequency: unbonding_frequency.toString()
      };
    },
    fromAmino: ({
      connection_id,
      bech32prefix,
      host_denom,
      ibc_denom,
      creator,
      transfer_channel_id,
      unbonding_frequency
    }: AminoMsgRegisterHostZone["value"]): MsgRegisterHostZone => {
      return {
        connection_id,
        bech32prefix,
        host_denom,
        ibc_denom,
        creator,
        transfer_channel_id,
        unbonding_frequency: Long.fromString(unbonding_frequency)
      };
    }
  },
  "/Stridelabs.stride.stakeibc.MsgClaimUndelegatedTokens": {
    aminoType: "/Stridelabs.stride.stakeibc.MsgClaimUndelegatedTokens",
    toAmino: ({
      creator,
      hostZoneId,
      epoch,
      sender
    }: MsgClaimUndelegatedTokens): AminoMsgClaimUndelegatedTokens["value"] => {
      return {
        creator,
        hostZoneId,
        epoch: epoch.toString(),
        sender
      };
    },
    fromAmino: ({
      creator,
      hostZoneId,
      epoch,
      sender
    }: AminoMsgClaimUndelegatedTokens["value"]): MsgClaimUndelegatedTokens => {
      return {
        creator,
        hostZoneId,
        epoch: Long.fromString(epoch),
        sender
      };
    }
  },
  "/Stridelabs.stride.stakeibc.MsgRebalanceValidators": {
    aminoType: "/Stridelabs.stride.stakeibc.MsgRebalanceValidators",
    toAmino: ({
      creator,
      hostZone,
      numRebalance
    }: MsgRebalanceValidators): AminoMsgRebalanceValidators["value"] => {
      return {
        creator,
        hostZone,
        numRebalance: numRebalance.toString()
      };
    },
    fromAmino: ({
      creator,
      hostZone,
      numRebalance
    }: AminoMsgRebalanceValidators["value"]): MsgRebalanceValidators => {
      return {
        creator,
        hostZone,
        numRebalance: Long.fromString(numRebalance)
      };
    }
  },
  "/Stridelabs.stride.stakeibc.MsgAddValidator": {
    aminoType: "/Stridelabs.stride.stakeibc.MsgAddValidator",
    toAmino: ({
      creator,
      hostZone,
      name,
      address,
      commission,
      weight
    }: MsgAddValidator): AminoMsgAddValidator["value"] => {
      return {
        creator,
        hostZone,
        name,
        address,
        commission: commission.toString(),
        weight: weight.toString()
      };
    },
    fromAmino: ({
      creator,
      hostZone,
      name,
      address,
      commission,
      weight
    }: AminoMsgAddValidator["value"]): MsgAddValidator => {
      return {
        creator,
        hostZone,
        name,
        address,
        commission: Long.fromString(commission),
        weight: Long.fromString(weight)
      };
    }
  },
  "/Stridelabs.stride.stakeibc.MsgChangeValidatorWeight": {
    aminoType: "/Stridelabs.stride.stakeibc.MsgChangeValidatorWeight",
    toAmino: ({
      creator,
      hostZone,
      valAddr,
      weight
    }: MsgChangeValidatorWeight): AminoMsgChangeValidatorWeight["value"] => {
      return {
        creator,
        hostZone,
        valAddr,
        weight: weight.toString()
      };
    },
    fromAmino: ({
      creator,
      hostZone,
      valAddr,
      weight
    }: AminoMsgChangeValidatorWeight["value"]): MsgChangeValidatorWeight => {
      return {
        creator,
        hostZone,
        valAddr,
        weight: Long.fromString(weight)
      };
    }
  },
  "/Stridelabs.stride.stakeibc.MsgDeleteValidator": {
    aminoType: "/Stridelabs.stride.stakeibc.MsgDeleteValidator",
    toAmino: ({
      creator,
      hostZone,
      valAddr
    }: MsgDeleteValidator): AminoMsgDeleteValidator["value"] => {
      return {
        creator,
        hostZone,
        valAddr
      };
    },
    fromAmino: ({
      creator,
      hostZone,
      valAddr
    }: AminoMsgDeleteValidator["value"]): MsgDeleteValidator => {
      return {
        creator,
        hostZone,
        valAddr
      };
    }
  },
  "/Stridelabs.stride.stakeibc.MsgRestoreInterchainAccount": {
    aminoType: "/Stridelabs.stride.stakeibc.MsgRestoreInterchainAccount",
    toAmino: ({
      creator,
      chainId,
      accountType
    }: MsgRestoreInterchainAccount): AminoMsgRestoreInterchainAccount["value"] => {
      return {
        creator,
        chainId,
        accountType
      };
    },
    fromAmino: ({
      creator,
      chainId,
      accountType
    }: AminoMsgRestoreInterchainAccount["value"]): MsgRestoreInterchainAccount => {
      return {
        creator,
        chainId,
        accountType: iCAAccountTypeFromJSON(accountType)
      };
    }
  },
  "/Stridelabs.stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
    aminoType: "/Stridelabs.stride.stakeibc.MsgUpdateValidatorSharesExchRate",
    toAmino: ({
      creator,
      chainId,
      valoper
    }: MsgUpdateValidatorSharesExchRate): AminoMsgUpdateValidatorSharesExchRate["value"] => {
      return {
        creator,
        chainId,
        valoper
      };
    },
    fromAmino: ({
      creator,
      chainId,
      valoper
    }: AminoMsgUpdateValidatorSharesExchRate["value"]): MsgUpdateValidatorSharesExchRate => {
      return {
        creator,
        chainId,
        valoper
      };
    }
  },
  "/Stridelabs.stride.stakeibc.MsgClearBalance": {
    aminoType: "/Stridelabs.stride.stakeibc.MsgClearBalance",
    toAmino: ({
      creator,
      chain_id,
      amount,
      channel
    }: MsgClearBalance): AminoMsgClearBalance["value"] => {
      return {
        creator,
        chain_id,
        amount: amount.toString(),
        channel
      };
    },
    fromAmino: ({
      creator,
      chain_id,
      amount,
      channel
    }: AminoMsgClearBalance["value"]): MsgClearBalance => {
      return {
        creator,
        chain_id,
        amount: Long.fromString(amount),
        channel
      };
    }
  }
};