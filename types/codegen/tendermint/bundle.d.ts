import * as _157 from "./abci/types";
import * as _158 from "./crypto/keys";
import * as _159 from "./crypto/proof";
import * as _160 from "./libs/bits/types";
import * as _161 from "./p2p/types";
import * as _162 from "./types/block";
import * as _163 from "./types/evidence";
import * as _164 from "./types/params";
import * as _165 from "./types/types";
import * as _166 from "./types/validator";
import * as _167 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _157.CheckTxType;
        checkTxTypeToJSON(object: _157.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _157.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _157.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _157.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _157.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _157.EvidenceType;
        evidenceTypeToJSON(object: _157.EvidenceType): string;
        CheckTxType: typeof _157.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _157.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _157.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _157.EvidenceType;
        Request: {
            encode(message: _157.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Request;
            fromJSON(object: any): _157.Request;
            toJSON(message: _157.Request): unknown;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    block_version?: any;
                    p2p_version?: any;
                };
                set_option?: {
                    key?: string;
                    value?: string;
                };
                init_chain?: {
                    time?: Date;
                    chain_id?: string;
                    consensus_params?: {
                        block?: {
                            max_bytes?: any;
                            max_gas?: any;
                        };
                        evidence?: {
                            max_age_num_blocks?: any;
                            max_age_duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            max_bytes?: any;
                        };
                        validator?: {
                            pub_key_types?: string[];
                        };
                        version?: {
                            app_version?: any;
                        };
                    };
                    validators?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    app_state_bytes?: Uint8Array;
                    initial_height?: any;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: any;
                    prove?: boolean;
                };
                begin_block?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chain_id?: string;
                        height?: any;
                        time?: Date;
                        last_block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        last_commit_hash?: Uint8Array;
                        data_hash?: Uint8Array;
                        validators_hash?: Uint8Array;
                        next_validators_hash?: Uint8Array;
                        consensus_hash?: Uint8Array;
                        app_hash?: Uint8Array;
                        last_results_hash?: Uint8Array;
                        evidence_hash?: Uint8Array;
                        proposer_address?: Uint8Array;
                    };
                    last_commit_info?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signed_last_block?: boolean;
                        }[];
                    };
                    byzantine_validators?: {
                        type?: _157.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        total_voting_power?: any;
                    }[];
                };
                check_tx?: {
                    tx?: Uint8Array;
                    type?: _157.CheckTxType;
                };
                deliver_tx?: {
                    tx?: Uint8Array;
                };
                end_block?: {
                    height?: any;
                };
                commit?: {};
                list_snapshots?: {};
                offer_snapshot?: {
                    snapshot?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    app_hash?: Uint8Array;
                };
                load_snapshot_chunk?: {
                    height?: any;
                    format?: number;
                    chunk?: number;
                };
                apply_snapshot_chunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _157.Request;
        };
        RequestEcho: {
            encode(message: _157.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RequestEcho;
            fromJSON(object: any): _157.RequestEcho;
            toJSON(message: _157.RequestEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _157.RequestEcho;
        };
        RequestFlush: {
            encode(_: _157.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RequestFlush;
            fromJSON(_: any): _157.RequestFlush;
            toJSON(_: _157.RequestFlush): unknown;
            fromPartial(_: {}): _157.RequestFlush;
        };
        RequestInfo: {
            encode(message: _157.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RequestInfo;
            fromJSON(object: any): _157.RequestInfo;
            toJSON(message: _157.RequestInfo): unknown;
            fromPartial(object: {
                version?: string;
                block_version?: any;
                p2p_version?: any;
            }): _157.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _157.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RequestSetOption;
            fromJSON(object: any): _157.RequestSetOption;
            toJSON(message: _157.RequestSetOption): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _157.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _157.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RequestInitChain;
            fromJSON(object: any): _157.RequestInitChain;
            toJSON(message: _157.RequestInitChain): unknown;
            fromPartial(object: {
                time?: Date;
                chain_id?: string;
                consensus_params?: {
                    block?: {
                        max_bytes?: any;
                        max_gas?: any;
                    };
                    evidence?: {
                        max_age_num_blocks?: any;
                        max_age_duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        max_bytes?: any;
                    };
                    validator?: {
                        pub_key_types?: string[];
                    };
                    version?: {
                        app_version?: any;
                    };
                };
                validators?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                app_state_bytes?: Uint8Array;
                initial_height?: any;
            }): _157.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _157.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RequestQuery;
            fromJSON(object: any): _157.RequestQuery;
            toJSON(message: _157.RequestQuery): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: any;
                prove?: boolean;
            }): _157.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _157.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RequestBeginBlock;
            fromJSON(object: any): _157.RequestBeginBlock;
            toJSON(message: _157.RequestBeginBlock): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chain_id?: string;
                    height?: any;
                    time?: Date;
                    last_block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    last_commit_hash?: Uint8Array;
                    data_hash?: Uint8Array;
                    validators_hash?: Uint8Array;
                    next_validators_hash?: Uint8Array;
                    consensus_hash?: Uint8Array;
                    app_hash?: Uint8Array;
                    last_results_hash?: Uint8Array;
                    evidence_hash?: Uint8Array;
                    proposer_address?: Uint8Array;
                };
                last_commit_info?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signed_last_block?: boolean;
                    }[];
                };
                byzantine_validators?: {
                    type?: _157.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    total_voting_power?: any;
                }[];
            }): _157.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _157.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RequestCheckTx;
            fromJSON(object: any): _157.RequestCheckTx;
            toJSON(message: _157.RequestCheckTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _157.CheckTxType;
            }): _157.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _157.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RequestDeliverTx;
            fromJSON(object: any): _157.RequestDeliverTx;
            toJSON(message: _157.RequestDeliverTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _157.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _157.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RequestEndBlock;
            fromJSON(object: any): _157.RequestEndBlock;
            toJSON(message: _157.RequestEndBlock): unknown;
            fromPartial(object: {
                height?: any;
            }): _157.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _157.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RequestCommit;
            fromJSON(_: any): _157.RequestCommit;
            toJSON(_: _157.RequestCommit): unknown;
            fromPartial(_: {}): _157.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _157.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RequestListSnapshots;
            fromJSON(_: any): _157.RequestListSnapshots;
            toJSON(_: _157.RequestListSnapshots): unknown;
            fromPartial(_: {}): _157.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _157.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RequestOfferSnapshot;
            fromJSON(object: any): _157.RequestOfferSnapshot;
            toJSON(message: _157.RequestOfferSnapshot): unknown;
            fromPartial(object: {
                snapshot?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                app_hash?: Uint8Array;
            }): _157.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _157.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RequestLoadSnapshotChunk;
            fromJSON(object: any): _157.RequestLoadSnapshotChunk;
            toJSON(message: _157.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: {
                height?: any;
                format?: number;
                chunk?: number;
            }): _157.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _157.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RequestApplySnapshotChunk;
            fromJSON(object: any): _157.RequestApplySnapshotChunk;
            toJSON(message: _157.RequestApplySnapshotChunk): unknown;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _157.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _157.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Response;
            fromJSON(object: any): _157.Response;
            toJSON(message: _157.Response): unknown;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    app_version?: any;
                    last_block_height?: any;
                    last_block_app_hash?: Uint8Array;
                };
                set_option?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                init_chain?: {
                    consensus_params?: {
                        block?: {
                            max_bytes?: any;
                            max_gas?: any;
                        };
                        evidence?: {
                            max_age_num_blocks?: any;
                            max_age_duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            max_bytes?: any;
                        };
                        validator?: {
                            pub_key_types?: string[];
                        };
                        version?: {
                            app_version?: any;
                        };
                    };
                    validators?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    app_hash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: any;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proof_ops?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: any;
                    codespace?: string;
                };
                begin_block?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                check_tx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gas_wanted?: any;
                    gas_used?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                deliver_tx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gas_wanted?: any;
                    gas_used?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                end_block?: {
                    validator_updates?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    consensus_param_updates?: {
                        block?: {
                            max_bytes?: any;
                            max_gas?: any;
                        };
                        evidence?: {
                            max_age_num_blocks?: any;
                            max_age_duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            max_bytes?: any;
                        };
                        validator?: {
                            pub_key_types?: string[];
                        };
                        version?: {
                            app_version?: any;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retain_height?: any;
                };
                list_snapshots?: {
                    snapshots?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offer_snapshot?: {
                    result?: _157.ResponseOfferSnapshot_Result;
                };
                load_snapshot_chunk?: {
                    chunk?: Uint8Array;
                };
                apply_snapshot_chunk?: {
                    result?: _157.ResponseApplySnapshotChunk_Result;
                    refetch_chunks?: number[];
                    reject_senders?: string[];
                };
            }): _157.Response;
        };
        ResponseException: {
            encode(message: _157.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ResponseException;
            fromJSON(object: any): _157.ResponseException;
            toJSON(message: _157.ResponseException): unknown;
            fromPartial(object: {
                error?: string;
            }): _157.ResponseException;
        };
        ResponseEcho: {
            encode(message: _157.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ResponseEcho;
            fromJSON(object: any): _157.ResponseEcho;
            toJSON(message: _157.ResponseEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _157.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _157.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ResponseFlush;
            fromJSON(_: any): _157.ResponseFlush;
            toJSON(_: _157.ResponseFlush): unknown;
            fromPartial(_: {}): _157.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _157.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ResponseInfo;
            fromJSON(object: any): _157.ResponseInfo;
            toJSON(message: _157.ResponseInfo): unknown;
            fromPartial(object: {
                data?: string;
                version?: string;
                app_version?: any;
                last_block_height?: any;
                last_block_app_hash?: Uint8Array;
            }): _157.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _157.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ResponseSetOption;
            fromJSON(object: any): _157.ResponseSetOption;
            toJSON(message: _157.ResponseSetOption): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _157.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _157.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ResponseInitChain;
            fromJSON(object: any): _157.ResponseInitChain;
            toJSON(message: _157.ResponseInitChain): unknown;
            fromPartial(object: {
                consensus_params?: {
                    block?: {
                        max_bytes?: any;
                        max_gas?: any;
                    };
                    evidence?: {
                        max_age_num_blocks?: any;
                        max_age_duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        max_bytes?: any;
                    };
                    validator?: {
                        pub_key_types?: string[];
                    };
                    version?: {
                        app_version?: any;
                    };
                };
                validators?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                app_hash?: Uint8Array;
            }): _157.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _157.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ResponseQuery;
            fromJSON(object: any): _157.ResponseQuery;
            toJSON(message: _157.ResponseQuery): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: any;
                key?: Uint8Array;
                value?: Uint8Array;
                proof_ops?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: any;
                codespace?: string;
            }): _157.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _157.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ResponseBeginBlock;
            fromJSON(object: any): _157.ResponseBeginBlock;
            toJSON(message: _157.ResponseBeginBlock): unknown;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _157.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _157.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ResponseCheckTx;
            fromJSON(object: any): _157.ResponseCheckTx;
            toJSON(message: _157.ResponseCheckTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gas_wanted?: any;
                gas_used?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _157.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _157.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ResponseDeliverTx;
            fromJSON(object: any): _157.ResponseDeliverTx;
            toJSON(message: _157.ResponseDeliverTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gas_wanted?: any;
                gas_used?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _157.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _157.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ResponseEndBlock;
            fromJSON(object: any): _157.ResponseEndBlock;
            toJSON(message: _157.ResponseEndBlock): unknown;
            fromPartial(object: {
                validator_updates?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                consensus_param_updates?: {
                    block?: {
                        max_bytes?: any;
                        max_gas?: any;
                    };
                    evidence?: {
                        max_age_num_blocks?: any;
                        max_age_duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        max_bytes?: any;
                    };
                    validator?: {
                        pub_key_types?: string[];
                    };
                    version?: {
                        app_version?: any;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _157.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _157.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ResponseCommit;
            fromJSON(object: any): _157.ResponseCommit;
            toJSON(message: _157.ResponseCommit): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                retain_height?: any;
            }): _157.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _157.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ResponseListSnapshots;
            fromJSON(object: any): _157.ResponseListSnapshots;
            toJSON(message: _157.ResponseListSnapshots): unknown;
            fromPartial(object: {
                snapshots?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _157.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _157.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ResponseOfferSnapshot;
            fromJSON(object: any): _157.ResponseOfferSnapshot;
            toJSON(message: _157.ResponseOfferSnapshot): unknown;
            fromPartial(object: {
                result?: _157.ResponseOfferSnapshot_Result;
            }): _157.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _157.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _157.ResponseLoadSnapshotChunk;
            toJSON(message: _157.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _157.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _157.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ResponseApplySnapshotChunk;
            fromJSON(object: any): _157.ResponseApplySnapshotChunk;
            toJSON(message: _157.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: {
                result?: _157.ResponseApplySnapshotChunk_Result;
                refetch_chunks?: number[];
                reject_senders?: string[];
            }): _157.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _157.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ConsensusParams;
            fromJSON(object: any): _157.ConsensusParams;
            toJSON(message: _157.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    max_bytes?: any;
                    max_gas?: any;
                };
                evidence?: {
                    max_age_num_blocks?: any;
                    max_age_duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    max_bytes?: any;
                };
                validator?: {
                    pub_key_types?: string[];
                };
                version?: {
                    app_version?: any;
                };
            }): _157.ConsensusParams;
        };
        BlockParams: {
            encode(message: _157.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.BlockParams;
            fromJSON(object: any): _157.BlockParams;
            toJSON(message: _157.BlockParams): unknown;
            fromPartial(object: {
                max_bytes?: any;
                max_gas?: any;
            }): _157.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _157.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.LastCommitInfo;
            fromJSON(object: any): _157.LastCommitInfo;
            toJSON(message: _157.LastCommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signed_last_block?: boolean;
                }[];
            }): _157.LastCommitInfo;
        };
        Event: {
            encode(message: _157.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Event;
            fromJSON(object: any): _157.Event;
            toJSON(message: _157.Event): unknown;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _157.Event;
        };
        EventAttribute: {
            encode(message: _157.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.EventAttribute;
            fromJSON(object: any): _157.EventAttribute;
            toJSON(message: _157.EventAttribute): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _157.EventAttribute;
        };
        TxResult: {
            encode(message: _157.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.TxResult;
            fromJSON(object: any): _157.TxResult;
            toJSON(message: _157.TxResult): unknown;
            fromPartial(object: {
                height?: any;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gas_wanted?: any;
                    gas_used?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _157.TxResult;
        };
        Validator: {
            encode(message: _157.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Validator;
            fromJSON(object: any): _157.Validator;
            toJSON(message: _157.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                power?: any;
            }): _157.Validator;
        };
        ValidatorUpdate: {
            encode(message: _157.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ValidatorUpdate;
            fromJSON(object: any): _157.ValidatorUpdate;
            toJSON(message: _157.ValidatorUpdate): unknown;
            fromPartial(object: {
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }): _157.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _157.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.VoteInfo;
            fromJSON(object: any): _157.VoteInfo;
            toJSON(message: _157.VoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                signed_last_block?: boolean;
            }): _157.VoteInfo;
        };
        Evidence: {
            encode(message: _157.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Evidence;
            fromJSON(object: any): _157.Evidence;
            toJSON(message: _157.Evidence): unknown;
            fromPartial(object: {
                type?: _157.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                height?: any;
                time?: Date;
                total_voting_power?: any;
            }): _157.Evidence;
        };
        Snapshot: {
            encode(message: _157.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Snapshot;
            fromJSON(object: any): _157.Snapshot;
            toJSON(message: _157.Snapshot): unknown;
            fromPartial(object: {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _157.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _159.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Proof;
            fromJSON(object: any): _159.Proof;
            toJSON(message: _159.Proof): unknown;
            fromPartial(object: {
                total?: any;
                index?: any;
                leaf_hash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _159.Proof;
        };
        ValueOp: {
            encode(message: _159.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.ValueOp;
            fromJSON(object: any): _159.ValueOp;
            toJSON(message: _159.ValueOp): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _159.ValueOp;
        };
        DominoOp: {
            encode(message: _159.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.DominoOp;
            fromJSON(object: any): _159.DominoOp;
            toJSON(message: _159.DominoOp): unknown;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _159.DominoOp;
        };
        ProofOp: {
            encode(message: _159.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.ProofOp;
            fromJSON(object: any): _159.ProofOp;
            toJSON(message: _159.ProofOp): unknown;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _159.ProofOp;
        };
        ProofOps: {
            encode(message: _159.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.ProofOps;
            fromJSON(object: any): _159.ProofOps;
            toJSON(message: _159.ProofOps): unknown;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _159.ProofOps;
        };
        PublicKey: {
            encode(message: _158.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.PublicKey;
            fromJSON(object: any): _158.PublicKey;
            toJSON(message: _158.PublicKey): unknown;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _158.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _160.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.BitArray;
                fromJSON(object: any): _160.BitArray;
                toJSON(message: _160.BitArray): unknown;
                fromPartial(object: {
                    bits?: any;
                    elems?: any[];
                }): _160.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _161.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.ProtocolVersion;
            fromJSON(object: any): _161.ProtocolVersion;
            toJSON(message: _161.ProtocolVersion): unknown;
            fromPartial(object: {
                p2p?: any;
                block?: any;
                app?: any;
            }): _161.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _161.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.NodeInfo;
            fromJSON(object: any): _161.NodeInfo;
            toJSON(message: _161.NodeInfo): unknown;
            fromPartial(object: {
                protocol_version?: {
                    p2p?: any;
                    block?: any;
                    app?: any;
                };
                node_id?: string;
                listen_addr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    tx_index?: string;
                    rpc_address?: string;
                };
            }): _161.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _161.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.NodeInfoOther;
            fromJSON(object: any): _161.NodeInfoOther;
            toJSON(message: _161.NodeInfoOther): unknown;
            fromPartial(object: {
                tx_index?: string;
                rpc_address?: string;
            }): _161.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _161.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.PeerInfo;
            fromJSON(object: any): _161.PeerInfo;
            toJSON(message: _161.PeerInfo): unknown;
            fromPartial(object: {
                id?: string;
                address_info?: {
                    address?: string;
                    last_dial_success?: Date;
                    last_dial_failure?: Date;
                    dial_failures?: number;
                }[];
                last_connected?: Date;
            }): _161.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _161.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.PeerAddressInfo;
            fromJSON(object: any): _161.PeerAddressInfo;
            toJSON(message: _161.PeerAddressInfo): unknown;
            fromPartial(object: {
                address?: string;
                last_dial_success?: Date;
                last_dial_failure?: Date;
                dial_failures?: number;
            }): _161.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _166.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.ValidatorSet;
            fromJSON(object: any): _166.ValidatorSet;
            toJSON(message: _166.ValidatorSet): unknown;
            fromPartial(object: {
                validators?: {
                    address?: Uint8Array;
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    voting_power?: any;
                    proposer_priority?: any;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    voting_power?: any;
                    proposer_priority?: any;
                };
                total_voting_power?: any;
            }): _166.ValidatorSet;
        };
        Validator: {
            encode(message: _166.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.Validator;
            fromJSON(object: any): _166.Validator;
            toJSON(message: _166.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                voting_power?: any;
                proposer_priority?: any;
            }): _166.Validator;
        };
        SimpleValidator: {
            encode(message: _166.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.SimpleValidator;
            fromJSON(object: any): _166.SimpleValidator;
            toJSON(message: _166.SimpleValidator): unknown;
            fromPartial(object: {
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                voting_power?: any;
            }): _166.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _165.BlockIDFlag;
        blockIDFlagToJSON(object: _165.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _165.SignedMsgType;
        signedMsgTypeToJSON(object: _165.SignedMsgType): string;
        BlockIDFlag: typeof _165.BlockIDFlag;
        SignedMsgType: typeof _165.SignedMsgType;
        PartSetHeader: {
            encode(message: _165.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.PartSetHeader;
            fromJSON(object: any): _165.PartSetHeader;
            toJSON(message: _165.PartSetHeader): unknown;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _165.PartSetHeader;
        };
        Part: {
            encode(message: _165.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Part;
            fromJSON(object: any): _165.Part;
            toJSON(message: _165.Part): unknown;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _165.Part;
        };
        BlockID: {
            encode(message: _165.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.BlockID;
            fromJSON(object: any): _165.BlockID;
            toJSON(message: _165.BlockID): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                part_set_header?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _165.BlockID;
        };
        Header: {
            encode(message: _165.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Header;
            fromJSON(object: any): _165.Header;
            toJSON(message: _165.Header): unknown;
            fromPartial(object: {
                version?: {
                    block?: any;
                    app?: any;
                };
                chain_id?: string;
                height?: any;
                time?: Date;
                last_block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                last_commit_hash?: Uint8Array;
                data_hash?: Uint8Array;
                validators_hash?: Uint8Array;
                next_validators_hash?: Uint8Array;
                consensus_hash?: Uint8Array;
                app_hash?: Uint8Array;
                last_results_hash?: Uint8Array;
                evidence_hash?: Uint8Array;
                proposer_address?: Uint8Array;
            }): _165.Header;
        };
        Data: {
            encode(message: _165.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Data;
            fromJSON(object: any): _165.Data;
            toJSON(message: _165.Data): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _165.Data;
        };
        Vote: {
            encode(message: _165.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Vote;
            fromJSON(object: any): _165.Vote;
            toJSON(message: _165.Vote): unknown;
            fromPartial(object: {
                type?: _165.SignedMsgType;
                height?: any;
                round?: number;
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                validator_address?: Uint8Array;
                validator_index?: number;
                signature?: Uint8Array;
            }): _165.Vote;
        };
        Commit: {
            encode(message: _165.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Commit;
            fromJSON(object: any): _165.Commit;
            toJSON(message: _165.Commit): unknown;
            fromPartial(object: {
                height?: any;
                round?: number;
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    block_id_flag?: _165.BlockIDFlag;
                    validator_address?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _165.Commit;
        };
        CommitSig: {
            encode(message: _165.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.CommitSig;
            fromJSON(object: any): _165.CommitSig;
            toJSON(message: _165.CommitSig): unknown;
            fromPartial(object: {
                block_id_flag?: _165.BlockIDFlag;
                validator_address?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _165.CommitSig;
        };
        Proposal: {
            encode(message: _165.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Proposal;
            fromJSON(object: any): _165.Proposal;
            toJSON(message: _165.Proposal): unknown;
            fromPartial(object: {
                type?: _165.SignedMsgType;
                height?: any;
                round?: number;
                pol_round?: number;
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            }): _165.Proposal;
        };
        SignedHeader: {
            encode(message: _165.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.SignedHeader;
            fromJSON(object: any): _165.SignedHeader;
            toJSON(message: _165.SignedHeader): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chain_id?: string;
                    height?: any;
                    time?: Date;
                    last_block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    last_commit_hash?: Uint8Array;
                    data_hash?: Uint8Array;
                    validators_hash?: Uint8Array;
                    next_validators_hash?: Uint8Array;
                    consensus_hash?: Uint8Array;
                    app_hash?: Uint8Array;
                    last_results_hash?: Uint8Array;
                    evidence_hash?: Uint8Array;
                    proposer_address?: Uint8Array;
                };
                commit?: {
                    height?: any;
                    round?: number;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        block_id_flag?: _165.BlockIDFlag;
                        validator_address?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _165.SignedHeader;
        };
        LightBlock: {
            encode(message: _165.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.LightBlock;
            fromJSON(object: any): _165.LightBlock;
            toJSON(message: _165.LightBlock): unknown;
            fromPartial(object: {
                signed_header?: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chain_id?: string;
                        height?: any;
                        time?: Date;
                        last_block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        last_commit_hash?: Uint8Array;
                        data_hash?: Uint8Array;
                        validators_hash?: Uint8Array;
                        next_validators_hash?: Uint8Array;
                        consensus_hash?: Uint8Array;
                        app_hash?: Uint8Array;
                        last_results_hash?: Uint8Array;
                        evidence_hash?: Uint8Array;
                        proposer_address?: Uint8Array;
                    };
                    commit?: {
                        height?: any;
                        round?: number;
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            block_id_flag?: _165.BlockIDFlag;
                            validator_address?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    };
                };
                validator_set?: {
                    validators?: {
                        address?: Uint8Array;
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        voting_power?: any;
                        proposer_priority?: any;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        voting_power?: any;
                        proposer_priority?: any;
                    };
                    total_voting_power?: any;
                };
            }): _165.LightBlock;
        };
        BlockMeta: {
            encode(message: _165.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.BlockMeta;
            fromJSON(object: any): _165.BlockMeta;
            toJSON(message: _165.BlockMeta): unknown;
            fromPartial(object: {
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                block_size?: any;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chain_id?: string;
                    height?: any;
                    time?: Date;
                    last_block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    last_commit_hash?: Uint8Array;
                    data_hash?: Uint8Array;
                    validators_hash?: Uint8Array;
                    next_validators_hash?: Uint8Array;
                    consensus_hash?: Uint8Array;
                    app_hash?: Uint8Array;
                    last_results_hash?: Uint8Array;
                    evidence_hash?: Uint8Array;
                    proposer_address?: Uint8Array;
                };
                num_txs?: any;
            }): _165.BlockMeta;
        };
        TxProof: {
            encode(message: _165.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.TxProof;
            fromJSON(object: any): _165.TxProof;
            toJSON(message: _165.TxProof): unknown;
            fromPartial(object: {
                root_hash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _165.TxProof;
        };
        ConsensusParams: {
            encode(message: _164.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ConsensusParams;
            fromJSON(object: any): _164.ConsensusParams;
            toJSON(message: _164.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    max_bytes?: any;
                    max_gas?: any;
                    time_iota_ms?: any;
                };
                evidence?: {
                    max_age_num_blocks?: any;
                    max_age_duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    max_bytes?: any;
                };
                validator?: {
                    pub_key_types?: string[];
                };
                version?: {
                    app_version?: any;
                };
            }): _164.ConsensusParams;
        };
        BlockParams: {
            encode(message: _164.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.BlockParams;
            fromJSON(object: any): _164.BlockParams;
            toJSON(message: _164.BlockParams): unknown;
            fromPartial(object: {
                max_bytes?: any;
                max_gas?: any;
                time_iota_ms?: any;
            }): _164.BlockParams;
        };
        EvidenceParams: {
            encode(message: _164.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.EvidenceParams;
            fromJSON(object: any): _164.EvidenceParams;
            toJSON(message: _164.EvidenceParams): unknown;
            fromPartial(object: {
                max_age_num_blocks?: any;
                max_age_duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                max_bytes?: any;
            }): _164.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _164.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ValidatorParams;
            fromJSON(object: any): _164.ValidatorParams;
            toJSON(message: _164.ValidatorParams): unknown;
            fromPartial(object: {
                pub_key_types?: string[];
            }): _164.ValidatorParams;
        };
        VersionParams: {
            encode(message: _164.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.VersionParams;
            fromJSON(object: any): _164.VersionParams;
            toJSON(message: _164.VersionParams): unknown;
            fromPartial(object: {
                app_version?: any;
            }): _164.VersionParams;
        };
        HashedParams: {
            encode(message: _164.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.HashedParams;
            fromJSON(object: any): _164.HashedParams;
            toJSON(message: _164.HashedParams): unknown;
            fromPartial(object: {
                block_max_bytes?: any;
                block_max_gas?: any;
            }): _164.HashedParams;
        };
        Evidence: {
            encode(message: _163.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Evidence;
            fromJSON(object: any): _163.Evidence;
            toJSON(message: _163.Evidence): unknown;
            fromPartial(object: {
                duplicate_vote_evidence?: {
                    vote_a?: {
                        type?: _165.SignedMsgType;
                        height?: any;
                        round?: number;
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validator_address?: Uint8Array;
                        validator_index?: number;
                        signature?: Uint8Array;
                    };
                    vote_b?: {
                        type?: _165.SignedMsgType;
                        height?: any;
                        round?: number;
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validator_address?: Uint8Array;
                        validator_index?: number;
                        signature?: Uint8Array;
                    };
                    total_voting_power?: any;
                    validator_power?: any;
                    timestamp?: Date;
                };
                light_client_attack_evidence?: {
                    conflicting_block?: {
                        signed_header?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chain_id?: string;
                                height?: any;
                                time?: Date;
                                last_block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                last_commit_hash?: Uint8Array;
                                data_hash?: Uint8Array;
                                validators_hash?: Uint8Array;
                                next_validators_hash?: Uint8Array;
                                consensus_hash?: Uint8Array;
                                app_hash?: Uint8Array;
                                last_results_hash?: Uint8Array;
                                evidence_hash?: Uint8Array;
                                proposer_address?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    block_id_flag?: _165.BlockIDFlag;
                                    validator_address?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validator_set?: {
                            validators?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: any;
                                proposer_priority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: any;
                                proposer_priority?: any;
                            };
                            total_voting_power?: any;
                        };
                    };
                    common_height?: any;
                    byzantine_validators?: {
                        address?: Uint8Array;
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        voting_power?: any;
                        proposer_priority?: any;
                    }[];
                    total_voting_power?: any;
                    timestamp?: Date;
                };
            }): _163.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _163.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.DuplicateVoteEvidence;
            fromJSON(object: any): _163.DuplicateVoteEvidence;
            toJSON(message: _163.DuplicateVoteEvidence): unknown;
            fromPartial(object: {
                vote_a?: {
                    type?: _165.SignedMsgType;
                    height?: any;
                    round?: number;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validator_address?: Uint8Array;
                    validator_index?: number;
                    signature?: Uint8Array;
                };
                vote_b?: {
                    type?: _165.SignedMsgType;
                    height?: any;
                    round?: number;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validator_address?: Uint8Array;
                    validator_index?: number;
                    signature?: Uint8Array;
                };
                total_voting_power?: any;
                validator_power?: any;
                timestamp?: Date;
            }): _163.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _163.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.LightClientAttackEvidence;
            fromJSON(object: any): _163.LightClientAttackEvidence;
            toJSON(message: _163.LightClientAttackEvidence): unknown;
            fromPartial(object: {
                conflicting_block?: {
                    signed_header?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chain_id?: string;
                            height?: any;
                            time?: Date;
                            last_block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            last_commit_hash?: Uint8Array;
                            data_hash?: Uint8Array;
                            validators_hash?: Uint8Array;
                            next_validators_hash?: Uint8Array;
                            consensus_hash?: Uint8Array;
                            app_hash?: Uint8Array;
                            last_results_hash?: Uint8Array;
                            evidence_hash?: Uint8Array;
                            proposer_address?: Uint8Array;
                        };
                        commit?: {
                            height?: any;
                            round?: number;
                            block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                block_id_flag?: _165.BlockIDFlag;
                                validator_address?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    validator_set?: {
                        validators?: {
                            address?: Uint8Array;
                            pub_key?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            voting_power?: any;
                            proposer_priority?: any;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pub_key?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            voting_power?: any;
                            proposer_priority?: any;
                        };
                        total_voting_power?: any;
                    };
                };
                common_height?: any;
                byzantine_validators?: {
                    address?: Uint8Array;
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    voting_power?: any;
                    proposer_priority?: any;
                }[];
                total_voting_power?: any;
                timestamp?: Date;
            }): _163.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _163.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EvidenceList;
            fromJSON(object: any): _163.EvidenceList;
            toJSON(message: _163.EvidenceList): unknown;
            fromPartial(object: {
                evidence?: {
                    duplicate_vote_evidence?: {
                        vote_a?: {
                            type?: _165.SignedMsgType;
                            height?: any;
                            round?: number;
                            block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validator_address?: Uint8Array;
                            validator_index?: number;
                            signature?: Uint8Array;
                        };
                        vote_b?: {
                            type?: _165.SignedMsgType;
                            height?: any;
                            round?: number;
                            block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validator_address?: Uint8Array;
                            validator_index?: number;
                            signature?: Uint8Array;
                        };
                        total_voting_power?: any;
                        validator_power?: any;
                        timestamp?: Date;
                    };
                    light_client_attack_evidence?: {
                        conflicting_block?: {
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chain_id?: string;
                                    height?: any;
                                    time?: Date;
                                    last_block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    last_commit_hash?: Uint8Array;
                                    data_hash?: Uint8Array;
                                    validators_hash?: Uint8Array;
                                    next_validators_hash?: Uint8Array;
                                    consensus_hash?: Uint8Array;
                                    app_hash?: Uint8Array;
                                    last_results_hash?: Uint8Array;
                                    evidence_hash?: Uint8Array;
                                    proposer_address?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        block_id_flag?: _165.BlockIDFlag;
                                        validator_address?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validator_set?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                };
                                total_voting_power?: any;
                            };
                        };
                        common_height?: any;
                        byzantine_validators?: {
                            address?: Uint8Array;
                            pub_key?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            voting_power?: any;
                            proposer_priority?: any;
                        }[];
                        total_voting_power?: any;
                        timestamp?: Date;
                    };
                }[];
            }): _163.EvidenceList;
        };
        Block: {
            encode(message: _162.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Block;
            fromJSON(object: any): _162.Block;
            toJSON(message: _162.Block): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chain_id?: string;
                    height?: any;
                    time?: Date;
                    last_block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    last_commit_hash?: Uint8Array;
                    data_hash?: Uint8Array;
                    validators_hash?: Uint8Array;
                    next_validators_hash?: Uint8Array;
                    consensus_hash?: Uint8Array;
                    app_hash?: Uint8Array;
                    last_results_hash?: Uint8Array;
                    evidence_hash?: Uint8Array;
                    proposer_address?: Uint8Array;
                };
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicate_vote_evidence?: {
                            vote_a?: {
                                type?: _165.SignedMsgType;
                                height?: any;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validator_address?: Uint8Array;
                                validator_index?: number;
                                signature?: Uint8Array;
                            };
                            vote_b?: {
                                type?: _165.SignedMsgType;
                                height?: any;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validator_address?: Uint8Array;
                                validator_index?: number;
                                signature?: Uint8Array;
                            };
                            total_voting_power?: any;
                            validator_power?: any;
                            timestamp?: Date;
                        };
                        light_client_attack_evidence?: {
                            conflicting_block?: {
                                signed_header?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chain_id?: string;
                                        height?: any;
                                        time?: Date;
                                        last_block_id?: {
                                            hash?: Uint8Array;
                                            part_set_header?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        last_commit_hash?: Uint8Array;
                                        data_hash?: Uint8Array;
                                        validators_hash?: Uint8Array;
                                        next_validators_hash?: Uint8Array;
                                        consensus_hash?: Uint8Array;
                                        app_hash?: Uint8Array;
                                        last_results_hash?: Uint8Array;
                                        evidence_hash?: Uint8Array;
                                        proposer_address?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        block_id?: {
                                            hash?: Uint8Array;
                                            part_set_header?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            block_id_flag?: _165.BlockIDFlag;
                                            validator_address?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validator_set?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pub_key?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        voting_power?: any;
                                        proposer_priority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pub_key?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        voting_power?: any;
                                        proposer_priority?: any;
                                    };
                                    total_voting_power?: any;
                                };
                            };
                            common_height?: any;
                            byzantine_validators?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: any;
                                proposer_priority?: any;
                            }[];
                            total_voting_power?: any;
                            timestamp?: Date;
                        };
                    }[];
                };
                last_commit?: {
                    height?: any;
                    round?: number;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        block_id_flag?: _165.BlockIDFlag;
                        validator_address?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _162.Block;
        };
    };
    const version: {
        App: {
            encode(message: _167.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.App;
            fromJSON(object: any): _167.App;
            toJSON(message: _167.App): unknown;
            fromPartial(object: {
                protocol?: any;
                software?: string;
            }): _167.App;
        };
        Consensus: {
            encode(message: _167.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.Consensus;
            fromJSON(object: any): _167.Consensus;
            toJSON(message: _167.Consensus): unknown;
            fromPartial(object: {
                block?: any;
                app?: any;
            }): _167.Consensus;
        };
    };
}
