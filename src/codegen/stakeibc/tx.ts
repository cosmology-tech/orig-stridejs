import { ICAAccountType, iCAAccountTypeFromJSON, iCAAccountTypeToJSON } from "./ica_account";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface MsgLiquidStake {
  creator: string;
  amount: Long;

  /** TODO(TEST-86): Update Denom -> HostDenom */
  host_denom: string;
}
export interface MsgLiquidStakeResponse {}
export interface MsgClearBalance {
  creator: string;
  chain_id: string;
  amount: Long;
  channel: string;
}
export interface MsgClearBalanceResponse {}
export interface MsgRedeemStake {
  creator: string;
  amount: Long;
  hostZone: string;
  receiver: string;
}
export interface MsgRedeemStakeResponse {}

/** next: 13 */
export interface MsgRegisterHostZone {
  connection_id: string;
  bech32prefix: string;
  host_denom: string;
  ibc_denom: string;
  creator: string;
  transfer_channel_id: string;
  unbonding_frequency: Long;
}

/** TODO(TEST-53): Remove this pre-launch (no need for clients to create / interact with ICAs) */
export interface MsgRegisterHostZoneResponse {}
export interface MsgClaimUndelegatedTokens {
  creator: string;

  /** UserUnbondingRecords are keyed on {chain_id}.{epoch}.{sender} */
  hostZoneId: string;
  epoch: Long;
  sender: string;
}
export interface MsgClaimUndelegatedTokensResponse {}
export interface MsgRebalanceValidators {
  creator: string;
  hostZone: string;
  numRebalance: Long;
}
export interface MsgRebalanceValidatorsResponse {}
export interface MsgAddValidator {
  creator: string;
  hostZone: string;
  name: string;
  address: string;
  commission: Long;
  weight: Long;
}
export interface MsgAddValidatorResponse {}
export interface MsgChangeValidatorWeight {
  creator: string;
  hostZone: string;
  valAddr: string;
  weight: Long;
}
export interface MsgChangeValidatorWeightResponse {}
export interface MsgDeleteValidator {
  creator: string;
  hostZone: string;
  valAddr: string;
}
export interface MsgDeleteValidatorResponse {}
export interface MsgRestoreInterchainAccount {
  creator: string;
  chainId: string;
  accountType: ICAAccountType;
}
export interface MsgRestoreInterchainAccountResponse {}
export interface MsgUpdateValidatorSharesExchRate {
  creator: string;
  chainId: string;
  valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateResponse {}

function createBaseMsgLiquidStake(): MsgLiquidStake {
  return {
    creator: "",
    amount: Long.UZERO,
    host_denom: ""
  };
}

export const MsgLiquidStake = {
  encode(message: MsgLiquidStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }

    if (message.host_denom !== "") {
      writer.uint32(26).string(message.host_denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStake();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.amount = (reader.uint64() as Long);
          break;

        case 3:
          message.host_denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgLiquidStake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? Long.fromString(object.amount) : Long.UZERO,
      host_denom: isSet(object.host_denom) ? String(object.host_denom) : ""
    };
  },

  toJSON(message: MsgLiquidStake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    message.host_denom !== undefined && (obj.host_denom = message.host_denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLiquidStake>): MsgLiquidStake {
    const message = createBaseMsgLiquidStake();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.host_denom = object.host_denom ?? "";
    return message;
  }

};

function createBaseMsgLiquidStakeResponse(): MsgLiquidStakeResponse {
  return {};
}

export const MsgLiquidStakeResponse = {
  encode(_: MsgLiquidStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStakeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgLiquidStakeResponse {
    return {};
  },

  toJSON(_: MsgLiquidStakeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse {
    const message = createBaseMsgLiquidStakeResponse();
    return message;
  }

};

function createBaseMsgClearBalance(): MsgClearBalance {
  return {
    creator: "",
    chain_id: "",
    amount: Long.UZERO,
    channel: ""
  };
}

export const MsgClearBalance = {
  encode(message: MsgClearBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.chain_id !== "") {
      writer.uint32(18).string(message.chain_id);
    }

    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }

    if (message.channel !== "") {
      writer.uint32(34).string(message.channel);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearBalance();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.chain_id = reader.string();
          break;

        case 3:
          message.amount = (reader.uint64() as Long);
          break;

        case 4:
          message.channel = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgClearBalance {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      amount: isSet(object.amount) ? Long.fromString(object.amount) : Long.UZERO,
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },

  toJSON(message: MsgClearBalance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClearBalance>): MsgClearBalance {
    const message = createBaseMsgClearBalance();
    message.creator = object.creator ?? "";
    message.chain_id = object.chain_id ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.channel = object.channel ?? "";
    return message;
  }

};

function createBaseMsgClearBalanceResponse(): MsgClearBalanceResponse {
  return {};
}

export const MsgClearBalanceResponse = {
  encode(_: MsgClearBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearBalanceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgClearBalanceResponse {
    return {};
  },

  toJSON(_: MsgClearBalanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgClearBalanceResponse>): MsgClearBalanceResponse {
    const message = createBaseMsgClearBalanceResponse();
    return message;
  }

};

function createBaseMsgRedeemStake(): MsgRedeemStake {
  return {
    creator: "",
    amount: Long.UZERO,
    hostZone: "",
    receiver: ""
  };
}

export const MsgRedeemStake = {
  encode(message: MsgRedeemStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }

    if (message.hostZone !== "") {
      writer.uint32(26).string(message.hostZone);
    }

    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemStake();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.amount = (reader.uint64() as Long);
          break;

        case 3:
          message.hostZone = reader.string();
          break;

        case 4:
          message.receiver = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRedeemStake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? Long.fromString(object.amount) : Long.UZERO,
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : ""
    };
  },

  toJSON(message: MsgRedeemStake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    message.hostZone !== undefined && (obj.hostZone = message.hostZone);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRedeemStake>): MsgRedeemStake {
    const message = createBaseMsgRedeemStake();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.hostZone = object.hostZone ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  }

};

function createBaseMsgRedeemStakeResponse(): MsgRedeemStakeResponse {
  return {};
}

export const MsgRedeemStakeResponse = {
  encode(_: MsgRedeemStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemStakeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgRedeemStakeResponse {
    return {};
  },

  toJSON(_: MsgRedeemStakeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRedeemStakeResponse>): MsgRedeemStakeResponse {
    const message = createBaseMsgRedeemStakeResponse();
    return message;
  }

};

function createBaseMsgRegisterHostZone(): MsgRegisterHostZone {
  return {
    connection_id: "",
    bech32prefix: "",
    host_denom: "",
    ibc_denom: "",
    creator: "",
    transfer_channel_id: "",
    unbonding_frequency: Long.UZERO
  };
}

export const MsgRegisterHostZone = {
  encode(message: MsgRegisterHostZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection_id !== "") {
      writer.uint32(18).string(message.connection_id);
    }

    if (message.bech32prefix !== "") {
      writer.uint32(98).string(message.bech32prefix);
    }

    if (message.host_denom !== "") {
      writer.uint32(34).string(message.host_denom);
    }

    if (message.ibc_denom !== "") {
      writer.uint32(42).string(message.ibc_denom);
    }

    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }

    if (message.transfer_channel_id !== "") {
      writer.uint32(82).string(message.transfer_channel_id);
    }

    if (!message.unbonding_frequency.isZero()) {
      writer.uint32(88).uint64(message.unbonding_frequency);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostZone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostZone();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.connection_id = reader.string();
          break;

        case 12:
          message.bech32prefix = reader.string();
          break;

        case 4:
          message.host_denom = reader.string();
          break;

        case 5:
          message.ibc_denom = reader.string();
          break;

        case 6:
          message.creator = reader.string();
          break;

        case 10:
          message.transfer_channel_id = reader.string();
          break;

        case 11:
          message.unbonding_frequency = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRegisterHostZone {
    return {
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
      bech32prefix: isSet(object.bech32prefix) ? String(object.bech32prefix) : "",
      host_denom: isSet(object.host_denom) ? String(object.host_denom) : "",
      ibc_denom: isSet(object.ibc_denom) ? String(object.ibc_denom) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      transfer_channel_id: isSet(object.transfer_channel_id) ? String(object.transfer_channel_id) : "",
      unbonding_frequency: isSet(object.unbonding_frequency) ? Long.fromString(object.unbonding_frequency) : Long.UZERO
    };
  },

  toJSON(message: MsgRegisterHostZone): unknown {
    const obj: any = {};
    message.connection_id !== undefined && (obj.connection_id = message.connection_id);
    message.bech32prefix !== undefined && (obj.bech32prefix = message.bech32prefix);
    message.host_denom !== undefined && (obj.host_denom = message.host_denom);
    message.ibc_denom !== undefined && (obj.ibc_denom = message.ibc_denom);
    message.creator !== undefined && (obj.creator = message.creator);
    message.transfer_channel_id !== undefined && (obj.transfer_channel_id = message.transfer_channel_id);
    message.unbonding_frequency !== undefined && (obj.unbonding_frequency = (message.unbonding_frequency || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterHostZone>): MsgRegisterHostZone {
    const message = createBaseMsgRegisterHostZone();
    message.connection_id = object.connection_id ?? "";
    message.bech32prefix = object.bech32prefix ?? "";
    message.host_denom = object.host_denom ?? "";
    message.ibc_denom = object.ibc_denom ?? "";
    message.creator = object.creator ?? "";
    message.transfer_channel_id = object.transfer_channel_id ?? "";
    message.unbonding_frequency = object.unbonding_frequency !== undefined && object.unbonding_frequency !== null ? Long.fromValue(object.unbonding_frequency) : Long.UZERO;
    return message;
  }

};

function createBaseMsgRegisterHostZoneResponse(): MsgRegisterHostZoneResponse {
  return {};
}

export const MsgRegisterHostZoneResponse = {
  encode(_: MsgRegisterHostZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostZoneResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgRegisterHostZoneResponse {
    return {};
  },

  toJSON(_: MsgRegisterHostZoneResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRegisterHostZoneResponse>): MsgRegisterHostZoneResponse {
    const message = createBaseMsgRegisterHostZoneResponse();
    return message;
  }

};

function createBaseMsgClaimUndelegatedTokens(): MsgClaimUndelegatedTokens {
  return {
    creator: "",
    hostZoneId: "",
    epoch: Long.UZERO,
    sender: ""
  };
}

export const MsgClaimUndelegatedTokens = {
  encode(message: MsgClaimUndelegatedTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.hostZoneId !== "") {
      writer.uint32(18).string(message.hostZoneId);
    }

    if (!message.epoch.isZero()) {
      writer.uint32(24).uint64(message.epoch);
    }

    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUndelegatedTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUndelegatedTokens();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.hostZoneId = reader.string();
          break;

        case 3:
          message.epoch = (reader.uint64() as Long);
          break;

        case 4:
          message.sender = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgClaimUndelegatedTokens {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      epoch: isSet(object.epoch) ? Long.fromString(object.epoch) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },

  toJSON(message: MsgClaimUndelegatedTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    message.epoch !== undefined && (obj.epoch = (message.epoch || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaimUndelegatedTokens>): MsgClaimUndelegatedTokens {
    const message = createBaseMsgClaimUndelegatedTokens();
    message.creator = object.creator ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.sender = object.sender ?? "";
    return message;
  }

};

function createBaseMsgClaimUndelegatedTokensResponse(): MsgClaimUndelegatedTokensResponse {
  return {};
}

export const MsgClaimUndelegatedTokensResponse = {
  encode(_: MsgClaimUndelegatedTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUndelegatedTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUndelegatedTokensResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgClaimUndelegatedTokensResponse {
    return {};
  },

  toJSON(_: MsgClaimUndelegatedTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgClaimUndelegatedTokensResponse>): MsgClaimUndelegatedTokensResponse {
    const message = createBaseMsgClaimUndelegatedTokensResponse();
    return message;
  }

};

function createBaseMsgRebalanceValidators(): MsgRebalanceValidators {
  return {
    creator: "",
    hostZone: "",
    numRebalance: Long.UZERO
  };
}

export const MsgRebalanceValidators = {
  encode(message: MsgRebalanceValidators, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }

    if (!message.numRebalance.isZero()) {
      writer.uint32(24).uint64(message.numRebalance);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRebalanceValidators {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRebalanceValidators();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.hostZone = reader.string();
          break;

        case 3:
          message.numRebalance = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRebalanceValidators {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      numRebalance: isSet(object.numRebalance) ? Long.fromString(object.numRebalance) : Long.UZERO
    };
  },

  toJSON(message: MsgRebalanceValidators): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostZone !== undefined && (obj.hostZone = message.hostZone);
    message.numRebalance !== undefined && (obj.numRebalance = (message.numRebalance || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRebalanceValidators>): MsgRebalanceValidators {
    const message = createBaseMsgRebalanceValidators();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.numRebalance = object.numRebalance !== undefined && object.numRebalance !== null ? Long.fromValue(object.numRebalance) : Long.UZERO;
    return message;
  }

};

function createBaseMsgRebalanceValidatorsResponse(): MsgRebalanceValidatorsResponse {
  return {};
}

export const MsgRebalanceValidatorsResponse = {
  encode(_: MsgRebalanceValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRebalanceValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRebalanceValidatorsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgRebalanceValidatorsResponse {
    return {};
  },

  toJSON(_: MsgRebalanceValidatorsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRebalanceValidatorsResponse>): MsgRebalanceValidatorsResponse {
    const message = createBaseMsgRebalanceValidatorsResponse();
    return message;
  }

};

function createBaseMsgAddValidator(): MsgAddValidator {
  return {
    creator: "",
    hostZone: "",
    name: "",
    address: "",
    commission: Long.UZERO,
    weight: Long.UZERO
  };
}

export const MsgAddValidator = {
  encode(message: MsgAddValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }

    if (!message.commission.isZero()) {
      writer.uint32(40).uint64(message.commission);
    }

    if (!message.weight.isZero()) {
      writer.uint32(48).uint64(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.hostZone = reader.string();
          break;

        case 3:
          message.name = reader.string();
          break;

        case 4:
          message.address = reader.string();
          break;

        case 5:
          message.commission = (reader.uint64() as Long);
          break;

        case 6:
          message.weight = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAddValidator {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      name: isSet(object.name) ? String(object.name) : "",
      address: isSet(object.address) ? String(object.address) : "",
      commission: isSet(object.commission) ? Long.fromString(object.commission) : Long.UZERO,
      weight: isSet(object.weight) ? Long.fromString(object.weight) : Long.UZERO
    };
  },

  toJSON(message: MsgAddValidator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostZone !== undefined && (obj.hostZone = message.hostZone);
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined && (obj.address = message.address);
    message.commission !== undefined && (obj.commission = (message.commission || Long.UZERO).toString());
    message.weight !== undefined && (obj.weight = (message.weight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddValidator>): MsgAddValidator {
    const message = createBaseMsgAddValidator();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.commission = object.commission !== undefined && object.commission !== null ? Long.fromValue(object.commission) : Long.UZERO;
    message.weight = object.weight !== undefined && object.weight !== null ? Long.fromValue(object.weight) : Long.UZERO;
    return message;
  }

};

function createBaseMsgAddValidatorResponse(): MsgAddValidatorResponse {
  return {};
}

export const MsgAddValidatorResponse = {
  encode(_: MsgAddValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddValidatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgAddValidatorResponse {
    return {};
  },

  toJSON(_: MsgAddValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddValidatorResponse>): MsgAddValidatorResponse {
    const message = createBaseMsgAddValidatorResponse();
    return message;
  }

};

function createBaseMsgChangeValidatorWeight(): MsgChangeValidatorWeight {
  return {
    creator: "",
    hostZone: "",
    valAddr: "",
    weight: Long.UZERO
  };
}

export const MsgChangeValidatorWeight = {
  encode(message: MsgChangeValidatorWeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }

    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }

    if (!message.weight.isZero()) {
      writer.uint32(32).uint64(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeValidatorWeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeValidatorWeight();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.hostZone = reader.string();
          break;

        case 3:
          message.valAddr = reader.string();
          break;

        case 4:
          message.weight = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgChangeValidatorWeight {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
      weight: isSet(object.weight) ? Long.fromString(object.weight) : Long.UZERO
    };
  },

  toJSON(message: MsgChangeValidatorWeight): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostZone !== undefined && (obj.hostZone = message.hostZone);
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.weight !== undefined && (obj.weight = (message.weight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChangeValidatorWeight>): MsgChangeValidatorWeight {
    const message = createBaseMsgChangeValidatorWeight();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.valAddr = object.valAddr ?? "";
    message.weight = object.weight !== undefined && object.weight !== null ? Long.fromValue(object.weight) : Long.UZERO;
    return message;
  }

};

function createBaseMsgChangeValidatorWeightResponse(): MsgChangeValidatorWeightResponse {
  return {};
}

export const MsgChangeValidatorWeightResponse = {
  encode(_: MsgChangeValidatorWeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeValidatorWeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeValidatorWeightResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgChangeValidatorWeightResponse {
    return {};
  },

  toJSON(_: MsgChangeValidatorWeightResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgChangeValidatorWeightResponse>): MsgChangeValidatorWeightResponse {
    const message = createBaseMsgChangeValidatorWeightResponse();
    return message;
  }

};

function createBaseMsgDeleteValidator(): MsgDeleteValidator {
  return {
    creator: "",
    hostZone: "",
    valAddr: ""
  };
}

export const MsgDeleteValidator = {
  encode(message: MsgDeleteValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }

    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.hostZone = reader.string();
          break;

        case 3:
          message.valAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteValidator {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : ""
    };
  },

  toJSON(message: MsgDeleteValidator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostZone !== undefined && (obj.hostZone = message.hostZone);
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteValidator>): MsgDeleteValidator {
    const message = createBaseMsgDeleteValidator();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.valAddr = object.valAddr ?? "";
    return message;
  }

};

function createBaseMsgDeleteValidatorResponse(): MsgDeleteValidatorResponse {
  return {};
}

export const MsgDeleteValidatorResponse = {
  encode(_: MsgDeleteValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteValidatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgDeleteValidatorResponse {
    return {};
  },

  toJSON(_: MsgDeleteValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteValidatorResponse>): MsgDeleteValidatorResponse {
    const message = createBaseMsgDeleteValidatorResponse();
    return message;
  }

};

function createBaseMsgRestoreInterchainAccount(): MsgRestoreInterchainAccount {
  return {
    creator: "",
    chainId: "",
    accountType: 0
  };
}

export const MsgRestoreInterchainAccount = {
  encode(message: MsgRestoreInterchainAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (message.accountType !== 0) {
      writer.uint32(24).int32(message.accountType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreInterchainAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRestoreInterchainAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.accountType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRestoreInterchainAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      accountType: isSet(object.accountType) ? iCAAccountTypeFromJSON(object.accountType) : 0
    };
  },

  toJSON(message: MsgRestoreInterchainAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.accountType !== undefined && (obj.accountType = iCAAccountTypeToJSON(message.accountType));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRestoreInterchainAccount>): MsgRestoreInterchainAccount {
    const message = createBaseMsgRestoreInterchainAccount();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.accountType = object.accountType ?? 0;
    return message;
  }

};

function createBaseMsgRestoreInterchainAccountResponse(): MsgRestoreInterchainAccountResponse {
  return {};
}

export const MsgRestoreInterchainAccountResponse = {
  encode(_: MsgRestoreInterchainAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreInterchainAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRestoreInterchainAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgRestoreInterchainAccountResponse {
    return {};
  },

  toJSON(_: MsgRestoreInterchainAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRestoreInterchainAccountResponse>): MsgRestoreInterchainAccountResponse {
    const message = createBaseMsgRestoreInterchainAccountResponse();
    return message;
  }

};

function createBaseMsgUpdateValidatorSharesExchRate(): MsgUpdateValidatorSharesExchRate {
  return {
    creator: "",
    chainId: "",
    valoper: ""
  };
}

export const MsgUpdateValidatorSharesExchRate = {
  encode(message: MsgUpdateValidatorSharesExchRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (message.valoper !== "") {
      writer.uint32(26).string(message.valoper);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateValidatorSharesExchRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateValidatorSharesExchRate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.valoper = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateValidatorSharesExchRate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      valoper: isSet(object.valoper) ? String(object.valoper) : ""
    };
  },

  toJSON(message: MsgUpdateValidatorSharesExchRate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.valoper !== undefined && (obj.valoper = message.valoper);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateValidatorSharesExchRate>): MsgUpdateValidatorSharesExchRate {
    const message = createBaseMsgUpdateValidatorSharesExchRate();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.valoper = object.valoper ?? "";
    return message;
  }

};

function createBaseMsgUpdateValidatorSharesExchRateResponse(): MsgUpdateValidatorSharesExchRateResponse {
  return {};
}

export const MsgUpdateValidatorSharesExchRateResponse = {
  encode(_: MsgUpdateValidatorSharesExchRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateValidatorSharesExchRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateValidatorSharesExchRateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateValidatorSharesExchRateResponse {
    return {};
  },

  toJSON(_: MsgUpdateValidatorSharesExchRateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateValidatorSharesExchRateResponse>): MsgUpdateValidatorSharesExchRateResponse {
    const message = createBaseMsgUpdateValidatorSharesExchRateResponse();
    return message;
  }

};