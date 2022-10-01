import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
export declare const stridelabsAminoConverters: {
    "/Stridelabs.stride.stakeibc.MsgLiquidStake": {
        aminoType: string;
        toAmino: ({ creator, amount, hostDenom }: import("../stakeibc/tx").MsgLiquidStake) => {
            creator: string;
            amount: string;
            host_denom: string;
        };
        fromAmino: ({ creator, amount, host_denom }: {
            creator: string;
            amount: string;
            host_denom: string;
        }) => import("../stakeibc/tx").MsgLiquidStake;
    };
    "/Stridelabs.stride.stakeibc.MsgRedeemStake": {
        aminoType: string;
        toAmino: ({ creator, amount, hostZone, receiver }: import("../stakeibc/tx").MsgRedeemStake) => {
            creator: string;
            amount: string;
            hostZone: string;
            receiver: string;
        };
        fromAmino: ({ creator, amount, hostZone, receiver }: {
            creator: string;
            amount: string;
            hostZone: string;
            receiver: string;
        }) => import("../stakeibc/tx").MsgRedeemStake;
    };
    "/Stridelabs.stride.stakeibc.MsgRegisterHostZone": {
        aminoType: string;
        toAmino: ({ connectionId, bech32prefix, hostDenom, ibcDenom, creator, transferChannelId, unbondingFrequency }: import("../stakeibc/tx").MsgRegisterHostZone) => {
            connection_id: string;
            bech32prefix: string;
            host_denom: string;
            ibc_denom: string;
            creator: string;
            transfer_channel_id: string;
            unbonding_frequency: string;
        };
        fromAmino: ({ connection_id, bech32prefix, host_denom, ibc_denom, creator, transfer_channel_id, unbonding_frequency }: {
            connection_id: string;
            bech32prefix: string;
            host_denom: string;
            ibc_denom: string;
            creator: string;
            transfer_channel_id: string;
            unbonding_frequency: string;
        }) => import("../stakeibc/tx").MsgRegisterHostZone;
    };
    "/Stridelabs.stride.stakeibc.MsgClaimUndelegatedTokens": {
        aminoType: string;
        toAmino: ({ creator, hostZoneId, epoch, sender }: import("../stakeibc/tx").MsgClaimUndelegatedTokens) => {
            creator: string;
            hostZoneId: string;
            epoch: string;
            sender: string;
        };
        fromAmino: ({ creator, hostZoneId, epoch, sender }: {
            creator: string;
            hostZoneId: string;
            epoch: string;
            sender: string;
        }) => import("../stakeibc/tx").MsgClaimUndelegatedTokens;
    };
    "/Stridelabs.stride.stakeibc.MsgRebalanceValidators": {
        aminoType: string;
        toAmino: ({ creator, hostZone, numRebalance }: import("../stakeibc/tx").MsgRebalanceValidators) => {
            creator: string;
            hostZone: string;
            numRebalance: string;
        };
        fromAmino: ({ creator, hostZone, numRebalance }: {
            creator: string;
            hostZone: string;
            numRebalance: string;
        }) => import("../stakeibc/tx").MsgRebalanceValidators;
    };
    "/Stridelabs.stride.stakeibc.MsgAddValidator": {
        aminoType: string;
        toAmino: ({ creator, hostZone, name, address, commission, weight }: import("../stakeibc/tx").MsgAddValidator) => {
            creator: string;
            hostZone: string;
            name: string;
            address: string;
            commission: string;
            weight: string;
        };
        fromAmino: ({ creator, hostZone, name, address, commission, weight }: {
            creator: string;
            hostZone: string;
            name: string;
            address: string;
            commission: string;
            weight: string;
        }) => import("../stakeibc/tx").MsgAddValidator;
    };
    "/Stridelabs.stride.stakeibc.MsgChangeValidatorWeight": {
        aminoType: string;
        toAmino: ({ creator, hostZone, valAddr, weight }: import("../stakeibc/tx").MsgChangeValidatorWeight) => {
            creator: string;
            hostZone: string;
            valAddr: string;
            weight: string;
        };
        fromAmino: ({ creator, hostZone, valAddr, weight }: {
            creator: string;
            hostZone: string;
            valAddr: string;
            weight: string;
        }) => import("../stakeibc/tx").MsgChangeValidatorWeight;
    };
    "/Stridelabs.stride.stakeibc.MsgDeleteValidator": {
        aminoType: string;
        toAmino: ({ creator, hostZone, valAddr }: import("../stakeibc/tx").MsgDeleteValidator) => {
            creator: string;
            hostZone: string;
            valAddr: string;
        };
        fromAmino: ({ creator, hostZone, valAddr }: {
            creator: string;
            hostZone: string;
            valAddr: string;
        }) => import("../stakeibc/tx").MsgDeleteValidator;
    };
    "/Stridelabs.stride.stakeibc.MsgRestoreInterchainAccount": {
        aminoType: string;
        toAmino: ({ creator, chainId, accountType }: import("../stakeibc/tx").MsgRestoreInterchainAccount) => {
            creator: string;
            chainId: string;
            accountType: number;
        };
        fromAmino: ({ creator, chainId, accountType }: {
            creator: string;
            chainId: string;
            accountType: number;
        }) => import("../stakeibc/tx").MsgRestoreInterchainAccount;
    };
    "/Stridelabs.stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
        aminoType: string;
        toAmino: ({ creator, chainId, valoper }: import("../stakeibc/tx").MsgUpdateValidatorSharesExchRate) => {
            creator: string;
            chainId: string;
            valoper: string;
        };
        fromAmino: ({ creator, chainId, valoper }: {
            creator: string;
            chainId: string;
            valoper: string;
        }) => import("../stakeibc/tx").MsgUpdateValidatorSharesExchRate;
    };
    "/Stridelabs.stride.stakeibc.MsgClearBalance": {
        aminoType: string;
        toAmino: ({ creator, chainId, amount, channel }: import("../stakeibc/tx").MsgClearBalance) => {
            creator: string;
            chain_id: string;
            amount: string;
            channel: string;
        };
        fromAmino: ({ creator, chain_id, amount, channel }: {
            creator: string;
            chain_id: string;
            amount: string;
            channel: string;
        }) => import("../stakeibc/tx").MsgClearBalance;
    };
};
export declare const stridelabsProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningStridelabsClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningStridelabsClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
