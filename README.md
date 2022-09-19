# stridejs

<img src="https://user-images.githubusercontent.com/545047/190012774-f9886f76-246a-4f45-b21a-f2798f74f9f8.png" width="400">

## usage

```sh
npm install stridejs
```

### Composing Messages

Import the `stride` object from `stridejs`. 

```js
import { stride } from 'stridejs';

const {
    submitQueryResponse
} = stride.interchainquery.MessageComposer.withTypeUrl;
```

### Initializing the Stargate Client

Use `getSigningStridelabsClient` to get your `SigningStargateClient`, with the Stride proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import { getSigningStridelabsClient } from 'stridejs';

const client = await getSigningStridelabsClient({
  rpcEndpoint,
  signer // OfflineSigner
});
```

## Creating Signers

To broadcast messages, you'll want to use either [keplr](https://docs.keplr.app/api/cosmjs.html) or an `OfflineSigner` from `cosmjs` using mnemonics.
### Amino Signer

Likely you'll want to use the Amino, so unless you need proto, you should use this one:

```js
import { getOfflineSignerAmino as getOfflineSigner } from 'cosmjs-utils';
```
### Proto Signer

```js
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from 'chain-registry';

const mnemonic =
  'unfold client turtle either pilot stock floor glow toward bullet car science';
  const chain = chains.find(({ chain_name }) => chain_name === 'stride');
  const signer = await getOfflineSigner({
    mnemonic,
    chain
  });
```
### Broadcasting messages

Now that you have your `client`, you can broadcast messages:

```js
import { signAndBroadcast } from 'cosmjs-utils';

const res = await signAndBroadcast({
  client, // SigningStargateClient
  chainId: 'stride-1',
  address,
  msgs: [msg],
  fee,
  memo: ''
});
```

## Credits

Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.

## Disclaimer

AS DESCRIBED IN THE STRIDEJS LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating stridejs will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the OsmoJS code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
