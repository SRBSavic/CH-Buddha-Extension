!(function () {
  var e,
    t,
    n = {
      723: function (e, t, n) {
        "use strict";
        function r(e) {
          i.length || (o(), !0), (i[i.length] = e);
        }
        e.exports = r;
        var o,
          i = [],
          a = 0;
        function c() {
          for (; a < i.length; ) {
            var e = a;
            if (((a += 1), i[e].call(), a > 1024)) {
              for (var t = 0, n = i.length - a; t < n; t++) i[t] = i[t + a];
              (i.length -= a), (a = 0);
            }
          }
          (i.length = 0), (a = 0), !1;
        }
        var s,
          u,
          l,
          p = void 0 !== n.g ? n.g : self,
          d = p.MutationObserver || p.WebKitMutationObserver;
        function m(e) {
          return function () {
            var t = setTimeout(r, 0),
              n = setInterval(r, 50);
            function r() {
              clearTimeout(t), clearInterval(n), e();
            }
          };
        }
        "function" == typeof d
          ? ((s = 1),
            (u = new d(c)),
            (l = document.createTextNode("")),
            u.observe(l, { characterData: !0 }),
            (o = function () {
              (s = -s), (l.data = s);
            }))
          : (o = m(c)),
          (r.requestFlush = o),
          (r.makeRequestCallFromTimer = m);
      },
      7373: function (e, t, n) {
        e.exports =
          n.p + "fingerprinted/img/amex-3440dd14f9308959e71dfef65267235f.svg";
      },
      8534: function (e, t, n) {
        e.exports =
          n.p +
          "fingerprinted/img/mastercard-4868931ddf88ab0fc551d18a1a859ff7.svg";
      },
      750: function (e, t, n) {
        e.exports =
          n.p + "fingerprinted/img/visa-0daded1e4b9a21ae5304a6794bb9e46a.svg";
      },
      3434: function (e, t, n) {
        "use strict";
        var r = n(723);
        function o() {}
        var i = null,
          a = {};
        function c(e) {
          if ("object" != typeof this)
            throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof e) throw new TypeError("not a function");
          (this._45 = 0),
            (this._81 = 0),
            (this._65 = null),
            (this._54 = null),
            e !== o && m(e, this);
        }
        function s(e, t) {
          for (; 3 === e._81; ) e = e._65;
          if ((c._10 && c._10(e), 0 === e._81))
            return 0 === e._45
              ? ((e._45 = 1), void (e._54 = t))
              : 1 === e._45
              ? ((e._45 = 2), void (e._54 = [e._54, t]))
              : void e._54.push(t);
          !(function (e, t) {
            r(function () {
              var n = 1 === e._81 ? t.onFulfilled : t.onRejected;
              if (null !== n) {
                var r = (function (e, t) {
                  try {
                    return e(t);
                  } catch (e) {
                    return (i = e), a;
                  }
                })(n, e._65);
                r === a ? l(t.promise, i) : u(t.promise, r);
              } else 1 === e._81 ? u(t.promise, e._65) : l(t.promise, e._65);
            });
          })(e, t);
        }
        function u(e, t) {
          if (t === e)
            return l(
              e,
              new TypeError("A promise cannot be resolved with itself.")
            );
          if (t && ("object" == typeof t || "function" == typeof t)) {
            var n = (function (e) {
              try {
                return e.then;
              } catch (e) {
                return (i = e), a;
              }
            })(t);
            if (n === a) return l(e, i);
            if (n === e.then && t instanceof c)
              return (e._81 = 3), (e._65 = t), void p(e);
            if ("function" == typeof n) return void m(n.bind(t), e);
          }
          (e._81 = 1), (e._65 = t), p(e);
        }
        function l(e, t) {
          (e._81 = 2), (e._65 = t), c._97 && c._97(e, t), p(e);
        }
        function p(e) {
          if ((1 === e._45 && (s(e, e._54), (e._54 = null)), 2 === e._45)) {
            for (var t = 0; t < e._54.length; t++) s(e, e._54[t]);
            e._54 = null;
          }
        }
        function d(e, t, n) {
          (this.onFulfilled = "function" == typeof e ? e : null),
            (this.onRejected = "function" == typeof t ? t : null),
            (this.promise = n);
        }
        function m(e, t) {
          var n = !1,
            r = (function (e, t, n) {
              try {
                e(t, n);
              } catch (e) {
                return (i = e), a;
              }
            })(
              e,
              function (e) {
                n || ((n = !0), u(t, e));
              },
              function (e) {
                n || ((n = !0), l(t, e));
              }
            );
          n || r !== a || ((n = !0), l(t, i));
        }
        (e.exports = c),
          (c._10 = null),
          (c._97 = null),
          (c._61 = o),
          (c.prototype.then = function (e, t) {
            if (this.constructor !== c)
              return (function (e, t, n) {
                return new e.constructor(function (r, i) {
                  var a = new c(o);
                  a.then(r, i), s(e, new d(t, n, a));
                });
              })(this, e, t);
            var n = new c(o);
            return s(this, new d(e, t, n)), n;
          });
      },
      1803: function (e, t, n) {
        "use strict";
        var r = n(3434);
        e.exports = r;
        var o = l(!0),
          i = l(!1),
          a = l(null),
          c = l(void 0),
          s = l(0),
          u = l("");
        function l(e) {
          var t = new r(r._61);
          return (t._81 = 1), (t._65 = e), t;
        }
        (r.resolve = function (e) {
          if (e instanceof r) return e;
          if (null === e) return a;
          if (void 0 === e) return c;
          if (!0 === e) return o;
          if (!1 === e) return i;
          if (0 === e) return s;
          if ("" === e) return u;
          if ("object" == typeof e || "function" == typeof e)
            try {
              var t = e.then;
              if ("function" == typeof t) return new r(t.bind(e));
            } catch (e) {
              return new r(function (t, n) {
                n(e);
              });
            }
          return l(e);
        }),
          (r.all = function (e) {
            var t = Array.prototype.slice.call(e);
            return new r(function (e, n) {
              if (0 === t.length) return e([]);
              var o = t.length;
              function i(a, c) {
                if (c && ("object" == typeof c || "function" == typeof c)) {
                  if (c instanceof r && c.then === r.prototype.then) {
                    for (; 3 === c._81; ) c = c._65;
                    return 1 === c._81
                      ? i(a, c._65)
                      : (2 === c._81 && n(c._65),
                        void c.then(function (e) {
                          i(a, e);
                        }, n));
                  }
                  var s = c.then;
                  if ("function" == typeof s)
                    return void new r(s.bind(c)).then(function (e) {
                      i(a, e);
                    }, n);
                }
                (t[a] = c), 0 == --o && e(t);
              }
              for (var a = 0; a < t.length; a++) i(a, t[a]);
            });
          }),
          (r.reject = function (e) {
            return new r(function (t, n) {
              n(e);
            });
          }),
          (r.race = function (e) {
            return new r(function (t, n) {
              e.forEach(function (e) {
                r.resolve(e).then(t, n);
              });
            });
          }),
          (r.prototype.catch = function (e) {
            return this.then(null, e);
          });
      },
      8029: function (e, t, n) {
        "use strict";
        var r = n(3434);
        (e.exports = r),
          (r.prototype.finally = function (e) {
            return this.then(
              function (t) {
                return r.resolve(e()).then(function () {
                  return t;
                });
              },
              function (t) {
                return r.resolve(e()).then(function () {
                  throw t;
                });
              }
            );
          });
      },
      3849: function (e, t, n) {
        "use strict";
        n.d(t, {
          UH: function () {
            return l;
          },
          ZV: function () {
            return d;
          },
          ef: function () {
            return p;
          },
          gC: function () {
            return c;
          },
          mZ: function () {
            return o;
          },
          qF: function () {
            return a;
          },
          t0: function () {
            return u;
          },
          tX: function () {
            return s;
          },
        });
        var r = n(4421),
          o = (0, r.mC)({
            phone: (0, r.jt)((0, r.kw)("auto", "always", "never")),
          }),
          i = (0, r.mC)({ required: (0, r.kw)("auto", "always", "never") }),
          a = (0, r.mC)({ phone: (0, r.jt)(i) }),
          c = "shipping",
          s = (0, r.or)(
            (0, r.mC)({ mode: (0, r.kw)("automatic", "disabled") }),
            (0, r.mC)({ mode: (0, r.kw)("google_maps_api"), apiKey: r.Z_ })
          ),
          u = {
            automatic: "automatic",
            disabled: "disabled",
            google_maps_api: "google_maps_api",
          },
          l = { stripe: "stripe", merchant: "merchant" },
          p = (0, r.mC)({
            name: (0, r.jt)((0, r.kw)("full", "split", "organization")),
          }),
          d = "split";
      },
      6846: function (e, t, n) {
        "use strict";
        n.d(t, {
          A2: function () {
            return s;
          },
          YA: function () {
            return a.Z;
          },
          _0: function () {
            return l;
          },
          _y: function () {
            return p;
          },
        });
        var r,
          o,
          i = n(6222),
          a = n(112),
          c = n(4867),
          s = "__PrivateStripeElement",
          u = ["brand"],
          l =
            ((r = {}),
            (0, i.Z)(r, c.Yj.card, u),
            (0, i.Z)(r, c.Yj.cardNumber, u),
            (0, i.Z)(r, c.Yj.iban, ["country", "bankName"]),
            (0, i.Z)(r, c.Yj.auBankAccount, ["bankName", "branchName"]),
            r),
          p =
            ((o = {}),
            (0, i.Z)(o, c.Yj.idealBank, { secondary: c.Yj.idealBankSecondary }),
            (0, i.Z)(o, c.Yj.p24Bank, { secondary: c.Yj.p24BankSecondary }),
            (0, i.Z)(o, c.Yj.fpxBank, { secondary: c.Yj.fpxBankSecondary }),
            (0, i.Z)(o, c.Yj.netbankingBank, {
              secondary: c.Yj.netbankingBankSecondary,
            }),
            (0, i.Z)(o, c.Yj.epsBank, { secondary: c.Yj.epsBankSecondary }),
            o);
      },
      112: function (e, t, n) {
        "use strict";
        var r,
          o = n(6222),
          i = n(4867),
          a =
            ((r = {}),
            (0, o.Z)(r, i.Yj.card, {
              unique: !0,
              conflict: [
                i.Yj.cardNumber,
                i.Yj.cardExpiry,
                i.Yj.cardCvc,
                i.Yj.postalCode,
              ],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.cardNumber, {
              unique: !0,
              conflict: [i.Yj.card],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.cardExpiry, {
              unique: !0,
              conflict: [i.Yj.card],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.cardCvc, {
              unique: !0,
              conflict: [i.Yj.card],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.postalCode, {
              unique: !0,
              conflict: [i.Yj.card],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.paymentRequestButton, {
              unique: !0,
              conflict: [],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.iban, {
              unique: !0,
              conflict: [],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.idealBank, {
              unique: !0,
              conflict: [],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.p24Bank, {
              unique: !0,
              conflict: [],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.auBankAccount, {
              unique: !0,
              beta: !1,
              conflict: [],
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.fpxBank, {
              unique: !0,
              beta: !1,
              conflict: [],
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.netbankingBank, {
              unique: !0,
              beta: !0,
              conflict: [],
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.issuingCardCopyButton, {
              unique: !1,
              beta: !0,
              conflict: [],
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.issuingCardNumberDisplay, {
              unique: !1,
              beta: !0,
              conflict: [],
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.issuingCardCvcDisplay, {
              unique: !1,
              beta: !0,
              conflict: [],
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.issuingCardExpiryDisplay, {
              unique: !1,
              beta: !0,
              conflict: [],
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.issuingCardPinDisplay, {
              unique: !1,
              beta: !0,
              conflict: [],
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.epsBank, {
              unique: !0,
              conflict: [],
              beta: !0,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.affirmMessage, {
              unique: !1,
              conflict: [],
              beta: !1,
              implementation: "affirm_message",
            }),
            (0, o.Z)(r, i.Yj.afterpayClearpayMessage, {
              unique: !1,
              conflict: [],
              beta: !1,
              implementation: "afterpay_message",
            }),
            (0, o.Z)(r, i.Yj.unifiedMessage, {
              unique: !1,
              conflict: [],
              beta: !0,
              implementation: "unified_message",
            }),
            (0, o.Z)(r, i.Yj.paymentMethodMessaging, {
              unique: !1,
              conflict: [],
              beta: !0,
              implementation: "unified_message",
            }),
            (0, o.Z)(r, i.Yj.linkAuthentication, {
              unique: !0,
              conflict: [],
              beta: !0,
              implementation: "frame",
            }),
            (0, o.Z)(r, i.Yj.payment, {
              unique: !0,
              conflict: [],
              beta: !0,
              implementation: "frame",
            }),
            (0, o.Z)(r, i.Yj.shippingAddress, {
              unique: !0,
              conflict: [i.Yj.address],
              beta: !0,
              implementation: "frame",
            }),
            (0, o.Z)(r, i.Yj.address, {
              unique: !0,
              conflict: [i.Yj.shippingAddress],
              beta: !0,
              implementation: "frame",
            }),
            (0, o.Z)(r, i.Yj.cart, {
              unique: !0,
              conflict: [],
              beta: !0,
              implementation: "cart",
            }),
            (0, o.Z)(r, i.Yj.expressCheckout, {
              unique: !0,
              conflict: [],
              beta: !0,
              implementation: "express_checkout",
            }),
            r);
        t.Z = a;
      },
      8050: function (e, t, n) {
        "use strict";
        n.d(t, {
          Tj: function () {
            return o;
          },
          qg: function () {
            return i;
          },
        });
        var r = n(7904),
          o =
            (n(4421),
            n(8342),
            function (e) {
              var t = e.trim().match(/^((order)_[^_]+)_secret_[^-]+$/);
              if (t) {
                var n = (0, r.Z)(t, 3),
                  o = n[0],
                  i = n[1];
                if ("order" === n[2])
                  return { id: i, clientSecret: o, type: "ORDER" };
              }
              return null;
            }),
          i = function (e) {
            var t = e.trim().match(/^((cart_session)_[^_]+)_secret_[^-]+$/);
            if (t) {
              var n = (0, r.Z)(t, 3),
                o = n[0],
                i = n[1];
              if ("cart_session" === n[2])
                return { id: i, clientSecret: o, type: "CART_SESSION" };
            }
            return null;
          };
      },
      7792: function (e, t, n) {
        "use strict";
        n.d(t, {
          Ee: function () {
            return k;
          },
          FC: function () {
            return h;
          },
          I2: function () {
            return f;
          },
          R5: function () {
            return p;
          },
          iU: function () {
            return u;
          },
          jX: function () {
            return v;
          },
          mZ: function () {
            return _;
          },
          xR: function () {
            return y;
          },
          xl: function () {
            return w;
          },
          zf: function () {
            return b;
          },
        });
        var r,
          o = n(3696),
          i = n(6222),
          a = n(4867),
          c = n(4421),
          s = ["external_paypal"],
          u = (0, c.CT)(c.kw.apply(void 0, s)),
          l =
            ([
              "affirm",
              "afterpay_clearpay",
              "alipay",
              "au_becs_debit",
              "bancontact",
              "blik",
              "boleto",
              "card",
              "customer_balance",
              "eps",
              "fpx",
              "giropay",
              "grabpay",
              "id_bank_transfer",
              "ideal",
              "klarna",
              "konbini",
              "link",
              "oxxo",
              "p24",
              "pay_by_bank",
              "paynow",
              "paypal",
              "promptpay",
              "qris",
              "sepa_debit",
              "sofort",
              "us_bank_account",
              "upi",
              "wechat_pay",
              "nz_bank_account",
              "bacs_debit",
              "apple_pay",
              "google_pay",
            ].concat(s),
            {
              VISA: "visa",
              MASTERCARD: "mastercard",
              AMEX: "amex",
              DISCOVER_NETWORK: "discover_global_network",
            }),
          p =
            ((r = {}),
            (0, i.Z)(r, l.VISA, [a.rM.VISA]),
            (0, i.Z)(r, l.MASTERCARD, [a.rM.MASTERCARD]),
            (0, i.Z)(r, l.AMEX, [a.rM.AMEX]),
            (0, i.Z)(r, l.DISCOVER_NETWORK, [
              a.rM.DISCOVER,
              a.rM.DINERS,
              a.rM.JCB,
              a.rM.UNIONPAY,
              a.rM.ELO,
            ]),
            Object.keys(l).map(function (e) {
              return l[e];
            })),
          d = c.kw.apply(void 0, (0, o.Z)(p)),
          m = (0, c.mC)({
            email: (0, c.jt)((0, c.AG)(c.Z_)),
            name: (0, c.jt)((0, c.AG)(c.Z_)),
            phone: (0, c.jt)((0, c.AG)(c.Z_)),
            address: (0, c.jt)(
              (0, c.mC)({
                city: (0, c.jt)((0, c.AG)(c.Z_)),
                country: (0, c.jt)((0, c.AG)(c.Z_)),
                line1: (0, c.jt)((0, c.AG)(c.Z_)),
                line2: (0, c.jt)((0, c.AG)(c.Z_)),
                postal_code: (0, c.jt)((0, c.AG)(c.Z_)),
                state: (0, c.jt)((0, c.AG)(c.Z_)),
              })
            ),
          }),
          f = (0, c.mC)({ billingDetails: (0, c.jt)(m) }),
          _ = (0, c.mC)({
            billingDetails: (0, c.jt)(
              (0, c.or)(
                (0, c.kw)("never", "auto"),
                (0, c.mC)({
                  name: (0, c.jt)((0, c.kw)("never", "auto")),
                  phone: (0, c.jt)((0, c.kw)("never", "auto")),
                  email: (0, c.jt)((0, c.kw)("never", "auto")),
                  address: (0, c.jt)(
                    (0, c.or)(
                      (0, c.kw)("never", "auto"),
                      (0, c.mC)({
                        country: (0, c.jt)((0, c.kw)("never", "auto")),
                        postalCode: (0, c.jt)((0, c.kw)("never", "auto")),
                        state: (0, c.jt)((0, c.kw)("never", "auto")),
                        city: (0, c.jt)((0, c.kw)("never", "auto")),
                        line1: (0, c.jt)((0, c.kw)("never", "auto")),
                        line2: (0, c.jt)((0, c.kw)("never", "auto")),
                      })
                    )
                  ),
                })
              )
            ),
          }),
          h = (0, c.mC)({
            bancontact: (0, c.jt)((0, c.kw)("auto", "always", "never")),
            card: (0, c.jt)((0, c.kw)("auto", "always", "never")),
            ideal: (0, c.jt)((0, c.kw)("auto", "always", "never")),
            sepaDebit: (0, c.jt)((0, c.kw)("auto", "always", "never")),
            sofort: (0, c.jt)((0, c.kw)("auto", "always", "never")),
            auBecsDebit: (0, c.jt)((0, c.kw)("auto", "always", "never")),
            usBankAccount: (0, c.jt)((0, c.kw)("auto", "always", "never")),
          }),
          y = (0, c.mC)({
            applePay: (0, c.jt)((0, c.kw)("auto", "never")),
            googlePay: (0, c.jt)((0, c.kw)("auto", "never")),
          }),
          v = (0, c.CT)(d),
          g = (0, c.kw)("accordion", "tabs", "auto"),
          b = (0, c.or)(g, c.Ry),
          w = (0, c.mC)({
            type: g,
            radios: (0, c.jt)(c.Xg),
            spacedAccordionItems: (0, c.jt)(c.Xg),
            defaultCollapsed: (0, c.jt)(c.Xg),
          }),
          k = (0, c.mC)({
            type: g,
            radios: (0, c.jt)(c.Xg),
            spacedAccordionItems: (0, c.jt)(c.Xg),
          });
        (0, c.or)(
          g,
          (0, c.or)(
            (0, c.mC)({ type: (0, c.kw)("tabs", "auto") }),
            (0, c.mC)({
              type: (0, c.kw)("accordion"),
              radios: (0, c.jt)(c.Xg),
              spacedAccordionItems: (0, c.jt)(c.Xg),
            })
          )
        ),
          (0, c.or)(
            g,
            (0, c.or)(
              (0, c.mC)({
                type: (0, c.kw)("tabs", "auto"),
                defaultCollapsed: (0, c.jt)(c.HM),
              }),
              (0, c.mC)({
                type: (0, c.kw)("accordion"),
                defaultCollapsed: (0, c.jt)(c.HM),
                radios: (0, c.jt)(c.HM),
                spacedAccordionItems: (0, c.jt)(c.HM),
              })
            )
          );
      },
      262: function (e, t, n) {
        "use strict";
        n.d(t, {
          C1: function () {
            return v;
          },
          DA: function () {
            return m;
          },
          Eu: function () {
            return p;
          },
          S6: function () {
            return y;
          },
          VZ: function () {
            return _;
          },
          YR: function () {
            return g;
          },
          _m: function () {
            return h;
          },
          pu: function () {
            return f;
          },
        });
        var r = n(3696),
          o = n(8050),
          i = n(7792),
          a = n(8342),
          c = n(4421),
          s = n(1927),
          u = n(8574),
          l = n(3849),
          p = function (e, t) {
            if ("string" != typeof e)
              return (0, c.$3)("a client_secret string", e, t);
            var n = (0, a.RY)(e) || (0, o.Tj)(e);
            return null === n
              ? (0, c.$3)(
                  "a client secret of the form ${id}_secret_${secret}",
                  e,
                  t
                )
              : (0, c.x4)(n, []);
          },
          d = function (e, t) {
            if ("string" != typeof e)
              return (0, c.$3)("a client_secret string", e, t);
            var n = (0, o.Tj)(e);
            return null === n
              ? (0, c.$3)(
                  "a client secret of the form ${id}_secret_${secret}",
                  e,
                  t
                )
              : (0, c.x4)(n, []);
          },
          m = function (e, t) {
            return (0, c.Gu)(d, e, "stripe.".concat(t, " order secret")).value;
          },
          f = function (e, t) {
            if ("string" != typeof e)
              return (0, c.$3)("a client_secret string", e, t);
            var n = (0, o.qg)(e);
            return null === n
              ? (0, c.$3)(
                  "a client secret of the form ${id}_secret_${secret}",
                  e,
                  t
                )
              : (0, c.x4)(n, []);
          },
          _ = function () {
            var e,
              t,
              n,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            if (
              (null == r || null === (e = r.allowedCardBrands) || void 0 === e
                ? void 0
                : e.length) &&
              (null == r ||
              null === (t = r.disallowedCardBrands) ||
              void 0 === t
                ? void 0
                : t.length)
            )
              throw new s.No(
                "You cannot specify both disallowedCardBrands and allowedCardBrands. Please specify only one of those parameters."
              );
            if (
              (null == r ||
              null === (n = r.disallowedCardBrands) ||
              void 0 === n
                ? void 0
                : n.length) === i.R5.length
            )
              throw new s.No("You cannot block all available card brands.");
          },
          h = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = arguments.length > 2 ? arguments[2] : void 0,
              o = e.layout;
            if (!o || "string" == typeof o) return [];
            var a = (0, c.mC)({ layout: t ? i.Ee : i.xl }),
              s = (0, c.Gu)(a, { layout: o }, n),
              u = s.warnings,
              l = o,
              p = l.type;
            return (
              "accordion" !== p &&
                (o.hasOwnProperty("spacedAccordionItems") &&
                  (u = [].concat((0, r.Z)(u), [
                    "options.layout.spacedAccordionItems is only supported with the 'accordion' layout type.",
                  ])),
                o.hasOwnProperty("radios") &&
                  (u = [].concat((0, r.Z)(u), [
                    "options.layout.radios is only supported with the 'accordion' layout type.",
                  ]))),
              u
            );
          },
          y = function (e) {
            var t, n;
            if (
              (null === (t = e.defaultValues) || void 0 === t
                ? void 0
                : t.phone) &&
              "always" !==
                (null === (n = e.fields) || void 0 === n ? void 0 : n.phone)
            )
              throw new s.No(
                "You cannot specify defaultValues.phone without setting fields.phone to always."
              );
          },
          v = function (e) {
            var t, n, r, o, i;
            if (
              ((null === (t = e.defaultValues) || void 0 === t
                ? void 0
                : t.firstName) ||
                (null === (n = e.defaultValues) || void 0 === n
                  ? void 0
                  : n.lastName)) &&
              (null === (r = e.display) || void 0 === r ? void 0 : r.name) !==
                l.ZV
            )
              throw new s.No(
                "You cannot specify defaultValues.firstName or defaultValues.lastName without setting display.name to split."
              );
            if (
              (null === (o = e.display) || void 0 === o ? void 0 : o.name) ===
                l.ZV &&
              (null === (i = e.defaultValues) || void 0 === i ? void 0 : i.name)
            )
              throw new s.No(
                "You cannot specify defaultValues.name when you have display.name set to split."
              );
          },
          g = function (e) {
            var t = e.contacts,
              n = e.fields,
              r = e.validation;
            if (t) {
              var o,
                i = (0, u.cx)(t, function (e) {
                  return e.hasOwnProperty("phone");
                });
              if (-1 !== i)
                if (
                  "always" !== (null == n ? void 0 : n.phone) ||
                  "always" !==
                    (null == r || null === (o = r.phone) || void 0 === o
                      ? void 0
                      : o.required)
                )
                  throw new s.No(
                    "You cannot specify contacts[".concat(
                      i,
                      "].phone without \n        setting fields.phone to 'always' and validation.phone.required to 'always'. \n        Phone options should only be 'always' when absolutely necessary."
                    )
                  );
            }
          };
      },
      8217: function (e, t, n) {
        "use strict";
        n.d(t, {
          E: function () {
            return o;
          },
        });
        var r = n(7904),
          o = function () {
            var e = [];
            return {
              addEventListener: function (t, n, r, o) {
                t.addEventListener(n, r, o), e.push([t, n, r, o]);
              },
              removeEventListener: function (t, n, o, i) {
                t.removeEventListener(n, o, i),
                  (e = e.filter(function (e) {
                    return (function (e, t) {
                      var n = (0, r.Z)(e, 4),
                        o = n[0],
                        i = n[1],
                        a = n[2],
                        c = n[3],
                        s = (0, r.Z)(t, 4),
                        u = s[0],
                        l = s[1],
                        p = s[2],
                        d = s[3];
                      return (
                        u !== o ||
                        l !== i ||
                        p !== a ||
                        (!0 === ("object" == typeof c && c ? c.capture : c)) !=
                          (!0 === ("object" == typeof d && d ? d.capture : d))
                      );
                    })([t, n, o, i], e);
                  }));
              },
            };
          };
      },
      8792: function (e, t, n) {
        "use strict";
        n.d(t, {
          U: function () {
            return o;
          },
          d: function () {
            return i;
          },
        });
        var r = n(9686),
          o = function (e) {
            return new r.J(function (t, n) {
              var r = setTimeout(function () {
                t({
                  type: "error",
                  error: {
                    code: "redirect_error",
                    message: "Failed to redirect to ".concat(e),
                  },
                  locale: "en",
                });
              }, 6e4);
              window.addEventListener("pagehide", function () {
                clearTimeout(r);
              }),
                (window.top.location.href = e);
            });
          },
          i = function (e, t, n) {
            e.report("redirect_error", { initiator: t, error: n.error });
          };
      },
      8342: function (e, t, n) {
        "use strict";
        n.d(t, {
          G2: function () {
            return d;
          },
          LD: function () {
            return i;
          },
          O3: function () {
            return l;
          },
          PA: function () {
            return c;
          },
          QS: function () {
            return a;
          },
          RY: function () {
            return u;
          },
          e3: function () {
            return s;
          },
          mD: function () {
            return p;
          },
        });
        var r = n(8489),
          o = n(4421),
          i = (n(4867), "webauthn"),
          a = "spc",
          c = function (e, t) {
            switch (e.type) {
              case "object":
                return { paymentIntent: e.object };
              case "error":
                var n = t ? { payment_intent: t } : {};
                return { error: (0, r.Z)((0, r.Z)({}, n), e.error) };
              default:
                return (0, o.Rz)(e);
            }
          },
          s = function (e, t) {
            switch (e.type) {
              case "error":
                return {
                  error: (0, r.Z)(
                    (0, r.Z)({}, t ? { setup_intent: t } : {}),
                    e.error
                  ),
                };
              case "object":
                return { setupIntent: e.object };
              default:
                return (0, o.Rz)(e);
            }
          },
          u = function (e) {
            var t = e.trim().match(/^((seti|pi)_[^_]+)_secret_[^-]+$/);
            return t
              ? "pi" === t[2]
                ? { id: t[1], clientSecret: t[0], type: "PAYMENT_INTENT" }
                : { id: t[1], clientSecret: t[0], type: "SETUP_INTENT" }
              : null;
          },
          l = function (e) {
            return "payment_intent" === e.object
              ? {
                  id: e.id,
                  clientSecret: e.client_secret,
                  type: "PAYMENT_INTENT",
                }
              : {
                  id: e.id,
                  clientSecret: e.client_secret,
                  type: "SETUP_INTENT",
                };
          },
          p = function (e) {
            return "requires_source_action" === e || "requires_action" === e;
          },
          d = function (e) {
            return "requires_source_action" === e.status ||
              "requires_action" === e.status
              ? e.next_action
              : null;
          };
      },
      8845: function (e, t, n) {
        "use strict";
        n.d(t, {
          J$: function () {
            return r.J;
          },
        });
        var r = n(323);
      },
      323: function (e, t, n) {
        "use strict";
        n.d(t, {
          J: function () {
            return o;
          },
        });
        var r = {
            AE: "AE",
            AT: "AT",
            AU: "AU",
            BE: "BE",
            BG: "BG",
            BR: "BR",
            CA: "CA",
            CH: "CH",
            CI: "CI",
            CR: "CR",
            CY: "CY",
            CZ: "CZ",
            DE: "DE",
            DK: "DK",
            DO: "DO",
            EE: "EE",
            ES: "ES",
            FI: "FI",
            FR: "FR",
            GB: "GB",
            GI: "GI",
            GR: "GR",
            GT: "GT",
            HK: "HK",
            HR: "HR",
            HU: "HU",
            ID: "ID",
            IE: "IE",
            IN: "IN",
            IT: "IT",
            JP: "JP",
            LI: "LI",
            LT: "LT",
            LU: "LU",
            LV: "LV",
            MT: "MT",
            MX: "MX",
            MY: "MY",
            NL: "NL",
            NO: "NO",
            NZ: "NZ",
            PE: "PE",
            PH: "PH",
            PL: "PL",
            PT: "PT",
            RO: "RO",
            SE: "SE",
            SG: "SG",
            SI: "SI",
            SK: "SK",
            SN: "SN",
            TH: "TH",
            TT: "TT",
            US: "US",
            UY: "UY",
          },
          o = Object.keys(r);
      },
      8455: function (e, t, n) {
        "use strict";
        n.d(t, {
          M4: function () {
            return c;
          },
          MJ: function () {
            return s;
          },
          P3: function () {
            return _;
          },
          ub: function () {
            return m;
          },
          Lv: function () {
            return u;
          },
          uN: function () {
            return l;
          },
          dZ: function () {
            return f;
          },
          jk: function () {
            return h;
          },
        });
        var r,
          o = n(3696),
          i = n(5845),
          a = n(4421),
          c = {
            checkout_beta_2: "checkout_beta_2",
            checkout_beta_3: "checkout_beta_3",
            checkout_beta_4: "checkout_beta_4",
            checkout_beta_testcards: "checkout_beta_testcards",
            payment_intent_beta_1: "payment_intent_beta_1",
            payment_intent_beta_2: "payment_intent_beta_2",
            payment_intent_beta_3: "payment_intent_beta_3",
            google_pay_beta_1: "google_pay_beta_1",
            acss_debit_beta_1: "acss_debit_beta_1",
            acss_debit_beta_2: "acss_debit_beta_2",
            afterpay_clearpay_setup_intents_beta:
              "afterpay_clearpay_setup_intents_beta",
            bacs_debit_beta: "bacs_debit_beta",
            fpx_bank_beta_1: "fpx_bank_beta_1",
            ideal_pm_beta_1: "ideal_pm_beta_1",
            line_items_beta_1: "line_items_beta_1",
            mobilepay_pm_beta_1: "mobilepay_pm_beta_1",
            oxxo_pm_beta_1: "oxxo_pm_beta_1",
            paypal_pm_beta_1: "paypal_pm_beta_1",
            revolut_pay_pm_beta_1: "revolut_pay_pm_beta_1",
            sepa_pm_beta_1: "sepa_pm_beta_1",
            tax_product_beta_1: "tax_product_beta_1",
            wechat_pay_pm_beta_1: "wechat_pay_pm_beta_1",
            wechat_pay_pm_beta_2: "wechat_pay_pm_beta_2",
            wechat_pay_pm_beta_3: "wechat_pay_pm_beta_3",
            checkout_beta_locales: "checkout_beta_locales",
            stripe_js_beta_locales: "stripe_js_beta_locales",
            upi_beta_1: "upi_beta_1",
            issuing_elements_1: "issuing_elements_1",
            issuing_elements_2: "issuing_elements_2",
            return_intents_beta_1: "return_intents_beta_1",
            netbanking_beta_1: "netbanking_beta_1",
            netbanking_bank_beta_1: "netbanking_bank_beta_1",
            instant_debits_beta_1: "instant_debits_beta_1",
            link_beta_1: "link_beta_1",
            link_beta_2: "link_beta_2",
            link_beta_3: "link_beta_3",
            link_default_integration_beta_1: "link_default_integration_beta_1",
            link_default_integration_beta_2: "link_default_integration_beta_2",
            link_logo_opt_in_beta_1: "link_logo_opt_in_beta_1",
            link_suggest_email_domain_correction_1:
              "link_suggest_email_domain_correction_1",
            payment_element_beta_1: "payment_element_beta_1",
            elements_customers_beta_1: "elements_customers_beta_1",
            card_country_event_beta_1: "card_country_event_beta_1",
            id_bank_transfer_beta_1: "id_bank_transfer_beta_1",
            id_bank_transfer_beta_2: "id_bank_transfer_beta_2",
            us_bank_account_beta_2: "us_bank_account_beta_2",
            cup_apple_pay_beta_1: "cup_apple_pay_beta_1",
            nz_bank_account_beta_1: "nz_bank_account_beta_1",
            payment_element_apple_pay_beta_1:
              "payment_element_apple_pay_beta_1",
            link_autofill_modal_beta_1: "link_autofill_modal_beta_1",
            shipping_address_element_beta_1: "shipping_address_element_beta_1",
            address_element_beta_1: "address_element_beta_1",
            process_order_beta_1: "process_order_beta_1",
            server_side_confirmation_beta_1: "server_side_confirmation_beta_1",
            cart_beta_1: "cart_beta_1",
            pay_by_bank_beta_1: "pay_by_bank_beta_1",
            blocked_card_brands_beta_1: "blocked_card_brands_beta_1",
            qris_beta_1: "qris_beta_1",
            ume_beta_1: "ume_beta_1",
            networks_change_1: "networks_change_1",
            express_checkout_beta_1: "express_checkout_beta_1",
            link_in_prb_beta_1: "link_in_prb_beta_1",
            link_in_card_element_beta_1: "link_in_card_element_beta_1",
            payment_element_vertical_layout_beta_1:
              "payment_element_vertical_layout_beta_1",
            zip_beta_1: "zip_beta_1",
          },
          s = Object.freeze({
            netbankingBank: "netbanking_bank_beta_1",
            shippingAddress: [
              "shipping_address_element_beta_1",
              "link_beta_1",
              "link_beta_2",
              "link_beta_3",
            ],
            address: "address_element_beta_1",
            cart: "cart_beta_1",
            unifiedMessage: "ume_beta_1",
            paymentMethodMessaging: "ume_beta_1",
            expressCheckout: "express_checkout_beta_1",
          }),
          u = Object.keys(c),
          l = function (e, t) {
            return Array.isArray(t)
              ? t.some(function (t) {
                  return e.indexOf(t) > -1;
                })
              : e.indexOf(t) > -1;
          },
          p = window.location.hash.substring(1).split("?")[0],
          d = (0, a.ld)(
            (0, a.mC)({
              betas: (0, a.Wc)(
                (0, a.CT)(a.kw.apply(void 0, (0, o.Z)(u))),
                function () {
                  return [];
                }
              ),
            }),
            (0, i.vB)(p),
            "internal"
          ),
          m = "valid" === d.type ? d.value.betas : [],
          f = function (e) {
            var t = [],
              n = [];
            if (
              (e &&
                e.forEach(function (e) {
                  u.indexOf(e) > -1 ? t.push(c[e]) : n.push(e);
                }),
              n.length > 0)
            ) {
              var r =
                "The following betas are unrecognized for Stripe() parameter:\n\n- ".concat(
                  n.join("\n- "),
                  "\n\n They are either invalid or expired betas, please remove these beta flags to prevent future integration issues."
                );
              return { validBetas: t, betaWarning: r };
            }
            return { validBetas: t };
          },
          _ = [],
          h =
            ((r = _),
            function (e, t) {
              return l(t, c.stripe_js_beta_locales) || -1 === r.indexOf(e)
                ? e
                : "auto";
            });
      },
      6503: function (e, t, n) {
        "use strict";
        n.d(t, {
          Ah: function () {
            return h;
          },
          Bh: function () {
            return m;
          },
          D$: function () {
            return N;
          },
          D1: function () {
            return b;
          },
          G9: function () {
            return k;
          },
          Gx: function () {
            return T;
          },
          JW: function () {
            return f;
          },
          P0: function () {
            return d;
          },
          PB: function () {
            return A;
          },
          Wt: function () {
            return E;
          },
          ZR: function () {
            return I;
          },
          aS: function () {
            return P;
          },
          cE: function () {
            return C;
          },
          j3: function () {
            return S;
          },
          q$: function () {
            return y;
          },
          s$: function () {
            return g;
          },
          sV: function () {
            return v;
          },
          tS: function () {
            return _;
          },
          x5: function () {
            return j;
          },
          xz: function () {
            return w;
          },
        });
        var r = function (e) {
            return /Edge\//i.test(e);
          },
          o = function (e) {
            return /Edg\//i.test(e);
          },
          i = function (e) {
            return /(MSIE ([0-9]{1,}[.0-9]{0,})|Trident\/)/i.test(e);
          },
          a = function (e) {
            return /SamsungBrowser/.test(e);
          },
          c = function (e) {
            return /iPad|iPhone/i.test(e) && !i(e);
          },
          s = function (e) {
            return /Opera Mini/i.test(e);
          },
          u = function (e) {
            return /^((?!chrome|android).)*safari/i.test(e) && !a(e);
          },
          l = function (e) {
            return /Android/i.test(e) && !i(e);
          },
          p = window.navigator.userAgent,
          d = r(p),
          m = o(p),
          f = (/Edge\/((1[0-6]\.)|0\.)/i.test(p), i(p)),
          _ = (function (e) {
            return /MSIE ([0-9]{1,}[.0-9]{0,})/i.test(e);
          })(p),
          h = c(p),
          y =
            ((function (e) {
              /iPad/i.test(e) && i(e);
            })(p),
            (function (e) {
              return c(e) || l(e);
            })(p)),
          v = l(p),
          g =
            ((function (e) {
              /Android 4\./i.test(e) && !/Chrome/i.test(e) && l(e);
            })(p),
            u(p)),
          b =
            ((function (e) {
              u(e) && c(e);
            })(p),
            (function (e) {
              return /Firefox\//i.test(e);
            })(p)),
          w =
            ((function (e) {
              /Firefox\/(50|51|[0-4]?\d)([^\d]|$)/i.test(e);
            })(p),
            a(p)),
          k = (function (e) {
            return /Chrome\//i.test(e);
          })(p),
          E =
            ((function (e) {
              /Chrome\/(6[6-9]|[7-9]\d+|[1-9]\d{2,})/i.test(e);
            })(p),
            (function (e) {
              return (
                /AppleWebKit/i.test(e) && !/Chrome/i.test(e) && !r(e) && !i(e)
              );
            })(p)),
          S = (function (e) {
            return /Chrome/i.test(e) && !r(e);
          })(p),
          P =
            ((function (e) {
              /CriOS/i.test(e);
            })(p),
            (function (e) {
              return /FxiOS/i.test(e);
            })(p)),
          A = (function (e) {
            return /EdgiOS/i.test(e);
          })(p),
          N = (function (e) {
            return /\belectron\b/i.test(e);
          })(p),
          C = s(p),
          I = (function (e) {
            return /Macintosh.*AppleWebKit(?!.*Safari)/i.test(e);
          })(p),
          T = g && "download" in document.createElement("a"),
          M =
            (!!window.navigator.brave && window.navigator.brave.isBrave,
            window.navigator &&
              "standalone" in window.navigator &&
              window.navigator.standalone),
          j =
            (function (e) {
              return /(iPhone|iPod|iPad).*AppleWebKit((?!.*Safari)|(.*\([^)]*like[^)]*Safari[^)]*\)))/i.test(
                e
              );
            })(p) ||
            (function (e) {
              return l(e) && /wv|Version\/\d+\.\d+/.test(e) && !s(e);
            })(p) ||
            (function (e) {
              return /FBAN/.test(e) || /FBAV/.test(e);
            })(p) ||
            M;
      },
      6798: function (e, t, n) {
        "use strict";
        n.d(t, {
          Ah: function () {
            return r.Ah;
          },
          Bh: function () {
            return r.Bh;
          },
          D$: function () {
            return r.D$;
          },
          D1: function () {
            return r.D1;
          },
          G9: function () {
            return r.G9;
          },
          Gx: function () {
            return r.Gx;
          },
          JW: function () {
            return r.JW;
          },
          P0: function () {
            return r.P0;
          },
          PB: function () {
            return r.PB;
          },
          UT: function () {
            return o.U;
          },
          Wt: function () {
            return r.Wt;
          },
          ZR: function () {
            return r.ZR;
          },
          aS: function () {
            return r.aS;
          },
          cE: function () {
            return r.cE;
          },
          j3: function () {
            return r.j3;
          },
          q$: function () {
            return r.q$;
          },
          s$: function () {
            return r.s$;
          },
          sV: function () {
            return r.sV;
          },
          tS: function () {
            return r.tS;
          },
          x5: function () {
            return r.x5;
          },
          xz: function () {
            return r.xz;
          },
        });
        var r = n(6503),
          o = n(8422);
      },
      8422: function (e, t, n) {
        "use strict";
        n.d(t, {
          U: function () {
            return r;
          },
        });
        var r = function () {
          return (
            (window.navigator.languages || [])[0] ||
            window.navigator.userLanguage ||
            window.navigator.language ||
            ""
          );
        };
      },
      8574: function (e, t, n) {
        "use strict";
        n.d(t, {
          CE: function () {
            return f;
          },
          G: function () {
            return i;
          },
          PM: function () {
            return g;
          },
          TS: function () {
            return v;
          },
          VO: function () {
            return l;
          },
          Xy: function () {
            return u;
          },
          cx: function () {
            return c;
          },
          dq: function () {
            return p;
          },
          ei: function () {
            return m;
          },
          qk: function () {
            return d;
          },
          sE: function () {
            return a;
          },
        });
        var r = n(9043),
          o = n(9686),
          i = function (e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
              if (t(e[n])) return !0;
            return !1;
          },
          a = function (e, t) {
            for (var n = 0; n < e.length; n++) if (t(e[n])) return e[n];
          },
          c = function (e, t) {
            for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
            return -1;
          },
          s = "[object Object]",
          u = function e(t, n) {
            if ("object" != typeof t || "object" != typeof n) return t === n;
            if (null === t || null === n) return t === n;
            var r = Array.isArray(t);
            if (r !== Array.isArray(n)) return !1;
            var o = Object.prototype.toString.call(t) === s;
            if (o !== (Object.prototype.toString.call(n) === s)) return !1;
            if (!o && !r) return !1;
            var i = Object.keys(t),
              a = Object.keys(n);
            if (i.length !== a.length) return !1;
            for (var c = {}, u = 0; u < i.length; u++) c[i[u]] = !0;
            for (var l = 0; l < a.length; l++) c[a[l]] = !0;
            var p = Object.keys(c);
            if (p.length !== i.length) return !1;
            var d = t,
              m = n;
            return p.every(function (t) {
              return e(d[t], m[t]);
            });
          },
          l = function (e) {
            return Object.keys(e).map(function (t) {
              return e[t];
            });
          },
          p = function (e, t) {
            for (var n = {}, r = 0; r < t.length; r++) n[t[r]] = !0;
            for (var o = [], i = 0; i < e.length; i++) n[e[i]] && o.push(e[i]);
            return o;
          },
          d = function (e, t) {
            var n = 0,
              r = function r(o) {
                for (var i = Date.now(); n < e.length && Date.now() - i < 50; )
                  t(e[n]), n++;
                n === e.length
                  ? o()
                  : setTimeout(function () {
                      return r(o);
                    });
              };
            return new o.J(function (e) {
              return r(e);
            });
          },
          m = function (e, t) {
            for (var n = {}, r = 0; r < t.length; r++)
              void 0 !== e[t[r]] && (n[t[r]] = e[t[r]]);
            return n;
          },
          f = function (e, t) {
            return (function (e, t) {
              for (var n = {}, r = Object.keys(e), o = 0; o < r.length; o++)
                t(r[o], e[r[o]]) && (n[r[o]] = e[r[o]]);
              return n;
            })(e, function (e, n) {
              return -1 === t.indexOf(e);
            });
          },
          _ = function (e) {
            return (
              e &&
              "object" == typeof e &&
              (e.constructor === Array || e.constructor === Object)
            );
          },
          h = function (e) {
            return _(e)
              ? Array.isArray(e)
                ? e.slice(0, e.length)
                : (0, r.Z)({}, e)
              : e;
          },
          y = function e(t) {
            return function () {
              for (
                var n = arguments.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = arguments[o];
              if (Array.isArray(r[0]) && t) return h(r[0]);
              var i = Array.isArray(r[0]) ? [] : {};
              return (
                r.forEach(function (n) {
                  n &&
                    Object.keys(n).forEach(function (r) {
                      var o = i[r],
                        a = n[r],
                        c = _(o) && !(t && Array.isArray(o));
                      "object" == typeof a && c
                        ? (i[r] = e(t)(o, h(a)))
                        : void 0 !== a
                        ? (i[r] = _(a) ? e(t)(a) : h(a))
                        : void 0 !== o && (i[r] = o);
                    });
                }),
                i
              );
            };
          },
          v = y(!1),
          g = y(!0);
      },
      4113: function (e, t, n) {
        "use strict";
        n.d(t, {
          Y: function () {
            return r;
          },
        });
        var r = {
          card: "card",
          cardNumber: "cardNumber",
          cardExpiry: "cardExpiry",
          cardCvc: "cardCvc",
          postalCode: "postalCode",
          iban: "iban",
          idealBank: "idealBank",
          p24Bank: "p24Bank",
          paymentRequestButton: "paymentRequestButton",
          auBankAccount: "auBankAccount",
          fpxBank: "fpxBank",
          netbankingBank: "netbankingBank",
          epsBank: "epsBank",
          affirmMessage: "affirmMessage",
          afterpayClearpayMessage: "afterpayClearpayMessage",
          unifiedMessage: "unifiedMessage",
          paymentMethodMessaging: "paymentMethodMessaging",
          linkAuthentication: "linkAuthentication",
          payment: "payment",
          shippingAddress: "shippingAddress",
          address: "address",
          cart: "cart",
          expressCheckout: "expressCheckout",
          idealBankSecondary: "idealBankSecondary",
          p24BankSecondary: "p24BankSecondary",
          auBankAccountNumber: "auBankAccountNumber",
          auBsb: "auBsb",
          fpxBankSecondary: "fpxBankSecondary",
          netbankingBankSecondary: "netbankingBankSecondary",
          issuingCardNumberDisplay: "issuingCardNumberDisplay",
          issuingCardCopyButton: "issuingCardCopyButton",
          issuingCardCvcDisplay: "issuingCardCvcDisplay",
          issuingCardExpiryDisplay: "issuingCardExpiryDisplay",
          issuingCardPinDisplay: "issuingCardPinDisplay",
          epsBankSecondary: "epsBankSecondary",
          affirmMessageModal: "affirmMessageModal",
          afterpayClearpayMessageModal: "afterpayClearpayMessageModal",
          unifiedMessageModal: "unifiedMessageModal",
          autocompleteSuggestions: "autocompleteSuggestions",
          achBankSearchResults: "achBankSearchResults",
          linkInfoModal: "linkInfoModal",
          loaderUi: "loaderUi",
        };
      },
      8640: function (e, t, n) {
        "use strict";
        n.d(t, {
          s: function () {
            return o;
          },
        });
        var r = n(4113),
          o = [
            r.Y.card,
            r.Y.cardNumber,
            r.Y.cardExpiry,
            r.Y.cardCvc,
            r.Y.postalCode,
          ];
      },
      1438: function (e, t, n) {
        "use strict";
        n.d(t, {
          Ht: function () {
            return p;
          },
          Lo: function () {
            return s;
          },
          Pp: function () {
            return f;
          },
          QL: function () {
            return m;
          },
          T2: function () {
            return _;
          },
          XK: function () {
            return v;
          },
          Xk: function () {
            return i;
          },
          iw: function () {
            return y;
          },
          jQ: function () {
            return c;
          },
          kE: function () {
            return d;
          },
          kO: function () {
            return u;
          },
          rM: function () {
            return h;
          },
          zT: function () {
            return l;
          },
        });
        var r = n(5845),
          o = n(4113),
          i = "https://js.stripe.com/v3/",
          a = (0, r.Ds)(i),
          c = a ? a.origin : "",
          s = i,
          u = 5,
          l = [
            "stripe_3ds2_challenge",
            "stripe_3ds2_fingerprint",
            "three_d_secure_redirect",
            "intent_cardimageverification_challenge",
          ],
          p = "https://verify.stripe.com/",
          d = {
            PAYMENT_INTENT: "PAYMENT_INTENT",
            SETUP_INTENT: "SETUP_INTENT",
          },
          m = {
            family: "font-family",
            src: "src",
            unicodeRange: "unicode-range",
            style: "font-style",
            variant: "font-variant",
            stretch: "font-stretch",
            weight: "font-weight",
            display: "font-display",
          },
          f = Object.keys(m).reduce(function (e, t) {
            return (e[m[t]] = t), e;
          }, {}),
          _ = [
            o.Y.issuingCardCopyButton,
            o.Y.idealBank,
            o.Y.p24Bank,
            o.Y.netbankingBank,
            o.Y.idealBankSecondary,
            o.Y.p24BankSecondary,
            o.Y.netbankingBankSecondary,
            o.Y.fpxBank,
            o.Y.fpxBankSecondary,
            o.Y.epsBank,
            o.Y.epsBankSecondary,
          ],
          h =
            (Object.keys({
              visa: "visa",
              amex: "amex",
              discover: "discover",
              mastercard: "mastercard",
              jcb: "jcb",
              diners: "diners",
              unionpay: "unionpay",
              elo: "elo",
              unknown: "unknown",
            }),
            {
              VISA: "visa",
              MASTERCARD: "mastercard",
              AMEX: "amex",
              DISCOVER: "discover",
              JCB: "jcb",
              DINERS: "diners",
              UNIONPAY: "unionpay",
              ELO: "elo",
            }),
          y = Object.keys(h).map(function (e) {
            return h[e];
          }),
          v = "1b11d2e60";
      },
      9791: function (e, t, n) {
        "use strict";
        n.d(t, {
          D3: function () {
            return i;
          },
          om: function () {
            return r;
          },
          wW: function () {
            return o;
          },
        });
        var r = "elements_enable_link_in_prb_experiment_aa",
          o = "elements_enable_link_in_prb_experiment",
          i = {
            elements_session: "elements_session",
            elements_assignment: "elements_assignment",
          };
      },
      4867: function (e, t, n) {
        "use strict";
        n.d(t, {
          D3: function () {
            return c.D3;
          },
          Ht: function () {
            return i.Ht;
          },
          J_: function () {
            return a.J_;
          },
          Lo: function () {
            return i.Lo;
          },
          Pp: function () {
            return i.Pp;
          },
          QL: function () {
            return i.QL;
          },
          T2: function () {
            return i.T2;
          },
          Xk: function () {
            return i.Xk;
          },
          Yj: function () {
            return r.Y;
          },
          iw: function () {
            return i.iw;
          },
          jQ: function () {
            return i.jQ;
          },
          kE: function () {
            return i.kE;
          },
          kO: function () {
            return i.kO;
          },
          om: function () {
            return c.om;
          },
          rM: function () {
            return i.rM;
          },
          sL: function () {
            return o.s;
          },
          wW: function () {
            return c.wW;
          },
          zT: function () {
            return i.zT;
          },
        });
        var r = n(4113),
          o = n(8640),
          i = n(1438),
          a = n(3499),
          c = n(9791);
      },
      3499: function (e, t, n) {
        "use strict";
        n.d(t, {
          J_: function () {
            return c;
          },
        });
        var r = n(1438),
          o = "stripe.js/".concat(r.XK),
          i = "".concat(o, "; stripe-js-v3/").concat(r.XK),
          a =
            ("".concat(i, "; raw-card"),
            "".concat(i, "; create-source-card-data"),
            "checkout"),
          c =
            ("".concat(i, "; ").concat(a),
            "".concat(i, "; ").concat("payment-link", "; ").concat(a),
            "".concat(i, "; hip"),
            "".concat(i, "; payment-element"),
            "dashboard");
      },
      6780: function (e, t, n) {
        "use strict";
        n.d(t, {
          Fe: function () {
            return i;
          },
          mo: function () {
            return o;
          },
        });
        var r = {
            bif: 1,
            clp: 1,
            djf: 1,
            gnf: 1,
            jpy: 1,
            kmf: 1,
            krw: 1,
            mga: 1,
            pyg: 1,
            rwf: 1,
            vnd: 1,
            vuv: 1,
            xaf: 1,
            xof: 1,
            xpf: 1,
            bhd: 1e3,
            jod: 1e3,
            kwd: 1e3,
            omr: 1e3,
            tnd: 1e3,
          },
          o = function (e) {
            var t = r[e.toLowerCase()] || 100;
            return {
              unitSize: 1 / t,
              fractionDigits: Math.ceil(Math.log(t) / Math.log(10)),
            };
          },
          i = function (e, t) {
            var n = o(t),
              r = n.unitSize,
              i = n.fractionDigits;
            return (e * r).toFixed(i);
          };
      },
      9531: function (e, t, n) {
        "use strict";
        n.d(t, {
          Fe: function () {
            return r.Fe;
          },
          QT: function () {
            return o.Q;
          },
          mo: function () {
            return r.mo;
          },
        });
        var r = n(6780),
          o = n(1591);
      },
      1591: function (e, t, n) {
        "use strict";
        n.d(t, {
          Q: function () {
            return r;
          },
        });
        var r = [
          "aed",
          "afn",
          "all",
          "amd",
          "ang",
          "aoa",
          "ars",
          "aud",
          "awg",
          "azn",
          "bam",
          "bbd",
          "bdt",
          "bgn",
          "bhd",
          "bif",
          "bmd",
          "bnd",
          "bob",
          "brl",
          "bsd",
          "btn",
          "bwp",
          "byn",
          "byr",
          "bzd",
          "cad",
          "cdf",
          "chf",
          "clf",
          "clp",
          "cny",
          "cop",
          "crc",
          "cuc",
          "cup",
          "cve",
          "czk",
          "djf",
          "dkk",
          "dop",
          "dzd",
          "egp",
          "ern",
          "etb",
          "eur",
          "fjd",
          "fkp",
          "gbp",
          "gel",
          "ghs",
          "gip",
          "gmd",
          "gnf",
          "gtq",
          "gyd",
          "hkd",
          "hnl",
          "hrk",
          "htg",
          "huf",
          "idr",
          "ils",
          "inr",
          "iqd",
          "irr",
          "isk",
          "jmd",
          "jod",
          "jpy",
          "kes",
          "kgs",
          "khr",
          "kmf",
          "kpw",
          "krw",
          "kwd",
          "kyd",
          "kzt",
          "lak",
          "lbp",
          "lkr",
          "lrd",
          "lsl",
          "ltl",
          "lvl",
          "lyd",
          "mad",
          "mdl",
          "mga",
          "mkd",
          "mmk",
          "mnt",
          "mop",
          "mro",
          "mur",
          "mvr",
          "mwk",
          "mxn",
          "myr",
          "mzn",
          "nad",
          "ngn",
          "nio",
          "nok",
          "npr",
          "nzd",
          "omr",
          "pab",
          "pen",
          "pgk",
          "php",
          "pkr",
          "pln",
          "pyg",
          "qar",
          "ron",
          "rsd",
          "rub",
          "rwf",
          "sar",
          "sbd",
          "scr",
          "sdg",
          "sek",
          "sgd",
          "shp",
          "skk",
          "sll",
          "sos",
          "srd",
          "ssp",
          "std",
          "svc",
          "syp",
          "szl",
          "thb",
          "tjs",
          "tmt",
          "tnd",
          "top",
          "try",
          "ttd",
          "twd",
          "tzs",
          "uah",
          "ugx",
          "usd",
          "uyu",
          "uzs",
          "vef",
          "vnd",
          "vuv",
          "wst",
          "xaf",
          "xag",
          "xau",
          "xcd",
          "xdr",
          "xof",
          "xpf",
          "yer",
          "zar",
          "zmk",
          "zmw",
          "btc",
          "jep",
          "eek",
          "ghc",
          "mtl",
          "tmm",
          "yen",
          "zwd",
          "zwl",
          "zwn",
          "zwr",
        ];
      },
      373: function (e, t, n) {
        "use strict";
        n.d(t, {
          Tf: function () {
            return a;
          },
        });
        var r = "1.2em",
          o = "14px",
          i = function (e) {
            var t = e.split(" ").map(function (e) {
              return parseInt(e.trim(), 10);
            });
            return 1 === t.length || 2 === t.length
              ? 2 * t[0]
              : 3 === t.length || 4 === t.length
              ? t[0] + t[2]
              : 0;
          },
          a = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : r,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : o,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "0",
              a = i(n);
            if ("string" == typeof e && /^[0-9.]+px$/.test(e)) {
              var c = parseFloat(e.toString().replace(/[^0-9.]/g, ""));
              return "".concat(c + a, "px");
            }
            var s,
              u = parseFloat(e.toString().replace(/[^0-9.]/g, "")),
              l = parseFloat(o.replace(/[^0-9.]/g, "")),
              p = parseFloat(t.toString().replace(/[^0-9.]/g, ""));
            if ("string" == typeof t && /^(\d+|\d*\.\d+)px$/.test(t)) s = p;
            else if ("string" == typeof t && /^(\d+|\d*\.\d+)em$/.test(t))
              s = p * l;
            else if ("string" == typeof t && /^(\d+|\d*\.\d+)%$/.test(t))
              s = (p / 100) * l;
            else {
              if (
                "string" != typeof t ||
                (!/^[\d.]+$/.test(t) && !/^\d*\.(px|em|%)$/.test(t))
              )
                return "100%";
              s = l;
            }
            var d = u * s + a,
              m = "".concat(d, "px");
            return /^[0-9.]+px$/.test(m) ? m : "100%";
          };
      },
      119: function (e, t, n) {
        "use strict";
        n.d(t, {
          W3: function () {
            return u;
          },
          dh: function () {
            return c;
          },
          gl: function () {
            return s;
          },
        });
        var r = n(7009),
          o = n(8574),
          i = n(5450),
          a = function () {
            return Array.prototype.slice
              .call(
                document.querySelectorAll(
                  "a[href], area[href], input:not([disabled]),\n  select:not([disabled]), textarea:not([disabled]), button:not([disabled]),\n  object, embed, *[tabindex], *[contenteditable]"
                )
              )
              .filter(function (e) {
                var t = e.getAttribute("tabindex"),
                  n = !t || parseInt(t, 10) >= 0,
                  r = e.getBoundingClientRect(),
                  o = (0, i.D)(e),
                  a =
                    r.width > 0 &&
                    r.height > 0 &&
                    o &&
                    "hidden" !== o.getPropertyValue("visibility");
                return n && a;
              });
          },
          c = function (e, t) {
            var n = a();
            return n[
              (0, o.cx)(n, function (t) {
                return t === e || e.contains(t);
              }) + ("previous" === t ? -1 : 1)
            ];
          },
          s = function (e, t) {
            return e.then(function () {
              return (0, o.qk)(t, function (e) {
                var t = e.element,
                  n = e.tabIndex;
                "" === n
                  ? t.removeAttribute("tabindex")
                  : t.setAttribute("tabindex", n);
              });
            });
          },
          u = function (e) {
            var t = [],
              n = (0, o.qk)(document.querySelectorAll("*"), function (n) {
                var r = n.getAttribute("tabindex") || "";
                e !== n && (n.tabIndex = -1),
                  t.push({ element: n, tabIndex: r });
              }),
              i = (0, r.$M)(function () {
                s(n, t);
              });
            return { lockedPromise: n, lockedElements: t, restoreFocus: i };
          };
      },
      9408: function (e, t, n) {
        "use strict";
        n(5845), n(7203);
      },
      5450: function (e, t, n) {
        "use strict";
        n.d(t, {
          D: function () {
            return r;
          },
        });
        var r = function (e, t) {
          return e ? window.getComputedStyle(e, t) : null;
        };
      },
      7203: function (e, t, n) {
        "use strict";
        n.d(t, {
          Hb: function () {
            return u;
          },
          Ql: function () {
            return p;
          },
          SV: function () {
            return s;
          },
          Xq: function () {
            return l;
          },
          mb: function () {
            return i;
          },
          qW: function () {
            return f;
          },
          yq: function () {
            return a;
          },
        });
        var r = n(7904),
          o = n(1927),
          i = function (e, t) {
            var n = {},
              o = {};
            e.className.split(/\s+/).forEach(function (e) {
              e && (n[e] = !0);
            }),
              t.forEach(function (e) {
                var t = (0, r.Z)(e, 2),
                  i = t[0],
                  a = t[1];
                i.split(/\s+/).forEach(function (e) {
                  e && ((o[e] = o[e] || a), (n[e] = o[e]));
                });
              }),
              (e.className = Object.keys(n)
                .filter(function (e) {
                  return n[e];
                })
                .join(" "));
          },
          a = function (e, t) {
            e.style.cssText = Object.keys(t)
              .map(function (e) {
                return "".concat(e, ": ").concat(t[e], " !important;");
              })
              .join(" ");
          },
          c = {
            border: "none",
            margin: "0",
            padding: "0",
            width: "1px",
            "min-width": "100%",
            overflow: "hidden",
            display: "block",
            visibility: "hidden",
            position: "fixed",
            height: "1px",
            "pointer-events": "none",
            "user-select": "none",
          },
          s = function (e) {
            a(e, c);
          },
          u = function (e) {
            try {
              return window.parent.frames[e];
            } catch (e) {
              return null;
            }
          },
          l = function () {
            if (!document.body)
              throw new o.No(
                "Stripe.js requires that your page has a <body> element."
              );
            return document.body;
          },
          p = function (e) {
            return setTimeout(e, 16);
          },
          d = function (e, t) {
            return !!e.documentElement && e.documentElement.contains(t);
          },
          m =
            "isConnected" in window.Node.prototype
              ? function (e, t) {
                  return t.isConnected && t.ownerDocument === e;
                }
              : d,
          f = function (e, t) {
            return !d(e, t) && m(e, t);
          };
      },
      1161: function (e, t, n) {
        "use strict";
        n.d(t, {
          BO: function () {
            return u.BO;
          },
          Dx: function () {
            return i.D;
          },
          Hb: function () {
            return a.Hb;
          },
          MV: function () {
            return s.M;
          },
          Ql: function () {
            return a.Ql;
          },
          SV: function () {
            return a.SV;
          },
          Tf: function () {
            return r.Tf;
          },
          W3: function () {
            return o.W3;
          },
          Xq: function () {
            return a.Xq;
          },
          a0: function () {
            return c.a;
          },
          dh: function () {
            return o.dh;
          },
          gl: function () {
            return o.gl;
          },
          mb: function () {
            return a.mb;
          },
          qW: function () {
            return a.qW;
          },
          xc: function () {
            return u.xc;
          },
          xz: function () {
            return u.xz;
          },
          yq: function () {
            return a.yq;
          },
        });
        var r = n(373),
          o = n(119),
          i = (n(9408), n(5450)),
          a = n(7203),
          c = n(8769),
          s = n(2625),
          u = n(2913);
      },
      8769: function (e, t, n) {
        "use strict";
        n.d(t, {
          a: function () {
            return o;
          },
        });
        var r = [
            "button",
            "checkbox",
            "file",
            "hidden",
            "image",
            "submit",
            "radio",
            "reset",
          ],
          o = function (e) {
            var t = e.tagName;
            if (e.isContentEditable || "TEXTAREA" === t) return !0;
            if ("INPUT" !== t) return !1;
            var n = e.getAttribute("type");
            return -1 === r.indexOf(n);
          };
      },
      2625: function (e, t, n) {
        "use strict";
        n.d(t, {
          M: function () {
            return i;
          },
        });
        var r = n(7009),
          o = n(7203),
          i = function () {
            var e = (0, o.Xq)(),
              t = e.style.overflow;
            e.style.overflow = "hidden";
            var n = { passive: !1 },
              i = function (e) {
                return e.preventDefault();
              },
              a = function () {};
            return (
              window.addEventListener("touchmove", a, n),
              e.addEventListener("touchstart", a, n),
              e.addEventListener("touchmove", i, n),
              (0, r.$M)(function () {
                (e.style.overflow = t || ""),
                  window.removeEventListener("touchmove", a, n),
                  e.removeEventListener("touchstart", a, n),
                  e.removeEventListener("touchmove", i, n);
              })
            );
          };
      },
      2913: function (e, t, n) {
        "use strict";
        n.d(t, {
          BO: function () {
            return i;
          },
          xc: function () {
            return a;
          },
          xz: function () {
            return r;
          },
        });
        var r = function () {
            var e = document.querySelectorAll("meta[name=viewport][content]"),
              t = e[e.length - 1];
            return t && t instanceof HTMLMetaElement ? t.content : "";
          },
          o = function (e) {
            return r().match(e);
          },
          i = function (e) {
            o("width=device-width") ||
              e(
                'Elements requires "width=device-width" be set in your page\'s viewport meta tag.\n       For more information: https://stripe.com/docs/js/appendix/viewport_meta_requirements'
              );
          },
          a = function (e) {
            o("minimum-scale=1") ||
              e(
                'The Financial Connections authentication flow requires "minimum-scale=1" to be set in your page\'s viewport meta tag.'
              );
          };
      },
      1613: function (e, t, n) {
        "use strict";
        n.d(t, {
          k: function () {
            return a;
          },
        });
        var r = n(7853),
          o = n(1020),
          i = n(8992),
          a = (function (e) {
            (0, o.Z)(n, e);
            var t = (0, i.Z)(n);
            function n(e, o) {
              var i;
              return (
                (0, r.Z)(this, n),
                ((i = t.call(this)).name = "FetchError"),
                (i.type = "fetch_error"),
                (i.message = "Error fetching ".concat(o)),
                (i.requestUrl = o),
                "string" == typeof e
                  ? (i.message += ": ".concat(e))
                  : ((i.originalError = e),
                    (i.message += ": ".concat(e.message))),
                i
              );
            }
            return n;
          })((0, n(4909).Z)(Error));
      },
      9706: function (e, t, n) {
        "use strict";
        n.d(t, {
          N: function () {
            return c;
          },
        });
        var r = n(7853),
          o = n(6148),
          i = n(1020),
          a = n(8992),
          c = (function (e) {
            (0, i.Z)(n, e);
            var t = (0, a.Z)(n);
            function n(e) {
              var i;
              return (
                (0, r.Z)(this, n),
                (i = t.call(this, e)),
                window.__stripeElementsController &&
                  window.__stripeElementsController.reportIntegrationError(e),
                (i.name = "IntegrationError"),
                Object.defineProperty((0, o.Z)(i), "message", {
                  value: i.message,
                  enumerable: !0,
                }),
                i
              );
            }
            return n;
          })((0, n(4909).Z)(Error));
      },
      2115: function (e, t, n) {
        "use strict";
        var r = n(7853),
          o = n(1020),
          i = n(8992);
        Error;
      },
      1417: function (e, t, n) {
        "use strict";
        n.d(t, {
          F: function () {
            return a;
          },
        });
        var r = n(7853),
          o = n(1020),
          i = n(8992),
          a = (function (e) {
            (0, o.Z)(n, e);
            var t = (0, i.Z)(n);
            function n(e) {
              var o;
              return (
                (0, r.Z)(this, n),
                ((o = t.call(this, e)).name = "NetworkError"),
                (o.type = "network_error"),
                (o.requestUrl = e),
                o
              );
            }
            return n;
          })((0, n(4909).Z)(Error));
      },
      1927: function (e, t, n) {
        "use strict";
        n.d(t, {
          F7: function () {
            return i.F;
          },
          No: function () {
            return o.N;
          },
          kp: function () {
            return r.k;
          },
        });
        var r = n(1613),
          o = n(9706),
          i = (n(2115), n(1417));
      },
      1806: function (e, t, n) {
        "use strict";
        n.d(t, {
          h: function () {
            return l;
          },
        });
        var r = n(8489),
          o = n(5845),
          i = n(9686),
          a = n(1927),
          c = function (e) {
            var t = e.data,
              n = e.contentType,
              r = void 0 === n ? "application/x-www-form-urlencoded" : n,
              i = e.method,
              a = e.url,
              c = "";
            return (
              t && "application/x-www-form-urlencoded" === r
                ? (c = (0, o.qC)(t))
                : t && "application/json" === r && (c = JSON.stringify(t)),
              {
                requestUrl: "GET" === i && c ? "".concat(a, "?").concat(c) : a,
                requestData: "GET" === i ? "" : c,
                contentType: r,
              }
            );
          },
          s = function (e) {
            return new i.J(function (t, n) {
              var o = e.method,
                s = e.headers,
                u = e.withCredentials,
                p = c(e),
                d = p.requestUrl,
                m = p.requestData,
                f = p.contentType,
                _ = new XMLHttpRequest();
              u && (_.withCredentials = u),
                _.open(o, d, !0),
                _.setRequestHeader("Accept", "application/json"),
                _.setRequestHeader("Content-Type", f),
                (_.json = function () {
                  return new i.J(function (e, t) {
                    try {
                      e(JSON.parse(_.responseText));
                    } catch (e) {
                      t(new a.kp(e, d));
                    }
                  });
                }),
                s &&
                  Object.keys(s).forEach(function (e) {
                    var t = s[e];
                    "string" == typeof t && _.setRequestHeader(e, t);
                  }),
                (_.onreadystatechange = function () {
                  4 === _.readyState &&
                    ((_.onreadystatechange = function () {}),
                    0 === _.status
                      ? u
                        ? n(new a.F7(d))
                        : l(
                            (0, r.Z)(
                              (0, r.Z)({}, e),
                              {},
                              { withCredentials: !0 }
                            )
                          ).then(t, n)
                      : t(_));
                });
              try {
                _.send(m);
              } catch (e) {
                n(new a.kp(e, d));
              }
            });
          },
          u = function e(t) {
            return new i.J(function (n, o) {
              var s = t.method,
                u = t.headers,
                l = void 0 === u ? {} : u,
                p = t.keepalive,
                d = t.withCredentials,
                m = t.priority,
                f = void 0 === m ? "auto" : m,
                _ = c(t),
                h = _.requestUrl,
                y = _.requestData,
                v = {
                  Accept: "application/json",
                  "Content-Type": _.contentType,
                };
              l &&
                Object.keys(l).forEach(function (e) {
                  var t = l[e];
                  "string" == typeof t && (v[e] = t);
                }),
                window
                  .fetch(h, {
                    method: s,
                    keepalive: p,
                    headers: v,
                    body: y || void 0,
                    mode: "cors",
                    credentials: d ? "include" : "omit",
                    priority: f,
                  })
                  .then(function (c) {
                    if (0 === c.status) {
                      if (!d)
                        return e(
                          (0, r.Z)((0, r.Z)({}, t), {}, { withCredentials: !0 })
                        ).then(n, o);
                      o(new a.F7(h));
                    }
                    return c.text().then(function (e) {
                      n({
                        responseURL: c.url,
                        status: c.status,
                        json: function () {
                          return i.J.resolve(JSON.parse(e));
                        },
                        getResponseHeader: function (e) {
                          return c.headers.get(e) || "";
                        },
                        responseText: e,
                      });
                    });
                  })
                  .catch(function (e) {
                    o(new a.kp(e, h));
                  });
            });
          },
          l = function (e) {
            return "function" == typeof window.fetch ? u(e) : s(e);
          };
      },
      230: function (e, t, n) {
        "use strict";
        n.d(t, {
          N: function () {
            return r;
          },
        });
        var r = {
          CARD_ELEMENT: "CARD_ELEMENT",
          CONTROLLER: "CONTROLLER",
          METRICS_CONTROLLER: "METRICS_CONTROLLER",
          PAYMENT_REQUEST_ELEMENT: "PAYMENT_REQUEST_ELEMENT",
          PAYMENT_REQUEST_BROWSER: "PAYMENT_REQUEST_BROWSER",
          PAYMENT_REQUEST_GOOGLE_PAY: "PAYMENT_REQUEST_GOOGLE_PAY",
          PAYMENT_REQUEST_LINK: "PAYMENT_REQUEST_LINK",
          IBAN_ELEMENT: "IBAN_ELEMENT",
          IDEAL_BANK_ELEMENT: "IDEAL_BANK_ELEMENT",
          P24_BANK_ELEMENT: "P24_BANK_ELEMENT",
          AUTHORIZE_WITH_URL: "AUTHORIZE_WITH_URL",
          STRIPE_3DS2_CHALLENGE: "STRIPE_3DS2_CHALLENGE",
          STRIPE_3DS2_FINGERPRINT: "STRIPE_3DS2_FINGERPRINT",
          AU_BANK_ACCOUNT_ELEMENT: "AU_BANK_ACCOUNT_ELEMENT",
          FPX_BANK_ELEMENT: "FPX_BANK_ELEMENT",
          LIGHTBOX_APP: "LIGHTBOX_APP",
          ISSUING_CARD_NUMBER_DISPLAY_ELEMENT:
            "ISSUING_CARD_NUMBER_DISPLAY_ELEMENT",
          ISSUING_CARD_COPY_BUTTON_ELEMENT: "ISSUING_CARD_COPY_BUTTON_ELEMENT",
          ISSUING_CARD_CVC_DISPLAY_ELEMENT: "ISSUING_CARD_CVC_DISPLAY_ELEMENT",
          ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT:
            "ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT",
          ISSUING_CARD_PIN_DISPLAY_ELEMENT: "ISSUING_CARD_PIN_DISPLAY_ELEMENT",
          EPS_BANK_ELEMENT: "EPS_BANK_ELEMENT",
          HCAPTCHA_APP: "HCAPTCHA_APP",
          NETBANKING_BANK_ELEMENT: "NETBANKING_BANK_ELEMENT",
          AFFIRM_MESSAGE_ELEMENT: "AFFIRM_MESSAGE_ELEMENT",
          AFFIRM_MESSAGE_MODAL_ELEMENT: "AFFIRM_MESSAGE_MODAL_ELEMENT",
          AFTERPAY_MESSAGE_MODAL_ELEMENT: "AFTERPAY_MESSAGE_MODAL_ELEMENT",
          UNIFIED_MESSAGE_MODAL_ELEMENT: "UNIFIED_MESSAGE_MODAL_ELEMENT",
          AUTOCOMPLETE_SUGGESTIONS_ELEMENT: "AUTOCOMPLETE_SUGGESTIONS_ELEMENT",
          ACH_BANK_SEARCH_RESULTS_ELEMENT: "ACH_BANK_SEARCH_RESULTS_ELEMENT",
          INSTANT_DEBITS_APP: "INSTANT_DEBITS_APP",
          LINK_AUTHENTICATION_ELEMENT: "LINK_AUTHENTICATION_ELEMENT",
          PAYMENT_ELEMENT: "PAYMENT_ELEMENT",
          LINKED_ACCOUNTS_INNER: "LINKED_ACCOUNTS_INNER",
          WECHAT_PAY_INNER: "WECHAT_PAY_INNER",
          PAYNOW_INNER: "PAYNOW_INNER",
          BLIK_INNER: "BLIK_INNER",
          PIX_INNER: "PIX_INNER",
          PROMPTPAY_INNER: "PROMPTPAY_INNER",
          ADDRESS_ELEMENT: "ADDRESS_ELEMENT",
          LINK_AUTOFILL_MODAL: "LINK_AUTOFILL_MODAL",
          LINK_INFO_MODAL: "LINK_INFO_MODAL",
          GOOGLE_MAPS_APP: "GOOGLE_MAPS_APP",
          LOADER_UI_APP: "LOADER_UI_APP",
          CART_ELEMENT: "CART_ELEMENT",
          BACS_MANDATE_CONFIRMATION_APP: "BACS_MANDATE_CONFIRMATION_APP",
          BACS_CONFIRMATION_INNER: "BACS_CONFIRMATION_INNER",
          EXPRESS_CHECKOUT_ELEMENT: "EXPRESS_CHECKOUT_ELEMENT",
          BUY_BUTTON_APP: "BUY_BUTTON_APP",
          LINK_BUTTON_FOR_CARD_ELEMENT: "LINK_BUTTON_FOR_CARD_ELEMENT",
        };
      },
      2842: function (e, t, n) {
        "use strict";
        n.d(t, {
          i: function () {
            return i;
          },
        });
        var r = n(6798),
          o = n(1370),
          i = function (e) {
            var t = {
                frameborder: "0",
                allowTransparency: "true",
                scrolling: "no",
                role: "presentation",
              },
              n = !r.D1;
            if ((n && (t.allow = "payment *"), "STRIPE_3DS2_CHALLENGE" === e)) {
              var i = "publickey-credentials-get ".concat((0, o.x)());
              t.allow = n ? "payment *; ".concat(i) : i;
            }
            if ("PAYMENT_REQUEST_GOOGLE_PAY" === e) {
              (t.sandbox = [
                "allow-scripts",
                "allow-forms",
                "allow-popups",
                "allow-popups-to-escape-sandbox",
                "allow-same-origin",
              ].join(" ")),
                (t.referrerpolicy = "origin");
            }
            return t;
          };
      },
      3669: function (e, t, n) {
        "use strict";
        n.d(t, {
          D: function () {
            return i;
          },
        });
        var r = n(4421),
          o = n(1370),
          i = function (e) {
            switch (e) {
              case "CARD_ELEMENT":
                return (0, o.x)(
                  "elements-inner-card-25da6c390208ecdb395ec1989dd5e49f.html"
                );
              case "CONTROLLER":
                return (0, o.x)(
                  "controller-3f475d566086b9bd125eeb0e33fd8b6b.html"
                );
              case "METRICS_CONTROLLER":
                return (0, o.x)(
                  "m-outer-2e90e8aa1bef318e3ca9fee59e85645d.html"
                );
              case "PAYMENT_REQUEST_ELEMENT":
                return (0, o.x)(
                  "elements-inner-payment-request-b32b3845566e93abb0150f3ae3ac1461.html"
                );
              case "PAYMENT_REQUEST_BROWSER":
                return (0, o.x)(
                  "payment-request-inner-browser-cf4fa894aaebf426068ff3a3c2609af0.html"
                );
              case "PAYMENT_REQUEST_GOOGLE_PAY":
                return (0, o.x)(
                  "payment-request-inner-google-pay-aa4878bd48f8dfb1e9052d646e9196b3.html"
                );
              case "PAYMENT_REQUEST_LINK":
                return (0, o.x)(
                  "payment-request-inner-link-977a9ca3fbaa77c6bc07873ba57d720e.html"
                );
              case "IBAN_ELEMENT":
                return (0, o.x)(
                  "elements-inner-iban-ab96993dc6a73c3bfc7a5b2c023bf260.html"
                );
              case "IDEAL_BANK_ELEMENT":
                return (0, o.x)(
                  "elements-inner-ideal-bank-967214a016dbf00c91224c4a2c3d27f4.html"
                );
              case "P24_BANK_ELEMENT":
                return (0, o.x)(
                  "elements-inner-p24-bank-597a22eaec74b5124ea1e877497e8ec7.html"
                );
              case "AUTHORIZE_WITH_URL":
                return (0, o.x)(
                  "authorize-with-url-inner-0ba2e9f39e1c37504a5440b7f83c4ff1.html"
                );
              case "STRIPE_3DS2_CHALLENGE":
                return (0, o.x)(
                  "three-ds-2-challenge-6bcd7a90f74c3cd909739af1100ad2f4.html"
                );
              case "STRIPE_3DS2_FINGERPRINT":
                return (0, o.x)(
                  "three-ds-2-fingerprint-a7a7380916fff9444bd1e6a62b8f0acf.html"
                );
              case "AU_BANK_ACCOUNT_ELEMENT":
                return (0, o.x)(
                  "elements-inner-au-bank-account-a5bbfcce8d98271a8814f0709ab3e5a6.html"
                );
              case "FPX_BANK_ELEMENT":
                return (0, o.x)(
                  "elements-inner-fpx-bank-ccdf6d5dd2c979b5ca1f1a750efced98.html"
                );
              case "LIGHTBOX_APP":
                return (0, o.x)(
                  "lightbox-inner-fe2b2432bd3aa5c4044238649f27d3d5.html"
                );
              case "ISSUING_CARD_NUMBER_DISPLAY_ELEMENT":
                return (0, o.x)(
                  "elements-inner-issuing-card-number-display-dd9dd13d72d219afb303c5720a8065a9.html"
                );
              case "ISSUING_CARD_COPY_BUTTON_ELEMENT":
                return (0, o.x)(
                  "elements-inner-issuing-card-copy-button-58c78a84cf6659b66c5ca78e9ebcb157.html"
                );
              case "ISSUING_CARD_CVC_DISPLAY_ELEMENT":
                return (0, o.x)(
                  "elements-inner-issuing-card-cvc-display-07aa887fd4e923e603ca3716f2f6a6ec.html"
                );
              case "ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT":
                return (0, o.x)(
                  "elements-inner-issuing-card-expiry-display-ba030b7c611161185baea82857c58f7a.html"
                );
              case "ISSUING_CARD_PIN_DISPLAY_ELEMENT":
                return (0, o.x)(
                  "elements-inner-issuing-card-pin-display-e057b9e9377b1439d1106323c1de8969.html"
                );
              case "EPS_BANK_ELEMENT":
                return (0, o.x)(
                  "elements-inner-eps-bank-4b5c6fdae1380a56627edba2e79d8d5b.html"
                );
              case "HCAPTCHA_APP":
                return (0, o.x)(
                  "hcaptcha-inner-2b46a25ecc4fe00675eaf4a09bf448a9.html"
                );
              case "NETBANKING_BANK_ELEMENT":
                return (0, o.x)(
                  "elements-inner-netbanking-bank-296d577d2b90773a0eee499ade08925e.html"
                );
              case "AFFIRM_MESSAGE_ELEMENT":
                return (0, o.x)(
                  "elements-inner-affirm-message-e734256f2918bc7e54bed305a654d8ac.html"
                );
              case "AFFIRM_MESSAGE_MODAL_ELEMENT":
                return (0, o.x)(
                  "elements-inner-affirm-message-modal-3e4e4d1daa3cd939c2897cc5c5794fe6.html"
                );
              case "AFTERPAY_MESSAGE_MODAL_ELEMENT":
                return (0, o.x)(
                  "elements-inner-afterpay-message-modal-c81542b46ff2e2f086cff61a84f003fb.html"
                );
              case "UNIFIED_MESSAGE_MODAL_ELEMENT":
                return (0, o.x)(
                  "elements-inner-unified-message-modal-9827aaee5449dbd5374894b1e9a50e38.html"
                );
              case "INSTANT_DEBITS_APP":
                return (0, o.x)(
                  "instant-debits-app-09116c9687b1fdc99120f257a21aaca9.html"
                );
              case "LINK_AUTHENTICATION_ELEMENT":
                return (0, o.x)(
                  "elements-inner-authentication-38ee035cad2772841b016b30e6759e0c.html"
                );
              case "PAYMENT_ELEMENT":
                return (0, o.x)(
                  "elements-inner-payment-6a6ab3d9fa0c69d4720b46bfc9e0ba55.html"
                );
              case "LINKED_ACCOUNTS_INNER":
                return (0, o.x)(
                  "linked-accounts-inner-34504cc91743c7e1b4f556ce44ab93f5.html"
                );
              case "WECHAT_PAY_INNER":
                return (0, o.x)(
                  "wechat-pay-inner-0ca264ff22aea8b6036eb3c49fd06f69.html"
                );
              case "PAYNOW_INNER":
                return (0, o.x)(
                  "paynow-inner-d88bc65d97b0a47157bb4812bae9de11.html"
                );
              case "BLIK_INNER":
                return (0, o.x)(
                  "blik-inner-c0eb679651b8748951250976a1839dc9.html"
                );
              case "PIX_INNER":
              case "PROMPTPAY_INNER":
              case "BACS_CONFIRMATION_INNER":
                return (0, o.x)("");
              case "ADDRESS_ELEMENT":
                return (0, o.x)(
                  "elements-inner-address-e8b8ca1619beafdf5c25d7eefaf3e9b4.html"
                );
              case "LINK_AUTOFILL_MODAL":
                return (0, o.x)(
                  "link-autofill-modal-inner-3e5ad92a81c7a4a0f73af884283c7c2e.html"
                );
              case "GOOGLE_MAPS_APP":
                return (0, o.x)(
                  "google-maps-inner-01c1ad6623b45728d24d4dae60e26051.html"
                );
              case "AUTOCOMPLETE_SUGGESTIONS_ELEMENT":
                return (0, o.x)(
                  "elements-inner-autocomplete-suggestions-796afd86b11164b1e7bc61c2ae0b54dd.html"
                );
              case "ACH_BANK_SEARCH_RESULTS_ELEMENT":
                return (0, o.x)(
                  "elements-inner-ach-bank-search-results-4b3c7b175d57db7491e30136ef0d9abd.html"
                );
              case "LINK_INFO_MODAL":
                return (0, o.x)(
                  "elements-inner-link-info-modal-019096b08321de573a40a03490b6ee7a.html"
                );
              case "LOADER_UI_APP":
                return (0, o.x)(
                  "elements-inner-loader-ui-6269e84d7a447cb863e5cbb0e3167f3d.html"
                );
              case "CART_ELEMENT":
                return (0, o.x)(
                  "elements-inner-cart-b70f67ef3877155099dc562166dd83f0.html"
                );
              case "BACS_MANDATE_CONFIRMATION_APP":
                return (0, o.x)(
                  "bacs-mandate-confirmation-inner-78dfea9d97e4b4e267efac039f44c52c.html"
                );
              case "EXPRESS_CHECKOUT_ELEMENT":
                return (0, o.x)(
                  "elements-inner-express-checkout-3be78994f1d2d852649ccff79ecf41cf.html"
                );
              case "BUY_BUTTON_APP":
                return (0, o.x)("buy-button-app.html");
              case "LINK_BUTTON_FOR_CARD_ELEMENT":
                return (0, o.x)(
                  "elements-inner-link-button-for-card-b93bfb9624eda91d0b4bb5cbad86d128.html"
                );
              default:
                return (0, r.Rz)(e);
            }
          };
      },
      1370: function (e, t, n) {
        "use strict";
        n.d(t, {
          x: function () {
            return r;
          },
        });
        var r = function (e) {
          return "".concat("https://js.stripe.com/v3/").concat(e || "");
        };
      },
      8723: function (e, t, n) {
        "use strict";
        n.d(t, {
          $G: function () {
            return a.$;
          },
          NC: function () {
            return o.N;
          },
          i7: function () {
            return r.i;
          },
          jr: function () {
            return c.j;
          },
          oi: function () {
            return a.o;
          },
          xS: function () {
            return i.x;
          },
        });
        var r = n(2842),
          o = n(230),
          i = n(1370),
          a = n(552),
          c = n(5623);
      },
      552: function (e, t, n) {
        "use strict";
        n.d(t, {
          $: function () {
            return c;
          },
          o: function () {
            return a;
          },
        });
        var r = n(8489),
          o = (n(4421), n(4867)),
          i = n(1161),
          a = function (e) {
            var t,
              n = e.controllerId,
              a = e.frameId,
              c = e.targetOrigin,
              s = e.type,
              u = c;
            if (
              ("controller" === s
                ? (t = (0, i.Hb)(a))
                : "group" === s
                ? (t = (0, i.Hb)(n))
                : "outer" === s || "hosted" === s
                ? (t = window.frames[a])
                : "inner" === s && ((u = u || "*"), (t = window.parent)),
              (u = u || o.jQ),
              t && "function" == typeof t.postMessage)
            ) {
              var l = e.message.delegate
                ? { targetOrigin: u, delegate: e.message.delegate }
                : u;
              t.postMessage(
                JSON.stringify(
                  (0, r.Z)((0, r.Z)({}, e), {}, { __stripeJsV3: !0 })
                ),
                l
              );
            }
          },
          c = function (e) {
            try {
              var t = "string" == typeof e ? JSON.parse(e) : e;
              return t.__stripeJsV3 ? t : null;
            } catch (e) {
              return null;
            }
          };
      },
      5623: function (e, t, n) {
        "use strict";
        n.d(t, {
          j: function () {
            return r;
          },
        });
        n(4867);
        var r = function (e) {
          return e;
        };
      },
      2025: function (e, t, n) {
        "use strict";
        n.d(t, {
          i3: function () {
            return r;
          },
        });
        var r = function (e) {
          return e.replace(/_./g, function (e) {
            return e[1].toUpperCase();
          });
        };
      },
      8293: function (e, t, n) {
        "use strict";
        n.d(t, {
          $M: function () {
            return a;
          },
          AO: function () {
            return i;
          },
          HP: function () {
            return o;
          },
        });
        var r = n(1927),
          o =
            (n(9686),
            function (e) {
              var t = {},
                n = {};
              return function (r) {
                var o = "_".concat(r);
                if ("string" == typeof r && void 0 !== t[o]) return t[o];
                if ("number" == typeof r && void 0 !== n[o]) return n[o];
                var i = e(r);
                return (
                  "string" == typeof r && (t[o] = i),
                  "number" == typeof r && (n[o] = i),
                  i
                );
              };
            }),
          i = function (e, t) {
            var n = !1;
            return function () {
              if (n) throw new r.No(t);
              n = !0;
              try {
                return e.apply(void 0, arguments).then(
                  function (e) {
                    return (n = !1), e;
                  },
                  function (e) {
                    throw ((n = !1), e);
                  }
                );
              } catch (e) {
                throw ((n = !1), e);
              }
            };
          },
          a = function (e) {
            var t = e;
            return function () {
              t && (t.apply(void 0, arguments), (t = null));
            };
          };
      },
      7009: function (e, t, n) {
        "use strict";
        n.d(t, {
          $M: function () {
            return r.$M;
          },
          AO: function () {
            return r.AO;
          },
          HP: function () {
            return r.HP;
          },
          i3: function () {
            return i.i3;
          },
          tN: function () {
            return o.t;
          },
        });
        var r = n(8293),
          o = (n(1667), n(6717)),
          i = (n(9778), n(2025));
      },
      1667: function (e, t, n) {
        "use strict";
        n(9686);
      },
      6717: function (e, t, n) {
        "use strict";
        n.d(t, {
          t: function () {
            return o;
          },
        });
        var r = n(9686),
          o = function (e, t) {
            return e.reduce(function (e, n) {
              return e.then(function (e) {
                return "SATISFIED" === e.type
                  ? e
                  : n().then(function (e) {
                      return t(e)
                        ? { type: "SATISFIED", value: e }
                        : { type: "UNSATISFIED" };
                    });
              });
            }, r.J.resolve({ type: "UNSATISFIED" }));
          };
      },
      9778: function (e, t, n) {
        "use strict";
        n(9686);
      },
      7510: function (e, t, n) {
        "use strict";
        n.d(t, {
          T: function () {
            return i;
          },
          V: function () {
            return a;
          },
        });
        var r = "00".concat(Math.floor(1e3 * Math.random())).slice(-3),
          o = 0,
          i = function (e) {
            return ""
              .concat(e)
              .concat(r)
              .concat(o++);
          },
          a = function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return t
              ? (
                  parseInt(t, 10) ^
                  ((16 * Math.random()) >> (parseInt(t, 10) / 4))
                ).toString(16)
              : "00000000-0000-4000-8000-000000000000".replace(/[08]/g, e);
          };
      },
      3701: function (e, t, n) {
        "use strict";
        n.d(t, {
          To: function () {
            return r.T;
          },
          Vj: function () {
            return r.V;
          },
        });
        var r = n(7510);
      },
      8059: function (e, t, n) {
        "use strict";
        n.d(t, {
          Kl: function () {
            return r.Kl;
          },
          Tj: function () {
            return o.T;
          },
          lO: function () {
            return r.lO;
          },
          pF: function () {
            return r.pF;
          },
        });
        var r = n(5434),
          o = n(1643);
      },
      5434: function (e, t, n) {
        "use strict";
        n.d(t, {
          Kl: function () {
            return o;
          },
          lO: function () {
            return i;
          },
          pF: function () {
            return a;
          },
        });
        var r = n(1927),
          o = { live: "live", test: "test", unknown: "unknown" },
          i = function (e) {
            return /^pk_test_/.test(e)
              ? o.test
              : /^pk_live_/.test(e)
              ? o.live
              : o.unknown;
          },
          a = function (e) {
            if (e === o.unknown)
              throw new r.No(
                "It looks like you're using an older Stripe key. In order to use this API, you'll need to use a modern API key, which is prefixed with 'pk_live_' or 'pk_test_'.\n    You can roll your publishable key here: https://dashboard.stripe.com/account/apikeys"
              );
          };
      },
      1643: function (e, t, n) {
        "use strict";
        n.d(t, {
          T: function () {
            return l;
          },
        });
        var r = n(1927),
          o = "publishable",
          i = "secret",
          a = "ephemeral",
          c = "restricted",
          s = "unknown",
          u = function (e) {
            switch (e.split("_", 1)[0]) {
              case "pk":
                return o;
              case "sk":
                return i;
              case "ek":
                return a;
              case "rk":
                return c;
              default:
                return s;
            }
          },
          l = function (e) {
            if ("" === e)
              throw new r.No(
                "Please call Stripe() with your publishable key. You used an empty string."
              );
            switch (u(e)) {
              case i:
                throw new r.No(
                  "You should not use your secret key with Stripe.js.\n          Please pass a publishable key instead."
                );
              case a:
                throw new r.No(
                  "You should not use an ephemeral key with Stripe.js.\n          Please pass a publishable key instead."
                );
              case c:
                throw new r.No(
                  "You should not use a restricted key with Stripe.js.\n          Please pass a publishable key instead."
                );
            }
          };
      },
      638: function (e, t, n) {
        "use strict";
        n.d(t, {
          _b: function () {
            return c;
          },
          GS: function () {
            return a;
          },
          ke: function () {
            return s;
          },
          ZX: function () {
            return u;
          },
        });
        var r,
          o = n(6222),
          i = n(4867),
          a = {
            alipay: "alipay",
            affirm: "affirm",
            afterpay_clearpay: "afterpay_clearpay",
            au_becs_debit: "au_becs_debit",
            acss_debit: "acss_debit",
            bacs_debit: "bacs_debit",
            bancontact: "bancontact",
            blik: "blik",
            boleto: "boleto",
            card: "card",
            customer_balance: "customer_balance",
            eps: "eps",
            fpx: "fpx",
            giropay: "giropay",
            grabpay: "grabpay",
            ideal: "ideal",
            klarna: "klarna",
            konbini: "konbini",
            mobilepay: "mobilepay",
            nz_bank_account: "nz_bank_account",
            oxxo: "oxxo",
            p24: "p24",
            pay_by_bank: "pay_by_bank",
            paypal: "paypal",
            sepa_debit: "sepa_debit",
            sofort: "sofort",
            three_d_secure: "three_d_secure",
            upi: "upi",
            us_bank_account: "us_bank_account",
            wechat_pay: "wechat_pay",
            paynow: "paynow",
            pix: "pix",
            promptpay: "promptpay",
            qris: "qris",
            revolut_pay: "revolut_pay",
            netbanking: "netbanking",
            id_bank_transfer: "id_bank_transfer",
            link: "link",
            apple_pay: "apple_pay",
            google_pay: "google_pay",
            zip: "zip",
          },
          c =
            ((r = {}),
            (0, o.Z)(r, i.Yj.auBankAccount, a.au_becs_debit),
            (0, o.Z)(r, i.Yj.card, a.card),
            (0, o.Z)(r, i.Yj.cardNumber, a.card),
            (0, o.Z)(r, i.Yj.cardExpiry, a.card),
            (0, o.Z)(r, i.Yj.cardCvc, a.card),
            (0, o.Z)(r, i.Yj.postalCode, a.card),
            (0, o.Z)(r, i.Yj.iban, a.sepa_debit),
            (0, o.Z)(r, i.Yj.idealBank, a.ideal),
            (0, o.Z)(r, i.Yj.fpxBank, a.fpx),
            (0, o.Z)(r, i.Yj.p24Bank, a.p24),
            (0, o.Z)(r, i.Yj.netbankingBank, a.netbanking),
            (0, o.Z)(r, i.Yj.epsBank, a.eps),
            r),
          s = function (e) {
            return -1 === i.sL.indexOf(e);
          },
          u = function (e, t) {
            return null != t ? t : s(e) ? null : c[e] || null;
          };
      },
      9686: function (e, t, n) {
        "use strict";
        n.d(t, {
          J: function () {
            return r.J;
          },
        });
        var r = n(6307);
      },
      6307: function (e, t, n) {
        "use strict";
        n.d(t, {
          J: function () {
            return i;
          },
        });
        var r = n(1803),
          o = n.n(r),
          i = (n(8029), window.Promise ? Promise : o());
      },
      8898: function (e) {
        e.exports = function (e) {
          var t = e
            .split("")
            .map(function (e) {
              return e.charCodeAt(0);
            })
            .reduce(function (e, t) {
              return ((e << 5) - e + t) & ((e << 5) - e + t);
            }, 0)
            .toString();
          return "_".concat(t.replace(/[-.]/g, "_"));
        };
      },
      1917: function (e, t, n) {
        "use strict";
        n.d(t, {
          E: function () {
            return s;
          },
        });
        var r = n(7853),
          o = n(4531),
          i = Date.now
            ? function () {
                return Date.now();
              }
            : function () {
                return new Date().getTime();
              },
          a = i(),
          c =
            window.performance && window.performance.now
              ? function () {
                  return window.performance.now();
                }
              : function () {
                  return i() - a;
                },
          s = (function () {
            function e(t) {
              (0, r.Z)(this, e), (this.timestampValue = null != t ? t : c());
            }
            return (
              (0, o.Z)(
                e,
                [
                  {
                    key: "getAsPosixTime",
                    value: function () {
                      return i() - this.getElapsedTime();
                    },
                  },
                  {
                    key: "getElapsedTime",
                    value: function (e) {
                      return Math.round(
                        (e ? e.timestampValue : c()) - this.timestampValue
                      );
                    },
                  },
                  {
                    key: "valueOf",
                    value: function () {
                      return Math.round(this.timestampValue);
                    },
                  },
                ],
                [
                  {
                    key: "fromPosixTime",
                    value: function (t) {
                      return new e(t - i() + c());
                    },
                  },
                ]
              ),
              e
            );
          })();
      },
      1497: function (e, t, n) {
        "use strict";
        var r = (0, n(5845).Ds)("https://payments.stripe.com");
        r && r.origin;
      },
      7756: function (e, t, n) {
        "use strict";
        n.d(t, {
          v: function () {
            return o;
          },
        });
        var r = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          },
          o = function (e) {
            var t = {};
            return (
              e
                .replace(/\+/g, " ")
                .split("&")
                .forEach(function (e, n) {
                  var o,
                    i = e.split("="),
                    a = decodeURIComponent(i[0]),
                    c = t,
                    s = 0,
                    u = a.split("]["),
                    l = u.length - 1;
                  if (
                    (/\[/.test(u[0]) && /\]$/.test(u[l])
                      ? ((u[l] = u[l].replace(/\]$/, "")),
                        (l = (u = u.shift().split("[").concat(u)).length - 1))
                      : (l = 0),
                    !(u.indexOf("__proto__") >= 0))
                  )
                    if (2 === i.length)
                      if (((o = decodeURIComponent(i[1])), l))
                        for (; s <= l; s++) {
                          if (
                            ((a = "" === u[s] ? c.length : u[s]),
                            !r(c, a) && c[a])
                          )
                            return;
                          (c[a] =
                            s < l
                              ? c[a] || (u[s + 1] && isNaN(u[s + 1]) ? {} : [])
                              : o),
                            (c = c[a]);
                        }
                      else if (Array.isArray(t[a])) t[a].push(o);
                      else if (void 0 !== t[a]) {
                        if (!r(t, a)) return;
                        t[a] = [t[a], o];
                      } else t[a] = o;
                    else a && (t[a] = "");
                }),
              t
            );
          };
      },
      5845: function (e, t, n) {
        "use strict";
        n.d(t, {
          Ds: function () {
            return i.Ds;
          },
          Qg: function () {
            return a.Qg;
          },
          qC: function () {
            return o.q;
          },
          sD: function () {
            return i.sD;
          },
          uW: function () {
            return a.uW;
          },
          vB: function () {
            return r.v;
          },
          v_: function () {
            return i.v_;
          },
          vo: function () {
            return a.vo;
          },
        });
        var r = n(7756),
          o = n(7065),
          i = n(2915),
          a = n(7286);
      },
      7286: function (e, t, n) {
        "use strict";
        n.d(t, {
          Qg: function () {
            return a;
          },
          uW: function () {
            return o;
          },
          vo: function () {
            return i;
          },
        });
        var r = n(2915),
          o =
            (n(1497),
            function (e, t) {
              var n = (0, r.Ds)(e),
                o = (0, r.Ds)(t);
              return !(!n || !o) && n.origin === o.origin;
            }),
          i = function (e) {
            return o(e, "https://js.stripe.com/v3/");
          },
          a = function (e) {
            return (
              i(e) ||
              (function (e) {
                var t = (0, r.Ds)(e),
                  n = t ? t.host : "";
                return "stripe.com" === n || !!n.match(/\.stripe\.(com|me)$/);
              })(e) ||
              (function (e) {
                var t = (0, r.Ds)(e),
                  n = t ? t.host : "";
                return "link.co" === n || !!n.match(/\.link\.(co)$/);
              })(e)
            );
          };
      },
      7065: function (e, t, n) {
        "use strict";
        n.d(t, {
          q: function () {
            return o;
          },
        });
        var r = n(3696),
          o = function e(t, n) {
            var o = [];
            return (
              Object.keys(t).forEach(function (i) {
                var a = t[i],
                  c = n ? "".concat(n, "[").concat(i, "]") : i;
                if (a && "object" == typeof a) {
                  var s = e(a, c);
                  "" !== s && (o = [].concat((0, r.Z)(o), [s]));
                } else null != a && (o = [].concat((0, r.Z)(o), ["".concat(c, "=").concat(encodeURIComponent(String(a)))]));
              }),
              o.join("&").replace(/%20/g, "+")
            );
          };
      },
      2915: function (e, t, n) {
        "use strict";
        n.d(t, {
          Ds: function () {
            return i;
          },
          sD: function () {
            return o;
          },
          v_: function () {
            return a;
          },
        });
        var r = /^(http(s)?):\/\//,
          o = function (e) {
            return r.test(e);
          },
          i = function (e) {
            if (!o(e)) return null;
            var t = document.createElement("a");
            t.href = e;
            var n = t.protocol,
              r = t.host,
              i = t.pathname,
              a = /:80$/,
              c = /:443$/;
            return (
              "http:" === n && a.test(r)
                ? (r = r.replace(a, ""))
                : "https:" === n && c.test(r) && (r = r.replace(c, "")),
              {
                host: r,
                protocol: n,
                origin: "".concat(n, "//").concat(r),
                path: i,
              }
            );
          },
          a = function (e, t) {
            if ("/" === t[0]) {
              var n = i(e);
              return n ? "".concat(n.origin).concat(t) : t;
            }
            var r = e.replace(/\/[^/]*$/, "/");
            return "".concat(r).concat(t);
          };
      },
      7768: function (e, t, n) {
        "use strict";
        n.d(t, {
          R: function () {
            return r;
          },
        });
        var r = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "absurd";
          throw new Error(t);
        };
      },
      3842: function (e, t, n) {
        "use strict";
        n.d(t, {
          IN: function () {
            return i;
          },
          MO: function () {
            return p;
          },
          rX: function () {
            return a;
          },
        });
        var r = n(5846),
          o = {
            _componentName: r.Z_,
            _implementation: (0, r.mC)({ _frame: (0, r.mC)({ id: r.Z_ }) }),
          },
          i = (0, r.mC)(o),
          a = function (e) {
            var t = (0, r.ld)(i, e, "");
            return "error" === t.type ? null : t.value;
          },
          c = {
            clientSecret: (0, r.jt)(
              (0, r.mC)({ id: r.Z_, clientSecret: r.Z_, type: r.Z_ })
            ),
          },
          s = (0, r.mC)(c),
          u = { _elements: (0, r.CT)(i), _id: r.Z_, _commonOptions: s },
          l = (0, r.mC)(u),
          p = function (e) {
            var t = (0, r.ld)(l, e, "");
            return "error" === t.type ? null : t.value;
          };
      },
      4421: function (e, t, n) {
        "use strict";
        n.d(t, {
          $3: function () {
            return i.$3;
          },
          AG: function () {
            return i.AG;
          },
          Ao: function () {
            return i.Ao;
          },
          Bi: function () {
            return i.Bi;
          },
          CT: function () {
            return i.CT;
          },
          Gu: function () {
            return i.Gu;
          },
          HM: function () {
            return i.HM;
          },
          IN: function () {
            return o.IN;
          },
          M2: function () {
            return i.M2;
          },
          M4: function () {
            return i.M4;
          },
          MO: function () {
            return o.MO;
          },
          MZ: function () {
            return i.MZ;
          },
          NM: function () {
            return i.NM;
          },
          NQ: function () {
            return i.NQ;
          },
          O: function () {
            return i.O;
          },
          RH: function () {
            return i.RH;
          },
          Rx: function () {
            return i.Rx;
          },
          Ry: function () {
            return i.Ry;
          },
          Rz: function () {
            return r.R;
          },
          Wc: function () {
            return i.Wc;
          },
          Xg: function () {
            return i.Xg;
          },
          Z_: function () {
            return i.Z_;
          },
          cV: function () {
            return i.cV;
          },
          ci: function () {
            return i.ci;
          },
          hN: function () {
            return i.hN;
          },
          jt: function () {
            return i.jt;
          },
          kw: function () {
            return i.kw;
          },
          ld: function () {
            return i.ld;
          },
          mC: function () {
            return i.mC;
          },
          n2: function () {
            return i.n2;
          },
          or: function () {
            return i.or;
          },
          p3: function () {
            return i.p3;
          },
          rX: function () {
            return o.rX;
          },
          ui: function () {
            return i.ui;
          },
          uw: function () {
            return i.uw;
          },
          x4: function () {
            return i.x4;
          },
          xe: function () {
            return i.xe;
          },
          yv: function () {
            return i.yv;
          },
          z$: function () {
            return i.z$;
          },
          zS: function () {
            return i.zS;
          },
        });
        var r = n(7768),
          o = n(3842),
          i = n(5846);
      },
      5846: function (e, t, n) {
        "use strict";
        n.d(t, {
          $3: function () {
            return h;
          },
          AG: function () {
            return g;
          },
          Ao: function () {
            return d;
          },
          Bi: function () {
            return B;
          },
          CT: function () {
            return U;
          },
          Gu: function () {
            return V;
          },
          HM: function () {
            return T;
          },
          M2: function () {
            return x;
          },
          M4: function () {
            return Z;
          },
          MZ: function () {
            return q;
          },
          NM: function () {
            return z;
          },
          NQ: function () {
            return y;
          },
          O: function () {
            return O;
          },
          RH: function () {
            return _;
          },
          Rx: function () {
            return R;
          },
          Ry: function () {
            return F;
          },
          Wc: function () {
            return M;
          },
          Xg: function () {
            return j;
          },
          Z_: function () {
            return I;
          },
          cV: function () {
            return C;
          },
          ci: function () {
            return K;
          },
          hN: function () {
            return N;
          },
          jt: function () {
            return v;
          },
          kw: function () {
            return P;
          },
          ld: function () {
            return W;
          },
          mC: function () {
            return J;
          },
          n2: function () {
            return w;
          },
          or: function () {
            return b;
          },
          p3: function () {
            return L;
          },
          ui: function () {
            return S;
          },
          uw: function () {
            return G;
          },
          x4: function () {
            return m;
          },
          xe: function () {
            return E;
          },
          yv: function () {
            return Y;
          },
          z$: function () {
            return A;
          },
          zS: function () {
            return f;
          },
        });
        var r = n(6222),
          o = n(3696),
          i = n(8489),
          a = n(1927),
          c = n(8574),
          s = n(9531),
          u = n(8845),
          l = n(8059),
          p = (n(5845), n(7768)),
          d = function (e, t, n) {
            var r = n.path.reduce(function (e, t, n) {
              return 0 === n
                ? t
                : 0 === t.indexOf(".")
                ? "".concat(e, '["').concat(t, '"]')
                : "".concat(e, ".").concat(t);
            }, "");
            return "undefined" === t
              ? "Missing value for "
                  .concat(n.label, ": ")
                  .concat(r || "value", " should be ")
                  .concat(e, ".")
              : "Invalid value for "
                  .concat(n.label, ": ")
                  .concat(r || "value", " should be ")
                  .concat(e, ". You specified: ")
                  .concat(t, ".");
          },
          m = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
            return { type: "valid", value: e, warnings: t };
          },
          f = function (e) {
            return { error: e, errorType: "full", type: "error" };
          },
          _ = function (e, t, n) {
            var r = new a.No(d(e, t, n));
            return f(r);
          },
          h = function (e, t, n) {
            return {
              expected: e,
              actual: String(t),
              options: n,
              errorType: "mismatch",
              type: "error",
            };
          },
          y = function (e, t) {
            return (0, i.Z)(
              (0, i.Z)({}, e),
              {},
              { path: [].concat((0, o.Z)(e.path), [t]) }
            );
          },
          v = function (e) {
            return function (t, n) {
              return void 0 === t ? m(t) : e(t, n);
            };
          },
          g = function (e) {
            return function (t, n) {
              return null === t ? m(t) : e(t, n);
            };
          },
          b = function (e, t) {
            return function (n, r) {
              var o = function (e) {
                  var t = e.options.path.join(".") || "value";
                  return {
                    error: "".concat(t, " should be ").concat(e.expected),
                    actual: "".concat(t, " as ").concat(e.actual),
                  };
                },
                i = function (e, t, n) {
                  return f(
                    new a.No(
                      "Invalid value for "
                        .concat(e, ": ")
                        .concat(t, ". You specified ")
                        .concat(n, ".")
                    )
                  );
                },
                c = e(n, r),
                s = t(n, r);
              if ("error" === c.type && "error" === s.type) {
                if ("mismatch" === c.errorType && "mismatch" === s.errorType) {
                  var u = o(c),
                    l = u.error,
                    p = u.actual,
                    d = o(s),
                    m = d.error,
                    _ = d.actual;
                  return i(
                    r.label,
                    l === m ? l : "".concat(l, " or ").concat(m),
                    p === _ ? p : "".concat(p, " and ").concat(_)
                  );
                }
                if ("mismatch" === c.errorType) {
                  var h = o(c),
                    y = h.error,
                    v = h.actual;
                  return i(r.label, y, v);
                }
                if ("mismatch" === s.errorType) {
                  var g = o(s),
                    b = g.error,
                    w = g.actual;
                  return i(r.label, b, w);
                }
                return f(c.error);
              }
              return "valid" === c.type ? c : s;
            };
          },
          w = function (e, t) {
            return function (n, r) {
              return n instanceof e
                ? m(n)
                : h("a ".concat(t, " instance"), n, r);
            };
          },
          k = function (e, t) {
            return function (n, r) {
              var o = (0, c.sE)(e, function (e) {
                return e === n;
              });
              if (void 0 === o) {
                var i = t
                  ? "a recognized string."
                  : "one of the following strings: ".concat(e.join(", "));
                return h(i, n, r);
              }
              return m(o);
            };
          },
          E = function (e) {
            return function (t, n) {
              return "string" == typeof t && 0 === t.indexOf(e)
                ? m(t)
                : h("a string starting with ".concat(e), t, n);
            };
          },
          S = function (e, t) {
            return function (n, r) {
              return "string" == typeof n && n.length >= e && n.length <= t
                ? m(n)
                : h(
                    e === t
                      ? "a string of ".concat(e, " characters")
                      : "a string with "
                          .concat(e, " to ")
                          .concat(t, " characters"),
                    n,
                    r
                  );
            };
          },
          P = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return k(t, !1);
          },
          A = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return k(t, !0);
          },
          N = P.apply(void 0, (0, o.Z)(u.J$)),
          C = P.apply(void 0, (0, o.Z)(s.QT)),
          I =
            (P.apply(void 0, (0, o.Z)(Object.keys(l.Kl))),
            function (e, t) {
              return "string" == typeof e ? m(e) : h("a string", e, t);
            }),
          T = function (e, t) {
            return "true" === e
              ? m(!0)
              : "false" === e
              ? m(!1)
              : h("a boolean", "" === e ? '""' : e, t);
          },
          M = function (e, t) {
            return function (n, r) {
              return void 0 === n ? m(t()) : e(n, r);
            };
          },
          j = function (e, t) {
            return "boolean" == typeof e ? m(e) : h("a boolean", e, t);
          },
          R = function (e, t) {
            return "number" == typeof e ? m(e) : h("a number", e, t);
          },
          O = function (e, t) {
            return function (n, r) {
              return "number" == typeof n && n >= e && n <= t
                ? m(n)
                : h("a number from ".concat(e, " to ").concat(t), n, r);
            };
          },
          Z = function (e) {
            return function (t, n) {
              return "number" == typeof t && t > e
                ? m(t)
                : h("a number greater than ".concat(e), t, n);
            };
          },
          x = function (e) {
            return function (t, n) {
              return "number" == typeof t && t >= e
                ? m(t)
                : h("a number greater than or equal to ".concat(e), t, n);
            };
          },
          L = function (e, t) {
            return function (n, r) {
              return n === e ? m(e) : h(t || String(e), n, r);
            };
          },
          D = function (e) {
            return function (t, n) {
              return "number" == typeof t &&
                t === parseInt(t, 10) &&
                (!e || t >= 0)
                ? m(t)
                : h(
                    e
                      ? "a positive amount in the currency's subunit"
                      : "an amount in the currency's subunit",
                    t,
                    n
                  );
            };
          },
          B = function (e, t) {
            return D(!1)(e, t);
          },
          q = function (e, t) {
            return D(!0)(e, t);
          },
          F = function (e, t) {
            return e && "object" == typeof e ? m(e) : h("an object", e, t);
          },
          U = function (e) {
            return function (t, n) {
              return Array.isArray(t)
                ? t
                    .map(function (t, r) {
                      return e(t, y(n, String(r)));
                    })
                    .reduce(function (e, t) {
                      return "error" === e.type
                        ? e
                        : "error" === t.type
                        ? t
                        : m(
                            [].concat((0, o.Z)(e.value), [t.value]),
                            [].concat(
                              (0, o.Z)(e.warnings),
                              (0, o.Z)(t.warnings)
                            )
                          );
                    }, m([]))
                : h("array", t, n);
            };
          },
          G = function (e) {
            return function (t) {
              return function (n, r) {
                if (Array.isArray(n)) {
                  var o = t(n, r);
                  if ("valid" === o.type)
                    for (var i = {}, c = 0; c < o.value.length; c += 1) {
                      var s = o.value[c];
                      if (
                        "object" == typeof s &&
                        s &&
                        "string" == typeof s[e]
                      ) {
                        var u = s[e],
                          l = "_".concat(u);
                        if (i[l])
                          return f(
                            new a.No(
                              "Duplicate value for "
                                .concat(e, ": ")
                                .concat(u, ". The property '")
                                .concat(e, "' of '")
                                .concat(r.path.join("."), "' has to be unique.")
                            )
                          );
                        i[l] = !0;
                      }
                    }
                  return o;
                }
                return h("array", n, r);
              };
            };
          },
          Y = function (e) {
            return function (t, n) {
              return void 0 === t
                ? m(void 0)
                : h("used in ".concat(e, " instead"), t, n);
            };
          },
          z = function (e) {
            return function (t, n) {
              return void 0 === t ? m(void 0) : f(new a.No(e));
            };
          },
          H = function (e) {
            return function (t) {
              return function (n, s) {
                if (n && "object" == typeof n && !Array.isArray(n)) {
                  var u = n,
                    l = (0, c.sE)(Object.keys(u), function (e) {
                      return !t[e];
                    });
                  if (l && e)
                    return f(
                      new a.No(
                        "Invalid "
                          .concat(s.label, " parameter: ")
                          .concat(
                            [].concat((0, o.Z)(s.path), [l]).join("."),
                            " is not an accepted parameter."
                          )
                      )
                    );
                  var p = Object.keys(u),
                    d = m({});
                  return (
                    l &&
                      (d = p.reduce(function (e, n) {
                        return t[n]
                          ? e
                          : m(
                              e.value,
                              [].concat((0, o.Z)(e.warnings), [
                                "Unrecognized "
                                  .concat(s.label, " parameter: ")
                                  .concat(
                                    [].concat((0, o.Z)(s.path), [n]).join("."),
                                    " is not a recognized parameter. This may cause issues with your integration in the future."
                                  ),
                              ])
                            );
                      }, d)),
                    Object.keys(t).reduce(function (e, n) {
                      if ("error" === e.type) return e;
                      var a = (0, t[n])(u[n], y(s, n));
                      return "valid" === a.type && void 0 !== a.value
                        ? m(
                            (0, i.Z)(
                              (0, i.Z)({}, e.value),
                              {},
                              (0, r.Z)({}, n, a.value)
                            ),
                            [].concat(
                              (0, o.Z)(e.warnings),
                              (0, o.Z)(a.warnings)
                            )
                          )
                        : "valid" === a.type
                        ? m(
                            e.value,
                            [].concat(
                              (0, o.Z)(e.warnings),
                              (0, o.Z)(a.warnings)
                            )
                          )
                        : a;
                    }, d)
                  );
                }
                return h("an object", n, s);
              };
            };
          },
          K = H(!0),
          J = H(!1),
          W = function (e, t, n, r) {
            var o = r || {},
              i = e(t, {
                authenticatedOrigin: o.authenticatedOrigin || "",
                element: o.element || "",
                label: n,
                path: o.path || [],
              });
            return "valid" === i.type || "full" === i.errorType
              ? i
              : {
                  type: "error",
                  errorType: "full",
                  error: new a.No(d(i.expected, i.actual, i.options)),
                };
          },
          V = function (e, t, n, r) {
            var o = W(e, t, n, r);
            switch (o.type) {
              case "valid":
                return { value: o.value, warnings: o.warnings };
              case "error":
                throw o.error;
              default:
                return (0, p.R)(o);
            }
          };
      },
      5916: function (e, t, n) {
        "use strict";
        n.d(t, {
          Kb: function () {
            return s;
          },
          Nb: function () {
            return p;
          },
          P0: function () {
            return d;
          },
          et: function () {
            return l;
          },
          tk: function () {
            return u;
          },
        });
        var r,
          o = n(6222),
          i = n(6846),
          a = n(4867),
          c = n(8723),
          s = "".concat(i.A2, "-input"),
          u = ("".concat(i.A2, "-inputAfter"), "".concat(i.A2, "-safariInput")),
          l = "StripeElement",
          p = ["ready", "focus", "blur", "escape", "change", "loaderstart"],
          d =
            ((r = {}),
            (0, o.Z)(
              r,
              a.Yj.linkAuthentication,
              c.NC.LINK_AUTHENTICATION_ELEMENT
            ),
            (0, o.Z)(r, a.Yj.payment, c.NC.PAYMENT_ELEMENT),
            (0, o.Z)(r, a.Yj.shippingAddress, c.NC.ADDRESS_ELEMENT),
            (0, o.Z)(r, a.Yj.address, c.NC.ADDRESS_ELEMENT),
            (0, o.Z)(
              r,
              a.Yj.autocompleteSuggestions,
              c.NC.AUTOCOMPLETE_SUGGESTIONS_ELEMENT
            ),
            (0, o.Z)(
              r,
              a.Yj.achBankSearchResults,
              c.NC.ACH_BANK_SEARCH_RESULTS_ELEMENT
            ),
            r);
      },
      9560: function (e, t, n) {
        "use strict";
        n.d(t, {
          KC: function () {
            return r;
          },
          ZS: function () {
            return o;
          },
        });
        var r = {
            margin: "0",
            padding: "0",
            border: "none",
            display: "block",
            background: "transparent",
            position: "relative",
            opacity: "1",
            clear: "both",
          },
          o = {
            border: "none",
            display: "block",
            position: "absolute",
            height: "1px",
            top: "-1px",
            left: "0",
            padding: "0",
            margin: "0",
            width: "100%",
            opacity: "0",
            background: "transparent",
            "pointer-events": "none",
            "font-size": "16px",
          };
      },
      5788: function (e, t, n) {
        "use strict";
        n.d(t, {
          $o: function () {
            return l;
          },
          Eo: function () {
            return d;
          },
          NO: function () {
            return u;
          },
          ct: function () {
            return m;
          },
          yn: function () {
            return p;
          },
        });
        var r = n(4421),
          o = n(4867),
          i = n(9686),
          a = n(8342),
          c = n(7125),
          s = function (e) {
            switch (e.type) {
              case "error":
                return { error: e.error };
              case "object":
                switch (e.object.object) {
                  case "payment_intent":
                    return { paymentIntent: e.object };
                  case "setup_intent":
                    return { setupIntent: e.object };
                  default:
                    return (0, r.Rz)(e.object);
                }
              default:
                return (0, r.Rz)(e);
            }
          },
          u = function (e, t, n, r, i) {
            return t === o.kE.PAYMENT_INTENT
              ? n.action
                  .retrievePaymentIntent({
                    hosted: false,
                    intentSecret: e,
                    locale: r,
                    asErrorIfNotSucceeded: true,
                    expandParam: i || [],
                  })
                  .then(s)
              : n.action
                  .retrieveSetupIntent({
                    hosted: false,
                    intentSecret: e,
                    locale: r,
                    asErrorIfNotSucceeded: true,
                    expandParam: i || [],
                  })
                  .then(s);
          },
          l = function (e, t, n, r, i, a, c) {
            return t === o.kE.PAYMENT_INTENT
              ? n.action
                  .cancelPaymentIntentSource({
                    intentSecret: e,
                    locale: i,
                    sourceId: r,
                    sourceIntentId: a,
                    publishableKey: c,
                  })
                  .then(s)
              : n.action
                  .cancelSetupIntentSource({
                    intentSecret: e,
                    locale: i,
                    sourceId: r,
                    sourceIntentId: a,
                    publishableKey: c,
                  })
                  .then(s);
          },
          p = function (e) {
            return (
              (e.error
                ? e.error.payment_intent || e.error.setup_intent
                : e.paymentIntent || e.setupIntent) || null
            );
          },
          d = function (e, t, n, r, o, i) {
            var a,
              c = !0,
              s = 3,
              l = 0;
            return (
              (function d() {
                (l += 1),
                  u(e, t, n, r, o).then(function (e) {
                    if (c) {
                      var t = p(e);
                      if (null !== t)
                        switch (((s = 3), t.status)) {
                          case "requires_action":
                          case "requires_source_action":
                            return void (a = setTimeout(d, 5e3));
                          case "processing":
                            return void (a = setTimeout(d, 1e3));
                          default:
                            i(e, l);
                        }
                      else if (s > 0) {
                        var n = 500 * Math.pow(2, 3 - s);
                        (a = setTimeout(d, n)), (s -= 1);
                      } else i(e, l);
                    }
                  });
              })(),
              function () {
                clearTimeout(a), (c = !1);
              }
            );
          },
          m = function (e) {
            var t = e.initialDelay,
              n = e.pollTimeGap,
              r = e.checkIntent,
              o = e.locale,
              u = e.controller,
              l = e.intent,
              p = e.expandParam,
              d = void 0 === p ? [] : p,
              m = e.shouldPoll,
              f =
                void 0 === m
                  ? function () {
                      return !0;
                    }
                  : m,
              _ =
                "payment_intent" === l.object
                  ? { paymentIntent: l }
                  : { setupIntent: l };
            return new i.J(function (e, i) {
              setTimeout(function () {
                var t = setInterval(function () {
                  if (!f()) return e(_), void clearInterval(t);
                  var n;
                  ((n = {
                    hosted: !1,
                    intentSecret: (0, a.O3)(l),
                    locale: o,
                    expandParam: d,
                  }),
                  "payment_intent" === l.object
                    ? u.action.retrievePaymentIntent(n)
                    : u.action.retrieveSetupIntent(n)).then(function (n) {
                    (_ = s(n)),
                      n.error
                        ? (u.action
                            .localizeError(c.I4)
                            .then(function (e) {
                              return { error: e };
                            })
                            .then(e),
                          clearInterval(t))
                        : r(n.object) && (e(_), clearInterval(t));
                  });
                }, n);
              }, t - n);
            });
          };
      },
      8551: function (e, t, n) {
        "use strict";
        n.d(t, {
          z: function () {
            return s;
          },
        });
        var r = n(9686),
          o = n(7125),
          i = n(8723),
          a = n(1917),
          c = function (e) {
            return e
              ? "payment_intent" === e.object
                ? e.last_payment_error
                : e.last_setup_error
              : null;
          },
          s = function (e, t, n, s) {
            return new r.J(function (r, u) {
              var l = new a.E(),
                p = n.createLightboxFrame({
                  type: i.NC.HCAPTCHA_APP,
                  options: {
                    intentId: t.id,
                    clientSecret: t.client_secret,
                    locale: s,
                    sitekey: e.site_key,
                    verifyUrl: e.verification_url,
                    startTime: l.getAsPosixTime(),
                  },
                }),
                d = function (e) {
                  var t = o.I4;
                  return (
                    null != e && (t = e),
                    n.action.localizeError(t).then(function (e) {
                      return { error: e };
                    })
                  );
                };
              n.report("intent_confirmation_challenge.start"),
                p._on("load", function () {
                  n.report(
                    "intent_confirmation_challenge.stripe_js_frame_loaded",
                    { duration_since_start_ms: l.getElapsedTime() }
                  ),
                    p.fadeInBackdrop();
                }),
                p.show(),
                p._on("request-cancel", function (e) {
                  p.fadeOutBackdrop(),
                    p.destroy(!0),
                    n.report("intent_confirmation_challenge.cancel"),
                    r(d(c(null == e ? void 0 : e.intent)));
                }),
                p._on("request-close", function (e) {
                  p.fadeOutBackdrop(), p.destroy(!0);
                  var t = null == e ? void 0 : e.intent;
                  if (t) {
                    var i = c(t);
                    i
                      ? /Captcha/.test(i.message || "")
                        ? (n.report(
                            "intent_confirmation_challenge.verification_failed"
                          ),
                          r(d(i)))
                        : (n.report("intent_confirmation_challenge.success"),
                          r(d(i)))
                      : (n.report("intent_confirmation_challenge.success"),
                        (function (e, t) {
                          "payment_intent" === t.object
                            ? e({ paymentIntent: t })
                            : e({ setupIntent: t });
                        })(r, t));
                  } else n.report("intent_confirmation_challenge.verification_error"), r(d(o.I4));
                });
            });
          };
      },
      5642: function (e, t, n) {
        "use strict";
        n.d(t, {
          e: function () {
            return a;
          },
          k: function () {
            return i;
          },
        });
        var r = n(8792),
          o = n(8342),
          i = function (e, t, n) {
            return (0, r.U)(t).then(function (t) {
              return (0, r.d)(n, "next_action redirect", t), (0, o.PA)(t, e);
            });
          },
          a = function (e, t, n) {
            return (0, r.U)(t).then(function (t) {
              return (0, r.d)(n, "next_action redirect", t), (0, o.e3)(t, e);
            });
          };
      },
      2073: function (e, t, n) {
        "use strict";
        n.d(t, {
          s: function () {
            return l;
          },
        });
        var r = n(7904),
          o = n(8489),
          i = n(1161),
          a = n(8723),
          c = n(9686),
          s = n(5788),
          u = n(1917),
          l = function (e, t, n, l, p, d) {
            var m = (0, i.xz)(),
              f = new u.E(),
              _ = (function (e, t, n, r, i) {
                return e.createLightboxFrame({
                  type: a.NC.AUTHORIZE_WITH_URL,
                  options: (0, o.Z)(
                    { url: t, locale: i, intentId: n },
                    r ? { source: r } : {}
                  ),
                });
              })(l, e.url, t.id, e.source, p);
            return (
              _.show(),
              l.report("authorize_with_url.loading", {
                viewport: m,
                intentId: t.id,
              }),
              _._on("load", function () {
                l.report("authorize_with_url.loaded", {
                  loadDuration: f.getElapsedTime(),
                  intentId: t.id,
                }),
                  _.fadeInBackdrop();
              }),
              _._on("challenge_complete", function () {
                _.fadeOutBackdrop();
              }),
              new c.J(function (o, i) {
                var a = e.source;
                a &&
                  _._once("cancel", function () {
                    c.J.all([(0, s.$o)(t, n, l, a, p), _.destroy()]).then(
                      function (e) {
                        var t = (0, r.Z)(e, 1)[0];
                        return o(t);
                      }
                    );
                  }),
                  _._once("authorize_with_url_done", function () {
                    var e = _.destroy();
                    (0, s.Eo)(t, n, l, p, d, function (n, r) {
                      e.then(function () {
                        l.report("authorize_with_url.done", {
                          shownDuration: f.getElapsedTime(),
                          success: !("error" in n),
                          intentId: t.id,
                          iterations: r,
                        }),
                          o(n);
                      });
                    });
                  });
              })
            );
          };
      },
      9251: function (e, t, n) {
        "use strict";
        n.d(t, {
          A: function () {
            return F;
          },
        });
        var r = n(7904),
          o = n(9686),
          i = n(4421),
          a = n(1917),
          c = n(8489),
          s = n(508),
          u = n(8723),
          l = function (e, t) {
            var n = t.intentSecret,
              r = t.controller,
              i = t.locale,
              a = t.hosted,
              c = r.createLightboxFrame({
                type: u.NC.STRIPE_3DS2_CHALLENGE,
                options: { intentId: n.id, hosted: a, locale: i },
              });
            r.report("3ds2.challenge_frame.loading", {
              intentId: n.id,
              hosted: a,
            }),
              c._on("challenge_complete", function () {
                c.fadeOutBackdrop();
              });
            var s = (function (e) {
              return new o.J(function (t) {
                e._on("load", function () {
                  return t(e);
                });
              });
            })(c);
            return (
              s.then(function () {
                return r.report("3ds2.challenge_frame.loaded", {
                  intentId: n.id,
                  hosted: a,
                });
              }),
              a &&
                (c.show(),
                c.action.show3DS2Spinner({ cardBrand: e.cardBrand })),
              s
            );
          },
          p = function (e, t) {
            var n = t.oneClickAuthnDeviceSupport,
              r = t.oneClickAuthnOptedOut,
              i = t.challengeFrame;
            return new o.J(function (t, o) {
              i.then(function (i) {
                var a = function () {
                  return o(new Error("User canceled"));
                };
                i._once("cancel", a),
                  i.isVisible || (i.show(), i.fadeInBackdrop());
                e.type;
                var l = e.optimizations,
                  p =
                    (e.oneClickAuthn,
                    (0, s.Z)(e, ["type", "optimizations", "oneClickAuthn"]));
                i.action
                  .perform3DS2Challenge(
                    (0, c.Z)(
                      (0, c.Z)({}, p),
                      {},
                      {
                        shouldSandbox: l.sandboxChallengeFrame,
                        recordFinalCres: l.recordFinalCres,
                        oneClickAuthnDeviceSupport: n,
                        oneClickAuthnOptedOut: r,
                        oneClickWebauthnEnrollmentAppUrl: (0, u.xS)(
                          "one-click-webauthn-enrollment-3db70483e350b3bb8373409ace73f47a.html"
                        ),
                      }
                    )
                  )
                  .then(function () {
                    i._off("cancel", a), t();
                  });
              });
            });
          },
          d = n(5788),
          m = n(6222),
          f = function (e) {
            if (!e || "object" != typeof e || (!e.type && !e.code)) return e;
            var t = function (t) {
              return e[t] && "string" == typeof e[t]
                ? (0, m.Z)({}, "".concat(t, "_id"), e[t])
                : e[t] && "object" == typeof e[t] && "string" == typeof e[t].id
                ? (0, m.Z)({}, "".concat(t, "_id"), e[t].id)
                : null;
            };
            return (0, c.Z)(
              (0, c.Z)(
                (0, c.Z)(
                  (0, c.Z)(
                    { type: e.type, code: e.code, param: e.param },
                    t("payment_intent")
                  ),
                  t("setup_intent")
                ),
                t("payment_method")
              ),
              t("source")
            );
          },
          _ = function (e, t, n) {
            var r = t.intentSecret,
              o = t.intentType,
              i = t.controller,
              a = t.locale;
            return (0, d.NO)(r, o, i, a, n);
          },
          h = function (e, t) {
            var n = t.controller,
              r = t.intentSecret,
              o = t.intentType,
              i = t.locale;
            return (0, d.$o)(
              r,
              o,
              n,
              e.threeDS2Source,
              i,
              e.threeDS2Intent,
              e.publishableKey
            );
          },
          y = function (e, t) {
            var n = e.intentSecret,
              i = e.controller,
              a = e.hosted,
              s = t.intent,
              u = t.challengeFrame,
              l = t.startTimestamp;
            return o.J.all([
              s,
              u.then(function (e) {
                return e.destroy();
              }),
            ]).then(function (e) {
              var t = (0, r.Z)(e, 1)[0];
              return (
                i.report(
                  "3ds2.done",
                  (0, c.Z)(
                    {
                      intentId: n.id,
                      hosted: a,
                      totalDuration: l.getElapsedTime(),
                    },
                    t.error
                      ? { error: f(t.error), success: !1 }
                      : { success: !0 }
                  )
                ),
                t
              );
            });
          },
          v = function (e) {
            var t = e.intentSecret,
              n = e.controller,
              r = e.hosted,
              i = e.locale,
              a = n.createHiddenFrame(u.NC.STRIPE_3DS2_FINGERPRINT, {
                intentId: t.id,
                locale: i,
                hosted: r,
              });
            n.report("3ds2.fingerprint_frame.loading", {
              hosted: r,
              intentId: t.id,
            });
            var c = (function (e) {
              return new o.J(function (t) {
                e._on("load", function () {
                  return t(e);
                });
              });
            })(a);
            return (
              c.then(function () {
                n.report("3ds2.fingerprint_frame.loaded", {
                  hosted: r,
                  intentId: t.id,
                });
              }),
              c
            );
          },
          g = function (e, t) {
            var n = t.intentSecret,
              r = t.controller,
              i = t.hosted;
            return e.optimizations.skipFingerprint
              ? o.J.resolve({ fingerprintAttempted: !1, fingerprintData: null })
              : "" === e.methodUrl
              ? (r.report("3ds2.fingerprint.no_method_url", {
                  hosted: i,
                  intentId: n.id,
                }),
                o.J.resolve({
                  fingerprintAttempted: !1,
                  fingerprintData: null,
                }))
              : v(t).then(function (t) {
                  return t.action
                    .perform3DS2Fingerprint({
                      threeDS2Source: e.threeDS2Source,
                      merchant: e.merchant,
                      transactionId: e.transactionId,
                      methodUrl: e.methodUrl,
                      shouldSandbox: e.optimizations.sandboxFingerprintFrame,
                    })
                    .then(function (e) {
                      return t.destroy(), e;
                    });
                });
          },
          b = n(6798),
          w = function () {
            if (
              void 0 === window.PublicKeyCredential ||
              (function () {
                if (!/CrOS/i.test(window.navigator.userAgent)) return !1;
                var e =
                    window.navigator.userAgent.match(
                      /Chrome\/\d+\.\d+\.(\d+)\.(\d+)/
                    ) || [],
                  t = Number(e[1]),
                  n = Number(e[2]);
                return !(
                  (4389 === t && n >= 82) ||
                  (4430 === t && n >= 11) ||
                  t >= 4431
                );
              })() ||
              (function () {
                var e = /iPad|iPhone/i.test(window.navigator.userAgent),
                  t =
                    /^((?!chrome|android).)*safari/i.test(
                      window.navigator.userAgent
                    ) && !/SamsungBrowser/.test(window.navigator.userAgent);
                if (!e || t) return !1;
                var n =
                    window.navigator.userAgent.match(
                      /OS (\d+)_(\d+)(_\d+)? like Mac OS X/
                    ) || [],
                  r = parseInt(n[1], 10),
                  o = parseInt(n[2], 10);
                return (
                  !isNaN(r) && !isNaN(o) && ((15 === r && o >= 4) || r > 15)
                );
              })()
            )
              return o.J.resolve(!1);
            var e =
                window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable(),
              t = new o.J(function (e) {
                return setTimeout(function () {
                  return e(!1);
                }, 500);
              });
            return o.J.race([e, t]).catch(function () {
              return !1;
            });
          },
          k = function () {
            if (void 0 === window.PaymentRequest) return o.J.resolve(!1);
            if (!/Chrome\/(9[5-9]|[1-9]\d\d)/.test(window.navigator.userAgent))
              return o.J.resolve(!1);
            try {
              var e = [
                {
                  supportedMethods: "secure-payment-confirmation",
                  data: {
                    action: "authenticate",
                    credentialIds: [new Uint8Array(1)],
                    challenge: new Uint8Array(1),
                    fallbackUrl: window.location,
                    rpId: "stripe.com",
                    payeeOrigin: "https://stripe.com",
                    instrument: {
                      displayName: "Mock ····1234",
                      icon: 'data:image/svg+xml;utf8,<svg width="28" height="18" xmlns="http://www.w3.org/2000/svg"></svg>',
                    },
                  },
                },
              ];
              return new window.PaymentRequest(e, {
                total: {
                  label: "Total",
                  amount: { currency: "USD", value: "0" },
                },
              })
                .canMakePayment()
                .catch(function () {
                  return !1;
                });
            } catch (e) {
              return o.J.resolve(!1);
            }
          },
          E = "stripe-js-one-click-authn",
          S = "W",
          P = "S",
          A = "SE/WA",
          N = function (e) {
            return btoa(String.fromCharCode.apply(null, new Uint8Array(e)))
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=/g, "");
          },
          C = function (e) {
            return atob(e.replace(/-/g, "+").replace(/_/g, "/"));
          },
          I = function (e) {
            var t = C(e);
            return Uint8Array.from(t, function (e) {
              return e.charCodeAt(0);
            });
          },
          T =
            (n(750),
            n(7373),
            n(8534),
            function (e) {
              return "data:image/svg+xml,".concat(
                encodeURIComponent(e.replace(/\n/g, "").replace(/\s+/g, " "))
              );
            }),
          M = function (e) {
            switch (e) {
              case "visa":
                return T(
                  '<svg width="28" height="18" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">\n  <g fill-rule="nonzero" fill="none">\n    <rect\n      stroke-opacity=".2"\n      stroke="#000"\n      stroke-width=".5"\n      fill="#FFF"\n      x=".3"\n      y=".3"\n      width="23.5"\n      height="15.5"\n      rx="2"\n    />\n    <path\n      d="M2.8 6c-.5-.4-1.1-.6-1.8-.8h2.8c.3 0 .6 0 .7.4l.6 2.9.2.8L7 5.1h1.8L6 11.3H4.3L2.8 5.9Zm7.3 5.3H8.4l1-6.2h1.8L10 11.3Zm6.2-6L16 6.6H16a3 3 0 0 0-1.3-.3c-.7 0-1 .3-1 .5 0 .3.4.5 1 .8 1 .4 1.4 1 1.4 1.7 0 1.2-1.2 2-3 2-.7 0-1.4 0-1.8-.3l.2-1.3h.2c.6.3 1 .4 1.6.4.5 0 1-.2 1-.6 0-.3-.2-.5-.8-.8-.7-.3-1.5-.8-1.5-1.7 0-1.2 1.2-2 2.8-2 .7 0 1.2.1 1.6.3ZM18.5 9H20l-.4-1.8v-.5l-.3.6-.7 1.7Zm2.1-4 1.4 6.2h-1.6l-.2-1H18l-.3 1h-1.8l2.5-5.7c.2-.4.5-.5 1-.5h1.2Z"\n      fill="#1434CB"\n    />\n  </g>\n</svg>'
                );
              case "amex":
                return T(
                  '<svg width="28" height="18" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd">\n    <rect fill="#016fd0" height="16" rx="2" width="24" />\n    <path\n      d="M13.8 13.4V7.7h10.1v1.6l-1.2 1.2 1.2 1.3v1.6H22l-1-1.1-1 1.1z"\n      fill="#fffffe"\n    />\n    <path\n      d="M14.4 12.8V8.3h3.8v1h-2.5v.7h2.5v1h-2.5v.7h2.5v1zM18.2 12.8l2-2.3-2-2.2h1.6l1.3 1.4 1.3-1.4h1.5l-2 2.2 2 2.2h-1.6l-1.2-1.4-1.3 1.5z"\n      fill="#016fd0"\n    />\n    <path\n      d="M14.2 2.6h2.5l.8 2v-2h3l.6 1.5.5-1.5H24v5.7H11.7z"\n      fill="#fffffe"\n    />\n    <g fill="#016fd0">\n      <path d="m14.7 3.3-2 4.4h1.4l.4-.9h2l.3.9h1.4l-2-4.4zm.2 2.5.6-1.4.6 1.4zM18.2 7.7V3.3h2L21 6l1-2.7h1.8v4.4h-1.2v-3l-1 3h-1.2l-1-3v3z" />\n    </g>\n  </g>\n</svg>'
                );
              case "mastercard":
                return T(
                  '<svg width="28" height="18" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd">\n    <rect fill="#252525" height="16" rx="2" width="24" />\n    <circle cx="9" cy="8" fill="#eb001b" r="5" />\n    <circle cx="15" cy="8" fill="#f79e1b" r="5" />\n    <path d="M12 4a5 5 0 0 1 0 8 5 5 0 0 1 0-8z" fill="#ff5f00" />\n  </g>\n</svg>'
                );
              case "unionpay":
              case "discover":
              case "jcb":
              case "diners":
              case "unknown":
              case "elo":
                return T(
                  '<svg width="28" height="18" xmlns="http://www.w3.org/2000/svg"></svg>'
                );
              default:
                return (0, i.Rz)(e);
            }
          },
          j = n(3701),
          R = n(8342),
          O = function (e, t, n) {
            var r = e.threeDS2Source,
              i = e.oneClickAuthn,
              a = t.controller,
              s = n.deviceSupport,
              u = n.startTimestamp,
              l = o.J.resolve({ authenticationAPIParam: null, optedOut: !1 });
            if (!i) return l;
            var p,
              d = i.credentials.filter(function (e) {
                return e.type === R.QS;
              });
            if (0 === d.length)
              return (
                a.report(
                  "one_click_authn.request_spc_authn.empty_credentials_list",
                  { client_id: E, source: r, device_support: s }
                ),
                l
              );
            try {
              var m = i.merchant.origin;
              if (!m)
                return (
                  a.report(
                    "one_click_authn.request_spc_authn.empty_merchant_origin",
                    { client_id: E, source: r, device_support: s }
                  ),
                  l
                );
              ((p = document.createElement("meta")).name = (0, j.To)(
                "__privateStripeMeta"
              )),
                (p.httpEquiv = "origin-trial"),
                (p.content =
                  "A9jhYwXRO3NPiLnZACCEXhtcpa/gzahH22dbcaOg/v0c8pngXUXu3XXoUzfa6LUumuJiS12jQS7azQx3rZdh8ggAAAB6eyJvcmlnaW4iOiJodHRwczovL2pzLnN0cmlwZS5jb206NDQzIiwiZmVhdHVyZSI6IlNlY3VyZVBheW1lbnRDb25maXJtYXRpb25PcHRPdXQiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="),
                document.head.appendChild(p);
              var f = new window.PaymentRequest(
                (function (e, t, n) {
                  var r = n.authenticationChallenge,
                    o = n.instrument,
                    i = o.cardBrand,
                    a = o.cardName,
                    c = o.cardLast4,
                    s = n.merchant;
                  return [
                    {
                      supportedMethods: "secure-payment-confirmation",
                      data: {
                        action: "authenticate",
                        rpId: "stripe.com",
                        credentialIds: e.map(function (e) {
                          return I(e.id);
                        }),
                        challenge: I(r),
                        timeout: 6e4,
                        fallbackUrl: window.location.toString(),
                        instrument: {
                          displayName: "".concat(a, " ····").concat(c),
                          icon: M(i),
                        },
                        payeeOrigin: t,
                        payeeName: s.name,
                        showOptOut: !0,
                      },
                    },
                  ];
                })(d, m, i),
                { total: { label: "Total", amount: i.amount } }
              );
              return (
                a.report("one_click_authn.request_spc_authn.prompted", {
                  client_id: E,
                  source: r,
                  timeToComplete: u.getElapsedTime(),
                  device_support: s,
                }),
                f
                  .show()
                  .then(function (e) {
                    var t;
                    return (
                      e.complete("success"),
                      a.report("one_click_authn.request_spc_authn.completed", {
                        client_id: E,
                        source: r,
                        timeToComplete: u.getElapsedTime(),
                        device_support: s,
                      }),
                      {
                        authenticationAPIParam: {
                          type: R.QS,
                          assertion:
                            ((t = e.details),
                            {
                              type: "public-key",
                              id: t.id,
                              raw_id: t.id,
                              response: {
                                authenticator_data: N(
                                  t.response.authenticatorData
                                ),
                                client_data_json: N(t.response.clientDataJSON),
                                signature: N(t.response.signature),
                              },
                            }),
                          payment_data: {
                            merchant_data: {
                              merchant_origin: m,
                              total: i.amount,
                            },
                            network_data: i.authenticationChallenge,
                          },
                        },
                        optedOut: !1,
                      }
                    );
                  })
                  .catch(function (e) {
                    if (
                      (function (e) {
                        return (
                          "AbortError" === e.name &&
                          -1 !== e.message.indexOf("opted out")
                        );
                      })(e)
                    )
                      return (
                        a.report(
                          "one_click_authn.request_spc_authn.opted_out",
                          {
                            client_id: E,
                            source: r,
                            timeToOptedOut: u.getElapsedTime(),
                            device_support: s,
                          }
                        ),
                        o.J.resolve({
                          authenticationAPIParam: null,
                          optedOut: !0,
                        })
                      );
                    var t =
                      {
                        AbortError: "request_aborted",
                        InvalidStateError: "payment_already_shown",
                        NotSupportedError: "payment_method_not_supported",
                        SecurityError: "security_error",
                      }[e.name] || "unexpected_error";
                    return (
                      a.report("one_click_authn.request_spc_authn.error", {
                        reason: t,
                        client_id: E,
                        source: r,
                        timeToError: u.getElapsedTime(),
                        device_support: s,
                        error: (0, c.Z)(
                          { name: e.name, message: e.message },
                          e
                        ),
                      }),
                      l
                    );
                  })
              );
            } catch (e) {
              a.report("one_click_authn.request_spc_authn.error", {
                client_id: E,
                reason: "unexpected_error",
                source: r,
                timeToError: u.getElapsedTime(),
                device_support: s,
                error: (0, c.Z)({ name: e.name, message: e.message }, e),
              });
            }
            return l;
          },
          Z = function (e, t, n) {
            var r = t.controller,
              i = n.deviceSupport,
              a = n.challengeFrame,
              c = n.startTimestamp,
              s = e.oneClickAuthn;
            if (!s) return o.J.resolve(null);
            var l = (function (e) {
                var t = e.spcEligible,
                  n = e.configurationType;
                return t && (n === P || n === A);
              })(i)
                ? R.QS
                : R.LD,
              p = s.credentials.filter(function (e) {
                return e.type === l;
              });
            return 0 === p.length
              ? (r.report(
                  "one_click_authn.request_webauthn_authn.empty_credentials_list",
                  { client_id: E, source: e.threeDS2Source, device_support: i }
                ),
                o.J.resolve(null))
              : new o.J(function (t, n) {
                  a.then(function (r) {
                    var o = function () {
                      return n(new Error("User canceled"));
                    };
                    r._once("cancel", o),
                      r.isVisible || (r.show(), r.fadeInBackdrop());
                    var a = {
                      amount: s.amount,
                      instrument: s.instrument,
                      merchant: s.merchant,
                      authenticationChallenge: s.authenticationChallenge,
                      layout: s.layout,
                      allowCredentials: p,
                    };
                    return r.action
                      .performOneClickWebauthnAuthentication({
                        threeDS2Source: e.threeDS2Source,
                        cardBrand: e.cardBrand,
                        appUrl: (0, u.xS)(
                          "one-click-webauthn-authentication-4e5dccfb86aa1cd0c949a866f3dec6fa.html"
                        ),
                        deviceSupport: i,
                        payload: a,
                        startPosixTime: c.getAsPosixTime(),
                      })
                      .then(function (e) {
                        r._off("cancel", o), t(e);
                      });
                  });
                });
          },
          x = function (e, t) {
            var n = e.threeDS2Source,
              r = e.oneClickAuthn,
              o = t.controller;
            if (!r) return null;
            var i = b.s$
              ? "safari"
              : b.D1
              ? "firefox"
              : b.P0 || b.Bh
              ? "edge"
              : b.G9
              ? b.sV
                ? "chrome_android"
                : /Chrome\/10[4-9]/.test(window.navigator.userAgent)
                ? "chrome_in_opt_out_trial"
                : "chrome"
              : null;
            if (!i)
              return (
                o.report("one_click_authn.configuration.error", {
                  client_id: E,
                  reason: "browser_not_found",
                  source: n,
                }),
                null
              );
            try {
              switch (new URLSearchParams(C(r.configuration)).get(i)) {
                case S:
                  return S;
                case P:
                  return P;
                case A:
                  return A;
                default:
                  return null;
              }
            } catch (e) {
              return (
                o.report("one_click_authn.configuration.error", {
                  client_id: E,
                  reason: "unexpected_error",
                  source: n,
                  error: (0, c.Z)({ name: e.name, message: e.message }, e),
                }),
                null
              );
            }
          },
          L = function () {
            try {
              return (
                0 ===
                "https://js.stripe.com/v3/".indexOf(window.top.location.origin)
              );
            } catch (e) {
              return !1;
            }
          },
          D = function () {
            var e = document.featurePolicy;
            if (!e) return !1;
            try {
              return (
                -1 !== e.allowedFeatures().indexOf("publickey-credentials-get")
              );
            } catch (e) {
              return !1;
            }
          },
          B = function (e, t) {
            return o.J.all([k(), w()]).then(function (n) {
              var o = (0, r.Z)(n, 2),
                i = o[0],
                a = o[1];
              return {
                sameOriginFrame: L(),
                spcEligible: i,
                webauthnEligible: a,
                publickeyCredentialsGetAllowed: D(),
                configurationType: x(e, t),
              };
            });
          },
          q = function (e, t, n) {
            var r = n.challengeFrame,
              o = n.startTimestamp;
            return B(e, t).then(function (n) {
              return (
                (a = (i = n).webauthnEligible),
                (c = i.configurationType),
                !a || (c !== S && c !== A)
                  ? (function (e) {
                      var t = e.spcEligible,
                        n = e.configurationType;
                      return t && n === P;
                    })(n)
                    ? O(e, t, { deviceSupport: n, startTimestamp: o }).then(
                        function (e) {
                          var t = e.authenticationAPIParam,
                            r = e.optedOut;
                          return {
                            deviceSupport: n,
                            authenticationAPIParam: t,
                            optedOut: r,
                          };
                        }
                      )
                    : {
                        deviceSupport: n,
                        authenticationAPIParam: null,
                        optedOut: !1,
                      }
                  : Z(e, t, {
                      deviceSupport: n,
                      challengeFrame: r,
                      startTimestamp: o,
                    }).then(function (e) {
                      return {
                        deviceSupport: n,
                        authenticationAPIParam: e,
                        optedOut: !1,
                      };
                    })
              );
              var i, a, c;
            });
          },
          F = function (e, t, n) {
            var c = new a.E(),
              s = l(e, t);
            switch (e.type) {
              case "3ds2-challenge":
                return B(e, t).then(function (r) {
                  return p(e, {
                    oneClickAuthnDeviceSupport: r,
                    oneClickAuthnOptedOut: !1,
                    challengeFrame: s,
                  }).then(
                    function () {
                      return y(t, {
                        intent: _(0, t, n),
                        challengeFrame: s,
                        startTimestamp: c,
                      });
                    },
                    function () {
                      return y(t, {
                        intent: h(e, t),
                        challengeFrame: s,
                        startTimestamp: c,
                      });
                    }
                  );
                });
              case "3ds2-fingerprint":
                return o.J.all([
                  g(e, t),
                  q(e, t, { challengeFrame: s, startTimestamp: c }),
                ])
                  .then(function (n) {
                    var i = (0, r.Z)(n, 2),
                      a = i[0],
                      c = i[1];
                    return (function (e, t, n) {
                      var r = n.fingerprintResult,
                        o = n.oneClickAuthn,
                        i = t.controller,
                        a = t.hosted,
                        c = t.intentSecret;
                      return (
                        i.report("3ds2.authenticate", {
                          hosted: a,
                          intentId: c.id,
                        }),
                        i.action
                          .authenticate3DS2({
                            threeDS2Source: e.threeDS2Source,
                            outerWindowWidth: window.innerWidth,
                            hosted: a,
                            fingerprintResult: r,
                            oneClickAuthnDeviceSupportAPIParam: {
                              hosted: a,
                              same_origin_frame:
                                o.deviceSupport.sameOriginFrame,
                              spc_eligible: o.deviceSupport.spcEligible,
                              webauthn_eligible:
                                o.deviceSupport.webauthnEligible,
                              publickey_credentials_get_allowed:
                                o.deviceSupport.publickeyCredentialsGetAllowed,
                            },
                            oneClickAuthnAuthenticationAPIParam:
                              o.authenticationAPIParam,
                            publishableKey: e.publishableKey,
                          })
                          .then(function (e) {
                            return (
                              "error" === e.type
                                ? i.report("3ds2.authenticate.error", {
                                    error: e.error,
                                    hosted: a,
                                    intentId: c.id,
                                  })
                                : i.report("3ds2.authenticate.success", {
                                    hosted: a,
                                    intentId: c.id,
                                  }),
                              e
                            );
                          })
                      );
                    })(e, t, { fingerprintResult: a, oneClickAuthn: c }).then(
                      function (n) {
                        return (function (e, t, n) {
                          var r = n.authenticateResponse,
                            i = n.oneClickAuthnDeviceSupport,
                            a = n.oneClickAuthnOptedOut,
                            c = n.challengeFrame,
                            s = t.controller,
                            u = t.hosted,
                            l = t.intentSecret;
                          if ("error" === r.type) return o.J.resolve();
                          var d = r.object,
                            m = d.state,
                            f = d.ares,
                            _ = d.creq;
                          return "delegated" === m || null === f
                            ? o.J.resolve()
                            : "C" !== f.transStatus || null == _
                            ? (s.report("3ds2.frictionless", {
                                hosted: u,
                                intentId: l.id,
                              }),
                              o.J.resolve())
                            : p(
                                {
                                  type: "3ds2-challenge",
                                  threeDS2Source: e.threeDS2Source,
                                  cardBrand: e.cardBrand,
                                  transactionId: e.transactionId,
                                  acsUrl: f.acsURL,
                                  acsTransactionId: f.acsTransID,
                                  optimizations: e.optimizations,
                                  oneClickAuthn: e.oneClickAuthn,
                                  creq: _,
                                  publishableKey: e.publishableKey,
                                },
                                {
                                  oneClickAuthnDeviceSupport: i,
                                  oneClickAuthnOptedOut: a,
                                  challengeFrame: c,
                                }
                              );
                        })(e, t, {
                          authenticateResponse: n,
                          oneClickAuthnDeviceSupport: c.deviceSupport,
                          oneClickAuthnOptedOut: c.optedOut,
                          challengeFrame: s,
                        });
                      }
                    );
                  })
                  .then(
                    function () {
                      return y(t, {
                        intent: _(0, t, n),
                        challengeFrame: s,
                        startTimestamp: c,
                      });
                    },
                    function () {
                      return y(t, {
                        intent: h(e, t),
                        challengeFrame: s,
                        startTimestamp: c,
                      });
                    }
                  );
              default:
                return (0, i.Rz)(e);
            }
          };
      },
      3713: function (e, t, n) {
        "use strict";
        n.d(t, {
          $j: function () {
            return _;
          },
          Qw: function () {
            return h;
          },
        });
        var r = n(508),
          o = n(8489),
          i = n(8455),
          a = n(8574),
          c = n(4421),
          s = n(7125),
          u = n(1927),
          l = {
            clientSecret: (0, c.jt)(c.Z_),
            redirect: (0, c.jt)((0, c.kw)("always", "if_required")),
            confirmParams: (0, c.jt)(c.Ry),
            handleActions: (0, c.jt)(c.Xg),
          },
          p = (0, o.Z)((0, o.Z)({}, l), {}, { element: (0, c.jt)(c.Ry) }),
          d = (0, o.Z)((0, o.Z)({}, l), {}, { elements: (0, c.jt)(c.Ry) }),
          m = {
            "stripe.confirmPayment()": {
              link: "https://stripe.com/docs/js/payment_intents/payment_method",
              action: "Payment",
            },
            "stripe.confirmSetup()": {
              link: "https://stripe.com/docs/js/setup_intents/payment_method",
              action: "Setup",
            },
          },
          f = function (e, t, n) {
            var r = t.rawSecret,
              o = t.rawElement,
              s = t.rawElements,
              l = t.rawHandleActions,
              p = t.rawRedirect,
              d = t.validatedConfirmParams;
            if ((0, i.uN)(e, i.M4.payment_element_beta_1)) {
              var f = (0, c.rX)(o);
              if (!f)
                throw new u.No(
                  "Invalid value for "
                    .concat(
                      n,
                      ": `element` should be a Payment Element. You specified: "
                    )
                    .concat(typeof o, ".")
                );
              return { type: "elements", element: f };
            }
            if (
              ((function (e, t) {
                var n = e.rawSecret,
                  r = e.rawElements;
                if (n && r)
                  throw new u.No(
                    "".concat(
                      t,
                      ": expected either `elements` or `clientSecret`, but not both."
                    )
                  );
                if (!n && !r)
                  throw new u.No(
                    "".concat(
                      t,
                      ": expected either `elements` or `clientSecret`, but got neither."
                    )
                  );
              })({ rawElements: s, rawSecret: r }, n),
              p && !1 === l)
            )
              throw new u.No(
                "".concat(
                  n,
                  ": `redirect` not applicable when `handleActions` is false."
                )
              );
            if (r) {
              if (
                (null == d ? void 0 : d.payment_method) &&
                (null == d ? void 0 : d.payment_method_data)
              )
                throw new u.No(
                  "".concat(
                    n,
                    ": Expected either `payment_method` or `payment_method_data`, but not both."
                  )
                );
              return { type: "clientSecret", clientSecret: r };
            }
            var _ = (0, c.MO)(s);
            if (!_)
              throw new u.No(
                "Invalid value for "
                  .concat(
                    n,
                    ": elements should be an Elements group. You specified: "
                  )
                  .concat(typeof s, ".")
              );
            var h = (0, a.sE)(_._elements, function (e) {
              return "payment" === e._componentName;
            });
            if (!h)
              throw new u.No(
                "Invalid value for "
                  .concat(
                    n,
                    ": elements should have a mounted Payment Element. "
                  )
                  .concat(
                    (function (e, t) {
                      if (e && m[t]) {
                        var n = m[t],
                          r = n.link,
                          o = n.action;
                        return "It looks like you have other Elements on the page. Refer to "
                          .concat(r, " to confirm a ")
                          .concat(o, " Intent by payment method.");
                      }
                      return "";
                    })(!!_._elements.length, n)
                  )
              );
            return { type: "elements", elements: _, element: h };
          },
          _ = function (e) {
            return (0, i.uN)(e, i.M4.payment_element_beta_1) ? p : d;
          },
          h = function (e, t, n, a, l, p) {
            var d,
              m = (function (e) {
                var t = e.betas,
                  n = e.rawUpdateData,
                  r = e.errorMessageMethodName,
                  o = e.controller,
                  a = (0, c.Gu)((0, c.mC)(_(t)), n, r),
                  s = a.value,
                  l = s.element,
                  p = void 0 === l ? void 0 : l,
                  d = s.elements,
                  m = void 0 === d ? void 0 : d,
                  h = s.confirmParams,
                  y = s.clientSecret,
                  v = s.redirect,
                  g = s.handleActions,
                  b = a.warnings,
                  w = (0, c.Gu)(
                    (0, c.jt)(
                      (0, c.mC)({
                        return_url: (0, c.jt)(c.Z_),
                        payment_method: (0, c.jt)(c.Z_),
                        payment_method_data: (0, c.jt)(c.Ry),
                        payment_method_options: (0, c.jt)(c.Ry),
                        setup_future_usage: (0, c.NM)(
                          "".concat(
                            r,
                            ": do not pass setup_future_usage at confirm time. Instead, pass setup_future_usage when the PaymentIntent is created."
                          )
                        ),
                      })
                    ),
                    h,
                    r,
                    { path: ["confirmParams"] }
                  ).value,
                  k = f(
                    t,
                    {
                      rawSecret: y,
                      rawElement: p,
                      rawElements: m,
                      rawHandleActions: g,
                      rawRedirect: v,
                      validatedConfirmParams: w,
                    },
                    r
                  );
                if (
                  "clientSecret" === k.type &&
                  !(0, i.uN)(t, i.M4.server_side_confirmation_beta_1)
                )
                  throw new u.No(
                    "".concat(
                      r,
                      " with a `clientSecret` is not supported yet. Please use the Payment Element."
                    )
                  );
                var E = v || "always",
                  S = (null == w ? void 0 : w.return_url) || null;
                return (
                  b.forEach(function (e) {
                    return o.warn(e);
                  }),
                  {
                    validatedRedirect: E,
                    validatedReturnUrl: S,
                    validatedParams: k,
                    validatedConfirmParams: w,
                    validatedHandleActions: !1 !== g,
                    rawConfirmParams: h,
                  }
                );
              })({
                betas: n,
                rawUpdateData: a,
                controller: e,
                errorMessageMethodName: p,
              }),
              h = m.validatedParams,
              y = m.validatedConfirmParams,
              v = m.validatedRedirect,
              g = m.validatedHandleActions,
              b = m.validatedReturnUrl,
              w = m.rawConfirmParams,
              k = null != w ? w : {},
              E =
                (k.payment_method,
                k.payment_method_data,
                k.payment_method_options,
                (0, r.Z)(k, [
                  "payment_method",
                  "payment_method_data",
                  "payment_method_options",
                ]));
            if (
              ((d =
                "clientSecret" === h.type
                  ? (function (e) {
                      var t,
                        n = e.validatedParams,
                        r = e.validatedConfirmParams,
                        i = e.validatedHandleActions,
                        a = e.otherParams,
                        c = e.intentType,
                        u = e.mids,
                        l = null != r ? r : {},
                        p = l.payment_method_data,
                        d = l.payment_method,
                        m = l.payment_method_options,
                        f =
                          "payment" === c
                            ? (0, s.cn)(n.clientSecret, "confirmPayment")
                            : (0, s.jH)(n.clientSecret, "confirmSetup"),
                        _ = (0, s.k7)({ payment_method: p }),
                        h = {};
                      return (
                        ("none" !==
                          (t =
                            p && _
                              ? {
                                  intentSecret: f,
                                  tag: "paymentMethod-from-data",
                                  type: _,
                                  data: p,
                                  options: null != m ? m : {},
                                }
                              : d
                              ? {
                                  intentSecret: f,
                                  tag: "paymentMethod",
                                  paymentMethod: d,
                                  options: null != m ? m : {},
                                }
                              : { intentSecret: f, tag: "none" }).tag &&
                          "paymentMethod" !== t.tag) ||
                          (h = {
                            use_stripe_sdk: !0,
                            mandate_data: {
                              customer_acceptance: {
                                type: "online",
                                online: { infer_from_client: !0 },
                              },
                            },
                          }),
                        {
                          mids: u,
                          mode: t,
                          expectedType: _,
                          otherParams: (0, o.Z)((0, o.Z)({}, h), a),
                          options: { handleActions: i },
                        }
                      );
                    })({
                      validatedParams: h,
                      validatedConfirmParams: y,
                      validatedHandleActions: g,
                      otherParams: E,
                      intentType: l,
                      mids: t,
                    })
                  : (function (e) {
                      var t,
                        n,
                        r,
                        o,
                        i = e.validatedParams,
                        a = e.validatedConfirmParams,
                        c = e.validatedHandleActions,
                        s = e.otherParams,
                        u = e.mids;
                      return {
                        mode: {
                          tag: "elements",
                          groupId:
                            null === (t = i.elements) || void 0 === t
                              ? void 0
                              : t._id,
                          frameId:
                            null === (n = i.element) || void 0 === n
                              ? void 0
                              : n._implementation._frame.id,
                          data:
                            null !==
                              (r =
                                null == a ? void 0 : a.payment_method_data) &&
                            void 0 !== r
                              ? r
                              : {},
                          options:
                            null !==
                              (o =
                                null == a
                                  ? void 0
                                  : a.payment_method_options) && void 0 !== o
                              ? o
                              : {},
                        },
                        otherParams: s,
                        expectedType: null,
                        mids: u,
                        options: { handleActions: c },
                      };
                    })({
                      validatedParams: h,
                      validatedConfirmParams: y,
                      validatedHandleActions: g,
                      otherParams: E,
                      mids: t,
                    })),
              "if_required" === v)
            )
              return { intentMutationRequest: d, redirect: v, returnUrl: null };
            if ("always" === v && b)
              return { intentMutationRequest: d, redirect: v, returnUrl: b };
            throw new u.No(
              "".concat(
                p,
                ": the `confirmParams.return_url` argument is required unless passing `redirect: 'if_required'`"
              )
            );
          };
      },
      9966: function (e, t, n) {
        "use strict";
        n.d(t, {
          Fh: function () {
            return S;
          },
          nq: function () {
            return N;
          },
          gO: function () {
            return A;
          },
        });
        var r = n(8342),
          o = n(8455),
          i = n(75),
          a = n(2073),
          c = n(9251),
          s = n(9686),
          u = n(5044),
          l = n(8723),
          p = n(8551),
          d = n(5788),
          m = n(8489),
          f = n(508),
          _ = n(6798),
          h = function (e) {
            return (
              "requires_action" !== e.status &&
              "requires_source_action" !== e.status
            );
          },
          y = function (e) {
            var t = e.controller,
              n = e.initialDelay,
              r = void 0 === n ? 5e3 : n,
              o = e.intent,
              i = e.lightboxOptions,
              a = e.locale,
              c = e.pollInterval,
              p = void 0 === c ? 2e3 : c,
              y = e.url,
              v = i.size,
              g = (0, f.Z)(i, ["size"]),
              b = (0, u.q)(
                t,
                (0, m.Z)(
                  {
                    url: (0, l.jr)(y),
                    size: _.q$ ? "fullScreen" : v || "400x600",
                    locale: a,
                    useLightboxHostedCloseButton: !1,
                  },
                  g
                )
              ),
              w = !1;
            return new s.J(function (e) {
              return (
                b._on("load", function () {
                  b.show(), b.fadeInBackdrop();
                }),
                b._once("request-close", function () {
                  (0, u.G)(b).then(function () {
                    (w = !0),
                      "payment_intent" === o.object && e({ paymentIntent: o }),
                      "setup_intent" === o.object && e({ setupIntent: o });
                  });
                }),
                b._on("complete", function (t) {
                  (0, u.G)(b).then(function () {
                    (w = !0), e(t);
                  });
                }),
                (0, d.ct)({
                  controller: t,
                  initialDelay: r,
                  pollTimeGap: p,
                  intent: o,
                  checkIntent: h,
                  shouldPoll: function () {
                    return !w;
                  },
                  locale: a,
                }).then(function (t) {
                  ("error" in t && t.error) ||
                    w ||
                    b.destroy(!0).then(function () {
                      e(t);
                    });
                })
              );
            });
          },
          v = function (e) {
            return (
              "requires_action" !== e.status &&
              "requires_source_action" !== e.status
            );
          },
          g = n(5642),
          b = n(4421),
          w = n(4867),
          k = n(1927),
          E = function (e) {
            return (
              ["id_bank_account", "id_bank_transfer"].indexOf(
                e.bankTransferType
              ) > -1
            );
          },
          S = function (e) {
            switch (e.type) {
              case "error":
                var t = e.error;
                if (
                  "payment_intent_unexpected_state" === t.code &&
                  "object" == typeof t.payment_intent &&
                  null != t.payment_intent &&
                  "string" == typeof t.payment_intent.status &&
                  (0, r.mD)(t.payment_intent.status)
                ) {
                  var n = t.payment_intent;
                  return { type: "object", locale: e.locale, object: n };
                }
                return e;
              case "object":
                return e;
              default:
                return (0, b.Rz)(e);
            }
          },
          P = function (e, t, m, f, _, h) {
            var b = (0, i.l)((0, r.G2)(t)),
              S = (0, r.O3)(t);
            if (!b) return s.J.resolve({ paymentIntent: t });
            switch (b.type) {
              case "cardimageverification-challenge":
                return n
                  .e(428)
                  .then(n.bind(n, 269))
                  .then(function (n) {
                    return (0, n.performCardImageVerification)(b, t, e, m);
                  });
              case "captcha-challenge":
                return (0, p.z)(b, t, e, m);
              case "3ds1-modal":
                return (0, a.s)(b, S, w.kE.PAYMENT_INTENT, e, m, _);
              case "3ds2-fingerprint":
              case "3ds2-challenge":
                return (0, c.A)(
                  b,
                  {
                    intentSecret: S,
                    intentType: w.kE.PAYMENT_INTENT,
                    controller: e,
                    locale: m,
                    hosted: f,
                  },
                  _
                );
              case "redirect":
                return (0, g.k)(t, b.redirectUrl, e);
              case "blik_authorize":
                return (function (e) {
                  var t = e.controller,
                    n = e.intent,
                    r = e.locale,
                    o = e.shouldDisplayInstructionsModal;
                  return new s.J(function (e, i) {
                    var a,
                      c = !1;
                    return (
                      o &&
                        ((a = t.createLightboxFrame({
                          type: l.NC.BLIK_INNER,
                          options: { locale: r },
                        }))._on("load", function () {
                          var e, t;
                          null === (e = a) || void 0 === e || e.show(),
                            null === (t = a) ||
                              void 0 === t ||
                              t.fadeInBackdrop();
                        }),
                        a._once("request-close", function () {
                          a &&
                            (0, u.G)(a).then(function () {
                              (c = !0), e({ paymentIntent: n });
                            });
                        })),
                      (0, d.ct)({
                        controller: t,
                        initialDelay: 8e3,
                        pollTimeGap: 5e3,
                        intent: n,
                        checkIntent: function (e) {
                          return (
                            "requires_action" !== e.status ||
                            "blik_authorize" !== e.next_action.type
                          );
                        },
                        locale: r,
                        shouldPoll: function () {
                          return !c;
                        },
                      }).then(function (t) {
                        var n;
                        (null === (n = a) || void 0 === n
                          ? void 0
                          : n.isVisible) && a.destroy(!0),
                          c || e(t);
                      })
                    );
                  });
                })({
                  controller: e,
                  intent: t,
                  locale: m,
                  shouldDisplayInstructionsModal: h,
                });
              case "boleto-display":
                if (void 0 === b.hostedVoucherUrl)
                  throw new k.No(
                    "Expect `next_action.boleto_display_details.hosted_voucher_url` of `PaymentIntent` to be not undefined. Please refer to \n\nhttps://stripe.com/docs/api/payment_intents/object#payment_intent_object-next_action-boleto_display_details-hosted_voucher_url"
                  );
                return (function (e) {
                  var t = e.controller,
                    n = e.url,
                    r = e.intent,
                    o = e.locale,
                    i = (0, u.q)(t, {
                      url: (0, l.jr)(n),
                      size: "600x700",
                      locale: o,
                      frameTitle: "boleto.voucher_frame_title",
                      useLightboxHostedCloseButton: !1,
                    });
                  return new s.J(function (e) {
                    i._on("request-close", function () {
                      (0, u.G)(i).then(function () {
                        e({ paymentIntent: r });
                      });
                    });
                  });
                })({
                  controller: e,
                  locale: m,
                  url: b.hostedVoucherUrl,
                  intent: t,
                });
              case "konbini-display":
                if (void 0 === b.hostedVoucherUrl)
                  throw new k.No(
                    "Expected option `handleActions` to be `false`. The Konbini pilot does not handle the next actions for you automatically yet (e.g. displaying Konbini payment details). Please refer to the Stripe Konbini integration guide for more info: \n\nhttps://stripe.com/docs/payments/konbini"
                  );
                return (function (e) {
                  var t = e.controller,
                    n = e.url,
                    r = e.intent,
                    o = e.locale,
                    i = (0, u.q)(t, {
                      url: (0, l.jr)(n),
                      size: "600x900",
                      locale: o,
                      frameTitle: "konbini.voucher_frame_title",
                      useLightboxHostedCloseButton: !1,
                    });
                  return new s.J(function (e) {
                    i._on("request-close", function () {
                      (0, u.G)(i).then(function () {
                        e({ paymentIntent: r });
                      });
                    });
                  });
                })({
                  controller: e,
                  locale: m,
                  url: b.hostedVoucherUrl,
                  intent: t,
                });
              case "oxxo-display":
                if (void 0 === b.hostedVoucherUrl)
                  throw new k.No(
                    "To handle the next actions automatically, set the API version to oxxo_beta=v2. Please refer to the Stripe OXXO integration guide for more info: \n\nhttps://stripe.com/docs/payments/oxxo"
                  );
                return (function (e) {
                  var t = e.controller,
                    n = e.url,
                    r = e.intent,
                    o = e.locale,
                    i = (0, u.q)(t, {
                      url: (0, l.jr)(n),
                      size: "600x700",
                      locale: o,
                      frameTitle: "oxxo.voucher_frame_title",
                      useLightboxHostedCloseButton: !1,
                    });
                  return new s.J(function (e) {
                    i._on("request-close", function () {
                      (0, u.G)(i).then(function () {
                        e({ paymentIntent: r });
                      });
                    });
                  });
                })({
                  controller: e,
                  locale: m,
                  url: b.hostedVoucherUrl,
                  intent: t,
                });
              case "upi_await_notification":
                return (function (e) {
                  var t = e.controller,
                    n = e.intentSecret,
                    r = e.intentType,
                    o = e.locale;
                  return new s.J(function (e) {
                    setTimeout(function i() {
                      (0, d.NO)(n, r, t, o).then(function (t) {
                        var n = (0, d.yn)(t);
                        null !== n &&
                          ("requires_action" !== n.status
                            ? e(t)
                            : setTimeout(i, 1e4));
                      });
                    }, 5e3);
                  });
                })({
                  controller: e,
                  intentSecret: S,
                  intentType: w.kE.PAYMENT_INTENT,
                  locale: m,
                });
              case "wechat_pay_display_qr_code":
                return (0, o.uN)(e._betas || [], o.M4.wechat_pay_pm_beta_3)
                  ? (function (e) {
                      var t = e.controller,
                        n = e.intent,
                        r = e.locale,
                        o = e.url;
                      return y({
                        controller: t,
                        intent: n,
                        locale: r,
                        url: o,
                        lightboxOptions: {
                          frameTitle:
                            "hosted_qr_code_instructions.wechat_pay.frame_title",
                          size: "440x560",
                        },
                      });
                    })({
                      controller: e,
                      locale: m,
                      url: b.hostedInstructionsUrl,
                      intent: t,
                      intentSecret: S,
                      intentType: w.kE.PAYMENT_INTENT,
                    })
                  : (function (e) {
                      var t = e.controller,
                        n = e.intent,
                        o = e.locale,
                        i = (0, r.G2)(n);
                      if (!i || "wechat_pay_display_qr_code" !== i.type)
                        throw new Error(
                          "Expected next_action.wechat_pay_display_qr_code"
                        );
                      var a = t.createLightboxFrame({
                          type: l.NC.WECHAT_PAY_INNER,
                          options: {
                            qrCodeData: i.wechat_pay_display_qr_code.data,
                            qrCodeUrl:
                              i.wechat_pay_display_qr_code.image_url_png,
                            locale: o,
                          },
                        }),
                        c = !1;
                      return new s.J(function (e, r) {
                        a._on("load", function () {
                          a.show(), a.fadeInBackdrop();
                        }),
                          a._once("request-close", function () {
                            (0, u.G)(a).then(function () {
                              (c = !0), e({ paymentIntent: n });
                            });
                          }),
                          (0, d.ct)({
                            controller: t,
                            initialDelay: 5e3,
                            pollTimeGap: 2e3,
                            intent: n,
                            checkIntent: function (e) {
                              return "requires_action" !== e.status;
                            },
                            shouldPoll: function () {
                              return !c;
                            },
                            locale: o,
                          }).then(function (t) {
                            t.error ||
                              a.destroy(!0).then(function () {
                                e(t);
                              });
                          });
                      });
                    })({ controller: e, locale: m, intent: t });
              case "paynow_display_qr_code":
                return (function (e) {
                  var t = e.controller,
                    n = e.intent,
                    o = e.locale,
                    i = (0, r.G2)(n);
                  if (!i || "paynow_display_qr_code" !== i.type)
                    throw new Error(
                      "Expected next_action.paynow_display_qr_code"
                    );
                  var a = t.createLightboxFrame({
                      type: l.NC.PAYNOW_INNER,
                      options: {
                        qrCodeUrl: i.paynow_display_qr_code.image_url_svg,
                        qrCodeData: i.paynow_display_qr_code.data,
                        locale: o,
                      },
                    }),
                    c = !1;
                  return new s.J(function (e) {
                    return (
                      a._on("load", function () {
                        a.show(), a.fadeInBackdrop();
                      }),
                      a._once("request-close", function () {
                        (0, u.G)(a).then(function () {
                          (c = !0), e({ paymentIntent: n });
                        });
                      }),
                      a._on("complete", function (t) {
                        (0, u.G)(a).then(function () {
                          (c = !0), e(t);
                        });
                      }),
                      (0, d.ct)({
                        controller: t,
                        initialDelay: 5e3,
                        pollTimeGap: 2e3,
                        intent: n,
                        checkIntent: v,
                        shouldPoll: function () {
                          return !c;
                        },
                        locale: o,
                      }).then(function (t) {
                        ("error" in t && t.error) ||
                          c ||
                          a.destroy(!0).then(function () {
                            e(t);
                          });
                      })
                    );
                  });
                })({
                  controller: e,
                  locale: m,
                  intent: t,
                  intentSecret: S,
                  intentType: w.kE.PAYMENT_INTENT,
                });
              case "pix_display_qr_code":
                if (void 0 === b.hostedInstructionsUrl)
                  throw new k.No(
                    "Expect `next_action.pix_display_qr_code.hosted_instructions_url` of `PaymentIntent` to be not undefined. Please refer to \n\nhttps://stripe.com/docs/api/payment_intents/object#payment_intent_object-next_action-pix_display_qr_code-hosted_instructions_url"
                  );
                return (function (e) {
                  var t = e.controller,
                    n = e.intent,
                    r = e.intentSecret,
                    o = e.intentType,
                    i = e.locale,
                    a = e.url,
                    c = (0, u.q)(t, {
                      url: (0, l.jr)(a),
                      size: "450x750",
                      locale: i,
                      frameTitle: "pix.instructions_frame_title",
                      useLightboxHostedCloseButton: !1,
                    }),
                    p = null;
                  return new s.J(function (e, a) {
                    c._on("load", function () {
                      c.show(), c.fadeInBackdrop();
                    }),
                      c._once("request-close", function () {
                        (0, u.G)(c).then(function () {
                          p && clearTimeout(p), e({ paymentIntent: n });
                        });
                      }),
                      c._on("complete", function (t) {
                        (0, u.G)(c).then(function () {
                          p && clearTimeout(p), e(t);
                        });
                      }),
                      (p = setTimeout(function n() {
                        (0, d.NO)(r, o, t, i).then(function (t) {
                          var r = (0, d.yn)(t);
                          r &&
                            ("requires_action" !== r.status
                              ? c.destroy(!0).then(function () {
                                  "payment_intent" === r.object
                                    ? e({ paymentIntent: r })
                                    : e({ setupIntent: r });
                                })
                              : (p = setTimeout(n, 2e3)));
                        });
                      }, 5e3));
                  });
                })({
                  controller: e,
                  locale: m,
                  url: b.hostedInstructionsUrl,
                  intent: t,
                  intentSecret: S,
                  intentType: w.kE.PAYMENT_INTENT,
                });
              case "promptpay_display_qr_code":
                return (function (e) {
                  var t = e.controller,
                    n = e.intent,
                    r = e.locale,
                    o = e.url;
                  return y({
                    controller: t,
                    intent: n,
                    locale: r,
                    url: o,
                    lightboxOptions: {
                      frameTitle:
                        "hosted_qr_code_instructions.promptpay.frame_title",
                    },
                  });
                })({
                  controller: e,
                  locale: m,
                  intent: t,
                  intentSecret: S,
                  url: b.hostedInstructionsUrl,
                  intentType: w.kE.PAYMENT_INTENT,
                });
              case "display_bank_transfer_instructions":
                return (function (e, t) {
                  return (
                    !!E(e) && !(0, o.uN)(t || [], o.M4.id_bank_transfer_beta_1)
                  );
                })(b, e._betas)
                  ? (0, g.k)(t, b.hostedInstructionsUrl, e)
                  : (function (e) {
                      return !E(e);
                    })(b)
                  ? (function (e) {
                      var t = e.controller,
                        n = e.url,
                        r = e.intent,
                        o = e.locale,
                        i = (0, u.q)(t, {
                          url: (0, l.jr)(n),
                          size: "600x700",
                          locale: o,
                          frameTitle:
                            "display_bank_transfer_instructions.voucher_frame_title",
                          useLightboxHostedCloseButton: !1,
                        });
                      return new s.J(function (e) {
                        i._on("request-close", function () {
                          (0, u.G)(i).then(function () {
                            e({ paymentIntent: r });
                          });
                        });
                      });
                    })({
                      controller: e,
                      url: b.hostedInstructionsUrl,
                      intent: t,
                      locale: m,
                    })
                  : s.J.resolve({ paymentIntent: t });
              case "qris_display_qr_code":
                return (function (e) {
                  var t = e.controller,
                    n = e.intent,
                    r = e.locale,
                    o = e.url;
                  return y({
                    controller: t,
                    intent: n,
                    locale: r,
                    url: o,
                    lightboxOptions: {
                      frameTitle:
                        "hosted_qr_code_instructions.qris.frame_title",
                    },
                  });
                })({
                  controller: e,
                  locale: m,
                  intent: t,
                  intentSecret: S,
                  url: b.hostedInstructionsUrl,
                  intentType: w.kE.PAYMENT_INTENT,
                });
              default:
                return s.J.resolve({ paymentIntent: t });
            }
          },
          A = function e(t, n, r, o, i, a) {
            var c =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : 0;
            if (w.kO < c) throw new Error("max action recursion depth reached");
            return P(t, n, r, o, a || [], i).then(function (n) {
              if (n.setupIntent)
                throw new Error("Got unexpected SetupIntent response");
              if (
                n.paymentIntent &&
                null != n.paymentIntent.next_action &&
                "use_stripe_sdk" === n.paymentIntent.next_action.type &&
                -1 !==
                  w.zT.indexOf(n.paymentIntent.next_action.use_stripe_sdk.type)
              ) {
                var s = c;
                return e(t, n.paymentIntent, r, o, i, a, ++s);
              }
              return n;
            });
          },
          N = function (e, t, n, o, i) {
            return function (a) {
              var c = S(a);
              switch (c.type) {
                case "error":
                  var u = c.error,
                    l = u.payment_intent;
                  return t &&
                    l &&
                    "payment_intent_unexpected_state" === u.code &&
                    ("succeeded" === l.status ||
                      "requires_capture" === l.status)
                    ? s.J.resolve({ paymentIntent: l })
                    : s.J.resolve((0, r.PA)(a));
                case "object":
                  var p = c.object;
                  return A(e, p, c.locale, n, o, i || []);
                default:
                  return (0, b.Rz)(c);
              }
            };
          };
      },
      75: function (e, t, n) {
        "use strict";
        n.d(t, {
          l: function () {
            return a;
          },
        });
        var r = function (e) {
            var t = {
              skipFingerprint: !1,
              sandboxFingerprintFrame: !1,
              sandboxChallengeFrame: !1,
              recordFinalCres: !1,
            };
            return (
              -1 !== e.indexOf("Y") && (t.skipFingerprint = !0),
              -1 !== e.indexOf("k") && (t.sandboxFingerprintFrame = !0),
              -1 !== e.indexOf("5") && (t.sandboxChallengeFrame = !0),
              -1 !== e.indexOf("f") && (t.recordFinalCres = !0),
              t
            );
          },
          o = function (e) {
            return e
              ? {
                  amount: e.amount,
                  instrument: {
                    cardBrand: e.instrument.card_brand,
                    cardName: e.instrument.card_name,
                    cardLast4: e.instrument.card_last4,
                  },
                  merchant: {
                    name: e.merchant.name,
                    origin: e.merchant.origin,
                  },
                  credentials: e.credentials,
                  authenticationChallenge: e.authentication_challenge,
                  configuration: e.configuration,
                  layout: e.layout,
                }
              : null;
          },
          i = function (e) {
            return (
              {
                american_express: "amex",
                visa: "visa",
                mastercard: "mastercard",
                discover: "discover",
                unionpay: "unionpay",
                jsecure: "jcb",
              }[e] || "unknown"
            );
          },
          a = function (e) {
            if (!e) return null;
            if ("use_stripe_sdk" === e.type) {
              var t = e.use_stripe_sdk;
              switch (t.type) {
                case "intent_cardimageverification_challenge":
                  return {
                    type: "cardimageverification-challenge",
                    civId: t.stripe_js.card_image_verification_id,
                    civClientSecret:
                      t.stripe_js.card_image_verification_client_secret,
                    previousScanFailed: t.stripe_js.previous_scan_failed,
                  };
                case "intent_confirmation_challenge":
                  return {
                    type: "captcha-challenge",
                    site_key: t.stripe_js.site_key,
                    verification_url: t.stripe_js.verification_url,
                  };
                case "stripe_3ds2_fingerprint":
                  return {
                    type: "3ds2-fingerprint",
                    threeDS2Source: t.three_d_secure_2_source,
                    merchant: t.merchant,
                    cardBrand: i(t.directory_server_name),
                    transactionId: t.server_transaction_id,
                    optimizations: r(t.three_ds_optimizations),
                    methodUrl: t.three_ds_method_url,
                    oneClickAuthn: o(t.one_click_authn),
                    publishableKey: t.publishable_key,
                    threeDS2Intent: t.three_d_secure_2_intent,
                  };
                case "stripe_3ds2_challenge":
                  return {
                    type: "3ds2-challenge",
                    threeDS2Source: t.stripe_js.three_d_secure_2_source,
                    cardBrand: i(t.stripe_js.directory_server_name),
                    transactionId: t.stripe_js.server_transaction_id,
                    optimizations: r(t.stripe_js.three_ds_optimizations),
                    acsTransactionId: t.stripe_js.acs_transaction_id,
                    acsUrl: t.stripe_js.acs_url,
                    oneClickAuthn: o(t.stripe_js.one_click_authn),
                    creq: t.stripe_js.creq,
                  };
                case "three_d_secure_redirect":
                  return {
                    type: "3ds1-modal",
                    url: t.stripe_js,
                    source: t.source,
                  };
              }
            }
            if ("redirect_to_url" === e.type)
              return { type: "redirect", redirectUrl: e.redirect_to_url.url };
            if ("alipay_handle_redirect" === e.type)
              return {
                type: "redirect",
                redirectUrl: e.alipay_handle_redirect.url,
              };
            if ("blik_authorize" === e.type) return { type: "blik_authorize" };
            if ("boleto_display_details" === e.type)
              return {
                type: "boleto-display",
                hostedVoucherUrl: e.boleto_display_details.hosted_voucher_url,
              };
            if ("display_oxxo_details" === e.type)
              return {
                type: "oxxo-display",
                hostedVoucherUrl: e.display_oxxo_details.hosted_voucher_url,
              };
            if ("konbini_display_details" === e.type)
              return {
                type: "konbini-display",
                hostedVoucherUrl: e.konbini_display_details.hosted_voucher_url,
              };
            if ("oxxo_display_details" === e.type)
              return {
                type: "oxxo-display",
                hostedVoucherUrl: e.oxxo_display_details.hosted_voucher_url,
              };
            if ("upi_await_notification" === e.type)
              return { type: "upi_await_notification" };
            if ("wechat_pay_display_qr_code" === e.type)
              return {
                type: "wechat_pay_display_qr_code",
                qrCodeUrl: e.wechat_pay_display_qr_code.image_url_png,
                hostedInstructionsUrl:
                  e.wechat_pay_display_qr_code.hosted_instructions_url,
              };
            if ("paynow_display_qr_code" === e.type)
              return {
                type: "paynow_display_qr_code",
                qrCodeUrl: e.paynow_display_qr_code.image_url_png,
              };
            if ("pix_display_qr_code" === e.type)
              return {
                type: "pix_display_qr_code",
                hostedInstructionsUrl:
                  e.pix_display_qr_code.hosted_instructions_url,
              };
            if ("promptpay_display_qr_code" === e.type)
              return {
                type: "promptpay_display_qr_code",
                qrCodeUrl: e.promptpay_display_qr_code.image_url_png,
                qrCodeData: e.promptpay_display_qr_code.data,
                hostedInstructionsUrl:
                  e.promptpay_display_qr_code.hosted_instructions_url,
              };
            if ("display_bank_transfer_instructions" === e.type) {
              var n,
                a =
                  e.display_bank_transfer_instructions.hosted_instructions_url;
              if (
                "id_bban" ===
                e.display_bank_transfer_instructions.financial_addresses[0].type
              )
                a =
                  null !== (n = a) && void 0 !== n
                    ? n
                    : e.display_bank_transfer_instructions
                        .financial_addresses[0].id_bban.hosted_instructions_url;
              return {
                type: "display_bank_transfer_instructions",
                hostedInstructionsUrl: a,
                bankTransferType: e.display_bank_transfer_instructions.type,
              };
            }
            return "qris_display_qr_code" === e.type
              ? {
                  type: "qris_display_qr_code",
                  hostedInstructionsUrl:
                    e.qris_display_qr_code.hosted_instructions_url,
                }
              : null;
          };
      },
      7125: function (e, t, n) {
        "use strict";
        n.d(t, {
          Bu: function () {
            return g;
          },
          I4: function () {
            return v;
          },
          LR: function () {
            return h;
          },
          OV: function () {
            return f;
          },
          TH: function () {
            return y;
          },
          cn: function () {
            return u;
          },
          el: function () {
            return d;
          },
          hC: function () {
            return b;
          },
          jH: function () {
            return l;
          },
          k7: function () {
            return p;
          },
          o1: function () {
            return m;
          },
          z2: function () {
            return _;
          },
          zb: function () {
            return w;
          },
        });
        var r = n(7904),
          o = n(4421),
          i = n(1927),
          a = n(638),
          c = n(9289),
          s = function (e) {
            var t = e
              .split(/(?=[A-Z])/)
              .join("-")
              .toLowerCase();
            return "https://stripe.com/docs/stripe-js/reference#stripe-".concat(
              t
            );
          },
          u = function (e, t) {
            return (0, o.Gu)(c.f4, e, "stripe.".concat(t, " intent secret"))
              .value;
          },
          l = function (e, t) {
            return (0, o.Gu)(c.Yj, e, "stripe.".concat(t, " intent secret"))
              .value;
          },
          p = function (e) {
            if (
              !e ||
              !e.payment_method ||
              !e.payment_method.type ||
              "string" != typeof e.payment_method.type
            )
              return null;
            var t = e.payment_method.type;
            return a.GS[t] || null;
          },
          d = function (e, t) {
            return (0, o.Gu)(c.SR, t, e).value;
          },
          m = function (e, t, n, r) {
            if ("valid" === (0, o.ld)(o.IN, n, t).type)
              throw new i.No(
                "Do not pass an Element to stripe.".concat(
                  t,
                  "() directly.\n"
                ) + "For more information: ".concat(s(t))
              );
            var a = (0, o.Gu)((0, c.bF)(e, t), n, t).value,
              u = a.source,
              l = a.paymentMethodData,
              p = a.paymentMethodOptions,
              d = a.paymentMethod,
              m = a.otherParams;
            if (null != u && (null != l || null != d))
              throw new i.No(
                "".concat(
                  t,
                  ": Expected either source or payment_method, but not both."
                )
              );
            if (l) {
              if (l.element)
                return {
                  mode: {
                    tag: "paymentMethod-from-element",
                    type: e,
                    elementName: l.element._componentName,
                    frameId: l.element._implementation._frame.id,
                    data: l.data,
                    options: p,
                    intentSecret: r,
                  },
                  otherParams: m,
                };
              if (e)
                return {
                  mode: {
                    tag: "paymentMethod-from-data",
                    type: e,
                    data: l.data,
                    options: p,
                    intentSecret: r,
                  },
                  otherParams: m,
                };
            } else {
              if (d)
                return {
                  mode: {
                    tag: "paymentMethod",
                    paymentMethod: d,
                    options: p,
                    intentSecret: r,
                  },
                  otherParams: m,
                };
              if (u)
                return {
                  mode: { tag: "source", source: u, intentSecret: r },
                  otherParams: m,
                };
            }
            return { mode: { tag: "none", intentSecret: r }, otherParams: m };
          },
          f = function (e, t) {
            if (
              "object" == typeof e &&
              null !== e &&
              void 0 !== e.handleActions
            )
              throw new i.No(
                "stripe."
                  .concat(
                    t,
                    " does not support a handleActions option. For more information, see "
                  )
                  .concat(s(t))
              );
          },
          _ = function (e, t) {
            var n = e.split("#"),
              o = (0, r.Z)(n, 2),
              i = o[0],
              a = o[1],
              c = i.split("?"),
              s = (0, r.Z)(c, 2),
              u = s[0],
              l = s[1],
              p = "?",
              d =
                "payment_intent" === t.object
                  ? [
                      "payment_intent",
                      "payment_intent_client_secret",
                      "redirect_status",
                    ]
                  : [
                      "setup_intent",
                      "setup_intent_client_secret",
                      "redirect_status",
                    ];
            (l || "").split("&").forEach(function (e, t) {
              var n = e.split("="),
                o = (0, r.Z)(n, 1)[0];
              -1 === d.indexOf(o) &&
                (p += "".concat("?" === p ? "" : "&").concat(e));
            });
            var m = "payment_intent" === t.object ? "payment" : "setup";
            (p += ""
              .concat("?" === p ? "" : "&")
              .concat(m, "_intent=")
              .concat(t.id)),
              (p += "&"
                .concat(m, "_intent_client_secret=")
                .concat(t.client_secret));
            var f = u + (p += "&redirect_status=succeeded");
            return a ? "".concat(f, "#").concat(a) : f;
          },
          h = { type: "validation_error", code: "incomplete_payment_details" },
          y = {
            type: "instant_verification_error",
            code: "instant_verification",
          },
          v = { type: "validation_error", code: "unexpected" },
          g = { type: "validation_error", code: "civ_unexpected" },
          b = {
            type: "validation_error",
            code: "payment_intent_authentication_failure",
          },
          w = {
            type: "instant_verification_incomplete_error",
            code: "instant_verification_incomplete",
          };
      },
      9289: function (e, t, n) {
        "use strict";
        n.d(t, {
          as: function () {
            return b;
          },
          ZY: function () {
            return g;
          },
          SR: function () {
            return v;
          },
          bF: function () {
            return w;
          },
          q2: function () {
            return y;
          },
          LK: function () {
            return h;
          },
          Hv: function () {
            return m;
          },
          f4: function () {
            return f;
          },
          Yj: function () {
            return _;
          },
        });
        var r = n(8489),
          o = n(3696),
          i = n(9675);
        function a(e) {
          var t = (function (e, t) {
            if ("object" !== (0, i.Z)(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== (0, i.Z)(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === (0, i.Z)(t) ? t : String(t);
        }
        var c = n(508),
          s = n(1927),
          u = n(4421),
          l = n(4867),
          p = n(638),
          d = n(8342),
          m = function (e, t) {
            if ("string" != typeof e)
              return (0, u.$3)("a client_secret string", e, t);
            var n = (0, d.RY)(e);
            return null === n
              ? (0, u.$3)(
                  "a client secret of the form ${id}_secret_${secret}",
                  e,
                  t
                )
              : (0, u.x4)(n, []);
          },
          f = function (e, t) {
            var n = m(e, t);
            return "error" === n.type
              ? n
              : n.value.type === l.kE.SETUP_INTENT
              ? (0, u.zS)(
                  new s.No(
                    (0, u.Ao)(
                      "a PaymentIntent client secret",
                      "a SetupIntent client secret",
                      t
                    )
                  )
                )
              : (0, u.x4)(n.value, []);
          },
          _ = function (e, t) {
            var n = m(e, t);
            return "error" === n.type
              ? n
              : n.value.type === l.kE.PAYMENT_INTENT
              ? (0, u.zS)(
                  new s.No(
                    (0, u.Ao)(
                      "a SetupIntent client secret",
                      "a PaymentIntent client secret",
                      t
                    )
                  )
                )
              : (0, u.x4)(n.value, []);
          },
          h = function (e, t) {
            if (null === e) return (0, u.RH)("object", "null", t);
            if ("object" != typeof e) return (0, u.RH)("object", typeof e, t);
            var n = e.client_secret,
              r = e.status,
              o = e.next_action,
              i = m(n, (0, u.NQ)(t, "client_secret"));
            if ("error" === i.type) return i;
            if ("string" != typeof r)
              return (0, u.RH)("string", typeof r, (0, u.NQ)(t, "status"));
            if (
              ("requires_source_action" === r || "requires_action" === r) &&
              "object" != typeof o
            )
              return (0, u.RH)("object", typeof o, (0, u.NQ)(t, "next_action"));
            if ("payment_intent" === e.object) {
              var a = e;
              return (0, u.x4)(a, []);
            }
            var c = e;
            return (0, u.x4)(c, []);
          },
          y = function (e) {
            return function (t, n) {
              if ("object" != typeof t) return (0, u.RH)("object", typeof t, n);
              if (null === t) return (0, u.RH)("object", "null", n);
              var r,
                i = t.type,
                l = (0, c.Z)(t, ["type"]);
              if (null === e) {
                if ("string" != typeof i)
                  return (0, u.RH)(
                    "a string such as 'card', 'ideal', or 'sepa_debit'",
                    typeof i,
                    (0, u.NQ)(n, "type")
                  );
                r = i;
              } else {
                if (void 0 !== i && i !== e)
                  return "string" != typeof i
                    ? (0, u.RH)(
                        "a string such as 'card', 'ideal', or 'sepa_debit'",
                        typeof i,
                        (0, u.NQ)(n, "type")
                      )
                    : (0, u.RH)(
                        '"'.concat(i, '"'),
                        '"'.concat(e, '"'),
                        (0, u.NQ)(n, "type")
                      );
                r = e;
              }
              var d = l[r],
                m = (l[r], (0, c.Z)(l, [r].map(a)));
              if (
                (-1 !==
                  [
                    "acss_debit",
                    "affirm",
                    "afterpay_clearpay",
                    "alipay",
                    "bancontact",
                    "customer_balance",
                    "eps",
                    "giropay",
                    "grabpay",
                    "klarna",
                    "konbini",
                    "mobilepay",
                    "oxxo",
                    "p24",
                    "paynow",
                    "paypal",
                    "pix",
                    "us_bank_account",
                    "wechat_pay",
                    "pay_by_bank",
                    "paynow",
                    "promptpay",
                    "qris",
                    "revolut_pay",
                    "zip",
                  ].indexOf(r) &&
                  void 0 === d &&
                  (d = {}),
                "object" != typeof d)
              )
                return (0, u.RH)(
                  "an object or element",
                  typeof t[r],
                  (0, u.NQ)(n, r)
                );
              if (null === d)
                return (0, u.RH)(
                  "an object or element",
                  "null",
                  (0, u.NQ)(n, r)
                );
              var f = (0, u.rX)(d);
              if (f) {
                var _ = f._componentName;
                if (p._b[_] !== r) {
                  var h = [].concat((0, o.Z)(n.path), [r]).join("."),
                    y = n.label,
                    v = new s.No(
                      "Invalid value for "
                        .concat(y, ": ")
                        .concat(h, " was `")
                        .concat(_, "` Element, which cannot be used to create ")
                        .concat(r, " PaymentMethods.")
                    );
                  return (0, u.zS)(v);
                }
                return (0, u.x4)({ type: r, element: f, data: m });
              }
              return (0, u.x4)({ type: r, element: null, data: l });
            };
          },
          v = (0, u.Wc)(
            (0, u.mC)({
              handleActions: (0, u.Wc)(u.Xg, function () {
                return !0;
              }),
            }),
            function () {
              return { handleActions: !0 };
            }
          ),
          g = function (e) {
            return function (t, n) {
              if ("object" != typeof t) return (0, u.RH)("object", typeof t, n);
              if (null === t) return (0, u.RH)("object", "null", n);
              var r = t.billing_details,
                o = (0, c.Z)(t, ["billing_details"]);
              return (0, u.x4)({
                paymentMethodData: { type: "".concat(e), billing_details: r },
                otherParams: o,
              });
            };
          },
          b = function (e) {
            return function (t, n) {
              if ("object" != typeof t) return (0, u.RH)("object", typeof t, n);
              if (null === t) return (0, u.RH)("object", "null", n);
              var o = t.clientSecret,
                i = t.params,
                a = (0, c.Z)(t, ["clientSecret", "params"]),
                s = (0, u.ld)(e, o, n.label, { path: ["clientSecret"] });
              if ("error" === s.type) return s;
              if ("object" != typeof i)
                return (0, u.RH)("object", typeof i, (0, u.NQ)(n, "params"));
              if (null === i)
                return (0, u.RH)("object", "null", (0, u.NQ)(n, "params"));
              var l = i.payment_method_type,
                p = i.payment_method_data;
              return "string" != typeof l
                ? (0, u.RH)(
                    "string",
                    typeof l,
                    (0, u.NQ)((0, u.NQ)(n, "params"), "payment_method_type")
                  )
                : "object" != typeof p && void 0 !== p
                ? (0, u.RH)(
                    "object",
                    typeof p,
                    (0, u.NQ)((0, u.NQ)(n, "params"), "payment_method_data")
                  )
                : (0, u.x4)({
                    clientSecret: s.value,
                    paymentMethodData: (0, r.Z)(
                      { type: l },
                      (null == p ? void 0 : p.billing_details) && {
                        billing_details: null == p ? void 0 : p.billing_details,
                      }
                    ),
                    otherParams: a,
                  });
            };
          },
          w = function (e, t) {
            return function (n, i) {
              if (void 0 === n)
                return (0, u.x4)({
                  paymentMethodData: null,
                  paymentMethodOptions: null,
                  source: null,
                  paymentMethod: null,
                  otherParams: {},
                });
              if ("object" != typeof n) return (0, u.RH)("object", typeof n, i);
              if (null === n) return (0, u.RH)("object", "null", i);
              var a = n.source,
                p = n.source_data,
                d = n.payment_method_data,
                m = n.payment_method_options,
                f = n.payment_method,
                _ = (0, c.Z)(n, [
                  "source",
                  "source_data",
                  "payment_method_data",
                  "payment_method_options",
                  "payment_method",
                ]);
              if (null != p)
                throw new s.No(
                  "".concat(
                    t,
                    ": Expected payment_method, or source, not source_data."
                  )
                );
              if (null != d)
                throw new s.No(
                  "".concat(
                    t,
                    ": Expected payment_method, or source, not payment_method_data."
                  )
                );
              if (null != a && null != f)
                throw new s.No(
                  "".concat(
                    t,
                    ": Expected either payment_method or source, but not both."
                  )
                );
              if (null === e && null != f && "string" != typeof f)
                throw new s.No(
                  "".concat(
                    t,
                    ": Expected payment_method[type] to be set if payment_method is passed."
                  )
                );
              if (null != a) {
                if ("string" != typeof a)
                  return (0, u.RH)("string", typeof a, (0, u.NQ)(i, "source"));
                if ("updatePaymentIntent" === t)
                  throw new s.No(
                    "".concat(
                      t,
                      ": Expected payment_method, not source to be passed."
                    )
                  );
                return (0, u.x4)({
                  source: a,
                  paymentMethodData: null,
                  paymentMethodOptions: null,
                  paymentMethod: null,
                  otherParams: _,
                });
              }
              if (null != f && "string" != typeof f && "object" != typeof f)
                return (0, u.RH)(
                  "string or object",
                  typeof f,
                  (0, u.NQ)(i, "payment_method")
                );
              var h,
                v = (0, u.ld)(
                  ((h = e),
                  function (e, t) {
                    if (null == e) return (0, u.x4)(null);
                    if ("object" != typeof e)
                      return (0, u.RH)("object", typeof e, t);
                    var n = e.card,
                      o = (0, c.Z)(e, ["card"]);
                    if (!n || "object" != typeof n) return (0, u.x4)(e);
                    var i = n.cvc,
                      a = (0, c.Z)(n, ["cvc"]);
                    if (null == i) return (0, u.x4)(e);
                    var s = (0, u.rX)(i),
                      p = s ? s._componentName : "";
                    return l.Yj.cardCvc !== p
                      ? (0, u.RH)(
                          "`".concat(l.Yj.cardCvc, "` Element"),
                          p ? "`".concat(p, "` Element") : typeof i,
                          (0, u.NQ)(t, "".concat(h || "card", ".cvc"))
                        )
                      : (0, u.x4)(
                          (0, r.Z)(
                            (0, r.Z)({}, o),
                            {},
                            { card: (0, r.Z)((0, r.Z)({}, a), {}, { cvc: s }) }
                          )
                        );
                  }),
                  m,
                  t,
                  {
                    path: [].concat((0, o.Z)(i.path), [
                      "payment_method_options",
                    ]),
                  }
                );
              if ("error" === v.type) return v;
              if ("string" == typeof f)
                return (0, u.x4)({
                  source: null,
                  paymentMethodData: null,
                  paymentMethodOptions: v.value,
                  paymentMethod: f,
                  otherParams: _,
                });
              if ("object" == typeof f && null !== f) {
                var g = (0, u.ld)(y(e), f, t, {
                  path: [].concat((0, o.Z)(i.path), ["payment_method"]),
                });
                if ("error" === g.type) return g;
                var b = g.value;
                return (0, u.x4)({
                  source: null,
                  paymentMethod: null,
                  paymentMethodOptions: v.value,
                  paymentMethodData: b,
                  otherParams: _,
                });
              }
              return (0, u.x4)({
                source: null,
                paymentMethodData: null,
                paymentMethodOptions: null,
                paymentMethod: null,
                otherParams: _,
              });
            };
          };
      },
      5044: function (e, t, n) {
        "use strict";
        n.d(t, {
          G: function () {
            return i;
          },
          q: function () {
            return o;
          },
        });
        var r = n(8723),
          o = function (e, t) {
            var n = e.createLightboxFrame({
              type: r.NC.LIGHTBOX_APP,
              options: t,
            });
            return (
              n.show(),
              n._on("nested-frame-loaded", function () {
                n.fadeInBackdrop(),
                  setTimeout(function () {
                    n.action.openLightboxFrame();
                  }, 200);
              }),
              n
            );
          },
          i = function (e) {
            return e.action.closeLightboxFrame(), e.destroy();
          };
      },
      1636: function (e, t, n) {
        "use strict";
        n.d(t, {
          vS: function () {
            return i;
          },
          ud: function () {
            return o;
          },
          jR: function () {
            return l;
          },
        });
        var r = {
            ar: "ar",
            bg: "bg",
            cs: "cs",
            da: "da",
            de: "de",
            el: "el",
            en: "en",
            es: "es",
            "es-419": "es-419",
            et: "et",
            fi: "fi",
            fil: "fil",
            fr: "fr",
            he: "he",
            hr: "hr",
            hu: "hu",
            id: "id",
            it: "it",
            ja: "ja",
            ko: "ko",
            lt: "lt",
            lv: "lv",
            ms: "ms",
            mt: "mt",
            nb: "nb",
            nl: "nl",
            no: "no",
            pl: "pl",
            pt: "pt",
            "pt-BR": "pt-BR",
            ru: "ru",
            ro: "ro",
            sk: "sk",
            sl: "sl",
            sv: "sv",
            th: "th",
            tr: "tr",
            vi: "vi",
            zh: "zh",
            "zh-HK": "zh-HK",
            "zh-TW": "zh-TW",
          },
          o = ["ar", "he"],
          i = "en",
          a = (Object.keys(r), r),
          c = n(6798),
          s = n(8455),
          u = function (e) {
            try {
              var t = (function (e) {
                  var t = e.split("-"),
                    n = t[0],
                    r = null,
                    o = null,
                    i = null;
                  if (
                    (t.length > 1 &&
                      (4 === t[1].length
                        ? (o = t[1])
                        : 2 === t[1].length || 3 === t[1].length
                        ? (r = t[1])
                        : (i = t[1])),
                    t.length > 2 &&
                      (2 === t[2].length || 3 === t[2].length
                        ? (r = t[2])
                        : (i = t[2])),
                    t.length > 3 && (i = t[3]),
                    2 !== n.length && 3 !== n.length)
                  )
                    throw new Error("invalid locale ".concat(e));
                  var a = n.toLowerCase(),
                    c = r ? r.toUpperCase() : null,
                    s = o
                      ? ""
                          .concat(o[0].toUpperCase())
                          .concat(o.substring(1).toLowerCase())
                      : null;
                  return {
                    locale:
                      a +
                      (s ? "-".concat(s) : "") +
                      (c ? "-".concat(c) : "") +
                      (i ? "-".concat(i) : ""),
                    language: a,
                    region: c,
                    script: s,
                    variant: i,
                  };
                })(e),
                n = t.locale,
                r = t.language;
              return n !== r ? [n, r, i] : [n, i];
            } catch (t) {
              return [e, i];
            }
          },
          l = function (e) {
            return (function (e) {
              for (var t = u(e), n = 0; n < t.length; n++) {
                var r = t[n];
                if (a[r]) {
                  var o = a[r];
                  if (
                    (0, s.uN)(s.ub, s.M4.stripe_js_beta_locales) ||
                    -1 === s.P3.indexOf(o)
                  )
                    return o;
                }
              }
              return "en";
            })("auto" === e ? (0, c.UT)() : e);
          };
      },
      4400: function (e, t, n) {
        "use strict";
        function r(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      2781: function (e, t, n) {
        "use strict";
        function r(e) {
          if (Array.isArray(e)) return e;
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      1764: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        var r = n(4400);
        function o(e) {
          if (Array.isArray(e)) return (0, r.Z)(e);
        }
      },
      6148: function (e, t, n) {
        "use strict";
        function r(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      7853: function (e, t, n) {
        "use strict";
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      3009: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return i;
          },
        });
        var r = n(9384),
          o = n(3268);
        function i(e, t, n) {
          return (
            (i = (0, o.Z)()
              ? Reflect.construct
              : function (e, t, n) {
                  var o = [null];
                  o.push.apply(o, t);
                  var i = new (Function.bind.apply(e, o))();
                  return n && (0, r.Z)(i, n.prototype), i;
                }),
            i.apply(null, arguments)
          );
        }
      },
      4531: function (e, t, n) {
        "use strict";
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function o(e, t, n) {
          return t && r(e.prototype, t), n && r(e, n), e;
        }
        n.d(t, {
          Z: function () {
            return o;
          },
        });
      },
      8992: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return a;
          },
        });
        var r = n(3538),
          o = n(3268),
          i = n(5679);
        function a(e) {
          var t = (0, o.Z)();
          return function () {
            var n,
              o = (0, r.Z)(e);
            if (t) {
              var a = (0, r.Z)(this).constructor;
              n = Reflect.construct(o, arguments, a);
            } else n = o.apply(this, arguments);
            return (0, i.Z)(this, n);
          };
        }
      },
      6222: function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      9043: function (e, t, n) {
        "use strict";
        function r() {
          return (
            (r =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            r.apply(this, arguments)
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      3538: function (e, t, n) {
        "use strict";
        function r(e) {
          return (
            (r = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            r(e)
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      1020: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        var r = n(9384);
        function o(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && (0, r.Z)(e, t);
        }
      },
      3043: function (e, t, n) {
        "use strict";
        function r(e) {
          return -1 !== Function.toString.call(e).indexOf("[native code]");
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      3268: function (e, t, n) {
        "use strict";
        function r() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      5253: function (e, t, n) {
        "use strict";
        function r(e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      7090: function (e, t, n) {
        "use strict";
        function r(e, t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, c = e[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          }
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      4501: function (e, t, n) {
        "use strict";
        function r() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      2646: function (e, t, n) {
        "use strict";
        function r() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      8489: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return i;
          },
        });
        var r = n(6222);
        function o(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function i(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(Object(n), !0).forEach(function (t) {
                  (0, r.Z)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
      },
      508: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        var r = n(5178);
        function o(e, t) {
          if (null == e) return {};
          var n,
            o,
            i = (0, r.Z)(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (o = 0; o < a.length; o++)
              (n = a[o]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (i[n] = e[n]));
          }
          return i;
        }
      },
      5178: function (e, t, n) {
        "use strict";
        function r(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      5679: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return i;
          },
        });
        var r = n(9675),
          o = n(6148);
        function i(e, t) {
          return !t || ("object" !== (0, r.Z)(t) && "function" != typeof t)
            ? (0, o.Z)(e)
            : t;
        }
      },
      9384: function (e, t, n) {
        "use strict";
        function r(e, t) {
          return (
            (r =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            r(e, t)
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      7904: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return c;
          },
        });
        var r = n(2781),
          o = n(7090),
          i = n(2327),
          a = n(4501);
        function c(e, t) {
          return (0, r.Z)(e) || (0, o.Z)(e, t) || (0, i.Z)(e, t) || (0, a.Z)();
        }
      },
      3696: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return c;
          },
        });
        var r = n(1764),
          o = n(5253),
          i = n(2327),
          a = n(2646);
        function c(e) {
          return (0, r.Z)(e) || (0, o.Z)(e) || (0, i.Z)(e) || (0, a.Z)();
        }
      },
      9675: function (e, t, n) {
        "use strict";
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      2327: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        var r = n(4400);
        function o(e, t) {
          if (e) {
            if ("string" == typeof e) return (0, r.Z)(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? (0, r.Z)(e, t)
                : void 0
            );
          }
        }
      },
      4909: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return c;
          },
        });
        var r = n(3538),
          o = n(9384),
          i = n(3043),
          a = n(3009);
        function c(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (c = function (e) {
              if (null === e || !(0, i.Z)(e)) return e;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, n);
              }
              function n() {
                return (0, a.Z)(e, arguments, (0, r.Z)(this).constructor);
              }
              return (
                (n.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                (0, o.Z)(n, e)
              );
            }),
            c(e)
          );
        }
      },
    },
    r = {};
  function o(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var i = (r[e] = { exports: {} });
    return n[e](i, i.exports, o), i.exports;
  }
  (o.m = n),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, { a: t }), t;
    }),
    (o.d = function (e, t) {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.f = {}),
    (o.e = function (e) {
      return Promise.all(
        Object.keys(o.f).reduce(function (t, n) {
          return o.f[n](e, t), t;
        }, [])
      );
    }),
    (o.u = function (e) {
      return (
        "fingerprinted/js/" +
        {
          1: "elements-affirm-modal",
          209: "elements-affirm-message",
          259: "elements-afterpay-clearpay-modal",
          404: "orders-outer",
          428: "payment-intent-outer-actions-cardimageverification",
          429: "elements-unified-message",
          557: "elements-unified-message-modal",
          578: "elements-afterpay-clearpay-message",
          913: "trusted-types-checker",
        }[e] +
        "-" +
        {
          1: "9c4db3eb7c466c539706e9f48fe292b4",
          209: "fb95b151947407e1c502a274454b2959",
          259: "59da5fd3a134f0ac4774f01c9f118cbc",
          404: "4164fca703f4c2e3c3179c5f8adde38d",
          428: "802de3c954774d7242679c5813d978aa",
          429: "d19559a9d74bba573012662a9b54ff06",
          557: "6dcbe0786182fe92528d0df6ae8f10ca",
          578: "1e6ca3cd34dfc2411968b033e387b92e",
          913: "b31b0d3b211d1247a37e6120682932ed",
        }[e] +
        ".js"
      );
    }),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (e = {}),
    (t = "stripe-js-v3:"),
    (o.l = function (n, r, i, a) {
      if (e[n]) e[n].push(r);
      else {
        var c, s;
        if (void 0 !== i)
          for (
            var u = document.getElementsByTagName("script"), l = 0;
            l < u.length;
            l++
          ) {
            var p = u[l];
            if (
              p.getAttribute("src") == n ||
              p.getAttribute("data-webpack") == t + i
            ) {
              c = p;
              break;
            }
          }
        c ||
          ((s = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          o.nc && c.setAttribute("nonce", o.nc),
          c.setAttribute("data-webpack", t + i),
          (c.src = n)),
          (e[n] = [r]);
        var d = function (t, r) {
            (c.onerror = c.onload = null), clearTimeout(m);
            var o = e[n];
            if (
              (delete e[n],
              c.parentNode && c.parentNode.removeChild(c),
              o &&
                o.forEach(function (e) {
                  return e(r);
                }),
              t)
            )
              return t(r);
          },
          m = setTimeout(
            d.bind(null, void 0, { type: "timeout", target: c }),
            12e4
          );
        (c.onerror = d.bind(null, c.onerror)),
          (c.onload = d.bind(null, c.onload)),
          s && document.head.appendChild(c);
      }
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.p = "https://js.stripe.com/v3/"),
    (function () {
      var e = { 734: 0 };
      o.f.j = function (t, n) {
        var r = o.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var i = new Promise(function (n, o) {
              r = e[t] = [n, o];
            });
            n.push((r[2] = i));
            var a = o.p + o.u(t),
              c = new Error();
            o.l(
              a,
              function (n) {
                if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    a = n && n.target && n.target.src;
                  (c.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = i),
                    (c.request = a),
                    r[1](c);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, n) {
          var r,
            i,
            a = n[0],
            c = n[1],
            s = n[2],
            u = 0;
          if (
            a.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in c) o.o(c, r) && (o.m[r] = c[r]);
            if (s) s(o);
          }
          for (t && t(n); u < a.length; u++)
            (i = a[u]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        n = (window.webpackChunkstripe_js_v3 =
          window.webpackChunkstripe_js_v3 || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (function () {
      "use strict";
      var e,
        t,
        n,
        r,
        i,
        a = o(8489),
        c = o(3696),
        s = o(7853),
        u = o(4531),
        l = o(6222),
        p = o(508),
        d = o(4421),
        m = o(3701),
        f = o(1161),
        _ = o(6798),
        h = o(5845),
        y = o(8455),
        v = o(8574),
        g = o(1927),
        b = o(1806),
        w = o(4867),
        k = function (e, t) {
          var n = e.reduce(function (e, n) {
            var r = (function (e, t) {
                var n = e.indexOf(":");
                if (-1 === n)
                  throw new g.No(
                    "Invalid css declaration in file from "
                      .concat(t, ': "')
                      .concat(e, '"')
                  );
                var r = e.slice(0, n).trim(),
                  o = w.Pp[r];
                if (!o)
                  throw new g.No(
                    "Unsupported css property in file from "
                      .concat(t, ': "')
                      .concat(r, '"')
                  );
                return { property: o, value: e.slice(n + 1).trim() };
              })(n, t),
              o = r.property,
              i = r.value;
            return (0, a.Z)((0, a.Z)({}, e), {}, (0, l.Z)({}, o, i));
          }, {});
          return (
            ["family", "src"].forEach(function (e) {
              if (!n[e])
                throw new g.No(
                  "Missing css property in file from "
                    .concat(t, ': "')
                    .concat(w.QL[e], '"')
                );
            }),
            n
          );
        },
        E = function (e) {
          return (0, b.h)({ url: e, method: "GET" })
            .then(function (e) {
              return e.responseText;
            })
            .then(function (t) {
              var n = (function (e, t) {
                var n = e.match(/@font-face[ ]?{[^}]*}/g);
                if (!n)
                  throw new g.No(
                    "No @font-face rules found in file from ".concat(t)
                  );
                return n;
              })(t, e);
              return n.map(function (t) {
                var n,
                  r = (function (e, t) {
                    var n = e.replace(/\/\*.*\*\//g, "").trim(),
                      r = (
                        n.length && /;$/.test(n) ? n : "".concat(n, ";")
                      ).match(/((([^;(]*\([^()]*\)[^;)]*)|[^;]+)+)(?=;)/g);
                    if (!r)
                      throw new g.No(
                        "Found @font-face rule containing no valid font-properties in file from ".concat(
                          t
                        )
                      );
                    return r;
                  })((n = t.match(/@font-face[ ]?{([^}]*)}/)) ? n[1] : "", e);
                return k(r, e);
              });
            });
        },
        S = /https?:\/\/([^/]*)\/[^:]*/g,
        P = function (e, t, n, r) {
          var o,
            i,
            a,
            c = e._isUserError || "IntegrationError" === e.name;
          throw (
            (t &&
              !c &&
              t.report("fatal.uncaught_error", {
                iframe: !1,
                name: e.name,
                element: "outer",
                message: e.message || e.description,
                fileName: e.fileName,
                lineNumber: e.lineNumber,
                columnNumber: e.columnNumber,
                stack:
                  e.stack &&
                  ((o = e.stack),
                  (i = o.match(S)),
                  (a = o),
                  i &&
                    i.forEach(function (e) {
                      -1 === e.indexOf("https://js.stripe.com") &&
                        (a = a.replace(e, "<external url>"));
                    }),
                  a.substring(0, 1e3)),
                inPromise: n,
                apiMethodName: r,
              }),
            e)
          );
        },
        A = function (e, t, n) {
          return function (r) {
            try {
              return e.call(this, r);
            } catch (e) {
              return P(e, t || (this && this._controller), !1, n);
            }
          };
        },
        N = function (e, t, n) {
          return function (r, o) {
            try {
              return e.call(this, r, o);
            } catch (e) {
              return P(e, t || (this && this._controller), !1, n);
            }
          };
        },
        C = function (e, t, n) {
          return function () {
            var r = this;
            try {
              return e.call(this).catch(function (e) {
                return P(e, t || (r && r._controller), !0, n);
              });
            } catch (e) {
              return P(e, t || (this && this._controller), !1, n);
            }
          };
        },
        I = function (e, t, n) {
          return function (r) {
            var o = this;
            try {
              return e.call(this, r).catch(function (e) {
                return P(e, t || (o && o._controller), !0, n);
              });
            } catch (e) {
              return P(e, t || (this && this._controller), !1, n);
            }
          };
        },
        T = function (e, t, n) {
          return function (r, o) {
            var i = this;
            try {
              return e.call(this, r, o).catch(function (e) {
                return P(e, t || (i && i._controller), !0, n);
              });
            } catch (e) {
              return P(e, t || (this && this._controller), !1, n);
            }
          };
        },
        M = function (e, t, n) {
          return function (r, o, i) {
            var a = this;
            try {
              return e.call(this, r, o, i).catch(function (e) {
                return P(e, t || (a && a._controller), !0, n);
              });
            } catch (e) {
              return P(e, t || (this && this._controller), !1, n);
            }
          };
        },
        j = o(6846),
        R = function (e, t) {
          var n,
            r =
              ("string" == typeof (n = e) &&
                (0, v.sE)(Object.keys(j.YA), function (e) {
                  return e === n;
                })) ||
              null;
          if (
            !r ||
            !(function (e, t) {
              var n = y.MJ[e];
              return !n || (0, y.uN)(t, n);
            })(r, t)
          ) {
            var o = "string" == typeof e ? e : typeof e;
            throw new g.No(
              "A valid Element name must be provided. Valid Elements are:\n  "
                .concat(
                  Object.keys(j.YA)
                    .filter(function (e) {
                      return !j.YA[e].beta;
                    })
                    .join(", "),
                  "; you passed: "
                )
                .concat(o, ".")
            );
          }
        },
        O = o(6148),
        Z = o(1020),
        x = o(8992),
        L = function e() {
          var t = this;
          (0, s.Z)(this, e),
            (this._emit = function (e) {
              for (
                var n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o];
              var i = t._callbacks[e] || [];
              return (
                i.forEach(function (n) {
                  var o = n.fn;
                  if (o._isUserCallback)
                    try {
                      o.apply(void 0, r);
                    } catch (n) {
                      throw (
                        ((n._isUserError = !0),
                        "checkout" === e &&
                          t._cancelCheckout &&
                          t._cancelCheckout(
                            n.message ||
                              "An unexpected error has occurred. Please refresh the page and try again."
                          ),
                        n)
                      );
                    }
                  else o.apply(void 0, r);
                }),
                t
              );
            }),
            (this._once = function (e, n) {
              return t._on(
                e,
                function r() {
                  t._off(e, r), n.apply(void 0, arguments);
                },
                n
              );
            }),
            (this._removeAllListeners = function () {
              return (t._callbacks = {}), t;
            }),
            (this._on = function (e, n, r) {
              return (
                (t._callbacks[e] = t._callbacks[e] || []),
                t._callbacks[e].push({ original: r, fn: n }),
                t
              );
            }),
            (this._validateUserOn = function (e, t) {}),
            (this._userOn = function (e, n) {
              if ("string" != typeof e)
                throw new g.No(
                  "When adding an event listener, the first argument should be a string event name."
                );
              if ("function" != typeof n)
                throw new g.No(
                  "When adding an event listener, the second argument should be a function callback."
                );
              return (
                t._validateUserOn(e, n), (n._isUserCallback = !0), t._on(e, n)
              );
            }),
            (this._hasRegisteredListener = function (e) {
              return t._callbacks[e] && t._callbacks[e].length > 0;
            }),
            (this._off = function (e, n) {
              if (n) {
                for (var r, o = t._callbacks[e], i = 0; i < o.length; i++)
                  if ((r = o[i]).fn === n || r.original === n) {
                    o.splice(i, 1);
                    break;
                  }
              } else delete t._callbacks[e];
              return t;
            }),
            (this._callbacks = {});
          var n,
            r,
            o,
            i = N(this._userOn),
            a = N(this._off),
            c = N(this._once),
            u = A(this._hasRegisteredListener),
            l = A(this._removeAllListeners),
            p =
              ((n = this._emit),
              function () {
                try {
                  for (
                    var e = arguments.length, t = new Array(e), i = 0;
                    i < e;
                    i++
                  )
                    t[i] = arguments[i];
                  return n.call.apply(n, [this].concat(t));
                } catch (e) {
                  return P(e, r || (this && this._controller), !1, o);
                }
              });
          (this.on = this.addListener = this.addEventListener = i),
            (this.off = this.removeListener = this.removeEventListener = a),
            (this.once = c),
            (this.hasRegisteredListener = u),
            (this.removeAllListeners = l),
            (this.emit = p);
        },
        D = o(9686),
        B = o(7009),
        q = {
          applePay: "applePay",
          googlePay: "googlePay",
          browserCard: "browserCard",
          link: "link",
        },
        F = function (e, t) {
          return e.indexOf(t) >= 0;
        },
        U = function () {
          return Object.keys(q);
        },
        G = "40px",
        Y = {
          success: "success",
          fail: "fail",
          invalid_shipping_address: "invalid_shipping_address",
        },
        z = { shipping: "shipping", delivery: "delivery", pickup: "pickup" },
        H = (0, a.Z)(
          { success: "success" },
          {
            fail: "fail",
            invalid_payer_name: "invalid_payer_name",
            invalid_payer_email: "invalid_payer_email",
            invalid_payer_phone: "invalid_payer_phone",
            invalid_shipping_address: "invalid_shipping_address",
          }
        ),
        K = { merchantCapabilities: ["supports3DS"], displayItems: [] },
        J = (0, d.mC)({ amount: d.MZ, label: d.Z_, pending: (0, d.jt)(d.Xg) }),
        W = (0, d.mC)({ amount: d.Bi, label: d.Z_, pending: (0, d.jt)(d.Xg) }),
        V = (0, d.mC)({
          amount: d.Bi,
          label: d.Z_,
          pending: (0, d.jt)(d.Xg),
          id: (0, d.Wc)(d.Z_, function () {
            return (0, m.To)("shippingOption");
          }),
          detail: (0, d.Wc)(d.Z_, function () {
            return "";
          }),
        }),
        X = (0, d.mC)({ major: d.Rx, minor: d.Rx }),
        Q = d.kw.apply(void 0, (0, c.Z)(Object.keys(z))),
        $ = (0, d.mC)({ origin: d.Z_, name: d.Z_ }),
        ee = (0, d.ci)({
          __merchantDetails: (0, d.jt)($),
          country: (0, d.jt)(d.hN),
          currency: (0, d.jt)(d.cV),
          displayItems: (0, d.jt)((0, d.CT)(W)),
          shippingOptions: (0, d.jt)((0, d.uw)("id")((0, d.CT)(V))),
          total: (0, d.jt)(J),
          blockedCardBrands: (0, d.jt)(
            (0, d.CT)(d.kw.apply(void 0, (0, c.Z)(w.iw)))
          ),
        }),
        te = (0, d.mC)({
          displayItems: (0, d.jt)((0, d.CT)(W)),
          shippingOptions: (0, d.jt)((0, d.uw)("id")((0, d.CT)(V))),
          total: (0, d.jt)(J),
          status: function (e, t) {
            return d.kw.apply(void 0, (0, c.Z)(Object.keys(Y)))(
              -1 !==
                [
                  "invalid_payer_name",
                  "invalid_payer_email",
                  "invalid_payer_phone",
                ].indexOf(e)
                ? "fail"
                : e,
              t
            );
          },
        }),
        ne = d.kw.apply(void 0, (0, c.Z)(Object.keys(H))),
        re = function (e) {
          var t = [];
          return window.ApplePaySession
            ? (F(e, q.applePay) && t.push("APPLE_PAY"),
              F(e, q.link) && t.push("LINK"),
              t)
            : (F(e, q.link) && t.push("LINK"),
              F(e, q.googlePay) &&
                (t.push("GOOGLE_PAY"), _.sV && t.push("BROWSER")),
              F(e, q.browserCard) &&
                -1 === t.indexOf("BROWSER") &&
                t.push("BROWSER"),
              t);
        },
        oe = function () {
          try {
            return window.location.origin === window.top.location.origin;
          } catch (e) {
            return !1;
          }
        },
        ie = (0, B.HP)(function (e) {
          return window.ApplePaySession.canMakePaymentsWithActiveCard(e);
        }),
        ae = function (e) {
          if (!window.ApplePaySession) return !1;
          try {
            return window.ApplePaySession.supportsVersion(e);
          } catch (e) {
            return !1;
          }
        },
        ce =
          ((e = {}),
          (0, l.Z)(e, w.rM.VISA, "visa"),
          (0, l.Z)(e, w.rM.MASTERCARD, "masterCard"),
          (0, l.Z)(e, w.rM.AMEX, "amex"),
          (0, l.Z)(e, w.rM.DISCOVER, "discover"),
          (0, l.Z)(e, w.rM.JCB, "jcb"),
          (0, l.Z)(e, w.rM.UNIONPAY, "chinaUnionPay"),
          (0, l.Z)(e, w.rM.DINERS, null),
          (0, l.Z)(e, "MAESTRO", "maestro"),
          e),
        se =
          ((t = {}),
          (0, l.Z)(t, w.rM.VISA, "VISA"),
          (0, l.Z)(t, w.rM.MASTERCARD, "MASTERCARD"),
          (0, l.Z)(t, w.rM.AMEX, "AMEX"),
          (0, l.Z)(t, w.rM.DISCOVER, "DISCOVER"),
          (0, l.Z)(t, w.rM.JCB, "JCB"),
          (0, l.Z)(t, w.rM.DINERS, null),
          [
            "AT",
            "AU",
            "BE",
            "CA",
            "CH",
            "DE",
            "DK",
            "EE",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "HK",
            "IE",
            "IT",
            "JP",
            "LT",
            "LU",
            "LV",
            "MX",
            "NL",
            "NO",
            "NZ",
            "PL",
            "PT",
            "SE",
            "SG",
            "US",
          ]),
        ue = function (e, t, n) {
          var r = [];
          return (
            -1 !== se.indexOf(e) && r.push(w.rM.AMEX),
            ("US" === e || t) &&
              r.push.apply(r, [w.rM.DISCOVER, w.rM.DINERS, w.rM.JCB]),
            r.push.apply(r, [w.rM.MASTERCARD, w.rM.VISA]),
            r.filter(function (e) {
              return -1 === n.indexOf(e);
            })
          );
        },
        le = function (e, t, n) {
          return ue(e, t, n).reduce(function (e, t) {
            var n = ce[t];
            return n && e.push(n), e;
          }, []);
        },
        pe = o(9531),
        de = function (e, t) {
          return {
            amount: (0, pe.Fe)(e.amount, t.currency),
            label: e.label,
            type: e.pending ? "pending" : "final",
          };
        },
        me = function (e, t) {
          return new window.ApplePayError(e, t);
        },
        fe = function (e) {
          return function (t) {
            return t[e] && "string" == typeof t[e] ? t[e].toUpperCase() : null;
          };
        },
        _e =
          ((n = {}),
          (0, l.Z)(n, H.success, 0),
          (0, l.Z)(n, H.fail, 1),
          (0, l.Z)(n, H.invalid_payer_name, 2),
          (0, l.Z)(n, H.invalid_shipping_address, 3),
          (0, l.Z)(n, H.invalid_payer_phone, 4),
          (0, l.Z)(n, H.invalid_payer_email, 4),
          n),
        he =
          ((r = {}),
          (0, l.Z)(r, H.success, function () {
            return null;
          }),
          (0, l.Z)(r, H.fail, function () {
            return null;
          }),
          (0, l.Z)(r, H.invalid_payer_name, function () {
            return me("billingContactInvalid", "name");
          }),
          (0, l.Z)(r, H.invalid_shipping_address, function () {
            return me("shippingContactInvalid", "postalAddress");
          }),
          (0, l.Z)(r, H.invalid_payer_phone, function () {
            return me("shippingContactInvalid", "phoneNumber");
          }),
          (0, l.Z)(r, H.invalid_payer_email, function () {
            return me("shippingContactInvalid", "emailAddress");
          }),
          r),
        ye =
          ((i = {}),
          (0, l.Z)(i, z.pickup, "storePickup"),
          (0, l.Z)(i, z.shipping, "shipping"),
          (0, l.Z)(i, z.delivery, "delivery"),
          i),
        ve = {
          total: function (e) {
            return de(e.total, e);
          },
          lineItems: function (e) {
            return e.displayItems
              ? e.displayItems.map(function (t) {
                  return de(t, e);
                })
              : [];
          },
          shippingMethods: function (e) {
            return e.shippingOptions
              ? e.shippingOptions.map(function (t) {
                  return (function (e, t) {
                    return {
                      amount: (0, pe.Fe)(e.amount, t.currency),
                      label: e.label,
                      detail: e.detail,
                      identifier: e.id,
                    };
                  })(t, e);
                })
              : [];
          },
          applicationData: function (e) {
            return e.applicationData || null;
          },
        },
        ge = {
          shippingType: function (e) {
            var t = e.shippingType;
            if (!t) return null;
            var n = ye[t];
            if (void 0 !== n) return n;
            throw new g.No("Invalid value for shippingType: ".concat(t));
          },
          requiredBillingContactFields: function (e) {
            return e.requestPayerName ? ["postalAddress"] : null;
          },
          requiredShippingContactFields: function (e) {
            var t = [];
            return (
              e.requestShipping && t.push("postalAddress"),
              e.requestPayerEmail && t.push("email"),
              e.requestPayerPhone && t.push("phone"),
              t.length ? t : null
            );
          },
          countryCode: fe("country"),
          currencyCode: fe("currency"),
          merchantCapabilities: function (e) {
            var t = e.merchantCapabilities || K.merchantCapabilities;
            return (
              e.__betas &&
                (0, y.uN)(e.__betas, "cup_apple_pay_beta_1") &&
                t.push("supportsEMV"),
              t
            );
          },
          supportedNetworks: function (e) {
            var t = le(
              e.country,
              e.jcbEnabled || !1,
              e.blockedCardBrands || []
            );
            return (
              ae(4) &&
                -1 === (e.blockedCardBrands || []).indexOf("mastercard") &&
                t.push("maestro"),
              e.__betas &&
                (0, y.uN)(e.__betas, "cup_apple_pay_beta_1") &&
                -1 === (e.blockedCardBrands || []).indexOf("unionpay") &&
                t.push("chinaUnionPay"),
              t
            );
          },
        },
        be = {
          status: function (e) {
            var t = _e[e.status];
            return ae(3) && t > 1 ? 1 : t;
          },
          error: function (e) {
            return ae(3) ? he[e.status]() : null;
          },
        },
        we = (0, a.Z)((0, a.Z)({}, ve), ge),
        ke = (0, a.Z)((0, a.Z)({}, ve), be),
        Ee = function (e) {
          return Object.keys(ke).reduce(function (t, n) {
            var r = (0, ke[n])(e);
            return null !== r
              ? (0, a.Z)((0, a.Z)({}, t), {}, (0, l.Z)({}, n, r))
              : t;
          }, {});
        },
        Se = function (e) {
          return "string" == typeof e ? e : null;
        },
        Pe = function (e) {
          return e ? Se(e.phoneNumber) : null;
        },
        Ae = function (e) {
          return e ? Se(e.emailAddress) : null;
        },
        Ne = function (e) {
          return e
            ? [e.givenName, e.familyName]
                .filter(function (e) {
                  return e && "string" == typeof e;
                })
                .join(" ")
            : null;
        },
        Ce = function (e) {
          var t = e.addressLines,
            n = e.countryCode,
            r = e.postalCode,
            o = e.administrativeArea,
            i = e.locality,
            a = e.phoneNumber,
            s = Se(n);
          return {
            addressLine: Array.isArray(t)
              ? t.reduce(function (e, t) {
                  return "string" == typeof t ? [].concat((0, c.Z)(e), [t]) : e;
                }, [])
              : [],
            country: s ? s.toUpperCase() : "",
            postalCode: Se(r) || "",
            recipient: Ne(e) || "",
            region: Se(o) || "",
            city: Se(i) || "",
            phone: Se(a) || "",
            sortingCode: "",
            dependentLocality: "",
            organization: "",
          };
        },
        Ie = function (e, t) {
          var n = e.identifier,
            r = e.label;
          return t.filter(function (e) {
            return e.id === n && e.label === r;
          })[0];
        },
        Te = function (e, t) {
          var n = e.shippingContact,
            r = e.shippingMethod,
            o = e.billingContact;
          return {
            shippingOption:
              r && t.shippingOptions && t.shippingOptions.length
                ? Ie(r, t.shippingOptions)
                : null,
            shippingAddress: n ? Ce(n) : null,
            payerEmail: Ae(n),
            payerPhone: Pe(n),
            payerName: Ne(o),
            walletName: "applePay",
            methodName: "apple-pay",
          };
        },
        Me = o(8059),
        je = {
          austria: "AT",
          sterreich: "AT",
          csterreich: "AT",
          au: "AU",
          australia: "AU",
          belgium: "BE",
          br: "BR",
          brasil: "BR",
          brazil: "BR",
          ca: "CA",
          canada: "CA",
          ch: "CH",
          schweiz: "CH",
          switzerland: "CH",
          china: "CN",
          czechrepublic: "CZ",
          de: "DE",
          deutschland: "DE",
          germany: "DE",
          danmark: "DK",
          denmark: "DK",
          es: "ES",
          espaa: "ES",
          spain: "ES",
          finland: "FI",
          suomi: "FI",
          fr: "FR",
          hk: "HK",
          hongkong: "HK",
          england: "GB",
          gb: "GB",
          uk: "GB",
          unitedkingdom: "GB",
          scotland: "GB",
          wales: "GB",
          it: "IT",
          italy: "IT",
          italia: "IT",
          japan: "JP",
          lietuva: "LT",
          luxembourg: "LU",
          netherlands: "NL",
          nederland: "NL",
          norway: "NO",
          poland: "PL",
          polska: "PL",
          russia: "RU",
          saudiarabia: "SA",
          se: "SE",
          sweden: "SE",
          sverige: "SE",
          singapore: "SG",
          us: "US",
          usa: "US",
          unitedstatesofamerica: "US",
          unitedstates: "US",
          estadosunidos: "US",
        },
        Re = function (e, t) {
          return e && "object" == typeof e ? t(e) : null;
        },
        Oe = (function () {
          function e(t) {
            var n = this;
            (0, s.Z)(this, e),
              (this._onEvent = function () {}),
              (this.setEventHandler = function (e) {
                n._onEvent = e;
              }),
              (this.canMakePayment = function () {
                return (function (e, t, n, r) {
                  var o =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 2;
                  if ("https:" !== window.location.protocol)
                    return D.J.resolve(!1);
                  var i = Math.max(2, o);
                  if (window.ApplePaySession) {
                    if (oe()) {
                      if (window.ApplePaySession.supportsVersion(i)) {
                        var a = "merchant.".concat(
                          (t ? [e, t] : [e]).join("."),
                          ".stripe"
                        );
                        return ie(a).then(function (o) {
                          if (
                            (r(
                              "pr.apple_pay.can_make_payment_native_response",
                              { available: o }
                            ),
                            n && !o && window.console)
                          ) {
                            var i = t
                              ? "or stripeAccount parameter (".concat(t, ") ")
                              : "";
                            window.console.warn(
                              "Either you do not have a card saved to your Wallet or the current domain ("
                                .concat(e, ") ")
                                .concat(
                                  i,
                                  "is not registered for Apple Pay. Visit https://dashboard.stripe.com/account/apple_pay to register this domain."
                                )
                            );
                          }
                          return o;
                        });
                      }
                      return (
                        n &&
                          window.console &&
                          window.console.warn(
                            "This version of Safari does not support ApplePay JS version ".concat(
                              i,
                              "."
                            )
                          ),
                        D.J.resolve(!1)
                      );
                    }
                    return D.J.resolve(!1);
                  }
                  return D.J.resolve(!1);
                })(
                  window.location.hostname,
                  n._authentication.accountId,
                  (0, Me.lO)(n._authentication.apiKey) === Me.Kl.test,
                  n._report,
                  n._minimumVersion
                );
              }),
              (this.update = function (e) {
                (n._initialPaymentRequest = (0, v.PM)(
                  n._paymentRequestOptions,
                  e
                )),
                  n._initializeSessionState();
              }),
              (this.show = function () {
                var e;
                n._initializeSessionState();
                try {
                  e = new window.ApplePaySession(
                    n._minimumVersion,
                    (function (e) {
                      var t = (0, a.Z)((0, a.Z)({}, K), e);
                      return Object.keys(we).reduce(function (e, n) {
                        var r = (0, we[n])(t);
                        return null !== r
                          ? (0, a.Z)((0, a.Z)({}, e), {}, (0, l.Z)({}, n, r))
                          : e;
                      }, {});
                    })(n._paymentRequestOptions)
                  );
                } catch (e) {
                  throw "Must create a new ApplePaySession from a user gesture handler." ===
                    e.message
                    ? new g.No(
                        "show() must be called from a user gesture handler (such as a click handler, after the user clicks a button)."
                      )
                    : e;
                }
                (n._privateSession = e),
                  n._setupSession(e, n._usesButtonElement()),
                  e.begin(),
                  (n._isShowing = !0);
              }),
              (this.abort = function () {
                n._privateSession && n._privateSession.abort();
              }),
              (this._warn = function (e) {}),
              (this._report = function (e, t) {
                n._controller.report(
                  e,
                  (0, a.Z)(
                    (0, a.Z)({}, t),
                    {},
                    {
                      backingLibrary: "APPLE_PAY",
                      usesButtonElement: n._usesButtonElement(),
                    }
                  )
                );
              }),
              (this._validateMerchant = function (e, t) {
                return function (r) {
                  n._controller.action
                    .createApplePaySession({
                      data: {
                        validation_url: r.validationURL,
                        domain_name: window.location.hostname,
                        display_name: n._paymentRequestOptions.total.label,
                      },
                      usesButtonElement: t,
                    })
                    .then(function (t) {
                      if (n._isShowing)
                        switch (t.type) {
                          case "object":
                            e.completeMerchantValidation(
                              JSON.parse(t.object.session)
                            );
                            break;
                          case "error":
                            n._handleValidationError(e)(t.error);
                            break;
                          default:
                            (0, d.Rz)(t);
                        }
                    }, n._handleValidationError(e));
                };
              }),
              (this._handleValidationError = function (e) {
                return function (t) {
                  n._report("error.pr.apple_pay.session_creation_failed", {
                    error: t,
                  }),
                    e.abort();
                  var r = t.message;
                  "string" == typeof r && n._controller.warn(r);
                };
              }),
              (this._paymentAuthorized = function (e) {
                return function (t) {
                  var r = t.payment,
                    o = n._usesButtonElement()
                      ? w.Yj.paymentRequestButton
                      : null;
                  n._controller.action
                    .tokenizeWithData({
                      type: "apple_pay",
                      elementName: o,
                      tokenData: (0, a.Z)(
                        (0, a.Z)({}, r),
                        {},
                        {
                          billingContact: Re(
                            r.billingContact,
                            n._normalizeContact
                          ),
                        }
                      ),
                      mids: n._mids,
                    })
                    .then(function (t) {
                      if ("error" === t.type)
                        e.completePayment(
                          window.ApplePaySession.STATUS_FAILURE
                        ),
                          n._report("error.pr.create_token_failed", {
                            error: t.error,
                          });
                      else {
                        var o = Re(r.shippingContact, n._normalizeContact),
                          i = Re(r.billingContact, n._normalizeContact);
                        o &&
                          n._paymentRequestOptions.requestShipping &&
                          !o.countryCode &&
                          e.completePayment(
                            window.ApplePaySession
                              .STATUS_INVALID_SHIPPING_POSTAL_ADDRESS
                          );
                        var c = Te(
                          { shippingContact: o, billingContact: i },
                          n._paymentRequestOptions
                        );
                        n._onToken(e)(
                          (0, a.Z)(
                            (0, a.Z)({}, c),
                            {},
                            {
                              shippingOption: n._privateShippingOption,
                              token: t.object,
                            }
                          )
                        );
                      }
                    });
                };
              }),
              (this._normalizeContact = function (e) {
                if (e.country && "string" == typeof e.country) {
                  var t,
                    r = e.country.toLowerCase().replace(/[^a-z]+/g, "");
                  return (
                    e.countryCode
                      ? "string" == typeof e.countryCode &&
                        (t = e.countryCode.toUpperCase())
                      : (t = je[r]) ||
                        n._report("warn.pr.apple_pay.missing_country_code", {
                          country: e.country,
                        }),
                    (0, a.Z)((0, a.Z)({}, e), {}, { countryCode: t })
                  );
                }
                return e;
              }),
              (this._onToken = function (e) {
                return function (t) {
                  n._onEvent({
                    type: "paymentresponse",
                    payload: (0, a.Z)(
                      (0, a.Z)({}, t),
                      {},
                      { complete: A(n._completePayment(e)) }
                    ),
                  });
                };
              }),
              (this._completePayment = function (e) {
                return function (t) {
                  n._paymentRequestOptions = (0, v.PM)(
                    n._paymentRequestOptions,
                    { status: t }
                  );
                  var r = Ee(n._paymentRequestOptions),
                    o = r.status,
                    i = r.error;
                  n._isShowing &&
                    (i
                      ? e.completePayment({ status: o, errors: [i] })
                      : e.completePayment(o)),
                    (0 === o || (1 === o && null == i)) &&
                      ((n._isShowing = !1),
                      n._onEvent && n._onEvent({ type: "close" }));
                };
              }),
              (this._shippingContactSelected = function (e) {
                return function (t) {
                  n._onEvent({
                    type: "shippingaddresschange",
                    payload: {
                      shippingAddress: Ce(
                        n._normalizeContact(t.shippingContact)
                      ),
                      updateWith: A(n._completeShippingContactSelection(e)),
                    },
                  });
                };
              }),
              (this._completeShippingContactSelection = function (e) {
                return function (t) {
                  var r;
                  (n._paymentRequestOptions = (0, v.PM)(
                    n._paymentRequestOptions,
                    t
                  )),
                    (null === (r = n._paymentRequestOptions.shippingOptions) ||
                    void 0 === r
                      ? void 0
                      : r.length) &&
                      (n._privateShippingOption =
                        n._paymentRequestOptions.shippingOptions[0]);
                  var o = Ee(n._paymentRequestOptions),
                    i = o.status,
                    a = o.shippingMethods,
                    c = o.total,
                    s = o.lineItems;
                  e.completeShippingContactSelection(i, a, c, s);
                };
              }),
              (this._shippingMethodSelected = function (e) {
                return function (t) {
                  if (n._paymentRequestOptions.shippingOptions) {
                    var r = Ie(
                      t.shippingMethod,
                      n._paymentRequestOptions.shippingOptions
                    );
                    (n._privateShippingOption = r),
                      n._onEvent({
                        type: "shippingoptionchange",
                        payload: {
                          shippingOption: r,
                          updateWith: A(n._completeShippingMethodSelection(e)),
                        },
                      });
                  }
                };
              }),
              (this._completeShippingMethodSelection = function (e) {
                return function (t) {
                  n._paymentRequestOptions = (0, v.PM)(
                    n._paymentRequestOptions,
                    t
                  );
                  var r = Ee(n._paymentRequestOptions),
                    o = r.status,
                    i = r.total,
                    a = r.lineItems;
                  e.completeShippingMethodSelection(o, i, a);
                };
              });
            var r = t.controller,
              o = t.authentication,
              i = t.mids,
              c = t.options,
              u = t.usesButtonElement,
              p = t.listenerRegistry;
            (this._controller = r),
              (this._authentication = o),
              (this._mids = i),
              (this._minimumVersion = c.__minApplePayVersion || 2),
              (this._usesButtonElement = u),
              (this._listenerRegistry = p),
              (this._initialPaymentRequest = c),
              (this._isShowing = !1),
              this._initializeSessionState();
          }
          return (
            (0, u.Z)(e, [
              {
                key: "_initializeSessionState",
                value: function () {
                  var e = btoa(
                    this._authentication.accountId
                      ? ""
                          .concat(this._authentication.apiKey, ":")
                          .concat(this._authentication.accountId)
                      : this._authentication.apiKey
                  );
                  (this._paymentRequestOptions = (0, a.Z)(
                    (0, a.Z)((0, a.Z)({}, K), this._initialPaymentRequest),
                    {},
                    { status: H.success, applicationData: e }
                  )),
                    (this._privateSession = null),
                    (this._privateShippingOption = null);
                  var t = this._paymentRequestOptions.shippingOptions;
                  (null == t ? void 0 : t.length) &&
                    (this._privateShippingOption = t[0]);
                },
              },
              {
                key: "_setupSession",
                value: function (e, t) {
                  var n = this;
                  this._listenerRegistry.addEventListener(
                    e,
                    "validatemerchant",
                    A(this._validateMerchant(e, t))
                  ),
                    this._listenerRegistry.addEventListener(
                      e,
                      "paymentauthorized",
                      A(this._paymentAuthorized(e))
                    ),
                    this._listenerRegistry.addEventListener(
                      e,
                      "cancel",
                      A(function () {
                        (n._isShowing = !1),
                          n._onEvent({ type: "cancel" }),
                          n._onEvent({ type: "close" });
                      })
                    ),
                    this._listenerRegistry.addEventListener(
                      e,
                      "shippingcontactselected",
                      A(this._shippingContactSelected(e))
                    ),
                    this._listenerRegistry.addEventListener(
                      e,
                      "shippingmethodselected",
                      A(this._shippingMethodSelected(e))
                    );
                },
              },
            ]),
            e
          );
        })(),
        Ze = Oe,
        xe = o(8723),
        Le = {
          display: "block",
          position: "fixed",
          "z-index": "2147483647",
          background: "rgba(40,40,40,0)",
          transition: "background 400ms ease",
          "will-change": "background",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          margin: "0",
          padding: "0",
        },
        De = (0, a.Z)(
          (0, a.Z)({}, Le),
          {},
          { background: "rgba(40,40,40,0.75)" }
        ),
        Be = function e(t) {
          var n = this,
            r = t.lockScrolling,
            o = t.lockFocus,
            i = t.lockFocusOn,
            a = t.listenerRegistry;
          (0, s.Z)(this, e),
            (this.domElement = document.createElement("div")),
            (this._runOnHide = []),
            (this.mount = function () {
              var e = (0, f.Xq)();
              (n.domElement.style.display = "none"),
                e.contains(n.domElement) ||
                  e.insertBefore(n.domElement, e.firstChild);
            }),
            (this.show = function () {
              if (((0, f.yq)(n.domElement, Le), n._lockScrolling)) {
                var e = (0, f.MV)();
                n._runOnHide.push(e);
              }
              if (n._lockFocus) {
                var t = (0, f.W3)(n._lockFocusOn).restoreFocus;
                n._runOnHide.push(t);
              }
            }),
            (this.fadeIn = function () {
              setTimeout(function () {
                (0, f.yq)(n.domElement, De);
              });
            }),
            (this.fadeOut = function () {
              return new D.J(function (e) {
                (0, f.yq)(n.domElement, Le),
                  setTimeout(e, 500),
                  n._listenerRegistry.addEventListener(
                    n.domElement,
                    "transitionend",
                    e
                  );
              }).then(function () {
                for (
                  n.domElement.style.display = "none";
                  n._runOnHide.length;

                ) {
                  var e;
                  null === (e = n._runOnHide.pop()) || void 0 === e || e();
                }
              });
            }),
            (this.unmount = function () {
              var e = (0, f.Xq)();
              e.contains(n.domElement) && e.removeChild(n.domElement);
            }),
            (this._lockScrolling = !!r),
            (this._lockFocus = !!o),
            (this._lockFocusOn = i || null),
            (this._listenerRegistry = a);
        },
        qe = null;
      var Fe,
        Ue = function (e) {
          return (
            "https:" === window.location.protocol &&
            !(!_.Wt && !_.j3) &&
            !_.Bh &&
            !(!e.isCheckout && !window.PaymentRequest) &&
            !(!e.isCheckout && _.sV)
          );
        },
        Ge = function e(t) {
          var n = this;
          (0, s.Z)(this, e),
            (this._mids = null),
            (this._frame = null),
            (this._initFrame = function (e) {
              var t = n._controller.createHiddenFrame(
                xe.NC.PAYMENT_REQUEST_GOOGLE_PAY,
                {
                  authentication: n._authentication,
                  mids: n._mids,
                  origin: n._origin,
                }
              );
              t.send({ action: "stripe-pr-initialize", payload: { data: e } }),
                n._initFrameEventHandlers(t),
                (n._frame = t);
            }),
            (this._initFrameEventHandlers = function (e) {
              e._on("pr-cancel", function () {
                n._onEvent({ type: "cancel" });
              }),
                e._on("pr-close", function () {
                  n._backdrop.fadeOut().then(function () {
                    n._backdrop.unmount();
                  }),
                    n._onEvent({ type: "close" });
                }),
                e._on("pr-error", function (e) {
                  n._onEvent({
                    type: "error",
                    payload: {
                      errorMessage: e.errorMessage,
                      errorCode: e.errorCode,
                    },
                  });
                }),
                e._on("pr-callback", function (t) {
                  var r = t.event,
                    o = t.options,
                    i = t.nonce;
                  switch (r) {
                    case "paymentresponse":
                      n._handlePaymentResponse(e, o, i);
                      break;
                    case "shippingaddresschange":
                      n._handleShippingAddressChange(e, o, i);
                      break;
                    case "shippingoptionchange":
                      n._handleShippingOptionChange(e, o, i);
                      break;
                    default:
                      throw new Error("Unexpected event name: ".concat(r));
                  }
                });
            }),
            (this._handlePaymentResponse = function (e, t, r) {
              n._onEvent({
                type: "paymentresponse",
                payload: (0, a.Z)(
                  (0, a.Z)({}, t),
                  {},
                  {
                    complete: function (t) {
                      e.send({
                        action: "stripe-pr-callback-complete",
                        payload: { nonce: r, data: { status: t } },
                      });
                    },
                  }
                ),
              });
            }),
            (this._handleShippingAddressChange = function (e, t, r) {
              n._onEvent({
                type: "shippingaddresschange",
                payload: (0, a.Z)(
                  (0, a.Z)({}, t),
                  {},
                  {
                    updateWith: function (t) {
                      e.send({
                        action: "stripe-pr-callback-complete",
                        payload: { nonce: r, data: t },
                      });
                    },
                  }
                ),
              });
            }),
            (this._handleShippingOptionChange = function (e, t, r) {
              n._onEvent({
                type: "shippingoptionchange",
                payload: (0, a.Z)(
                  (0, a.Z)({}, t),
                  {},
                  {
                    updateWith: function (t) {
                      e.send({
                        action: "stripe-pr-callback-complete",
                        payload: { nonce: r, data: t },
                      });
                    },
                  }
                ),
              });
            }),
            (this._destroy = function () {
              n._frame && (n._frame.destroy(), (n._frame = null));
            }),
            (this.setEventHandler = function (e) {
              n._onEvent = e;
            }),
            (this.canMakePayment = function () {
              if (!Ue({ isCheckout: n._isCheckout })) return D.J.resolve(!1);
              if (!n._frame) throw new Error("Frame not initialized.");
              var e,
                t = n._frame;
              return (
                (e = function () {
                  return t.action.checkCanMakePayment().then(function (e) {
                    return !0 === e.available;
                  });
                }),
                null !== qe
                  ? D.J.resolve(qe)
                  : e().then(function (e) {
                      return (qe = e);
                    })
              );
            }),
            (this.show = function () {
              n._frame &&
                (n._frame.send({
                  delegate: "payment",
                  action: "stripe-pr-show",
                  payload: {
                    data: {
                      usesButtonElement: n._usesButtonElement(),
                      stripeJsId: n._controller._stripeJsId,
                      mids: n._controller.mids(),
                    },
                  },
                }),
                n._backdrop.mount(),
                n._backdrop.show(),
                n._backdrop.fadeIn());
            }),
            (this.update = function (e) {
              n._frame &&
                n._frame.send({
                  action: "stripe-pr-update",
                  payload: { data: e },
                });
            }),
            (this.abort = function () {
              n._frame &&
                n._frame.send({ action: "stripe-pr-abort", payload: {} });
            }),
            (this._controller = t.controller),
            (this._authentication = t.authentication),
            (this._mids = t.mids),
            (this._origin = t.origin),
            (this._usesButtonElement = t.usesButtonElement),
            (this._backdrop = new Be({
              lockScrolling: !1,
              lockFocus: !0,
              lockFocusOn: null,
              listenerRegistry: t.listenerRegistry,
            })),
            (this._isCheckout = !!t.options.__isCheckout),
            Ue({ isCheckout: this._isCheckout }) &&
              this._controller &&
              (this._controller.action.fetchLocale({ locale: "auto" }),
              this._initFrame(t.options));
        },
        Ye = (function () {
          if (!window.PaymentRequest) return null;
          if (/CriOS\/59/.test(navigator.userAgent)) return null;
          if (
            /.*\(.*; wv\).*Chrome\/(?:53|54)\.\d.*/g.test(navigator.userAgent)
          )
            return null;
          if (_.xz) return null;
          var e = window.PaymentRequest;
          return (
            e.prototype.canMakePayment ||
              (e.prototype.canMakePayment = function () {
                return D.J.resolve(!1);
              }),
            e
          );
        })(),
        ze = null,
        He = function e(t) {
          var n = this;
          (0, s.Z)(this, e),
            (this._onEvent = function () {}),
            (this.setEventHandler = function (e) {
              n._onEvent = e;
            }),
            (this.canMakePayment = function () {
              return (
                (e = n._prFrame),
                (0, Me.lO)(n._authentication.apiKey),
                Me.Kl.test,
                "https:" !== window.location.protocol
                  ? D.J.resolve(!1)
                  : null !== ze
                  ? D.J.resolve(ze)
                  : Ye && e
                  ? e.action.checkCanMakePayment().then(function (e) {
                      var t = e.available;
                      return (ze = !0 === t);
                    })
                  : D.J.resolve(!1)
              );
              var e;
            }),
            (this.update = function (e) {
              var t = n._prFrame;
              t && t.send({ action: "stripe-pr-update", payload: { data: e } });
            }),
            (this.show = function () {
              if (!n._prFrame)
                throw new g.No(
                  "Payment Request is not available in this browser."
                );
              n._prFrame.send({
                delegate: "payment",
                action: "stripe-pr-show",
                payload: {
                  data: {
                    usesButtonElement: n._usesButtonElement(),
                    stripeJsId: n._controller._stripeJsId,
                    mids: n._controller.mids(),
                  },
                },
              });
            }),
            (this.abort = function () {
              n._prFrame &&
                n._prFrame.send({ action: "stripe-pr-abort", payload: {} });
            }),
            (this._setupPrFrame = function (e, t) {
              e.send({ action: "stripe-pr-initialize", payload: { data: t } }),
                e._on("pr-cancel", function () {
                  n._onEvent({ type: "cancel" });
                }),
                e._on("pr-close", function () {
                  n._onEvent({ type: "close" });
                }),
                e._on("pr-error", function (e) {
                  n._onEvent({
                    type: "error",
                    payload: {
                      errorMessage: e.message || "",
                      errorCode: e.code || "",
                    },
                  });
                }),
                e._on("pr-callback", function (t) {
                  var r = t.event,
                    o = t.nonce,
                    i = t.options;
                  switch (r) {
                    case "token":
                      n._onEvent({
                        type: "paymentresponse",
                        payload: (0, a.Z)(
                          (0, a.Z)({}, i),
                          {},
                          {
                            complete: function (t) {
                              e.send({
                                action: "stripe-pr-callback-complete",
                                payload: { data: { status: t }, nonce: o },
                              });
                            },
                          }
                        ),
                      });
                      break;
                    case "shippingaddresschange":
                      n._onEvent({
                        type: "shippingaddresschange",
                        payload: {
                          shippingAddress: i.shippingAddress,
                          updateWith: function (t) {
                            e.send({
                              action: "stripe-pr-callback-complete",
                              payload: { nonce: o, data: t },
                            });
                          },
                        },
                      });
                      break;
                    case "shippingoptionchange":
                      n._onEvent({
                        type: "shippingoptionchange",
                        payload: {
                          shippingOption: i.shippingOption,
                          updateWith: function (t) {
                            e.send({
                              action: "stripe-pr-callback-complete",
                              payload: { nonce: o, data: t },
                            });
                          },
                        },
                      });
                      break;
                    default:
                      throw new Error(
                        "Unexpected event from PaymentRequest inner: ".concat(r)
                      );
                  }
                });
            });
          var r = t.authentication,
            o = t.controller,
            i = t.mids,
            c = t.origin,
            u = t.usesButtonElement,
            l = t.options;
          if (
            ((this._authentication = r),
            (this._controller = o),
            (this._usesButtonElement = u),
            Ye && "https:" === window.location.protocol)
          ) {
            this._controller.action.fetchLocale({ locale: "auto" });
            var p = this._controller.createHiddenFrame(
              xe.NC.PAYMENT_REQUEST_BROWSER,
              { authentication: r, mids: i, origin: c }
            );
            this._setupPrFrame(p, l), (this._prFrame = p);
          } else this._prFrame = null;
        },
        Ke = o(1636),
        Je = function () {
          return (
            (_.Wt || _.j3) && !(_.x5 || _.D$ || _.ZR || _.aS || _.PB || _.cE)
          );
        },
        We = (function () {
          function e(t) {
            var n = this;
            (0, s.Z)(this, e),
              (this._mids = null),
              (this._frame = null),
              (this.initFrame = function (e) {
                var t = n._controller.createHiddenFrame(
                  xe.NC.PAYMENT_REQUEST_LINK,
                  {
                    authentication: n._authentication,
                    mids: n._mids,
                    origin: n._origin,
                  }
                );
                t.send({
                  action: "stripe-pr-initialize",
                  payload: { data: e },
                }),
                  t._on("pr-close", function () {
                    n.onEvent({ type: "close" });
                  }),
                  t._on("pr-callback", function (e) {
                    switch (e.event) {
                      case "token":
                        var t = e.options,
                          r = e.nonce;
                        n.handlePaymentResponse(t, r);
                        break;
                      case "shippingaddresschange":
                      case "shippingoptionchange":
                        break;
                      default:
                        throw new Error(
                          "Unexpected event name: ".concat(e.event)
                        );
                    }
                  }),
                  (n._frame = t);
              }),
              (this.canMakePayment = function (e) {
                if (!n._frame) return D.J.resolve(!1);
                if (!n._usesButtonElement()) return D.J.resolve(!1);
                if (null != e.locale && -1 !== Ke.ud.indexOf(e.locale))
                  return D.J.resolve(!1);
                var t = e.skipEnrollmentCheck;
                return n._frame.action
                  .checkCanMakePayment({ skipEnrollmentCheck: t })
                  .then(function (e) {
                    var t = e,
                      r = t.available,
                      o = t.linkExperimentAssignments;
                    return (
                      n._controller.report(
                        "pr.link.can_make_payment_native_response",
                        { available: r }
                      ),
                      { available: r, linkExperimentAssignments: o }
                    );
                  });
              }),
              (this.setEventHandler = function (e) {
                n._onEvent = e;
              }),
              (this.show = function (e) {
                var t,
                  r = e.locale;
                if (!n._usesButtonElement())
                  throw new Error(
                    "You cannot call show() directly for a PaymentRequest backed by Link. Use the paymentRequestButton Element instead."
                  );
                null === (t = n._frame) ||
                  void 0 === t ||
                  t.send({
                    action: "stripe-pr-show",
                    payload: {
                      data: {
                        usesButtonElement: !0,
                        stripeJsId: n._controller._stripeJsId,
                        locale: r,
                        mids: n._controller.mids(),
                      },
                    },
                  });
              }),
              (this.update = function (e) {
                var t;
                null === (t = n._frame) ||
                  void 0 === t ||
                  t.send({ action: "stripe-pr-update", payload: { data: e } });
              }),
              (this.abort = function () {
                var e;
                null === (e = n._frame) ||
                  void 0 === e ||
                  e.send({ action: "stripe-pr-abort", payload: {} });
              }),
              (this._controller = t.controller),
              (this._authentication = t.authentication),
              (this._mids = t.mids),
              (this._origin = t.origin),
              (this._usesButtonElement = t.usesButtonElement),
              Je() && this.initFrame(t.options);
          }
          return (
            (0, u.Z)(e, [
              {
                key: "handlePaymentResponse",
                value: function (e, t) {
                  var n = this;
                  this.onEvent({
                    type: "paymentresponse",
                    payload: (0, a.Z)(
                      (0, a.Z)({}, e),
                      {},
                      {
                        complete: function (e) {
                          var r;
                          null === (r = n._frame) ||
                            void 0 === r ||
                            r.send({
                              action: "stripe-pr-callback-complete",
                              payload: { nonce: t, data: { status: e } },
                            });
                        },
                      }
                    ),
                  });
                },
              },
              {
                key: "onEvent",
                value: function (e) {
                  if (!this._onEvent)
                    throw new Error("Event handler has not been initialized");
                  this._onEvent(e);
                },
              },
            ]),
            e
          );
        })(),
        Ve = We,
        Xe = o(1917),
        Qe = !1,
        $e = (function (e) {
          (0, Z.Z)(n, e);
          var t = (0, x.Z)(n);
          function n(e) {
            var r;
            (0, s.Z)(this, n),
              ((r = t.call(this))._usedByButtonElement = null),
              (r._showCalledByButtonElement = !1),
              (r._isShowing = !1),
              (r._backingLibraries = {
                APPLE_PAY: null,
                GOOGLE_PAY: null,
                BROWSER: null,
                LINK: null,
              }),
              (r._activeBackingLibraryName = null),
              (r._buttonTypeName = null),
              (r._activeBackingLibrary = null),
              (r._canMakePaymentAvailability = {
                APPLE_PAY: null,
                GOOGLE_PAY: null,
                BROWSER: null,
                LINK: null,
              }),
              (r._canMakePaymentResolved = !1),
              (r._validateUserOn = function (e, t) {
                "string" == typeof e &&
                  (("source" === e &&
                    r._hasRegisteredListener("paymentmethod")) ||
                    ("paymentmethod" === e &&
                      r._hasRegisteredListener("source"))) &&
                  (r._report("pr.double_callback_registration"),
                  r._controller.warn(
                    "Do not register event listeners for both `source` or `paymentmethod`. Only one of them will succeed."
                  ));
              }),
              (r._report = function (e, t) {
                r._controller.report(
                  e,
                  (0, a.Z)(
                    (0, a.Z)({}, t),
                    {},
                    {
                      activeBackingLibrary: r._activeBackingLibraryName,
                      usesButtonElement: r._usedByButtonElement || !1,
                      requestShipping: r._initialOptions
                        ? r._initialOptions.requestShipping || !1
                        : null,
                    }
                  )
                );
              }),
              (r._warn = function (e) {
                r._controller.warn(e);
              }),
              (r._registerElement = function () {
                r._usedByButtonElement = !0;
              }),
              (r._elementShow = function () {
                (r._showCalledByButtonElement = !0), r.show();
              }),
              (r._updateLocale = function (e) {
                r._locale = e;
              }),
              (r._initBackingLibraries = function (e) {
                r._queryStrategy.forEach(function (t) {
                  var n = {
                    controller: r._controller,
                    authentication: r._authentication,
                    mids: r._mids,
                    origin: window.location.origin,
                    options: e,
                    usesButtonElement: function () {
                      return !0 === r._usedByButtonElement;
                    },
                    listenerRegistry: r._listenerRegistry,
                  };
                  switch (t) {
                    case "APPLE_PAY":
                      (r._backingLibraries.APPLE_PAY = new Ze(n)),
                        r._backingLibraries.APPLE_PAY.setEventHandler(
                          r._handleInternalEvent
                        );
                      break;
                    case "GOOGLE_PAY":
                      (r._backingLibraries.GOOGLE_PAY = new Ge(n)),
                        r._backingLibraries.GOOGLE_PAY.setEventHandler(
                          r._handleInternalEvent
                        );
                      break;
                    case "LINK":
                      (r._backingLibraries.LINK = new Ve(n)),
                        r._backingLibraries.LINK.setEventHandler(
                          r._handleInternalEvent
                        );
                      break;
                    case "BROWSER":
                      (r._backingLibraries.BROWSER = new He(n)),
                        r._backingLibraries.BROWSER.setEventHandler(
                          r._handleInternalEvent
                        );
                      break;
                    default:
                      (0, d.Rz)(t);
                  }
                });
              }),
              (r._handleInternalEvent = function (e) {
                switch (e.type) {
                  case "paymentresponse":
                    r._emitPaymentResponse(e.payload);
                    break;
                  case "error":
                    r._report("error.pr.internal_error", { error: e.payload });
                    break;
                  case "close":
                    r._isShowing = !1;
                    break;
                  default:
                    r._emitExternalEvent(e);
                }
              }),
              (r._emitExternalEvent = function (e) {
                switch (e.type) {
                  case "cancel":
                    r._emit("cancel");
                    break;
                  case "shippingoptionchange":
                  case "shippingaddresschange":
                    var t = e.type,
                      n = e.payload,
                      o = null,
                      i = !1,
                      c = !1,
                      s = function (a) {
                        if (c && i)
                          return (
                            r._report("pr.update_with_called_after_timeout", {
                              event: t,
                            }),
                            void r._controller.warn(
                              "Call to updateWith() was ignored because it has already timed out. Please ensure that updateWith is called within 30 seconds."
                            )
                          );
                        if (i)
                          return (
                            r._report("pr.update_with_double_call", {
                              event: t,
                            }),
                            void r._controller.warn(
                              "Call to updateWith() was ignored because it has already been called. Do not call updateWith more than once."
                            )
                          );
                        o && clearTimeout(o),
                          (i = !0),
                          r._report("pr.update_with", { event: t });
                        var s = (0, d.Gu)(
                            te,
                            a || {},
                            "".concat(t, " callback")
                          ),
                          u = s.value;
                        s.warnings.forEach(function (e) {
                          return r._controller.warn(e);
                        });
                        var l = u,
                          m = !1;
                        if (
                          r._initialOptions.__isCheckout &&
                          "APPLE_PAY" === r._activeBackingLibraryName &&
                          u.shippingOptions &&
                          1 === u.shippingOptions.length &&
                          0 === u.shippingOptions[0].amount
                        ) {
                          u.shippingOptions;
                          (l = (0, p.Z)(u, ["shippingOptions"])), (m = !0);
                        }
                        var f =
                          u.shippingOptions ||
                          r._initialOptions.shippingOptions;
                        if (
                          !(
                            m ||
                            "shippingaddresschange" !== e.type ||
                            u.status !== H.success ||
                            (f && f.length)
                          )
                        )
                          throw new g.No(
                            "When requesting shipping information, you must specify shippingOptions once a shipping address is selected.\nEither provide shippingOptions in stripe.paymentRequest(...) or listen for the shippingaddresschange event and provide shippingOptions to the updateWith callback there."
                          );
                        n.updateWith(l);
                      };
                    r._hasRegisteredListener(e.type)
                      ? ((o = setTimeout(function () {
                          (c = !0),
                            r._report("pr.update_with_timed_out", { event: t }),
                            r._controller.warn(
                              'Timed out waiting for a call to updateWith(). If you listen to "'
                                .concat(
                                  e.type,
                                  '" events, then you must call event.updateWith in the "'
                                )
                                .concat(e.type, '" handler within 30 seconds.')
                            ),
                            s({ status: "fail" });
                        }, 29900)),
                        r._emit(
                          t,
                          (0, a.Z)((0, a.Z)({}, n), {}, { updateWith: s })
                        ))
                      : s({ status: "success" });
                    break;
                  case "token":
                  case "source":
                  case "paymentmethod":
                    var u = e.type,
                      l = e.payload,
                      m = null,
                      f = !1,
                      _ = !1,
                      h = function (e) {
                        if (f && _)
                          return (
                            r._report("pr.complete_called_after_timeout"),
                            void r._controller.warn(
                              "Call to complete() was ignored because it has already timed out. Please ensure that complete is called within 30 seconds."
                            )
                          );
                        if (_)
                          return (
                            r._report("pr.complete_double_call"),
                            void r._controller.warn(
                              "Call to complete() was ignored because it has already been called. Do not call complete more than once."
                            )
                          );
                        m && clearTimeout(m), (_ = !0);
                        var t = (0, d.Gu)(
                            ne,
                            e,
                            "status for PaymentRequest completion"
                          ),
                          n = t.value;
                        t.warnings.forEach(function (e) {
                          return r._controller.warn(e);
                        }),
                          l.complete(n);
                      };
                    (m = setTimeout(function () {
                      (f = !0),
                        r._report("pr.complete_timed_out"),
                        r._controller.warn(
                          'Timed out waiting for a call to complete(). Once you have processed the payment in the "'.concat(
                            e.type,
                            '" handler, you must call event.complete within 30 seconds.'
                          )
                        ),
                        h("fail");
                    }, 29900)),
                      r._emit(
                        u,
                        (0, a.Z)((0, a.Z)({}, l), {}, { complete: h })
                      );
                    break;
                  default:
                    (0, d.Rz)(e);
                }
              }),
              (r._logExperimentExposure = function (e) {
                r._controller.report("experiment_exposure", {
                  experiment_name: e,
                });
              }),
              (r._maybeEmitPaymentResponse = function (e) {
                r._isShowing && r._emitExternalEvent(e);
              }),
              (r._emitPaymentResponse = function (e) {
                r._report("pr.payment_authorized");
                var t = e.token,
                  n = (0, p.Z)(e, ["token"]),
                  o = n.payerEmail,
                  i = n.payerPhone,
                  c = n.complete,
                  s = r._showCalledByButtonElement
                    ? w.Yj.paymentRequestButton
                    : null;
                r._hasRegisteredListener("token") &&
                  ("googlePay" === n.walletName &&
                    r._controller.action.removeElementsExperimentId({
                      experimentKey: w.D3.elements_session,
                    }),
                  r._maybeEmitPaymentResponse({ type: "token", payload: e })),
                  r._hasRegisteredListener("paymentmethod")
                    ? r._controller.action
                        .createPaymentMethodWithData({
                          elementName: s,
                          type: "card",
                          paymentMethodData: {
                            card: { token: t.id },
                            billing_details: {
                              email:
                                r._initialOptions
                                  .__billingDetailsEmailOverride || o,
                              phone: i,
                            },
                          },
                          mids: null,
                        })
                        .then(function (e) {
                          "error" === e.type
                            ? e.error.code && "email_invalid" === e.error.code
                              ? c("invalid_payer_email")
                              : (r._report(
                                  "fatal.pr.token_to_payment_method_failed",
                                  { error: e.error, token: t.id }
                                ),
                                c("fail"))
                            : r._maybeEmitPaymentResponse({
                                type: "paymentmethod",
                                payload: (0, a.Z)(
                                  (0, a.Z)({}, n),
                                  {},
                                  { paymentMethod: e.object }
                                ),
                              });
                        })
                    : r._hasRegisteredListener("source") &&
                      r._controller.action
                        .createSourceWithData({
                          elementName: s,
                          type: "card",
                          sourceData: {
                            token: t.id,
                            owner: {
                              email:
                                r._initialOptions
                                  .__billingDetailsEmailOverride || o,
                              phone: i,
                            },
                          },
                          mids: null,
                        })
                        .then(function (e) {
                          "error" === e.type
                            ? e.error.code && "email_invalid" === e.error.code
                              ? c("invalid_payer_email")
                              : (r._report("fatal.pr.token_to_source_failed", {
                                  error: e.error,
                                  token: t.id,
                                }),
                                c("fail"))
                            : r._maybeEmitPaymentResponse({
                                type: "source",
                                payload: (0, a.Z)(
                                  (0, a.Z)({}, n),
                                  {},
                                  { source: e.object }
                                ),
                              });
                        });
              }),
              (r._canMakePaymentForBackingLibrary = function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { skipEnrollmentCheck: !1 },
                  n = r._backingLibraries[e];
                if (!n)
                  throw new Error(
                    "Unexpectedly calling canMakePayment on uninitialized backing library."
                  );
                return D.J.race([
                  new D.J(function (e) {
                    return setTimeout(e, 1e4);
                  }).then(function () {
                    return !1;
                  }),
                  n.canMakePayment({
                    skipEnrollmentCheck: t.skipEnrollmentCheck,
                    locale: r._locale,
                  }),
                ]).then(function (t) {
                  var n,
                    o = null;
                  return (
                    "LINK" === e && "boolean" != typeof t
                      ? ((n = t.available), (o = t.linkExperimentAssignments))
                      : (n = !!t),
                    (r._canMakePaymentAvailability = (0, a.Z)(
                      (0, a.Z)({}, r._canMakePaymentAvailability),
                      {},
                      (0, l.Z)({}, e, n)
                    )),
                    {
                      backingLibraryName: e,
                      available: n,
                      linkExperimentAssignments: o,
                    }
                  );
                });
              }),
              (r._isGooglePayOnAndroid = function () {
                var e = r._initialOptions.wallets,
                  t = e && -1 === e.indexOf("googlePay");
                return _.sV && !t;
              }),
              (r._isInLinkBeta = function () {
                return (
                  void 0 !== r._initialOptions.__betas &&
                  (0, y.uN)(r._initialOptions.__betas, y.M4.link_in_prb_beta_1)
                );
              }),
              (r._canIncludeLink = function () {
                return !!r._usedByButtonElement;
              }),
              (r._constructCanMakePaymentResponse = function () {
                var e =
                    r._isGooglePayOnAndroid() &&
                    !!r._canMakePaymentAvailability.BROWSER,
                  t = {
                    applePay: !!r._canMakePaymentAvailability.APPLE_PAY,
                    googlePay: !!r._canMakePaymentAvailability.GOOGLE_PAY || e,
                  };
                return (
                  r._canIncludeLink() &&
                    ((t.link = !!r._canMakePaymentAvailability.LINK),
                    r._report("pr.link_in_can_make_payment_response", {
                      betas: r._initialOptions.__betas,
                    })),
                  t
                );
              }),
              (r.canMakePayment = A(function (e) {
                if (
                  (r._report("pr.can_make_payment"), r._canMakePaymentResolved)
                ) {
                  var t =
                    null !== r._activeBackingLibrary
                      ? r._constructCanMakePaymentResponse()
                      : null;
                  return (
                    r._report("pr.can_make_payment_response", {
                      response: t,
                      cached: !0,
                      activeBackingLibrary: r._activeBackingLibrary,
                    }),
                    D.J.resolve(t)
                  );
                }
                if ("https:" !== window.location.protocol)
                  return (
                    Qe ||
                      (r._controller.warn(
                        "If you are testing Apple Pay or Google Pay, you must serve this page over HTTPS as it will not work over HTTP. Please read https://stripe.com/docs/stripe-js/elements/payment-request-button#html-js-prerequisites for more details."
                      ),
                      (Qe = !0)),
                    (r._canMakePaymentResolved = !0),
                    D.J.resolve(null)
                  );
                var n = r._canIncludeLink()
                    ? r._queryStrategy
                    : r._queryStrategy.filter(function (e) {
                        return "LINK" !== e;
                      }),
                  o = n.map(function (e) {
                    return function () {
                      return r._canMakePaymentForBackingLibrary(e);
                    };
                  });
                -1 !== n.indexOf("LINK") &&
                  o.push(function () {
                    return r._canMakePaymentForBackingLibrary("LINK", {
                      skipEnrollmentCheck: !0,
                    });
                  });
                var i = !1,
                  a = new Xe.E();
                return (0, B.tN)(o, function (e) {
                  var t = e.backingLibraryName,
                    n = e.available,
                    o = e.linkExperimentAssignments;
                  if (!r._isInLinkBeta() && n && "LINK" === t) {
                    var a = null == o ? void 0 : o[w.om],
                      c = null == o ? void 0 : o[w.wW];
                    if (
                      (i ||
                        (a && r._logExperimentExposure(w.om),
                        c && r._logExperimentExposure(w.wW),
                        (i = !0)),
                      "treatment" !== c)
                    )
                      return (r._canMakePaymentAvailability.LINK = !1), !n;
                  }
                  return (
                    n &&
                      ((r._activeBackingLibraryName = t),
                      (r._activeBackingLibrary = r._backingLibraries[t]),
                      (r._buttonTypeName = r._activeBackingLibraryName),
                      r._isGooglePayOnAndroid() &&
                        (r._buttonTypeName = "GOOGLE_PAY")),
                    n
                  );
                }).then(function (e) {
                  var t = new Xe.E();
                  r._canMakePaymentResolved = !0;
                  var n = null;
                  return (
                    "SATISFIED" === e.type &&
                      (n = r._constructCanMakePaymentResponse()),
                    r._report("pr.can_make_payment_response", {
                      response: n,
                      cached: !1,
                      duration: a.getElapsedTime(t),
                      activeBackingLibrary: r._activeBackingLibrary,
                    }),
                    n
                  );
                });
              })),
              (r.update = A(function (e) {
                var t;
                if (r._isShowing)
                  throw (
                    (r._report("pr.update_called_while_showing"),
                    new g.No(
                      "You cannot update Payment Request options while the payment sheet is showing."
                    ))
                  );
                var n = (0, d.Gu)(ee, e, "PaymentRequest update()"),
                  o = n.value,
                  i = n.warnings;
                r._report("pr.update"),
                  i.forEach(function (e) {
                    return r._warn(e);
                  }),
                  o.shippingOptions &&
                    !(null === (t = r._initialOptions) || void 0 === t
                      ? void 0
                      : t.requestShipping) &&
                    r._report("pr.update_shipping_options_without_shipping"),
                  (0, v.VO)(r._backingLibraries).forEach(function (e) {
                    e && e.update(o);
                  });
              })),
              (r.show = A(function () {
                if (
                  (r._usedByButtonElement &&
                    !r._showCalledByButtonElement &&
                    (r._report("pr.show_called_with_button"),
                    r._warn(
                      "Do not call show() yourself if you are using the paymentRequestButton Element. The Element handles showing the payment sheet."
                    )),
                  !r._canMakePaymentResolved)
                )
                  throw (
                    (r._report("pr.show_called_before_can_make_payment"),
                    new g.No(
                      "You must first check the Payment Request API's availability using paymentRequest.canMakePayment() before calling show()."
                    ))
                  );
                if (!r._activeBackingLibrary)
                  throw (
                    (r._report("pr.show_called_with_can_make_payment_false"),
                    new g.No(
                      "Payment Request is not available in this browser."
                    ))
                  );
                if (
                  !r._showCalledByButtonElement &&
                  "LINK" === r._activeBackingLibraryName
                )
                  throw (
                    (r._report("pr.show_called_with_link"),
                    new g.No(
                      "Payment Request with Link cannot be used without the paymentRequestButton Element"
                    ))
                  );
                var e = r._activeBackingLibrary;
                r._report("pr.show", {
                  listeners: Object.keys(r._callbacks).sort(),
                }),
                  (r._isShowing = !0),
                  e.show({ locale: r._locale });
              })),
              (r.abort = A(function () {
                if (r._activeBackingLibrary) {
                  var e = r._activeBackingLibrary;
                  r._report("pr.abort"), e.abort();
                }
              })),
              (r.isShowing = function () {
                return r._isShowing;
              }),
              (r._controller = e.controller),
              (r._authentication = e.authentication),
              (r._mids = e.mids),
              (r._listenerRegistry = e.listenerRegistry);
            var o = (0, d.Gu)(
                (e.betas,
                (0, d.mC)({
                  displayItems: (0, d.jt)((0, d.CT)(W)),
                  shippingOptions: (0, d.jt)((0, d.uw)("id")((0, d.CT)(V))),
                  wallets: (0, d.jt)(
                    (0, d.CT)(
                      d.kw.apply(
                        void 0,
                        (0, c.Z)(
                          U().filter(function (e) {
                            return e !== q.link;
                          })
                        )
                      )
                    )
                  ),
                  disableWallets: (0, d.jt)(
                    (0, d.CT)(d.kw.apply(void 0, (0, c.Z)(U())))
                  ),
                  blockedCardBrands: (0, d.jt)(
                    (0, d.CT)(d.kw.apply(void 0, (0, c.Z)(w.iw)))
                  ),
                  total: J,
                  requestShipping: (0, d.jt)(d.Xg),
                  requestPayerName: (0, d.jt)(d.Xg),
                  requestPayerEmail: (0, d.jt)(d.Xg),
                  requestPayerPhone: (0, d.jt)(d.Xg),
                  shippingType: (0, d.jt)(Q),
                  currency: d.cV,
                  country: d.hN,
                  jcbEnabled: (0, d.jt)(d.Xg),
                  __billingDetailsEmailOverride: (0, d.jt)(d.Z_),
                  __minApplePayVersion: (0, d.jt)(d.Rx),
                  __minGooglePayVersion: (0, d.jt)(X),
                  __merchantDetails: (0, d.jt)($),
                  __isCheckout: (0, d.jt)(d.Xg),
                  __betas: (0, d.jt)(
                    (0, d.CT)(d.z$.apply(void 0, (0, c.Z)(y.Lv)))
                  ),
                })),
                e.rawOptions || {},
                "paymentRequest()"
              ),
              i = o.value,
              u = o.warnings;
            if (
              (r._report("pr.options", {
                options: (0, v.ei)(i, [
                  "country",
                  "currency",
                  "jcbEnabled",
                  "requestPayerEmail",
                  "requestPayerName",
                  "requestPayerPhone",
                  "requestShipping",
                  "disableWallets",
                  "wallets",
                  "blockedCardBrands",
                ]),
              }),
              u.forEach(function (e) {
                return r._warn(e);
              }),
              i.__billingDetailsEmailOverride && i.requestPayerEmail)
            )
              throw new g.No(
                "When providing `__billingDetailsEmailOverride`, `requestPayerEmail` has to be `false` so that the customer is not prompted for their email in the payment sheet."
              );
            var m = (0, y.uN)(e.betas, y.M4.link_in_prb_beta_1),
              f = U(),
              h = i.disableWallets,
              b = h
                ? f.filter(function (e) {
                    return -1 === h.indexOf(e) && (m || e !== q.link);
                  })
                : i.wallets;
            return (
              e.queryStrategyOverride
                ? (r._queryStrategy = e.queryStrategyOverride)
                : (r._queryStrategy = re(b || f)),
              r._report("pr.query_strategy", {
                queryStrategy: r._queryStrategy,
              }),
              (r._initialOptions = (0, a.Z)(
                (0, a.Z)({}, i),
                {},
                { __betas: e.betas, wallets: b }
              )),
              r._initBackingLibraries(r._initialOptions),
              r
            );
          }
          return n;
        })(L),
        et = $e,
        tt = {
          base: (0, d.jt)(d.Ry),
          complete: (0, d.jt)(d.Ry),
          empty: (0, d.jt)(d.Ry),
          invalid: (0, d.jt)(d.Ry),
          paymentRequestButton: (0, d.jt)(d.Ry),
        },
        nt = {
          classes: (0, d.jt)(
            (0, d.mC)({
              base: (0, d.jt)(d.Z_),
              complete: (0, d.jt)(d.Z_),
              empty: (0, d.jt)(d.Z_),
              focus: (0, d.jt)(d.Z_),
              invalid: (0, d.jt)(d.Z_),
              webkitAutofill: (0, d.jt)(d.Z_),
            })
          ),
          hidePostalCode: (0, d.jt)(d.Xg),
          hideIcon: (0, d.jt)(d.Xg),
          showIcon: (0, d.jt)(d.Xg),
          style: (0, d.jt)((0, d.mC)(tt)),
          iconStyle: (0, d.jt)((0, d.kw)("solid", "default")),
          value: (0, d.jt)((0, d.or)(d.Z_, d.Ry)),
          __privateCvcOptional: (0, d.jt)(d.Xg),
          __privateValue: (0, d.jt)((0, d.or)(d.Z_, d.Ry)),
          __privateEmitIbanValue: (0, d.jt)(d.Xg),
          error: (0, d.jt)(
            (0, d.mC)({
              type: d.Z_,
              code: (0, d.jt)(d.Z_),
              decline_code: (0, d.jt)(d.Z_),
              param: (0, d.jt)(d.Z_),
            })
          ),
          locale: (0, d.yv)("elements()"),
          fonts: (0, d.yv)("elements()"),
          placeholder: (0, d.jt)(d.Z_),
          disabled: (0, d.jt)(d.Xg),
          placeholderCountry: (0, d.jt)(d.Z_),
          paymentRequest: (0, d.jt)(
            (0, d.n2)(et, "stripe.paymentRequest(...)")
          ),
          supportedCountries: (0, d.jt)((0, d.CT)(d.Z_)),
          accountHolderType: (0, d.jt)((0, d.kw)("individual", "company")),
          issuingCard: (0, d.jt)(d.Z_),
          ephemeralKeySecret: (0, d.jt)(d.Z_),
          nonce: (0, d.jt)(d.Z_),
          toCopy: (0, d.jt)((0, d.kw)("number", "cvc", "expiry", "pin")),
        },
        rt = (0, d.mC)(nt),
        ot =
          ((Fe = {}),
          (0, l.Z)(Fe, w.Yj.card, xe.NC.CARD_ELEMENT),
          (0, l.Z)(Fe, w.Yj.cardNumber, xe.NC.CARD_ELEMENT),
          (0, l.Z)(Fe, w.Yj.cardExpiry, xe.NC.CARD_ELEMENT),
          (0, l.Z)(Fe, w.Yj.cardCvc, xe.NC.CARD_ELEMENT),
          (0, l.Z)(Fe, w.Yj.postalCode, xe.NC.CARD_ELEMENT),
          (0, l.Z)(
            Fe,
            w.Yj.paymentRequestButton,
            xe.NC.PAYMENT_REQUEST_ELEMENT
          ),
          (0, l.Z)(Fe, w.Yj.iban, xe.NC.IBAN_ELEMENT),
          (0, l.Z)(Fe, w.Yj.idealBank, xe.NC.IDEAL_BANK_ELEMENT),
          (0, l.Z)(Fe, w.Yj.p24Bank, xe.NC.P24_BANK_ELEMENT),
          (0, l.Z)(Fe, w.Yj.auBankAccount, xe.NC.AU_BANK_ACCOUNT_ELEMENT),
          (0, l.Z)(Fe, w.Yj.fpxBank, xe.NC.FPX_BANK_ELEMENT),
          (0, l.Z)(
            Fe,
            w.Yj.issuingCardNumberDisplay,
            xe.NC.ISSUING_CARD_NUMBER_DISPLAY_ELEMENT
          ),
          (0, l.Z)(
            Fe,
            w.Yj.issuingCardCopyButton,
            xe.NC.ISSUING_CARD_COPY_BUTTON_ELEMENT
          ),
          (0, l.Z)(
            Fe,
            w.Yj.issuingCardCvcDisplay,
            xe.NC.ISSUING_CARD_CVC_DISPLAY_ELEMENT
          ),
          (0, l.Z)(
            Fe,
            w.Yj.issuingCardExpiryDisplay,
            xe.NC.ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT
          ),
          (0, l.Z)(
            Fe,
            w.Yj.issuingCardPinDisplay,
            xe.NC.ISSUING_CARD_PIN_DISPLAY_ELEMENT
          ),
          (0, l.Z)(Fe, w.Yj.epsBank, xe.NC.EPS_BANK_ELEMENT),
          (0, l.Z)(Fe, w.Yj.netbankingBank, xe.NC.NETBANKING_BANK_ELEMENT),
          (0, l.Z)(
            Fe,
            w.Yj.afterpayClearpayMessageModal,
            xe.NC.AFTERPAY_MESSAGE_MODAL_ELEMENT
          ),
          (0, l.Z)(
            Fe,
            w.Yj.autocompleteSuggestions,
            xe.NC.AUTOCOMPLETE_SUGGESTIONS_ELEMENT
          ),
          (0, l.Z)(
            Fe,
            w.Yj.achBankSearchResults,
            xe.NC.ACH_BANK_SEARCH_RESULTS_ELEMENT
          ),
          Fe),
        it = function (e) {
          var t = (0, f.Dx)(e, null);
          return !!t && "rtl" === t.getPropertyValue("direction");
        },
        at = function () {
          document.activeElement &&
            document.activeElement.blur &&
            document.activeElement.blur();
        },
        ct = o(5916),
        st = o(9560),
        ut = function (e) {
          var t = document.createElement("input");
          return (
            (t.className = e),
            t.setAttribute("aria-hidden", "true"),
            t.setAttribute("aria-label", " "),
            t.setAttribute("autocomplete", "false"),
            (t.maxLength = 1),
            (t.disabled = !0),
            (0, f.yq)(t, st.ZS),
            t
          );
        },
        lt = {
          margin: "0",
          padding: "0",
          border: "none",
          display: "block",
          background: "transparent",
          position: "relative",
          opacity: "1",
        },
        pt = function (e) {
          var t = e.name,
            n = e.value,
            r = e.expiresIn,
            o = e.path,
            i = e.domain,
            a = e.protocol,
            c = e.sameSite,
            s = void 0 === c ? "Lax" : c,
            u = new Date(),
            l = r || 31536e6;
          u.setTime(u.getTime() + l);
          var p = o || "/",
            d = (n || "").replace(/[^!#-+\--:<-[\]-~]/g, encodeURIComponent),
            m = ""
              .concat(encodeURIComponent(t), "=")
              .concat(d, ";expires=")
              .concat(u.toGMTString(), ";path=")
              .concat(p, ";SameSite=")
              .concat(s);
          return (
            i && (m += ";domain=".concat(i)),
            "https:" === a && (m += ";secure"),
            (document.cookie = m),
            m
          );
        },
        dt = function (e) {
          var t = (0, v.sE)(document.cookie.split("; "), function (t) {
            var n = t.indexOf("=");
            try {
              return decodeURIComponent(t.substr(0, n)) === e;
            } catch (e) {
              return !1;
            }
          });
          if (!t) return null;
          var n = t.indexOf("=");
          try {
            return decodeURIComponent(t.substr(n + 1));
          } catch (e) {
            return null;
          }
        },
        mt = o(8898),
        ft = o.n(mt),
        _t = w.Xk.replace(/\/$/, "");
      var ht = "_1776170249",
        yt = "__1104211103",
        vt = (function (e) {
          var t,
            n = ((t = {}), (0, l.Z)(t, ht, !0), (0, l.Z)(t, yt, !1), t);
          try {
            var r = (0, h.vB)(e.slice(e.indexOf("?") + 1));
            Object.keys(r).forEach(function (e) {
              var t = ft()(e),
                o = r[e];
              switch (t) {
                case ht:
                  "false" === o && (n[t] = !1);
                  break;
                case yt:
                  "true" === o && (n[t] = !0);
              }
            });
          } catch (e) {}
          return n;
        })(
          (function (e) {
            try {
              if (e.currentScript) return e.currentScript.src;
              var t = e.querySelectorAll('script[src^="'.concat(_t, '"]')),
                n = (0, v.sE)(t, function (e) {
                  var t = (e.getAttribute("src") || "").split("?")[0];
                  return new RegExp("^".concat(_t, "/?$")).test(t);
                });
              return (n && n.getAttribute("src")) || "";
            } catch (e) {
              return "";
            }
          })(document)
        ),
        gt = vt[ht],
        bt = vt[yt],
        wt = o(8217),
        kt = o(3538);
      function Et(e, t, n) {
        return (
          (Et =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get
              : function (e, t, n) {
                  var r = (function (e, t) {
                    for (
                      ;
                      !Object.prototype.hasOwnProperty.call(e, t) &&
                      null !== (e = (0, kt.Z)(e));

                    );
                    return e;
                  })(e, t);
                  if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, t);
                    return o.get ? o.get.call(n) : o.value;
                  }
                }),
          Et(e, t, n || e)
        );
      }
      var St,
        Pt = o(3669),
        At = (function (e) {
          (0, Z.Z)(n, e);
          var t = (0, x.Z)(n);
          function n(e) {
            var r,
              o = e.type,
              i = e.controllerId,
              a = e.listenerRegistry,
              c = e.betas,
              u = e.appParams;
            return (
              (0, s.Z)(this, n),
              ((r = t.call(this))._sendFAReq = function (e) {
                var t = (0, m.To)(e.tag);
                return new D.J(function (n, o) {
                  (r._requests[t] = { resolve: n, reject: o }),
                    r._send({
                      message: {
                        action: "stripe-frame-action",
                        payload: { nonce: t, faReq: e },
                      },
                      type: "outer",
                      frameId: r.id,
                      controllerId: r._controllerId,
                    });
                });
              }),
              (r.action = {
                perform3DS2Challenge: function (e) {
                  return r._sendFAReq({
                    tag: "PERFORM_3DS2_CHALLENGE",
                    value: e,
                  });
                },
                perform3DS2Fingerprint: function (e) {
                  return r._sendFAReq({
                    tag: "PERFORM_3DS2_FINGERPRINT",
                    value: e,
                  });
                },
                performOneClickWebauthnAuthentication: function (e) {
                  return r._sendFAReq({
                    tag: "PERFORM_ONE_CLICK_WEBAUTHN_AUTHENTICATION",
                    value: e,
                  });
                },
                show3DS2Spinner: function (e) {
                  return r._sendFAReq({ tag: "SHOW_3DS2_SPINNER", value: e });
                },
                checkCanMakePayment: function (e) {
                  return r._sendFAReq({
                    tag: "CHECK_CAN_MAKE_PAYMENT",
                    value: e,
                  });
                },
                closeLightboxFrame: function (e) {
                  return r._sendFAReq({
                    tag: "CLOSE_LIGHTBOX_FRAME",
                    value: e,
                  });
                },
                openLightboxFrame: function (e) {
                  return r._sendFAReq({ tag: "OPEN_LIGHTBOX_FRAME", value: e });
                },
                setFocusTarget: function (e) {
                  return r._sendFAReq({ tag: "SET_FOCUS_TARGET", value: e });
                },
              }),
              (r.type = o),
              (r.loaded = !1),
              (r._controllerId = i),
              (r._persistentMessages = []),
              (r._queuedMessages = []),
              (r._requests = {}),
              (r._listenerRegistry = a),
              (r.id = r._generateId()),
              (r._iframe = r._createIFrame(o, c, u)),
              r._on("load", function () {
                (r.loaded = !0),
                  r._ensureMounted(),
                  r.loaded &&
                    (r._persistentMessages.forEach(function (e) {
                      return r._send(e);
                    }),
                    r._queuedMessages.forEach(function (e) {
                      return r._send(e);
                    }),
                    (r._queuedMessages = []));
              }),
              r._on("title", function (e) {
                var t = e.title;
                r._iframe.setAttribute("title", t);
              }),
              r
            );
          }
          return (
            (0, u.Z)(n, [
              {
                key: "_generateId",
                value: function () {
                  return (0, m.To)("__privateStripeFrame");
                },
              },
              {
                key: "send",
                value: function (e) {
                  this._send({
                    message: e,
                    type: "outer",
                    frameId: this.id,
                    controllerId: this._controllerId,
                  });
                },
              },
              {
                key: "sendPersistent",
                value: function (e) {
                  this._ensureMounted();
                  var t = {
                    message: e,
                    type: "outer",
                    frameId: this.id,
                    controllerId: this._controllerId,
                  };
                  (this._persistentMessages = [].concat(
                    (0, c.Z)(this._persistentMessages),
                    [t]
                  )),
                    this.loaded && (0, xe.oi)(t);
                },
              },
              {
                key: "resolve",
                value: function (e, t) {
                  this._requests[e] && this._requests[e].resolve(t);
                },
              },
              {
                key: "reject",
                value: function (e, t) {
                  this._requests[e] && this._requests[e].reject(t);
                },
              },
              {
                key: "_send",
                value: function (e) {
                  this._ensureMounted(),
                    this.loaded
                      ? (0, xe.oi)(e)
                      : (this._queuedMessages = [].concat(
                          (0, c.Z)(this._queuedMessages),
                          [e]
                        ));
                },
              },
              {
                key: "appendTo",
                value: function (e) {
                  this._emit("mount", { anchor: e }),
                    e.appendChild(this._iframe);
                },
              },
              {
                key: "prependTo",
                value: function (e, t) {
                  this._emit("mount", { anchor: e, parent: t }),
                    t.insertBefore(this._iframe, e);
                },
              },
              {
                key: "unmount",
                value: function () {
                  (this.loaded = !1), this._emit("unload");
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.unmount();
                  var e = this._iframe.parentElement;
                  e && e.removeChild(this._iframe), this._emit("destroy");
                },
              },
              {
                key: "_ensureMounted",
                value: function () {
                  this._isMounted() || this.unmount();
                },
              },
              {
                key: "_isMounted",
                value: function () {
                  return (
                    !!document.body && document.body.contains(this._iframe)
                  );
                },
              },
              {
                key: "_createIFrame",
                value: function (e, t, n) {
                  var r = window.location.href.toString(),
                    o =
                      "string" == typeof n
                        ? n
                        : (0, h.qC)(
                            (0, a.Z)(
                              (0, a.Z)({}, n || {}),
                              {},
                              { referrer: r, controllerId: this._controllerId }
                            )
                          ),
                    i = document.createElement("iframe");
                  i.setAttribute("name", this.id);
                  var c = (0, xe.i7)(e);
                  return (
                    Object.keys(c).forEach(function (e) {
                      i.setAttribute(e, c[e]);
                    }),
                    (null == n ? void 0 : n.allowCamera) &&
                      i.setAttribute("allow", "camera"),
                    (i.src = ""
                      .concat((0, Pt.D)(e))
                      .concat(o ? "#" : "")
                      .concat(o)),
                    i
                  );
                },
              },
            ]),
            n
          );
        })(L),
        Nt = At,
        Ct = (function (e) {
          (0, Z.Z)(n, e);
          var t = (0, x.Z)(n);
          function n(e) {
            var r;
            if (
              ((0, s.Z)(this, n),
              ((r = t.call(this, e)).autoload = e.autoload || !1),
              "complete" === document.readyState)
            )
              r._ensureMounted();
            else {
              var o = r._ensureMounted.bind((0, O.Z)(r));
              r._listenerRegistry.addEventListener(
                document,
                "DOMContentLoaded",
                o
              ),
                r._listenerRegistry.addEventListener(window, "load", o),
                setTimeout(o, 5e3);
            }
            return r;
          }
          return (
            (0, u.Z)(n, [
              {
                key: "_ensureMounted",
                value: function () {
                  Et((0, kt.Z)(n.prototype), "_ensureMounted", this).call(this),
                    this._isMounted() || this._autoMount();
                },
              },
              {
                key: "_autoMount",
                value: function () {
                  var e = document.body;
                  if (e) {
                    var t =
                      document.querySelector(
                        "#stripe-hidden-frames-container"
                      ) || e;
                    this.appendTo(t);
                  } else if (
                    "complete" === document.readyState ||
                    "interactive" === document.readyState
                  )
                    throw new g.No(
                      "Stripe.js requires that your page has a <body> element."
                    );
                  this.autoload && (this.loaded = !0);
                },
              },
              {
                key: "_createIFrame",
                value: function (e, t, r) {
                  var o = Et(
                    (0, kt.Z)(n.prototype),
                    "_createIFrame",
                    this
                  ).call(this, e, t, r);
                  return (
                    o.setAttribute("aria-hidden", "true"),
                    o.setAttribute("tabIndex", "-1"),
                    (0, f.SV)(o),
                    o
                  );
                },
              },
            ]),
            n
          );
        })(Nt),
        It = Ct,
        Tt = (function (e) {
          (0, Z.Z)(n, e);
          var t = (0, x.Z)(n);
          function n() {
            return (0, s.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, u.Z)(n, [
              {
                key: "_generateId",
                value: function () {
                  return this._controllerId;
                },
              },
            ]),
            n
          );
        })(It),
        Mt = Tt,
        jt = "__privateStripeMetricsController",
        Rt = "merchant",
        Ot = "session",
        Zt = "NA",
        xt = function (e) {
          return 42 === e.length;
        },
        Lt = function (e, t, n) {
          return n ? (!e || (!xt(e) && xt(t)) ? t : e) : (0, m.Vj)();
        },
        Dt = (function () {
          function e() {
            var t = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            if (
              ((0, s.Z)(this, e),
              (this._controllerFrame = null),
              (this._latencies = []),
              (this._handleMessage = function (e) {
                return function (n) {
                  var r = n.data,
                    o = n.origin;
                  if ((0, h.Qg)(o) && "string" == typeof r)
                    try {
                      var i = JSON.parse(r),
                        a = i.originatingScript,
                        c = i.payload;
                      if ("m2" === a) {
                        var s = c.guid,
                          u = c.muid,
                          l = c.sid;
                        (t._guid = s),
                          (t._muid = t._getID(Rt, u)),
                          (t._sid = t._getID(Ot, l)),
                          e();
                      }
                    } catch (e) {}
                };
              }),
              n.checkoutIds)
            ) {
              var r = n.checkoutIds,
                o = r.muid,
                i = r.sid;
              (this._guid = Zt),
                (this._muid = o),
                (this._sid = i),
                (this._doNotPersist = "NA" !== o && "NA" !== i);
            } else
              (this._guid = Zt),
                (this._muid = this._getID(Rt)),
                (this._sid = this._getID(Ot)),
                (this._doNotPersist = !1);
            (this._listenerRegistry = (0, wt.E)()),
              (this._idsPromise = new D.J(function (e) {
                t._establishMessageChannel(e);
              })),
              (this._id = (0, m.To)(jt)),
              gt &&
                ((this._controllerFrame = new Mt({
                  type: xe.NC.METRICS_CONTROLLER,
                  controllerId: this._id,
                  listenerRegistry: this._listenerRegistry,
                  autoload: !0,
                  appParams: this._buildFrameQueryString(),
                })),
                this._startIntervalCheck(),
                setTimeout(
                  this._testLatency.bind(this),
                  2e3 + 500 * Math.random()
                ));
          }
          return (
            (0, u.Z)(e, [
              {
                key: "ids",
                value: function () {
                  return { guid: this._guid, muid: this._muid, sid: this._sid };
                },
              },
              {
                key: "idsPromise",
                value: function () {
                  var e = this;
                  return this._idsPromise.then(function () {
                    return e.ids();
                  });
                },
              },
              {
                key: "_establishMessageChannel",
                value: function (e) {
                  if (!gt) return (this._guid = (0, m.Vj)()), void e();
                  this._listenerRegistry.addEventListener(
                    window,
                    "message",
                    this._handleMessage(e)
                  );
                },
              },
              {
                key: "_startIntervalCheck",
                value: function () {
                  var e = this,
                    t = window.location.href;
                  setInterval(function () {
                    var n = window.location.href;
                    n !== t &&
                      (e.send(function (e) {
                        return {
                          action: "ping",
                          payload: {
                            sid: e.sid,
                            muid: e.muid,
                            title: document.title,
                            referrer: document.referrer,
                            url: document.location.href,
                            version: 6,
                          },
                        };
                      }),
                      (t = n));
                  }, 5e3);
                },
              },
              {
                key: "report",
                value: function (e, t) {
                  this.send(function (n) {
                    return {
                      action: "track",
                      payload: {
                        sid: n.sid,
                        muid: n.muid,
                        url: document.location.href,
                        source: e,
                        data: t,
                        version: 6,
                      },
                    };
                  });
                },
              },
              {
                key: "send",
                value: function (e) {
                  var t = this;
                  this._idsPromise.then(function () {
                    try {
                      t._controllerFrame && t._controllerFrame.send(e(t.ids()));
                    } catch (e) {}
                  });
                },
              },
              {
                key: "_testLatency",
                value: function () {
                  var e = this,
                    t = new Date();
                  this._listenerRegistry.addEventListener(
                    document,
                    "mousemove",
                    function n() {
                      try {
                        var r = new Date();
                        e._latencies.push(r - t),
                          e._latencies.length >= 10 &&
                            (e.report("mouse-timings-10", e._latencies),
                            e._listenerRegistry.removeEventListener(
                              document,
                              "mousemove",
                              n
                            )),
                          (t = r);
                      } catch (e) {}
                    }
                  );
                },
              },
              {
                key: "_extractMetaReferrerPolicy",
                value: function () {
                  var e = document.querySelector("meta[name=referrer]");
                  return null != e && e instanceof HTMLMetaElement
                    ? e.content.toLowerCase()
                    : null;
                },
              },
              {
                key: "_extractUrl",
                value: function (e) {
                  var t = document.location.href;
                  switch (e) {
                    case "origin":
                    case "strict-origin":
                    case "origin-when-cross-origin":
                    case "strict-origin-when-cross-origin":
                      return document.location.origin;
                    case "unsafe-url":
                      return t.split("#")[0];
                    default:
                      return t;
                  }
                },
              },
              {
                key: "_buildFrameQueryString",
                value: function () {
                  var e = this._extractMetaReferrerPolicy(),
                    t = this._extractUrl(e),
                    n = {
                      url: t,
                      title: document.title,
                      referrer: document.referrer,
                      muid: this._muid,
                      sid: this._sid,
                      version: 6,
                      preview: (0, h.Qg)(t),
                    };
                  return (
                    null != e && (n.metaReferrerPolicy = e),
                    Object.keys(n)
                      .map(function (e) {
                        return null != n[e]
                          ? ""
                              .concat(e, "=")
                              .concat(encodeURIComponent(n[e].toString()))
                          : null;
                      })
                      .join("&")
                  );
                },
              },
              {
                key: "_getID",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : Zt;
                  switch (e) {
                    case Rt:
                      if (this._doNotPersist) return Lt(this._muid, t, gt);
                      try {
                        var n = "__stripe_mid",
                          r = Lt(dt(n), t, gt);
                        return (
                          xt(r) &&
                            pt({
                              name: n,
                              value: r,
                              domain: ".".concat(document.location.hostname),
                              protocol: document.location.protocol,
                              sameSite: "Strict",
                            }),
                          r
                        );
                      } catch (e) {
                        return Zt;
                      }
                    case Ot:
                      if (this._doNotPersist) return Lt(this._sid, t, gt);
                      try {
                        var o = "__stripe_sid",
                          i = Lt(dt(o), t, gt);
                        return (
                          xt(i) &&
                            pt({
                              name: o,
                              value: i,
                              domain: ".".concat(document.location.hostname),
                              protocol: document.location.protocol,
                              sameSite: "Strict",
                              expiresIn: 18e5,
                            }),
                          i
                        );
                      } catch (e) {
                        return Zt;
                      }
                    default:
                      throw new Error("Invalid ID type specified: ".concat(e));
                  }
                },
              },
            ]),
            e
          );
        })(),
        Bt = null,
        qt = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (Bt = new Dt(e));
        },
        Ft = !1,
        Ut = function () {
          var e = Bt;
          e &&
            (Ft ||
              ((Ft = !0),
              e.send(function (e) {
                return {
                  action: "ping",
                  payload: {
                    v2: 2,
                    sid: e.sid,
                    muid: e.muid,
                    title: document.title,
                    referrer: document.referrer,
                    url: document.location.href,
                    version: 6,
                  },
                };
              }),
              e.send(function (t) {
                return {
                  action: "track",
                  payload: {
                    sid: t.sid,
                    muid: t.muid,
                    url: document.location.href,
                    source: "mouse-timings-10-v2",
                    data: e._latencies,
                    version: 6,
                  },
                };
              })));
        },
        Gt = ["test_id"],
        Yt = function (e) {
          switch (e.type) {
            case "object":
              return Gt.push(e.object.id), { issuingCard: e.object };
            case "error":
              return { error: e.error };
            default:
              return (0, d.Rz)(e);
          }
        },
        zt = function (e) {
          switch (e.type) {
            case "object":
              return { nonce: e.object.public_nonce };
            case "error":
              return { error: e.error };
            default:
              return (0, d.Rz)(e);
          }
        },
        Ht = {
          display: "block",
          position: "absolute",
          top: "50%",
          right: "0",
          "margin-top": "-14px",
          height: "28px",
          width: "0",
          padding: "0",
          border: "none",
          overflow: "hidden",
          opacity: "1",
          visibility: "visible",
          transition: "opacity 300ms ease, visibility 300ms ease",
        },
        Kt = function (e) {
          var t = e.listenerRegistry,
            n = e.parent,
            r = e.frame,
            o = e.locale,
            i = void 0 === o ? "en" : o,
            s = e.controller,
            u = e.style,
            l = e.onLoad,
            p = e.onError,
            d = !1,
            m = (0, Pt.D)("LINK_BUTTON_FOR_CARD_ELEMENT"),
            _ = document.createElement("iframe");
          (0, f.yq)(_, Ht),
            (_.src = ""
              .concat(m, "#")
              .concat((0, h.qC)({ locale: i, style: u })));
          var y = [
            [
              window,
              "message",
              function (e) {
                var t,
                  n = e.data,
                  o = void 0 === n ? {} : n,
                  c = e.origin,
                  u = e.source,
                  m = o.action,
                  h = void 0 === m ? "" : m,
                  y = o.payload,
                  v = void 0 === y ? {} : y;
                if (
                  u === _.contentWindow &&
                  c === w.jQ &&
                  -1 !== (null == h ? void 0 : h.indexOf("card-element-link"))
                )
                  switch (h) {
                    case "card-element-link-load":
                      (d = !0), l();
                      break;
                    case "card-element-link-click":
                      r.send({
                        action: "stripe-user-link-click",
                        payload: {
                          locale: i || "en",
                          type: v.type,
                          publishableKey: s._apiKey,
                          stripeAccount:
                            null !== (t = s._stripeAccount) && void 0 !== t
                              ? t
                              : null,
                          stripeJsId: s._stripeJsId,
                          mids: s.mids(),
                        },
                      });
                      break;
                    case "card-element-link-update-styles":
                      (0, f.yq)(_, (0, a.Z)((0, a.Z)({}, Ht), v));
                      break;
                    case "card-element-link-error":
                      p((null == v ? void 0 : v.reason) || "");
                  }
              },
              !1,
            ],
          ];
          return (
            y.forEach(function (e) {
              t.addEventListener.apply(t, (0, c.Z)(e));
            }),
            null == n || n.appendChild(_),
            {
              unmount: function () {
                var e;
                null === (e = _.contentWindow) ||
                  void 0 === e ||
                  e.postMessage({ action: "card-element-link-unmount" }, w.jQ),
                  y.forEach(function (e) {
                    t.removeEventListener.apply(t, (0, c.Z)(e));
                  }),
                  null == n || n.removeChild(_);
              },
              updateButton: function (e) {
                var t;
                null === (t = _.contentWindow) ||
                  void 0 === t ||
                  t.postMessage(
                    { action: "card-element-link-button-change", payload: e },
                    w.jQ
                  );
              },
              hasLoaded: function () {
                return d;
              },
              setFocusable: function (e) {
                _.tabIndex = e ? 0 : -1;
              },
            }
          );
        },
        Jt = {
          base: "StripeElement",
          focus: "StripeElement--focus",
          invalid: "StripeElement--invalid",
          complete: "StripeElement--complete",
          empty: "StripeElement--empty",
          webkitAutofill: "StripeElement--webkit-autofill",
        },
        Wt = "#faffbd",
        Vt = function (e) {
          return parseFloat(e.toFixed(1));
        },
        Xt = function (e) {
          return /^\d+(\.\d*)?px$/.test(e);
        },
        Qt = (function () {
          function e(t) {
            var n = this;
            (0, s.Z)(this, e),
              (this.focus = function () {
                if (n._isIssuingDisplayElement())
                  throw new g.No(
                    "Cannot call focus() on an ".concat(
                      n._componentName,
                      " Element."
                    )
                  );
                document.activeElement &&
                  document.activeElement.blur &&
                  document.activeElement.blur(),
                  n._fakeInput.focus();
              }),
              (this._formSubmit = function () {
                for (
                  var e = n._component.parentElement;
                  e && "FORM" !== e.nodeName;

                )
                  e = e.parentElement;
                if (e) {
                  var t = document.createEvent("Event");
                  t.initEvent("submit", !0, !0), e.dispatchEvent(t);
                }
              }),
              (this._setLinkButtonFrameFocusState = function (e) {
                var t;
                if ("link-manage" === e)
                  null === (t = n._linkButtonFrame) ||
                    void 0 === t ||
                    t.setFocusable(!0);
                else if ("" === e) {
                  var r;
                  null === (r = n._linkButtonFrame) ||
                    void 0 === r ||
                    r.setFocusable(!1);
                }
              }),
              (this._unmountLinkButtonFrame = function () {
                n._linkButtonFrame &&
                  (n._linkButtonFrame.unmount(), (n._linkButtonFrame = void 0));
              });
            var r = t.options,
              o = t.component,
              i = t.listenerRegistry,
              a = t.elementTimings,
              c = t.emitEvent,
              u = t.getParent,
              l = t.hasRegisteredListener,
              p = (0, v.CE)(r, ["loader"]),
              m = p.controller,
              f = p.componentName,
              _ = p.publicOptions,
              h = p.betas;
            (this._componentName = f),
              (this._component = o),
              (this._controller = m),
              (this._listenerRegistry = i),
              (this._emitEvent = c),
              (this._getParent = u),
              (this._hasRegisteredListener = l);
            var y = (0, d.Gu)(rt, _ || {}, "create()"),
              b = y.value;
            y.warnings.forEach(function (e) {
              return n._controller.warn(e);
            });
            var w,
              k = b.paymentRequest,
              E = b.classes,
              S = b.issuingCard,
              P = "paymentRequestButton" === this._componentName;
            if (P) {
              if (!k)
                throw new g.No(
                  "You must pass in a stripe.paymentRequest object in order to use this Element."
                );
              this._paymentRequest = k;
              var A = p.locale;
              this._paymentRequest._registerElement(),
                this._paymentRequest._updateLocale(A);
            }
            if (this._isIssuingDisplayElement()) {
              var N = 0 === (h || []).length;
              if (!S)
                throw new Error(
                  "You must pass in an ID to the issuingCard option in order to use this Element."
                );
              if (N) {
                if (!("nonce" in b) || !("ephemeralKeySecret" in b))
                  throw new Error(
                    "You must set the nonce and ephemeralKeySecret options to use this Element."
                  );
              } else if (((w = S), -1 === Gt.indexOf(w)))
                throw new Error(
                  "Issuing card ".concat(S, " has not been retrieved.")
                );
            }
            this._createElement(p, b, a),
              (this._classes = Jt),
              this._computeCustomClasses(E || {}),
              (this._lastBackgroundColor = ""),
              (this._focused = !1),
              (this._empty = !P),
              (this._invalid = !1),
              (this._complete = !1),
              (this._autofilled = !1),
              (this._lastSubmittedAt = null);
          }
          return (
            (0, u.Z)(e, [
              {
                key: "update",
                value: function (e) {
                  var t = this,
                    n = (0, d.Gu)(rt, e || {}, "element.update()"),
                    r = n.value;
                  if (
                    (n.warnings.forEach(function (e) {
                      return t._controller.warn(e);
                    }),
                    r)
                  ) {
                    var o = r.classes,
                      i = (0, p.Z)(r, ["classes"]);
                    o &&
                      (this._removeClasses(),
                      this._computeCustomClasses(o),
                      this._updateClasses()),
                      this._updateFrameHeight(r),
                      Object.keys(i).length &&
                        (this._frame.update(i),
                        this._secondaryFrame && this._secondaryFrame.update(i));
                  }
                },
              },
              {
                key: "blur",
                value: function () {
                  if (this._isIssuingDisplayElement())
                    throw new g.No(
                      "Cannot call blur() on an ".concat(
                        this._componentName,
                        " Element."
                      )
                    );
                  this._frame.blur(), this._fakeInput.blur();
                },
              },
              {
                key: "clear",
                value: function () {
                  this._frame.clear();
                },
              },
              {
                key: "unmount",
                value: function () {
                  var e = this._getParent(),
                    t = this._label;
                  e &&
                    (this._listenerRegistry.removeEventListener(
                      e,
                      "click",
                      this.focus
                    ),
                    this._removeClasses()),
                    t &&
                      (this._listenerRegistry.removeEventListener(
                        t,
                        "click",
                        this.focus
                      ),
                      (this._label = null)),
                    this._secondaryFrame &&
                      (this._secondaryFrame.unmount(),
                      this._listenerRegistry.removeEventListener(
                        window,
                        "click",
                        this._handleOutsideClick
                      )),
                    this._linkButtonFrame &&
                      (this._linkButtonFrame.unmount(),
                      (this._linkButtonFrame = void 0)),
                    (this._fakeInput.disabled = !0),
                    this._frame.unmount();
                },
              },
              {
                key: "mount",
                value: function () {
                  if ((0, f.qW)(document, this._component)) {
                    this._controller.report("user_error.shadow_dom_mount", {
                      element: this._componentName,
                    });
                    var e = function () {
                      throw new g.No(
                        "Elements cannot be mounted in a ShadowRoot. Please mount in the Light DOM."
                      );
                    };
                    "test" === this._controller.keyMode()
                      ? e()
                      : setTimeout(e, 0);
                  }
                  if (this._paymentRequest) {
                    if (!this._paymentRequest._canMakePaymentResolved)
                      throw new g.No(
                        "For the paymentRequestButton Element, you must first check availability using paymentRequest.canMakePayment() before mounting the Element."
                      );
                    if (!this._paymentRequest._activeBackingLibraryName)
                      throw new g.No(
                        "The paymentRequestButton Element is not available in the current environment."
                      );
                  }
                  (this._mountTimestamp = new Xe.E()),
                    this._findPossibleLabel(),
                    this._updateClasses();
                },
              },
              {
                key: "_isIssuingDisplayElement",
                value: function () {
                  return (
                    "issuingCardNumberDisplay" === this._componentName ||
                    "issuingCardCvcDisplay" === this._componentName ||
                    "issuingCardExpiryDisplay" === this._componentName ||
                    "issuingCardPinDisplay" === this._componentName
                  );
                },
              },
              {
                key: "_updateClasses",
                value: function () {
                  var e = this._getParent();
                  e &&
                    (0, f.mb)(e, [
                      [this._classes.base, !0],
                      [this._classes.empty, this._empty],
                      [this._classes.focus, this._focused],
                      [this._classes.invalid, this._invalid],
                      [this._classes.complete, this._complete],
                      [this._classes.webkitAutofill, this._autofilled],
                    ]);
                },
              },
              {
                key: "_removeClasses",
                value: function () {
                  var e = this._getParent();
                  e &&
                    (0, f.mb)(e, [
                      [this._classes.base, !1],
                      [this._classes.empty, !1],
                      [this._classes.focus, !1],
                      [this._classes.invalid, !1],
                      [this._classes.complete, !1],
                      [this._classes.webkitAutofill, !1],
                    ]);
                },
              },
              {
                key: "_findPossibleLabel",
                value: function () {
                  var e = this._getParent();
                  if (e) {
                    var t,
                      n = e.getAttribute("id");
                    if (
                      (n &&
                        (t = document.querySelector(
                          "label[for='".concat(n, "']")
                        )),
                      t)
                    )
                      this._listenerRegistry.addEventListener(
                        e,
                        "click",
                        this.focus
                      );
                    else
                      for (
                        t = t || e.parentElement;
                        t && "LABEL" !== t.nodeName;

                      )
                        t = t.parentElement;
                    t
                      ? ((this._label = t),
                        this._listenerRegistry.addEventListener(
                          t,
                          "click",
                          this.focus
                        ))
                      : this._listenerRegistry.addEventListener(
                          e,
                          "click",
                          this.focus
                        );
                  }
                },
              },
              {
                key: "_computeCustomClasses",
                value: function (e) {
                  var t = {};
                  return (
                    Object.keys(e).forEach(function (n) {
                      if (!Jt[n])
                        throw new g.No(
                          ""
                            .concat(
                              n,
                              " is not a customizable class name.\nYou can customize: "
                            )
                            .concat(Object.keys(Jt).join(", "))
                        );
                      var r = e[n] || Jt[n];
                      t[n] = r.replace(/\./g, " ");
                    }),
                    (this._classes = (0, a.Z)((0, a.Z)({}, this._classes), t)),
                    this
                  );
                },
              },
              {
                key: "_setupEvents",
                value: function (e, t, n) {
                  var r,
                    o = this,
                    i = e.stripeJsLoadTimestamp,
                    a = (e.stripeCreateTimestamp, e.groupCreateTimestamp),
                    s = e.createTimestamp,
                    u = 0,
                    l = 0,
                    p = {
                      stripeJsLoad: i.getAsPosixTime(),
                      stripeCreate: s.getAsPosixTime(),
                      groupCreate: a.getAsPosixTime(),
                      create: s.getAsPosixTime(),
                    };
                  if (
                    (this._frame._on("link-token-change", function (e) {
                      e.hasToken
                        ? (o._frame._iframe.setAttribute("tabIndex", "-1"),
                          o._fakeInput.setAttribute("tabIndex", "-1"))
                        : (o._frame._iframe.removeAttribute("tabIndex"),
                          o._fakeInput.removeAttribute("tabIndex"));
                    }),
                    this._frame._on("update-outer-link-frame", function (e) {
                      var t,
                        n = e.nextButtonType;
                      (
                        null === (t = o._linkButtonFrame) || void 0 === t
                          ? void 0
                          : t.hasLoaded()
                      )
                        ? (o._linkButtonFrame.updateButton(n),
                          o._setLinkButtonFrameFocusState(n))
                        : (r = n);
                    }),
                    this._frame._on("outer-link-card-mount", function () {
                      o._linkButtonFrame = Kt({
                        frame: o._frame,
                        listenerRegistry: o._listenerRegistry,
                        parent: o._component,
                        locale: t.locale,
                        controller: o._controller,
                        style: null == n ? void 0 : n.style,
                        onLoad: function () {
                          var e;
                          r &&
                            (null === (e = o._linkButtonFrame) ||
                              void 0 === e ||
                              e.updateButton(r),
                            o._setLinkButtonFrameFocusState(r),
                            (r = ""));
                        },
                        onError: function (e) {
                          o._frame.send({
                            action: "stripe-eject-link",
                            payload: { reason: e },
                          }),
                            o._unmountLinkButtonFrame();
                        },
                      });
                    }),
                    this._frame._on("outer-link-card-unmount", function () {
                      return o._unmountLinkButtonFrame();
                    }),
                    this._frame._on("load", function (e) {
                      var t = e.source;
                      u++;
                      var n = o._getParent(),
                        r = it(n),
                        i = o._paymentRequest
                          ? o._paymentRequest._buttonTypeName
                          : null;
                      o._mountTimestamp &&
                        (p.mount = o._mountTimestamp.getAsPosixTime()),
                        o._frame.send({
                          action: "stripe-user-mount",
                          payload: {
                            timestamps: p,
                            loadCount: u,
                            matchFrame: t === o._frame._iframe.contentWindow,
                            rtl: r,
                            paymentRequestButtonType: i,
                          },
                        });
                    }),
                    this._secondaryFrame)
                  ) {
                    var d = this._secondaryFrame;
                    d._on("load", function (e) {
                      var t = e.source;
                      l++,
                        o._mountTimestamp &&
                          (p.mount = o._mountTimestamp.getAsPosixTime()),
                        d.send({
                          action: "stripe-user-mount",
                          payload: {
                            timestamps: p,
                            loadCount: l,
                            matchFrame: t === d._iframe.contentWindow,
                            rtl: !1,
                            paymentRequestButtonType: null,
                          },
                        });
                    });
                  }
                  this._frame._on("redirectfocus", function (e) {
                    var t = e.focusDirection,
                      n = (0, f.dh)(o._component, t);
                    n && n.focus();
                  }),
                    this._frame._on("focus", function () {
                      var e;
                      (o._focused = !0),
                        o._updateClasses(),
                        null === (e = o._linkButtonFrame) ||
                          void 0 === e ||
                          e.setFocusable(!0);
                    }),
                    this._frame._on("blur", function () {
                      var e;
                      (o._focused = !1),
                        o._updateClasses(),
                        null === (e = o._linkButtonFrame) ||
                          void 0 === e ||
                          e.setFocusable(!1),
                        o._lastSubmittedAt &&
                          "paymentRequestButton" === o._componentName &&
                          (o._controller.report(
                            "payment_request_button.sheet_visible",
                            { latency: o._lastSubmittedAt.getElapsedTime() }
                          ),
                          (o._lastSubmittedAt = null));
                    }),
                    this._frame._on("submit", function () {
                      if ("paymentRequestButton" === o._componentName) {
                        o._lastSubmittedAt = new Xe.E();
                        var e = !1,
                          t = !1;
                        Ut(),
                          o._emitEvent("click", {
                            preventDefault: function () {
                              o._controller.report(
                                "payment_request_button.default_prevented"
                              ),
                                e &&
                                  o._controller.warn(
                                    "event.preventDefault() was called after the payment sheet was shown. Make sure to call it synchronously when handling the `click` event."
                                  ),
                                (t = !0);
                            },
                          }),
                          !t &&
                            o._paymentRequest &&
                            (o._paymentRequest._elementShow(), (e = !0));
                      } else o._emitEvent("submit"), o._formSubmit();
                    }),
                    ["ready", "focus", "blur", "escape", "click"].forEach(
                      function (e) {
                        o._frame._on(e, function () {
                          o._emitEvent(e);
                        });
                      }
                    ),
                    this._frame._on("change", function (e) {
                      Ut();
                      var t = {},
                        n = j._0[o._componentName] || [];
                      ["error", "value", "empty", "complete"]
                        .concat((0, c.Z)(n))
                        .forEach(function (n) {
                          return (t[n] = e[n]);
                        }),
                        o._emitEvent("change", t),
                        (o._empty = t.empty),
                        (o._invalid = !!t.error),
                        (o._complete = t.complete),
                        o._updateClasses();
                    }),
                    this._frame._on("__privateIntegrationError", function (e) {
                      var t = e.message;
                      o._emitEvent("__privateIntegrationError", { message: t });
                    }),
                    this._frame._on("networkschange-start", function () {
                      o._hasRegisteredListener("networkschange") &&
                        o._controller.action
                          .isCardMetadataRequired({ groupId: t.groupId })
                          .then(function (e) {
                            return (
                              e && o._emitNetworksChangeEvent(null, !0),
                              o._controller.action.retrieveCardNetworks({
                                groupId: t.groupId,
                              })
                            );
                          })
                          .then(function (e) {
                            e && o._emitNetworksChangeEvent(e, !1);
                          });
                    }),
                    this._frame._on("dimensions", function (e) {
                      var t = o._getParent();
                      if (t) {
                        var n = (0, f.Dx)(t, null);
                        if (n) {
                          var r = parseFloat(n.getPropertyValue("height")),
                            i = e.height;
                          if (
                            "border-box" === n.getPropertyValue("box-sizing")
                          ) {
                            var a = parseFloat(
                                n.getPropertyValue("padding-top")
                              ),
                              c = parseFloat(
                                n.getPropertyValue("padding-bottom")
                              );
                            r =
                              r -
                              parseFloat(n.getPropertyValue("border-top")) -
                              parseFloat(n.getPropertyValue("border-bottom")) -
                              a -
                              c;
                          }
                          var s = Vt(r),
                            u = Vt(i);
                          0 !== r &&
                            s < u &&
                            o._controller.report("wrapper_height_mismatch", {
                              height: u,
                              outer_height: s,
                            });
                          var l = o._component.getBoundingClientRect().height,
                            p = Vt(l);
                          0 !== l &&
                            0 !== i &&
                            p !== u &&
                            (o._frame.updateStyle({
                              height: "".concat(i, "px"),
                            }),
                            o._controller.report("iframe_height_update", {
                              height: u,
                              calculated_height: p,
                            }));
                        }
                      }
                    }),
                    this._frame._on("autofill", function () {
                      var e = o._getParent();
                      if (e) {
                        var t = e.style.backgroundColor,
                          n = t === Wt || "rgb(250, 255, 189)" === t;
                        (o._lastBackgroundColor = n
                          ? o._lastBackgroundColor
                          : t),
                          (e.style.backgroundColor = Wt),
                          (o._autofilled = !0),
                          o._updateClasses();
                      }
                    }),
                    this._frame._on("autofill-cleared", function () {
                      var e = o._getParent();
                      (o._autofilled = !1),
                        e && (e.style.backgroundColor = o._lastBackgroundColor),
                        o._updateClasses();
                    }),
                    this._frame._on("update-outer-style", function (e) {
                      Object.keys(e).forEach(function (t) {
                        o._component.style.setProperty(t, e[t]);
                      });
                    });
                },
              },
              {
                key: "_emitNetworksChangeEvent",
                value: function (e, t) {
                  this._emitEvent("networkschange", {
                    networks: e,
                    loading: t,
                  });
                },
              },
              {
                key: "_handleOutsideClick",
                value: function () {
                  this._secondaryFrame &&
                    this._secondaryFrame.send({
                      action: "stripe-outside-click",
                      payload: {},
                    });
                },
              },
              {
                key: "_updateFrameHeight",
                value: function (e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = e.style;
                  if ("paymentRequestButton" === this._componentName) {
                    var r = (n && n.paymentRequestButton) || {},
                      o = r.height,
                      i = "string" == typeof o ? o : void 0;
                    (t || i) &&
                      (this._frame.updateStyle({
                        height: i || this._lastHeight || G,
                        minHeight: "auto",
                      }),
                      (this._lastHeight = i || this._lastHeight));
                  } else {
                    var a = (n && n.base) || {},
                      c = a.lineHeight,
                      s = a.fontSize,
                      u = a.padding,
                      l =
                        "string" != typeof c || isNaN(parseFloat(c))
                          ? void 0
                          : c,
                      p = "string" == typeof s ? s : void 0,
                      d = "string" == typeof u ? u : void 0;
                    if (
                      (p &&
                        !Xt(p) &&
                        this._controller.warn(
                          "The fontSize style you specified (".concat(
                            p,
                            ") is not in px. We do not recommend using relative css units, as they will be calculated relative to our iframe's styles rather than your site's."
                          )
                        ),
                      t || l || p)
                    ) {
                      var m =
                          -1 === w.T2.indexOf(this._componentName)
                            ? void 0
                            : d || this._lastPadding,
                        _ = (0, f.Tf)(
                          l || this._lastHeight,
                          p || this._lastFontSize,
                          m
                        );
                      this._frame.updateStyle({ height: _ }),
                        (this._lastFontSize = p || this._lastFontSize),
                        (this._lastHeight = l || this._lastHeight),
                        (this._lastPadding = m);
                    }
                  }
                },
              },
              {
                key: "_createElement",
                value: function (e, t, n) {
                  var r = this,
                    o = (e.controller, e.publicOptions, e.componentName),
                    i = e.groupId,
                    c = (0, p.Z)(e, [
                      "controller",
                      "publicOptions",
                      "componentName",
                      "groupId",
                    ]),
                    s =
                      (t.classes,
                      t.paymentRequest,
                      (0, p.Z)(t, ["classes", "paymentRequest"])),
                    u = this._component,
                    l = ut(ct.Kb);
                  (0, f.yq)(u, lt);
                  var d = it(document.body),
                    m = ot[o],
                    h = (0, a.Z)((0, a.Z)((0, a.Z)({}, c), s), {}, { rtl: d }),
                    y = this._controller.createElementFrame(m, o, i, h);
                  if (
                    (y._on("load", function () {
                      l.disabled = !1;
                    }),
                    this._listenerRegistry.addEventListener(
                      l,
                      "focus",
                      function () {
                        y.focus();
                      }
                    ),
                    y.appendTo(u),
                    j._y[o])
                  ) {
                    var v = j._y[o].secondary,
                      g = this._controller.createSecondaryElementFrame(
                        m,
                        v,
                        o,
                        i,
                        h
                      );
                    g &&
                      g.on &&
                      g.on("height-change", function (e) {
                        g.updateStyle({ height: "".concat(e.height, "px") });
                      }),
                      (this._secondaryFrame = g),
                      g.appendTo(u),
                      this._listenerRegistry.addEventListener(
                        window,
                        "click",
                        function () {
                          return r._handleOutsideClick();
                        }
                      );
                  }
                  if (
                    (u.appendChild(l), _.Ah && o !== w.Yj.paymentRequestButton)
                  ) {
                    var b = (function () {
                      var e = ut(ct.tk);
                      return e.setAttribute("tabindex", "-1"), e;
                    })();
                    u.appendChild(b);
                  }
                  (this._frame = y),
                    (this._fakeInput = l),
                    this._setupEvents(n, e, t),
                    this._updateFrameHeight(t, !0);
                },
              },
            ]),
            e
          );
        })(),
        $t = Qt,
        en = o(7904),
        tn = {
          amount: d.Rx,
          currency: (0, d.kw)("USD"),
          logoColor: (0, d.jt)((0, d.kw)("primary", "black", "white")),
          fontColor: (0, d.jt)(d.Z_),
          fontSize: (0, d.jt)(d.Z_),
          textAlign: (0, d.jt)(d.Z_),
          stripeMerchantId: (0, d.jt)(d.Z_),
        },
        nn = (0, d.mC)(tn),
        rn = function (e) {
          var t = !1;
          window.Promise || ((t = !0), (window.Promise = D.J));
          var n = e();
          return t && window.Promise === D.J && delete window.Promise, n;
        },
        on = function () {
          return rn(function () {
            return o.e(1).then(o.bind(o, 3563));
          });
        },
        an = function (e) {
          var t,
            n = e.options,
            r = (0, p.Z)(e, ["options"]),
            i = e.emitEvent,
            s = e.listenerRegistry,
            u = n.controller,
            l = n.componentName,
            m = n.publicOptions,
            f = n.groupId,
            _ = new Xe.E(),
            h = function (e) {
              var t = (0, d.Gu)(nn, e || {}, "create()"),
                n = t.value,
                r = t.warnings;
              if (!Math.floor(n.amount) === n.amount)
                throw new g.No(
                  "'Amount' must be a whole integer number that represents the lowest denomination (cents)."
                );
              return (
                r.forEach(function (e) {
                  return u.warn(e);
                }),
                n
              );
            },
            y = h(m),
            b = function (e, n) {
              return e.apply(void 0, [t].concat((0, c.Z)(n)));
            },
            w = [],
            k = function (e) {
              return function () {
                for (
                  var n = arguments.length, r = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  r[o] = arguments[o];
                t ? b(e, r) : w.push([e, r]);
              };
            },
            E = function () {};
          D.J.all([
            rn(function () {
              return o.e(209).then(o.bind(o, 2019));
            }),
            on(),
          ]).then(
            function (e) {
              var n = (0, en.Z)(e, 2),
                o = n[0],
                i = n[1],
                c = o.default;
              E = i.unmountModal;
              var p = (0, a.Z)(
                (0, a.Z)({}, r),
                {},
                {
                  options: {
                    groupId: f,
                    controller: u,
                    componentName: l,
                    publicOptions: y,
                  },
                  mountModal: function (e) {
                    return i.mountModal({
                      controller: u,
                      listenerRegistry: s,
                      url: e,
                    });
                  },
                }
              );
              (t = c(p)),
                u.report("affirm_message.loaded", {
                  load_time: _.getElapsedTime(),
                  currency: y.currency,
                }),
                (function () {
                  for (; w.length; ) {
                    var e = w.shift(),
                      t = (0, en.Z)(e, 2),
                      n = t[0],
                      r = t[1];
                    b(n, r);
                  }
                })();
            },
            function (e) {
              u.report("affirm_message.import_error", { error: e });
            }
          );
          var S = function (e) {
            return function () {
              throw new g.No(e);
            };
          };
          return {
            mount: k(function (e) {
              e.mount(y), i("mounted");
            }),
            unmount: k(function (e) {
              E(), e.unmount();
            }),
            update: k(function (e, t) {
              var n = (0, v.TS)(y, t);
              (y = h(n)), e.update(y);
            }),
            focus: S("Focus is not supported by affirmMessage."),
            blur: S("Blur is not supported by affirmMessage."),
            clear: S("Clear is not supported by affirmMessage."),
          };
        },
        cn = {
          amount: d.Rx,
          currency: (0, d.kw)("USD", "AUD", "CAD", "GBP", "NZD", "EUR"),
          badgeTheme: (0, d.jt)(
            (0, d.kw)(
              "black-on-mint",
              "black-on-white",
              "mint-on-black",
              "white-on-black"
            )
          ),
          introText: (0, d.jt)(
            (0, d.kw)("In", "in", "Or", "or", "Pay", "pay", "Pay in", "pay in")
          ),
          isEligible: (0, d.jt)(d.Xg),
          isCartEligible: (0, d.jt)(d.Xg),
          lockupTheme: (0, d.jt)((0, d.kw)("black", "white", "mint")),
          logoType: (0, d.jt)((0, d.kw)("badge", "lockup")),
          max: (0, d.jt)(d.Rx),
          min: (0, d.jt)(d.Rx),
          modalLinkStyle: (0, d.jt)(
            (0, d.kw)("circled-info-icon", "more-info-text", "learn-more-text")
          ),
          modalTheme: (0, d.jt)((0, d.kw)("mint", "white")),
          showInterestFree: (0, d.jt)(d.Xg),
          showLowerLimit: (0, d.jt)(d.Xg),
          showUpperLimit: (0, d.jt)(d.Xg),
          showWith: (0, d.jt)(d.Xg),
        },
        sn = (0, d.mC)(cn),
        un = function () {
          return rn(function () {
            return o.e(259).then(o.bind(o, 7128));
          });
        },
        ln = function (e) {
          var t,
            n = e.emitEvent,
            r = e.options,
            i = r.controller,
            a = r.locale,
            s = r.publicOptions,
            u = new Xe.E(),
            l = function (e) {
              var t = (0, d.Gu)(sn, e || {}, "create()"),
                n = t.value;
              return (
                t.warnings.forEach(function (e) {
                  return i.warn(e);
                }),
                n
              );
            },
            p = l(s),
            m = function (e, n) {
              return e.apply(void 0, [t].concat((0, c.Z)(n)));
            },
            f = [],
            _ = function (e) {
              return function () {
                for (
                  var n = arguments.length, r = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  r[o] = arguments[o];
                t ? m(e, r) : f.push([e, r]);
              };
            },
            h = function () {};
          D.J.all([
            rn(function () {
              return o.e(578).then(o.bind(o, 2562));
            }),
            un(),
          ]).then(
            function (r) {
              var o = (0, en.Z)(r, 2),
                c = o[0],
                s = o[1],
                l = c.default;
              h = s.unmountModal;
              var d = e.component,
                _ = e.listenerRegistry;
              (t = l({
                component: d,
                mountModal: function (e, t) {
                  return s.mountModal({
                    controller: i,
                    listenerRegistry: _,
                    locale: e,
                    modalTheme: t,
                  });
                },
                locale: a,
                listenerRegistry: _,
              })),
                i.report("afterpay_message.loaded", {
                  load_time: u.getElapsedTime(),
                  locale: a,
                  currency: p.currency,
                }),
                (function () {
                  for (; f.length; ) {
                    var e = f.shift(),
                      t = (0, en.Z)(e, 2),
                      n = t[0],
                      r = t[1];
                    m(n, r);
                  }
                })(),
                n("ready");
            },
            function (e) {
              i.report("afterpay_message.import_error", { error: e });
            }
          );
          var y = function (e) {
            return function () {
              throw new g.No(e);
            };
          };
          return {
            mount: _(function (e) {
              e.mount(p);
            }),
            unmount: _(function (e) {
              h(), e.unmount();
            }),
            update: _(function (e, t) {
              var n = (0, v.TS)(p, t);
              (p = l(n)), e.update(p);
            }),
            focus: y("Focus is not supported by afterpayClearpayMessage."),
            blur: y("Blur is not supported by afterpayClearpayMessage."),
            clear: y("Clear is not supported by afterpayClearpayMessage."),
          };
        },
        pn = {
          amount: d.MZ,
          currency: (0, d.kw)(
            "USD",
            "GBP",
            "EUR",
            "DKK",
            "NOK",
            "SEK",
            "AUD",
            "CAD",
            "NZD"
          ),
          paymentMethods: (0, d.CT)((0, d.kw)("klarna", "afterpay_clearpay")),
          countryCode: (0, d.kw)(
            "US",
            "CA",
            "AU",
            "NZ",
            "GB",
            "IE",
            "FR",
            "ES",
            "DE",
            "AT",
            "BE",
            "DK",
            "FI",
            "IT",
            "NL",
            "NO",
            "SE"
          ),
          darkMode: (0, d.jt)(d.Xg),
          metaData: (0, d.jt)(
            (0, d.mC)({ messagingClientReferenceId: (0, d.AG)(d.Z_) })
          ),
        },
        dn = (0, d.mC)(pn),
        mn = function (e) {
          var t,
            n = e.emitEvent,
            r = e.options,
            i = r.controller,
            s = r.locale,
            u = r.publicOptions,
            l = s ? (0, Ke.jR)(s) : "en",
            p = new Xe.E(),
            m = function (e) {
              var t = (0, d.Gu)(dn, e || {}, "create()"),
                n = t.value;
              return (
                t.warnings.forEach(function (e) {
                  return i.warn(e);
                }),
                n
              );
            },
            f = m(u),
            _ = function (e, n) {
              return e.apply(void 0, [t].concat((0, c.Z)(n)));
            },
            h = [],
            y = function (e) {
              return function () {
                for (
                  var n = arguments.length, r = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  r[o] = arguments[o];
                t ? _(e, r) : h.push([e, r]);
              };
            },
            b = function () {};
          D.J.all([
            rn(function () {
              return o.e(429).then(o.bind(o, 476));
            }),
            rn(function () {
              return o.e(557).then(o.bind(o, 581));
            }),
          ]).then(
            function (r) {
              var o,
                c,
                s = (0, en.Z)(r, 2),
                u = s[0],
                d = s[1],
                m = u.default;
              b = d.unmountModal;
              var y = e.component,
                v = e.listenerRegistry;
              (t = m({
                component: y,
                mountModal: function (e) {
                  return d.mountModal({
                    controller: i,
                    listenerRegistry: v,
                    locale: e,
                    publicOptions: f,
                  });
                },
                locale: l,
                listenerRegistry: v,
              })),
                i.report(
                  "unified_message.loaded",
                  (0, a.Z)(
                    {
                      load_time: p.getElapsedTime(),
                      locale: l,
                      amount: f.amount,
                      currency: f.currency,
                      paymentMethods: f.paymentMethods,
                      countryCode: f.countryCode,
                    },
                    (null === (o = f.metaData) || void 0 === o
                      ? void 0
                      : o.messagingClientReferenceId) && {
                      messagingClientReferenceId:
                        null === (c = f.metaData) || void 0 === c
                          ? void 0
                          : c.messagingClientReferenceId,
                    }
                  )
                ),
                (function () {
                  for (; h.length; ) {
                    var e = h.shift(),
                      t = (0, en.Z)(e, 2),
                      n = t[0],
                      r = t[1];
                    _(n, r);
                  }
                })(),
                n("ready");
            },
            function (e) {
              i.report("unified_message.import_error", { error: e });
            }
          );
          var w = function (e) {
            return function () {
              throw new g.No(e);
            };
          };
          return {
            mount: y(function (e) {
              e.mount(f);
            }),
            unmount: y(function (e) {
              b(), e.unmount();
            }),
            update: y(function (e, t) {
              var n = (0, v.TS)(f, t);
              (f = m(n)), e.update(f);
            }),
            focus: w("Focus is not supported by paymentMethodMessaging."),
            blur: w("Blur is not supported by paymentMethodMessaging."),
            clear: w("Clear is not supported by paymentMethodMessaging."),
          };
        },
        fn = o(9289),
        _n = o(7792),
        hn = o(262),
        yn = o(3849),
        vn = {
          locale: (0, d.yv)("elements()"),
          fonts: (0, d.yv)("elements()"),
          defaultValues: (0, d.jt)((0, d.mC)({ email: d.Z_ })),
        },
        gn = (0, d.mC)(vn),
        bn = {
          locale: (0, d.yv)("elements()"),
          fonts: (0, d.yv)("elements()"),
          business: (0, d.jt)((0, d.mC)({ name: d.Z_ })),
          paymentMethodOrder: (0, d.jt)((0, d.CT)(d.Z_)),
          fields: (0, d.jt)(_n.mZ),
          readOnly: (0, d.jt)(d.Xg),
          terms: (0, d.jt)(_n.FC),
          wallets: (0, d.jt)(_n.xR),
          defaultValues: (0, d.jt)(_n.I2),
        },
        wn = Object.freeze({
          line1: (0, d.jt)((0, d.AG)(d.Z_)),
          line2: (0, d.jt)((0, d.AG)(d.Z_)),
          city: (0, d.jt)((0, d.AG)(d.Z_)),
          state: (0, d.jt)((0, d.AG)(d.Z_)),
          country: (0, d.jt)((0, d.AG)(d.Z_)),
          postal_code: (0, d.jt)((0, d.AG)(d.Z_)),
        }),
        kn = Object.freeze({
          name: (0, d.jt)((0, d.AG)(d.Z_)),
          firstName: (0, d.jt)((0, d.AG)(d.Z_)),
          lastName: (0, d.jt)((0, d.AG)(d.Z_)),
          address: (0, d.jt)((0, d.mC)(wn)),
          phone: (0, d.jt)((0, d.AG)(d.Z_)),
        }),
        En = Object.freeze({
          name: d.Z_,
          address: (0, d.mC)(wn),
          phone: (0, d.jt)((0, d.AG)(d.Z_)),
        }),
        Sn = {
          locale: (0, d.yv)("elements()"),
          fonts: (0, d.yv)("elements()"),
          mode: (0, d.or)((0, d.p3)("shipping"), (0, d.p3)("billing")),
          allowedCountries: (0, d.jt)((0, d.CT)(d.Z_)),
          autocomplete: (0, d.jt)(yn.tX),
          blockPoBox: (0, d.jt)(d.Xg),
          defaultValues: (0, d.jt)((0, d.mC)(kn)),
          contacts: (0, d.jt)((0, d.CT)((0, d.mC)(En))),
          fields: (0, d.jt)(yn.mZ),
          validation: (0, d.jt)(yn.qF),
          display: (0, d.jt)(yn.ef),
        },
        Pn = (0, d.mC)(Object.freeze(Sn)),
        An = (0, d.mC)(
          Object.freeze(
            (0, a.Z)(
              (0, a.Z)({}, Sn),
              {},
              { mode: (0, d.NM)("Mode cannot be updated.") }
            )
          )
        ),
        Nn = (0, d.mC)(
          Object.freeze(
            (0, a.Z)(
              (0, a.Z)({}, Sn),
              {},
              {
                mode: (0, d.NM)(
                  "The 'shippingAddress' Element does not support the 'mode' option, use 'address' Element instead."
                ),
                contacts: (0, d.NM)(
                  "The 'shippingAddress' Element does not support the 'contacts' option, use 'address' Element instead."
                ),
                display: (0, d.NM)(
                  "The 'shippingAddress' Element does not support the 'display' option, use 'address' Element instead."
                ),
                autocomplete: (0, d.jt)(
                  (0, d.mC)({ mode: (0, d.kw)("automatic", "disabled") })
                ),
              }
            )
          )
        ),
        Cn = function (e, t, n, r, o) {
          switch (e) {
            case "linkAuthentication":
              var i = (0, d.Gu)(gn, t, n),
                s = i.value;
              s.locale, s.fonts;
              return {
                value: (0, p.Z)(s, ["locale", "fonts"]),
                warnings: i.warnings,
              };
            case "payment":
              var u = (0, d.Gu)(
                  (function (e, t) {
                    var n = (0, a.Z)({}, bn);
                    return (
                      (0, y.uN)(t, y.M4.payment_element_beta_1) &&
                        ((n = (0, a.Z)(
                          (0, a.Z)({}, n),
                          {},
                          { appearance: (0, d.jt)(d.Ry), clientSecret: fn.Hv }
                        )),
                        e &&
                          (n = (0, a.Z)(
                            (0, a.Z)({}, n),
                            {},
                            { clientSecret: (0, d.jt)(fn.Hv) }
                          ))),
                      (0, y.uN)(t, y.M4.blocked_card_brands_beta_1) &&
                        !e &&
                        ((n.allowedCardBrands = (0, d.jt)(_n.jX)),
                        (n.disallowedCardBrands = (0, d.jt)(_n.jX))),
                      (0, y.uN)(
                        t,
                        y.M4.payment_element_vertical_layout_beta_1
                      ) && (n.layout = (0, d.jt)(_n.zf)),
                      (0, d.mC)(n)
                    );
                  })(r, o),
                  t,
                  n
                ),
                l = u.value,
                m = (l.locale, l.fonts, l.clientSecret),
                f = void 0 === m ? void 0 : m,
                _ = (0, p.Z)(l, ["locale", "fonts", "clientSecret"]),
                h = u.warnings;
              (0, y.uN)(o, y.M4.blocked_card_brands_beta_1) && (0, hn.VZ)(t);
              var v = [];
              return (
                (0, y.uN)(o, y.M4.payment_element_vertical_layout_beta_1) &&
                  (v = (0, hn._m)(t, r, n)),
                {
                  value: (0, a.Z)({ parsedIntentSecret: f }, _),
                  warnings: [].concat((0, c.Z)(h), (0, c.Z)(v)),
                }
              );
            case "shippingAddress":
              var g = (0, d.Gu)(Nn, t, n),
                b = g.value,
                w = (b.locale, b.fonts, (0, p.Z)(b, ["locale", "fonts"])),
                k = g.warnings;
              return (
                k.push(
                  "Shipping Address Element is now Address Element.\n          It is advised to switch to the Address Element. For more information,\n          see https://stripe.com/docs/elements/address-element.\n        "
                ),
                (0, hn.S6)(t),
                { value: w, warnings: k }
              );
            case "address":
              if (-1 !== n.indexOf("update")) {
                var E = (0, d.Gu)(An, t, n),
                  S = E.value;
                S.locale, S.fonts;
                return {
                  value: (0, p.Z)(S, ["locale", "fonts"]),
                  warnings: E.warnings,
                };
              }
              var P = (0, d.Gu)(Pn, t, n),
                A = P.value,
                N = (A.locale, A.fonts, (0, p.Z)(A, ["locale", "fonts"])),
                C = P.warnings;
              return (
                (0, hn.C1)(t),
                (0, hn.S6)(t),
                (0, hn.YR)(t),
                { value: N, warnings: C }
              );
            case "autocompleteSuggestions":
            case "achBankSearchResults":
              return { value: Object.freeze({}), warnings: [] };
            default:
              return (0, d.Rz)(e);
          }
        },
        In = function (e, t) {
          switch (e) {
            case "linkAuthentication":
            case "payment":
            case "shippingAddress":
            case "address":
              return (0, a.Z)(
                { height: "2px", margin: "-4px", width: "calc(100% + 8px)" },
                t
                  ? { opacity: "0", transition: "opacity 0.4s ease 0.1s" }
                  : null
              );
            case "autocompleteSuggestions":
            case "achBankSearchResults":
              return {
                height: "2px",
                margin: "-4px",
                width: "calc(100% + 8px)",
              };
            default:
              return (0, d.Rz)(e);
          }
        },
        Tn = function (e) {
          var t = e.wallet,
            n = e.options;
          if (n.controller.keyMode() === Me.Kl.unknown) return !1;
          var r =
              !n.publicOptions.hasOwnProperty("wallets") ||
              "never" !== n.publicOptions.wallets[t],
            o =
              (0, y.uN)(n.betas, "payment_element_beta_1") &&
              !(0, y.uN)(n.betas, "payment_element_apple_pay_beta_1");
          return r && !o;
        },
        Mn = function (e) {
          return (
            -1 !==
            [
              "linkAuthentication",
              "payment",
              "shippingAddress",
              "address",
            ].indexOf(e)
          );
        },
        jn = function (e) {
          var t = e.elementFrame,
            n = e.component,
            r = e.componentName,
            o = e.listenerRegistry,
            i = e.loaderEnabled,
            c = e.elementOptions,
            s = function (e) {
              if (!e) return null;
              var t = (function (e) {
                  var t = [],
                    n = (function e(n) {
                      var r = document.createElement("div");
                      return (
                        (0, f.yq)(r, n.style),
                        n.isShimmerNode && t.push(r),
                        Array.isArray(n.children) &&
                          n.children.forEach(function (t) {
                            return r.appendChild(e(t));
                          }),
                        r
                      );
                    })(e);
                  return (
                    (n.className = "__PrivateStripeElementLoader"),
                    { loaderComponent: n, shimmerNodes: t }
                  );
                })(e),
                n = t.loaderComponent,
                r = t.shimmerNodes;
              return (0, a.Z)(
                { loaderComponent: n },
                (function (e) {
                  var t,
                    n,
                    r = 3e3,
                    o = function () {
                      clearTimeout(t), clearTimeout(n);
                    };
                  return {
                    startAnimation: function () {
                      o();
                      var i = function (t) {
                        (0, f.Ql)(function () {
                          e.forEach(function (e) {
                            (e.style.transition =
                              "start" === t
                                ? "transform ".concat(r, "ms ease")
                                : ""),
                              (e.style.transform =
                                "start" === t
                                  ? "translateX(200%)"
                                  : "translateX(-100%)");
                          });
                        });
                      };
                      !(function e() {
                        i("start"),
                          (n = setTimeout(function () {
                            return i("stop");
                          }, r)),
                          (t = setTimeout(e, 3500));
                      })();
                    },
                    stopAnimation: o,
                  };
                })(r)
              );
            },
            u = new D.J(function (e) {
              var t = St;
              t && i
                ? (t._emit("get-element-loader-ui", {
                    componentName: r,
                    elementOptions: c,
                  }),
                  t._on("element-loader-ui-callback", function (t) {
                    var n = t.message,
                      o = n.componentName,
                      i = n.loaderUiNodes;
                    r === o && e(s(i));
                  }))
                : e(null);
            }),
            l = function (e) {
              return function () {
                u.then(function (t) {
                  e(t);
                });
              };
            },
            p = function (e) {
              e.height && (n.style.height = e.height);
            };
          return {
            show: l(function (e) {
              if (e) {
                var r = e.loaderComponent,
                  o = e.startAnimation;
                (r.style.opacity = "1"),
                  t.updateStyle({ opacity: "0" }),
                  (n.style.height = r.style.height),
                  n.appendChild(r),
                  o(),
                  t._on("set_styles", p),
                  t._emit("loaderstart");
              }
            }),
            hide: l(function (e) {
              if (e) {
                var r = e.loaderComponent,
                  i = e.stopAnimation,
                  a = (0, B.$M)(function () {
                    t._off("set_styles", p),
                      (n.style.height = ""),
                      i(),
                      n.contains(r) && n.removeChild(r);
                  });
                o.addEventListener(r, "transitionend", a),
                  setTimeout(a, 600),
                  (r.style.opacity = "0");
              }
              t.updateStyle({ opacity: "1" });
            }),
            unmount: l(function (e) {
              if (e) {
                var r = e.loaderComponent,
                  o = e.stopAnimation;
                (r.style.opacity = "0"),
                  t.updateStyle({ opacity: "1" }),
                  t._off("set_styles", p),
                  (n.style.height = ""),
                  o(),
                  n.contains(r) && n.removeChild(r);
              } else t.updateStyle({ opacity: "1" });
            }),
          };
        },
        Rn = function (e, t) {
          var n = e.id,
            r = e.filters,
            o = e.permissions,
            i = e.return_url,
            a = { id: n, accounts: t, status: e.status };
          return (
            r && (a.filters = r),
            o && (a.permissions = o),
            i && (a.return_url = i),
            a
          );
        },
        On = "close",
        Zn = "complete",
        xn =
          ((0, d.or)((0, d.xe)("bcsess_"), (0, d.xe)("bcrepsess_")),
          function (e, t) {
            return new D.J(function (n) {
              var r;
              try {
                r = t.createLightboxFrame({
                  type: xe.NC.LINKED_ACCOUNTS_INNER,
                  options: e,
                });
              } catch (e) {
                return n({ error: { message: e.message } });
              }
              return (
                r.show(),
                r.fadeInBackdrop(),
                r._on(On, function () {
                  r.fadeOutBackdrop();
                  t.action
                    .localizeError({
                      type: "input_validation_error",
                      code: "financial_connections_session_cancelled",
                    })
                    .then(function (e) {
                      n({ error: e });
                    });
                }),
                r._on(Zn, function (e) {
                  r.destroy(!0)
                    .then(function () {
                      return (function (e, t) {
                        switch (e.linkAccountSessionCompleteResponse.type) {
                          case "object":
                            var n = e.linkedAccounts,
                              r = e.linkAccountSessionCompleteResponse,
                              o = e.consumer,
                              i = r.object,
                              c = i.id,
                              s = i.filters,
                              u = i.permissions,
                              l = i.payment_account,
                              p = i.bank_account_token,
                              m = i.return_url,
                              f = { id: c, linkedAccounts: n };
                            return (
                              p && (f.bankAccountToken = p),
                              l && !p && (f.paymentAccount = l),
                              s && (f.filters = s),
                              u && (f.permissions = u),
                              m && (f.returnUrl = m),
                              Promise.resolve({
                                linkAccountSession: f,
                                consumer: o,
                              })
                            );
                          case "error":
                            var _,
                              h = e.linkAccountSessionCompleteResponse.error;
                            return (
                              h.financial_connections_session &&
                                (_ = Rn(
                                  e.linkAccountSessionCompleteResponse.error
                                    .financial_connections_session,
                                  []
                                )),
                              t.action.localizeError(h).then(function (e) {
                                return {
                                  error: (0, a.Z)(
                                    (0, a.Z)({}, e),
                                    {},
                                    { financial_connections_session: _ }
                                  ),
                                };
                              })
                            );
                          default:
                            return (0,
                            d.Rz)(e.linkAccountSessionCompleteResponse);
                        }
                      })(e, t);
                    })
                    .then(function (e) {
                      n(e);
                    });
                }),
                null
              );
            });
          }),
        Ln = function (e, t) {
          return new D.J(function (n) {
            var r;
            try {
              r = t.createLightboxFrame({
                type: xe.NC.LINKED_ACCOUNTS_INNER,
                options: e,
              });
            } catch (e) {
              return n({ error: { message: e.message } });
            }
            return (
              r.show(),
              r.fadeInBackdrop(),
              r._on(On, function () {
                r.fadeOutBackdrop();
              }),
              r._on(Zn, function (e) {
                r.destroy(!0)
                  .then(function () {
                    return (function (e, t) {
                      switch (e.linkAccountSessionCompleteResponse.type) {
                        case "object":
                          var n = e.linkedAccounts,
                            r = e.linkAccountSessionCompleteResponse,
                            o = e.consumer,
                            i = Rn(r.object, n);
                          return Promise.resolve({
                            financialConnectionsSession: i,
                            consumer: o,
                          });
                        case "error":
                          var c,
                            s = e.linkAccountSessionCompleteResponse.error;
                          return (
                            s.financial_connections_session &&
                              (c = Rn(
                                e.linkAccountSessionCompleteResponse.error
                                  .financial_connections_session,
                                []
                              )),
                            t.action.localizeError(s).then(function (e) {
                              return {
                                error: (0, a.Z)(
                                  (0, a.Z)({}, e),
                                  {},
                                  { financial_connections_session: c }
                                ),
                              };
                            })
                          );
                        default:
                          return (0,
                          d.Rz)(e.linkAccountSessionCompleteResponse);
                      }
                    })(e, t);
                  })
                  .then(function (e) {
                    n(e);
                  });
              }),
              null
            );
          });
        },
        Dn = function (e) {
          var t = e.linkAccountSessionCreatorClientSecret,
            n = e.linkAccountSessionCreatorType,
            r = e.linkAccountSessionCreatorId,
            o = e.controller,
            i = e.consumerSessionSecret,
            a = e.linkAccountSessionCreationParams,
            c = e.consumerPublishableKey,
            s = e.checkoutPriceAmount,
            u = e.email,
            l = e.linkMobilePhone,
            p = e.linkMobilePhoneCountry,
            d = e.useContinueButtonOnSuccess,
            m = e.instantDebitsIncentive;
          (0, f.xc)(o.warn);
          var _ = o._stripeAccount,
            h = o._apiVersion,
            y = o._apiKey;
          return (
            "link_payment_intent" === n &&
              c &&
              ((y = c), (_ = null), (h = null)),
            xn(
              {
                clientSecret: t,
                linkAccountSessionCreatorType: n,
                linkAccountSessionCreatorId: r,
                linkAccountSessionCreationParams: a,
                apiKey: y,
                consumerPublishableKey: c,
                consumerSessionSecret: i,
                stripeAccount: _,
                stripeVersion: h,
                checkoutPriceAmount: s,
                email: u,
                linkMobilePhone: l,
                linkMobilePhoneCountry: p,
                useContinueButtonOnSuccess: d,
                instantDebitsIncentive: m,
              },
              o
            )
          );
        },
        Bn = function (e, t) {
          return (function (e) {
            var t = e.linkAccountSessionCreatorClientSecret,
              n = e.linkAccountSessionCreatorType,
              r = e.linkAccountSessionCreatorId,
              o = e.controller,
              i = e.consumerSessionSecret,
              a = e.linkAccountSessionCreationParams,
              c = e.consumerPublishableKey,
              s = e.checkoutPriceAmount,
              u = e.email,
              l = e.linkMobilePhone,
              p = e.linkMobilePhoneCountry;
            (0, f.xc)(o.warn);
            var d = o._stripeAccount,
              m = o._apiVersion,
              _ = o._apiKey;
            return (
              "link_payment_intent" === n &&
                c &&
                ((_ = c), (d = null), (m = null)),
              Ln(
                {
                  clientSecret: t,
                  linkAccountSessionCreatorType: n,
                  linkAccountSessionCreatorId: r,
                  linkAccountSessionCreationParams: a,
                  apiKey: _,
                  consumerPublishableKey: c,
                  consumerSessionSecret: i,
                  stripeAccount: d,
                  stripeVersion: m,
                  checkoutPriceAmount: s,
                  email: u,
                  linkMobilePhone: l,
                  linkMobilePhoneCountry: p,
                  useContinueButtonOnSuccess: !1,
                },
                o
              )
            );
          })({
            linkAccountSessionCreatorClientSecret: t.clientSecret,
            linkAccountSessionCreatorType: "link_account_session",
            controller: e,
            consumerPublishableKey: null,
            checkoutPriceAmount: { amount: null, currency: null },
            email: null,
            linkMobilePhone: null,
            linkMobilePhoneCountry: null,
            useContinueButtonOnSuccess: !1,
          }).then(function (e) {
            return "error" in e
              ? e
              : { financialConnectionsSession: e.financialConnectionsSession };
          });
        },
        qn = function (e, t, n, r) {
          return Dn({
            linkAccountSessionCreatorClientSecret: e,
            linkAccountSessionCreatorType: "payment_intent",
            linkAccountSessionCreatorId: t,
            controller: n,
            linkAccountSessionCreationParams: { payment_method_data: r },
            consumerPublishableKey: null,
            checkoutPriceAmount: { amount: null, currency: null },
            email: null,
            linkMobilePhone: null,
            linkMobilePhoneCountry: null,
            useContinueButtonOnSuccess: !1,
          });
        },
        Fn = function (e, t, n, r) {
          return Dn({
            linkAccountSessionCreatorClientSecret: e,
            linkAccountSessionCreatorType: "setup_intent",
            linkAccountSessionCreatorId: t,
            controller: n,
            linkAccountSessionCreationParams: { payment_method_data: r },
            consumerPublishableKey: null,
            checkoutPriceAmount: { amount: null, currency: null },
            email: null,
            linkMobilePhone: null,
            linkMobilePhoneCountry: null,
            useContinueButtonOnSuccess: !1,
          });
        },
        Un = {
          country: "US",
          currency: "usd",
          total: { amount: 0, label: "" },
          requestPayerName: !0,
          requestPayerEmail: !1,
          requestPayerPhone: !1,
        },
        Gn = function (e, t, n, r) {
          var o = "applePay" === r ? "googlePay" : "applePay",
            i = new et({
              controller: e.controller,
              authentication: {
                apiKey: e.controller._apiKey,
                accountId: e.controller._stripeAccount || null,
              },
              mids: e.mids,
              rawOptions: (0, a.Z)(
                (0, a.Z)({}, Un),
                {},
                { disableWallets: ["browserCard", o] }
              ),
              betas: e.betas,
              queryStrategyOverride: null,
              listenerRegistry: t,
            });
          i._on("token", function (t) {
            e.controller.action
              .completeWalletConfirm({ type: "token", token: t.token.id })
              .then(function () {
                t.complete("success");
              })
              .catch(function () {
                t.complete("unexpected failure");
              });
          }),
            i._on("cancel", function () {
              e.controller.action.completeWalletConfirm({ type: "cancelled" });
            });
          var c = i.canMakePayment().then(function (e) {
            e &&
              e[r] &&
              (n.send({ action: "should-list-wallet", payload: { wallet: r } }),
              n._on("show-wallet", function (e) {
                (0, B.i3)(e) === r && i.show();
              }));
          });
          return { pr: i, canMakePaymentPromise: c };
        },
        Yn = o(7125),
        zn = { PAYMENT_INTENT: "payment_intent", SETUP_INTENT: "setup_intent" },
        Hn = function (e, t, n, r, o, i, a) {
          (function (e) {
            var t = e.linkAccountSessionCreatorClientSecret,
              n = e.linkAccountSessionCreatorType,
              r = e.createdBy,
              o = e.controller,
              i = e.attachRequired,
              a = e.institution,
              c = e.data,
              s = e.email,
              u = e.linkMobilePhone,
              l = e.linkMobilePhoneCountry,
              p = e.manualEntryOnly,
              d = e.searchSession,
              m = e.consumerSessionSecret,
              f = e.consumerPublishableKey;
            return Dn({
              linkAccountSessionCreatorClientSecret: t,
              linkAccountSessionCreatorType: n,
              linkAccountSessionCreatorId: r,
              controller: o,
              linkAccountSessionCreationParams: {
                attach_required: i,
                initial_institution: a,
                payment_method_data: c,
                manual_entry_only: p,
                search_session: d,
              },
              consumerSessionSecret: m,
              consumerPublishableKey: f,
              checkoutPriceAmount: { amount: null, currency: null },
              email: null != s ? s : null,
              linkMobilePhone: null != u ? u : null,
              linkMobilePhoneCountry: null != l ? l : null,
              useContinueButtonOnSuccess: !0,
            });
          })({
            linkAccountSessionCreatorClientSecret: r.clientSecret,
            linkAccountSessionCreatorType: zn[r.type],
            createdBy: r.id,
            controller: e.controller,
            attachRequired: !1,
            institution: t,
            data: { type: "us_bank_account" },
            searchSession: o,
            manualEntryOnly: n,
            consumerSessionSecret: i,
            consumerPublishableKey: a,
          }).then(function (t) {
            if ("error" in t)
              "financial_connections_session_cancelled" === t.error.code
                ? e.controller.action.completeLinkAccountSessionElements({
                    groupId: e.groupId,
                    error: Yn.zb,
                  })
                : e.controller.action.completeLinkAccountSessionElements({
                    groupId: e.groupId,
                    error: Yn.TH,
                  });
            else if (t.linkAccountSession.paymentAccount) {
              var n = t.linkAccountSession.paymentAccount;
              switch (n.object) {
                case "financial_connections.account":
                case "linked_account":
                  var r = n;
                  e.controller.action.completeLinkAccountSessionElements({
                    groupId: e.groupId,
                    bankAccount: {
                      sessionId: t.linkAccountSession.id,
                      displayName: r.display_name,
                      bankName: r.institution_name,
                      last4: r.last4 || "",
                      type: "instant",
                    },
                  });
                  break;
                case "financial_connections.bank_account":
                case void 0:
                  var o = n;
                  e.controller.action.completeLinkAccountSessionElements({
                    groupId: e.groupId,
                    bankAccount: {
                      sessionId: t.linkAccountSession.id,
                      displayName: "Bank account",
                      bankName: o.bank_name,
                      last4: o.last4,
                      type: "manual",
                    },
                  });
                  break;
                default:
                  (0, d.Rz)(n);
              }
            } else
              e.controller.action.completeLinkAccountSessionElements({
                groupId: e.groupId,
                error: Yn.zb,
              });
          });
        },
        Kn = function (e) {
          var t = e.options,
            n = e.institutionId,
            r = e.manualEntryOnly,
            o = e.parsedClientSecret,
            i = e.searchSession,
            a = e.consumerClientSecret,
            c = e.consumerPublishableKey;
          Hn(t, n, r, o, i, a, c);
        },
        Jn = function (e, t, n) {
          var r = e.createHiddenFrame(xe.NC.GOOGLE_MAPS_APP, {
            apiKey: "AIzaSyCab6eIMNih34mQb3XI_QWXagmF2_rvQAg",
            elementMode: n,
          });
          return (
            r._on("get-google-maps-predictions", function (e) {
              !(function (e, t) {
                r.send({
                  action: "get-google-maps-predictions",
                  payload: { data: { search: e, countryRestrictions: t } },
                });
              })(e.search, e.countryRestrictions);
            }),
            r._on("get-google-maps-details", function (e) {
              !(function (e) {
                r.send({
                  action: "get-google-maps-details",
                  payload: { data: { placeId: e } },
                });
              })(e.placeId);
            }),
            r._on("google-maps-callback", function (e) {
              var n = e.event,
                r = e.message;
              switch (n) {
                case "gotPredictions":
                  !(function (e) {
                    t.send({
                      action: "google-maps-predictions",
                      payload: { data: e },
                    });
                  })(r);
                  break;
                case "gotDetails":
                  !(function (e) {
                    t.send({
                      action: "google-maps-details",
                      payload: { data: e },
                    });
                  })(r);
              }
            }),
            r
          );
        },
        Wn = function (e) {
          e.parsedIntentSecret, e.appearance;
          return (0, p.Z)(e, ["parsedIntentSecret", "appearance"]);
        },
        Vn = function (e) {
          var t = e.controller,
            n = e.componentName,
            r = e.groupId,
            o = e.fonts,
            i = e.wait,
            a = e.publicOptions,
            c = e.controllingElement,
            s = e.controllingMode,
            u = e.mountedInternal,
            l = e.externalPaymentMethodTypes,
            p = {
              fonts: o,
              wait: i,
              rtl: it(document.body),
              publicOptions: Wn(a),
              controllingElement: c,
              controllingMode: s,
              mountedInternal: u,
              externalPaymentMethodTypes: l,
            },
            d = ct.P0[n];
          return t.createElementFrame(d, n, r, p);
        },
        Xn = function (e) {
          var t = e.props,
            n = e.componentName,
            r = e.controllingElement,
            o = e.controllingMode,
            i = e.ariaHidden,
            c = t.component,
            s = t.elementTimings,
            u = t.getParent,
            l = t.options,
            p = Vn(
              (0, a.Z)(
                (0, a.Z)({}, l),
                {},
                { componentName: n, controllingElement: r, controllingMode: o }
              )
            );
          p.appendTo(c),
            p.updateStyle(
              (0, a.Z)(
                (0, a.Z)({}, In(n, !1)),
                {},
                { position: "absolute", zIndex: "1" }
              )
            ),
            p._iframe.setAttribute("aria-hidden", i),
            p._on("load", function () {
              p.send({
                action: "stripe-user-mount",
                payload: {
                  timestamps: {
                    stripeJsLoad: s.stripeJsLoadTimestamp.getAsPosixTime(),
                    stripeCreate: s.stripeCreateTimestamp.getAsPosixTime(),
                    groupCreate: s.groupCreateTimestamp.getAsPosixTime(),
                    create: s.createTimestamp.getAsPosixTime(),
                    mount: new Xe.E().getAsPosixTime(),
                  },
                  rtl: it(u()),
                },
              });
            }),
            p._on("set_styles", function (e) {
              p.updateStyle(e);
            }),
            "achBankSearchResults" === n &&
              p._on("us-bank-account-v2-launch", function (e) {
                return Kn((0, a.Z)({ options: l }, e));
              });
        },
        Qn = function (e) {
          var t = e.controller,
            n = e.locale,
            r = e.isDarkMode,
            o = e.businessName,
            i = e.financialIncentive,
            a = t.createLightboxFrame({
              type: xe.NC.LINK_INFO_MODAL,
              options: {
                locale: n,
                isDarkMode: r,
                businessName: o,
                financialIncentive: i,
              },
            });
          a.show(), a.fadeInBackdrop();
          a._on("close", function () {
            a.fadeOutBackdrop(), a.destroy(!0);
          });
        },
        $n = function (e) {
          if ("object" == typeof e && e && e.hasOwnProperty("layout")) {
            var t = e.layout;
            if ("string" == typeof t) {
              if (-1 !== ["auto", "accordion", "tabs"].indexOf(t))
                return {
                  type: t,
                  defaultCollapsed: !1,
                  spacedAccordionItems: !1,
                };
            } else {
              var n = t.type,
                r = t.defaultCollapsed;
              if ("accordion" === n)
                return {
                  type: n,
                  defaultCollapsed: r,
                  spacedAccordionItems: t.spacedAccordionItems,
                };
              if (-1 !== ["auto", "tabs"].indexOf(n))
                return { type: n, defaultCollapsed: r };
            }
          }
          return {};
        },
        er = function (e, t) {
          return "object" == typeof e && e && e.hasOwnProperty(t) ? e[t] : null;
        },
        tr = function (e, t) {
          switch (t) {
            case "payment":
              return { payment: { layout: $n(e) } };
            case "address":
              return { address: { display: er(e, "display") } };
            default:
              return {};
          }
        },
        nr = function (e) {
          var t = e.component,
            n = e.listenerRegistry,
            r = e.elementTimings,
            o = e.getParent,
            i = e.emitEvent,
            c = e.options,
            s = e.selfDestruct,
            u = null,
            l = [],
            p = [],
            d = Vn(c),
            m =
              ("payment" === c.componentName && $n(c.publicOptions),
              -1 !== ["auto", "always"].indexOf(c.loader) &&
                Mn(c.componentName)),
            _ = jn({
              controller: c.controller,
              elementFrame: d,
              component: t,
              componentName: c.componentName,
              listenerRegistry: n,
              loaderEnabled: m,
              elementOptions: tr(c.publicOptions, c.componentName),
            });
          d._on("load-error", function (e) {
            i("loaderror", { error: e }), s();
          });
          var h = er(c.publicOptions, "autocomplete");
          if (
            ("shippingAddress" === c.componentName ||
              "address" === c.componentName) &&
            (null == h ? void 0 : h.mode) !== yn.t0.disabled
          ) {
            var y = c.publicOptions.mode || yn.gC;
            d._on("setup-stripe-google-maps-autocomplete", function () {
              !(function (e, t, n) {
                var r = Jn(e, t, n);
                t._on("get-google-maps-predictions", function (e) {
                  e.keyMode === yn.UH.stripe &&
                    r._emit("get-google-maps-predictions", e);
                }),
                  t._on("get-google-maps-details", function (e) {
                    e.keyMode === yn.UH.stripe &&
                      r._emit("get-google-maps-details", e);
                  });
              })(c.controller, d, y),
                Xn({
                  props: e,
                  componentName: "autocompleteSuggestions",
                  controllingElement: "addressElement",
                  controllingMode: y,
                });
            }),
              (null == h ? void 0 : h.mode) === yn.t0.google_maps_api &&
                (!(function (e, t, n) {
                  e.action.initGoogleMapsService({ apiKey: n }),
                    t._on("get-google-maps-predictions", function (n) {
                      n.keyMode === yn.UH.merchant &&
                        e.action.getGoogleMapsPredictions({
                          data: n,
                          frameId: t.id,
                        });
                    }),
                    t._on("get-google-maps-details", function (n) {
                      n.keyMode === yn.UH.merchant &&
                        e.action.getGoogleMapsDetails({
                          data: n,
                          frameId: t.id,
                        });
                    });
                })(c.controller, d, h.apiKey),
                Xn({
                  props: e,
                  componentName: "autocompleteSuggestions",
                  controllingElement: "addressElement",
                  controllingMode: y,
                }));
          }
          if ("payment" === c.componentName) {
            var g;
            if (c.publicOptions.parsedIntentSecret)
              c.controller.action.setupStoreForElementsGroup({
                clientSecret: c.publicOptions.parsedIntentSecret,
                customerOptions: null,
                locale: c.locale,
                groupId: c.groupId,
                appearance:
                  null !== (g = c.publicOptions.appearance) && void 0 !== g
                    ? g
                    : c.appearance,
                loader: c.loader,
                externalPaymentMethodTypes: c.externalPaymentMethodTypes,
              });
            var b = null,
              w = function () {
                return un().then(function (e) {
                  var t = e.mountModal,
                    n = e.unmountModal;
                  return (
                    l.push(function () {
                      n();
                    }),
                    t
                  );
                });
              };
            d._on("setup-afterpay-modal", function () {
              b || (b = w());
            }),
              d._on("mount-afterpay-modal", function (e) {
                var t = e.locale,
                  r = e.modalTheme;
                b || (b = w()),
                  b.then(function (e) {
                    e({
                      controller: c.controller,
                      listenerRegistry: n,
                      locale: t,
                      modalTheme: r,
                    });
                  });
              });
            var k = null,
              E = function () {
                return on().then(function (e) {
                  var t = e.mountModal,
                    n = e.unmountModal;
                  return (
                    l.push(function () {
                      n();
                    }),
                    t
                  );
                });
              };
            d._on("setup-affirm-modal", function () {
              k || (k = E());
            }),
              d._on("affirm-modal-open", function (e) {
                var t = e.link;
                k || (k = E()),
                  k.then(function (e) {
                    e({
                      controller: c.controller,
                      listenerRegistry: n,
                      url: t,
                    });
                  });
              }),
              d._on("setup-us-bank-account", function () {
                Xn({
                  props: e,
                  componentName: "achBankSearchResults",
                  controllingElement: "paymentElement",
                  ariaHidden: "true",
                });
              });
            var S = null;
            !S &&
              Tn({ wallet: "applePay", options: c }) &&
              (S = Gn(c, n, d, "applePay")),
              d._on("update-apple-pay", function (e) {
                var t;
                null === (t = S) || void 0 === t || t.pr.update(e);
              });
            var P = null;
            if (!P && Tn({ wallet: "googlePay", options: c })) {
              var A = (P = Gn(c, n, d, "googlePay")).pr._backingLibraries
                .GOOGLE_PAY;
              A && p.push(A._destroy);
            }
            if (
              (d._on("update-google-pay", function (e) {
                var t;
                null === (t = P) || void 0 === t || t.pr.update(e);
              }),
              P || S)
            ) {
              var N,
                C,
                I = c.groupId;
              c.controller.action.fetchingWallets({
                groupId: I,
                isComplete: !1,
              }),
                D.J.all([
                  null === (N = P) || void 0 === N
                    ? void 0
                    : N.canMakePaymentPromise,
                  null === (C = S) || void 0 === C
                    ? void 0
                    : C.canMakePaymentPromise,
                ]).then(function () {
                  c.controller.action.fetchingWallets({
                    groupId: I,
                    isComplete: !0,
                  });
                });
            }
            d._on("link-launch", function (e) {
              var t = e.institutionId,
                n = e.parsedClientSecret,
                r = e.consumerClientSecret,
                o = e.consumerPublishableKey,
                i = e.checkoutPriceAmount,
                a = e.email,
                s = e.linkMobilePhone,
                u = e.linkMobilePhoneCountry,
                l = e.instantDebitsIncentive;
              (function (e, t, n, r, o, i, a, c, s, u, l) {
                return Dn({
                  linkAccountSessionCreatorClientSecret: t,
                  linkAccountSessionCreatorType: "link_payment_intent",
                  linkAccountSessionCreatorId: n,
                  controller: r,
                  linkAccountSessionCreationParams: { initial_institution: e },
                  consumerSessionSecret: o,
                  consumerPublishableKey: i,
                  checkoutPriceAmount: a,
                  email: c,
                  linkMobilePhone: s,
                  linkMobilePhoneCountry: u,
                  useContinueButtonOnSuccess: !1,
                  instantDebitsIncentive: l,
                });
              })(
                t,
                n.clientSecret,
                n.id,
                c.controller,
                null != r ? r : void 0,
                o,
                i,
                a,
                s,
                u,
                l
              ).then(function (e) {
                if (!e.error) {
                  var t,
                    n = e.linkAccountSession,
                    o = e.consumer;
                  if (o && !r) {
                    var i;
                    c.controller.action.loginWithConsumerInfo({
                      consumerInfo: o,
                      groupId: c.groupId,
                    });
                    var a =
                      null === (i = o.paymentDetails[0]) || void 0 === i
                        ? void 0
                        : i.id;
                    a &&
                      ((t = o.consumerSession),
                      (0, v.G)(t.verification_sessions, function (e) {
                        var t = e.type,
                          n = e.state;
                        return "SIGNUP" === t && "STARTED" === n;
                      })) &&
                      c.controller.action.confirmInstantDebitsIncentiveForPaymentDetails(
                        { bankPaymentDetailsId: a, groupId: c.groupId }
                      );
                  } else
                    n.paymentAccount &&
                      c.controller.action.createBankPaymentDetails({
                        bankAccount: n.paymentAccount.id,
                        groupId: c.groupId,
                      });
                }
              });
            }),
              d._on("us-bank-account-v2-launch", function (e) {
                Kn((0, a.Z)({ options: c }, e));
              });
          }
          d._on("mount-link-info-modal", function (e) {
            Qn((0, a.Z)({ controller: c.controller }, e));
          }),
            (0, f.yq)(
              t,
              (0, a.Z)(
                (0, a.Z)({}, st.KC),
                {},
                { margin: "-4px 0", transition: "height .35s ease" }
              )
            ),
            d.appendTo(t),
            d.updateStyle(In(c.componentName, m)),
            d._on("load", function () {
              d.send({
                action: "stripe-user-mount",
                payload: {
                  timestamps: {
                    stripeJsLoad: r.stripeJsLoadTimestamp.getAsPosixTime(),
                    stripeCreate: r.stripeCreateTimestamp.getAsPosixTime(),
                    groupCreate: r.groupCreateTimestamp.getAsPosixTime(),
                    create: r.createTimestamp.getAsPosixTime(),
                    mount: u ? u.getAsPosixTime() : 0,
                  },
                  rtl: it(o()),
                },
              });
            }),
            ct.Nb.forEach(function (e) {
              d._on(e, function (t) {
                return i(e, t);
              });
            }),
            d._on("set_styles", function (e) {
              d.updateStyle(e);
            }),
            d._on("redirectfocus", function (e) {
              var n,
                r = e.focusDirection;
              null === (n = (0, f.dh)(t, r)) || void 0 === n || n.focus();
            }),
            d._on("submit", function () {
              i("submit");
              var e = t.closest("form");
              if (e) {
                var n = [
                  'button[type="submit"]',
                  'input[type="submit"]',
                  'input[type="image"]',
                ]
                  .map(function (t) {
                    return e.querySelector(t);
                  })
                  .filter(function (e) {
                    return !!e;
                  })[0];
                n && n.click();
              }
            });
          m &&
            d._on("ready", function () {
              _.hide();
            });
          return {
            update: function (e) {
              e.appearance &&
                c.controller.action.updateElementsOptions({
                  locale: void 0,
                  appearance: e.appearance,
                  groupId: c.groupId,
                }),
                d.update(e);
            },
            focus: function () {
              at(),
                d.focus(),
                d.send({ action: "stripe-user-focus", payload: {} });
            },
            blur: function () {
              d.blur();
            },
            clear: function () {
              d.clear();
            },
            mount: function () {
              u = new Xe.E();
              var e = o();
              e &&
                (m && (_.show(), l.push(_.unmount)),
                (0, f.mb)(e, [[ct.et, !0]]),
                l.push(function () {
                  (0, f.mb)(e, [[ct.et, !1]]);
                }));
            },
            unmount: function () {
              for (; l.length; ) l.pop()();
              d.unmount();
            },
            destroy: function () {
              for (; p.length; ) {
                var e;
                null === (e = p.pop()) || void 0 === e || e();
              }
            },
            collapse: function () {
              d.collapse();
            },
            _frame: d,
          };
        },
        rr = function (e) {
          var t = e.options,
            n = (0, p.Z)(e, ["options"]),
            r = t.controller,
            o = t.componentName,
            i = t.publicOptions,
            c = (0, p.Z)(t, ["controller", "componentName", "publicOptions"]),
            s = (function (e) {
              switch (e) {
                case "linkAuthentication":
                case "payment":
                case "shippingAddress":
                case "address":
                case "autocompleteSuggestions":
                case "achBankSearchResults":
                  return e;
                default:
                  throw new Error("Unexpected element type for implementation");
              }
            })(o);
          if (
            ["address", "shippingAddress"].indexOf(s) > -1 &&
            r.keyMode() === Me.Kl.unknown
          )
            throw new g.No(
              "It looks like you're using an older Stripe key. The Address Element is only available for use with a modern API key, which is prefixed with 'pk_live_' or 'pk_test_'.\n    You can roll your publishable key here: https://dashboard.stripe.com/account/apikeys"
            );
          var u = Cn(
            s,
            i || {},
            "elements.create('".concat(s, "')"),
            !1,
            t.betas
          );
          u.warnings.forEach(function (e) {
            return r.warn(e);
          });
          var l = ["payment", "linkAuthentication"].indexOf(o) > -1,
            d =
              "payment" === t.componentName &&
              (u.value.parsedIntentSecret || null);
          if (l && !t.clientSecret && !d)
            throw new g.No(
              "In order to create a ".concat(
                t.componentName,
                ' element, you must pass a valid PaymentIntent or SetupIntent client secret when creating the Elements group.\n\n  e.g. stripe.elements({clientSecret: "{{CLIENT_SECRET}}"})'
              )
            );
          var m = nr(
              (0, a.Z)(
                (0, a.Z)({}, n),
                {},
                {
                  options: (0, a.Z)(
                    (0, a.Z)({}, c),
                    {},
                    { controller: r, componentName: s, publicOptions: u.value }
                  ),
                }
              )
            ),
            f = m.update,
            _ = (0, p.Z)(m, ["update"]);
          return (0, a.Z)(
            {
              update: function (e) {
                var n = Cn(s, e || {}, "".concat(s, ".update()"), !0, t.betas);
                n.warnings.forEach(function (e) {
                  return r.warn(e);
                }),
                  f(n.value);
              },
            },
            _
          );
        },
        or = Object.freeze({
          header: (0, d.jt)((0, d.mC)({ text: (0, d.jt)(d.Z_) })),
          showOnAdd: (0, d.jt)((0, d.kw)("auto", "never")),
        }),
        ir = Object.freeze(
          (0, a.Z)(
            {
              clientSecret: hn.pu,
              descriptor: (0, d.jt)((0, d.kw)("cart", "bag", "basket")),
            },
            or
          )
        ),
        ar =
          (Object.freeze((0, a.Z)({}, (0, v.CE)(ir, ["clientSecret"]))),
          Object.freeze({
            price: (0, d.jt)(d.Z_),
            product: (0, d.jt)(d.Z_),
            quantity: (0, d.jt)(d.Rx),
          })),
        cr =
          (Object.freeze(
            (0, a.Z)(
              (0, a.Z)({}, ar),
              {},
              { quantity: d.Rx, outerRequestId: d.Rx }
            )
          ),
          ["ready", "change", "checkout"]),
        sr = "StripeElement",
        ur = {
          margin: "0",
          padding: "0",
          border: "none",
          display: "block",
          background: "transparent",
          position: "relative",
          opacity: "1",
        },
        lr = {
          visibility: "hidden",
          position: "fixed",
          top: "0px",
          left: "100%",
          width: "100%",
          height: "100%",
          "pointer-events": "none",
          "max-width": "none",
          "max-height": "none",
          "min-width": "none",
          "min-height": "none",
        },
        pr = {
          visibility: "visible",
          position: "fixed",
          top: "0px",
          left: "0px",
          "z-index": "99999",
          width: "100%",
          height: "100%",
          "pointer-events": "all",
          "max-width": "none",
          "max-height": "none",
          "min-width": "none",
          "min-height": "none",
        },
        dr = function (e) {
          var t = e.component,
            n = e.getParent,
            r = e.emitEvent,
            o = e.options,
            i = e.selfDestruct,
            c = {
              mounted: !1,
              frameReady: !1,
              visible: !1,
              showStarted: !1,
              releasePageScroll: null,
              restoreFocus: null,
              runOnUnmount: [],
              addRequestIdCounter: 0,
            };
          (0, f.yq)(t, ur);
          var s = (function (e) {
            var t = e.controller,
              n = e.componentName,
              r = e.groupId,
              o = {
                fonts: e.fonts,
                wait: e.wait,
                rtl: !1,
                publicOptions: e.publicOptions,
                controllingElement: e.controllingElement,
              };
            return t.createElementFrame(xe.NC.CART_ELEMENT, n, r, o);
          })(o);
          s.updateStyle(lr), s.appendTo(t);
          var u = function (e) {
              return function (t) {
                c.mounted && c.frameReady && e(t);
              };
            },
            l = u(function () {
              c.visible ||
                ((c.visible = !0),
                s.updateStyle(pr),
                s.show(),
                (c.releasePageScroll = (0, f.MV)()),
                (c.restoreFocus ? c.restoreFocus() : D.J.resolve()).then(
                  function () {
                    var e = (0, f.W3)(s._iframe),
                      t = e.lockedPromise,
                      n = e.lockedElements;
                    c.restoreFocus = function () {
                      return (0, f.gl)(t, n);
                    };
                  }
                ));
            }),
            p = u(function () {
              c.visible && (s.hide(), c.showStarted || (v(), b()));
            }),
            d = u(function (e) {
              s.cancelCheckout(e);
            }),
            m = function (e) {
              return function () {
                throw new g.No(e);
              };
            },
            _ = m("focus() is not supported by the cart Element."),
            h = m("blur() is not supported by the cart Element."),
            y = m("clear() is not supported by the cart Element.");
          s._on("load-error", function (e) {
            null == r || r("loaderror", { error: e }), null == i || i();
          }),
            s._on("ready", function () {
              c.frameReady = !0;
            }),
            cr.forEach(function (e) {
              s._on(e, function (t) {
                return null == r ? void 0 : r(e, t);
              });
            }),
            s._on("lineitemclick", function (e) {
              var t = e.url,
                n = !1;
              r("lineitemclick", {
                preventDefault: function () {
                  n = !0;
                },
                url: t,
              }),
                n || (window.location.href = t);
            }),
            s._on("show-start", function () {
              c.visible && (c.showStarted = !0);
            });
          var v = function () {
              var e, t;
              null === (e = c.releasePageScroll) || void 0 === e || e.call(c),
                (c.releasePageScroll = null),
                null === (t = c.restoreFocus) ||
                  void 0 === t ||
                  t.call(c).then(function () {
                    c.restoreFocus = null;
                  }),
                (c.showStarted = !1),
                (c.visible = !1);
            },
            b = function () {
              c.visible || s.updateStyle(lr);
            };
          return (
            s._on("hide-start", v),
            s._on("hide-complete", b),
            s._on("show", l),
            {
              update: function (e) {
                s.update(e);
              },
              focus: _,
              blur: h,
              clear: y,
              mount: function () {
                c.mounted = !0;
                var e = n();
                e &&
                  ((0, f.mb)(e, [[sr, !0]]),
                  c.runOnUnmount.push(function () {
                    (0, f.mb)(e, [[sr, !1]]);
                  }));
                var t = function () {
                  d();
                };
                window.addEventListener("beforeunload", t),
                  c.runOnUnmount.push(function () {
                    return window.removeEventListener("beforeunload", t);
                  });
                var r = function (e) {
                  "Escape" === e.code && p();
                };
                window.addEventListener("keydown", r),
                  c.runOnUnmount.push(function () {
                    return window.removeEventListener("keydown", r);
                  });
              },
              unmount: function () {
                for (var e, t; c.runOnUnmount.length; ) {
                  var n;
                  null === (n = c.runOnUnmount.pop()) || void 0 === n || n();
                }
                null === (e = c.releasePageScroll) || void 0 === e || e.call(c),
                  null === (t = c.restoreFocus) || void 0 === t || t.call(c),
                  (c.mounted = !1),
                  (c.releasePageScroll = null),
                  (c.restoreFocus = null),
                  s.unmount();
              },
              show: l,
              hide: p,
              addLineItem: function (e) {
                if (!c.frameReady || !c.mounted)
                  return D.J.resolve({ clientError: "initializing" });
                var t = ++c.addRequestIdCounter;
                return (
                  s.addLineItem(
                    (0, a.Z)(
                      (0, a.Z)({}, e),
                      {},
                      { quantity: e.quantity || 1, outerRequestId: t }
                    )
                  ),
                  new D.J(function (e) {
                    s._on("add-line-item-response", function n(r) {
                      var o = r.outerRequestId,
                        i = r.error;
                      o === t &&
                        (s._off("add-line-item-response", n),
                        e(i ? { error: i } : {}));
                    });
                  })
                );
              },
              cancelCheckout: d,
              _frame: s,
            }
          );
        },
        mr = function (e) {
          var t = e.options,
            n = (0, p.Z)(e, ["options"]),
            r = t.controller,
            o = t.publicOptions,
            i =
              (t.componentName,
              (0, p.Z)(t, ["controller", "publicOptions", "componentName"]));
          if (r.keyMode() === Me.Kl.unknown)
            throw new g.No(
              "It looks like you're using an older Stripe key. The Cart Element is only available for use with a modern API key, which is prefixed with 'pk_live_' or 'pk_test_'.\n      You can roll your publishable key here: https://dashboard.stripe.com/account/apikeys"
            );
          var c,
            s,
            u,
            l =
              ((c = o || {}),
              (s = "elements.create('cart', options)"),
              (0, d.Gu)(
                (0, d.mC)(ir),
                c,
                s,
                u ? { authenticatedOrigin: u } : null
              )),
            m = l.value,
            f = m.clientSecret,
            _ = (0, p.Z)(m, ["clientSecret"]);
          l.warnings.forEach(function (e) {
            return r.warn(e);
          });
          var h = {},
            y = function (e, t) {
              return (
                e.forEach(function (e) {
                  return r.warn(e);
                }),
                D.J.resolve({ clientError: t })
              );
            },
            v = dr(
              (0, a.Z)(
                (0, a.Z)({}, n),
                {},
                {
                  options: (0, a.Z)(
                    (0, a.Z)({}, i),
                    {},
                    { componentName: "cart", controller: r, publicOptions: _ }
                  ),
                }
              )
            ),
            b = v.update,
            w = v.cancelCheckout,
            k = v.addLineItem,
            E = (0, p.Z)(v, ["update", "cancelCheckout", "addLineItem"]);
          return (
            r.action
              .fetchCartSession({ clientSecret: f, groupId: t.groupId })
              .catch(function (t) {
                e.emitEvent("loaderror", { error: t }), e.selfDestruct();
              }),
            (0, a.Z)(
              (0, a.Z)({}, E),
              {},
              {
                update: function (e) {
                  var t = (function (e, t, n) {
                      return (0, d.Gu)(
                        (0, d.mC)(or),
                        e,
                        t,
                        n ? { authenticatedOrigin: n } : null
                      );
                    })(e || {}, "cart.update()"),
                    n = t.value;
                  t.warnings.forEach(function (e) {
                    return r.warn(e);
                  }),
                    b(n);
                },
                addLineItem: function (e) {
                  var t = (function (e, t) {
                      var n = (0, d.Gu)(
                        (0, d.mC)(ar),
                        e,
                        "cart.addLineItem()",
                        t ? { authenticatedOrigin: t } : null
                      );
                      return { value: n.value, warnings: n.warnings };
                    })(e || {}),
                    n = t.value,
                    r = t.warnings,
                    o = n.product || n.price;
                  if (o) {
                    if (
                      (function (e) {
                        var t = Date.now(),
                          n = h[e],
                          r = void 0 !== n && t - n < 200;
                        return r || (h[e] = t), r;
                      })(o)
                    )
                      return (
                        r.push(
                          "addLineItem() cannot be consecutively called within ".concat(
                            200,
                            " milliseconds for the same price or product."
                          )
                        ),
                        y(r, "throttled")
                      );
                  } else
                    r.push(
                      "addLineItem() must be provided either a product or price."
                    );
                  return r.length ? y(r, "integration") : k(n);
                },
                cancelCheckout: function (e) {
                  var t = "string" == typeof e,
                    n = t ? e : "";
                  t ||
                    r.warn(
                      "Expected a string passed to cancelCheckout(), but received ".concat(
                        typeof e,
                        "."
                      )
                    ),
                    w(n);
                },
              }
            )
          );
        },
        fr = ["ready", "focus", "blur", "escape"],
        _r = "StripeElement",
        hr = {
          margin: "0",
          padding: "0",
          border: "none",
          display: "block",
          background: "transparent",
          position: "relative",
          opacity: "1",
        },
        yr = { height: "2px", margin: "-4px", width: "calc(100% + 8px)" },
        vr = function (e) {
          var t = e.controller,
            n = e.eventName,
            r = e.time,
            o = e.timeLabel,
            i = e.reject,
            a = e.validateResolve,
            c = null,
            s = !1,
            u = !1;
          return (
            (c = setTimeout(function () {
              (u = !0),
                t.warn(
                  'Timed out waiting for a call to resolve(). If you listen to "'
                    .concat(
                      n,
                      '" events, then you must call event.resolve in the "'
                    )
                    .concat(n, '" handler within ')
                    .concat(o, ".")
                ),
                i();
            }, r)),
            function (e) {
              u
                ? t.warn(
                    "Call to resolve() was ignored because it has already timed out. Please ensure that resolve is called within ".concat(
                      o,
                      "."
                    )
                  )
                : s
                ? t.warn(
                    "Call to resolve() was ignored because it has already been called. Do not call resolve more than once."
                  )
                : (c && clearTimeout(c), (s = !0), a(e));
            }
          );
        },
        gr = Object.freeze({
          applePay: (0, d.jt)((0, d.kw)("always", "auto", "never")),
          googlePay: (0, d.jt)((0, d.kw)("always", "auto", "never")),
        }),
        br = Object.freeze({
          applePay: (0, d.jt)((0, d.kw)("black", "white", "white-outline")),
          googlePay: (0, d.jt)((0, d.kw)("black", "white")),
          paypal: (0, d.jt)(
            (0, d.kw)("gold", "blue", "silver", "white", "black")
          ),
        }),
        wr = Object.freeze({
          applePay: (0, d.jt)(
            (0, d.kw)(
              "add-money",
              "book",
              "buy",
              "checkout",
              "continue",
              "contribute",
              "donate",
              "order",
              "pay",
              "plain",
              "reload",
              "rent",
              "subscribe",
              "support",
              "tip",
              "top-up"
            )
          ),
          googlePay: (0, d.jt)(
            (0, d.kw)(
              "book",
              "buy",
              "checkout",
              "donate",
              "order",
              "pay",
              "plain",
              "subscribe"
            )
          ),
          paypal: (0, d.jt)((0, d.kw)("paypal", "checkout", "buynow", "pay")),
        }),
        kr = Object.freeze({
          locale: (0, d.yv)("elements()"),
          buttonHeight: (0, d.jt)((0, d.O)(25, 55)),
          layout: (0, d.jt)((0, d.kw)("auto", "horizontal", "vertical")),
          paymentMethodOrder: (0, d.jt)((0, d.CT)(d.Z_)),
          buttonTheme: (0, d.jt)((0, d.mC)(br)),
          buttonType: (0, d.jt)((0, d.mC)(wr)),
        }),
        Er =
          (Object.freeze(
            (0, a.Z)(
              (0, a.Z)({}, kr),
              {},
              { wallets: (0, d.jt)((0, d.mC)(gr)) }
            )
          ),
          Object.freeze({ name: d.Z_, amount: (0, d.M2)(0) })),
        Sr = Object.freeze({
          unit: (0, d.kw)("hour", "day", "business_day", "week", "month"),
          value: (0, d.M4)(0),
        }),
        Pr = Object.freeze({
          id: d.Z_,
          amount: (0, d.M2)(0),
          displayName: d.Z_,
          deliveryEstimate: (0, d.jt)(
            (0, d.mC)({
              maximum: (0, d.jt)((0, d.mC)(Sr)),
              minimum: (0, d.jt)((0, d.mC)(Sr)),
            })
          ),
        }),
        Ar = Object.freeze({
          allowedShippingCountries: (0, d.jt)((0, d.CT)(d.hN)),
          business: (0, d.jt)((0, d.mC)({ name: d.Z_ })),
          lineItems: (0, d.jt)((0, d.CT)((0, d.mC)(Er))),
          billingAddressRequired: (0, d.Wc)(d.Xg, function () {
            return !0;
          }),
          emailRequired: (0, d.jt)(d.Xg),
          phoneNumberRequired: (0, d.jt)(d.Xg),
          shippingAddressRequired: (0, d.jt)(d.Xg),
          shippingRates: (0, d.jt)((0, d.uw)("id")((0, d.CT)((0, d.mC)(Pr)))),
        }),
        Nr = Object.freeze({
          lineItems: (0, d.jt)((0, d.CT)((0, d.mC)(Er))),
          shippingRates: (0, d.jt)((0, d.uw)("id")((0, d.CT)((0, d.mC)(Pr)))),
        }),
        Cr = function (e, t) {
          var n = (0, d.Gu)(
              (0, d.mC)(Nr),
              e,
              "".concat(t, " resolve callback")
            ),
            r = n.value,
            o = n.warnings,
            i = r.shippingRates;
          if (i && !i.length)
            throw new g.No("You must specify `shippingRates`.");
          return { value: r, warnings: o };
        },
        Ir = function (e, t, n) {
          t.report("ece.apple_pay.session_creation_failed", { error: n }),
            e.abort();
          var r = n.message;
          "string" == typeof r && t.warn(r);
        },
        Tr = function (e, t, n, r) {
          return {
            amount: (0, pe.Fe)(e, n),
            label: t,
            type: r ? "pending" : "final",
          };
        },
        Mr = function (e) {
          return le(e, !1, []).filter(function (e) {
            return null !== e;
          });
        },
        jr = function (e) {
          var t = e.amount,
            n = e.billingAddressRequired,
            r = e.businessName,
            o = e.country,
            i = e.currency,
            a = e.emailRequired,
            s = e.lineItems,
            u = e.phoneNumberRequired,
            l = e.shippingAddressRequired,
            p = e.shippingRates,
            d = [].concat(
              (0, c.Z)(a ? ["email"] : []),
              (0, c.Z)(u ? ["phone"] : []),
              (0, c.Z)(l ? ["postalAddress"] : [])
            ),
            m = n ? ["postalAddress"] : [],
            f =
              null == p
                ? void 0
                : p.map(function (e) {
                    return (function (e, t) {
                      var n = e.amount,
                        r = (e.deliveryEstimate, e.displayName),
                        o = e.id;
                      return {
                        label: r,
                        detail: "Arrives in 5 to 7 business days",
                        amount: (0, pe.Fe)(n, t),
                        identifier: o,
                      };
                    })(e, i);
                  }),
            _ =
              null == s
                ? void 0
                : s.map(function (e) {
                    var t = e.amount,
                      n = e.name;
                    return Tr(t, n, i);
                  });
          return {
            countryCode: o,
            currencyCode: i.toUpperCase(),
            lineItems: _,
            merchantCapabilities: ["supports3DS"],
            requiredBillingContactFields: m,
            requiredShippingContactFields: d,
            shippingMethods: f,
            supportedNetworks: Mr(o),
            total: Tr(t, r, i),
          };
        },
        Rr = function (e) {
          var t = e.controller,
            n = e.eventHandlers,
            r = e.groupId,
            o = e.listenerRegistry,
            i = { isPaymentSheetShowing: !1 },
            c = function (e, r) {
              o.addEventListener(
                e,
                "validatemerchant",
                A(
                  (function (e) {
                    var t = e.privateSession,
                      n = e.controller,
                      r = e.displayName,
                      o = e.isPaymentSheetShowing;
                    return function (e) {
                      n.action
                        .createApplePaySession({
                          data: {
                            validation_url: e.validationURL,
                            domain_name: window.location.hostname,
                            display_name: r,
                          },
                          usesExpressCheckoutElement: !0,
                        })
                        .then(
                          function (e) {
                            switch (e.type) {
                              case "object":
                                if (!o()) return;
                                t.completeMerchantValidation(
                                  JSON.parse(e.object.session)
                                );
                                break;
                              case "error":
                                Ir(t, n, e.error);
                                break;
                              default:
                                (0, d.Rz)(e);
                            }
                          },
                          function (e) {
                            return Ir(t, n, e);
                          }
                        );
                    };
                  })({
                    privateSession: e,
                    controller: t,
                    displayName: r,
                    isPaymentSheetShowing: function () {
                      return i.isPaymentSheetShowing;
                    },
                  })
                )
              ),
                o.addEventListener(
                  e,
                  "cancel",
                  A(function () {
                    (i.isPaymentSheetShowing = !1), n.cancel();
                  })
                );
              o.addEventListener(
                e,
                "shippingcontactselected",
                A(function (t) {
                  t.shippingContact;
                  var r = {
                    paymentMethodType: "apple_pay",
                    name: "test name",
                    address: {},
                    resolve: function (t) {
                      e.completeShippingContactSelection({
                        newTotal: Tr(2500, "new total", "usd"),
                      });
                    },
                    reject: function () {
                      e.completeShippingContactSelection({
                        newTotal: Tr(2500, "new total", "usd"),
                      });
                    },
                  };
                  n.shippingAddressChange(r);
                })
              );
              o.addEventListener(
                e,
                "shippingmethodselected",
                A(function (t) {
                  t.shippingMethod;
                  var r = {
                    paymentMethodType: "apple_pay",
                    shippingRate: {
                      id: "free-shipping",
                      displayName: "Free shipping",
                      amount: 0,
                    },
                    resolve: function (t) {
                      e.completeShippingMethodSelection({
                        newTotal: Tr(2500, "new total", "usd"),
                      });
                    },
                    reject: function () {
                      e.completeShippingMethodSelection({
                        newTotal: Tr(2500, "new total", "usd"),
                      });
                    },
                  };
                  n.shippingRateChange(r);
                })
              );
            };
          return {
            showButton: function () {
              return t.action.showApplePayButton({
                groupId: r,
                showApplePayButton: !0,
              });
            },
            clickHandler: function (e, n) {
              var r,
                o = window.ApplePaySession;
              if (o) {
                var s =
                    (null === (r = n.business) || void 0 === r
                      ? void 0
                      : r.name) || e.businessName,
                  u = new o(
                    4,
                    jr(
                      (0, a.Z)(
                        (0, a.Z)((0, a.Z)({}, e), n),
                        {},
                        { businessName: s }
                      )
                    )
                  );
                c(u, s), u.begin(), (i.isPaymentSheetShowing = !0);
              } else
                t.warn(
                  "User clicked on the Apple Pay button, but window.ApplePaySession does not exist."
                );
            },
          };
        },
        Or = function (e) {
          var t = e.component,
            n = e.elementTimings,
            r = e.getParent,
            o = e.emitEvent,
            i = e.options,
            c = e.selfDestruct,
            s = e.hasRegisteredListener,
            u = e.listenerRegistry,
            l = i.controller,
            p = i.groupId,
            m = null,
            _ = [],
            h = (function (e) {
              var t = e.controller,
                n = e.componentName,
                r = e.groupId,
                o = e.fonts,
                i = e.wait,
                a = e.publicOptions,
                c = e.controllingElement,
                s = {
                  fonts: o,
                  wait: i,
                  rtl: it(document.body),
                  publicOptions: a,
                  controllingElement: c,
                };
              return t.createElementFrame(
                xe.NC.EXPRESS_CHECKOUT_ELEMENT,
                n,
                r,
                s
              );
            })(i);
          (0, f.yq)(
            t,
            (0, a.Z)(
              (0, a.Z)({}, hr),
              {},
              { margin: "-4px 0", transition: "height .35s ease" }
            )
          ),
            h.appendTo(t),
            h.updateStyle(yr),
            h._on("set_styles", function (e) {
              h.updateStyle(e);
            }),
            h._on("redirectfocus", function (e) {
              var n,
                r = e.focusDirection;
              null === (n = (0, f.dh)(t, r)) || void 0 === n || n.focus();
            }),
            h._on("load", function () {
              h.send({
                action: "stripe-user-mount",
                payload: {
                  timestamps: {
                    stripeJsLoad: n.stripeJsLoadTimestamp.getAsPosixTime(),
                    stripeCreate: n.stripeCreateTimestamp.getAsPosixTime(),
                    groupCreate: n.groupCreateTimestamp.getAsPosixTime(),
                    create: n.createTimestamp.getAsPosixTime(),
                    mount: m ? m.getAsPosixTime() : 0,
                  },
                  rtl: it(r()),
                },
              });
            });
          var y = function (e) {
              var t = e.name,
                n = e.address,
                r = "shippingaddresschange";
              if (s(r)) {
                var i = vr({
                  controller: l,
                  eventName: r,
                  time: 29900,
                  timeLabel: "30 seconds",
                  reject: e.reject,
                  validateResolve: function (t) {
                    var n = Cr(t, r),
                      o = n.value;
                    n.warnings.forEach(function (e) {
                      return l.warn(e);
                    }),
                      e.resolve(o);
                  },
                });
                o(r, { name: t, address: n, reject: e.reject, resolve: i });
              } else e.resolve({});
            },
            v = function (e) {
              var t = e.shippingRate,
                n = "shippingratechange";
              if (s(n)) {
                var r = vr({
                  controller: l,
                  eventName: n,
                  time: 29900,
                  timeLabel: "30 seconds",
                  reject: e.reject,
                  validateResolve: function (t) {
                    var r = Cr(t, n),
                      o = r.value;
                    r.warnings.forEach(function (e) {
                      return l.warn(e);
                    }),
                      e.resolve(o);
                  },
                });
                o(n, { shippingRate: t, reject: e.reject, resolve: r });
              } else e.resolve({});
            },
            b = function () {
              o("cancel");
            },
            w = Rr({
              controller: l,
              eventHandlers: {
                cancel: b,
                shippingAddressChange: y,
                shippingRateChange: v,
              },
              groupId: p,
              listenerRegistry: u,
            });
          w.showButton(),
            h._on("cancel", b),
            h._on("click", function (e) {
              var t = e.paymentMethodType,
                n = "click";
              if (s(n)) {
                var r = vr({
                  controller: i.controller,
                  eventName: n,
                  time: 900,
                  timeLabel: "1 second",
                  reject: "apple_pay" === t ? function () {} : e.reject,
                  validateResolve: function (n) {
                    var r = (function (e) {
                        var t = (0, d.Gu)(
                            (0, d.mC)(Ar),
                            e,
                            "click resolve callback"
                          ),
                          n = t.value,
                          r = t.warnings,
                          o = n.shippingAddressRequired,
                          i = n.shippingRates;
                        if (o && (!i || !i.length))
                          throw new g.No(
                            "When `shippingAddressRequired` is true, you must specify `shippingRates`."
                          );
                        return { value: n, warnings: r };
                      })(n),
                      o = r.value;
                    r.warnings.forEach(function (e) {
                      return l.warn(e);
                    }),
                      "apple_pay" === t ? w.clickHandler(e, o) : e.resolve(o);
                  },
                });
                o(n, { paymentMethodType: t, resolve: r });
              } else "apple_pay" === t ? w.clickHandler(e, {}) : e.resolve({});
            }),
            h._on("shippingaddresschange", y),
            h._on("shippingratechange", v);
          return (
            h._on("load-error", function (e) {
              o("loaderror", { error: e }), c();
            }),
            fr.forEach(function (e) {
              h._on(e, function (t) {
                return o(e, t);
              });
            }),
            {
              update: function (e) {
                h.update(e);
              },
              focus: function () {
                at(),
                  h.focus(),
                  h.send({ action: "stripe-user-focus", payload: {} });
              },
              blur: function () {
                h.blur();
              },
              clear: function () {
                throw new g.No(
                  "clear() is not supported by the Express Checkout Element."
                );
              },
              mount: function () {
                m = new Xe.E();
                var e = r();
                e &&
                  ((0, f.mb)(e, [[_r, !0]]),
                  _.push(function () {
                    (0, f.mb)(e, [[_r, !1]]);
                  }));
              },
              unmount: function () {
                for (; _.length; ) {
                  var e;
                  null === (e = _.pop()) || void 0 === e || e();
                }
                h.unmount();
              },
              _frame: h,
            }
          );
        },
        Zr = function (e, t) {
          var n = (function (e) {
            if (!j.YA[e])
              throw new Error("Unexpected Element type: ".concat(e, "."));
            return j.YA[e].implementation;
          })(e);
          switch (n) {
            case "legacy":
              return new $t(t);
            case "affirm_message":
              return an(t);
            case "afterpay_message":
              return ln(t);
            case "unified_message":
              return mn(t);
            case "frame":
              return rr(t);
            case "cart":
              return mr(t);
            case "express_checkout":
              return Or(t);
            default:
              return (0, d.Rz)(
                n,
                "Unexpected implementation type: ".concat(n, ".")
              );
          }
        },
        xr = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, a.Z)(
            (0, a.Z)(
              {},
              (0, v.ei)(e, [
                "business",
                "fields",
                "paymentMethodOrder",
                "readOnly",
                "terms",
                "wallets",
                "allowedCardBrands",
                "disallowedCardBrands",
                "layout",
                "blockPoBox",
                "accountHolderType",
                "disabled",
                "hideIcon",
                "hidePostalCode",
                "iconStyle",
                "placeholderCountry",
                "rtl",
                "showIcon",
                "supportedCountries",
                "betas",
                "componentName",
                "groupId",
                "locale",
                "loader",
                "externalPaymentMethodTypes",
              ])
            ),
            e.autocomplete && {
              disableAutocomplete: "disabled" === e.autocomplete.mode,
            }
          );
        },
        Lr = (function (e) {
          (0, Z.Z)(n, e);
          var t = (0, x.Z)(n);
          function n(e, r, o) {
            var i, c;
            (0, s.Z)(this, n),
              ((c = t.call(this)).mount = A(function (e) {
                var t;
                if ((c._checkDestroyed(), !e))
                  throw new g.No(
                    "Missing argument. Make sure to call mount() with a valid DOM element or selector."
                  );
                if ("string" == typeof e) {
                  var n = document.querySelectorAll(e);
                  if (
                    (n.length > 1 &&
                      c._controller.warn(
                        "The selector you specified ("
                          .concat(e, ") applies to ")
                          .concat(
                            n.length,
                            " DOM elements that are currently on the page.\nThe Stripe Element will be mounted to the first one."
                          )
                      ),
                    !n.length)
                  )
                    throw new g.No(
                      "The selector you specified (".concat(
                        e,
                        ") applies to no DOM elements that are currently on the page.\nMake sure the element exists on the page before calling mount()."
                      )
                    );
                  t = n[0];
                } else {
                  if (!e.appendChild)
                    throw new g.No(
                      "Invalid DOM element. Make sure to call mount() with a valid DOM element or selector."
                    );
                  t = e;
                }
                if ("INPUT" === t.nodeName)
                  throw new g.No(
                    "Stripe Elements must be mounted in a DOM element that\ncan contain child nodes. `input` elements are not permitted to have child\nnodes. Try using a `div` element instead."
                  );
                t.children.length &&
                  t !== document.body &&
                  c._controller.warn(
                    "This Element will be mounted to a DOM element that contains child nodes."
                  ),
                  c._mountToParent(t);
              })),
              (c.update = A(function (e) {
                return (
                  c._controller.report("update", {
                    options: xr(e),
                    element: c._componentName,
                    element_mode: c._componentMode,
                  }),
                  c._checkDestroyed(),
                  c._implementation.update(e),
                  (0, O.Z)(c)
                );
              })),
              (c.focus = A(function (e) {
                return (
                  c._checkDestroyed(),
                  e && e.preventDefault(),
                  c._implementation.focus(),
                  (0, O.Z)(c)
                );
              })),
              (c.blur = A(function () {
                return (
                  c._checkDestroyed(), c._implementation.blur(), (0, O.Z)(c)
                );
              })),
              (c.clear = A(function () {
                return (
                  c._checkDestroyed(), c._implementation.clear(), (0, O.Z)(c)
                );
              })),
              (c.collapse = A(function () {
                if ((c._checkDestroyed(), !c._implementation.collapse))
                  throw new g.No(
                    "Collapse is not supported by the ".concat(
                      c._componentName,
                      " Element."
                    )
                  );
                return c._implementation.collapse(), (0, O.Z)(c);
              })),
              (c.show = A(function () {
                if ((c._checkDestroyed(), !c._implementation.show))
                  throw new g.No(
                    "show() is not supported by the ".concat(
                      c._componentName,
                      " Element."
                    )
                  );
                return c._implementation.show(), (0, O.Z)(c);
              })),
              (c.hide = A(function () {
                if ((c._checkDestroyed(), !c._implementation.hide))
                  throw new g.No(
                    "hide() is not supported by the ".concat(
                      c._componentName,
                      " Element."
                    )
                  );
                return c._implementation.hide(), (0, O.Z)(c);
              })),
              (c.addLineItem = A(function (e) {
                if ((c._checkDestroyed(), c._implementation.addLineItem))
                  return c._implementation.addLineItem(e);
                throw new g.No(
                  "addLineItem() is not supported by the ".concat(
                    c._componentName,
                    " Element."
                  )
                );
              })),
              (c.cancelCheckout = A(function (e) {
                if ((c._checkDestroyed(), !c._implementation.cancelCheckout))
                  throw new g.No(
                    "cancelCheckout() is not supported by the ".concat(
                      c._componentName,
                      " Element."
                    )
                  );
                return c._implementation.cancelCheckout(e), (0, O.Z)(c);
              })),
              (c.unmount = A(function () {
                return c._checkDestroyed(), c._unmount(), (0, O.Z)(c);
              })),
              (c.destroy = A(function () {
                var e, t;
                return (
                  c._checkDestroyed(),
                  c.unmount(),
                  null === (e = (t = c._implementation).destroy) ||
                    void 0 === e ||
                    e.call(t),
                  (c._destroyed = !0),
                  c._emitEvent("destroy"),
                  (0, O.Z)(c)
                );
              })),
              (c._getParent = function () {
                return c._parent;
              }),
              (c._emitEvent = function (e, t) {
                if (
                  ("loaderror" !== e ||
                    c._hasRegisteredListener("loaderror") ||
                    c._controller.keyMode() !== Me.Kl.test ||
                    console.error(
                      "Unhandled ".concat(
                        c._componentName,
                        " Element loaderror"
                      ),
                      t
                    ),
                  "cart" === c._componentName &&
                    "checkout" === e &&
                    !c._hasRegisteredListener("checkout"))
                )
                  throw new g.No(
                    "Unhandled Cart Element checkout event. Make sure to register a checkout handler."
                  );
                return c._emit(
                  e,
                  (0, a.Z)({ elementType: c._componentName }, t)
                );
              }),
              (c._cancelCheckout = function (e) {
                "cart" === c._componentName &&
                  c._controller._sendCaReq("cancelCheckout", {
                    errorMessage: e,
                    groupId: c._groupId,
                  });
              });
            var u = e.controller,
              l = e.componentName,
              p = e.groupId,
              d = e.locale,
              m = e.betas,
              f = e.mids;
            (c._controller = u),
              (c._componentName = l),
              (c._componentMode =
                null === (i = e.publicOptions) || void 0 === i
                  ? void 0
                  : i.mode),
              (c._destroyed = !1),
              (c._groupId = p),
              (c._mids = f);
            var _ = document.createElement("div");
            return (
              (_.className = j.A2),
              (c._component = _),
              u.report("create", {
                options: xr(
                  (0, a.Z)(
                    { componentName: l, groupId: p, locale: d, betas: m },
                    e.publicOptions
                  )
                ),
                element: l,
                element_mode: c._componentMode,
              }),
              (c._implementation = Zr(c._componentName, {
                options: e,
                component: _,
                listenerRegistry: r,
                elementTimings: o,
                emitEvent: c._emitEvent,
                getParent: c._getParent,
                hasRegisteredListener: c._hasRegisteredListener,
                selfDestruct: function () {
                  c.destroy();
                },
              })),
              c
            );
          }
          return (
            (0, u.Z)(n, [
              {
                key: "_checkDestroyed",
                value: function () {
                  if (this._destroyed)
                    throw new g.No(
                      "This Element has already been destroyed. Please create a new one."
                    );
                },
              },
              {
                key: "_isMounted",
                value: function () {
                  return (
                    !!document.body && document.body.contains(this._component)
                  );
                },
              },
              {
                key: "_unmount",
                value: function () {
                  var e = this._component.parentElement;
                  e && e.removeChild(this._component),
                    this._implementation.unmount(),
                    (this._parent = null);
                },
              },
              {
                key: "_mountToParent",
                value: function (e) {
                  var t = this._component.parentElement,
                    n = this._isMounted();
                  if (e === t) {
                    if (n) return;
                    this.unmount(), this._mountTo(e);
                  } else if (t) {
                    if (n)
                      throw new g.No(
                        "This Element is already mounted. Use `unmount()` to unmount the Element before re-mounting."
                      );
                    this.unmount(), this._mountTo(e);
                  } else this._mountTo(e);
                },
              },
              {
                key: "_mountTo",
                value: function (e) {
                  for (this._parent = e; e.firstChild && e !== document.body; )
                    e.removeChild(e.firstChild);
                  e.appendChild(this._component),
                    this._controller.report("mount", {
                      element: this._componentName,
                      element_mode: this._componentMode,
                    }),
                    this._implementation.mount();
                },
              },
            ]),
            n
          );
        })(L),
        Dr = function (e, t) {
          e._controller.report("legacy_private_property_used", {
            prop: t,
            componentName: e._componentName,
          });
        };
      [
        "_autofilled",
        "_classes",
        "_complete",
        "_empty",
        "_fakeInput",
        "_focused",
        "_frame",
        "_invalid",
        "_lastBackgroundColor",
        "_lastFontSize",
        "_lastHeight",
        "_lastPadding",
        "_lastSubmittedAt",
        "_listenerRegistry",
        "_paymentRequest",
      ].forEach(function (e) {
        Object.defineProperty(Lr.prototype, e, {
          enumerable: !1,
          get: function () {
            return Dr(this, e), this._implementation[e];
          },
        });
      });
      ["_formSubmit", "_isIssuingDisplayElement"].forEach(function (e) {
        Object.defineProperty(Lr.prototype, e, {
          enumerable: !1,
          writable: !1,
          value: function () {
            return Dr(this, e), this._implementation[e]();
          },
        });
      });
      var Br,
        qr = Lr,
        Fr = (0, d.mC)({
          locale: (0, d.jt)(d.Z_),
          appearance: (0, d.jt)(d.Ry),
        }),
        Ur = function (e) {
          if (e)
            return (0, a.Z)(
              (0, a.Z)(
                (0, a.Z)({}, e),
                e.hasOwnProperty("rules") ? { rules: "<truncated>" } : null
              ),
              e.hasOwnProperty("variables")
                ? { variables: "<truncated>" }
                : null
            );
        },
        Gr = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, a.Z)(
            (0, a.Z)(
              (0, a.Z)(
                {},
                (0, v.ei)(e, ["locale", "loader", "externalPaymentMethodTypes"])
              ),
              e.hasOwnProperty("fonts") ? { fonts: "<truncated>" } : null
            ),
            {},
            { appearance: Ur(e.appearance) },
            e.customerOptions
              ? { customerOptions: { customer: e.customerOptions.customer } }
              : null
          );
        },
        Yr = function e(t, n, r, o, i, u) {
          var l = this;
          (0, s.Z)(this, e),
            (this.getElement = A(function (e) {
              var t,
                n =
                  (null != (t = e) &&
                  t.__elementType &&
                  "string" == typeof t.__elementType &&
                  "function" == typeof t
                    ? t.__elementType
                    : null) || e;
              return (
                R(n, l._betas),
                (0, v.sE)(l._elements, function (e) {
                  return e._componentName === n;
                }) || null
              );
            })),
            (this.update = A(function (e) {
              var t = (0, d.Gu)(Fr, e || {}, "elements.update()"),
                n = t.value;
              t.warnings.forEach(function (e) {
                return l._controller.warn(e);
              });
              var r = n.locale,
                o = n.appearance,
                i = void 0 === o ? void 0 : o,
                a = (0, y.jk)(r, l._betas);
              a && l._controller.action.fetchLocale({ locale: a }),
                l._elements.forEach(function (e) {
                  var t, n;
                  (t = e._implementation),
                    "function" ==
                      typeof (null === (n = t._paymentRequest) || void 0 === n
                        ? void 0
                        : n._updateLocale) &&
                      e._implementation._paymentRequest._updateLocale(a);
                }),
                (i || a) &&
                  l._controller.action.updateElementsOptions({
                    locale: a,
                    appearance: i,
                    groupId: l._id,
                  });
            })),
            (this.create = N(function (e, t) {
              var n = new Xe.E();
              !(function (e, t, n) {
                if ((R(e, n), j.YA[e].unique && -1 !== t.indexOf(e)))
                  throw new g.No(
                    "Can only create one Element of type ".concat(e, ".")
                  );
                var r = j.YA[e].conflict,
                  o = (0, v.dq)(t, r);
                if (o.length) {
                  var i = o[0];
                  throw new g.No(
                    "Cannot create an Element of type "
                      .concat(e, " after an Element of type ")
                      .concat(i, " has already been created.")
                  );
                }
              })(
                e,
                l._elements.map(function (e) {
                  return e._componentName;
                }),
                l._betas
              );
              var r = (0, a.Z)(
                  (0, a.Z)((0, a.Z)({}, t), l._commonOptions),
                  {},
                  { componentName: e, groupId: l._id }
                ),
                o = (r.paymentRequest, (0, p.Z)(r, ["paymentRequest"])),
                i = (_.P0 || _.JW) && (0, h.qC)(o).length > 2e3,
                s = !!l._pendingFonts || i;
              if (
                "never" !== l._commonOptions.loader &&
                !l._isLoaderFrameMounted &&
                Mn(e)
              ) {
                var u = (function (e) {
                  return (
                    St ||
                    ((St = e.createHiddenFrame(xe.NC.LOADER_UI_APP, {}))._on(
                      "generate-loader-ui",
                      function (e) {
                        St.send({
                          action: "generate-loader-ui",
                          payload: { data: e },
                        });
                      }
                    ),
                    St._on("get-element-loader-ui", function (e) {
                      St.send({
                        action: "get-element-loader-ui",
                        payload: { data: e },
                      });
                    }),
                    St)
                  );
                })(l._controller);
                u._emit("generate-loader-ui", {
                  rawAppearanceConfig: l._commonOptions.appearance,
                }),
                  (l._isLoaderFrameMounted = !0);
              }
              var d = new qr(
                (0, a.Z)(
                  (0, a.Z)({ publicOptions: t }, l._commonOptions),
                  {},
                  {
                    componentName: e,
                    groupId: l._id,
                    fonts: i ? null : l._commonOptions.fonts,
                    controller: l._controller,
                    wait: s,
                    mids: l._mids,
                  }
                ),
                l._listenerRegistry,
                (0, a.Z)((0, a.Z)({}, l._timings), {}, { createTimestamp: n })
              );
              return (
                (l._elements = [].concat((0, c.Z)(l._elements), [d])),
                d._on("destroy", function () {
                  l._elements = l._elements.filter(function (t) {
                    return t._componentName !== e;
                  });
                }),
                i &&
                  d._implementation.update({ fonts: l._commonOptions.fonts }),
                d
              );
            })),
            (this.fetchUpdates = C(function () {
              if (l._commonOptions.clientSecret)
                return l._controller.action
                  .fetchUpdates({
                    clientSecret: l._commonOptions.clientSecret,
                    customerOptions: l._customerOptions,
                    locale: l._commonOptions.locale,
                    groupId: l._id,
                  })
                  .then(function (e) {
                    if ("error" === (null == e ? void 0 : e.type)) {
                      var t = e.error,
                        n = t.message,
                        r = t.extra_fields;
                      return (null == r ? void 0 : r.status)
                        ? { error: { message: n, status: r.status } }
                        : { error: { message: n } };
                    }
                    return {};
                  });
              throw new g.No(
                'In order to call fetchUpdates, you must pass a valid PaymentIntent or SetupIntent client secret when creating the Elements group.\n\n  e.g. stripe.elements({clientSecret: "{{CLIENT_SECRET}}"})'
              );
            }));
          var b = new Xe.E(),
            w = (0, d.Gu)(
              (function (e) {
                var t = {
                  locale: (0, d.jt)(d.Z_),
                  fonts: (0, d.jt)((0, d.CT)(d.Ry)),
                  appearance: (0, d.jt)(d.Ry),
                  clientSecret: (0, d.jt)(hn.Eu),
                  loader: (0, d.jt)((0, d.kw)("auto", "always", "never")),
                  externalPaymentMethodTypes: (0, d.jt)(_n.iU),
                };
                return (0, y.uN)(e, y.M4.elements_customers_beta_1)
                  ? (0, d.mC)(
                      (0, a.Z)(
                        (0, a.Z)({}, t),
                        {},
                        {
                          customerOptions: (0, d.jt)(
                            (0, d.mC)({ customer: d.Z_, ephemeralKey: d.Z_ })
                          ),
                        }
                      )
                    )
                  : (0, d.mC)(t);
              })(o),
              u || {},
              "elements()"
            ),
            k = w.value;
          w.warnings.forEach(function (e) {
            return t.warn(e);
          }),
            (0, f.BO)(t.warn),
            t.report("elements", { options: Gr(k) }),
            k.loader || (k.loader = "auto");
          var S = k.fonts,
            P = void 0 === S ? [] : S,
            I = k.locale,
            T = k.customerOptions,
            M = void 0 === T ? null : T,
            O = (0, p.Z)(k, ["fonts", "locale", "customerOptions"]);
          this._customerOptions = M;
          var Z = k.appearance ? k.appearance : {};
          (this._elements = []),
            (this._id = (0, m.To)("elements")),
            (this._timings = (0, a.Z)(
              (0, a.Z)({}, r),
              {},
              { groupCreateTimestamp: b }
            )),
            (this._controller = t),
            (this._betas = o),
            (this._listenerRegistry = n),
            (this._mids = i),
            (this._isLoaderFrameMounted = !1);
          var x = (0, y.jk)(I, o);
          this._controller.action.fetchLocale({ locale: x || "auto" });
          var L = P.filter(function (e) {
              return !e.cssSrc || "string" != typeof e.cssSrc;
            }).map(function (e) {
              return (0,
              a.Z)((0, a.Z)({}, e), {}, { __resolveFontRelativeTo: window.location.href });
            }),
            D = P.map(function (e) {
              return e.cssSrc;
            })
              .reduce(function (e, t) {
                return "string" == typeof t ? [].concat((0, c.Z)(e), [t]) : e;
              }, [])
              .map(function (e) {
                return (0, h.sD)(e) ? e : (0, h.v_)(window.location.href, e);
              });
          return (
            (this._pendingFonts = D.length),
            ((0, y.uN)(o, y.M4.payment_element_beta_1) && !O.clientSecret) ||
              t.action.setupStoreForElementsGroup({
                clientSecret: O.clientSecret,
                customerOptions: M,
                loader: k.loader,
                locale: I,
                appearance: Z,
                groupId: this._id,
                externalPaymentMethodTypes: O.externalPaymentMethodTypes,
              }),
            (this._commonOptions = (0, a.Z)(
              (0, a.Z)({}, O),
              {},
              { betas: o, appearance: Z, locale: x, fonts: L }
            )),
            D.forEach(function (e) {
              if ("string" == typeof e) {
                var t = new Xe.E();
                E(e)
                  .then(function (n) {
                    l._controller.report("font.loaded", {
                      load_time: t.getElapsedTime(),
                      font_count: n.length,
                      css_src: e,
                    });
                    var r = n.map(function (t) {
                      return (0,
                      a.Z)((0, a.Z)({}, t), {}, { __resolveFontRelativeTo: e });
                    });
                    l._controller.action.updateCSSFonts({
                      fonts: r,
                      groupId: l._id,
                    }),
                      (l._commonOptions = (0, a.Z)(
                        (0, a.Z)({}, l._commonOptions),
                        {},
                        {
                          fonts: [].concat(
                            (0, c.Z)(
                              l._commonOptions.fonts
                                ? l._commonOptions.fonts
                                : []
                            ),
                            (0, c.Z)(r)
                          ),
                        }
                      ));
                  })
                  .catch(function (n) {
                    l._controller.report("error.font.not_loaded", {
                      load_time: t.getElapsedTime(),
                      message: n && n.message && n.message,
                      css_src: e,
                    }),
                      l._controller.warn(
                        "Failed to load CSS file at ".concat(e, ".")
                      );
                  });
              }
            }),
            this
          );
        },
        zr = function (e, t, n, r, o, i, a) {
          return new et({
            controller: e,
            authentication: t,
            mids: n,
            rawOptions: r,
            betas: o,
            queryStrategyOverride: i,
            listenerRegistry: a,
          });
        },
        Hr = (0, d.mC)({
          name: (0, d.kw)(
            "react-stripe-js",
            "stripe-js",
            "react-stripe-elements"
          ),
          version: (0, d.AG)(d.Z_),
          startTime: (0, d.jt)(d.Rx),
        }),
        Kr = (0, d.ci)({
          name: (0, d.ui)(1, 30),
          partner_id: (0, d.jt)((0, d.xe)("pp_partner_")),
          version: (0, d.jt)((0, d.ui)(5, 15)),
          url: (0, d.jt)((0, d.ui)(4, 60)),
        }),
        Jr = o(638),
        Wr = {
          border: "none",
          margin: "0",
          padding: "0",
          width: "1px",
          "min-width": "100%",
          overflow: "hidden",
          display: "block",
          "user-select": "none",
          transform: "translate(0)",
          "color-scheme": "only light",
        },
        Vr = (function (e) {
          (0, Z.Z)(n, e);
          var t = (0, x.Z)(n);
          function n(e) {
            var r;
            return (
              (0, s.Z)(this, n),
              (r = t.call(this, e)),
              _.s$ &&
                r._listenerRegistry.addEventListener(
                  document,
                  "transitionstart",
                  function (e) {
                    switch (e.propertyName) {
                      case "opacity":
                      case "transform":
                      case "visibility":
                        var t = e.target;
                        r._isMounted() &&
                          t.contains(r._iframe) &&
                          r._forceRepaint();
                    }
                  },
                  { passive: !0 }
                ),
              r
            );
          }
          return (
            (0, u.Z)(n, [
              {
                key: "update",
                value: function (e) {
                  this.send({ action: "stripe-user-update", payload: e });
                },
              },
              {
                key: "updateStyle",
                value: function (e) {
                  var t = this;
                  Object.keys(e).forEach(function (n) {
                    t._iframe.style[n] = e[n];
                  });
                },
              },
              {
                key: "focus",
                value: function () {
                  this.loaded &&
                    (_.s$
                      ? this._iframe.focus()
                      : this.send({
                          action: "stripe-user-focus",
                          payload: {},
                        }));
                },
              },
              {
                key: "blur",
                value: function () {
                  this.loaded &&
                    (this._iframe.contentWindow.blur(),
                    this._iframe.blur(),
                    document.activeElement === this._iframe &&
                      (window.focus(),
                      document.activeElement &&
                        "function" == typeof document.activeElement.blur &&
                        document.activeElement.blur()));
                },
              },
              {
                key: "clear",
                value: function () {
                  this.send({ action: "stripe-user-clear", payload: {} });
                },
              },
              {
                key: "collapse",
                value: function () {
                  this.send({ action: "stripe-user-collapse", payload: {} });
                },
              },
              {
                key: "show",
                value: function () {
                  this.send({ action: "stripe-user-show", payload: {} });
                },
              },
              {
                key: "hide",
                value: function () {
                  this.send({ action: "stripe-user-hide", payload: {} });
                },
              },
              {
                key: "addLineItem",
                value: function (e) {
                  this.send({
                    action: "stripe-user-add-line-item",
                    payload: e,
                  });
                },
              },
              {
                key: "cancelCheckout",
                value: function (e) {
                  this.send({
                    action: "stripe-user-cancel-checkout",
                    payload: { errorMessage: e },
                  });
                },
              },
              {
                key: "_createIFrame",
                value: function (e, t, r) {
                  var o = Et(
                    (0, kt.Z)(n.prototype),
                    "_createIFrame",
                    this
                  ).call(this, e, t, r);
                  return (
                    o.setAttribute("title", "Secure payment input frame"),
                    (0, f.yq)(o, Wr),
                    o
                  );
                },
              },
              {
                key: "_forceRepaint",
                value: function () {
                  var e = this._iframe,
                    t = e.style.display;
                  e.style.display = "none";
                  var n = e.offsetHeight;
                  return (e.style.display = t), n;
                },
              },
            ]),
            n
          );
        })(Nt),
        Xr = Vr,
        Qr = {
          position: "absolute",
          left: "0",
          top: "0",
          height: "100%",
          width: "100%",
        },
        $r = (function (e) {
          (0, Z.Z)(n, e);
          var t = (0, x.Z)(n);
          function n(e) {
            var r,
              o,
              i,
              a = e.type,
              c = e.controllerId,
              u = e.listenerRegistry,
              l = e.options;
            return (
              (0, s.Z)(this, n),
              ((i = t.call(this, {
                type: a,
                controllerId: c,
                listenerRegistry: u,
                appParams: l,
              }))._autoMount = function () {
                i.appendTo(i._backdrop.domElement), i._backdrop.mount();
              }),
              (i.show = function () {
                i._backdrop.show(),
                  (0, f.yq)(i._iframe, Qr),
                  (i.isVisible = !0);
              }),
              (i.fadeInBackdrop = function () {
                i._backdrop.fadeIn();
              }),
              (i._backdropFadeoutPromise = null),
              (i.fadeOutBackdrop = function () {
                return (
                  i._backdropFadeoutPromise ||
                    (i._backdropFadeoutPromise = i._backdrop.fadeOut()),
                  i._backdropFadeoutPromise.then(function () {
                    i._backdropFadeoutPromise = null;
                  })
                );
              }),
              (i.destroy = function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t = i.fadeOutBackdrop().then(function () {
                    i._backdrop.unmount(),
                      e ||
                        Et(
                          ((r = (0, O.Z)(i)), (0, kt.Z)(n.prototype)),
                          "destroy",
                          r
                        ).call(r);
                  });
                return (
                  e &&
                    Et(
                      ((o = (0, O.Z)(i)), (0, kt.Z)(n.prototype)),
                      "destroy",
                      o
                    ).call(o),
                  (i.isVisible = !1),
                  t
                );
              }),
              (i._backdrop = new Be({
                lockScrolling: !0,
                lockFocus: !0,
                lockFocusOn: i._iframe,
                listenerRegistry: u,
              })),
              i._autoMount(),
              (i.isVisible = !1),
              i
            );
          }
          return n;
        })(Nt),
        eo = $r,
        to = {
          display: "block",
          position: "absolute",
          "z-index": "1000",
          width: "1px",
          "min-width": "100%",
          margin: "2px 0 0 0",
          padding: "0",
          border: "none",
          overflow: "hidden",
        },
        no = (function (e) {
          (0, Z.Z)(n, e);
          var t = (0, x.Z)(n);
          function n() {
            return (0, s.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, u.Z)(n, [
              {
                key: "updateStyle",
                value: function (e) {
                  var t = this;
                  Object.keys(e).forEach(function (n) {
                    t._iframe.style[n] = e[n];
                  });
                },
              },
              {
                key: "update",
                value: function (e) {
                  this.send({ action: "stripe-user-update", payload: e });
                },
              },
              {
                key: "_createIFrame",
                value: function (e, t, r) {
                  var o = Et(
                    (0, kt.Z)(n.prototype),
                    "_createIFrame",
                    this
                  ).call(
                    this,
                    e,
                    t,
                    r && "object" == typeof r
                      ? (0, a.Z)((0, a.Z)({}, r), {}, { isSecondaryFrame: !0 })
                      : r
                  );
                  return (0, f.yq)(o, to), (o.style.height = "0"), o;
                },
              },
            ]),
            n
          );
        })(Nt),
        ro = no,
        oo = !1,
        io = function (e) {
          oo ||
            ("null" === (null != e ? e : window.origin) &&
              ((oo = !0),
              console.error(
                "Stripe.js requires 'allow-same-origin' if sandboxed."
              )));
        },
        ao = o(5044),
        co = "https://maps.googleapis.com/maps/api/js",
        so =
          /^https:\/\/maps\.googleapis\.com\/maps\/api\/js\/?(\?.*)?libraries=(.*,)?places((,|&)+.*)?$/,
        uo = function (e) {
          switch (e) {
            case "INVALID_REQUEST":
            case "NOT_FOUND":
            case "OK":
            case "OVER_QUERY_LIMIT":
            case "REQUEST_DENIED":
            case "UNKNOWN_ERROR":
            case "ZERO_RESULTS":
              return e;
            default:
              return "UNKNOWN_ERROR";
          }
        },
        lo = "ADDRESS_AUTOCOMPLETE_PREDICTION_RESULTS",
        po = "ADDRESS_AUTOCOMPLETE_PLACE_DETAILS",
        mo = null,
        fo = function (e) {
          return (
            null !== mo ||
              (mo = new Promise(function (t, n) {
                if ("undefined" != typeof window)
                  if (window.google && window.google.maps.places)
                    t(window.google.maps.places);
                  else
                    try {
                      var r = (function () {
                        var e = document.querySelectorAll(
                          'script[src^="'.concat(co, '"]')
                        );
                        for (var t in e) if (so.test(e[t].src)) return e[t];
                        return null;
                      })();
                      r ||
                        (r = (function (e) {
                          var t = document.createElement("script");
                          return (
                            (t.src = ""
                              .concat(co, "?key=")
                              .concat(e, "&libraries=places")),
                            (document.head || document.body).appendChild(t),
                            t
                          );
                        })(e)),
                        (r.onload = function () {
                          window.google.maps.places
                            ? t(window.google.maps.places)
                            : n(new Error("Google Maps API not available"));
                        });
                    } catch (e) {
                      n(e);
                    }
                else t(null);
              })),
            mo
          );
        },
        _o = function (e, t, n) {
          var r = e.search,
            o = e.countryRestrictions;
          var i = function (e) {
            return {
              predictions: [],
              status: "error",
              error: {
                status: uo(e),
                message: "Google Maps returned an API error",
              },
            };
          };
          void 0 === t || Br
            ? n.send({
                action: "google-maps-predictions",
                payload: { data: { tag: lo, value: i("UNKNOWN_ERROR") } },
              })
            : (function (e, t) {
                try {
                  t();
                } catch (t) {
                  e.send({
                    action: "google-maps-predictions",
                    payload: {
                      data: {
                        tag: lo,
                        value: {
                          predictions: [],
                          status: "error",
                          error: {
                            status: "UNKNOWN_ERROR",
                            message: t.message,
                          },
                        },
                      },
                    },
                  });
                }
              })(n, function () {
                var e = t.autocompleteService,
                  a = t.sessionToken;
                e.getPlacePredictions(
                  {
                    input: r,
                    sessionToken: a,
                    componentRestrictions: { country: o },
                  },
                  function (e, t) {
                    var r;
                    switch (t) {
                      case google.maps.places.PlacesServiceStatus.OK:
                        r = { predictions: e, status: "ok" };
                        break;
                      case google.maps.places.PlacesServiceStatus.ZERO_RESULTS:
                        r = { predictions: [], status: "zeroResults" };
                        break;
                      default:
                        r = i(t);
                    }
                    n.send({
                      action: "google-maps-predictions",
                      payload: { data: { tag: lo, value: r } },
                    });
                  }
                );
              });
        },
        ho = {
          attachLinkAccountSessionForPayment: null,
          attachLinkAccountSessionForSetup: null,
          authenticate3DS2: null,
          cancelCardImageVerificationChallenge: null,
          cancelCheckout: null,
          cancelPaymentIntentSource: null,
          cancelSetupIntentSource: null,
          completeLinkAccountSessionElements: null,
          completeWalletConfirm: null,
          confirmPaymentIntent: null,
          confirmReturnIntent: null,
          confirmSetupIntent: null,
          createAcssDebitSession: null,
          createApplePaySession: null,
          createBankPaymentDetails: null,
          createConsumerPaymentDetails: null,
          createEphemeralKeyNonce: null,
          createPaymentMethodWithData: null,
          createPaymentMethodWithElement: null,
          createPaymentPage: null,
          createPaymentPageWithSession: null,
          createRadarSession: null,
          createSourceWithData: null,
          createSourceWithElement: null,
          confirmInstantDebitsIncentiveForPaymentDetails: null,
          fetchingWallets: null,
          showApplePayButton: null,
          fetchLocale: null,
          fetchUpdates: null,
          localizeError: null,
          loginWithConsumerInfo: null,
          lookupLocale: null,
          refreshPaymentIntent: null,
          refreshSetupIntent: null,
          retrieveIssuingCard: null,
          retrieveIssuingCardWithoutNonce: null,
          retrieveOrder: null,
          retrievePaymentIntent: null,
          retrieveSetupIntent: null,
          retrieveSource: null,
          removeElementsExperimentId: null,
          fetchCartSession: null,
          getGoogleMapsPredictions: null,
          getGoogleMapsDetails: null,
          initGoogleMapsService: null,
          setupStoreForElementsGroup: null,
          submitOrder: null,
          tokenizeCvcUpdate: null,
          tokenizeWithData: null,
          tokenizeWithElement: null,
          updateCSSFonts: null,
          updateElementsOptions: null,
          updateOrder: null,
          updatePaymentIntent: null,
          verifyCardImageVerificationChallenge: null,
          verifyMicrodepositsForPayment: null,
          verifyMicrodepositsForSetup: null,
          retrieveCardNetworks: null,
          isCardMetadataRequired: null,
        },
        yo = (function () {
          function e() {
            var t = this;
            (0, s.Z)(this, e),
              (this._state = "pending"),
              (this._state = "pending"),
              (this.promise = new D.J(function (e, n) {
                (t._resolve = e), (t._reject = n);
              })),
              this.promise.then(
                function () {
                  t._state = "resolved";
                },
                function () {
                  t._state = "rejected";
                }
              );
          }
          return (
            (0, u.Z)(e, [
              {
                key: "resolve",
                value: function (e) {
                  this._resolve(e);
                },
              },
              {
                key: "reject",
                value: function (e) {
                  this._reject(e);
                },
              },
              {
                key: "isResolved",
                value: function () {
                  return "resolved" === this._state;
                },
              },
              {
                key: "isRejected",
                value: function () {
                  return "rejected" === this._state;
                },
              },
              {
                key: "isPending",
                value: function () {
                  return "pending" === this._state;
                },
              },
            ]),
            e
          );
        })(),
        vo = !1,
        go = {},
        bo = function (e, t) {
          return (
            document.activeElement === e._iframe ||
            (e._iframe.parentElement && document.activeElement === t)
          );
        },
        wo = function (e) {
          return "object" == typeof e &&
            null !== e &&
            "IntegrationError" === e.name
            ? new g.No("string" == typeof e.message ? e.message : "")
            : e;
        },
        ko = (function () {
          function e(t) {
            var n = this;
            (0, s.Z)(this, e),
              (this._sendCaReq = function (e, t) {
                var r = (0, m.To)(e),
                  o = new yo();
                return (
                  (n._requests[r] = o),
                  n._controllerFrame.send({
                    action: "stripe-controller-action-request",
                    payload: { nonce: r, actionName: e, request: t },
                  }),
                  o.promise
                );
              }),
              (this.keyMode = function () {
                return (0, Me.lO)(n._apiKey);
              }),
              (this.mids = function () {
                return n._getMids();
              }),
              (this.action = Object.keys(ho).reduce(function (e, t) {
                return (0, a.Z)(
                  (0, a.Z)({}, e),
                  {},
                  (0, l.Z)({}, t, function (e) {
                    return n._sendCaReq(t, e);
                  })
                );
              }, {})),
              (this.createElementFrame = function (e, t, r, o) {
                var i = n._betas,
                  c = new Xr({
                    type: e,
                    betas: i,
                    controllerId: n._id,
                    listenerRegistry: n._listenerRegistry,
                    appParams: (0, a.Z)(
                      (0, a.Z)({}, o),
                      {},
                      {
                        componentName: t,
                        keyMode: (0, Me.lO)(n._apiKey),
                        apiKey: n._apiKey,
                      }
                    ),
                  });
                return n._setupFrame(c, e, r);
              }),
              (this.createSecondaryElementFrame = function (e, t, r, o, i) {
                var c = n._betas,
                  s = new ro({
                    type: e,
                    betas: c,
                    controllerId: n._id,
                    listenerRegistry: n._listenerRegistry,
                    appParams: (0, a.Z)(
                      (0, a.Z)({}, i),
                      {},
                      {
                        componentName: t,
                        primaryElementType: r,
                        keyMode: (0, Me.lO)(n._apiKey),
                      }
                    ),
                  });
                return n._setupFrame(s, e, o);
              }),
              (this.createHiddenFrame = function (e, t) {
                var r = new It({
                  type: e,
                  betas: n._betas,
                  controllerId: n._id,
                  listenerRegistry: n._listenerRegistry,
                  appParams: t,
                });
                return n._setupFrame(r, e);
              }),
              (this.getCredentials = function () {
                return {
                  publishableKey: n._apiKey,
                  stripeAccount: n._stripeAccount,
                  apiVersion: n._apiVersion,
                };
              }),
              (this.createLightboxFrame = function (e) {
                var t = e.type,
                  r = e.options,
                  o = new eo({
                    type: t,
                    controllerId: n._id,
                    listenerRegistry: n._listenerRegistry,
                    options: (0, a.Z)((0, a.Z)({}, r), {}, { betas: n._betas }),
                  }),
                  i = "LINK_AUTOFILL_MODAL" === e.type ? e.groupId : null;
                return n._setupFrame(o, t, i);
              }),
              (this._setupFrame = function (e, t, r) {
                return (
                  (n._frames[e.id] = e),
                  n._controllerFrame.sendPersistent({
                    action: "stripe-user-createframe",
                    payload: { newFrameId: e.id, frameType: t, groupId: r },
                  }),
                  e._on("unload", function () {
                    n._controllerFrame.sendPersistent({
                      action: "stripe-frame-unload",
                      payload: { unloadedFrameId: e.id },
                    });
                  }),
                  e._on("destroy", function () {
                    delete n._frames[e.id],
                      n._controllerFrame.sendPersistent({
                        action: "stripe-frame-destroy",
                        payload: { destroyedFrameId: e.id },
                      });
                  }),
                  e._on("load", function () {
                    n._controllerFrame.sendPersistent({
                      action: "stripe-frame-load",
                      payload: { loadedFrameId: e.id },
                    }),
                      n._controllerFrame.loaded &&
                        e.send({
                          action: "stripe-controller-load",
                          payload: {},
                        });
                  }),
                  e
                );
              }),
              (this.report = function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                n._controllerFrame.send({
                  action: "stripe-controller-report",
                  payload: { event: e, data: t },
                });
              }),
              (this.warn = function () {
                for (
                  var e = arguments.length, t = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  t[r] = arguments[r];
                n._controllerFrame.send({
                  action: "stripe-controller-warn",
                  payload: { args: t },
                });
              }),
              (this.controllerFor = function () {
                return "outer";
              }),
              (this._setupPostMessage = function () {
                n._listenerRegistry.addEventListener(
                  window,
                  "message",
                  function (e) {
                    var t = e.data,
                      r = e.origin,
                      o = e.source,
                      i = (0, xe.$G)(t);
                    i && ((0, h.uW)(w.jQ, r) ? n._handleMessage(i, o) : io(r));
                  }
                );
              }),
              (this._nodeIsKnownElement = function (e) {
                return (
                  e &&
                  "IFRAME" === e.nodeName &&
                  !!n._frames[e.getAttribute("name") || ""]
                );
              }),
              (this._handleMessage = function (e, t) {
                var r = e.controllerId,
                  o = e.frameId,
                  i = e.message,
                  c = n._frames[o];
                if (r === n._id)
                  switch (i.action) {
                    case "stripe-frame-event":
                      var s = i.payload.event,
                        u = i.payload.data;
                      if (c) {
                        if (_.Ah) {
                          var l = c._iframe.parentElement,
                            p = l && l.querySelector(".".concat(ct.Kb));
                          if (
                            "focus" === s &&
                            !vo &&
                            p &&
                            !bo(c, p) &&
                            !go[o]
                          ) {
                            p.focus(),
                              (vo = !0),
                              (go[o] = !0),
                              setTimeout(function () {
                                go[o] = !1;
                              }, 1e3);
                            break;
                          }
                          if ("blur" === s && vo) {
                            vo = !1;
                            break;
                          }
                          "blur" === s &&
                            _.Gx &&
                            setTimeout(function () {
                              var e = document.activeElement;
                              if (
                                e &&
                                !bo(c, p) &&
                                !(0, f.a0)(e) &&
                                !n._nodeIsKnownElement(e)
                              ) {
                                var t = l && l.querySelector(".".concat(ct.tk));
                                if (t) {
                                  var r = t;
                                  (r.disabled = !1),
                                    r.focus(),
                                    r.blur(),
                                    (r.disabled = !0);
                                }
                                e.focus();
                              }
                            }, 400);
                        }
                        "load" === s &&
                          (u = (0, a.Z)((0, a.Z)({}, u), {}, { source: t })),
                          c._emit(s, u);
                      }
                      break;
                    case "stripe-frame-action-response":
                      c && c.resolve(i.payload.nonce, i.payload.faRes);
                      break;
                    case "stripe-frame-action-error":
                      c && c.reject(i.payload.nonce, wo(i.payload.faErr));
                      break;
                    case "stripe-frame-error":
                      throw new g.No(i.payload.message);
                    case "stripe-integration-error":
                      c &&
                        c._emit("__privateIntegrationError", {
                          message: i.payload.message,
                        });
                      break;
                    case "stripe-controller-load":
                      n._controllerFrame._emit("load", { source: t }),
                        n._loadCount++,
                        Object.keys(n._frames).forEach(function (e) {
                          return n._frames[e].send({
                            action: "stripe-controller-load",
                            payload: {},
                          });
                        });
                      var d = n._createTimestamp.getAsPosixTime(),
                        m = {
                          stripeJsLoad:
                            n._stripeJsLoadTimestamp.getAsPosixTime(),
                          stripeCreate: d,
                          create: d,
                        };
                      n._mountTimestamp &&
                        (m.mount = n._mountTimestamp.getAsPosixTime()),
                        n._controllerFrame.send({
                          action: "stripe-user-mount",
                          payload: {
                            timestamps: m,
                            loadCount: n._loadCount,
                            matchFrame:
                              t === n._controllerFrame._iframe.contentWindow,
                            rtl: !1,
                            paymentRequestButtonType: null,
                          },
                        });
                      break;
                    case "stripe-controller-action-response":
                      n._requests[i.payload.nonce] &&
                        n._requests[i.payload.nonce].resolve(
                          i.payload.response
                        );
                      break;
                    case "stripe-controller-action-error":
                      n._requests[i.payload.nonce] &&
                        n._requests[i.payload.nonce].reject(
                          wo(i.payload.error)
                        );
                      break;
                    case "stripe-api-call":
                      Ut();
                      break;
                    case "show-wallet":
                      var h = n._frames[i.payload.frameId];
                      h && h._emit("show-wallet", i.payload.wallet);
                      break;
                    case "show-bacs-mandate-confirmation":
                      var y = n.createLightboxFrame({
                        type: xe.NC.BACS_MANDATE_CONFIRMATION_APP,
                        options: { locale: n._locale || "en" },
                      });
                      y._on("load", function () {
                        y.show(), y.fadeInBackdrop();
                      }),
                        y._once("request-close", function () {
                          (0, ao.G)(y).then(function () {});
                        });
                      break;
                    case "init-google-maps-service":
                      fo(i.payload.apiKey).then(function (e) {
                        null !== e &&
                          (n._googleMapsService = (function (e) {
                            var t = window.gm_authFailure;
                            window.gm_authFailure = function () {
                              t && t(), (Br = !0);
                            };
                            var n = new e.AutocompleteService(),
                              r = new e.AutocompleteSessionToken(),
                              o = document.createElement("div");
                            return {
                              autocompleteService: n,
                              sessionToken: r,
                              placeService: new e.PlacesService(o),
                            };
                          })(e));
                      });
                      break;
                    case "get-google-maps-predictions":
                      i.payload.frameId &&
                        _o(
                          i.payload.data,
                          n._googleMapsService,
                          n._frames[i.payload.frameId]
                        );
                      break;
                    case "get-google-maps-details":
                      i.payload.frameId &&
                        (function (e, t, n) {
                          var r = e.placeId,
                            o = function (e) {
                              return {
                                error: {
                                  status: uo(e),
                                  message: "Google Maps returned an API error",
                                },
                              };
                            };
                          if (void 0 !== t) {
                            var i = t.placeService,
                              a = t.sessionToken;
                            i.getDetails(
                              {
                                placeId: r,
                                sessionToken: a,
                                fields: ["address_components"],
                              },
                              function (e, t) {
                                var r;
                                (r =
                                  t !==
                                  google.maps.places.PlacesServiceStatus.OK
                                    ? o(t)
                                    : { place: e }),
                                  n.send({
                                    action: "google-maps-details",
                                    payload: { data: { tag: po, value: r } },
                                  });
                              }
                            );
                          } else
                            n.send({
                              action: "google-maps-details",
                              payload: {
                                data: { tag: po, value: o("UNKNOWN_ERROR") },
                              },
                            });
                        })(
                          i.payload.data,
                          n._googleMapsService,
                          n._frames[i.payload.frameId]
                        );
                  }
              });
            var r = t.listenerRegistry,
              o = t.stripeJsLoadTimestamp,
              i = t.stripeCreateTimestamp,
              c = t.onFirstLoad,
              u = t.betas,
              d = t.mids,
              y = (0, p.Z)(t, [
                "listenerRegistry",
                "stripeJsLoadTimestamp",
                "stripeCreateTimestamp",
                "onFirstLoad",
                "betas",
                "mids",
              ]),
              v = y.apiKey,
              b = y.apiVersion,
              k = y.stripeAccount,
              E = y.stripeJsId,
              S = y.locale;
            (this._id = (0, m.To)("__privateStripeController")),
              (this._stripeJsId = E),
              (this._apiKey = v),
              (this._apiVersion = b),
              (this._stripeAccount = k),
              (this._listenerRegistry = r),
              (this._betas = u),
              (this._locale = S),
              (this._getMids =
                d ||
                function () {
                  return null;
                }),
              (this._controllerFrame = new Mt({
                type: xe.NC.CONTROLLER,
                betas: u,
                controllerId: this._id,
                listenerRegistry: r,
                appParams: (0, a.Z)(
                  (0, a.Z)({}, y),
                  {},
                  { betas: u, stripeJsLoadTime: o.getAsPosixTime() }
                ),
              })),
              (this._stripeJsLoadTimestamp = o),
              (this._createTimestamp = i),
              (this._loadCount = 0);
            var P = function (e) {
              var t = e.anchor;
              (n._mountTimestamp = new Xe.E()),
                t !== document.body &&
                  n.report("controller.mount.custom_container");
            };
            this._controllerFrame._isMounted()
              ? P({ anchor: this._controllerFrame._iframe.parentElement })
              : this._controllerFrame._once("mount", P),
              c && this._controllerFrame._once("load", c),
              (this._frames = {}),
              (this._requests = {}),
              this._setupPostMessage(),
              (this._handleMessage = N(this._handleMessage, this)),
              this.action.fetchLocale({ locale: S || "auto" });
          }
          return (
            (0, u.Z)(e, [
              {
                key: "registerWrapper",
                value: function (e) {
                  this._controllerFrame.send({
                    action: "stripe-wrapper-register",
                    payload: { stripeWrapperLibrary: e },
                  });
                },
              },
              {
                key: "registerAppInfo",
                value: function (e) {
                  this._controllerFrame.send({
                    action: "stripe-app-info-register",
                    payload: { wrapperLibrary: e },
                  });
                },
              },
            ]),
            e
          );
        })(),
        Eo = ko,
        So = ["elements", "createToken", "createPaymentMethod"],
        Po = ["elements", "createSource", "createToken", "createPaymentMethod"],
        Ao = (function () {
          function e(t) {
            var n = this;
            (0, s.Z)(this, e),
              (this._gets = []),
              (this._didDetect = !1),
              (this._onDetection = function (e) {
                (n._didDetect = !0), t(e);
              }),
              window.Stripe &&
                window.Stripe.__cachedInstances &&
                this._onDetection("react-stripe-elements");
          }
          return (
            (0, u.Z)(e, [
              {
                key: "got",
                value: function (e) {
                  this._didDetect ||
                    ("elements" === e
                      ? (this._gets = ["elements"])
                      : this._gets.push(e),
                    this._checkForWrapper());
                },
              },
              {
                key: "called",
                value: function (e) {
                  this._didDetect ||
                    (this._gets = this._gets.filter(function (t) {
                      return t !== e;
                    }));
                },
              },
              {
                key: "_checkForWrapper",
                value: function () {
                  (0, v.Xy)(this._gets, So)
                    ? this._onDetection("react-stripe-js")
                    : (0, v.Xy)(this._gets, Po) &&
                      this._onDetection("react-stripe-elements");
                },
              },
            ]),
            e
          );
        })(),
        No = function (e) {
          if (!e || "object" != typeof e) return null;
          var t = e.type;
          return {
            type: "string" == typeof t ? t : null,
            data: (0, p.Z)(e, ["type"]),
          };
        },
        Co = function (e) {
          switch (e.type) {
            case "object":
              return { source: e.object };
            case "error":
              return { error: e.error };
            default:
              return (0, d.Rz)(e);
          }
        },
        Io = {
          source: (0, d.mC)({
            id: (0, d.xe)("src_"),
            client_secret: (0, d.xe)("src_client_secret_"),
          }),
        },
        To = (0, d.mC)(Io),
        Mo = function (e) {
          switch (e.type) {
            case "object":
              return { paymentMethod: e.object };
            case "error":
              return { error: e.error };
            default:
              return (0, d.Rz)(e);
          }
        },
        jo = function (e, t, n, r, o) {
          if ("string" == typeof n)
            return (function (e, t, n, r, o) {
              var i = (0, d.rX)(r),
                a = No(i ? o : r),
                c = a || { type: null, data: {} },
                s = c.type,
                u = c.data;
              if (s && n !== s)
                return D.J.reject(
                  new g.No(
                    "The type supplied in payment_method_data is not consistent."
                  )
                );
              if (i) {
                var l = i._implementation._frame.id,
                  p = i._componentName;
                return e.action
                  .createPaymentMethodWithElement({
                    frameId: l,
                    elementName: p,
                    type: n,
                    paymentMethodData: u,
                    mids: t,
                  })
                  .then(Mo);
              }
              return a
                ? e.action
                    .createPaymentMethodWithData({
                      elementName: null,
                      type: n,
                      paymentMethodData: u,
                      mids: t,
                    })
                    .then(Mo)
                : D.J.reject(
                    new g.No(
                      "Please provide either an Element or PaymentMethod creation parameters to createPaymentMethod."
                    )
                  );
            })(e, t, n, r, o);
          try {
            var i =
                ((p = n),
                (0, d.Gu)((0, fn.q2)(null), p, "createPaymentMethod").value),
              a = i.element,
              c = i.type,
              s = i.data;
            if (a) {
              var u = a._implementation._frame.id,
                l = a._componentName;
              return e.action
                .createPaymentMethodWithElement({
                  frameId: u,
                  elementName: l,
                  type: c,
                  paymentMethodData: s,
                  mids: t,
                })
                .then(Mo);
            }
            return e.action
              .createPaymentMethodWithData({
                elementName: null,
                type: c,
                paymentMethodData: s,
                mids: t,
              })
              .then(Mo);
          } catch (e) {
            return D.J.reject(e);
          }
          var p;
        },
        Ro = o(8792),
        Oo = o(8342),
        Zo = o(9966),
        xo = o(3713),
        Lo = {
          clientSecret: (0, d.jt)(d.Z_),
          params: (0, d.jt)(d.Ry),
          elements: (0, d.jt)(d.Ry),
        },
        Do = function (e, t) {
          var n = e.rawSecret,
            r = e.rawElements,
            o = e.validatedUpdateParams;
          if (
            ((function (e, t) {
              var n = e.rawSecret,
                r = e.rawElements;
              if (n && r)
                throw new g.No(
                  "".concat(
                    t,
                    ": expected either `elements` or `clientSecret`, but not both."
                  )
                );
              if (!n && !r)
                throw new g.No(
                  "".concat(
                    t,
                    ": expected either `elements` or `clientSecret`, but got neither."
                  )
                );
            })({ rawSecret: n, rawElements: r }, t),
            n)
          ) {
            if (
              (null == o ? void 0 : o.payment_method) &&
              (null == o ? void 0 : o.payment_method_data)
            )
              throw new g.No(
                "".concat(
                  t,
                  ": Expected either `payment_method` or `payment_method_data`, but not both."
                )
              );
            return { type: "clientSecret", clientSecret: n };
          }
          var i = (0, d.MO)(r);
          if (!i)
            throw new g.No(
              "Invalid value for "
                .concat(
                  t,
                  ": elements should be an Elements group. You specified: "
                )
                .concat(typeof r, ".")
            );
          return { type: "elements", elements: i };
        },
        Bo = function (e, t, n, r, o) {
          var i,
            c,
            s = (function (e) {
              var t = e.rawUpdateData,
                n = e.controller,
                r = e.errorMessageMethodName,
                o = (0, d.Gu)((0, d.mC)(Lo), t, r),
                i = o.value,
                a = i.elements,
                c = void 0 === a ? void 0 : a,
                s = i.params,
                u = i.clientSecret,
                l = o.warnings,
                p = (0, d.Gu)(
                  (0, d.jt)(
                    (0, d.mC)({
                      payment_method: (0, d.jt)(d.Z_),
                      payment_method_data: (0, d.jt)(d.Ry),
                      payment_method_options: (0, d.jt)(d.Ry),
                      setup_future_usage: (0, d.jt)(d.Xg),
                    })
                  ),
                  s,
                  r,
                  { path: ["params"] }
                ).value,
                m = Do(
                  { rawSecret: u, rawElements: c, validatedUpdateParams: p },
                  r
                );
              return (
                l.forEach(function (e) {
                  return n.warn(e);
                }),
                {
                  validatedUpdateParams: p,
                  rawUpdateParams: s,
                  validatedParams: m,
                }
              );
            })({ rawUpdateData: n, controller: e, errorMessageMethodName: o }),
            u = s.validatedParams,
            l = s.validatedUpdateParams,
            m = s.rawUpdateParams,
            f = null != m ? m : {},
            _ =
              (f.payment_method,
              f.payment_method_data,
              f.payment_method_options,
              (0, p.Z)(f, [
                "payment_method",
                "payment_method_data",
                "payment_method_options",
              ]));
          return "elements" === u.type
            ? {
                mode: {
                  tag: "elements",
                  groupId: u.elements._id,
                  data:
                    null !== (i = null == l ? void 0 : l.payment_method_data) &&
                    void 0 !== i
                      ? i
                      : {},
                  options:
                    null !==
                      (c = null == l ? void 0 : l.payment_method_options) &&
                    void 0 !== c
                      ? c
                      : {},
                },
                otherParams: _,
                expectedType: null,
                mids: t,
                options: null,
              }
            : (function (e) {
                var t,
                  n = e.validatedParams,
                  r = e.validatedConfirmParams,
                  o = e.otherParams,
                  i = e.intentType,
                  c = e.mids,
                  s = null != r ? r : {},
                  u = s.payment_method_data,
                  l = s.payment_method,
                  p = s.payment_method_options,
                  d =
                    "payment" === i
                      ? (0, Yn.cn)(n.clientSecret, "confirmPayment")
                      : (0, Yn.jH)(n.clientSecret, "confirmSetup"),
                  m = (0, Yn.k7)({ payment_method: u }),
                  f = {};
                return (
                  "paymentMethod" ===
                    (t =
                      u && m
                        ? {
                            intentSecret: d,
                            tag: "paymentMethod-from-data",
                            type: m,
                            data: u,
                            options: null != p ? p : {},
                          }
                        : l
                        ? {
                            intentSecret: d,
                            tag: "paymentMethod",
                            paymentMethod: l,
                            options: null != p ? p : {},
                          }
                        : { intentSecret: d, tag: "none" }).tag &&
                    (f = {
                      mandate_data: {
                        customer_acceptance: {
                          type: "online",
                          online: { infer_from_client: !0 },
                        },
                      },
                    }),
                  {
                    mids: c,
                    mode: t,
                    expectedType: m,
                    otherParams: (0, a.Z)((0, a.Z)({}, f), o),
                    options: { handleActions: !1 },
                  }
                );
              })({
                validatedParams: u,
                validatedConfirmParams: l,
                otherParams: _,
                intentType: r,
                mids: t,
              });
        },
        qo = function (e, t) {
          return function (n, r, o, i, c) {
            var s = (0, Yn.cn)(o, e),
              u = (0, Yn.o1)(t, e, i, s),
              l = (0, Yn.el)(e, c),
              p = "none" === u.mode.tag,
              d = n.action.confirmPaymentIntent(
                (0, a.Z)(
                  (0, a.Z)({}, u),
                  {},
                  { expectedType: t, options: l, mids: r }
                )
              );
            return l.handleActions
              ? d.then((0, Zo.nq)(n, p, !1, !1, u.otherParams.expand))
              : d.then(Oo.PA);
          };
        },
        Fo = qo("confirmAcssDebitPayment", Jr.GS.acss_debit),
        Uo = qo("confirmAffirmPayment", Jr.GS.affirm),
        Go = qo("confirmAfterpayClearpayPayment", Jr.GS.afterpay_clearpay),
        Yo = qo("confirmAuBecsDebitPayment", Jr.GS.au_becs_debit),
        zo = qo("confirmBacsDebitPayment", Jr.GS.bacs_debit),
        Ho = qo("confirmBancontactPayment", Jr.GS.bancontact),
        Ko = qo("confirmBoletoPayment", Jr.GS.boleto),
        Jo = qo("confirmCardPayment", Jr.GS.card),
        Wo = qo("confirmEpsPayment", Jr.GS.eps),
        Vo = qo("confirmFpxPayment", Jr.GS.fpx),
        Xo = qo("confirmGiropayPayment", Jr.GS.giropay),
        Qo = qo("confirmGrabPayPayment", Jr.GS.grabpay),
        $o = qo("confirmIdealPayment", Jr.GS.ideal),
        ei = qo("confirmKlarnaPayment", Jr.GS.klarna),
        ti = qo("confirmKonbiniPayment", Jr.GS.konbini),
        ni = qo("confirmMobilepayPayment", Jr.GS.mobilepay),
        ri = qo("confirmOxxoPayment", Jr.GS.oxxo),
        oi = qo("confirmAlipayPayment", Jr.GS.alipay),
        ii = qo("confirmP24Payment", Jr.GS.p24),
        ai = qo("confirmPayByBankPayment", Jr.GS.pay_by_bank),
        ci = qo("confirmPayPalPayment", Jr.GS.paypal),
        si = qo("confirmSepaDebitPayment", Jr.GS.sepa_debit),
        ui = qo("confirmSofortPayment", Jr.GS.sofort),
        li = qo("confirmIdBankTransferPayment", Jr.GS.id_bank_transfer),
        pi = qo("confirmUpiPayment", Jr.GS.upi),
        di = qo("confirmUsBankAccountPayment", Jr.GS.us_bank_account),
        mi = qo("confirmNzBankAccountPayment", Jr.GS.nz_bank_account),
        fi = qo("confirmBlikPayment", Jr.GS.blik),
        _i = qo("confirmZipPayment", Jr.GS.zip),
        hi = qo("confirmCustomerBalancePayment", Jr.GS.customer_balance),
        yi = function (e, t, n, r, o) {
          if (o && !0 === o.handleActions)
            throw new g.No("Expected option `handleActions` to be `false`.");
          var i = (0, a.Z)(
            (0, a.Z)({}, r),
            {},
            {
              payment_method: (0, a.Z)({}, (r && r.payment_method) || {}),
              payment_method_options: (0, a.Z)(
                (0, a.Z)({}, (r && r.payment_method_options) || {}),
                {},
                {
                  wechat_pay: (0, a.Z)(
                    (0, a.Z)(
                      {},
                      (r &&
                        r.payment_method_options &&
                        r.payment_method_options.wechat_pay) ||
                        {}
                    ),
                    {},
                    { client: "web" }
                  ),
                }
              ),
            }
          );
          return qo("confirmWechatPayPayment", Jr.GS.wechat_pay)(e, t, n, i, o);
        },
        vi = function (e, t, n, r, o) {
          if (
            !r ||
            !r.payment_method_options ||
            !r.payment_method_options.wechat_pay ||
            ("web" !== r.payment_method_options.wechat_pay.client &&
              "mobile_web" !== r.payment_method_options.wechat_pay.client)
          )
            throw new g.No(
              "Expected client value `web` or `mobile_web` in payment_method_options."
            );
          var i = {};
          "string" == typeof r.payment_method && (i = r.payment_method),
            "object" == typeof r.payment_method &&
              (i = (0, a.Z)({}, r.payment_method || {}));
          var c = (0, a.Z)(
            (0, a.Z)({}, r),
            {},
            {
              payment_method: i,
              payment_method_options: (0, a.Z)(
                (0, a.Z)({}, (r && r.payment_method_options) || {}),
                {},
                {
                  wechat_pay: (0, a.Z)(
                    {},
                    (r &&
                      r.payment_method_options &&
                      r.payment_method_options.wechat_pay) ||
                      {}
                  ),
                }
              ),
            }
          );
          return qo("confirmWechatPayPayment", Jr.GS.wechat_pay)(e, t, n, c, o);
        },
        gi = qo("confirmPayNowPayment", Jr.GS.paynow),
        bi = qo("confirmPixPayment", Jr.GS.pix),
        wi = qo("confirmPromptPayPayment", Jr.GS.promptpay),
        ki = qo("confirmQrisPayment", Jr.GS.qris),
        Ei = qo("confirmRevolutPayPayment", Jr.GS.revolut_pay),
        Si = qo("confirmNetbankingPayment", Jr.GS.netbanking),
        Pi = function (e, t, n, r) {
          var o = (0, Yn.cn)(n, "updatePaymentIntent"),
            i = (0, Yn.k7)(r),
            c = (0, Yn.o1)(i, "updatePaymentIntent", r, o);
          return e.action
            .updatePaymentIntent(
              (0, a.Z)(
                (0, a.Z)({}, c),
                {},
                { expectedType: i, mids: t, options: null }
              )
            )
            .then(Oo.PA);
        },
        Ai = function (e) {
          var t;
          return "error" in e &&
            "external_payment_method_selected" === e.error.code
            ? {
                selectedPaymentMethod:
                  null === (t = e.error.extra_fields) || void 0 === t
                    ? void 0
                    : t.selectedPaymentMethod,
              }
            : e;
        },
        Ni = function (e, t, n) {
          var r = (0, Yn.cn)(t, "verifyMicrodepositsForPayment"),
            o = (0, d.Gu)(d.Ry, n, "stripe.verifyMicrodepositsForPayment");
          return e.action
            .verifyMicrodepositsForPayment({ intentSecret: r, data: o.value })
            .then(Oo.PA);
        },
        Ci = function (e, t, n) {
          var r = (0, Yn.cn)(t, "collectUsBankAccountForPayment"),
            o = (0, d.Gu)(
              (0, fn.ZY)("us_bank_account"),
              n,
              "stripe.collectUsBankAccountForPayment"
            ).value,
            i = o.paymentMethodData,
            a = o.otherParams;
          return qn(r.clientSecret, r.id, e, i).then(function (t) {
            return t.error
              ? e.action.localizeError(t.error).then(function (e) {
                  return D.J.resolve({ error: e });
                })
              : t.linkAccountSession.paymentAccount
              ? e.action
                  .attachLinkAccountSessionForPayment({
                    intentSecret: r,
                    linkAccountSessionId: t.linkAccountSession.id,
                    expandParam: a.expand,
                  })
                  .then(function (e) {
                    return (0, Oo.PA)(e);
                  })
              : e.action
                  .retrievePaymentIntent({ intentSecret: r, hosted: !1 })
                  .then(Oo.PA);
          });
        },
        Ii = function (e, t) {
          var n = (0, d.Gu)(
              (0, fn.as)(fn.f4),
              t,
              "stripe.collectBankAccountForPayment"
            ).value,
            r = n.clientSecret,
            o = n.paymentMethodData,
            i = n.otherParams;
          return qn(r.clientSecret, r.id, e, o).then(function (t) {
            return t.error
              ? e.action.localizeError(t.error).then(function (e) {
                  return D.J.resolve({ error: e });
                })
              : t.linkAccountSession.paymentAccount
              ? e.action
                  .attachLinkAccountSessionForPayment({
                    intentSecret: r,
                    linkAccountSessionId: t.linkAccountSession.id,
                    expandParam: i.expand,
                  })
                  .then(function (e) {
                    return (0, Oo.PA)(e);
                  })
              : e.action
                  .retrievePaymentIntent({ intentSecret: r, hosted: !1 })
                  .then(Oo.PA);
          });
        },
        Ti = function (e, t) {
          var n = (0, Yn.cn)(e, "handleCardAction");
          return t.action
            .retrievePaymentIntent({ intentSecret: n, hosted: !1 })
            .then(function (e) {
              var n = (0, Zo.Fh)(e);
              switch (n.type) {
                case "error":
                  return D.J.resolve((0, Oo.PA)(e));
                case "object":
                  var r = n.object;
                  if ((0, Oo.mD)(r.status)) {
                    if ("manual" !== r.confirmation_method)
                      throw new g.No(
                        "handleCardAction: The PaymentIntent supplied does not require manual server-side confirmation. Please use confirmCardPayment instead to complete the payment."
                      );
                    return (0, Zo.gO)(t, r, n.locale, !1, !1);
                  }
                  throw new g.No(
                    "handleCardAction: The PaymentIntent supplied is not in the requires_action state."
                  );
                default:
                  return (0, d.Rz)(n);
              }
            });
        },
        Mi = Yn.OV,
        ji = function (e) {
          var t = e.mode;
          return !("paymentMethod-from-data" === t.tag && t.data.acss_debit);
        },
        Ri = function (e) {
          return null !== e && "object" == typeof e && !0 === e.skipMandate;
        },
        Oi = function (e) {
          return (
            null !== e && "object" == typeof e && !!e.shouldCreatePaymentMethod
          );
        },
        Zi = function (e) {
          var t = e.controller,
            n = e.shouldCreatePaymentMethod,
            r = e.intentSecret,
            o = e.mode,
            i = e.confirmIntentData;
          return t.action
            .createAcssDebitSession({
              intentSecret: r,
              shouldCreatePaymentMethod: n,
              confirmIntentData: i,
              mode: o,
            })
            .then(function (e) {
              if ("error" === e.type) return { type: "error", error: e.error };
              var n = (0, ao.q)(t, {
                url: (0, xe.jr)(e.object.url),
                size: "400x600",
                locale: e.locale,
                frameTitle: "acss.dialog_frame_title",
                useLightboxHostedCloseButton: !1,
              });
              return new D.J(function (e) {
                n._on("request-close", function () {
                  (0, ao.G)(n)
                    .then(function () {
                      return t.action.localizeError(Yn.LR);
                    })
                    .then(function (t) {
                      e({ type: "error", error: t });
                    });
                }),
                  n._on("session-complete", function (t) {
                    var r = t.paymentMethod;
                    (0, ao.G)(n).then(function () {
                      e({ type: "success", paymentMethod: r });
                    });
                  });
              });
            });
        },
        xi = function (e, t, n, r, o) {
          var i = "confirmAcssDebitPayment",
            c = Jr.GS.acss_debit,
            s = (0, Yn.cn)(n, i),
            u = (0, Yn.o1)(c, i, r, s),
            l = Oi(o);
          return (
            Mi(o, i),
            Ri(o) || !ji(u)
              ? e.action
                  .confirmPaymentIntent(
                    (0, a.Z)(
                      (0, a.Z)({}, u),
                      {},
                      {
                        expectedType: c,
                        options: { handleActions: !1 },
                        mids: t,
                      }
                    )
                  )
                  .then(Oo.PA)
              : Zi({
                  controller: e,
                  shouldCreatePaymentMethod: l,
                  intentSecret: s,
                  mode: "payment",
                  confirmIntentData: u,
                }).then(function (n) {
                  switch (n.type) {
                    case "error":
                      return { error: n.error };
                    case "success":
                      return e.action
                        .confirmPaymentIntent({
                          mode: {
                            tag: "paymentMethod",
                            paymentMethod: n.paymentMethod,
                            options: u.mode.options || {},
                            intentSecret: s,
                          },
                          otherParams: u.otherParams,
                          expectedType: c,
                          options: { handleActions: !1 },
                          mids: t,
                        })
                        .then(Oo.PA);
                    default:
                      return (0, d.Rz)(n.type);
                  }
                })
          );
        },
        Li = function (e, t, n, r, o) {
          var i = "confirmAcssDebitSetup",
            c = Jr.GS.acss_debit,
            s = (0, Yn.jH)(n, i),
            u = (0, Yn.o1)(c, i, r, s),
            l = Oi(o);
          return (
            Mi(o, i),
            Ri(o) || !ji(u)
              ? e.action
                  .confirmSetupIntent(
                    (0, a.Z)(
                      (0, a.Z)({}, u),
                      {},
                      {
                        expectedType: c,
                        options: { handleActions: !1 },
                        mids: t,
                      }
                    )
                  )
                  .then(Oo.e3)
              : Zi({
                  controller: e,
                  shouldCreatePaymentMethod: l,
                  intentSecret: s,
                  mode: "setup",
                  confirmIntentData: u,
                }).then(function (n) {
                  switch (n.type) {
                    case "error":
                      return { error: n.error };
                    case "success":
                      return e.action
                        .confirmSetupIntent({
                          mode: {
                            tag: "paymentMethod",
                            paymentMethod: n.paymentMethod,
                            options: u.mode.options || {},
                            intentSecret: s,
                          },
                          otherParams: u.otherParams,
                          expectedType: c,
                          options: { handleActions: !1 },
                          mids: t,
                        })
                        .then(Oo.e3);
                    default:
                      return (0, d.Rz)(n.type);
                  }
                })
          );
        },
        Di = { type: "validation_error", code: "errors.code.unexpected" },
        Bi = {
          type: "validation_error",
          code: "errors.code.incomplete_payment_details",
        },
        qi = function (e, t, n, r, o) {
          var i = "confirmInstantDebitsPilotPayment",
            c = (0, Yn.cn)(n, i),
            s = (0, Yn.el)(i, o),
            u = (0, Yn.o1)(null, i, r, c),
            l = e.createLightboxFrame({
              type: xe.NC.INSTANT_DEBITS_APP,
              options: {
                intentId: c.id,
                clientSecret: c.clientSecret,
                apiKey: e._apiKey,
                returnOnConfirm: !1 === s.handleActions,
              },
            });
          return (
            l.show(),
            l.fadeInBackdrop(),
            new D.J(function (n) {
              var r = function (e) {
                l.fadeOutBackdrop().then(function () {
                  n(e);
                });
              };
              l._once("cancel", function () {
                l.fadeOutBackdrop(),
                  e.action.localizeError(Bi).then(function (e) {
                    r({ error: e });
                  });
              }),
                l._on("instant-debits-fetch-payment-intent", function () {
                  e.action
                    .retrievePaymentIntent({ intentSecret: c, hosted: !1 })
                    .then(function (t) {
                      if (t.object) {
                        var o = t.object;
                        l.send({
                          action:
                            "stripe-instant-debits-received-payment-intent",
                          payload: { paymentIntent: o },
                        }),
                          !1 === s.handleActions &&
                            setTimeout(function () {
                              l.fadeOutBackdrop(), r((0, Oo.PA)(t));
                            }, 2e3);
                      } else {
                        var i = t.error;
                        e.action.localizeError(i).then(function (e) {
                          n({ error: e });
                        });
                      }
                    });
                }),
                l._on("instant-debits-attempt-payment", function (n) {
                  e.action
                    .confirmPaymentIntent(
                      (0, a.Z)(
                        (0, a.Z)({}, u),
                        {},
                        {
                          mode: { tag: "none", intentSecret: c },
                          expectedType: null,
                          options: s,
                          mids: t,
                        }
                      )
                    )
                    .then(function (t) {
                      t.object
                        ? (l.send({
                            action:
                              "stripe-instant-debits-successful-payment-intent",
                            payload: { paymentIntent: t.object },
                          }),
                          setTimeout(function () {
                            r((0, Oo.PA)(t));
                          }, 2e3))
                        : e.action.localizeError(t.error).then(function (e) {
                            r({ error: e });
                          });
                    });
                }),
                l._on("instant-debits-flow-error", function (t) {
                  e.action.localizeError(Di).then(function (e) {
                    r({ error: e });
                  });
                });
            })
          );
        },
        Fi = o(75),
        Ui = o(2073),
        Gi = o(9251),
        Yi = o(8551),
        zi = o(5642),
        Hi = function (e, t, n, r, o) {
          var i = (0, Fi.l)((0, Oo.G2)(t)),
            a = (0, Oo.O3)(t);
          if (!i) return D.J.resolve({ setupIntent: t });
          switch (i.type) {
            case "captcha-challenge":
              return (0, Yi.z)(i, t, e, n);
            case "3ds1-modal":
              return (0, Ui.s)(i, a, w.kE.SETUP_INTENT, e, n, o);
            case "3ds2-fingerprint":
            case "3ds2-challenge":
              return (0, Gi.A)(
                i,
                {
                  intentSecret: a,
                  intentType: w.kE.SETUP_INTENT,
                  controller: e,
                  locale: n,
                  hosted: r,
                },
                o
              );
            case "redirect":
              return (0, zi.e)(t, i.redirectUrl, e);
            default:
              return D.J.resolve({ setupIntent: t });
          }
        },
        Ki = function e(t, n, r, o, i) {
          var a =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (w.kO < a) throw new Error("max action recursion depth reached");
          return Hi(t, n, r, o, i || []).then(function (n) {
            if (n.paymentIntent)
              throw new Error("Got unexpected PaymentIntent response");
            if (
              n.setupIntent &&
              null != n.setupIntent.next_action &&
              "use_stripe_sdk" === n.setupIntent.next_action.type &&
              -1 !== w.zT.indexOf(n.setupIntent.next_action.use_stripe_sdk.type)
            ) {
              var c = a;
              return e(t, n.setupIntent, r, o, i, ++c);
            }
            return n;
          });
        },
        Ji = function (e, t, n, r) {
          return function (o) {
            switch (o.type) {
              case "error":
                var i = o.error,
                  a = i.setup_intent;
                return t && a && "succeeded" === a.status
                  ? D.J.resolve({ setupIntent: a })
                  : D.J.resolve({ error: i });
              case "object":
                var c = o.object;
                return Ki(e, c, o.locale, n, r);
              default:
                return (0, d.Rz)(o);
            }
          };
        },
        Wi = function (e, t) {
          var n = (0, d.Gu)(
            (0, d.mC)({ clientSecret: fn.Hv }),
            t,
            "stripe.handleNextAction"
          ).value.clientSecret;
          return "SETUP_INTENT" === n.type
            ? (function (e, t) {
                return e.action
                  .retrieveSetupIntent({ intentSecret: t, hosted: !1 })
                  .then(function (t) {
                    switch (t.type) {
                      case "error":
                        return D.J.resolve((0, Oo.e3)(t));
                      case "object":
                        var n = t.object;
                        if ((0, Oo.mD)(n.status)) return Ki(e, n, t.locale, !1);
                        throw new g.No(
                          "handleNextAction: The SetupIntent supplied is not in the requires_action state."
                        );
                      default:
                        return (0, d.Rz)(t);
                    }
                  });
              })(e, n)
            : (function (e, t) {
                return e.action
                  .retrievePaymentIntent({ intentSecret: t, hosted: !1 })
                  .then(function (t) {
                    switch (t.type) {
                      case "error":
                        return D.J.resolve((0, Oo.PA)(t));
                      case "object":
                        var n = t.object;
                        if ((0, Oo.mD)(n.status))
                          return (0, Zo.gO)(e, n, t.locale, !1, !1);
                        throw new g.No(
                          "handleNextAction: The PaymentIntent supplied is not in the requires_action state."
                        );
                      default:
                        return (0, d.Rz)(t);
                    }
                  });
              })(e, n);
        },
        Vi = function (e, t) {
          if (null == e) return (0, d.x4)(null);
          var n = e.type,
            r = (0, p.Z)(e, ["type"]),
            o = (0, d.Wc)(d.Z_, function () {
              return null;
            })(n, (0, d.NQ)(t, "type"));
          return "error" === o.type ? o : (0, d.x4)({ type: o.value, data: r });
        },
        Xi = function (e, t, n, r) {
          if (null === e) {
            if (null === t) {
              var o = r ? "source_data" : "payment_method_data";
              throw new g.No(
                ""
                  .concat(
                    n,
                    ": you must additionally specify the type of payment method to create within "
                  )
                  .concat(o, ".")
              );
            }
            return t;
          }
          if (null === t) return e;
          if (t !== e)
            throw new g.No(
              ""
                .concat(n, ": you specified `type: ")
                .concat(t, "`, but ")
                .concat(n, " will create a ")
                .concat(e, " payment method.")
            );
          return e;
        },
        Qi = function (e) {
          return function (t, n) {
            if ("object" == typeof t && null !== t) {
              var r = t.source,
                o = t.source_data,
                i = t.payment_method,
                c = t.payment_method_data,
                s = (0, p.Z)(t, [
                  "source",
                  "source_data",
                  "payment_method",
                  "payment_method_data",
                ]);
              if (null != r && "string" != typeof r)
                return (0, d.RH)("string", typeof r, (0, d.NQ)(n, "source"));
              if (null != i && "string" != typeof i)
                return (0, d.RH)(
                  "string",
                  typeof i,
                  (0, d.NQ)(n, "payment_method")
                );
              if (null != o && "object" != typeof o)
                return (0, d.RH)(
                  "object",
                  typeof o,
                  (0, d.NQ)(n, "source_data")
                );
              if (null != c && "object" != typeof c)
                return (0, d.RH)(
                  "object",
                  typeof c,
                  (0, d.NQ)(n, "payment_method_data")
                );
              var u = Vi(o, (0, d.NQ)(n, "source_data"));
              if ("error" === u.type) return u;
              var l = u.value,
                m = Vi(c, (0, d.NQ)(n, "payment_method_data"));
              if ("error" === m.type) return m;
              var f = m.value;
              return (0, d.x4)({
                sourceData: l,
                source: null == r ? null : r,
                paymentMethodData: f,
                paymentMethod: null == i ? null : i,
                otherParams: (0, a.Z)((0, a.Z)({}, e), s),
              });
            }
            return null === t
              ? (0, d.RH)("object", "null", n)
              : (0, d.RH)("object", typeof t, n);
          };
        },
        $i = function (e) {
          return function (t, n) {
            if (void 0 === t)
              return (0, d.x4)({
                sourceData: null,
                paymentMethodData: null,
                source: null,
                paymentMethod: null,
                otherParams: {},
              });
            if ("object" != typeof t) return (0, d.RH)("object", typeof t, n);
            if (null === t) return (0, d.RH)("object", "null", n);
            if (e) {
              if (!t.payment_intent) {
                var r = (0, d.Gu)(
                    (0, d.mC)({
                      return_url: (0, d.jt)(d.Z_),
                      expand: (0, d.jt)((0, d.CT)(d.Z_)),
                      shipping: (0, d.jt)(
                        (0, d.ci)({
                          name: d.Z_,
                          address: (0, d.ci)({
                            line1: (0, d.jt)(d.Z_),
                            line2: (0, d.jt)(d.Z_),
                            city: (0, d.jt)(d.Z_),
                            state: (0, d.jt)(d.Z_),
                            postal_code: (0, d.jt)(d.Z_),
                            country: (0, d.jt)(d.Z_),
                          }),
                        })
                      ),
                    }),
                    t,
                    "validate otherParams"
                  ).value,
                  o = (0, a.Z)((0, a.Z)({}, t), r);
                return (0, d.x4)({
                  sourceData: null,
                  paymentMethodData: null,
                  source: null,
                  paymentMethod: null,
                  otherParams: o,
                });
              }
              var i = t.payment_intent,
                c = (0, p.Z)(t, ["payment_intent"]);
              return Qi(c)(i, (0, d.NQ)(n, "payment_intent"));
            }
            return t.payment_intent
              ? (0, d.zS)(
                  new g.No(
                    "The payment_intent parameter has been removed. To fix, move everything nested under the payment_intent parameter to the top-level object."
                  )
                )
              : Qi({})(t, n);
          };
        },
        ea = function (e, t, n, r, o) {
          return function (i, c) {
            var s = (function (e, t, n, r, o, i, c) {
              var s = (0, d.ld)(d.IN, o, r);
              if ("error" === s.type) return null;
              var u = s.value,
                l = (0, d.Gu)($i(t), i, r).value,
                p = l.sourceData,
                m = l.source,
                f = l.paymentMethodData,
                _ = l.paymentMethod,
                h = l.otherParams;
              if (!e && p)
                throw new g.No(
                  "".concat(
                    r,
                    ": Expected payment_method_data, not source_data."
                  )
                );
              if (null != m)
                throw new g.No(
                  "When calling ".concat(
                    r,
                    " on an Element, you can't pass in a pre-existing source ID, as a source will be created using the Element."
                  )
                );
              if (null != _)
                throw new g.No(
                  "When calling ".concat(
                    r,
                    " on an Element, you can't pass in a pre-existing PaymentMethod ID, as a PaymentMethod will be created using the Element."
                  )
                );
              var y = u._componentName,
                v = u._implementation._frame.id,
                b = p || f || { type: null, data: {} },
                w = b.type,
                k = b.data,
                E = (0, Jr.ZX)(y, w),
                S = e && !f,
                P = {
                  elementName: y,
                  frameId: v,
                  type: Xi(n, E, r, S),
                  data: k,
                };
              return S
                ? {
                    mode: (0, a.Z)(
                      { tag: "source-from-element", intentSecret: c },
                      P
                    ),
                    otherParams: h,
                  }
                : {
                    mode: (0, a.Z)(
                      {
                        tag: "paymentMethod-from-element",
                        options: null,
                        intentSecret: c,
                      },
                      P
                    ),
                    otherParams: h,
                  };
            })(e, t, n, r, i, c, o);
            if (s) return s;
            var u = (function (e, t, n, r, o, i, a) {
              var c = (0, d.Gu)($i(t), o, r).value,
                s = c.sourceData,
                u = c.source,
                l = c.paymentMethodData,
                p = c.paymentMethod,
                m = c.otherParams;
              if (!e && s)
                throw new g.No(
                  "".concat(
                    r,
                    ": Expected payment_method, source, or payment_method_data, not source_data."
                  )
                );
              if (null !== u && null !== s)
                throw new g.No(
                  "".concat(
                    r,
                    ": Expected either source or source_data, but not both."
                  )
                );
              if (null !== p && null !== l)
                throw new g.No(
                  "".concat(
                    r,
                    ": Expected either payment_method or payment_method_data, but not both."
                  )
                );
              if (null !== p && null !== u)
                throw new g.No(
                  "".concat(
                    r,
                    ": Expected either payment_method or source, but not both."
                  )
                );
              if (s || l) {
                var f = s || l || {},
                  _ = f.type,
                  h = f.data,
                  y = e && !l,
                  v = Xi(n, _, r, y);
                return y
                  ? {
                      mode: {
                        tag: "source-from-data",
                        intentSecret: a,
                        type: v,
                        data: h,
                      },
                      otherParams: m,
                    }
                  : {
                      mode: {
                        tag: "paymentMethod-from-data",
                        type: v,
                        data: h,
                        intentSecret: a,
                        options: null,
                      },
                      otherParams: m,
                    };
              }
              return null !== u
                ? {
                    mode: { tag: "source", intentSecret: a, source: u },
                    otherParams: m,
                  }
                : null !== p
                ? {
                    mode: {
                      tag: "paymentMethod",
                      paymentMethod: p,
                      intentSecret: a,
                      options: null,
                    },
                    otherParams: m,
                  }
                : { mode: { tag: "none", intentSecret: a }, otherParams: m };
            })(e, t, n, r, i, 0, o);
            if (u) return u;
            throw new g.No(
              "Expected: stripe."
                .concat(r, "(intentSecret, element[, data]) or stripe.")
                .concat(
                  r,
                  "(intentSecret[, data]). Please see the docs for more usage examples https://stripe.com/docs/payments/dynamic-authentication"
                )
            );
          };
        },
        ta = function (e, t, n, r, o, i) {
          var c = (0, d.Gu)(
              fn.f4,
              r,
              "stripe.confirmPaymentIntent intent secret"
            ).value,
            s = ea(e, !1, null, "confirmPaymentIntent", c)(o, i);
          return t.action
            .confirmPaymentIntent(
              (0, a.Z)(
                (0, a.Z)({}, s),
                {},
                { expectedType: null, options: { handleActions: !1 }, mids: n }
              )
            )
            .then(Oo.PA);
        },
        na = function (e, t, n, r, o, i, c) {
          var s = (0, d.Gu)(
              fn.f4,
              o,
              "stripe.handleCardPayment intent secret"
            ).value,
            u = Jr.GS.card,
            l = ea(e, r, u, "handleCardPayment", s)(i, c),
            p = !i && !c;
          return t.action
            .confirmPaymentIntent(
              (0, a.Z)(
                (0, a.Z)({}, l),
                {},
                { expectedType: u, options: { handleActions: !0 }, mids: n }
              )
            )
            .then((0, Zo.nq)(t, p, !1, !1));
        },
        ra = function (e, t, n, r, o, i) {
          var c = (0, d.Gu)(
              fn.f4,
              r,
              "stripe.handleSepaDebitPayment intent secret"
            ).value,
            s = Jr.GS.sepa_debit,
            u = ea(!1, n, s, "handleSepaDebitPayment", c)(o, i),
            l = !o && !i;
          return e.action
            .confirmPaymentIntent(
              (0, a.Z)(
                (0, a.Z)({}, u),
                {},
                { expectedType: s, options: { handleActions: !0 }, mids: t }
              )
            )
            .then((0, Zo.nq)(e, l, !1, !1));
        },
        oa = function (e, t, n, r, o, i, c) {
          var s = (0, d.Gu)(
              fn.f4,
              o,
              "stripe.handleIdealPayment intent secret"
            ).value,
            u = Jr.GS.ideal,
            l = ea(e, r, u, "handleIdealPayment", s)(i, c),
            p = !i && !c;
          return t.action
            .confirmPaymentIntent(
              (0, a.Z)(
                (0, a.Z)({}, l),
                {},
                { expectedType: u, options: { handleActions: !0 }, mids: n }
              )
            )
            .then((0, Zo.nq)(t, p, !1, !1));
        },
        ia = function (e, t, n, r, o, i) {
          var c = (0, d.Gu)(
              fn.f4,
              r,
              "stripe.handleFpxPayment intent secret"
            ).value,
            s = Jr.GS.fpx,
            u = ea(!1, n, s, "handleFpxPayment", c)(o, i),
            l = !o && !i;
          return e.action
            .confirmPaymentIntent(
              (0, a.Z)(
                (0, a.Z)({}, u),
                {},
                { expectedType: s, options: { handleActions: !0 }, mids: t }
              )
            )
            .then((0, Zo.nq)(e, l, !1, !1));
        },
        aa = function (e) {
          switch (e.type) {
            case "object":
              return { returnIntent: e.object };
            case "error":
              return { error: e.error };
            default:
              return (0, d.Rz)(e);
          }
        },
        ca = function (e, t, n) {
          return e.action
            .confirmReturnIntent({ returnIntentId: t, data: n })
            .then(aa);
        },
        sa = function (e, t) {
          return function (n, r, o, i, c) {
            var s = (0, Yn.jH)(o, e),
              u = (0, Yn.o1)(t, e, i, s),
              l = (0, Yn.el)(e, c),
              p = "none" === u.mode.tag,
              d = n.action.confirmSetupIntent(
                (0, a.Z)(
                  (0, a.Z)({}, u),
                  {},
                  { expectedType: t, options: l, mids: r }
                )
              );
            return l.handleActions
              ? d.then(Ji(n, p, !1, u.otherParams.expand))
              : d.then(Oo.e3);
          };
        },
        ua = sa("confirmAcssDebitSetup", Jr.GS.acss_debit),
        la = sa("confirmAfterpayClearpaySetup", Jr.GS.afterpay_clearpay),
        pa = sa("confirmCardSetup", Jr.GS.card),
        da = sa("confirmSepaDebitSetup", Jr.GS.sepa_debit),
        ma = sa("confirmAuBecsDebitSetup", Jr.GS.au_becs_debit),
        fa = sa("confirmBacsDebitSetup", Jr.GS.bacs_debit),
        _a = sa("confirmIdealSetup", Jr.GS.ideal),
        ha = sa("confirmAlipaySetup", Jr.GS.alipay),
        ya = sa("confirmSofortSetup", Jr.GS.sofort),
        va = sa("confirmBancontactSetup", Jr.GS.bancontact),
        ga = sa("confirmIdBankTransferSetup", Jr.GS.id_bank_transfer),
        ba = sa("confirmPayPalSetup", Jr.GS.paypal),
        wa = sa("confirmUsBankAccountSetup", Jr.GS.us_bank_account),
        ka = sa("confirmNzBankAccountSetup", Jr.GS.nz_bank_account),
        Ea = function (e) {
          var t;
          return "error" in e &&
            "external_payment_method_selected" === e.error.code
            ? {
                selectedPaymentMethod:
                  null === (t = e.error.extra_fields) || void 0 === t
                    ? void 0
                    : t.selectedPaymentMethod,
              }
            : e;
        },
        Sa = function (e, t, n) {
          var r = (0, Yn.jH)(t, "verifyMicrodepositsForSetup"),
            o = (0, d.Gu)(d.Ry, n, "stripe.verifyMicrodepositsForSetup");
          return e.action
            .verifyMicrodepositsForSetup({ intentSecret: r, data: o.value })
            .then(Oo.e3);
        },
        Pa = function (e, t, n) {
          var r = (0, Yn.jH)(t, "collectUsBankAccountForSetup"),
            o = (0, d.Gu)(
              (0, fn.ZY)("us_bank_account"),
              n,
              "stripe.collectUsBankAccountForSetup"
            ).value,
            i = o.paymentMethodData,
            a = o.otherParams;
          return Fn(r.clientSecret, r.id, e, i).then(function (t) {
            return t.error
              ? e.action.localizeError(t.error).then(function (e) {
                  return D.J.resolve({ error: e });
                })
              : t.linkAccountSession.paymentAccount
              ? e.action
                  .attachLinkAccountSessionForSetup({
                    intentSecret: r,
                    linkAccountSessionId: t.linkAccountSession.id,
                    expandParam: a.expand,
                  })
                  .then(function (e) {
                    return (0, Oo.e3)(e);
                  })
              : e.action
                  .retrieveSetupIntent({ intentSecret: r, hosted: !1 })
                  .then(Oo.e3);
          });
        },
        Aa = function (e, t) {
          var n = (0, d.Gu)(
              (0, fn.as)(fn.Yj),
              t,
              "stripe.collectBankAccountForSetup"
            ).value,
            r = n.clientSecret,
            o = n.paymentMethodData,
            i = n.otherParams;
          return Fn(r.clientSecret, r.id, e, o).then(function (t) {
            return t.error
              ? e.action.localizeError(t.error).then(function (e) {
                  return D.J.resolve({ error: e });
                })
              : t.linkAccountSession.paymentAccount
              ? e.action
                  .attachLinkAccountSessionForSetup({
                    intentSecret: r,
                    linkAccountSessionId: t.linkAccountSession.id,
                    expandParam: i.expand,
                  })
                  .then(function (e) {
                    return (0, Oo.e3)(e);
                  })
              : e.action
                  .retrieveSetupIntent({ intentSecret: r, hosted: !1 })
                  .then(Oo.e3);
          });
        },
        Na = function (e, t, n, r, o) {
          var i = (0, d.Gu)(
              fn.Yj,
              n,
              "stripe.handleCardSetup intent secret"
            ).value,
            c = Jr.GS.card,
            s = ea(!1, !1, c, "handleCardSetup", i)(r, o),
            u = !r && !o;
          return e.action
            .confirmSetupIntent(
              (0, a.Z)(
                (0, a.Z)({}, s),
                {},
                { expectedType: c, options: { handleActions: !0 }, mids: t }
              )
            )
            .then(Ji(e, u, !1, s.otherParams.expand));
        },
        Ca = function (e, t, n, r, o) {
          var i = (0, d.Gu)(
              fn.Yj,
              n,
              "stripe.handleSepaDebitSetup intent secret"
            ).value,
            c = Jr.GS.sepa_debit,
            s = ea(!1, !1, c, "handleSepaDebitSetup", i)(r, o),
            u = !r && !o;
          return e.action
            .confirmSetupIntent(
              (0, a.Z)(
                (0, a.Z)({}, s),
                {},
                { expectedType: c, options: { handleActions: !0 }, mids: t }
              )
            )
            .then(Ji(e, u, !1));
        },
        Ia = function (e, t, n, r, o) {
          var i = (0, d.Gu)(
              fn.Yj,
              n,
              "stripe.confirmSetupIntent intent secret"
            ).value,
            c = ea(!1, !1, null, "confirmSetupIntent", i)(r, o);
          return e.action
            .confirmSetupIntent(
              (0, a.Z)(
                (0, a.Z)({}, c),
                {},
                {
                  otherParams: (0, a.Z)({}, c.otherParams),
                  expectedType: null,
                  options: { handleActions: !1 },
                  mids: t,
                }
              )
            )
            .then(Oo.e3);
        },
        Ta = function (e, t) {
          var n = (function (e) {
              if ("string" == typeof e) {
                var t = e.trim().match(/^((vi|vs)_[0-9a-zA-Z]+)_secret_(.+)$/);
                if (!t)
                  throw new g.No(
                    "stripe.verifyIdentity: Could not parse client secret."
                  );
                return { identityClientSecret: t[0], id: t[1], token: t[3] };
              }
              throw new g.No(
                "stripe.verifyIdentity: Could not parse client secret."
              );
            })(e),
            r = n.id,
            o = (function (e) {
              return "".concat(w.Ht, "start/").concat(e);
            })(n.token);
          return (function (e) {
            var t = e.controller,
              n = e.url,
              r = (e.id, e.locale),
              o = void 0 === r ? "en-US" : r,
              i = (0, ao.q)(t, {
                url: (0, xe.jr)(n),
                size: "1100x800",
                frameTitle: "identity.verification_frame_title",
                locale: o,
                useLightboxHostedCloseButton: !0,
                allowCamera: !0,
                appType: "identity",
              });
            return new D.J(function (e) {
              var t = { type: "user_action", code: "session_cancelled" };
              i._on("identity-frame-close", function () {
                (0, ao.G)(i).then(function () {
                  e({ error: t });
                });
              }),
                i._on("identity-frame-error", function (e) {
                  var n = e.type,
                    r = e.code;
                  t = { type: n, code: r };
                }),
                i._on("identity-frame-session-complete", function () {
                  t = null;
                }),
                i._on("request-close", function (n) {
                  (0, ao.G)(i).then(function () {
                    e({ error: t });
                  });
                });
            });
          })({ controller: t, url: o, id: r });
        },
        Ma = ["number", "cvc", "pin.number"],
        ja = function (e, t) {
          if ("string" != typeof e)
            return (0, d.$3)("an Issuing card ID of the form ic_xxx", e, t);
          var n,
            r = (n = e.trim().match(/ic_[a-zA-Z0-9_]+$/)) ? n[0] : null;
          return null === r
            ? (0, d.$3)("an Issuing card ID of the form ic_xxx", e, t)
            : (0, d.x4)(r, []);
        },
        Ra = function (e, t) {
          return (0, d.Gu)(ja, e, "stripe.".concat(t, " cardId")).value;
        },
        Oa = function (e, t) {
          if ("string" != typeof e)
            return (0, d.$3)(
              "an ephemeral key secret of the form ek_xxx",
              e,
              t
            );
          var n,
            r = (n = e.trim().match(/ek_[a-zA-Z0-9_]+$/)) ? n[0] : null;
          return null === r
            ? (0, d.$3)("an ephemeral key secret of the form ek_xxx", e, t)
            : (0, d.x4)(r, []);
        },
        Za = function (e, t) {
          return "string" != typeof e
            ? (0, d.$3)("a string", e, t)
            : Ma.indexOf(e) < 0
            ? (0, d.$3)("any of ".concat(Ma.join(", ")), e, t)
            : (0, d.x4)(e, []);
        },
        xa = function (e, t) {
          return (0, d.Gu)(Oa, e, "stripe.".concat(t, " ephemeral key secret"))
            .value;
        },
        La = function (e, t) {
          if ("string" != typeof e)
            return (0, d.$3)(
              "an ephemeral key nonce of the form ephkn_xxx",
              e,
              t
            );
          var n,
            r = (n = e.trim().match(/ephkn_[a-zA-Z0-9_]+$/)) ? n[0] : null;
          return null === r
            ? (0, d.$3)("an ephemeral key nonce of the form ephkn_xxx", e, t)
            : (0, d.x4)(r, []);
        },
        Da = function (e) {
          if ("object" == typeof e && e && e.ephemeralKeySecret && e.nonce) {
            var t,
              n = xa(e.ephemeralKeySecret, "retrieveIssuingCard"),
              r =
                ((o = e.nonce),
                (i = "retrieveIssuingCard"),
                (0, d.Gu)(La, o, "stripe.".concat(i, " ephemeral key nonce"))
                  .value);
            return (
              Array.isArray(e.expand) &&
                (t = e.expand.map(function (e) {
                  return (function (e, t) {
                    return (0,
                    d.Gu)(Za, e, "stripe.".concat(t, " expand param")).value;
                  })(e, "retrieveIssuingCard");
                })),
              { ephemeralKeySecret: n, publicNonce: r, expand: t }
            );
          }
          throw new g.No(
            "When retrieving an Issuing card, you must specify an ephemeral key secret and an ephemeral key nonce in the options argument of stripe.retrieveIssuingCard."
          );
          var o, i;
        },
        Ba = function (e, t) {
          var n = (function (e) {
            if ("object" == typeof e && e && e.issuingCard)
              return {
                issuingCard: Ra(e.issuingCard, "createEphemeralKeyNonce"),
              };
            throw new g.No(
              "When creating an ephemeral key nonce, you must specify an Issuing card ID in the options argument of stripe.createEphemeralKeyNonce."
            );
          })(e);
          return t.action
            .createEphemeralKeyNonce({ cardId: n.issuingCard })
            .then(zt);
        },
        qa = [y.M4.checkout_beta_2, y.M4.checkout_beta_3, y.M4.checkout_beta_4],
        Fa = [
          y.M4.checkout_beta_2,
          y.M4.checkout_beta_3,
          y.M4.checkout_beta_4,
          y.M4.checkout_beta_locales,
          y.M4.checkout_beta_testcards,
        ],
        Ua = {
          bg: "bg",
          cs: "cs",
          da: "da",
          de: "de",
          el: "el",
          en: "en",
          "en-GB": "en-GB",
          es: "es",
          "es-419": "es-419",
          et: "et",
          fi: "fi",
          fil: "fil",
          fr: "fr",
          "fr-CA": "fr-CA",
          hr: "hr",
          hu: "hu",
          id: "id",
          it: "it",
          ja: "ja",
          ko: "ko",
          lt: "lt",
          lv: "lv",
          ms: "ms",
          mt: "mt",
          nb: "nb",
          nl: "nl",
          pl: "pl",
          pt: "pt",
          "pt-BR": "pt-BR",
          ro: "ro",
          ru: "ru",
          sk: "sk",
          sl: "sl",
          sv: "sv",
          th: "th",
          tr: "tr",
          vi: "vi",
          zh: "zh",
          "zh-HK": "zh-HK",
          "zh-TW": "zh-TW",
        },
        Ga = { "pt-PT": "pt-PT" },
        Ya = Object.keys(Ua),
        za = Object.keys(Ga),
        Ha = {
          sku: (0, d.jt)(d.Z_),
          plan: (0, d.jt)(d.Z_),
          clientReferenceId: (0, d.jt)(d.Z_),
          locale: (0, d.jt)(d.kw.apply(void 0, ["auto"].concat((0, c.Z)(Ya)))),
          customerEmail: (0, d.jt)(d.Z_),
          billingAddressCollection: (0, d.jt)((0, d.kw)("required", "auto")),
          submitType: (0, d.jt)((0, d.kw)("auto", "pay", "book", "donate")),
          allowIncompleteSubscriptions: (0, d.jt)(d.Xg),
          shippingAddressCollection: (0, d.jt)(
            (0, d.ci)({ allowedCountries: (0, d.CT)(d.Z_) })
          ),
        },
        Ka = /cs_(test|live)_.+/,
        Ja = function (e, t) {
          var n = (0, d.ci)(
              (0, a.Z)(
                (0, a.Z)({}, Ha),
                {},
                {
                  items: (0, d.jt)(
                    (0, d.or)(
                      (0, d.CT)(
                        (0, d.ci)({
                          type: (0, d.kw)("plan"),
                          quantity: (0, d.M4)(0),
                          id: d.Z_,
                        })
                      ),
                      (0, d.CT)(
                        (0, d.ci)({
                          type: (0, d.kw)("sku"),
                          quantity: (0, d.M4)(0),
                          id: d.Z_,
                        })
                      )
                    )
                  ),
                  successUrl: d.Z_,
                  cancelUrl: d.Z_,
                }
              )
            ),
            r = (0, d.Gu)(n, t, "stripe.redirectToCheckout").value,
            o = r.sku,
            i = r.plan,
            c = r.items,
            s = (0, p.Z)(r, ["sku", "plan", "items"]),
            u = (function (e, t, n) {
              if ((e && t) || ((e || t) && n))
                throw new g.No(
                  "stripe.redirectToCheckout: Expected only one of sku, plan, or items."
                );
              if ("string" == typeof e) return [{ sku: e, quantity: 1 }];
              if ("string" == typeof t) return [{ plan: t, quantity: 1 }];
              if (n)
                return n.map(function (e) {
                  return "sku" === e.type
                    ? { sku: e.id, quantity: e.quantity }
                    : { plan: e.id, quantity: e.quantity };
                });
              throw new g.No(
                "stripe.redirectToCheckout: You must provide either sku, plan, or items."
              );
            })(o, i, c);
          return (0, a.Z)({ tag: "no-session", items: u }, s);
        },
        Wa = function (e, t, n) {
          var r = (0, d.ci)(
              (0, a.Z)(
                (0, a.Z)({}, Ha),
                {},
                {
                  sessionId: (0, d.jt)(d.Z_),
                  successUrl: (0, d.jt)(d.Z_),
                  cancelUrl: (0, d.jt)(d.Z_),
                  mode: (0, d.jt)((0, d.kw)("subscription", "payment")),
                  items: (0, d.jt)(
                    (0, d.or)(
                      (0, d.CT)(
                        (0, d.ci)({ quantity: (0, d.M4)(0), plan: d.Z_ })
                      ),
                      (0, d.CT)(
                        (0, d.ci)({ quantity: (0, d.M4)(0), sku: d.Z_ })
                      )
                    )
                  ),
                  lineItems: (0, d.jt)(
                    (0, d.CT)(
                      (0, d.ci)({ quantity: (0, d.M4)(0), price: d.Z_ })
                    )
                  ),
                },
                -1 !== e.indexOf("checkout_beta_locales")
                  ? {
                      locale: (0, d.jt)(
                        d.kw.apply(
                          void 0,
                          ["auto"].concat((0, c.Z)(Ya), (0, c.Z)(za))
                        )
                      ),
                    }
                  : {}
              )
            ),
            o = (0, d.Gu)(r, t, "stripe.redirectToCheckout").value;
          if (o.sessionId) {
            var i = o.sessionId;
            if (Object.keys(o).length > 1)
              throw new g.No(
                "stripe.redirectToCheckout: Do not provide other parameters when providing sessionId. Specify all parameters on your server when creating the CheckoutSession."
              );
            if (!/^cs_/.test(i))
              throw new g.No(
                "stripe.redirectToCheckout: Invalid value for sessionId. You specified '".concat(
                  i,
                  "'."
                )
              );
            if ("live" === n && /^cs_test_/.test(i))
              throw new g.No(
                "stripe.redirectToCheckout: the provided sessionId is for a test mode Checkout Session, whereas Stripe.js was initialized with a live mode publishable key."
              );
            if ("test" === n && /^cs_live_/.test(i))
              throw new g.No(
                "stripe.redirectToCheckout: the provided sessionId is for a live mode Checkout Session, whereas Stripe.js was initialized with a test mode publishable key."
              );
            return { tag: "session", sessionId: i };
          }
          o.sessionId, o.sku, o.plan;
          var s = o.items,
            u = o.lineItems,
            l = o.successUrl,
            m = o.cancelUrl,
            f = o.mode,
            _ = (0, p.Z)(o, [
              "sessionId",
              "sku",
              "plan",
              "items",
              "lineItems",
              "successUrl",
              "cancelUrl",
              "mode",
            ]);
          if (!u && !s)
            throw new g.No(
              "stripe.redirectToCheckout: You must provide one of lineItems, items, or sessionId."
            );
          if (!l || !m)
            throw new g.No(
              "stripe.redirectToCheckout: You must provide successUrl and cancelUrl."
            );
          return (0, a.Z)(
            {
              tag: "no-session",
              items: s,
              lineItems: u,
              successUrl: l,
              cancelUrl: m,
              mode: f,
            },
            _
          );
        },
        Va = function (e, t, n) {
          var r = Wa(e, t, n);
          if ("no-session" === r.tag) {
            var o = r.successUrl,
              i = r.cancelUrl;
            if (!(0, h.sD)(o))
              throw new g.No(
                "stripe.redirectToCheckout: successUrl must start with either http:// or https://."
              );
            if (!(0, h.sD)(i))
              throw new g.No(
                "stripe.redirectToCheckout: cancelUrl must start with either http:// or https://."
              );
            return r;
          }
          return r;
        },
        Xa = function (e, t) {
          return "session" === t.tag ||
            null == e ||
            t.locale ||
            -1 === ["auto"].concat((0, c.Z)(Ya)).indexOf(e)
            ? t
            : (0, a.Z)((0, a.Z)({}, t), {}, { locale: e });
        },
        Qa = function (e, t, n) {
          var r = (0, v.sE)(qa, function (t) {
            return (0, y.uN)(e, t);
          });
          if (t && t.lineItems && r)
            throw new g.No("Prices cannot be used with ".concat(r));
          if ("string" == typeof t && Ka.test(t))
            throw new g.No(
              "stripe.redirectToCheckout: Checkout Session IDs must be passed in as an object with a key of `sessionId` and the Session ID as the value."
            );
          switch (r) {
            case "checkout_beta_2":
              return Ja(0, t);
            case "checkout_beta_3":
              return Wa(e, t, n);
            default:
              return Va(e, t, n);
          }
        },
        $a = function (e, t, n) {
          var r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "unknown";
          return Xa(t, Qa(e, n, r));
        },
        ec = function (e, t) {
          var n = t;
          return (
            Boolean(!1) &&
              window.__STRIPE_CHECKOUT_URL_OVERRIDE__ &&
              (n = t.replace(
                /^https?:\/\/[^/]+\//,
                window.__STRIPE_CHECKOUT_URL_OVERRIDE__
              )),
            (0, Ro.U)(n).then(function (t) {
              return (0, Ro.d)(e, "redirectToCheckout", t), { error: t.error };
            })
          );
        },
        tc = function (e) {
          switch (e.type) {
            case "object":
              return { token: e.object };
            case "error":
              return { error: e.error };
            default:
              return (0, d.Rz)(e);
          }
        },
        nc = function (e) {
          return "object" == typeof e && null !== e ? e : {};
        },
        rc = function (e) {
          switch (e.type) {
            case "object":
              return { radarSession: e.object };
            case "error":
              return { error: e.error };
            default:
              return (0, d.Rz)(e);
          }
        },
        oc = "securitypolicyviolation",
        ic = window,
        ac = /^require-trusted-types-for/,
        cc = "LOAD_ERROR",
        sc = "REPORT_ONLY",
        uc = "BLOCKED",
        lc = new Xe.E(),
        pc = document ? document.readyState : "unknown",
        dc = !1;
      switch (pc) {
        case "loading":
          dc = !0;
          break;
        case "interactive":
          try {
            var mc = function () {
              dc = !0;
            };
            setTimeout(function () {
              document.removeEventListener("DOMContentLoaded", mc);
            }, 0),
              document.addEventListener("DOMContentLoaded", mc);
          } catch (e) {}
      }
      var fc,
        _c = !1,
        hc = function e(t, n, r, i) {
          if (!_c || i) {
            _c = !0;
            var c = i || new Xe.E();
            if ("complete" === document.readyState) {
              var s = null,
                u = null,
                p = null,
                d = null,
                m = null;
              if (window.performance) {
                if (window.performance.timing) {
                  var f = window.performance.timing,
                    _ = f.fetchStart;
                  (s = f.domLoading - _),
                    (u = f.domInteractive - _),
                    (p = f.domComplete - _),
                    (d = Xe.E.fromPosixTime(_).getElapsedTime(lc));
                }
                if (window.performance.getEntriesByType) {
                  var y = window.performance.getEntriesByType("resource"),
                    v = "https://js.stripe.com/v3/".replace(/\/$/, "");
                  m = y.reduce(function (e, t) {
                    if (0 === t.name.indexOf(v)) {
                      var n = t.name.match(/\/([^/#?]*)\/?(?:$|[#?])/);
                      if (n && n[1]) {
                        var r = n[1].replace(/-[0-9a-f]{32}\./, ".");
                        return (
                          "v3" === r && (r = "stripe.js"),
                          (0, a.Z)(
                            (0, a.Z)({}, e),
                            {},
                            (0, l.Z)({}, r, {
                              transfer_size: t.transferSize,
                              duration: Math.round(t.duration),
                            })
                          )
                        );
                      }
                    }
                    return e;
                  }, {});
                }
              }
              t.report("timings", {
                element: t.controllerFor(),
                dom_loading: s,
                dom_interactive: u,
                dom_complete: p,
                since_fetch: d,
                load_count: 1,
                load_before_dom_content_loaded: dc,
                load_ready_state: pc,
                first_create_ready_state: n,
                first_mount_readyState: r,
                until_first_create: lc.getElapsedTime(t._createTimestamp),
                until_first_mount: t._mountTimestamp
                  ? lc.getElapsedTime(t._mountTimestamp)
                  : null,
                until_first_load: lc.getElapsedTime(c),
                resource_timings: m,
              }),
                setTimeout(function () {
                  new D.J(function (e) {
                    if (ic.trustedTypes && ic.Promise) {
                      var t,
                        n = !1,
                        r = function (e) {
                          (ac.test(e.effectiveDirective) ||
                            ac.test(e.violatedDirective)) &&
                            ((0, h.vo)(e.blockedURI) ||
                              (0, h.vo)(e.sourceFile)) &&
                            (n = !0);
                        },
                        i = function () {
                          return n ? uc : cc;
                        };
                      ic.addEventListener(oc, r);
                      try {
                        t = o
                          .e(913)
                          .then(o.bind(o, 8675))
                          .then(function (e) {
                            return (e.loaded && n ? sc : "ALLOWED") || cc;
                          }, i);
                      } catch (e) {
                        t = new D.J(function (e) {
                          return setTimeout(e, 0);
                        }).then(i);
                      }
                      t.then(function () {
                        ic.removeEventListener(oc, r);
                      }),
                        e(t);
                    } else e("NOT_SUPPORTED");
                  }).then(function (e) {
                    t.report("trusted_types_check", { result: e }),
                      (function (e) {
                        switch (e) {
                          case sc:
                          case uc:
                            return !0;
                        }
                        return !1;
                      })(e) &&
                        t.warn(
                          "We noticed that you are using Trusted Types. Nothing has broken, but we plan to add dynamic loading to parts of Stripe.js. Please allow scripts from 'https://js.stripe.com' in your default Trusted Types policy. For more information: https://stripe.com/docs/security/guide#content-security-policy"
                        );
                  });
                }, 5e3);
            } else
              window.addEventListener("load", function () {
                try {
                  e(t, n, r, c);
                } catch (e) {}
              });
          }
        },
        yc = (0, d.mC)({
          apiKey: d.Z_,
          stripeAccount: (0, d.jt)(d.Z_),
          locale: (0, d.jt)(d.Z_),
          apiVersion: (0, d.jt)(d.Z_),
          __privateApiUrl: (0, d.jt)(d.Z_),
          __checkout: (0, d.jt)(
            (0, d.mC)({ mids: (0, d.mC)({ muid: d.Z_, sid: d.Z_ }) })
          ),
          __dashboard: (0, d.jt)(d.Ry),
          __hosted3DS: (0, d.jt)(d.Xg),
          canCreateRadarSession: (0, d.jt)(d.Xg),
          betas: (0, d.jt)((0, d.CT)(d.Z_)),
        }),
        vc = function (e) {
          return "You have an in-flight "
            .concat(
              e,
              "! Please be sure to disable your form submit button when "
            )
            .concat(e, " is called.");
        },
        gc = function (e) {
          return function () {
            throw new g.No(
              "You cannot call `stripe.".concat(
                e,
                "` without supplying an appropriate beta flag when initializing Stripe.js."
              )
            );
          };
        },
        bc = function (e) {
          return function () {
            throw new g.No(
              "You cannot call `stripe.".concat(
                e,
                "` without supplying an Issuing beta flag when initializing Stripe.js."
              )
            );
          };
        },
        wc = (function () {
          function e(t, n) {
            var r = this;
            (0, s.Z)(this, e),
              (this._listenerRegistry = (0, wt.E)()),
              (this.elements = A(
                function (e) {
                  return new Yr(
                    r._controller,
                    r._listenerRegistry,
                    {
                      stripeJsLoadTimestamp: lc,
                      stripeCreateTimestamp: r._controller._createTimestamp,
                    },
                    r._betas,
                    r._mids(),
                    (0, a.Z)(
                      (0, a.Z)({}, r._locale ? { locale: r._locale } : {}),
                      e
                    )
                  );
                },
                void 0,
                "elements"
              )),
              (this.createToken = T(
                function (e, t) {
                  var n = r._mids();
                  return "cvc_update" === e
                    ? (function (e, t, n) {
                        var r = (0, d.rX)(t);
                        if (r && "cardCvc" === r._componentName) {
                          var o = r._implementation._frame.id;
                          return e.action
                            .tokenizeCvcUpdate({ frameId: o, mids: n })
                            .then(tc);
                        }
                        throw new g.No(
                          "You must provide a `cardCvc` Element to create a `cvc_update` token."
                        );
                      })(r._controller, t, n)
                    : (function (e, t) {
                        return function (n, r) {
                          var o = (0, d.rX)(n);
                          if (o) {
                            var i = o._implementation._frame.id,
                              a = o._componentName,
                              c = nc(r);
                            return e.action
                              .tokenizeWithElement({
                                frameId: i,
                                elementName: a,
                                tokenData: c,
                                mids: t,
                              })
                              .then(tc);
                          }
                          if ("string" == typeof n) {
                            var s = n,
                              u = nc(r);
                            return e.action
                              .tokenizeWithData({
                                elementName: null,
                                type: s,
                                tokenData: u,
                                mids: t,
                              })
                              .then(tc);
                          }
                          throw new g.No(
                            "You must provide a Stripe Element or a valid token type to create a Token."
                          );
                        };
                      })(r._controller, n)(e, t);
                },
                void 0,
                "createToken"
              )),
              (this.createSource = T(
                function (e, t) {
                  var n = (0, d.rX)(e),
                    o = No(n ? t : e),
                    i = o || { type: null, data: {} },
                    a = i.type,
                    c = i.data;
                  if (n) {
                    var s = n._implementation._frame.id,
                      u = n._componentName;
                    return !o && (0, Jr.ke)(u)
                      ? D.J.reject(
                          new g.No(
                            "Please provide Source creation parameters to createSource."
                          )
                        )
                      : r._controller.action
                          .createSourceWithElement({
                            frameId: s,
                            elementName: u,
                            type: a,
                            sourceData: c,
                            mids: r._mids(),
                          })
                          .then(Co);
                  }
                  return o
                    ? a
                      ? r._controller.action
                          .createSourceWithData({
                            elementName: null,
                            type: a,
                            sourceData: c,
                            mids: r._mids(),
                          })
                          .then(Co)
                      : D.J.reject(
                          new g.No(
                            "Please provide a source type to createSource."
                          )
                        )
                    : D.J.reject(
                        new g.No(
                          "Please provide either an Element or Source creation parameters to createSource."
                        )
                      );
                },
                void 0,
                "createSource"
              )),
              (this.retrieveSource = I(
                function (e) {
                  var t = (0, d.Gu)(To, { source: e }, "retrieveSource"),
                    n = t.value;
                  return (
                    t.warnings.forEach(function (e) {
                      return r._controller.warn(e);
                    }),
                    r._controller.action.retrieveSource(n).then(Co)
                  );
                },
                void 0,
                "retrieveSource"
              )),
              (this.paymentRequest = N(
                function (e, t) {
                  (0, Me.pF)(r._keyMode);
                  var n = r._isCheckout && t ? t : null;
                  return zr(
                    r._controller,
                    { apiKey: r._apiKey, accountId: r._stripeAccount },
                    r._mids(),
                    e,
                    r._betas,
                    n,
                    r._listenerRegistry
                  );
                },
                void 0,
                "paymentRequest"
              ));
            var o = new Xe.E(),
              i = (0, d.Gu)(yc, t || {}, "Stripe()"),
              c = i.value,
              u = i.warnings;
            if (
              (function (e) {
                for (var t = 0, n = 0; n < e.length; n++) t += e.charCodeAt(n);
                return t % 100;
              })(c.apiKey) < 0 &&
              (_.JW || _.tS)
            )
              throw new Error(
                "Stripe.JS is no longer supported in this browser. See https://stripe.com/docs/js/appendix/supported_browsers for more information."
              );
            var l = c.apiKey,
              p = c.stripeAccount,
              m = c.apiVersion,
              f = c.locale,
              h = c.__dashboard,
              v = c.__privateApiUrl,
              b = c.__checkout,
              k = c.__hosted3DS,
              E = (c.canCreateRadarSession, c.betas),
              S = (0, y.dZ)(E || null),
              P = S.validBetas,
              C = S.betaWarning;
            C && u.push(C),
              (0, Me.Tj)(l),
              (null == b ? void 0 : b.mids) &&
                (e._ec = qt({ checkoutIds: b.mids })),
              (this._apiKey = l.trim()),
              (this._keyMode = (0, Me.lO)(this._apiKey)),
              (this._betas = P),
              (this._locale = (0, y.jk)(f, this._betas) || null),
              (this._stripeAccount = p || null),
              (this._isCheckout = !!b);
            var M = h ? "".concat(w.J_) : void 0;
            this._attachControllerGetter(m, v, M, p, o),
              u.forEach(function (e) {
                return r._controller.warn(e);
              }),
              io(),
              this._ensureHTTPOnlyLinkCookie(),
              this._ensureHTTPS(),
              this._ensureStripeHosted(n),
              this._attachPaymentIntentMethods(this._betas, !!k),
              this._attachLegacyPaymentIntentMethods(this._betas),
              this._attachCheckoutMethods(this._betas),
              this._attachPrivateMethodsForCheckout(this._isCheckout),
              this._attachPrivateMethodsForConsumer(bt),
              this._attachCreateRadarSession(),
              this._attachGetters(),
              this._attachIssuingCardMethods(this._betas),
              this._attachIdentityMethods(this._betas),
              this._attachLinkedAccountsMethods(this._betas),
              this._attachAppInfo();
          }
          return (
            (0, u.Z)(e, [
              {
                key: "_attachCreateRadarSession",
                value: function () {
                  var e = this;
                  this.createRadarSession = C(function () {
                    return e._midsPromise().then(function (t) {
                      return (
                        (n = e._controller),
                        (r = t),
                        n.action.createRadarSession({ mids: r }).then(rc)
                      );
                      var n, r;
                    });
                  });
                },
              },
              {
                key: "_attachPaymentIntentMethods",
                value: function (e, t) {
                  var n,
                    r,
                    i,
                    a = this,
                    c = function () {
                      return a._mids();
                    };
                  (this.createPaymentMethod =
                    ((n = function () {
                      for (
                        var e = arguments.length, t = new Array(e), n = 0;
                        n < e;
                        n++
                      )
                        t[n] = arguments[n];
                      return jo.apply(void 0, [a._controller, c()].concat(t));
                    }),
                    (r = void 0),
                    (i = "createPaymentMethod"),
                    function (e, t, o) {
                      try {
                        return n.call(this, e, t, o);
                      } catch (e) {
                        return P(e, r || (this && this._controller), !1, i);
                      }
                    })),
                    (this._createPaymentMethod = this.createPaymentMethod),
                    (this.retrievePaymentIntent = I(
                      function (e) {
                        return (function (e, t) {
                          var n = (0, Yn.cn)(e, "retrievePaymentIntent");
                          return t.action
                            .retrievePaymentIntent({
                              intentSecret: n,
                              hosted: !1,
                            })
                            .then(Oo.PA);
                        })(e, a._controller);
                      },
                      void 0,
                      "retrievePaymentIntent"
                    )),
                    (this.retrieveSetupIntent = I(
                      function (e) {
                        return (function (e, t) {
                          var n = (0, Yn.jH)(e, "retrieveSetupIntent");
                          return t.action
                            .retrieveSetupIntent({
                              intentSecret: n,
                              hosted: !1,
                            })
                            .then(Oo.e3);
                        })(e, a._controller);
                      },
                      void 0,
                      "retrieveSetupIntent"
                    )),
                    (this.updatePaymentIntent = gc("updatePaymentIntent")),
                    (0, y.uN)(this._betas, y.M4.line_items_beta_1) ||
                    (0, y.uN)(this._betas, y.M4.tax_product_beta_1)
                      ? (this.updatePaymentIntent = T(
                          function () {
                            for (
                              var e = arguments.length, t = new Array(e), n = 0;
                              n < e;
                              n++
                            )
                              t[n] = arguments[n];
                            return Pi.apply(
                              void 0,
                              [a._controller, c()].concat(t)
                            );
                          },
                          void 0,
                          "updatePaymentIntent"
                        ))
                      : (0, y.uN)(
                          this._betas,
                          y.M4.server_side_confirmation_beta_1
                        ) &&
                        (this.updatePaymentIntent = I(
                          function (e) {
                            return (function (e, t, n) {
                              var r = Bo(
                                e,
                                t,
                                n,
                                "payment",
                                "stripe.updatePaymentIntent()"
                              );
                              return e.action
                                .updatePaymentIntent(r)
                                .then(Oo.PA);
                            })(a._controller, c(), e);
                          },
                          void 0,
                          "updatePaymentIntent"
                        ));
                  var s = (0, B.AO)(Ti, vc("handleCardAction"));
                  this.handleCardAction = I(
                    function (e) {
                      return s(e, a._controller);
                    },
                    void 0,
                    "handleCardAction"
                  );
                  var u = (0, B.AO)(Wi, vc("handleNextAction"));
                  this.handleNextAction = I(
                    function () {
                      for (
                        var e = arguments.length, t = new Array(e), n = 0;
                        n < e;
                        n++
                      )
                        t[n] = arguments[n];
                      return u.apply(void 0, [a._controller].concat(t));
                    },
                    void 0,
                    "handleNextAction"
                  );
                  var l = (0, B.AO)(Jo, vc("confirmCardPayment"));
                  this.confirmCardPayment = M(
                    function () {
                      for (
                        var e = arguments.length, t = new Array(e), n = 0;
                        n < e;
                        n++
                      )
                        t[n] = arguments[n];
                      return l.apply(void 0, [a._controller, c()].concat(t));
                    },
                    void 0,
                    "confirmCardPayment"
                  );
                  var p = (0, B.AO)(pa, vc("confirmCardSetup"));
                  (this.confirmCardSetup = M(
                    function () {
                      for (
                        var e = arguments.length, t = new Array(e), n = 0;
                        n < e;
                        n++
                      )
                        t[n] = arguments[n];
                      return p.apply(void 0, [a._controller, c()].concat(t));
                    },
                    void 0,
                    "confirmCardSetup"
                  )),
                    (this.confirmIdealPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return $o.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmIdealPayment"
                    )),
                    (this.confirmSepaDebitPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return si.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmSepaDebitPayment"
                    )),
                    (this.confirmSepaDebitSetup = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return da.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmSepaDebitSetup"
                    )),
                    (this.confirmFpxPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Vo.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmFpxPayment"
                    )),
                    (this.confirmAlipayPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return oi.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmAlipayPayment"
                    )),
                    (this.confirmAlipaySetup = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return ha.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmAlipaySetup"
                    )),
                    (this.confirmAuBecsDebitPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Yo.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmAuBecsDebitPayment"
                    )),
                    (this.confirmAuBecsDebitSetup = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return ma.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmAuBecsDebitSetup"
                    )),
                    (this.confirmBacsDebitPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return zo.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmBacsDebitPayment"
                    )),
                    (this.confirmBacsDebitSetup = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return fa.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmBacsDebitSetup"
                    )),
                    (this.confirmBancontactPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Ho.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmBancontactPayment"
                    )),
                    (this.confirmBoletoPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Ko.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmBoletoPayment"
                    )),
                    (this.confirmEpsPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Wo.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmEpsPayment"
                    )),
                    (this.confirmGiropayPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Xo.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmGiropayPayment"
                    )),
                    (this.confirmOxxoPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return ri.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmOxxoPayment"
                    )),
                    (this.confirmP24Payment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return ii.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmP24Payment"
                    )),
                    (this.confirmSofortPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return ui.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmSofortPayment"
                    )),
                    (this.confirmIdealSetup = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return _a.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmIdealSetup"
                    )),
                    (this.confirmSofortSetup = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return ya.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmSofortSetup"
                    )),
                    (this.confirmBancontactSetup = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return va.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmBancontactSetup"
                    )),
                    (this.confirmGrabPayPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Qo.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmGrabPayPayment"
                    )),
                    (this.confirmAffirmPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Uo.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmAffirmPayment"
                    )),
                    (this.confirmAfterpayClearpayPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Go.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmAfterpayClearpayPayment"
                    )),
                    (this.verifyMicrodepositsForPayment = T(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Ni.apply(void 0, [a._controller].concat(t));
                      },
                      void 0,
                      "verifyMicrodepositsForPayment"
                    )),
                    (this.verifyMicrodepositsForSetup = T(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Sa.apply(void 0, [a._controller].concat(t));
                      },
                      void 0,
                      "verifyMicrodepositsForSetup"
                    )),
                    (this.confirmPayment = I(
                      function (e) {
                        return (function (e, t, n, r) {
                          var o = (0, xo.Qw)(
                              e,
                              t,
                              n,
                              r,
                              "payment",
                              "stripe.confirmPayment()"
                            ),
                            i = o.intentMutationRequest,
                            a = e.action.confirmPaymentIntent(i);
                          return (0, y.uN)(
                            n,
                            y.M4.server_side_confirmation_beta_1
                          ) &&
                            null !== i.options &&
                            !i.options.handleActions
                            ? a.then(Oo.PA).then(Ai)
                            : a
                                .then(
                                  (0, Zo.nq)(
                                    e,
                                    !1,
                                    !1,
                                    !0,
                                    i.otherParams.expand
                                  )
                                )
                                .then(function (t) {
                                  var n = Ai(t);
                                  return "selectedPaymentMethod" in n
                                    ? n
                                    : t.error || "always" !== o.redirect
                                    ? t
                                    : (0, Ro.U)(
                                        (0, Yn.z2)(o.returnUrl, t.paymentIntent)
                                      ).then(function (n) {
                                        return (
                                          (0, Ro.d)(
                                            e,
                                            "confirmPayment redirect",
                                            n
                                          ),
                                          (0, Oo.PA)(n, t.paymentIntent)
                                        );
                                      });
                                });
                        })(a._controller, c(), a._betas, e);
                      },
                      void 0,
                      "confirmPayment"
                    )),
                    (this.confirmSetup = I(
                      function (e) {
                        return (function (e, t, n, r) {
                          var o = (0, xo.Qw)(
                              e,
                              t,
                              n,
                              r,
                              "setup",
                              "stripe.confirmSetup()"
                            ),
                            i = o.intentMutationRequest,
                            a = e.action.confirmSetupIntent(i);
                          return (0, y.uN)(
                            n,
                            y.M4.server_side_confirmation_beta_1
                          ) &&
                            null !== i.options &&
                            !i.options.handleActions
                            ? a.then(Oo.e3).then(Ea)
                            : a
                                .then(Ji(e, !1, !1, i.otherParams.expand))
                                .then(function (t) {
                                  var n = Ea(t);
                                  return "selectedPaymentMethod" in n
                                    ? n
                                    : t.error || "always" !== o.redirect
                                    ? t
                                    : (0, Ro.U)(
                                        (0, Yn.z2)(o.returnUrl, t.setupIntent)
                                      ).then(function (n) {
                                        return (
                                          (0, Ro.d)(
                                            e,
                                            "confirmSetup redirect",
                                            n
                                          ),
                                          (0, Oo.e3)(n, t.setupIntent)
                                        );
                                      });
                                });
                        })(a._controller, c(), a._betas, e);
                      },
                      void 0,
                      "confirmSetup"
                    )),
                    (this.confirmKlarnaPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return ei.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmKlarnaPayment"
                    )),
                    (0, y.uN)(this._betas, y.M4.process_order_beta_1) &&
                      ((this.processOrder = I(
                        function (e) {
                          return o
                            .e(404)
                            .then(o.bind(o, 4149))
                            .then(function (t) {
                              return (0,
                              t.processOrder)(a._controller, c(), a._betas, e);
                            });
                        },
                        void 0,
                        "processOrder"
                      )),
                      (this.retrieveOrder = I(
                        function (e) {
                          return o
                            .e(404)
                            .then(o.bind(o, 4149))
                            .then(function (t) {
                              return (0, t.retrieveOrder)(e, a._controller);
                            });
                        },
                        void 0,
                        "retrieveOrder"
                      )),
                      (this.updateOrder = I(
                        function (e) {
                          return o
                            .e(404)
                            .then(o.bind(o, 4149))
                            .then(function (t) {
                              return (0, t.updateOrder)(a._controller, e);
                            });
                        },
                        void 0,
                        "updateOrder"
                      )),
                      (this.addPromotionCodeToOrder = I(
                        function (e) {
                          return o
                            .e(404)
                            .then(o.bind(o, 4149))
                            .then(function (t) {
                              return (0,
                              t.addPromotionCodeToOrder)(a._controller, e);
                            });
                        },
                        void 0,
                        "addPromotionCodeToOrder"
                      )),
                      (this.removePromotionCodeFromOrder = I(
                        function (e) {
                          return o
                            .e(404)
                            .then(o.bind(o, 4149))
                            .then(function (t) {
                              return (0,
                              t.removePromotionCodeFromOrder)(a._controller, e);
                            });
                        },
                        void 0,
                        "removePromotionCodeFromOrder"
                      ))),
                    (this.collectBankAccountForPayment = I(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Ii.apply(void 0, [a._controller].concat(t));
                      },
                      void 0,
                      "collectBankAccountForPayment"
                    )),
                    (this.collectBankAccountForSetup = I(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Aa.apply(void 0, [a._controller].concat(t));
                      },
                      void 0,
                      "collectBankAccountForSetup"
                    )),
                    (0, y.uN)(this._betas, y.M4.us_bank_account_beta_2) &&
                      ((this.collectUsBankAccountForPayment = T(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return Ci.apply(void 0, [a._controller].concat(t));
                        },
                        void 0,
                        "collectUsBankAccountForPayment"
                      )),
                      (this.collectUsBankAccountForSetup = T(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return Pa.apply(void 0, [a._controller].concat(t));
                        },
                        void 0,
                        "collectUsBankAccountForSetup"
                      ))),
                    (0, y.uN)(this._betas, y.M4.acss_debit_beta_1)
                      ? ((this.confirmAcssDebitPayment = M(
                          function () {
                            for (
                              var e = arguments.length, t = new Array(e), n = 0;
                              n < e;
                              n++
                            )
                              t[n] = arguments[n];
                            return Fo.apply(
                              void 0,
                              [a._controller, c()].concat(t)
                            );
                          },
                          void 0,
                          "confirmAcssDebitPayment"
                        )),
                        (this.confirmAcssDebitSetup = M(
                          function () {
                            for (
                              var e = arguments.length, t = new Array(e), n = 0;
                              n < e;
                              n++
                            )
                              t[n] = arguments[n];
                            return ua.apply(
                              void 0,
                              [a._controller, c()].concat(t)
                            );
                          },
                          void 0,
                          "confirmAcssDebitSetup"
                        )))
                      : ((this.confirmAcssDebitPayment = M(
                          function () {
                            for (
                              var e = arguments.length, t = new Array(e), n = 0;
                              n < e;
                              n++
                            )
                              t[n] = arguments[n];
                            return xi.apply(
                              void 0,
                              [a._controller, c()].concat(t)
                            );
                          },
                          void 0,
                          "confirmAcssDebitPayment"
                        )),
                        (this.confirmAcssDebitSetup = M(
                          function () {
                            for (
                              var e = arguments.length, t = new Array(e), n = 0;
                              n < e;
                              n++
                            )
                              t[n] = arguments[n];
                            return Li.apply(
                              void 0,
                              [a._controller, c()].concat(t)
                            );
                          },
                          void 0,
                          "confirmAcssDebitSetup"
                        ))),
                    (this.confirmAfterpayClearpaySetup = gc(
                      "confirmAfterpayClearpaySetup"
                    )),
                    (0, y.uN)(
                      this._betas,
                      y.M4.afterpay_clearpay_setup_intents_beta
                    ) &&
                      (this.confirmAfterpayClearpaySetup = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return la.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmAfterpayClearpaySetup"
                      )),
                    (this.confirmBlikPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return fi.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmBlikPayment"
                    )),
                    (this.confirmCustomerBalancePayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return hi.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmCustomerBalancePayment"
                    )),
                    (0, y.uN)(this._betas, y.M4.return_intents_beta_1) &&
                      (this.confirmReturnIntent = T(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return ca.apply(void 0, [a._controller].concat(t));
                        },
                        void 0,
                        "confirmReturnIntent"
                      )),
                    (this.confirmKonbiniPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return ti.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmKonbiniPayment"
                    )),
                    (this.confirmMobilepayPayment = gc(
                      "confirmMobilepayPayment"
                    )),
                    (0, y.uN)(this._betas, y.M4.mobilepay_pm_beta_1) &&
                      (this.confirmMobilepayPayment = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return ni.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmMobilepayPayment"
                      )),
                    (0, y.uN)(this._betas, y.M4.oxxo_pm_beta_1) &&
                      (this.confirmOxxoPayment = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return ri.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmOxxoPayment"
                      )),
                    (this.confirmWechatPayPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return vi.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmWechatPayPayment"
                    )),
                    (0, y.uN)(this._betas, y.M4.wechat_pay_pm_beta_1) &&
                      (this.confirmWechatPayPayment = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return yi.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmWechatPayPayment"
                      )),
                    (0, y.uN)(this._betas, y.M4.wechat_pay_pm_beta_3) &&
                      (this.confirmWechatPayPayment = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return vi.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmWechatPayPayment"
                      )),
                    (this.confirmPayByBankPayment = gc(
                      "confirmPayByBankPayment"
                    )),
                    (0, y.uN)(this._betas, y.M4.pay_by_bank_beta_1) &&
                      (this.confirmPayByBankPayment = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return ai.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmPayByBankPayment"
                      )),
                    (this.confirmPayNowPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return gi.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmPayNowPayPayment"
                    )),
                    (this.confirmPixPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return bi.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmPixPayment"
                    )),
                    (this.confirmPromptPayPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return wi.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmPromptPayPayment"
                    )),
                    (this.confirmPayPalPayment = gc("confirmPayPalPayment")),
                    (0, y.uN)(this._betas, y.M4.paypal_pm_beta_1) &&
                      (this.confirmPayPalPayment = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return ci.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmPayPalPayment"
                      )),
                    (0, y.uN)(this._betas, y.M4.paypal_pm_beta_1) &&
                      (this.confirmPayPalSetup = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return ba.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmPayPalSetup"
                      )),
                    (this.confirmQrisPayment = gc("confirmQrisPayment")),
                    (0, y.uN)(this._betas, y.M4.qris_beta_1) &&
                      (this.confirmQrisPayment = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return ki.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmQrisPayment"
                      )),
                    (this.confirmRevolutPayPayment = gc(
                      "confirmRevolutPayPayment"
                    )),
                    (0, y.uN)(this._betas, y.M4.revolut_pay_pm_beta_1) &&
                      (this.confirmRevolutPayPayment = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return Ei.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmRevolutPayPayment"
                      )),
                    (this.confirmZipPayment = gc("confirmZipPayment")),
                    (0, y.uN)(this._betas, y.M4.zip_beta_1) &&
                      (this.confirmZipPayment = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return _i.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmZipPayment"
                      )),
                    (this.confirmUpiPayment = gc("confirmUpiPayment")),
                    (0, y.uN)(this._betas, y.M4.upi_beta_1) &&
                      (this.confirmUpiPayment = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return pi.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmUpiPayment"
                      )),
                    (this.confirmUsBankAccountPayment = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return di.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmUsBankAccountPayment"
                    )),
                    (this.confirmUsBankAccountSetup = M(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return wa.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmUsBankAccountSetup"
                    )),
                    (0, y.uN)(this._betas, y.M4.nz_bank_account_beta_1) &&
                      ((this.confirmNzBankAccountPayment = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return mi.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmNzBankAccountPayment"
                      )),
                      (this.confirmNzBankAccountSetup = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return ka.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmNzBankAccountSetup"
                      ))),
                    (this.confirmNetbankingPayment = gc(
                      "confirmNetbankingPayment"
                    )),
                    (0, y.uN)(this._betas, y.M4.netbanking_beta_1) &&
                      (this.confirmNetbankingPayment = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return Si.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmNetbankingPayment"
                      )),
                    (this.confirmInstantDebitsPilotPayment = gc(
                      "confirmInstantDebitsPilotPayment"
                    )),
                    (0, y.uN)(this._betas, y.M4.instant_debits_beta_1) &&
                      (this.confirmInstantDebitsPilotPayment = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return qi.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmInstantDebitsPilotPayment"
                      )),
                    (this.linkAutofillModal = gc("linkAutofillModal")),
                    (0, y.uN)(this._betas, y.M4.link_autofill_modal_beta_1) &&
                      (this.linkAutofillModal = A(
                        function (e) {
                          return (function (e, t, n) {
                            var r = function (e) {
                                throw new g.No(
                                  "stripe.linkAutofill.".concat(
                                    e,
                                    " can only be called when the user is logged-in."
                                  )
                                );
                              },
                              o = !1,
                              i = !1,
                              a = e.createLightboxFrame({
                                type: xe.NC.LINK_AUTOFILL_MODAL,
                                options: {
                                  apiKey: e._apiKey,
                                  stripeAccount: e._stripeAccount,
                                  locale: n || "",
                                },
                                groupId: t._id,
                              }),
                              c = function () {
                                (o = !0), a.show(), a.fadeInBackdrop();
                              },
                              s = function () {
                                (o = !1), a.fadeOutBackdrop();
                              };
                            a._on("open", function () {
                              c();
                            }),
                              a._on("cancel", function () {
                                s();
                              });
                            var u = [];
                            a._on(
                              "link-autofill-modal-authenticated",
                              function (e) {
                                (i = !0),
                                  u.forEach(function (t) {
                                    t({ value: { email: e.emailAddress } });
                                  });
                              }
                            );
                            var l = [];
                            return (
                              a._on(
                                "link-autofill-modal-autofill-info",
                                function (e) {
                                  s(),
                                    l.forEach(function (t) {
                                      t({
                                        empty: !e.info.hasPaymentDetails,
                                        value: {
                                          shippingAddress:
                                            e.info.shippingAddress,
                                          billingAddress: e.info.billingAddress,
                                        },
                                      });
                                    });
                                }
                              ),
                              {
                                on: function (t, n) {
                                  if ("function" != typeof n)
                                    throw new g.No(
                                      "stripe.linkAutofill.on: Expected the handler to be a function."
                                    );
                                  switch (t) {
                                    case "authenticated":
                                      u.push(A(n, e, "authenticationHandler"));
                                      break;
                                    case "autofill":
                                      l.push(A(n, e, "autofillHandler"));
                                      break;
                                    default:
                                      throw new g.No(
                                        "stripe.linkAutofill.on: Expected either 'authenticated' or 'autofill' as an event name."
                                      );
                                  }
                                },
                                launch: function (e) {
                                  var t = e.email;
                                  a.send({
                                    action:
                                      "stripe-link-autofill-modal-email-attempt",
                                    payload: { email: t },
                                  });
                                },
                                show: function () {
                                  i || r("show"), o || c();
                                },
                                logout: function () {
                                  if ((i || r("logout"), o))
                                    throw new g.No(
                                      "stripe.linkAutofill.logout can only be called when the modal is closed. Did you call it from outside a click event?"
                                    );
                                  (i = !1),
                                    a.send({
                                      action:
                                        "stripe-link-autofill-modal-logout",
                                      payload: {},
                                    });
                                },
                              }
                            );
                          })(a._controller, e, a._locale);
                        },
                        void 0,
                        "linkAutofillModal"
                      )),
                    (this.confirmIdBankTransferPayment = gc(
                      "confirmIdBankTransferPayment"
                    )),
                    (this.confirmIdBankTransferSetup = gc(
                      "confirmIdBankTransferSetup"
                    )),
                    ((0, y.uN)(this._betas, y.M4.id_bank_transfer_beta_1) ||
                      (0, y.uN)(this._betas, y.M4.id_bank_transfer_beta_2)) &&
                      ((this.confirmIdBankTransferPayment = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return li.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmIdBankTransferPayment"
                      )),
                      (this.confirmIdBankTransferSetup = M(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return ga.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmIdBankTransferSetup"
                      ))),
                    t &&
                      ((this.handleHosted3DS2Payment = I(function (e) {
                        return (function (e, t) {
                          var n = (0, Yn.cn)(
                            e,
                            "handleHosted3DS2Setup [internal]"
                          );
                          return t.action
                            .retrievePaymentIntent({
                              intentSecret: n,
                              hosted: !0,
                            })
                            .then((0, Zo.nq)(t, !1, !0, !1));
                        })(e, a._controller);
                      })),
                      (this.handleHosted3DS2Setup = I(function (e) {
                        return (function (e, t) {
                          var n = (0, Yn.jH)(
                            e,
                            "handleHosted3DS2Setup [internal]"
                          );
                          return t.action
                            .retrieveSetupIntent({
                              intentSecret: n,
                              hosted: !0,
                            })
                            .then(Ji(t, !1, !0));
                        })(e, a._controller);
                      })));
                },
              },
              {
                key: "_attachLegacyPaymentIntentMethods",
                value: function (e) {
                  var t = this,
                    n =
                      (0, y.uN)(this._betas, y.M4.payment_intent_beta_1) ||
                      (0, y.uN)(this._betas, y.M4.payment_intent_beta_2),
                    r = function () {
                      return t._mids();
                    },
                    o = M(
                      function () {
                        for (
                          var e = arguments.length, n = new Array(e), o = 0;
                          o < e;
                          o++
                        )
                          n[o] = arguments[o];
                        return ta.apply(
                          void 0,
                          [!0, t._controller, r()].concat(n)
                        );
                      },
                      void 0,
                      "confirmPaymentIntent"
                    ),
                    i = M(
                      function () {
                        for (
                          var e = arguments.length, n = new Array(e), o = 0;
                          o < e;
                          o++
                        )
                          n[o] = arguments[o];
                        return ta.apply(
                          void 0,
                          [!1, t._controller, r()].concat(n)
                        );
                      },
                      void 0,
                      "confirmPaymentIntent"
                    ),
                    a = (0, B.AO)(na, vc("handleCardPayment")),
                    c = M(
                      function () {
                        for (
                          var e = arguments.length, o = new Array(e), i = 0;
                          i < e;
                          i++
                        )
                          o[i] = arguments[i];
                        return a.apply(
                          void 0,
                          [!0, t._controller, r(), n].concat(o)
                        );
                      },
                      void 0,
                      "handleCardPayment"
                    ),
                    s = M(
                      function () {
                        for (
                          var e = arguments.length, o = new Array(e), i = 0;
                          i < e;
                          i++
                        )
                          o[i] = arguments[i];
                        return a.apply(
                          void 0,
                          [!1, t._controller, r(), n].concat(o)
                        );
                      },
                      void 0,
                      "handleCardPayment"
                    ),
                    u = (0, B.AO)(Na, vc("handleCardSetup")),
                    l = M(
                      function () {
                        for (
                          var e = arguments.length, n = new Array(e), o = 0;
                          o < e;
                          o++
                        )
                          n[o] = arguments[o];
                        return u.apply(void 0, [t._controller, r()].concat(n));
                      },
                      void 0,
                      "handleCardSetup"
                    ),
                    p = M(
                      function () {
                        for (
                          var e = arguments.length, n = new Array(e), o = 0;
                          o < e;
                          o++
                        )
                          n[o] = arguments[o];
                        return Ia.apply(void 0, [t._controller, r()].concat(n));
                      },
                      void 0,
                      "confirmSetupIntent"
                    ),
                    d = M(
                      function () {
                        for (
                          var e = arguments.length, o = new Array(e), i = 0;
                          i < e;
                          i++
                        )
                          o[i] = arguments[i];
                        return ra.apply(
                          void 0,
                          [t._controller, r(), n].concat(o)
                        );
                      },
                      void 0,
                      "handleSepaDebitPayment"
                    ),
                    m = M(
                      function () {
                        for (
                          var e = arguments.length, n = new Array(e), o = 0;
                          o < e;
                          o++
                        )
                          n[o] = arguments[o];
                        return Ca.apply(void 0, [t._controller, r()].concat(n));
                      },
                      void 0,
                      "handleSepaDebitSetup"
                    ),
                    f = M(
                      function () {
                        for (
                          var e = arguments.length, o = new Array(e), i = 0;
                          i < e;
                          i++
                        )
                          o[i] = arguments[i];
                        return oa.apply(
                          void 0,
                          [!0, t._controller, r(), n].concat(o)
                        );
                      },
                      void 0,
                      "handleIdealPayment"
                    ),
                    _ = M(
                      function () {
                        for (
                          var e = arguments.length, o = new Array(e), i = 0;
                          i < e;
                          i++
                        )
                          o[i] = arguments[i];
                        return oa.apply(
                          void 0,
                          [!1, t._controller, r(), n].concat(o)
                        );
                      },
                      void 0,
                      "handleIdealPayment"
                    ),
                    h = M(
                      function () {
                        for (
                          var e = arguments.length, o = new Array(e), i = 0;
                          i < e;
                          i++
                        )
                          o[i] = arguments[i];
                        return ia.apply(
                          void 0,
                          [t._controller, r(), n].concat(o)
                        );
                      },
                      void 0,
                      "handleFpxPayment"
                    );
                  (this.handleCardPayment = s),
                    (this.confirmPaymentIntent = i),
                    (this.handleCardSetup = l),
                    (this.confirmSetupIntent = p),
                    (this.fulfillPaymentIntent = gc("fulfillPaymentIntent")),
                    (this.handleSepaDebitPayment = gc(
                      "handleSepaDebitPayment"
                    )),
                    (this.handleSepaDebitSetup = gc("handleSepaDebitSetup")),
                    (this.handleIdealPayment = gc("handleIdealPayment")),
                    (this.handleFpxPayment = gc("handleFpxPayment")),
                    (0, y.uN)(this._betas, y.M4.payment_intent_beta_1)
                      ? (this.fulfillPaymentIntent = c)
                      : ((0, y.uN)(this._betas, y.M4.payment_intent_beta_3) ||
                          (0, y.uN)(this._betas, y.M4.payment_intent_beta_2)) &&
                        (this.handleCardPayment = c),
                    (0, y.uN)(this._betas, y.M4.payment_intent_beta_3) &&
                      ((this.confirmPaymentIntent = o),
                      (this.handleIdealPayment = f),
                      (this.handleSepaDebitPayment = d)),
                    (0, y.uN)(this._betas, y.M4.fpx_bank_beta_1) &&
                      (this.handleFpxPayment = h),
                    (0, y.uN)(this._betas, y.M4.ideal_pm_beta_1) &&
                      (this.handleIdealPayment = _),
                    (0, y.uN)(this._betas, y.M4.sepa_pm_beta_1) &&
                      ((this.handleSepaDebitPayment = d),
                      (this.handleSepaDebitSetup = m));
                },
              },
              {
                key: "_attachPrivateMethodsForCheckout",
                value: function (e) {
                  var t = this;
                  e &&
                    ((this.sendInteractionEvent = Ut),
                    (this.tryNextAction = T(function (e) {
                      var n = (0, d.Gu)(fn.LK, e, "Payment Intent").value;
                      return "payment_intent" === n.object
                        ? (0, Zo.gO)(t._controller, n, "auto", !1, !1)
                        : Ki(t._controller, n, "auto", !1);
                    })));
                },
              },
              {
                key: "_attachCheckoutMethods",
                value: function (e) {
                  var t = this,
                    n = function () {
                      return t._mids();
                    },
                    r = e.reduce(function (e, t) {
                      var n = (0, v.sE)(Fa, function (e) {
                        return e === t;
                      });
                      return n ? [].concat((0, c.Z)(e), [n]) : e;
                    }, []);
                  this.redirectToCheckout = function (e) {
                    return (function (e, t, n, r, o) {
                      var i = $a(t, r, o, e.keyMode());
                      if (
                        (e.report("redirect_to_checkout.options", {
                          betas: t,
                          options: (0, v.ei)(i, ["mode", "sessionId"]),
                          globalLocale: r,
                        }),
                        "session" === i.tag)
                      ) {
                        var c = i.sessionId;
                        return e.action
                          .createPaymentPageWithSession({
                            betas: t,
                            mids: n(),
                            sessionId: c,
                          })
                          .then(function (t) {
                            if ("error" === t.type) return { error: t.error };
                            var n = t.object.url;
                            return ec(e, n);
                          });
                      }
                      var s = i,
                        u = (s.tag, s.items),
                        l = s.lineItems,
                        d = s.mode,
                        m = s.successUrl,
                        f = s.cancelUrl,
                        _ = s.clientReferenceId,
                        h = s.customerEmail,
                        y = s.billingAddressCollection,
                        g = s.submitType,
                        b = s.allowIncompleteSubscriptions,
                        w = s.shippingAddressCollection,
                        k = (0, p.Z)(s, [
                          "tag",
                          "items",
                          "lineItems",
                          "mode",
                          "successUrl",
                          "cancelUrl",
                          "clientReferenceId",
                          "customerEmail",
                          "billingAddressCollection",
                          "submitType",
                          "allowIncompleteSubscriptions",
                          "shippingAddressCollection",
                        ]),
                        E = [];
                      if (l && u)
                        throw new Error(
                          "Only one of items, lineItems can be passed in."
                        );
                      if (l) {
                        if (!d) throw new Error("Expected `mode`");
                        E = l.map(function (e) {
                          if (e.price)
                            return {
                              type: "price",
                              id: e.price,
                              quantity: e.quantity,
                            };
                          throw new Error("Unexpected item shape.");
                        });
                      } else {
                        if (!u)
                          throw new Error("An items field must be passed in.");
                        E = u.map(function (e) {
                          if ("sku" in e)
                            return {
                              type: "sku",
                              id: e.sku,
                              quantity: e.quantity,
                            };
                          if (e.plan)
                            return {
                              type: "plan",
                              id: e.plan,
                              quantity: e.quantity,
                            };
                          throw new Error("Unexpected item shape.");
                        });
                      }
                      return e.action
                        .createPaymentPage(
                          (0, a.Z)(
                            {
                              betas: t,
                              mids: n(),
                              items: E,
                              mode: d,
                              success_url: m,
                              cancel_url: f,
                              client_reference_id: _,
                              customer_email: h,
                              billing_address_collection: y,
                              submit_type: g,
                              allow_incomplete_subscriptions: b,
                              shipping_address_collection: w && {
                                allowed_countries: w.allowedCountries,
                              },
                            },
                            k
                          )
                        )
                        .then(function (t) {
                          if ("error" === t.type) return { error: t.error };
                          var n = t.object.url;
                          return ec(e, n);
                        });
                    })(t._controller, r, n, t._locale, e);
                  };
                },
              },
              {
                key: "_attachPrivateMethodsForConsumer",
                value: function (e) {
                  var t = this;
                  e &&
                    (this.__createConsumerPaymentDetails = T(
                      function (e, n) {
                        var r,
                          o = {};
                        if (!n.email)
                          return D.J.reject(new g.No("You must pass email"));
                        if (!e)
                          return D.J.reject(
                            new g.No("You must pass a clientSecret")
                          );
                        if (n.cardElement) {
                          if (
                            !n.billing_details ||
                            !n.billing_details.country_code
                          )
                            return D.J.reject(
                              new g.No(
                                "You must pass in billing_details.country_code if you are using the Card Element"
                              )
                            );
                          var i = (0, d.rX)(n.cardElement);
                          if (!i)
                            return D.J.reject(
                              new g.No("Card Element is invalid")
                            );
                          var a = i._implementation._frame.id,
                            c = i._componentName;
                          if ("card" !== c && "cardNumber" !== c)
                            return D.J.reject(
                              new g.No(
                                "Please provide a Card Element to __createConsumerPaymentDetails"
                              )
                            );
                          o = {
                            frameId: a,
                            elementName: c,
                            billingDetails: n.billing_details,
                            requestSurface: n.request_surface,
                          };
                        } else if (n.elements) {
                          var s;
                          o = {
                            elementsId:
                              null == n ||
                              null === (s = n.elements) ||
                              void 0 === s
                                ? void 0
                                : s._id,
                            billingDetails:
                              (null == n ? void 0 : n.billing_details) || {},
                            requestSurface:
                              null == n ? void 0 : n.request_surface,
                          };
                        }
                        return o.elementsId
                          ? t._controller.action.createConsumerPaymentDetails({
                              email: n.email,
                              clientSecret: e,
                              billingDetails: o.billingDetails,
                              isDefault: !!n.is_default,
                              requestSurface: n.request_surface,
                              elementsId: o.elementsId,
                            })
                          : o.frameId &&
                            o.elementName &&
                            (null == n ||
                            null === (r = n.billing_details) ||
                            void 0 === r
                              ? void 0
                              : r.country_code)
                          ? t._controller.action.createConsumerPaymentDetails({
                              email: n.email,
                              clientSecret: e,
                              billingDetails: o.billingDetails,
                              isDefault: !!n.is_default,
                              requestSurface: n.request_surface,
                              frameId: o.frameId,
                              elementName: o.elementName,
                            })
                          : D.J.reject(
                              new g.No(
                                "Please provide either an Elements or Card Element creation parameters to __createConsumerPaymentDetails."
                              )
                            );
                      },
                      void 0,
                      "__createConsumerPaymentDetails"
                    ));
                },
              },
              {
                key: "_attachGetters",
                value: function () {
                  var e = this,
                    t = new Ao(function (t) {
                      e._registerWrapper({ name: t, version: null });
                    });
                  [
                    "elements",
                    "createToken",
                    "createSource",
                    "createPaymentMethod",
                  ].forEach(function (n) {
                    if (e.hasOwnProperty(n)) {
                      var r = e[n],
                        o = function () {
                          t.called(n);
                          for (
                            var e = arguments.length, o = new Array(e), i = 0;
                            i < e;
                            i++
                          )
                            o[i] = arguments[i];
                          return r.apply(this, o);
                        };
                      Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function () {
                          return t.got(n), o;
                        },
                      });
                    }
                  });
                },
              },
              {
                key: "_attachIssuingCardMethods",
                value: function (e) {
                  var t = this;
                  (this.retrieveIssuingCard = bc("retrieveIssuingCard")),
                    (this.createEphemeralKeyNonce = bc(
                      "createEphemeralKeyNonce"
                    ));
                  var n = 0 === this._betas.length;
                  (0, y.uN)(this._betas, y.M4.issuing_elements_1)
                    ? (this.retrieveIssuingCard = T(function (e, n) {
                        return (function (e, t, n) {
                          var r = Ra(e, "retrieveIssuingCard"),
                            o = xa(t, "retrieveIssuingCard");
                          return n.action
                            .retrieveIssuingCardWithoutNonce({
                              cardId: r,
                              ephemeralKeySecret: o,
                            })
                            .then(Yt);
                        })(e, n, t._controller);
                      }))
                    : ((0, y.uN)(this._betas, [y.M4.issuing_elements_2]) ||
                        n) &&
                      ((this.retrieveIssuingCard = T(function (e, n) {
                        return (function (e, t, n) {
                          var r = Ra(e, "retrieveIssuingCard"),
                            o = Da(t);
                          return n.action
                            .retrieveIssuingCard({
                              cardId: r,
                              ephemeralKeySecret: o.ephemeralKeySecret,
                              publicNonce: o.publicNonce,
                              expand: o.expand,
                            })
                            .then(Yt);
                        })(e, n, t._controller);
                      })),
                      (this.createEphemeralKeyNonce = I(function (e) {
                        return Ba(e, t._controller);
                      })));
                },
              },
              {
                key: "_attachIdentityMethods",
                value: function (e) {
                  var t = this;
                  this.verifyIdentity = I(function (e) {
                    return Ta(e, t._controller);
                  });
                },
              },
              {
                key: "_attachControllerGetter",
                value: function (t, n, r, o, i) {
                  var c,
                    s = this,
                    u = [],
                    l = document.readyState;
                  Object.defineProperties(this, {
                    _registerWrapper: {
                      enumerable: !1,
                      configurable: !0,
                      writable: !1,
                      value: function (e) {
                        u.push(e);
                      },
                    },
                    _controller: {
                      enumerable: !0,
                      configurable: !0,
                      get: function () {
                        return (function () {
                          if (c) return c;
                          var p = document.readyState;
                          return (
                            (c = new Eo(
                              (0, a.Z)(
                                (0, a.Z)(
                                  {
                                    apiKey: s._apiKey,
                                    apiVersion: s._injectBetaHeader(t),
                                    __privateApiUrl: n,
                                    __privatePaymentUserAgentSuffix: r,
                                    stripeAccount: o,
                                    betas: s._betas,
                                    stripeJsId: e.stripeJsId,
                                    stripeJsLoadTimestamp: lc,
                                    stripeCreateTimestamp: i,
                                    onFirstLoad: function () {
                                      try {
                                        hc(c, l, p);
                                      } catch (e) {}
                                    },
                                    listenerRegistry: s._listenerRegistry,
                                  },
                                  s._locale ? { locale: s._locale } : {}
                                ),
                                {},
                                { mids: s._mids }
                              )
                            )),
                            Object.defineProperties(s, {
                              _registerWrapper: {
                                value: kc,
                                writable: !1,
                                enumerable: !1,
                                configurable: !0,
                              },
                              _controller: {
                                value: c,
                                writable: !0,
                                enumerable: !0,
                                configurable: !0,
                              },
                            }),
                            u.forEach(function (e) {
                              return s._registerWrapper(e);
                            }),
                            u.splice(0),
                            c
                          );
                        })();
                      },
                    },
                  });
                },
              },
              {
                key: "_attachLinkedAccountsMethods",
                value: function (e) {
                  var t = this;
                  (this.collectFinancialConnectionsAccounts = I(function (e) {
                    return Bn(t._controller, e);
                  })),
                    (this.collectBankAccountToken = I(function (e) {
                      return (function (e, t) {
                        return Dn({
                          linkAccountSessionCreatorClientSecret: t.clientSecret,
                          linkAccountSessionCreatorType: "link_account_session",
                          controller: e,
                          consumerPublishableKey: null,
                          checkoutPriceAmount: { amount: null, currency: null },
                          email: null,
                          linkMobilePhone: null,
                          linkMobilePhoneCountry: null,
                          useContinueButtonOnSuccess: !1,
                        }).then(function (e) {
                          if ("error" in e) return e;
                          var t = e.linkAccountSession,
                            n = t.linkedAccounts,
                            r = (0, p.Z)(t, ["linkedAccounts"]);
                          return {
                            token: e.linkAccountSession.bankAccountToken,
                            linkAccountSession: e.linkAccountSession,
                            financialConnectionsSession: (0, a.Z)(
                              (0, a.Z)({}, r),
                              {},
                              { accounts: n }
                            ),
                          };
                        });
                      })(t._controller, e);
                    }));
                },
              },
              {
                key: "_attachAppInfo",
                value: function () {
                  var e = this;
                  this.registerAppInfo = A(function (t) {
                    var n = (0, d.ld)(Kr, t, "WrapperLibrary");
                    "error" !== n.type
                      ? e._controller.registerAppInfo(n.value)
                      : e._controller.warn(
                          "Failed to register your library: ".concat(
                            n.error.message
                          )
                        );
                  });
                },
              },
              {
                key: "_injectBetaHeader",
                value: function (e) {
                  return e;
                },
              },
              {
                key: "_ensureHTTPS",
                value: function () {
                  var e = window.location.protocol,
                    t =
                      -1 !==
                      ["localhost", "127.0.0.1", "0.0.0.0"].indexOf(
                        window.location.hostname
                      ),
                    n =
                      (!0 === window.isSecureContext && !t) ||
                      -1 !==
                        [
                          "https:",
                          "file:",
                          "ionic:",
                          "httpsionic:",
                          "chrome-extension:",
                          "moz-extension:",
                        ].indexOf(e),
                    r = this._keyMode === Me.Kl.live,
                    o =
                      "Live Stripe.js integrations must use HTTPS. For more information: https://stripe.com/docs/security/guide#tls";
                  if (!n) {
                    if (r && !t)
                      throw (
                        (this._controller.report("user_error.non_https_error", {
                          protocol: e,
                        }),
                        new g.No(o))
                      );
                    !r || t
                      ? window.console &&
                        console.warn(
                          "You may test your Stripe.js integration over HTTP. However, live Stripe.js integrations must use HTTPS."
                        )
                      : window.console && console.warn(o);
                  }
                },
              },
              {
                key: "_ensureHTTPOnlyLinkCookie",
                value: function () {
                  if (
                    !(this._keyMode === Me.Kl.live) &&
                    dt("stripe.link.persistent_token")
                  )
                    throw new g.No(
                      "`stripe.link.persistent_token` must be set as an httpOnly cookie. For more information https://stripe.com/docs/payments/link/accept-a-payment?platform=web#merchant-domain-cookie"
                    );
                },
              },
              {
                key: "_ensureStripeHosted",
                value: function (e) {
                  if (!e)
                    throw (
                      (this._controller.report("user_error.self_hosted"),
                      new g.No(
                        "Stripe.js must be loaded from js.stripe.com. For more information https://stripe.com/docs/stripe-js/reference#including-stripejs"
                      ))
                    );
                },
              },
              {
                key: "_mids",
                value: function () {
                  return e._ec ? e._ec.ids() : null;
                },
              },
              {
                key: "_midsPromise",
                value: function () {
                  return e._ec ? e._ec.idsPromise() : D.J.resolve(this._mids());
                },
              },
            ]),
            e
          );
        })();
      (wc.version = 3),
        (wc.stripeJsId = (0, m.Vj)()),
        (wc._ec =
          ((fc = new RegExp(
            ""
              .concat(document.location.protocol, "//")
              .concat(document.location.host)
          )),
          "https://checkout.stripe.com/".match(fc) ? null : qt()));
      var kc = function (e) {
          var t = (0, d.ld)(Hr, e, "StripeWrapperLibrary");
          if ("error" !== t.type) {
            var n = t.value,
              r = n.name,
              o = n.version,
              i = n.startTime;
            this._controller.registerWrapper({
              name: r,
              version: o,
              startTime: i,
            });
          } else
            this._controller.report("register_wrapper.error", {
              error: t.error.message,
            });
        },
        Ec = wc,
        Sc = (function () {
          if (document.currentScript) {
            var e = (0, h.Ds)(document.currentScript.src);
            return !e || (0, h.Qg)(e.origin);
          }
          return !0;
        })(),
        Pc = function (e, t) {
          return new Ec(
            (0, a.Z)({ apiKey: e }, t && "object" == typeof t ? t : {}),
            Sc
          );
        };
      (Pc.version = Ec.version),
        window.Stripe && 2 === window.Stripe.version && !window.Stripe.StripeV3
          ? (window.Stripe.StripeV3 = Pc)
          : window.Stripe
          ? window.console &&
            console.warn(
              "It looks like Stripe.js was loaded more than one time. Please only load it once per page."
            )
          : (window.Stripe = Pc);
    })();
})();
