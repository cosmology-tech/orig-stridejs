import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as interchainqueryV1MessagesRegistry from "../interchainquery/v1/messages.registry";
import * as interchainqueryV1MessagesAmino from "../interchainquery/v1/messages.amino";
export const getSigningStrideClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...interchainqueryV1MessagesRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...interchainqueryV1MessagesAmino.AminoConverter
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningStrideClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningStrideClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};