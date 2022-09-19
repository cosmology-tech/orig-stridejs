import * as _146 from "../icacallbacks/callback_data";
import * as _147 from "../icacallbacks/genesis";
import * as _148 from "../icacallbacks/packet";
import * as _149 from "../icacallbacks/params";
import * as _150 from "../icacallbacks/query";
import * as _151 from "../icacallbacks/tx";
import * as _275 from "../icacallbacks/query.lcd";
import * as _276 from "../icacallbacks/query.rpc.query";
import * as _291 from "./lcd";
import * as _292 from "./rpc.query";
import * as _293 from "./rpc.tx";
export namespace stridelabs {
  export namespace stride {
    export const icacallbacks = { ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._275,
      ..._276
    };
  }
  export const ClientFactory = { ..._291,
    ..._292,
    ..._293
  };
}