import { Coin } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** ---------------------- Delegation Callbacks ---------------------- // */
export interface SplitDelegation {
  validator: string;
  amount: Long;
}
export interface DelegateCallback {
  hostZoneId: string;
  depositRecordId: Long;
  splitDelegations: SplitDelegation[];
}
export interface ClaimCallback {
  userRedemptionRecordId: string;
  chainId: string;
  epochNumber: Long;
}

/** ---------------------- Reinvest Callback ---------------------- // */
export interface ReinvestCallback {
  reinvestAmount: Coin;
  hostZoneId: string;
}

/** ---------------------- Undelegation Callbacks ---------------------- // */
export interface UndelegateCallback {
  hostZoneId: string;
  splitDelegations: SplitDelegation[];
  epochUnbondingRecordIds: Long[];
}

/** ---------------------- Redemption Callbacks ---------------------- // */
export interface RedemptionCallback {
  hostZoneId: string;
  epochUnbondingRecordIds: Long[];
}

function createBaseSplitDelegation(): SplitDelegation {
  return {
    validator: "",
    amount: Long.UZERO
  };
}

export const SplitDelegation = {
  encode(message: SplitDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }

    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SplitDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSplitDelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;

        case 2:
          message.amount = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SplitDelegation {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      amount: isSet(object.amount) ? Long.fromString(object.amount) : Long.UZERO
    };
  },

  toJSON(message: SplitDelegation): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<SplitDelegation>): SplitDelegation {
    const message = createBaseSplitDelegation();
    message.validator = object.validator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }

};

function createBaseDelegateCallback(): DelegateCallback {
  return {
    hostZoneId: "",
    depositRecordId: Long.UZERO,
    splitDelegations: []
  };
}

export const DelegateCallback = {
  encode(message: DelegateCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }

    if (!message.depositRecordId.isZero()) {
      writer.uint32(16).uint64(message.depositRecordId);
    }

    for (const v of message.splitDelegations) {
      SplitDelegation.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegateCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegateCallback();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hostZoneId = reader.string();
          break;

        case 2:
          message.depositRecordId = (reader.uint64() as Long);
          break;

        case 3:
          message.splitDelegations.push(SplitDelegation.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DelegateCallback {
    return {
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      depositRecordId: isSet(object.depositRecordId) ? Long.fromString(object.depositRecordId) : Long.UZERO,
      splitDelegations: Array.isArray(object?.splitDelegations) ? object.splitDelegations.map((e: any) => SplitDelegation.fromJSON(e)) : []
    };
  },

  toJSON(message: DelegateCallback): unknown {
    const obj: any = {};
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    message.depositRecordId !== undefined && (obj.depositRecordId = (message.depositRecordId || Long.UZERO).toString());

    if (message.splitDelegations) {
      obj.splitDelegations = message.splitDelegations.map(e => e ? SplitDelegation.toJSON(e) : undefined);
    } else {
      obj.splitDelegations = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<DelegateCallback>): DelegateCallback {
    const message = createBaseDelegateCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.depositRecordId = object.depositRecordId !== undefined && object.depositRecordId !== null ? Long.fromValue(object.depositRecordId) : Long.UZERO;
    message.splitDelegations = object.splitDelegations?.map(e => SplitDelegation.fromPartial(e)) || [];
    return message;
  }

};

function createBaseClaimCallback(): ClaimCallback {
  return {
    userRedemptionRecordId: "",
    chainId: "",
    epochNumber: Long.UZERO
  };
}

export const ClaimCallback = {
  encode(message: ClaimCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userRedemptionRecordId !== "") {
      writer.uint32(10).string(message.userRedemptionRecordId);
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (!message.epochNumber.isZero()) {
      writer.uint32(24).uint64(message.epochNumber);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimCallback();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.userRedemptionRecordId = reader.string();
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.epochNumber = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClaimCallback {
    return {
      userRedemptionRecordId: isSet(object.userRedemptionRecordId) ? String(object.userRedemptionRecordId) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      epochNumber: isSet(object.epochNumber) ? Long.fromString(object.epochNumber) : Long.UZERO
    };
  },

  toJSON(message: ClaimCallback): unknown {
    const obj: any = {};
    message.userRedemptionRecordId !== undefined && (obj.userRedemptionRecordId = message.userRedemptionRecordId);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ClaimCallback>): ClaimCallback {
    const message = createBaseClaimCallback();
    message.userRedemptionRecordId = object.userRedemptionRecordId ?? "";
    message.chainId = object.chainId ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    return message;
  }

};

function createBaseReinvestCallback(): ReinvestCallback {
  return {
    reinvestAmount: undefined,
    hostZoneId: ""
  };
}

export const ReinvestCallback = {
  encode(message: ReinvestCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reinvestAmount !== undefined) {
      Coin.encode(message.reinvestAmount, writer.uint32(10).fork()).ldelim();
    }

    if (message.hostZoneId !== "") {
      writer.uint32(26).string(message.hostZoneId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReinvestCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReinvestCallback();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.reinvestAmount = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.hostZoneId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ReinvestCallback {
    return {
      reinvestAmount: isSet(object.reinvestAmount) ? Coin.fromJSON(object.reinvestAmount) : undefined,
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : ""
    };
  },

  toJSON(message: ReinvestCallback): unknown {
    const obj: any = {};
    message.reinvestAmount !== undefined && (obj.reinvestAmount = message.reinvestAmount ? Coin.toJSON(message.reinvestAmount) : undefined);
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    return obj;
  },

  fromPartial(object: DeepPartial<ReinvestCallback>): ReinvestCallback {
    const message = createBaseReinvestCallback();
    message.reinvestAmount = object.reinvestAmount !== undefined && object.reinvestAmount !== null ? Coin.fromPartial(object.reinvestAmount) : undefined;
    message.hostZoneId = object.hostZoneId ?? "";
    return message;
  }

};

function createBaseUndelegateCallback(): UndelegateCallback {
  return {
    hostZoneId: "",
    splitDelegations: [],
    epochUnbondingRecordIds: []
  };
}

export const UndelegateCallback = {
  encode(message: UndelegateCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }

    for (const v of message.splitDelegations) {
      SplitDelegation.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    writer.uint32(26).fork();

    for (const v of message.epochUnbondingRecordIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UndelegateCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegateCallback();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hostZoneId = reader.string();
          break;

        case 2:
          message.splitDelegations.push(SplitDelegation.decode(reader, reader.uint32()));
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.epochUnbondingRecordIds.push((reader.uint64() as Long));
            }
          } else {
            message.epochUnbondingRecordIds.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UndelegateCallback {
    return {
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      splitDelegations: Array.isArray(object?.splitDelegations) ? object.splitDelegations.map((e: any) => SplitDelegation.fromJSON(e)) : [],
      epochUnbondingRecordIds: Array.isArray(object?.epochUnbondingRecordIds) ? object.epochUnbondingRecordIds.map((e: any) => Long.fromString(e)) : []
    };
  },

  toJSON(message: UndelegateCallback): unknown {
    const obj: any = {};
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);

    if (message.splitDelegations) {
      obj.splitDelegations = message.splitDelegations.map(e => e ? SplitDelegation.toJSON(e) : undefined);
    } else {
      obj.splitDelegations = [];
    }

    if (message.epochUnbondingRecordIds) {
      obj.epochUnbondingRecordIds = message.epochUnbondingRecordIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.epochUnbondingRecordIds = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<UndelegateCallback>): UndelegateCallback {
    const message = createBaseUndelegateCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.splitDelegations = object.splitDelegations?.map(e => SplitDelegation.fromPartial(e)) || [];
    message.epochUnbondingRecordIds = object.epochUnbondingRecordIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseRedemptionCallback(): RedemptionCallback {
  return {
    hostZoneId: "",
    epochUnbondingRecordIds: []
  };
}

export const RedemptionCallback = {
  encode(message: RedemptionCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }

    writer.uint32(18).fork();

    for (const v of message.epochUnbondingRecordIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedemptionCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedemptionCallback();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hostZoneId = reader.string();
          break;

        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.epochUnbondingRecordIds.push((reader.uint64() as Long));
            }
          } else {
            message.epochUnbondingRecordIds.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RedemptionCallback {
    return {
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      epochUnbondingRecordIds: Array.isArray(object?.epochUnbondingRecordIds) ? object.epochUnbondingRecordIds.map((e: any) => Long.fromString(e)) : []
    };
  },

  toJSON(message: RedemptionCallback): unknown {
    const obj: any = {};
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);

    if (message.epochUnbondingRecordIds) {
      obj.epochUnbondingRecordIds = message.epochUnbondingRecordIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.epochUnbondingRecordIds = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<RedemptionCallback>): RedemptionCallback {
    const message = createBaseRedemptionCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.epochUnbondingRecordIds = object.epochUnbondingRecordIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};