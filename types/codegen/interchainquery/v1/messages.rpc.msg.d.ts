import { Rpc } from "@osmonauts/helpers";
import { MsgSubmitQueryResponse, MsgSubmitQueryResponseResponseSDKType } from "./messages";
/** Msg defines the RPC service */
export interface Msg {
    submitQueryResponse(request: MsgSubmitQueryResponse): Promise<MsgSubmitQueryResponseResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    submitQueryResponse(request: MsgSubmitQueryResponse): Promise<MsgSubmitQueryResponseResponseSDKType>;
}
