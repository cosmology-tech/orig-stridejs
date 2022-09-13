import { ProofOps, ProofOp } from "../../tendermint/crypto/proof";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgSubmitQueryResponse } from "./messages";
export interface AminoMsgSubmitQueryResponse extends AminoMsg {
  type: "/stride.interchainquery.MsgSubmitQueryResponse";
  value: {
    chain_id: string;
    query_id: string;
    result: Uint8Array;
    proof_ops: {
      ops: {
        type: string;
        key: Uint8Array;
        data: Uint8Array;
      }[];
    };
    height: string;
    from_address: string;
  };
}
export const AminoConverter = {
  "/stride.interchainquery.MsgSubmitQueryResponse": {
    aminoType: "/stride.interchainquery.MsgSubmitQueryResponse",
    toAmino: ({
      chain_id,
      query_id,
      result,
      proof_ops,
      height,
      from_address
    }: MsgSubmitQueryResponse): AminoMsgSubmitQueryResponse["value"] => {
      return {
        chain_id,
        query_id,
        result,
        proof_ops: {
          ops: proof_ops.ops.map(el0 => ({
            type: el0.type,
            key: el0.key,
            data: el0.data
          }))
        },
        height: height.toString(),
        from_address
      };
    },
    fromAmino: ({
      chain_id,
      query_id,
      result,
      proof_ops,
      height,
      from_address
    }: AminoMsgSubmitQueryResponse["value"]): MsgSubmitQueryResponse => {
      return {
        chain_id,
        query_id,
        result,
        proof_ops: {
          ops: proof_ops.ops.map(el1 => ({
            type: el1.type,
            key: el1.key,
            data: el1.data
          }))
        },
        height: Long.fromString(height),
        from_address
      };
    }
  }
};