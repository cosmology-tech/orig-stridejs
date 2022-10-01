import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as stakeibcTxRegistry from "../stakeibc/tx.registry";
import * as stakeibcTxAmino from "../stakeibc/tx.amino";
export const stridelabsAminoConverters = { ...stakeibcTxAmino.AminoConverter
};
export const stridelabsProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...stakeibcTxRegistry.registry];
export const getSigningStridelabsClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...stridelabsProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...stridelabsAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningStridelabsClient = async ({
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
  } = getSigningStridelabsClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};