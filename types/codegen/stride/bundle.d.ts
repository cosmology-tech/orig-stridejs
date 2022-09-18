import * as _152 from "../interchainquery/v1/genesis";
import * as _153 from "../interchainquery/v1/messages";
import * as _154 from "../mint/v1beta1/genesis";
import * as _155 from "../mint/v1beta1/mint";
import * as _156 from "../mint/v1beta1/query";
import * as _277 from "../mint/v1beta1/query.lcd";
import * as _278 from "../mint/v1beta1/query.rpc.query";
import * as _279 from "../interchainquery/v1/messages.rpc.msg";
export declare namespace stride {
    const interchainquery: {
        MsgClientImpl: typeof _279.MsgClientImpl;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                submitQueryResponse(value: _153.MsgSubmitQueryResponse): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                submitQueryResponse(value: _153.MsgSubmitQueryResponse): {
                    typeUrl: string;
                    value: _153.MsgSubmitQueryResponse;
                };
            };
            toJSON: {
                submitQueryResponse(value: _153.MsgSubmitQueryResponse): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                submitQueryResponse(value: any): {
                    typeUrl: string;
                    value: _153.MsgSubmitQueryResponse;
                };
            };
            fromPartial: {
                submitQueryResponse(value: _153.MsgSubmitQueryResponse): {
                    typeUrl: string;
                    value: _153.MsgSubmitQueryResponse;
                };
            };
        };
        AminoConverter: {
            "/stride.interchainquery.MsgSubmitQueryResponse": {
                aminoType: string;
                toAmino: ({ chain_id, query_id, result, proof_ops, height, from_address }: _153.MsgSubmitQueryResponse) => {
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
                fromAmino: ({ chain_id, query_id, result, proof_ops, height, from_address }: {
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
                }) => _153.MsgSubmitQueryResponse;
            };
        };
        MsgSubmitQueryResponse: {
            encode(message: _153.MsgSubmitQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgSubmitQueryResponse;
            fromJSON(object: any): _153.MsgSubmitQueryResponse;
            toJSON(message: _153.MsgSubmitQueryResponse): unknown;
            fromPartial(object: {
                chain_id?: string;
                query_id?: string;
                result?: Uint8Array;
                proof_ops?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: any;
                from_address?: string;
            }): _153.MsgSubmitQueryResponse;
        };
        MsgSubmitQueryResponseResponse: {
            encode(_: _153.MsgSubmitQueryResponseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgSubmitQueryResponseResponse;
            fromJSON(_: any): _153.MsgSubmitQueryResponseResponse;
            toJSON(_: _153.MsgSubmitQueryResponseResponse): unknown;
            fromPartial(_: {}): _153.MsgSubmitQueryResponseResponse;
        };
        Query: {
            encode(message: _152.Query, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Query;
            fromJSON(object: any): _152.Query;
            toJSON(message: _152.Query): unknown;
            fromPartial(object: {
                id?: string;
                connection_id?: string;
                chain_id?: string;
                query_type?: string;
                request?: Uint8Array;
                period?: string;
                last_height?: string;
                callback_id?: string;
                ttl?: any;
                height?: any;
            }): _152.Query;
        };
        DataPoint: {
            encode(message: _152.DataPoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.DataPoint;
            fromJSON(object: any): _152.DataPoint;
            toJSON(message: _152.DataPoint): unknown;
            fromPartial(object: {
                id?: string;
                remote_height?: string;
                local_height?: string;
                value?: Uint8Array;
            }): _152.DataPoint;
        };
        GenesisState: {
            encode(message: _152.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GenesisState;
            fromJSON(object: any): _152.GenesisState;
            toJSON(message: _152.GenesisState): unknown;
            fromPartial(object: {
                queries?: {
                    id?: string;
                    connection_id?: string;
                    chain_id?: string;
                    query_type?: string;
                    request?: Uint8Array;
                    period?: string;
                    last_height?: string;
                    callback_id?: string;
                    ttl?: any;
                    height?: any;
                }[];
            }): _152.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _278.QueryClientImpl;
            LCDQueryClient: typeof _277.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _156.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryParamsRequest;
                fromJSON(_: any): _156.QueryParamsRequest;
                toJSON(_: _156.QueryParamsRequest): unknown;
                fromPartial(_: {}): _156.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _156.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryParamsResponse;
                fromJSON(object: any): _156.QueryParamsResponse;
                toJSON(message: _156.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mint_denom?: string;
                        genesis_epoch_provisions?: string;
                        epoch_identifier?: string;
                        reduction_period_in_epochs?: any;
                        reduction_factor?: string;
                        distribution_proportions?: {
                            staking?: string;
                            community_pool_growth?: string;
                            community_pool_security_budget?: string;
                            strategic_reserve?: string;
                        };
                        minting_rewards_distribution_start_epoch?: any;
                    };
                }): _156.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _156.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryEpochProvisionsRequest;
                fromJSON(_: any): _156.QueryEpochProvisionsRequest;
                toJSON(_: _156.QueryEpochProvisionsRequest): unknown;
                fromPartial(_: {}): _156.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _156.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryEpochProvisionsResponse;
                fromJSON(object: any): _156.QueryEpochProvisionsResponse;
                toJSON(message: _156.QueryEpochProvisionsResponse): unknown;
                fromPartial(object: {
                    epoch_provisions?: Uint8Array;
                }): _156.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _155.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Minter;
                fromJSON(object: any): _155.Minter;
                toJSON(message: _155.Minter): unknown;
                fromPartial(object: {
                    epoch_provisions?: string;
                }): _155.Minter;
            };
            DistributionProportions: {
                encode(message: _155.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.DistributionProportions;
                fromJSON(object: any): _155.DistributionProportions;
                toJSON(message: _155.DistributionProportions): unknown;
                fromPartial(object: {
                    staking?: string;
                    community_pool_growth?: string;
                    community_pool_security_budget?: string;
                    strategic_reserve?: string;
                }): _155.DistributionProportions;
            };
            Params: {
                encode(message: _155.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Params;
                fromJSON(object: any): _155.Params;
                toJSON(message: _155.Params): unknown;
                fromPartial(object: {
                    mint_denom?: string;
                    genesis_epoch_provisions?: string;
                    epoch_identifier?: string;
                    reduction_period_in_epochs?: any;
                    reduction_factor?: string;
                    distribution_proportions?: {
                        staking?: string;
                        community_pool_growth?: string;
                        community_pool_security_budget?: string;
                        strategic_reserve?: string;
                    };
                    minting_rewards_distribution_start_epoch?: any;
                }): _155.Params;
            };
            GenesisState: {
                encode(message: _154.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.GenesisState;
                fromJSON(object: any): _154.GenesisState;
                toJSON(message: _154.GenesisState): unknown;
                fromPartial(object: {
                    minter?: {
                        epoch_provisions?: string;
                    };
                    params?: {
                        mint_denom?: string;
                        genesis_epoch_provisions?: string;
                        epoch_identifier?: string;
                        reduction_period_in_epochs?: any;
                        reduction_factor?: string;
                        distribution_proportions?: {
                            staking?: string;
                            community_pool_growth?: string;
                            community_pool_security_budget?: string;
                            strategic_reserve?: string;
                        };
                        minting_rewards_distribution_start_epoch?: any;
                    };
                    reduction_started_epoch?: any;
                }): _154.GenesisState;
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
            stride: {
                interchainquery: _279.MsgClientImpl;
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
            stride: {
                mint: {
                    v1beta1: _278.QueryClientImpl;
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
            stride: {
                mint: {
                    v1beta1: _277.LCDQueryClient;
                };
            };
        }>;
    };
}
