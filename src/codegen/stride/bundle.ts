import * as _152 from "../interchainquery/v1/genesis";
import * as _153 from "../interchainquery/v1/messages";
import * as _154 from "../mint/v1beta1/genesis";
import * as _155 from "../mint/v1beta1/mint";
import * as _156 from "../mint/v1beta1/query";
import * as _277 from "../interchainquery/v1/messages.amino";
import * as _278 from "../interchainquery/v1/messages.registry";
import * as _279 from "../mint/v1beta1/query.lcd";
import * as _280 from "../mint/v1beta1/query.rpc.query";
import * as _281 from "../interchainquery/v1/messages.rpc.msg";
import * as _294 from "./lcd";
import * as _295 from "./rpc.query";
import * as _296 from "./rpc.tx";
export namespace stride {
  export const interchainquery = { ..._152,
    ..._153,
    ..._277,
    ..._278,
    ..._281
  };
  export namespace mint {
    export const v1beta1 = { ..._154,
      ..._155,
      ..._156,
      ..._279,
      ..._280
    };
  }
  export const ClientFactory = { ..._294,
    ..._295,
    ..._296
  };
}