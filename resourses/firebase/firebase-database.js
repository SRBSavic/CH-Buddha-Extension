!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(require("@firebase/app"))
    : "function" == typeof define && define.amd
    ? define(["@firebase/app"], t)
    : t(
        (e = "undefined" != typeof globalThis ? globalThis : e || self).firebase
      );
})(this, function (Du) {
  "use strict";
  try {
    !function () {
      function e(e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
      }
      var t = e(Du),
        r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        };
      function n(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var l = function () {
        return (l =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function i(e, s, a, u) {
        return new (a = a || Promise)(function (n, t) {
          function r(e) {
            try {
              o(u.next(e));
            } catch (e) {
              t(e);
            }
          }
          function i(e) {
            try {
              o(u.throw(e));
            } catch (e) {
              t(e);
            }
          }
          function o(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value) instanceof a
                  ? t
                  : new a(function (e) {
                      e(t);
                    })
                ).then(r, i);
          }
          o((u = u.apply(e, s || [])).next());
        });
      }
      function p(n, r) {
        var i,
          o,
          s,
          a = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: [],
          },
          e = { next: t(0), throw: t(1), return: t(2) };
        return (
          "function" == typeof Symbol &&
            (e[Symbol.iterator] = function () {
              return this;
            }),
          e
        );
        function t(t) {
          return function (e) {
            return (function (t) {
              if (i) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s =
                        2 & t[0]
                          ? o.return
                          : t[0]
                          ? o.throw || ((s = o.return) && s.call(o), 0)
                          : o.next) &&
                      !(s = s.call(o, t[1])).done)
                  )
                    return s;
                  switch (((o = 0), (t = s ? [2 & t[0], s.value] : t)[0])) {
                    case 0:
                    case 1:
                      s = t;
                      break;
                    case 4:
                      return a.label++, { value: t[1], done: !1 };
                    case 5:
                      a.label++, (o = t[1]), (t = [0]);
                      continue;
                    case 7:
                      (t = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(s = 0 < (s = a.trys).length && s[s.length - 1]) &&
                        (6 === t[0] || 2 === t[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === t[0] && (!s || (t[1] > s[0] && t[1] < s[3]))) {
                        a.label = t[1];
                        break;
                      }
                      if (6 === t[0] && a.label < s[1]) {
                        (a.label = s[1]), (s = t);
                        break;
                      }
                      if (s && a.label < s[2]) {
                        (a.label = s[2]), a.ops.push(t);
                        break;
                      }
                      s[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  t = r.call(n, a);
                } catch (e) {
                  (t = [6, e]), (o = 0);
                } finally {
                  i = s = 0;
                }
              if (5 & t[0]) throw t[1];
              return { value: t[0] ? t[1] : void 0, done: !0 };
            })([t, e]);
          };
        }
      }
      function _(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return {
                value: (e = e && r >= e.length ? void 0 : e) && e[r++],
                done: !e,
              };
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function y(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          s = [];
        try {
          for (; (void 0 === t || 0 < t--) && !(r = o.next()).done; )
            s.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      function s(e, t) {
        for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
          e[i] = t[n];
        return e;
      }
      function o(e) {
        for (var t = [], n = 0, r = 0; r < e.length; r++) {
          var i = e.charCodeAt(r);
          i < 128
            ? (t[n++] = i)
            : (i < 2048
                ? (t[n++] = (i >> 6) | 192)
                : (55296 == (64512 & i) &&
                  r + 1 < e.length &&
                  56320 == (64512 & e.charCodeAt(r + 1))
                    ? ((i =
                        65536 +
                        ((1023 & i) << 10) +
                        (1023 & e.charCodeAt(++r))),
                      (t[n++] = (i >> 18) | 240),
                      (t[n++] = ((i >> 12) & 63) | 128))
                    : (t[n++] = (i >> 12) | 224),
                  (t[n++] = ((i >> 6) & 63) | 128)),
              (t[n++] = (63 & i) | 128));
        }
        return t;
      }
      function a(e) {
        return (e = o(e)), c.encodeByteArray(e, !0);
      }
      function u(e) {
        try {
          return c.decodeString(e, !0);
        } catch (e) {
          console.error("base64Decode failed: ", e);
        }
        return null;
      }
      var h = {
          NODE_CLIENT: !1,
          NODE_ADMIN: !1,
          SDK_VERSION: "${JSCORE_VERSION}",
        },
        g = function (e, t) {
          if (!e) throw m(t);
        },
        m = function (e) {
          return new Error(
            "Firebase Database (" +
              h.SDK_VERSION +
              ") INTERNAL ASSERT FAILED: " +
              e
          );
        },
        c = {
          byteToCharMap_: null,
          charToByteMap_: null,
          byteToCharMapWebSafe_: null,
          charToByteMapWebSafe_: null,
          ENCODED_VALS_BASE:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/=";
          },
          get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_.";
          },
          HAS_NATIVE_SUPPORT: "function" == typeof atob,
          encodeByteArray: function (e, t) {
            if (!Array.isArray(e))
              throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            for (
              var n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                r = [],
                i = 0;
              i < e.length;
              i += 3
            ) {
              var o = e[i],
                s = i + 1 < e.length,
                a = s ? e[i + 1] : 0,
                u = i + 2 < e.length,
                l = u ? e[i + 2] : 0,
                h = ((15 & a) << 2) | (l >> 6),
                l = 63 & l;
              u || ((l = 64), s || (h = 64)),
                r.push(n[o >> 2], n[((3 & o) << 4) | (a >> 4)], n[h], n[l]);
            }
            return r.join("");
          },
          encodeString: function (e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? btoa(e)
              : this.encodeByteArray(o(e), t);
          },
          decodeString: function (e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? atob(e)
              : (function (e) {
                  for (var t = [], n = 0, r = 0; n < e.length; ) {
                    var i,
                      o,
                      s,
                      a = e[n++];
                    a < 128
                      ? (t[r++] = String.fromCharCode(a))
                      : 191 < a && a < 224
                      ? ((o = e[n++]),
                        (t[r++] = String.fromCharCode(
                          ((31 & a) << 6) | (63 & o)
                        )))
                      : 239 < a && a < 365
                      ? ((i =
                          (((7 & a) << 18) |
                            ((63 & (o = e[n++])) << 12) |
                            ((63 & (s = e[n++])) << 6) |
                            (63 & e[n++])) -
                          65536),
                        (t[r++] = String.fromCharCode(55296 + (i >> 10))),
                        (t[r++] = String.fromCharCode(56320 + (1023 & i))))
                      : ((o = e[n++]),
                        (s = e[n++]),
                        (t[r++] = String.fromCharCode(
                          ((15 & a) << 12) | ((63 & o) << 6) | (63 & s)
                        )));
                  }
                  return t.join("");
                })(this.decodeStringToByteArray(e, t));
          },
          decodeStringToByteArray: function (e, t) {
            this.init_();
            for (
              var n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                r = [],
                i = 0;
              i < e.length;

            ) {
              var o = n[e.charAt(i++)],
                s = i < e.length ? n[e.charAt(i)] : 0,
                a = ++i < e.length ? n[e.charAt(i)] : 64,
                u = ++i < e.length ? n[e.charAt(i)] : 64;
              if ((++i, null == o || null == s || null == a || null == u))
                throw Error();
              r.push((o << 2) | (s >> 4)),
                64 !== a &&
                  (r.push(((s << 4) & 240) | (a >> 2)),
                  64 !== u && r.push(((a << 6) & 192) | u));
            }
            return r;
          },
          init_: function () {
            if (!this.byteToCharMap_) {
              (this.byteToCharMap_ = {}),
                (this.charToByteMap_ = {}),
                (this.byteToCharMapWebSafe_ = {}),
                (this.charToByteMapWebSafe_ = {});
              for (var e = 0; e < this.ENCODED_VALS.length; e++)
                (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
                  (this.charToByteMap_[this.byteToCharMap_[e]] = e),
                  (this.byteToCharMapWebSafe_[e] =
                    this.ENCODED_VALS_WEBSAFE.charAt(e)),
                  (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] =
                    e) >= this.ENCODED_VALS_BASE.length &&
                    ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] =
                      e),
                    (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] =
                      e));
            }
          },
        },
        d = function (e) {
          return a(e).replace(/\./g, "");
        };
      function f(e) {
        return (function e(t, n) {
          if (!(n instanceof Object)) return n;
          switch (n.constructor) {
            case Date:
              return new Date(n.getTime());
            case Object:
              void 0 === t && (t = {});
              break;
            case Array:
              t = [];
              break;
            default:
              return n;
          }
          for (var r in n)
            n.hasOwnProperty(r) && v(r) && (t[r] = e(t[r], n[r]));
          return t;
        })(void 0, e);
      }
      function v(e) {
        return "__proto__" !== e;
      }
      var w =
        ((C.prototype.wrapCallback = function (n) {
          var r = this;
          return function (e, t) {
            e ? r.reject(e) : r.resolve(t),
              "function" == typeof n &&
                (r.promise.catch(function () {}),
                1 === n.length ? n(e) : n(e, t));
          };
        }),
        C);
      function C() {
        var n = this;
        (this.reject = function () {}),
          (this.resolve = function () {}),
          (this.promise = new Promise(function (e, t) {
            (n.resolve = e), (n.reject = t);
          }));
      }
      function b() {
        return (
          "undefined" != typeof window &&
          (window.cordova || window.phonegap || window.PhoneGap) &&
          /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(
            "undefined" != typeof navigator &&
              "string" == typeof navigator.userAgent
              ? navigator.userAgent
              : ""
          )
        );
      }
      function T() {
        return !0 === h.NODE_ADMIN;
      }
      var E,
        I = "FirebaseError",
        S = (n(k, (E = Error)), k);
      function k(e, t, n) {
        t = E.call(this, t) || this;
        return (
          (t.code = e),
          (t.customData = n),
          (t.name = I),
          Object.setPrototypeOf(t, k.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(t, P.prototype.create),
          t
        );
      }
      var P =
        ((N.prototype.create = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          var r,
            i = t[0] || {},
            o = this.service + "/" + e,
            e = this.errors[e],
            e = e
              ? ((r = i),
                e.replace(x, function (e, t) {
                  var n = r[t];
                  return null != n ? String(n) : "<" + t + "?>";
                }))
              : "Error",
            e = this.serviceName + ": " + e + " (" + o + ").";
          return new S(o, e, i);
        }),
        N);
      function N(e, t, n) {
        (this.service = e), (this.serviceName = t), (this.errors = n);
      }
      var x = /\{\$([^}]+)}/g;
      function R(e) {
        return JSON.parse(e);
      }
      function O(e) {
        return JSON.stringify(e);
      }
      function D(e) {
        var t = {},
          n = {},
          r = {},
          i = "";
        try {
          var o = e.split("."),
            t = R(u(o[0]) || ""),
            n = R(u(o[1]) || ""),
            i = o[2],
            r = n.d || {};
          delete n.d;
        } catch (e) {}
        return { header: t, claims: n, data: r, signature: i };
      }
      function A(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function L(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }
      function M(e) {
        for (var t in e)
          if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
        return !0;
      }
      function F(e, t, n) {
        var r,
          i = {};
        for (r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            (i[r] = t.call(n, e[r], r, e));
        return i;
      }
      function q(e) {
        for (var n = [], t = 0, r = Object.entries(e); t < r.length; t++) {
          var i = r[t];
          !(function (t, e) {
            Array.isArray(e)
              ? e.forEach(function (e) {
                  n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e));
                })
              : n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e));
          })(i[0], i[1]);
        }
        return n.length ? "&" + n.join("&") : "";
      }
      var W =
        ((j.prototype.reset = function () {
          (this.chain_[0] = 1732584193),
            (this.chain_[1] = 4023233417),
            (this.chain_[2] = 2562383102),
            (this.chain_[3] = 271733878),
            (this.chain_[4] = 3285377520),
            (this.inbuf_ = 0),
            (this.total_ = 0);
        }),
        (j.prototype.compress_ = function (e, t) {
          t = t || 0;
          var n = this.W_;
          if ("string" == typeof e)
            for (var r = 0; r < 16; r++)
              (n[r] =
                (e.charCodeAt(t) << 24) |
                (e.charCodeAt(t + 1) << 16) |
                (e.charCodeAt(t + 2) << 8) |
                e.charCodeAt(t + 3)),
                (t += 4);
          else
            for (r = 0; r < 16; r++)
              (n[r] =
                (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]),
                (t += 4);
          for (r = 16; r < 80; r++) {
            var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
            n[r] = 4294967295 & ((i << 1) | (i >>> 31));
          }
          for (
            var o,
              s = this.chain_[0],
              a = this.chain_[1],
              u = this.chain_[2],
              l = this.chain_[3],
              h = this.chain_[4],
              r = 0;
            r < 80;
            r++
          )
            var c =
                r < 40
                  ? r < 20
                    ? ((o = l ^ (a & (u ^ l))), 1518500249)
                    : ((o = a ^ u ^ l), 1859775393)
                  : r < 60
                  ? ((o = (a & u) | (l & (a | u))), 2400959708)
                  : ((o = a ^ u ^ l), 3395469782),
              i = (((s << 5) | (s >>> 27)) + o + h + c + n[r]) & 4294967295,
              h = l,
              l = u,
              u = 4294967295 & ((a << 30) | (a >>> 2)),
              a = s,
              s = i;
          (this.chain_[0] = (this.chain_[0] + s) & 4294967295),
            (this.chain_[1] = (this.chain_[1] + a) & 4294967295),
            (this.chain_[2] = (this.chain_[2] + u) & 4294967295),
            (this.chain_[3] = (this.chain_[3] + l) & 4294967295),
            (this.chain_[4] = (this.chain_[4] + h) & 4294967295);
        }),
        (j.prototype.update = function (e, t) {
          if (null != e) {
            for (
              var n = (t = void 0 === t ? e.length : t) - this.blockSize,
                r = 0,
                i = this.buf_,
                o = this.inbuf_;
              r < t;

            ) {
              if (0 === o)
                for (; r <= n; ) this.compress_(e, r), (r += this.blockSize);
              if ("string" == typeof e) {
                for (; r < t; )
                  if (((i[o] = e.charCodeAt(r)), ++r, ++o === this.blockSize)) {
                    this.compress_(i), (o = 0);
                    break;
                  }
              } else
                for (; r < t; )
                  if (((i[o] = e[r]), ++r, ++o === this.blockSize)) {
                    this.compress_(i), (o = 0);
                    break;
                  }
            }
            (this.inbuf_ = o), (this.total_ += t);
          }
        }),
        (j.prototype.digest = function () {
          var e = [],
            t = 8 * this.total_;
          this.inbuf_ < 56
            ? this.update(this.pad_, 56 - this.inbuf_)
            : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          for (var n = this.blockSize - 1; 56 <= n; n--)
            (this.buf_[n] = 255 & t), (t /= 256);
          this.compress_(this.buf_);
          for (var r = 0, n = 0; n < 5; n++)
            for (var i = 24; 0 <= i; i -= 8)
              (e[r] = (this.chain_[n] >> i) & 255), ++r;
          return e;
        }),
        j);
      function j() {
        (this.chain_ = []),
          (this.buf_ = []),
          (this.W_ = []),
          (this.pad_ = []),
          (this.inbuf_ = 0),
          (this.total_ = 0),
          (this.blockSize = 64),
          (this.pad_[0] = 128);
        for (var e = 1; e < this.blockSize; ++e) this.pad_[e] = 0;
        this.reset();
      }
      function U(e, t, n, r) {
        var i;
        if (
          (r < t
            ? (i = "at least " + t)
            : n < r && (i = 0 === n ? "none" : "no more than " + n),
          i)
        )
          throw new Error(
            e +
              " failed: Was called with " +
              r +
              (1 === r ? " argument." : " arguments.") +
              " Expects " +
              i +
              "."
          );
      }
      function B(e, t) {
        return e + " failed: " + t + " argument ";
      }
      function V(e, t, n, r) {
        if ((!r || n) && "function" != typeof n)
          throw new Error(B(e, t) + "must be a valid function.");
      }
      function z(e, t, n, r) {
        if ((!r || n) && ("object" != typeof n || null === n))
          throw new Error(B(e, t) + "must be a valid context object.");
      }
      function H(e) {
        for (var t = 0, n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          r < 128
            ? t++
            : r < 2048
            ? (t += 2)
            : 55296 <= r && r <= 56319
            ? ((t += 4), n++)
            : (t += 3);
        }
        return t;
      }
      function Q(e) {
        return e && e._delegate ? e._delegate : e;
      }
      var Y =
        ((K.prototype.setInstantiationMode = function (e) {
          return (this.instantiationMode = e), this;
        }),
        (K.prototype.setMultipleInstances = function (e) {
          return (this.multipleInstances = e), this;
        }),
        (K.prototype.setServiceProps = function (e) {
          return (this.serviceProps = e), this;
        }),
        (K.prototype.setInstanceCreatedCallback = function (e) {
          return (this.onInstanceCreated = e), this;
        }),
        K);
      function K(e, t, n) {
        (this.name = e),
          (this.instanceFactory = t),
          (this.type = n),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = "LAZY"),
          (this.onInstanceCreated = null);
      }
      var G = "[DEFAULT]",
        $ =
          ((J.prototype.get = function (e) {
            var t = this.normalizeInstanceIdentifier(e);
            if (!this.instancesDeferred.has(t)) {
              e = new w();
              if (
                (this.instancesDeferred.set(t, e),
                this.isInitialized(t) || this.shouldAutoInitialize())
              )
                try {
                  var n = this.getOrInitializeService({
                    instanceIdentifier: t,
                  });
                  n && e.resolve(n);
                } catch (e) {}
            }
            return this.instancesDeferred.get(t).promise;
          }),
          (J.prototype.getImmediate = function (t) {
            var e = this.normalizeInstanceIdentifier(
                null == t ? void 0 : t.identifier
              ),
              t =
                null !== (t = null == t ? void 0 : t.optional) &&
                void 0 !== t &&
                t;
            if (!this.isInitialized(e) && !this.shouldAutoInitialize()) {
              if (t) return null;
              throw Error("Service " + this.name + " is not available");
            }
            try {
              return this.getOrInitializeService({ instanceIdentifier: e });
            } catch (e) {
              if (t) return null;
              throw e;
            }
          }),
          (J.prototype.getComponent = function () {
            return this.component;
          }),
          (J.prototype.setComponent = function (e) {
            var t, n;
            if (e.name !== this.name)
              throw Error(
                "Mismatching Component " +
                  e.name +
                  " for Provider " +
                  this.name +
                  "."
              );
            if (this.component)
              throw Error(
                "Component for " + this.name + " has already been provided"
              );
            if (((this.component = e), this.shouldAutoInitialize())) {
              if ("EAGER" === e.instantiationMode)
                try {
                  this.getOrInitializeService({ instanceIdentifier: G });
                } catch (e) {}
              try {
                for (
                  var r = _(this.instancesDeferred.entries()), i = r.next();
                  !i.done;
                  i = r.next()
                ) {
                  var o = y(i.value, 2),
                    s = o[0],
                    a = o[1],
                    u = this.normalizeInstanceIdentifier(s);
                  try {
                    var l = this.getOrInitializeService({
                      instanceIdentifier: u,
                    });
                    a.resolve(l);
                  } catch (e) {}
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  i && !i.done && (n = r.return) && n.call(r);
                } finally {
                  if (t) throw t.error;
                }
              }
            }
          }),
          (J.prototype.clearInstance = function (e) {
            this.instancesDeferred.delete((e = void 0 === e ? G : e)),
              this.instancesOptions.delete(e),
              this.instances.delete(e);
          }),
          (J.prototype.delete = function () {
            return i(this, void 0, void 0, function () {
              var t;
              return p(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = Array.from(this.instances.values())),
                      [
                        4,
                        Promise.all(
                          s(
                            s(
                              [],
                              y(
                                t
                                  .filter(function (e) {
                                    return "INTERNAL" in e;
                                  })
                                  .map(function (e) {
                                    return e.INTERNAL.delete();
                                  })
                              )
                            ),
                            y(
                              t
                                .filter(function (e) {
                                  return "_delete" in e;
                                })
                                .map(function (e) {
                                  return e._delete();
                                })
                            )
                          )
                        ),
                      ]
                    );
                  case 1:
                    return e.sent(), [2];
                }
              });
            });
          }),
          (J.prototype.isComponentSet = function () {
            return null != this.component;
          }),
          (J.prototype.isInitialized = function (e) {
            return this.instances.has((e = void 0 === e ? G : e));
          }),
          (J.prototype.getOptions = function (e) {
            return this.instancesOptions.get((e = void 0 === e ? G : e)) || {};
          }),
          (J.prototype.initialize = function (e) {
            var t,
              n,
              r = (e = void 0 === e ? {} : e).options,
              r = void 0 === r ? {} : r,
              i = this.normalizeInstanceIdentifier(e.instanceIdentifier);
            if (this.isInitialized(i))
              throw Error(
                this.name + "(" + i + ") has already been initialized"
              );
            if (!this.isComponentSet())
              throw Error(
                "Component " + this.name + " has not been registered yet"
              );
            var o = this.getOrInitializeService({
              instanceIdentifier: i,
              options: r,
            });
            try {
              for (
                var s = _(this.instancesDeferred.entries()), a = s.next();
                !a.done;
                a = s.next()
              ) {
                var u = y(a.value, 2),
                  l = u[0],
                  h = u[1];
                i === this.normalizeInstanceIdentifier(l) && h.resolve(o);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                a && !a.done && (n = s.return) && n.call(s);
              } finally {
                if (t) throw t.error;
              }
            }
            return o;
          }),
          (J.prototype.onInit = function (e, t) {
            var n = this.normalizeInstanceIdentifier(t),
              r =
                null !== (t = this.onInitCallbacks.get(n)) && void 0 !== t
                  ? t
                  : new Set();
            r.add(e), this.onInitCallbacks.set(n, r);
            t = this.instances.get(n);
            return (
              t && e(t, n),
              function () {
                r.delete(e);
              }
            );
          }),
          (J.prototype.invokeOnInitCallbacks = function (e, t) {
            var n,
              r,
              i = this.onInitCallbacks.get(t);
            if (i)
              try {
                for (var o = _(i), s = o.next(); !s.done; s = o.next()) {
                  var a = s.value;
                  try {
                    a(e, t);
                  } catch (e) {}
                }
              } catch (e) {
                n = { error: e };
              } finally {
                try {
                  s && !s.done && (r = o.return) && r.call(o);
                } finally {
                  if (n) throw n.error;
                }
              }
          }),
          (J.prototype.getOrInitializeService = function (e) {
            var t = e.instanceIdentifier,
              n = e.options,
              r = void 0 === n ? {} : n,
              e = this.instances.get(t);
            if (
              !e &&
              this.component &&
              ((e = this.component.instanceFactory(this.container, {
                instanceIdentifier: (n = t) === G ? void 0 : n,
                options: r,
              })),
              this.instances.set(t, e),
              this.instancesOptions.set(t, r),
              this.invokeOnInitCallbacks(e, t),
              this.component.onInstanceCreated)
            )
              try {
                this.component.onInstanceCreated(this.container, t, e);
              } catch (e) {}
            return e || null;
          }),
          (J.prototype.normalizeInstanceIdentifier = function (e) {
            return (
              void 0 === e && (e = G),
              !this.component || this.component.multipleInstances ? e : G
            );
          }),
          (J.prototype.shouldAutoInitialize = function () {
            return (
              !!this.component &&
              "EXPLICIT" !== this.component.instantiationMode
            );
          }),
          J);
      function J(e, t) {
        (this.name = e),
          (this.container = t),
          (this.component = null),
          (this.instances = new Map()),
          (this.instancesDeferred = new Map()),
          (this.instancesOptions = new Map()),
          (this.onInitCallbacks = new Map());
      }
      var X,
        Z =
          ((ee.prototype.addComponent = function (e) {
            var t = this.getProvider(e.name);
            if (t.isComponentSet())
              throw new Error(
                "Component " +
                  e.name +
                  " has already been registered with " +
                  this.name
              );
            t.setComponent(e);
          }),
          (ee.prototype.addOrOverwriteComponent = function (e) {
            this.getProvider(e.name).isComponentSet() &&
              this.providers.delete(e.name),
              this.addComponent(e);
          }),
          (ee.prototype.getProvider = function (e) {
            if (this.providers.has(e)) return this.providers.get(e);
            var t = new $(e, this);
            return this.providers.set(e, t), t;
          }),
          (ee.prototype.getProviders = function () {
            return Array.from(this.providers.values());
          }),
          ee);
      function ee(e) {
        (this.name = e), (this.providers = new Map());
      }
      ((Tt = X = X || {})[(Tt.DEBUG = 0)] = "DEBUG"),
        (Tt[(Tt.VERBOSE = 1)] = "VERBOSE"),
        (Tt[(Tt.INFO = 2)] = "INFO"),
        (Tt[(Tt.WARN = 3)] = "WARN"),
        (Tt[(Tt.ERROR = 4)] = "ERROR"),
        (Tt[(Tt.SILENT = 5)] = "SILENT");
      function te(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        if (!(t < e.logLevel)) {
          var i = new Date().toISOString(),
            o = ie[t];
          if (!o)
            throw new Error(
              "Attempted to log a message with an invalid logType (value: " +
                t +
                ")"
            );
          console[o].apply(console, s(["[" + i + "]  " + e.name + ":"], n));
        }
      }
      var ne = {
          debug: X.DEBUG,
          verbose: X.VERBOSE,
          info: X.INFO,
          warn: X.WARN,
          error: X.ERROR,
          silent: X.SILENT,
        },
        re = X.INFO,
        ie =
          (((It = {})[X.DEBUG] = "log"),
          (It[X.VERBOSE] = "log"),
          (It[X.INFO] = "info"),
          (It[X.WARN] = "warn"),
          (It[X.ERROR] = "error"),
          It),
        oe =
          (Object.defineProperty(se.prototype, "logLevel", {
            get: function () {
              return this._logLevel;
            },
            set: function (e) {
              if (!(e in X))
                throw new TypeError(
                  'Invalid value "' + e + '" assigned to `logLevel`'
                );
              this._logLevel = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (se.prototype.setLogLevel = function (e) {
            this._logLevel = "string" == typeof e ? ne[e] : e;
          }),
          Object.defineProperty(se.prototype, "logHandler", {
            get: function () {
              return this._logHandler;
            },
            set: function (e) {
              if ("function" != typeof e)
                throw new TypeError(
                  "Value assigned to `logHandler` must be a function"
                );
              this._logHandler = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(se.prototype, "userLogHandler", {
            get: function () {
              return this._userLogHandler;
            },
            set: function (e) {
              this._userLogHandler = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (se.prototype.debug = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, X.DEBUG], e)),
              this._logHandler.apply(this, s([this, X.DEBUG], e));
          }),
          (se.prototype.log = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, X.VERBOSE], e)),
              this._logHandler.apply(this, s([this, X.VERBOSE], e));
          }),
          (se.prototype.info = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, X.INFO], e)),
              this._logHandler.apply(this, s([this, X.INFO], e));
          }),
          (se.prototype.warn = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, X.WARN], e)),
              this._logHandler.apply(this, s([this, X.WARN], e));
          }),
          (se.prototype.error = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, X.ERROR], e)),
              this._logHandler.apply(this, s([this, X.ERROR], e));
          }),
          se);
      function se(e) {
        (this.name = e),
          (this._logLevel = re),
          (this._logHandler = te),
          (this._userLogHandler = null);
      }
      var ae = "";
      function ue(e) {
        ae = e;
      }
      var le =
        ((he.prototype.set = function (e, t) {
          null == t
            ? this.domStorage_.removeItem(this.prefixedName_(e))
            : this.domStorage_.setItem(this.prefixedName_(e), O(t));
        }),
        (he.prototype.get = function (e) {
          e = this.domStorage_.getItem(this.prefixedName_(e));
          return null == e ? null : R(e);
        }),
        (he.prototype.remove = function (e) {
          this.domStorage_.removeItem(this.prefixedName_(e));
        }),
        (he.prototype.prefixedName_ = function (e) {
          return this.prefix_ + e;
        }),
        (he.prototype.toString = function () {
          return this.domStorage_.toString();
        }),
        he);
      function he(e) {
        (this.domStorage_ = e), (this.prefix_ = "firebase:");
      }
      var ce =
        ((pe.prototype.set = function (e, t) {
          null == t ? delete this.cache_[e] : (this.cache_[e] = t);
        }),
        (pe.prototype.get = function (e) {
          return A(this.cache_, e) ? this.cache_[e] : null;
        }),
        (pe.prototype.remove = function (e) {
          delete this.cache_[e];
        }),
        pe);
      function pe() {
        (this.cache_ = {}), (this.isInMemoryStorage = !0);
      }
      function de(e) {
        var t = (function (e) {
          for (var t = [], n = 0, r = 0; r < e.length; r++) {
            var i,
              o = e.charCodeAt(r);
            55296 <= o &&
              o <= 56319 &&
              ((i = o - 55296),
              g(++r < e.length, "Surrogate pair missing trail surrogate."),
              (o = 65536 + (i << 10) + (e.charCodeAt(r) - 56320))),
              o < 128
                ? (t[n++] = o)
                : (o < 2048
                    ? (t[n++] = (o >> 6) | 192)
                    : (o < 65536
                        ? (t[n++] = (o >> 12) | 224)
                        : ((t[n++] = (o >> 18) | 240),
                          (t[n++] = ((o >> 12) & 63) | 128)),
                      (t[n++] = ((o >> 6) & 63) | 128)),
                  (t[n++] = (63 & o) | 128));
          }
          return t;
        })(e);
        return (e = new W()).update(t), (e = e.digest()), c.encodeByteArray(e);
      }
      function fe(e, t) {
        g(
          !t || !0 === e || !1 === e,
          "Can't turn on custom loggers persistently."
        ),
          !0 === e
            ? ((Ee.logLevel = X.VERBOSE),
              (ke = Ee.log.bind(Ee)),
              t && Te.set("logging_enabled", !0))
            : "function" == typeof e
            ? (ke = e)
            : ((ke = null), Te.remove("logging_enabled"));
      }
      function _e() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = "FIREBASE INTERNAL ERROR: " + Se.apply(void 0, s([], y(e)));
        Ee.error(n);
      }
      function ye(e) {
        return (
          "number" == typeof e &&
          (e != e ||
            e === Number.POSITIVE_INFINITY ||
            e === Number.NEGATIVE_INFINITY)
        );
      }
      function ve(e, t) {
        return e === t ? 0 : e < t ? -1 : 1;
      }
      function ge(e, t) {
        if (t && e in t) return t[e];
        throw new Error("Missing required key (" + e + ") in object: " + O(t));
      }
      function me(e, t) {
        var n = e.length;
        if (n <= t) return [e];
        for (var r = [], i = 0; i < n; i += t)
          n < i + t ? r.push(e.substring(i, n)) : r.push(e.substring(i, i + t));
        return r;
      }
      var we,
        Ce = function (e) {
          try {
            if ("undefined" != typeof window && void 0 !== window[e]) {
              var t = window[e];
              return (
                t.setItem("firebase:sentinel", "cache"),
                t.removeItem("firebase:sentinel"),
                new le(t)
              );
            }
          } catch (e) {}
          return new ce();
        },
        be = Ce("localStorage"),
        Te = Ce("sessionStorage"),
        Ee = new oe("@firebase/database"),
        Ie =
          ((we = 1),
          function () {
            return we++;
          }),
        Se = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          for (var n = "", r = 0; r < e.length; r++) {
            var i = e[r];
            Array.isArray(i) ||
            (i && "object" == typeof i && "number" == typeof i.length)
              ? (n += Se.apply(null, i))
              : (n += "object" == typeof i ? O(i) : i),
              (n += " ");
          }
          return n;
        },
        ke = null,
        Pe = !0,
        Ne = function () {
          for (var e, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          !0 === Pe &&
            ((Pe = !1),
            null === ke && !0 === Te.get("logging_enabled") && fe(!0)),
            ke && ((e = Se.apply(null, t)), ke(e));
        },
        xe = function (n) {
          return function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            Ne.apply(void 0, s([n], y(e)));
          };
        },
        Re = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          var n = "FIREBASE FATAL ERROR: " + Se.apply(void 0, s([], y(e)));
          throw (Ee.error(n), new Error(n));
        },
        Oe = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          var n = "FIREBASE WARNING: " + Se.apply(void 0, s([], y(e)));
          Ee.warn(n);
        },
        De = "[MIN_NAME]",
        Ae = "[MAX_NAME]",
        Le = function (e, t) {
          if (e === t) return 0;
          if (e === De || t === Ae) return -1;
          if (t === De || e === Ae) return 1;
          var n = Ve(e),
            r = Ve(t);
          return null !== n
            ? null !== r
              ? n - r == 0
                ? e.length - t.length
                : n - r
              : -1
            : null === r && e < t
            ? -1
            : 1;
        },
        Me = function (e) {
          if ("object" != typeof e || null === e) return O(e);
          var t,
            n = [];
          for (t in e) n.push(t);
          n.sort();
          for (var r = "{", i = 0; i < n.length; i++)
            0 !== i && (r += ","),
              (r += O(n[i])),
              (r += ":"),
              (r += Me(e[n[i]]));
          return (r += "}");
        };
      function Fe(e, t) {
        for (var n in e) e.hasOwnProperty(n) && t(n, e[n]);
      }
      function qe(e) {
        var t, n, r, i;
        g(!ye(e), "Invalid JSON number"),
          0 === e
            ? (t = 1 / e == -1 / (r = n = 0) ? 1 : 0)
            : ((t = e < 0),
              (r =
                (e = Math.abs(e)) >= Math.pow(2, -1022)
                  ? ((n =
                      (i = Math.min(Math.floor(Math.log(e) / Math.LN2), 1023)) +
                      1023),
                    Math.round(e * Math.pow(2, 52 - i) - Math.pow(2, 52)))
                  : ((n = 0), Math.round(e / Math.pow(2, -1074)))));
        for (var o = [], s = 52; s; --s)
          o.push(r % 2 ? 1 : 0), (r = Math.floor(r / 2));
        for (s = 11; s; --s) o.push(n % 2 ? 1 : 0), (n = Math.floor(n / 2));
        o.push(t ? 1 : 0), o.reverse();
        var a = o.join(""),
          u = "";
        for (s = 0; s < 64; s += 8) {
          var l = parseInt(a.substr(s, 8), 2).toString(16);
          u += l = 1 === l.length ? "0" + l : l;
        }
        return u.toLowerCase();
      }
      function We(e, t) {
        return (
          "object" == typeof (t = setTimeout(e, t)) && t.unref && t.unref(), t
        );
      }
      var je = new RegExp("^-?(0*)\\d{1,10}$"),
        Ue = -2147483648,
        Be = 2147483647,
        Ve = function (e) {
          if (je.test(e)) {
            e = Number(e);
            if (Ue <= e && e <= Be) return e;
          }
          return null;
        },
        ze = function (e) {
          try {
            e();
          } catch (t) {
            setTimeout(function () {
              var e = t.stack || "";
              throw (Oe("Exception was thrown by user callback.", e), t);
            }, Math.floor(0));
          }
        },
        He =
          ((Qe.prototype.getToken = function (n) {
            var r = this;
            return this.appCheck
              ? this.appCheck.getToken(n)
              : new Promise(function (e, t) {
                  setTimeout(function () {
                    r.appCheck ? r.getToken(n).then(e, t) : e(null);
                  }, 0);
                });
          }),
          (Qe.prototype.addTokenChangeListener = function (t) {
            var e;
            null !== (e = this.appCheckProvider) &&
              void 0 !== e &&
              e.get().then(function (e) {
                return e.addTokenListener(t);
              });
          }),
          (Qe.prototype.notifyForInvalidToken = function () {
            Oe(
              'Provided AppCheck credentials for the app named "' +
                this.appName_ +
                '" are invalid. This usually indicates your app was not initialized correctly.'
            );
          }),
          Qe);
      function Qe(e, t) {
        var n = this;
        (this.appName_ = e),
          (this.appCheckProvider = t),
          (this.appCheck =
            null == t ? void 0 : t.getImmediate({ optional: !0 })),
          this.appCheck ||
            (null != t &&
              t.get().then(function (e) {
                return (n.appCheck = e);
              }));
      }
      var Ye =
        ((Ke.prototype.getToken = function (n) {
          var r = this;
          return this.auth_
            ? this.auth_.getToken(n).catch(function (e) {
                return e && "auth/token-not-initialized" === e.code
                  ? (Ne(
                      "Got auth/token-not-initialized error.  Treating as null token."
                    ),
                    null)
                  : Promise.reject(e);
              })
            : new Promise(function (e, t) {
                setTimeout(function () {
                  r.auth_ ? r.getToken(n).then(e, t) : e(null);
                }, 0);
              });
        }),
        (Ke.prototype.addTokenChangeListener = function (t) {
          this.auth_
            ? this.auth_.addAuthTokenListener(t)
            : this.authProvider_.get().then(function (e) {
                return e.addAuthTokenListener(t);
              });
        }),
        (Ke.prototype.removeTokenChangeListener = function (t) {
          this.authProvider_.get().then(function (e) {
            return e.removeAuthTokenListener(t);
          });
        }),
        (Ke.prototype.notifyForInvalidToken = function () {
          var e =
            'Provided authentication credentials for the app named "' +
            this.appName_ +
            '" are invalid. This usually indicates your app was not initialized correctly. ';
          "credential" in this.firebaseOptions_
            ? (e +=
                'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
            : "serviceAccount" in this.firebaseOptions_
            ? (e +=
                'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
            : (e +=
                'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
            Oe(e);
        }),
        Ke);
      function Ke(e, t, n) {
        var r = this;
        (this.appName_ = e),
          (this.firebaseOptions_ = t),
          (this.authProvider_ = n),
          (this.auth_ = null),
          (this.auth_ = n.getImmediate({ optional: !0 })),
          this.auth_ ||
            n.onInit(function (e) {
              return (r.auth_ = e);
            });
      }
      var Ge =
        (($e.prototype.getToken = function (e) {
          return Promise.resolve({ accessToken: this.accessToken });
        }),
        ($e.prototype.addTokenChangeListener = function (e) {
          e(this.accessToken);
        }),
        ($e.prototype.removeTokenChangeListener = function (e) {}),
        ($e.prototype.notifyForInvalidToken = function () {}),
        ($e.OWNER = "owner"),
        $e);
      function $e(e) {
        this.accessToken = e;
      }
      var Je =
          /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
        Xe = "websocket",
        Ze = "long_polling",
        et =
          ((tt.prototype.isCacheableHost = function () {
            return "s-" === this.internalHost.substr(0, 2);
          }),
          (tt.prototype.isCustomHost = function () {
            return (
              "firebaseio.com" !== this._domain &&
              "firebaseio-demo.com" !== this._domain
            );
          }),
          Object.defineProperty(tt.prototype, "host", {
            get: function () {
              return this._host;
            },
            set: function (e) {
              e !== this.internalHost &&
                ((this.internalHost = e),
                this.isCacheableHost() &&
                  be.set("host:" + this._host, this.internalHost));
            },
            enumerable: !1,
            configurable: !0,
          }),
          (tt.prototype.toString = function () {
            var e = this.toURLString();
            return (
              this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e
            );
          }),
          (tt.prototype.toURLString = function () {
            var e = this.secure ? "https://" : "http://",
              t = this.includeNamespaceInQueryParams
                ? "?ns=" + this.namespace
                : "";
            return e + this.host + "/" + t;
          }),
          tt);
      function tt(e, t, n, r, i, o, s) {
        void 0 === i && (i = !1),
          void 0 === o && (o = ""),
          void 0 === s && (s = !1),
          (this.secure = t),
          (this.namespace = n),
          (this.webSocketOnly = r),
          (this.nodeAdmin = i),
          (this.persistenceKey = o),
          (this.includeNamespaceInQueryParams = s),
          (this._host = e.toLowerCase()),
          (this._domain = this._host.substr(this._host.indexOf(".") + 1)),
          (this.internalHost = be.get("host:" + e) || this._host);
      }
      function nt(e, t, n) {
        var r;
        if (
          (g("string" == typeof t, "typeof type must == string"),
          g("object" == typeof n, "typeof params must == object"),
          t === Xe)
        )
          r = (e.secure ? "wss://" : "ws://") + e.internalHost + "/.ws?";
        else {
          if (t !== Ze) throw new Error("Unknown connection type: " + t);
          r = (e.secure ? "https://" : "http://") + e.internalHost + "/.lp?";
        }
        ((t = e).host !== t.internalHost ||
          t.isCustomHost() ||
          t.includeNamespaceInQueryParams) &&
          (n.ns = e.namespace);
        var i = [];
        return (
          Fe(n, function (e, t) {
            i.push(e + "=" + t);
          }),
          r + i.join("&")
        );
      }
      var rt =
        ((it.prototype.incrementCounter = function (e, t) {
          void 0 === t && (t = 1),
            A(this.counters_, e) || (this.counters_[e] = 0),
            (this.counters_[e] += t);
        }),
        (it.prototype.get = function () {
          return f(this.counters_);
        }),
        it);
      function it() {
        this.counters_ = {};
      }
      var ot = {},
        st = {};
      function at(e) {
        e = e.toString();
        return ot[e] || (ot[e] = new rt()), ot[e];
      }
      var ut =
        ((lt.prototype.closeAfter = function (e, t) {
          (this.closeAfterResponse = e),
            (this.onClose = t),
            this.closeAfterResponse < this.currentResponseNum &&
              (this.onClose(), (this.onClose = null));
        }),
        (lt.prototype.handleResponse = function (e, t) {
          var n = this;
          this.pendingResponses[e] = t;
          for (
            var r = function () {
                var t = i.pendingResponses[i.currentResponseNum];
                delete i.pendingResponses[i.currentResponseNum];
                for (var e = 0; e < t.length; ++e)
                  !(function (e) {
                    t[e] &&
                      ze(function () {
                        n.onMessage_(t[e]);
                      });
                  })(e);
                if (i.currentResponseNum === i.closeAfterResponse)
                  return (
                    i.onClose && (i.onClose(), (i.onClose = null)), "break"
                  );
                i.currentResponseNum++;
              },
              i = this;
            this.pendingResponses[this.currentResponseNum];

          )
            if ("break" === r()) break;
        }),
        lt);
      function lt(e) {
        (this.onMessage_ = e),
          (this.pendingResponses = []),
          (this.currentResponseNum = 0),
          (this.closeAfterResponse = -1),
          (this.onClose = null);
      }
      var ht = "pLPCommand",
        ct = "pRTLPCB",
        pt =
          ((dt.prototype.open = function (e, t) {
            var n,
              r,
              i,
              s = this;
            (this.curSegmentNum = 0),
              (this.onDisconnect_ = t),
              (this.myPacketOrderer = new ut(e)),
              (this.isClosed_ = !1),
              (this.connectTimeoutTimer_ = setTimeout(function () {
                s.log_("Timed out trying to connect."),
                  s.onClosed_(),
                  (s.connectTimeoutTimer_ = null);
              }, Math.floor(3e4))),
              (n = function () {
                var e;
                s.isClosed_ ||
                  ((s.scriptTagHolder = new ft(
                    function () {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      var n = y(e, 5),
                        r = n[0],
                        i = n[1],
                        o = n[2];
                      if (
                        (n[3],
                        n[4],
                        s.incrementIncomingBytes_(e),
                        s.scriptTagHolder)
                      )
                        if (
                          (s.connectTimeoutTimer_ &&
                            (clearTimeout(s.connectTimeoutTimer_),
                            (s.connectTimeoutTimer_ = null)),
                          (s.everConnected_ = !0),
                          "start" === r)
                        )
                          (s.id = i), (s.password = o);
                        else {
                          if ("close" !== r)
                            throw new Error(
                              "Unrecognized command received: " + r
                            );
                          i
                            ? ((s.scriptTagHolder.sendNewPolls = !1),
                              s.myPacketOrderer.closeAfter(i, function () {
                                s.onClosed_();
                              }))
                            : s.onClosed_();
                        }
                    },
                    function () {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      var n = y(e, 2),
                        r = n[0],
                        n = n[1];
                      s.incrementIncomingBytes_(e),
                        s.myPacketOrderer.handleResponse(r, n);
                    },
                    function () {
                      s.onClosed_();
                    },
                    s.urlFn
                  )),
                  ((e = { start: "t" }).ser = Math.floor(1e8 * Math.random())),
                  s.scriptTagHolder.uniqueCallbackIdentifier &&
                    (e.cb = s.scriptTagHolder.uniqueCallbackIdentifier),
                  (e.v = "5"),
                  s.transportSessionId && (e.s = s.transportSessionId),
                  s.lastSessionId && (e.ls = s.lastSessionId),
                  s.applicationId && (e.p = s.applicationId),
                  s.appCheckToken && (e.ac = s.appCheckToken),
                  "undefined" != typeof location &&
                    location.hostname &&
                    Je.test(location.hostname) &&
                    (e.r = "f"),
                  (e = s.urlFn(e)),
                  s.log_("Connecting via long-poll to " + e),
                  s.scriptTagHolder.addTag(e, function () {}));
              }),
              "complete" === document.readyState
                ? n()
                : ((r = !1),
                  (i = function () {
                    document.body
                      ? r || ((r = !0), n())
                      : setTimeout(i, Math.floor(10));
                  }),
                  document.addEventListener
                    ? (document.addEventListener("DOMContentLoaded", i, !1),
                      window.addEventListener("load", i, !1))
                    : document.attachEvent &&
                      (document.attachEvent("onreadystatechange", function () {
                        "complete" === document.readyState && i();
                      }),
                      window.attachEvent("onload", i)));
          }),
          (dt.prototype.start = function () {
            this.scriptTagHolder.startLongPoll(this.id, this.password),
              this.addDisconnectPingFrame(this.id, this.password);
          }),
          (dt.forceAllow = function () {
            dt.forceAllow_ = !0;
          }),
          (dt.forceDisallow = function () {
            dt.forceDisallow_ = !0;
          }),
          (dt.isAvailable = function () {
            return (
              !!dt.forceAllow_ ||
              !(
                dt.forceDisallow_ ||
                "undefined" == typeof document ||
                null == document.createElement ||
                ("object" == typeof window &&
                  window.chrome &&
                  window.chrome.extension &&
                  !/^chrome/.test(window.location.href)) ||
                ("object" == typeof Windows && "object" == typeof Windows.UI)
              )
            );
          }),
          (dt.prototype.markConnectionHealthy = function () {}),
          (dt.prototype.shutdown_ = function () {
            (this.isClosed_ = !0),
              this.scriptTagHolder &&
                (this.scriptTagHolder.close(), (this.scriptTagHolder = null)),
              this.myDisconnFrame &&
                (document.body.removeChild(this.myDisconnFrame),
                (this.myDisconnFrame = null)),
              this.connectTimeoutTimer_ &&
                (clearTimeout(this.connectTimeoutTimer_),
                (this.connectTimeoutTimer_ = null));
          }),
          (dt.prototype.onClosed_ = function () {
            this.isClosed_ ||
              (this.log_("Longpoll is closing itself"),
              this.shutdown_(),
              this.onDisconnect_ &&
                (this.onDisconnect_(this.everConnected_),
                (this.onDisconnect_ = null)));
          }),
          (dt.prototype.close = function () {
            this.isClosed_ ||
              (this.log_("Longpoll is being closed."), this.shutdown_());
          }),
          (dt.prototype.send = function (e) {
            e = O(e);
            (this.bytesSent += e.length),
              this.stats_.incrementCounter("bytes_sent", e.length);
            for (var e = a(e), t = me(e, 1840), n = 0; n < t.length; n++)
              this.scriptTagHolder.enqueueSegment(
                this.curSegmentNum,
                t.length,
                t[n]
              ),
                this.curSegmentNum++;
          }),
          (dt.prototype.addDisconnectPingFrame = function (e, t) {
            this.myDisconnFrame = document.createElement("iframe");
            var n = { dframe: "t" };
            (n.id = e),
              (n.pw = t),
              (this.myDisconnFrame.src = this.urlFn(n)),
              (this.myDisconnFrame.style.display = "none"),
              document.body.appendChild(this.myDisconnFrame);
          }),
          (dt.prototype.incrementIncomingBytes_ = function (e) {
            e = O(e).length;
            (this.bytesReceived += e),
              this.stats_.incrementCounter("bytes_received", e);
          }),
          dt);
      function dt(e, t, n, r, i, o, s) {
        var a = this;
        (this.connId = e),
          (this.repoInfo = t),
          (this.applicationId = n),
          (this.appCheckToken = r),
          (this.authToken = i),
          (this.transportSessionId = o),
          (this.lastSessionId = s),
          (this.bytesSent = 0),
          (this.bytesReceived = 0),
          (this.everConnected_ = !1),
          (this.log_ = xe(e)),
          (this.stats_ = at(t)),
          (this.urlFn = function (e) {
            return a.appCheckToken && (e.ac = a.appCheckToken), nt(t, Ze, e);
          });
      }
      var ft =
        ((_t.createIFrame_ = function () {
          var t = document.createElement("iframe");
          if (((t.style.display = "none"), !document.body))
            throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
          document.body.appendChild(t);
          try {
            t.contentWindow.document || Ne("No IE domain setting required");
          } catch (e) {
            var n = document.domain;
            t.src =
              "javascript:void((function(){document.open();document.domain='" +
              n +
              "';document.close();})())";
          }
          return (
            t.contentDocument
              ? (t.doc = t.contentDocument)
              : t.contentWindow
              ? (t.doc = t.contentWindow.document)
              : t.document && (t.doc = t.document),
            t
          );
        }),
        (_t.prototype.close = function () {
          var e = this;
          (this.alive = !1),
            this.myIFrame &&
              ((this.myIFrame.doc.body.innerHTML = ""),
              setTimeout(function () {
                null !== e.myIFrame &&
                  (document.body.removeChild(e.myIFrame), (e.myIFrame = null));
              }, Math.floor(0)));
          var t = this.onDisconnect;
          t && ((this.onDisconnect = null), t());
        }),
        (_t.prototype.startLongPoll = function (e, t) {
          for (
            this.myID = e, this.myPW = t, this.alive = !0;
            this.newRequest_();

          );
        }),
        (_t.prototype.newRequest_ = function () {
          if (
            this.alive &&
            this.sendNewPolls &&
            this.outstandingRequests.size <
              (0 < this.pendingSegs.length ? 2 : 1)
          ) {
            this.currentSerial++;
            var e = {};
            (e.id = this.myID),
              (e.pw = this.myPW),
              (e.ser = this.currentSerial);
            for (
              var e = this.urlFn(e), t = "", n = 0;
              0 < this.pendingSegs.length;

            ) {
              if (!(this.pendingSegs[0].d.length + 30 + t.length <= 1870))
                break;
              var r = this.pendingSegs.shift(),
                t =
                  t +
                  "&seg" +
                  n +
                  "=" +
                  r.seg +
                  "&ts" +
                  n +
                  "=" +
                  r.ts +
                  "&d" +
                  n +
                  "=" +
                  r.d;
              n++;
            }
            return this.addLongPollTag_((e += t), this.currentSerial), !0;
          }
          return !1;
        }),
        (_t.prototype.enqueueSegment = function (e, t, n) {
          this.pendingSegs.push({ seg: e, ts: t, d: n }),
            this.alive && this.newRequest_();
        }),
        (_t.prototype.addLongPollTag_ = function (e, t) {
          var n = this;
          this.outstandingRequests.add(t);
          function r() {
            n.outstandingRequests.delete(t), n.newRequest_();
          }
          var i = setTimeout(r, Math.floor(25e3));
          this.addTag(e, function () {
            clearTimeout(i), r();
          });
        }),
        (_t.prototype.addTag = function (e, n) {
          var r = this;
          setTimeout(function () {
            try {
              if (!r.sendNewPolls) return;
              var t = r.myIFrame.doc.createElement("script");
              (t.type = "text/javascript"),
                (t.async = !0),
                (t.src = e),
                (t.onload = t.onreadystatechange =
                  function () {
                    var e = t.readyState;
                    (e && "loaded" !== e && "complete" !== e) ||
                      ((t.onload = t.onreadystatechange = null),
                      t.parentNode && t.parentNode.removeChild(t),
                      n());
                  }),
                (t.onerror = function () {
                  Ne("Long-poll script failed to load: " + e),
                    (r.sendNewPolls = !1),
                    r.close();
                }),
                r.myIFrame.doc.body.appendChild(t);
            } catch (e) {}
          }, Math.floor(1));
        }),
        _t);
      function _t(e, t, n, r) {
        (this.onDisconnect = n),
          (this.urlFn = r),
          (this.outstandingRequests = new Set()),
          (this.pendingSegs = []),
          (this.currentSerial = Math.floor(1e8 * Math.random())),
          (this.sendNewPolls = !0),
          (this.uniqueCallbackIdentifier = Ie()),
          (window[ht + this.uniqueCallbackIdentifier] = e),
          (window[ct + this.uniqueCallbackIdentifier] = t),
          (this.myIFrame = _t.createIFrame_());
        (t = ""),
          (t =
            "<html><body>" +
            (t =
              this.myIFrame.src &&
              "javascript:" ===
                this.myIFrame.src.substr(0, "javascript:".length)
                ? '<script>document.domain="' + document.domain + '";</script>'
                : t) +
            "</body></html>");
        try {
          this.myIFrame.doc.open(),
            this.myIFrame.doc.write(t),
            this.myIFrame.doc.close();
        } catch (e) {
          Ne("frame writing exception"), e.stack && Ne(e.stack), Ne(e);
        }
      }
      var yt = null;
      "undefined" != typeof MozWebSocket
        ? (yt = MozWebSocket)
        : "undefined" != typeof WebSocket && (yt = WebSocket);
      var vt =
        ((gt.connectionURL_ = function (e, t, n, r) {
          var i = { v: "5" };
          return (
            "undefined" != typeof location &&
              location.hostname &&
              Je.test(location.hostname) &&
              (i.r = "f"),
            t && (i.s = t),
            n && (i.ls = n),
            r && (i.ac = r),
            nt(e, Xe, i)
          );
        }),
        (gt.prototype.open = function (e, t) {
          var n = this;
          (this.onDisconnect = t),
            (this.onMessage = e),
            this.log_("Websocket connecting to " + this.connURL),
            (this.everConnected_ = !1),
            be.set("previous_websocket_failure", !0);
          try {
            T() ||
              ((r = {
                headers: {
                  "X-Firebase-GMPID": this.applicationId || "",
                  "X-Firebase-AppCheck": this.appCheckToken || "",
                },
              }),
              (this.mySock = new yt(this.connURL, [], r)));
          } catch (e) {
            this.log_("Error instantiating WebSocket.");
            var r = e.message || e.data;
            return r && this.log_(r), void this.onClosed_();
          }
          (this.mySock.onopen = function () {
            n.log_("Websocket connected."), (n.everConnected_ = !0);
          }),
            (this.mySock.onclose = function () {
              n.log_("Websocket connection was disconnected."),
                (n.mySock = null),
                n.onClosed_();
            }),
            (this.mySock.onmessage = function (e) {
              n.handleIncomingFrame(e);
            }),
            (this.mySock.onerror = function (e) {
              n.log_("WebSocket error.  Closing connection.");
              e = e.message || e.data;
              e && n.log_(e), n.onClosed_();
            });
        }),
        (gt.prototype.start = function () {}),
        (gt.forceDisallow = function () {
          gt.forceDisallow_ = !0;
        }),
        (gt.isAvailable = function () {
          var e,
            t = !1;
          return (
            "undefined" != typeof navigator &&
              navigator.userAgent &&
              (e = navigator.userAgent.match(
                /Android ([0-9]{0,}\.[0-9]{0,})/
              )) &&
              1 < e.length &&
              parseFloat(e[1]) < 4.4 &&
              (t = !0),
            !t && null !== yt && !gt.forceDisallow_
          );
        }),
        (gt.previouslyFailed = function () {
          return (
            be.isInMemoryStorage || !0 === be.get("previous_websocket_failure")
          );
        }),
        (gt.prototype.markConnectionHealthy = function () {
          be.remove("previous_websocket_failure");
        }),
        (gt.prototype.appendFrame_ = function (e) {
          this.frames.push(e),
            this.frames.length === this.totalFrames &&
              ((e = this.frames.join("")),
              (this.frames = null),
              (e = R(e)),
              this.onMessage(e));
        }),
        (gt.prototype.handleNewFrameCount_ = function (e) {
          (this.totalFrames = e), (this.frames = []);
        }),
        (gt.prototype.extractFrameCount_ = function (e) {
          if (
            (g(null === this.frames, "We already have a frame buffer"),
            e.length <= 6)
          ) {
            var t = Number(e);
            if (!isNaN(t)) return this.handleNewFrameCount_(t), null;
          }
          return this.handleNewFrameCount_(1), e;
        }),
        (gt.prototype.handleIncomingFrame = function (e) {
          null !== this.mySock &&
            ((e = e.data),
            (this.bytesReceived += e.length),
            this.stats_.incrementCounter("bytes_received", e.length),
            this.resetKeepAlive(),
            null !== this.frames
              ? this.appendFrame_(e)
              : null !== (e = this.extractFrameCount_(e)) &&
                this.appendFrame_(e));
        }),
        (gt.prototype.send = function (e) {
          this.resetKeepAlive();
          e = O(e);
          (this.bytesSent += e.length),
            this.stats_.incrementCounter("bytes_sent", e.length);
          var t = me(e, 16384);
          1 < t.length && this.sendString_(String(t.length));
          for (var n = 0; n < t.length; n++) this.sendString_(t[n]);
        }),
        (gt.prototype.shutdown_ = function () {
          (this.isClosed_ = !0),
            this.keepaliveTimer &&
              (clearInterval(this.keepaliveTimer),
              (this.keepaliveTimer = null)),
            this.mySock && (this.mySock.close(), (this.mySock = null));
        }),
        (gt.prototype.onClosed_ = function () {
          this.isClosed_ ||
            (this.log_("WebSocket is closing itself"),
            this.shutdown_(),
            this.onDisconnect &&
              (this.onDisconnect(this.everConnected_),
              (this.onDisconnect = null)));
        }),
        (gt.prototype.close = function () {
          this.isClosed_ ||
            (this.log_("WebSocket is being closed"), this.shutdown_());
        }),
        (gt.prototype.resetKeepAlive = function () {
          var e = this;
          clearInterval(this.keepaliveTimer),
            (this.keepaliveTimer = setInterval(function () {
              e.mySock && e.sendString_("0"), e.resetKeepAlive();
            }, Math.floor(45e3)));
        }),
        (gt.prototype.sendString_ = function (e) {
          try {
            this.mySock.send(e);
          } catch (e) {
            this.log_(
              "Exception thrown from WebSocket.send():",
              e.message || e.data,
              "Closing connection."
            ),
              setTimeout(this.onClosed_.bind(this), 0);
          }
        }),
        (gt.responsesRequiredToBeHealthy = 2),
        (gt.healthyTimeout = 3e4),
        gt);
      function gt(e, t, n, r, i, o, s) {
        (this.connId = e),
          (this.applicationId = n),
          (this.appCheckToken = r),
          (this.authToken = i),
          (this.keepaliveTimer = null),
          (this.frames = null),
          (this.totalFrames = 0),
          (this.bytesSent = 0),
          (this.bytesReceived = 0),
          (this.log_ = xe(this.connId)),
          (this.stats_ = at(t)),
          (this.connURL = gt.connectionURL_(t, o, s, r)),
          (this.nodeAdmin = t.nodeAdmin);
      }
      var mt =
        (Object.defineProperty(wt, "ALL_TRANSPORTS", {
          get: function () {
            return [pt, vt];
          },
          enumerable: !1,
          configurable: !0,
        }),
        (wt.prototype.initTransports_ = function (e) {
          var t,
            n,
            r = vt && vt.isAvailable(),
            i = r && !vt.previouslyFailed();
          if (
            (e.webSocketOnly &&
              (r ||
                Oe(
                  "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
                ),
              (i = !0)),
            i)
          )
            this.transports_ = [vt];
          else {
            var o = (this.transports_ = []);
            try {
              for (
                var s = _(wt.ALL_TRANSPORTS), a = s.next();
                !a.done;
                a = s.next()
              ) {
                var u = a.value;
                u && u.isAvailable() && o.push(u);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                a && !a.done && (n = s.return) && n.call(s);
              } finally {
                if (t) throw t.error;
              }
            }
          }
        }),
        (wt.prototype.initialTransport = function () {
          if (0 < this.transports_.length) return this.transports_[0];
          throw new Error("No transports available");
        }),
        (wt.prototype.upgradeTransport = function () {
          return 1 < this.transports_.length ? this.transports_[1] : null;
        }),
        wt);
      function wt(e) {
        this.initTransports_(e);
      }
      var Ct =
        ((bt.prototype.start_ = function () {
          var e = this,
            t = this.transportManager_.initialTransport();
          (this.conn_ = new t(
            this.nextTransportId_(),
            this.repoInfo_,
            this.applicationId_,
            this.appCheckToken_,
            this.authToken_,
            null,
            this.lastSessionId
          )),
            (this.primaryResponsesRequired_ =
              t.responsesRequiredToBeHealthy || 0);
          var n = this.connReceiver_(this.conn_),
            r = this.disconnReceiver_(this.conn_);
          (this.tx_ = this.conn_),
            (this.rx_ = this.conn_),
            (this.secondaryConn_ = null),
            (this.isHealthy_ = !1),
            setTimeout(function () {
              e.conn_ && e.conn_.open(n, r);
            }, Math.floor(0));
          t = t.healthyTimeout || 0;
          0 < t &&
            (this.healthyTimeout_ = We(function () {
              (e.healthyTimeout_ = null),
                e.isHealthy_ ||
                  (e.conn_ && 102400 < e.conn_.bytesReceived
                    ? (e.log_(
                        "Connection exceeded healthy timeout but has received " +
                          e.conn_.bytesReceived +
                          " bytes.  Marking connection healthy."
                      ),
                      (e.isHealthy_ = !0),
                      e.conn_.markConnectionHealthy())
                    : e.conn_ && 10240 < e.conn_.bytesSent
                    ? e.log_(
                        "Connection exceeded healthy timeout but has sent " +
                          e.conn_.bytesSent +
                          " bytes.  Leaving connection alive."
                      )
                    : (e.log_("Closing unhealthy connection after timeout."),
                      e.close()));
            }, Math.floor(t)));
        }),
        (bt.prototype.nextTransportId_ = function () {
          return "c:" + this.id + ":" + this.connectionCount++;
        }),
        (bt.prototype.disconnReceiver_ = function (t) {
          var n = this;
          return function (e) {
            t === n.conn_
              ? n.onConnectionLost_(e)
              : t === n.secondaryConn_
              ? (n.log_("Secondary connection lost."),
                n.onSecondaryConnectionLost_())
              : n.log_("closing an old connection");
          };
        }),
        (bt.prototype.connReceiver_ = function (t) {
          var n = this;
          return function (e) {
            2 !== n.state_ &&
              (t === n.rx_
                ? n.onPrimaryMessageReceived_(e)
                : t === n.secondaryConn_
                ? n.onSecondaryMessageReceived_(e)
                : n.log_("message on old connection"));
          };
        }),
        (bt.prototype.sendRequest = function (e) {
          this.sendData_({ t: "d", d: e });
        }),
        (bt.prototype.tryCleanupConnection = function () {
          this.tx_ === this.secondaryConn_ &&
            this.rx_ === this.secondaryConn_ &&
            (this.log_(
              "cleaning up and promoting a connection: " +
                this.secondaryConn_.connId
            ),
            (this.conn_ = this.secondaryConn_),
            (this.secondaryConn_ = null));
        }),
        (bt.prototype.onSecondaryControl_ = function (e) {
          "t" in e &&
            ("a" === (e = e.t)
              ? this.upgradeIfSecondaryHealthy_()
              : "r" === e
              ? (this.log_("Got a reset on secondary, closing it"),
                this.secondaryConn_.close(),
                (this.tx_ !== this.secondaryConn_ &&
                  this.rx_ !== this.secondaryConn_) ||
                  this.close())
              : "o" === e &&
                (this.log_("got pong on secondary."),
                this.secondaryResponsesRequired_--,
                this.upgradeIfSecondaryHealthy_()));
        }),
        (bt.prototype.onSecondaryMessageReceived_ = function (e) {
          var t = ge("t", e),
            e = ge("d", e);
          if ("c" === t) this.onSecondaryControl_(e);
          else {
            if ("d" !== t) throw new Error("Unknown protocol layer: " + t);
            this.pendingDataMessages.push(e);
          }
        }),
        (bt.prototype.upgradeIfSecondaryHealthy_ = function () {
          this.secondaryResponsesRequired_ <= 0
            ? (this.log_("Secondary connection is healthy."),
              (this.isHealthy_ = !0),
              this.secondaryConn_.markConnectionHealthy(),
              this.proceedWithUpgrade_())
            : (this.log_("sending ping on secondary."),
              this.secondaryConn_.send({ t: "c", d: { t: "p", d: {} } }));
        }),
        (bt.prototype.proceedWithUpgrade_ = function () {
          this.secondaryConn_.start(),
            this.log_("sending client ack on secondary"),
            this.secondaryConn_.send({ t: "c", d: { t: "a", d: {} } }),
            this.log_("Ending transmission on primary"),
            this.conn_.send({ t: "c", d: { t: "n", d: {} } }),
            (this.tx_ = this.secondaryConn_),
            this.tryCleanupConnection();
        }),
        (bt.prototype.onPrimaryMessageReceived_ = function (e) {
          var t = ge("t", e),
            e = ge("d", e);
          "c" === t ? this.onControl_(e) : "d" === t && this.onDataMessage_(e);
        }),
        (bt.prototype.onDataMessage_ = function (e) {
          this.onPrimaryResponse_(), this.onMessage_(e);
        }),
        (bt.prototype.onPrimaryResponse_ = function () {
          this.isHealthy_ ||
            (this.primaryResponsesRequired_--,
            this.primaryResponsesRequired_ <= 0 &&
              (this.log_("Primary connection is healthy."),
              (this.isHealthy_ = !0),
              this.conn_.markConnectionHealthy()));
        }),
        (bt.prototype.onControl_ = function (e) {
          var t = ge("t", e);
          if ("d" in e) {
            e = e.d;
            if ("h" === t) this.onHandshake_(e);
            else if ("n" === t) {
              this.log_("recvd end transmission on primary"),
                (this.rx_ = this.secondaryConn_);
              for (var n = 0; n < this.pendingDataMessages.length; ++n)
                this.onDataMessage_(this.pendingDataMessages[n]);
              (this.pendingDataMessages = []), this.tryCleanupConnection();
            } else
              "s" === t
                ? this.onConnectionShutdown_(e)
                : "r" === t
                ? this.onReset_(e)
                : "e" === t
                ? _e("Server Error: " + e)
                : "o" === t
                ? (this.log_("got pong on primary."),
                  this.onPrimaryResponse_(),
                  this.sendPingOnPrimaryIfNecessary_())
                : _e("Unknown control packet command: " + t);
          }
        }),
        (bt.prototype.onHandshake_ = function (e) {
          var t = e.ts,
            n = e.v,
            r = e.h;
          (this.sessionId = e.s),
            (this.repoInfo_.host = r),
            0 === this.state_ &&
              (this.conn_.start(),
              this.onConnectionEstablished_(this.conn_, t),
              "5" !== n && Oe("Protocol version mismatch detected"),
              this.tryStartUpgrade_());
        }),
        (bt.prototype.tryStartUpgrade_ = function () {
          var e = this.transportManager_.upgradeTransport();
          e && this.startUpgrade_(e);
        }),
        (bt.prototype.startUpgrade_ = function (e) {
          var t = this;
          (this.secondaryConn_ = new e(
            this.nextTransportId_(),
            this.repoInfo_,
            this.applicationId_,
            this.appCheckToken_,
            this.authToken_,
            this.sessionId
          )),
            (this.secondaryResponsesRequired_ =
              e.responsesRequiredToBeHealthy || 0);
          var n = this.connReceiver_(this.secondaryConn_),
            e = this.disconnReceiver_(this.secondaryConn_);
          this.secondaryConn_.open(n, e),
            We(function () {
              t.secondaryConn_ &&
                (t.log_("Timed out trying to upgrade."),
                t.secondaryConn_.close());
            }, Math.floor(6e4));
        }),
        (bt.prototype.onReset_ = function (e) {
          this.log_("Reset packet received.  New host: " + e),
            (this.repoInfo_.host = e),
            1 === this.state_
              ? this.close()
              : (this.closeConnections_(), this.start_());
        }),
        (bt.prototype.onConnectionEstablished_ = function (e, t) {
          var n = this;
          this.log_("Realtime connection established."),
            (this.conn_ = e),
            (this.state_ = 1),
            this.onReady_ &&
              (this.onReady_(t, this.sessionId), (this.onReady_ = null)),
            0 === this.primaryResponsesRequired_
              ? (this.log_("Primary connection is healthy."),
                (this.isHealthy_ = !0))
              : We(function () {
                  n.sendPingOnPrimaryIfNecessary_();
                }, Math.floor(5e3));
        }),
        (bt.prototype.sendPingOnPrimaryIfNecessary_ = function () {
          this.isHealthy_ ||
            1 !== this.state_ ||
            (this.log_("sending ping on primary."),
            this.sendData_({ t: "c", d: { t: "p", d: {} } }));
        }),
        (bt.prototype.onSecondaryConnectionLost_ = function () {
          var e = this.secondaryConn_;
          (this.secondaryConn_ = null),
            (this.tx_ !== e && this.rx_ !== e) || this.close();
        }),
        (bt.prototype.onConnectionLost_ = function (e) {
          (this.conn_ = null),
            e || 0 !== this.state_
              ? 1 === this.state_ && this.log_("Realtime connection lost.")
              : (this.log_("Realtime connection failed."),
                this.repoInfo_.isCacheableHost() &&
                  (be.remove("host:" + this.repoInfo_.host),
                  (this.repoInfo_.internalHost = this.repoInfo_.host))),
            this.close();
        }),
        (bt.prototype.onConnectionShutdown_ = function (e) {
          this.log_("Connection shutdown command received. Shutting down..."),
            this.onKill_ && (this.onKill_(e), (this.onKill_ = null)),
            (this.onDisconnect_ = null),
            this.close();
        }),
        (bt.prototype.sendData_ = function (e) {
          if (1 !== this.state_) throw "Connection is not connected";
          this.tx_.send(e);
        }),
        (bt.prototype.close = function () {
          2 !== this.state_ &&
            (this.log_("Closing realtime connection."),
            (this.state_ = 2),
            this.closeConnections_(),
            this.onDisconnect_ &&
              (this.onDisconnect_(), (this.onDisconnect_ = null)));
        }),
        (bt.prototype.closeConnections_ = function () {
          this.log_("Shutting down all connections"),
            this.conn_ && (this.conn_.close(), (this.conn_ = null)),
            this.secondaryConn_ &&
              (this.secondaryConn_.close(), (this.secondaryConn_ = null)),
            this.healthyTimeout_ &&
              (clearTimeout(this.healthyTimeout_),
              (this.healthyTimeout_ = null));
        }),
        bt);
      function bt(e, t, n, r, i, o, s, a, u, l) {
        (this.id = e),
          (this.repoInfo_ = t),
          (this.applicationId_ = n),
          (this.appCheckToken_ = r),
          (this.authToken_ = i),
          (this.onMessage_ = o),
          (this.onReady_ = s),
          (this.onDisconnect_ = a),
          (this.onKill_ = u),
          (this.lastSessionId = l),
          (this.connectionCount = 0),
          (this.pendingDataMessages = []),
          (this.state_ = 0),
          (this.log_ = xe("c:" + this.id + ":")),
          (this.transportManager_ = new mt(t)),
          this.log_("Connection created"),
          this.start_();
      }
      var Tt =
        ((Et.prototype.put = function (e, t, n, r) {}),
        (Et.prototype.merge = function (e, t, n, r) {}),
        (Et.prototype.refreshAuthToken = function (e) {}),
        (Et.prototype.refreshAppCheckToken = function (e) {}),
        (Et.prototype.onDisconnectPut = function (e, t, n) {}),
        (Et.prototype.onDisconnectMerge = function (e, t, n) {}),
        (Et.prototype.onDisconnectCancel = function (e, t) {}),
        (Et.prototype.reportStats = function (e) {}),
        Et);
      function Et() {}
      var It =
        ((St.prototype.trigger = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          if (Array.isArray(this.listeners_[e]))
            for (var r = s([], y(this.listeners_[e])), i = 0; i < r.length; i++)
              r[i].callback.apply(r[i].context, t);
        }),
        (St.prototype.on = function (e, t, n) {
          this.validateEventType_(e),
            (this.listeners_[e] = this.listeners_[e] || []),
            this.listeners_[e].push({ callback: t, context: n });
          e = this.getInitialEvent(e);
          e && t.apply(n, e);
        }),
        (St.prototype.off = function (e, t, n) {
          this.validateEventType_(e);
          for (var r = this.listeners_[e] || [], i = 0; i < r.length; i++)
            if (r[i].callback === t && (!n || n === r[i].context))
              return void r.splice(i, 1);
        }),
        (St.prototype.validateEventType_ = function (t) {
          g(
            this.allowedEvents_.find(function (e) {
              return e === t;
            }),
            "Unknown event: " + t
          );
        }),
        St);
      function St(e) {
        (this.allowedEvents_ = e),
          (this.listeners_ = {}),
          g(Array.isArray(e) && 0 < e.length, "Requires a non-empty array");
      }
      var kt,
        Pt =
          (n(Nt, (kt = It)),
          (Nt.getInstance = function () {
            return new Nt();
          }),
          (Nt.prototype.getInitialEvent = function (e) {
            return (
              g("online" === e, "Unknown event type: " + e), [this.online_]
            );
          }),
          (Nt.prototype.currentlyOnline = function () {
            return this.online_;
          }),
          Nt);
      function Nt() {
        var e = kt.call(this, ["online"]) || this;
        return (
          (e.online_ = !0),
          "undefined" == typeof window ||
            void 0 === window.addEventListener ||
            b() ||
            (window.addEventListener(
              "online",
              function () {
                e.online_ || ((e.online_ = !0), e.trigger("online", !0));
              },
              !1
            ),
            window.addEventListener(
              "offline",
              function () {
                e.online_ && ((e.online_ = !1), e.trigger("online", !1));
              },
              !1
            )),
          e
        );
      }
      var xt = 32,
        Rt = 768,
        Ot =
          ((Dt.prototype.toString = function () {
            for (var e = "", t = this.pieceNum_; t < this.pieces_.length; t++)
              "" !== this.pieces_[t] && (e += "/" + this.pieces_[t]);
            return e || "/";
          }),
          Dt);
      function Dt(e, t) {
        if (void 0 === t) {
          this.pieces_ = e.split("/");
          for (var n = 0, r = 0; r < this.pieces_.length; r++)
            0 < this.pieces_[r].length &&
              ((this.pieces_[n] = this.pieces_[r]), n++);
          (this.pieces_.length = n), (this.pieceNum_ = 0);
        } else (this.pieces_ = e), (this.pieceNum_ = t);
      }
      function At() {
        return new Ot("");
      }
      function Lt(e) {
        return e.pieceNum_ >= e.pieces_.length ? null : e.pieces_[e.pieceNum_];
      }
      function Mt(e) {
        return e.pieces_.length - e.pieceNum_;
      }
      function Ft(e) {
        var t = e.pieceNum_;
        return t < e.pieces_.length && t++, new Ot(e.pieces_, t);
      }
      function qt(e) {
        return e.pieceNum_ < e.pieces_.length
          ? e.pieces_[e.pieces_.length - 1]
          : null;
      }
      function Wt(e, t) {
        return e.pieces_.slice(e.pieceNum_ + (t = void 0 === t ? 0 : t));
      }
      function jt(e) {
        if (e.pieceNum_ >= e.pieces_.length) return null;
        for (var t = [], n = e.pieceNum_; n < e.pieces_.length - 1; n++)
          t.push(e.pieces_[n]);
        return new Ot(t, 0);
      }
      function Ut(e, t) {
        for (var n = [], r = e.pieceNum_; r < e.pieces_.length; r++)
          n.push(e.pieces_[r]);
        if (t instanceof Ot)
          for (r = t.pieceNum_; r < t.pieces_.length; r++) n.push(t.pieces_[r]);
        else
          for (var i = t.split("/"), r = 0; r < i.length; r++)
            0 < i[r].length && n.push(i[r]);
        return new Ot(n, 0);
      }
      function Bt(e) {
        return e.pieceNum_ >= e.pieces_.length;
      }
      function Vt(e, t) {
        var n = Lt(e),
          r = Lt(t);
        if (null === n) return t;
        if (n === r) return Vt(Ft(e), Ft(t));
        throw new Error(
          "INTERNAL ERROR: innerPath (" +
            t +
            ") is not within outerPath (" +
            e +
            ")"
        );
      }
      function zt(e, t) {
        for (
          var n = Wt(e, 0), r = Wt(t, 0), i = 0;
          i < n.length && i < r.length;
          i++
        ) {
          var o = Le(n[i], r[i]);
          if (0 !== o) return o;
        }
        return n.length === r.length ? 0 : n.length < r.length ? -1 : 1;
      }
      function Ht(e, t) {
        if (Mt(e) !== Mt(t)) return !1;
        for (
          var n = e.pieceNum_, r = t.pieceNum_;
          n <= e.pieces_.length;
          n++, r++
        )
          if (e.pieces_[n] !== t.pieces_[r]) return !1;
        return !0;
      }
      function Qt(e, t) {
        var n = e.pieceNum_,
          r = t.pieceNum_;
        if (Mt(e) > Mt(t)) return !1;
        for (; n < e.pieces_.length; ) {
          if (e.pieces_[n] !== t.pieces_[r]) return !1;
          ++n, ++r;
        }
        return !0;
      }
      var Yt = function (e, t) {
        (this.errorPrefix_ = t),
          (this.parts_ = Wt(e, 0)),
          (this.byteLength_ = Math.max(1, this.parts_.length));
        for (var n = 0; n < this.parts_.length; n++)
          this.byteLength_ += H(this.parts_[n]);
        Kt(this);
      };
      function Kt(e) {
        if (e.byteLength_ > Rt)
          throw new Error(
            e.errorPrefix_ +
              "has a key path longer than " +
              Rt +
              " bytes (" +
              e.byteLength_ +
              ")."
          );
        if (e.parts_.length > xt)
          throw new Error(
            e.errorPrefix_ +
              "path specified exceeds the maximum depth that can be written (" +
              xt +
              ") or object contains a cycle " +
              Gt(e)
          );
      }
      function Gt(e) {
        return 0 === e.parts_.length
          ? ""
          : "in property '" + e.parts_.join(".") + "'";
      }
      var $t,
        Jt =
          (n(Xt, ($t = It)),
          (Xt.getInstance = function () {
            return new Xt();
          }),
          (Xt.prototype.getInitialEvent = function (e) {
            return (
              g("visible" === e, "Unknown event type: " + e), [this.visible_]
            );
          }),
          Xt);
      function Xt() {
        var t,
          e,
          n = $t.call(this, ["visible"]) || this;
        return (
          "undefined" != typeof document &&
            void 0 !== document.addEventListener &&
            (void 0 !== document.hidden
              ? ((e = "visibilitychange"), (t = "hidden"))
              : void 0 !== document.mozHidden
              ? ((e = "mozvisibilitychange"), (t = "mozHidden"))
              : void 0 !== document.msHidden
              ? ((e = "msvisibilitychange"), (t = "msHidden"))
              : void 0 !== document.webkitHidden &&
                ((e = "webkitvisibilitychange"), (t = "webkitHidden"))),
          (n.visible_ = !0),
          e &&
            document.addEventListener(
              e,
              function () {
                var e = !document[t];
                e !== n.visible_ && ((n.visible_ = e), n.trigger("visible", e));
              },
              !1
            ),
          n
        );
      }
      var Zt,
        en = 1e3,
        tn = 3e5,
        nn =
          (n(rn, (Zt = Tt)),
          (rn.prototype.sendRequest = function (e, t, n) {
            var r = ++this.requestNumber_,
              t = { r: r, a: e, b: t };
            this.log_(O(t)),
              g(
                this.connected_,
                "sendRequest call when we're not connected not allowed."
              ),
              this.realtime_.sendRequest(t),
              n && (this.requestCBHash_[r] = n);
          }),
          (rn.prototype.get = function (e) {
            var n = this;
            this.initConnection_();
            var r = new w(),
              i = { p: e._path.toString(), q: e._queryObject },
              t = {
                action: "g",
                request: i,
                onComplete: function (e) {
                  var t = e.d;
                  "ok" === e.s
                    ? (n.onDataUpdate_(i.p, t, !1, null), r.resolve(t))
                    : r.reject(t);
                },
              };
            this.outstandingGets_.push(t), this.outstandingGetCount_++;
            var o = this.outstandingGets_.length - 1;
            return (
              this.connected_ ||
                setTimeout(function () {
                  var e = n.outstandingGets_[o];
                  void 0 !== e &&
                    t === e &&
                    (delete n.outstandingGets_[o],
                    n.outstandingGetCount_--,
                    0 === n.outstandingGetCount_ && (n.outstandingGets_ = []),
                    n.log_("get " + o + " timed out on connection"),
                    r.reject(new Error("Client is offline.")));
                }, 3e3),
              this.connected_ && this.sendGet_(o),
              r.promise
            );
          }),
          (rn.prototype.listen = function (e, t, n, r) {
            this.initConnection_();
            var i = e._queryIdentifier,
              o = e._path.toString();
            this.log_("Listen called for " + o + " " + i),
              this.listens.has(o) || this.listens.set(o, new Map()),
              g(
                e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
                "listen() called for non-default but complete query"
              ),
              g(
                !this.listens.get(o).has(i),
                "listen() called twice for same path/queryId."
              );
            n = { onComplete: r, hashFn: t, query: e, tag: n };
            this.listens.get(o).set(i, n),
              this.connected_ && this.sendListen_(n);
          }),
          (rn.prototype.sendGet_ = function (t) {
            var n = this,
              r = this.outstandingGets_[t];
            this.sendRequest("g", r.request, function (e) {
              delete n.outstandingGets_[t],
                n.outstandingGetCount_--,
                0 === n.outstandingGetCount_ && (n.outstandingGets_ = []),
                r.onComplete && r.onComplete(e);
            });
          }),
          (rn.prototype.sendListen_ = function (r) {
            var i = this,
              o = r.query,
              s = o._path.toString(),
              a = o._queryIdentifier;
            this.log_("Listen on " + s + " for " + a);
            var e = { p: s };
            r.tag && ((e.q = o._queryObject), (e.t = r.tag)),
              (e.h = r.hashFn()),
              this.sendRequest("q", e, function (e) {
                var t = e.d,
                  n = e.s;
                rn.warnOnListenWarnings_(t, o),
                  (i.listens.get(s) && i.listens.get(s).get(a)) === r &&
                    (i.log_("listen response", e),
                    "ok" !== n && i.removeListen_(s, a),
                    r.onComplete && r.onComplete(n, t));
              });
          }),
          (rn.warnOnListenWarnings_ = function (e, t) {
            e &&
              "object" == typeof e &&
              A(e, "w") &&
              ((e = L(e, "w")),
              Array.isArray(e) &&
                ~e.indexOf("no_index") &&
                ((e =
                  '".indexOn": "' + t._queryParams.getIndex().toString() + '"'),
                (t = t._path.toString()),
                Oe(
                  "Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " +
                    e +
                    " at " +
                    t +
                    " to your security rules for better performance."
                )));
          }),
          (rn.prototype.refreshAuthToken = function (e) {
            (this.authToken_ = e),
              this.log_("Auth token refreshed"),
              this.authToken_
                ? this.tryAuth()
                : this.connected_ &&
                  this.sendRequest("unauth", {}, function () {}),
              this.reduceReconnectDelayIfAdminCredential_(e);
          }),
          (rn.prototype.reduceReconnectDelayIfAdminCredential_ = function (e) {
            ((e && 40 === e.length) ||
              (function (e) {
                e = D(e).claims;
                return "object" == typeof e && !0 === e.admin;
              })(e)) &&
              (this.log_(
                "Admin auth credential detected.  Reducing max reconnect time."
              ),
              (this.maxReconnectDelay_ = 3e4));
          }),
          (rn.prototype.refreshAppCheckToken = function (e) {
            (this.appCheckToken_ = e),
              this.log_("App check token refreshed"),
              this.appCheckToken_
                ? this.tryAppCheck()
                : this.connected_ &&
                  this.sendRequest("unappeck", {}, function () {});
          }),
          (rn.prototype.tryAuth = function () {
            var n,
              e,
              t,
              r = this;
            this.connected_ &&
              this.authToken_ &&
              ((e = (function (e) {
                e = D(e).claims;
                return !!e && "object" == typeof e && e.hasOwnProperty("iat");
              })((n = this.authToken_))
                ? "auth"
                : "gauth"),
              (t = { cred: n }),
              null === this.authOverride_
                ? (t.noauth = !0)
                : "object" == typeof this.authOverride_ &&
                  (t.authvar = this.authOverride_),
              this.sendRequest(e, t, function (e) {
                var t = e.s,
                  e = e.d || "error";
                r.authToken_ === n &&
                  ("ok" === t
                    ? (r.invalidAuthTokenCount_ = 0)
                    : r.onAuthRevoked_(t, e));
              }));
          }),
          (rn.prototype.tryAppCheck = function () {
            var n = this;
            this.connected_ &&
              this.appCheckToken_ &&
              this.sendRequest(
                "appcheck",
                { token: this.appCheckToken_ },
                function (e) {
                  var t = e.s,
                    e = e.d || "error";
                  "ok" === t
                    ? (n.invalidAppCheckTokenCount_ = 0)
                    : n.onAppCheckRevoked_(t, e);
                }
              );
          }),
          (rn.prototype.unlisten = function (e, t) {
            var n = e._path.toString(),
              r = e._queryIdentifier;
            this.log_("Unlisten called for " + n + " " + r),
              g(
                e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
                "unlisten() called for non-default but complete query"
              ),
              this.removeListen_(n, r) &&
                this.connected_ &&
                this.sendUnlisten_(n, r, e._queryObject, t);
          }),
          (rn.prototype.sendUnlisten_ = function (e, t, n, r) {
            this.log_("Unlisten on " + e + " for " + t);
            e = { p: e };
            r && ((e.q = n), (e.t = r)), this.sendRequest("n", e);
          }),
          (rn.prototype.onDisconnectPut = function (e, t, n) {
            this.initConnection_(),
              this.connected_
                ? this.sendOnDisconnect_("o", e, t, n)
                : this.onDisconnectRequestQueue_.push({
                    pathString: e,
                    action: "o",
                    data: t,
                    onComplete: n,
                  });
          }),
          (rn.prototype.onDisconnectMerge = function (e, t, n) {
            this.initConnection_(),
              this.connected_
                ? this.sendOnDisconnect_("om", e, t, n)
                : this.onDisconnectRequestQueue_.push({
                    pathString: e,
                    action: "om",
                    data: t,
                    onComplete: n,
                  });
          }),
          (rn.prototype.onDisconnectCancel = function (e, t) {
            this.initConnection_(),
              this.connected_
                ? this.sendOnDisconnect_("oc", e, null, t)
                : this.onDisconnectRequestQueue_.push({
                    pathString: e,
                    action: "oc",
                    data: null,
                    onComplete: t,
                  });
          }),
          (rn.prototype.sendOnDisconnect_ = function (e, t, n, r) {
            n = { p: t, d: n };
            this.log_("onDisconnect " + e, n),
              this.sendRequest(e, n, function (e) {
                r &&
                  setTimeout(function () {
                    r(e.s, e.d);
                  }, Math.floor(0));
              });
          }),
          (rn.prototype.put = function (e, t, n, r) {
            this.putInternal("p", e, t, n, r);
          }),
          (rn.prototype.merge = function (e, t, n, r) {
            this.putInternal("m", e, t, n, r);
          }),
          (rn.prototype.putInternal = function (e, t, n, r, i) {
            this.initConnection_();
            n = { p: t, d: n };
            void 0 !== i && (n.h = i),
              this.outstandingPuts_.push({
                action: e,
                request: n,
                onComplete: r,
              }),
              this.outstandingPutCount_++;
            r = this.outstandingPuts_.length - 1;
            this.connected_
              ? this.sendPut_(r)
              : this.log_("Buffering put: " + t);
          }),
          (rn.prototype.sendPut_ = function (t) {
            var n = this,
              r = this.outstandingPuts_[t].action,
              e = this.outstandingPuts_[t].request,
              i = this.outstandingPuts_[t].onComplete;
            (this.outstandingPuts_[t].queued = this.connected_),
              this.sendRequest(r, e, function (e) {
                n.log_(r + " response", e),
                  delete n.outstandingPuts_[t],
                  n.outstandingPutCount_--,
                  0 === n.outstandingPutCount_ && (n.outstandingPuts_ = []),
                  i && i(e.s, e.d);
              });
          }),
          (rn.prototype.reportStats = function (e) {
            var t = this;
            this.connected_ &&
              (this.log_("reportStats", (e = { c: e })),
              this.sendRequest("s", e, function (e) {
                "ok" !== e.s &&
                  ((e = e.d),
                  t.log_("reportStats", "Error sending stats: " + e));
              }));
          }),
          (rn.prototype.onDataMessage_ = function (e) {
            if ("r" in e) {
              this.log_("from server: " + O(e));
              var t = e.r,
                n = this.requestCBHash_[t];
              n && (delete this.requestCBHash_[t], n(e.b));
            } else {
              if ("error" in e)
                throw "A server-side error has occurred: " + e.error;
              "a" in e && this.onDataPush_(e.a, e.b);
            }
          }),
          (rn.prototype.onDataPush_ = function (e, t) {
            this.log_("handleServerMessage", e, t),
              "d" === e
                ? this.onDataUpdate_(t.p, t.d, !1, t.t)
                : "m" === e
                ? this.onDataUpdate_(t.p, t.d, !0, t.t)
                : "c" === e
                ? this.onListenRevoked_(t.p, t.q)
                : "ac" === e
                ? this.onAuthRevoked_(t.s, t.d)
                : "apc" === e
                ? this.onAppCheckRevoked_(t.s, t.d)
                : "sd" === e
                ? this.onSecurityDebugPacket_(t)
                : _e(
                    "Unrecognized action received from server: " +
                      O(e) +
                      "\nAre you using the latest client?"
                  );
          }),
          (rn.prototype.onReady_ = function (e, t) {
            this.log_("connection ready"),
              (this.connected_ = !0),
              (this.lastConnectionEstablishedTime_ = new Date().getTime()),
              this.handleTimestamp_(e),
              (this.lastSessionId = t),
              this.firstConnection_ && this.sendConnectStats_(),
              this.restoreState_(),
              (this.firstConnection_ = !1),
              this.onConnectStatus_(!0);
          }),
          (rn.prototype.scheduleConnect_ = function (e) {
            var t = this;
            g(
              !this.realtime_,
              "Scheduling a connect when we're already connected/ing?"
            ),
              this.establishConnectionTimer_ &&
                clearTimeout(this.establishConnectionTimer_),
              (this.establishConnectionTimer_ = setTimeout(function () {
                (t.establishConnectionTimer_ = null), t.establishConnection_();
              }, Math.floor(e)));
          }),
          (rn.prototype.initConnection_ = function () {
            !this.realtime_ &&
              this.firstConnection_ &&
              this.scheduleConnect_(0);
          }),
          (rn.prototype.onVisible_ = function (e) {
            e &&
              !this.visible_ &&
              this.reconnectDelay_ === this.maxReconnectDelay_ &&
              (this.log_("Window became visible.  Reducing delay."),
              (this.reconnectDelay_ = en),
              this.realtime_ || this.scheduleConnect_(0)),
              (this.visible_ = e);
          }),
          (rn.prototype.onOnline_ = function (e) {
            e
              ? (this.log_("Browser went online."),
                (this.reconnectDelay_ = en),
                this.realtime_ || this.scheduleConnect_(0))
              : (this.log_("Browser went offline.  Killing connection."),
                this.realtime_ && this.realtime_.close());
          }),
          (rn.prototype.onRealtimeDisconnect_ = function () {
            var e;
            this.log_("data client disconnected"),
              (this.connected_ = !1),
              (this.realtime_ = null),
              this.cancelSentTransactions_(),
              (this.requestCBHash_ = {}),
              this.shouldReconnect_() &&
                (this.visible_
                  ? this.lastConnectionEstablishedTime_ &&
                    (3e4 <
                      new Date().getTime() -
                        this.lastConnectionEstablishedTime_ &&
                      (this.reconnectDelay_ = en),
                    (this.lastConnectionEstablishedTime_ = null))
                  : (this.log_("Window isn't visible.  Delaying reconnect."),
                    (this.reconnectDelay_ = this.maxReconnectDelay_),
                    (this.lastConnectionAttemptTime_ = new Date().getTime())),
                (e = new Date().getTime() - this.lastConnectionAttemptTime_),
                (e = Math.max(0, this.reconnectDelay_ - e)),
                (e = Math.random() * e),
                this.log_("Trying to reconnect in " + e + "ms"),
                this.scheduleConnect_(e),
                (this.reconnectDelay_ = Math.min(
                  this.maxReconnectDelay_,
                  1.3 * this.reconnectDelay_
                ))),
              this.onConnectStatus_(!1);
          }),
          (rn.prototype.establishConnection_ = function () {
            return i(this, void 0, void 0, function () {
              var t,
                n,
                r,
                i,
                o,
                s,
                a,
                u,
                l,
                h,
                c = this;
              return p(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (!this.shouldReconnect_()) return [3, 4];
                    this.log_("Making a connection attempt"),
                      (this.lastConnectionAttemptTime_ = new Date().getTime()),
                      (this.lastConnectionEstablishedTime_ = null),
                      (t = this.onDataMessage_.bind(this)),
                      (n = this.onReady_.bind(this)),
                      (r = this.onRealtimeDisconnect_.bind(this)),
                      (i = this.id + ":" + rn.nextConnectionId_++),
                      (h = this.lastSessionId),
                      (o = !1),
                      (s = null),
                      (a = function () {
                        s ? s.close() : ((o = !0), r());
                      }),
                      (l = function (e) {
                        g(
                          s,
                          "sendRequest call when we're not connected not allowed."
                        ),
                          s.sendRequest(e);
                      }),
                      (this.realtime_ = { close: a, sendRequest: l }),
                      (u = this.forceTokenRefresh_),
                      (this.forceTokenRefresh_ = !1),
                      (e.label = 1);
                  case 1:
                    return (
                      e.trys.push([1, 3, , 4]),
                      [
                        4,
                        Promise.all([
                          this.authTokenProvider_.getToken(u),
                          this.appCheckTokenProvider_.getToken(u),
                        ]),
                      ]
                    );
                  case 2:
                    return (
                      (l = y.apply(void 0, [e.sent(), 2])),
                      (u = l[0]),
                      (l = l[1]),
                      o
                        ? Ne("getToken() completed but was canceled")
                        : (Ne("getToken() completed. Creating connection."),
                          (this.authToken_ = u && u.accessToken),
                          (this.appCheckToken_ = l && l.token),
                          (s = new Ct(
                            i,
                            this.repoInfo_,
                            this.applicationId_,
                            this.appCheckToken_,
                            this.authToken_,
                            t,
                            n,
                            r,
                            function (e) {
                              Oe(e + " (" + c.repoInfo_.toString() + ")"),
                                c.interrupt("server_kill");
                            },
                            h
                          ))),
                      [3, 4]
                    );
                  case 3:
                    return (
                      (h = e.sent()),
                      this.log_("Failed to get token: " + h),
                      o || (this.repoInfo_.nodeAdmin && Oe(h), a()),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (rn.prototype.interrupt = function (e) {
            Ne("Interrupting connection for reason: " + e),
              (this.interruptReasons_[e] = !0),
              this.realtime_
                ? this.realtime_.close()
                : (this.establishConnectionTimer_ &&
                    (clearTimeout(this.establishConnectionTimer_),
                    (this.establishConnectionTimer_ = null)),
                  this.connected_ && this.onRealtimeDisconnect_());
          }),
          (rn.prototype.resume = function (e) {
            Ne("Resuming connection for reason: " + e),
              delete this.interruptReasons_[e],
              M(this.interruptReasons_) &&
                ((this.reconnectDelay_ = en),
                this.realtime_ || this.scheduleConnect_(0));
          }),
          (rn.prototype.handleTimestamp_ = function (e) {
            e -= new Date().getTime();
            this.onServerInfoUpdate_({ serverTimeOffset: e });
          }),
          (rn.prototype.cancelSentTransactions_ = function () {
            for (var e = 0; e < this.outstandingPuts_.length; e++) {
              var t = this.outstandingPuts_[e];
              t &&
                "h" in t.request &&
                t.queued &&
                (t.onComplete && t.onComplete("disconnect"),
                delete this.outstandingPuts_[e],
                this.outstandingPutCount_--);
            }
            0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []);
          }),
          (rn.prototype.onListenRevoked_ = function (e, t) {
            (t = t
              ? t
                  .map(function (e) {
                    return Me(e);
                  })
                  .join("$")
              : "default"),
              (t = this.removeListen_(e, t));
            t && t.onComplete && t.onComplete("permission_denied");
          }),
          (rn.prototype.removeListen_ = function (e, t) {
            var n,
              r = new Ot(e).toString();
            return (
              this.listens.has(r)
                ? ((n = (e = this.listens.get(r)).get(t)),
                  e.delete(t),
                  0 === e.size && this.listens.delete(r))
                : (n = void 0),
              n
            );
          }),
          (rn.prototype.onAuthRevoked_ = function (e, t) {
            Ne("Auth token revoked: " + e + "/" + t),
              (this.authToken_ = null),
              (this.forceTokenRefresh_ = !0),
              this.realtime_.close(),
              ("invalid_token" !== e && "permission_denied" !== e) ||
                (this.invalidAuthTokenCount_++,
                3 <= this.invalidAuthTokenCount_ &&
                  ((this.reconnectDelay_ = 3e4),
                  this.authTokenProvider_.notifyForInvalidToken()));
          }),
          (rn.prototype.onAppCheckRevoked_ = function (e, t) {
            Ne("App check token revoked: " + e + "/" + t),
              (this.appCheckToken_ = null),
              (this.forceTokenRefresh_ = !0),
              ("invalid_token" !== e && "permission_denied" !== e) ||
                (this.invalidAppCheckTokenCount_++,
                3 <= this.invalidAppCheckTokenCount_ &&
                  this.appCheckTokenProvider_.notifyForInvalidToken());
          }),
          (rn.prototype.onSecurityDebugPacket_ = function (e) {
            this.securityDebugCallback_
              ? this.securityDebugCallback_(e)
              : "msg" in e &&
                console.log("FIREBASE: " + e.msg.replace("\n", "\nFIREBASE: "));
          }),
          (rn.prototype.restoreState_ = function () {
            var t, e, n, r;
            this.tryAuth(), this.tryAppCheck();
            try {
              for (
                var i = _(this.listens.values()), o = i.next();
                !o.done;
                o = i.next()
              ) {
                var s = o.value;
                try {
                  for (
                    var a = ((n = void 0), _(s.values())), u = a.next();
                    !u.done;
                    u = a.next()
                  ) {
                    var l = u.value;
                    this.sendListen_(l);
                  }
                } catch (e) {
                  n = { error: e };
                } finally {
                  try {
                    u && !u.done && (r = a.return) && r.call(a);
                  } finally {
                    if (n) throw n.error;
                  }
                }
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                o && !o.done && (e = i.return) && e.call(i);
              } finally {
                if (t) throw t.error;
              }
            }
            for (var h = 0; h < this.outstandingPuts_.length; h++)
              this.outstandingPuts_[h] && this.sendPut_(h);
            for (; this.onDisconnectRequestQueue_.length; ) {
              var c = this.onDisconnectRequestQueue_.shift();
              this.sendOnDisconnect_(
                c.action,
                c.pathString,
                c.data,
                c.onComplete
              );
            }
            for (h = 0; h < this.outstandingGets_.length; h++)
              this.outstandingGets_[h] && this.sendGet_(h);
          }),
          (rn.prototype.sendConnectStats_ = function () {
            var e = {};
            (e["sdk.js." + ae.replace(/\./g, "-")] = 1),
              b()
                ? (e["framework.cordova"] = 1)
                : "object" == typeof navigator &&
                  "ReactNative" === navigator.product &&
                  (e["framework.reactnative"] = 1),
              this.reportStats(e);
          }),
          (rn.prototype.shouldReconnect_ = function () {
            var e = Pt.getInstance().currentlyOnline();
            return M(this.interruptReasons_) && e;
          }),
          (rn.nextPersistentConnectionId_ = 0),
          (rn.nextConnectionId_ = 0),
          rn);
      function rn(e, t, n, r, i, o, s, a) {
        var u = Zt.call(this) || this;
        if (
          ((u.repoInfo_ = e),
          (u.applicationId_ = t),
          (u.onDataUpdate_ = n),
          (u.onConnectStatus_ = r),
          (u.onServerInfoUpdate_ = i),
          (u.authTokenProvider_ = o),
          (u.appCheckTokenProvider_ = s),
          (u.authOverride_ = a),
          (u.id = rn.nextPersistentConnectionId_++),
          (u.log_ = xe("p:" + u.id + ":")),
          (u.interruptReasons_ = {}),
          (u.listens = new Map()),
          (u.outstandingPuts_ = []),
          (u.outstandingGets_ = []),
          (u.outstandingPutCount_ = 0),
          (u.outstandingGetCount_ = 0),
          (u.onDisconnectRequestQueue_ = []),
          (u.connected_ = !1),
          (u.reconnectDelay_ = en),
          (u.maxReconnectDelay_ = tn),
          (u.securityDebugCallback_ = null),
          (u.lastSessionId = null),
          (u.establishConnectionTimer_ = null),
          (u.visible_ = !1),
          (u.requestCBHash_ = {}),
          (u.requestNumber_ = 0),
          (u.realtime_ = null),
          (u.authToken_ = null),
          (u.appCheckToken_ = null),
          (u.forceTokenRefresh_ = !1),
          (u.invalidAuthTokenCount_ = 0),
          (u.invalidAppCheckTokenCount_ = 0),
          (u.firstConnection_ = !0),
          (u.lastConnectionAttemptTime_ = null),
          (u.lastConnectionEstablishedTime_ = null),
          a && !T())
        )
          throw new Error(
            "Auth override specified in options, but not supported on non Node.js platforms"
          );
        return (
          Jt.getInstance().on("visible", u.onVisible_, u),
          -1 === e.host.indexOf("fblocal") &&
            Pt.getInstance().on("online", u.onOnline_, u),
          u
        );
      }
      var on =
        ((sn.Wrap = function (e, t) {
          return new sn(e, t);
        }),
        sn);
      function sn(e, t) {
        (this.name = e), (this.node = t);
      }
      var an,
        Ce =
          ((un.prototype.getCompare = function () {
            return this.compare.bind(this);
          }),
          (un.prototype.indexedValueChanged = function (e, t) {
            (e = new on(De, e)), (t = new on(De, t));
            return 0 !== this.compare(e, t);
          }),
          (un.prototype.minPost = function () {
            return on.MIN;
          }),
          un);
      function un() {}
      var ln,
        oe =
          (n(hn, (ln = Ce)),
          Object.defineProperty(hn, "__EMPTY_NODE", {
            get: function () {
              return an;
            },
            set: function (e) {
              an = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (hn.prototype.compare = function (e, t) {
            return Le(e.name, t.name);
          }),
          (hn.prototype.isDefinedOn = function (e) {
            throw m("KeyIndex.isDefinedOn not expected to be called.");
          }),
          (hn.prototype.indexedValueChanged = function (e, t) {
            return !1;
          }),
          (hn.prototype.minPost = function () {
            return on.MIN;
          }),
          (hn.prototype.maxPost = function () {
            return new on(Ae, an);
          }),
          (hn.prototype.makePost = function (e, t) {
            return (
              g(
                "string" == typeof e,
                "KeyIndex indexValue must always be a string."
              ),
              new on(e, an)
            );
          }),
          (hn.prototype.toString = function () {
            return ".key";
          }),
          hn);
      function hn() {
        return (null !== ln && ln.apply(this, arguments)) || this;
      }
      var cn = new oe(),
        pn =
          ((dn.prototype.getNext = function () {
            if (0 === this.nodeStack_.length) return null;
            var e = this.nodeStack_.pop(),
              t = this.resultGenerator_
                ? this.resultGenerator_(e.key, e.value)
                : { key: e.key, value: e.value };
            if (this.isReverse_)
              for (e = e.left; !e.isEmpty(); )
                this.nodeStack_.push(e), (e = e.right);
            else
              for (e = e.right; !e.isEmpty(); )
                this.nodeStack_.push(e), (e = e.left);
            return t;
          }),
          (dn.prototype.hasNext = function () {
            return 0 < this.nodeStack_.length;
          }),
          (dn.prototype.peek = function () {
            if (0 === this.nodeStack_.length) return null;
            var e = this.nodeStack_[this.nodeStack_.length - 1];
            return this.resultGenerator_
              ? this.resultGenerator_(e.key, e.value)
              : { key: e.key, value: e.value };
          }),
          dn);
      function dn(e, t, n, r, i) {
        void 0 === i && (i = null),
          (this.isReverse_ = r),
          (this.resultGenerator_ = i),
          (this.nodeStack_ = []);
        for (var o = 1; !e.isEmpty(); )
          if (((o = t ? n(e.key, t) : 1), r && (o *= -1), o < 0))
            e = this.isReverse_ ? e.left : e.right;
          else {
            if (0 === o) {
              this.nodeStack_.push(e);
              break;
            }
            this.nodeStack_.push(e), (e = this.isReverse_ ? e.right : e.left);
          }
      }
      var fn =
        ((_n.prototype.copy = function (e, t, n, r, i) {
          return new _n(
            null != e ? e : this.key,
            null != t ? t : this.value,
            null != n ? n : this.color,
            null != r ? r : this.left,
            null != i ? i : this.right
          );
        }),
        (_n.prototype.count = function () {
          return this.left.count() + 1 + this.right.count();
        }),
        (_n.prototype.isEmpty = function () {
          return !1;
        }),
        (_n.prototype.inorderTraversal = function (e) {
          return (
            this.left.inorderTraversal(e) ||
            !!e(this.key, this.value) ||
            this.right.inorderTraversal(e)
          );
        }),
        (_n.prototype.reverseTraversal = function (e) {
          return (
            this.right.reverseTraversal(e) ||
            e(this.key, this.value) ||
            this.left.reverseTraversal(e)
          );
        }),
        (_n.prototype.min_ = function () {
          return this.left.isEmpty() ? this : this.left.min_();
        }),
        (_n.prototype.minKey = function () {
          return this.min_().key;
        }),
        (_n.prototype.maxKey = function () {
          return this.right.isEmpty() ? this.key : this.right.maxKey();
        }),
        (_n.prototype.insert = function (e, t, n) {
          var r = this,
            i = n(e, r.key);
          return (r =
            i < 0
              ? r.copy(null, null, null, r.left.insert(e, t, n), null)
              : 0 === i
              ? r.copy(null, t, null, null, null)
              : r.copy(
                  null,
                  null,
                  null,
                  null,
                  r.right.insert(e, t, n)
                )).fixUp_();
        }),
        (_n.prototype.removeMin_ = function () {
          if (this.left.isEmpty()) return gn.EMPTY_NODE;
          var e = this;
          return (e = (e =
            !e.left.isRed_() && !e.left.left.isRed_()
              ? e.moveRedLeft_()
              : e).copy(null, null, null, e.left.removeMin_(), null)).fixUp_();
        }),
        (_n.prototype.remove = function (e, t) {
          var n,
            r = this;
          if (t(e, r.key) < 0)
            r = (r = !(
              r.left.isEmpty() ||
              r.left.isRed_() ||
              r.left.left.isRed_()
            )
              ? r.moveRedLeft_()
              : r).copy(null, null, null, r.left.remove(e, t), null);
          else {
            if (
              0 ===
              t(
                e,
                (r = !(
                  (r = r.left.isRed_()
                    ? r.rotateRight_()
                    : r).right.isEmpty() ||
                  r.right.isRed_() ||
                  r.right.left.isRed_()
                )
                  ? r.moveRedRight_()
                  : r).key
              )
            ) {
              if (r.right.isEmpty()) return gn.EMPTY_NODE;
              (n = r.right.min_()),
                (r = r.copy(n.key, n.value, null, null, r.right.removeMin_()));
            }
            r = r.copy(null, null, null, null, r.right.remove(e, t));
          }
          return r.fixUp_();
        }),
        (_n.prototype.isRed_ = function () {
          return this.color;
        }),
        (_n.prototype.fixUp_ = function () {
          var e = this;
          return (e =
            (e =
              (e =
                e.right.isRed_() && !e.left.isRed_()
                  ? e.rotateLeft_()
                  : e).left.isRed_() && e.left.left.isRed_()
                ? e.rotateRight_()
                : e).left.isRed_() && e.right.isRed_()
              ? e.colorFlip_()
              : e);
        }),
        (_n.prototype.moveRedLeft_ = function () {
          var e = this.colorFlip_();
          return (e = e.right.left.isRed_()
            ? (e = (e = e.copy(
                null,
                null,
                null,
                null,
                e.right.rotateRight_()
              )).rotateLeft_()).colorFlip_()
            : e);
        }),
        (_n.prototype.moveRedRight_ = function () {
          var e = this.colorFlip_();
          return (e = e.left.left.isRed_()
            ? (e = e.rotateRight_()).colorFlip_()
            : e);
        }),
        (_n.prototype.rotateLeft_ = function () {
          var e = this.copy(null, null, _n.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, e, null);
        }),
        (_n.prototype.rotateRight_ = function () {
          var e = this.copy(null, null, _n.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, e);
        }),
        (_n.prototype.colorFlip_ = function () {
          var e = this.left.copy(null, null, !this.left.color, null, null),
            t = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, e, t);
        }),
        (_n.prototype.checkMaxDepth_ = function () {
          var e = this.check_();
          return Math.pow(2, e) <= this.count() + 1;
        }),
        (_n.prototype.check_ = function () {
          if (this.isRed_() && this.left.isRed_())
            throw new Error(
              "Red node has red child(" + this.key + "," + this.value + ")"
            );
          if (this.right.isRed_())
            throw new Error(
              "Right child of (" + this.key + "," + this.value + ") is red"
            );
          var e = this.left.check_();
          if (e !== this.right.check_()) throw new Error("Black depths differ");
          return e + (this.isRed_() ? 0 : 1);
        }),
        (_n.RED = !0),
        (_n.BLACK = !1),
        _n);
      function _n(e, t, n, r, i) {
        (this.key = e),
          (this.value = t),
          (this.color = null != n ? n : _n.RED),
          (this.left = null != r ? r : gn.EMPTY_NODE),
          (this.right = null != i ? i : gn.EMPTY_NODE);
      }
      (yn.prototype.copy = function (e, t, n, r, i) {
        return this;
      }),
        (yn.prototype.insert = function (e, t, n) {
          return new fn(e, t, null);
        }),
        (yn.prototype.remove = function (e, t) {
          return this;
        }),
        (yn.prototype.count = function () {
          return 0;
        }),
        (yn.prototype.isEmpty = function () {
          return !0;
        }),
        (yn.prototype.inorderTraversal = function (e) {
          return !1;
        }),
        (yn.prototype.reverseTraversal = function (e) {
          return !1;
        }),
        (yn.prototype.minKey = function () {
          return null;
        }),
        (yn.prototype.maxKey = function () {
          return null;
        }),
        (yn.prototype.check_ = function () {
          return 0;
        }),
        (yn.prototype.isRed_ = function () {
          return !1;
        }),
        (It = yn);
      function yn() {}
      var vn,
        gn =
          ((mn.prototype.insert = function (e, t) {
            return new mn(
              this.comparator_,
              this.root_
                .insert(e, t, this.comparator_)
                .copy(null, null, fn.BLACK, null, null)
            );
          }),
          (mn.prototype.remove = function (e) {
            return new mn(
              this.comparator_,
              this.root_
                .remove(e, this.comparator_)
                .copy(null, null, fn.BLACK, null, null)
            );
          }),
          (mn.prototype.get = function (e) {
            for (var t, n = this.root_; !n.isEmpty(); ) {
              if (0 === (t = this.comparator_(e, n.key))) return n.value;
              t < 0 ? (n = n.left) : 0 < t && (n = n.right);
            }
            return null;
          }),
          (mn.prototype.getPredecessorKey = function (e) {
            for (var t, n = this.root_, r = null; !n.isEmpty(); ) {
              if (0 === (t = this.comparator_(e, n.key))) {
                if (n.left.isEmpty()) return r ? r.key : null;
                for (n = n.left; !n.right.isEmpty(); ) n = n.right;
                return n.key;
              }
              t < 0 ? (n = n.left) : 0 < t && (n = (r = n).right);
            }
            throw new Error(
              "Attempted to find predecessor key for a nonexistent key.  What gives?"
            );
          }),
          (mn.prototype.isEmpty = function () {
            return this.root_.isEmpty();
          }),
          (mn.prototype.count = function () {
            return this.root_.count();
          }),
          (mn.prototype.minKey = function () {
            return this.root_.minKey();
          }),
          (mn.prototype.maxKey = function () {
            return this.root_.maxKey();
          }),
          (mn.prototype.inorderTraversal = function (e) {
            return this.root_.inorderTraversal(e);
          }),
          (mn.prototype.reverseTraversal = function (e) {
            return this.root_.reverseTraversal(e);
          }),
          (mn.prototype.getIterator = function (e) {
            return new pn(this.root_, null, this.comparator_, !1, e);
          }),
          (mn.prototype.getIteratorFrom = function (e, t) {
            return new pn(this.root_, e, this.comparator_, !1, t);
          }),
          (mn.prototype.getReverseIteratorFrom = function (e, t) {
            return new pn(this.root_, e, this.comparator_, !0, t);
          }),
          (mn.prototype.getReverseIterator = function (e) {
            return new pn(this.root_, null, this.comparator_, !0, e);
          }),
          (mn.EMPTY_NODE = new It()),
          mn);
      function mn(e, t) {
        void 0 === t && (t = mn.EMPTY_NODE),
          (this.comparator_ = e),
          (this.root_ = t);
      }
      function wn(e, t) {
        return Le(e.name, t.name);
      }
      function Cn(e, t) {
        return Le(e, t);
      }
      function bn(e) {
        return "number" == typeof e ? "number:" + qe(e) : "string:" + e;
      }
      var Tn,
        En,
        In,
        Sn,
        kn = function (e) {
          var t;
          e.isLeafNode()
            ? ((t = e.val()),
              g(
                "string" == typeof t ||
                  "number" == typeof t ||
                  ("object" == typeof t && A(t, ".sv")),
                "Priority must be a string or number."
              ))
            : g(e === vn || e.isEmpty(), "priority of unexpected type."),
            g(
              e === vn || e.getPriority().isEmpty(),
              "Priority nodes can't have a priority of their own."
            );
        },
        Pn =
          (Object.defineProperty(Nn, "__childrenNodeConstructor", {
            get: function () {
              return Tn;
            },
            set: function (e) {
              Tn = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Nn.prototype.isLeafNode = function () {
            return !0;
          }),
          (Nn.prototype.getPriority = function () {
            return this.priorityNode_;
          }),
          (Nn.prototype.updatePriority = function (e) {
            return new Nn(this.value_, e);
          }),
          (Nn.prototype.getImmediateChild = function (e) {
            return ".priority" === e
              ? this.priorityNode_
              : Nn.__childrenNodeConstructor.EMPTY_NODE;
          }),
          (Nn.prototype.getChild = function (e) {
            return Bt(e)
              ? this
              : ".priority" === Lt(e)
              ? this.priorityNode_
              : Nn.__childrenNodeConstructor.EMPTY_NODE;
          }),
          (Nn.prototype.hasChild = function () {
            return !1;
          }),
          (Nn.prototype.getPredecessorChildName = function (e, t) {
            return null;
          }),
          (Nn.prototype.updateImmediateChild = function (e, t) {
            return ".priority" === e
              ? this.updatePriority(t)
              : t.isEmpty() && ".priority" !== e
              ? this
              : Nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
                  e,
                  t
                ).updatePriority(this.priorityNode_);
          }),
          (Nn.prototype.updateChild = function (e, t) {
            var n = Lt(e);
            return null === n
              ? t
              : t.isEmpty() && ".priority" !== n
              ? this
              : (g(
                  ".priority" !== n || 1 === Mt(e),
                  ".priority must be the last token in a path"
                ),
                this.updateImmediateChild(
                  n,
                  Nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ft(e), t)
                ));
          }),
          (Nn.prototype.isEmpty = function () {
            return !1;
          }),
          (Nn.prototype.numChildren = function () {
            return 0;
          }),
          (Nn.prototype.forEachChild = function (e, t) {
            return !1;
          }),
          (Nn.prototype.val = function (e) {
            return e && !this.getPriority().isEmpty()
              ? {
                  ".value": this.getValue(),
                  ".priority": this.getPriority().val(),
                }
              : this.getValue();
          }),
          (Nn.prototype.hash = function () {
            var e, t;
            return (
              null === this.lazyHash_ &&
                ((e = ""),
                this.priorityNode_.isEmpty() ||
                  (e += "priority:" + bn(this.priorityNode_.val()) + ":"),
                (e += (t = typeof this.value_) + ":"),
                (e += "number" == t ? qe(this.value_) : this.value_),
                (this.lazyHash_ = de(e))),
              this.lazyHash_
            );
          }),
          (Nn.prototype.getValue = function () {
            return this.value_;
          }),
          (Nn.prototype.compareTo = function (e) {
            return e === Nn.__childrenNodeConstructor.EMPTY_NODE
              ? 1
              : e instanceof Nn.__childrenNodeConstructor
              ? -1
              : (g(e.isLeafNode(), "Unknown node type"),
                this.compareToLeafNode_(e));
          }),
          (Nn.prototype.compareToLeafNode_ = function (e) {
            var t = typeof e.value_,
              n = typeof this.value_,
              r = Nn.VALUE_TYPE_ORDER.indexOf(t),
              i = Nn.VALUE_TYPE_ORDER.indexOf(n);
            return (
              g(0 <= r, "Unknown leaf type: " + t),
              g(0 <= i, "Unknown leaf type: " + n),
              r === i
                ? "object" == n
                  ? 0
                  : this.value_ < e.value_
                  ? -1
                  : this.value_ === e.value_
                  ? 0
                  : 1
                : i - r
            );
          }),
          (Nn.prototype.withIndex = function () {
            return this;
          }),
          (Nn.prototype.isIndexed = function () {
            return !0;
          }),
          (Nn.prototype.equals = function (e) {
            return (
              e === this ||
              (!!e.isLeafNode() &&
                this.value_ === e.value_ &&
                this.priorityNode_.equals(e.priorityNode_))
            );
          }),
          (Nn.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"]),
          Nn);
      function Nn(e, t) {
        void 0 === t && (t = Nn.__childrenNodeConstructor.EMPTY_NODE),
          (this.value_ = e),
          (this.priorityNode_ = t),
          (this.lazyHash_ = null),
          g(
            void 0 !== this.value_ && null !== this.value_,
            "LeafNode shouldn't be created with null/undefined value."
          ),
          kn(this.priorityNode_);
      }
      function xn() {
        return (null !== Sn && Sn.apply(this, arguments)) || this;
      }
      var Rn = new (n(xn, (Sn = Ce)),
        (xn.prototype.compare = function (e, t) {
          var n = e.node.getPriority(),
            r = t.node.getPriority(),
            r = n.compareTo(r);
          return 0 === r ? Le(e.name, t.name) : r;
        }),
        (xn.prototype.isDefinedOn = function (e) {
          return !e.getPriority().isEmpty();
        }),
        (xn.prototype.indexedValueChanged = function (e, t) {
          return !e.getPriority().equals(t.getPriority());
        }),
        (xn.prototype.minPost = function () {
          return on.MIN;
        }),
        (xn.prototype.maxPost = function () {
          return new on(Ae, new Pn("[PRIORITY-POST]", In));
        }),
        (xn.prototype.makePost = function (e, t) {
          e = En(e);
          return new on(t, new Pn("[PRIORITY-POST]", e));
        }),
        (xn.prototype.toString = function () {
          return ".priority";
        }),
        xn)(),
        On = Math.log(2),
        Dn =
          ((An.prototype.nextBitIsOne = function () {
            var e = !(this.bits_ & (1 << this.current_));
            return this.current_--, e;
          }),
          An);
      function An(e) {
        var t;
        (this.count = ((t = e + 1), parseInt(Math.log(t) / On, 10))),
          (this.current_ = this.count - 1);
        var n,
          r = ((n = this.count), parseInt(Array(n + 1).join("1"), 2));
        this.bits_ = (e + 1) & r;
      }
      var Ln,
        Mn,
        Fn = function (l, e, h, t) {
          l.sort(e);
          var c = function (e, t) {
              var n = t - e;
              if (0 == n) return null;
              if (1 == n)
                return (
                  (r = l[e]),
                  (i = h ? h(r) : r),
                  new fn(i, r.node, fn.BLACK, null, null)
                );
              var n = parseInt(n / 2, 10) + e,
                e = c(e, n),
                t = c(n + 1, t),
                r = l[n],
                i = h ? h(r) : r;
              return new fn(i, r.node, fn.BLACK, e, t);
            },
            n = (function (e) {
              for (
                var t = null,
                  n = null,
                  i = l.length,
                  r = function (e, t) {
                    var n = i - e,
                      r = i;
                    i -= e;
                    (e = c(1 + n, r)), (r = l[n]), (n = h ? h(r) : r);
                    o(new fn(n, r.node, t, null, e));
                  },
                  o = function (e) {
                    t = t ? (t.left = e) : (n = e);
                  },
                  s = 0;
                s < e.count;
                ++s
              ) {
                var a = e.nextBitIsOne(),
                  u = Math.pow(2, e.count - (s + 1));
                a ? r(u, fn.BLACK) : (r(u, fn.BLACK), r(u, fn.RED));
              }
              return n;
            })(new Dn(l.length));
          return new gn(t || e, n);
        },
        qn = {},
        Wn =
          (Object.defineProperty(jn, "Default", {
            get: function () {
              return (
                g(Rn, "ChildrenNode.ts has not been loaded"),
                (Ln = Ln || new jn({ ".priority": qn }, { ".priority": Rn }))
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (jn.prototype.get = function (e) {
            var t = L(this.indexes_, e);
            if (!t) throw new Error("No index defined for " + e);
            return t instanceof gn ? t : null;
          }),
          (jn.prototype.hasIndex = function (e) {
            return A(this.indexSet_, e.toString());
          }),
          (jn.prototype.addIndex = function (e, t) {
            g(
              e !== cn,
              "KeyIndex always exists and isn't meant to be added to the IndexMap."
            );
            for (
              var n = [], r = !1, i = t.getIterator(on.Wrap), o = i.getNext();
              o;

            )
              (r = r || e.isDefinedOn(o.node)), n.push(o), (o = i.getNext());
            var s = r ? Fn(n, e.getCompare()) : qn,
              a = e.toString(),
              u = l({}, this.indexSet_);
            u[a] = e;
            t = l({}, this.indexes_);
            return (t[a] = s), new jn(t, u);
          }),
          (jn.prototype.addToIndexes = function (s, a) {
            var u = this;
            return new jn(
              F(this.indexes_, function (e, t) {
                var n = L(u.indexSet_, t);
                if ((g(n, "Missing index implementation for " + t), e === qn)) {
                  if (n.isDefinedOn(s.node)) {
                    for (
                      var r = [], i = a.getIterator(on.Wrap), o = i.getNext();
                      o;

                    )
                      o.name !== s.name && r.push(o), (o = i.getNext());
                    return r.push(s), Fn(r, n.getCompare());
                  }
                  return qn;
                }
                (t = a.get(s.name)), (n = e);
                return (n = t ? e.remove(new on(s.name, t)) : n).insert(
                  s,
                  s.node
                );
              }),
              this.indexSet_
            );
          }),
          (jn.prototype.removeFromIndexes = function (n, r) {
            return new jn(
              F(this.indexes_, function (e) {
                if (e === qn) return e;
                var t = r.get(n.name);
                return t ? e.remove(new on(n.name, t)) : e;
              }),
              this.indexSet_
            );
          }),
          jn);
      function jn(e, t) {
        (this.indexes_ = e), (this.indexSet_ = t);
      }
      var Un,
        Bn =
          (Object.defineProperty(Vn, "EMPTY_NODE", {
            get: function () {
              return (Mn = Mn || new Vn(new gn(Cn), null, Wn.Default));
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Vn.prototype.isLeafNode = function () {
            return !1;
          }),
          (Vn.prototype.getPriority = function () {
            return this.priorityNode_ || Mn;
          }),
          (Vn.prototype.updatePriority = function (e) {
            return this.children_.isEmpty()
              ? this
              : new Vn(this.children_, e, this.indexMap_);
          }),
          (Vn.prototype.getImmediateChild = function (e) {
            if (".priority" === e) return this.getPriority();
            e = this.children_.get(e);
            return null === e ? Mn : e;
          }),
          (Vn.prototype.getChild = function (e) {
            var t = Lt(e);
            return null === t
              ? this
              : this.getImmediateChild(t).getChild(Ft(e));
          }),
          (Vn.prototype.hasChild = function (e) {
            return null !== this.children_.get(e);
          }),
          (Vn.prototype.updateImmediateChild = function (e, t) {
            if (
              (g(t, "We should always be passing snapshot nodes"),
              ".priority" === e)
            )
              return this.updatePriority(t);
            var n = new on(e, t),
              r = void 0,
              i = void 0,
              i = t.isEmpty()
                ? ((r = this.children_.remove(e)),
                  this.indexMap_.removeFromIndexes(n, this.children_))
                : ((r = this.children_.insert(e, t)),
                  this.indexMap_.addToIndexes(n, this.children_)),
              n = r.isEmpty() ? Mn : this.priorityNode_;
            return new Vn(r, n, i);
          }),
          (Vn.prototype.updateChild = function (e, t) {
            var n = Lt(e);
            if (null === n) return t;
            g(
              ".priority" !== Lt(e) || 1 === Mt(e),
              ".priority must be the last token in a path"
            );
            t = this.getImmediateChild(n).updateChild(Ft(e), t);
            return this.updateImmediateChild(n, t);
          }),
          (Vn.prototype.isEmpty = function () {
            return this.children_.isEmpty();
          }),
          (Vn.prototype.numChildren = function () {
            return this.children_.count();
          }),
          (Vn.prototype.val = function (n) {
            if (this.isEmpty()) return null;
            var r = {},
              i = 0,
              o = 0,
              s = !0;
            if (
              (this.forEachChild(Rn, function (e, t) {
                (r[e] = t.val(n)),
                  i++,
                  s && Vn.INTEGER_REGEXP_.test(e)
                    ? (o = Math.max(o, Number(e)))
                    : (s = !1);
              }),
              !n && s && o < 2 * i)
            ) {
              var e,
                t = [];
              for (e in r) t[e] = r[e];
              return t;
            }
            return (
              n &&
                !this.getPriority().isEmpty() &&
                (r[".priority"] = this.getPriority().val()),
              r
            );
          }),
          (Vn.prototype.hash = function () {
            var n;
            return (
              null === this.lazyHash_ &&
                ((n = ""),
                this.getPriority().isEmpty() ||
                  (n += "priority:" + bn(this.getPriority().val()) + ":"),
                this.forEachChild(Rn, function (e, t) {
                  t = t.hash();
                  "" !== t && (n += ":" + e + ":" + t);
                }),
                (this.lazyHash_ = "" === n ? "" : de(n))),
              this.lazyHash_
            );
          }),
          (Vn.prototype.getPredecessorChildName = function (e, t, n) {
            n = this.resolveIndex_(n);
            if (n) {
              t = n.getPredecessorKey(new on(e, t));
              return t ? t.name : null;
            }
            return this.children_.getPredecessorKey(e);
          }),
          (Vn.prototype.getFirstChildName = function (e) {
            e = this.resolveIndex_(e);
            if (e) {
              e = e.minKey();
              return e && e.name;
            }
            return this.children_.minKey();
          }),
          (Vn.prototype.getFirstChild = function (e) {
            e = this.getFirstChildName(e);
            return e ? new on(e, this.children_.get(e)) : null;
          }),
          (Vn.prototype.getLastChildName = function (e) {
            e = this.resolveIndex_(e);
            if (e) {
              e = e.maxKey();
              return e && e.name;
            }
            return this.children_.maxKey();
          }),
          (Vn.prototype.getLastChild = function (e) {
            e = this.getLastChildName(e);
            return e ? new on(e, this.children_.get(e)) : null;
          }),
          (Vn.prototype.forEachChild = function (e, t) {
            e = this.resolveIndex_(e);
            return e
              ? e.inorderTraversal(function (e) {
                  return t(e.name, e.node);
                })
              : this.children_.inorderTraversal(t);
          }),
          (Vn.prototype.getIterator = function (e) {
            return this.getIteratorFrom(e.minPost(), e);
          }),
          (Vn.prototype.getIteratorFrom = function (e, t) {
            var n = this.resolveIndex_(t);
            if (n)
              return n.getIteratorFrom(e, function (e) {
                return e;
              });
            for (
              var r = this.children_.getIteratorFrom(e.name, on.Wrap),
                i = r.peek();
              null != i && t.compare(i, e) < 0;

            )
              r.getNext(), (i = r.peek());
            return r;
          }),
          (Vn.prototype.getReverseIterator = function (e) {
            return this.getReverseIteratorFrom(e.maxPost(), e);
          }),
          (Vn.prototype.getReverseIteratorFrom = function (e, t) {
            var n = this.resolveIndex_(t);
            if (n)
              return n.getReverseIteratorFrom(e, function (e) {
                return e;
              });
            for (
              var r = this.children_.getReverseIteratorFrom(e.name, on.Wrap),
                i = r.peek();
              null != i && 0 < t.compare(i, e);

            )
              r.getNext(), (i = r.peek());
            return r;
          }),
          (Vn.prototype.compareTo = function (e) {
            return this.isEmpty()
              ? e.isEmpty()
                ? 0
                : -1
              : e.isLeafNode() || e.isEmpty()
              ? 1
              : e === Hn
              ? -1
              : 0;
          }),
          (Vn.prototype.withIndex = function (e) {
            if (e === cn || this.indexMap_.hasIndex(e)) return this;
            e = this.indexMap_.addIndex(e, this.children_);
            return new Vn(this.children_, this.priorityNode_, e);
          }),
          (Vn.prototype.isIndexed = function (e) {
            return e === cn || this.indexMap_.hasIndex(e);
          }),
          (Vn.prototype.equals = function (e) {
            if (e === this) return !0;
            if (e.isLeafNode()) return !1;
            if (this.getPriority().equals(e.getPriority())) {
              if (this.children_.count() !== e.children_.count()) return !1;
              for (
                var t = this.getIterator(Rn),
                  n = e.getIterator(Rn),
                  r = t.getNext(),
                  i = n.getNext();
                r && i;

              ) {
                if (r.name !== i.name || !r.node.equals(i.node)) return !1;
                (r = t.getNext()), (i = n.getNext());
              }
              return null === r && null === i;
            }
            return !1;
          }),
          (Vn.prototype.resolveIndex_ = function (e) {
            return e === cn ? null : this.indexMap_.get(e.toString());
          }),
          (Vn.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/),
          Vn);
      function Vn(e, t, n) {
        (this.children_ = e),
          (this.priorityNode_ = t),
          (this.indexMap_ = n),
          (this.lazyHash_ = null),
          this.priorityNode_ && kn(this.priorityNode_),
          this.children_.isEmpty() &&
            g(
              !this.priorityNode_ || this.priorityNode_.isEmpty(),
              "An empty node cannot have a priority"
            );
      }
      function zn() {
        return Un.call(this, new gn(Cn), Bn.EMPTY_NODE, Wn.Default) || this;
      }
      var Hn = new (n(zn, (Un = Bn)),
      (zn.prototype.compareTo = function (e) {
        return e === this ? 0 : 1;
      }),
      (zn.prototype.equals = function (e) {
        return e === this;
      }),
      (zn.prototype.getPriority = function () {
        return this;
      }),
      (zn.prototype.getImmediateChild = function (e) {
        return Bn.EMPTY_NODE;
      }),
      (zn.prototype.isEmpty = function () {
        return !1;
      }),
      zn)();
      Object.defineProperties(on, {
        MIN: { value: new on(De, Bn.EMPTY_NODE) },
        MAX: { value: new on(Ae, Hn) },
      }),
        (oe.__EMPTY_NODE = Bn.EMPTY_NODE),
        (Pn.__childrenNodeConstructor = Bn),
        (In = vn = Hn);
      var Qn = !0;
      function Yn(n, e) {
        if ((void 0 === e && (e = null), null === n)) return Bn.EMPTY_NODE;
        if (
          ("object" == typeof n && ".priority" in n && (e = n[".priority"]),
          g(
            null === e ||
              "string" == typeof e ||
              "number" == typeof e ||
              ("object" == typeof e && ".sv" in e),
            "Invalid priority type found: " + typeof e
          ),
          "object" !=
            typeof (n =
              "object" == typeof n && ".value" in n && null !== n[".value"]
                ? n[".value"]
                : n) || ".sv" in n)
        )
          return new Pn(n, Yn(e));
        if (n instanceof Array || !Qn) {
          var r = Bn.EMPTY_NODE;
          return (
            Fe(n, function (e, t) {
              A(n, e) &&
                "." !== e.substring(0, 1) &&
                ((!(t = Yn(t)).isLeafNode() && t.isEmpty()) ||
                  (r = r.updateImmediateChild(e, t)));
            }),
            r.updatePriority(Yn(e))
          );
        }
        var i = [],
          o = !1;
        if (
          (Fe(n, function (e, t) {
            "." !== e.substring(0, 1) &&
              ((t = Yn(t)).isEmpty() ||
                ((o = o || !t.getPriority().isEmpty()), i.push(new on(e, t))));
          }),
          0 === i.length)
        )
          return Bn.EMPTY_NODE;
        var t = Fn(
          i,
          wn,
          function (e) {
            return e.name;
          },
          Cn
        );
        if (o) {
          var s = Fn(i, Rn.getCompare());
          return new Bn(
            t,
            Yn(e),
            new Wn({ ".priority": s }, { ".priority": Rn })
          );
        }
        return new Bn(t, Yn(e), Wn.Default);
      }
      En = Yn;
      var Kn,
        Gn,
        $n =
          (n(Jn, (Kn = Ce)),
          (Jn.prototype.extractChild = function (e) {
            return e.getChild(this.indexPath_);
          }),
          (Jn.prototype.isDefinedOn = function (e) {
            return !e.getChild(this.indexPath_).isEmpty();
          }),
          (Jn.prototype.compare = function (e, t) {
            var n = this.extractChild(e.node),
              r = this.extractChild(t.node),
              r = n.compareTo(r);
            return 0 === r ? Le(e.name, t.name) : r;
          }),
          (Jn.prototype.makePost = function (e, t) {
            (e = Yn(e)), (e = Bn.EMPTY_NODE.updateChild(this.indexPath_, e));
            return new on(t, e);
          }),
          (Jn.prototype.maxPost = function () {
            var e = Bn.EMPTY_NODE.updateChild(this.indexPath_, Hn);
            return new on(Ae, e);
          }),
          (Jn.prototype.toString = function () {
            return Wt(this.indexPath_, 0).join("/");
          }),
          Jn);
      function Jn(e) {
        var t = Kn.call(this) || this;
        return (
          (t.indexPath_ = e),
          g(
            !Bt(e) && ".priority" !== Lt(e),
            "Can't create PathIndex with empty path or .priority key"
          ),
          t
        );
      }
      function Xn() {
        return (null !== Gn && Gn.apply(this, arguments)) || this;
      }
      function Zn(e) {
        if (e === "" + Be) return "-";
        var t = Ve(e);
        if (null != t) return "" + (t + 1);
        for (var n = new Array(e.length), r = 0; r < n.length; r++)
          n[r] = e.charAt(r);
        if (n.length < 786) return n.push("-"), n.join("");
        for (var i = n.length - 1; 0 <= i && "z" === n[i]; ) i--;
        return -1 === i
          ? Ae
          : ((t = n[i]),
            (t = ir.charAt(ir.indexOf(t) + 1)),
            (n[i] = t),
            n.slice(0, i + 1).join(""));
      }
      function er(e) {
        if (e === "" + Ue) return De;
        var t = Ve(e);
        if (null != t) return "" + (t - 1);
        for (var n = new Array(e.length), r = 0; r < n.length; r++)
          n[r] = e.charAt(r);
        return "-" === n[n.length - 1]
          ? 1 === n.length
            ? "" + Be
            : (delete n[n.length - 1], n.join(""))
          : ((n[n.length - 1] = ir.charAt(ir.indexOf(n[n.length - 1]) - 1)),
            n.join("") + "z".repeat(786 - n.length));
      }
      var tr,
        nr,
        rr = new (n(Xn, (Gn = Ce)),
        (Xn.prototype.compare = function (e, t) {
          var n = e.node.compareTo(t.node);
          return 0 === n ? Le(e.name, t.name) : n;
        }),
        (Xn.prototype.isDefinedOn = function (e) {
          return !0;
        }),
        (Xn.prototype.indexedValueChanged = function (e, t) {
          return !e.equals(t);
        }),
        (Xn.prototype.minPost = function () {
          return on.MIN;
        }),
        (Xn.prototype.maxPost = function () {
          return on.MAX;
        }),
        (Xn.prototype.makePost = function (e, t) {
          e = Yn(e);
          return new on(t, e);
        }),
        (Xn.prototype.toString = function () {
          return ".value";
        }),
        Xn)(),
        ir = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
        or =
          ((tr = 0),
          (nr = []),
          function (e) {
            var t = e === tr;
            tr = e;
            for (var n = new Array(8), r = 7; 0 <= r; r--)
              (n[r] = ir.charAt(e % 64)), (e = Math.floor(e / 64));
            g(0 === e, "Cannot push at time == 0");
            var i = n.join("");
            if (t) {
              for (r = 11; 0 <= r && 63 === nr[r]; r--) nr[r] = 0;
              nr[r]++;
            } else
              for (r = 0; r < 12; r++) nr[r] = Math.floor(64 * Math.random());
            for (r = 0; r < 12; r++) i += ir.charAt(nr[r]);
            return g(20 === i.length, "nextPushId: Length should be 20."), i;
          });
      function sr(e) {
        return { type: "value", snapshotNode: e };
      }
      function ar(e, t) {
        return { type: "child_added", snapshotNode: t, childName: e };
      }
      function ur(e, t) {
        return { type: "child_removed", snapshotNode: t, childName: e };
      }
      function lr(e, t, n) {
        return {
          type: "child_changed",
          snapshotNode: t,
          childName: e,
          oldSnap: n,
        };
      }
      var hr =
        ((cr.prototype.updateChild = function (e, t, n, r, i, o) {
          g(
            e.isIndexed(this.index_),
            "A node must be indexed if only a child is updated"
          );
          var s = e.getImmediateChild(t);
          return s.getChild(r).equals(n.getChild(r)) &&
            s.isEmpty() === n.isEmpty()
            ? e
            : (null != o &&
                (n.isEmpty()
                  ? e.hasChild(t)
                    ? o.trackChildChange(ur(t, s))
                    : g(
                        e.isLeafNode(),
                        "A child remove without an old child only makes sense on a leaf node"
                      )
                  : s.isEmpty()
                  ? o.trackChildChange(ar(t, n))
                  : o.trackChildChange(lr(t, n, s))),
              e.isLeafNode() && n.isEmpty()
                ? e
                : e.updateImmediateChild(t, n).withIndex(this.index_));
        }),
        (cr.prototype.updateFullNode = function (r, n, i) {
          return (
            null != i &&
              (r.isLeafNode() ||
                r.forEachChild(Rn, function (e, t) {
                  n.hasChild(e) || i.trackChildChange(ur(e, t));
                }),
              n.isLeafNode() ||
                n.forEachChild(Rn, function (e, t) {
                  var n;
                  r.hasChild(e)
                    ? (n = r.getImmediateChild(e)).equals(t) ||
                      i.trackChildChange(lr(e, t, n))
                    : i.trackChildChange(ar(e, t));
                })),
            n.withIndex(this.index_)
          );
        }),
        (cr.prototype.updatePriority = function (e, t) {
          return e.isEmpty() ? Bn.EMPTY_NODE : e.updatePriority(t);
        }),
        (cr.prototype.filtersNodes = function () {
          return !1;
        }),
        (cr.prototype.getIndexedFilter = function () {
          return this;
        }),
        (cr.prototype.getIndex = function () {
          return this.index_;
        }),
        cr);
      function cr(e) {
        this.index_ = e;
      }
      var pr =
        ((dr.prototype.getStartPost = function () {
          return this.startPost_;
        }),
        (dr.prototype.getEndPost = function () {
          return this.endPost_;
        }),
        (dr.prototype.matches = function (e) {
          return (
            this.index_.compare(this.getStartPost(), e) <= 0 &&
            this.index_.compare(e, this.getEndPost()) <= 0
          );
        }),
        (dr.prototype.updateChild = function (e, t, n, r, i, o) {
          return (
            this.matches(new on(t, n)) || (n = Bn.EMPTY_NODE),
            this.indexedFilter_.updateChild(e, t, n, r, i, o)
          );
        }),
        (dr.prototype.updateFullNode = function (e, t, n) {
          t.isLeafNode() && (t = Bn.EMPTY_NODE);
          var r = (r = t.withIndex(this.index_)).updatePriority(Bn.EMPTY_NODE),
            i = this;
          return (
            t.forEachChild(Rn, function (e, t) {
              i.matches(new on(e, t)) ||
                (r = r.updateImmediateChild(e, Bn.EMPTY_NODE));
            }),
            this.indexedFilter_.updateFullNode(e, r, n)
          );
        }),
        (dr.prototype.updatePriority = function (e, t) {
          return e;
        }),
        (dr.prototype.filtersNodes = function () {
          return !0;
        }),
        (dr.prototype.getIndexedFilter = function () {
          return this.indexedFilter_;
        }),
        (dr.prototype.getIndex = function () {
          return this.index_;
        }),
        (dr.getStartPost_ = function (e) {
          if (e.hasStart()) {
            var t = e.getIndexStartName();
            return e.getIndex().makePost(e.getIndexStartValue(), t);
          }
          return e.getIndex().minPost();
        }),
        (dr.getEndPost_ = function (e) {
          if (e.hasEnd()) {
            var t = e.getIndexEndName();
            return e.getIndex().makePost(e.getIndexEndValue(), t);
          }
          return e.getIndex().maxPost();
        }),
        dr);
      function dr(e) {
        (this.indexedFilter_ = new hr(e.getIndex())),
          (this.index_ = e.getIndex()),
          (this.startPost_ = dr.getStartPost_(e)),
          (this.endPost_ = dr.getEndPost_(e));
      }
      var fr =
        ((_r.prototype.updateChild = function (e, t, n, r, i, o) {
          return (
            this.rangedFilter_.matches(new on(t, n)) || (n = Bn.EMPTY_NODE),
            e.getImmediateChild(t).equals(n)
              ? e
              : e.numChildren() < this.limit_
              ? this.rangedFilter_
                  .getIndexedFilter()
                  .updateChild(e, t, n, r, i, o)
              : this.fullLimitUpdateChild_(e, t, n, i, o)
          );
        }),
        (_r.prototype.updateFullNode = function (e, t, n) {
          if (t.isLeafNode() || t.isEmpty())
            r = Bn.EMPTY_NODE.withIndex(this.index_);
          else if (
            2 * this.limit_ < t.numChildren() &&
            t.isIndexed(this.index_)
          ) {
            var r = Bn.EMPTY_NODE.withIndex(this.index_),
              i = void 0;
            i = this.reverse_
              ? t.getReverseIteratorFrom(
                  this.rangedFilter_.getEndPost(),
                  this.index_
                )
              : t.getIteratorFrom(
                  this.rangedFilter_.getStartPost(),
                  this.index_
                );
            for (var o = 0; i.hasNext() && o < this.limit_; ) {
              var s = i.getNext();
              if (
                !(this.reverse_
                  ? this.index_.compare(this.rangedFilter_.getStartPost(), s) <=
                    0
                  : this.index_.compare(s, this.rangedFilter_.getEndPost()) <=
                    0)
              )
                break;
              (r = r.updateImmediateChild(s.name, s.node)), o++;
            }
          } else {
            r = (r = t.withIndex(this.index_)).updatePriority(Bn.EMPTY_NODE);
            var a,
              u = void 0,
              l = void 0,
              h = void 0,
              i = void 0;
            h = this.reverse_
              ? ((i = r.getReverseIterator(this.index_)),
                (u = this.rangedFilter_.getEndPost()),
                (l = this.rangedFilter_.getStartPost()),
                (a = this.index_.getCompare()),
                function (e, t) {
                  return a(t, e);
                })
              : ((i = r.getIterator(this.index_)),
                (u = this.rangedFilter_.getStartPost()),
                (l = this.rangedFilter_.getEndPost()),
                this.index_.getCompare());
            for (var o = 0, c = !1; i.hasNext(); ) {
              s = i.getNext();
              (c = !c && h(u, s) <= 0 ? !0 : c) &&
              o < this.limit_ &&
              h(s, l) <= 0
                ? o++
                : (r = r.updateImmediateChild(s.name, Bn.EMPTY_NODE));
            }
          }
          return this.rangedFilter_.getIndexedFilter().updateFullNode(e, r, n);
        }),
        (_r.prototype.updatePriority = function (e, t) {
          return e;
        }),
        (_r.prototype.filtersNodes = function () {
          return !0;
        }),
        (_r.prototype.getIndexedFilter = function () {
          return this.rangedFilter_.getIndexedFilter();
        }),
        (_r.prototype.getIndex = function () {
          return this.index_;
        }),
        (_r.prototype.fullLimitUpdateChild_ = function (e, t, n, r, i) {
          var o, s;
          s = this.reverse_
            ? ((o = this.index_.getCompare()),
              function (e, t) {
                return o(t, e);
              })
            : this.index_.getCompare();
          var a = e;
          g(a.numChildren() === this.limit_, "");
          var u = new on(t, n),
            l = this.reverse_
              ? a.getFirstChild(this.index_)
              : a.getLastChild(this.index_),
            h = this.rangedFilter_.matches(u);
          if (a.hasChild(t)) {
            for (
              var c = a.getImmediateChild(t),
                p = r.getChildAfterChild(this.index_, l, this.reverse_);
              null != p && (p.name === t || a.hasChild(p.name));

            )
              p = r.getChildAfterChild(this.index_, p, this.reverse_);
            var d = null == p ? 1 : s(p, u);
            if (h && !n.isEmpty() && 0 <= d)
              return (
                null != i && i.trackChildChange(lr(t, n, c)),
                a.updateImmediateChild(t, n)
              );
            null != i && i.trackChildChange(ur(t, c));
            c = a.updateImmediateChild(t, Bn.EMPTY_NODE);
            return null != p && this.rangedFilter_.matches(p)
              ? (null != i && i.trackChildChange(ar(p.name, p.node)),
                c.updateImmediateChild(p.name, p.node))
              : c;
          }
          return !n.isEmpty() && h && 0 <= s(l, u)
            ? (null != i &&
                (i.trackChildChange(ur(l.name, l.node)),
                i.trackChildChange(ar(t, n))),
              a
                .updateImmediateChild(t, n)
                .updateImmediateChild(l.name, Bn.EMPTY_NODE))
            : e;
        }),
        _r);
      function _r(e) {
        (this.rangedFilter_ = new pr(e)),
          (this.index_ = e.getIndex()),
          (this.limit_ = e.getLimit()),
          (this.reverse_ = !e.isViewFromLeft());
      }
      var yr =
        ((vr.prototype.hasStart = function () {
          return this.startSet_;
        }),
        (vr.prototype.hasStartAfter = function () {
          return this.startAfterSet_;
        }),
        (vr.prototype.hasEndBefore = function () {
          return this.endBeforeSet_;
        }),
        (vr.prototype.isViewFromLeft = function () {
          return "" === this.viewFrom_
            ? this.startSet_
            : "l" === this.viewFrom_;
        }),
        (vr.prototype.getIndexStartValue = function () {
          return (
            g(this.startSet_, "Only valid if start has been set"),
            this.indexStartValue_
          );
        }),
        (vr.prototype.getIndexStartName = function () {
          return (
            g(this.startSet_, "Only valid if start has been set"),
            this.startNameSet_ ? this.indexStartName_ : De
          );
        }),
        (vr.prototype.hasEnd = function () {
          return this.endSet_;
        }),
        (vr.prototype.getIndexEndValue = function () {
          return (
            g(this.endSet_, "Only valid if end has been set"),
            this.indexEndValue_
          );
        }),
        (vr.prototype.getIndexEndName = function () {
          return (
            g(this.endSet_, "Only valid if end has been set"),
            this.endNameSet_ ? this.indexEndName_ : Ae
          );
        }),
        (vr.prototype.hasLimit = function () {
          return this.limitSet_;
        }),
        (vr.prototype.hasAnchoredLimit = function () {
          return this.limitSet_ && "" !== this.viewFrom_;
        }),
        (vr.prototype.getLimit = function () {
          return (
            g(this.limitSet_, "Only valid if limit has been set"), this.limit_
          );
        }),
        (vr.prototype.getIndex = function () {
          return this.index_;
        }),
        (vr.prototype.loadsAllData = function () {
          return !(this.startSet_ || this.endSet_ || this.limitSet_);
        }),
        (vr.prototype.isDefault = function () {
          return this.loadsAllData() && this.index_ === Rn;
        }),
        (vr.prototype.copy = function () {
          var e = new vr();
          return (
            (e.limitSet_ = this.limitSet_),
            (e.limit_ = this.limit_),
            (e.startSet_ = this.startSet_),
            (e.indexStartValue_ = this.indexStartValue_),
            (e.startNameSet_ = this.startNameSet_),
            (e.indexStartName_ = this.indexStartName_),
            (e.endSet_ = this.endSet_),
            (e.indexEndValue_ = this.indexEndValue_),
            (e.endNameSet_ = this.endNameSet_),
            (e.indexEndName_ = this.indexEndName_),
            (e.index_ = this.index_),
            (e.viewFrom_ = this.viewFrom_),
            e
          );
        }),
        vr);
      function vr() {
        (this.limitSet_ = !1),
          (this.startSet_ = !1),
          (this.startNameSet_ = !1),
          (this.startAfterSet_ = !1),
          (this.endSet_ = !1),
          (this.endNameSet_ = !1),
          (this.endBeforeSet_ = !1),
          (this.limit_ = 0),
          (this.viewFrom_ = ""),
          (this.indexStartValue_ = null),
          (this.indexStartName_ = ""),
          (this.indexEndValue_ = null),
          (this.indexEndName_ = ""),
          (this.index_ = Rn);
      }
      function gr(e, t, n) {
        e = e.copy();
        return (
          (e.startSet_ = !0),
          (e.indexStartValue_ = t = void 0 === t ? null : t),
          null != n
            ? ((e.startNameSet_ = !0), (e.indexStartName_ = n))
            : ((e.startNameSet_ = !1), (e.indexStartName_ = "")),
          e
        );
      }
      function mr(e, t, n) {
        e = e.copy();
        return (
          (e.endSet_ = !0),
          (e.indexEndValue_ = t = void 0 === t ? null : t),
          void 0 !== n
            ? ((e.endNameSet_ = !0), (e.indexEndName_ = n))
            : ((e.endNameSet_ = !1), (e.indexEndName_ = "")),
          e
        );
      }
      function wr(e, t) {
        e = e.copy();
        return (e.index_ = t), e;
      }
      function Cr(e) {
        var t,
          n = {};
        return (
          e.isDefault() ||
            ((t =
              e.index_ === Rn
                ? "$priority"
                : e.index_ === rr
                ? "$value"
                : e.index_ === cn
                ? "$key"
                : (g(e.index_ instanceof $n, "Unrecognized index type!"),
                  e.index_.toString())),
            (n.orderBy = O(t)),
            e.startSet_ &&
              ((n.startAt = O(e.indexStartValue_)),
              e.startNameSet_ && (n.startAt += "," + O(e.indexStartName_))),
            e.endSet_ &&
              ((n.endAt = O(e.indexEndValue_)),
              e.endNameSet_ && (n.endAt += "," + O(e.indexEndName_))),
            e.limitSet_ &&
              (e.isViewFromLeft()
                ? (n.limitToFirst = e.limit_)
                : (n.limitToLast = e.limit_))),
          n
        );
      }
      function br(e) {
        var t,
          n = {};
        return (
          e.startSet_ &&
            ((n.sp = e.indexStartValue_),
            e.startNameSet_ && (n.sn = e.indexStartName_)),
          e.endSet_ &&
            ((n.ep = e.indexEndValue_),
            e.endNameSet_ && (n.en = e.indexEndName_)),
          e.limitSet_ &&
            ((n.l = e.limit_),
            "" === (t = e.viewFrom_) && (t = e.isViewFromLeft() ? "l" : "r"),
            (n.vf = t)),
          e.index_ !== Rn && (n.i = e.index_.toString()),
          n
        );
      }
      var Tr,
        Er =
          (n(Ir, (Tr = Tt)),
          (Ir.prototype.reportStats = function (e) {
            throw new Error("Method not implemented.");
          }),
          (Ir.getListenId_ = function (e, t) {
            return void 0 !== t
              ? "tag$" + t
              : (g(
                  e._queryParams.isDefault(),
                  "should have a tag if it's not a default query."
                ),
                e._path.toString());
          }),
          (Ir.prototype.listen = function (e, t, n, r) {
            var i = this,
              o = e._path.toString();
            this.log_("Listen called for " + o + " " + e._queryIdentifier);
            var s = Ir.getListenId_(e, n),
              a = {};
            this.listens_[s] = a;
            e = Cr(e._queryParams);
            this.restRequest_(o + ".json", e, function (e, t) {
              null === (e = 404 === e ? (t = null) : e) &&
                i.onDataUpdate_(o, t, !1, n),
                L(i.listens_, s) === a &&
                  r(
                    e
                      ? 401 === e
                        ? "permission_denied"
                        : "rest_error:" + e
                      : "ok",
                    null
                  );
            });
          }),
          (Ir.prototype.unlisten = function (e, t) {
            t = Ir.getListenId_(e, t);
            delete this.listens_[t];
          }),
          (Ir.prototype.get = function (e) {
            var n = this,
              t = Cr(e._queryParams),
              r = e._path.toString(),
              i = new w();
            return (
              this.restRequest_(r + ".json", t, function (e, t) {
                null === (e = 404 === e ? (t = null) : e)
                  ? (n.onDataUpdate_(r, t, !1, null), i.resolve(t))
                  : i.reject(new Error(t));
              }),
              i.promise
            );
          }),
          (Ir.prototype.refreshAuthToken = function (e) {}),
          (Ir.prototype.restRequest_ = function (i, o, s) {
            var a = this;
            return (
              ((o = void 0 === o ? {} : o).format = "export"),
              Promise.all([
                this.authTokenProvider_.getToken(!1),
                this.appCheckTokenProvider_.getToken(!1),
              ]).then(function (e) {
                var t = y(e, 2),
                  e = t[0],
                  t = t[1];
                e && e.accessToken && (o.auth = e.accessToken),
                  t && t.token && (o.ac = t.token);
                var n =
                  (a.repoInfo_.secure ? "https://" : "http://") +
                  a.repoInfo_.host +
                  i +
                  "?ns=" +
                  a.repoInfo_.namespace +
                  q(o);
                a.log_("Sending REST request for " + n);
                var r = new XMLHttpRequest();
                (r.onreadystatechange = function () {
                  if (s && 4 === r.readyState) {
                    a.log_(
                      "REST Response for " + n + " received. status:",
                      r.status,
                      "response:",
                      r.responseText
                    );
                    var e = null;
                    if (200 <= r.status && r.status < 300) {
                      try {
                        e = R(r.responseText);
                      } catch (e) {
                        Oe(
                          "Failed to parse JSON response for " +
                            n +
                            ": " +
                            r.responseText
                        );
                      }
                      s(null, e);
                    } else
                      401 !== r.status &&
                        404 !== r.status &&
                        Oe(
                          "Got unsuccessful REST response for " +
                            n +
                            " Status: " +
                            r.status
                        ),
                        s(r.status);
                    s = null;
                  }
                }),
                  r.open("GET", n, !0),
                  r.send();
              })
            );
          }),
          Ir);
      function Ir(e, t, n, r) {
        var i = Tr.call(this) || this;
        return (
          (i.repoInfo_ = e),
          (i.onDataUpdate_ = t),
          (i.authTokenProvider_ = n),
          (i.appCheckTokenProvider_ = r),
          (i.log_ = xe("p:rest:")),
          (i.listens_ = {}),
          i
        );
      }
      var Sr =
        ((kr.prototype.getNode = function (e) {
          return this.rootNode_.getChild(e);
        }),
        (kr.prototype.updateSnapshot = function (e, t) {
          this.rootNode_ = this.rootNode_.updateChild(e, t);
        }),
        kr);
      function kr() {
        this.rootNode_ = Bn.EMPTY_NODE;
      }
      function Pr() {
        return { value: null, children: new Map() };
      }
      function Nr(e, t, n) {
        var r;
        Bt(t)
          ? ((e.value = n), e.children.clear())
          : null !== e.value
          ? (e.value = e.value.updateChild(t, n))
          : ((r = Lt(t)),
            e.children.has(r) || e.children.set(r, Pr()),
            Nr(e.children.get(r), (t = Ft(t)), n));
      }
      function xr(e, n, r) {
        var i;
        null !== e.value
          ? r(n, e.value)
          : ((i = function (e, t) {
              xr(t, new Ot(n.toString() + "/" + e), r);
            }),
            e.children.forEach(function (e, t) {
              i(t, e);
            }));
      }
      var Rr =
        ((Or.prototype.get = function () {
          var e = this.collection_.get(),
            n = l({}, e);
          return (
            this.last_ &&
              Fe(this.last_, function (e, t) {
                n[e] = n[e] - t;
              }),
            (this.last_ = e),
            n
          );
        }),
        Or);
      function Or(e) {
        (this.collection_ = e), (this.last_ = null);
      }
      var Dr,
        Ar =
          ((Lr.prototype.reportStats_ = function () {
            var n = this,
              e = this.statsListener_.get(),
              r = {},
              i = !1;
            Fe(e, function (e, t) {
              0 < t && A(n.statsToReport_, e) && ((r[e] = t), (i = !0));
            }),
              i && this.server_.reportStats(r),
              We(
                this.reportStats_.bind(this),
                Math.floor(2 * Math.random() * 3e5)
              );
          }),
          Lr);
      function Lr(e, t) {
        (this.server_ = t),
          (this.statsToReport_ = {}),
          (this.statsListener_ = new Rr(e));
        e = 1e4 + 2e4 * Math.random();
        We(this.reportStats_.bind(this), Math.floor(e));
      }
      function Mr() {
        return { fromUser: !0, fromServer: !1, queryId: null, tagged: !1 };
      }
      function Fr() {
        return { fromUser: !1, fromServer: !0, queryId: null, tagged: !1 };
      }
      function qr(e) {
        return { fromUser: !1, fromServer: !0, queryId: e, tagged: !0 };
      }
      ((Tt = Dr = Dr || {})[(Tt.OVERWRITE = 0)] = "OVERWRITE"),
        (Tt[(Tt.MERGE = 1)] = "MERGE"),
        (Tt[(Tt.ACK_USER_WRITE = 2)] = "ACK_USER_WRITE"),
        (Tt[(Tt.LISTEN_COMPLETE = 3)] = "LISTEN_COMPLETE");
      var Wr =
        ((jr.prototype.operationForChild = function (e) {
          if (Bt(this.path)) {
            if (null != this.affectedTree.value)
              return (
                g(
                  this.affectedTree.children.isEmpty(),
                  "affectedTree should not have overlapping affected paths."
                ),
                this
              );
            var t = this.affectedTree.subtree(new Ot(e));
            return new jr(At(), t, this.revert);
          }
          return (
            g(
              Lt(this.path) === e,
              "operationForChild called for unrelated child."
            ),
            new jr(Ft(this.path), this.affectedTree, this.revert)
          );
        }),
        jr);
      function jr(e, t, n) {
        (this.path = e),
          (this.affectedTree = t),
          (this.revert = n),
          (this.type = Dr.ACK_USER_WRITE),
          (this.source = Mr());
      }
      var Ur =
        ((Br.prototype.operationForChild = function (e) {
          return Bt(this.path)
            ? new Br(this.source, At())
            : new Br(this.source, Ft(this.path));
        }),
        Br);
      function Br(e, t) {
        (this.source = e), (this.path = t), (this.type = Dr.LISTEN_COMPLETE);
      }
      var Vr =
        ((zr.prototype.operationForChild = function (e) {
          return Bt(this.path)
            ? new zr(this.source, At(), this.snap.getImmediateChild(e))
            : new zr(this.source, Ft(this.path), this.snap);
        }),
        zr);
      function zr(e, t, n) {
        (this.source = e),
          (this.path = t),
          (this.snap = n),
          (this.type = Dr.OVERWRITE);
      }
      var Hr =
        ((Qr.prototype.operationForChild = function (e) {
          if (Bt(this.path)) {
            var t = this.children.subtree(new Ot(e));
            return t.isEmpty()
              ? null
              : t.value
              ? new Vr(this.source, At(), t.value)
              : new Qr(this.source, At(), t);
          }
          return (
            g(
              Lt(this.path) === e,
              "Can't get a merge for a child not on the path of the operation"
            ),
            new Qr(this.source, Ft(this.path), this.children)
          );
        }),
        (Qr.prototype.toString = function () {
          return (
            "Operation(" +
            this.path +
            ": " +
            this.source.toString() +
            " merge: " +
            this.children.toString() +
            ")"
          );
        }),
        Qr);
      function Qr(e, t, n) {
        (this.source = e),
          (this.path = t),
          (this.children = n),
          (this.type = Dr.MERGE);
      }
      var Yr =
        ((Kr.prototype.isFullyInitialized = function () {
          return this.fullyInitialized_;
        }),
        (Kr.prototype.isFiltered = function () {
          return this.filtered_;
        }),
        (Kr.prototype.isCompleteForPath = function (e) {
          if (Bt(e)) return this.isFullyInitialized() && !this.filtered_;
          e = Lt(e);
          return this.isCompleteForChild(e);
        }),
        (Kr.prototype.isCompleteForChild = function (e) {
          return (
            (this.isFullyInitialized() && !this.filtered_) ||
            this.node_.hasChild(e)
          );
        }),
        (Kr.prototype.getNode = function () {
          return this.node_;
        }),
        Kr);
      function Kr(e, t, n) {
        (this.node_ = e), (this.fullyInitialized_ = t), (this.filtered_ = n);
      }
      var Gr,
        $r = function (e) {
          (this.query_ = e),
            (this.index_ = this.query_._queryParams.getIndex());
        };
      function Jr(n, e, t, r) {
        var i = [],
          o = [];
        return (
          e.forEach(function (e) {
            var t;
            "child_changed" === e.type &&
              n.index_.indexedValueChanged(e.oldSnap, e.snapshotNode) &&
              o.push(
                ((t = e.childName),
                {
                  type: "child_moved",
                  snapshotNode: e.snapshotNode,
                  childName: t,
                })
              );
          }),
          Xr(n, i, "child_removed", e, r, t),
          Xr(n, i, "child_added", e, r, t),
          Xr(n, i, "child_moved", o, r, t),
          Xr(n, i, "child_changed", e, r, t),
          Xr(n, i, "value", e, r, t),
          i
        );
      }
      function Xr(o, s, t, e, a, u) {
        e = e.filter(function (e) {
          return e.type === t;
        });
        e.sort(function (e, t) {
          return (function (e, t, n) {
            if (null == t.childName || null == n.childName)
              throw m("Should only compare child_ events.");
            (t = new on(t.childName, t.snapshotNode)),
              (n = new on(n.childName, n.snapshotNode));
            return e.index_.compare(t, n);
          })(o, e, t);
        }),
          e.forEach(function (t) {
            var e,
              n,
              r,
              i =
                ((e = o),
                (r = u),
                "value" === (n = t).type ||
                  "child_removed" === n.type ||
                  (n.prevName = r.getPredecessorChildName(
                    n.childName,
                    n.snapshotNode,
                    e.index_
                  )),
                n);
            a.forEach(function (e) {
              e.respondsTo(t.type) && s.push(e.createEvent(i, o.query_));
            });
          });
      }
      function Zr(e, t) {
        return { eventCache: e, serverCache: t };
      }
      function ei(e, t, n, r) {
        return Zr(new Yr(t, n, r), e.serverCache);
      }
      function ti(e, t, n, r) {
        return Zr(e.eventCache, new Yr(t, n, r));
      }
      function ni(e) {
        return e.eventCache.isFullyInitialized()
          ? e.eventCache.getNode()
          : null;
      }
      function ri(e) {
        return e.serverCache.isFullyInitialized()
          ? e.serverCache.getNode()
          : null;
      }
      var ii =
        ((oi.fromObject = function (e) {
          var n = new oi(null);
          return (
            Fe(e, function (e, t) {
              n = n.set(new Ot(e), t);
            }),
            n
          );
        }),
        (oi.prototype.isEmpty = function () {
          return null === this.value && this.children.isEmpty();
        }),
        (oi.prototype.findRootMostMatchingPathAndValue = function (e, t) {
          if (null != this.value && t(this.value))
            return { path: At(), value: this.value };
          if (Bt(e)) return null;
          var n = Lt(e),
            r = this.children.get(n);
          if (null === r) return null;
          t = r.findRootMostMatchingPathAndValue(Ft(e), t);
          return null == t
            ? null
            : { path: Ut(new Ot(n), t.path), value: t.value };
        }),
        (oi.prototype.findRootMostValueAndPath = function (e) {
          return this.findRootMostMatchingPathAndValue(e, function () {
            return !0;
          });
        }),
        (oi.prototype.subtree = function (e) {
          if (Bt(e)) return this;
          var t = Lt(e),
            t = this.children.get(t);
          return null !== t ? t.subtree(Ft(e)) : new oi(null);
        }),
        (oi.prototype.set = function (e, t) {
          if (Bt(e)) return new oi(t, this.children);
          var n = Lt(e),
            t = (this.children.get(n) || new oi(null)).set(Ft(e), t),
            t = this.children.insert(n, t);
          return new oi(this.value, t);
        }),
        (oi.prototype.remove = function (e) {
          if (Bt(e))
            return this.children.isEmpty()
              ? new oi(null)
              : new oi(null, this.children);
          var t = Lt(e),
            n = this.children.get(t);
          if (n) {
            (n = n.remove(Ft(e))),
              (e = void 0),
              (e = n.isEmpty()
                ? this.children.remove(t)
                : this.children.insert(t, n));
            return null === this.value && e.isEmpty()
              ? new oi(null)
              : new oi(this.value, e);
          }
          return this;
        }),
        (oi.prototype.get = function (e) {
          if (Bt(e)) return this.value;
          var t = Lt(e),
            t = this.children.get(t);
          return t ? t.get(Ft(e)) : null;
        }),
        (oi.prototype.setTree = function (e, t) {
          if (Bt(e)) return t;
          var n = Lt(e),
            e = (this.children.get(n) || new oi(null)).setTree(Ft(e), t),
            t = void 0,
            t = e.isEmpty()
              ? this.children.remove(n)
              : this.children.insert(n, e);
          return new oi(this.value, t);
        }),
        (oi.prototype.fold = function (e) {
          return this.fold_(At(), e);
        }),
        (oi.prototype.fold_ = function (n, r) {
          var i = {};
          return (
            this.children.inorderTraversal(function (e, t) {
              i[e] = t.fold_(Ut(n, e), r);
            }),
            r(n, this.value, i)
          );
        }),
        (oi.prototype.findOnPath = function (e, t) {
          return this.findOnPath_(e, At(), t);
        }),
        (oi.prototype.findOnPath_ = function (e, t, n) {
          var r = !!this.value && n(t, this.value);
          if (r) return r;
          if (Bt(e)) return null;
          var i = Lt(e),
            r = this.children.get(i);
          return r ? r.findOnPath_(Ft(e), Ut(t, i), n) : null;
        }),
        (oi.prototype.foreachOnPath = function (e, t) {
          return this.foreachOnPath_(e, At(), t);
        }),
        (oi.prototype.foreachOnPath_ = function (e, t, n) {
          if (Bt(e)) return this;
          this.value && n(t, this.value);
          var r = Lt(e),
            i = this.children.get(r);
          return i ? i.foreachOnPath_(Ft(e), Ut(t, r), n) : new oi(null);
        }),
        (oi.prototype.foreach = function (e) {
          this.foreach_(At(), e);
        }),
        (oi.prototype.foreach_ = function (n, r) {
          this.children.inorderTraversal(function (e, t) {
            t.foreach_(Ut(n, e), r);
          }),
            this.value && r(n, this.value);
        }),
        (oi.prototype.foreachChild = function (n) {
          this.children.inorderTraversal(function (e, t) {
            t.value && n(e, t.value);
          });
        }),
        oi);
      function oi(e, t) {
        void 0 === t && (t = Gr = Gr || new gn(ve)),
          (this.value = e),
          (this.children = t);
      }
      var si =
        ((ai.empty = function () {
          return new ai(new ii(null));
        }),
        ai);
      function ai(e) {
        this.writeTree_ = e;
      }
      function ui(e, t, n) {
        if (Bt(t)) return new si(new ii(n));
        var r = e.writeTree_.findRootMostValueAndPath(t);
        if (null != r) {
          var i = r.path,
            o = r.value,
            r = Vt(i, t),
            o = o.updateChild(r, n);
          return new si(e.writeTree_.set(i, o));
        }
        (n = new ii(n)), (n = e.writeTree_.setTree(t, n));
        return new si(n);
      }
      function li(e, n, t) {
        var r = e;
        return (
          Fe(t, function (e, t) {
            r = ui(r, Ut(n, e), t);
          }),
          r
        );
      }
      function hi(e, t) {
        if (Bt(t)) return si.empty();
        t = e.writeTree_.setTree(t, new ii(null));
        return new si(t);
      }
      function ci(e, t) {
        return null != pi(e, t);
      }
      function pi(e, t) {
        var n = e.writeTree_.findRootMostValueAndPath(t);
        return null != n
          ? e.writeTree_.get(n.path).getChild(Vt(n.path, t))
          : null;
      }
      function di(e) {
        var n = [],
          t = e.writeTree_.value;
        return (
          null != t
            ? t.isLeafNode() ||
              t.forEachChild(Rn, function (e, t) {
                n.push(new on(e, t));
              })
            : e.writeTree_.children.inorderTraversal(function (e, t) {
                null != t.value && n.push(new on(e, t.value));
              }),
          n
        );
      }
      function fi(e, t) {
        if (Bt(t)) return e;
        var n = pi(e, t);
        return new si(null != n ? new ii(n) : e.writeTree_.subtree(t));
      }
      function _i(e) {
        return e.writeTree_.isEmpty();
      }
      function yi(e, t) {
        return (function n(r, e, i) {
          {
            if (null != e.value) return i.updateChild(r, e.value);
            var o = null;
            return (
              e.children.inorderTraversal(function (e, t) {
                ".priority" === e
                  ? (g(
                      null !== t.value,
                      "Priority writes must always be leaf nodes"
                    ),
                    (o = t.value))
                  : (i = n(Ut(r, e), t, i));
              }),
              (i =
                !i.getChild(r).isEmpty() && null !== o
                  ? i.updateChild(Ut(r, ".priority"), o)
                  : i)
            );
          }
        })(At(), e.writeTree_, t);
      }
      function vi(e, t) {
        return Ni(t, e);
      }
      function gi(t, n) {
        var e = t.allWrites.findIndex(function (e) {
          return e.writeId === n;
        });
        g(0 <= e, "removeWrite called with nonexistent writeId.");
        var r = t.allWrites[e];
        t.allWrites.splice(e, 1);
        for (
          var i, o = r.visible, s = !1, a = t.allWrites.length - 1;
          o && 0 <= a;

        ) {
          var u = t.allWrites[a];
          u.visible &&
            (e <= a &&
            (function (e, t) {
              {
                if (e.snap) return Qt(e.path, t);
                for (var n in e.children)
                  if (e.children.hasOwnProperty(n) && Qt(Ut(e.path, n), t))
                    return !0;
                return !1;
              }
            })(u, r.path)
              ? (o = !1)
              : Qt(r.path, u.path) && (s = !0)),
            a--;
        }
        return (
          !!o &&
          (s
            ? (((i = t).visibleWrites = wi(i.allWrites, mi, At())),
              0 < i.allWrites.length
                ? (i.lastWriteId = i.allWrites[i.allWrites.length - 1].writeId)
                : (i.lastWriteId = -1))
            : r.snap
            ? (t.visibleWrites = hi(t.visibleWrites, r.path))
            : Fe(r.children, function (e) {
                t.visibleWrites = hi(t.visibleWrites, Ut(r.path, e));
              }),
          !0)
        );
      }
      function mi(e) {
        return e.visible;
      }
      function wi(e, t, n) {
        for (var r = si.empty(), i = 0; i < e.length; ++i) {
          var o = e[i];
          if (t(o)) {
            var s = o.path,
              a = void 0;
            if (o.snap)
              Qt(n, s)
                ? (r = ui(r, (a = Vt(n, s)), o.snap))
                : Qt(s, n) &&
                  ((a = Vt(s, n)), (r = ui(r, At(), o.snap.getChild(a))));
            else {
              if (!o.children)
                throw m("WriteRecord should have .snap or .children");
              Qt(n, s)
                ? (r = li(r, (a = Vt(n, s)), o.children))
                : Qt(s, n) &&
                  (Bt((a = Vt(s, n)))
                    ? (r = li(r, At(), o.children))
                    : (o = L(o.children, Lt(a))) &&
                      ((a = o.getChild(Ft(a))), (r = ui(r, At(), a))));
            }
          }
        }
        return r;
      }
      function Ci(e, t, n, r, i) {
        if (r || i) {
          var o = fi(e.visibleWrites, t);
          if (!i && _i(o)) return n;
          if (i || null != n || ci(o, At()))
            return yi(
              wi(
                e.allWrites,
                function (e) {
                  return (
                    (e.visible || i) &&
                    (!r || !~r.indexOf(e.writeId)) &&
                    (Qt(e.path, t) || Qt(t, e.path))
                  );
                },
                t
              ),
              n || Bn.EMPTY_NODE
            );
          return null;
        }
        o = pi(e.visibleWrites, t);
        if (null != o) return o;
        e = fi(e.visibleWrites, t);
        return _i(e)
          ? n
          : null != n || ci(e, At())
          ? yi(e, n || Bn.EMPTY_NODE)
          : null;
      }
      function bi(e, t, n, r) {
        return Ci(e.writeTree, e.treePath, t, n, r);
      }
      function Ti(e, t) {
        return (function (e, t, n) {
          var r = Bn.EMPTY_NODE,
            i = pi(e.visibleWrites, t);
          if (i)
            return (
              i.isLeafNode() ||
                i.forEachChild(Rn, function (e, t) {
                  r = r.updateImmediateChild(e, t);
                }),
              r
            );
          if (n) {
            var o = fi(e.visibleWrites, t);
            return (
              n.forEachChild(Rn, function (e, t) {
                t = yi(fi(o, new Ot(e)), t);
                r = r.updateImmediateChild(e, t);
              }),
              di(o).forEach(function (e) {
                r = r.updateImmediateChild(e.name, e.node);
              }),
              r
            );
          }
          return (
            di(fi(e.visibleWrites, t)).forEach(function (e) {
              r = r.updateImmediateChild(e.name, e.node);
            }),
            r
          );
        })(e.writeTree, e.treePath, t);
      }
      function Ei(e, t, n, r) {
        return (
          (i = e.writeTree),
          (e = e.treePath),
          (t = t),
          (r = r),
          g(
            n || r,
            "Either existingEventSnap or existingServerSnap must exist"
          ),
          (e = Ut(e, t)),
          ci(i.visibleWrites, e)
            ? null
            : _i((e = fi(i.visibleWrites, e)))
            ? r.getChild(t)
            : yi(e, r.getChild(t))
        );
        var i;
      }
      function Ii(e, t) {
        return (
          (n = e.writeTree), (t = Ut(e.treePath, t)), pi(n.visibleWrites, t)
        );
        var n;
      }
      function Si(e, t, n, r, i, o) {
        return (function (e, t, n, r, i, o, s) {
          var a,
            e = fi(e.visibleWrites, t);
          if (null != (t = pi(e, At()))) a = t;
          else {
            if (null == n) return [];
            a = yi(e, n);
          }
          if ((a = a.withIndex(s)).isEmpty() || a.isLeafNode()) return [];
          for (
            var u = [],
              l = s.getCompare(),
              h = o ? a.getReverseIteratorFrom(r, s) : a.getIteratorFrom(r, s),
              c = h.getNext();
            c && u.length < i;

          )
            0 !== l(c, r) && u.push(c), (c = h.getNext());
          return u;
        })(e.writeTree, e.treePath, t, n, r, i, o);
      }
      function ki(e, t, n) {
        return (
          (r = e.writeTree),
          (i = e.treePath),
          (e = n),
          (t = Ut(i, (n = t))),
          null != (i = pi(r.visibleWrites, t))
            ? i
            : e.isCompleteForChild(n)
            ? yi(fi(r.visibleWrites, t), e.getNode().getImmediateChild(n))
            : null
        );
        var r, i;
      }
      function Pi(e, t) {
        return Ni(Ut(e.treePath, t), e.writeTree);
      }
      function Ni(e, t) {
        return { treePath: e, writeTree: t };
      }
      var xi =
        ((Ri.prototype.trackChildChange = function (e) {
          var t = e.type,
            n = e.childName;
          g(
            "child_added" === t ||
              "child_changed" === t ||
              "child_removed" === t,
            "Only child changes supported for tracking"
          ),
            g(
              ".priority" !== n,
              "Only non-priority child changes can be tracked."
            );
          var r = this.changeMap.get(n);
          if (r) {
            var i = r.type;
            if ("child_added" === t && "child_removed" === i)
              this.changeMap.set(n, lr(n, e.snapshotNode, r.snapshotNode));
            else if ("child_removed" === t && "child_added" === i)
              this.changeMap.delete(n);
            else if ("child_removed" === t && "child_changed" === i)
              this.changeMap.set(n, ur(n, r.oldSnap));
            else if ("child_changed" === t && "child_added" === i)
              this.changeMap.set(n, ar(n, e.snapshotNode));
            else {
              if ("child_changed" !== t || "child_changed" !== i)
                throw m(
                  "Illegal combination of changes: " +
                    e +
                    " occurred after " +
                    r
                );
              this.changeMap.set(n, lr(n, e.snapshotNode, r.oldSnap));
            }
          } else this.changeMap.set(n, e);
        }),
        (Ri.prototype.getChanges = function () {
          return Array.from(this.changeMap.values());
        }),
        Ri);
      function Ri() {
        this.changeMap = new Map();
      }
      function Oi() {}
      var Di = new ((Oi.prototype.getCompleteChild = function (e) {
          return null;
        }),
        (Oi.prototype.getChildAfterChild = function (e, t, n) {
          return null;
        }),
        Oi)(),
        Ai =
          ((Li.prototype.getCompleteChild = function (e) {
            var t = this.viewCache_.eventCache;
            if (t.isCompleteForChild(e))
              return t.getNode().getImmediateChild(e);
            t =
              null != this.optCompleteServerCache_
                ? new Yr(this.optCompleteServerCache_, !0, !1)
                : this.viewCache_.serverCache;
            return ki(this.writes_, e, t);
          }),
          (Li.prototype.getChildAfterChild = function (e, t, n) {
            var r =
                null != this.optCompleteServerCache_
                  ? this.optCompleteServerCache_
                  : ri(this.viewCache_),
              e = Si(this.writes_, r, t, 1, n, e);
            return 0 === e.length ? null : e[0];
          }),
          Li);
      function Li(e, t, n) {
        void 0 === n && (n = null),
          (this.writes_ = e),
          (this.viewCache_ = t),
          (this.optCompleteServerCache_ = n);
      }
      function Mi(e, t, n, r, i) {
        var o,
          s,
          a,
          u,
          l,
          h,
          c,
          p,
          d = new xi();
        if (n.type === Dr.OVERWRITE)
          var f = n,
            _ = f.source.fromUser
              ? Wi(e, t, f.path, f.snap, r, i, d)
              : (g(f.source.fromServer, "Unknown source."),
                (o =
                  f.source.tagged ||
                  (t.serverCache.isFiltered() && !Bt(f.path))),
                qi(e, t, f.path, f.snap, r, i, o, d));
        else if (n.type === Dr.MERGE) {
          var y = n;
          _ = y.source.fromUser
            ? ((s = e),
              (a = t),
              (u = y.path),
              (f = y.children),
              (l = r),
              (h = i),
              (c = d),
              (p = a),
              f.foreach(function (e, t) {
                e = Ut(u, e);
                ji(a, Lt(e)) && (p = Wi(s, p, e, t, l, h, c));
              }),
              f.foreach(function (e, t) {
                e = Ut(u, e);
                ji(a, Lt(e)) || (p = Wi(s, p, e, t, l, h, c));
              }),
              p)
            : (g(y.source.fromServer, "Unknown source."),
              (o = y.source.tagged || t.serverCache.isFiltered()),
              Bi(e, t, y.path, y.children, r, i, o, d));
        } else if (n.type === Dr.ACK_USER_WRITE) {
          var v = n;
          _ = v.revert
            ? (function (e, t, n, r, i, o) {
                var s;
                {
                  if (null != Ii(r, n)) return t;
                  var a,
                    u,
                    l = new Ai(r, t, i),
                    h = t.eventCache.getNode(),
                    i = void 0;
                  return (
                    Bt(n) || ".priority" === Lt(n)
                      ? ((u = void 0),
                        (u = t.serverCache.isFullyInitialized()
                          ? bi(r, ri(t))
                          : ((a = t.serverCache.getNode()),
                            g(
                              a instanceof Bn,
                              "serverChildren would be complete if leaf node"
                            ),
                            Ti(r, a))),
                        (i = e.filter.updateFullNode(h, u, o)))
                      : ((a = Lt(n)),
                        null == (u = ki(r, a, t.serverCache)) &&
                          t.serverCache.isCompleteForChild(a) &&
                          (u = h.getImmediateChild(a)),
                        (i =
                          null != u
                            ? e.filter.updateChild(h, a, u, Ft(n), l, o)
                            : t.eventCache.getNode().hasChild(a)
                            ? e.filter.updateChild(
                                h,
                                a,
                                Bn.EMPTY_NODE,
                                Ft(n),
                                l,
                                o
                              )
                            : h).isEmpty() &&
                          t.serverCache.isFullyInitialized() &&
                          (s = bi(r, ri(t))).isLeafNode() &&
                          (i = e.filter.updateFullNode(i, s, o))),
                    (s =
                      t.serverCache.isFullyInitialized() ||
                      null != Ii(r, At())),
                    ei(t, i, s, e.filter.filtersNodes())
                  );
                }
              })(e, t, v.path, r, i, d)
            : (function (e, t, r, n, i, o, s) {
                if (null != Ii(i, r)) return t;
                var a = t.serverCache.isFiltered(),
                  u = t.serverCache;
                {
                  if (null != n.value) {
                    if (
                      (Bt(r) && u.isFullyInitialized()) ||
                      u.isCompleteForPath(r)
                    )
                      return qi(e, t, r, u.getNode().getChild(r), i, o, a, s);
                    if (Bt(r)) {
                      var l = new ii(null);
                      return (
                        u.getNode().forEachChild(cn, function (e, t) {
                          l = l.set(new Ot(e), t);
                        }),
                        Bi(e, t, r, l, i, o, a, s)
                      );
                    }
                    return t;
                  }
                  var h = new ii(null);
                  return (
                    n.foreach(function (e, t) {
                      var n = Ut(r, e);
                      u.isCompleteForPath(n) &&
                        (h = h.set(e, u.getNode().getChild(n)));
                    }),
                    Bi(e, t, r, h, i, o, a, s)
                  );
                }
              })(e, t, v.path, v.affectedTree, r, i, d);
        } else {
          if (n.type !== Dr.LISTEN_COMPLETE)
            throw m("Unknown operation type: " + n.type);
          (v = e),
            (i = n.path),
            (e = r),
            (n = d),
            (r = ti(
              t,
              (r = t.serverCache).getNode(),
              r.isFullyInitialized() || Bt(i),
              r.isFiltered()
            )),
            (_ = Fi(v, r, i, e, Di, n));
        }
        d = d.getChanges();
        return (
          (function (e, t, n) {
            var r = t.eventCache;
            {
              var i, o;
              r.isFullyInitialized() &&
                ((i = r.getNode().isLeafNode() || r.getNode().isEmpty()),
                (o = ni(e)),
                (0 < n.length ||
                  !e.eventCache.isFullyInitialized() ||
                  (i && !r.getNode().equals(o)) ||
                  !r.getNode().getPriority().equals(o.getPriority())) &&
                  n.push(sr(ni(t))));
            }
          })(t, _, d),
          { viewCache: _, changes: d }
        );
      }
      function Fi(e, t, n, r, i, o) {
        var s = t.eventCache;
        if (null != Ii(r, n)) return t;
        var a,
          u,
          l,
          h,
          c = void 0,
          p = void 0;
        return (
          (c = Bt(n)
            ? (g(
                t.serverCache.isFullyInitialized(),
                "If change path is empty, we must have complete server data"
              ),
              t.serverCache.isFiltered()
                ? ((a = Ti(r, (a = ri(t)) instanceof Bn ? a : Bn.EMPTY_NODE)),
                  e.filter.updateFullNode(t.eventCache.getNode(), a, o))
                : ((u = bi(r, ri(t))),
                  e.filter.updateFullNode(t.eventCache.getNode(), u, o)))
            : ".priority" === (u = Lt(n))
            ? (g(
                1 === Mt(n),
                "Can't have a priority with additional path components"
              ),
              null !=
              (h = Ei(r, n, (l = s.getNode()), (p = t.serverCache.getNode())))
                ? e.filter.updatePriority(l, h)
                : s.getNode())
            : ((l = Ft(n)),
              (h = void 0),
              null !=
              (h = s.isCompleteForChild(u)
                ? ((p = t.serverCache.getNode()),
                  null != (p = Ei(r, n, s.getNode(), p))
                    ? s.getNode().getImmediateChild(u).updateChild(l, p)
                    : s.getNode().getImmediateChild(u))
                : ki(r, u, t.serverCache))
                ? e.filter.updateChild(s.getNode(), u, h, l, i, o)
                : s.getNode())),
          ei(t, c, s.isFullyInitialized() || Bt(n), e.filter.filtersNodes())
        );
      }
      function qi(e, t, n, r, i, o, s, a) {
        var u = t.serverCache,
          l = s ? e.filter : e.filter.getIndexedFilter();
        if (Bt(n)) c = l.updateFullNode(u.getNode(), r, null);
        else if (l.filtersNodes() && !u.isFiltered())
          var h = u.getNode().updateChild(n, r),
            c = l.updateFullNode(u.getNode(), h, null);
        else {
          s = Lt(n);
          if (!u.isCompleteForPath(n) && 1 < Mt(n)) return t;
          (h = Ft(n)), (r = u.getNode().getImmediateChild(s).updateChild(h, r));
          c =
            ".priority" === s
              ? l.updatePriority(u.getNode(), r)
              : l.updateChild(u.getNode(), s, r, h, Di, null);
        }
        l = ti(t, c, u.isFullyInitialized() || Bt(n), l.filtersNodes());
        return Fi(e, l, n, i, new Ai(i, l, o), a);
      }
      function Wi(e, t, n, r, i, o, s) {
        var a,
          u,
          l = t.eventCache,
          h = new Ai(i, t, o);
        return Bt(n)
          ? ((u = e.filter.updateFullNode(t.eventCache.getNode(), r, s)),
            ei(t, u, !0, e.filter.filtersNodes()))
          : ".priority" === (a = Lt(n))
          ? ((u = e.filter.updatePriority(t.eventCache.getNode(), r)),
            ei(t, u, l.isFullyInitialized(), l.isFiltered()))
          : ((i = Ft(n)),
            (o = l.getNode().getImmediateChild(a)),
            (u = void 0),
            (u = Bt(i)
              ? r
              : null != (n = h.getCompleteChild(a))
              ? ".priority" === qt(i) && n.getChild(jt(i)).isEmpty()
                ? n
                : n.updateChild(i, r)
              : Bn.EMPTY_NODE),
            o.equals(u)
              ? t
              : ei(
                  t,
                  e.filter.updateChild(l.getNode(), a, u, i, h, s),
                  l.isFullyInitialized(),
                  e.filter.filtersNodes()
                ));
      }
      function ji(e, t) {
        return e.eventCache.isCompleteForChild(t);
      }
      function Ui(e, n, t) {
        return (
          t.foreach(function (e, t) {
            n = n.updateChild(e, t);
          }),
          n
        );
      }
      function Bi(r, i, e, t, o, s, a, u) {
        if (
          i.serverCache.getNode().isEmpty() &&
          !i.serverCache.isFullyInitialized()
        )
          return i;
        var l = i,
          t = Bt(e) ? t : new ii(null).setTree(e, t),
          h = i.serverCache.getNode();
        return (
          t.children.inorderTraversal(function (e, t) {
            h.hasChild(e) &&
              ((t = Ui(0, i.serverCache.getNode().getImmediateChild(e), t)),
              (l = qi(r, l, new Ot(e), t, o, s, a, u)));
          }),
          t.children.inorderTraversal(function (e, t) {
            var n = !i.serverCache.isCompleteForChild(e) && void 0 === t.value;
            h.hasChild(e) ||
              n ||
              ((t = Ui(0, i.serverCache.getNode().getImmediateChild(e), t)),
              (l = qi(r, l, new Ot(e), t, o, s, a, u)));
          }),
          l
        );
      }
      var Vi,
        zi =
          (Object.defineProperty(Hi.prototype, "query", {
            get: function () {
              return this.query_;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Hi);
      function Hi(e, t) {
        (this.query_ = e), (this.eventRegistrations_ = []);
        var n = this.query_._queryParams,
          r = new hr(n.getIndex()),
          i = (o = n).loadsAllData()
            ? new hr(o.getIndex())
            : new (o.hasLimit() ? fr : pr)(o);
        this.processor_ = { filter: i };
        var e = t.serverCache,
          n = t.eventCache,
          o = r.updateFullNode(Bn.EMPTY_NODE, e.getNode(), null),
          t = i.updateFullNode(Bn.EMPTY_NODE, n.getNode(), null),
          r = new Yr(o, e.isFullyInitialized(), r.filtersNodes()),
          i = new Yr(t, n.isFullyInitialized(), i.filtersNodes());
        (this.viewCache_ = Zr(i, r)),
          (this.eventGenerator_ = new $r(this.query_));
      }
      function Qi(e) {
        return 0 === e.eventRegistrations_.length;
      }
      function Yi(e, t, n) {
        var r,
          i = [];
        if (
          (n &&
            (g(null == t, "A cancel should cancel all event registrations."),
            (r = e.query._path),
            e.eventRegistrations_.forEach(function (e) {
              e = e.createCancelEvent(n, r);
              e && i.push(e);
            })),
          t)
        ) {
          for (var o = [], s = 0; s < e.eventRegistrations_.length; ++s) {
            var a = e.eventRegistrations_[s];
            if (a.matches(t)) {
              if (t.hasAnyCallback()) {
                o = o.concat(e.eventRegistrations_.slice(s + 1));
                break;
              }
            } else o.push(a);
          }
          e.eventRegistrations_ = o;
        } else e.eventRegistrations_ = [];
        return i;
      }
      function Ki(e, t, n, r) {
        t.type === Dr.MERGE &&
          null !== t.source.queryId &&
          (g(
            ri(e.viewCache_),
            "We should always have a full cache before handling merges"
          ),
          g(
            ni(e.viewCache_),
            "Missing event cache, even though we have a server cache"
          ));
        var i = e.viewCache_,
          t = Mi(e.processor_, i, t, n, r);
        return (
          (n = e.processor_),
          (r = t.viewCache),
          g(
            r.eventCache.getNode().isIndexed(n.filter.getIndex()),
            "Event snap not indexed"
          ),
          g(
            r.serverCache.getNode().isIndexed(n.filter.getIndex()),
            "Server snap not indexed"
          ),
          g(
            t.viewCache.serverCache.isFullyInitialized() ||
              !i.serverCache.isFullyInitialized(),
            "Once a server snap is complete, it should never go back"
          ),
          (e.viewCache_ = t.viewCache),
          Gi(e, t.changes, t.viewCache.eventCache.getNode(), null)
        );
      }
      function Gi(e, t, n, r) {
        r = r ? [r] : e.eventRegistrations_;
        return Jr(e.eventGenerator_, t, n, r);
      }
      var $i,
        Ji = function () {
          this.views = new Map();
        };
      function Xi(e, t, n, r) {
        var i,
          o,
          s = t.source.queryId;
        if (null !== s) {
          var a = e.views.get(s);
          return (
            g(null != a, "SyncTree gave us an op for an invalid query."),
            Ki(a, t, n, r)
          );
        }
        var u = [];
        try {
          for (var l = _(e.views.values()), h = l.next(); !h.done; h = l.next())
            (a = h.value), (u = u.concat(Ki(a, t, n, r)));
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            h && !h.done && (o = l.return) && o.call(l);
          } finally {
            if (i) throw i.error;
          }
        }
        return u;
      }
      function Zi(e, t, n, r, i) {
        var o = t._queryIdentifier,
          e = e.views.get(o);
        if (e) return e;
        (o = bi(n, i ? r : null)),
          (e = !1),
          (e = !!o || ((o = r instanceof Bn ? Ti(n, r) : Bn.EMPTY_NODE), !1)),
          (i = Zr(new Yr(o, e, !1), new Yr(r, i, !1)));
        return new zi(t, i);
      }
      function eo(e, t, n, r, i, o) {
        var s,
          o = Zi(e, t, r, i, o);
        return (
          e.views.has(t._queryIdentifier) || e.views.set(t._queryIdentifier, o),
          o.eventRegistrations_.push(n),
          (t = n),
          (o = (n = o).viewCache_.eventCache),
          (s = []),
          o.getNode().isLeafNode() ||
            o.getNode().forEachChild(Rn, function (e, t) {
              s.push(ar(e, t));
            }),
          o.isFullyInitialized() && s.push(sr(o.getNode())),
          Gi(n, s, o.getNode(), t)
        );
      }
      function to(e, t, n, r) {
        var i,
          o,
          s = t._queryIdentifier,
          a = [],
          u = [],
          l = so(e);
        if ("default" === s)
          try {
            for (
              var h = _(e.views.entries()), c = h.next();
              !c.done;
              c = h.next()
            ) {
              var p = y(c.value, 2),
                d = p[0],
                f = p[1],
                u = u.concat(Yi(f, n, r));
              Qi(f) &&
                (e.views.delete(d),
                f.query._queryParams.loadsAllData() || a.push(f.query));
            }
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              c && !c.done && (o = h.return) && o.call(h);
            } finally {
              if (i) throw i.error;
            }
          }
        else
          (f = e.views.get(s)) &&
            ((u = u.concat(Yi(f, n, r))),
            Qi(f) &&
              (e.views.delete(s),
              f.query._queryParams.loadsAllData() || a.push(f.query)));
        return (
          l &&
            !so(e) &&
            a.push(
              (g(Vi, "Reference.ts has not been loaded"),
              new Vi(t._repo, t._path))
            ),
          { removed: a, events: u }
        );
      }
      function no(e) {
        var t,
          n,
          r = [];
        try {
          for (
            var i = _(e.views.values()), o = i.next();
            !o.done;
            o = i.next()
          ) {
            var s = o.value;
            s.query._queryParams.loadsAllData() || r.push(s);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i);
          } finally {
            if (t) throw t.error;
          }
        }
        return r;
      }
      function ro(e, t) {
        var n,
          r,
          i,
          o,
          s,
          a = null;
        try {
          for (var u = _(e.views.values()), l = u.next(); !l.done; l = u.next())
            var h = l.value,
              a =
                a ||
                ((o = t),
                (s = void 0),
                (s = ri((i = h).viewCache_)) &&
                (i.query._queryParams.loadsAllData() ||
                  (!Bt(o) && !s.getImmediateChild(Lt(o)).isEmpty()))
                  ? s.getChild(o)
                  : null);
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            l && !l.done && (r = u.return) && r.call(u);
          } finally {
            if (n) throw n.error;
          }
        }
        return a;
      }
      function io(e, t) {
        if (t._queryParams.loadsAllData()) return ao(e);
        t = t._queryIdentifier;
        return e.views.get(t);
      }
      function oo(e, t) {
        return null != io(e, t);
      }
      function so(e) {
        return null != ao(e);
      }
      function ao(e) {
        var t, n;
        try {
          for (
            var r = _(e.views.values()), i = r.next();
            !i.done;
            i = r.next()
          ) {
            var o = i.value;
            if (o.query._queryParams.loadsAllData()) return o;
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            i && !i.done && (n = r.return) && n.call(r);
          } finally {
            if (t) throw t.error;
          }
        }
        return null;
      }
      var uo = 1,
        lo = function (e) {
          (this.listenProvider_ = e),
            (this.syncPointTree_ = new ii(null)),
            (this.pendingWriteTree_ = {
              visibleWrites: si.empty(),
              allWrites: [],
              lastWriteId: -1,
            }),
            (this.tagToQueryMap = new Map()),
            (this.queryToTagMap = new Map());
        };
      function ho(e, t, n, r, i) {
        var o, s, a, u;
        return (
          (o = e.pendingWriteTree_),
          (s = t),
          (a = n),
          (u = i),
          g(
            (r = r) > o.lastWriteId,
            "Stacking an older write on top of newer ones"
          ),
          o.allWrites.push({
            path: s,
            snap: a,
            writeId: r,
            visible: (u = void 0 === u ? !0 : u),
          }),
          u && (o.visibleWrites = ui(o.visibleWrites, s, a)),
          (o.lastWriteId = r),
          i ? mo(e, new Vr(Mr(), t, n)) : []
        );
      }
      function co(e, t, n, r) {
        var i, o, s;
        (i = e.pendingWriteTree_),
          (o = t),
          (s = n),
          g(
            (r = r) > i.lastWriteId,
            "Stacking an older merge on top of newer ones"
          ),
          i.allWrites.push({ path: o, children: s, writeId: r, visible: !0 }),
          (i.visibleWrites = li(i.visibleWrites, o, s)),
          (i.lastWriteId = r);
        n = ii.fromObject(n);
        return mo(e, new Hr(Mr(), t, n));
      }
      function po(e, t, n) {
        void 0 === n && (n = !1);
        var r = (function (e, t) {
          for (var n = 0; n < e.allWrites.length; n++) {
            var r = e.allWrites[n];
            if (r.writeId === t) return r;
          }
          return null;
        })(e.pendingWriteTree_, t);
        if (gi(e.pendingWriteTree_, t)) {
          var i = new ii(null);
          return (
            null != r.snap
              ? (i = i.set(At(), !0))
              : Fe(r.children, function (e) {
                  i = i.set(new Ot(e), !0);
                }),
            mo(e, new Wr(r.path, i, n))
          );
        }
        return [];
      }
      function fo(e, t, n) {
        return mo(e, new Vr(Fr(), t, n));
      }
      function _o(n, e, t, r) {
        var i = e._path,
          o = n.syncPointTree_.get(i),
          s = [];
        if (o && ("default" === e._queryIdentifier || oo(o, e))) {
          var a = to(o, e, t, r);
          0 === o.views.size && (n.syncPointTree_ = n.syncPointTree_.remove(i));
          (t = a.removed),
            (s = a.events),
            (o =
              -1 !==
              t.findIndex(function (e) {
                return e._queryParams.loadsAllData();
              })),
            (a = n.syncPointTree_.findOnPath(i, function (e, t) {
              return so(t);
            }));
          if (o && !a) {
            i = n.syncPointTree_.subtree(i);
            if (!i.isEmpty())
              for (
                var u = i.fold(function (e, t, n) {
                    if (t && so(t)) return [ao(t)];
                    var r = [];
                    return (
                      t && (r = no(t)),
                      Fe(n, function (e, t) {
                        r = r.concat(t);
                      }),
                      r
                    );
                  }),
                  l = 0;
                l < u.length;
                ++l
              ) {
                var h = u[l],
                  c = h.query,
                  h = Co(n, h);
                n.listenProvider_.startListening(
                  ko(c),
                  bo(n, c),
                  h.hashFn,
                  h.onComplete
                );
              }
          }
          !a &&
            0 < t.length &&
            !r &&
            (o
              ? n.listenProvider_.stopListening(ko(e), null)
              : t.forEach(function (e) {
                  var t = n.queryToTagMap.get(To(e));
                  n.listenProvider_.stopListening(ko(e), t);
                })),
            (function (e, t) {
              for (var n = 0; n < t.length; ++n) {
                var r,
                  i = t[n];
                i._queryParams.loadsAllData() ||
                  ((r = To(i)),
                  (i = e.queryToTagMap.get(r)),
                  e.queryToTagMap.delete(r),
                  e.tagToQueryMap.delete(i));
              }
            })(n, t);
        }
        return s;
      }
      function yo(e, t, n) {
        var r = t._path,
          i = null,
          o = !1;
        e.syncPointTree_.foreachOnPath(r, function (e, t) {
          e = Vt(e, r);
          (i = i || ro(t, e)), (o = o || so(t));
        });
        var s = e.syncPointTree_.get(r);
        s
          ? ((o = o || so(s)), (i = i || ro(s, At())))
          : ((s = new Ji()), (e.syncPointTree_ = e.syncPointTree_.set(r, s))),
          null != i
            ? (h = !0)
            : ((h = !1),
              (i = Bn.EMPTY_NODE),
              e.syncPointTree_.subtree(r).foreachChild(function (e, t) {
                t = ro(t, At());
                t && (i = i.updateImmediateChild(e, t));
              }));
        var a,
          u,
          l = oo(s, t);
        l ||
          t._queryParams.loadsAllData() ||
          ((a = To(t)),
          g(!e.queryToTagMap.has(a), "View does not exist, but we have a tag"),
          (u = uo++),
          e.queryToTagMap.set(a, u),
          e.tagToQueryMap.set(u, a));
        var h = eo(s, t, n, vi(e.pendingWriteTree_, r), i, h);
        return (
          l ||
            o ||
            ((s = io(s, t)),
            (h = h.concat(
              (function (e, t, n) {
                var r = t._path,
                  i = bo(e, t),
                  n = Co(e, n),
                  n = e.listenProvider_.startListening(
                    ko(t),
                    i,
                    n.hashFn,
                    n.onComplete
                  ),
                  r = e.syncPointTree_.subtree(r);
                if (i)
                  g(
                    !so(r.value),
                    "If we're adding a query, it shouldn't be shadowed"
                  );
                else
                  for (
                    var o = r.fold(function (e, t, n) {
                        if (!Bt(e) && t && so(t)) return [ao(t).query];
                        var r = [];
                        return (
                          t &&
                            (r = r.concat(
                              no(t).map(function (e) {
                                return e.query;
                              })
                            )),
                          Fe(n, function (e, t) {
                            r = r.concat(t);
                          }),
                          r
                        );
                      }),
                      s = 0;
                    s < o.length;
                    ++s
                  ) {
                    var a = o[s];
                    e.listenProvider_.stopListening(ko(a), bo(e, a));
                  }
                return n;
              })(e, t, s)
            ))),
          h
        );
      }
      function vo(e, n, t) {
        var r = e.pendingWriteTree_,
          e = e.syncPointTree_.findOnPath(n, function (e, t) {
            e = ro(t, Vt(e, n));
            if (e) return e;
          });
        return Ci(r, n, e, t, !0);
      }
      function go(e, t) {
        var n = t._path,
          r = null;
        e.syncPointTree_.foreachOnPath(n, function (e, t) {
          e = Vt(e, n);
          r = r || ro(t, e);
        });
        var i = e.syncPointTree_.get(n);
        i
          ? (r = r || ro(i, At()))
          : ((i = new Ji()), (e.syncPointTree_ = e.syncPointTree_.set(n, i)));
        var o = null != r,
          s = o ? new Yr(r, !0, !1) : null;
        return ni(
          Zi(
            i,
            t,
            vi(e.pendingWriteTree_, t._path),
            o ? s.getNode() : Bn.EMPTY_NODE,
            o
          ).viewCache_
        );
      }
      function mo(e, t) {
        return (function e(t, n, r, i) {
          {
            if (Bt(t.path)) return wo(t, n, r, i);
            var o = n.get(At());
            null == r && null != o && (r = ro(o, At()));
            var s = [],
              a = Lt(t.path),
              u = t.operationForChild(a),
              l = n.children.get(a);
            return (
              l &&
                u &&
                ((n = r ? r.getImmediateChild(a) : null),
                (a = Pi(i, a)),
                (s = s.concat(e(u, l, n, a)))),
              (s = o ? s.concat(Xi(o, t, i, r)) : s)
            );
          }
        })(t, e.syncPointTree_, null, vi(e.pendingWriteTree_, At()));
      }
      function wo(i, e, o, s) {
        var t = e.get(At());
        null == o && null != t && (o = ro(t, At()));
        var a = [];
        return (
          e.children.inorderTraversal(function (e, t) {
            var n = o ? o.getImmediateChild(e) : null,
              r = Pi(s, e),
              e = i.operationForChild(e);
            e && (a = a.concat(wo(e, t, n, r)));
          }),
          (a = t ? a.concat(Xi(t, i, s, o)) : a)
        );
      }
      function Co(n, e) {
        var r = e.query,
          i = bo(n, r);
        return {
          hashFn: function () {
            return (e.viewCache_.serverCache.getNode() || Bn.EMPTY_NODE).hash();
          },
          onComplete: function (e) {
            if ("ok" === e)
              return i
                ? (function (e, t, n) {
                    var r = Eo(e, n);
                    if (r) {
                      (n = Io(r)),
                        (r = n.path),
                        (n = n.queryId),
                        (t = Vt(r, t));
                      return So(e, r, new Ur(qr(n), t));
                    }
                    return [];
                  })(n, r._path, i)
                : ((t = r._path), mo(n, new Ur(Fr(), t)));
            var t,
              t =
                ((t = "Unknown Error"),
                "too_big" === (e = e)
                  ? (t =
                      "The data requested exceeds the maximum size that can be accessed with a single request.")
                  : "permission_denied" === e
                  ? (t =
                      "Client doesn't have permission to access the desired data.")
                  : "unavailable" === e && (t = "The service is unavailable"),
                ((t = new Error(
                  e + " at " + r._path.toString() + ": " + t
                )).code = e.toUpperCase()),
                t);
            return _o(n, r, null, t);
          },
        };
      }
      function bo(e, t) {
        t = To(t);
        return e.queryToTagMap.get(t);
      }
      function To(e) {
        return e._path.toString() + "$" + e._queryIdentifier;
      }
      function Eo(e, t) {
        return e.tagToQueryMap.get(t);
      }
      function Io(e) {
        var t = e.indexOf("$");
        return (
          g(-1 !== t && t < e.length - 1, "Bad queryKey."),
          { queryId: e.substr(t + 1), path: new Ot(e.substr(0, t)) }
        );
      }
      function So(e, t, n) {
        var r = e.syncPointTree_.get(t);
        return (
          g(r, "Missing sync point for query tag that we're tracking"),
          Xi(r, n, vi(e.pendingWriteTree_, t), null)
        );
      }
      function ko(e) {
        return e._queryParams.loadsAllData() && !e._queryParams.isDefault()
          ? (g($i, "Reference.ts has not been loaded"),
            new $i(e._repo, e._path))
          : e;
      }
      var Po =
        ((No.prototype.getImmediateChild = function (e) {
          return new No(this.node_.getImmediateChild(e));
        }),
        (No.prototype.node = function () {
          return this.node_;
        }),
        No);
      function No(e) {
        this.node_ = e;
      }
      var xo =
        ((Ro.prototype.getImmediateChild = function (e) {
          e = Ut(this.path_, e);
          return new Ro(this.syncTree_, e);
        }),
        (Ro.prototype.node = function () {
          return vo(this.syncTree_, this.path_);
        }),
        Ro);
      function Ro(e, t) {
        (this.syncTree_ = e), (this.path_ = t);
      }
      var Oo = function (e) {
          return (
            ((e = e || {}).timestamp = e.timestamp || new Date().getTime()), e
          );
        },
        Do = function (e, t, n) {
          return e && "object" == typeof e
            ? (g(".sv" in e, "Unexpected leaf node or priority contents"),
              "string" == typeof e[".sv"]
                ? Ao(e[".sv"], t, n)
                : "object" == typeof e[".sv"]
                ? Lo(e[".sv"], t)
                : void g(
                    !1,
                    "Unexpected server value: " + JSON.stringify(e, null, 2)
                  ))
            : e;
        },
        Ao = function (e, t, n) {
          if ("timestamp" === e) return n.timestamp;
          g(!1, "Unexpected server value: " + e);
        },
        Lo = function (e, t, n) {
          e.hasOwnProperty("increment") ||
            g(!1, "Unexpected server value: " + JSON.stringify(e, null, 2));
          e = e.increment;
          "number" != typeof e && g(!1, "Unexpected increment value: " + e);
          t = t.node();
          if (
            (g(null != t, "Expected ChildrenNode.EMPTY_NODE for nulls"),
            !t.isLeafNode())
          )
            return e;
          t = t.getValue();
          return "number" != typeof t ? e : t + e;
        },
        Mo = function (e, t, n, r) {
          return qo(t, new xo(n, e), r);
        },
        Fo = function (e, t, n) {
          return qo(e, new Po(t), n);
        };
      function qo(e, r, i) {
        var t = e.getPriority().val(),
          n = Do(t, r.getImmediateChild(".priority"), i);
        if (e.isLeafNode()) {
          var o = e,
            t = Do(o.getValue(), r, i);
          return t !== o.getValue() || n !== o.getPriority().val()
            ? new Pn(t, Yn(n))
            : e;
        }
        var e = e,
          s = e;
        return (
          n !== e.getPriority().val() && (s = s.updatePriority(new Pn(n))),
          e.forEachChild(Rn, function (e, t) {
            var n = qo(t, r.getImmediateChild(e), i);
            n !== t && (s = s.updateImmediateChild(e, n));
          }),
          s
        );
      }
      var Wo = function (e, t, n) {
        void 0 === t && (t = null),
          void 0 === n && (n = { children: {}, childCount: 0 }),
          (this.name = e = void 0 === e ? "" : e),
          (this.parent = t),
          (this.node = n);
      };
      function jo(e, t) {
        for (
          var n = t instanceof Ot ? t : new Ot(t), r = e, i = Lt(n);
          null !== i;

        )
          var o = L(r.node.children, i) || { children: {}, childCount: 0 },
            r = new Wo(i, r, o),
            i = Lt((n = Ft(n)));
        return r;
      }
      function Uo(e) {
        return e.node.value;
      }
      function Bo(e, t) {
        (e.node.value = t), Qo(e);
      }
      function Vo(e) {
        return 0 < e.node.childCount;
      }
      function zo(n, r) {
        Fe(n.node.children, function (e, t) {
          r(new Wo(e, n, t));
        });
      }
      function Ho(e) {
        return new Ot(null === e.parent ? e.name : Ho(e.parent) + "/" + e.name);
      }
      function Qo(e) {
        var t, n, r, i;
        null !== e.parent &&
          ((t = e.parent),
          (n = e.name),
          (i = (function (e) {
            return void 0 === Uo(e) && !Vo(e);
          })((r = e))),
          (e = A(t.node.children, n)),
          i && e
            ? (delete t.node.children[n], t.node.childCount--, Qo(t))
            : i ||
              e ||
              ((t.node.children[n] = r.node), t.node.childCount++, Qo(t)));
      }
      function Yo(e) {
        return "string" == typeof e && 0 !== e.length && !Xo.test(e);
      }
      function Ko(e) {
        return "string" == typeof e && 0 !== e.length && !Zo.test(e);
      }
      function Go(e, t, n, r) {
        if (!r || void 0 !== t) {
          var i = B(e, "values");
          if (!t || "object" != typeof t || Array.isArray(t))
            throw new Error(
              i + " must be an object containing the children to replace."
            );
          var o = [];
          Fe(t, function (e, t) {
            e = new Ot(e);
            if ((rs(i, t, Ut(n, e)), ".priority" === qt(e) && !ts(t)))
              throw new Error(
                i +
                  "contains an invalid value for '" +
                  e.toString() +
                  "', which must be a valid Firebase priority (a string, finite number, server value, or null)."
              );
            o.push(e);
          }),
            (function (e, t) {
              for (var n = 0; n < t.length; n++)
                for (var r, i = Wt((r = t[n])), o = 0; o < i.length; o++)
                  if ((".priority" !== i[o] || o !== i.length - 1) && !Yo(i[o]))
                    throw new Error(
                      e +
                        "contains an invalid key (" +
                        i[o] +
                        ") in path " +
                        r.toString() +
                        '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                    );
              t.sort(zt);
              var s = null;
              for (n = 0; n < t.length; n++) {
                if (((r = t[n]), null !== s && Qt(s, r)))
                  throw new Error(
                    e +
                      "contains a path " +
                      s.toString() +
                      " that is ancestor of another path " +
                      r.toString()
                  );
                s = r;
              }
            })(i, o);
        }
      }
      function $o(e, t, n) {
        if (!n || void 0 !== t) {
          if (ye(t))
            throw new Error(
              B(e, "priority") +
                "is " +
                t.toString() +
                ", but must be a valid Firebase priority (a string, finite number, server value, or null)."
            );
          if (!ts(t))
            throw new Error(
              B(e, "priority") +
                "must be a valid Firebase priority (a string, finite number, server value, or null)."
            );
        }
      }
      function Jo(e, t, n, r) {
        if (!((r && void 0 === n) || Yo(n)))
          throw new Error(
            B(e, t) +
              'was an invalid key = "' +
              n +
              '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'
          );
      }
      var Xo = /[\[\].#$\/\u0000-\u001F\u007F]/,
        Zo = /[\[\].#$\u0000-\u001F\u007F]/,
        es = 10485760,
        ts = function (e) {
          return (
            null === e ||
            "string" == typeof e ||
            ("number" == typeof e && !ye(e)) ||
            (e && "object" == typeof e && A(e, ".sv"))
          );
        },
        ns = function (e, t, n, r) {
          (r && void 0 === t) || rs(B(e, "value"), t, n);
        },
        rs = function (r, e, t) {
          var i = t instanceof Ot ? new Yt(t, r) : t;
          if (void 0 === e) throw new Error(r + "contains undefined " + Gt(i));
          if ("function" == typeof e)
            throw new Error(
              r +
                "contains a function " +
                Gt(i) +
                " with contents = " +
                e.toString()
            );
          if (ye(e))
            throw new Error(r + "contains " + e.toString() + " " + Gt(i));
          if ("string" == typeof e && e.length > es / 3 && H(e) > es)
            throw new Error(
              r +
                "contains a string greater than " +
                es +
                " utf8 bytes " +
                Gt(i) +
                " ('" +
                e.substring(0, 50) +
                "...')"
            );
          if (e && "object" == typeof e) {
            var o = !1,
              s = !1;
            if (
              (Fe(e, function (e, t) {
                if (".value" === e) o = !0;
                else if (".priority" !== e && ".sv" !== e && ((s = !0), !Yo(e)))
                  throw new Error(
                    r +
                      " contains an invalid key (" +
                      e +
                      ") " +
                      Gt(i) +
                      '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                  );
                var n;
                (n = e),
                  0 < (e = i).parts_.length && (e.byteLength_ += 1),
                  e.parts_.push(n),
                  (e.byteLength_ += H(n)),
                  Kt(e),
                  rs(r, t, i),
                  (t = (e = i).parts_.pop()),
                  (e.byteLength_ -= H(t)),
                  0 < e.parts_.length && --e.byteLength_;
              }),
              o && s)
            )
              throw new Error(
                r +
                  ' contains ".value" child ' +
                  Gt(i) +
                  " in addition to actual children."
              );
          }
        },
        is = function (e, t, n, r) {
          if (!((r && void 0 === n) || Ko(n)))
            throw new Error(
              B(e, t) +
                'was an invalid path = "' +
                n +
                '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'
            );
        },
        os = function (e, t, n, r) {
          (n = n && n.replace(/^\/*\.info(\/|$)/, "/")), is(e, t, n, r);
        },
        ss = function (e, t) {
          if (".info" === Lt(t))
            throw new Error(e + " failed = Can't modify data under /.info/");
        },
        as = function (e, t) {
          var n = t.path.toString();
          if (
            "string" != typeof t.repoInfo.host ||
            0 === t.repoInfo.host.length ||
            (!Yo(t.repoInfo.namespace) &&
              "localhost" !== t.repoInfo.host.split(":")[0]) ||
            (0 !== n.length &&
              ((n = (n = n) && n.replace(/^\/*\.info(\/|$)/, "/")), !Ko(n)))
          )
            throw new Error(
              B(e, "url") +
                'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'
            );
        },
        us = function () {
          (this.eventLists_ = []), (this.recursionDepth_ = 0);
        };
      function ls(e, t) {
        for (var n = null, r = 0; r < t.length; r++) {
          var i = t[r],
            o = i.getPath();
          null === n || Ht(o, n.path) || (e.eventLists_.push(n), (n = null)),
            (n = null === n ? { events: [], path: o } : n).events.push(i);
        }
        n && e.eventLists_.push(n);
      }
      function hs(e, t, n) {
        ls(e, n),
          ps(e, function (e) {
            return Ht(e, t);
          });
      }
      function cs(e, t, n) {
        ls(e, n),
          ps(e, function (e) {
            return Qt(e, t) || Qt(t, e);
          });
      }
      function ps(e, t) {
        e.recursionDepth_++;
        for (var n = !0, r = 0; r < e.eventLists_.length; r++) {
          var i = e.eventLists_[r];
          i &&
            (t(i.path)
              ? ((function (e) {
                  for (var t = 0; t < e.events.length; t++) {
                    var n,
                      r = e.events[t];
                    null !== r &&
                      ((e.events[t] = null),
                      (n = r.getEventRunner()),
                      ke && Ne("event: " + r.toString()),
                      ze(n));
                  }
                })(e.eventLists_[r]),
                (e.eventLists_[r] = null))
              : (n = !1));
        }
        n && (e.eventLists_ = []), e.recursionDepth_--;
      }
      var ds = "repo_interrupt",
        fs = 25,
        _s =
          ((ys.prototype.toString = function () {
            return (
              (this.repoInfo_.secure ? "https://" : "http://") +
              this.repoInfo_.host
            );
          }),
          ys);
      function ys(e, t, n, r) {
        (this.repoInfo_ = e),
          (this.forceRestClient_ = t),
          (this.authTokenProvider_ = n),
          (this.appCheckProvider_ = r),
          (this.dataUpdateCount = 0),
          (this.statsListener_ = null),
          (this.eventQueue_ = new us()),
          (this.nextWriteId_ = 1),
          (this.interceptServerDataCallback_ = null),
          (this.onDisconnect_ = Pr()),
          (this.transactionQueueTree_ = new Wo()),
          (this.persistentConnection_ = null),
          (this.key = this.repoInfo_.toURLString());
      }
      function vs(s, e, t) {
        if (
          ((s.stats_ = at(s.repoInfo_)),
          s.forceRestClient_ ||
            0 <=
              (
                ("object" == typeof window &&
                  window.navigator &&
                  window.navigator.userAgent) ||
                ""
              ).search(
                /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
              ))
        )
          (s.server_ = new Er(
            s.repoInfo_,
            function (e, t, n, r) {
              ws(s, e, t, n, r);
            },
            s.authTokenProvider_,
            s.appCheckProvider_
          )),
            setTimeout(function () {
              return Cs(s, !0);
            }, 0);
        else {
          if (null != t) {
            if ("object" != typeof t)
              throw new Error(
                "Only objects are supported for option databaseAuthVariableOverride"
              );
            try {
              O(t);
            } catch (e) {
              throw new Error("Invalid authOverride provided: " + e);
            }
          }
          (s.persistentConnection_ = new nn(
            s.repoInfo_,
            e,
            function (e, t, n, r) {
              ws(s, e, t, n, r);
            },
            function (e) {
              Cs(s, e);
            },
            function (e) {
              var n;
              (n = s),
                Fe(e, function (e, t) {
                  bs(n, e, t);
                });
            },
            s.authTokenProvider_,
            s.appCheckProvider_,
            t
          )),
            (s.server_ = s.persistentConnection_);
        }
        s.authTokenProvider_.addTokenChangeListener(function (e) {
          s.server_.refreshAuthToken(e);
        }),
          s.appCheckProvider_.addTokenChangeListener(function (e) {
            s.server_.refreshAppCheckToken(e.token);
          }),
          (s.statsReporter_ =
            ((e = s.repoInfo_),
            (t = function () {
              return new Ar(s.stats_, s.server_);
            }),
            (e = e.toString()),
            st[e] || (st[e] = t()),
            st[e])),
          (s.infoData_ = new Sr()),
          (s.infoSyncTree_ = new lo({
            startListening: function (e, t, n, r) {
              var i = [],
                o = s.infoData_.getNode(e._path);
              return (
                o.isEmpty() ||
                  ((i = fo(s.infoSyncTree_, e._path, o)),
                  setTimeout(function () {
                    r("ok");
                  }, 0)),
                i
              );
            },
            stopListening: function () {},
          })),
          bs(s, "connected", !1),
          (s.serverSyncTree_ = new lo({
            startListening: function (n, e, t, r) {
              return (
                s.server_.listen(n, t, e, function (e, t) {
                  t = r(e, t);
                  cs(s.eventQueue_, n._path, t);
                }),
                []
              );
            },
            stopListening: function (e, t) {
              s.server_.unlisten(e, t);
            },
          }));
      }
      function gs(e) {
        e = e.infoData_.getNode(new Ot(".info/serverTimeOffset")).val() || 0;
        return new Date().getTime() + e;
      }
      function ms(e) {
        return Oo({ timestamp: gs(e) });
      }
      function ws(e, t, n, r, i) {
        e.dataUpdateCount++;
        var o = new Ot(t);
        n = e.interceptServerDataCallback_
          ? e.interceptServerDataCallback_(t, n)
          : n;
        var s,
          a,
          u,
          l,
          h = [],
          t = o;
        0 <
          (h = i
            ? r
              ? ((s = F(n, function (e) {
                  return Yn(e);
                })),
                (function (e, t, n, r) {
                  var i = Eo(e, r);
                  if (i) {
                    (r = Io(i)),
                      (i = r.path),
                      (r = r.queryId),
                      (t = Vt(i, t)),
                      (n = ii.fromObject(n));
                    return So(e, i, new Hr(qr(r), t, n));
                  }
                  return [];
                })(e.serverSyncTree_, o, s, i))
              : ((l = Yn(n)),
                (s = e.serverSyncTree_),
                (a = o),
                (u = l),
                null == (i = Eo(s, (l = i)))
                  ? []
                  : ((l = Io(i)),
                    (i = l.path),
                    (l = l.queryId),
                    (a = Vt(i, a)),
                    So(s, i, new Vr(qr(l), a, u))))
            : r
            ? ((l = F(n, function (e) {
                return Yn(e);
              })),
              (a = e.serverSyncTree_),
              (u = o),
              (r = l),
              (r = ii.fromObject(l)),
              mo(a, new Hr(Fr(), u, r)))
            : ((n = Yn(n)), fo(e.serverSyncTree_, o, n))).length &&
          (t = Ds(e, o)),
          cs(e.eventQueue_, t, h);
      }
      function Cs(e, t) {
        bs(e, "connected", t),
          !1 === t &&
            (function (n) {
              Ns(n, "onDisconnectEvents");
              var r = ms(n),
                i = Pr();
              xr(n.onDisconnect_, At(), function (e, t) {
                t = Mo(e, t, n.serverSyncTree_, r);
                Nr(i, e, t);
              });
              var o = [];
              xr(i, At(), function (e, t) {
                o = o.concat(fo(n.serverSyncTree_, e, t));
                e = Fs(n, e);
                Ds(n, e);
              }),
                (n.onDisconnect_ = Pr()),
                cs(n.eventQueue_, At(), o);
            })(e);
      }
      function bs(e, t, n) {
        (t = new Ot("/.info/" + t)), (n = Yn(n));
        e.infoData_.updateSnapshot(t, n);
        n = fo(e.infoSyncTree_, t, n);
        cs(e.eventQueue_, t, n);
      }
      function Ts(e) {
        return e.nextWriteId_++;
      }
      function Es(r, i, e, t, o) {
        Ns(r, "set", { path: i.toString(), value: e, priority: t });
        var n = ms(r),
          e = Yn(e, t),
          t = vo(r.serverSyncTree_, i),
          n = Fo(e, t, n),
          s = Ts(r),
          n = ho(r.serverSyncTree_, i, n, s, !0);
        ls(r.eventQueue_, n),
          r.server_.put(i.toString(), e.val(!0), function (e, t) {
            var n = "ok" === e;
            n || Oe("set at " + i + " failed: " + e);
            n = po(r.serverSyncTree_, s, !n);
            cs(r.eventQueue_, i, n), xs(0, o, e, t);
          });
        e = Fs(r, i);
        Ds(r, e), cs(r.eventQueue_, e, []);
      }
      function Is(n, r, i) {
        n.server_.onDisconnectCancel(r.toString(), function (e, t) {
          "ok" === e &&
            !(function e(n, t) {
              if (Bt(t)) return (n.value = null), n.children.clear(), !0;
              if (null !== n.value) {
                if (n.value.isLeafNode()) return !1;
                var r = n.value;
                return (
                  (n.value = null),
                  r.forEachChild(Rn, function (e, t) {
                    Nr(n, new Ot(e), t);
                  }),
                  e(n, t)
                );
              }
              if (0 < n.children.size)
                return (
                  (r = Lt(t)),
                  (t = Ft(t)),
                  n.children.has(r) &&
                    e(n.children.get(r), t) &&
                    n.children.delete(r),
                  0 === n.children.size
                );
              return !0;
            })(n.onDisconnect_, r),
            xs(0, i, e, t);
        });
      }
      function Ss(n, r, e, i) {
        var o = Yn(e);
        n.server_.onDisconnectPut(r.toString(), o.val(!0), function (e, t) {
          "ok" === e && Nr(n.onDisconnect_, r, o), xs(0, i, e, t);
        });
      }
      function ks(e, t, n) {
        n =
          ".info" === Lt(t._path)
            ? _o(e.infoSyncTree_, t, n)
            : _o(e.serverSyncTree_, t, n);
        hs(e.eventQueue_, t._path, n);
      }
      function Ps(e) {
        e.persistentConnection_ && e.persistentConnection_.interrupt(ds);
      }
      function Ns(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = "";
        e.persistentConnection_ && (r = e.persistentConnection_.id + ":"),
          Ne.apply(void 0, s([r], y(t)));
      }
      function xs(e, n, r, i) {
        n &&
          ze(function () {
            var e, t;
            "ok" === r
              ? n(null)
              : ((t = e = (r || "error").toUpperCase()),
                i && (t += ": " + i),
                ((t = new Error(t)).code = e),
                n(t));
          });
      }
      function Rs(e, t, n) {
        return vo(e.serverSyncTree_, t, n) || Bn.EMPTY_NODE;
      }
      function Os(t, e) {
        var n;
        (e = void 0 === e ? t.transactionQueueTree_ : e) || Ms(t, e),
          Uo(e)
            ? ((n = Ls(t, e)),
              g(0 < n.length, "Sending zero length transaction queue"),
              n.every(function (e) {
                return 0 === e.status;
              }) &&
                (function (i, o, s) {
                  for (
                    var e = s.map(function (e) {
                        return e.currentWriteId;
                      }),
                      t = Rs(i, o, e),
                      n = t,
                      e = t.hash(),
                      r = 0;
                    r < s.length;
                    r++
                  ) {
                    var a = s[r];
                    g(
                      0 === a.status,
                      "tryToSendTransactionQueue_: items in queue should all be run."
                    ),
                      (a.status = 1),
                      a.retryCount++;
                    var u = Vt(o, a.path);
                    n = n.updateChild(u, a.currentOutputSnapshotRaw);
                  }
                  var t = n.val(!0),
                    l = o;
                  i.server_.put(
                    l.toString(),
                    t,
                    function (e) {
                      Ns(i, "transaction put response", {
                        path: l.toString(),
                        status: e,
                      });
                      var t = [];
                      if ("ok" === e) {
                        for (var n = [], r = 0; r < s.length; r++)
                          !(function (e) {
                            (s[e].status = 2),
                              (t = t.concat(
                                po(i.serverSyncTree_, s[e].currentWriteId)
                              )),
                              s[e].onComplete &&
                                n.push(function () {
                                  return s[e].onComplete(
                                    null,
                                    !0,
                                    s[e].currentOutputSnapshotResolved
                                  );
                                }),
                              s[e].unwatcher();
                          })(r);
                        Ms(i, jo(i.transactionQueueTree_, o)),
                          Os(i, i.transactionQueueTree_),
                          cs(i.eventQueue_, o, t);
                        for (r = 0; r < n.length; r++) ze(n[r]);
                      } else {
                        if ("datastale" === e)
                          for (r = 0; r < s.length; r++)
                            3 === s[r].status
                              ? (s[r].status = 4)
                              : (s[r].status = 0);
                        else {
                          Oe(
                            "transaction at " + l.toString() + " failed: " + e
                          );
                          for (r = 0; r < s.length; r++)
                            (s[r].status = 4), (s[r].abortReason = e);
                        }
                        Ds(i, o);
                      }
                    },
                    e
                  );
                })(t, Ho(e), n))
            : Vo(e) &&
              zo(e, function (e) {
                Os(t, e);
              });
      }
      function Ds(e, t) {
        var n = As(e, t),
          t = Ho(n);
        return (
          (function (u, l, h) {
            if (0 !== l.length) {
              for (
                var c = [],
                  p = [],
                  d = l
                    .filter(function (e) {
                      return 0 === e.status;
                    })
                    .map(function (e) {
                      return e.currentWriteId;
                    }),
                  e = 0;
                e < l.length;
                e++
              )
                !(function (e) {
                  var t,
                    n,
                    r,
                    i,
                    o = l[e],
                    s = Vt(h, o.path),
                    a = !1;
                  g(
                    null !== s,
                    "rerunTransactionsUnderNode_: relativePath should not be null."
                  ),
                    4 === o.status
                      ? ((t = o.abortReason),
                        (p = p.concat(
                          po(u.serverSyncTree_, o.currentWriteId, (a = !0))
                        )))
                      : 0 === o.status &&
                        (p =
                          o.retryCount >= fs
                            ? ((t = "maxretry"),
                              p.concat(
                                po(
                                  u.serverSyncTree_,
                                  o.currentWriteId,
                                  (a = !0)
                                )
                              ))
                            : ((n = Rs(u, o.path, d)),
                              (o.currentInputSnapshot = n),
                              void 0 !== (i = l[e].update(n.val()))
                                ? (rs(
                                    "transaction failed: Data returned ",
                                    i,
                                    o.path
                                  ),
                                  (r = Yn(i)),
                                  ("object" == typeof i &&
                                    null != i &&
                                    A(i, ".priority")) ||
                                    (r = r.updatePriority(n.getPriority())),
                                  (s = o.currentWriteId),
                                  (i = ms(u)),
                                  (i = Fo(r, n, i)),
                                  (o.currentOutputSnapshotRaw = r),
                                  (o.currentOutputSnapshotResolved = i),
                                  (o.currentWriteId = Ts(u)),
                                  d.splice(d.indexOf(s), 1),
                                  (p = p.concat(
                                    ho(
                                      u.serverSyncTree_,
                                      o.path,
                                      i,
                                      o.currentWriteId,
                                      o.applyLocally
                                    )
                                  )).concat(po(u.serverSyncTree_, s, !0)))
                                : ((t = "nodata"),
                                  p.concat(
                                    po(
                                      u.serverSyncTree_,
                                      o.currentWriteId,
                                      (a = !0)
                                    )
                                  )))),
                    cs(u.eventQueue_, h, p),
                    (p = []),
                    a &&
                      ((l[e].status = 2),
                      (a = l[e].unwatcher),
                      setTimeout(a, Math.floor(0)),
                      l[e].onComplete &&
                        ("nodata" === t
                          ? c.push(function () {
                              return l[e].onComplete(
                                null,
                                !1,
                                l[e].currentInputSnapshot
                              );
                            })
                          : c.push(function () {
                              return l[e].onComplete(new Error(t), !1, null);
                            })));
                })(e);
              Ms(u, u.transactionQueueTree_);
              for (e = 0; e < c.length; e++) ze(c[e]);
              Os(u, u.transactionQueueTree_);
            }
          })(e, Ls(e, n), t),
          t
        );
      }
      function As(e, t) {
        for (
          var n = e.transactionQueueTree_, r = Lt(t);
          null !== r && void 0 === Uo(n);

        )
          (n = jo(n, r)), (r = Lt((t = Ft(t))));
        return n;
      }
      function Ls(e, t) {
        var n = [];
        return (
          (function t(n, e, r) {
            var i = Uo(e);
            if (i) for (var o = 0; o < i.length; o++) r.push(i[o]);
            zo(e, function (e) {
              t(n, e, r);
            });
          })(e, t, n),
          n.sort(function (e, t) {
            return e.order - t.order;
          }),
          n
        );
      }
      function Ms(t, e) {
        var n = Uo(e);
        if (n) {
          for (var r = 0, i = 0; i < n.length; i++)
            2 !== n[i].status && ((n[r] = n[i]), r++);
          (n.length = r), Bo(e, 0 < n.length ? n : void 0);
        }
        zo(e, function (e) {
          Ms(t, e);
        });
      }
      function Fs(t, e) {
        var n = Ho(As(t, e)),
          e = jo(t.transactionQueueTree_, e);
        return (
          (function (e, t, n) {
            for (var r = n ? e : e.parent; null !== r; ) {
              if (t(r)) return;
              r = r.parent;
            }
          })(e, function (e) {
            qs(t, e);
          }),
          qs(t, e),
          (function t(e, n, r, i) {
            r && !i && n(e),
              zo(e, function (e) {
                t(e, n, !0, i);
              }),
              r && i && n(e);
          })(e, function (e) {
            qs(t, e);
          }),
          n
        );
      }
      function qs(e, t) {
        var n = Uo(t);
        if (n) {
          for (var r = [], i = [], o = -1, s = 0; s < n.length; s++)
            3 === n[s].status ||
              (1 === n[s].status
                ? (g(
                    o === s - 1,
                    "All SENT items should be at beginning of queue."
                  ),
                  (n[(o = s)].status = 3),
                  (n[s].abortReason = "set"))
                : (g(
                    0 === n[s].status,
                    "Unexpected transaction status in abort"
                  ),
                  n[s].unwatcher(),
                  (i = i.concat(
                    po(e.serverSyncTree_, n[s].currentWriteId, !0)
                  )),
                  n[s].onComplete &&
                    r.push(
                      n[s].onComplete.bind(null, new Error("set"), !1, null)
                    )));
          -1 === o ? Bo(t, void 0) : (n.length = o + 1),
            cs(e.eventQueue_, Ho(t), i);
          for (s = 0; s < r.length; s++) ze(r[s]);
        }
      }
      var Ws = function (e, t) {
          var n = js(e),
            r = n.namespace;
          "firebase.com" === n.domain &&
            Re(
              n.host +
                " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"
            ),
            (r && "undefined" !== r) ||
              "localhost" === n.domain ||
              Re(
                "Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"
              ),
            n.secure ||
              ("undefined" != typeof window &&
                window.location &&
                window.location.protocol &&
                -1 !== window.location.protocol.indexOf("https:") &&
                Oe(
                  "Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."
                ));
          e = "ws" === n.scheme || "wss" === n.scheme;
          return {
            repoInfo: new et(n.host, n.secure, r, t, e, "", r !== n.subdomain),
            path: new Ot(n.pathString),
          };
        },
        js = function (e) {
          var t,
            n,
            r,
            i = "",
            o = "",
            s = "",
            a = "",
            u = "",
            l = !0,
            h = "https",
            c = 443;
          return (
            "string" == typeof e &&
              (0 <= (r = e.indexOf("//")) &&
                ((h = e.substring(0, r - 1)), (e = e.substring(r + 2))),
              -1 === (t = e.indexOf("/")) && (t = e.length),
              -1 === (n = e.indexOf("?")) && (n = e.length),
              (i = e.substring(0, Math.min(t, n))),
              t < n &&
                (a = (function (e) {
                  for (var t = "", n = e.split("/"), r = 0; r < n.length; r++)
                    if (0 < n[r].length) {
                      var i = n[r];
                      try {
                        i = decodeURIComponent(i.replace(/\+/g, " "));
                      } catch (e) {}
                      t += "/" + i;
                    }
                  return t;
                })(e.substring(t, n))),
              (n = (function (e) {
                var t,
                  n,
                  r = {};
                "?" === e.charAt(0) && (e = e.substring(1));
                try {
                  for (
                    var i = _(e.split("&")), o = i.next();
                    !o.done;
                    o = i.next()
                  ) {
                    var s,
                      a = o.value;
                    0 !== a.length &&
                      (2 === (s = a.split("=")).length
                        ? (r[decodeURIComponent(s[0])] = decodeURIComponent(
                            s[1]
                          ))
                        : Oe(
                            "Invalid query segment '" +
                              a +
                              "' in query '" +
                              e +
                              "'"
                          ));
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    o && !o.done && (n = i.return) && n.call(i);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return r;
              })(e.substring(Math.min(e.length, n)))),
              0 <= (r = i.indexOf(":"))
                ? ((l = "https" === h || "wss" === h),
                  (c = parseInt(i.substring(r + 1), 10)))
                : (r = i.length),
              "localhost" === (r = i.slice(0, r)).toLowerCase()
                ? (o = "localhost")
                : r.split(".").length <= 2
                ? (o = r)
                : ((r = i.indexOf(".")),
                  (s = i.substring(0, r).toLowerCase()),
                  (o = i.substring(r + 1)),
                  (u = s)),
              "ns" in n && (u = n.ns)),
            {
              host: i,
              port: c,
              domain: o,
              subdomain: s,
              secure: l,
              scheme: h,
              pathString: a,
              namespace: u,
            }
          );
        },
        Us =
          ((Bs.prototype.getPath = function () {
            var e = this.snapshot.ref;
            return ("value" === this.eventType ? e : e.parent)._path;
          }),
          (Bs.prototype.getEventType = function () {
            return this.eventType;
          }),
          (Bs.prototype.getEventRunner = function () {
            return this.eventRegistration.getEventRunner(this);
          }),
          (Bs.prototype.toString = function () {
            return (
              this.getPath().toString() +
              ":" +
              this.eventType +
              ":" +
              O(this.snapshot.exportVal())
            );
          }),
          Bs);
      function Bs(e, t, n, r) {
        (this.eventType = e),
          (this.eventRegistration = t),
          (this.snapshot = n),
          (this.prevName = r);
      }
      var Vs =
        ((zs.prototype.getPath = function () {
          return this.path;
        }),
        (zs.prototype.getEventType = function () {
          return "cancel";
        }),
        (zs.prototype.getEventRunner = function () {
          return this.eventRegistration.getEventRunner(this);
        }),
        (zs.prototype.toString = function () {
          return this.path.toString() + ":cancel";
        }),
        zs);
      function zs(e, t, n) {
        (this.eventRegistration = e), (this.error = t), (this.path = n);
      }
      var Hs =
        ((Qs.prototype.onValue = function (e, t) {
          this.snapshotCallback.call(null, e, t);
        }),
        (Qs.prototype.onCancel = function (e) {
          return (
            g(
              this.hasCancelCallback,
              "Raising a cancel event on a listener with no cancel callback"
            ),
            this.cancelCallback.call(null, e)
          );
        }),
        Object.defineProperty(Qs.prototype, "hasCancelCallback", {
          get: function () {
            return !!this.cancelCallback;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (Qs.prototype.matches = function (e) {
          return (
            this.snapshotCallback === e.snapshotCallback ||
            (void 0 !== this.snapshotCallback.userCallback &&
              this.snapshotCallback.userCallback ===
                e.snapshotCallback.userCallback &&
              this.snapshotCallback.context === e.snapshotCallback.context)
          );
        }),
        Qs);
      function Qs(e, t) {
        (this.snapshotCallback = e), (this.cancelCallback = t);
      }
      var Ys =
        ((Ks.prototype.cancel = function () {
          var e = new w();
          return (
            Is(
              this._repo,
              this._path,
              e.wrapCallback(function () {})
            ),
            e.promise
          );
        }),
        (Ks.prototype.remove = function () {
          ss("OnDisconnect.remove", this._path);
          var e = new w();
          return (
            Ss(
              this._repo,
              this._path,
              null,
              e.wrapCallback(function () {})
            ),
            e.promise
          );
        }),
        (Ks.prototype.set = function (e) {
          ss("OnDisconnect.set", this._path),
            ns("OnDisconnect.set", e, this._path, !1);
          var t = new w();
          return (
            Ss(
              this._repo,
              this._path,
              e,
              t.wrapCallback(function () {})
            ),
            t.promise
          );
        }),
        (Ks.prototype.setWithPriority = function (e, t) {
          ss("OnDisconnect.setWithPriority", this._path),
            ns("OnDisconnect.setWithPriority", e, this._path, !1),
            $o("OnDisconnect.setWithPriority", t, !1);
          var n,
            r,
            i,
            o,
            s = new w();
          return (
            (n = this._repo),
            (r = this._path),
            (e = e),
            (t = t),
            (i = s.wrapCallback(function () {})),
            (o = Yn(e, t)),
            n.server_.onDisconnectPut(r.toString(), o.val(!0), function (e, t) {
              "ok" === e && Nr(n.onDisconnect_, r, o), xs(0, i, e, t);
            }),
            s.promise
          );
        }),
        (Ks.prototype.update = function (e) {
          ss("OnDisconnect.update", this._path),
            Go("OnDisconnect.update", e, this._path, !1);
          var t = new w();
          return (
            (function (n, r, i, o) {
              if (M(i))
                return (
                  Ne(
                    "onDisconnect().update() called with empty data.  Don't do anything."
                  ),
                  xs(0, o, "ok", void 0)
                );
              n.server_.onDisconnectMerge(r.toString(), i, function (e, t) {
                "ok" === e &&
                  Fe(i, function (e, t) {
                    t = Yn(t);
                    Nr(n.onDisconnect_, Ut(r, e), t);
                  }),
                  xs(0, o, e, t);
              });
            })(
              this._repo,
              this._path,
              e,
              t.wrapCallback(function () {})
            ),
            t.promise
          );
        }),
        Ks);
      function Ks(e, t) {
        (this._repo = e), (this._path = t);
      }
      var Gs =
        (Object.defineProperty($s.prototype, "key", {
          get: function () {
            return Bt(this._path) ? null : qt(this._path);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty($s.prototype, "ref", {
          get: function () {
            return new ta(this._repo, this._path);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty($s.prototype, "_queryIdentifier", {
          get: function () {
            var e = br(this._queryParams),
              e = Me(e);
            return "{}" === e ? "default" : e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty($s.prototype, "_queryObject", {
          get: function () {
            return br(this._queryParams);
          },
          enumerable: !1,
          configurable: !0,
        }),
        ($s.prototype.isEqual = function (e) {
          if (!((e = Q(e)) instanceof $s)) return !1;
          var t = this._repo === e._repo,
            n = Ht(this._path, e._path),
            e = this._queryIdentifier === e._queryIdentifier;
          return t && n && e;
        }),
        ($s.prototype.toJSON = function () {
          return this.toString();
        }),
        ($s.prototype.toString = function () {
          return (
            this._repo.toString() +
            (function (e) {
              for (var t = "", n = e.pieceNum_; n < e.pieces_.length; n++)
                "" !== e.pieces_[n] &&
                  (t += "/" + encodeURIComponent(String(e.pieces_[n])));
              return t || "/";
            })(this._path)
          );
        }),
        $s);
      function $s(e, t, n, r) {
        (this._repo = e),
          (this._path = t),
          (this._queryParams = n),
          (this._orderByCalled = r);
      }
      function Js(e, t) {
        if (!0 === e._orderByCalled)
          throw new Error(t + ": You can't combine multiple orderBy calls.");
      }
      function Xs(e) {
        var t = null,
          n = null;
        if (
          (e.hasStart() && (t = e.getIndexStartValue()),
          e.hasEnd() && (n = e.getIndexEndValue()),
          e.getIndex() === cn)
        ) {
          var r =
              "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
            i =
              "Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";
          if (e.hasStart()) {
            if (e.getIndexStartName() !== De) throw new Error(r);
            if ("string" != typeof t) throw new Error(i);
          }
          if (e.hasEnd()) {
            if (e.getIndexEndName() !== Ae) throw new Error(r);
            if ("string" != typeof n) throw new Error(i);
          }
        } else if (e.getIndex() === Rn) {
          if ((null != t && !ts(t)) || (null != n && !ts(n)))
            throw new Error(
              "Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string)."
            );
        } else if (
          (g(
            e.getIndex() instanceof $n || e.getIndex() === rr,
            "unknown index type."
          ),
          (null != t && "object" == typeof t) ||
            (null != n && "object" == typeof n))
        )
          throw new Error(
            "Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object."
          );
      }
      function Zs(e) {
        if (e.hasStart() && e.hasEnd() && e.hasLimit() && !e.hasAnchoredLimit())
          throw new Error(
            "Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead."
          );
      }
      var ea,
        ta =
          (n(na, (ea = Gs)),
          Object.defineProperty(na.prototype, "parent", {
            get: function () {
              var e = jt(this._path);
              return null === e ? null : new na(this._repo, e);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(na.prototype, "root", {
            get: function () {
              for (var e = this; null !== e.parent; ) e = e.parent;
              return e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          na);
      function na(e, t) {
        return ea.call(this, e, t, new yr(), !1) || this;
      }
      var ra =
        (Object.defineProperty(ia.prototype, "priority", {
          get: function () {
            return this._node.getPriority().val();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ia.prototype, "key", {
          get: function () {
            return this.ref.key;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ia.prototype, "size", {
          get: function () {
            return this._node.numChildren();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (ia.prototype.child = function (e) {
          var t = new Ot(e),
            e = aa(this.ref, e);
          return new ia(this._node.getChild(t), e, Rn);
        }),
        (ia.prototype.exists = function () {
          return !this._node.isEmpty();
        }),
        (ia.prototype.exportVal = function () {
          return this._node.val(!0);
        }),
        (ia.prototype.forEach = function (n) {
          var r = this;
          return (
            !this._node.isLeafNode() &&
            !!this._node.forEachChild(this._index, function (e, t) {
              return n(new ia(t, aa(r.ref, e), Rn));
            })
          );
        }),
        (ia.prototype.hasChild = function (e) {
          e = new Ot(e);
          return !this._node.getChild(e).isEmpty();
        }),
        (ia.prototype.hasChildren = function () {
          return !this._node.isLeafNode() && !this._node.isEmpty();
        }),
        (ia.prototype.toJSON = function () {
          return this.exportVal();
        }),
        (ia.prototype.val = function () {
          return this._node.val();
        }),
        ia);
      function ia(e, t, n) {
        (this._node = e), (this.ref = t), (this._index = n);
      }
      function oa(e, t) {
        return (
          (e = Q(e))._checkNotDeleted("ref"),
          void 0 !== t ? aa(e._root, t) : e._root
        );
      }
      function sa(e, t) {
        (e = Q(e))._checkNotDeleted("refFromURL");
        var n = Ws(t, e._repo.repoInfo_.nodeAdmin);
        as("refFromURL", n);
        t = n.repoInfo;
        return (
          e._repo.repoInfo_.isCustomHost() ||
            t.host === e._repo.repoInfo_.host ||
            Re(
              "refFromURL: Host name does not match the current database: (found " +
                t.host +
                " but expected " +
                e._repo.repoInfo_.host +
                ")"
            ),
          oa(e, n.path.toString())
        );
      }
      function aa(e, t) {
        return (
          (null === Lt((e = Q(e))._path) ? os : is)("child", "path", t, !1),
          new ta(e._repo, Ut(e._path, t))
        );
      }
      function ua(e, t) {
        (e = Q(e)), ss("set", e._path), ns("set", t, e._path, !1);
        var n = new w();
        return (
          Es(
            e._repo,
            e._path,
            t,
            null,
            n.wrapCallback(function () {})
          ),
          n.promise
        );
      }
      function la(e, t) {
        Go("update", t, e._path, !1);
        var n = new w();
        return (
          (function (i, o, e, s) {
            Ns(i, "update", { path: o.toString(), value: e });
            var a,
              t,
              n = !0,
              r = ms(i),
              u = {};
            Fe(e, function (e, t) {
              (n = !1), (u[e] = Mo(Ut(o, e), Yn(t), i.serverSyncTree_, r));
            }),
              n
                ? (Ne("update() called with empty data.  Don't do anything."),
                  xs(0, s, "ok", void 0))
                : ((a = Ts(i)),
                  (t = co(i.serverSyncTree_, o, u, a)),
                  ls(i.eventQueue_, t),
                  i.server_.merge(o.toString(), e, function (e, t) {
                    var n = "ok" === e;
                    n || Oe("update at " + o + " failed: " + e);
                    var r = po(i.serverSyncTree_, a, !n),
                      n = 0 < r.length ? Ds(i, o) : o;
                    cs(i.eventQueue_, n, r), xs(0, s, e, t);
                  }),
                  Fe(e, function (e) {
                    e = Fs(i, Ut(o, e));
                    Ds(i, e);
                  }),
                  cs(i.eventQueue_, o, []));
          })(
            e._repo,
            e._path,
            t,
            n.wrapCallback(function () {})
          ),
          n.promise
        );
      }
      function ha(t) {
        return (
          (t = Q(t)),
          (n = t._repo),
          (r = t),
          (null != (e = go(n.serverSyncTree_, r))
            ? Promise.resolve(e)
            : n.server_.get(r).then(
                function (e) {
                  var t = Yn(e).withIndex(r._queryParams.getIndex()),
                    e = fo(n.serverSyncTree_, r._path, t);
                  return hs(n.eventQueue_, r._path, e), Promise.resolve(t);
                },
                function (e) {
                  return (
                    Ns(n, "get for query " + O(r) + " failed: " + e),
                    Promise.reject(new Error(e))
                  );
                }
              )
          ).then(function (e) {
            return new ra(
              e,
              new ta(t._repo, t._path),
              t._queryParams.getIndex()
            );
          })
        );
        var n, r, e;
      }
      var ca =
        ((pa.prototype.respondsTo = function (e) {
          return "value" === e;
        }),
        (pa.prototype.createEvent = function (e, t) {
          var n = t._queryParams.getIndex();
          return new Us(
            "value",
            this,
            new ra(e.snapshotNode, new ta(t._repo, t._path), n)
          );
        }),
        (pa.prototype.getEventRunner = function (e) {
          var t = this;
          return "cancel" === e.getEventType()
            ? function () {
                return t.callbackContext.onCancel(e.error);
              }
            : function () {
                return t.callbackContext.onValue(e.snapshot, null);
              };
        }),
        (pa.prototype.createCancelEvent = function (e, t) {
          return this.callbackContext.hasCancelCallback
            ? new Vs(this, e, t)
            : null;
        }),
        (pa.prototype.matches = function (e) {
          return (
            e instanceof pa &&
            (!e.callbackContext ||
              !this.callbackContext ||
              e.callbackContext.matches(this.callbackContext))
          );
        }),
        (pa.prototype.hasAnyCallback = function () {
          return null !== this.callbackContext;
        }),
        pa);
      function pa(e) {
        this.callbackContext = e;
      }
      var da =
        ((fa.prototype.respondsTo = function (e) {
          e = "children_added" === e ? "child_added" : e;
          return (
            this.eventType ===
            (e = "children_removed" === e ? "child_removed" : e)
          );
        }),
        (fa.prototype.createCancelEvent = function (e, t) {
          return this.callbackContext.hasCancelCallback
            ? new Vs(this, e, t)
            : null;
        }),
        (fa.prototype.createEvent = function (e, t) {
          g(null != e.childName, "Child events should have a childName.");
          var n = aa(new ta(t._repo, t._path), e.childName),
            t = t._queryParams.getIndex();
          return new Us(e.type, this, new ra(e.snapshotNode, n, t), e.prevName);
        }),
        (fa.prototype.getEventRunner = function (e) {
          var t = this;
          return "cancel" === e.getEventType()
            ? function () {
                return t.callbackContext.onCancel(e.error);
              }
            : function () {
                return t.callbackContext.onValue(e.snapshot, e.prevName);
              };
        }),
        (fa.prototype.matches = function (e) {
          return (
            e instanceof fa &&
            this.eventType === e.eventType &&
            (!this.callbackContext ||
              !e.callbackContext ||
              this.callbackContext.matches(e.callbackContext))
          );
        }),
        (fa.prototype.hasAnyCallback = function () {
          return !!this.callbackContext;
        }),
        fa);
      function fa(e, t) {
        (this.eventType = e), (this.callbackContext = t);
      }
      function _a(n, e, t, r, i) {
        var o;
        "object" == typeof r && ((s = void 0), (i = r)),
          "function" == typeof r && (s = r),
          i &&
            i.onlyOnce &&
            (((i = function (e, t) {
              ks(n._repo, n, a), o(e, t);
            }).userCallback = (o = t).userCallback),
            (i.context = t.context),
            (t = i));
        var s,
          t = new Hs(t, s || void 0),
          a = "value" === e ? new ca(t) : new da(e, t);
        return (
          (s = n._repo),
          (e = a),
          (e =
            ".info" === Lt((t = n)._path)
              ? yo(s.infoSyncTree_, t, e)
              : yo(s.serverSyncTree_, t, e)),
          hs(s.eventQueue_, t._path, e),
          function () {
            return ks(n._repo, n, a);
          }
        );
      }
      function ya(e, t, n, r) {
        return _a(e, "value", t, n, r);
      }
      function va(e, t, n, r) {
        return _a(e, "child_added", t, n, r);
      }
      function ga(e, t, n, r) {
        return _a(e, "child_changed", t, n, r);
      }
      function ma(e, t, n, r) {
        return _a(e, "child_moved", t, n, r);
      }
      function wa(e, t, n, r) {
        return _a(e, "child_removed", t, n, r);
      }
      function Ca(e, t, n) {
        var r = null,
          n = n ? new Hs(n) : null;
        "value" === t ? (r = new ca(n)) : t && (r = new da(t, n)),
          ks(e._repo, e, r);
      }
      var ba,
        Tt = function () {},
        Ta =
          (n(Ea, (ba = Tt)),
          (Ea.prototype._apply = function (e) {
            ns("endAt", this._value, e._path, !0);
            var t = mr(e._queryParams, this._value, this._key);
            if ((Zs(t), Xs(t), e._queryParams.hasEnd()))
              throw new Error(
                "endAt: Starting point was already set (by another call to endAt, endBefore or equalTo)."
              );
            return new Gs(e._repo, e._path, t, e._orderByCalled);
          }),
          Ea);
      function Ea(e, t) {
        var n = ba.call(this) || this;
        return (n._value = e), (n._key = t), n;
      }
      var Ia,
        Sa =
          (n(ka, (Ia = Tt)),
          (ka.prototype._apply = function (e) {
            ns("endBefore", this._value, e._path, !1);
            var t,
              n,
              r,
              r =
                ((t = e._queryParams),
                (n = this._value),
                (r = this._key),
                ((r =
                  t.index_ === cn
                    ? mr(t, (n = "string" == typeof n ? er(n) : n), r)
                    : mr(t, n, null == r ? De : er(r))).endBeforeSet_ = !0),
                r);
            if ((Zs(r), Xs(r), e._queryParams.hasEnd()))
              throw new Error(
                "endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo)."
              );
            return new Gs(e._repo, e._path, r, e._orderByCalled);
          }),
          ka);
      function ka(e, t) {
        var n = Ia.call(this) || this;
        return (n._value = e), (n._key = t), n;
      }
      var Pa,
        Na =
          (n(xa, (Pa = Tt)),
          (xa.prototype._apply = function (e) {
            ns("startAt", this._value, e._path, !0);
            var t = gr(e._queryParams, this._value, this._key);
            if ((Zs(t), Xs(t), e._queryParams.hasStart()))
              throw new Error(
                "startAt: Starting point was already set (by another call to startAt, startBefore or equalTo)."
              );
            return new Gs(e._repo, e._path, t, e._orderByCalled);
          }),
          xa);
      function xa(e, t) {
        var n = Pa.call(this) || this;
        return (n._value = e), (n._key = t), n;
      }
      var Ra,
        Oa =
          (n(Da, (Ra = Tt)),
          (Da.prototype._apply = function (e) {
            ns("startAfter", this._value, e._path, !1);
            var t,
              n,
              r,
              r =
                ((t = e._queryParams),
                (n = this._value),
                (r = this._key),
                ((r =
                  t.index_ === cn
                    ? gr(t, (n = "string" == typeof n ? Zn(n) : n), r)
                    : gr(t, n, null == r ? Ae : Zn(r))).startAfterSet_ = !0),
                r);
            if ((Zs(r), Xs(r), e._queryParams.hasStart()))
              throw new Error(
                "startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo)."
              );
            return new Gs(e._repo, e._path, r, e._orderByCalled);
          }),
          Da);
      function Da(e, t) {
        var n = Ra.call(this) || this;
        return (n._value = e), (n._key = t), n;
      }
      var Aa,
        La =
          (n(Ma, (Aa = Tt)),
          (Ma.prototype._apply = function (e) {
            if (e._queryParams.hasLimit())
              throw new Error(
                "limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast)."
              );
            return new Gs(
              e._repo,
              e._path,
              ((t = e._queryParams),
              (n = this._limit),
              ((t = t.copy()).limitSet_ = !0),
              (t.limit_ = n),
              (t.viewFrom_ = "l"),
              t),
              e._orderByCalled
            );
            var t, n;
          }),
          Ma);
      function Ma(e) {
        var t = Aa.call(this) || this;
        return (t._limit = e), t;
      }
      var Fa,
        qa =
          (n(Wa, (Fa = Tt)),
          (Wa.prototype._apply = function (e) {
            if (e._queryParams.hasLimit())
              throw new Error(
                "limitToLast: Limit was already set (by another call to limitToFirst or limitToLast)."
              );
            return new Gs(
              e._repo,
              e._path,
              ((t = e._queryParams),
              (n = this._limit),
              ((t = t.copy()).limitSet_ = !0),
              (t.limit_ = n),
              (t.viewFrom_ = "r"),
              t),
              e._orderByCalled
            );
            var t, n;
          }),
          Wa);
      function Wa(e) {
        var t = Fa.call(this) || this;
        return (t._limit = e), t;
      }
      var ja,
        Ua =
          (n(Ba, (ja = Tt)),
          (Ba.prototype._apply = function (e) {
            Js(e, "orderByChild");
            var t = new Ot(this._path);
            if (Bt(t))
              throw new Error(
                "orderByChild: cannot pass in empty path. Use orderByValue() instead."
              );
            (t = new $n(t)), (t = wr(e._queryParams, t));
            return Xs(t), new Gs(e._repo, e._path, t, !0);
          }),
          Ba);
      function Ba(e) {
        var t = ja.call(this) || this;
        return (t._path = e), t;
      }
      var Va,
        za =
          (n(Ha, (Va = Tt)),
          (Ha.prototype._apply = function (e) {
            Js(e, "orderByKey");
            var t = wr(e._queryParams, cn);
            return Xs(t), new Gs(e._repo, e._path, t, !0);
          }),
          Ha);
      function Ha() {
        return (null !== Va && Va.apply(this, arguments)) || this;
      }
      var Qa,
        Ya =
          (n(Ka, (Qa = Tt)),
          (Ka.prototype._apply = function (e) {
            Js(e, "orderByPriority");
            var t = wr(e._queryParams, Rn);
            return Xs(t), new Gs(e._repo, e._path, t, !0);
          }),
          Ka);
      function Ka() {
        return (null !== Qa && Qa.apply(this, arguments)) || this;
      }
      var Ga,
        $a =
          (n(Ja, (Ga = Tt)),
          (Ja.prototype._apply = function (e) {
            Js(e, "orderByValue");
            var t = wr(e._queryParams, rr);
            return Xs(t), new Gs(e._repo, e._path, t, !0);
          }),
          Ja);
      function Ja() {
        return (null !== Ga && Ga.apply(this, arguments)) || this;
      }
      var Xa,
        Za,
        eu,
        tu =
          (n(nu, (Xa = Tt)),
          (nu.prototype._apply = function (e) {
            if (
              (ns("equalTo", this._value, e._path, !1),
              e._queryParams.hasStart())
            )
              throw new Error(
                "equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo)."
              );
            if (e._queryParams.hasEnd())
              throw new Error(
                "equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo)."
              );
            return new Ta(this._value, this._key)._apply(
              new Na(this._value, this._key)._apply(e)
            );
          }),
          nu);
      function nu(e, t) {
        var n = Xa.call(this) || this;
        return (n._value = e), (n._key = t), n;
      }
      function ru(e) {
        for (var t, n, r = [], i = 1; i < arguments.length; i++)
          r[i - 1] = arguments[i];
        var o = Q(e);
        try {
          for (var s = _(r), a = s.next(); !a.done; a = s.next())
            o = a.value._apply(o);
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            a && !a.done && (n = s.return) && n.call(s);
          } finally {
            if (t) throw t.error;
          }
        }
        return o;
      }
      (Za = ta),
        g(!Vi, "__referenceConstructor has already been defined"),
        (Vi = Za),
        (eu = ta),
        g(!$i, "__referenceConstructor has already been defined"),
        ($i = eu);
      var iu = "FIREBASE_DATABASE_EMULATOR_HOST",
        ou = {},
        su = !1;
      function au(e, t, n, r, i) {
        var o = r || e.options.databaseURL;
        void 0 === o &&
          (e.options.projectId ||
            Re(
              "Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."
            ),
          Ne("Using default host for project ", e.options.projectId),
          (o = e.options.projectId + "-default-rtdb.firebaseio.com"));
        var s,
          a = Ws(o, i),
          u = a.repoInfo,
          r = void 0;
        (r = "undefined" != typeof process ? process.env[iu] : r)
          ? ((s = !0),
            (o = "http://" + r + "?ns=" + u.namespace),
            (u = (a = Ws(o, i)).repoInfo))
          : (s = !a.repoInfo.secure);
        t = i && s ? new Ge(Ge.OWNER) : new Ye(e.name, e.options, t);
        as("Invalid Firebase Database URL", a),
          Bt(a.path) ||
            Re(
              "Database URL must point to the root of a Firebase Database (not including a child path)."
            );
        n = (function (e, t, n, r) {
          var i = ou[t.name];
          i || ((i = {}), (ou[t.name] = i));
          (t = i[e.toURLString()]) &&
            Re(
              "Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."
            );
          return (t = new _s(e, su, n, r)), (i[e.toURLString()] = t);
        })(u, e, t, new He(e.name, n));
        return new uu(n, e);
      }
      var uu =
        (Object.defineProperty(lu.prototype, "_repo", {
          get: function () {
            return (
              this._instanceStarted ||
                (vs(
                  this._repoInternal,
                  this.app.options.appId,
                  this.app.options.databaseAuthVariableOverride
                ),
                (this._instanceStarted = !0)),
              this._repoInternal
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(lu.prototype, "_root", {
          get: function () {
            return (
              this._rootInternal ||
                (this._rootInternal = new ta(this._repo, At())),
              this._rootInternal
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (lu.prototype._delete = function () {
          var e, t, n;
          return (
            null !== this._rootInternal &&
              ((e = this._repo),
              (t = this.app.name),
              ((n = ou[t]) && n[e.key] === e) ||
                Re(
                  "Database " +
                    t +
                    "(" +
                    e.repoInfo_ +
                    ") has already been deleted."
                ),
              Ps(e),
              delete n[e.key],
              (this._repoInternal = null),
              (this._rootInternal = null)),
            Promise.resolve()
          );
        }),
        (lu.prototype._checkNotDeleted = function (e) {
          null === this._rootInternal &&
            Re("Cannot call " + e + " on a deleted database.");
        }),
        lu);
      function lu(e, t) {
        (this._repoInternal = e),
          (this.app = t),
          (this.type = "database"),
          (this._instanceStarted = !1);
      }
      function hu(e, t, n, r) {
        void 0 === r && (r = {}),
          (e = Q(e))._checkNotDeleted("useEmulator"),
          e._instanceStarted &&
            Re(
              "Cannot call useEmulator() after instance has already been initialized."
            );
        var i = e._repoInternal,
          o = void 0;
        i.repoInfo_.nodeAdmin
          ? (r.mockUserToken &&
              Re(
                'mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'
              ),
            (o = new Ge(Ge.OWNER)))
          : r.mockUserToken &&
            ((e =
              "string" == typeof r.mockUserToken
                ? r.mockUserToken
                : (function (e, t) {
                    if (e.uid)
                      throw new Error(
                        'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
                      );
                    var n = t || "demo-project",
                      r = e.iat || 0;
                    if (!(t = e.sub || e.user_id))
                      throw new Error(
                        "mockUserToken must contain 'sub' or 'user_id' field!"
                      );
                    return (
                      (e = l(
                        {
                          iss: "https://securetoken.google.com/" + n,
                          aud: n,
                          iat: r,
                          exp: r + 3600,
                          auth_time: r,
                          sub: t,
                          user_id: t,
                          firebase: {
                            sign_in_provider: "custom",
                            identities: {},
                          },
                        },
                        e
                      )),
                      [
                        d(JSON.stringify({ alg: "none", type: "JWT" })),
                        d(JSON.stringify(e)),
                        "",
                      ].join(".")
                    );
                  })(r.mockUserToken, e.app.options.projectId)),
            (o = new Ge(e))),
          (o = o),
          ((i = i).repoInfo_ = new et(
            t + ":" + n,
            !1,
            i.repoInfo_.namespace,
            i.repoInfo_.webSocketOnly,
            i.repoInfo_.nodeAdmin,
            i.repoInfo_.persistenceKey,
            i.repoInfo_.includeNamespaceInQueryParams
          )),
          o && (i.authTokenProvider_ = o);
      }
      function cu(e) {
        (e = Q(e))._checkNotDeleted("goOnline"),
          (e = e._repo).persistentConnection_ &&
            e.persistentConnection_.resume(ds);
      }
      var pu = { ".sv": "timestamp" };
      var du =
        ((fu.prototype.toJSON = function () {
          return {
            committed: this.committed,
            snapshot: this.snapshot.toJSON(),
          };
        }),
        fu);
      function fu(e, t) {
        (this.committed = e), (this.snapshot = t);
      }
      function _u(i, e, t) {
        if (
          ((i = Q(i)),
          ss("Reference.transaction", i._path),
          ".length" === i.key || ".keys" === i.key)
        )
          throw (
            "Reference.transaction failed: " + i.key + " is a read-only object."
          );
        var t =
            null === (n = null == t ? void 0 : t.applyLocally) ||
            void 0 === n ||
            n,
          o = new w(),
          n = ya(i, function () {});
        return (
          (function (e, t, n, r, i, o) {
            Ns(e, "transaction on " + t);
            var s = {
                path: t,
                update: n,
                onComplete: r,
                status: null,
                order: Ie(),
                applyLocally: o,
                retryCount: 0,
                unwatcher: i,
                abortReason: null,
                currentWriteId: null,
                currentInputSnapshot: null,
                currentOutputSnapshotRaw: null,
                currentOutputSnapshotResolved: null,
              },
              n = Rs(e, t, void 0);
            (s.currentInputSnapshot = n),
              void 0 === (r = s.update(n.val()))
                ? (s.unwatcher(),
                  (s.currentOutputSnapshotRaw = null),
                  (s.currentOutputSnapshotResolved = null),
                  s.onComplete &&
                    s.onComplete(null, !1, s.currentInputSnapshot))
                : (rs("transaction failed: Data returned ", r, s.path),
                  (s.status = 0),
                  (i = Uo((o = jo(e.transactionQueueTree_, t))) || []).push(s),
                  Bo(o, i),
                  (o = void 0),
                  "object" == typeof r && null !== r && A(r, ".priority")
                    ? ((o = L(r, ".priority")),
                      g(
                        ts(o),
                        "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null."
                      ))
                    : (o = (vo(e.serverSyncTree_, t) || Bn.EMPTY_NODE)
                        .getPriority()
                        .val()),
                  (i = ms(e)),
                  (o = Yn(r, o)),
                  (i = Fo(o, n, i)),
                  (s.currentOutputSnapshotRaw = o),
                  (s.currentOutputSnapshotResolved = i),
                  (s.currentWriteId = Ts(e)),
                  (s = ho(
                    e.serverSyncTree_,
                    t,
                    i,
                    s.currentWriteId,
                    s.applyLocally
                  )),
                  cs(e.eventQueue_, t, s),
                  Os(e, e.transactionQueueTree_));
          })(
            i._repo,
            i._path,
            e,
            function (e, t, n) {
              var r;
              e
                ? o.reject(e)
                : ((r = new ra(n, new ta(i._repo, i._path), Rn)),
                  o.resolve(new du(t, r)));
            },
            n,
            t
          ),
          o.promise
        );
      }
      var yu =
        ((vu.prototype.cancel = function (t) {
          U("OnDisconnect.cancel", 0, 1, arguments.length),
            V("OnDisconnect.cancel", "onComplete", t, !0);
          var e = this._delegate.cancel();
          return (
            t &&
              e.then(
                function () {
                  return t(null);
                },
                function (e) {
                  return t(e);
                }
              ),
            e
          );
        }),
        (vu.prototype.remove = function (t) {
          U("OnDisconnect.remove", 0, 1, arguments.length),
            V("OnDisconnect.remove", "onComplete", t, !0);
          var e = this._delegate.remove();
          return (
            t &&
              e.then(
                function () {
                  return t(null);
                },
                function (e) {
                  return t(e);
                }
              ),
            e
          );
        }),
        (vu.prototype.set = function (e, t) {
          U("OnDisconnect.set", 1, 2, arguments.length),
            V("OnDisconnect.set", "onComplete", t, !0);
          e = this._delegate.set(e);
          return (
            t &&
              e.then(
                function () {
                  return t(null);
                },
                function (e) {
                  return t(e);
                }
              ),
            e
          );
        }),
        (vu.prototype.setWithPriority = function (e, t, n) {
          U("OnDisconnect.setWithPriority", 2, 3, arguments.length),
            V("OnDisconnect.setWithPriority", "onComplete", n, !0);
          t = this._delegate.setWithPriority(e, t);
          return (
            n &&
              t.then(
                function () {
                  return n(null);
                },
                function (e) {
                  return n(e);
                }
              ),
            t
          );
        }),
        (vu.prototype.update = function (e, t) {
          if (
            (U("OnDisconnect.update", 1, 2, arguments.length), Array.isArray(e))
          ) {
            for (var n = {}, r = 0; r < e.length; ++r) n["" + r] = e[r];
            (e = n),
              Oe(
                "Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children."
              );
          }
          V("OnDisconnect.update", "onComplete", t, !0);
          var i = this._delegate.update(e);
          return (
            t &&
              i.then(
                function () {
                  return t(null);
                },
                function (e) {
                  return t(e);
                }
              ),
            i
          );
        }),
        vu);
      function vu(e) {
        this._delegate = e;
      }
      var gu =
        ((mu.prototype.toJSON = function () {
          return (
            U("TransactionResult.toJSON", 0, 1, arguments.length),
            { committed: this.committed, snapshot: this.snapshot.toJSON() }
          );
        }),
        mu);
      function mu(e, t) {
        (this.committed = e), (this.snapshot = t);
      }
      var wu =
        ((Cu.prototype.val = function () {
          return (
            U("DataSnapshot.val", 0, 0, arguments.length), this._delegate.val()
          );
        }),
        (Cu.prototype.exportVal = function () {
          return (
            U("DataSnapshot.exportVal", 0, 0, arguments.length),
            this._delegate.exportVal()
          );
        }),
        (Cu.prototype.toJSON = function () {
          return (
            U("DataSnapshot.toJSON", 0, 1, arguments.length),
            this._delegate.toJSON()
          );
        }),
        (Cu.prototype.exists = function () {
          return (
            U("DataSnapshot.exists", 0, 0, arguments.length),
            this._delegate.exists()
          );
        }),
        (Cu.prototype.child = function (e) {
          return (
            U("DataSnapshot.child", 0, 1, arguments.length),
            (e = String(e)),
            is("DataSnapshot.child", "path", e, !1),
            new Cu(this._database, this._delegate.child(e))
          );
        }),
        (Cu.prototype.hasChild = function (e) {
          return (
            U("DataSnapshot.hasChild", 1, 1, arguments.length),
            is("DataSnapshot.hasChild", "path", e, !1),
            this._delegate.hasChild(e)
          );
        }),
        (Cu.prototype.getPriority = function () {
          return (
            U("DataSnapshot.getPriority", 0, 0, arguments.length),
            this._delegate.priority
          );
        }),
        (Cu.prototype.forEach = function (t) {
          var n = this;
          return (
            U("DataSnapshot.forEach", 1, 1, arguments.length),
            V("DataSnapshot.forEach", "action", t, !1),
            this._delegate.forEach(function (e) {
              return t(new Cu(n._database, e));
            })
          );
        }),
        (Cu.prototype.hasChildren = function () {
          return (
            U("DataSnapshot.hasChildren", 0, 0, arguments.length),
            this._delegate.hasChildren()
          );
        }),
        Object.defineProperty(Cu.prototype, "key", {
          get: function () {
            return this._delegate.key;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (Cu.prototype.numChildren = function () {
          return (
            U("DataSnapshot.numChildren", 0, 0, arguments.length),
            this._delegate.size
          );
        }),
        (Cu.prototype.getRef = function () {
          return (
            U("DataSnapshot.ref", 0, 0, arguments.length),
            new Iu(this._database, this._delegate.ref)
          );
        }),
        Object.defineProperty(Cu.prototype, "ref", {
          get: function () {
            return this.getRef();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Cu);
      function Cu(e, t) {
        (this._database = e), (this._delegate = t);
      }
      var bu =
        ((Tu.prototype.on = function (e, n, t, r) {
          var i = this;
          U("Query.on", 2, 4, arguments.length),
            V("Query.on", "callback", n, !1);
          function o(e, t) {
            n.call(s.context, new wu(i.database, e), t);
          }
          var s = Tu.getCancelAndContextArgs_("Query.on", t, r);
          (o.userCallback = n), (o.context = s.context);
          var a =
            null === (r = s.cancel) || void 0 === r
              ? void 0
              : r.bind(s.context);
          switch (e) {
            case "value":
              return ya(this._delegate, o, a), n;
            case "child_added":
              return va(this._delegate, o, a), n;
            case "child_removed":
              return wa(this._delegate, o, a), n;
            case "child_changed":
              return ga(this._delegate, o, a), n;
            case "child_moved":
              return ma(this._delegate, o, a), n;
            default:
              throw new Error(
                B("Query.on", "eventType") +
                  'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
              );
          }
        }),
        (Tu.prototype.off = function (e, t, n) {
          var r;
          U("Query.off", 0, 3, arguments.length),
            (function (e, t, n) {
              if (!n || void 0 !== t)
                switch (t) {
                  case "value":
                  case "child_added":
                  case "child_removed":
                  case "child_changed":
                  case "child_moved":
                    break;
                  default:
                    throw new Error(
                      B(e, "eventType") +
                        'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
                    );
                }
            })("Query.off", e, !0),
            V("Query.off", "callback", t, !0),
            z("Query.off", "context", n, !0),
            t
              ? (((r = function () {}).userCallback = t),
                (r.context = n),
                Ca(this._delegate, e, r))
              : Ca(this._delegate, e);
        }),
        (Tu.prototype.get = function () {
          var t = this;
          return ha(this._delegate).then(function (e) {
            return new wu(t.database, e);
          });
        }),
        (Tu.prototype.once = function (e, n, t, r) {
          var i = this;
          U("Query.once", 1, 4, arguments.length),
            V("Query.once", "callback", n, !0);
          function o(e, t) {
            (e = new wu(i.database, e)),
              n && n.call(s.context, e, t),
              a.resolve(e);
          }
          var s = Tu.getCancelAndContextArgs_("Query.once", t, r),
            a = new w();
          (o.userCallback = n), (o.context = s.context);
          function u(e) {
            s.cancel && s.cancel.call(s.context, e), a.reject(e);
          }
          switch (e) {
            case "value":
              ya(this._delegate, o, u, { onlyOnce: !0 });
              break;
            case "child_added":
              va(this._delegate, o, u, { onlyOnce: !0 });
              break;
            case "child_removed":
              wa(this._delegate, o, u, { onlyOnce: !0 });
              break;
            case "child_changed":
              ga(this._delegate, o, u, { onlyOnce: !0 });
              break;
            case "child_moved":
              ma(this._delegate, o, u, { onlyOnce: !0 });
              break;
            default:
              throw new Error(
                B("Query.once", "eventType") +
                  'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
              );
          }
          return a.promise;
        }),
        (Tu.prototype.limitToFirst = function (e) {
          return (
            U("Query.limitToFirst", 1, 1, arguments.length),
            new Tu(
              this.database,
              ru(
                this._delegate,
                (function (e) {
                  if ("number" != typeof e || Math.floor(e) !== e || e <= 0)
                    throw new Error(
                      "limitToFirst: First argument must be a positive integer."
                    );
                  return new La(e);
                })(e)
              )
            )
          );
        }),
        (Tu.prototype.limitToLast = function (e) {
          return (
            U("Query.limitToLast", 1, 1, arguments.length),
            new Tu(
              this.database,
              ru(
                this._delegate,
                (function (e) {
                  if ("number" != typeof e || Math.floor(e) !== e || e <= 0)
                    throw new Error(
                      "limitToLast: First argument must be a positive integer."
                    );
                  return new qa(e);
                })(e)
              )
            )
          );
        }),
        (Tu.prototype.orderByChild = function (e) {
          return (
            U("Query.orderByChild", 1, 1, arguments.length),
            new Tu(
              this.database,
              ru(
                this._delegate,
                (function (e) {
                  if ("$key" === e)
                    throw new Error(
                      'orderByChild: "$key" is invalid.  Use orderByKey() instead.'
                    );
                  if ("$priority" === e)
                    throw new Error(
                      'orderByChild: "$priority" is invalid.  Use orderByPriority() instead.'
                    );
                  if ("$value" === e)
                    throw new Error(
                      'orderByChild: "$value" is invalid.  Use orderByValue() instead.'
                    );
                  return is("orderByChild", "path", e, !1), new Ua(e);
                })(e)
              )
            )
          );
        }),
        (Tu.prototype.orderByKey = function () {
          return (
            U("Query.orderByKey", 0, 0, arguments.length),
            new Tu(this.database, ru(this._delegate, new za()))
          );
        }),
        (Tu.prototype.orderByPriority = function () {
          return (
            U("Query.orderByPriority", 0, 0, arguments.length),
            new Tu(this.database, ru(this._delegate, new Ya()))
          );
        }),
        (Tu.prototype.orderByValue = function () {
          return (
            U("Query.orderByValue", 0, 0, arguments.length),
            new Tu(this.database, ru(this._delegate, new $a()))
          );
        }),
        (Tu.prototype.startAt = function (e, t) {
          return (
            void 0 === e && (e = null),
            U("Query.startAt", 0, 2, arguments.length),
            new Tu(
              this.database,
              ru(
                this._delegate,
                (void 0 === (e = e) && (e = null),
                Jo("startAt", "key", (t = t), !0),
                new Na(e, t))
              )
            )
          );
        }),
        (Tu.prototype.startAfter = function (e, t) {
          return (
            void 0 === e && (e = null),
            U("Query.startAfter", 0, 2, arguments.length),
            new Tu(
              this.database,
              ru(
                this._delegate,
                ((e = e), Jo("startAfter", "key", (t = t), !0), new Oa(e, t))
              )
            )
          );
        }),
        (Tu.prototype.endAt = function (e, t) {
          return (
            void 0 === e && (e = null),
            U("Query.endAt", 0, 2, arguments.length),
            new Tu(
              this.database,
              ru(
                this._delegate,
                ((e = e), Jo("endAt", "key", (t = t), !0), new Ta(e, t))
              )
            )
          );
        }),
        (Tu.prototype.endBefore = function (e, t) {
          return (
            void 0 === e && (e = null),
            U("Query.endBefore", 0, 2, arguments.length),
            new Tu(
              this.database,
              ru(
                this._delegate,
                ((e = e), Jo("endBefore", "key", (t = t), !0), new Sa(e, t))
              )
            )
          );
        }),
        (Tu.prototype.equalTo = function (e, t) {
          return (
            U("Query.equalTo", 1, 2, arguments.length),
            new Tu(
              this.database,
              ru(
                this._delegate,
                ((e = e), Jo("equalTo", "key", (t = t), !0), new tu(e, t))
              )
            )
          );
        }),
        (Tu.prototype.toString = function () {
          return (
            U("Query.toString", 0, 0, arguments.length),
            this._delegate.toString()
          );
        }),
        (Tu.prototype.toJSON = function () {
          return (
            U("Query.toJSON", 0, 1, arguments.length), this._delegate.toJSON()
          );
        }),
        (Tu.prototype.isEqual = function (e) {
          if ((U("Query.isEqual", 1, 1, arguments.length), e instanceof Tu))
            return this._delegate.isEqual(e._delegate);
          throw new Error(
            "Query.isEqual failed: First argument must be an instance of firebase.database.Query."
          );
        }),
        (Tu.getCancelAndContextArgs_ = function (e, t, n) {
          var r = { cancel: void 0, context: void 0 };
          if (t && n)
            (r.cancel = t),
              V(e, "cancel", r.cancel, !0),
              (r.context = n),
              z(e, "context", r.context, !0);
          else if (t)
            if ("object" == typeof t && null !== t) r.context = t;
            else {
              if ("function" != typeof t)
                throw new Error(
                  B(e, "cancelOrContext") +
                    " must either be a cancel callback or a context object."
                );
              r.cancel = t;
            }
          return r;
        }),
        Object.defineProperty(Tu.prototype, "ref", {
          get: function () {
            return new Iu(
              this.database,
              new ta(this._delegate._repo, this._delegate._path)
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Tu);
      function Tu(e, t) {
        (this.database = e), (this._delegate = t);
      }
      var Eu,
        Iu =
          (n(Su, (Eu = bu)),
          (Su.prototype.getKey = function () {
            return (
              U("Reference.key", 0, 0, arguments.length), this._delegate.key
            );
          }),
          (Su.prototype.child = function (e) {
            return (
              U("Reference.child", 1, 1, arguments.length),
              "number" == typeof e && (e = String(e)),
              new Su(this.database, aa(this._delegate, e))
            );
          }),
          (Su.prototype.getParent = function () {
            U("Reference.parent", 0, 0, arguments.length);
            var e = this._delegate.parent;
            return e ? new Su(this.database, e) : null;
          }),
          (Su.prototype.getRoot = function () {
            return (
              U("Reference.root", 0, 0, arguments.length),
              new Su(this.database, this._delegate.root)
            );
          }),
          (Su.prototype.set = function (e, t) {
            U("Reference.set", 1, 2, arguments.length),
              V("Reference.set", "onComplete", t, !0);
            e = ua(this._delegate, e);
            return (
              t &&
                e.then(
                  function () {
                    return t(null);
                  },
                  function (e) {
                    return t(e);
                  }
                ),
              e
            );
          }),
          (Su.prototype.update = function (e, t) {
            if (
              (U("Reference.update", 1, 2, arguments.length), Array.isArray(e))
            ) {
              for (var n = {}, r = 0; r < e.length; ++r) n["" + r] = e[r];
              (e = n),
                Oe(
                  "Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children."
                );
            }
            ss("Reference.update", this._delegate._path),
              V("Reference.update", "onComplete", t, !0);
            var i = la(this._delegate, e);
            return (
              t &&
                i.then(
                  function () {
                    return t(null);
                  },
                  function (e) {
                    return t(e);
                  }
                ),
              i
            );
          }),
          (Su.prototype.setWithPriority = function (e, t, n) {
            U("Reference.setWithPriority", 2, 3, arguments.length),
              V("Reference.setWithPriority", "onComplete", n, !0);
            t = (function (e, t, n) {
              if (
                (ss("setWithPriority", e._path),
                ns("setWithPriority", t, e._path, !1),
                $o("setWithPriority", n, !1),
                ".length" === e.key || ".keys" === e.key)
              )
                throw (
                  "setWithPriority failed: " + e.key + " is a read-only object."
                );
              var r = new w();
              return (
                Es(
                  e._repo,
                  e._path,
                  t,
                  n,
                  r.wrapCallback(function () {})
                ),
                r.promise
              );
            })(this._delegate, e, t);
            return (
              n &&
                t.then(
                  function () {
                    return n(null);
                  },
                  function (e) {
                    return n(e);
                  }
                ),
              t
            );
          }),
          (Su.prototype.remove = function (t) {
            U("Reference.remove", 0, 1, arguments.length),
              V("Reference.remove", "onComplete", t, !0);
            var e,
              e = ((e = this._delegate), ss("remove", e._path), ua(e, null));
            return (
              t &&
                e.then(
                  function () {
                    return t(null);
                  },
                  function (e) {
                    return t(e);
                  }
                ),
              e
            );
          }),
          (Su.prototype.transaction = function (e, t, n) {
            var r = this;
            U("Reference.transaction", 1, 3, arguments.length),
              V("Reference.transaction", "transactionUpdate", e, !1),
              V("Reference.transaction", "onComplete", t, !0),
              (function (e, t, n, r) {
                if ((!r || void 0 !== n) && "boolean" != typeof n)
                  throw new Error(B(e, t) + "must be a boolean.");
              })("Reference.transaction", "applyLocally", n, !0);
            n = _u(this._delegate, e, { applyLocally: n }).then(function (e) {
              return new gu(e.committed, new wu(r.database, e.snapshot));
            });
            return (
              t &&
                n.then(
                  function (e) {
                    return t(null, e.committed, e.snapshot);
                  },
                  function (e) {
                    return t(e, !1, null);
                  }
                ),
              n
            );
          }),
          (Su.prototype.setPriority = function (e, t) {
            U("Reference.setPriority", 1, 2, arguments.length),
              V("Reference.setPriority", "onComplete", t, !0);
            e = (function (e, t) {
              (e = Q(e)), ss("setPriority", e._path), $o("setPriority", t, !1);
              var n = new w();
              return (
                Es(
                  e._repo,
                  Ut(e._path, ".priority"),
                  t,
                  null,
                  n.wrapCallback(function () {})
                ),
                n.promise
              );
            })(this._delegate, e);
            return (
              t &&
                e.then(
                  function () {
                    return t(null);
                  },
                  function (e) {
                    return t(e);
                  }
                ),
              e
            );
          }),
          (Su.prototype.push = function (e, t) {
            var n = this;
            U("Reference.push", 0, 2, arguments.length),
              V("Reference.push", "onComplete", t, !0);
            var r = (function (e, t) {
                (e = Q(e)), ss("push", e._path), ns("push", t, e._path, !0);
                var n = gs(e._repo),
                  r = or(n),
                  n = aa(e, r),
                  i = aa(e, r),
                  t =
                    null != t
                      ? ua(i, t).then(function () {
                          return i;
                        })
                      : Promise.resolve(i);
                return (
                  (n.then = t.then.bind(t)),
                  (n.catch = t.then.bind(t, void 0)),
                  n
                );
              })(this._delegate, e),
              e = r.then(function (e) {
                return new Su(n.database, e);
              });
            t &&
              e.then(
                function () {
                  return t(null);
                },
                function (e) {
                  return t(e);
                }
              );
            r = new Su(this.database, r);
            return (
              (r.then = e.then.bind(e)), (r.catch = e.catch.bind(e, void 0)), r
            );
          }),
          (Su.prototype.onDisconnect = function () {
            return (
              ss("Reference.onDisconnect", this._delegate._path),
              new yu(new Ys(this._delegate._repo, this._delegate._path))
            );
          }),
          Object.defineProperty(Su.prototype, "key", {
            get: function () {
              return this.getKey();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Su.prototype, "parent", {
            get: function () {
              return this.getParent();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Su.prototype, "root", {
            get: function () {
              return this.getRoot();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Su);
      function Su(e, t) {
        var n =
          Eu.call(this, e, new Gs(t._repo, t._path, new yr(), !1)) || this;
        return (n.database = e), (n._delegate = t), n;
      }
      var ku =
        ((Pu.prototype.useEmulator = function (e, t, n) {
          hu(this._delegate, e, t, (n = void 0 === n ? {} : n));
        }),
        (Pu.prototype.ref = function (e) {
          if ((U("database.ref", 0, 1, arguments.length), e instanceof Iu)) {
            var t = sa(this._delegate, e.toString());
            return new Iu(this, t);
          }
          t = oa(this._delegate, e);
          return new Iu(this, t);
        }),
        (Pu.prototype.refFromURL = function (e) {
          U("database.refFromURL", 1, 1, arguments.length);
          e = sa(this._delegate, e);
          return new Iu(this, e);
        }),
        (Pu.prototype.goOffline = function () {
          var e;
          U("database.goOffline", 0, 0, arguments.length),
            (e = Q((e = this._delegate)))._checkNotDeleted("goOffline"),
            Ps(e._repo);
        }),
        (Pu.prototype.goOnline = function () {
          return (
            U("database.goOnline", 0, 0, arguments.length), cu(this._delegate)
          );
        }),
        (Pu.ServerValue = {
          TIMESTAMP: pu,
          increment: function (e) {
            return { ".sv": { increment: e } };
          },
        }),
        Pu);
      function Pu(e, t) {
        var n = this;
        (this._delegate = e),
          (this.app = t),
          (this.INTERNAL = {
            delete: function () {
              return n._delegate._delete();
            },
          });
      }
      var Nu = Object.freeze({
          __proto__: null,
          forceLongPolling: function () {
            vt.forceDisallow(), pt.forceAllow();
          },
          forceWebSockets: function () {
            pt.forceDisallow();
          },
          isWebSocketsAvailable: function () {
            return vt.isAvailable();
          },
          setSecurityDebugCallback: function (e, t) {
            e._delegate._repo.persistentConnection_.securityDebugCallback_ = t;
          },
          stats: function (e, t) {
            var i;
            (e = e._delegate._repo),
              void 0 === (t = t) && (t = !1),
              "undefined" != typeof console &&
                ((e = t
                  ? (e.statsListener_ || (e.statsListener_ = new Rr(e.stats_)),
                    e.statsListener_.get())
                  : e.stats_.get()),
                (i = Object.keys(e).reduce(function (e, t) {
                  return Math.max(t.length, e);
                }, 0)),
                Fe(e, function (e, t) {
                  for (var n = e, r = e.length; r < i + 2; r++) n += " ";
                  console.log(n + t);
                }));
          },
          statsIncrementCounter: function (e, t) {
            (e = e._delegate._repo),
              (t = t),
              e.stats_.incrementCounter(t),
              (e.statsReporter_.statsToReport_[t] = !0);
          },
          dataUpdateCount: function (e) {
            return e._delegate._repo.dataUpdateCount;
          },
          interceptServerData: function (e, t) {
            e._delegate._repo.interceptServerDataCallback_ = t;
          },
          initStandalone: function (e) {
            var t = e.app,
              n = e.url,
              r = e.version,
              i = e.customAuthImpl,
              o = e.namespace,
              e = void 0 !== (e = e.nodeAdmin) && e;
            return (
              ue(r),
              (r = new $(
                "auth-internal",
                new Z("database-standalone")
              )).setComponent(
                new Y(
                  "auth-internal",
                  function () {
                    return i;
                  },
                  "PRIVATE"
                )
              ),
              { instance: new ku(au(t, r, void 0, n, e), t), namespace: o }
            );
          },
        }),
        Tt = nn;
      (nn.prototype.simpleListen = function (e, t) {
        this.sendRequest("q", { p: e }, t);
      }),
        (nn.prototype.echo = function (e, t) {
          this.sendRequest("echo", { d: e }, t);
        });
      var xu,
        Ru = Object.freeze({
          __proto__: null,
          DataConnection: Tt,
          RealTimeConnection: Ct,
          hijackHash: function (i) {
            var o = nn.prototype.put;
            return (
              (nn.prototype.put = function (e, t, n, r) {
                void 0 !== r && (r = i()), o.call(this, e, t, n, r);
              }),
              function () {
                nn.prototype.put = o;
              }
            );
          },
          ConnectionTarget: et,
          queryIdentifier: function (e) {
            return e._delegate._queryIdentifier;
          },
          forceRestClient: function (e) {
            su = e;
          },
        }),
        Ou = ku.ServerValue;
      ue((xu = t.default).SDK_VERSION),
        xu.INTERNAL.registerComponent(
          new Y(
            "database",
            function (e, t) {
              var n = t.instanceIdentifier,
                r = e.getProvider("app").getImmediate(),
                t = e.getProvider("auth-internal"),
                e = e.getProvider("app-check-internal");
              return new ku(au(r, t, e, n), r);
            },
            "PUBLIC"
          )
            .setServiceProps({
              Reference: Iu,
              Query: bu,
              Database: ku,
              DataSnapshot: wu,
              enableLogging: fe,
              INTERNAL: Nu,
              ServerValue: Ou,
              TEST_ACCESS: Ru,
            })
            .setMultipleInstances(!0)
        ),
        xu.registerVersion("@firebase/database", "0.11.0");
    }.apply(this, arguments);
  } catch (e) {
    throw (
      (console.error(e),
      new Error(
        "Cannot instantiate firebase-database.js - be sure to load firebase-app.js first."
      ))
    );
  }
});
//# sourceMappingURL=firebase-database.js.map
