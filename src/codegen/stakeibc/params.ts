import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long, isObject } from "@osmonauts/helpers";
export interface Params_ZoneComAddressEntry {
  key: string;
  value: string;
}

/**
 * Params defines the parameters for the module.
 * next id: 16
 */
export interface Params {
  /** define epoch lengths, in stride_epochs */
  rewards_interval: Long;
  delegate_interval: Long;
  deposit_interval: Long;
  redemption_rate_interval: Long;
  stride_commission: Long;

  /**
   * zone_com_address stores which addresses to
   * send the Stride commission too, as well as what portion
   * of the fee each address is entitled to
   * TODO implement this
   */
  zone_com_address: {
    [key: string]: string;
  };
  reinvest_interval: Long;
  validator_rebalancing_threshold: Long;
  ica_timeout_nanos: Long;
  buffer_size: Long;
  ibc_timeout_blocks: Long;
  fee_transfer_timeout_nanos: Long;
  max_stake_ica_calls_per_epoch: Long;
  safety_min_redemption_rate_threshold: Long;
  safety_max_redemption_rate_threshold: Long;
  ibc_transfer_timeout_nanos: Long;
}

function createBaseParams_ZoneComAddressEntry(): Params_ZoneComAddressEntry {
  return {
    key: "",
    value: ""
  };
}

export const Params_ZoneComAddressEntry = {
  encode(message: Params_ZoneComAddressEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params_ZoneComAddressEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams_ZoneComAddressEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params_ZoneComAddressEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: Params_ZoneComAddressEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<Params_ZoneComAddressEntry>): Params_ZoneComAddressEntry {
    const message = createBaseParams_ZoneComAddressEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    rewards_interval: Long.UZERO,
    delegate_interval: Long.UZERO,
    deposit_interval: Long.UZERO,
    redemption_rate_interval: Long.UZERO,
    stride_commission: Long.UZERO,
    zone_com_address: {},
    reinvest_interval: Long.UZERO,
    validator_rebalancing_threshold: Long.UZERO,
    ica_timeout_nanos: Long.UZERO,
    buffer_size: Long.UZERO,
    ibc_timeout_blocks: Long.UZERO,
    fee_transfer_timeout_nanos: Long.UZERO,
    max_stake_ica_calls_per_epoch: Long.UZERO,
    safety_min_redemption_rate_threshold: Long.UZERO,
    safety_max_redemption_rate_threshold: Long.UZERO,
    ibc_transfer_timeout_nanos: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.rewards_interval.isZero()) {
      writer.uint32(8).uint64(message.rewards_interval);
    }

    if (!message.delegate_interval.isZero()) {
      writer.uint32(48).uint64(message.delegate_interval);
    }

    if (!message.deposit_interval.isZero()) {
      writer.uint32(16).uint64(message.deposit_interval);
    }

    if (!message.redemption_rate_interval.isZero()) {
      writer.uint32(24).uint64(message.redemption_rate_interval);
    }

    if (!message.stride_commission.isZero()) {
      writer.uint32(32).uint64(message.stride_commission);
    }

    Object.entries(message.zone_com_address).forEach(([key, value]) => {
      Params_ZoneComAddressEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(42).fork()).ldelim();
    });

    if (!message.reinvest_interval.isZero()) {
      writer.uint32(56).uint64(message.reinvest_interval);
    }

    if (!message.validator_rebalancing_threshold.isZero()) {
      writer.uint32(64).uint64(message.validator_rebalancing_threshold);
    }

    if (!message.ica_timeout_nanos.isZero()) {
      writer.uint32(72).uint64(message.ica_timeout_nanos);
    }

    if (!message.buffer_size.isZero()) {
      writer.uint32(80).uint64(message.buffer_size);
    }

    if (!message.ibc_timeout_blocks.isZero()) {
      writer.uint32(88).uint64(message.ibc_timeout_blocks);
    }

    if (!message.fee_transfer_timeout_nanos.isZero()) {
      writer.uint32(96).uint64(message.fee_transfer_timeout_nanos);
    }

    if (!message.max_stake_ica_calls_per_epoch.isZero()) {
      writer.uint32(104).uint64(message.max_stake_ica_calls_per_epoch);
    }

    if (!message.safety_min_redemption_rate_threshold.isZero()) {
      writer.uint32(112).uint64(message.safety_min_redemption_rate_threshold);
    }

    if (!message.safety_max_redemption_rate_threshold.isZero()) {
      writer.uint32(120).uint64(message.safety_max_redemption_rate_threshold);
    }

    if (!message.ibc_transfer_timeout_nanos.isZero()) {
      writer.uint32(128).uint64(message.ibc_transfer_timeout_nanos);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewards_interval = (reader.uint64() as Long);
          break;

        case 6:
          message.delegate_interval = (reader.uint64() as Long);
          break;

        case 2:
          message.deposit_interval = (reader.uint64() as Long);
          break;

        case 3:
          message.redemption_rate_interval = (reader.uint64() as Long);
          break;

        case 4:
          message.stride_commission = (reader.uint64() as Long);
          break;

        case 5:
          const entry5 = Params_ZoneComAddressEntry.decode(reader, reader.uint32());

          if (entry5.value !== undefined) {
            message.zone_com_address[entry5.key] = entry5.value;
          }

          break;

        case 7:
          message.reinvest_interval = (reader.uint64() as Long);
          break;

        case 8:
          message.validator_rebalancing_threshold = (reader.uint64() as Long);
          break;

        case 9:
          message.ica_timeout_nanos = (reader.uint64() as Long);
          break;

        case 10:
          message.buffer_size = (reader.uint64() as Long);
          break;

        case 11:
          message.ibc_timeout_blocks = (reader.uint64() as Long);
          break;

        case 12:
          message.fee_transfer_timeout_nanos = (reader.uint64() as Long);
          break;

        case 13:
          message.max_stake_ica_calls_per_epoch = (reader.uint64() as Long);
          break;

        case 14:
          message.safety_min_redemption_rate_threshold = (reader.uint64() as Long);
          break;

        case 15:
          message.safety_max_redemption_rate_threshold = (reader.uint64() as Long);
          break;

        case 16:
          message.ibc_transfer_timeout_nanos = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      rewards_interval: isSet(object.rewards_interval) ? Long.fromString(object.rewards_interval) : Long.UZERO,
      delegate_interval: isSet(object.delegate_interval) ? Long.fromString(object.delegate_interval) : Long.UZERO,
      deposit_interval: isSet(object.deposit_interval) ? Long.fromString(object.deposit_interval) : Long.UZERO,
      redemption_rate_interval: isSet(object.redemption_rate_interval) ? Long.fromString(object.redemption_rate_interval) : Long.UZERO,
      stride_commission: isSet(object.stride_commission) ? Long.fromString(object.stride_commission) : Long.UZERO,
      zone_com_address: isObject(object.zone_com_address) ? Object.entries(object.zone_com_address).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      reinvest_interval: isSet(object.reinvest_interval) ? Long.fromString(object.reinvest_interval) : Long.UZERO,
      validator_rebalancing_threshold: isSet(object.validator_rebalancing_threshold) ? Long.fromString(object.validator_rebalancing_threshold) : Long.UZERO,
      ica_timeout_nanos: isSet(object.ica_timeout_nanos) ? Long.fromString(object.ica_timeout_nanos) : Long.UZERO,
      buffer_size: isSet(object.buffer_size) ? Long.fromString(object.buffer_size) : Long.UZERO,
      ibc_timeout_blocks: isSet(object.ibc_timeout_blocks) ? Long.fromString(object.ibc_timeout_blocks) : Long.UZERO,
      fee_transfer_timeout_nanos: isSet(object.fee_transfer_timeout_nanos) ? Long.fromString(object.fee_transfer_timeout_nanos) : Long.UZERO,
      max_stake_ica_calls_per_epoch: isSet(object.max_stake_ica_calls_per_epoch) ? Long.fromString(object.max_stake_ica_calls_per_epoch) : Long.UZERO,
      safety_min_redemption_rate_threshold: isSet(object.safety_min_redemption_rate_threshold) ? Long.fromString(object.safety_min_redemption_rate_threshold) : Long.UZERO,
      safety_max_redemption_rate_threshold: isSet(object.safety_max_redemption_rate_threshold) ? Long.fromString(object.safety_max_redemption_rate_threshold) : Long.UZERO,
      ibc_transfer_timeout_nanos: isSet(object.ibc_transfer_timeout_nanos) ? Long.fromString(object.ibc_transfer_timeout_nanos) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.rewards_interval !== undefined && (obj.rewards_interval = (message.rewards_interval || Long.UZERO).toString());
    message.delegate_interval !== undefined && (obj.delegate_interval = (message.delegate_interval || Long.UZERO).toString());
    message.deposit_interval !== undefined && (obj.deposit_interval = (message.deposit_interval || Long.UZERO).toString());
    message.redemption_rate_interval !== undefined && (obj.redemption_rate_interval = (message.redemption_rate_interval || Long.UZERO).toString());
    message.stride_commission !== undefined && (obj.stride_commission = (message.stride_commission || Long.UZERO).toString());
    obj.zone_com_address = {};

    if (message.zone_com_address) {
      Object.entries(message.zone_com_address).forEach(([k, v]) => {
        obj.zone_com_address[k] = v;
      });
    }

    message.reinvest_interval !== undefined && (obj.reinvest_interval = (message.reinvest_interval || Long.UZERO).toString());
    message.validator_rebalancing_threshold !== undefined && (obj.validator_rebalancing_threshold = (message.validator_rebalancing_threshold || Long.UZERO).toString());
    message.ica_timeout_nanos !== undefined && (obj.ica_timeout_nanos = (message.ica_timeout_nanos || Long.UZERO).toString());
    message.buffer_size !== undefined && (obj.buffer_size = (message.buffer_size || Long.UZERO).toString());
    message.ibc_timeout_blocks !== undefined && (obj.ibc_timeout_blocks = (message.ibc_timeout_blocks || Long.UZERO).toString());
    message.fee_transfer_timeout_nanos !== undefined && (obj.fee_transfer_timeout_nanos = (message.fee_transfer_timeout_nanos || Long.UZERO).toString());
    message.max_stake_ica_calls_per_epoch !== undefined && (obj.max_stake_ica_calls_per_epoch = (message.max_stake_ica_calls_per_epoch || Long.UZERO).toString());
    message.safety_min_redemption_rate_threshold !== undefined && (obj.safety_min_redemption_rate_threshold = (message.safety_min_redemption_rate_threshold || Long.UZERO).toString());
    message.safety_max_redemption_rate_threshold !== undefined && (obj.safety_max_redemption_rate_threshold = (message.safety_max_redemption_rate_threshold || Long.UZERO).toString());
    message.ibc_transfer_timeout_nanos !== undefined && (obj.ibc_transfer_timeout_nanos = (message.ibc_transfer_timeout_nanos || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.rewards_interval = object.rewards_interval !== undefined && object.rewards_interval !== null ? Long.fromValue(object.rewards_interval) : Long.UZERO;
    message.delegate_interval = object.delegate_interval !== undefined && object.delegate_interval !== null ? Long.fromValue(object.delegate_interval) : Long.UZERO;
    message.deposit_interval = object.deposit_interval !== undefined && object.deposit_interval !== null ? Long.fromValue(object.deposit_interval) : Long.UZERO;
    message.redemption_rate_interval = object.redemption_rate_interval !== undefined && object.redemption_rate_interval !== null ? Long.fromValue(object.redemption_rate_interval) : Long.UZERO;
    message.stride_commission = object.stride_commission !== undefined && object.stride_commission !== null ? Long.fromValue(object.stride_commission) : Long.UZERO;
    message.zone_com_address = Object.entries(object.zone_com_address ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.reinvest_interval = object.reinvest_interval !== undefined && object.reinvest_interval !== null ? Long.fromValue(object.reinvest_interval) : Long.UZERO;
    message.validator_rebalancing_threshold = object.validator_rebalancing_threshold !== undefined && object.validator_rebalancing_threshold !== null ? Long.fromValue(object.validator_rebalancing_threshold) : Long.UZERO;
    message.ica_timeout_nanos = object.ica_timeout_nanos !== undefined && object.ica_timeout_nanos !== null ? Long.fromValue(object.ica_timeout_nanos) : Long.UZERO;
    message.buffer_size = object.buffer_size !== undefined && object.buffer_size !== null ? Long.fromValue(object.buffer_size) : Long.UZERO;
    message.ibc_timeout_blocks = object.ibc_timeout_blocks !== undefined && object.ibc_timeout_blocks !== null ? Long.fromValue(object.ibc_timeout_blocks) : Long.UZERO;
    message.fee_transfer_timeout_nanos = object.fee_transfer_timeout_nanos !== undefined && object.fee_transfer_timeout_nanos !== null ? Long.fromValue(object.fee_transfer_timeout_nanos) : Long.UZERO;
    message.max_stake_ica_calls_per_epoch = object.max_stake_ica_calls_per_epoch !== undefined && object.max_stake_ica_calls_per_epoch !== null ? Long.fromValue(object.max_stake_ica_calls_per_epoch) : Long.UZERO;
    message.safety_min_redemption_rate_threshold = object.safety_min_redemption_rate_threshold !== undefined && object.safety_min_redemption_rate_threshold !== null ? Long.fromValue(object.safety_min_redemption_rate_threshold) : Long.UZERO;
    message.safety_max_redemption_rate_threshold = object.safety_max_redemption_rate_threshold !== undefined && object.safety_max_redemption_rate_threshold !== null ? Long.fromValue(object.safety_max_redemption_rate_threshold) : Long.UZERO;
    message.ibc_transfer_timeout_nanos = object.ibc_transfer_timeout_nanos !== undefined && object.ibc_transfer_timeout_nanos !== null ? Long.fromValue(object.ibc_transfer_timeout_nanos) : Long.UZERO;
    return message;
  }

};