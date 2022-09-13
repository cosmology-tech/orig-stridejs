import * as _146 from "../icacallbacks/callback_data";
import * as _147 from "../icacallbacks/genesis";
import * as _148 from "../icacallbacks/packet";
import * as _149 from "../icacallbacks/params";
import * as _150 from "../icacallbacks/query";
import * as _151 from "../icacallbacks/tx";
import * as _273 from "../icacallbacks/query.lcd";
import * as _274 from "../icacallbacks/query.rpc.query";
import * as _289 from "./lcd";
import * as _290 from "./rpc.query";
import * as _291 from "./rpc.tx";
export namespace stridelabs {
  export namespace stride {
    export const icacallbacks = { ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._273,
      ..._274
    };
  }
  export const ClientFactory = { ..._289,
    ..._290,
    ..._291
  };
}