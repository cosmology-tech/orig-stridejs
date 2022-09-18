import * as _113 from "./api/http";
import * as _114 from "./protobuf/any";
import * as _115 from "./protobuf/descriptor";
import * as _116 from "./protobuf/duration";
import * as _117 from "./protobuf/empty";
import * as _118 from "./protobuf/timestamp";
import * as _119 from "./protobuf/struct";
import * as _120 from "./protobuf/wrappers";
import * as _121 from "./protobuf/field_mask";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _113.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Http;
            fromJSON(object: any): _113.Http;
            toJSON(message: _113.Http): unknown;
            fromPartial(object: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    response_body?: string;
                    additional_bindings?: any[];
                }[];
                fully_decode_reserved_expansion?: boolean;
            }): _113.Http;
        };
        HttpRule: {
            encode(message: _113.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.HttpRule;
            fromJSON(object: any): _113.HttpRule;
            toJSON(message: _113.HttpRule): unknown;
            fromPartial(object: {
                selector?: string;
                get?: string;
                put?: string;
                post?: string;
                delete?: string;
                patch?: string;
                custom?: {
                    kind?: string;
                    path?: string;
                };
                body?: string;
                response_body?: string;
                additional_bindings?: any[];
            }): _113.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _113.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.CustomHttpPattern;
            fromJSON(object: any): _113.CustomHttpPattern;
            toJSON(message: _113.CustomHttpPattern): unknown;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _113.CustomHttpPattern;
        };
    };
    const protobuf: {
        FieldMask: {
            encode(message: _121.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.FieldMask;
            fromJSON(object: any): _121.FieldMask;
            toJSON(message: _121.FieldMask): unknown;
            fromPartial(object: {
                paths?: string[];
            }): _121.FieldMask;
        };
        DoubleValue: {
            encode(message: _120.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.DoubleValue;
            fromJSON(object: any): _120.DoubleValue;
            toJSON(message: _120.DoubleValue): unknown;
            fromPartial(object: {
                value?: number;
            }): _120.DoubleValue;
        };
        FloatValue: {
            encode(message: _120.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.FloatValue;
            fromJSON(object: any): _120.FloatValue;
            toJSON(message: _120.FloatValue): unknown;
            fromPartial(object: {
                value?: number;
            }): _120.FloatValue;
        };
        Int64Value: {
            encode(message: _120.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Int64Value;
            fromJSON(object: any): _120.Int64Value;
            toJSON(message: _120.Int64Value): unknown;
            fromPartial(object: {
                value?: any;
            }): _120.Int64Value;
        };
        UInt64Value: {
            encode(message: _120.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.UInt64Value;
            fromJSON(object: any): _120.UInt64Value;
            toJSON(message: _120.UInt64Value): unknown;
            fromPartial(object: {
                value?: any;
            }): _120.UInt64Value;
        };
        Int32Value: {
            encode(message: _120.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Int32Value;
            fromJSON(object: any): _120.Int32Value;
            toJSON(message: _120.Int32Value): unknown;
            fromPartial(object: {
                value?: number;
            }): _120.Int32Value;
        };
        UInt32Value: {
            encode(message: _120.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.UInt32Value;
            fromJSON(object: any): _120.UInt32Value;
            toJSON(message: _120.UInt32Value): unknown;
            fromPartial(object: {
                value?: number;
            }): _120.UInt32Value;
        };
        BoolValue: {
            encode(message: _120.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.BoolValue;
            fromJSON(object: any): _120.BoolValue;
            toJSON(message: _120.BoolValue): unknown;
            fromPartial(object: {
                value?: boolean;
            }): _120.BoolValue;
        };
        StringValue: {
            encode(message: _120.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.StringValue;
            fromJSON(object: any): _120.StringValue;
            toJSON(message: _120.StringValue): unknown;
            fromPartial(object: {
                value?: string;
            }): _120.StringValue;
        };
        BytesValue: {
            encode(message: _120.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.BytesValue;
            fromJSON(object: any): _120.BytesValue;
            toJSON(message: _120.BytesValue): unknown;
            fromPartial(object: {
                value?: Uint8Array;
            }): _120.BytesValue;
        };
        nullValueFromJSON(object: any): _119.NullValue;
        nullValueToJSON(object: _119.NullValue): string;
        NullValue: typeof _119.NullValue;
        Struct_FieldsEntry: {
            encode(message: _119.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Struct_FieldsEntry;
            fromJSON(object: any): _119.Struct_FieldsEntry;
            toJSON(message: _119.Struct_FieldsEntry): unknown;
            fromPartial(object: {
                key?: string;
                value?: {
                    null_value?: _119.NullValue;
                    number_value?: number;
                    string_value?: string;
                    bool_value?: boolean;
                    struct_value?: {
                        fields?: {
                            [x: string]: any;
                        };
                    };
                    list_value?: {
                        values?: any[];
                    };
                };
            }): _119.Struct_FieldsEntry;
        };
        Struct: {
            encode(message: _119.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Struct;
            fromJSON(object: any): _119.Struct;
            toJSON(message: _119.Struct): unknown;
            fromPartial(object: {
                fields?: {
                    [x: string]: any;
                };
            }): _119.Struct;
        };
        Value: {
            encode(message: _119.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Value;
            fromJSON(object: any): _119.Value;
            toJSON(message: _119.Value): unknown;
            fromPartial(object: {
                null_value?: _119.NullValue;
                number_value?: number;
                string_value?: string;
                bool_value?: boolean;
                struct_value?: {
                    fields?: {
                        [x: string]: any;
                    };
                };
                list_value?: {
                    values?: any[];
                };
            }): _119.Value;
        };
        ListValue: {
            encode(message: _119.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ListValue;
            fromJSON(object: any): _119.ListValue;
            toJSON(message: _119.ListValue): unknown;
            fromPartial(object: {
                values?: any[];
            }): _119.ListValue;
        };
        Timestamp: {
            encode(message: _118.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Timestamp;
            fromJSON(object: any): _118.Timestamp;
            toJSON(message: _118.Timestamp): unknown;
            fromPartial(object: {
                seconds?: any;
                nanos?: number;
            }): _118.Timestamp;
        };
        Empty: {
            encode(_: _117.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Empty;
            fromJSON(_: any): _117.Empty;
            toJSON(_: _117.Empty): unknown;
            fromPartial(_: {}): _117.Empty;
        };
        Duration: {
            encode(message: _116.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Duration;
            fromJSON(object: any): _116.Duration;
            toJSON(message: _116.Duration): unknown;
            fromPartial(object: {
                seconds?: any;
                nanos?: number;
            }): _116.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _115.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _115.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _115.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _115.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _115.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _115.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _115.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _115.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _115.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _115.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _115.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _115.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _115.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _115.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _115.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _115.FieldOptions_CType;
        FieldOptions_JSType: typeof _115.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _115.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _115.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.FileDescriptorSet;
            fromJSON(object: any): _115.FileDescriptorSet;
            toJSON(message: _115.FileDescriptorSet): unknown;
            fromPartial(object: {
                file?: {
                    name?: string;
                    package?: string;
                    dependency?: string[];
                    public_dependency?: number[];
                    weak_dependency?: number[];
                    message_type?: {
                        name?: string;
                        field?: {
                            name?: string;
                            number?: number;
                            label?: _115.FieldDescriptorProto_Label;
                            type?: _115.FieldDescriptorProto_Type;
                            type_name?: string;
                            extendee?: string;
                            default_value?: string;
                            oneof_index?: number;
                            json_name?: string;
                            options?: {
                                ctype?: _115.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _115.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: any;
                                    negative_int_value?: any;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        extension?: {
                            name?: string;
                            number?: number;
                            label?: _115.FieldDescriptorProto_Label;
                            type?: _115.FieldDescriptorProto_Type;
                            type_name?: string;
                            extendee?: string;
                            default_value?: string;
                            oneof_index?: number;
                            json_name?: string;
                            options?: {
                                ctype?: _115.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _115.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: any;
                                    negative_int_value?: any;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        nested_type?: any[];
                        enum_type?: {
                            name?: string;
                            value?: {
                                name?: string;
                                number?: number;
                                options?: {
                                    deprecated?: boolean;
                                    uninterpreted_option?: {
                                        name?: {
                                            name_part?: string;
                                            is_extension?: boolean;
                                        }[];
                                        identifier_value?: string;
                                        positive_int_value?: any;
                                        negative_int_value?: any;
                                        double_value?: number;
                                        string_value?: Uint8Array;
                                        aggregate_value?: string;
                                    }[];
                                };
                            }[];
                            options?: {
                                allow_alias?: boolean;
                                deprecated?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: any;
                                    negative_int_value?: any;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                            reserved_range?: {
                                start?: number;
                                end?: number;
                            }[];
                            reserved_name?: string[];
                        }[];
                        extension_range?: {
                            start?: number;
                            end?: number;
                            options?: {
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: any;
                                    negative_int_value?: any;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        oneof_decl?: {
                            name?: string;
                            options?: {
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: any;
                                    negative_int_value?: any;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            message_set_wire_format?: boolean;
                            no_standard_descriptor_accessor?: boolean;
                            deprecated?: boolean;
                            map_entry?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                        reserved_range?: {
                            start?: number;
                            end?: number;
                        }[];
                        reserved_name?: string[];
                    }[];
                    enum_type?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: any;
                                    negative_int_value?: any;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allow_alias?: boolean;
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                        reserved_range?: {
                            start?: number;
                            end?: number;
                        }[];
                        reserved_name?: string[];
                    }[];
                    service?: {
                        name?: string;
                        method?: {
                            name?: string;
                            input_type?: string;
                            output_type?: string;
                            options?: {
                                deprecated?: boolean;
                                idempotency_level?: _115.MethodOptions_IdempotencyLevel;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: any;
                                    negative_int_value?: any;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                            client_streaming?: boolean;
                            server_streaming?: boolean;
                        }[];
                        options?: {
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _115.FieldDescriptorProto_Label;
                        type?: _115.FieldDescriptorProto_Type;
                        type_name?: string;
                        extendee?: string;
                        default_value?: string;
                        oneof_index?: number;
                        json_name?: string;
                        options?: {
                            ctype?: _115.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _115.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        java_package?: string;
                        java_outer_classname?: string;
                        java_multiple_files?: boolean;
                        java_generate_equals_and_hash?: boolean;
                        java_string_check_utf8?: boolean;
                        optimize_for?: _115.FileOptions_OptimizeMode;
                        go_package?: string;
                        cc_generic_services?: boolean;
                        java_generic_services?: boolean;
                        py_generic_services?: boolean;
                        php_generic_services?: boolean;
                        deprecated?: boolean;
                        cc_enable_arenas?: boolean;
                        objc_class_prefix?: string;
                        csharp_namespace?: string;
                        swift_prefix?: string;
                        php_class_prefix?: string;
                        php_namespace?: string;
                        php_metadata_namespace?: string;
                        ruby_package?: string;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    source_code_info?: {
                        location?: {
                            path?: number[];
                            span?: number[];
                            leading_comments?: string;
                            trailing_comments?: string;
                            leading_detached_comments?: string[];
                        }[];
                    };
                    syntax?: string;
                }[];
            }): _115.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _115.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.FileDescriptorProto;
            fromJSON(object: any): _115.FileDescriptorProto;
            toJSON(message: _115.FileDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                package?: string;
                dependency?: string[];
                public_dependency?: number[];
                weak_dependency?: number[];
                message_type?: {
                    name?: string;
                    field?: {
                        name?: string;
                        number?: number;
                        label?: _115.FieldDescriptorProto_Label;
                        type?: _115.FieldDescriptorProto_Type;
                        type_name?: string;
                        extendee?: string;
                        default_value?: string;
                        oneof_index?: number;
                        json_name?: string;
                        options?: {
                            ctype?: _115.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _115.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _115.FieldDescriptorProto_Label;
                        type?: _115.FieldDescriptorProto_Type;
                        type_name?: string;
                        extendee?: string;
                        default_value?: string;
                        oneof_index?: number;
                        json_name?: string;
                        options?: {
                            ctype?: _115.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _115.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    nested_type?: any[];
                    enum_type?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: any;
                                    negative_int_value?: any;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allow_alias?: boolean;
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                        reserved_range?: {
                            start?: number;
                            end?: number;
                        }[];
                        reserved_name?: string[];
                    }[];
                    extension_range?: {
                        start?: number;
                        end?: number;
                        options?: {
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    oneof_decl?: {
                        name?: string;
                        options?: {
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        message_set_wire_format?: boolean;
                        no_standard_descriptor_accessor?: boolean;
                        deprecated?: boolean;
                        map_entry?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    reserved_range?: {
                        start?: number;
                        end?: number;
                    }[];
                    reserved_name?: string[];
                }[];
                enum_type?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allow_alias?: boolean;
                        deprecated?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    reserved_range?: {
                        start?: number;
                        end?: number;
                    }[];
                    reserved_name?: string[];
                }[];
                service?: {
                    name?: string;
                    method?: {
                        name?: string;
                        input_type?: string;
                        output_type?: string;
                        options?: {
                            deprecated?: boolean;
                            idempotency_level?: _115.MethodOptions_IdempotencyLevel;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                        client_streaming?: boolean;
                        server_streaming?: boolean;
                    }[];
                    options?: {
                        deprecated?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _115.FieldDescriptorProto_Label;
                    type?: _115.FieldDescriptorProto_Type;
                    type_name?: string;
                    extendee?: string;
                    default_value?: string;
                    oneof_index?: number;
                    json_name?: string;
                    options?: {
                        ctype?: _115.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _115.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                options?: {
                    java_package?: string;
                    java_outer_classname?: string;
                    java_multiple_files?: boolean;
                    java_generate_equals_and_hash?: boolean;
                    java_string_check_utf8?: boolean;
                    optimize_for?: _115.FileOptions_OptimizeMode;
                    go_package?: string;
                    cc_generic_services?: boolean;
                    java_generic_services?: boolean;
                    py_generic_services?: boolean;
                    php_generic_services?: boolean;
                    deprecated?: boolean;
                    cc_enable_arenas?: boolean;
                    objc_class_prefix?: string;
                    csharp_namespace?: string;
                    swift_prefix?: string;
                    php_class_prefix?: string;
                    php_namespace?: string;
                    php_metadata_namespace?: string;
                    ruby_package?: string;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
                source_code_info?: {
                    location?: {
                        path?: number[];
                        span?: number[];
                        leading_comments?: string;
                        trailing_comments?: string;
                        leading_detached_comments?: string[];
                    }[];
                };
                syntax?: string;
            }): _115.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _115.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.DescriptorProto;
            fromJSON(object: any): _115.DescriptorProto;
            toJSON(message: _115.DescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _115.FieldDescriptorProto_Label;
                    type?: _115.FieldDescriptorProto_Type;
                    type_name?: string;
                    extendee?: string;
                    default_value?: string;
                    oneof_index?: number;
                    json_name?: string;
                    options?: {
                        ctype?: _115.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _115.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _115.FieldDescriptorProto_Label;
                    type?: _115.FieldDescriptorProto_Type;
                    type_name?: string;
                    extendee?: string;
                    default_value?: string;
                    oneof_index?: number;
                    json_name?: string;
                    options?: {
                        ctype?: _115.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _115.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                nested_type?: any[];
                enum_type?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allow_alias?: boolean;
                        deprecated?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    reserved_range?: {
                        start?: number;
                        end?: number;
                    }[];
                    reserved_name?: string[];
                }[];
                extension_range?: {
                    start?: number;
                    end?: number;
                    options?: {
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                oneof_decl?: {
                    name?: string;
                    options?: {
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                options?: {
                    message_set_wire_format?: boolean;
                    no_standard_descriptor_accessor?: boolean;
                    deprecated?: boolean;
                    map_entry?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
                reserved_range?: {
                    start?: number;
                    end?: number;
                }[];
                reserved_name?: string[];
            }): _115.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _115.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _115.DescriptorProto_ExtensionRange;
            toJSON(message: _115.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
                options?: {
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _115.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _115.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.DescriptorProto_ReservedRange;
            fromJSON(object: any): _115.DescriptorProto_ReservedRange;
            toJSON(message: _115.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _115.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _115.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ExtensionRangeOptions;
            fromJSON(object: any): _115.ExtensionRangeOptions;
            toJSON(message: _115.ExtensionRangeOptions): unknown;
            fromPartial(object: {
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _115.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _115.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.FieldDescriptorProto;
            fromJSON(object: any): _115.FieldDescriptorProto;
            toJSON(message: _115.FieldDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _115.FieldDescriptorProto_Label;
                type?: _115.FieldDescriptorProto_Type;
                type_name?: string;
                extendee?: string;
                default_value?: string;
                oneof_index?: number;
                json_name?: string;
                options?: {
                    ctype?: _115.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _115.FieldOptions_JSType;
                    lazy?: boolean;
                    deprecated?: boolean;
                    weak?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _115.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _115.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.OneofDescriptorProto;
            fromJSON(object: any): _115.OneofDescriptorProto;
            toJSON(message: _115.OneofDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                options?: {
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _115.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _115.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.EnumDescriptorProto;
            fromJSON(object: any): _115.EnumDescriptorProto;
            toJSON(message: _115.EnumDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                value?: {
                    name?: string;
                    number?: number;
                    options?: {
                        deprecated?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                options?: {
                    allow_alias?: boolean;
                    deprecated?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
                reserved_range?: {
                    start?: number;
                    end?: number;
                }[];
                reserved_name?: string[];
            }): _115.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _115.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _115.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _115.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _115.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _115.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.EnumValueDescriptorProto;
            fromJSON(object: any): _115.EnumValueDescriptorProto;
            toJSON(message: _115.EnumValueDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                options?: {
                    deprecated?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _115.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _115.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ServiceDescriptorProto;
            fromJSON(object: any): _115.ServiceDescriptorProto;
            toJSON(message: _115.ServiceDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    input_type?: string;
                    output_type?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotency_level?: _115.MethodOptions_IdempotencyLevel;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    client_streaming?: boolean;
                    server_streaming?: boolean;
                }[];
                options?: {
                    deprecated?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _115.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _115.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MethodDescriptorProto;
            fromJSON(object: any): _115.MethodDescriptorProto;
            toJSON(message: _115.MethodDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                input_type?: string;
                output_type?: string;
                options?: {
                    deprecated?: boolean;
                    idempotency_level?: _115.MethodOptions_IdempotencyLevel;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
                client_streaming?: boolean;
                server_streaming?: boolean;
            }): _115.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _115.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.FileOptions;
            fromJSON(object: any): _115.FileOptions;
            toJSON(message: _115.FileOptions): unknown;
            fromPartial(object: {
                java_package?: string;
                java_outer_classname?: string;
                java_multiple_files?: boolean;
                java_generate_equals_and_hash?: boolean;
                java_string_check_utf8?: boolean;
                optimize_for?: _115.FileOptions_OptimizeMode;
                go_package?: string;
                cc_generic_services?: boolean;
                java_generic_services?: boolean;
                py_generic_services?: boolean;
                php_generic_services?: boolean;
                deprecated?: boolean;
                cc_enable_arenas?: boolean;
                objc_class_prefix?: string;
                csharp_namespace?: string;
                swift_prefix?: string;
                php_class_prefix?: string;
                php_namespace?: string;
                php_metadata_namespace?: string;
                ruby_package?: string;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _115.FileOptions;
        };
        MessageOptions: {
            encode(message: _115.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MessageOptions;
            fromJSON(object: any): _115.MessageOptions;
            toJSON(message: _115.MessageOptions): unknown;
            fromPartial(object: {
                message_set_wire_format?: boolean;
                no_standard_descriptor_accessor?: boolean;
                deprecated?: boolean;
                map_entry?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _115.MessageOptions;
        };
        FieldOptions: {
            encode(message: _115.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.FieldOptions;
            fromJSON(object: any): _115.FieldOptions;
            toJSON(message: _115.FieldOptions): unknown;
            fromPartial(object: {
                ctype?: _115.FieldOptions_CType;
                packed?: boolean;
                jstype?: _115.FieldOptions_JSType;
                lazy?: boolean;
                deprecated?: boolean;
                weak?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _115.FieldOptions;
        };
        OneofOptions: {
            encode(message: _115.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.OneofOptions;
            fromJSON(object: any): _115.OneofOptions;
            toJSON(message: _115.OneofOptions): unknown;
            fromPartial(object: {
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _115.OneofOptions;
        };
        EnumOptions: {
            encode(message: _115.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.EnumOptions;
            fromJSON(object: any): _115.EnumOptions;
            toJSON(message: _115.EnumOptions): unknown;
            fromPartial(object: {
                allow_alias?: boolean;
                deprecated?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _115.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _115.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.EnumValueOptions;
            fromJSON(object: any): _115.EnumValueOptions;
            toJSON(message: _115.EnumValueOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _115.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _115.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ServiceOptions;
            fromJSON(object: any): _115.ServiceOptions;
            toJSON(message: _115.ServiceOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _115.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _115.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MethodOptions;
            fromJSON(object: any): _115.MethodOptions;
            toJSON(message: _115.MethodOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                idempotency_level?: _115.MethodOptions_IdempotencyLevel;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _115.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _115.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.UninterpretedOption;
            fromJSON(object: any): _115.UninterpretedOption;
            toJSON(message: _115.UninterpretedOption): unknown;
            fromPartial(object: {
                name?: {
                    name_part?: string;
                    is_extension?: boolean;
                }[];
                identifier_value?: string;
                positive_int_value?: any;
                negative_int_value?: any;
                double_value?: number;
                string_value?: Uint8Array;
                aggregate_value?: string;
            }): _115.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _115.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.UninterpretedOption_NamePart;
            fromJSON(object: any): _115.UninterpretedOption_NamePart;
            toJSON(message: _115.UninterpretedOption_NamePart): unknown;
            fromPartial(object: {
                name_part?: string;
                is_extension?: boolean;
            }): _115.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _115.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.SourceCodeInfo;
            fromJSON(object: any): _115.SourceCodeInfo;
            toJSON(message: _115.SourceCodeInfo): unknown;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leading_comments?: string;
                    trailing_comments?: string;
                    leading_detached_comments?: string[];
                }[];
            }): _115.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _115.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.SourceCodeInfo_Location;
            fromJSON(object: any): _115.SourceCodeInfo_Location;
            toJSON(message: _115.SourceCodeInfo_Location): unknown;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leading_comments?: string;
                trailing_comments?: string;
                leading_detached_comments?: string[];
            }): _115.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _115.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.GeneratedCodeInfo;
            fromJSON(object: any): _115.GeneratedCodeInfo;
            toJSON(message: _115.GeneratedCodeInfo): unknown;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    source_file?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _115.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _115.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _115.GeneratedCodeInfo_Annotation;
            toJSON(message: _115.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: {
                path?: number[];
                source_file?: string;
                begin?: number;
                end?: number;
            }): _115.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _114.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Any;
            fromJSON(object: any): _114.Any;
            toJSON(message: _114.Any): unknown;
            fromPartial(object: {
                type_url?: string;
                value?: Uint8Array;
            }): _114.Any;
        };
    };
}
