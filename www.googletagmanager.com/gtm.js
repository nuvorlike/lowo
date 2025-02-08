// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "2",

      macros: [
        { function: "__e" },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
      ],
      tags: [
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "G-G1ME2HFSXK",
          tag_id: 3,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.init" }],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__e",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getEventData"]],
            ["$0", "event"],
          ],
        ],
      ],
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "l",
          [46, "u", "v"],
          [
            66,
            "w",
            [2, [15, "b"], "keys", [7, [15, "v"]]],
            [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]],
          ],
        ],
        [
          50,
          "m",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "n",
          [46, "u"],
          [52, "v", ["m"]],
          [
            65,
            "w",
            [15, "v"],
            [
              46,
              [
                53,
                [52, "x", [16, [15, "u"], [15, "w"]]],
                [22, [15, "x"], [46, [36, [15, "x"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "internal.gtagConfig"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "internal.loadGoogleTag"]],
        [52, "h", ["require", "logToConsole"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "makeString"]],
        [52, "k", ["require", "makeTableMap"]],
        [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["f", [15, "o"]], "string"],
            [24, [2, [15, "o"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "h",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "o"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "q",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "p"], [15, "q"]],
        [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "s",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "r"], [15, "s"]],
        [52, "t", [15, "p"]],
        ["l", [15, "t"], [15, "r"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "t"],
              "hasOwnProperty",
              [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "u",
                [
                  30,
                  [
                    16,
                    [15, "t"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "l",
                [15, "u"],
                [
                  30,
                  [
                    "k",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "t"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "u"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "u"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "u"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "u"], [36, ["i", [15, "u"]]]],
          ],
        ],
        ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]],
        ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_FIRST_PARTY_COLLECTION",
                        "first_party_collection",
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_direct_google_requests",
                        "allow_google_signals",
                        "cookie_update",
                        "ignore_referrer",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __e: { 2: true, 4: true },
      __googtag: { 1: 10 },
    },
    blob: { 1: "2" },
    permissions: {
      __e: {
        read_event_data: {
          eventDataAccess: "specific",
          keyPatterns: ["event"],
        },
      },
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
    },

    security_groups: {
      google: ["__e", "__googtag"],
    },
  };

  var h,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    da =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ea = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    ja = ea(this),
    ka = function (a, b) {
      if (b)
        a: {
          for (var c = ja, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            k = c[g],
            m = b(k);
          m != k &&
            m != null &&
            da(c, g, { configurable: !0, writable: !0, value: m });
        }
    };
  ka("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.j = f;
      da(this, "description", { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.j;
    };
    var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  var la =
      typeof Object.create == "function"
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ma;
  if (typeof Object.setPrototypeOf == "function") ma = Object.setPrototypeOf;
  else {
    var na;
    a: {
      var oa = { a: !0 },
        pa = {};
      try {
        pa.__proto__ = oa;
        na = pa.a;
        break a;
      } catch (a) {}
      na = !1;
    }
    ma = na
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var qa = ma,
    ra = function (a, b) {
      a.prototype = la(b.prototype);
      a.prototype.constructor = a;
      if (qa) qa(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Ao = b.prototype;
    },
    l = function (a) {
      var b =
        typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == "number") return { next: aa(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    sa = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    ta = function (a) {
      return a instanceof Array ? a : sa(l(a));
    },
    wa = function (a) {
      return ua(a, a);
    },
    ua = function (a, b) {
      a.raw = b;
      Object.freeze && (Object.freeze(a), Object.freeze(b));
      return a;
    },
    xa =
      typeof Object.assign == "function"
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ka("Object.assign", function (a) {
    return a || xa;
  });
  var ya = function () {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var za = this || self;
  var Aa = function (a, b) {
    this.type = a;
    this.data = b;
  };
  Aa.prototype.getType = function () {
    return this.type;
  };
  Aa.prototype.getData = function () {
    return this.data;
  };
  var Ba = function () {
    this.map = {};
    this.j = {};
  };
  h = Ba.prototype;
  h.get = function (a) {
    return this.map["dust." + a];
  };
  h.set = function (a, b) {
    var c = "dust." + a;
    this.j.hasOwnProperty(c) || (this.map[c] = b);
  };
  h.zi = function (a, b) {
    this.set(a, b);
    this.j["dust." + a] = !0;
  };
  h.has = function (a) {
    return this.map.hasOwnProperty("dust." + a);
  };
  h.remove = function (a) {
    var b = "dust." + a;
    this.j.hasOwnProperty(b) || delete this.map[b];
  };
  var Da = function (a, b) {
    var c = [],
      d;
    for (d in a.map)
      if (a.map.hasOwnProperty(d)) {
        var e = d.substring(5);
        switch (b) {
          case 1:
            c.push(e);
            break;
          case 2:
            c.push(a.map[d]);
            break;
          case 3:
            c.push([e, a.map[d]]);
        }
      }
    return c;
  };
  Ba.prototype.la = function () {
    return Da(this, 1);
  };
  Ba.prototype.Yb = function () {
    return Da(this, 2);
  };
  Ba.prototype.Ib = function () {
    return Da(this, 3);
  };
  var Ea = function () {};
  Ea.prototype.reset = function () {};
  var Fa = function (a, b) {
    this.K = a;
    this.parent = b;
    this.j = this.C = void 0;
    this.zc = !1;
    this.H = function (c, d, e) {
      return c.apply(d, e);
    };
    this.values = new Ba();
  };
  Fa.prototype.add = function (a, b) {
    Ga(this, a, b, !1);
  };
  var Ga = function (a, b, c, d) {
    a.zc || (d ? a.values.zi(b, c) : a.values.set(b, c));
  };
  Fa.prototype.set = function (a, b) {
    this.zc ||
      (!this.values.has(a) && this.parent && this.parent.has(a)
        ? this.parent.set(a, b)
        : this.values.set(a, b));
  };
  Fa.prototype.get = function (a) {
    return this.values.has(a)
      ? this.values.get(a)
      : this.parent
      ? this.parent.get(a)
      : void 0;
  };
  Fa.prototype.has = function (a) {
    return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
  };
  var Ha = function (a) {
    var b = new Fa(a.K, a);
    a.C && (b.C = a.C);
    b.H = a.H;
    b.j = a.j;
    return b;
  };
  Fa.prototype.Pd = function () {
    return this.K;
  };
  Fa.prototype.Ia = function () {
    this.zc = !0;
  };
  function Ia(a, b) {
    for (
      var c, d = l(b), e = d.next();
      !e.done && !((c = Ka(a, e.value)), c instanceof Aa);
      e = d.next()
    );
    return c;
  }
  function Ka(a, b) {
    try {
      var c = l(b),
        d = c.next().value,
        e = sa(c),
        f = a.get(String(d));
      if (!f || typeof f.invoke !== "function")
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return f.invoke.apply(f, [a].concat(ta(e)));
    } catch (k) {
      var g = a.C;
      g && g(k, b.context ? { id: b[0], line: b.context.line } : null);
      throw k;
    }
  }
  var La = function () {
    this.C = new Ea();
    this.j = new Fa(this.C);
  };
  h = La.prototype;
  h.Pd = function () {
    return this.C;
  };
  h.execute = function (a) {
    return this.xi([a].concat(ta(ya.apply(1, arguments))));
  };
  h.xi = function () {
    for (
      var a, b = l(ya.apply(0, arguments)), c = b.next();
      !c.done;
      c = b.next()
    )
      a = Ka(this.j, c.value);
    return a;
  };
  h.Il = function (a) {
    var b = ya.apply(1, arguments),
      c = Ha(this.j);
    c.j = a;
    for (var d, e = l(b), f = e.next(); !f.done; f = e.next())
      d = Ka(c, f.value);
    return d;
  };
  h.Ia = function () {
    this.j.Ia();
  };
  var Ma = function () {
    this.ma = !1;
    this.R = new Ba();
  };
  h = Ma.prototype;
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.ma || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.zi = function (a, b) {
    this.ma || this.R.zi(a, b);
  };
  h.remove = function (a) {
    this.ma || this.R.remove(a);
  };
  h.la = function () {
    return this.R.la();
  };
  h.Yb = function () {
    return this.R.Yb();
  };
  h.Ib = function () {
    return this.R.Ib();
  };
  h.Ia = function () {
    this.ma = !0;
  };
  h.zc = function () {
    return this.ma;
  };
  function Na() {
    for (var a = Oa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Pa() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Oa, Qa;
  function Ra(a) {
    Oa = Oa || Pa();
    Qa = Qa || Na();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (k >> 6),
        q = k & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Oa[m], Oa[n], Oa[p], Oa[q]);
    }
    return b.join("");
  }
  function Sa(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Qa[n];
        if (p != null) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Oa = Oa || Pa();
    Qa = Qa || Na();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (k === 64 && e === -1) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      g !== 64 &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        k !== 64 && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var Ua = {};
  function Va(a, b) {
    Ua[a] = Ua[a] || [];
    Ua[a][b] = !0;
  }
  function Wa(a) {
    var b = Ua[a];
    if (!b || b.length === 0) return "";
    for (var c = [], d = 0, e = 0; e < b.length; e++)
      e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), (d = 0)),
        b[e] && (d |= 1 << e % 8);
    d > 0 && c.push(String.fromCharCode(d));
    return Ra(c.join("")).replace(/\.+$/, "");
  }
  function Xa() {
    for (var a = [], b = Ua.fdr || [], c = 0; c < b.length; c++)
      b[c] && a.push(c);
    return a.length > 0 ? a : void 0;
  }
  function Ya() {}
  function Za(a) {
    return typeof a === "function";
  }
  function $a(a) {
    return typeof a === "string";
  }
  function ab(a) {
    return typeof a === "number" && !isNaN(a);
  }
  function bb(a) {
    return Array.isArray(a) ? a : [a];
  }
  function db(a, b) {
    if (a && Array.isArray(a))
      for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
  }
  function eb(a, b) {
    if (!ab(a) || !ab(b) || a > b) (a = 0), (b = 2147483647);
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function fb(a, b) {
    for (var c = new gb(), d = 0; d < a.length; d++) c.set(a[d], !0);
    for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
    return !1;
  }
  function hb(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  function ib(a) {
    return (
      !!a &&
      (Object.prototype.toString.call(a) === "[object Arguments]" ||
        Object.prototype.hasOwnProperty.call(a, "callee"))
    );
  }
  function jb(a) {
    return Math.round(Number(a)) || 0;
  }
  function kb(a) {
    return "false" === String(a).toLowerCase() ? !1 : !!a;
  }
  function lb(a) {
    var b = [];
    if (Array.isArray(a))
      for (var c = 0; c < a.length; c++) b.push(String(a[c]));
    return b;
  }
  function mb(a) {
    return a ? a.replace(/^\s+|\s+$/g, "") : "";
  }
  function nb() {
    return new Date(Date.now());
  }
  function ob() {
    return nb().getTime();
  }
  var gb = function () {
    this.prefix = "gtm.";
    this.values = {};
  };
  gb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  gb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  gb.prototype.contains = function (a) {
    return this.get(a) !== void 0;
  };
  function pb(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c;
  }
  function qb(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c();
        } catch (d) {}
      }
    };
  }
  function rb(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }
  function sb(a, b) {
    for (var c = [], d = 0; d < a.length; d++)
      c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c;
  }
  function tb(a, b) {
    return a.length >= b.length && a.substring(0, b.length) === b;
  }
  function ub(a, b) {
    return (
      a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    );
  }
  function vb(a, b) {
    var c = z;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (b.indexOf(d) >= 0) return;
    }
    return d;
  }
  function wb(a, b) {
    for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
      d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c;
  }
  var xb = /^\w{1,9}$/;
  function yb(a, b) {
    a = a || {};
    b = b || ",";
    var c = [];
    hb(a, function (d, e) {
      xb.test(d) && e && c.push(d);
    });
    return c.join(b);
  }
  function zb(a, b) {
    function c() {
      e && ++d === b && (e(), (e = null), (c.done = !0));
    }
    var d = 0,
      e = a;
    c.done = !1;
    return c;
  }
  function Ab(a) {
    if (!a) return a;
    var b = a;
    try {
      b = decodeURIComponent(a);
    } catch (d) {}
    var c = b.split(",");
    return c.length === 2 && c[0] === c[1] ? c[0] : a;
  }
  function Cb(a, b, c) {
    function d(n) {
      var p = n.split("=")[0];
      if (a.indexOf(p) < 0) return n;
      if (c !== void 0) return p + "=" + c;
    }
    function e(n) {
      return n
        .split("&")
        .map(d)
        .filter(function (p) {
          return p !== void 0;
        })
        .join("&");
    }
    var f = b.href.split(/[?#]/)[0],
      g = b.search,
      k = b.hash;
    g[0] === "?" && (g = g.substring(1));
    k[0] === "#" && (k = k.substring(1));
    g = e(g);
    k = e(k);
    g !== "" && (g = "?" + g);
    k !== "" && (k = "#" + k);
    var m = "" + f + g + k;
    m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
    return m;
  }
  function Db(a) {
    for (var b = 0; b < 3; ++b)
      try {
        var c = decodeURIComponent(a).replace(/\+/g, " ");
        if (c === a) break;
        a = c;
      } catch (d) {
        return "";
      }
    return a;
  } /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
  var Eb = globalThis.trustedTypes,
    Fb;
  function Gb() {
    var a = null;
    if (!Eb) return a;
    try {
      var b = function (c) {
        return c;
      };
      a = Eb.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b,
      });
    } catch (c) {}
    return a;
  }
  function Hb() {
    Fb === void 0 && (Fb = Gb());
    return Fb;
  }
  var Ib = function (a) {
    this.j = a;
  };
  Ib.prototype.toString = function () {
    return this.j + "";
  };
  function Jb(a) {
    var b = a,
      c = Hb();
    return new Ib(c ? c.createScriptURL(b) : b);
  }
  function Kb(a) {
    if (a instanceof Ib) return a.j;
    throw Error("");
  }
  var Lb = wa([""]),
    Mb = ua(["\x00"], ["\\0"]),
    Nb = ua(["\n"], ["\\n"]),
    Ob = ua(["\x00"], ["\\u0000"]);
  function Pb(a) {
    return a.toString().indexOf("`") === -1;
  }
  Pb(function (a) {
    return a(Lb);
  }) ||
    Pb(function (a) {
      return a(Mb);
    }) ||
    Pb(function (a) {
      return a(Nb);
    }) ||
    Pb(function (a) {
      return a(Ob);
    });
  var Qb = function (a) {
    this.j = a;
  };
  Qb.prototype.toString = function () {
    return this.j;
  };
  var Rb = function (a) {
    this.Zm = a;
  };
  function Sb(a) {
    return new Rb(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var Tb = [
    Sb("data"),
    Sb("http"),
    Sb("https"),
    Sb("mailto"),
    Sb("ftp"),
    new Rb(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function Ub(a) {
    var b;
    b = b === void 0 ? Tb : b;
    if (a instanceof Qb) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof Rb && d.Zm(a)) return new Qb(a);
    }
  }
  var Vb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function Wb(a) {
    var b;
    if (a instanceof Qb)
      if (a instanceof Qb) b = a.j;
      else throw Error("");
    else b = Vb.test(a) ? a : void 0;
    return b;
  }
  function Xb(a, b) {
    var c = Wb(b);
    c !== void 0 && (a.action = c);
  }
  var Yb = function (a) {
    this.j = a;
  };
  Yb.prototype.toString = function () {
    return this.j + "";
  };
  var $b = function () {
    this.j = Zb[0].toLowerCase();
  };
  $b.prototype.toString = function () {
    return this.j;
  };
  function ac(a, b) {
    var c = [new $b()];
    if (c.length === 0) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof $b) g = f.j;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return e.indexOf(f) !== 0;
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  var bc = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function cc(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a;
  }
  var z = window,
    dc = window.history,
    B = document,
    ec = navigator;
  function fc() {
    var a;
    try {
      a = ec.serviceWorker;
    } catch (b) {
      return;
    }
    return a;
  }
  var gc = B.currentScript,
    hc = gc && gc.src;
  function ic(a, b) {
    var c = z[a];
    z[a] = c === void 0 ? b : c;
    return z[a];
  }
  function jc(a) {
    return (ec.userAgent || "").indexOf(a) !== -1;
  }
  var kc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    lc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function mc(a, b, c) {
    b &&
      hb(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  function nc(a, b, c, d, e) {
    var f = B.createElement("script");
    mc(f, d, kc);
    f.type = "text/javascript";
    f.async = d && d.async === !1 ? !1 : !0;
    var g;
    g = Jb(cc(a));
    f.src = Kb(g);
    var k,
      m = f.ownerDocument;
    m = m === void 0 ? document : m;
    var n,
      p,
      q =
        (p = (n = m).querySelector) == null
          ? void 0
          : p.call(n, "script[nonce]");
    (k = q == null ? "" : q.nonce || q.getAttribute("nonce") || "") &&
      f.setAttribute("nonce", k);
    b && (f.onload = b);
    c && (f.onerror = c);
    if (e) e.appendChild(f);
    else {
      var r = B.getElementsByTagName("script")[0] || B.body || B.head;
      r.parentNode.insertBefore(f, r);
    }
    return f;
  }
  function oc() {
    if (hc) {
      var a = hc.toLowerCase();
      if (a.indexOf("https://") === 0) return 2;
      if (a.indexOf("http://") === 0) return 3;
    }
    return 1;
  }
  function pc(a, b, c, d, e) {
    var f;
    f = f === void 0 ? !0 : f;
    var g = e,
      k = !1;
    g || ((g = B.createElement("iframe")), (k = !0));
    mc(g, c, lc);
    d &&
      hb(d, function (n, p) {
        g.dataset[n] = p;
      });
    f &&
      ((g.height = "0"),
      (g.width = "0"),
      (g.style.display = "none"),
      (g.style.visibility = "hidden"));
    a !== void 0 && (g.src = a);
    if (k) {
      var m = (B.body && B.body.lastChild) || B.body || B.head;
      m.parentNode.insertBefore(g, m);
    }
    b && (g.onload = b);
    return g;
  }
  function qc(a, b, c, d) {
    rc(a, b, c, d);
  }
  function sc(a, b, c, d) {
    a.addEventListener && a.addEventListener(b, c, !!d);
  }
  function tc(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  }
  function F(a) {
    z.setTimeout(a, 0);
  }
  function uc(a, b) {
    return a && b && a.attributes && a.attributes[b]
      ? a.attributes[b].value
      : null;
  }
  function vc(a) {
    var b = a.innerText || a.textContent || "";
    b &&
      b !== " " &&
      ((b = b.replace(/^[\s\xa0]+/g, "")), (b = b.replace(/[\s\xa0]+$/g, "")));
    b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
    return b;
  }
  function wc(a) {
    var b = B.createElement("div"),
      c = b,
      d,
      e = cc("A<div>" + a + "</div>"),
      f = Hb();
    d = new Yb(f ? f.createHTML(e) : e);
    if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName))
      throw Error("");
    var g;
    if (d instanceof Yb) g = d.j;
    else throw Error("");
    c.innerHTML = g;
    b = b.lastChild;
    for (var k = []; b && b.firstChild; ) k.push(b.removeChild(b.firstChild));
    return k;
  }
  function xc(a, b, c) {
    c = c || 100;
    for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
    for (var f = a, g = 0; f && g <= c; g++) {
      if (d[String(f.tagName).toLowerCase()]) return f;
      f = f.parentElement;
    }
    return null;
  }
  function yc(a, b, c) {
    var d;
    try {
      d = ec.sendBeacon && ec.sendBeacon(a);
    } catch (e) {
      Va("TAGGING", 15);
    }
    d ? b == null || b() : rc(a, b, c);
  }
  function zc(a, b) {
    try {
      return ec.sendBeacon(a, b);
    } catch (c) {
      Va("TAGGING", 15);
    }
    return !1;
  }
  var Ac = {
    cache: "no-store",
    credentials: "include",
    keepalive: !0,
    method: "POST",
    mode: "no-cors",
    redirect: "follow",
  };
  function Bc(a, b, c, d, e) {
    if (Cc()) {
      var f = Object.assign({}, Ac);
      b && (f.body = b);
      c &&
        (c.attributionReporting &&
          (f.attributionReporting = c.attributionReporting),
        c.browsingTopics && (f.browsingTopics = c.browsingTopics),
        c.credentials && (f.credentials = c.credentials),
        c.mode && (f.mode = c.mode));
      try {
        var g = z.fetch(a, f);
        if (g)
          return (
            g
              .then(function (m) {
                m && (m.ok || m.status === 0)
                  ? d == null || d()
                  : e == null || e();
              })
              .catch(function () {
                e == null || e();
              }),
            !0
          );
      } catch (m) {}
    }
    if (c && c.Bk) return e == null || e(), !1;
    if (b) {
      var k = zc(a, b);
      k ? d == null || d() : e == null || e();
      return k;
    }
    yc(a, d, e);
    return !0;
  }
  function Cc() {
    return typeof z.fetch === "function";
  }
  function Dc(a, b) {
    var c = a[b];
    c && typeof c.animVal === "string" && (c = c.animVal);
    return c;
  }
  function Ec() {
    var a = z.performance;
    if (a && Za(a.now)) return a.now();
  }
  function Fc() {
    var a,
      b = z.performance;
    if (b && b.getEntriesByType)
      try {
        var c = b.getEntriesByType("navigation");
        c && c.length > 0 && (a = c[0].type);
      } catch (d) {
        return "e";
      }
    if (!a) return "u";
    switch (a) {
      case "navigate":
        return "n";
      case "back_forward":
        return "h";
      case "reload":
        return "r";
      case "prerender":
        return "p";
      default:
        return "x";
    }
  }
  function Gc() {
    return z.performance || void 0;
  }
  function Hc() {
    var a = z.webPixelsManager;
    return a ? a.createShopifyExtend !== void 0 : !1;
  }
  var rc = function (a, b, c, d) {
    var e = new Image(1, 1);
    mc(e, d, {});
    e.onload = function () {
      e.onload = null;
      b && b();
    };
    e.onerror = function () {
      e.onerror = null;
      c && c();
    };
    e.src = a;
    return e;
  };
  function Ic(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function Jc(a, b) {
    return this.evaluate(a) === this.evaluate(b);
  }
  function Kc(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function Lc(a, b) {
    var c = this.evaluate(a),
      d = this.evaluate(b);
    return String(c).indexOf(String(d)) > -1;
  }
  function Mc(a, b) {
    var c = String(this.evaluate(a)),
      d = String(this.evaluate(b));
    return c.substring(0, d.length) === d;
  }
  function Nc(a, b) {
    var c = this.evaluate(a),
      d = this.evaluate(b);
    switch (c) {
      case "pageLocation":
        var e = z.location.href;
        d instanceof Ma &&
          d.get("stripProtocol") &&
          (e = e.replace(/^https?:\/\//, ""));
        return e;
    }
  } /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Oc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Pc = function (a) {
      if (a == null) return String(a);
      var b = Oc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Qc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Rc = function (a) {
      if (!a || Pc(a) != "object" || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Qc(a, "constructor") &&
          !Qc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return b === void 0 || Qc(a, b);
    },
    Sc = function (a, b) {
      var c = b || (Pc(a) == "array" ? [] : {}),
        d;
      for (d in a)
        if (Qc(a, d)) {
          var e = a[d];
          Pc(e) == "array"
            ? (Pc(c[d]) != "array" && (c[d] = []), (c[d] = Sc(e, c[d])))
            : Rc(e)
            ? (Rc(c[d]) || (c[d] = {}), (c[d] = Sc(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  function Tc(a) {
    if (a == void 0 || Array.isArray(a) || Rc(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  }
  function Uc(a) {
    return (
      (typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0) ||
      (typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a))
    );
  }
  var Vc = function (a) {
    a = a === void 0 ? [] : a;
    this.R = new Ba();
    this.values = [];
    this.ma = !1;
    for (var b in a)
      a.hasOwnProperty(b) &&
        (Uc(b) ? (this.values[Number(b)] = a[Number(b)]) : this.R.set(b, a[b]));
  };
  h = Vc.prototype;
  h.toString = function (a) {
    if (a && a.indexOf(this) >= 0) return "";
    for (var b = [], c = 0; c < this.values.length; c++) {
      var d = this.values[c];
      d === null || d === void 0
        ? b.push("")
        : d instanceof Vc
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  h.set = function (a, b) {
    if (!this.ma)
      if (a === "length") {
        if (!Uc(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.values.length = Number(b);
      } else Uc(a) ? (this.values[Number(a)] = b) : this.R.set(a, b);
  };
  h.get = function (a) {
    return a === "length"
      ? this.length()
      : Uc(a)
      ? this.values[Number(a)]
      : this.R.get(a);
  };
  h.length = function () {
    return this.values.length;
  };
  h.la = function () {
    for (var a = this.R.la(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(String(b));
    return a;
  };
  h.Yb = function () {
    for (var a = this.R.Yb(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(this.values[b]);
    return a;
  };
  h.Ib = function () {
    for (var a = this.R.Ib(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push([String(b), this.values[b]]);
    return a;
  };
  h.remove = function (a) {
    Uc(a) ? delete this.values[Number(a)] : this.ma || this.R.remove(a);
  };
  h.pop = function () {
    return this.values.pop();
  };
  h.push = function () {
    return this.values.push.apply(this.values, ta(ya.apply(0, arguments)));
  };
  h.shift = function () {
    return this.values.shift();
  };
  h.splice = function (a, b) {
    var c = ya.apply(2, arguments);
    return b === void 0 && c.length === 0
      ? new Vc(this.values.splice(a))
      : new Vc(
          this.values.splice.apply(this.values, [a, b || 0].concat(ta(c)))
        );
  };
  h.unshift = function () {
    return this.values.unshift.apply(this.values, ta(ya.apply(0, arguments)));
  };
  h.has = function (a) {
    return (Uc(a) && this.values.hasOwnProperty(a)) || this.R.has(a);
  };
  h.Ia = function () {
    this.ma = !0;
    Object.freeze(this.values);
  };
  h.zc = function () {
    return this.ma;
  };
  function Wc(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  }
  var Xc = function (a, b) {
    this.functionName = a;
    this.Od = b;
    this.R = new Ba();
    this.ma = !1;
  };
  h = Xc.prototype;
  h.toString = function () {
    return this.functionName;
  };
  h.getName = function () {
    return this.functionName;
  };
  h.invoke = function (a) {
    return this.Od.call.apply(
      this.Od,
      [new Yc(this, a)].concat(ta(ya.apply(1, arguments)))
    );
  };
  h.ib = function (a) {
    var b = ya.apply(1, arguments);
    try {
      return this.invoke.apply(this, [a].concat(ta(b)));
    } catch (c) {}
  };
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.ma || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.remove = function (a) {
    this.ma || this.R.remove(a);
  };
  h.la = function () {
    return this.R.la();
  };
  h.Yb = function () {
    return this.R.Yb();
  };
  h.Ib = function () {
    return this.R.Ib();
  };
  h.Ia = function () {
    this.ma = !0;
  };
  h.zc = function () {
    return this.ma;
  };
  var Zc = function (a, b) {
    Xc.call(this, a, b);
  };
  ra(Zc, Xc);
  var $c = function (a, b) {
    Xc.call(this, a, b);
  };
  ra($c, Xc);
  var Yc = function (a, b) {
    this.Od = a;
    this.D = b;
  };
  Yc.prototype.evaluate = function (a) {
    var b = this.D;
    return Array.isArray(a) ? Ka(b, a) : a;
  };
  Yc.prototype.getName = function () {
    return this.Od.getName();
  };
  Yc.prototype.Pd = function () {
    return this.D.Pd();
  };
  var ad = function () {
    this.map = new Map();
  };
  ad.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  ad.prototype.get = function (a) {
    return this.map.get(a);
  };
  var bd = function () {
    this.keys = [];
    this.values = [];
  };
  bd.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  bd.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (b > -1) return this.values[b];
  };
  function cd() {
    try {
      return Map ? new ad() : new bd();
    } catch (a) {
      return new bd();
    }
  }
  var dd = function (a) {
    if (a instanceof dd) return a;
    if (Tc(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.value = a;
  };
  dd.prototype.getValue = function () {
    return this.value;
  };
  dd.prototype.toString = function () {
    return String(this.value);
  };
  var fd = function (a) {
    this.promise = a;
    this.ma = !1;
    this.R = new Ba();
    this.R.set("then", ed(this));
    this.R.set("catch", ed(this, !0));
    this.R.set("finally", ed(this, !1, !0));
  };
  h = fd.prototype;
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.ma || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.remove = function (a) {
    this.ma || this.R.remove(a);
  };
  h.la = function () {
    return this.R.la();
  };
  h.Yb = function () {
    return this.R.Yb();
  };
  h.Ib = function () {
    return this.R.Ib();
  };
  var ed = function (a, b, c) {
    b = b === void 0 ? !1 : b;
    c = c === void 0 ? !1 : c;
    return new Zc("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof Zc || (d = void 0);
      e instanceof Zc || (e = void 0);
      var f = Ha(this.D),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
          };
        },
        k = a.promise.then(d && g(d), e && g(e));
      return new fd(k);
    });
  };
  fd.prototype.Ia = function () {
    this.ma = !0;
  };
  fd.prototype.zc = function () {
    return this.ma;
  };
  function G(a, b, c) {
    var d = cd(),
      e = function (g, k) {
        for (var m = g.la(), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]));
      },
      f = function (g) {
        if (g === null || g === void 0) return g;
        var k = d.get(g);
        if (k) return k;
        if (g instanceof Vc) {
          var m = [];
          d.set(g, m);
          for (var n = g.la(), p = 0; p < n.length; p++)
            m[n[p]] = f(g.get(n[p]));
          return m;
        }
        if (g instanceof fd) return g.promise;
        if (g instanceof Ma) {
          var q = {};
          d.set(g, q);
          e(g, q);
          return q;
        }
        if (g instanceof Zc || g instanceof $c) {
          var r = function () {
            for (
              var v = ya.apply(0, arguments), t = [], w = 0;
              w < v.length;
              w++
            )
              t[w] = gd(v[w], b, c);
            var x = new Fa(b ? b.Pd() : new Ea());
            b && (x.j = b.j);
            return f(g.invoke.apply(g, [x].concat(ta(t))));
          };
          d.set(g, r);
          e(g, r);
          return r;
        }
        var u = !1;
        switch (c) {
          case 1:
            u = !0;
            break;
          case 2:
            u = !1;
            break;
          case 3:
            u = !1;
            break;
          default:
        }
        if (g instanceof dd && u) return g.getValue();
        switch (typeof g) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return g;
          case "object":
            if (g === null) return null;
        }
      };
    return f(a);
  }
  function gd(a, b, c) {
    var d = cd(),
      e = function (g, k) {
        for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (Array.isArray(g) || ib(g)) {
          var m = new Vc([]);
          d.set(g, m);
          for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
          return m;
        }
        if (Rc(g)) {
          var p = new Ma();
          d.set(g, p);
          e(g, p);
          return p;
        }
        if (typeof g === "function") {
          var q = new Zc("", function () {
            for (
              var x = ya.apply(0, arguments), y = [], A = 0;
              A < x.length;
              A++
            )
              y[A] = G(this.evaluate(x[A]), b, c);
            return f((0, this.D.H)(g, g, y));
          });
          d.set(g, q);
          e(g, q);
          return q;
        }
        var t = typeof g;
        if (g === null || t === "string" || t === "number" || t === "boolean")
          return g;
        var w = !1;
        switch (c) {
          case 1:
            w = !0;
            break;
          case 2:
            w = !1;
            break;
          default:
        }
        if (g !== void 0 && w) return new dd(g);
      };
    return f(a);
  }
  function hd() {
    var a = !1;
    return a;
  }
  var id = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a) {
      for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
      for (var d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof Vc)
          for (var e = arguments[d], f = 0; f < e.length(); f++)
            b.push(e.get(f));
        else b.push(arguments[d]);
      return new Vc(b);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new Vc(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = c === void 0 ? 0 : Number(c);
      e < 0 && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
      for (var f = e; f >= 0; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new Vc(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a) {
      return this.push.apply(this, ta(ya.apply(1, arguments)));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (c !== void 0) e = c;
      else {
        if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var k = f; k < d; k++)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (c !== void 0) e = c;
      else {
        if (d === 0)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var k = f; k >= 0; k--)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reverse: function () {
      for (var a = Wc(this), b = a.length - 1, c = 0; b >= 0; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      b === void 0 && (b = 0);
      b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
      c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new Vc(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = Wc(this);
      b === void 0
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c) {
      return this.splice.apply(this, [b, c].concat(ta(ya.apply(3, arguments))));
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a) {
      return this.unshift.apply(this, ta(ya.apply(1, arguments)));
    },
  };
  var jd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  ra(jd, Error);
  var kd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    ld = new Aa("break"),
    md = new Aa("continue");
  function od(a, b) {
    return this.evaluate(a) + this.evaluate(b);
  }
  function pd(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function qd(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c);
    if (!(f instanceof Vc))
      throw Error("Error: Non-List argument given to Apply instruction.");
    if (d === null || d === void 0) {
      var g = "TypeError: Can't read property " + e + " of " + d + ".";
      if (hd()) throw new jd(g);
      throw Error(g);
    }
    var k = typeof d === "number";
    if (typeof d === "boolean" || k) {
      if (e === "toString") {
        if (k && f.length()) {
          var m = G(f.get(0));
          try {
            return d.toString(m);
          } catch (D) {}
        }
        return d.toString();
      }
      var n = "TypeError: " + d + "." + e + " is not a function.";
      if (hd()) throw new jd(n);
      throw Error(n);
    }
    if (typeof d === "string") {
      if (kd.hasOwnProperty(e)) {
        var p = 2;
        p = 1;
        var q = G(f, void 0, p);
        return gd(d[e].apply(d, q), this.D);
      }
      var r = "TypeError: " + e + " is not a function";
      if (hd()) throw new jd(r);
      throw Error(r);
    }
    if (d instanceof Vc) {
      if (d.has(e)) {
        var u = d.get(String(e));
        if (u instanceof Zc) {
          var v = Wc(f);
          return u.invoke.apply(u, [this.D].concat(ta(v)));
        }
        var t = "TypeError: " + e + " is not a function";
        if (hd()) throw new jd(t);
        throw Error(t);
      }
      if (id.supportedMethods.indexOf(e) >= 0) {
        var w = Wc(f);
        return id[e].call.apply(id[e], [d, this.D].concat(ta(w)));
      }
    }
    if (d instanceof Zc || d instanceof Ma || d instanceof fd) {
      if (d.has(e)) {
        var x = d.get(e);
        if (x instanceof Zc) {
          var y = Wc(f);
          return x.invoke.apply(x, [this.D].concat(ta(y)));
        }
        var A = "TypeError: " + e + " is not a function";
        if (hd()) throw new jd(A);
        throw Error(A);
      }
      if (e === "toString") return d instanceof Zc ? d.getName() : d.toString();
      if (e === "hasOwnProperty") return d.has(f.get(0));
    }
    if (d instanceof dd && e === "toString") return d.toString();
    var C = "TypeError: Object has no '" + e + "' property.";
    if (hd()) throw new jd(C);
    throw Error(C);
  }
  function rd(a, b) {
    a = this.evaluate(a);
    if (typeof a !== "string")
      throw Error("Invalid key name given for assignment.");
    var c = this.D;
    if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
    var d = this.evaluate(b);
    c.set(a, d);
    return d;
  }
  function sd() {
    var a = ya.apply(0, arguments),
      b = Ha(this.D),
      c = Ia(b, a);
    if (c instanceof Aa) return c;
  }
  function td() {
    return ld;
  }
  function ud(a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof Aa) return d;
    }
  }
  function vd() {
    for (var a = this.D, b = 0; b < arguments.length - 1; b += 2) {
      var c = arguments[b];
      if (typeof c === "string") {
        var d = this.evaluate(arguments[b + 1]);
        Ga(a, c, d, !0);
      }
    }
  }
  function wd() {
    return md;
  }
  function xd(a, b) {
    return new Aa(a, this.evaluate(b));
  }
  function yd(a, b) {
    for (
      var c = ya.apply(2, arguments), d = new Vc(), e = this.evaluate(b), f = 0;
      f < e.length;
      f++
    )
      d.push(e[f]);
    var g = [51, a, d].concat(ta(c));
    this.D.add(a, this.evaluate(g));
  }
  function zd(a, b) {
    return this.evaluate(a) / this.evaluate(b);
  }
  function Ad(a, b) {
    var c = this.evaluate(a),
      d = this.evaluate(b),
      e = c instanceof dd,
      f = d instanceof dd;
    return e || f ? (e && f ? c.getValue() === d.getValue() : !1) : c == d;
  }
  function Bd() {
    for (var a, b = 0; b < arguments.length; b++)
      a = this.evaluate(arguments[b]);
    return a;
  }
  function Cd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Ia(f, d);
      if (g instanceof Aa) {
        if (g.getType() === "break") break;
        if (g.getType() === "return") return g;
      }
    }
  }
  function Dd(a, b, c) {
    if (typeof b === "string")
      return Cd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (
      b instanceof Ma ||
      b instanceof fd ||
      b instanceof Vc ||
      b instanceof Zc
    ) {
      var d = b.la(),
        e = d.length;
      return Cd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d[f];
        },
        c
      );
    }
  }
  function Ed(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Dd(
      function (k) {
        g.set(d, k);
        return g;
      },
      e,
      f
    );
  }
  function Fd(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Dd(
      function (k) {
        var m = Ha(g);
        Ga(m, d, k, !0);
        return m;
      },
      e,
      f
    );
  }
  function Gd(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Dd(
      function (k) {
        var m = Ha(g);
        m.add(d, k);
        return m;
      },
      e,
      f
    );
  }
  function Hd(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Id(
      function (k) {
        g.set(d, k);
        return g;
      },
      e,
      f
    );
  }
  function Jd(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Id(
      function (k) {
        var m = Ha(g);
        Ga(m, d, k, !0);
        return m;
      },
      e,
      f
    );
  }
  function Kd(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Id(
      function (k) {
        var m = Ha(g);
        m.add(d, k);
        return m;
      },
      e,
      f
    );
  }
  function Id(a, b, c) {
    if (typeof b === "string")
      return Cd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof Vc)
      return Cd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (hd()) throw new jd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  function Ld(a, b, c, d) {
    function e(q, r) {
      for (var u = 0; u < f.length(); u++) {
        var v = f.get(u);
        r.add(v, q.get(v));
      }
    }
    var f = this.evaluate(a);
    if (!(f instanceof Vc))
      throw Error("TypeError: Non-List argument given to ForLet instruction.");
    var g = this.D,
      k = this.evaluate(d),
      m = Ha(g);
    for (e(g, m); Ka(m, b); ) {
      var n = Ia(m, k);
      if (n instanceof Aa) {
        if (n.getType() === "break") break;
        if (n.getType() === "return") return n;
      }
      var p = Ha(g);
      e(m, p);
      Ka(p, c);
      m = p;
    }
  }
  function Md(a, b) {
    var c = ya.apply(2, arguments),
      d = this.D,
      e = this.evaluate(b);
    if (!(e instanceof Vc))
      throw Error("Error: non-List value given for Fn argument names.");
    return new Zc(
      a,
      (function () {
        return function () {
          var f = ya.apply(0, arguments),
            g = Ha(d);
          g.j === void 0 && (g.j = this.D.j);
          for (var k = [], m = 0; m < f.length; m++) {
            var n = this.evaluate(f[m]);
            k[m] = n;
          }
          for (var p = e.get("length"), q = 0; q < p; q++)
            q < k.length ? g.add(e.get(q), k[q]) : g.add(e.get(q), void 0);
          g.add("arguments", new Vc(k));
          var r = Ia(g, c);
          if (r instanceof Aa)
            return r.getType() === "return" ? r.getData() : r;
        };
      })()
    );
  }
  function Nd(a) {
    var b = this.evaluate(a),
      c = this.D;
    if (Od && !c.has(b)) throw new ReferenceError(b + " is not defined.");
    return c.get(b);
  }
  function Pd(a, b) {
    var c,
      d = this.evaluate(a),
      e = this.evaluate(b);
    if (d === void 0 || d === null) {
      var f =
        "TypeError: Cannot read properties of " + d + " (reading '" + e + "')";
      if (hd()) throw new jd(f);
      throw Error(f);
    }
    if (
      d instanceof Ma ||
      d instanceof fd ||
      d instanceof Vc ||
      d instanceof Zc
    )
      c = d.get(e);
    else if (typeof d === "string")
      e === "length" ? (c = d.length) : Uc(e) && (c = d[e]);
    else if (d instanceof dd) return;
    return c;
  }
  function Qd(a, b) {
    return this.evaluate(a) > this.evaluate(b);
  }
  function Rd(a, b) {
    return this.evaluate(a) >= this.evaluate(b);
  }
  function Sd(a, b) {
    var c = this.evaluate(a),
      d = this.evaluate(b);
    c instanceof dd && (c = c.getValue());
    d instanceof dd && (d = d.getValue());
    return c === d;
  }
  function Td(a, b) {
    return !Sd.call(this, a, b);
  }
  function Ud(a, b, c) {
    var d = [];
    this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
    var e = Ia(this.D, d);
    if (e instanceof Aa) return e;
  }
  var Od = !1;
  function Vd(a, b) {
    return this.evaluate(a) < this.evaluate(b);
  }
  function Wd(a, b) {
    return this.evaluate(a) <= this.evaluate(b);
  }
  function Xd() {
    for (var a = new Vc(), b = 0; b < arguments.length; b++) {
      var c = this.evaluate(arguments[b]);
      a.push(c);
    }
    return a;
  }
  function Yd() {
    for (var a = new Ma(), b = 0; b < arguments.length - 1; b += 2) {
      var c = String(this.evaluate(arguments[b])),
        d = this.evaluate(arguments[b + 1]);
      a.set(c, d);
    }
    return a;
  }
  function Zd(a, b) {
    return this.evaluate(a) % this.evaluate(b);
  }
  function $d(a, b) {
    return this.evaluate(a) * this.evaluate(b);
  }
  function ae(a) {
    return -this.evaluate(a);
  }
  function be(a) {
    return !this.evaluate(a);
  }
  function ce(a, b) {
    return !Ad.call(this, a, b);
  }
  function de() {
    return null;
  }
  function ee(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function fe(a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c;
  }
  function ge(a) {
    return this.evaluate(a);
  }
  function he() {
    return ya.apply(0, arguments);
  }
  function ie(a) {
    return new Aa("return", this.evaluate(a));
  }
  function je(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c);
    if (d === null || d === void 0) {
      var g = "TypeError: Can't set property " + e + " of " + d + ".";
      if (hd()) throw new jd(g);
      throw Error(g);
    }
    (d instanceof Zc || d instanceof Vc || d instanceof Ma) &&
      d.set(String(e), f);
    return f;
  }
  function ke(a, b) {
    return this.evaluate(a) - this.evaluate(b);
  }
  function le(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c);
    if (!Array.isArray(e) || !Array.isArray(f))
      throw Error("Error: Malformed switch instruction.");
    for (var g, k = !1, m = 0; m < e.length; m++)
      if (k || d === this.evaluate(e[m]))
        if (((g = this.evaluate(f[m])), g instanceof Aa)) {
          var n = g.getType();
          if (n === "break") return;
          if (n === "return" || n === "continue") return g;
        } else k = !0;
    if (
      f.length === e.length + 1 &&
      ((g = this.evaluate(f[f.length - 1])),
      g instanceof Aa &&
        (g.getType() === "return" || g.getType() === "continue"))
    )
      return g;
  }
  function me(a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
  }
  function ne(a) {
    var b = this.evaluate(a);
    return b instanceof Zc ? "function" : typeof b;
  }
  function oe() {
    for (var a = this.D, b = 0; b < arguments.length; b++) {
      var c = arguments[b];
      typeof c !== "string" || a.add(c, void 0);
    }
  }
  function pe(a, b, c, d) {
    var e = this.evaluate(d);
    if (this.evaluate(c)) {
      var f = Ia(this.D, e);
      if (f instanceof Aa) {
        if (f.getType() === "break") return;
        if (f.getType() === "return") return f;
      }
    }
    for (; this.evaluate(a); ) {
      var g = Ia(this.D, e);
      if (g instanceof Aa) {
        if (g.getType() === "break") break;
        if (g.getType() === "return") return g;
      }
      this.evaluate(b);
    }
  }
  function qe(a) {
    return ~Number(this.evaluate(a));
  }
  function re(a, b) {
    return Number(this.evaluate(a)) << Number(this.evaluate(b));
  }
  function se(a, b) {
    return Number(this.evaluate(a)) >> Number(this.evaluate(b));
  }
  function te(a, b) {
    return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
  }
  function ue(a, b) {
    return Number(this.evaluate(a)) & Number(this.evaluate(b));
  }
  function ve(a, b) {
    return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
  }
  function we(a, b) {
    return Number(this.evaluate(a)) | Number(this.evaluate(b));
  }
  function xe() {}
  function ye(a, b, c, d, e) {
    var f = !0;
    try {
      var g = this.evaluate(c);
      if (g instanceof Aa) return g;
    } catch (r) {
      if (!(r instanceof jd && a)) throw ((f = r instanceof jd), r);
      var k = Ha(this.D),
        m = new dd(r);
      k.add(b, m);
      var n = this.evaluate(d),
        p = Ia(k, n);
      if (p instanceof Aa) return p;
    } finally {
      if (f && e !== void 0) {
        var q = this.evaluate(e);
        if (q instanceof Aa) return q;
      }
    }
  }
  var Ae = function () {
    this.j = new La();
    ze(this);
  };
  Ae.prototype.execute = function (a) {
    return this.j.xi(a);
  };
  var ze = function (a) {
    var b = function (c, d) {
      var e = new $c(String(c), d);
      e.Ia();
      a.j.j.set(String(c), e);
    };
    b("map", Yd);
    b("and", Ic);
    b("contains", Lc);
    b("equals", Jc);
    b("or", Kc);
    b("startsWith", Mc);
    b("variable", Nc);
  };
  var Ce = function () {
    this.C = !1;
    this.j = new La();
    Be(this);
    this.C = !0;
  };
  Ce.prototype.execute = function (a) {
    return De(this.j.xi(a));
  };
  var Ee = function (a, b, c) {
    return De(a.j.Il(b, c));
  };
  Ce.prototype.Ia = function () {
    this.j.Ia();
  };
  var Be = function (a) {
    var b = function (c, d) {
      var e = String(c),
        f = new $c(e, d);
      f.Ia();
      a.j.j.set(e, f);
    };
    b(0, od);
    b(1, pd);
    b(2, qd);
    b(3, rd);
    b(56, ue);
    b(57, re);
    b(58, qe);
    b(59, we);
    b(60, se);
    b(61, te);
    b(62, ve);
    b(53, sd);
    b(4, td);
    b(5, ud);
    b(52, vd);
    b(6, wd);
    b(49, xd);
    b(7, Xd);
    b(8, Yd);
    b(9, ud);
    b(50, yd);
    b(10, zd);
    b(12, Ad);
    b(13, Bd);
    b(51, Md);
    b(47, Ed);
    b(54, Fd);
    b(55, Gd);
    b(63, Ld);
    b(64, Hd);
    b(65, Jd);
    b(66, Kd);
    b(15, Nd);
    b(16, Pd);
    b(17, Pd);
    b(18, Qd);
    b(19, Rd);
    b(20, Sd);
    b(21, Td);
    b(22, Ud);
    b(23, Vd);
    b(24, Wd);
    b(25, Zd);
    b(26, $d);
    b(27, ae);
    b(28, be);
    b(29, ce);
    b(45, de);
    b(30, ee);
    b(32, fe);
    b(33, fe);
    b(34, ge);
    b(35, ge);
    b(46, he);
    b(36, ie);
    b(43, je);
    b(37, ke);
    b(38, le);
    b(39, me);
    b(67, ye);
    b(40, ne);
    b(44, xe);
    b(41, oe);
    b(42, pe);
  };
  Ce.prototype.Pd = function () {
    return this.j.Pd();
  };
  function De(a) {
    if (
      a instanceof Aa ||
      a instanceof Zc ||
      a instanceof Vc ||
      a instanceof Ma ||
      a instanceof fd ||
      a instanceof dd ||
      a === null ||
      a === void 0 ||
      typeof a === "string" ||
      typeof a === "number" ||
      typeof a === "boolean"
    )
      return a;
  }
  var Fe = function (a) {
    this.message = a;
  };
  function Ge(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return b === void 0
      ? new Fe(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function He(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var Ie = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Je(a, b) {
    for (var c = "", d = !0; a > 7; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = "" + Ge(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = "" + Ge(a | b) + c);
  }
  var Ke = (function () {
    function a(b) {
      return {
        toString: function () {
          return b;
        },
      };
    }
    return {
      fl: a("consent"),
      Ji: a("convert_case_to"),
      Ki: a("convert_false_to"),
      Li: a("convert_null_to"),
      Mi: a("convert_true_to"),
      Ni: a("convert_undefined_to"),
      Sn: a("debug_mode_metadata"),
      ra: a("function"),
      yh: a("instance_name"),
      Ll: a("live_only"),
      Ml: a("malware_disabled"),
      METADATA: a("metadata"),
      Pl: a("original_activity_id"),
      ho: a("original_vendor_template_id"),
      fo: a("once_on_load"),
      Ol: a("once_per_event"),
      Xj: a("once_per_load"),
      jo: a("priority_override"),
      ko: a("respected_consent_types"),
      hk: a("setup_tags"),
      Pe: a("tag_id"),
      mk: a("teardown_tags"),
    };
  })();
  var ff;
  var gf = [],
    jf = [],
    kf = [],
    lf = [],
    mf = [],
    nf = {},
    of,
    pf;
  function qf(a) {
    pf = pf || a;
  }
  function rf(a) {}
  var sf,
    tf = [],
    uf = [];
  function vf(a, b) {
    var c = {};
    c[Ke.ra] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    return c;
  }
  function wf(a, b, c) {
    try {
      return of(xf(a, b, c));
    } catch (d) {
      JSON.stringify(a);
    }
    return 2;
  }
  function yf(a) {
    var b = a[Ke.ra];
    if (!b) throw Error("Error: No function name given for function call.");
    return !!nf[b];
  }
  var xf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = zf(a[e], b, c));
      return d;
    },
    zf = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(zf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = gf[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var k = String(g[Ke.yh]);
            try {
              var m = xf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Af(m, { event: b, index: f, type: 2, name: k });
              sf && (d = sf.hm(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), k), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[zf(a[n], b, c)] = zf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = zf(a[q], b, c);
              pf && (p = p || pf.Wm(r));
              d.push(r);
            }
            return pf && p ? pf.km(d) : d.join("");
          case "escape":
            d = zf(a[1], b, c);
            if (pf && Array.isArray(a[1]) && a[1][0] === "macro" && pf.Xm(a))
              return pf.sn(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Re[a[u]] && (d = Re[a[u]](d));
            return d;
          case "tag":
            var v = a[1];
            if (!lf[v])
              throw Error("Unable to resolve tag reference " + v + ".");
            return { uk: a[2], index: v };
          case "zb":
            var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            t[Ke.ra] = a[1];
            var w = wf(t, b, c),
              x = !!a[4];
            return x || w !== 2 ? x !== (w === 1) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Af = function (a, b) {
      var c = a[Ke.ra],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = nf[c],
        f =
          b &&
          b.type === 2 &&
          (d == null ? void 0 : d.reportMacroDiscrepancy) &&
          e &&
          tf.indexOf(c) !== -1,
        g = {},
        k = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          tb(m, "vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (k[m.substring(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (b.name == null) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (q == null) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = gf[q];
                  break;
                case 1:
                  r = lf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var u = r && r[Ke.yh];
              n = u ? String(u) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var v, t, w;
      if (f && uf.indexOf(c) === -1) {
        uf.push(c);
        var x = ob();
        v = e(g);
        var y = ob() - x,
          A = ob();
        t = ff(c, k, b);
        w = y - (ob() - A);
      } else if ((e && (v = e(g)), !e || f)) t = ff(c, k, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Tc(v)
          ? (Array.isArray(v)
              ? Array.isArray(t)
              : Rc(v)
              ? Rc(t)
              : typeof v === "function"
              ? typeof t === "function"
              : v === t) || d.reportMacroDiscrepancy(d.id, c)
          : v !== t && d.reportMacroDiscrepancy(d.id, c),
        w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? v : t;
    };
  var Bf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.permissionId = a;
    this.parameters = b;
    this.name = "PermissionError";
  };
  ra(Bf, Error);
  Bf.prototype.getMessage = function () {
    return this.message;
  };
  function Cf(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Cf(a[c], b[c]);
    }
  }
  var Df = function (a, b) {
    var c;
    c = Error.call(
      this,
      "Wrapped error for Dust debugging. Original error message: " + a.message
    );
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.nn = a;
    this.j = [];
    this.C = b;
  };
  ra(Df, Error);
  function Ef() {
    return function (a, b) {
      a instanceof Df || (a = new Df(a, Ff));
      b && a instanceof Df && a.j.push(b);
      throw a;
    };
  }
  function Ff(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; b > 0; b--) ab(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  function Gf(a) {
    function b(r) {
      for (var u = 0; u < r.length; u++) d[r[u]] = !0;
    }
    for (var c = [], d = [], e = Hf(a), f = 0; f < jf.length; f++) {
      var g = jf[f],
        k = If(g, e);
      if (k) {
        for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
        b(g.block || []);
      } else k === null && b(g.block || []);
    }
    for (var p = [], q = 0; q < lf.length; q++) c[q] && !d[q] && (p[q] = !0);
    return p;
  }
  function If(a, b) {
    for (var c = a["if"] || [], d = 0; d < c.length; d++) {
      var e = b(c[d]);
      if (e === 0) return !1;
      if (e === 2) return null;
    }
    for (var f = a.unless || [], g = 0; g < f.length; g++) {
      var k = b(f[g]);
      if (k === 2) return null;
      if (k === 1) return !1;
    }
    return !0;
  }
  function Hf(a) {
    var b = [];
    return function (c) {
      b[c] === void 0 && (b[c] = wf(kf[c], a));
      return b[c];
    };
  }
  function Jf(a, b) {
    b[Ke.Ji] &&
      typeof a === "string" &&
      (a = b[Ke.Ji] === 1 ? a.toLowerCase() : a.toUpperCase());
    b.hasOwnProperty(Ke.Li) && a === null && (a = b[Ke.Li]);
    b.hasOwnProperty(Ke.Ni) && a === void 0 && (a = b[Ke.Ni]);
    b.hasOwnProperty(Ke.Mi) && a === !0 && (a = b[Ke.Mi]);
    b.hasOwnProperty(Ke.Ki) && a === !1 && (a = b[Ke.Ki]);
    return a;
  }
  var Kf = function () {
      this.j = {};
    },
    Mf = function (a, b) {
      var c = Lf.j,
        d;
      (d = c.j)[a] != null || (d[a] = []);
      c.j[a].push(function () {
        return b.apply(null, ta(ya.apply(0, arguments)));
      });
    };
  function Nf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (k) {
          g =
            typeof k === "string"
              ? g + (": " + k)
              : k instanceof Error
              ? g + (": " + k.message)
              : g + ".";
        }
        if (!f) throw new Bf(c, d, g);
      }
  }
  function Of(a, b, c) {
    return function (d) {
      if (d) {
        var e = a.j[d],
          f = a.j.all;
        if (e || f) {
          var g = c.apply(void 0, [d].concat(ta(ya.apply(1, arguments))));
          Nf(e, b, d, g);
          Nf(f, b, d, g);
        }
      }
    };
  }
  var Sf = function () {
      var a = data.permissions || {},
        b = Pf.ctid,
        c = this;
      this.C = {};
      this.j = new Kf();
      var d = {},
        e = {},
        f = Of(this.j, b, function (g) {
          return g && d[g]
            ? d[g].apply(void 0, [g].concat(ta(ya.apply(1, arguments))))
            : {};
        });
      hb(a, function (g, k) {
        function m(p) {
          var q = ya.apply(1, arguments);
          if (!n[p])
            throw Qf(
              p,
              {},
              "The requested additional permission " + p + " is not configured."
            );
          f.apply(null, [p].concat(ta(q)));
        }
        var n = {};
        hb(k, function (p, q) {
          var r = Rf(p, q);
          n[p] = r.assert;
          d[p] || (d[p] = r.M);
          r.pk && !e[p] && (e[p] = r.pk);
        });
        c.C[g] = function (p, q) {
          var r = n[p];
          if (!r)
            throw Qf(
              p,
              {},
              "The requested permission " + p + " is not configured."
            );
          var u = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, u);
          f.apply(void 0, u);
          var v = e[p];
          v && v.apply(null, [m].concat(ta(u.slice(1))));
        };
      });
    },
    Tf = function (a) {
      return Lf.C[a] || function () {};
    };
  function Rf(a, b) {
    var c = vf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Qf;
    try {
      return Af(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Bf(e, {}, "Permission " + e + " is unknown.");
        },
        M: function () {
          throw new Bf(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function Qf(a, b, c) {
    return new Bf(a, b, c);
  }
  var Uf = !1;
  var Vf = {};
  Vf.Uk = kb("");
  Vf.qm = kb("");
  var ag = {},
    bg =
      ((ag.uaa = !0),
      (ag.uab = !0),
      (ag.uafvl = !0),
      (ag.uamb = !0),
      (ag.uam = !0),
      (ag.uap = !0),
      (ag.uapv = !0),
      (ag.uaw = !0),
      ag);
  var jg = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!hg.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = f !== -1 && f === e.length - 2,
          k = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (d.length === 0) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!ig.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || k.length > d.length || (!g && d.length !== e.length)
            ? 0
            : g
            ? tb(d, k) && (d === k || d.charAt(k.length) === ".")
            : d === k
        )
          return !0;
      }
      return !1;
    },
    ig = /^[a-z$_][\w$]*$/i,
    hg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
  var kg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function lg(a, b) {
    var c = String(a),
      d = String(b),
      e = c.length - d.length;
    return e >= 0 && c.indexOf(d, e) === e;
  }
  var mg = new gb();
  function ng(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + String(d),
        f = mg.get(e);
      f || ((f = new RegExp(b, d)), mg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function og(a, b) {
    return String(a).indexOf(String(b)) >= 0;
  }
  function pg(a, b) {
    return String(a) === String(b);
  }
  function qg(a, b) {
    return Number(a) >= Number(b);
  }
  function rg(a, b) {
    return Number(a) <= Number(b);
  }
  function sg(a, b) {
    return Number(a) > Number(b);
  }
  function tg(a, b) {
    return Number(a) < Number(b);
  }
  function ug(a, b) {
    return tb(String(a), String(b));
  }
  var Bg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Cg = { Fn: "function", PixieMap: "Object", List: "Array" };
  function Dg(a, b) {
    for (var c = ["input:!*"], d = 0; d < c.length; d++) {
      var e = Bg.exec(c[d]);
      if (!e) throw Error("Internal Error in " + a);
      var f = e[1],
        g = e[2] === "!",
        k = e[3],
        m = b[d];
      if (m == null) {
        if (g)
          throw Error(
            "Error in " + a + ". Required argument " + f + " not supplied."
          );
      } else if (k !== "*") {
        var n = typeof m;
        m instanceof Zc
          ? (n = "Fn")
          : m instanceof Vc
          ? (n = "List")
          : m instanceof Ma
          ? (n = "PixieMap")
          : m instanceof fd
          ? (n = "PixiePromise")
          : m instanceof dd && (n = "OpaqueValue");
        if (n !== k)
          throw Error(
            "Error in " +
              a +
              ". Argument " +
              f +
              " has type " +
              ((Cg[n] || n) + ", which does not match required type ") +
              ((Cg[k] || k) + ".")
          );
      }
    }
  }
  function I(a, b, c) {
    for (var d = [], e = l(c), f = e.next(); !f.done; f = e.next()) {
      var g = f.value;
      g instanceof Zc
        ? d.push("function")
        : g instanceof Vc
        ? d.push("Array")
        : g instanceof Ma
        ? d.push("Object")
        : g instanceof fd
        ? d.push("Promise")
        : g instanceof dd
        ? d.push("OpaqueValue")
        : d.push(typeof g);
    }
    return Error(
      "Argument error in " +
        a +
        ". Expected argument types [" +
        (b.join(",") + "], but received [") +
        (d.join(",") + "].")
    );
  }
  function Eg(a) {
    return a instanceof Ma;
  }
  function Fg(a) {
    return Eg(a) || a === null || Gg(a);
  }
  function Hg(a) {
    return a instanceof Zc;
  }
  function Ig(a) {
    return Hg(a) || a === null || Gg(a);
  }
  function Jg(a) {
    return a instanceof Vc;
  }
  function Kg(a) {
    return a instanceof dd;
  }
  function L(a) {
    return typeof a === "string";
  }
  function Lg(a) {
    return L(a) || a === null || Gg(a);
  }
  function Mg(a) {
    return typeof a === "boolean";
  }
  function Ng(a) {
    return Mg(a) || a === null || Gg(a);
  }
  function Og(a) {
    return typeof a === "number";
  }
  function Gg(a) {
    return a === void 0;
  }
  function Pg(a) {
    return "" + a;
  }
  function Qg(a, b) {
    var c = [];
    return c;
  }
  function Rg(a, b) {
    var c = new Zc(a, function () {
      for (
        var d = Array.prototype.slice.call(arguments, 0), e = 0;
        e < d.length;
        e++
      )
        d[e] = this.evaluate(d[e]);
      try {
        return b.apply(this, d);
      } catch (g) {
        if (hd()) throw new jd(g.message);
        throw g;
      }
    });
    c.Ia();
    return c;
  }
  function Sg(a, b) {
    var c = new Ma(),
      d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        Za(e)
          ? c.set(d, Rg(a + "_" + d, e))
          : Rc(e)
          ? c.set(d, Sg(a + "_" + d, e))
          : (ab(e) || $a(e) || typeof e === "boolean") && c.set(d, e);
      }
    c.Ia();
    return c;
  }
  function Tg(a, b) {
    if (!L(a)) throw I(this.getName(), ["string"], arguments);
    if (!Lg(b)) throw I(this.getName(), ["string", "undefined"], arguments);
    var c = {},
      d = new Ma();
    return (d = Sg("AssertApiSubject", c));
  }
  function Ug(a, b) {
    if (!Lg(b)) throw I(this.getName(), ["string", "undefined"], arguments);
    if (a instanceof fd)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new Ma();
    return (d = Sg("AssertThatSubject", c));
  }
  function Vg(a) {
    return function () {
      for (
        var b = ya.apply(0, arguments), c = [], d = this.D, e = 0;
        e < b.length;
        ++e
      )
        c.push(G(b[e], d));
      return gd(a.apply(null, c));
    };
  }
  function Wg() {
    for (var a = Math, b = Xg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Vg(a[e].bind(a)));
    }
    return c;
  }
  function Yg(a) {
    var b;
    return b;
  }
  function Zg(a) {
    var b;
    return b;
  }
  function $g(a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  }
  function ah(a) {
    try {
      return encodeURIComponent(String(a));
    } catch (b) {}
  }
  function fh(a) {
    if (!Lg(a)) throw I(this.getName(), ["string|undefined"], arguments);
  }
  function gh(a, b) {
    if (!Og(a) || !Og(b))
      throw I(this.getName(), ["number", "number"], arguments);
    return eb(a, b);
  }
  function hh() {
    return new Date().getTime();
  }
  function ih(a) {
    if (a === null) return "null";
    if (a instanceof Vc) return "array";
    if (a instanceof Zc) return "function";
    if (a instanceof dd) {
      var b = a.getValue();
      if (
        (b == null ? void 0 : b.constructor) === void 0 ||
        b.constructor.name === void 0
      ) {
        var c = String(b);
        return c.substring(8, c.length - 1);
      }
      return String(b.constructor.name);
    }
    return typeof a;
  }
  function jh(a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Uf || Vf.Uk) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return gd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(G(c));
      }),
      publicName: "JSON",
    };
  }
  function kh(a) {
    return jb(G(a, this.D));
  }
  function lh(a) {
    return Number(G(a, this.D));
  }
  function mh(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a.toString();
  }
  function nh(a, b, c) {
    var d = null,
      e = !1;
    if (!Jg(a) || !L(b) || !L(c))
      throw I(this.getName(), ["Array", "string", "string"], arguments);
    d = new Ma();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof Ma &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  }
  var Xg = "floor ceil round max min abs pow sqrt".split(" ");
  function oh() {
    var a = {};
    return {
      Bm: function (b) {
        return a.hasOwnProperty(b) ? a[b] : void 0;
      },
      Qk: function (b, c) {
        a[b] = c;
      },
      reset: function () {
        a = {};
      },
    };
  }
  function ph(a, b) {
    return function () {
      return Zc.prototype.invoke.apply(
        a,
        [b].concat(ta(ya.apply(0, arguments)))
      );
    };
  }
  function qh(a, b) {
    if (!L(a)) throw I(this.getName(), ["string", "any"], arguments);
  }
  function rh(a, b) {
    if (!L(a) || !Eg(b))
      throw I(this.getName(), ["string", "PixieMap"], arguments);
  }
  var sh = {};
  var th = function (a) {
    var b = new Ma();
    if (a instanceof Vc)
      for (var c = a.la(), d = 0; d < c.length; d++) {
        var e = c[d];
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof Zc)
      for (var f = a.la(), g = 0; g < f.length; g++) {
        var k = f[g];
        b.set(k, a.get(k));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  sh.keys = function (a) {
    Dg(this.getName(), arguments);
    if (a instanceof Vc || a instanceof Zc || typeof a === "string") a = th(a);
    if (a instanceof Ma || a instanceof fd) return new Vc(a.la());
    return new Vc();
  };
  sh.values = function (a) {
    Dg(this.getName(), arguments);
    if (a instanceof Vc || a instanceof Zc || typeof a === "string") a = th(a);
    if (a instanceof Ma || a instanceof fd) return new Vc(a.Yb());
    return new Vc();
  };
  sh.entries = function (a) {
    Dg(this.getName(), arguments);
    if (a instanceof Vc || a instanceof Zc || typeof a === "string") a = th(a);
    if (a instanceof Ma || a instanceof fd)
      return new Vc(
        a.Ib().map(function (b) {
          return new Vc(b);
        })
      );
    return new Vc();
  };
  sh.freeze = function (a) {
    (a instanceof Ma ||
      a instanceof fd ||
      a instanceof Vc ||
      a instanceof Zc) &&
      a.Ia();
    return a;
  };
  sh.delete = function (a, b) {
    if (a instanceof Ma && !a.zc()) return a.remove(b), !0;
    return !1;
  };
  function M(a, b) {
    var c = ya.apply(2, arguments),
      d = a.D.j;
    if (!d) throw Error("Missing program state.");
    if (d.yn) {
      try {
        d.qk.apply(null, [b].concat(ta(c)));
      } catch (e) {
        throw (Va("TAGGING", 21), e);
      }
      return;
    }
    d.qk.apply(null, [b].concat(ta(c)));
  }
  var uh = function () {
    this.C = {};
    this.j = {};
    this.H = !0;
  };
  uh.prototype.get = function (a, b) {
    var c = this.contains(a) ? this.C[a] : void 0;
    return c;
  };
  uh.prototype.contains = function (a) {
    return this.C.hasOwnProperty(a);
  };
  uh.prototype.add = function (a, b, c) {
    if (this.contains(a))
      throw Error(
        "Attempting to add a function which already exists: " + a + "."
      );
    if (this.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.C[a] = c ? void 0 : Za(b) ? Rg(a, b) : Sg(a, b);
  };
  function vh(a, b) {
    var c = void 0;
    return c;
  }
  function wh(a, b) {}
  wh.F = "internal.safeInvoke";
  function xh() {
    var a = {};
    return a;
  }
  var P = {
      g: {
        wa: "ad_personalization",
        N: "ad_storage",
        O: "ad_user_data",
        T: "analytics_storage",
        tb: "region",
        fc: "consent_updated",
        be: "wait_for_update",
        Pi: "app_remove",
        Qi: "app_store_refund",
        Ri: "app_store_subscription_cancel",
        Si: "app_store_subscription_convert",
        Ti: "app_store_subscription_renew",
        ml: "consent_update",
        Dg: "add_payment_info",
        Eg: "add_shipping_info",
        Bc: "add_to_cart",
        Cc: "remove_from_cart",
        Fg: "view_cart",
        hc: "begin_checkout",
        Dc: "select_item",
        vb: "view_item_list",
        Pb: "select_promotion",
        wb: "view_promotion",
        La: "purchase",
        Ec: "refund",
        Pa: "view_item",
        Gg: "add_to_wishlist",
        nl: "exception",
        Ui: "first_open",
        Vi: "first_visit",
        da: "gtag.config",
        ab: "gtag.get",
        Wi: "in_app_purchase",
        ic: "page_view",
        ol: "screen_view",
        Xi: "session_start",
        Un: "source_update",
        pl: "timing_complete",
        ql: "track_social",
        dd: "user_engagement",
        rl: "user_id_update",
        ee: "gclid_link_decoration_source",
        fe: "gclid_storage_source",
        xb: "gclgb",
        cb: "gclid",
        Yi: "gclid_len",
        ed: "gclgs",
        fd: "gcllp",
        gd: "gclst",
        ka: "ads_data_redaction",
        Zi: "gad_source",
        aj: "gad_source_src",
        bj: "ndclid",
        cj: "ngad_source",
        dj: "ngbraid",
        ej: "ngclid",
        fj: "ngclsrc",
        he: "gclid_url",
        gj: "gclsrc",
        Hg: "gbraid",
        Ef: "wbraid",
        na: "allow_ad_personalization_signals",
        Ff: "allow_custom_scripts",
        ie: "allow_direct_google_requests",
        Gf: "allow_display_features",
        je: "allow_enhanced_conversions",
        jb: "allow_google_signals",
        Fa: "allow_interest_groups",
        sl: "app_id",
        tl: "app_installer_id",
        vl: "app_name",
        wl: "app_version",
        yb: "auid",
        ij: "auto_detection_enabled",
        jc: "aw_remarketing",
        Hf: "aw_remarketing_only",
        ke: "discount",
        me: "aw_feed_country",
        ne: "aw_feed_language",
        fa: "items",
        oe: "aw_merchant_id",
        Ig: "aw_basket_type",
        hd: "campaign_content",
        jd: "campaign_id",
        kd: "campaign_medium",
        ld: "campaign_name",
        md: "campaign",
        nd: "campaign_source",
        od: "campaign_term",
        kb: "client_id",
        jj: "rnd",
        Jg: "consent_update_type",
        kj: "content_group",
        lj: "content_type",
        lb: "conversion_cookie_prefix",
        pd: "conversion_id",
        xa: "conversion_linker",
        mj: "conversion_linker_disabled",
        kc: "conversion_api",
        If: "cookie_deprecation",
        Qa: "cookie_domain",
        Ra: "cookie_expires",
        eb: "cookie_flags",
        Fc: "cookie_name",
        zb: "cookie_path",
        Ma: "cookie_prefix",
        mc: "cookie_update",
        Gc: "country",
        Ba: "currency",
        Kg: "customer_buyer_stage",
        pe: "customer_lifetime_value",
        Lg: "customer_loyalty",
        Mg: "customer_ltv_bucket",
        rd: "custom_map",
        Ng: "gcldc",
        qe: "dclid",
        Og: "debug_mode",
        ia: "developer_id",
        nj: "disable_merchant_reported_purchases",
        sd: "dc_custom_params",
        oj: "dc_natural_search",
        Pg: "dynamic_event_settings",
        Qg: "affiliation",
        se: "checkout_option",
        Jf: "checkout_step",
        Rg: "coupon",
        ud: "item_list_name",
        Kf: "list_name",
        pj: "promotions",
        vd: "shipping",
        Lf: "tax",
        te: "engagement_time_msec",
        ue: "enhanced_client_id",
        ve: "enhanced_conversions",
        Sg: "enhanced_conversions_automatic_settings",
        we: "estimated_delivery_date",
        Mf: "euid_logged_in_state",
        wd: "event_callback",
        xl: "event_category",
        ob: "event_developer_id_string",
        yl: "event_label",
        Hc: "event",
        xe: "event_settings",
        ye: "event_timeout",
        zl: "description",
        Al: "fatal",
        qj: "experiments",
        Nf: "firebase_id",
        Ic: "first_party_collection",
        ze: "_x_20",
        Ab: "_x_19",
        rj: "fledge_drop_reason",
        Tg: "fledge",
        Ug: "flight_error_code",
        Vg: "flight_error_message",
        sj: "fl_activity_category",
        tj: "fl_activity_group",
        Wg: "fl_advertiser_id",
        uj: "fl_ar_dedupe",
        Xg: "match_id",
        vj: "fl_random_number",
        wj: "tran",
        xj: "u",
        Ae: "gac_gclid",
        Jc: "gac_wbraid",
        Yg: "gac_wbraid_multiple_conversions",
        Zg: "ga_restrict_domain",
        ah: "ga_temp_client_id",
        Bl: "ga_temp_ecid",
        nc: "gdpr_applies",
        bh: "geo_granularity",
        Qb: "value_callback",
        Bb: "value_key",
        Kc: "_google_ng",
        Lc: "google_signals",
        eh: "google_tld",
        Be: "groups",
        fh: "gsa_experiment_id",
        yj: "gtm_up",
        Rb: "iframe_state",
        xd: "ignore_referrer",
        Of: "internal_traffic_results",
        oc: "is_legacy_converted",
        Sb: "is_legacy_loaded",
        Ce: "is_passthrough",
        yd: "_lps",
        Sa: "language",
        De: "legacy_developer_id_string",
        ya: "linker",
        Mc: "accept_incoming",
        Cb: "decorate_forms",
        W: "domains",
        Tb: "url_position",
        Pf: "merchant_feed_label",
        Qf: "merchant_feed_language",
        Rf: "merchant_id",
        gh: "method",
        Cl: "name",
        zj: "navigation_type",
        zd: "new_customer",
        hh: "non_interaction",
        Aj: "optimize_id",
        ih: "page_hostname",
        Bd: "page_path",
        Ga: "page_referrer",
        fb: "page_title",
        jh: "passengers",
        kh: "phone_conversion_callback",
        Bj: "phone_conversion_country_code",
        lh: "phone_conversion_css_class",
        Cj: "phone_conversion_ids",
        mh: "phone_conversion_number",
        nh: "phone_conversion_options",
        Dl: "_platinum_request_status",
        oh: "_protected_audience_enabled",
        Cd: "quantity",
        Ee: "redact_device_info",
        Sf: "referral_exclusion_definition",
        Vn: "_request_start_time",
        Db: "restricted_data_processing",
        Dj: "retoken",
        El: "sample_rate",
        Tf: "screen_name",
        Ub: "screen_resolution",
        Ej: "_script_source",
        Fj: "search_term",
        Na: "send_page_view",
        qc: "send_to",
        Dd: "server_container_url",
        Ed: "session_duration",
        Fe: "session_engaged",
        Uf: "session_engaged_time",
        Eb: "session_id",
        Ge: "session_number",
        Vf: "_shared_user_id",
        Fd: "delivery_postal_code",
        Wn: "_tag_firing_delay",
        Xn: "_tag_firing_time",
        Fl: "temporary_client_id",
        Wf: "topmost_url",
        Gj: "tracking_id",
        Xf: "traffic_type",
        Ca: "transaction_id",
        Vb: "transport_url",
        ph: "trip_type",
        sc: "update",
        hb: "url_passthrough",
        Hj: "uptgs",
        Yf: "_user_agent_architecture",
        Zf: "_user_agent_bitness",
        cg: "_user_agent_full_version_list",
        dg: "_user_agent_mobile",
        eg: "_user_agent_model",
        fg: "_user_agent_platform",
        gg: "_user_agent_platform_version",
        hg: "_user_agent_wow64",
        Da: "user_data",
        qh: "user_data_auto_latency",
        rh: "user_data_auto_meta",
        sh: "user_data_auto_multi",
        th: "user_data_auto_selectors",
        uh: "user_data_auto_status",
        Gd: "user_data_mode",
        He: "user_data_settings",
        Ea: "user_id",
        qb: "user_properties",
        Ij: "_user_region",
        Hd: "us_privacy_string",
        oa: "value",
        vh: "wbraid_multiple_conversions",
        Id: "_fpm_parameters",
        Pj: "_host_name",
        Qj: "_in_page_command",
        Rj: "_ip_override",
        Sj: "_is_passthrough_cid",
        Wb: "non_personalized_ads",
        Ne: "_sst_parameters",
        nb: "conversion_label",
        qa: "page_location",
        pb: "global_developer_id_string",
        rc: "tc_privacy_string",
      },
    },
    yh = {},
    zh = Object.freeze(
      ((yh[P.g.na] = 1),
      (yh[P.g.Gf] = 1),
      (yh[P.g.je] = 1),
      (yh[P.g.jb] = 1),
      (yh[P.g.fa] = 1),
      (yh[P.g.Qa] = 1),
      (yh[P.g.Ra] = 1),
      (yh[P.g.eb] = 1),
      (yh[P.g.Fc] = 1),
      (yh[P.g.zb] = 1),
      (yh[P.g.Ma] = 1),
      (yh[P.g.mc] = 1),
      (yh[P.g.rd] = 1),
      (yh[P.g.ia] = 1),
      (yh[P.g.Pg] = 1),
      (yh[P.g.wd] = 1),
      (yh[P.g.xe] = 1),
      (yh[P.g.ye] = 1),
      (yh[P.g.Ic] = 1),
      (yh[P.g.Zg] = 1),
      (yh[P.g.Lc] = 1),
      (yh[P.g.eh] = 1),
      (yh[P.g.Be] = 1),
      (yh[P.g.Of] = 1),
      (yh[P.g.oc] = 1),
      (yh[P.g.Sb] = 1),
      (yh[P.g.ya] = 1),
      (yh[P.g.Sf] = 1),
      (yh[P.g.Db] = 1),
      (yh[P.g.Na] = 1),
      (yh[P.g.qc] = 1),
      (yh[P.g.Dd] = 1),
      (yh[P.g.Ed] = 1),
      (yh[P.g.Uf] = 1),
      (yh[P.g.Fd] = 1),
      (yh[P.g.Vb] = 1),
      (yh[P.g.sc] = 1),
      (yh[P.g.He] = 1),
      (yh[P.g.qb] = 1),
      (yh[P.g.Ne] = 1),
      yh)
    );
  Object.freeze([
    P.g.qa,
    P.g.Ga,
    P.g.fb,
    P.g.Sa,
    P.g.Tf,
    P.g.Ea,
    P.g.Nf,
    P.g.kj,
  ]);
  var Ah = {},
    Bh = Object.freeze(
      ((Ah[P.g.Pi] = 1),
      (Ah[P.g.Qi] = 1),
      (Ah[P.g.Ri] = 1),
      (Ah[P.g.Si] = 1),
      (Ah[P.g.Ti] = 1),
      (Ah[P.g.Ui] = 1),
      (Ah[P.g.Vi] = 1),
      (Ah[P.g.Wi] = 1),
      (Ah[P.g.Xi] = 1),
      (Ah[P.g.dd] = 1),
      Ah)
    ),
    Ch = {},
    Dh = Object.freeze(
      ((Ch[P.g.Dg] = 1),
      (Ch[P.g.Eg] = 1),
      (Ch[P.g.Bc] = 1),
      (Ch[P.g.Cc] = 1),
      (Ch[P.g.Fg] = 1),
      (Ch[P.g.hc] = 1),
      (Ch[P.g.Dc] = 1),
      (Ch[P.g.vb] = 1),
      (Ch[P.g.Pb] = 1),
      (Ch[P.g.wb] = 1),
      (Ch[P.g.La] = 1),
      (Ch[P.g.Ec] = 1),
      (Ch[P.g.Pa] = 1),
      (Ch[P.g.Gg] = 1),
      Ch)
    ),
    Eh = Object.freeze([
      P.g.na,
      P.g.ie,
      P.g.jb,
      P.g.mc,
      P.g.Ic,
      P.g.xd,
      P.g.Na,
      P.g.sc,
    ]),
    Fh = Object.freeze([].concat(ta(Eh))),
    Gh = Object.freeze([P.g.Ra, P.g.ye, P.g.Ed, P.g.Uf, P.g.te]),
    Hh = Object.freeze([].concat(ta(Gh))),
    Ih = {},
    Jh =
      ((Ih[P.g.N] = "1"),
      (Ih[P.g.T] = "2"),
      (Ih[P.g.O] = "3"),
      (Ih[P.g.wa] = "4"),
      Ih),
    Kh = {},
    Lh = Object.freeze(
      ((Kh[P.g.ee] = 1),
      (Kh[P.g.fe] = 1),
      (Kh[P.g.na] = 1),
      (Kh[P.g.ie] = 1),
      (Kh[P.g.je] = 1),
      (Kh[P.g.Fa] = 1),
      (Kh[P.g.jc] = 1),
      (Kh[P.g.Hf] = 1),
      (Kh[P.g.ke] = 1),
      (Kh[P.g.me] = 1),
      (Kh[P.g.ne] = 1),
      (Kh[P.g.fa] = 1),
      (Kh[P.g.oe] = 1),
      (Kh[P.g.lb] = 1),
      (Kh[P.g.xa] = 1),
      (Kh[P.g.Qa] = 1),
      (Kh[P.g.Ra] = 1),
      (Kh[P.g.eb] = 1),
      (Kh[P.g.Ma] = 1),
      (Kh[P.g.Ba] = 1),
      (Kh[P.g.Kg] = 1),
      (Kh[P.g.pe] = 1),
      (Kh[P.g.Lg] = 1),
      (Kh[P.g.Mg] = 1),
      (Kh[P.g.ia] = 1),
      (Kh[P.g.nj] = 1),
      (Kh[P.g.ve] = 1),
      (Kh[P.g.we] = 1),
      (Kh[P.g.Nf] = 1),
      (Kh[P.g.Ic] = 1),
      (Kh[P.g.oc] = 1),
      (Kh[P.g.Sb] = 1),
      (Kh[P.g.Sa] = 1),
      (Kh[P.g.Pf] = 1),
      (Kh[P.g.Qf] = 1),
      (Kh[P.g.Rf] = 1),
      (Kh[P.g.zd] = 1),
      (Kh[P.g.qa] = 1),
      (Kh[P.g.Ga] = 1),
      (Kh[P.g.kh] = 1),
      (Kh[P.g.lh] = 1),
      (Kh[P.g.mh] = 1),
      (Kh[P.g.nh] = 1),
      (Kh[P.g.Db] = 1),
      (Kh[P.g.Na] = 1),
      (Kh[P.g.qc] = 1),
      (Kh[P.g.Dd] = 1),
      (Kh[P.g.Fd] = 1),
      (Kh[P.g.Ca] = 1),
      (Kh[P.g.Vb] = 1),
      (Kh[P.g.sc] = 1),
      (Kh[P.g.hb] = 1),
      (Kh[P.g.Da] = 1),
      (Kh[P.g.Ea] = 1),
      (Kh[P.g.oa] = 1),
      Kh)
    ),
    Mh = {},
    Nh = Object.freeze(
      ((Mh.search = "s"),
      (Mh.youtube = "y"),
      (Mh.playstore = "p"),
      (Mh.shopping = "h"),
      (Mh.ads = "a"),
      (Mh.maps = "m"),
      Mh)
    );
  Object.freeze(P.g);
  var Q = {},
    Oh =
      ((Q[P.g.fc] = "gcu"),
      (Q[P.g.xb] = "gclgb"),
      (Q[P.g.cb] = "gclaw"),
      (Q[P.g.Yi] = "gclid_len"),
      (Q[P.g.ed] = "gclgs"),
      (Q[P.g.fd] = "gcllp"),
      (Q[P.g.gd] = "gclst"),
      (Q[P.g.bj] = "ndclid"),
      (Q[P.g.cj] = "ngad_source"),
      (Q[P.g.dj] = "ngbraid"),
      (Q[P.g.ej] = "ngclid"),
      (Q[P.g.fj] = "ngclsrc"),
      (Q[P.g.yb] = "auid"),
      (Q[P.g.ke] = "dscnt"),
      (Q[P.g.me] = "fcntr"),
      (Q[P.g.ne] = "flng"),
      (Q[P.g.oe] = "mid"),
      (Q[P.g.Ig] = "bttype"),
      (Q[P.g.kb] = "gacid"),
      (Q[P.g.nb] = "label"),
      (Q[P.g.kc] = "capi"),
      (Q[P.g.If] = "pscdl"),
      (Q[P.g.Ba] = "currency_code"),
      (Q[P.g.Kg] = "clobs"),
      (Q[P.g.pe] = "vdltv"),
      (Q[P.g.Lg] = "clolo"),
      (Q[P.g.Mg] = "clolb"),
      (Q[P.g.Og] = "_dbg"),
      (Q[P.g.we] = "oedeld"),
      (Q[P.g.ob] = "edid"),
      (Q[P.g.rj] = "fdr"),
      (Q[P.g.Tg] = "fledge"),
      (Q[P.g.Ae] = "gac"),
      (Q[P.g.Jc] = "gacgb"),
      (Q[P.g.Yg] = "gacmcov"),
      (Q[P.g.nc] = "gdpr"),
      (Q[P.g.pb] = "gdid"),
      (Q[P.g.Kc] = "_ng"),
      (Q[P.g.fh] = "gsaexp"),
      (Q[P.g.Rb] = "frm"),
      (Q[P.g.Ce] = "gtm_up"),
      (Q[P.g.yd] = "lps"),
      (Q[P.g.De] = "did"),
      (Q[P.g.Pf] = "fcntr"),
      (Q[P.g.Qf] = "flng"),
      (Q[P.g.Rf] = "mid"),
      (Q[P.g.zd] = void 0),
      (Q[P.g.fb] = "tiba"),
      (Q[P.g.Db] = "rdp"),
      (Q[P.g.Eb] = "ecsid"),
      (Q[P.g.Vf] = "ga_uid"),
      (Q[P.g.Fd] = "delopc"),
      (Q[P.g.rc] = "gdpr_consent"),
      (Q[P.g.Ca] = "oid"),
      (Q[P.g.Hj] = "uptgs"),
      (Q[P.g.Yf] = "uaa"),
      (Q[P.g.Zf] = "uab"),
      (Q[P.g.cg] = "uafvl"),
      (Q[P.g.dg] = "uamb"),
      (Q[P.g.eg] = "uam"),
      (Q[P.g.fg] = "uap"),
      (Q[P.g.gg] = "uapv"),
      (Q[P.g.hg] = "uaw"),
      (Q[P.g.qh] = "ec_lat"),
      (Q[P.g.rh] = "ec_meta"),
      (Q[P.g.sh] = "ec_m"),
      (Q[P.g.th] = "ec_sel"),
      (Q[P.g.uh] = "ec_s"),
      (Q[P.g.Gd] = "ec_mode"),
      (Q[P.g.Ea] = "userId"),
      (Q[P.g.Hd] = "us_privacy"),
      (Q[P.g.oa] = "value"),
      (Q[P.g.vh] = "mcov"),
      (Q[P.g.Pj] = "hn"),
      (Q[P.g.Qj] = "gtm_ee"),
      (Q[P.g.Wb] = "npa"),
      (Q[P.g.pd] = null),
      (Q[P.g.Ub] = null),
      (Q[P.g.Sa] = null),
      (Q[P.g.fa] = null),
      (Q[P.g.qa] = null),
      (Q[P.g.Ga] = null),
      (Q[P.g.Wf] = null),
      (Q[P.g.Id] = null),
      (Q[P.g.ee] = null),
      (Q[P.g.fe] = null),
      Q);
  function Ph(a, b) {
    if (a) {
      var c = a.split("x");
      c.length === 2 && (Qh(b, "u_w", c[0]), Qh(b, "u_h", c[1]));
    }
  }
  function Rh(a, b) {
    a &&
      (a.length === 2
        ? Qh(b, "hl", a)
        : a.length === 5 &&
          (Qh(b, "hl", a.substring(0, 2)), Qh(b, "gl", a.substring(3, 5))));
  }
  function Sh(a) {
    var b = Th;
    b = b === void 0 ? Uh : b;
    var c;
    var d = b;
    if (a && a.length) {
      for (var e = [], f = 0; f < a.length; ++f) {
        var g = a[f];
        g &&
          e.push({
            item_id: d(g),
            quantity: g.quantity,
            value: g.price,
            start_date: g.start_date,
            end_date: g.end_date,
          });
      }
      c = e;
    } else c = [];
    var k;
    var m = c;
    if (m) {
      for (var n = [], p = 0; p < m.length; p++) {
        var q = m[p],
          r = [];
        q &&
          (r.push(Vh(q.value)),
          r.push(Vh(q.quantity)),
          r.push(Vh(q.item_id)),
          r.push(Vh(q.start_date)),
          r.push(Vh(q.end_date)),
          n.push("(" + r.join("*") + ")"));
      }
      k = n.length > 0 ? n.join("") : "";
    } else k = "";
    return k;
  }
  function Uh(a) {
    return Wh(a.item_id, a.id, a.item_name);
  }
  function Wh() {
    for (
      var a = l(ya.apply(0, arguments)), b = a.next();
      !b.done;
      b = a.next()
    ) {
      var c = b.value;
      if (c !== null && c !== void 0) return c;
    }
  }
  function Xh(a) {
    if (a && a.length) {
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d && d.estimated_delivery_date
          ? b.push("" + d.estimated_delivery_date)
          : b.push("");
      }
      return b.join(",");
    }
  }
  function Qh(a, b, c) {
    c === void 0 || c === null || (c === "" && !bg[b]) || (a[b] = c);
  }
  function Vh(a) {
    return typeof a !== "number" && typeof a !== "string" ? "" : a.toString();
  }
  function Yh(a) {
    return Zh ? B.querySelectorAll(a) : null;
  }
  function $h(a, b) {
    if (!Zh) return null;
    if (Element.prototype.closest)
      try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
      d = a;
    if (!B.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d;
      } catch (e) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while (d !== null && d.nodeType === 1);
    return null;
  }
  var ai = !1;
  if (B.querySelectorAll)
    try {
      var bi = B.querySelectorAll(":root");
      bi && bi.length == 1 && bi[0] == B.documentElement && (ai = !0);
    } catch (a) {}
  var Zh = ai;
  function gi(a) {
    switch (a) {
      case 0:
        break;
      case 9:
        return "e4";
      case 6:
        return "e5";
      case 14:
        return "e6";
      default:
        return "e7";
    }
  }
  var hi = /^[0-9A-Fa-f]{64}$/;
  function ii(a) {
    try {
      return new TextEncoder().encode(a);
    } catch (e) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        d < 128
          ? b.push(d)
          : d < 2048
          ? b.push(192 | (d >> 6), 128 | (d & 63))
          : d < 55296 || d >= 57344
          ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
          : ((d = 65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))),
            b.push(
              240 | (d >> 18),
              128 | ((d >> 12) & 63),
              128 | ((d >> 6) & 63),
              128 | (d & 63)
            ));
      }
      return new Uint8Array(b);
    }
  }
  function ji(a) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    var b;
    if ((b = z.crypto) == null ? 0 : b.subtle) {
      if (hi.test(a)) return Promise.resolve(a);
      try {
        var c = ii(a);
        return z.crypto.subtle
          .digest("SHA-256", c)
          .then(function (d) {
            var e = Array.from(new Uint8Array(d))
              .map(function (f) {
                return String.fromCharCode(f);
              })
              .join("");
            return z
              .btoa(e)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          })
          .catch(function () {
            return "e2";
          });
      } catch (d) {
        return Promise.resolve("e2");
      }
    } else return Promise.resolve("e1");
  }
  function ki(a, b) {
    if (a === "") return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var li = [],
    mi = {};
  function ni(a) {
    return li[a] === void 0 ? !1 : li[a];
  }
  var oi = [];
  function pi(a) {
    switch (a) {
      case 0:
        return 0;
      case 50:
        return 10;
      case 51:
        return 11;
      case 52:
        return 1;
      case 53:
        return 2;
      case 54:
        return 7;
      case 78:
        return 3;
      case 107:
        return 4;
      case 109:
        return 5;
      case 127:
        return 9;
      case 128:
        return 6;
    }
  }
  function qi(a, b) {
    oi[a] = b;
    var c = pi(a);
    c !== void 0 && (li[c] = b);
  }
  function R(a) {
    qi(a, !0);
  }
  R(38);
  R(33);
  R(34);
  R(35);
  R(36);
  R(56);
  R(95);
  R(19);
  R(140);
  R(18);
  R(147);
  R(139);
  R(79);
  R(110);
  R(7);
  R(57);
  R(4);
  R(101);
  R(135);
  R(92);
  R(85);
  R(108);
  R(153);
  R(122);
  R(123);
  R(20);
  R(100);
  R(76);
  R(105);
  R(106);
  R(148);
  R(109);
  R(5);
  qi(23, !1), R(24);
  mi[1] = ki("1", 6e4);
  mi[3] = ki("10", 1);
  mi[2] = ki("", 50);
  R(28);
  R(13);
  R(84);
  R(103);
  R(137);
  R(114);
  R(136);
  var si = !1;
  R(115);
  R(71);
  R(151);
  R(128);
  R(118);
  R(27);
  R(74);
  R(127);
  R(87);
  R(91);
  R(104);
  R(62);

  R(90);
  R(126);
  R(88);
  R(30);
  R(58);
  R(22);
  R(59);
  R(15);
  R(144);
  R(75);
  R(145);
  R(132);
  R(132), R(134);

  R(99);
  R(89);
  R(14);
  function S(a) {
    return !!oi[a];
  }
  function ri(a, b) {
    for (var c = !1, d = !1, e = 0; c === d; )
      if (
        ((c = (((Math.random() * 4294967296) | 0) & 1) === 0),
        (d = (((Math.random() * 4294967296) | 0) & 1) === 0),
        e++,
        e > 30)
      )
        return;
    c ? R(b) : R(a);
  }
  var ti = {
      kl: "1000",
      Wl: "101509156~102067808~102081485~102123608~102482432~102539968~102556565~102558064~102587591~102605417",
    },
    ui = { om: Number(ti.kl) || 0, Pn: ti.Wl };
  function T(a) {
    Va("GTM", a);
  }
  var bj = {},
    cj = (z.google_tag_manager = z.google_tag_manager || {});
  bj.Ah = "5240";
  bj.Me = Number("0") || 0;
  bj.ub = "dataLayer";
  bj.Rn =
    "ChAIgPuWvQYQlujlqKShsMlFEiUAaazb7TSj22LJHWfeCc0aN7fe2HFZFn4H6+1/UG1+LfRHJpnwGgLvSg\x3d\x3d";
  var dj = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    ej = { __paused: 1, __tg: 1 },
    fj;
  for (fj in dj) dj.hasOwnProperty(fj) && (ej[fj] = 1);
  var gj = kb(""),
    hj = !1,
    ij,
    jj = !1;
  ij = jj;
  var kj,
    lj = !1;
  kj = lj;
  var mj,
    nj = !1;
  mj = nj;
  bj.Df = "www.googletagmanager.com";
  var oj = "" + bj.Df + (ij ? "/gtag/js" : "/gtm.js"),
    pj = null,
    qj = null,
    rj = {},
    sj = {};
  function tj() {
    var a = cj.sequence || 1;
    cj.sequence = a + 1;
    return a;
  }
  bj.il = "";
  var uj = "";
  bj.Bh = uj;
  var vj = function () {
      this.j = new Set();
    },
    xj = function () {
      return Array.from(wj.Fb.j).join("~");
    },
    wj = new (function () {
      this.Fb = new vj();
      this.C = !1;
      this.j = 0;
      this.Z = this.Ha = this.uc = this.K = "";
      this.P = this.H = !1;
    })();
  function yj() {
    var a = wj.K.length;
    return wj.K[a - 1] === "/" ? wj.K.substring(0, a - 1) : wj.K;
  }
  function zj() {
    return wj.C ? (S(82) ? wj.j === 0 : wj.j !== 1) : !1;
  }
  function Aj(a) {
    for (var b = {}, c = l(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var Bj = new gb(),
    Cj = {},
    Dj = {},
    Gj = {
      name: bj.ub,
      set: function (a, b) {
        Sc(wb(a, b), Cj);
        Ej();
      },
      get: function (a) {
        return Fj(a, 2);
      },
      reset: function () {
        Bj = new gb();
        Cj = {};
        Ej();
      },
    };
  function Fj(a, b) {
    return b != 2 ? Bj.get(a) : Hj(a);
  }
  function Hj(a, b) {
    var c = a.split(".");
    b = b || [];
    for (var d = Cj, e = 0; e < c.length; e++) {
      if (d === null) return !1;
      if (d === void 0) break;
      d = d[c[e]];
      if (b.indexOf(d) !== -1) return;
    }
    return d;
  }
  function Ij(a, b) {
    Dj.hasOwnProperty(a) || (Bj.set(a, b), Sc(wb(a, b), Cj), Ej());
  }
  function Jj() {
    for (
      var a = [
          "gtm.allowlist",
          "gtm.blocklist",
          "gtm.whitelist",
          "gtm.blacklist",
          "tagTypeBlacklist",
        ],
        b = 0;
      b < a.length;
      b++
    ) {
      var c = a[b],
        d = Fj(c, 1);
      if (Array.isArray(d) || Rc(d)) d = Sc(d, null);
      Dj[c] = d;
    }
  }
  function Ej(a) {
    hb(Dj, function (b, c) {
      Bj.set(b, c);
      Sc(wb(b), Cj);
      Sc(wb(b, c), Cj);
      a && delete Dj[b];
    });
  }
  function Kj(a, b) {
    var c,
      d = (b === void 0 ? 2 : b) !== 1 ? Hj(a) : Bj.get(a);
    Pc(d) === "array" || Pc(d) === "object" ? (c = Sc(d, null)) : (c = d);
    return c;
  }
  var Pj = /:[0-9]+$/,
    Qj = /^\d+\.fls\.doubleclick\.net$/;
  function Rj(a, b, c, d) {
    for (var e = [], f = l(a.split("&")), g = f.next(); !g.done; g = f.next()) {
      var k = l(g.value.split("=")),
        m = k.next().value,
        n = sa(k);
      if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
        var p = n.join("=");
        if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
        e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
      }
    }
    return c ? e : void 0;
  }
  function Sj(a, b, c, d, e) {
    b && (b = String(b).toLowerCase());
    if (b === "protocol" || b === "port")
      a.protocol = Tj(a.protocol) || Tj(z.location.protocol);
    b === "port"
      ? (a.port = String(
          Number(a.hostname ? a.port : z.location.port) ||
            (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")
        ))
      : b === "host" &&
        (a.hostname = (a.hostname || z.location.hostname)
          .replace(Pj, "")
          .toLowerCase());
    return Uj(a, b, c, d, e);
  }
  function Uj(a, b, c, d, e) {
    var f,
      g = Tj(a.protocol);
    b && (b = String(b).toLowerCase());
    switch (b) {
      case "url_no_fragment":
        f = Vj(a);
        break;
      case "protocol":
        f = g;
        break;
      case "host":
        f = a.hostname.replace(Pj, "").toLowerCase();
        if (c) {
          var k = /^www\d*\./.exec(f);
          k && k[0] && (f = f.substring(k[0].length));
        }
        break;
      case "port":
        f = String(
          Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : "")
        );
        break;
      case "path":
        a.pathname || a.hostname || Va("TAGGING", 1);
        f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
        var m = f.split("/");
        (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
        f = m.join("/");
        break;
      case "query":
        f = a.search.replace("?", "");
        e && (f = Rj(f, e, !1));
        break;
      case "extension":
        var n = a.pathname.split(".");
        f = n.length > 1 ? n[n.length - 1] : "";
        f = f.split("/")[0];
        break;
      case "fragment":
        f = a.hash.replace("#", "");
        break;
      default:
        f = a && a.href;
    }
    return f;
  }
  function Tj(a) {
    return a ? a.replace(":", "").toLowerCase() : "";
  }
  function Vj(a) {
    var b = "";
    if (a && a.href) {
      var c = a.href.indexOf("#");
      b = c < 0 ? a.href : a.href.substring(0, c);
    }
    return b;
  }
  var Wj = {},
    Xj = 0;
  function Yj(a) {
    var b = Wj[a];
    if (!b) {
      var c = B.createElement("a");
      a && (c.href = a);
      var d = c.pathname;
      d[0] !== "/" && (a || Va("TAGGING", 1), (d = "/" + d));
      var e = c.hostname.replace(Pj, "");
      b = {
        href: c.href,
        protocol: c.protocol,
        host: c.host,
        hostname: e,
        pathname: d,
        search: c.search,
        hash: c.hash,
        port: c.port,
      };
      Xj < 5 && ((Wj[a] = b), Xj++);
    }
    return b;
  }
  function Zj(a) {
    var b = Yj(z.location.href),
      c = Sj(b, "host", !1);
    if (c && c.match(Qj)) {
      var d = Sj(b, "path");
      if (d) {
        var e = d.split(a + "=");
        if (e.length > 1) return e[1].split(";")[0].split("?")[0];
      }
    }
  }
  var ak = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function bk(a, b) {
    if (a) {
      var c = "" + a;
      c.indexOf("http://") !== 0 &&
        c.indexOf("https://") !== 0 &&
        (c = "https://" + c);
      c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
      return Yj("" + c + b).href;
    }
  }
  function ck(a, b) {
    if (zj() || kj) return bk(a, b);
  }
  function dk() {
    return !!bj.Bh && bj.Bh.split("@@").join("") !== "SGTM_TOKEN";
  }
  function ek(a) {
    for (var b = l([P.g.Dd, P.g.Vb]), c = b.next(); !c.done; c = b.next()) {
      var d = U(a, c.value);
      if (d) return d;
    }
  }
  function fk(a, b) {
    return zj() ? "" + yj() + (b ? ak[a] || "" : "") : a;
  }
  function gk(a) {
    var b = String(a[Ke.ra] || "").replace(/_/g, "");
    return tb(b, "cvt") ? "cvt" : b;
  }
  var hk =
    z.location.search.indexOf("?gtm_latency=") >= 0 ||
    z.location.search.indexOf("&gtm_latency=") >= 0;
  var ik = { sampleRate: "0.005000", Zk: "", On: "0.01" },
    jk = Math.random(),
    kk;
  if (!(kk = hk)) {
    var lk = ik.sampleRate;
    kk = jk < Number(lk);
  }
  var mk = kk,
    nk =
      (hc == null ? void 0 : hc.includes("gtm_debug=d")) ||
      hk ||
      jk >= 1 - Number(ik.On);
  var ok = /gtag[.\/]js/,
    pk = /gtm[.\/]js/,
    qk = !1;
  function rk(a) {
    if (qk) return "1";
    var b,
      c = (b = a.scriptElement) == null ? void 0 : b.src;
    if (c) {
      if (ok.test(c)) return "3";
      if (pk.test(c)) return "2";
    }
    return "0";
  }
  function sk(a, b) {
    var c = tk();
    c.pending || (c.pending = []);
    db(c.pending, function (d) {
      return (
        d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
      );
    }) || c.pending.push({ target: a, onLoad: b });
  }
  function uk() {
    var a = z.google_tags_first_party;
    Array.isArray(a) || (a = []);
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return Object.freeze(b);
  }
  var vk = function () {
    this.container = {};
    this.destination = {};
    this.canonical = {};
    this.pending = [];
    this.siloed = [];
    this.injectedFirstPartyContainers = {};
    this.injectedFirstPartyContainers = uk();
  };
  function tk() {
    var a = ic("google_tag_data", {}),
      b = a.tidr;
    (b && typeof b === "object") || ((b = new vk()), (a.tidr = b));
    var c = b;
    c.container || (c.container = {});
    c.destination || (c.destination = {});
    c.canonical || (c.canonical = {});
    c.pending || (c.pending = []);
    c.siloed || (c.siloed = []);
    c.injectedFirstPartyContainers || (c.injectedFirstPartyContainers = uk());
    return c;
  }
  var wk = {},
    xk = !1,
    Pf = {
      ctid: "GTM-W6SMN5V6",
      canonicalContainerId: "203819580",
      Ek: "GTM-W6SMN5V6",
      Fk: "GTM-W6SMN5V6",
    };
  wk.Je = kb("");
  function yk() {
    return (
      wk.Je &&
      zk().some(function (a) {
        return a === Pf.ctid;
      })
    );
  }
  function Ak() {
    var a = Bk();
    return xk ? a.map(Dk) : a;
  }
  function Ek() {
    var a = zk();
    return xk ? a.map(Dk) : a;
  }
  function Fk() {
    var a = Ek();
    if (S(131) && !xk)
      for (var b = l([].concat(ta(a))), c = b.next(); !c.done; c = b.next()) {
        var d = Dk(c.value),
          e = tk().destination[d];
        (e && e.state !== 0) || a.push(d);
      }
    return a;
  }
  function Gk() {
    return Hk(Pf.ctid);
  }
  function Ik() {
    return Hk(Pf.canonicalContainerId || "_" + Pf.ctid);
  }
  function Bk() {
    return Pf.Ek ? Pf.Ek.split("|") : [Pf.ctid];
  }
  function zk() {
    return Pf.Fk ? Pf.Fk.split("|") : [];
  }
  function Jk() {
    var a = Kk(Lk()),
      b = a && a.parent;
    if (b) return Kk(b);
  }
  function Kk(a) {
    var b = tk();
    return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
  }
  function Hk(a) {
    return xk ? Dk(a) : a;
  }
  function Dk(a) {
    return "siloed_" + a;
  }
  function Mk(a) {
    return S(131) ? Nk(a) : xk ? Nk(a) : a;
  }
  function Nk(a) {
    a = String(a);
    return tb(a, "siloed_") ? a.substring(7) : a;
  }
  function Ok() {
    if (wj.H) {
      var a = tk();
      if (a.siloed) {
        for (
          var b = [], c = Bk().map(Dk), d = zk().map(Dk), e = {}, f = 0;
          f < a.siloed.length;
          e = { mg: void 0 }, f++
        )
          (e.mg = a.siloed[f]),
            !xk &&
            db(
              e.mg.isDestination ? d : c,
              (function (g) {
                return function (k) {
                  return k === g.mg.ctid;
                };
              })(e)
            )
              ? (xk = !0)
              : b.push(e.mg);
        a.siloed = b;
      }
    }
  }
  function Pk() {
    var a = tk();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = Ak(), f = Fk(), g = {}, k = 0;
        k < a.pending.length;
        g = { uf: void 0 }, k++
      )
        (g.uf = a.pending[k]),
          db(
            g.uf.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.uf.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.uf.onLoad), (d = !0))
            : c.push(g.uf);
      a.pending = c;
      if (b)
        try {
          b(Ik());
        } catch (m) {}
    }
  }
  function Qk() {
    for (
      var a = Pf.ctid,
        b = Ak(),
        c = Fk(),
        d = function (p, q) {
          var r = {
            canonicalContainerId: Pf.canonicalContainerId,
            scriptContainerId: a,
            state: 2,
            containers: b.slice(),
            destinations: c.slice(),
          };
          gc && (r.scriptElement = gc);
          hc && (r.scriptSource = hc);
          if (Jk() === void 0) {
            var u;
            a: {
              if ((r.scriptContainerId || "").indexOf("GTM-") >= 0) {
                var v;
                b: {
                  var t,
                    w = (t = r.scriptElement) == null ? void 0 : t.src;
                  if (w) {
                    for (
                      var x = wj.C,
                        y = Yj(w),
                        A = x ? y.pathname : "" + y.hostname + y.pathname,
                        C = B.scripts,
                        D = "",
                        E = 0;
                      E < C.length;
                      ++E
                    ) {
                      var K = C[E];
                      if (
                        !(
                          K.innerHTML.length === 0 ||
                          (!x &&
                            K.innerHTML.indexOf(
                              r.scriptContainerId || "SHOULD_NOT_BE_SET"
                            ) < 0) ||
                          K.innerHTML.indexOf(A) < 0
                        )
                      ) {
                        if (K.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                          v = String(E);
                          break b;
                        }
                        D = String(E);
                      }
                    }
                    if (D) {
                      v = D;
                      break b;
                    }
                  }
                  v = void 0;
                }
                var H = v;
                if (H) {
                  qk = !0;
                  u = H;
                  break a;
                }
              }
              var N = [].slice.call(document.scripts);
              u = r.scriptElement ? String(N.indexOf(r.scriptElement)) : "-1";
            }
            r.htmlLoadOrder = u;
            r.loadScriptType = rk(r);
          }
          var J = q ? e.destination : e.container,
            V = J[p];
          V ? (q && V.state === 0 && T(93), Object.assign(V, r)) : (J[p] = r);
        },
        e = tk(),
        f = l(b),
        g = f.next();
      !g.done;
      g = f.next()
    )
      d(g.value, !1);
    for (var k = l(c), m = k.next(); !m.done; m = k.next()) {
      var n = m.value;
      S(131) && !xk && tb(n, "siloed_") ? delete e.destination[n] : d(n, !0);
    }
    e.canonical[Ik()] = {};
    Pk();
  }
  function Rk(a) {
    return !!tk().container[a];
  }
  function Sk(a) {
    var b = tk().destination[a];
    return !!b && !!b.state;
  }
  function Lk() {
    return { ctid: Gk(), isDestination: wk.Je };
  }
  function Tk(a) {
    var b = tk();
    (b.siloed = b.siloed || []).push(a);
  }
  function Uk() {
    var a = tk().container,
      b;
    for (b in a) if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
    return !1;
  }
  function Vk() {
    var a = {};
    hb(tk().destination, function (b, c) {
      c.state === 0 && (a[Nk(b)] = c);
    });
    return a;
  }
  function Wk(a) {
    return !!(
      a &&
      a.parent &&
      a.context &&
      a.context.source === 1 &&
      a.parent.ctid.indexOf("GTM-") !== 0
    );
  }
  function Xk(a) {
    var b = tk();
    return b.destination[a] ? 1 : b.destination[Dk(a)] ? 2 : 0;
  }
  var Yk = "/td?id=" + Pf.ctid,
    Zk = ["v", "t", "pid", "dl", "tdp"],
    $k = ["mcc"],
    al = {},
    bl = {};
  function cl(a, b, c) {
    bl[a] = b;
    (c === void 0 || c) && dl(a);
  }
  function dl(a, b) {
    if (al[a] === void 0 || (b === void 0 ? 0 : b)) al[a] = !0;
  }
  function el(a) {
    a = a === void 0 ? !1 : a;
    var b = Object.keys(al)
      .filter(function (c) {
        return al[c] === !0 && bl[c] !== void 0 && (a || !$k.includes(c));
      })
      .map(function (c) {
        var d = bl[c];
        typeof d === "function" && (d = d());
        return d ? "&" + c + "=" + d : "";
      })
      .join("");
    return "" + fk("https://www.googletagmanager.com") + Yk + ("" + b + "&z=0");
  }
  function fl() {
    Object.keys(al).forEach(function (a) {
      Zk.indexOf(a) < 0 && (al[a] = !1);
    });
  }
  function gl(a) {
    a = a === void 0 ? !1 : a;
    if ((!S(6) || wj.P) && nk && Pf.ctid) {
      var b = el(a);
      a ? Bc(b) : rc(b);
      fl();
    }
  }
  var hl = {};
  function il() {
    Object.keys(al).filter(function (a) {
      return al[a] && !Zk.includes(a);
    }).length > 0 && gl(!0);
  }
  var jl = eb();
  function kl() {
    jl = eb();
  }
  function ll() {
    cl("v", "3");
    cl("t", "t");
    cl("pid", function () {
      return String(jl);
    });
    sc(z, "pagehide", il);
    z.setInterval(kl, 864e5);
  }
  function ml() {
    var a = ic("google_tag_data", {});
    return (a.ics = a.ics || new nl());
  }
  var nl = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.j = [];
  };
  nl.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    Va("TAGGING", 19);
    b == null ? Va("TAGGING", 18) : ol(this, a, b === "granted", c, d, e, f, g);
  };
  nl.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      ol(this, a[d], void 0, void 0, "", "", b, c);
  };
  var ol = function (a, b, c, d, e, f, g, k) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && $a(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && g > 0 && n.update === void 0),
        u = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: c !== void 0 ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if (e !== "" || n.default !== !1) m[b] = u;
      r &&
        z.setTimeout(function () {
          m[b] === u &&
            u.quiet &&
            (Va("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, k),
            a.notifyListeners());
        }, g);
    }
  };
  h = nl.prototype;
  h.clearTimeout = function (a, b, c) {
    var d = [a],
      e = c.delegatedConsentTypes,
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      k = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = l(d), n = m.next(); !n.done; n = m.next()) pl(this, n.value);
    } else if (b !== void 0 && k !== b)
      for (var p = l(d), q = p.next(); !q.done; q = p.next()) pl(this, q.value);
  };
  h.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (b != null) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = b === "granted";
      this.clearTimeout(a, d, c);
    }
  };
  h.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      k = g.declare_region,
      m = c && $a(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: b === "granted",
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if (d !== "" || g.declare !== !1) f[a] = n;
    }
  };
  h.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    d.implicit !== !1 && (d.implicit = b === "granted");
  };
  h.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (e !== void 0) return e ? 1 : 2;
    if (b.usedContainerScopedDefaults) {
      var f = b.containerScopedDefaults[a];
      if (f === 3) return 1;
      if (f === 2) return 2;
    } else if (((e = d.default), e !== void 0)) return e ? 1 : 2;
    if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var g = b.delegatedConsentTypes[a],
        k = c[g] || {};
      e = k.update;
      if (e !== void 0) return e ? 1 : 2;
      if (b.usedContainerScopedDefaults) {
        var m = b.containerScopedDefaults[g];
        if (m === 3) return 1;
        if (m === 2) return 2;
      } else if (((e = k.default), e !== void 0)) return e ? 1 : 2;
    }
    e = d.declare;
    if (e !== void 0) return e ? 1 : 2;
    e = d.implicit;
    return e !== void 0 ? (e ? 3 : 4) : 0;
  };
  h.addListener = function (a, b) {
    this.j.push({ consentTypes: a, Od: b });
  };
  var pl = function (a, b) {
    for (var c = 0; c < a.j.length; ++c) {
      var d = a.j[c];
      Array.isArray(d.consentTypes) &&
        d.consentTypes.indexOf(b) !== -1 &&
        (d.Gk = !0);
    }
  };
  nl.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.j.length; ++c) {
      var d = this.j[c];
      if (d.Gk) {
        d.Gk = !1;
        try {
          d.Od({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var ql = !1,
    rl = !1,
    sl = {},
    tl = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
      selectedAllCorePlatformServices: !1,
      containerScopedDefaults:
        ((sl.ad_storage = 1),
        (sl.analytics_storage = 1),
        (sl.ad_user_data = 1),
        (sl.ad_personalization = 1),
        sl),
      usedContainerScopedDefaults: !1,
    };
  function ul(a) {
    var b = ml();
    b.accessedAny = !0;
    return ($a(a) ? [a] : a).every(function (c) {
      switch (b.getConsentState(c, tl)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    });
  }
  function vl(a) {
    var b = ml();
    b.accessedAny = !0;
    return b.getConsentState(a, tl);
  }
  function wl(a) {
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
      var e = d.value;
      b[e] = tl.corePlatformServices[e] !== !1;
    }
    return b;
  }
  function xl(a) {
    var b = ml();
    b.accessedAny = !0;
    return !(b.entries[a] || {}).quiet;
  }
  function yl() {
    if (!ni(8)) return !1;
    var a = ml();
    a.accessedAny = !0;
    if (a.active) return !0;
    if (!tl.usedContainerScopedDefaults) return !1;
    for (
      var b = l(Object.keys(tl.containerScopedDefaults)), c = b.next();
      !c.done;
      c = b.next()
    )
      if (tl.containerScopedDefaults[c.value] !== 1) return !0;
    return !1;
  }
  function zl(a, b) {
    ml().addListener(a, b);
  }
  function Al(a, b) {
    ml().notifyListeners(a, b);
  }
  function Bl(a, b) {
    function c() {
      for (var e = 0; e < b.length; e++) if (!xl(b[e])) return !0;
      return !1;
    }
    if (c()) {
      var d = !1;
      zl(b, function (e) {
        d || c() || ((d = !0), a(e));
      });
    } else a({});
  }
  function Cl(a, b) {
    function c() {
      for (var k = [], m = 0; m < e.length; m++) {
        var n = e[m];
        ul(n) && !f[n] && k.push(n);
      }
      return k;
    }
    function d(k) {
      for (var m = 0; m < k.length; m++) f[k[m]] = !0;
    }
    var e = $a(b) ? [b] : b,
      f = {},
      g = c();
    g.length !== e.length &&
      (d(g),
      zl(e, function (k) {
        function m(q) {
          q.length !== 0 && (d(q), (k.consentTypes = q), a(k));
        }
        var n = c();
        if (n.length !== 0) {
          var p = Object.keys(f).length;
          n.length + p >= e.length
            ? m(n)
            : z.setTimeout(function () {
                m(c());
              }, 500);
        }
      }));
  }
  var Dl = [
      "ad_storage",
      "analytics_storage",
      "ad_user_data",
      "ad_personalization",
    ],
    El = [
      P.g.Dd,
      P.g.Vb,
      P.g.Ic,
      P.g.kb,
      P.g.Eb,
      P.g.Ea,
      P.g.ya,
      P.g.Ma,
      P.g.Qa,
      P.g.zb,
    ],
    Fl = !1,
    Gl = !1,
    Hl = {},
    Il = {};
  function Jl() {
    !Gl &&
      Fl &&
      (Dl.some(function (a) {
        return tl.containerScopedDefaults[a] !== 1;
      }) ||
        Kl("mbc"));
    Gl = !0;
  }
  function Kl(a) {
    nk && (cl(a, "1"), gl());
  }
  function Ll(a, b) {
    if (!Hl[b] && ((Hl[b] = !0), Il[b]))
      for (var c = l(El), d = c.next(); !d.done; d = c.next())
        if (a.hasOwnProperty(d.value)) {
          Kl("erc");
          break;
        }
  }
  function Ml(a) {
    Va("HEALTH", a);
  }
  var Nl;
  try {
    Nl = JSON.parse(
      Sa(
        "eyIwIjoiSUQiLCIxIjoiSUQtSlQiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pZCIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"
      )
    );
  } catch (a) {
    T(123), Ml(2), (Nl = {});
  }
  function Ol() {
    return Nl["0"] || "";
  }
  function Pl() {
    return Nl["1"] || "";
  }
  function Ql() {
    var a = !1;
    return a;
  }
  function Rl() {
    return Nl["6"] !== !1;
  }
  function Sl() {
    var a = "";
    return a;
  }
  function Tl() {
    var a = !1;
    return a;
  }
  function Ul() {
    var a = "";
    return a;
  }
  function Vl(a) {
    return a && a.indexOf("pending:") === 0 ? Wl(a.substr(8)) : !1;
  }
  function Wl(a) {
    if (a == null || a.length === 0) return !1;
    var b = Number(a),
      c = ob();
    return b < c + 3e5 && b > c - 9e5;
  }
  var Xl = !1,
    Yl = !1,
    Zl = !1,
    $l = 0,
    am = !1,
    bm = [];
  function cm(a) {
    if ($l === 0) am && bm && (bm.length >= 100 && bm.shift(), bm.push(a));
    else if (dm()) {
      var b = ic("google.tagmanager.ta.prodqueue", []);
      b.length >= 50 && b.shift();
      b.push(a);
    }
  }
  function em() {
    fm();
    tc(B, "TAProdDebugSignal", em);
  }
  function fm() {
    if (!Yl) {
      Yl = !0;
      gm();
      var a = bm;
      bm = void 0;
      a == null ||
        a.forEach(function (b) {
          cm(b);
        });
    }
  }
  function gm() {
    var a = B.documentElement.getAttribute("data-tag-assistant-prod-present");
    Wl(a)
      ? ($l = 1)
      : !Vl(a) || Xl || Zl
      ? ($l = 2)
      : ((Zl = !0),
        sc(B, "TAProdDebugSignal", em, !1),
        z.setTimeout(function () {
          fm();
          Xl = !0;
        }, 200));
  }
  function dm() {
    if (!am) return !1;
    switch ($l) {
      case 1:
      case 0:
        return !0;
      case 2:
        return !1;
      default:
        return !1;
    }
  }
  var hm = !1;
  function im(a, b) {
    if (dm()) {
      var c = jm("INIT");
      c.containerLoadSource = a != null ? a : 0;
      b && (c.parentTargetReference = b);
      cm(c);
    }
  }
  function km(a) {
    var b, c, d;
    b = a.targetId;
    c = a.request;
    d = a.Ua;
    if (dm()) {
      var e = jm("GTAG_HIT", { eventId: d.eventId, priorityId: d.priorityId });
      e.target = b;
      e.url = c.url;
      c.postBody && (e.postBody = c.postBody);
      e.parameterEncoding = c.parameterEncoding;
      e.endpoint = c.endpoint;
      cm(e);
    }
  }
  function jm(a, b) {
    b = b === void 0 ? {} : b;
    lm == null &&
      ((lm = mm.debugGroupId), lm == null || typeof lm !== "string") &&
      ((lm = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()))),
      (mm.debugGroupId = lm));
    b.groupId = lm;
    var c,
      d = b,
      e = { publicId: nm };
    d.eventId != null && (e.eventId = d.eventId);
    d.priorityId != null && (e.priorityId = d.priorityId);
    d.eventName && (e.eventName = d.eventName);
    d.groupId && (e.groupId = d.groupId);
    d.tagName && (e.tagName = d.tagName);
    c = { containerProduct: "GTM", key: e, version: "2", messageType: a };
    c.containerProduct = hm ? "OGT" : "GTM";
    c.key.targetRef = om;
    return c;
  }
  var nm = "",
    om = { ctid: "", isDestination: !1 },
    mm = {},
    lm = null;
  var pm = [P.g.N, P.g.T, P.g.O, P.g.wa],
    qm,
    rm;
  function sm(a) {
    for (
      var b = a[P.g.tb], c = Array.isArray(b) ? b : [b], d = { ef: 0 };
      d.ef < c.length;
      d = { ef: d.ef }, ++d.ef
    )
      hb(
        a,
        (function (e) {
          return function (f, g) {
            if (f !== P.g.tb) {
              var k = c[e.ef],
                m = Ol(),
                n = Pl();
              rl = !0;
              ql && Va("TAGGING", 20);
              ml().declare(f, g, k, m, n);
            }
          };
        })(d)
      );
  }
  function tm(a) {
    Jl();
    !rm && qm && Kl("crc");
    rm = !0;
    var b = a[P.g.tb];
    b && T(40);
    var c = a[P.g.be];
    c && T(41);
    for (
      var d = Array.isArray(b) ? b : [b], e = { ff: 0 };
      e.ff < d.length;
      e = { ff: e.ff }, ++e.ff
    )
      hb(
        a,
        (function (f) {
          return function (g, k) {
            if (g !== P.g.tb && g !== P.g.be) {
              var m = d[f.ff],
                n = Number(c),
                p = Ol(),
                q = Pl();
              n = n === void 0 ? 0 : n;
              ql = !0;
              rl && Va("TAGGING", 20);
              ml().default(g, k, m, p, q, n, tl);
            }
          };
        })(e)
      );
  }
  function um(a) {
    tl.usedContainerScopedDefaults = !0;
    var b = a[P.g.tb];
    if (b) {
      var c = Array.isArray(b) ? b : [b];
      if (!c.includes(Pl()) && !c.includes(Ol())) return;
    }
    hb(a, function (d, e) {
      switch (d) {
        case "ad_storage":
        case "analytics_storage":
        case "ad_user_data":
        case "ad_personalization":
          break;
        default:
          return;
      }
      tl.usedContainerScopedDefaults = !0;
      tl.containerScopedDefaults[d] = e === "granted" ? 3 : 2;
    });
  }
  function vm(a, b) {
    Jl();
    qm = !0;
    hb(a, function (c, d) {
      ql = !0;
      rl && Va("TAGGING", 20);
      ml().update(c, d, tl);
    });
    Al(b.eventId, b.priorityId);
  }
  function wm(a) {
    a.hasOwnProperty("all") &&
      ((tl.selectedAllCorePlatformServices = !0),
      hb(Nh, function (b) {
        tl.corePlatformServices[b] = a.all === "granted";
        tl.usedCorePlatformServices = !0;
      }));
    hb(a, function (b, c) {
      b !== "all" &&
        ((tl.corePlatformServices[b] = c === "granted"),
        (tl.usedCorePlatformServices = !0));
    });
  }
  function W(a) {
    Array.isArray(a) || (a = [a]);
    return a.every(function (b) {
      return ul(b);
    });
  }
  function xm(a, b) {
    zl(a, b);
  }
  function ym(a, b) {
    Cl(a, b);
  }
  function zm(a, b) {
    Bl(a, b);
  }
  function Am() {
    var a = [P.g.N, P.g.wa, P.g.O];
    ml().waitForUpdate(a, 500, tl);
  }
  function Bm(a) {
    for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      ml().clearTimeout(d, void 0, tl);
    }
    Al();
  }
  var Cm = !1,
    Dm = [];
  var Em = {
      gk: "service_worker_endpoint",
      Ch: "shared_user_id",
      Dh: "shared_user_id_requested",
      Oe: "shared_user_id_source",
      Cf: "cookie_deprecation_label",
    },
    Fm;
  function Gm(a) {
    if (!Fm) {
      Fm = {};
      for (var b = l(Object.keys(Em)), c = b.next(); !c.done; c = b.next())
        Fm[Em[c.value]] = !0;
    }
    return !!Fm[a];
  }
  function Hm(a, b) {
    b = b === void 0 ? !1 : b;
    if (Gm(a)) {
      var c,
        d,
        e =
          (d = (c = ic("google_tag_data", {})).xcd) != null ? d : (c.xcd = {});
      if (e[a]) return e[a];
      if (b) {
        var f = void 0,
          g = 1,
          k = {},
          m = {
            set: function (n) {
              f = n;
              m.notify();
            },
            get: function () {
              return f;
            },
            subscribe: function (n) {
              k[String(g)] = n;
              return g++;
            },
            unsubscribe: function (n) {
              var p = String(n);
              return k.hasOwnProperty(p) ? (delete k[p], !0) : !1;
            },
            notify: function () {
              for (
                var n = l(Object.keys(k)), p = n.next();
                !p.done;
                p = n.next()
              ) {
                var q = p.value;
                try {
                  k[q](a, f);
                } catch (r) {}
              }
            },
          };
        return (e[a] = m);
      }
    }
  }
  function Im(a, b) {
    var c = Hm(a, !0);
    c && c.set(b);
  }
  function Jm(a) {
    var b;
    return (b = Hm(a)) == null ? void 0 : b.get();
  }
  function Km(a, b) {
    if (typeof b === "function") {
      var c;
      return (c = Hm(a, !0)) == null ? void 0 : c.subscribe(b);
    }
  }
  function Lm(a, b) {
    var c = Hm(a);
    return c ? c.unsubscribe(b) : !1;
  }
  function Mm() {
    if (cj.pscdl !== void 0) Jm(Em.Cf) === void 0 && Im(Em.Cf, cj.pscdl);
    else {
      var a = function (c) {
          cj.pscdl = c;
          Im(Em.Cf, c);
        },
        b = function () {
          a("error");
        };
      try {
        ec.cookieDeprecationLabel
          ? (a("pending"),
            ec.cookieDeprecationLabel.getValue().then(a).catch(b))
          : a("noapi");
      } catch (c) {
        b(c);
      }
    }
  }
  function Nm(a, b) {
    b &&
      hb(b, function (c, d) {
        typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d));
      });
  }
  var Om = /[A-Z]+/,
    Pm = /\s/;
  function Qm(a, b) {
    if ($a(a)) {
      a = mb(a);
      var c = a.indexOf("-");
      if (!(c < 0)) {
        var d = a.substring(0, c);
        if (Om.test(d)) {
          var e = a.substring(c + 1),
            f;
          if (b) {
            var g = function (n) {
              var p = n.indexOf("/");
              return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)];
            };
            f = g(e);
            if (d === "DC" && f.length === 2) {
              var k = g(f[1]);
              k.length === 2 && ((f[1] = k[0]), f.push(k[1]));
            }
          } else {
            f = e.split("/");
            for (var m = 0; m < f.length; m++)
              if (!f[m] || (Pm.test(f[m]) && (d !== "AW" || m !== 1))) return;
          }
          return { id: a, prefix: d, destinationId: d + "-" + f[0], ids: f };
        }
      }
    }
  }
  function Rm(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = Qm(a[d], b);
      e && (c[e.id] = e);
    }
    Sm(c);
    var f = [];
    hb(c, function (g, k) {
      f.push(k);
    });
    return f;
  }
  function Sm(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        d.prefix === "AW" && d.ids[Tm[2]] && b.push(d.destinationId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Um = {},
    Tm =
      ((Um[0] = 0),
      (Um[1] = 0),
      (Um[2] = 1),
      (Um[3] = 0),
      (Um[4] = 1),
      (Um[5] = 2),
      (Um[6] = 0),
      (Um[7] = 0),
      (Um[8] = 0),
      Um);
  var Vm = Number("") || 500,
    Wm = {},
    Xm = {},
    Ym = { initialized: 11, complete: 12, interactive: 13 },
    Zm = {},
    $m = Object.freeze(((Zm[P.g.Na] = !0), Zm)),
    an = void 0;
  function bn(a, b) {
    if (b.length && nk) {
      var c;
      (c = Wm)[a] != null || (c[a] = []);
      Xm[a] != null || (Xm[a] = []);
      var d = b.filter(function (e) {
        return !Xm[a].includes(e);
      });
      Wm[a].push.apply(Wm[a], ta(d));
      Xm[a].push.apply(Xm[a], ta(d));
      !an &&
        d.length > 0 &&
        (dl("tdc", !0),
        (an = z.setTimeout(function () {
          gl();
          Wm = {};
          an = void 0;
        }, Vm)));
    }
  }
  function cn(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function dn(a, b, c, d) {
    c = c === void 0 ? {} : c;
    d = d === void 0 ? "" : d;
    if (a === b) return [];
    var e = function (r, u) {
        var v;
        Pc(u) === "object" ? (v = u[r]) : Pc(u) === "array" && (v = u[r]);
        return v === void 0 ? $m[r] : v;
      },
      f = cn(a, b),
      g;
    for (g in f)
      if (f.hasOwnProperty(g)) {
        var k = (d ? d + "." : "") + g,
          m = e(g, a),
          n = e(g, b),
          p = Pc(m) === "object" || Pc(m) === "array",
          q = Pc(n) === "object" || Pc(n) === "array";
        if (p && q) dn(m, n, c, k);
        else if (p || q || m !== n) c[k] = !0;
      }
    return Object.keys(c);
  }
  function en() {
    cl(
      "tdc",
      function () {
        an && (z.clearTimeout(an), (an = void 0));
        var a = [],
          b;
        for (b in Wm) Wm.hasOwnProperty(b) && a.push(b + "*" + Wm[b].join("."));
        return a.length ? a.join("!") : void 0;
      },
      !1
    );
  }
  var fn = function (a, b, c, d, e, f, g, k, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.j = c;
      this.P = d;
      this.H = e;
      this.K = f;
      this.C = g;
      this.eventMetadata = k;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    gn = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.j);
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 2:
          c.push(a.j);
          break;
        case 1:
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 4:
          c.push(a.j), c.push(a.P), c.push(a.H), c.push(a.K);
      }
      return c;
    },
    U = function (a, b, c, d) {
      for (
        var e = l(gn(a, d === void 0 ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (g[b] !== void 0) return g[b];
      }
      return c;
    },
    hn = function (a) {
      for (
        var b = {}, c = gn(a, 4), d = l(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = l(f), k = g.next();
          !k.done;
          k = g.next()
        )
          b[k.value] = 1;
      return Object.keys(b);
    },
    jn = function (a, b, c) {
      function d(n) {
        Rc(n) &&
          hb(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = gn(a, c === void 0 ? 3 : c);
      g.reverse();
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    kn = function (a) {
      for (
        var b = [P.g.md, P.g.hd, P.g.jd, P.g.kd, P.g.ld, P.g.nd, P.g.od],
          c = gn(a, 3),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, k = !1, m = l(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          f[p] !== void 0 && ((g[p] = f[p]), (k = !0));
        }
        var q = k ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    ln = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.C = {};
      this.P = {};
      this.j = {};
      this.H = {};
      this.Z = {};
      this.K = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function () {};
      this.onFailure = function () {};
    },
    mn = function (a, b) {
      a.C = b;
      return a;
    },
    nn = function (a, b) {
      a.P = b;
      return a;
    },
    on = function (a, b) {
      a.j = b;
      return a;
    },
    pn = function (a, b) {
      a.H = b;
      return a;
    },
    qn = function (a, b) {
      a.Z = b;
      return a;
    },
    rn = function (a, b) {
      a.K = b;
      return a;
    },
    sn = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    tn = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    un = function (a, b) {
      a.onFailure = b;
      return a;
    },
    vn = function (a, b) {
      a.isGtmEvent = b;
      return a;
    },
    wn = function (a) {
      return new fn(
        a.eventId,
        a.priorityId,
        a.C,
        a.P,
        a.j,
        a.H,
        a.K,
        a.eventMetadata,
        a.onSuccess,
        a.onFailure,
        a.isGtmEvent
      );
    };
  var xn = { Yk: Number("5"), Bo: Number("") },
    yn = [];
  function zn(a) {
    yn.push(a);
  }
  var An = "?id=" + Pf.ctid,
    Bn = void 0,
    Cn = {},
    Dn = void 0,
    En = new (function () {
      var a = 5;
      xn.Yk > 0 && (a = xn.Yk);
      this.C = a;
      this.j = 0;
      this.H = [];
    })(),
    Fn = 1e3;
  function Gn(a, b) {
    var c = Bn;
    if (c === void 0)
      if (b) c = tj();
      else return "";
    for (
      var d = [fk("https://www.googletagmanager.com"), "/a", An],
        e = l(yn),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var g = f.value, k = g({ eventId: c, bd: !!a }), m = l(k), n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = l(n.value),
          q = p.next().value,
          r = p.next().value;
        d.push("&" + q + "=" + r);
      }
    d.push("&z=0");
    return d.join("");
  }
  function Hn() {
    if (!S(6) || wj.P)
      if ((Dn && (z.clearTimeout(Dn), (Dn = void 0)), Bn !== void 0 && In)) {
        var a;
        (a = Cn[Bn]) || (a = En.j < En.C ? !1 : ob() - En.H[En.j % En.C] < 1e3);
        if (a || Fn-- <= 0) T(1), (Cn[Bn] = !0);
        else {
          var b = En.j++ % En.C;
          En.H[b] = ob();
          var c = Gn(!0);
          rc(c);
          In = !1;
        }
      }
  }
  var In = !1;
  function Jn(a) {
    Cn[a] ||
      (a !== Bn && (Hn(), (Bn = a)),
      (In = !0),
      Dn || (Dn = z.setTimeout(Hn, 500)),
      Gn().length >= 2022 && Hn());
  }
  var Kn = eb();
  function Ln() {
    Kn = eb();
  }
  function Mn() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", String(Kn)],
    ];
  }
  var Nn = {};
  function On(a, b, c) {
    mk && a !== void 0 && ((Nn[a] = Nn[a] || []), Nn[a].push(c + b), Jn(a));
  }
  function Pn(a) {
    var b = a.eventId,
      c = a.bd,
      d = [],
      e = Nn[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete Nn[b];
    return d;
  }
  var Qn = {},
    Rn = ((Qn[0] = 0), (Qn[1] = 0), (Qn[2] = 0), (Qn[3] = 0), Qn),
    Sn = function (a, b) {
      this.j = a;
      this.consentTypes = b;
    };
  Sn.prototype.isConsentGranted = function () {
    switch (this.j) {
      case 0:
        return this.consentTypes.every(function (a) {
          return ul(a);
        });
      case 1:
        return this.consentTypes.some(function (a) {
          return ul(a);
        });
      default:
        throw Error("consentsRequired had an unknown type");
    }
  };
  var Tn = {},
    Un =
      ((Tn[0] = new Sn(0, [])),
      (Tn[1] = new Sn(0, ["ad_storage"])),
      (Tn[2] = new Sn(0, ["analytics_storage"])),
      (Tn[3] = new Sn(1, ["ad_storage", "analytics_storage"])),
      Tn);
  var Vn = function (a) {
    var b = this;
    this.type = a;
    this.j = [];
    xm(Un[a].consentTypes, function () {
      (Rn[b.type] === 2 && !Un[b.type].isConsentGranted()) || b.flush();
    });
  };
  Vn.prototype.flush = function () {
    for (var a = l(this.j), b = a.next(); !b.done; b = a.next()) {
      var c = b.value;
      c();
    }
    this.j = [];
  };
  var Wn = function (a, b) {
      Rn[a.type] !== 2 || Un[a.type].isConsentGranted() ? b() : a.j.push(b);
    },
    Xn = new Map();
  function Yn(a) {
    Xn.has(a) || Xn.set(a, new Vn(a));
    return Xn.get(a);
  }
  function Zn(a, b, c) {
    var d = Qm(Hk(a), !0);
    d && $n.register(d, b, c);
  }
  function ao(a, b, c, d) {
    var e = Qm(c, d.isGtmEvent);
    e && (hj && (d.deferrable = !0), $n.push("event", [b, a], e, d));
  }
  function bo(a, b, c, d) {
    var e = Qm(c, d.isGtmEvent);
    e && $n.push("get", [a, b], e, d);
  }
  function co(a) {
    var b = Qm(Hk(a), !0),
      c;
    b ? (c = eo($n, b).j) : (c = {});
    return c;
  }
  function fo(a, b) {
    var c = Qm(Hk(a), !0);
    if (c) {
      var d = $n,
        e = Sc(b, null);
      Sc(eo(d, c).j, e);
      eo(d, c).j = e;
    }
  }
  var go = function () {
      this.P = {};
      this.j = {};
      this.C = {};
      this.Z = null;
      this.K = {};
      this.H = !1;
      this.status = 1;
    },
    ho = function (a, b, c, d) {
      this.C = ob();
      this.j = b;
      this.args = c;
      this.messageContext = d;
      this.type = a;
    },
    io = function () {
      this.destinations = {};
      this.j = {};
      this.commands = [];
    },
    eo = function (a, b) {
      var c = b.destinationId;
      S(131) && !xk && (c = Mk(c));
      return (a.destinations[c] = a.destinations[c] || new go());
    },
    jo = function (a, b, c, d) {
      if (d.j) {
        var e = eo(a, d.j),
          f = e.Z;
        if (f) {
          var g = d.j.id;
          S(131) && !xk && (g = Mk(g));
          var k = Sc(c, null),
            m = Sc(e.P[g], null),
            n = Sc(e.K, null),
            p = Sc(e.j, null),
            q = Sc(a.j, null),
            r = {};
          if (mk)
            try {
              r = Sc(Cj, null);
            } catch (x) {
              T(72);
            }
          var u = d.j.prefix,
            v = function (x) {
              On(d.messageContext.eventId, u, x);
            },
            t = wn(
              vn(
                un(
                  tn(
                    sn(
                      qn(
                        pn(
                          rn(
                            on(
                              nn(
                                mn(
                                  new ln(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  k
                                ),
                                m
                              ),
                              n
                            ),
                            p
                          ),
                          q
                        ),
                        r
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (v) {
                        var x = v;
                        v = void 0;
                        x("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (v) {
                      var x = v;
                      v = void 0;
                      x("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            ),
            w = function () {
              try {
                On(d.messageContext.eventId, u, "1");
                var x = d.type,
                  y = d.j.id;
                if (nk && x === "config") {
                  var A,
                    C = (A = Qm(y)) == null ? void 0 : A.ids;
                  if (!(C && C.length > 1)) {
                    var D,
                      E = ic("google_tag_data", {});
                    E.td || (E.td = {});
                    D = E.td;
                    var K = Sc(t.K);
                    Sc(t.j, K);
                    var H = [],
                      N;
                    for (N in D)
                      D.hasOwnProperty(N) && dn(D[N], K).length && H.push(N);
                    H.length &&
                      (bn(y, H), Va("TAGGING", Ym[B.readyState] || 14));
                    D[y] = K;
                  }
                }
                f(d.j.id, b, d.C, t);
              } catch (J) {
                On(d.messageContext.eventId, u, "4");
              }
            };
          b === "gtag.get" ? w() : S(102) ? Wn(e.Ha, w) : w();
        }
      }
    };
  io.prototype.register = function (a, b, c) {
    var d = eo(this, a);
    d.status !== 3 &&
      ((d.Z = b), (d.status = 3), S(102) && (d.Ha = Yn(c)), this.flush());
  };
  io.prototype.push = function (a, b, c, d) {
    c !== void 0 &&
      (eo(this, c).status === 1 &&
        ((eo(this, c).status = 2), this.push("require", [{}], c, {})),
      eo(this, c).H && (d.deferrable = !1));
    this.commands.push(new ho(a, c, b, d));
    d.deferrable || this.flush();
  };
  io.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.commands.length;
      e = { xc: void 0, Th: void 0 }
    ) {
      var f = this.commands[0],
        g = f.j;
      if (f.messageContext.deferrable)
        !g || eo(this, g).H
          ? ((f.messageContext.deferrable = !1), this.commands.push(f))
          : c.push(f),
          this.commands.shift();
      else {
        switch (f.type) {
          case "require":
            if (eo(this, g).status !== 3 && !a) {
              this.commands.push.apply(this.commands, c);
              return;
            }
            break;
          case "set":
            hb(f.args[0], function (u, v) {
              Sc(wb(u, v), b.j);
            });
            break;
          case "config":
            var k = eo(this, g);
            e.xc = {};
            hb(
              f.args[0],
              (function (u) {
                return function (v, t) {
                  Sc(wb(v, t), u.xc);
                };
              })(e)
            );
            var m = !!e.xc[P.g.sc];
            delete e.xc[P.g.sc];
            var n = g.destinationId === g.id;
            m || (n ? (k.K = {}) : (k.P[g.id] = {}));
            (k.H && m) || jo(this, P.g.da, e.xc, f);
            k.H = !0;
            n ? Sc(e.xc, k.K) : (Sc(e.xc, k.P[g.id]), T(70));
            d = !0;
            Ll(e.xc, g.id);
            Fl = !0;
            break;
          case "event":
            e.Th = {};
            hb(
              f.args[0],
              (function (u) {
                return function (v, t) {
                  Sc(wb(v, t), u.Th);
                };
              })(e)
            );
            jo(this, f.args[1], e.Th, f);
            var p = void 0;
            !f.j ||
              ((p = f.messageContext.eventMetadata) == null ? 0 : p.em_event) ||
              (Il[f.j.id] = !0);
            Fl = !0;
            break;
          case "get":
            var q = {},
              r = ((q[P.g.Bb] = f.args[0]), (q[P.g.Qb] = f.args[1]), q);
            jo(this, P.g.ab, r, f);
            Fl = !0;
        }
        this.commands.shift();
        ko(this, f);
      }
    }
    this.commands.push.apply(this.commands, c);
    d && this.flush();
  };
  var ko = function (a, b) {
      if (b.type !== "require")
        if (b.j)
          for (var c = eo(a, b.j).C[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.destinations)
            if (a.destinations.hasOwnProperty(e)) {
              var f = a.destinations[e];
              if (f && f.C)
                for (var g = f.C[b.type] || [], k = 0; k < g.length; k++)
                  g[k]();
            }
    },
    $n = new io();
  var lo = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    mo = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var no = function (a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1);
    },
    oo = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    };
  var po, qo;
  a: {
    for (var ro = ["CLOSURE_FLAGS"], so = za, to = 0; to < ro.length; to++)
      if (((so = so[ro[to]]), so == null)) {
        qo = null;
        break a;
      }
    qo = so;
  }
  var uo = qo && qo[610401301];
  po = uo != null ? uo : !1;
  function vo() {
    var a = za.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var wo,
    xo = za.navigator;
  wo = xo ? xo.userAgentData || null : null;
  function yo(a) {
    return po
      ? wo
        ? wo.brands.some(function (b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1;
          })
        : !1
      : !1;
  }
  function zo(a) {
    return vo().indexOf(a) != -1;
  }
  function Ao() {
    return po ? !!wo && wo.brands.length > 0 : !1;
  }
  function Bo() {
    return Ao() ? !1 : zo("Opera");
  }
  function Co() {
    return zo("Firefox") || zo("FxiOS");
  }
  function Do() {
    return Ao()
      ? yo("Chromium")
      : ((zo("Chrome") || zo("CriOS")) && !(Ao() ? 0 : zo("Edge"))) ||
          zo("Silk");
  }
  var Eo = function (a) {
    Eo[" "](a);
    return a;
  };
  Eo[" "] = function () {};
  var Fo = function (a, b, c, d) {
      for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (g == 38 || g == 63) {
          var k = a.charCodeAt(e + f);
          if (!k || k == 61 || k == 38 || k == 35) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Go = /#|$/,
    Ho = function (a, b) {
      var c = a.search(Go),
        d = Fo(a, 0, b, c);
      if (d < 0) return null;
      var e = a.indexOf("&", d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " ")
      );
    },
    Io = /[?&]($|#)/,
    Jo = function (a, b, c) {
      for (
        var d, e = a.search(Go), f = 0, g, k = [];
        (g = Fo(a, f, b, e)) >= 0;

      )
        k.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      k.push(a.slice(f));
      d = k.join("").replace(Io, "$1");
      var m,
        n = c != null ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        r < 0 && (r = d.length);
        var u = d.indexOf("?"),
          v;
        u < 0 || u > r ? ((u = r), (v = "")) : (v = d.substring(u + 1, r));
        q = [d.slice(0, u), v, d.slice(r)];
        var t = q[1];
        q[1] = p ? (t ? t + "&" + p : p) : t;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  function Ko() {
    return po ? !!wo && !!wo.platform : !1;
  }
  function Lo() {
    return zo("iPhone") && !zo("iPod") && !zo("iPad");
  }
  function Mo() {
    Lo() || zo("iPad") || zo("iPod");
  }
  Bo();
  Ao() || zo("Trident") || zo("MSIE");
  zo("Edge");
  !zo("Gecko") ||
    (vo().toLowerCase().indexOf("webkit") != -1 && !zo("Edge")) ||
    zo("Trident") ||
    zo("MSIE") ||
    zo("Edge");
  vo().toLowerCase().indexOf("webkit") != -1 && !zo("Edge") && zo("Mobile");
  Ko() || zo("Macintosh");
  Ko() || zo("Windows");
  (Ko() ? wo.platform === "Linux" : zo("Linux")) || Ko() || zo("CrOS");
  Ko() || zo("Android");
  Lo();
  zo("iPad");
  zo("iPod");
  Mo();
  vo().toLowerCase().indexOf("kaios");
  var No = function (a) {
      try {
        var b;
        if ((b = !!a && a.location.href != null))
          a: {
            try {
              Eo(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Oo = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    Po = function (a) {
      if (z.top == z) return 0;
      if (a === void 0 ? 0 : a) {
        var b = z.location.ancestorOrigins;
        if (b) return b[b.length - 1] == z.location.origin ? 1 : 2;
      }
      return No(z.top) ? 1 : 2;
    },
    Qo = function (a) {
      a = a === void 0 ? document : a;
      return a.createElement("img");
    },
    Ro = function () {
      for (var a = z, b = a; a && a != a.parent; )
        (a = a.parent), No(a) && (b = a);
      return b;
    };
  function So(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Qo(a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = bc(g, e);
          k >= 0 && Array.prototype.splice.call(g, k, 1);
        }
        oo(e, "load", f);
        oo(e, "error", f);
      };
      no(e, "load", f);
      no(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Uo = function (a) {
      var b;
      b = b === void 0 ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Oo(a, function (d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      To(c, b);
    },
    To = function (a, b) {
      var c = window,
        d;
      b = b === void 0 ? !1 : b;
      d = d === void 0 ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else So(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  var Vo = function () {
    this.P = this.P;
    this.C = this.C;
  };
  Vo.prototype.P = !1;
  Vo.prototype.dispose = function () {
    this.P || ((this.P = !0), this.Ha());
  };
  Vo.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  Vo.prototype.addOnDisposeCallback = function (a, b) {
    this.P
      ? b !== void 0
        ? a.call(b)
        : a()
      : (this.C || (this.C = []), b && (a = a.bind(b)), this.C.push(a));
  };
  Vo.prototype.Ha = function () {
    if (this.C) for (; this.C.length; ) this.C.shift()();
  };
  function Wo(a) {
    a.addtlConsent !== void 0 &&
      typeof a.addtlConsent !== "string" &&
      (a.addtlConsent = void 0);
    a.gdprApplies !== void 0 &&
      typeof a.gdprApplies !== "boolean" &&
      (a.gdprApplies = void 0);
    return (a.tcString !== void 0 && typeof a.tcString !== "string") ||
      (a.listenerId !== void 0 && typeof a.listenerId !== "number")
      ? 2
      : a.cmpStatus && a.cmpStatus !== "error"
      ? 0
      : 3;
  }
  var Xo = function (a, b) {
    b = b === void 0 ? {} : b;
    Vo.call(this);
    this.j = null;
    this.Z = {};
    this.ig = 0;
    this.K = null;
    this.H = a;
    var c;
    this.uc = (c = b.Jn) != null ? c : 500;
    var d;
    this.Fb = (d = b.ro) != null ? d : !1;
  };
  ra(Xo, Vo);
  Xo.prototype.Ha = function () {
    this.Z = {};
    this.K && (oo(this.H, "message", this.K), delete this.K);
    delete this.Z;
    delete this.H;
    delete this.j;
    Vo.prototype.Ha.call(this);
  };
  var Zo = function (a) {
    return typeof a.H.__tcfapi === "function" || Yo(a) != null;
  };
  Xo.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.Fb },
      d = mo(function () {
        return a(c);
      }),
      e = 0;
    this.uc !== -1 &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.uc));
    var f = function (g, k) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Wo(c)),
          (c.internalBlockOnErrors = b.Fb),
          (k && c.internalErrorState === 0) ||
            ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      $o(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Xo.prototype.removeEventListener = function (a) {
    a && a.listenerId && $o(this, "removeEventListener", null, a.listenerId);
  };
  var bp = function (a, b, c) {
      var d;
      d = d === void 0 ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (f !== void 0) {
            e = f[d === void 0 ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (g === 0) return !1;
      var k = c;
      c === 2
        ? ((k = 0), g === 2 && (k = 1))
        : c === 3 && ((k = 1), g === 1 && (k = 0));
      var m;
      if (k === 0)
        if (a.purpose && a.vendor) {
          var n = ap(a.vendor.consents, d === void 0 ? "755" : d);
          m =
            n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH"
              ? !0
              : n && ap(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          k === 1
            ? a.purpose && a.vendor
              ? ap(a.purpose.legitimateInterests, b) &&
                ap(a.vendor.legitimateInterests, d === void 0 ? "755" : d)
              : !0
            : !0;
      return m;
    },
    ap = function (a, b) {
      return !(!a || !a[b]);
    },
    $o = function (a, b, c, d) {
      c || (c = function () {});
      var e = a.H;
      if (typeof e.__tcfapi === "function") {
        var f = e.__tcfapi;
        f(b, 2, c, d);
      } else if (Yo(a)) {
        cp(a);
        var g = ++a.ig;
        a.Z[g] = c;
        if (a.j) {
          var k = {};
          a.j.postMessage(
            ((k.__tcfapiCall = {
              command: b,
              version: 2,
              callId: g,
              parameter: d,
            }),
            k),
            "*"
          );
        }
      } else c({}, !1);
    },
    Yo = function (a) {
      if (a.j) return a.j;
      var b;
      a: {
        for (var c = a.H, d = 0; d < 50; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.j = b;
      return a.j;
    },
    cp = function (a) {
      if (!a.K) {
        var b = function (c) {
          try {
            var d;
            d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data)
              .__tcfapiReturn;
            a.Z[d.callId](d.returnValue, d.success);
          } catch (e) {}
        };
        a.K = b;
        no(a.H, "message", b);
      }
    },
    dp = function (a) {
      if (a.gdprApplies === !1) return !0;
      a.internalErrorState === void 0 && (a.internalErrorState = Wo(a));
      return a.cmpStatus === "error" || a.internalErrorState !== 0
        ? a.internalBlockOnErrors
          ? (Uo({ e: String(a.internalErrorState) }), !1)
          : !0
        : a.cmpStatus !== "loaded" ||
          (a.eventStatus !== "tcloaded" &&
            a.eventStatus !== "useractioncomplete")
        ? !1
        : !0;
    };
  var ep = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function fp() {
    var a = cj.tcf || {};
    return (cj.tcf = a);
  }
  var gp = function () {
    return new Xo(z, { Jn: -1 });
  };
  function hp() {
    var a = fp(),
      b = gp();
    Zo(b) && !ip() && !sp() && T(124);
    if (!a.active && Zo(b)) {
      ip() &&
        ((a.active = !0),
        (a.Ac = {}),
        (a.cmpId = 0),
        (a.tcfPolicyVersion = 0),
        (ml().active = !0),
        (a.tcString = "tcunavailable"));
      Am();
      try {
        b.addEventListener(function (c) {
          if (c.internalErrorState !== 0)
            tp(a), Bm([P.g.N, P.g.wa, P.g.O]), (ml().active = !0);
          else if (
            ((a.gdprApplies = c.gdprApplies),
            (a.cmpId = c.cmpId),
            (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
            sp() && (a.active = !0),
            !up(c) || ip() || sp())
          ) {
            a.tcfPolicyVersion = c.tcfPolicyVersion;
            var d;
            if (c.gdprApplies === !1) {
              var e = {},
                f;
              for (f in ep) ep.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (up(c)) {
              var g = {},
                k;
              for (k in ep)
                if (ep.hasOwnProperty(k))
                  if (k === "1") {
                    var m,
                      n = c,
                      p = { Am: !0 };
                    p = p === void 0 ? {} : p;
                    m = dp(n)
                      ? n.gdprApplies === !1
                        ? !0
                        : n.tcString === "tcunavailable"
                        ? !p.yk
                        : (p.yk || n.gdprApplies !== void 0 || p.Am) &&
                          (p.yk ||
                            (typeof n.tcString === "string" &&
                              n.tcString.length))
                        ? bp(n, "1", 0)
                        : !0
                      : !1;
                    g["1"] = m;
                  } else g[k] = bp(c, k, ep[k]);
              d = g;
            }
            if (d) {
              a.tcString = c.tcString || "tcempty";
              a.Ac = d;
              var q = {},
                r = ((q[P.g.N] = a.Ac["1"] ? "granted" : "denied"), q);
              a.gdprApplies !== !0
                ? (Bm([P.g.N, P.g.wa, P.g.O]), (ml().active = !0))
                : ((r[P.g.wa] = a.Ac["3"] && a.Ac["4"] ? "granted" : "denied"),
                  typeof a.tcfPolicyVersion === "number" &&
                  a.tcfPolicyVersion >= 4
                    ? (r[P.g.O] = a.Ac["1"] && a.Ac["7"] ? "granted" : "denied")
                    : Bm([P.g.O]),
                  vm(
                    r,
                    { eventId: 0 },
                    {
                      gdprApplies: a ? a.gdprApplies : void 0,
                      tcString: vp() || "",
                    }
                  ));
            }
          } else Bm([P.g.N, P.g.wa, P.g.O]);
        });
      } catch (c) {
        tp(a), Bm([P.g.N, P.g.wa, P.g.O]), (ml().active = !0);
      }
    }
  }
  function tp(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function up(a) {
    return (
      a.eventStatus === "tcloaded" ||
      a.eventStatus === "useractioncomplete" ||
      a.eventStatus === "cmpuishown"
    );
  }
  function ip() {
    return z.gtag_enable_tcf_support === !0;
  }
  function sp() {
    return fp().enableAdvertiserConsentMode === !0;
  }
  function vp() {
    var a = fp();
    if (a.active) return a.tcString;
  }
  function wp() {
    var a = fp();
    if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0";
  }
  function xp(a) {
    if (!ep.hasOwnProperty(String(a))) return !0;
    var b = fp();
    return b.active && b.Ac ? !!b.Ac[String(a)] : !0;
  }
  var yp = [P.g.N, P.g.T, P.g.O, P.g.wa],
    zp = {},
    Ap = ((zp[P.g.N] = 1), (zp[P.g.T] = 2), zp);
  function Bp(a) {
    if (a === void 0) return 0;
    switch (U(a, P.g.na)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  function Cp(a) {
    if (Pl() === "US-CO" && ec.globalPrivacyControl === !0) return !1;
    var b = Bp(a);
    if (b === 3) return !1;
    switch (vl(P.g.wa)) {
      case 1:
      case 3:
        return !0;
      case 2:
        return !1;
      case 4:
        return b === 2;
      case 0:
        return !0;
      default:
        return !1;
    }
  }
  function Dp() {
    return yl() || !ul(P.g.N) || !ul(P.g.T);
  }
  function Ep() {
    var a = {},
      b;
    for (b in Ap) Ap.hasOwnProperty(b) && (a[Ap[b]] = vl(b));
    return "G1" + He(a[1] || 0) + He(a[2] || 0);
  }
  var Fp = {},
    Gp =
      ((Fp[P.g.N] = 0), (Fp[P.g.T] = 1), (Fp[P.g.O] = 2), (Fp[P.g.wa] = 3), Fp);
  function Hp(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  function Ip(a) {
    for (var b = "1", c = 0; c < yp.length; c++) {
      var d = b,
        e,
        f = yp[c],
        g = tl.delegatedConsentTypes[f];
      e = g === void 0 ? 0 : Gp.hasOwnProperty(g) ? 12 | Gp[g] : 8;
      var k = ml();
      k.accessedAny = !0;
      var m = k.entries[f] || {};
      e = (e << 2) | Hp(m.implicit);
      b =
        d +
        ("" +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            e
          ] +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (Hp(m.declare) << 4) | (Hp(m.default) << 2) | Hp(m.update)
          ]);
    }
    var n = b,
      p = (Pl() === "US-CO" && ec.globalPrivacyControl === !0 ? 1 : 0) << 3,
      q = (yl() ? 1 : 0) << 2,
      r = Bp(a);
    b =
      n +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        p | q | r
      ];
    return (b +=
      "" +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (tl.containerScopedDefaults.ad_storage << 4) |
          (tl.containerScopedDefaults.analytics_storage << 2) |
          tl.containerScopedDefaults.ad_user_data
      ] +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        ((tl.usedContainerScopedDefaults ? 1 : 0) << 2) |
          tl.containerScopedDefaults.ad_personalization
      ]);
  }
  function Jp() {
    if (!ul(P.g.O)) return "-";
    for (
      var a = Object.keys(Nh), b = wl(a), c = "", d = l(a), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value;
      b[f] && (c += Nh[f]);
    }
    (tl.usedCorePlatformServices ? tl.selectedAllCorePlatformServices : 1) &&
      (c += "o");
    return c || "-";
  }
  function Kp() {
    return Rl() || ((ip() || sp()) && wp() === "1") ? "1" : "0";
  }
  function Lp() {
    return (Rl() ? !0 : !(!ip() && !sp()) && wp() === "1") || !ul(P.g.O);
  }
  function Mp() {
    var a = "0",
      b = "0",
      c;
    var d = fp();
    c = d.active ? d.cmpId : void 0;
    typeof c === "number" &&
      c >= 0 &&
      c <= 4095 &&
      ((a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (c >> 6) & 63
      ]),
      (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        c & 63
      ]));
    var e = "0",
      f;
    var g = fp();
    f = g.active ? g.tcfPolicyVersion : void 0;
    typeof f === "number" &&
      f >= 0 &&
      f <= 63 &&
      (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        f
      ]);
    var k = 0;
    Rl() && (k |= 1);
    wp() === "1" && (k |= 2);
    ip() && (k |= 4);
    var m;
    var n = fp();
    m =
      n.enableAdvertiserConsentMode !== void 0
        ? n.enableAdvertiserConsentMode
          ? "1"
          : "0"
        : void 0;
    m === "1" && (k |= 8);
    ml().waitPeriodTimedOut && (k |= 16);
    return (
      "1" +
      a +
      b +
      e +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k]
    );
  }
  function Np() {
    return Pl() === "US-CO";
  }
  function Op() {
    var a = !1;
    return a;
  }
  var Pp = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 };
  function Qp(a) {
    a = a === void 0 ? {} : a;
    var b = Pf.ctid.split("-")[0].toUpperCase(),
      c = {
        ctid: Pf.ctid,
        xn: bj.Me,
        zn: bj.Ah,
        bn: wk.Je ? 2 : 1,
        En: a.Pk,
        Te: Pf.canonicalContainerId,
      };
    c.Te !== a.Aa && (c.Aa = a.Aa);
    var d = Jk();
    c.on = d ? d.canonicalContainerId : void 0;
    ij ? ((c.wg = Pp[b]), c.wg || (c.wg = 0)) : (c.wg = mj ? 13 : 10);
    wj.C
      ? ((c.ug = 0), (c.bm = 2))
      : kj
      ? (c.ug = 1)
      : Op()
      ? (c.ug = 2)
      : (c.ug = 3);
    var e = {};
    e[6] = xk;
    wj.j === 2 ? (e[7] = !0) : wj.j === 1 && (e[2] = !0);
    if (hc) {
      var f = Sj(Yj(hc), "host");
      f && (e[8] = f.match(/^(www\.)?googletagmanager\.com$/) === null);
    }
    c.gm = e;
    var g = a.kg,
      k;
    var m = c.wg,
      n = c.ug;
    m === void 0
      ? (k = "")
      : (n || (n = 0), (k = "" + Je(1, 1) + Ge((m << 2) | n)));
    var p = c.bm,
      q = "4" + k + (p ? "" + Je(2, 1) + Ge(p) : ""),
      r,
      u = c.zn;
    r = u && Ie.test(u) ? "" + Je(3, 2) + u : "";
    var v,
      t = c.xn;
    v = t ? "" + Je(4, 1) + Ge(t) : "";
    var w;
    var x = c.ctid;
    if (x && g) {
      var y = x.split("-"),
        A = y[0].toUpperCase();
      if (A !== "GTM" && A !== "OPT") w = "";
      else {
        var C = y[1];
        w = "" + Je(5, 3) + Ge(1 + C.length) + (c.bn || 0) + C;
      }
    } else w = "";
    var D = c.En,
      E = c.Te,
      K = c.Aa,
      H = c.zo,
      N =
        q +
        r +
        v +
        w +
        (D ? "" + Je(6, 1) + Ge(D) : "") +
        (E ? "" + Je(7, 3) + Ge(E.length) + E : "") +
        (K ? "" + Je(8, 3) + Ge(K.length) + K : "") +
        (H ? "" + Je(9, 3) + Ge(H.length) + H : ""),
      J;
    var V = c.gm;
    V = V === void 0 ? {} : V;
    for (
      var ca = [], ba = l(Object.keys(V)), Z = ba.next();
      !Z.done;
      Z = ba.next()
    ) {
      var O = Z.value;
      ca[Number(O)] = V[O];
    }
    if (ca.length) {
      var fa = Je(10, 3),
        ha;
      if (ca.length === 0) ha = Ge(0);
      else {
        for (var ia = [], Ca = 0, Ta = !1, va = 0; va < ca.length; va++) {
          Ta = !0;
          var Ja = va % 6;
          ca[va] && (Ca |= 1 << Ja);
          Ja === 5 && (ia.push(Ge(Ca)), (Ca = 0), (Ta = !1));
        }
        Ta && ia.push(Ge(Ca));
        ha = ia.join("");
      }
      var cb = ha;
      J = "" + fa + Ge(cb.length) + cb;
    } else J = "";
    var Bb = c.on;
    return N + J + (Bb ? "" + Je(11, 3) + Ge(Bb.length) + Bb : "");
  }
  function Rp(a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; d >= 0; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = c !== 0 ? b ^ (c >> 21) : b);
    return b;
  }
  function Sp(a) {
    return a.origin !== "null";
  }
  function Tp(a, b, c, d) {
    var e;
    if (Up(d)) {
      for (
        var f = [], g = String(b || Vp()).split(";"), k = 0;
        k < g.length;
        k++
      ) {
        var m = g[k].split("="),
          n = m[0].replace(/^\s*|\s*$/g, "");
        if (n && n === a) {
          var p = m
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          p && c && (p = decodeURIComponent(p));
          f.push(p);
        }
      }
      e = f;
    } else e = [];
    return e;
  }
  function Wp(a, b, c, d, e) {
    if (Up(e)) {
      var f = Xp(a, d, e);
      if (f.length === 1) return f[0].id;
      if (f.length !== 0) {
        f = Yp(
          f,
          function (g) {
            return g.mm;
          },
          b
        );
        if (f.length === 1) return f[0].id;
        f = Yp(
          f,
          function (g) {
            return g.qn;
          },
          c
        );
        return f[0] ? f[0].id : void 0;
      }
    }
  }
  function Zp(a, b, c, d) {
    var e = Vp(),
      f = window;
    Sp(f) && (f.document.cookie = a);
    var g = Vp();
    return e !== g || (c !== void 0 && Tp(b, g, !1, d).indexOf(c) >= 0);
  }
  function $p(a, b, c, d) {
    function e(w, x, y) {
      if (y == null) return delete k[x], w;
      k[x] = y;
      return w + "; " + x + "=" + y;
    }
    function f(w, x) {
      if (x == null) return w;
      k[x] = !0;
      return w + "; " + x;
    }
    if (!Up(c.Mb)) return 2;
    var g;
    b == null
      ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
      : (c.encode && (b = encodeURIComponent(b)),
        (b = aq(b)),
        (g = a + "=" + b));
    var k = {};
    g = e(g, "path", c.path);
    var m;
    c.expires instanceof Date
      ? (m = c.expires.toUTCString())
      : c.expires != null && (m = "" + c.expires);
    g = e(g, "expires", m);
    g = e(g, "max-age", c.hn);
    g = e(g, "samesite", c.An);
    c.secure && (g = f(g, "secure"));
    var n = c.domain;
    if (n && n.toLowerCase() === "auto") {
      for (var p = bq(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
        var v = p[u] !== "none" ? p[u] : void 0,
          t = e(g, "domain", v);
        t = f(t, c.flags);
        try {
          d && d(a, k);
        } catch (w) {
          q = w;
          continue;
        }
        r = !0;
        if (!cq(v, c.path) && Zp(t, a, b, c.Mb)) return 0;
      }
      if (q && !r) throw q;
      return 1;
    }
    n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, k);
    return cq(n, c.path) ? 1 : Zp(g, a, b, c.Mb) ? 0 : 1;
  }
  function dq(a, b, c) {
    c.path == null && (c.path = "/");
    c.domain || (c.domain = "auto");
    return $p(a, b, c);
  }
  function Yp(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c
        ? d.push(k)
        : f === void 0 || m < f
        ? ((e = [k]), (f = m))
        : m === f && e.push(k);
    }
    return d.length > 0 ? d : e;
  }
  function Xp(a, b, c) {
    for (var d = [], e = Tp(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || !k || b.indexOf(k) !== -1) {
        var m = g.shift();
        if (m) {
          var n = m.split("-");
          d.push({
            id: g.join("."),
            mm: Number(n[0]) || 1,
            qn: Number(n[1]) || 1,
          });
        }
      }
    }
    return d;
  }
  function aq(a) {
    a && a.length > 1200 && (a = a.substring(0, 1200));
    return a;
  }
  var eq = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    fq = /(^|\.)doubleclick\.net$/i;
  function cq(a, b) {
    return (
      a !== void 0 &&
      (fq.test(window.document.location.hostname) || (b === "/" && eq.test(a)))
    );
  }
  function gq(a) {
    if (!a) return 1;
    var b = a;
    ni(7) && a === "none" && (b = window.document.location.hostname);
    b = b.indexOf(".") === 0 ? b.substring(1) : b;
    return b.split(".").length;
  }
  function hq(a) {
    if (!a || a === "/") return 1;
    a[0] !== "/" && (a = "/" + a);
    a[a.length - 1] !== "/" && (a += "/");
    return a.split("/").length - 1;
  }
  function iq(a, b) {
    var c = "" + gq(a),
      d = hq(b);
    d > 1 && (c += "-" + d);
    return c;
  }
  var Vp = function () {
      return Sp(window) ? window.document.cookie : "";
    },
    Up = function (a) {
      return a && ni(8)
        ? (Array.isArray(a) ? a : [a]).every(function (b) {
            return xl(b) && ul(b);
          })
        : !0;
    },
    bq = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (b.length === 4) {
        var c = b[b.length - 1];
        if (Number(c).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      fq.test(e) || eq.test(e) || a.push("none");
      return a;
    };
  function jq(a) {
    var b = Math.round(Math.random() * 2147483647);
    return a ? String(b ^ (Rp(a) & 2147483647)) : String(b);
  }
  function kq(a) {
    return [jq(a), Math.round(ob() / 1e3)].join(".");
  }
  function lq(a, b, c, d, e) {
    var f = gq(b);
    return Wp(a, f, hq(c), d, e);
  }
  function mq(a, b, c, d) {
    return [b, iq(c, d), a].join(".");
  }
  function nq(a, b, c, d) {
    var e,
      f = Number(a.Lb != null ? a.Lb : void 0);
    f !== 0 && (e = new Date((b || ob()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Mb: d,
    };
  }
  var oq = ["ad_storage", "ad_user_data"];
  function pq(a, b) {
    if (a && b !== null && b !== void 0 && b !== "") {
      var c = qq(!1);
      c.error === 0 && c.value && ((c.value[a] = b), rq(c));
    }
  }
  function sq(a) {
    if (!a) return { error: 10 };
    var b = qq();
    if (b.error !== 0) return b;
    if (!b.value) return { error: 2 };
    if (!(a in b.value)) return { value: void 0, error: 15 };
    var c = b.value[a];
    return c === null || c === void 0 || c === ""
      ? { value: void 0, error: 11 }
      : { value: c, error: 0 };
  }
  function qq(a) {
    a = a === void 0 ? !0 : a;
    if (!ul(oq)) return { error: 3 };
    try {
      if (!z.localStorage) return { error: 1 };
    } catch (f) {
      return { error: 14 };
    }
    var b = { schema: "gcl", version: 1 },
      c = void 0;
    try {
      c = z.localStorage.getItem("_gcl_ls");
    } catch (f) {
      return { error: 13 };
    }
    try {
      if (c) {
        var d = JSON.parse(c);
        if (d && typeof d === "object") b = d;
        else return { error: 12 };
      }
    } catch (f) {
      return { error: 8 };
    }
    if (b.schema !== "gcl") return { error: 4 };
    if (b.version !== 1) return { error: 5 };
    try {
      var e = tq(b);
      a && e && rq({ value: b, error: 0 });
    } catch (f) {
      return { error: 8 };
    }
    return { value: b, error: 0 };
  }
  function tq(a) {
    if (!a || typeof a !== "object") return !1;
    if ("expires" in a && "value" in a) {
      var b;
      typeof a.expires === "number"
        ? (b = a.expires)
        : (b = typeof a.expires === "string" ? Number(a.expires) : NaN);
      if (isNaN(b) || !(Date.now() <= b))
        return (a.value = null), (a.error = 9), !0;
    } else {
      for (
        var c = !1, d = l(Object.keys(a)), e = d.next();
        !e.done;
        e = d.next()
      )
        c = tq(a[e.value]) || c;
      return c;
    }
    return !1;
  }
  function rq(a) {
    if (!a.error && a.value) {
      var b = a.value,
        c;
      try {
        c = JSON.stringify(b);
      } catch (d) {
        return;
      }
      try {
        z.localStorage.setItem("_gcl_ls", c);
      } catch (d) {}
    }
  }
  function uq() {
    if (!vq()) return -1;
    var a = sq("gcl_ctr");
    if (!a || a.error !== 0 || !a.value || typeof a.value !== "object")
      return -1;
    var b = a.value;
    try {
      if (!("value" in b && b.value) || typeof b.value !== "object") return -1;
      var c = b.value.value;
      return c == null || Number.isNaN(c) ? -1 : Number(c);
    } catch (d) {
      return -1;
    }
  }
  function vq() {
    return ul(["ad_storage", "ad_user_data"]) ? ni(11) : !1;
  }
  var wq;
  function xq() {
    function a(g) {
      c(g.target || g.srcElement || {});
    }
    function b(g) {
      d(g.target || g.srcElement || {});
    }
    var c = yq,
      d = zq,
      e = Aq();
    if (!e.init) {
      sc(B, "mousedown", a);
      sc(B, "keyup", a);
      sc(B, "submit", b);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function () {
        d(this);
        f.call(this);
      };
      e.init = !0;
    }
  }
  function Bq(a, b, c, d, e) {
    var f = {
      callback: a,
      domains: b,
      fragment: c === 2,
      placement: c,
      forms: d,
      sameHost: e,
    };
    Aq().decorators.push(f);
  }
  function Cq(a, b, c) {
    for (var d = Aq().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g = d[f],
        k;
      if ((k = !c || g.forms))
        a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== B.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  k = !0;
                  break a;
                }
              } else if (n.indexOf(m[q]) >= 0 || (p && m[q].indexOf(n) >= 0)) {
                k = !0;
                break a;
              }
          k = !1;
        }
      if (k) {
        var r = g.placement;
        r === void 0 && (r = g.fragment ? 2 : 1);
        r === b && rb(e, g.callback());
      }
    }
    return e;
  }
  function Aq() {
    var a = ic("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Dq = /(.*?)\*(.*?)\*(.*)/,
    Eq = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Fq = /^(?:www\.|m\.|amp\.)+/,
    Gq = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Hq(a) {
    var b = Gq.exec(a);
    if (b) return { li: b[1], query: b[2], fragment: b[3] };
  }
  function Iq(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  function Jq(a, b) {
    var c = [
        ec.userAgent,
        new Date().getTimezoneOffset(),
        ec.userLanguage || ec.language,
        Math.floor(ob() / 60 / 1e3) - (b === void 0 ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = wq)) {
      for (var e = Array(256), f = 0; f < 256; f++) {
        for (var g = f, k = 0; k < 8; k++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    wq = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ wq[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Kq(a) {
    return function (b) {
      var c = Yj(z.location.href),
        d = c.search.replace("?", ""),
        e = Rj(d, "_gl", !1, !0) || "";
      b.query = Lq(e) || {};
      var f = Sj(c, "fragment"),
        g;
      var k = -1;
      if (tb(f, "_gl=")) k = 4;
      else {
        var m = f.indexOf("&_gl=");
        m > 0 && (k = m + 3 + 2);
      }
      if (k < 0) g = void 0;
      else {
        var n = f.indexOf("&", k);
        g = n < 0 ? f.substring(k) : f.substring(k, n);
      }
      b.fragment = Lq(g || "") || {};
      a && Mq(c, d, f);
    };
  }
  function Nq(a, b) {
    var c = Iq(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  function Mq(a, b, c) {
    function d(g, k) {
      var m = Nq("_gl", g);
      m.length && (m = k + m);
      return m;
    }
    if (dc && dc.replaceState) {
      var e = Iq("_gl");
      if (e.test(b) || e.test(c)) {
        var f = Sj(a, "path");
        b = d(b, "?");
        c = d(c, "#");
        dc.replaceState({}, "", "" + f + b + c);
      }
    }
  }
  function Oq(a, b) {
    var c = Kq(!!b),
      d = Aq();
    d.data || ((d.data = { query: {}, fragment: {} }), c(d.data));
    var e = {},
      f = d.data;
    f && (rb(e, f.query), a && rb(e, f.fragment));
    return e;
  }
  var Lq = function (a) {
    try {
      var b = Pq(a, 3);
      if (b !== void 0) {
        for (
          var c = {}, d = b ? b.split("*") : [], e = 0;
          e + 1 < d.length;
          e += 2
        ) {
          var f = d[e],
            g = Sa(d[e + 1]);
          c[f] = g;
        }
        Va("TAGGING", 6);
        return c;
      }
    } catch (k) {
      Va("TAGGING", 8);
    }
  };
  function Pq(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; e < 3; ++e) {
          var f = Dq.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && g[1] === "1") {
        var k = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Jq(k, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return k;
        Va("TAGGING", 7);
      }
    }
  }
  function Qq(a, b, c, d, e) {
    function f(p) {
      p = Nq(a, p);
      var q = p.charAt(p.length - 1);
      p && q !== "&" && (p += "&");
      return p + n;
    }
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var g = Hq(c);
    if (!g) return "";
    var k = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (m.substring(1).length !== 0 && e) || (m = "#" + f(m.substring(1)))
      : (k = "?" + f(k.substring(1)));
    return "" + g.li + k + m;
  }
  function Rq(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var u in n)
          if (n.hasOwnProperty(u)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var v,
          t = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            x !== void 0 &&
              x === x &&
              x !== null &&
              x.toString() !== "[object Object]" &&
              (t.push(w), t.push(Ra(String(x))));
          }
        var y = t.join("*");
        v = ["1", Jq(y), y].join("*");
        d
          ? (ni(3) || ni(1) || !p) && Sq("_gl", v, a, p, q)
          : Tq("_gl", v, a, p, q);
      }
    }
    var d = (a.tagName || "").toUpperCase() === "FORM",
      e = Cq(b, 1, d),
      f = Cq(b, 2, d),
      g = Cq(b, 4, d),
      k = Cq(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    ni(1) && c(g, !0, !0);
    for (var m in k) k.hasOwnProperty(m) && Uq(m, k[m], a);
  }
  function Uq(a, b, c) {
    c.tagName.toLowerCase() === "a"
      ? Tq(a, b, c)
      : c.tagName.toLowerCase() === "form" && Sq(a, b, c);
  }
  function Tq(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !ni(5) || d)) {
        var k = z.location.href,
          m = Hq(c.href),
          n = Hq(k);
        g = !(m && n && m.li === n.li && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = Qq(a, b, c.href, d, e);
      Vb.test(p) && (c.href = p);
    }
  }
  function Sq(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if (f !== "get" || d) {
        if (f === "get" || f === "post") {
          var g = Qq(a, b, c.action, d, e);
          Vb.test(g) && (c.action = g);
        }
      } else {
        for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
          var p = k[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = B.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function yq(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && d > 0; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        (f !== "http:" && f !== "https:") || Rq(e, e.hostname);
      }
    } catch (g) {}
  }
  function zq(a) {
    try {
      if (a.action) {
        var b = Sj(Yj(a.action), "host");
        Rq(a, b);
      }
    } catch (c) {}
  }
  function Vq(a, b, c, d) {
    xq();
    var e = c === "fragment" ? 2 : 1;
    d = !!d;
    Bq(a, b, e, d, !1);
    e === 2 && Va("TAGGING", 23);
    d && Va("TAGGING", 24);
  }
  function Wq(a, b) {
    xq();
    Bq(a, [Uj(z.location, "host", !0)], b, !0, !0);
  }
  function Xq() {
    var a = B.location.hostname,
      b = Eq.exec(B.referrer);
    if (!b) return !1;
    var c = b[2],
      d = b[1],
      e = "";
    if (c) {
      var f = c.split("/"),
        g = f[1];
      e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g);
    } else if (d) {
      if (d.indexOf("xn--") === 0) return !1;
      e = d.replace(/-/g, ".").replace(/\.\./g, "-");
    }
    var k = a.replace(Fq, ""),
      m = e.replace(Fq, "");
    return k === m || ub(k, "." + m);
  }
  function Yq(a, b) {
    return a === !1 ? !1 : a || b || Xq();
  }
  var Zq = ["1"],
    $q = {},
    ar = {};
  function br(a, b) {
    b = b === void 0 ? !0 : b;
    var c = cr(a.prefix);
    if ($q[c]) dr(a);
    else if (er(c, a.path, a.domain)) {
      var d = ar[cr(a.prefix)];
      b && fr(a, d ? d.id : void 0, d ? d.gi : void 0);
      dr(a);
    } else {
      var e = Zj("auiddc");
      if (e) Va("TAGGING", 17), ($q[c] = e);
      else if (b) {
        var f = cr(a.prefix),
          g = kq();
        gr(f, g, a);
        er(c, a.path, a.domain);
        dr(a, !0);
      }
    }
  }
  function dr(a, b) {
    if ((b === void 0 ? 0 : b) && vq()) {
      var c = qq(!1);
      c.error === 0 &&
        c.value &&
        "gcl_ctr" in c.value &&
        (delete c.value.gcl_ctr, rq(c));
    }
    if (ul(["ad_storage", "ad_user_data"]) && ni(10) && uq() === -1) {
      var d = ob();
      pq("gcl_ctr", {
        value: { value: 0, creationTimeMs: d },
        expires: Number(nq(a || {}, d, !0).expires),
      });
    }
  }
  function fr(a, b, c) {
    var d = cr(a.prefix),
      e = $q[d];
    if (e) {
      var f = e.split(".");
      if (f.length === 2) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(ob() / 1e3)));
          gr(d, k, a, g * 1e3);
        }
      }
    }
  }
  function gr(a, b, c, d) {
    var e = mq(b, "1", c.domain, c.path),
      f = nq(c, d);
    f.Mb = hr();
    dq(a, e, f);
  }
  function er(a, b, c) {
    var d = lq(a, b, c, Zq, hr());
    if (!d) return !1;
    ir(a, d);
    return !0;
  }
  function ir(a, b) {
    var c = b.split(".");
    c.length === 5
      ? (($q[a] = c.slice(0, 2).join(".")),
        (ar[a] = { id: c.slice(2, 4).join("."), gi: Number(c[4]) || 0 }))
      : c.length === 3
      ? (ar[a] = { id: c.slice(0, 2).join("."), gi: Number(c[2]) || 0 })
      : ($q[a] = b);
  }
  function cr(a) {
    return (a || "_gcl") + "_au";
  }
  function jr(a) {
    function b() {
      ul(c) && a();
    }
    var c = hr();
    Bl(function () {
      b();
      ul(c) || Cl(b, c);
    }, c);
  }
  function kr(a) {
    var b = Oq(!0),
      c = cr(a.prefix);
    jr(function () {
      var d = b[c];
      if (d) {
        ir(c, d);
        var e = Number($q[c].split(".")[1]) * 1e3;
        if (e) {
          Va("TAGGING", 16);
          var f = nq(a, e);
          f.Mb = hr();
          var g = mq(d, "1", a.domain, a.path);
          dq(c, g, f);
        }
      }
    });
  }
  function lr(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = lq(a, e.path, e.domain, Zq, hr());
      k && (g[a] = k);
      return g;
    };
    jr(function () {
      Vq(f, b, c, d);
    });
  }
  function hr() {
    return ["ad_storage", "ad_user_data"];
  }
  var mr = {},
    nr =
      ((mr.k = { aa: /^[\w-]+$/ }),
      (mr.b = { aa: /^[\w-]+$/, vi: !0 }),
      (mr.i = { aa: /^[1-9]\d*$/ }),
      (mr.u = { aa: /^[1-9]\d*$/ }),
      mr);
  var or = {},
    rr =
      ((or[5] = { al: { 2: pr }, Lh: ["k", "i", "b", "u"] }),
      (or[4] = { al: { 2: pr, GCL: qr }, Lh: ["k", "i", "b"] }),
      or);
  function sr(a) {
    var b = rr[5];
    if (b) {
      var c = a.split(".")[0];
      if (c) {
        var d = b.al[c];
        if (d) return d(a, 5);
      }
    }
  }
  function pr(a, b) {
    var c = a.split(".");
    if (c.length === 3) {
      var d = {},
        e = rr[b];
      if (e) {
        for (
          var f = e.Lh, g = l(c[2].split("$")), k = g.next();
          !k.done;
          k = g.next()
        ) {
          var m = k.value,
            n = m[0];
          if (f.indexOf(n) !== -1)
            try {
              var p = decodeURIComponent(m.substring(1)),
                q = nr[n];
              q && (q.vi ? ((d[n] = d[n] || []), d[n].push(p)) : (d[n] = p));
            } catch (r) {}
        }
        return d;
      }
    }
  }
  function tr(a, b) {
    var c = rr[5];
    if (c) {
      for (var d = [], e = l(c.Lh), f = e.next(); !f.done; f = e.next()) {
        var g = f.value,
          k = nr[g];
        if (k) {
          var m = a[g];
          if (m !== void 0)
            if (k.vi && Array.isArray(m))
              for (var n = l(m), p = n.next(); !p.done; p = n.next())
                d.push(encodeURIComponent("" + g + p.value));
            else d.push(encodeURIComponent("" + g + m));
        }
      }
      return ["2", b || "1", d.join("$")].join(".");
    }
  }
  function qr(a) {
    var b = a.split(".");
    b.shift();
    var c = b.shift(),
      d = b.shift(),
      e = {};
    return (e.k = d), (e.i = c), (e.b = b), e;
  }
  var ur = new Map([
    [5, "ad_storage"],
    [4, ["ad_storage", "ad_user_data"]],
  ]);
  function vr(a) {
    if (rr[5]) {
      for (
        var b = [],
          c = Tp(a, void 0, void 0, ur.get(5)),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = sr(e.value);
        f && (wr(f), b.push(f));
      }
      return b;
    }
  }
  function xr(a, b, c, d) {
    c = c || {};
    var e = iq(c.domain, c.path),
      f = tr(b, e);
    if (f) {
      var g = nq(c, d, void 0, ur.get(5));
      dq(a, f, g);
    }
  }
  function yr(a, b) {
    var c = b.aa;
    return typeof c === "function" ? c(a) : c.test(a);
  }
  function wr(a) {
    for (
      var b = l(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { Ve: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.Ve = nr[e];
      d.Ve
        ? d.Ve.vi
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (k) {
                      return yr(k, g.Ve);
                    };
                  })(d)
                )
              : void 0)
          : (typeof f === "string" && yr(f, d.Ve)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
  }
  function zr(a) {
    for (
      var b = [],
        c = B.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Ci: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  }
  function Ar(a, b) {
    var c = zr(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !(f[0] !== "1" || (b && f.length < 3) || (!b && f.length !== 3)) &&
        Number(f[1])
      ) {
        d[c[e].Ci] || (d[c[e].Ci] = []);
        var g = { version: f[0], timestamp: Number(f[1]) * 1e3, U: f[2] };
        b && f.length > 3 && (g.labels = f.slice(3));
        d[c[e].Ci].push(g);
      }
    }
    return d;
  }
  function Br() {
    var a = String,
      b = z.location.hostname,
      c = z.location.pathname,
      d = (b = Db(b));
    d.split(".").length > 2 &&
      (d = d.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
    b = d;
    c = Db(c);
    var e = c.split(";")[0];
    e = e.replace(/\/(ar|slp|web|index)?\/?$/, "");
    return a(Rp(("" + b + e).toLowerCase()));
  }
  var Cr = /^\w+$/,
    Dr = /^[\w-]+$/,
    Er = {},
    Fr =
      ((Er.aw = "_aw"),
      (Er.dc = "_dc"),
      (Er.gf = "_gf"),
      (Er.gp = "_gp"),
      (Er.gs = "_gs"),
      (Er.ha = "_ha"),
      (Er.ag = "_ag"),
      (Er.gb = "_gb"),
      Er);
  function Gr() {
    return ["ad_storage", "ad_user_data"];
  }
  function Hr(a) {
    return !ni(8) || ul(a);
  }
  function Ir(a, b) {
    function c() {
      var d = Hr(b);
      d && a();
      return d;
    }
    Bl(function () {
      c() || Cl(c, b);
    }, b);
  }
  function Jr(a) {
    return Kr(a).map(function (b) {
      return b.U;
    });
  }
  function Lr(a) {
    return Mr(a)
      .filter(function (b) {
        return b.U;
      })
      .map(function (b) {
        return b.U;
      });
  }
  function Mr(a) {
    var b = Nr(a.prefix),
      c = Or("gb", b),
      d = Or("ag", b);
    if (!d || !c) return [];
    var e = function (k) {
        return function (m) {
          m.type = k;
          return m;
        };
      },
      f = Kr(c).map(e("gb")),
      g = Pr(d).map(e("ag"));
    return f.concat(g).sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
  }
  function Qr(a, b, c, d, e, f) {
    var g = db(a, function (k) {
      return k.U === c;
    });
    g
      ? (g.timestamp < d && ((g.timestamp = d), (g.Td = f)),
        (g.labels = Rr(g.labels || [], e || [])))
      : a.push({ version: b, U: c, timestamp: d, labels: e, Td: f });
  }
  function Pr(a) {
    for (
      var b = vr(a) || [], c = [], d = l(b), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value,
        g = f,
        k = g.k,
        m = g.b,
        n = Sr(f);
      if (n) {
        var p = void 0;
        ni(9) && (p = f.u);
        Qr(c, "2", k, n, m || [], p);
      }
    }
    return c.sort(function (q, r) {
      return r.timestamp - q.timestamp;
    });
  }
  function Kr(a) {
    for (
      var b = [], c = Tp(a, B.cookie, void 0, Gr()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Tr(e.value);
      if (f != null) {
        var g = f;
        Qr(b, g.version, g.U, g.timestamp, g.labels);
      }
    }
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Ur(b);
  }
  function Vr(a, b) {
    for (var c = [], d = l(a), e = d.next(); !e.done; e = d.next()) {
      var f = e.value;
      c.includes(f) || c.push(f);
    }
    for (var g = l(b), k = g.next(); !k.done; k = g.next()) {
      var m = k.value;
      c.includes(m) || c.push(m);
    }
    return c;
  }
  function Wr(a, b) {
    var c = db(a, function (d) {
      return d.U === b.U;
    });
    c
      ? (c.timestamp < b.timestamp &&
          ((c.timestamp = b.timestamp), (c.Td = b.Td)),
        (c.Oa = c.Oa
          ? b.Oa
            ? c.timestamp < b.timestamp
              ? b.Oa
              : c.Oa
            : c.Oa || 0
          : b.Oa || 0),
        (c.labels = Vr(c.labels || [], b.labels || [])),
        (c.Yc = Vr(c.Yc || [], b.Yc || [])))
      : a.push(b);
  }
  function Xr() {
    var a = sq("gclid");
    if (!a || a.error || !a.value || typeof a.value !== "object") return null;
    var b = a.value;
    try {
      if (!("value" in b && b.value) || typeof b.value !== "object")
        return null;
      var c = b.value,
        d = c.value;
      return d && d.match(Dr)
        ? {
            version: "",
            U: d,
            timestamp: Number(c.creationTimeMs) || 0,
            labels: [],
            Oa: c.linkDecorationSource || 0,
            Yc: [2],
          }
        : null;
    } catch (e) {
      return null;
    }
  }
  function Yr(a) {
    for (
      var b = [], c = Tp(a, B.cookie, void 0, Gr()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Tr(e.value);
      f != null && ((f.Td = void 0), (f.Oa = 0), (f.Yc = [1]), Wr(b, f));
    }
    var g = Xr();
    g && ((g.Td = void 0), (g.Oa = g.Oa || 0), (g.Yc = g.Yc || [2]), Wr(b, g));
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Ur(b);
  }
  function Rr(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function Nr(a) {
    return a && typeof a === "string" && a.match(Cr) ? a : "_gcl";
  }
  function Zr(a, b, c) {
    var d = Yj(a),
      e = Sj(d, "query", !1, void 0, "gclsrc"),
      f = { value: Sj(d, "query", !1, void 0, "gclid"), Oa: c ? 4 : 2 };
    if (b && (!f.value || !e)) {
      var g = d.hash.replace("#", "");
      f.value || ((f.value = Rj(g, "gclid", !1)), (f.Oa = 3));
      e || (e = Rj(g, "gclsrc", !1));
    }
    return !f.value || (e !== void 0 && e !== "aw" && e !== "aw.ds") ? [] : [f];
  }
  function $r(a, b) {
    var c = Yj(a),
      d = Sj(c, "query", !1, void 0, "gclid"),
      e = Sj(c, "query", !1, void 0, "gclsrc"),
      f = Sj(c, "query", !1, void 0, "wbraid");
    f = Ab(f);
    var g = Sj(c, "query", !1, void 0, "gbraid"),
      k = Sj(c, "query", !1, void 0, "gad_source"),
      m = Sj(c, "query", !1, void 0, "dclid");
    if (b && !(d && e && f && g)) {
      var n = c.hash.replace("#", "");
      d = d || Rj(n, "gclid", !1);
      e = e || Rj(n, "gclsrc", !1);
      f = f || Rj(n, "wbraid", !1);
      g = g || Rj(n, "gbraid", !1);
      k = k || Rj(n, "gad_source", !1);
    }
    return as(d, e, m, f, g, k);
  }
  function bs() {
    return $r(z.location.href, !0);
  }
  function as(a, b, c, d, e, f) {
    var g = {},
      k = function (m, n) {
        g[n] || (g[n] = []);
        g[n].push(m);
      };
    g.gclid = a;
    g.gclsrc = b;
    g.dclid = c;
    if (a !== void 0 && a.match(Dr))
      switch (b) {
        case void 0:
          k(a, "aw");
          break;
        case "aw.ds":
          k(a, "aw");
          k(a, "dc");
          break;
        case "ds":
          k(a, "dc");
          break;
        case "3p.ds":
          k(a, "dc");
          break;
        case "gf":
          k(a, "gf");
          break;
        case "ha":
          k(a, "ha");
      }
    c && k(c, "dc");
    d !== void 0 && Dr.test(d) && ((g.wbraid = d), k(d, "gb"));
    e !== void 0 && Dr.test(e) && ((g.gbraid = e), k(e, "ag"));
    f !== void 0 && Dr.test(f) && ((g.gad_source = f), k(f, "gs"));
    return g;
  }
  function cs(a) {
    for (
      var b = bs(), c = !0, d = l(Object.keys(b)), e = d.next();
      !e.done;
      e = d.next()
    )
      if (b[e.value] !== void 0) {
        c = !1;
        break;
      }
    c && ((b = $r(z.document.referrer, !1)), (b.gad_source = void 0));
    ds(b, !1, a);
  }
  function es(a) {
    cs(a);
    var b = Zr(z.location.href, !0, !1);
    b.length || (b = Zr(z.document.referrer, !1, !0));
    if (b.length) {
      var c = b[0];
      a = a || {};
      var d = ob(),
        e = nq(a, d, !0),
        f = Gr(),
        g = function () {
          Hr(f) &&
            e.expires !== void 0 &&
            pq("gclid", {
              value: {
                value: c.value,
                creationTimeMs: d,
                linkDecorationSource: c.Oa,
              },
              expires: Number(e.expires),
            });
        };
      Bl(function () {
        g();
        Hr(f) || Cl(g, f);
      }, f);
    }
  }
  function ds(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = Nr(c.prefix),
      g = d || ob(),
      k = Math.round(g / 1e3),
      m = Gr(),
      n = !1,
      p = !1,
      q = function () {
        if (Hr(m)) {
          var r = nq(c, g, !0);
          r.Mb = m;
          for (
            var u = function (H, N) {
                var J = Or(H, f);
                J && (dq(J, N, r), H !== "gb" && (n = !0));
              },
              v = function (H) {
                var N = ["GCL", k, H];
                e.length > 0 && N.push(e.join("."));
                return N.join(".");
              },
              t = l(["aw", "dc", "gf", "ha", "gp"]),
              w = t.next();
            !w.done;
            w = t.next()
          ) {
            var x = w.value;
            a[x] && u(x, v(a[x][0]));
          }
          if (!n && a.gb) {
            var y = a.gb[0],
              A = Or("gb", f);
            (!b &&
              Kr(A).some(function (H) {
                return H.U === y && H.labels && H.labels.length > 0;
              })) ||
              u("gb", v(y));
          }
        }
        if (!p && a.gbraid && Hr("ad_storage") && ((p = !0), !n)) {
          var C = a.gbraid,
            D = Or("ag", f);
          if (
            b ||
            !Pr(D).some(function (H) {
              return H.U === C && H.labels && H.labels.length > 0;
            })
          ) {
            var E = {},
              K = ((E.k = C), (E.i = "" + k), (E.b = e), E);
            xr(D, K, c, g);
          }
        }
        fs(a, f, g, c);
      };
    Bl(function () {
      q();
      Hr(m) || Cl(q, m);
    }, m);
  }
  function fs(a, b, c, d) {
    if (a.gad_source !== void 0 && Hr("ad_storage")) {
      if (ni(4)) {
        var e = Fc();
        if (e === "r" || e === "h") return;
      }
      var f = a.gad_source,
        g = Or("gs", b);
      if (g) {
        var k = Math.floor((ob() - (Ec() || 0)) / 1e3),
          m;
        if (ni(9)) {
          var n = Br(),
            p = {};
          m = ((p.k = f), (p.i = "" + k), (p.u = n), p);
        } else {
          var q = {};
          m = ((q.k = f), (q.i = "" + k), q);
        }
        xr(g, m, d, c);
      }
    }
  }
  function gs(a, b) {
    var c = Oq(!0);
    Ir(function () {
      for (var d = Nr(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (Fr[f] !== void 0) {
          var g = Or(f, d),
            k = c[g];
          if (k) {
            var m = Math.min(hs(k), ob()),
              n;
            b: {
              for (
                var p = m, q = Tp(g, B.cookie, void 0, Gr()), r = 0;
                r < q.length;
                ++r
              )
                if (hs(q[r]) > p) {
                  n = !0;
                  break b;
                }
              n = !1;
            }
            if (!n) {
              var u = nq(b, m, !0);
              u.Mb = Gr();
              dq(g, k, u);
            }
          }
        }
      }
      ds(as(c.gclid, c.gclsrc), !1, b);
    }, Gr());
  }
  function is(a) {
    var b = ["ag"],
      c = Oq(!0),
      d = Nr(a.prefix);
    Ir(
      function () {
        for (var e = 0; e < b.length; ++e) {
          var f = Or(b[e], d);
          if (f) {
            var g = c[f];
            if (g) {
              var k = sr(g);
              if (k) {
                var m = Sr(k);
                m || (m = ob());
                var n;
                a: {
                  for (var p = m, q = vr(f), r = 0; r < q.length; ++r)
                    if (Sr(q[r]) > p) {
                      n = !0;
                      break a;
                    }
                  n = !1;
                }
                if (n) break;
                k.i = "" + Math.round(m / 1e3);
                xr(f, k, a, m);
              }
            }
          }
        }
      },
      ["ad_storage"]
    );
  }
  function Or(a, b) {
    var c = Fr[a];
    if (c !== void 0) return b + c;
  }
  function hs(a) {
    return js(a.split(".")).length !== 0
      ? (Number(a.split(".")[1]) || 0) * 1e3
      : 0;
  }
  function Sr(a) {
    return a ? (Number(a.i) || 0) * 1e3 : 0;
  }
  function Tr(a) {
    var b = js(a.split("."));
    return b.length === 0
      ? null
      : {
          version: b[0],
          U: b[2],
          timestamp: (Number(b[1]) || 0) * 1e3,
          labels: b.slice(3),
        };
  }
  function js(a) {
    return a.length < 3 ||
      (a[0] !== "GCL" && a[0] !== "1") ||
      !/^\d+$/.test(a[1]) ||
      !Dr.test(a[2])
      ? []
      : a;
  }
  function ks(a, b, c, d, e) {
    if (Array.isArray(b) && Sp(z)) {
      var f = Nr(e),
        g = function () {
          for (var k = {}, m = 0; m < a.length; ++m) {
            var n = Or(a[m], f);
            if (n) {
              var p = Tp(n, B.cookie, void 0, Gr());
              p.length && (k[n] = p.sort()[p.length - 1]);
            }
          }
          return k;
        };
      Ir(function () {
        Vq(g, b, c, d);
      }, Gr());
    }
  }
  function ls(a, b, c, d) {
    if (Array.isArray(a) && Sp(z)) {
      var e = ["ag"],
        f = Nr(d),
        g = function () {
          for (var k = {}, m = 0; m < e.length; ++m) {
            var n = Or(e[m], f);
            if (!n) return {};
            var p = vr(n);
            if (p.length) {
              var q = p.sort(function (r, u) {
                return Sr(u) - Sr(r);
              })[0];
              k[n] = tr(q);
            }
          }
          return k;
        };
      Ir(
        function () {
          Vq(g, a, b, c);
        },
        ["ad_storage"]
      );
    }
  }
  function Ur(a) {
    return a.filter(function (b) {
      return Dr.test(b.U);
    });
  }
  function ms(a, b) {
    if (Sp(z)) {
      for (var c = Nr(b.prefix), d = {}, e = 0; e < a.length; e++)
        Fr[a[e]] && (d[a[e]] = Fr[a[e]]);
      Ir(function () {
        hb(d, function (f, g) {
          var k = Tp(c + g, B.cookie, void 0, Gr());
          k.sort(function (u, v) {
            return hs(v) - hs(u);
          });
          if (k.length) {
            var m = k[0],
              n = hs(m),
              p = js(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
              q = {},
              r;
            r = js(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
            q[f] = [r];
            ds(q, !0, b, n, p);
          }
        });
      }, Gr());
    }
  }
  function ns(a) {
    var b = ["ag"],
      c = ["gbraid"];
    Ir(
      function () {
        for (var d = Nr(a.prefix), e = 0; e < b.length; ++e) {
          var f = Or(b[e], d);
          if (!f) break;
          var g = vr(f);
          if (g.length) {
            var k = g.sort(function (q, r) {
                return Sr(r) - Sr(q);
              })[0],
              m = Sr(k),
              n = k.b,
              p = {};
            p[c[e]] = k.k;
            ds(p, !0, a, m, n);
          }
        }
      },
      ["ad_storage"]
    );
  }
  function os(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  function ps(a) {
    function b(k, m, n) {
      n && (k[m] = n);
    }
    if (yl()) {
      var c = bs(),
        d;
      a.includes("gad_source") &&
        (d = c.gad_source !== void 0 ? c.gad_source : Oq(!1)._gs);
      if (os(c, a) || d) {
        var e = {};
        b(e, "gclid", c.gclid);
        b(e, "dclid", c.dclid);
        b(e, "gclsrc", c.gclsrc);
        b(e, "wbraid", c.wbraid);
        b(e, "gbraid", c.gbraid);
        Wq(function () {
          return e;
        }, 3);
        var f = {},
          g = ((f._up = "1"), f);
        b(g, "_gs", d);
        Wq(function () {
          return g;
        }, 1);
      }
    }
  }
  function qs(a) {
    if (!ni(1)) return null;
    var b = Oq(!0).gad_source;
    if (b != null) return (z.location.hash = ""), b;
    if (ni(2)) {
      var c = Yj(z.location.href);
      b = Sj(c, "query", !1, void 0, "gad_source");
      if (b != null) return b;
      var d = bs();
      if (os(d, a)) return "0";
    }
    return null;
  }
  function rs(a) {
    var b = qs(a);
    b != null &&
      Wq(function () {
        var c = {};
        return (c.gad_source = b), c;
      }, 4);
  }
  function ss(a, b, c) {
    var d = [];
    if (b.length === 0) return d;
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        k = g.type ? g.type : "gcl";
      (g.labels || []).indexOf(c) === -1
        ? (a.push(0), e[k] || d.push(g))
        : a.push(1);
      e[k] = !0;
    }
    return d;
  }
  function ts(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!Hr(Gr())) return e;
    var f = Kr(a),
      g = ss(e, f, b);
    if (g.length && !d)
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) {
        var n = m.value,
          p = n.timestamp,
          q = [n.version, Math.round(p / 1e3), n.U]
            .concat(n.labels || [], [b])
            .join("."),
          r = nq(c, p, !0);
        r.Mb = Gr();
        dq(a, q, r);
      }
    return e;
  }
  function us(a, b) {
    var c = [];
    b = b || {};
    var d = Mr(b),
      e = ss(c, d, a);
    if (e.length)
      for (var f = l(e), g = f.next(); !g.done; g = f.next()) {
        var k = g.value,
          m = Nr(b.prefix),
          n = Or(k.type, m);
        if (!n) break;
        var p = k,
          q = p.version,
          r = p.U,
          u = p.labels,
          v = p.timestamp,
          t = Math.round(v / 1e3);
        if (k.type === "ag") {
          var w = {},
            x = ((w.k = r), (w.i = "" + t), (w.b = (u || []).concat([a])), w);
          xr(n, x, b, v);
        } else if (k.type === "gb") {
          var y = [q, t, r].concat(u || [], [a]).join("."),
            A = nq(b, v, !0);
          A.Mb = Gr();
          dq(n, y, A);
        }
      }
    return c;
  }
  function vs(a, b) {
    var c = Nr(b),
      d = Or(a, c);
    if (!d) return 0;
    var e;
    e = a === "ag" ? Pr(d) : Kr(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function ws(a) {
    for (var b = 0, c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next())
      for (var e = a[d.value], f = 0; f < e.length; f++)
        b = Math.max(b, Number(e[f].timestamp));
    return b;
  }
  function xs(a) {
    var b = Math.max(vs("aw", a), ws(Hr(Gr()) ? Ar() : {})),
      c = Math.max(vs("gb", a), ws(Hr(Gr()) ? Ar("_gac_gb", !0) : {}));
    c = Math.max(c, vs("ag", a));
    return c > b;
  }
  function Ns() {
    cj.dedupe_gclid || (cj.dedupe_gclid = kq());
    return cj.dedupe_gclid;
  }
  var Os = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Ps = /^www.googleadservices.com$/;
  function Qs(a) {
    a || (a = Rs());
    return a.Nn
      ? !1
      : a.Lm || a.Mm || a.Pm || a.Nm || a.bf || a.zm || a.Om || a.Dm
      ? !0
      : !1;
  }
  function Rs() {
    var a = {},
      b = Oq(!0);
    a.Nn = !!b._up;
    var c = bs();
    a.Lm = c.aw !== void 0;
    a.Mm = c.dc !== void 0;
    a.Pm = c.wbraid !== void 0;
    a.Nm = c.gbraid !== void 0;
    a.Om = c.gclsrc === "aw.ds";
    a.bf = As().bf;
    var d = B.referrer ? Sj(Yj(B.referrer), "host") : "";
    a.Dm = Os.test(d);
    a.zm = Ps.test(d);
    return a;
  }
  var Ss = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    Ts = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Us = /^\d+\.fls\.doubleclick\.net$/,
    Vs = /;gac=([^;?]+)/,
    Ws = /;gacgb=([^;?]+)/;
  function Xs(a, b) {
    if (Us.test(B.location.host)) {
      var c = B.location.href.match(b);
      return c && c.length === 2 && c[1].match(Ss)
        ? decodeURIComponent(c[1])
        : "";
    }
    for (
      var d = [], e = l(Object.keys(a)), f = e.next();
      !f.done;
      f = e.next()
    ) {
      for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++)
        k.push(m[n].U);
      d.push(g + ":" + k.join(","));
    }
    return d.length > 0 ? d.join(";") : "";
  }
  function Ys(a, b, c) {
    for (
      var d = Hr(Gr()) ? Ar("_gac_gb", !0) : {},
        e = [],
        f = !1,
        g = l(Object.keys(d)),
        k = g.next();
      !k.done;
      k = g.next()
    ) {
      var m = k.value,
        n = ts("_gac_gb_" + m, a, b, c);
      f =
        f ||
        (n.length !== 0 &&
          n.some(function (p) {
            return p === 1;
          }));
      e.push(m + ":" + n.join(","));
    }
    return { ym: f ? e.join(";") : "", xm: Xs(d, Ws) };
  }
  function Zs(a) {
    var b = B.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
    return b && b.length === 2 && b[1].match(Ts) ? b[1] : void 0;
  }
  function $s(a) {
    var b = ni(9),
      c = {},
      d,
      e,
      f;
    Us.test(B.location.host) &&
      ((d = Zs("gclgs")), (e = Zs("gclst")), b && (f = Zs("gcllp")));
    if (d && e && (!b || f)) (c.ng = d), (c.pg = e), (c.og = f);
    else {
      var g = ob(),
        k = Pr((a || "_gcl") + "_gs"),
        m = k.map(function (q) {
          return q.U;
        }),
        n = k.map(function (q) {
          return g - q.timestamp;
        }),
        p = [];
      b &&
        (p = k.map(function (q) {
          return q.Td;
        }));
      m.length > 0 &&
        n.length > 0 &&
        (!b || p.length > 0) &&
        ((c.ng = m.join(".")),
        (c.pg = n.join(".")),
        b && p.length > 0 && (c.og = p.join(".")));
    }
    return c;
  }
  function at(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (Us.test(B.location.host)) {
      var e = Zs(c);
      if (e) return [{ U: e }];
    } else {
      if (b === "gclid") {
        var f = (a || "_gcl") + "_aw";
        return d ? Yr(f) : Kr(f);
      }
      if (b === "wbraid") return Kr((a || "_gcl") + "_gb");
      if (b === "braids") return Mr({ prefix: a });
    }
    return [];
  }
  function bt(a) {
    return at(a, "gclid", "gclaw")
      .map(function (b) {
        return b.U;
      })
      .join(".");
  }
  function ct(a) {
    var b = at(a, "gclid", "gclaw", !0),
      c = b
        .map(function (f) {
          return f.U;
        })
        .join("."),
      d = b
        .map(function (f) {
          return f.Oa || 0;
        })
        .join("."),
      e = b
        .map(function (f) {
          for (
            var g = 0, k = l(f.Yc || []), m = k.next();
            !m.done;
            m = k.next()
          ) {
            var n = m.value;
            n === 1 && (g |= 1);
            n === 2 && (g |= 2);
          }
          return g.toString();
        })
        .join(".");
    return { U: c, wk: d, xk: e };
  }
  function dt(a) {
    return at(a, "braids", "gclgb")
      .map(function (b) {
        return b.U;
      })
      .join(".");
  }
  function et(a) {
    return Us.test(B.location.host) ? !(Zs("gclaw") || Zs("gac")) : xs(a);
  }
  function ft(a, b, c) {
    var d;
    d = c ? us(a, b) : ts(((b && b.prefix) || "_gcl") + "_gb", a, b);
    return d.length === 0 ||
      d.every(function (e) {
        return e === 0;
      })
      ? ""
      : d.join(".");
  }
  function gt() {
    var a = z.__uspapi;
    if (Za(a)) {
      var b = "";
      try {
        a("getUSPData", 1, function (c, d) {
          if (d && c) {
            var e = c.uspString;
            e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e);
          }
        });
      } catch (c) {}
      return b;
    }
  }
  function qt(a) {
    var b = U(a.m, P.g.Sb),
      c = U(a.m, P.g.oc);
    b && !c
      ? (a.eventName !== P.g.da && a.eventName !== P.g.dd && T(131),
        (a.isAborted = !0))
      : !b && c && (T(132), (a.isAborted = !0));
  }
  function rt(a) {
    var b = W(P.g.N) ? cj.pscdl : "denied";
    b != null && (a.j[P.g.If] = b);
  }
  function st(a) {
    var b = Po(!0);
    a.j[P.g.Rb] = b;
  }
  function tt(a) {
    Np() && (a.j[P.g.Kc] = 1);
  }
  function jt() {
    var a = B.title;
    if (a === void 0 || a === "") return "";
    var b = function (d) {
      try {
        return decodeURIComponent(d), !0;
      } catch (e) {
        return !1;
      }
    };
    a = encodeURIComponent(a);
    for (var c = 256; c > 0 && !b(a.substring(0, c)); ) c--;
    return decodeURIComponent(a.substring(0, c));
  }
  function ut(a) {
    vt(a, "ce", U(a.m, P.g.Ra));
  }
  function vt(a, b, c) {
    a.j[P.g.Id] || (a.j[P.g.Id] = {});
    a.j[P.g.Id][b] = c;
  }
  function Ct(a, b, c, d) {
    var e = oc(),
      f;
    if (e === 1)
      a: {
        var g = oj;
        g = g.toLowerCase();
        for (
          var k = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = B.getElementsByTagName("script"),
            q = 0;
          q < p.length && q < 100;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (r.indexOf(m) === 0) {
              f = 3;
              break a;
            }
            n === 1 && r.indexOf(k) === 0 && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (f === 2 || d || "http:" !== z.location.protocol ? a : b) + c;
  }
  function Dt(a) {
    return typeof a !== "object" || a === null ? {} : a;
  }
  function Et(a) {
    return a === void 0 || a === null
      ? ""
      : typeof a === "object"
      ? a.toString()
      : String(a);
  }
  function Ft(a) {
    if (a !== void 0 && a !== null) return Et(a);
  }
  function Gt(a) {
    return typeof a === "number" ? a : Ft(a);
  }
  function St(a) {
    return {
      getDestinationId: function () {
        return a.target.destinationId;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.j[b];
      },
      setHitData: function (b, c) {
        a.j[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        a.j[b] === void 0 && (a.j[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return U(a.m, b);
      },
      Xb: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.j);
      },
    };
  }
  function Zt(a) {
    var b,
      c = z,
      d = [];
    try {
      c.navigation && c.navigation.entries && (d = c.navigation.entries());
    } catch (k) {}
    b = d;
    for (var e = b.length - 1; e >= 0; e--) {
      var f = b[e],
        g = f.url && f.url.match("[?&#]" + a + "=([^&#]+)");
      if (g && g.length === 2) return g[1];
    }
  }
  var $t,
    au = !1;
  function bu() {
    au = !0;
    $t = $t || {};
  }
  function cu(a) {
    au || bu();
    return $t[a];
  }
  function du() {
    var a = z.screen;
    return { width: a ? a.width : 0, height: a ? a.height : 0 };
  }
  function eu(a) {
    if (B.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top === b.bottom || b.left === b.right || !z.getComputedStyle)
      return !0;
    var c = z.getComputedStyle(a, null);
    if (c.visibility === "hidden") return !0;
    for (var d = a, e = c; d; ) {
      if (e.display === "none") return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        k >= 0 &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)),
          (f = String(Math.min(Number(g), Number(f)))));
      }
      if (f !== void 0 && Number(f) <= 0) return !0;
      (d = d.parentElement) && (e = z.getComputedStyle(d, null));
    }
    return !1;
  }
  var Lf;
  var tv = Number("") || 5,
    uv = Number("") || 50,
    vv = eb();
  var Av = {
    Ul: Number("") || 500,
    Hl: Number("") || 5e3,
    Uj: Number("20") || 10,
    jl: Number("") || 5e3,
  };
  function Bv(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var Cv = function (a, b) {
    var c;
    return c;
  };
  var Dv;
  function Kv() {
    var a = Of(Lf.j, "", function () {
      return {};
    });
    try {
      return a("internal_sw_allowed"), !0;
    } catch (b) {
      return !1;
    }
  }
  function Lv(a, b, c) {
    c = c === void 0 ? !1 : c;
  }
  var Mv = function (a, b, c, d) {};
  function Nv(a, b, c, d, e) {}
  function Ov(a, b, c, d) {}
  var Pv = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      e < 128
        ? (b[c++] = e)
        : (e < 2048
            ? (b[c++] = (e >> 6) | 192)
            : ((e & 64512) == 55296 &&
              d + 1 < a.length &&
              (a.charCodeAt(d + 1) & 64512) == 56320
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  Co();
  Lo() || zo("iPod");
  zo("iPad");
  !zo("Android") || Do() || Co() || Bo() || zo("Silk");
  Do();
  !zo("Safari") ||
    Do() ||
    (Ao() ? 0 : zo("Coast")) ||
    Bo() ||
    (Ao() ? 0 : zo("Edge")) ||
    (Ao() ? yo("Microsoft Edge") : zo("Edg/")) ||
    (Ao() ? yo("Opera") : zo("OPR")) ||
    Co() ||
    zo("Silk") ||
    zo("Android") ||
    Mo();
  var Qv = {},
    Rv = null,
    Sv = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        e > 255 && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      f === void 0 && (f = 0);
      if (!Rv) {
        Rv = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            k = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          m < 5;
          m++
        ) {
          var n = g.concat(k[m].split(""));
          Qv[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            Rv[q] === void 0 && (Rv[q] = p);
          }
        }
      }
      for (
        var r = Qv[f],
          u = Array(Math.floor(b.length / 3)),
          v = r[64] || "",
          t = 0,
          w = 0;
        t < b.length - 2;
        t += 3
      ) {
        var x = b[t],
          y = b[t + 1],
          A = b[t + 2],
          C = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          E = r[((y & 15) << 2) | (A >> 6)],
          K = r[A & 63];
        u[w++] = "" + C + D + E + K;
      }
      var H = 0,
        N = v;
      switch (b.length - t) {
        case 2:
          (H = b[t + 1]), (N = r[(H & 15) << 2] || v);
        case 1:
          var J = b[t];
          u[w] = "" + r[J >> 2] + r[((J & 3) << 4) | (H >> 4)] + N + v;
      }
      return u.join("");
    };
  var Tv =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Uv(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function Vv() {
    var a = z.google_tag_data,
      b;
    if (a != null && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function Wv() {
    var a, b;
    return (b = (a = z.google_tag_data) == null ? void 0 : a.uach_promise) !=
      null
      ? b
      : null;
  }
  function Xv(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
        ? void 0
        : c.getHighEntropyValues) === "function"
    );
  }
  function Yv() {
    var a = z;
    if (!Xv(a)) return null;
    var b = Uv(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(Tv)
      .then(function (d) {
        b.uach != null || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  function ew(a) {
    var b;
    b = b === void 0 ? document : b;
    var c;
    return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a));
  }
  function fw() {
    return ew("join-ad-interest-group") && Za(ec.joinAdInterestGroup);
  }
  function gw(a, b) {
    var c = mi[3] === void 0 ? 1 : mi[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (c === 1) {
        var f = B.querySelector(d);
        f && (e = [f]);
      } else e = Array.from(B.querySelectorAll(d));
    } catch (q) {}
    var g;
    a: {
      try {
        g = B.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        );
        break a;
      } catch (q) {}
      g = void 0;
    }
    var k = g,
      m =
        ((k == null ? void 0 : k.length) || 0) >=
        (mi[2] === void 0 ? 50 : mi[2]),
      n;
    if ((n = e.length >= 1)) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      p !== void 0 && ob() - p < (mi[1] === void 0 ? 6e4 : mi[1])
        ? (Va("TAGGING", 9), (n = !0))
        : (n = !1);
    }
    if (!n) {
      if (c === 1)
        if (e.length >= 1) hw(e[0]);
        else {
          if (m) {
            Va("TAGGING", 10);
            return;
          }
        }
      else e.length >= c ? hw(e[0]) : m && hw(k[0]);
      pc(
        a,
        void 0,
        { allow: "join-ad-interest-group" },
        { taggingId: b, loadTime: ob() }
      );
    }
  }
  function hw(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function iw() {
    return "https://td.doubleclick.net";
  }
  function jw(a) {
    var b = a.location.href;
    if (a === a.top) return { url: b, Ym: !0 };
    var c = !1,
      d = a.document;
    d && d.referrer && ((b = d.referrer), a.parent === a.top && (c = !0));
    var e = a.location.ancestorOrigins;
    if (e) {
      var f = e[e.length - 1];
      f && b.indexOf(f) === -1 && ((c = !1), (b = f));
    }
    return { url: b, Ym: c };
  }
  var ax = {},
    bx = ((ax[1] = {}), (ax[2] = {}), (ax[3] = {}), (ax[4] = {}), ax);
  function cx(a, b, c) {
    var d = dx(c);
    d && (bx[b][d] = a);
  }
  function ex(a) {
    switch (a) {
      case "script-src":
      case "script-src-elem":
        return 1;
      case "frame-src":
        return 4;
      case "connect-src":
        return 2;
      case "img-src":
        return 3;
    }
  }
  function dx(a) {
    try {
      var b = new URL(a);
      return b.origin + b.pathname;
    } catch (c) {}
  }
  function fx(a, b) {
    S(55) && nk && cx(a, 3, b);
    rc(b);
  }
  function gx(a) {
    var b = ya.apply(1, arguments),
      c = b[0];
    S(55) && nk && (cx(a, 2, c), cx(a, 3, c));
    Bc.apply(null, ta(b));
  }
  var lx = {
    J: {
      Ei: "ads_conversion_hit",
      ce: "container_execute_start",
      Hi: "container_setup_end",
      Ag: "container_setup_start",
      Fi: "container_blocking_end",
      Gi: "container_execute_end",
      Ii: "container_yield_end",
      Bg: "container_yield_start",
      Kj: "event_execute_end",
      Jj: "event_evaluation_end",
      wh: "event_evaluation_start",
      Lj: "event_setup_end",
      Ie: "event_setup_start",
      Nj: "ga4_conversion_hit",
      Ke: "page_load",
      io: "pageview",
      vc: "snippet_load",
      ik: "tag_callback_error",
      jk: "tag_callback_failure",
      kk: "tag_callback_success",
      lk: "tag_execute_end",
      Jd: "tag_execute_start",
    },
  };
  function mx() {
    function a(c, d) {
      var e = Wa(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var nx = !1;
  function Xx(a, b) {}
  function Yx(a, b) {}
  function Zx(a, b) {}
  function $x(a, b) {}
  function ay() {
    var a = {};
    return a;
  }
  function Px(a) {
    a = a === void 0 ? !0 : a;
    var b = {};
    return b;
  }
  function by() {}
  function cy(a, b) {}
  function dy(a, b, c) {}
  function ey() {}
  function fy(a, b) {
    var c = z,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  }
  function gy(a, b, c, d) {
    var e = Ho(a, "fmt");
    if (b) {
      var f = Ho(a, "random"),
        g = Ho(a, "label") || "";
      if (!f) return !1;
      var k = Sv(
        decodeURIComponent(g.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(f.replace(/\+/g, " "))
      );
      if (!fy(k, b)) return !1;
    }
    e && Number(e) !== 4 && (a = Jo(a, "rfmt", e));
    var m = Jo(a, "fmt", 4);
    nc(
      m,
      function () {
        z.google_noFurtherRedirects &&
          b &&
          ((z.google_noFurtherRedirects = null), b());
      },
      c,
      d,
      B.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  }
  function Ny(a, b) {
    if (data.entities) {
      var c = data.entities[a];
      if (c) return c[b];
    }
  }
  function Oy(a, b, c) {
    c = c === void 0 ? !1 : c;
    Py().addRestriction(0, a, b, c);
  }
  function Qy(a, b, c) {
    c = c === void 0 ? !1 : c;
    Py().addRestriction(1, a, b, c);
  }
  function Ry() {
    var a = Ik();
    return Py().getRestrictions(1, a);
  }
  var Sy = function () {
      this.container = {};
      this.j = {};
    },
    Ty = function (a, b) {
      var c = a.container[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.container[b] = c));
      return c;
    };
  Sy.prototype.addRestriction = function (a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (!d || !this.j[b]) {
      var e = Ty(this, b);
      a === 0
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : a === 1 &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  Sy.prototype.getRestrictions = function (a, b) {
    var c = Ty(this, b);
    if (a === 0) {
      var d, e;
      return [].concat(
        ta(
          (c == null
            ? void 0
            : (d = c._entity) == null
            ? void 0
            : d.internal) || []
        ),
        ta(
          (c == null
            ? void 0
            : (e = c._entity) == null
            ? void 0
            : e.external) || []
        )
      );
    }
    if (a === 1) {
      var f, g;
      return [].concat(
        ta(
          (c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) ||
            []
        ),
        ta(
          (c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  Sy.prototype.getExternalRestrictions = function (a, b) {
    var c = Ty(this, b),
      d,
      e;
    return a === 0
      ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) ||
          []
      : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) ||
          [];
  };
  Sy.prototype.removeExternalRestrictions = function (a) {
    var b = Ty(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.j[a] = !0;
  };
  function Py() {
    var a = cj.r;
    a || ((a = new Sy()), (cj.r = a));
    return a;
  }
  var Uy = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Vy = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Wy = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Xy =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  function Yy() {
    var a = Fj("gtm.allowlist") || Fj("gtm.whitelist");
    a && T(9);
    ij && (a = ["google", "gtagfl", "lcl", "zone"]);
    Uy.test(z.location && z.location.hostname) &&
      (ij
        ? T(116)
        : (T(117),
          Zy &&
            ((a = []),
            window.console &&
              window.console.log &&
              window.console.log("GTM blocked. See go/13687728."))));
    var b = a && sb(lb(a), Vy),
      c = Fj("gtm.blocklist") || Fj("gtm.blacklist");
    c || ((c = Fj("tagTypeBlacklist")) && T(3));
    c ? T(8) : (c = []);
    Uy.test(z.location && z.location.hostname) &&
      ((c = lb(c)),
      c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
    lb(c).indexOf("google") >= 0 && T(2);
    var d = c && sb(lb(c), Wy),
      e = {};
    return function (f) {
      var g = f && f[Ke.ra];
      if (!g || typeof g !== "string") return !0;
      g = g.replace(/^_*/, "");
      if (e[g] !== void 0) return e[g];
      var k = sj[g] || [],
        m = !0;
      if (a) {
        var n;
        if ((n = m))
          a: {
            if (b.indexOf(g) < 0)
              if (k && k.length > 0)
                for (var p = 0; p < k.length; p++) {
                  if (b.indexOf(k[p]) < 0) {
                    T(11);
                    n = !1;
                    break a;
                  }
                }
              else {
                n = !1;
                break a;
              }
            n = !0;
          }
        m = n;
      }
      var q = !1;
      if (c) {
        var r = d.indexOf(g) >= 0;
        if (r) q = r;
        else {
          var u = fb(d, k || []);
          u && T(10);
          q = u;
        }
      }
      var v = !m || q;
      v ||
        !(k.indexOf("sandboxedScripts") >= 0) ||
        (b && b.indexOf("sandboxedScripts") !== -1) ||
        (v = fb(d, Xy));
      return (e[g] = v);
    };
  }
  var Zy = !1;
  Zy = !0;
  function $y() {
    xk &&
      Oy(Ik(), function (a) {
        var b = vf(a.entityId),
          c;
        if (yf(b)) {
          var d = b[Ke.ra];
          if (!d)
            throw Error("Error: No function name given for function call.");
          var e = nf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!Ny(b[Ke.ra], 4);
        return c;
      });
  }
  function az(a, b, c, d, e) {
    if (!bz()) {
      var f = d.siloed ? Dk(a) : a;
      if (!Rk(f)) {
        d.siloed && Tk({ ctid: f, isDestination: !1 });
        var g = Lk();
        tk().container[f] = { state: 1, context: d, parent: g };
        sk({ ctid: f, isDestination: !1 }, e);
        var k = cz(a);
        if (zj()) nc(yj() + "/" + k);
        else {
          var m = tb(a, "GTM-"),
            n = dk(),
            p = c ? "/gtag/js" : "/gtm.js",
            q = ck(b, p + k);
          if (!q) {
            var r = bj.Df + p;
            n &&
              hc &&
              m &&
              (r = hc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
            q = Ct("https://", "http://", r + k);
          }
          nc(q);
        }
      }
    }
  }
  function dz(a, b, c, d) {
    if (!bz()) {
      var e = c.siloed ? Dk(a) : a;
      if (!Sk(e))
        if ((!S(134) && c.siloed) || !Uk())
          if (
            (c.siloed && Tk({ ctid: e, isDestination: !0 }),
            (tk().destination[e] = { state: 1, context: c, parent: Lk() }),
            sk({ ctid: e, isDestination: !0 }, d),
            zj())
          )
            nc(yj() + ("/gtd" + cz(a, !0)));
          else {
            var f = "/gtag/destination" + cz(a, !0),
              g = ck(b, f);
            g || (g = Ct("https://", "http://", bj.Df + f));
            nc(g);
          }
        else
          (tk().destination[e] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: Lk(),
          }),
            sk({ ctid: e, isDestination: !0 }, d),
            T(91);
    }
  }
  function cz(a, b) {
    b = b === void 0 ? !1 : b;
    var c = "?id=" + encodeURIComponent(a) + "&l=" + bj.ub;
    if (!tb(a, "GTM-") || b) c += "&cx=c";
    c += "&gtm=" + Qp();
    dk() && (c += "&sign=" + bj.Bh);
    var d = wj.j;
    d === 1 ? (c += "&fps=fc") : d === 2 && (c += "&fps=fe");
    return c;
  }
  function bz() {
    if (Op()) {
      return !0;
    }
    return !1;
  }
  var ez = function () {
    this.C = 0;
    this.j = {};
  };
  ez.prototype.addListener = function (a, b, c) {
    var d = ++this.C;
    this.j[a] = this.j[a] || {};
    this.j[a][String(d)] = { listener: b, Nb: c };
    return d;
  };
  ez.prototype.removeListener = function (a, b) {
    var c = this.j[a],
      d = String(b);
    if (!c || !c[d]) return !1;
    delete c[d];
    return !0;
  };
  var gz = function (a, b) {
    var c = [];
    hb(fz.j[a], function (d, e) {
      c.indexOf(e.listener) < 0 &&
        (e.Nb === void 0 || b.indexOf(e.Nb) >= 0) &&
        c.push(e.listener);
    });
    return c;
  };
  function hz(a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Gk(),
    };
  }
  var jz = function (a, b) {
      this.j = !1;
      this.K = [];
      this.eventData = { tags: [] };
      this.P = !1;
      this.C = this.H = 0;
      iz(this, a, b);
    },
    kz = function (a, b, c, d) {
      if (ej.hasOwnProperty(b) || b === "__zone") return -1;
      var e = {};
      Rc(d) && (e = Sc(d, e));
      e.id = c;
      e.status = "timeout";
      return a.eventData.tags.push(e) - 1;
    },
    lz = function (a, b, c, d) {
      var e = a.eventData.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    mz = function (a) {
      if (!a.j) {
        for (var b = a.K, c = 0; c < b.length; c++) b[c]();
        a.j = !0;
        a.K.length = 0;
      }
    },
    iz = function (a, b, c) {
      b !== void 0 && a.Qe(b);
      c &&
        z.setTimeout(function () {
          mz(a);
        }, Number(c));
    };
  jz.prototype.Qe = function (a) {
    var b = this,
      c = qb(function () {
        F(function () {
          a(Gk(), b.eventData);
        });
      });
    this.j ? c() : this.K.push(c);
  };
  var nz = function (a) {
      a.H++;
      return qb(function () {
        a.C++;
        a.P && a.C >= a.H && mz(a);
      });
    },
    oz = function (a) {
      a.P = !0;
      a.C >= a.H && mz(a);
    };
  var pz = {};
  function qz() {
    return z[rz()];
  }
  function rz() {
    return z.GoogleAnalyticsObject || "ga";
  }
  function uz() {
    var a = Gk();
  }
  function vz(a, b) {
    return function () {
      var c = qz(),
        d = c && c.getByName && c.getByName(a);
      if (d) {
        var e = d.get("sendHitTask");
        d.set("sendHitTask", function (f) {
          var g = f.get("hitPayload"),
            k = f.get("hitCallback"),
            m = g.indexOf("&tid=" + b) < 0;
          m &&
            (f.set(
              "hitPayload",
              g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
              !0
            ),
            f.set("hitCallback", void 0, !0));
          e(f);
          m &&
            (f.set("hitPayload", g, !0),
            f.set("hitCallback", k, !0),
            f.set("_x_19", void 0, !0),
            e(f));
        });
      }
    };
  }
  var Az = ["es", "1"],
    Bz = {},
    Cz = {};
  function Dz(a, b) {
    if (mk) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Bz[a] = [
        ["e", c],
        ["eid", a],
      ];
      Jn(a);
    }
  }
  function Ez(a) {
    var b = a.eventId,
      c = a.bd;
    if (!Bz[b]) return [];
    var d = [];
    Cz[b] || d.push(Az);
    d.push.apply(d, ta(Bz[b]));
    c && (Cz[b] = !0);
    return d;
  }
  var Fz = {},
    Gz = {},
    Hz = {};
  function Iz(a, b, c, d) {
    mk &&
      S(110) &&
      ((d === void 0 ? 0 : d)
        ? ((Hz[b] = Hz[b] || 0), ++Hz[b])
        : c !== void 0
        ? ((Gz[a] = Gz[a] || {}), (Gz[a][b] = Math.round(c)))
        : ((Fz[a] = Fz[a] || {}), (Fz[a][b] = (Fz[a][b] || 0) + 1)));
  }
  function Jz(a) {
    var b = a.eventId,
      c = a.bd,
      d = Fz[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Fz[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function Kz(a) {
    var b = a.eventId,
      c = a.bd,
      d = Gz[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Gz[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function Lz() {
    for (
      var a = [], b = l(Object.keys(Hz)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + Hz[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var Mz = {},
    Nz = {};
  function Oz(a, b, c) {
    if (mk && b) {
      var d = gk(b);
      Mz[a] = Mz[a] || [];
      Mz[a].push(c + d);
      var e = (yf(b) ? "1" : "2") + d;
      Nz[a] = Nz[a] || [];
      Nz[a].push(e);
      Jn(a);
    }
  }
  function Pz(a) {
    var b = a.eventId,
      c = a.bd,
      d = [],
      e = Mz[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = Nz[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete Mz[b], delete Nz[b]);
    return d;
  }
  function Qz(a, b, c, d) {
    var e = lf[a],
      f = Rz(a, b, c, d);
    if (!f) return null;
    var g = zf(e[Ke.hk], c, []);
    if (g && g.length) {
      var k = g[0];
      f = Qz(
        k.index,
        {
          onSuccess: f,
          onFailure: k.uk === 1 ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function Rz(a, b, c, d) {
    function e() {
      function w() {
        Ml(3);
        var K = ob() - E;
        Oz(c.id, f, "7");
        lz(c.wc, C, "exception", K);
        S(94) && dy(c, f, lx.J.ik);
        D || ((D = !0), k());
      }
      if (f[Ke.Ml]) k();
      else {
        var x = xf(f, c, []),
          y = x[Ke.fl];
        if (y != null)
          for (var A = 0; A < y.length; A++)
            if (!W(y[A])) {
              k();
              return;
            }
        var C = kz(c.wc, String(f[Ke.ra]), Number(f[Ke.Pe]), x[Ke.METADATA]),
          D = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!D) {
            D = !0;
            var K = ob() - E;
            Oz(c.id, lf[a], "5");
            lz(c.wc, C, "success", K);
            S(94) && dy(c, f, lx.J.kk);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!D) {
            D = !0;
            var K = ob() - E;
            Oz(c.id, lf[a], "6");
            lz(c.wc, C, "failure", K);
            S(94) && dy(c, f, lx.J.jk);
            k();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        Oz(c.id, f, "1");
        S(94) && cy(c, f);
        var E = ob();
        try {
          Af(x, { event: c, index: a, type: 1 });
        } catch (K) {
          w(K);
        }
        S(94) && dy(c, f, lx.J.lk);
      }
    }
    var f = lf[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = zf(f[Ke.mk], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Qz(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      k = p.uk === 2 ? m : q;
    }
    if (f[Ke.Xj] || f[Ke.Ol]) {
      var r = f[Ke.Xj] ? mf : c.Gn,
        u = g,
        v = k;
      if (!r[a]) {
        var t = Sz(a, r, qb(e));
        g = t.onSuccess;
        k = t.onFailure;
      }
      return function () {
        r[a](u, v);
      };
    }
    return e;
  }
  function Sz(a, b, c) {
    var d = [],
      e = [];
    b[a] = Tz(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Uz;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Vz;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Tz(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Uz(a) {
    a();
  }
  function Vz(a, b) {
    b();
  }
  var Yz = function (a, b) {
    for (var c = [], d = 0; d < lf.length; d++)
      if (a[d]) {
        var e = lf[d];
        var f = nz(b.wc);
        try {
          var g = Qz(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = e[Ke.ra];
            if (!k)
              throw Error("Error: No function name given for function call.");
            var m = nf[k];
            c.push({
              Sk: d,
              Hk: (m ? m.priorityOverride || 0 : 0) || Ny(e[Ke.ra], 1) || 0,
              execute: g,
            });
          } else Wz(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(Xz);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return c.length > 0;
  };
  function rA(a, b) {
    if (!fz) return !1;
    var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
      d = gz(a.event, c ? String(c).split(",") : []);
    if (!d.length) return !1;
    for (var e = 0; e < d.length; ++e) {
      var f = nz(b);
      try {
        d[e](a, f);
      } catch (g) {
        f();
      }
    }
    return !0;
  }
  function Xz(a, b) {
    var c,
      d = b.Hk,
      e = a.Hk;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (c !== 0) f = c;
    else {
      var g = a.Sk,
        k = b.Sk;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function Wz(a, b) {
    if (mk) {
      var c = function (d) {
        var e = b.isBlocked(lf[d]) ? "3" : "4",
          f = zf(lf[d][Ke.hk], b, []);
        f && f.length && c(f[0].index);
        Oz(b.id, lf[d], e);
        var g = zf(lf[d][Ke.mk], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var sA = !1,
    fz;
  function tA() {
    fz || (fz = new ez());
    return fz;
  }
  function uA(a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (S(94)) {
    }
    if (d === "gtm.js") {
      if (sA) return !1;
      sA = !0;
    }
    var e = !1,
      f = Ry(),
      g = Sc(a, null);
    if (
      !f.every(function (u) {
        return u({ originalEventData: g });
      })
    ) {
      if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent")
        return !1;
      e = !0;
    }
    Dz(b, d);
    var k = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: vA(g, e),
        Gn: [],
        logMacroError: function () {
          T(6);
          Ml(0);
        },
        cachedModelValues: wA(),
        wc: new jz(function () {
          if (S(94)) {
          }
          k && k.apply(k, Array.prototype.slice.call(arguments, 0));
        }, m),
        originalEventData: g,
      };
    S(110) && mk && (n.reportMacroDiscrepancy = Iz);
    S(94) && Zx(n.id, n.name);
    var p = Gf(n);
    S(94) && $x(n.id, n.name);
    e && (p = xA(p));
    if (S(94)) {
    }
    var q = Yz(p, n),
      r = rA(a, n.wc);
    oz(n.wc);
    (d !== "gtm.js" && d !== "gtm.sync") || uz();
    return yA(p, q) || r;
  }
  function wA() {
    var a = {};
    a.event = Kj("event", 1);
    a.ecommerce = Kj("ecommerce", 1);
    a.gtm = Kj("gtm");
    a.eventModel = Kj("eventModel");
    return a;
  }
  function vA(a, b) {
    var c = Yy();
    return function (d) {
      if (c(d)) return !0;
      var e = d && d[Ke.ra];
      if (!e || typeof e !== "string") return !0;
      e = e.replace(/^_*/, "");
      var f,
        g = Ik();
      f = Py().getRestrictions(0, g);
      var k = a;
      b &&
        ((k = Sc(a, null)), (k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (var m = sj[e] || [], n = l(f), p = n.next(); !p.done; p = n.next()) {
        var q = p.value;
        try {
          if (!q({ entityId: e, securityGroups: m, originalEventData: k }))
            return !0;
        } catch (r) {
          return !0;
        }
      }
      return !1;
    };
  }
  function xA(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(lf[c][Ke.ra]);
        if (dj[d] || lf[c][Ke.Pl] !== void 0 || Ny(d, 2)) b[c] = !0;
      }
    return b;
  }
  function yA(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && lf[c] && !ej[String(lf[c][Ke.ra])]) return !0;
    return !1;
  }
  function zA() {
    S(6) &&
      tA().addListener("gtm.init", function (a, b) {
        wj.P = !0;
        gl();
        b();
      });
  }
  var AA = !1,
    BA = 0,
    CA = [];
  function DA(a) {
    if (!AA) {
      var b = B.createEventObject,
        c = B.readyState === "complete",
        d = B.readyState === "interactive";
      if (!a || a.type !== "readystatechange" || c || (!b && d)) {
        AA = !0;
        for (var e = 0; e < CA.length; e++) F(CA[e]);
      }
      CA.push = function () {
        for (var f = ya.apply(0, arguments), g = 0; g < f.length; g++) F(f[g]);
        return 0;
      };
    }
  }
  function EA() {
    if (!AA && BA < 140) {
      BA++;
      try {
        var a, b;
        (b = (a = B.documentElement).doScroll) == null || b.call(a, "left");
        DA();
      } catch (c) {
        z.setTimeout(EA, 50);
      }
    }
  }
  function FA(a) {
    AA ? a() : CA.push(a);
  }
  var GA = 0;
  function HA(a, b) {
    return arguments.length === 1 ? IA("set", a) : IA("set", a, b);
  }
  function JA(a, b) {
    return arguments.length === 1 ? IA("config", a) : IA("config", a, b);
  }
  function KA(a, b, c) {
    c = c || {};
    c[P.g.qc] = a;
    return IA("event", b, c);
  }
  function IA() {
    return arguments;
  }
  var LA = function () {
    this.messages = [];
    this.j = [];
  };
  LA.prototype.enqueue = function (a, b, c) {
    var d = this.messages.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.messages.push(f);
    for (var g = 0; g < this.j.length; g++)
      try {
        this.j[g](f);
      } catch (k) {}
  };
  LA.prototype.listen = function (a) {
    this.j.push(a);
  };
  LA.prototype.get = function () {
    for (var a = {}, b = 0; b < this.messages.length; b++) {
      var c = this.messages[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  LA.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
      var e = this.messages[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.messages = c;
    return b;
  };
  function MA(a, b, c) {
    c.eventMetadata = c.eventMetadata || {};
    c.eventMetadata.source_canonical_id = Pf.canonicalContainerId;
    NA().enqueue(a, b, c);
  }
  function OA() {
    var a = PA;
    NA().listen(a);
  }
  function NA() {
    var a = cj.mb;
    a || ((a = new LA()), (cj.mb = a));
    return a;
  }
  var QA = {},
    RA = {};
  function SA(a, b) {
    for (
      var c = [], d = [], e = {}, f = 0;
      f < a.length;
      e = { ni: void 0, Vh: void 0 }, f++
    ) {
      var g = a[f];
      if (g.indexOf("-") >= 0) {
        if (((e.ni = Qm(g, b)), e.ni)) {
          var k = Fk();
          db(
            k,
            (function (r) {
              return function (u) {
                return r.ni.destinationId === u;
              };
            })(e)
          )
            ? c.push(g)
            : d.push(g);
        }
      } else {
        var m = QA[g] || [];
        e.Vh = {};
        m.forEach(
          (function (r) {
            return function (u) {
              r.Vh[u] = !0;
            };
          })(e)
        );
        for (var n = Ak(), p = 0; p < n.length; p++)
          if (e.Vh[n[p]]) {
            c = c.concat(Ek());
            break;
          }
        var q = RA[g] || [];
        q.length && (c = c.concat(q));
      }
    }
    return { fn: c, jn: d };
  }
  function TA(a) {
    hb(QA, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  function UA(a) {
    hb(RA, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  var VA = "HA GF G UA AW DC MC".split(" "),
    WA = !1,
    XA = !1;
  function YA(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: tj() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var ZA = void 0,
    $A = void 0;
  function aB(a, b, c) {
    var d = Sc(a, null);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return b[f] !== void 0;
    }) && T(136);
    var e = Sc(b, null);
    Sc(c, e);
    MA(JA(Ak()[0], e), a.eventId, d);
  }
  function bB(a) {
    for (var b = l([P.g.Dd, P.g.Vb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || $n.j[d];
      if (e) return e;
    }
  }
  var cB = {
      config: function (a, b) {
        var c = YA(a, b);
        if (!(a.length < 2) && $a(a[1])) {
          var d = {};
          if (a.length > 2) {
            if ((a[2] !== void 0 && !Rc(a[2])) || a.length > 3) return;
            d = a[2];
          }
          var e = Qm(a[1], b.isGtmEvent);
          if (e) {
            var f, g, k;
            a: {
              if (!wk.Je) {
                var m = Kk(Lk());
                if (Wk(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  k = { pn: Kk(n), dn: p };
                  break a;
                }
              }
              k = void 0;
            }
            var q = k;
            q && ((f = q.pn), (g = q.dn));
            Dz(c.eventId, "gtag.config");
            var r = e.destinationId,
              u = e.id !== r;
            if (u ? Ek().indexOf(r) === -1 : Ak().indexOf(r) === -1) {
              if (!b.inheritParentConfig && !d[P.g.Sb]) {
                var v = bB(d);
                if (u)
                  dz(r, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                  var t = d;
                  ZA ? aB(b, t, ZA) : $A || ($A = Sc(t, null));
                } else
                  az(r, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (T(128), g && T(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                $A
                  ? (aB(b, $A, x), (w = !1))
                  : ((!x[P.g.sc] && gj && ZA) || (ZA = Sc(x, null)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              !nk || (!S(106) && xk) || (GA === 1 && (al.mcc = !1), (GA = 2));
              if (gj && !u && !d[P.g.sc]) {
                var y = XA;
                XA = !0;
                if (y) return;
              }
              WA || T(43);
              if (!b.noTargetGroup)
                if (u) {
                  UA(e.id);
                  var A = e.id,
                    C = d[P.g.Be] || "default";
                  C = String(C).split(",");
                  for (var D = 0; D < C.length; D++) {
                    var E = RA[C[D]] || [];
                    RA[C[D]] = E;
                    E.indexOf(A) < 0 && E.push(A);
                  }
                } else {
                  TA(e.id);
                  var K = e.id,
                    H = d[P.g.Be] || "default";
                  H = H.toString().split(",");
                  for (var N = 0; N < H.length; N++) {
                    var J = QA[H[N]] || [];
                    QA[H[N]] = J;
                    J.indexOf(K) < 0 && J.push(K);
                  }
                }
              delete d[P.g.Be];
              var V = b.eventMetadata || {};
              V.hasOwnProperty("is_external_event") ||
                (V.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = V;
              delete d[P.g.wd];
              for (var ca = u ? [e.id] : Ek(), ba = 0; ba < ca.length; ba++) {
                var Z = d,
                  O = ca[ba],
                  fa = Sc(b, null),
                  ha = Qm(O, fa.isGtmEvent);
                ha && $n.push("config", [Z], ha, fa);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (a.length === 3) {
          T(39);
          var c = YA(a, b),
            d = a[1],
            e;
          if (S(129)) {
            var f = {},
              g = Dt(a[2]),
              k;
            for (k in g)
              if (g.hasOwnProperty(k)) {
                var m = g[k];
                f[k] =
                  k === P.g.be
                    ? Array.isArray(m)
                      ? NaN
                      : Number(m)
                    : k === P.g.tb
                    ? (Array.isArray(m) ? m : [m]).map(Et)
                    : Ft(m);
              }
            e = f;
          } else e = a[2];
          var n = e;
          b.fromContainerExecution || (n[P.g.O] && T(139), n[P.g.wa] && T(140));
          d === "default"
            ? tm(n)
            : d === "update"
            ? vm(n, c)
            : d === "declare" && b.fromContainerExecution && sm(n);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(a.length < 2) && $a(c)) {
          var d = void 0;
          if (a.length > 2) {
            if ((!Rc(a[2]) && a[2] !== void 0) || a.length > 3) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = Sc(e, null)),
            e[P.g.wd] && (g.eventCallback = e[P.g.wd]),
            e[P.g.ye] && (g.eventTimeout = e[P.g.ye]));
          var k = YA(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if (c === "optimize.callback")
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[P.g.qc];
          r === void 0 &&
            ((r = Fj(P.g.qc, 2)), r === void 0 && (r = "default"));
          if ($a(r) || Array.isArray(r)) {
            var u;
            u = b.isGtmEvent
              ? $a(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var v = SA(u, b.isGtmEvent),
              t = v.fn,
              w = v.jn;
            if (w.length)
              for (var x = bB(q), y = 0; y < w.length; y++) {
                var A = Qm(w[y], b.isGtmEvent);
                if (A) {
                  var C = A.destinationId,
                    D;
                  if ((D = S(132))) {
                    var E;
                    if (!(E = tb(C, "siloed_"))) {
                      var K = A.destinationId,
                        H = tk().destination[K];
                      E = !!H && H.state === 0;
                    }
                    D = E;
                  }
                  D ||
                    dz(C, x, {
                      source: 3,
                      fromContainerExecution: b.fromContainerExecution,
                    });
                }
              }
            p = Rm(t, b.isGtmEvent);
          } else p = void 0;
          var N = p;
          if (N) {
            Dz(m, c);
            for (var J = [], V = 0; V < N.length; V++) {
              var ca = N[V],
                ba = Sc(b, null);
              if (VA.indexOf(Mk(ca.prefix)) !== -1) {
                var Z = Sc(d, null),
                  O = ba.eventMetadata || {};
                O.hasOwnProperty("is_external_event") ||
                  (O.is_external_event = !ba.fromContainerExecution);
                ba.eventMetadata = O;
                delete Z[P.g.wd];
                ao(c, Z, ca.id, ba);
                nk &&
                  (S(106) ? O.source_canonical_id === void 0 : !xk) &&
                  GA === 0 &&
                  (cl("mcc", "1"), (GA = 1));
              }
              J.push(ca.id);
            }
            g.eventModel = g.eventModel || {};
            N.length > 0
              ? (g.eventModel[P.g.qc] = J.join())
              : delete g.eventModel[P.g.qc];
            WA || T(43);
            b.noGtmEvent === void 0 &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[P.g.oc] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        T(53);
        if (a.length === 4 && $a(a[1]) && $a(a[2]) && Za(a[3])) {
          var c = Qm(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            WA || T(43);
            var f = bB();
            if (
              !db(Ek(), function (k) {
                return c.destinationId === k;
              })
            )
              dz(c.destinationId, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (VA.indexOf(Mk(c.prefix)) !== -1) {
              YA(a, b);
              var g = {};
              Sc(((g[P.g.Bb] = d), (g[P.g.Qb] = e), g), null);
              bo(
                d,
                function (k) {
                  F(function () {
                    e(k);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (a.length === 2 && a[1].getTime) {
          WA = !0;
          var c = YA(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (a.length === 3 && $a(a[1]) && Za(a[2])) {
          if ((Mf(a[1], a[2]), T(74), a[1] === "all")) {
            T(75);
            var b = !1;
            try {
              b = a[2](Gk(), "unknown", {});
            } catch (c) {}
            b || T(76);
          }
        } else T(73);
      },
      set: function (a, b) {
        var c = void 0;
        a.length === 2 && Rc(a[1])
          ? (c = Sc(a[1], null))
          : a.length === 3 &&
            $a(a[1]) &&
            ((c = {}),
            Rc(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = Sc(a[2], null))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = YA(a, b),
            e = d.eventId,
            f = d.priorityId;
          Sc(c, null);
          var g = Sc(c, null);
          $n.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    dB = { policy: !0 };
  var fB = function (a) {
    if (eB(a)) return a;
    this.value = a;
  };
  fB.prototype.getUntrustedMessageValue = function () {
    return this.value;
  };
  var eB = function (a) {
    return !a || Pc(a) !== "object" || Rc(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  fB.prototype.getUntrustedMessageValue = fB.prototype.getUntrustedMessageValue;
  var gB = !1,
    hB = [];
  function iB() {
    if (!gB) {
      gB = !0;
      for (var a = 0; a < hB.length; a++) F(hB[a]);
    }
  }
  function jB(a) {
    gB ? F(a) : hB.push(a);
  }
  var kB = 0,
    lB = {},
    mB = [],
    nB = [],
    oB = !1,
    pB = !1;
  function qB(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  function rB(a, b, c) {
    a.eventCallback = b;
    c && (a.eventTimeout = c);
    return sB(a);
  }
  function tB(a, b) {
    if (!ab(b) || b < 0) b = 0;
    var c = cj[bj.ub],
      d = 0,
      e = !1,
      f = void 0;
    f = z.setTimeout(function () {
      e || ((e = !0), a());
      f = void 0;
    }, b);
    return function () {
      var g = c ? c.subscribers : 1;
      ++d === g &&
        (f && (z.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
    };
  }
  function uB(a, b) {
    var c = a._clear || b.overwriteModelFields;
    hb(a, function (e, f) {
      e !== "_clear" && (c && Ij(e), Ij(e, f));
    });
    pj || (pj = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    typeof d !== "number" &&
      ((d = tj()), (a["gtm.uniqueEventId"] = d), Ij("gtm.uniqueEventId", d));
    return uA(a);
  }
  function vB(a) {
    if (a == null || typeof a !== "object") return !1;
    if (a.event) return !0;
    if (ib(a)) {
      var b = a[0];
      if (b === "config" || b === "event" || b === "js" || b === "get")
        return !0;
    }
    return !1;
  }
  function wB() {
    var a;
    if (nB.length) a = nB.shift();
    else if (mB.length) a = mB.shift();
    else return;
    var b;
    var c = a;
    if (oB || !vB(c.message)) b = c;
    else {
      oB = !0;
      var d = c.message["gtm.uniqueEventId"];
      typeof d !== "number" &&
        (S(99) && (tj(), tj()), (d = c.message["gtm.uniqueEventId"] = tj()));
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        k = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      mB.unshift(k, c);
      S(6) || (nk && gl());
      b = f;
    }
    return b;
  }
  function xB() {
    for (var a = !1, b; !pB && (b = wB()); ) {
      pB = !0;
      delete Cj.eventModel;
      Ej();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (d == null) pB = !1;
      else {
        e.fromContainerExecution && Jj();
        try {
          if (Za(d))
            try {
              d.call(Gj);
            } catch (v) {}
          else if (Array.isArray(d)) {
            if ($a(d[0])) {
              var f = d[0].split("."),
                g = f.pop(),
                k = d.slice(1),
                m = Fj(f.join("."), 2);
              if (m != null)
                try {
                  m[g].apply(m, k);
                } catch (v) {}
            }
          } else {
            var n = void 0;
            if (ib(d))
              a: {
                if (d.length && $a(d[0])) {
                  var p = cB[d[0]];
                  if (p && (!e.fromContainerExecution || !dB[d[0]])) {
                    n = p(d, e);
                    break a;
                  }
                }
                n = void 0;
              }
            else n = d;
            n && (a = uB(n, e) || a);
          }
        } finally {
          e.fromContainerExecution && Ej(!0);
          var q = d["gtm.uniqueEventId"];
          if (typeof q === "number") {
            for (var r = lB[String(q)] || [], u = 0; u < r.length; u++)
              nB.push(yB(r[u]));
            r.length && nB.sort(qB);
            delete lB[String(q)];
            q > kB && (kB = q);
          }
          pB = !1;
        }
      }
    }
    return !a;
  }
  function zB() {
    if (S(94)) {
      var a = !wj.H;
    }
    var b = xB();
    if (S(94)) {
    }
    try {
      var c = Gk(),
        d = z[bj.ub].hide;
      if (d && d[c] !== void 0 && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && d[f] === !0) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function PA(a) {
    if (kB < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      lB[b] = lB[b] || [];
      lB[b].push(a);
    } else
      nB.push(yB(a)),
        nB.sort(qB),
        F(function () {
          pB || xB();
        });
  }
  function yB(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  function AB() {
    function a(f) {
      var g = {};
      if (eB(f)) {
        var k = f;
        f = eB(k) ? k.getUntrustedMessageValue() : void 0;
        g.fromContainerExecution = !0;
      }
      return { message: f, messageContext: g };
    }
    var b = ic(bj.ub, []),
      c = (cj[bj.ub] = cj[bj.ub] || {});
    c.pruned === !0 && T(83);
    lB = NA().get();
    OA();
    FA(function () {
      if (!c.gtmDom) {
        c.gtmDom = !0;
        var f = {};
        b.push(((f.event = "gtm.dom"), f));
      }
    });
    jB(function () {
      if (!c.gtmLoad) {
        c.gtmLoad = !0;
        var f = {};
        b.push(((f.event = "gtm.load"), f));
      }
    });
    c.subscribers = (c.subscribers || 0) + 1;
    var d = b.push;
    b.push = function () {
      var f;
      if (cj.SANDBOXED_JS_SEMAPHORE > 0) {
        f = [];
        for (var g = 0; g < arguments.length; g++) f[g] = new fB(arguments[g]);
      } else f = [].slice.call(arguments, 0);
      var k = f.map(function (q) {
        return a(q);
      });
      mB.push.apply(mB, k);
      var m = d.apply(b, f),
        n = Math.max(100, Number("1000") || 300);
      if (this.length > n)
        for (T(4), c.pruned = !0; this.length > n; ) this.shift();
      var p = typeof m !== "boolean" || m;
      return xB() && p;
    };
    var e = b.slice(0).map(function (f) {
      return a(f);
    });
    mB.push.apply(mB, e);
    if (!wj.H) {
      if (S(94)) {
      }
      F(zB);
    }
  }
  var sB = function (a) {
    return z[bj.ub].push(a);
  };
  var BB = /^(https?:)?\/\//;
  function WB() {}
  var XB = function () {};
  XB.prototype.toString = function () {
    return "undefined";
  };
  var YB = new XB();
  function eC(a, b) {
    function c(g) {
      var k = Yj(g),
        m = Sj(k, "protocol"),
        n = Sj(k, "host", !0),
        p = Sj(k, "port"),
        q = Sj(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        m === void 0 ||
        (m === "http" && p === "80") ||
        (m === "https" && p === "443")
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function fC(a) {
    return gC(a) ? 1 : 0;
  }
  function gC(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = Sc(a, {});
        Sc({ arg1: c[d], any_of: void 0 }, e);
        if (fC(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return og(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < kg.length; g++) {
                var k = kg[g];
                if (b[k] != null) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return lg(b, c);
      case "_eq":
        return pg(b, c);
      case "_ge":
        return qg(b, c);
      case "_gt":
        return sg(b, c);
      case "_lc":
        return String(b).split(",").indexOf(String(c)) >= 0;
      case "_le":
        return rg(b, c);
      case "_lt":
        return tg(b, c);
      case "_re":
        return ng(b, c, a.ignore_case);
      case "_sw":
        return ug(b, c);
      case "_um":
        return eC(b, c);
    }
    return !1;
  }
  function hC() {
    var a;
    a = a === void 0 ? "" : a;
    var b, c;
    return (
      (b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)
    )
      ? String(data.blob[1])
      : a;
  }
  function iC() {
    var a = [
      ["cv", S(136) ? hC() : "2"],
      ["rv", bj.Ah],
      [
        "tc",
        lf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    bj.Me && a.push(["x", bj.Me]);
    xj() && a.push(["tag_exp", xj()]);
    return a;
  }
  function jC() {
    S(55) &&
      nk &&
      z.addEventListener("securitypolicyviolation", function (a) {
        if (a.disposition === "enforce") {
          var b = ex(a.effectiveDirective);
          if (b) {
            var c;
            var d = dx(a.blockedURI);
            c = d ? bx[b][d] : void 0;
            c &&
              ((hl[String(c.endpoint)] = !0),
              cl("csp", Object.keys(hl).join("~")));
          }
        }
      });
  }
  var kC = {},
    lC = {};
  function mC(a, b) {
    var c = nC(void 0);
    if (mk) {
      var d = String(c) + b;
      kC[a] = kC[a] || [];
      kC[a].push(d);
      lC[a] = lC[a] || [];
      lC[a].push("p" + b);
    }
  }
  function oC(a) {
    var b = a.eventId,
      c = a.bd,
      d = [],
      e = kC[b] || [];
    e.length && d.push(["hf", e.join(".")]);
    var f = lC[b] || [];
    f.length && d.push(["ht", f.join(".")]);
    c && (delete kC[b], delete lC[b]);
    return d;
  }
  function pC() {
    return !1;
  }
  function qC() {
    var a = {};
    return function (b, c, d) {};
  }
  function rC() {
    var a = sC;
    return function (b, c, d) {
      var e = d && d.event;
      (b === "__html" && S(98)) || tC(c);
      var f = tb(b, "__cvt_") ? void 0 : 1,
        g = new Ma();
      hb(c, function (r, u) {
        var v = gd(u, void 0, f);
        v === void 0 && u !== void 0 && T(44);
        g.set(r, v);
      });
      a.j.j.C = Ef();
      var k = {
        qk: Tf(b),
        eventId: e == null ? void 0 : e.id,
        priorityId: e !== void 0 ? e.priorityId : void 0,
        Qe:
          e !== void 0
            ? function (r) {
                e.wc.Qe(r);
              }
            : void 0,
        rb: function () {
          return b;
        },
        log: function () {},
        wm: {
          index: d == null ? void 0 : d.index,
          type: d == null ? void 0 : d.type,
          name: d == null ? void 0 : d.name,
        },
        yn: !!Ny(b, 3),
        originalEventData: e == null ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (k.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (pC()) {
        var m = qC(),
          n,
          p;
        k.Ya = {
          Bi: [],
          Re: {},
          Jb: function (r, u, v) {
            u === 1 && (n = r);
            u === 7 && (p = v);
            m(r, u, v);
          },
          vg: oh(),
        };
        k.log = function (r) {
          var u = ya.apply(1, arguments);
          n && m(n, 4, { level: r, source: p, message: u });
        };
      }
      var q = Ee(a, k, [b, g]);
      a.j.j.C = void 0;
      q instanceof Aa &&
        (q.getType() === "return" ? (q = q.getData()) : (q = void 0));
      return G(q, void 0, f);
    };
  }
  function tC(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Za(b) &&
      (a.gtmOnSuccess = function () {
        F(b);
      });
    Za(c) &&
      (a.gtmOnFailure = function () {
        F(c);
      });
  }
  function uC(a) {}
  uC.F = "internal.addAdsClickIds";
  function vC(a, b) {
    var c = this;
  }
  vC.publicName = "addConsentListener";
  var wC = !1;
  function xC(a) {
    for (var b = 0; b < a.length; ++b)
      if (wC)
        try {
          a[b]();
        } catch (c) {
          T(77);
        }
      else a[b]();
  }
  function yC(a, b, c) {
    var d = this,
      e;
    return e;
  }
  yC.F = "internal.addDataLayerEventListener";
  function zC(a, b, c) {}
  zC.publicName = "addDocumentEventListener";
  function AC(a, b, c, d) {}
  AC.publicName = "addElementEventListener";
  function BC(a) {
    return a.D.j;
  }
  function CC(a) {}
  CC.publicName = "addEventCallback";
  function SC(a) {}
  SC.F = "internal.addFormAbandonmentListener";
  function TC(a, b, c, d) {}
  TC.F = "internal.addFormData";
  var UC = {},
    VC = [],
    WC = {},
    XC = 0,
    YC = 0;
  function eD(a, b) {}
  eD.F = "internal.addFormInteractionListener";
  function lD(a, b) {}
  lD.F = "internal.addFormSubmitListener";
  function qD(a) {}
  qD.F = "internal.addGaSendListener";
  function rD(a) {
    if (!a) return {};
    var b = a.wm;
    return hz(b.type, b.index, b.name);
  }
  function sD(a) {
    return a ? { originatingEntity: rD(a) } : {};
  }
  var uD = function (a, b, c) {
      tD().updateZone(a, b, c);
    },
    wD = function (a, b, c, d, e, f) {
      var g = tD();
      c = c && sb(c, vD);
      for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, Gk(), k)) {
          var p = n,
            q = a,
            r = d,
            u = e,
            v = f;
          if (tb(p, "GTM-"))
            az(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var t = IA("js", nb());
            az(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: u, inheritParentConfig: v };
            S(141) || MA(t, q, w);
            MA(JA(p, r), q, w);
          }
        }
      }
      return k;
    },
    tD = function () {
      var a = cj.zones;
      a || (a = cj.zones = new xD());
      return a;
    },
    yD = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    vD = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    xD = function () {
      this.j = {};
      this.C = {};
      this.H = 0;
    };
  h = xD.prototype;
  h.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.mi], b)) return !1;
    for (var e = 0; e < c.Bf.length; e++) if (this.C[c.Bf[e]].Qd(b)) return !0;
    return !1;
  };
  h.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.Bf.length; f++) {
      var g = this.C[c.Bf[f]];
      g.Qd(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var k = this.getIsAllowedFn([c.mi], b);
    return function (m, n) {
      n = n || [];
      if (!k(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].H(m, n)) return !0;
      return !1;
    };
  };
  h.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.j[a[b]];
  };
  h.createZone = function (a, b) {
    var c = String(++this.H);
    this.C[c] = new zD(a, b);
    return c;
  };
  h.updateZone = function (a, b, c) {
    var d = this.C[a];
    d && d.K(b, c);
  };
  h.registerChild = function (a, b, c) {
    var d = this.j[a];
    if ((!d && cj[a]) || (!d && Rk(a)) || (d && d.mi !== b)) return !1;
    if (d) return d.Bf.push(c), !1;
    this.j[a] = { mi: b, Bf: [c] };
    return !0;
  };
  var zD = function (a, b) {
    this.C = null;
    this.j = [{ eventId: a, Qd: !0 }];
    if (b) {
      this.C = {};
      for (var c = 0; c < b.length; c++) this.C[b[c]] = !0;
    }
  };
  zD.prototype.K = function (a, b) {
    var c = this.j[this.j.length - 1];
    a <= c.eventId || (c.Qd !== b && this.j.push({ eventId: a, Qd: b }));
  };
  zD.prototype.Qd = function (a) {
    for (var b = this.j.length - 1; b >= 0; b--)
      if (this.j[b].eventId <= a) return this.j[b].Qd;
    return !1;
  };
  zD.prototype.H = function (a, b) {
    b = b || [];
    if (!this.C || yD[a] || this.C[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.C[b[c]]) return !0;
    return !1;
  };
  function AD(a) {
    var b = cj.zones;
    return b
      ? b.getIsAllowedFn(Ak(), a)
      : function () {
          return !0;
        };
  }
  function BD() {
    Qy(Ik(), function (a) {
      var b = a.originalEventData["gtm.uniqueEventId"],
        c = cj.zones;
      return c ? c.isActive(Ak(), b) : !0;
    });
    Oy(Ik(), function (a) {
      var b, c;
      b = a.entityId;
      c = a.securityGroups;
      return AD(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
    });
  }
  var CD = function (a, b) {
    this.tagId = a;
    this.Te = b;
  };
  function DD(a, b) {
    var c = this,
      d = void 0;
    if (!L(a) || (!Eg(b) && !Gg(b)))
      throw I(this.getName(), ["string", "Object|undefined"], arguments);
    var e = G(b, this.D, 1) || {},
      f = e.firstPartyUrl,
      g = e.onLoad,
      k = e.loadByDestination === !0,
      m = e.isGtmEvent === !0,
      n = e.siloed === !0;
    d = n ? Dk(a) : a;
    xC([
      function () {
        M(c, "load_google_tags", a, f);
      },
    ]);
    if (k) {
      if (Sk(a)) return d;
    } else if (Rk(a)) return d;
    var p = 6,
      q = BC(this);
    m && (p = 7);
    q.rb() === "__zone" && (p = 1);
    var r = { source: p, fromContainerExecution: !0, siloed: n },
      u = function (v) {
        Oy(
          v,
          function (t) {
            for (
              var w = Py().getExternalRestrictions(0, Ik()),
                x = l(w),
                y = x.next();
              !y.done;
              y = x.next()
            ) {
              var A = y.value;
              if (!A(t)) return !1;
            }
            return !0;
          },
          !0
        );
        Qy(
          v,
          function (t) {
            for (
              var w = Py().getExternalRestrictions(1, Ik()),
                x = l(w),
                y = x.next();
              !y.done;
              y = x.next()
            ) {
              var A = y.value;
              if (!A(t)) return !1;
            }
            return !0;
          },
          !0
        );
        g && g(new CD(a, v));
      };
    k ? dz(a, f, r, u) : az(a, f, !tb(a, "GTM-"), r, u);
    g &&
      q.rb() === "__zone" &&
      wD(Number.MIN_SAFE_INTEGER, [a], null, {}, rD(BC(this)));
    return d;
  }
  DD.F = "internal.loadGoogleTag";
  function ED(a) {
    return new Zc("", function (b) {
      var c = this.evaluate(b);
      if (c instanceof Zc)
        return new Zc("", function () {
          var d = ya.apply(0, arguments),
            e = this,
            f = Sc(BC(this), null);
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return e.evaluate(m);
            }),
            k = Ha(this.D);
          k.j = f;
          return c.ib.apply(c, [k].concat(ta(g)));
        });
    });
  }
  function FD(a, b, c) {
    var d = this;
  }
  FD.F = "internal.addGoogleTagRestriction";
  var GD = {},
    HD = [];
  function OD(a, b) {}
  OD.F = "internal.addHistoryChangeListener";
  function PD(a, b, c) {}
  PD.publicName = "addWindowEventListener";
  function QD(a, b) {
    return !0;
  }
  QD.publicName = "aliasInWindow";
  function RD(a, b, c) {}
  RD.F = "internal.appendRemoteConfigParameter";
  function SD(a) {
    var b;
    return b;
  }
  SD.publicName = "callInWindow";
  function TD(a) {}
  TD.publicName = "callLater";
  function UD(a) {}
  UD.F = "callOnDomReady";
  function VD(a) {}
  VD.F = "callOnWindowLoad";
  function WD(a, b) {
    var c;
    return c;
  }
  WD.F = "internal.computeGtmParameter";
  function XD(a, b) {
    var c = this;
  }
  XD.F = "internal.consentScheduleFirstTry";
  function YD(a, b) {
    var c = this;
  }
  YD.F = "internal.consentScheduleRetry";
  function ZD(a) {
    var b;
    return b;
  }
  ZD.F = "internal.copyFromCrossContainerData";
  function $D(a, b) {
    var c;
    var d = gd(c, this.D, tb(BC(this).rb(), "__cvt_") ? 2 : 1);
    d === void 0 && c !== void 0 && T(45);
    return d;
  }
  $D.publicName = "copyFromDataLayer";
  function aE(a) {
    var b = void 0;
    return b;
  }
  aE.F = "internal.copyFromDataLayerCache";
  function bE(a) {
    var b;
    return b;
  }
  bE.publicName = "copyFromWindow";
  function cE(a) {
    var b = void 0;
    return gd(b, this.D, 1);
  }
  cE.F = "internal.copyKeyFromWindow";
  var dE = function (a, b, c) {
      var d = this;
      this.eventName = b;
      this.m = c;
      this.j = {};
      this.isAborted = !1;
      this.TEST_ONLY = {
        getMetadata: function () {
          return Object.assign({}, d.metadata);
        },
        setMetadata: function (e) {
          d.metadata = e;
        },
        getHitData: function () {
          return d.j;
        },
        setHitData: function (e) {
          d.j = e;
        },
      };
      this.target = a;
      this.metadata = Sc(c.eventMetadata || {}, {});
    },
    eE = function (a, b) {
      b = b === void 0 ? {} : b;
      return Sc(a.j, b);
    },
    Qw = function (a, b, c) {
      a.j[b] = c;
    };
  dE.prototype.copyToHitData = function (a, b, c) {
    var d = U(this.m, a);
    d === void 0 && (d = b);
    if (d !== void 0 && c !== void 0 && $a(d) && S(85))
      try {
        d = c(d);
      } catch (e) {}
    d !== void 0 && (this.j[a] = d);
  };
  var ov = function (a, b, c) {
    var d = a.target.destinationId;
    S(131) && !xk && (d = Mk(d));
    var e = cu(d);
    return e && e[b] !== void 0 ? e[b] : c;
  };
  function fE(a, b) {
    var c;
    return c;
  }
  fE.F = "internal.copyPreHit";
  function gE(a, b) {
    var c = null;
    if (!L(a) || !L(b))
      throw I(this.getName(), ["string", "string"], arguments);
    M(this, "access_globals", "readwrite", a);
    M(this, "access_globals", "readwrite", b);
    var d = [z, B],
      e = a.split("."),
      f = vb(e, d),
      g = e[e.length - 1];
    if (f === void 0) throw Error("Path " + a + " does not exist.");
    var k = f[g];
    if (k) return Za(k) ? gd(k, this.D, 2) : null;
    var m;
    k = function () {
      if (!Za(m.push))
        throw Error("Object at " + b + " in window is not an array.");
      m.push.call(m, arguments);
    };
    f[g] = k;
    var n = b.split("."),
      p = vb(n, d),
      q = n[n.length - 1];
    if (p === void 0) throw Error("Path " + n + " does not exist.");
    m = p[q];
    m === void 0 && ((m = []), (p[q] = m));
    c = function () {
      k.apply(k, Array.prototype.slice.call(arguments, 0));
    };
    return gd(c, this.D, 2);
  }
  gE.publicName = "createArgumentsQueue";
  function hE(a) {
    return gd(
      function (c) {
        var d = qz();
        if (typeof c === "function")
          d(function () {
            c(function (f, g, k) {
              var m = qz(),
                n = m && m.getByName && m.getByName(f);
              return new z.gaplugins.Linker(n).decorate(g, k);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c);
        } else if (c === "isLoaded") return !!d.loaded;
      },
      this.D,
      1
    );
  }
  hE.F = "internal.createGaCommandQueue";
  function iE(a) {
    return gd(
      function () {
        if (!Za(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.D,
      tb(BC(this).rb(), "__cvt_") ? 2 : 1
    );
  }
  iE.publicName = "createQueue";
  function jE(a, b) {
    var c = null;
    return c;
  }
  jE.F = "internal.createRegex";
  function kE() {
    var a = {};
    return a;
  }
  function lE(a) {}
  lE.F = "internal.declareConsentState";
  function mE(a) {
    var b = "";
    return b;
  }
  mE.F = "internal.decodeUrlHtmlEntities";
  function nE(a, b, c) {
    var d;
    return d;
  }
  nE.F = "internal.decorateUrlWithGaCookies";
  function oE() {}
  oE.F = "internal.deferCustomEvents";
  function pE(a) {
    var b;
    return b;
  }
  pE.F = "internal.detectUserProvidedData";
  function uE(a, b) {
    return f;
  }
  uE.F = "internal.enableAutoEventOnClick";
  function CE(a, b) {
    return p;
  }
  CE.F = "internal.enableAutoEventOnElementVisibility";
  function DE() {}
  DE.F = "internal.enableAutoEventOnError";
  var EE = {},
    FE = [],
    GE = {},
    HE = 0,
    IE = 0;
  function OE(a, b) {
    var c = this;
    return d;
  }
  OE.F = "internal.enableAutoEventOnFormInteraction";
  function TE(a, b) {
    var c = this;
    return f;
  }
  TE.F = "internal.enableAutoEventOnFormSubmit";
  function YE() {
    var a = this;
  }
  YE.F = "internal.enableAutoEventOnGaSend";
  var ZE = {},
    $E = [];
  function gF(a, b) {
    var c = this;
    return f;
  }
  gF.F = "internal.enableAutoEventOnHistoryChange";
  var hF = ["http://", "https://", "javascript:", "file://"];
  function lF(a, b) {
    var c = this;
    return k;
  }
  lF.F = "internal.enableAutoEventOnLinkClick";
  var mF, nF;
  function yF(a, b) {
    var c = this;
    return d;
  }
  yF.F = "internal.enableAutoEventOnScroll";
  function zF(a) {
    return function () {
      if (a.limit && a.ii >= a.limit) a.sg && z.clearInterval(a.sg);
      else {
        a.ii++;
        var b = ob();
        sB({
          event: a.eventName,
          "gtm.timerId": a.sg,
          "gtm.timerEventNumber": a.ii,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.limit,
          "gtm.timerStartTime": a.Rk,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Rk,
          "gtm.triggers": a.Ln,
        });
      }
    };
  }
  function AF(a, b) {
    return f;
  }
  AF.F = "internal.enableAutoEventOnTimer";
  var Zb = wa(["data-gtm-yt-inspected-"]),
    CF = ["www.youtube.com", "www.youtube-nocookie.com"],
    DF,
    EF = !1;
  function OF(a, b) {
    var c = this;
    return e;
  }
  OF.F = "internal.enableAutoEventOnYouTubeActivity";
  function PF(a, b) {
    if (!L(a) || !Fg(b))
      throw I(this.getName(), ["string", "Object|undefined"], arguments);
    var c = b ? G(b) : {},
      d = a,
      e = !1;
    return e;
  }
  PF.F = "internal.evaluateBooleanExpression";
  var QF;
  function RF(a) {
    var b = !1;
    return b;
  }
  RF.F = "internal.evaluateMatchingRules";
  function yG() {
    return xp(7) && xp(9) && xp(10);
  }
  function tH(a, b, c, d) {}
  tH.F = "internal.executeEventProcessor";
  function uH(a) {
    var b;
    return gd(b, this.D, 1);
  }
  uH.F = "internal.executeJavascriptString";
  function vH(a) {
    var b;
    return b;
  }
  function wH(a) {
    var b = {};
    return gd(b);
  }
  wH.F = "internal.getAdsCookieWritingOptions";
  function xH(a) {
    var b = !1;
    return b;
  }
  xH.F = "internal.getAllowAdPersonalization";
  function yH(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  yH.F = "internal.getAuid";
  var zH = null;
  function AH() {
    var a = new Ma();
    return a;
  }
  AH.publicName = "getContainerVersion";
  function BH(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  BH.publicName = "getCookieValues";
  function CH() {
    return Ol();
  }
  CH.F = "internal.getCountryCode";
  function DH() {
    var a = [];
    return gd(a);
  }
  DH.F = "internal.getDestinationIds";
  function EH(a) {
    var b = new Ma();
    return b;
  }
  EH.F = "internal.getDeveloperIds";
  function FH(a, b) {
    var c = null;
    return c;
  }
  FH.F = "internal.getElementAttribute";
  function GH(a) {
    var b = null;
    return b;
  }
  GH.F = "internal.getElementById";
  function HH(a) {
    var b = "";
    return b;
  }
  HH.F = "internal.getElementInnerText";
  function IH(a, b) {
    var c = null;
    return gd(c);
  }
  IH.F = "internal.getElementProperty";
  function JH(a) {
    var b;
    return b;
  }
  JH.F = "internal.getElementValue";
  function KH(a) {
    var b = 0;
    return b;
  }
  KH.F = "internal.getElementVisibilityRatio";
  function LH(a) {
    var b = null;
    return b;
  }
  LH.F = "internal.getElementsByCssSelector";
  function MH(a) {
    var b;
    if (!L(a)) throw I(this.getName(), ["string"], arguments);
    M(this, "read_event_data", a);
    var c;
    a: {
      var d = a,
        e = BC(this).originalEventData;
      if (e) {
        for (
          var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0;
          q < p.length;
          q++
        ) {
          for (var r = p[q].split("\\."), u = 0; u < r.length; u++) {
            for (var v = r[u].split("."), t = 0; t < v.length; t++)
              n.push(v[t]), t !== v.length - 1 && n.push(m);
            u !== r.length - 1 && n.push(k);
          }
          q !== p.length - 1 && n.push(g);
        }
        for (
          var w = [], x = "", y = l(n), A = y.next();
          !A.done;
          A = y.next()
        ) {
          var C = A.value;
          C === m
            ? (w.push(x), (x = ""))
            : (x = C === g ? x + "\\" : C === k ? x + "." : x + C);
        }
        x && w.push(x);
        for (var D = l(w), E = D.next(); !E.done; E = D.next()) {
          if (f == null) {
            c = void 0;
            break a;
          }
          f = f[E.value];
        }
        c = f;
      } else c = void 0;
    }
    b = gd(c, this.D, 1);
    return b;
  }
  MH.F = "internal.getEventData";
  var NH = {};
  NH.enableAWFledge = S(33);
  NH.enableAdsConversionValidation = S(18);
  NH.enableAdsSupernovaParams = S(29);
  NH.enableAutoPhoneAndAddressDetection = S(31);
  NH.enableAutoPiiOnPhoneAndAddress = S(32);
  NH.enableCachedEcommerceData = S(41);
  NH.enableCloudRecommentationsErrorLogging = S(42);
  NH.enableCloudRecommentationsSchemaIngestion = S(43);
  NH.enableCloudRetailInjectPurchaseMetadata = S(45);
  NH.enableCloudRetailLogging = S(44);
  NH.enableCloudRetailPageCategories = S(46);
  NH.enableConsentDisclosureActivity = S(48);
  NH.enableDCFledge = S(56);
  NH.enableDataLayerSearchExperiment = S(120);
  NH.enableDecodeUri = S(85);
  NH.enableDeferAllEnhancedMeasurement = S(57);
  NH.enableFormSkipValidation = S(79);
  NH.enableGa4OutboundClicksFix = S(88);
  NH.enableGaAdsConversions = S(112);
  NH.enableGaAdsConversionsClientId = S(111);
  NH.enableLimitedDataModes = S(102);
  NH.enableMerchantRenameForBasketData = S(105);
  NH.enableUnsiloedModeGtmTags = S(133);
  NH.enableUrlDecodeEventUsage = S(135);
  NH.enableZoneConfigInChildContainers = S(138);
  NH.useEnableAutoEventOnFormApis = S(150);
  NH.autoPiiEligible = Tl();
  function OH() {
    return gd(NH);
  }
  OH.F = "internal.getFlags";
  function PH() {
    return new dd(YB);
  }
  PH.F = "internal.getHtmlId";
  function QH(a) {
    var b;
    return b;
  }
  QH.F = "internal.getIframingState";
  function RH(a, b) {
    var c = {};
    return gd(c);
  }
  RH.F = "internal.getLinkerValueFromLocation";
  function SH() {
    var a = new Ma();
    return a;
  }
  SH.F = "internal.getPrivacyStrings";
  function TH(a, b) {
    var c;
    return c;
  }
  TH.F = "internal.getProductSettingsParameter";
  function UH(a, b) {
    var c;
    return c;
  }
  UH.publicName = "getQueryParameters";
  function VH(a, b) {
    var c;
    return c;
  }
  VH.publicName = "getReferrerQueryParameters";
  function WH(a) {
    var b = "";
    return b;
  }
  WH.publicName = "getReferrerUrl";
  function XH() {
    return Pl();
  }
  XH.F = "internal.getRegionCode";
  function YH(a, b) {
    var c;
    return c;
  }
  YH.F = "internal.getRemoteConfigParameter";
  function ZH() {
    var a = new Ma();
    a.set("width", 0);
    a.set("height", 0);
    return a;
  }
  ZH.F = "internal.getScreenDimensions";
  function $H() {
    var a = "";
    return a;
  }
  $H.F = "internal.getTopSameDomainUrl";
  function aI() {
    var a = "";
    return a;
  }
  aI.F = "internal.getTopWindowUrl";
  function bI(a) {
    var b = "";
    return b;
  }
  bI.publicName = "getUrl";
  function cI() {
    M(this, "get_user_agent");
    return ec.userAgent;
  }
  cI.F = "internal.getUserAgent";
  function dI() {
    var a;
    return a ? gd(Zv(a)) : a;
  }
  dI.F = "internal.getUserAgentClientHints";
  function lI() {
    return (z.gaGlobal = z.gaGlobal || {});
  }
  function mI() {
    var a = lI();
    a.hid = a.hid || eb();
    return a.hid;
  }
  function nI(a, b) {
    var c = lI();
    if (c.vid === void 0 || (b && !c.from_cookie))
      (c.vid = a), (c.from_cookie = b);
  }
  function JI(a) {
    if (rv(a) || zj()) a.j[P.g.Ij] = Pl() || Ol();
    !rv(a) && zj() && (a.j[P.g.Rj] = "::");
  }
  function KI(a) {
    if (S(81) && zj()) {
      ut(a);
      vt(a, "cpf", Gt(U(a.m, P.g.Ma)));
      var b = U(a.m, P.g.mc);
      vt(a, "cu", b === !0 ? 1 : b === !1 ? 0 : void 0);
      vt(a, "cf", Gt(U(a.m, P.g.eb)));
      vt(a, "cd", iq(Ft(U(a.m, P.g.Qa)), Ft(U(a.m, P.g.zb))));
    }
  }
  var $I = function (a) {
      this.H = a;
      this.j = "";
    },
    aJ = function (a, b) {
      a.C = b;
      return a;
    },
    bJ = function (a, b) {
      b = a.j + b;
      for (var c = b.indexOf("\n\n"); c !== -1; ) {
        var d = a,
          e;
        a: {
          var f = l(b.substring(0, c).split("\n")),
            g = f.next().value,
            k = f.next().value;
          if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0)
            try {
              e = JSON.parse(k.substring(k.indexOf(":") + 1));
              break a;
            } catch (H) {}
          e = void 0;
        }
        var m = d,
          n = e;
        if (n) {
          var p = n.send_pixel,
            q = n.options,
            r = m.H;
          if (p) {
            var u = p || [];
            if (Array.isArray(u))
              for (
                var v = Rc(q) ? q : {}, t = l(u), w = t.next();
                !w.done;
                w = t.next()
              )
                r(w.value, v);
          }
          var x = n.create_iframe,
            y = n.options,
            A = m.C;
          if (x && A) {
            var C = x || [];
            if (Array.isArray(C))
              for (
                var D = Rc(y) ? y : {}, E = l(C), K = E.next();
                !K.done;
                K = E.next()
              )
                A(K.value, D);
          }
        }
        b = b.substring(c + 2);
        c = b.indexOf("\n\n");
      }
      a.j = b;
    };
  function cJ(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  var QJ = window,
    RJ = document,
    SJ = function (a) {
      var b = QJ._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        RJ.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && QJ["ga-disable-" + a] === !0)
      )
        return !0;
      try {
        var c = QJ.external;
        if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0;
      } catch (p) {}
      for (
        var d = [], e = String(RJ.cookie).split(";"), f = 0;
        f < e.length;
        f++
      ) {
        var g = e[f].split("="),
          k = g[0].replace(/^\s*|\s*$/g, "");
        if (k && k == "AMP_TOKEN") {
          var m = g
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          m && (m = decodeURIComponent(m));
          d.push(m);
        }
      }
      for (var n = 0; n < d.length; n++) if (d[n] == "$OPT_OUT") return !0;
      return RJ.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function cK(a) {
    hb(a, function (c) {
      c.charAt(0) === "_" && delete a[c];
    });
    var b = a[P.g.qb] || {};
    hb(b, function (c) {
      c.charAt(0) === "_" && delete b[c];
    });
  }
  function JK(a, b) {}
  function KK(a, b) {
    var c = function () {};
    return c;
  }
  function LK(a, b, c) {}
  var MK = KK;
  var NK = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]));
  };
  function OK(a, b, c) {
    var d = this;
    if (!L(a) || !Fg(b) || !Fg(c))
      throw I(
        this.getName(),
        ["string", "Object|undefined", "Object|undefined"],
        arguments
      );
    var e = b ? G(b) : {};
    xC([
      function () {
        return M(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? G(c) : {},
      g = BC(this);
    f.originatingEntity = rD(g);
    MA(JA(a, e), g.eventId, f);
  }
  OK.F = "internal.gtagConfig";
  function PK() {
    var a = {};
    return a;
  }
  function RK(a, b) {}
  RK.publicName = "gtagSet";
  function SK() {
    var a = {};
    return a;
  }
  function TK(a, b) {}
  TK.publicName = "injectHiddenIframe";
  var nC = (function () {
    var a = 0;
    return function (b) {
      switch (b) {
        case 1:
          a |= 1;
          break;
        case 2:
          a |= 2;
          break;
        case 3:
          a |= 4;
      }
      return a;
    };
  })();
  function UK(a, b, c, d, e) {
    var f = this;
  }
  UK.F = "internal.injectHtml";
  var YK = {};
  function $K(a, b, c, d) {}
  var aL = { dl: 1, id: 1 },
    bL = {};
  function cL(a, b, c, d) {}
  $K.publicName = "injectScript";
  cL.F = "internal.injectScript";
  function dL(a) {
    var b = !0;
    return b;
  }
  dL.publicName = "isConsentGranted";
  function eL(a) {
    var b = !1;
    return b;
  }
  eL.F = "internal.isDebugMode";
  function fL() {
    return Rl();
  }
  fL.F = "internal.isDmaRegion";
  function gL(a) {
    var b = !1;
    return b;
  }
  gL.F = "internal.isEntityInfrastructure";
  function hL() {
    var a = !1;
    return a;
  }
  hL.F = "internal.isLandingPage";
  function iL() {
    var a = jh(function (b) {
      BC(this).log("error", b);
    });
    a.publicName = "JSON";
    return a;
  }
  function jL(a) {
    var b = void 0;
    return gd(b);
  }
  jL.F = "internal.legacyParseUrl";
  function kL() {
    return !1;
  }
  var lL = {
    getItem: function (a) {
      var b = null;
      return b;
    },
    setItem: function (a, b) {
      return !1;
    },
    removeItem: function (a) {},
  };
  function mL() {
    try {
      M(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = G(a[b], this.D);
    console.log.apply(console, a);
  }
  mL.publicName = "logToConsole";
  function nL(a, b) {}
  nL.F = "internal.mergeRemoteConfig";
  function oL(a, b, c) {
    c = c === void 0 ? !0 : c;
    var d = [];
    return gd(d);
  }
  oL.F = "internal.parseCookieValuesFromString";
  function pL(a) {
    var b = void 0;
    return b;
  }
  pL.publicName = "parseUrl";
  function qL(a) {}
  qL.F = "internal.processAsNewEvent";
  function rL(a, b, c) {
    var d;
    return d;
  }
  rL.F = "internal.pushToDataLayer";
  function sL(a) {
    var b = ya.apply(1, arguments),
      c = !1;
    return c;
  }
  sL.publicName = "queryPermission";
  function tL(a) {
    var b = this;
  }
  tL.F = "internal.queueAdsTransmission";
  function uL() {
    var a = "";
    return a;
  }
  uL.publicName = "readCharacterSet";
  function vL() {
    return bj.ub;
  }
  vL.F = "internal.readDataLayerName";
  function wL() {
    var a = "";
    return a;
  }
  wL.publicName = "readTitle";
  function xL(a, b) {
    var c = this;
  }
  xL.F = "internal.registerCcdCallback";
  function yL(a) {
    return !0;
  }
  yL.F = "internal.registerDestination";
  var zL = ["config", "event", "get", "set"];
  function AL(a, b, c) {}
  AL.F = "internal.registerGtagCommandListener";
  function BL(a, b) {
    var c = !1;
    return c;
  }
  BL.F = "internal.removeDataLayerEventListener";
  function CL(a, b) {}
  CL.F = "internal.removeFormData";
  function DL() {}
  DL.publicName = "resetDataLayer";
  function EL(a, b, c) {
    var d = void 0;
    return d;
  }
  EL.F = "internal.scrubUrlParams";
  function FL(a) {}
  FL.F = "internal.sendAdsHit";
  function GL(a, b, c, d) {}
  GL.F = "internal.sendGtagEvent";
  function HL(a, b, c) {}
  HL.publicName = "sendPixel";
  function IL(a, b) {}
  IL.F = "internal.setAnchorHref";
  function JL(a) {}
  JL.F = "internal.setContainerConsentDefaults";
  function KL(a, b, c, d) {
    var e = this;
    d = d === void 0 ? !0 : d;
    var f = !1;
    return f;
  }
  KL.publicName = "setCookie";
  function LL(a) {}
  LL.F = "internal.setCorePlatformServices";
  function ML(a, b) {}
  ML.F = "internal.setDataLayerValue";
  function NL(a) {}
  NL.publicName = "setDefaultConsentState";
  function OL(a, b) {}
  OL.F = "internal.setDelegatedConsentType";
  function PL(a, b) {}
  PL.F = "internal.setFormAction";
  function QL(a, b, c) {
    c = c === void 0 ? !1 : c;
  }
  QL.F = "internal.setInCrossContainerData";
  function RL(a, b, c) {
    return !1;
  }
  RL.publicName = "setInWindow";
  function SL(a, b, c) {}
  SL.F = "internal.setProductSettingsParameter";
  function TL(a, b, c) {}
  TL.F = "internal.setRemoteConfigParameter";
  var UL = { unspecified: 0, limited: 1, none: 2 },
    VL = { unspecified: 0, ads: 1, analytics: 2, monitoring: 3 };
  function WL(a, b) {}
  WL.F = "internal.setTransmissionMode";
  function XL(a, b, c, d) {
    var e = this;
  }
  XL.publicName = "sha256";
  function YL(a, b, c) {}
  YL.F = "internal.sortRemoteConfigParameters";
  function ZL(a, b) {
    var c = void 0;
    return c;
  }
  ZL.F = "internal.subscribeToCrossContainerData";
  var $L = {},
    aM = {};
  $L.getItem = function (a) {
    var b = null;
    return b;
  };
  $L.setItem = function (a, b) {};
  $L.removeItem = function (a) {};
  $L.clear = function () {};
  $L.publicName = "templateStorage";
  function bM(a, b) {
    var c = !1;
    return c;
  }
  bM.F = "internal.testRegex";
  function cM(a) {
    var b;
    return b;
  }
  function dM(a) {
    var b;
    return b;
  }
  dM.F = "internal.unsiloId";
  function eM(a, b) {
    var c;
    return c;
  }
  eM.F = "internal.unsubscribeFromCrossContainerData";
  function fM(a) {}
  fM.publicName = "updateConsentState";
  var gM;
  function hM(a, b, c) {
    gM = gM || new uh();
    gM.add(a, b, c);
  }
  function iM(a, b) {
    var c = (gM = gM || new uh());
    if (c.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.contains(a))
      throw Error(
        "Attempting to add a private function with an existing API name: " +
          a +
          "."
      );
    c.j[a] = Za(b) ? Rg(a, b) : Sg(a, b);
  }
  function jM() {
    return function (a) {
      var b;
      var c = gM;
      if (c.contains(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.j.hasOwnProperty(a))) {
          var e = !1,
            f = this.D.j;
          if (f) {
            var g = f.rb();
            if (g) {
              g.indexOf("__cvt_") !== 0 && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.j.hasOwnProperty(a) ? c.j[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  function kM() {
    var a = function (c) {
        return void iM(c.F, c);
      },
      b = function (c) {
        return void hM(c.publicName, c);
      };
    b(vC);
    b(CC);
    b(QD);
    b(SD);
    b(TD);
    b($D);
    b(bE);
    b(gE);
    b(iL());
    b(iE);
    b(AH);
    b(BH);
    b(UH);
    b(VH);
    b(WH);
    b(bI);
    b(RK);
    b(TK);
    b($K);
    b(dL);
    b(mL);
    b(pL);
    b(sL);
    b(uL);
    b(wL);
    b(HL);
    b(KL);
    b(NL);
    b(RL);
    b(XL);
    b($L);
    b(fM);
    hM("Math", Wg());
    hM("Object", sh);
    hM("TestHelper", xh());
    hM("assertApi", Tg);
    hM("assertThat", Ug);
    hM("decodeUri", Yg);
    hM("decodeUriComponent", Zg);
    hM("encodeUri", $g);
    hM("encodeUriComponent", ah);
    hM("fail", fh);
    hM("generateRandom", gh);
    hM("getTimestamp", hh);
    hM("getTimestampMillis", hh);
    hM("getType", ih);
    hM("makeInteger", kh);
    hM("makeNumber", lh);
    hM("makeString", mh);
    hM("makeTableMap", nh);
    hM("mock", qh);
    hM("mockObject", rh);
    hM("fromBase64", vH, !("atob" in z));
    hM("localStorage", lL, !kL());
    hM("toBase64", cM, !("btoa" in z));
    a(uC);
    a(yC);
    a(TC);
    a(eD);
    a(lD);
    a(qD);
    a(FD);
    a(OD);
    a(RD);
    a(UD);
    a(VD);
    a(WD);
    a(XD);
    a(YD);
    a(ZD);
    a(aE);
    a(cE);
    a(fE);
    a(hE);
    a(jE);
    a(lE);
    a(mE);
    a(nE);
    a(oE);
    a(pE);
    a(uE);
    a(CE);
    a(DE);
    a(OE);
    a(TE);
    a(YE);
    a(gF);
    a(lF);
    a(yF);
    a(AF);
    a(OF);
    a(PF);
    a(RF);
    a(tH);
    a(uH);
    a(wH);
    a(xH);
    a(yH);
    a(CH);
    a(DH);
    a(EH);
    a(FH);
    a(GH);
    a(HH);
    a(IH);
    a(JH);
    a(KH);
    a(LH);
    a(MH);
    a(OH);
    a(PH);
    a(QH);
    a(RH);
    a(SH);
    a(TH);
    a(XH);
    a(YH);
    a(ZH);
    a($H);
    a(aI);
    a(dI);
    a(OK);
    a(UK);
    a(cL);
    a(eL);
    a(fL);
    a(gL);
    a(hL);
    a(jL);
    a(DD);
    a(nL);
    a(oL);
    a(qL);
    a(rL);
    a(tL);
    a(vL);
    a(xL);
    a(yL);
    a(AL);
    a(BL);
    a(CL);
    a(wh);
    a(EL);
    a(FL);
    a(GL);
    a(IL);
    a(JL);
    a(LL);
    a(ML);
    a(OL);
    a(PL);
    a(QL);
    a(SL);
    a(TL);
    a(WL);
    a(YL);
    a(ZL);
    a(bM);
    a(dM);
    a(eM);
    iM("internal.CrossContainerSchema", kE());
    iM("internal.GtagSchema", PK());
    iM("internal.IframingStateSchema", SK());
    return jM();
  }
  var sC;
  function lM() {
    sC.j.j.H = function (a, b, c) {
      cj.SANDBOXED_JS_SEMAPHORE = cj.SANDBOXED_JS_SEMAPHORE || 0;
      cj.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        cj.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function mM(a) {
    a &&
      hb(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          sj[e] = sj[e] || [];
          sj[e].push(b);
        }
      });
  }
  function nM(a) {
    MA(HA("developer_id." + a, !0), 0, {});
  }
  var oM = Array.isArray;
  function pM(a, b) {
    return Sc(a, b || null);
  }
  function X(a) {
    return window.encodeURIComponent(a);
  }
  function qM(a, b, c) {
    rc(a, b, c);
  }
  function rM(a, b) {
    if (!a) return !1;
    var c = Sj(Yj(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        f > 0 && e.charAt(0) !== "." && (f--, (e = "." + e));
        if (f >= 0 && c.indexOf(e, f) === f) return !0;
      }
    }
    return !1;
  }
  function sM(a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  }
  var BM = z.clearTimeout,
    CM = z.setTimeout;
  function DM(a, b, c) {
    if (Op()) {
      b && F(b);
    } else return nc(a, b, c);
  }
  function EM() {
    return z.location.href;
  }
  function FM(a, b) {
    return Fj(a, b || 2);
  }
  function GM(a, b) {
    z[a] = b;
  }
  function HM(a, b, c) {
    b && (z[a] === void 0 || (c && !z[a])) && (z[a] = b);
    return z[a];
  }
  function IM(a, b) {
    if (Op()) {
      b && F(b);
    } else pc(a, b);
  }
  var JM = {};
  var Y = { securityGroups: {} };
  (Y.securityGroups.f = ["google"]),
    (Y.__f = function (a) {
      var b = FM("gtm.referrer", 1) || B.referrer;
      return b
        ? a.vtp_component && a.vtp_component != "URL"
          ? Sj(
              Yj(String(b)),
              a.vtp_component,
              a.vtp_stripWww,
              a.vtp_defaultPages,
              a.vtp_queryKey
            )
          : Vj(Yj(String(b)))
        : String(b);
    }),
    (Y.__f.o = "f"),
    (Y.__f.isVendorTemplate = !0),
    (Y.__f.priorityOverride = 0),
    (Y.__f.isInfrastructure = !0),
    (Y.__f.runInSiloedMode = !1);

  (Y.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Y.__access_globals = b;
        Y.__access_globals.o = "access_globals";
        Y.__access_globals.isVendorTemplate = !0;
        Y.__access_globals.priorityOverride = 0;
        Y.__access_globals.isInfrastructure = !1;
        Y.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            k = 0;
          k < c.length;
          k++
        ) {
          var m = c[k],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!$a(r)) throw d(p, {}, "Key must be a string.");
            if (q === "read") {
              if (e.indexOf(r) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(r) > -1) return;
            } else if (q === "readwrite") {
              if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return;
            } else if (q === "execute") {
              if (g.indexOf(r) > -1) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          M: a,
        };
      });
    })();
  (Y.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Y.__u = b;
        Y.__u.o = "u";
        Y.__u.isVendorTemplate = !0;
        Y.__u.priorityOverride = 0;
        Y.__u.isInfrastructure = !0;
        Y.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : FM("gtm.url", 1)) || EM();
        var d = b[a("vtp_component")];
        if (!d || d == "URL") return Vj(Yj(String(c)));
        var e = Yj(String(c)),
          f;
        if (d === "QUERY")
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(k)
                ? k
                : String(k).replace(/\s+/g, "").split(",")
              : [String(k)];
            for (var p = 0; p < n.length; p++) {
              var q = Sj(e, "QUERY", void 0, void 0, n[p]);
              if (q != void 0 && (!m || q !== "")) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Sj(
            e,
            d,
            d == "HOST" ? b[a("vtp_stripWww")] : void 0,
            d == "PATH" ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();

  (Y.securityGroups.read_event_data = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Y.__read_event_data = b;
        Y.__read_event_data.o = "read_event_data";
        Y.__read_event_data.isVendorTemplate = !0;
        Y.__read_event_data.priorityOverride = 0;
        Y.__read_event_data.isInfrastructure = !1;
        Y.__read_event_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_eventDataAccess,
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (g != null && !$a(g))
              throw e(f, { key: g }, "Key must be a string.");
            if (c !== "any") {
              try {
                if (c === "specific" && g != null && jg(g, d)) return;
              } catch (k) {
                throw e(f, { key: g }, "Invalid key filter.");
              }
              throw e(f, { key: g }, "Prohibited read from event data.");
            }
          },
          M: a,
        };
      });
    })();

  (Y.securityGroups.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        Y.__load_google_tags = b;
        Y.__load_google_tags.o = "load_google_tags";
        Y.__load_google_tags.isVendorTemplate = !0;
        Y.__load_google_tags.priorityOverride = 0;
        Y.__load_google_tags.isInfrastructure = !1;
        Y.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          k = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!$a(q)) throw k(m, {}, "Tag ID must be a string.");
              if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1))
                throw k(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (q !== void 0) {
                if (!$a(q)) throw k(m, {}, "First party URL must be a string.");
                if (d) {
                  if (e === "any") return;
                  if (e === "specific")
                    try {
                      if (Ag(Yj(q), f)) return;
                    } catch (r) {
                      throw k(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw k(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          M: a,
        };
      });
    })();

  (Y.securityGroups.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Y.__logging = b;
        Y.__logging.o = "logging";
        Y.__logging.isVendorTemplate = !0;
        Y.__logging.priorityOverride = 0;
        Y.__logging.isInfrastructure = !1;
        Y.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = c !== "all" && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          M: a,
        };
      });
    })();

  (Y.securityGroups.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        Y.__configure_google_tags = b;
        Y.__configure_google_tags.o = "configure_google_tags";
        Y.__configure_google_tags.isVendorTemplate = !0;
        Y.__configure_google_tags.priorityOverride = 0;
        Y.__configure_google_tags.isInfrastructure = !1;
        Y.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!$a(g)) throw e(f, {}, "Tag ID must be a string.");
            if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          M: a,
        };
      });
    })();

  var KM = {
    dataLayer: Gj,
    callback: function (a) {
      rj.hasOwnProperty(a) && Za(rj[a]) && rj[a]();
      delete rj[a];
    },
    bootstrap: 0,
  };
  function LM() {
    cj[Gk()] = cj[Gk()] || KM;
    Qk();
    Uk() ||
      hb(Vk(), function (d, e) {
        dz(d, e.transportUrl, e.context);
        T(92);
      });
    rb(sj, Y.securityGroups);
    var a = Kk(Lk()),
      b,
      c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
    im(c, a == null ? void 0 : a.parent);
    (c !== 2 && c !== 4 && c !== 3) || T(142);
    sf = { hm: Jf };
  }
  var MM = !1;
  (function (a) {
    function b() {
      n = B.documentElement.getAttribute("data-tag-assistant-present");
      Wl(n) && (m = k.Mj);
    }
    function c() {
      m && hc ? g(m) : a();
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var d = !1;
      if (B.referrer) {
        var e = Yj(B.referrer);
        d = Uj(e, "host") === "cct.google";
      }
      if (!d) {
        var f = Tp("googTaggyReferrer");
        d = !(!f.length || !f[0].length);
      }
      d &&
        ((z["__TAGGY_INSTALLED"] = !0),
        nc("https://cct.google/taggy/agent.js"));
    }
    var g = function (v) {
        var t = "GTM",
          w = "GTM";
        ij && ((t = "OGT"), (w = "GTAG"));
        var x = z["google.tagmanager.debugui2.queue"];
        x ||
          ((x = []),
          (z["google.tagmanager.debugui2.queue"] = x),
          nc(
            "https://" +
              bj.Df +
              "/debug/bootstrap?id=" +
              Pf.ctid +
              "&src=" +
              w +
              "&cond=" +
              v +
              "&gtm=" +
              Qp()
          ));
        var y = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: hc,
            containerProduct: t,
            debug: !1,
            id: Pf.ctid,
            targetRef: { ctid: Pf.ctid, isDestination: yk() },
            aliases: Bk(),
            destinations: zk(),
          },
        };
        y.data.resume = function () {
          a();
        };
        bj.il && (y.data.initialPublish = !0);
        x.push(y);
      },
      k = { Gl: 1, Oj: 2, ek: 3, Oi: 4, Mj: 5 };
    k[k.Gl] = "GTM_DEBUG_LEGACY_PARAM";
    k[k.Oj] = "GTM_DEBUG_PARAM";
    k[k.ek] = "REFERRER";
    k[k.Oi] = "COOKIE";
    k[k.Mj] = "EXTENSION_PARAM";
    var m = void 0,
      n = void 0,
      p = Sj(z.location, "query", !1, void 0, "gtm_debug");
    Wl(p) && (m = k.Oj);
    if (!m && B.referrer) {
      var q = Yj(B.referrer);
      Uj(q, "host") === "tagassistant.google.com" && (m = k.ek);
    }
    if (!m) {
      var r = Tp("__TAG_ASSISTANT");
      r.length && r[0].length && (m = k.Oi);
    }
    m || b();
    if (!m && Vl(n)) {
      var u = !1;
      sc(
        B,
        "TADebugSignal",
        function () {
          u || ((u = !0), b(), c());
        },
        !1
      );
      z.setTimeout(function () {
        u || ((u = !0), b(), c());
      }, 200);
    } else c();
  })(function () {
    try {
      var a;
      if (!(a = MM)) {
        var b;
        a: {
          for (var c = tk(), d = l(Ak()), e = d.next(); !e.done; e = d.next())
            if (c.injectedFirstPartyContainers[e.value]) {
              b = !0;
              break a;
            }
          b = !1;
        }
        a = !b;
      }
      if (a) {
        var f = wj.Fb,
          g = ui.Pn;
        f.j = new Set();
        if (g !== "")
          for (var k = l(g.split("~")), m = k.next(); !m.done; m = k.next()) {
            var n = Number(m.value);
            isNaN(n) || f.j.add(n);
          }
        wj.K = "";
        wj.uc = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
        wj.Ha = "ad_storage|analytics_storage|ad_user_data";
        wj.Z = "5230";
        wj.Z = "5230";
        Ok();
        if (S(94)) {
        }
        li[8] = !0;
        var p = Pf.ctid,
          q = yk(),
          r = S(113);
        r && (($l = 0), (am = !0), gm());
        r &&
          ((mm = cj),
          (nm = p),
          (hm = ij),
          (om = { ctid: p, isDestination: q }));
        if (!Cm) {
          Cm = !0;
          for (var u = Dm.length - 1; u >= 0; u--) Dm[u]();
          Dm = [];
        }
        hp();
        Mm();
        var v = Ik();
        if (tk().canonical[v]) {
          var t = cj.zones;
          t && t.unregisterChild(Ak());
          Py().removeExternalRestrictions(Ik());
        } else {
          $y();
          for (
            var w = data.resource || {}, x = w.macros || [], y = 0;
            y < x.length;
            y++
          )
            gf.push(x[y]);
          for (var A = w.tags || [], C = 0; C < A.length; C++) lf.push(A[C]);
          for (var D = w.predicates || [], E = 0; E < D.length; E++)
            kf.push(D[E]);
          for (var K = w.rules || [], H = 0; H < K.length; H++) {
            for (var N = K[H], J = {}, V = 0; V < N.length; V++) {
              var ca = N[V][0];
              J[ca] = Array.prototype.slice.call(N[V], 1);
              (ca !== "if" && ca !== "unless") || rf(J[ca]);
            }
            jf.push(J);
          }
          nf = Y;
          of = fC;
          Lf = new Sf();
          var ba = data.sandboxed_scripts,
            Z = data.security_groups;
          a: {
            var O = data.runtime || [],
              fa = data.runtime_lines;
            sC = new Ce();
            lM();
            ff = rC();
            var ha = sC,
              ia = kM(),
              Ca = new $c("require", ia);
            Ca.Ia();
            ha.j.j.set("require", Ca);
            for (var Ta = [], va = 0; va < O.length; va++) {
              var Ja = O[va];
              if (!Array.isArray(Ja) || Ja.length < 3) {
                if (Ja.length === 0) continue;
                break a;
              }
              fa && fa[va] && fa[va].length && Cf(Ja, fa[va]);
              try {
                sC.execute(Ja), S(110) && mk && Ja[0] === 50 && Ta.push(Ja[1]);
              } catch (jp) {}
            }
            S(110) && (tf = Ta);
          }
          if (ba && ba.length)
            for (var cb = ["sandboxedScripts"], Bb = 0; Bb < ba.length; Bb++) {
              var nd = ba[Bb].replace(/^_*/, "");
              sj[nd] = cb;
            }
          mM(Z);
          LM();
          if (!mj)
            for (
              var ci = Rl() ? Aj(wj.Ha) : Aj(wj.uc), kp = 0;
              kp < pm.length;
              kp++
            ) {
              var Zz = pm[kp],
                NM = Zz,
                OM = ci[Zz] ? "granted" : "denied";
              ml().implicit(NM, OM);
            }
          AB();
          AA = !1;
          BA = 0;
          if (
            (B.readyState === "interactive" && !B.createEventObject) ||
            B.readyState === "complete"
          )
            DA();
          else {
            sc(B, "DOMContentLoaded", DA);
            sc(B, "readystatechange", DA);
            if (B.createEventObject && B.documentElement.doScroll) {
              var $z = !0;
              try {
                $z = !z.frameElement;
              } catch (jp) {}
              $z && EA();
            }
            sc(z, "load", DA);
          }
          gB = !1;
          B.readyState === "complete" ? iB() : sc(z, "load", iB);
          zA();
          mk &&
            (zn(Mn),
            z.setInterval(Ln, 864e5),
            zn(iC),
            zn(Ez),
            zn(mx),
            zn(Pn),
            zn(oC),
            zn(Pz),
            S(110) && (zn(Jz), zn(Kz), zn(Lz)),
            jC());
          if (nk) {
            ll();
            en();
            var aA,
              bA = Yj(z.location.href);
            (aA = bA.hostname + bA.pathname) &&
              cl("dl", encodeURIComponent(aA));
            var lp;
            var cA = Pf.ctid;
            if (cA) {
              var QM = wk.Je ? 1 : 0,
                di,
                dA = Kk(Lk());
              di = dA && dA.context;
              lp =
                cA +
                ";" +
                Pf.canonicalContainerId +
                ";" +
                (di && di.fromContainerExecution ? 1 : 0) +
                ";" +
                ((di && di.source) || 0) +
                ";" +
                QM;
            } else lp = void 0;
            var eA = lp;
            eA && cl("tdp", eA);
            var fA = Po(!0);
            fA !== void 0 && cl("frm", String(fA));
            var mp;
            var ei = Kk(Lk());
            if (ei) {
              for (; ei.parent; ) {
                var gA = Kk(ei.parent);
                if (!gA) break;
                ei = gA;
              }
              mp = ei;
            } else mp = void 0;
            var hf = mp;
            if (!hf) T(144);
            else if (S(59) || hf.canonicalContainerId) {
              var np;
              a: {
                var hA,
                  iA = (hA = hf.scriptElement) == null ? void 0 : hA.src;
                if (iA) {
                  var op;
                  try {
                    var jA;
                    op =
                      (jA = Gc()) == null
                        ? void 0
                        : jA.getEntriesByType("resource");
                  } catch (jp) {}
                  if (op) {
                    for (
                      var kA = -1, lA = l(op), pp = lA.next();
                      !pp.done;
                      pp = lA.next()
                    ) {
                      var mA = pp.value;
                      if (mA.initiatorType === "script") {
                        kA += 1;
                        var qp = mA.name,
                          rp = iA;
                        S(58) &&
                          ((qp = qp.replace(BB, "")),
                          (rp = rp.replace(BB, "")));
                        if (qp === rp) {
                          np = kA;
                          break a;
                        }
                      }
                    }
                    T(146);
                  } else T(145);
                }
                np = void 0;
              }
              var nA = np;
              nA !== void 0 &&
                (hf.canonicalContainerId &&
                  cl("rtg", String(hf.canonicalContainerId)),
                cl("slo", String(nA)),
                cl("hlo", hf.htmlLoadOrder || "-1"),
                cl("lst", String(hf.loadScriptType || "0")));
            }
            var Ck;
            var fi = Jk();
            if (fi)
              if (fi.canonicalContainerId) Ck = fi.canonicalContainerId;
              else {
                var oA,
                  pA =
                    fi.scriptContainerId ||
                    ((oA = fi.destinations) == null ? void 0 : oA[0]);
                Ck = pA ? "_" + pA : void 0;
              }
            else Ck = void 0;
            var qA = Ck;
            qA && cl("pcid", qA);
            S(40) &&
              (cl("bt", String(wj.C ? 2 : kj ? 1 : 0)),
              cl("ct", String(wj.C ? 0 : kj ? 1 : Op() ? 2 : 3)));
          }
          WB();
          Ml(1);
          BD();
          qj = ob();
          KM.bootstrap = qj;
          wj.H && zB();
          if (S(94)) {
          }
          S(126) &&
            (typeof z.name === "string" &&
            tb(z.name, "web-pixel-sandbox-CUSTOM") &&
            Hc()
              ? nM("dMDg0Yz")
              : z.Shopify && Hc() && nM("dNTU0Yz"));
        }
      }
    } catch (jp) {
      if ((Ml(4), mk && (!S(6) || wj.P))) {
        var RM = Gn(!0, !0);
        rc(RM);
      }
    }
  });
})();
