import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export enum DepositRecord_Status {
  /** TRANSFER - pending transfer to delegate account */
  TRANSFER = 0,

  /** STAKE - pending staking on delegate account */
  STAKE = 1,
  UNRECOGNIZED = -1,
}
export function depositRecord_StatusFromJSON(object: any): DepositRecord_Status {
  switch (object) {
    case 0:
    case "TRANSFER":
      return DepositRecord_Status.TRANSFER;

    case 1:
    case "STAKE":
      return DepositRecord_Status.STAKE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return DepositRecord_Status.UNRECOGNIZED;
  }
}
export function depositRecord_StatusToJSON(object: DepositRecord_Status): string {
  switch (object) {
    case DepositRecord_Status.TRANSFER:
      return "TRANSFER";

    case DepositRecord_Status.STAKE:
      return "STAKE";

    default:
      return "UNKNOWN";
  }
}
export enum DepositRecord_Source {
  STRIDE = 0,
  WITHDRAWAL_ICA = 1,
  UNRECOGNIZED = -1,
}
export function depositRecord_SourceFromJSON(object: any): DepositRecord_Source {
  switch (object) {
    case 0:
    case "STRIDE":
      return DepositRecord_Source.STRIDE;

    case 1:
    case "WITHDRAWAL_ICA":
      return DepositRecord_Source.WITHDRAWAL_ICA;

    case -1:
    case "UNRECOGNIZED":
    default:
      return DepositRecord_Source.UNRECOGNIZED;
  }
}
export function depositRecord_SourceToJSON(object: DepositRecord_Source): string {
  switch (object) {
    case DepositRecord_Source.STRIDE:
      return "STRIDE";

    case DepositRecord_Source.WITHDRAWAL_ICA:
      return "WITHDRAWAL_ICA";

    default:
      return "UNKNOWN";
  }
}
export enum HostZoneUnbonding_Status {
  /** BONDED - tokens bonded on delegate account */
  BONDED = 0,

  /** UNBONDED - unbonding completed on delegate account */
  UNBONDED = 1,

  /** TRANSFERRED - transfer success */
  TRANSFERRED = 2,
  UNRECOGNIZED = -1,
}
export function hostZoneUnbonding_StatusFromJSON(object: any): HostZoneUnbonding_Status {
  switch (object) {
    case 0:
    case "BONDED":
      return HostZoneUnbonding_Status.BONDED;

    case 1:
    case "UNBONDED":
      return HostZoneUnbonding_Status.UNBONDED;

    case 2:
    case "TRANSFERRED":
      return HostZoneUnbonding_Status.TRANSFERRED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return HostZoneUnbonding_Status.UNRECOGNIZED;
  }
}
export function hostZoneUnbonding_StatusToJSON(object: HostZoneUnbonding_Status): string {
  switch (object) {
    case HostZoneUnbonding_Status.BONDED:
      return "BONDED";

    case HostZoneUnbonding_Status.UNBONDED:
      return "UNBONDED";

    case HostZoneUnbonding_Status.TRANSFERRED:
      return "TRANSFERRED";

    default:
      return "UNKNOWN";
  }
}
export interface UserRedemptionRecord {
  /** {chain_id}.{epoch}.{sender} */
  id: string;
  sender: string;
  receiver: string;
  amount: Long;
  denom: string;
  hostZoneId: string;
  epochNumber: Long;
  claimIsPending: boolean;
}

/** Params defines the parameters for the module. */
export interface Params {}
export interface RecordsPacketData {
  noData?: NoData;
}
export interface NoData {}
export interface DepositRecord {
  id: Long;
  amount: Long;
  denom: string;
  hostZoneId: string;
  status: DepositRecord_Status;
  depositEpochNumber: Long;
  source: DepositRecord_Source;
}
export interface HostZoneUnbonding {
  stTokenAmount: Long;
  nativeTokenAmount: Long;
  denom: string;
  hostZoneId: string;
  unbondingTime: Long;
  status: HostZoneUnbonding_Status;
  userRedemptionRecords: string[];
}
export interface EpochUnbondingRecord {
  epochNumber: Long;
  hostZoneUnbondings: HostZoneUnbonding[];
}

/**
 * GenesisState defines the recordπs module's genesis state.
 * next id: 9
 */
export interface GenesisState {
  params: Params;
  port_id: string;
  userRedemptionRecordList: UserRedemptionRecord[];
  userRedemptionRecordCount: Long;
  epochUnbondingRecordList: EpochUnbondingRecord[];
  depositRecordList: DepositRecord[];
  depositRecordCount: Long;
}

function createBaseUserRedemptionRecord(): UserRedemptionRecord {
  return {
    id: "",
    sender: "",
    receiver: "",
    amount: Long.UZERO,
    denom: "",
    hostZoneId: "",
    epochNumber: Long.UZERO,
    claimIsPending: false
  };
}

export const UserRedemptionRecord = {
  encode(message: UserRedemptionRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }

    if (!message.amount.isZero()) {
      writer.uint32(32).uint64(message.amount);
    }

    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }

    if (message.hostZoneId !== "") {
      writer.uint32(50).string(message.hostZoneId);
    }

    if (!message.epochNumber.isZero()) {
      writer.uint32(56).uint64(message.epochNumber);
    }

    if (message.claimIsPending === true) {
      writer.uint32(64).bool(message.claimIsPending);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRedemptionRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRedemptionRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.receiver = reader.string();
          break;

        case 4:
          message.amount = (reader.uint64() as Long);
          break;

        case 5:
          message.denom = reader.string();
          break;

        case 6:
          message.hostZoneId = reader.string();
          break;

        case 7:
          message.epochNumber = (reader.uint64() as Long);
          break;

        case 8:
          message.claimIsPending = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UserRedemptionRecord {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? Long.fromString(object.amount) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      epochNumber: isSet(object.epochNumber) ? Long.fromString(object.epochNumber) : Long.UZERO,
      claimIsPending: isSet(object.claimIsPending) ? Boolean(object.claimIsPending) : false
    };
  },

  toJSON(message: UserRedemptionRecord): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.UZERO).toString());
    message.claimIsPending !== undefined && (obj.claimIsPending = message.claimIsPending);
    return obj;
  },

  fromPartial(object: DeepPartial<UserRedemptionRecord>): UserRedemptionRecord {
    const message = createBaseUserRedemptionRecord();
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.denom = object.denom ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    message.claimIsPending = object.claimIsPending ?? false;
    return message;
  }

};

function createBaseParams(): Params {
  return {};
}

export const Params = {
  encode(_: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

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

  fromJSON(_: any): Params {
    return {};
  },

  toJSON(_: Params): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<Params>): Params {
    const message = createBaseParams();
    return message;
  }

};

function createBaseRecordsPacketData(): RecordsPacketData {
  return {
    noData: undefined
  };
}

export const RecordsPacketData = {
  encode(message: RecordsPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordsPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordsPacketData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RecordsPacketData {
    return {
      noData: isSet(object.noData) ? NoData.fromJSON(object.noData) : undefined
    };
  },

  toJSON(message: RecordsPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined && (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RecordsPacketData>): RecordsPacketData {
    const message = createBaseRecordsPacketData();
    message.noData = object.noData !== undefined && object.noData !== null ? NoData.fromPartial(object.noData) : undefined;
    return message;
  }

};

function createBaseNoData(): NoData {
  return {};
}

export const NoData = {
  encode(_: NoData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoData();

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

  fromJSON(_: any): NoData {
    return {};
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = createBaseNoData();
    return message;
  }

};

function createBaseDepositRecord(): DepositRecord {
  return {
    id: Long.UZERO,
    amount: Long.ZERO,
    denom: "",
    hostZoneId: "",
    status: 0,
    depositEpochNumber: Long.UZERO,
    source: 0
  };
}

export const DepositRecord = {
  encode(message: DepositRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (!message.amount.isZero()) {
      writer.uint32(16).int64(message.amount);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.hostZoneId !== "") {
      writer.uint32(34).string(message.hostZoneId);
    }

    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }

    if (!message.depositEpochNumber.isZero()) {
      writer.uint32(56).uint64(message.depositEpochNumber);
    }

    if (message.source !== 0) {
      writer.uint32(64).int32(message.source);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.amount = (reader.int64() as Long);
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.hostZoneId = reader.string();
          break;

        case 6:
          message.status = (reader.int32() as any);
          break;

        case 7:
          message.depositEpochNumber = (reader.uint64() as Long);
          break;

        case 8:
          message.source = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DepositRecord {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      amount: isSet(object.amount) ? Long.fromString(object.amount) : Long.ZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      status: isSet(object.status) ? depositRecord_StatusFromJSON(object.status) : 0,
      depositEpochNumber: isSet(object.depositEpochNumber) ? Long.fromString(object.depositEpochNumber) : Long.UZERO,
      source: isSet(object.source) ? depositRecord_SourceFromJSON(object.source) : 0
    };
  },

  toJSON(message: DepositRecord): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = (message.amount || Long.ZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    message.status !== undefined && (obj.status = depositRecord_StatusToJSON(message.status));
    message.depositEpochNumber !== undefined && (obj.depositEpochNumber = (message.depositEpochNumber || Long.UZERO).toString());
    message.source !== undefined && (obj.source = depositRecord_SourceToJSON(message.source));
    return obj;
  },

  fromPartial(object: DeepPartial<DepositRecord>): DepositRecord {
    const message = createBaseDepositRecord();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.ZERO;
    message.denom = object.denom ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.status = object.status ?? 0;
    message.depositEpochNumber = object.depositEpochNumber !== undefined && object.depositEpochNumber !== null ? Long.fromValue(object.depositEpochNumber) : Long.UZERO;
    message.source = object.source ?? 0;
    return message;
  }

};

function createBaseHostZoneUnbonding(): HostZoneUnbonding {
  return {
    stTokenAmount: Long.UZERO,
    nativeTokenAmount: Long.UZERO,
    denom: "",
    hostZoneId: "",
    unbondingTime: Long.UZERO,
    status: 0,
    userRedemptionRecords: []
  };
}

export const HostZoneUnbonding = {
  encode(message: HostZoneUnbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.stTokenAmount.isZero()) {
      writer.uint32(8).uint64(message.stTokenAmount);
    }

    if (!message.nativeTokenAmount.isZero()) {
      writer.uint32(16).uint64(message.nativeTokenAmount);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.hostZoneId !== "") {
      writer.uint32(34).string(message.hostZoneId);
    }

    if (!message.unbondingTime.isZero()) {
      writer.uint32(40).uint64(message.unbondingTime);
    }

    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }

    for (const v of message.userRedemptionRecords) {
      writer.uint32(58).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostZoneUnbonding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostZoneUnbonding();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.stTokenAmount = (reader.uint64() as Long);
          break;

        case 2:
          message.nativeTokenAmount = (reader.uint64() as Long);
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.hostZoneId = reader.string();
          break;

        case 5:
          message.unbondingTime = (reader.uint64() as Long);
          break;

        case 6:
          message.status = (reader.int32() as any);
          break;

        case 7:
          message.userRedemptionRecords.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): HostZoneUnbonding {
    return {
      stTokenAmount: isSet(object.stTokenAmount) ? Long.fromString(object.stTokenAmount) : Long.UZERO,
      nativeTokenAmount: isSet(object.nativeTokenAmount) ? Long.fromString(object.nativeTokenAmount) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      unbondingTime: isSet(object.unbondingTime) ? Long.fromString(object.unbondingTime) : Long.UZERO,
      status: isSet(object.status) ? hostZoneUnbonding_StatusFromJSON(object.status) : 0,
      userRedemptionRecords: Array.isArray(object?.userRedemptionRecords) ? object.userRedemptionRecords.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: HostZoneUnbonding): unknown {
    const obj: any = {};
    message.stTokenAmount !== undefined && (obj.stTokenAmount = (message.stTokenAmount || Long.UZERO).toString());
    message.nativeTokenAmount !== undefined && (obj.nativeTokenAmount = (message.nativeTokenAmount || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    message.unbondingTime !== undefined && (obj.unbondingTime = (message.unbondingTime || Long.UZERO).toString());
    message.status !== undefined && (obj.status = hostZoneUnbonding_StatusToJSON(message.status));

    if (message.userRedemptionRecords) {
      obj.userRedemptionRecords = message.userRedemptionRecords.map(e => e);
    } else {
      obj.userRedemptionRecords = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<HostZoneUnbonding>): HostZoneUnbonding {
    const message = createBaseHostZoneUnbonding();
    message.stTokenAmount = object.stTokenAmount !== undefined && object.stTokenAmount !== null ? Long.fromValue(object.stTokenAmount) : Long.UZERO;
    message.nativeTokenAmount = object.nativeTokenAmount !== undefined && object.nativeTokenAmount !== null ? Long.fromValue(object.nativeTokenAmount) : Long.UZERO;
    message.denom = object.denom ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? Long.fromValue(object.unbondingTime) : Long.UZERO;
    message.status = object.status ?? 0;
    message.userRedemptionRecords = object.userRedemptionRecords?.map(e => e) || [];
    return message;
  }

};

function createBaseEpochUnbondingRecord(): EpochUnbondingRecord {
  return {
    epochNumber: Long.UZERO,
    hostZoneUnbondings: []
  };
}

export const EpochUnbondingRecord = {
  encode(message: EpochUnbondingRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).uint64(message.epochNumber);
    }

    for (const v of message.hostZoneUnbondings) {
      HostZoneUnbonding.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochUnbondingRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochUnbondingRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epochNumber = (reader.uint64() as Long);
          break;

        case 3:
          message.hostZoneUnbondings.push(HostZoneUnbonding.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EpochUnbondingRecord {
    return {
      epochNumber: isSet(object.epochNumber) ? Long.fromString(object.epochNumber) : Long.UZERO,
      hostZoneUnbondings: Array.isArray(object?.hostZoneUnbondings) ? object.hostZoneUnbondings.map((e: any) => HostZoneUnbonding.fromJSON(e)) : []
    };
  },

  toJSON(message: EpochUnbondingRecord): unknown {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.UZERO).toString());

    if (message.hostZoneUnbondings) {
      obj.hostZoneUnbondings = message.hostZoneUnbondings.map(e => e ? HostZoneUnbonding.toJSON(e) : undefined);
    } else {
      obj.hostZoneUnbondings = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<EpochUnbondingRecord>): EpochUnbondingRecord {
    const message = createBaseEpochUnbondingRecord();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    message.hostZoneUnbondings = object.hostZoneUnbondings?.map(e => HostZoneUnbonding.fromPartial(e)) || [];
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    port_id: "",
    userRedemptionRecordList: [],
    userRedemptionRecordCount: Long.UZERO,
    epochUnbondingRecordList: [],
    depositRecordList: [],
    depositRecordCount: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.port_id !== "") {
      writer.uint32(18).string(message.port_id);
    }

    for (const v of message.userRedemptionRecordList) {
      UserRedemptionRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (!message.userRedemptionRecordCount.isZero()) {
      writer.uint32(32).uint64(message.userRedemptionRecordCount);
    }

    for (const v of message.epochUnbondingRecordList) {
      EpochUnbondingRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.depositRecordList) {
      DepositRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (!message.depositRecordCount.isZero()) {
      writer.uint32(64).uint64(message.depositRecordCount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.port_id = reader.string();
          break;

        case 3:
          message.userRedemptionRecordList.push(UserRedemptionRecord.decode(reader, reader.uint32()));
          break;

        case 4:
          message.userRedemptionRecordCount = (reader.uint64() as Long);
          break;

        case 5:
          message.epochUnbondingRecordList.push(EpochUnbondingRecord.decode(reader, reader.uint32()));
          break;

        case 7:
          message.depositRecordList.push(DepositRecord.decode(reader, reader.uint32()));
          break;

        case 8:
          message.depositRecordCount = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      userRedemptionRecordList: Array.isArray(object?.userRedemptionRecordList) ? object.userRedemptionRecordList.map((e: any) => UserRedemptionRecord.fromJSON(e)) : [],
      userRedemptionRecordCount: isSet(object.userRedemptionRecordCount) ? Long.fromString(object.userRedemptionRecordCount) : Long.UZERO,
      epochUnbondingRecordList: Array.isArray(object?.epochUnbondingRecordList) ? object.epochUnbondingRecordList.map((e: any) => EpochUnbondingRecord.fromJSON(e)) : [],
      depositRecordList: Array.isArray(object?.depositRecordList) ? object.depositRecordList.map((e: any) => DepositRecord.fromJSON(e)) : [],
      depositRecordCount: isSet(object.depositRecordCount) ? Long.fromString(object.depositRecordCount) : Long.UZERO
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.port_id !== undefined && (obj.port_id = message.port_id);

    if (message.userRedemptionRecordList) {
      obj.userRedemptionRecordList = message.userRedemptionRecordList.map(e => e ? UserRedemptionRecord.toJSON(e) : undefined);
    } else {
      obj.userRedemptionRecordList = [];
    }

    message.userRedemptionRecordCount !== undefined && (obj.userRedemptionRecordCount = (message.userRedemptionRecordCount || Long.UZERO).toString());

    if (message.epochUnbondingRecordList) {
      obj.epochUnbondingRecordList = message.epochUnbondingRecordList.map(e => e ? EpochUnbondingRecord.toJSON(e) : undefined);
    } else {
      obj.epochUnbondingRecordList = [];
    }

    if (message.depositRecordList) {
      obj.depositRecordList = message.depositRecordList.map(e => e ? DepositRecord.toJSON(e) : undefined);
    } else {
      obj.depositRecordList = [];
    }

    message.depositRecordCount !== undefined && (obj.depositRecordCount = (message.depositRecordCount || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.port_id = object.port_id ?? "";
    message.userRedemptionRecordList = object.userRedemptionRecordList?.map(e => UserRedemptionRecord.fromPartial(e)) || [];
    message.userRedemptionRecordCount = object.userRedemptionRecordCount !== undefined && object.userRedemptionRecordCount !== null ? Long.fromValue(object.userRedemptionRecordCount) : Long.UZERO;
    message.epochUnbondingRecordList = object.epochUnbondingRecordList?.map(e => EpochUnbondingRecord.fromPartial(e)) || [];
    message.depositRecordList = object.depositRecordList?.map(e => DepositRecord.fromPartial(e)) || [];
    message.depositRecordCount = object.depositRecordCount !== undefined && object.depositRecordCount !== null ? Long.fromValue(object.depositRecordCount) : Long.UZERO;
    return message;
  }

};