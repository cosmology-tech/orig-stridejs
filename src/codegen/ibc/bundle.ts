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
import * as _252 from "./applications/transfer/v1/tx.amino";
import * as _253 from "./core/channel/v1/tx.amino";
import * as _254 from "./core/client/v1/tx.amino";
import * as _255 from "./core/connection/v1/tx.amino";
import * as _256 from "./applications/transfer/v1/tx.registry";
import * as _257 from "./core/channel/v1/tx.registry";
import * as _258 from "./core/client/v1/tx.registry";
import * as _259 from "./core/connection/v1/tx.registry";
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
import * as _286 from "./lcd";
import * as _287 from "./rpc.query";
import * as _288 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._122,
        ..._123,
        ..._124,
        ..._125,
        ..._252,
        ..._256,
        ..._260,
        ..._264,
        ..._269
      };
      export const v2 = { ..._126
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._127,
        ..._128,
        ..._129,
        ..._130,
        ..._253,
        ..._257,
        ..._261,
        ..._265,
        ..._270
      };
    }
    export namespace client {
      export const v1 = { ..._131,
        ..._132,
        ..._133,
        ..._134,
        ..._254,
        ..._258,
        ..._262,
        ..._266,
        ..._271
      };
    }
    export namespace commitment {
      export const v1 = { ..._135
      };
    }
    export namespace connection {
      export const v1 = { ..._136,
        ..._137,
        ..._138,
        ..._139,
        ..._255,
        ..._259,
        ..._263,
        ..._267,
        ..._272
      };
    }
    export namespace port {
      export const v1 = { ..._140,
        ..._268
      };
    }
    export namespace types {
      export const v1 = { ..._141
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._142
      };
    }
    export namespace solomachine {
      export const v1 = { ..._143
      };
      export const v2 = { ..._144
      };
    }
    export namespace tendermint {
      export const v1 = { ..._145
      };
    }
  }
  export const ClientFactory = { ..._286,
    ..._287,
    ..._288
  };
}