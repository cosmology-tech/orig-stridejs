import * as _152 from "../interchainquery/v1/genesis";
import * as _153 from "../interchainquery/v1/messages";
import * as _154 from "../mint/v1beta1/genesis";
import * as _155 from "../mint/v1beta1/mint";
import * as _156 from "../mint/v1beta1/query";
import * as _275 from "../interchainquery/v1/messages.amino";
import * as _276 from "../interchainquery/v1/messages.registry";
import * as _277 from "../mint/v1beta1/query.lcd";
import * as _278 from "../mint/v1beta1/query.rpc.query";
import * as _279 from "../interchainquery/v1/messages.rpc.msg";
import * as _292 from "./lcd";
import * as _293 from "./rpc.query";
import * as _294 from "./rpc.tx";
export namespace stride {
  export const interchainquery = { ..._152,
    ..._153,
    ..._275,
    ..._276,
    ..._279
  };
  export namespace mint {
    export const v1beta1 = { ..._154,
      ..._155,
      ..._156,
      ..._277,
      ..._278
    };
  }
  export const ClientFactory = { ..._292,
    ..._293,
    ..._294
  };
}