import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSubmitQueryResponse, MsgSubmitQueryResponseResponse, MsgSubmitQueryResponseResponseSDKType } from "./messages";
/** Msg defines the RPC service */

export interface Msg {
  submitQueryResponse(request: MsgSubmitQueryResponse): Promise<MsgSubmitQueryResponseResponseSDKType>;
  /*SubmitQueryResponse defines a method for submit query responses.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.submitQueryResponse = this.submitQueryResponse.bind(this);
  }

  submitQueryResponse(request: MsgSubmitQueryResponse): Promise<MsgSubmitQueryResponseResponseSDKType> {
    const data = MsgSubmitQueryResponse.encode(request).finish();
    const promise = this.rpc.request("stride.interchainquery.Msg", "SubmitQueryResponse", data);
    return promise.then(data => MsgSubmitQueryResponseResponse.decode(new _m0.Reader(data)));
  }

}