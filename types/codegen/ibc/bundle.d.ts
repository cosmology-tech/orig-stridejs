import * as _122 from "./applications/transfer/v1/genesis";
import * as _123 from "./applications/transfer/v1/query";
import * as _124 from "./applications/transfer/v1/transfer";
import * as _125 from "./applications/transfer/v1/tx";
import * as _126 from "./applications/transfer/v2/packet";
import * as _127 from "./core/channel/v1/channel";
import * as _128 from "./core/channel/v1/genesis";
import * as _129 from "./core/channel/v1/query";
import * as _130 from "./core/channel/v1/tx";
import * as _131 from "./core/client/v1/client";
import * as _132 from "./core/client/v1/genesis";
import * as _133 from "./core/client/v1/query";
import * as _134 from "./core/client/v1/tx";
import * as _135 from "./core/commitment/v1/commitment";
import * as _136 from "./core/connection/v1/connection";
import * as _137 from "./core/connection/v1/genesis";
import * as _138 from "./core/connection/v1/query";
import * as _139 from "./core/connection/v1/tx";
import * as _140 from "./core/port/v1/query";
import * as _141 from "./core/types/v1/genesis";
import * as _142 from "./lightclients/localhost/v1/localhost";
import * as _143 from "./lightclients/solomachine/v1/solomachine";
import * as _144 from "./lightclients/solomachine/v2/solomachine";
import * as _145 from "./lightclients/tendermint/v1/tendermint";
import * as _260 from "./applications/transfer/v1/query.lcd";
import * as _261 from "./core/channel/v1/query.lcd";
import * as _262 from "./core/client/v1/query.lcd";
import * as _263 from "./core/connection/v1/query.lcd";
import * as _264 from "./applications/transfer/v1/query.rpc.query";
import * as _265 from "./core/channel/v1/query.rpc.query";
import * as _266 from "./core/client/v1/query.rpc.query";
import * as _267 from "./core/connection/v1/query.rpc.query";
import * as _268 from "./core/port/v1/query.rpc.query";
import * as _269 from "./applications/transfer/v1/tx.rpc.msg";
import * as _270 from "./core/channel/v1/tx.rpc.msg";
import * as _271 from "./core/client/v1/tx.rpc.msg";
import * as _272 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _269.MsgClientImpl;
                QueryClientImpl: typeof _264.QueryClientImpl;
                LCDQueryClient: typeof _260.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _125.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _125.MsgTransfer): {
                            typeUrl: string;
                            value: _125.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _125.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _125.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _125.MsgTransfer): {
                            typeUrl: string;
                            value: _125.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: _125.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("@osmonauts/helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("@osmonauts/helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _125.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _125.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgTransfer;
                    fromJSON(object: any): _125.MsgTransfer;
                    toJSON(message: _125.MsgTransfer): unknown;
                    fromPartial(object: {
                        source_port?: string;
                        source_channel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeout_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        timeout_timestamp?: any;
                    }): _125.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _125.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgTransferResponse;
                    fromJSON(_: any): _125.MsgTransferResponse;
                    toJSON(_: _125.MsgTransferResponse): unknown;
                    fromPartial(_: {}): _125.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _124.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.DenomTrace;
                    fromJSON(object: any): _124.DenomTrace;
                    toJSON(message: _124.DenomTrace): unknown;
                    fromPartial(object: {
                        path?: string;
                        base_denom?: string;
                    }): _124.DenomTrace;
                };
                Params: {
                    encode(message: _124.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Params;
                    fromJSON(object: any): _124.Params;
                    toJSON(message: _124.Params): unknown;
                    fromPartial(object: {
                        send_enabled?: boolean;
                        receive_enabled?: boolean;
                    }): _124.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _123.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryDenomTraceRequest;
                    fromJSON(object: any): _123.QueryDenomTraceRequest;
                    toJSON(message: _123.QueryDenomTraceRequest): unknown;
                    fromPartial(object: {
                        hash?: string;
                    }): _123.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _123.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryDenomTraceResponse;
                    fromJSON(object: any): _123.QueryDenomTraceResponse;
                    toJSON(message: _123.QueryDenomTraceResponse): unknown;
                    fromPartial(object: {
                        denom_trace?: {
                            path?: string;
                            base_denom?: string;
                        };
                    }): _123.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _123.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryDenomTracesRequest;
                    fromJSON(object: any): _123.QueryDenomTracesRequest;
                    toJSON(message: _123.QueryDenomTracesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _123.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _123.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryDenomTracesResponse;
                    fromJSON(object: any): _123.QueryDenomTracesResponse;
                    toJSON(message: _123.QueryDenomTracesResponse): unknown;
                    fromPartial(object: {
                        denom_traces?: {
                            path?: string;
                            base_denom?: string;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                    }): _123.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _123.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryParamsRequest;
                    fromJSON(_: any): _123.QueryParamsRequest;
                    toJSON(_: _123.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _123.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _123.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryParamsResponse;
                    fromJSON(object: any): _123.QueryParamsResponse;
                    toJSON(message: _123.QueryParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            send_enabled?: boolean;
                            receive_enabled?: boolean;
                        };
                    }): _123.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _122.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.GenesisState;
                    fromJSON(object: any): _122.GenesisState;
                    toJSON(message: _122.GenesisState): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        denom_traces?: {
                            path?: string;
                            base_denom?: string;
                        }[];
                        params?: {
                            send_enabled?: boolean;
                            receive_enabled?: boolean;
                        };
                    }): _122.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _126.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.FungibleTokenPacketData;
                    fromJSON(object: any): _126.FungibleTokenPacketData;
                    toJSON(message: _126.FungibleTokenPacketData): unknown;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _126.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _270.MsgClientImpl;
                QueryClientImpl: typeof _265.QueryClientImpl;
                LCDQueryClient: typeof _261.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _130.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _130.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _130.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _130.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _130.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _130.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _130.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _130.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _130.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _130.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _130.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _130.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _130.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _130.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _130.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _130.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _130.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _130.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _130.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _130.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _130.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _130.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _130.MsgRecvPacket): {
                            typeUrl: string;
                            value: _130.MsgRecvPacket;
                        };
                        timeout(value: _130.MsgTimeout): {
                            typeUrl: string;
                            value: _130.MsgTimeout;
                        };
                        timeoutOnClose(value: _130.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _130.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _130.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _130.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _130.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _130.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _130.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _130.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _130.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _130.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _130.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _130.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _130.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _130.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _130.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _130.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _130.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _130.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _130.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _130.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _130.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _130.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _130.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _130.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _130.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _130.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _130.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _130.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _130.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _130.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _130.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _130.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _130.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _130.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _130.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _130.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _130.MsgRecvPacket): {
                            typeUrl: string;
                            value: _130.MsgRecvPacket;
                        };
                        timeout(value: _130.MsgTimeout): {
                            typeUrl: string;
                            value: _130.MsgTimeout;
                        };
                        timeoutOnClose(value: _130.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _130.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _130.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _130.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ port_id, channel, signer }: _130.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _130.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: _130.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _130.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: _130.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _130.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: _130.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _130.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ port_id, channel_id, signer }: _130.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _130.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: _130.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _130.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proof_commitment, proof_height, signer }: _130.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _130.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: _130.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _130.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: _130.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _130.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: _130.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _130.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _130.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgChannelOpenInit;
                    fromJSON(object: any): _130.MsgChannelOpenInit;
                    toJSON(message: _130.MsgChannelOpenInit): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel?: {
                            state?: _127.State;
                            ordering?: _127.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _130.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _130.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _130.MsgChannelOpenInitResponse;
                    toJSON(_: _130.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: {}): _130.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _130.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgChannelOpenTry;
                    fromJSON(object: any): _130.MsgChannelOpenTry;
                    toJSON(message: _130.MsgChannelOpenTry): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        previous_channel_id?: string;
                        channel?: {
                            state?: _127.State;
                            ordering?: _127.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                        counterparty_version?: string;
                        proof_init?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _130.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _130.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _130.MsgChannelOpenTryResponse;
                    toJSON(_: _130.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: {}): _130.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _130.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgChannelOpenAck;
                    fromJSON(object: any): _130.MsgChannelOpenAck;
                    toJSON(message: _130.MsgChannelOpenAck): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        counterparty_channel_id?: string;
                        counterparty_version?: string;
                        proof_try?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _130.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _130.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _130.MsgChannelOpenAckResponse;
                    toJSON(_: _130.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: {}): _130.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _130.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgChannelOpenConfirm;
                    fromJSON(object: any): _130.MsgChannelOpenConfirm;
                    toJSON(message: _130.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        proof_ack?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _130.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _130.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _130.MsgChannelOpenConfirmResponse;
                    toJSON(_: _130.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _130.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _130.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgChannelCloseInit;
                    fromJSON(object: any): _130.MsgChannelCloseInit;
                    toJSON(message: _130.MsgChannelCloseInit): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        signer?: string;
                    }): _130.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _130.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _130.MsgChannelCloseInitResponse;
                    toJSON(_: _130.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: {}): _130.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _130.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgChannelCloseConfirm;
                    fromJSON(object: any): _130.MsgChannelCloseConfirm;
                    toJSON(message: _130.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        proof_init?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _130.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _130.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _130.MsgChannelCloseConfirmResponse;
                    toJSON(_: _130.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: {}): _130.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _130.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgRecvPacket;
                    fromJSON(object: any): _130.MsgRecvPacket;
                    toJSON(message: _130.MsgRecvPacket): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            source_port?: string;
                            source_channel?: string;
                            destination_port?: string;
                            destination_channel?: string;
                            data?: Uint8Array;
                            timeout_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            timeout_timestamp?: any;
                        };
                        proof_commitment?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _130.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _130.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgRecvPacketResponse;
                    fromJSON(_: any): _130.MsgRecvPacketResponse;
                    toJSON(_: _130.MsgRecvPacketResponse): unknown;
                    fromPartial(_: {}): _130.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _130.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgTimeout;
                    fromJSON(object: any): _130.MsgTimeout;
                    toJSON(message: _130.MsgTimeout): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            source_port?: string;
                            source_channel?: string;
                            destination_port?: string;
                            destination_channel?: string;
                            data?: Uint8Array;
                            timeout_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            timeout_timestamp?: any;
                        };
                        proof_unreceived?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        next_sequence_recv?: any;
                        signer?: string;
                    }): _130.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _130.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgTimeoutResponse;
                    fromJSON(_: any): _130.MsgTimeoutResponse;
                    toJSON(_: _130.MsgTimeoutResponse): unknown;
                    fromPartial(_: {}): _130.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _130.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgTimeoutOnClose;
                    fromJSON(object: any): _130.MsgTimeoutOnClose;
                    toJSON(message: _130.MsgTimeoutOnClose): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            source_port?: string;
                            source_channel?: string;
                            destination_port?: string;
                            destination_channel?: string;
                            data?: Uint8Array;
                            timeout_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            timeout_timestamp?: any;
                        };
                        proof_unreceived?: Uint8Array;
                        proof_close?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        next_sequence_recv?: any;
                        signer?: string;
                    }): _130.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _130.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _130.MsgTimeoutOnCloseResponse;
                    toJSON(_: _130.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: {}): _130.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _130.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgAcknowledgement;
                    fromJSON(object: any): _130.MsgAcknowledgement;
                    toJSON(message: _130.MsgAcknowledgement): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            source_port?: string;
                            source_channel?: string;
                            destination_port?: string;
                            destination_channel?: string;
                            data?: Uint8Array;
                            timeout_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            timeout_timestamp?: any;
                        };
                        acknowledgement?: Uint8Array;
                        proof_acked?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _130.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _130.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgAcknowledgementResponse;
                    fromJSON(_: any): _130.MsgAcknowledgementResponse;
                    toJSON(_: _130.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: {}): _130.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _129.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryChannelRequest;
                    fromJSON(object: any): _129.QueryChannelRequest;
                    toJSON(message: _129.QueryChannelRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _129.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _129.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryChannelResponse;
                    fromJSON(object: any): _129.QueryChannelResponse;
                    toJSON(message: _129.QueryChannelResponse): unknown;
                    fromPartial(object: {
                        channel?: {
                            state?: _127.State;
                            ordering?: _127.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _129.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _129.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryChannelsRequest;
                    fromJSON(object: any): _129.QueryChannelsRequest;
                    toJSON(message: _129.QueryChannelsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _129.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _129.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryChannelsResponse;
                    fromJSON(object: any): _129.QueryChannelsResponse;
                    toJSON(message: _129.QueryChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _127.State;
                            ordering?: _127.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                            port_id?: string;
                            channel_id?: string;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _129.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _129.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _129.QueryConnectionChannelsRequest;
                    toJSON(message: _129.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _129.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _129.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _129.QueryConnectionChannelsResponse;
                    toJSON(message: _129.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _127.State;
                            ordering?: _127.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                            port_id?: string;
                            channel_id?: string;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _129.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _129.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryChannelClientStateRequest;
                    fromJSON(object: any): _129.QueryChannelClientStateRequest;
                    toJSON(message: _129.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _129.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _129.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryChannelClientStateResponse;
                    fromJSON(object: any): _129.QueryChannelClientStateResponse;
                    toJSON(message: _129.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: {
                        identified_client_state?: {
                            client_id?: string;
                            client_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _129.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _129.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _129.QueryChannelConsensusStateRequest;
                    toJSON(message: _129.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        revision_number?: any;
                        revision_height?: any;
                    }): _129.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _129.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _129.QueryChannelConsensusStateResponse;
                    toJSON(message: _129.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        client_id?: string;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _129.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _129.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _129.QueryPacketCommitmentRequest;
                    toJSON(message: _129.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: any;
                    }): _129.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _129.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _129.QueryPacketCommitmentResponse;
                    toJSON(message: _129.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _129.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _129.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _129.QueryPacketCommitmentsRequest;
                    toJSON(message: _129.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _129.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _129.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _129.QueryPacketCommitmentsResponse;
                    toJSON(message: _129.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: {
                        commitments?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _129.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _129.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryPacketReceiptRequest;
                    fromJSON(object: any): _129.QueryPacketReceiptRequest;
                    toJSON(message: _129.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: any;
                    }): _129.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _129.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryPacketReceiptResponse;
                    fromJSON(object: any): _129.QueryPacketReceiptResponse;
                    toJSON(message: _129.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _129.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _129.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _129.QueryPacketAcknowledgementRequest;
                    toJSON(message: _129.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: any;
                    }): _129.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _129.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _129.QueryPacketAcknowledgementResponse;
                    toJSON(message: _129.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _129.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _129.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _129.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _129.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                        packet_commitment_sequences?: any[];
                    }): _129.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _129.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _129.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _129.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: {
                        acknowledgements?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _129.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _129.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _129.QueryUnreceivedPacketsRequest;
                    toJSON(message: _129.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        packet_commitment_sequences?: any[];
                    }): _129.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _129.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _129.QueryUnreceivedPacketsResponse;
                    toJSON(message: _129.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _129.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _129.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _129.QueryUnreceivedAcksRequest;
                    toJSON(message: _129.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        packet_ack_sequences?: any[];
                    }): _129.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _129.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _129.QueryUnreceivedAcksResponse;
                    toJSON(message: _129.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _129.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _129.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _129.QueryNextSequenceReceiveRequest;
                    toJSON(message: _129.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _129.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _129.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _129.QueryNextSequenceReceiveResponse;
                    toJSON(message: _129.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: {
                        next_sequence_receive?: any;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _129.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _128.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.GenesisState;
                    fromJSON(object: any): _128.GenesisState;
                    toJSON(message: _128.GenesisState): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _127.State;
                            ordering?: _127.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                            port_id?: string;
                            channel_id?: string;
                        }[];
                        acknowledgements?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        send_sequences?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                        }[];
                        recv_sequences?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                        }[];
                        ack_sequences?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                        }[];
                        next_channel_sequence?: any;
                    }): _128.GenesisState;
                };
                PacketSequence: {
                    encode(message: _128.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.PacketSequence;
                    fromJSON(object: any): _128.PacketSequence;
                    toJSON(message: _128.PacketSequence): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: any;
                    }): _128.PacketSequence;
                };
                stateFromJSON(object: any): _127.State;
                stateToJSON(object: _127.State): string;
                orderFromJSON(object: any): _127.Order;
                orderToJSON(object: _127.Order): string;
                State: typeof _127.State;
                Order: typeof _127.Order;
                Channel: {
                    encode(message: _127.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Channel;
                    fromJSON(object: any): _127.Channel;
                    toJSON(message: _127.Channel): unknown;
                    fromPartial(object: {
                        state?: _127.State;
                        ordering?: _127.Order;
                        counterparty?: {
                            port_id?: string;
                            channel_id?: string;
                        };
                        connection_hops?: string[];
                        version?: string;
                    }): _127.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _127.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.IdentifiedChannel;
                    fromJSON(object: any): _127.IdentifiedChannel;
                    toJSON(message: _127.IdentifiedChannel): unknown;
                    fromPartial(object: {
                        state?: _127.State;
                        ordering?: _127.Order;
                        counterparty?: {
                            port_id?: string;
                            channel_id?: string;
                        };
                        connection_hops?: string[];
                        version?: string;
                        port_id?: string;
                        channel_id?: string;
                    }): _127.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _127.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Counterparty;
                    fromJSON(object: any): _127.Counterparty;
                    toJSON(message: _127.Counterparty): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _127.Counterparty;
                };
                Packet: {
                    encode(message: _127.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Packet;
                    fromJSON(object: any): _127.Packet;
                    toJSON(message: _127.Packet): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        source_port?: string;
                        source_channel?: string;
                        destination_port?: string;
                        destination_channel?: string;
                        data?: Uint8Array;
                        timeout_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        timeout_timestamp?: any;
                    }): _127.Packet;
                };
                PacketState: {
                    encode(message: _127.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.PacketState;
                    fromJSON(object: any): _127.PacketState;
                    toJSON(message: _127.PacketState): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: any;
                        data?: Uint8Array;
                    }): _127.PacketState;
                };
                Acknowledgement: {
                    encode(message: _127.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Acknowledgement;
                    fromJSON(object: any): _127.Acknowledgement;
                    toJSON(message: _127.Acknowledgement): unknown;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _127.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _271.MsgClientImpl;
                QueryClientImpl: typeof _266.QueryClientImpl;
                LCDQueryClient: typeof _262.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _134.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _134.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _134.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _134.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _134.MsgCreateClient): {
                            typeUrl: string;
                            value: _134.MsgCreateClient;
                        };
                        updateClient(value: _134.MsgUpdateClient): {
                            typeUrl: string;
                            value: _134.MsgUpdateClient;
                        };
                        upgradeClient(value: _134.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _134.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _134.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _134.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _134.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _134.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _134.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _134.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _134.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _134.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _134.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _134.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _134.MsgCreateClient): {
                            typeUrl: string;
                            value: _134.MsgCreateClient;
                        };
                        updateClient(value: _134.MsgUpdateClient): {
                            typeUrl: string;
                            value: _134.MsgUpdateClient;
                        };
                        upgradeClient(value: _134.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _134.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _134.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _134.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ client_state, consensus_state, signer }: _134.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _134.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ client_id, header, signer }: _134.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _134.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: _134.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _134.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ client_id, misbehaviour, signer }: _134.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _134.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _134.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgCreateClient;
                    fromJSON(object: any): _134.MsgCreateClient;
                    toJSON(message: _134.MsgCreateClient): unknown;
                    fromPartial(object: {
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _134.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _134.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgCreateClientResponse;
                    fromJSON(_: any): _134.MsgCreateClientResponse;
                    toJSON(_: _134.MsgCreateClientResponse): unknown;
                    fromPartial(_: {}): _134.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _134.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgUpdateClient;
                    fromJSON(object: any): _134.MsgUpdateClient;
                    toJSON(message: _134.MsgUpdateClient): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        header?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _134.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _134.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgUpdateClientResponse;
                    fromJSON(_: any): _134.MsgUpdateClientResponse;
                    toJSON(_: _134.MsgUpdateClientResponse): unknown;
                    fromPartial(_: {}): _134.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _134.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgUpgradeClient;
                    fromJSON(object: any): _134.MsgUpgradeClient;
                    toJSON(message: _134.MsgUpgradeClient): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        proof_upgrade_client?: Uint8Array;
                        proof_upgrade_consensus_state?: Uint8Array;
                        signer?: string;
                    }): _134.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _134.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgUpgradeClientResponse;
                    fromJSON(_: any): _134.MsgUpgradeClientResponse;
                    toJSON(_: _134.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: {}): _134.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _134.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _134.MsgSubmitMisbehaviour;
                    toJSON(message: _134.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        misbehaviour?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _134.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _134.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _134.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _134.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: {}): _134.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _133.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryClientStateRequest;
                    fromJSON(object: any): _133.QueryClientStateRequest;
                    toJSON(message: _133.QueryClientStateRequest): unknown;
                    fromPartial(object: {
                        client_id?: string;
                    }): _133.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _133.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryClientStateResponse;
                    fromJSON(object: any): _133.QueryClientStateResponse;
                    toJSON(message: _133.QueryClientStateResponse): unknown;
                    fromPartial(object: {
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _133.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _133.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryClientStatesRequest;
                    fromJSON(object: any): _133.QueryClientStatesRequest;
                    toJSON(message: _133.QueryClientStatesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _133.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _133.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryClientStatesResponse;
                    fromJSON(object: any): _133.QueryClientStatesResponse;
                    toJSON(message: _133.QueryClientStatesResponse): unknown;
                    fromPartial(object: {
                        client_states?: {
                            client_id?: string;
                            client_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                    }): _133.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _133.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryConsensusStateRequest;
                    fromJSON(object: any): _133.QueryConsensusStateRequest;
                    toJSON(message: _133.QueryConsensusStateRequest): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        revision_number?: any;
                        revision_height?: any;
                        latest_height?: boolean;
                    }): _133.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _133.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryConsensusStateResponse;
                    fromJSON(object: any): _133.QueryConsensusStateResponse;
                    toJSON(message: _133.QueryConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _133.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _133.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryConsensusStatesRequest;
                    fromJSON(object: any): _133.QueryConsensusStatesRequest;
                    toJSON(message: _133.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _133.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _133.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryConsensusStatesResponse;
                    fromJSON(object: any): _133.QueryConsensusStatesResponse;
                    toJSON(message: _133.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: {
                        consensus_states?: {
                            height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            consensus_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                    }): _133.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _133.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryClientStatusRequest;
                    fromJSON(object: any): _133.QueryClientStatusRequest;
                    toJSON(message: _133.QueryClientStatusRequest): unknown;
                    fromPartial(object: {
                        client_id?: string;
                    }): _133.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _133.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryClientStatusResponse;
                    fromJSON(object: any): _133.QueryClientStatusResponse;
                    toJSON(message: _133.QueryClientStatusResponse): unknown;
                    fromPartial(object: {
                        status?: string;
                    }): _133.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _133.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryClientParamsRequest;
                    fromJSON(_: any): _133.QueryClientParamsRequest;
                    toJSON(_: _133.QueryClientParamsRequest): unknown;
                    fromPartial(_: {}): _133.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _133.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryClientParamsResponse;
                    fromJSON(object: any): _133.QueryClientParamsResponse;
                    toJSON(message: _133.QueryClientParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            allowed_clients?: string[];
                        };
                    }): _133.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _133.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _133.QueryUpgradedClientStateRequest;
                    toJSON(_: _133.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: {}): _133.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _133.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _133.QueryUpgradedClientStateResponse;
                    toJSON(message: _133.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: {
                        upgraded_client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _133.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _133.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _133.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _133.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: {}): _133.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _133.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _133.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _133.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: {
                        upgraded_consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _133.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _132.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.GenesisState;
                    fromJSON(object: any): _132.GenesisState;
                    toJSON(message: _132.GenesisState): unknown;
                    fromPartial(object: {
                        clients?: {
                            client_id?: string;
                            client_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clients_consensus?: {
                            client_id?: string;
                            consensus_states?: {
                                height?: {
                                    revision_number?: any;
                                    revision_height?: any;
                                };
                                consensus_state?: {
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clients_metadata?: {
                            client_id?: string;
                            client_metadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowed_clients?: string[];
                        };
                        create_localhost?: boolean;
                        next_client_sequence?: any;
                    }): _132.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _132.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.GenesisMetadata;
                    fromJSON(object: any): _132.GenesisMetadata;
                    toJSON(message: _132.GenesisMetadata): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _132.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _132.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _132.IdentifiedGenesisMetadata;
                    toJSON(message: _132.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        client_metadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _132.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _131.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.IdentifiedClientState;
                    fromJSON(object: any): _131.IdentifiedClientState;
                    toJSON(message: _131.IdentifiedClientState): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _131.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _131.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ConsensusStateWithHeight;
                    fromJSON(object: any): _131.ConsensusStateWithHeight;
                    toJSON(message: _131.ConsensusStateWithHeight): unknown;
                    fromPartial(object: {
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _131.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _131.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ClientConsensusStates;
                    fromJSON(object: any): _131.ClientConsensusStates;
                    toJSON(message: _131.ClientConsensusStates): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        consensus_states?: {
                            height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            consensus_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }): _131.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _131.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ClientUpdateProposal;
                    fromJSON(object: any): _131.ClientUpdateProposal;
                    toJSON(message: _131.ClientUpdateProposal): unknown;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        subject_client_id?: string;
                        substitute_client_id?: string;
                    }): _131.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _131.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.UpgradeProposal;
                    fromJSON(object: any): _131.UpgradeProposal;
                    toJSON(message: _131.UpgradeProposal): unknown;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: any;
                            info?: string;
                            upgraded_client_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        };
                        upgraded_client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _131.UpgradeProposal;
                };
                Height: {
                    encode(message: _131.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Height;
                    fromJSON(object: any): _131.Height;
                    toJSON(message: _131.Height): unknown;
                    fromPartial(object: {
                        revision_number?: any;
                        revision_height?: any;
                    }): _131.Height;
                };
                Params: {
                    encode(message: _131.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Params;
                    fromJSON(object: any): _131.Params;
                    toJSON(message: _131.Params): unknown;
                    fromPartial(object: {
                        allowed_clients?: string[];
                    }): _131.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _135.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MerkleRoot;
                    fromJSON(object: any): _135.MerkleRoot;
                    toJSON(message: _135.MerkleRoot): unknown;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _135.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _135.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MerklePrefix;
                    fromJSON(object: any): _135.MerklePrefix;
                    toJSON(message: _135.MerklePrefix): unknown;
                    fromPartial(object: {
                        key_prefix?: Uint8Array;
                    }): _135.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _135.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MerklePath;
                    fromJSON(object: any): _135.MerklePath;
                    toJSON(message: _135.MerklePath): unknown;
                    fromPartial(object: {
                        key_path?: string[];
                    }): _135.MerklePath;
                };
                MerkleProof: {
                    encode(message: _135.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MerkleProof;
                    fromJSON(object: any): _135.MerkleProof;
                    toJSON(message: _135.MerkleProof): unknown;
                    fromPartial(object: {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehash_key?: import("../confio/proofs").HashOp;
                                    prehash_value?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehash_key?: import("../confio/proofs").HashOp;
                                        prehash_value?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehash_key?: import("../confio/proofs").HashOp;
                                        prehash_value?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehash_key?: import("../confio/proofs").HashOp;
                                            prehash_value?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehash_key?: import("../confio/proofs").HashOp;
                                                prehash_value?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehash_key?: import("../confio/proofs").HashOp;
                                                prehash_value?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehash_key?: import("../confio/proofs").HashOp;
                                            prehash_value?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehash_key?: import("../confio/proofs").HashOp;
                                                prehash_value?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehash_key?: import("../confio/proofs").HashOp;
                                                prehash_value?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookup_inners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    }): _135.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _272.MsgClientImpl;
                QueryClientImpl: typeof _267.QueryClientImpl;
                LCDQueryClient: typeof _263.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _139.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _139.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _139.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _139.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _139.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _139.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _139.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _139.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _139.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _139.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _139.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _139.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _139.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _139.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _139.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _139.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _139.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _139.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _139.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _139.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _139.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _139.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _139.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _139.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _139.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _139.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _139.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _139.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ client_id, counterparty, version, delay_period, signer }: _139.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _139.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: _139.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _139.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: _139.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _139.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connection_id, proof_ack, proof_height, signer }: _139.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _139.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _139.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgConnectionOpenInit;
                    fromJSON(object: any): _139.MsgConnectionOpenInit;
                    toJSON(message: _139.MsgConnectionOpenInit): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delay_period?: any;
                        signer?: string;
                    }): _139.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _139.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _139.MsgConnectionOpenInitResponse;
                    toJSON(_: _139.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: {}): _139.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _139.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgConnectionOpenTry;
                    fromJSON(object: any): _139.MsgConnectionOpenTry;
                    toJSON(message: _139.MsgConnectionOpenTry): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        previous_connection_id?: string;
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        delay_period?: any;
                        counterparty_versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        proof_init?: Uint8Array;
                        proof_client?: Uint8Array;
                        proof_consensus?: Uint8Array;
                        consensus_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _139.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _139.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _139.MsgConnectionOpenTryResponse;
                    toJSON(_: _139.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: {}): _139.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _139.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgConnectionOpenAck;
                    fromJSON(object: any): _139.MsgConnectionOpenAck;
                    toJSON(message: _139.MsgConnectionOpenAck): unknown;
                    fromPartial(object: {
                        connection_id?: string;
                        counterparty_connection_id?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        proof_try?: Uint8Array;
                        proof_client?: Uint8Array;
                        proof_consensus?: Uint8Array;
                        consensus_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _139.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _139.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _139.MsgConnectionOpenAckResponse;
                    toJSON(_: _139.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: {}): _139.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _139.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _139.MsgConnectionOpenConfirm;
                    toJSON(message: _139.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: {
                        connection_id?: string;
                        proof_ack?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _139.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _139.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _139.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _139.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _139.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _138.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryConnectionRequest;
                    fromJSON(object: any): _138.QueryConnectionRequest;
                    toJSON(message: _138.QueryConnectionRequest): unknown;
                    fromPartial(object: {
                        connection_id?: string;
                    }): _138.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _138.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryConnectionResponse;
                    fromJSON(object: any): _138.QueryConnectionResponse;
                    toJSON(message: _138.QueryConnectionResponse): unknown;
                    fromPartial(object: {
                        connection?: {
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _136.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: any;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _138.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _138.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryConnectionsRequest;
                    fromJSON(object: any): _138.QueryConnectionsRequest;
                    toJSON(message: _138.QueryConnectionsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _138.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _138.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryConnectionsResponse;
                    fromJSON(object: any): _138.QueryConnectionsResponse;
                    toJSON(message: _138.QueryConnectionsResponse): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _136.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: any;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _138.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _138.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryClientConnectionsRequest;
                    fromJSON(object: any): _138.QueryClientConnectionsRequest;
                    toJSON(message: _138.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: {
                        client_id?: string;
                    }): _138.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _138.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryClientConnectionsResponse;
                    fromJSON(object: any): _138.QueryClientConnectionsResponse;
                    toJSON(message: _138.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: {
                        connection_paths?: string[];
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _138.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _138.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _138.QueryConnectionClientStateRequest;
                    toJSON(message: _138.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: {
                        connection_id?: string;
                    }): _138.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _138.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _138.QueryConnectionClientStateResponse;
                    toJSON(message: _138.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: {
                        identified_client_state?: {
                            client_id?: string;
                            client_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _138.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _138.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _138.QueryConnectionConsensusStateRequest;
                    toJSON(message: _138.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: {
                        connection_id?: string;
                        revision_number?: any;
                        revision_height?: any;
                    }): _138.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _138.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _138.QueryConnectionConsensusStateResponse;
                    toJSON(message: _138.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        client_id?: string;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _138.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _137.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.GenesisState;
                    fromJSON(object: any): _137.GenesisState;
                    toJSON(message: _137.GenesisState): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _136.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: any;
                        }[];
                        client_connection_paths?: {
                            client_id?: string;
                            paths?: string[];
                        }[];
                        next_connection_sequence?: any;
                        params?: {
                            max_expected_time_per_block?: any;
                        };
                    }): _137.GenesisState;
                };
                stateFromJSON(object: any): _136.State;
                stateToJSON(object: _136.State): string;
                State: typeof _136.State;
                ConnectionEnd: {
                    encode(message: _136.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ConnectionEnd;
                    fromJSON(object: any): _136.ConnectionEnd;
                    toJSON(message: _136.ConnectionEnd): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _136.State;
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        delay_period?: any;
                    }): _136.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _136.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.IdentifiedConnection;
                    fromJSON(object: any): _136.IdentifiedConnection;
                    toJSON(message: _136.IdentifiedConnection): unknown;
                    fromPartial(object: {
                        id?: string;
                        client_id?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _136.State;
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        delay_period?: any;
                    }): _136.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _136.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Counterparty;
                    fromJSON(object: any): _136.Counterparty;
                    toJSON(message: _136.Counterparty): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        connection_id?: string;
                        prefix?: {
                            key_prefix?: Uint8Array;
                        };
                    }): _136.Counterparty;
                };
                ClientPaths: {
                    encode(message: _136.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ClientPaths;
                    fromJSON(object: any): _136.ClientPaths;
                    toJSON(message: _136.ClientPaths): unknown;
                    fromPartial(object: {
                        paths?: string[];
                    }): _136.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _136.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ConnectionPaths;
                    fromJSON(object: any): _136.ConnectionPaths;
                    toJSON(message: _136.ConnectionPaths): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        paths?: string[];
                    }): _136.ConnectionPaths;
                };
                Version: {
                    encode(message: _136.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Version;
                    fromJSON(object: any): _136.Version;
                    toJSON(message: _136.Version): unknown;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _136.Version;
                };
                Params: {
                    encode(message: _136.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Params;
                    fromJSON(object: any): _136.Params;
                    toJSON(message: _136.Params): unknown;
                    fromPartial(object: {
                        max_expected_time_per_block?: any;
                    }): _136.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryClientImpl: typeof _268.QueryClientImpl;
                QueryAppVersionRequest: {
                    encode(message: _140.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryAppVersionRequest;
                    fromJSON(object: any): _140.QueryAppVersionRequest;
                    toJSON(message: _140.QueryAppVersionRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        connection_id?: string;
                        ordering?: _127.Order;
                        counterparty?: {
                            port_id?: string;
                            channel_id?: string;
                        };
                        proposed_version?: string;
                    }): _140.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _140.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryAppVersionResponse;
                    fromJSON(object: any): _140.QueryAppVersionResponse;
                    toJSON(message: _140.QueryAppVersionResponse): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        version?: string;
                    }): _140.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _141.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.GenesisState;
                    fromJSON(object: any): _141.GenesisState;
                    toJSON(message: _141.GenesisState): unknown;
                    fromPartial(object: {
                        client_genesis?: {
                            clients?: {
                                client_id?: string;
                                client_state?: {
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clients_consensus?: {
                                client_id?: string;
                                consensus_states?: {
                                    height?: {
                                        revision_number?: any;
                                        revision_height?: any;
                                    };
                                    consensus_state?: {
                                        type_url?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clients_metadata?: {
                                client_id?: string;
                                client_metadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowed_clients?: string[];
                            };
                            create_localhost?: boolean;
                            next_client_sequence?: any;
                        };
                        connection_genesis?: {
                            connections?: {
                                id?: string;
                                client_id?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _136.State;
                                counterparty?: {
                                    client_id?: string;
                                    connection_id?: string;
                                    prefix?: {
                                        key_prefix?: Uint8Array;
                                    };
                                };
                                delay_period?: any;
                            }[];
                            client_connection_paths?: {
                                client_id?: string;
                                paths?: string[];
                            }[];
                            next_connection_sequence?: any;
                            params?: {
                                max_expected_time_per_block?: any;
                            };
                        };
                        channel_genesis?: {
                            channels?: {
                                state?: _127.State;
                                ordering?: _127.Order;
                                counterparty?: {
                                    port_id?: string;
                                    channel_id?: string;
                                };
                                connection_hops?: string[];
                                version?: string;
                                port_id?: string;
                                channel_id?: string;
                            }[];
                            acknowledgements?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            send_sequences?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                            }[];
                            recv_sequences?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                            }[];
                            ack_sequences?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                            }[];
                            next_channel_sequence?: any;
                        };
                    }): _141.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _142.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ClientState;
                    fromJSON(object: any): _142.ClientState;
                    toJSON(message: _142.ClientState): unknown;
                    fromPartial(object: {
                        chain_id?: string;
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _142.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _143.DataType;
                dataTypeToJSON(object: _143.DataType): string;
                DataType: typeof _143.DataType;
                ClientState: {
                    encode(message: _143.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ClientState;
                    fromJSON(object: any): _143.ClientState;
                    toJSON(message: _143.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        frozen_sequence?: any;
                        consensus_state?: {
                            public_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allow_update_after_proposal?: boolean;
                    }): _143.ClientState;
                };
                ConsensusState: {
                    encode(message: _143.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ConsensusState;
                    fromJSON(object: any): _143.ConsensusState;
                    toJSON(message: _143.ConsensusState): unknown;
                    fromPartial(object: {
                        public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _143.ConsensusState;
                };
                Header: {
                    encode(message: _143.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Header;
                    fromJSON(object: any): _143.Header;
                    toJSON(message: _143.Header): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        new_public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        new_diversifier?: string;
                    }): _143.Header;
                };
                Misbehaviour: {
                    encode(message: _143.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Misbehaviour;
                    fromJSON(object: any): _143.Misbehaviour;
                    toJSON(message: _143.Misbehaviour): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        sequence?: any;
                        signature_one?: {
                            signature?: Uint8Array;
                            data_type?: _143.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signature_two?: {
                            signature?: Uint8Array;
                            data_type?: _143.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _143.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _143.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.SignatureAndData;
                    fromJSON(object: any): _143.SignatureAndData;
                    toJSON(message: _143.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        data_type?: _143.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _143.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _143.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.TimestampedSignatureData;
                    fromJSON(object: any): _143.TimestampedSignatureData;
                    toJSON(message: _143.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signature_data?: Uint8Array;
                        timestamp?: any;
                    }): _143.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _143.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.SignBytes;
                    fromJSON(object: any): _143.SignBytes;
                    toJSON(message: _143.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        data_type?: _143.DataType;
                        data?: Uint8Array;
                    }): _143.SignBytes;
                };
                HeaderData: {
                    encode(message: _143.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.HeaderData;
                    fromJSON(object: any): _143.HeaderData;
                    toJSON(message: _143.HeaderData): unknown;
                    fromPartial(object: {
                        new_pub_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        new_diversifier?: string;
                    }): _143.HeaderData;
                };
                ClientStateData: {
                    encode(message: _143.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ClientStateData;
                    fromJSON(object: any): _143.ClientStateData;
                    toJSON(message: _143.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _143.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _143.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ConsensusStateData;
                    fromJSON(object: any): _143.ConsensusStateData;
                    toJSON(message: _143.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _143.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _143.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ConnectionStateData;
                    fromJSON(object: any): _143.ConnectionStateData;
                    toJSON(message: _143.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _136.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: any;
                        };
                    }): _143.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _143.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ChannelStateData;
                    fromJSON(object: any): _143.ChannelStateData;
                    toJSON(message: _143.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _127.State;
                            ordering?: _127.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                    }): _143.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _143.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.PacketCommitmentData;
                    fromJSON(object: any): _143.PacketCommitmentData;
                    toJSON(message: _143.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _143.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _143.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.PacketAcknowledgementData;
                    fromJSON(object: any): _143.PacketAcknowledgementData;
                    toJSON(message: _143.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _143.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _143.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.PacketReceiptAbsenceData;
                    fromJSON(object: any): _143.PacketReceiptAbsenceData;
                    toJSON(message: _143.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _143.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _143.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.NextSequenceRecvData;
                    fromJSON(object: any): _143.NextSequenceRecvData;
                    toJSON(message: _143.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        next_seq_recv?: any;
                    }): _143.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _144.DataType;
                dataTypeToJSON(object: _144.DataType): string;
                DataType: typeof _144.DataType;
                ClientState: {
                    encode(message: _144.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ClientState;
                    fromJSON(object: any): _144.ClientState;
                    toJSON(message: _144.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        is_frozen?: boolean;
                        consensus_state?: {
                            public_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allow_update_after_proposal?: boolean;
                    }): _144.ClientState;
                };
                ConsensusState: {
                    encode(message: _144.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ConsensusState;
                    fromJSON(object: any): _144.ConsensusState;
                    toJSON(message: _144.ConsensusState): unknown;
                    fromPartial(object: {
                        public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _144.ConsensusState;
                };
                Header: {
                    encode(message: _144.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Header;
                    fromJSON(object: any): _144.Header;
                    toJSON(message: _144.Header): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        new_public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        new_diversifier?: string;
                    }): _144.Header;
                };
                Misbehaviour: {
                    encode(message: _144.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Misbehaviour;
                    fromJSON(object: any): _144.Misbehaviour;
                    toJSON(message: _144.Misbehaviour): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        sequence?: any;
                        signature_one?: {
                            signature?: Uint8Array;
                            data_type?: _144.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signature_two?: {
                            signature?: Uint8Array;
                            data_type?: _144.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _144.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _144.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.SignatureAndData;
                    fromJSON(object: any): _144.SignatureAndData;
                    toJSON(message: _144.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        data_type?: _144.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _144.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _144.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.TimestampedSignatureData;
                    fromJSON(object: any): _144.TimestampedSignatureData;
                    toJSON(message: _144.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signature_data?: Uint8Array;
                        timestamp?: any;
                    }): _144.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _144.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.SignBytes;
                    fromJSON(object: any): _144.SignBytes;
                    toJSON(message: _144.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        data_type?: _144.DataType;
                        data?: Uint8Array;
                    }): _144.SignBytes;
                };
                HeaderData: {
                    encode(message: _144.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.HeaderData;
                    fromJSON(object: any): _144.HeaderData;
                    toJSON(message: _144.HeaderData): unknown;
                    fromPartial(object: {
                        new_pub_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        new_diversifier?: string;
                    }): _144.HeaderData;
                };
                ClientStateData: {
                    encode(message: _144.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ClientStateData;
                    fromJSON(object: any): _144.ClientStateData;
                    toJSON(message: _144.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _144.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _144.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ConsensusStateData;
                    fromJSON(object: any): _144.ConsensusStateData;
                    toJSON(message: _144.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _144.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _144.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ConnectionStateData;
                    fromJSON(object: any): _144.ConnectionStateData;
                    toJSON(message: _144.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _136.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: any;
                        };
                    }): _144.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _144.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ChannelStateData;
                    fromJSON(object: any): _144.ChannelStateData;
                    toJSON(message: _144.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _127.State;
                            ordering?: _127.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                    }): _144.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _144.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.PacketCommitmentData;
                    fromJSON(object: any): _144.PacketCommitmentData;
                    toJSON(message: _144.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _144.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _144.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.PacketAcknowledgementData;
                    fromJSON(object: any): _144.PacketAcknowledgementData;
                    toJSON(message: _144.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _144.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _144.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.PacketReceiptAbsenceData;
                    fromJSON(object: any): _144.PacketReceiptAbsenceData;
                    toJSON(message: _144.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _144.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _144.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.NextSequenceRecvData;
                    fromJSON(object: any): _144.NextSequenceRecvData;
                    toJSON(message: _144.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        next_seq_recv?: any;
                    }): _144.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _145.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ClientState;
                    fromJSON(object: any): _145.ClientState;
                    toJSON(message: _145.ClientState): unknown;
                    fromPartial(object: {
                        chain_id?: string;
                        trust_level?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        trusting_period?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        unbonding_period?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        max_clock_drift?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        frozen_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        latest_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        proof_specs?: {
                            leaf_spec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehash_key?: import("../confio/proofs").HashOp;
                                prehash_value?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            inner_spec?: {
                                child_order?: number[];
                                child_size?: number;
                                min_prefix_length?: number;
                                max_prefix_length?: number;
                                empty_child?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            max_depth?: number;
                            min_depth?: number;
                        }[];
                        upgrade_path?: string[];
                        allow_update_after_expiry?: boolean;
                        allow_update_after_misbehaviour?: boolean;
                    }): _145.ClientState;
                };
                ConsensusState: {
                    encode(message: _145.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ConsensusState;
                    fromJSON(object: any): _145.ConsensusState;
                    toJSON(message: _145.ConsensusState): unknown;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        next_validators_hash?: Uint8Array;
                    }): _145.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _145.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Misbehaviour;
                    fromJSON(object: any): _145.Misbehaviour;
                    toJSON(message: _145.Misbehaviour): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        header_1?: {
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
                                        block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
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
                            trusted_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            trusted_validators?: {
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
                        header_2?: {
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
                                        block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
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
                            trusted_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            trusted_validators?: {
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
                    }): _145.Misbehaviour;
                };
                Header: {
                    encode(message: _145.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Header;
                    fromJSON(object: any): _145.Header;
                    toJSON(message: _145.Header): unknown;
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
                                    block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
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
                        trusted_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        trusted_validators?: {
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
                    }): _145.Header;
                };
                Fraction: {
                    encode(message: _145.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Fraction;
                    fromJSON(object: any): _145.Fraction;
                    toJSON(message: _145.Fraction): unknown;
                    fromPartial(object: {
                        numerator?: any;
                        denominator?: any;
                    }): _145.Fraction;
                };
            };
        }
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _269.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _270.MsgClientImpl;
                    };
                    client: {
                        v1: _271.MsgClientImpl;
                    };
                    connection: {
                        v1: _272.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _264.QueryClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _265.QueryClientImpl;
                    };
                    client: {
                        v1: _266.QueryClientImpl;
                    };
                    connection: {
                        v1: _267.QueryClientImpl;
                    };
                    port: {
                        v1: _268.QueryClientImpl;
                    };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _260.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _261.LCDQueryClient;
                    };
                    client: {
                        v1: _262.LCDQueryClient;
                    };
                    connection: {
                        v1: _263.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
