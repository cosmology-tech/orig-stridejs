import * as _146 from "../icacallbacks/callback_data";
import * as _147 from "../icacallbacks/genesis";
import * as _148 from "../icacallbacks/packet";
import * as _149 from "../icacallbacks/params";
import * as _150 from "../icacallbacks/query";
import * as _273 from "../icacallbacks/query.lcd";
import * as _274 from "../icacallbacks/query.rpc.query";
export declare namespace stridelabs {
    namespace stride {
        const icacallbacks: {
            QueryClientImpl: typeof _274.QueryClientImpl;
            LCDQueryClient: typeof _273.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _150.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryParamsRequest;
                fromJSON(_: any): _150.QueryParamsRequest;
                toJSON(_: _150.QueryParamsRequest): unknown;
                fromPartial(_: {}): _150.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _150.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryParamsResponse;
                fromJSON(object: any): _150.QueryParamsResponse;
                toJSON(message: _150.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {};
                }): _150.QueryParamsResponse;
            };
            QueryGetCallbackDataRequest: {
                encode(message: _150.QueryGetCallbackDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryGetCallbackDataRequest;
                fromJSON(object: any): _150.QueryGetCallbackDataRequest;
                toJSON(message: _150.QueryGetCallbackDataRequest): unknown;
                fromPartial(object: {
                    callbackKey?: string;
                }): _150.QueryGetCallbackDataRequest;
            };
            QueryGetCallbackDataResponse: {
                encode(message: _150.QueryGetCallbackDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryGetCallbackDataResponse;
                fromJSON(object: any): _150.QueryGetCallbackDataResponse;
                toJSON(message: _150.QueryGetCallbackDataResponse): unknown;
                fromPartial(object: {
                    callbackData?: {
                        callbackKey?: string;
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                        callbackId?: string;
                        callbackArgs?: Uint8Array;
                    };
                }): _150.QueryGetCallbackDataResponse;
            };
            QueryAllCallbackDataRequest: {
                encode(message: _150.QueryAllCallbackDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryAllCallbackDataRequest;
                fromJSON(object: any): _150.QueryAllCallbackDataRequest;
                toJSON(message: _150.QueryAllCallbackDataRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _150.QueryAllCallbackDataRequest;
            };
            QueryAllCallbackDataResponse: {
                encode(message: _150.QueryAllCallbackDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryAllCallbackDataResponse;
                fromJSON(object: any): _150.QueryAllCallbackDataResponse;
                toJSON(message: _150.QueryAllCallbackDataResponse): unknown;
                fromPartial(object: {
                    callbackData?: {
                        callbackKey?: string;
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                        callbackId?: string;
                        callbackArgs?: Uint8Array;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _150.QueryAllCallbackDataResponse;
            };
            Params: {
                encode(_: _149.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Params;
                fromJSON(_: any): _149.Params;
                toJSON(_: _149.Params): unknown;
                fromPartial(_: {}): _149.Params;
            };
            IcacallbacksPacketData: {
                encode(message: _148.IcacallbacksPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.IcacallbacksPacketData;
                fromJSON(object: any): _148.IcacallbacksPacketData;
                toJSON(message: _148.IcacallbacksPacketData): unknown;
                fromPartial(object: {
                    noData?: {};
                }): _148.IcacallbacksPacketData;
            };
            NoData: {
                encode(_: _148.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.NoData;
                fromJSON(_: any): _148.NoData;
                toJSON(_: _148.NoData): unknown;
                fromPartial(_: {}): _148.NoData;
            };
            GenesisState: {
                encode(message: _147.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.GenesisState;
                fromJSON(object: any): _147.GenesisState;
                toJSON(message: _147.GenesisState): unknown;
                fromPartial(object: {
                    params?: {};
                    port_id?: string;
                    callbackDataList?: {
                        callbackKey?: string;
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                        callbackId?: string;
                        callbackArgs?: Uint8Array;
                    }[];
                }): _147.GenesisState;
            };
            CallbackData: {
                encode(message: _146.CallbackData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.CallbackData;
                fromJSON(object: any): _146.CallbackData;
                toJSON(message: _146.CallbackData): unknown;
                fromPartial(object: {
                    callbackKey?: string;
                    portId?: string;
                    channelId?: string;
                    sequence?: any;
                    callbackId?: string;
                    callbackArgs?: Uint8Array;
                }): _146.CallbackData;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: import("../cosmos/app/v1alpha1/query.rpc.query").QueryClientImpl;
                };
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.rpc.query").QueryClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.rpc.query").QueryClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.rpc.query").QueryClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.query").QueryClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.rpc.query").QueryClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.rpc.query").QueryClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.rpc.query").QueryClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/query.rpc.query").QueryClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.rpc.query").QueryClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.rpc.query").QueryClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.rpc.query").QueryClientImpl;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.rpc.query").QueryClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.rpc.query").QueryClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.rpc.query").QueryClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.query").QueryClientImpl;
                };
            };
            stridelabs: {
                stride: {
                    icacallbacks: _274.QueryClientImpl;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            stridelabs: {
                stride: {
                    icacallbacks: _273.LCDQueryClient;
                };
            };
        }>;
    };
}
