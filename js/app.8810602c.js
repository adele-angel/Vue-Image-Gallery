(function(t) {
  function e(e) {
    for (
      var n, i, o = e[0], c = e[1], u = e[2], l = 0, h = [];
      l < o.length;
      l++
    )
      (i = o[l]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && h.push(r[i][0]),
        (r[i] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
    d && d(e);
    while (h.length) h.shift()();
    return s.push.apply(s, u || []), a();
  }
  function a() {
    for (var t, e = 0; e < s.length; e++) {
      for (var a = s[e], n = !0, i = 1; i < a.length; i++) {
        var c = a[i];
        0 !== r[c] && (n = !1);
      }
      n && (s.splice(e--, 1), (t = o((o.s = a[0]))));
    }
    return t;
  }
  var n = {},
    r = { app: 0 },
    s = [];
  function i(t) {
    return (
      o.p +
      "js/" +
      ({}[t] || t) +
      "." +
      { "chunk-2d208bfd": "42d89051", "chunk-2d22d746": "6d6fe59f" }[t] +
      ".js"
    );
  }
  function o(e) {
    if (n[e]) return n[e].exports;
    var a = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.e = function(t) {
    var e = [],
      a = r[t];
    if (0 !== a)
      if (a) e.push(a[2]);
      else {
        var n = new Promise(function(e, n) {
          a = r[t] = [e, n];
        });
        e.push((a[2] = n));
        var s,
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          o.nc && c.setAttribute("nonce", o.nc),
          (c.src = i(t));
        var u = new Error();
        s = function(e) {
          (c.onerror = c.onload = null), clearTimeout(l);
          var a = r[t];
          if (0 !== a) {
            if (a) {
              var n = e && ("load" === e.type ? "missing" : e.type),
                s = e && e.target && e.target.src;
              (u.message =
                "Loading chunk " + t + " failed.\n(" + n + ": " + s + ")"),
                (u.name = "ChunkLoadError"),
                (u.type = n),
                (u.request = s),
                a[1](u);
            }
            r[t] = void 0;
          }
        };
        var l = setTimeout(function() {
          s({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = s), document.head.appendChild(c);
      }
    return Promise.all(e);
  }),
    (o.m = t),
    (o.c = n),
    (o.d = function(t, e, a) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (o.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function(t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          o.d(
            a,
            n,
            function(e) {
              return t[e];
            }.bind(null, n)
          );
      return a;
    }),
    (o.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "/"),
    (o.oe = function(t) {
      throw (console.error(t), t);
    });
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = c.push.bind(c);
  (c.push = e), (c = c.slice());
  for (var l = 0; l < c.length; l++) e(c[l]);
  var d = u;
  s.push([0, "chunk-vendors"]), a();
})({
  0: function(t, e, a) {
    t.exports = a("cd49");
  },
  2897: function(t, e, a) {
    t.exports = a.p + "img/preloader.01efd304.gif";
  },
  "927c": function(t, e, a) {},
  "9d64": function(t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  cd49: function(t, e, a) {
    "use strict";
    a.r(e);
    a("99af"), a("4de4"), a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var n,
      r = a("2b0e"),
      s = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { attrs: { id: "app" } },
          [a("AppNavbar"), a("router-view")],
          1
        );
      },
      i = [],
      o = a("9f12"),
      c = a("8b83"),
      u = a("c65a"),
      l = a("c03e"),
      d = a("9ab4"),
      h = a("60a3"),
      p = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "nav",
          [
            n(
              "router-link",
              { staticClass: "nav__brand", attrs: { to: "/" } },
              [
                n("img", { attrs: { src: a("9d64"), alt: "logo" } }),
                t._v(" Vue Image Gallery ")
              ]
            ),
            n(
              "div",
              { staticClass: "nav__links" },
              [
                n(
                  "router-link",
                  { staticClass: "nav__link", attrs: { to: "/" } },
                  [t._v("Home")]
                ),
                t._v(" "),
                n(
                  "router-link",
                  { staticClass: "nav__link", attrs: { to: "/about" } },
                  [t._v("About")]
                )
              ],
              1
            )
          ],
          1
        );
      },
      m = [],
      f =
        Object(h["a"])(
          (n = (function(t) {
            function e() {
              return (
                Object(o["a"])(this, e),
                Object(c["a"])(this, Object(u["a"])(e).apply(this, arguments))
              );
            }
            return Object(l["a"])(e, t), e;
          })(h["b"]))
        ) || n,
      g = f,
      b = a("2877"),
      v = Object(b["a"])(g, p, m, !1, null, null, null),
      O = v.exports,
      j = (function(t) {
        function e() {
          return (
            Object(o["a"])(this, e),
            Object(c["a"])(this, Object(u["a"])(e).apply(this, arguments))
          );
        }
        return Object(l["a"])(e, t), e;
      })(h["b"]);
    j = d["a"](
      [Object(h["a"])({ name: "app", components: { AppNavbar: O } })],
      j
    );
    var A = j,
      x = A,
      y = Object(b["a"])(x, s, i, !1, null, null, null),
      w = y.exports,
      k = (a("d3b7"), a("8c4f")),
      C = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "home" },
          [
            a("AppSearch", {
              on: {
                searchResults: t.getSearchedImages,
                searchText: function(e) {
                  t.searchText = e;
                },
                currentPage: function(e) {
                  t.currentPage = e;
                }
              }
            }),
            a(
              "svg",
              {
                staticClass: "partition",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  version: "1.1",
                  width: "100%",
                  height: "50",
                  viewBox: "0 0 100 100",
                  preserveAspectRatio: "none"
                }
              },
              [a("path", { attrs: { d: "M0 0 50 100 50 100 100 0 Z" } })]
            ),
            t.images
              ? a("p", [
                  t._v(" Total images found: "),
                  a("strong", [t._v(t._s(t._f("numberWithCommas")(t.total)))]),
                  t.images.length > 0
                    ? a("span", { staticClass: "page-indicator" }, [
                        t._v(
                          " showing " +
                            t._s(
                              t._f("numberWithCommas")(
                                t.currentPage > 1
                                  ? "pages 1-" + t.currentPage
                                  : "page 1"
                              )
                            ) +
                            " out of " +
                            t._s(t._f("numberWithCommas")(t.pages)) +
                            " "
                        )
                      ])
                    : t._e()
                ])
              : t._e(),
            t.images
              ? a(
                  "div",
                  { staticClass: "gallery" },
                  t._l(t.images, function(e, n) {
                    return a(
                      "div",
                      {
                        key: e.id,
                        staticClass: "gallery__thumb",
                        attrs: { item: e, selected: n },
                        on: {
                          click: function(e) {
                            return t.onImageSelect(n);
                          }
                        }
                      },
                      [
                        a("img", {
                          attrs: {
                            src: t._f("composeImageUrl")(e),
                            alt: e.title
                          }
                        })
                      ]
                    );
                  }),
                  0
                )
              : t._e(),
            a("AppModal", {
              attrs: {
                images: t.images,
                idx: t.selected,
                isModalOpen: t.isModalOpen
              },
              on: {
                indexChanged: function(e) {
                  t.selected = e;
                },
                modalClosed: function(e) {
                  t.isModalOpen = !1;
                }
              }
            }),
            a("AppObserver", { on: { intersect: t.intersected } })
          ],
          1
        );
      },
      P = [],
      _ = (a("0d03"), a("ac1f"), a("25f0"), a("5319"), a("284c")),
      E = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "search" }, [
          t.loading
            ? t.loading
              ? n("div", { staticClass: "preloader" }, [
                  n("img", { attrs: { src: a("2897"), alt: "Preloader" } })
                ])
              : t._e()
            : n(
                "form",
                {
                  on: {
                    submit: function(e) {
                      return e.preventDefault(), t.onSubmit(e);
                    }
                  }
                },
                [
                  n("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.search,
                        expression: "search"
                      }
                    ],
                    attrs: {
                      type: "text",
                      name: "search",
                      placeholder: "Search images..."
                    },
                    domProps: { value: t.search },
                    on: {
                      input: function(e) {
                        e.target.composing || (t.search = e.target.value);
                      }
                    }
                  }),
                  n("button", { staticClass: "search__btn" }, [t._v("Search")]),
                  "" !== t.error
                    ? n("p", { staticClass: "search-error" }, [
                        t._v(t._s(t.error))
                      ])
                    : t._e()
                ]
              )
        ]);
      },
      I = [],
      S = (a("841c"), a("498a"), a("53fe")),
      H = a("bc3a"),
      M = a.n(H),
      T = "8e95d9a828d343f2cdf9354dd8038e80",
      $ = "https://www.flickr.com/services/rest/";
    M.a.defaults.baseURL = $;
    var Z = (function() {
        function t() {
          Object(o["a"])(this, t);
        }
        return (
          Object(S["a"])(t, [
            {
              key: "getImages",
              value: function(t, e) {
                return M.a.get(
                  "?method=flickr.photos.search&api_key="
                    .concat(T, "&text=")
                    .concat(t, "&per_page=30&page=")
                    .concat(e, "&format=json&nojsoncallback=1")
                );
              }
            }
          ]),
          t
        );
      })(),
      U = new Z(),
      V = (function(t) {
        function e() {
          return (
            Object(o["a"])(this, e),
            Object(c["a"])(this, Object(u["a"])(e).apply(this, arguments))
          );
        }
        return Object(l["a"])(e, t), e;
      })(h["b"]);
    V = d["a"](
      [
        Object(h["a"])({
          name: "search",
          data: function() {
            return { loading: !1, search: "", currentPage: 1, error: "" };
          },
          methods: {
            onSubmit: function() {
              var t = this;
              (this.$data.loading = !0),
                (this.$data.error = ""),
                "" === this.$data.search.trim()
                  ? ((this.$data.loading = !1),
                    (this.$data.error = "Input field is empty"))
                  : U.getImages(this.$data.search, this.$data.currentPage)
                      .then(function(e) {
                        (t.$data.currentPage = 1),
                          (t.$data.loading = !1),
                          t.$emit("searchText", t.$data.search),
                          t.$emit("searchResults", e.data),
                          t.$emit("currentPage", t.$data.currentPage),
                          (t.$data.search = "");
                      })
                      .catch(function(t) {
                        return t;
                      });
            }
          }
        })
      ],
      V
    );
    var z,
      B,
      Y,
      R,
      F = V,
      W = F,
      G = Object(b["a"])(W, E, I, !1, null, null, null),
      L = G.exports,
      D = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return t.isModalOpen
          ? a("div", { staticClass: "modal", attrs: { id: "modal" } }, [
              a("div", { staticClass: "modal-content" }, [
                a(
                  "span",
                  {
                    staticClass: "close",
                    on: {
                      click: function(e) {
                        return t.closeModal();
                      }
                    }
                  },
                  [t._v("×")]
                ),
                a("div", { staticClass: "modal-images" }, [
                  a(
                    "div",
                    {
                      staticClass: "model-image-previous",
                      on: {
                        click: function(e) {
                          return t.sliderActions("prev");
                        }
                      }
                    },
                    [
                      a("img", {
                        attrs: {
                          src: t._f("composeImageUrl")(
                            t.images[
                              t.idx > 0 ? t.idx - 1 : t.images.length - 1
                            ]
                          ),
                          alt: "Previous image"
                        }
                      })
                    ]
                  ),
                  a("div", { staticClass: "modal-image-selected" }, [
                    a("img", {
                      attrs: {
                        src: t._f("composeImageUrl")(t.images[t.idx]),
                        alt: t.images[t.idx].title
                      }
                    })
                  ]),
                  a(
                    "div",
                    {
                      staticClass: "model-image-next",
                      on: {
                        click: function(e) {
                          return t.sliderActions("next");
                        }
                      }
                    },
                    [
                      a("img", {
                        attrs: {
                          src: t._f("composeImageUrl")(
                            t.images[
                              t.idx < t.images.length - 1 ? t.idx + 1 : 0
                            ]
                          ),
                          alt: "Next image"
                        }
                      })
                    ]
                  )
                ])
              ])
            ])
          : t._e();
      },
      q = [],
      J =
        (a("a9e3"),
        (z = Object(h["a"])({
          name: "modal",
          data: function() {
            return { index: this.idx };
          },
          props: { images: Array, idx: Number, isModalOpen: Boolean },
          methods: {
            closeModal: function() {
              this.$emit("modalClosed", !1);
            },
            sliderActions: function(t) {
              var e = this.idx;
              "prev" === t && (e > 0 ? e-- : (e = this.images.length - 1)),
                "next" === t && (e < this.images.length - 1 ? e++ : (e = 0)),
                this.$emit("indexChanged", e);
            }
          }
        })),
        z(
          (B = (function(t) {
            function e() {
              return (
                Object(o["a"])(this, e),
                Object(c["a"])(this, Object(u["a"])(e).apply(this, arguments))
              );
            }
            return Object(l["a"])(e, t), e;
          })(h["b"]))
        ) || B),
      X = J,
      N = Object(b["a"])(X, D, q, !1, null, null, null),
      Q = N.exports,
      K = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "observer" });
      },
      tt = [],
      et = a("e587"),
      at =
        ((Y = Object(h["a"])({
          name: "observer",
          data: function() {
            return { observer: null };
          },
          mounted: function() {
            var t = this;
            (this.$data.observer = new IntersectionObserver(function(e) {
              var a = Object(et["a"])(e, 1),
                n = a[0];
              return n && n.isIntersecting ? t.$emit("intersect") : null;
            })),
              this.$data.observer.observe(this.$el);
          }
        })),
        Y(
          (R = (function(t) {
            function e() {
              return (
                Object(o["a"])(this, e),
                Object(c["a"])(this, Object(u["a"])(e).apply(this, arguments))
              );
            }
            return Object(l["a"])(e, t), e;
          })(h["b"]))
        ) || R),
      nt = at,
      rt = Object(b["a"])(nt, K, tt, !1, null, null, null),
      st = rt.exports,
      it = new Z(),
      ot = (function(t) {
        function e() {
          return (
            Object(o["a"])(this, e),
            Object(c["a"])(this, Object(u["a"])(e).apply(this, arguments))
          );
        }
        return Object(l["a"])(e, t), e;
      })(h["b"]);
    ot = d["a"](
      [
        Object(h["a"])({
          name: "home",
          components: { AppSearch: L, AppModal: Q, AppObserver: st },
          data: function() {
            return {
              selected: null,
              isModalOpen: !1,
              searchText: "",
              currentPage: 1,
              total: null,
              pages: null,
              images: []
            };
          },
          filters: {
            numberWithCommas: function(t) {
              return t ? t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : t;
            }
          },
          methods: {
            getSearchedImages: function(t) {
              (this.$data.total = t.photos.total),
                (this.$data.pages = t.photos.pages),
                (this.$data.images = Object(_["a"])(t.photos.photo));
            },
            onImageSelect: function(t) {
              (this.$data.selected = t), (this.$data.isModalOpen = !0);
            },
            intersected: function() {
              var t = this;
              this.$data.currentPage < this.$data.pages &&
                (this.$data.currentPage++,
                it
                  .getImages(this.$data.searchText, this.$data.currentPage)
                  .then(function(e) {
                    (t.$data.total = e.data.photos.total),
                      (t.$data.pages = e.data.photos.pages),
                      (t.$data.images = [].concat(
                        Object(_["a"])(t.$data.images),
                        Object(_["a"])(e.data.photos.photo)
                      ));
                  })
                  .catch(function(t) {
                    return t;
                  }));
            }
          },
          created: function() {
            var t = this;
            (this.$data.currentPage = 1),
              (this.$data.searchText = "cute puppy"),
              it
                .getImages(this.$data.searchText, this.$data.currentPage)
                .then(function(e) {
                  (t.$data.total = e.data.photos.total),
                    (t.$data.pages = e.data.photos.pages),
                    (t.$data.images = e.data.photos.photo);
                })
                .catch(function(t) {
                  return t;
                });
          }
        })
      ],
      ot
    );
    var ct = ot,
      ut = ct,
      lt = Object(b["a"])(ut, C, P, !1, null, null, null),
      dt = lt.exports;
    r["a"].use(k["a"]);
    var ht = [
        { path: "/", name: "home", component: dt },
        {
          path: "/about",
          name: "about",
          component: function() {
            return a.e("chunk-2d22d746").then(a.bind(null, "f820"));
          }
        },
        {
          path: "*",
          component: function() {
            return a.e("chunk-2d208bfd").then(a.bind(null, "a5b5"));
          }
        }
      ],
      pt = new k["a"]({ mode: "history", base: "/", routes: ht }),
      mt = pt;
    a("927c");
    (r["a"].config.productionTip = !1),
      r["a"].filter("composeImageUrl", function(t) {
        return "https://live.staticflickr.com/"
          .concat(t.server, "/")
          .concat(t.id, "_")
          .concat(t.secret, "_z.jpg");
      }),
      new r["a"]({
        router: mt,
        render: function(t) {
          return t(w);
        }
      }).$mount("#app");
  }
});
//# sourceMappingURL=app.8810602c.js.map
