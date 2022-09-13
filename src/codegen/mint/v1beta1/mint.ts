import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";

/** Minter represents the minting state. */
export interface Minter {
  /** current epoch provisions */
  epoch_provisions: string;
}

/** next id: 5 */
export interface DistributionProportions {
  /**
   * staking defines the proportion of the minted minted_denom that is to be
   * allocated as staking rewards.
   */
  staking: string;

  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool: growth.
   */
  community_pool_growth: string;

  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool: security budget.
   */
  community_pool_security_budget: string;

  /**
   * strategic_reserve defines the proportion of the minted mint_denom that is
   * to be allocated to the pool: strategic reserve.
   */
  strategic_reserve: string;
}

/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mint_denom: string;

  /** epoch provisions from the first epoch */
  genesis_epoch_provisions: string;

  /** mint epoch identifier */
  epoch_identifier: string;

  /** number of epochs take to reduce rewards */
  reduction_period_in_epochs: Long;

  /** reduction multiplier to execute on each period */
  reduction_factor: string;

  /** distribution_proportions defines the proportion of the minted denom */
  distribution_proportions: DistributionProportions;

  /** start epoch to distribute minting rewards */
  minting_rewards_distribution_start_epoch: Long;
}

function createBaseMinter(): Minter {
  return {
    epoch_provisions: ""
  };
}

export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch_provisions !== "") {
      writer.uint32(10).string(message.epoch_provisions);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Minter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epoch_provisions = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Minter {
    return {
      epoch_provisions: isSet(object.epoch_provisions) ? String(object.epoch_provisions) : ""
    };
  },

  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.epoch_provisions !== undefined && (obj.epoch_provisions = message.epoch_provisions);
    return obj;
  },

  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.epoch_provisions = object.epoch_provisions ?? "";
    return message;
  }

};

function createBaseDistributionProportions(): DistributionProportions {
  return {
    staking: "",
    community_pool_growth: "",
    community_pool_security_budget: "",
    strategic_reserve: ""
  };
}

export const DistributionProportions = {
  encode(message: DistributionProportions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staking !== "") {
      writer.uint32(10).string(message.staking);
    }

    if (message.community_pool_growth !== "") {
      writer.uint32(18).string(message.community_pool_growth);
    }

    if (message.community_pool_security_budget !== "") {
      writer.uint32(26).string(message.community_pool_security_budget);
    }

    if (message.strategic_reserve !== "") {
      writer.uint32(34).string(message.strategic_reserve);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionProportions();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.staking = reader.string();
          break;

        case 2:
          message.community_pool_growth = reader.string();
          break;

        case 3:
          message.community_pool_security_budget = reader.string();
          break;

        case 4:
          message.strategic_reserve = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DistributionProportions {
    return {
      staking: isSet(object.staking) ? String(object.staking) : "",
      community_pool_growth: isSet(object.community_pool_growth) ? String(object.community_pool_growth) : "",
      community_pool_security_budget: isSet(object.community_pool_security_budget) ? String(object.community_pool_security_budget) : "",
      strategic_reserve: isSet(object.strategic_reserve) ? String(object.strategic_reserve) : ""
    };
  },

  toJSON(message: DistributionProportions): unknown {
    const obj: any = {};
    message.staking !== undefined && (obj.staking = message.staking);
    message.community_pool_growth !== undefined && (obj.community_pool_growth = message.community_pool_growth);
    message.community_pool_security_budget !== undefined && (obj.community_pool_security_budget = message.community_pool_security_budget);
    message.strategic_reserve !== undefined && (obj.strategic_reserve = message.strategic_reserve);
    return obj;
  },

  fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.staking = object.staking ?? "";
    message.community_pool_growth = object.community_pool_growth ?? "";
    message.community_pool_security_budget = object.community_pool_security_budget ?? "";
    message.strategic_reserve = object.strategic_reserve ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    mint_denom: "",
    genesis_epoch_provisions: "",
    epoch_identifier: "",
    reduction_period_in_epochs: Long.ZERO,
    reduction_factor: "",
    distribution_proportions: undefined,
    minting_rewards_distribution_start_epoch: Long.ZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mint_denom !== "") {
      writer.uint32(10).string(message.mint_denom);
    }

    if (message.genesis_epoch_provisions !== "") {
      writer.uint32(18).string(message.genesis_epoch_provisions);
    }

    if (message.epoch_identifier !== "") {
      writer.uint32(26).string(message.epoch_identifier);
    }

    if (!message.reduction_period_in_epochs.isZero()) {
      writer.uint32(32).int64(message.reduction_period_in_epochs);
    }

    if (message.reduction_factor !== "") {
      writer.uint32(42).string(message.reduction_factor);
    }

    if (message.distribution_proportions !== undefined) {
      DistributionProportions.encode(message.distribution_proportions, writer.uint32(50).fork()).ldelim();
    }

    if (!message.minting_rewards_distribution_start_epoch.isZero()) {
      writer.uint32(56).int64(message.minting_rewards_distribution_start_epoch);
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
          message.mint_denom = reader.string();
          break;

        case 2:
          message.genesis_epoch_provisions = reader.string();
          break;

        case 3:
          message.epoch_identifier = reader.string();
          break;

        case 4:
          message.reduction_period_in_epochs = (reader.int64() as Long);
          break;

        case 5:
          message.reduction_factor = reader.string();
          break;

        case 6:
          message.distribution_proportions = DistributionProportions.decode(reader, reader.uint32());
          break;

        case 7:
          message.minting_rewards_distribution_start_epoch = (reader.int64() as Long);
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
      mint_denom: isSet(object.mint_denom) ? String(object.mint_denom) : "",
      genesis_epoch_provisions: isSet(object.genesis_epoch_provisions) ? String(object.genesis_epoch_provisions) : "",
      epoch_identifier: isSet(object.epoch_identifier) ? String(object.epoch_identifier) : "",
      reduction_period_in_epochs: isSet(object.reduction_period_in_epochs) ? Long.fromString(object.reduction_period_in_epochs) : Long.ZERO,
      reduction_factor: isSet(object.reduction_factor) ? String(object.reduction_factor) : "",
      distribution_proportions: isSet(object.distribution_proportions) ? DistributionProportions.fromJSON(object.distribution_proportions) : undefined,
      minting_rewards_distribution_start_epoch: isSet(object.minting_rewards_distribution_start_epoch) ? Long.fromString(object.minting_rewards_distribution_start_epoch) : Long.ZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mint_denom !== undefined && (obj.mint_denom = message.mint_denom);
    message.genesis_epoch_provisions !== undefined && (obj.genesis_epoch_provisions = message.genesis_epoch_provisions);
    message.epoch_identifier !== undefined && (obj.epoch_identifier = message.epoch_identifier);
    message.reduction_period_in_epochs !== undefined && (obj.reduction_period_in_epochs = (message.reduction_period_in_epochs || Long.ZERO).toString());
    message.reduction_factor !== undefined && (obj.reduction_factor = message.reduction_factor);
    message.distribution_proportions !== undefined && (obj.distribution_proportions = message.distribution_proportions ? DistributionProportions.toJSON(message.distribution_proportions) : undefined);
    message.minting_rewards_distribution_start_epoch !== undefined && (obj.minting_rewards_distribution_start_epoch = (message.minting_rewards_distribution_start_epoch || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mint_denom = object.mint_denom ?? "";
    message.genesis_epoch_provisions = object.genesis_epoch_provisions ?? "";
    message.epoch_identifier = object.epoch_identifier ?? "";
    message.reduction_period_in_epochs = object.reduction_period_in_epochs !== undefined && object.reduction_period_in_epochs !== null ? Long.fromValue(object.reduction_period_in_epochs) : Long.ZERO;
    message.reduction_factor = object.reduction_factor ?? "";
    message.distribution_proportions = object.distribution_proportions !== undefined && object.distribution_proportions !== null ? DistributionProportions.fromPartial(object.distribution_proportions) : undefined;
    message.minting_rewards_distribution_start_epoch = object.minting_rewards_distribution_start_epoch !== undefined && object.minting_rewards_distribution_start_epoch !== null ? Long.fromValue(object.minting_rewards_distribution_start_epoch) : Long.ZERO;
    return message;
  }

};