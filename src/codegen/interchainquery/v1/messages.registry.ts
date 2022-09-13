import { ProofOps } from "../../tendermint/crypto/proof";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitQueryResponse } from "./messages";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/stride.interchainquery.MsgSubmitQueryResponse", MsgSubmitQueryResponse]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submitQueryResponse(value: MsgSubmitQueryResponse) {
      return {
        typeUrl: "/stride.interchainquery.MsgSubmitQueryResponse",
        value: MsgSubmitQueryResponse.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    submitQueryResponse(value: MsgSubmitQueryResponse) {
      return {
        typeUrl: "/stride.interchainquery.MsgSubmitQueryResponse",
        value
      };
    }

  },
  toJSON: {
    submitQueryResponse(value: MsgSubmitQueryResponse) {
      return {
        typeUrl: "/stride.interchainquery.MsgSubmitQueryResponse",
        value: MsgSubmitQueryResponse.toJSON(value)
      };
    }

  },
  fromJSON: {
    submitQueryResponse(value: any) {
      return {
        typeUrl: "/stride.interchainquery.MsgSubmitQueryResponse",
        value: MsgSubmitQueryResponse.fromJSON(value)
      };
    }

  },
  fromPartial: {
    submitQueryResponse(value: MsgSubmitQueryResponse) {
      return {
        typeUrl: "/stride.interchainquery.MsgSubmitQueryResponse",
        value: MsgSubmitQueryResponse.fromPartial(value)
      };
    }

  }
};