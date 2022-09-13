import { Validator } from "./validator";
import { ICAAccount } from "./ica_account";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** next id: 19 */
export interface HostZone {
  chainId: string;
  connectionId: string;
  bech32prefix: string;
  transferChannelId: string;
  validators: Validator[];
  blacklistedValidators: Validator[];
  withdrawalAccount: ICAAccount;
  feeAccount: ICAAccount;
  delegationAccount: ICAAccount;
  redemptionAccount: ICAAccount;

  /** ibc denom on stride */
  IBCDenom: string;

  /** native denom on host zone */
  HostDenom: string;

  /**
   * TODO(TEST-68): Should we make this an array and store the last n redemption rates
   * then calculate a TWARR?
   */
  LastRedemptionRate: string;
  RedemptionRate: string;

  /** stores how many days we should wait before issuing unbondings */
  unbondingFrequency: Long;

  /** TODO(TEST-101) int to dec */
  stakedBal: Long;
  address: string;
}

function createBaseHostZone(): HostZone {
  return {
    chainId: "",
    connectionId: "",
    bech32prefix: "",
    transferChannelId: "",
    validators: [],
    blacklistedValidators: [],
    withdrawalAccount: undefined,
    feeAccount: undefined,
    delegationAccount: undefined,
    redemptionAccount: undefined,
    IBCDenom: "",
    HostDenom: "",
    LastRedemptionRate: "",
    RedemptionRate: "",
    unbondingFrequency: Long.UZERO,
    stakedBal: Long.UZERO,
    address: ""
  };
}

export const HostZone = {
  encode(message: HostZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }

    if (message.bech32prefix !== "") {
      writer.uint32(138).string(message.bech32prefix);
    }

    if (message.transferChannelId !== "") {
      writer.uint32(98).string(message.transferChannelId);
    }

    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.blacklistedValidators) {
      Validator.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.withdrawalAccount !== undefined) {
      ICAAccount.encode(message.withdrawalAccount, writer.uint32(42).fork()).ldelim();
    }

    if (message.feeAccount !== undefined) {
      ICAAccount.encode(message.feeAccount, writer.uint32(50).fork()).ldelim();
    }

    if (message.delegationAccount !== undefined) {
      ICAAccount.encode(message.delegationAccount, writer.uint32(58).fork()).ldelim();
    }

    if (message.redemptionAccount !== undefined) {
      ICAAccount.encode(message.redemptionAccount, writer.uint32(130).fork()).ldelim();
    }

    if (message.IBCDenom !== "") {
      writer.uint32(66).string(message.IBCDenom);
    }

    if (message.HostDenom !== "") {
      writer.uint32(74).string(message.HostDenom);
    }

    if (message.LastRedemptionRate !== "") {
      writer.uint32(82).string(message.LastRedemptionRate);
    }

    if (message.RedemptionRate !== "") {
      writer.uint32(90).string(message.RedemptionRate);
    }

    if (!message.unbondingFrequency.isZero()) {
      writer.uint32(112).uint64(message.unbondingFrequency);
    }

    if (!message.stakedBal.isZero()) {
      writer.uint32(104).uint64(message.stakedBal);
    }

    if (message.address !== "") {
      writer.uint32(146).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostZone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostZone();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        case 2:
          message.connectionId = reader.string();
          break;

        case 17:
          message.bech32prefix = reader.string();
          break;

        case 12:
          message.transferChannelId = reader.string();
          break;

        case 3:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 4:
          message.blacklistedValidators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 5:
          message.withdrawalAccount = ICAAccount.decode(reader, reader.uint32());
          break;

        case 6:
          message.feeAccount = ICAAccount.decode(reader, reader.uint32());
          break;

        case 7:
          message.delegationAccount = ICAAccount.decode(reader, reader.uint32());
          break;

        case 16:
          message.redemptionAccount = ICAAccount.decode(reader, reader.uint32());
          break;

        case 8:
          message.IBCDenom = reader.string();
          break;

        case 9:
          message.HostDenom = reader.string();
          break;

        case 10:
          message.LastRedemptionRate = reader.string();
          break;

        case 11:
          message.RedemptionRate = reader.string();
          break;

        case 14:
          message.unbondingFrequency = (reader.uint64() as Long);
          break;

        case 13:
          message.stakedBal = (reader.uint64() as Long);
          break;

        case 18:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): HostZone {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      bech32prefix: isSet(object.bech32prefix) ? String(object.bech32prefix) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : "",
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      blacklistedValidators: Array.isArray(object?.blacklistedValidators) ? object.blacklistedValidators.map((e: any) => Validator.fromJSON(e)) : [],
      withdrawalAccount: isSet(object.withdrawalAccount) ? ICAAccount.fromJSON(object.withdrawalAccount) : undefined,
      feeAccount: isSet(object.feeAccount) ? ICAAccount.fromJSON(object.feeAccount) : undefined,
      delegationAccount: isSet(object.delegationAccount) ? ICAAccount.fromJSON(object.delegationAccount) : undefined,
      redemptionAccount: isSet(object.redemptionAccount) ? ICAAccount.fromJSON(object.redemptionAccount) : undefined,
      IBCDenom: isSet(object.IBCDenom) ? String(object.IBCDenom) : "",
      HostDenom: isSet(object.HostDenom) ? String(object.HostDenom) : "",
      LastRedemptionRate: isSet(object.LastRedemptionRate) ? String(object.LastRedemptionRate) : "",
      RedemptionRate: isSet(object.RedemptionRate) ? String(object.RedemptionRate) : "",
      unbondingFrequency: isSet(object.unbondingFrequency) ? Long.fromString(object.unbondingFrequency) : Long.UZERO,
      stakedBal: isSet(object.stakedBal) ? Long.fromString(object.stakedBal) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: HostZone): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.bech32prefix !== undefined && (obj.bech32prefix = message.bech32prefix);
    message.transferChannelId !== undefined && (obj.transferChannelId = message.transferChannelId);

    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }

    if (message.blacklistedValidators) {
      obj.blacklistedValidators = message.blacklistedValidators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.blacklistedValidators = [];
    }

    message.withdrawalAccount !== undefined && (obj.withdrawalAccount = message.withdrawalAccount ? ICAAccount.toJSON(message.withdrawalAccount) : undefined);
    message.feeAccount !== undefined && (obj.feeAccount = message.feeAccount ? ICAAccount.toJSON(message.feeAccount) : undefined);
    message.delegationAccount !== undefined && (obj.delegationAccount = message.delegationAccount ? ICAAccount.toJSON(message.delegationAccount) : undefined);
    message.redemptionAccount !== undefined && (obj.redemptionAccount = message.redemptionAccount ? ICAAccount.toJSON(message.redemptionAccount) : undefined);
    message.IBCDenom !== undefined && (obj.IBCDenom = message.IBCDenom);
    message.HostDenom !== undefined && (obj.HostDenom = message.HostDenom);
    message.LastRedemptionRate !== undefined && (obj.LastRedemptionRate = message.LastRedemptionRate);
    message.RedemptionRate !== undefined && (obj.RedemptionRate = message.RedemptionRate);
    message.unbondingFrequency !== undefined && (obj.unbondingFrequency = (message.unbondingFrequency || Long.UZERO).toString());
    message.stakedBal !== undefined && (obj.stakedBal = (message.stakedBal || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<HostZone>): HostZone {
    const message = createBaseHostZone();
    message.chainId = object.chainId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.bech32prefix = object.bech32prefix ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.blacklistedValidators = object.blacklistedValidators?.map(e => Validator.fromPartial(e)) || [];
    message.withdrawalAccount = object.withdrawalAccount !== undefined && object.withdrawalAccount !== null ? ICAAccount.fromPartial(object.withdrawalAccount) : undefined;
    message.feeAccount = object.feeAccount !== undefined && object.feeAccount !== null ? ICAAccount.fromPartial(object.feeAccount) : undefined;
    message.delegationAccount = object.delegationAccount !== undefined && object.delegationAccount !== null ? ICAAccount.fromPartial(object.delegationAccount) : undefined;
    message.redemptionAccount = object.redemptionAccount !== undefined && object.redemptionAccount !== null ? ICAAccount.fromPartial(object.redemptionAccount) : undefined;
    message.IBCDenom = object.IBCDenom ?? "";
    message.HostDenom = object.HostDenom ?? "";
    message.LastRedemptionRate = object.LastRedemptionRate ?? "";
    message.RedemptionRate = object.RedemptionRate ?? "";
    message.unbondingFrequency = object.unbondingFrequency !== undefined && object.unbondingFrequency !== null ? Long.fromValue(object.unbondingFrequency) : Long.UZERO;
    message.stakedBal = object.stakedBal !== undefined && object.stakedBal !== null ? Long.fromValue(object.stakedBal) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  }

};