(() => {
  "use strict";
  var r,
    e = {
      82: (r, e, n) => {
        var t = n(963),
          o = n(252),
          i = n(577);
        const a = (0, o.aZ)({
            name: "App",
            setup: function () {
              return { name: "wwww" };
            },
          }),
          u = (0, n(744).Z)(a, [
            [
              "render",
              function (r, e, n, t, a, u) {
                return (0, o.wg)(), (0, o.iD)("h1", null, (0, i.zw)(r.name), 1);
              },
            ],
          ]);
        (0, t.ri)(u).mount("#app");
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var i = (n[r] = { exports: {} });
    return e[r](i, i.exports, t), i.exports;
  }
  (t.m = e),
    (r = []),
    (t.O = (e, n, o, i) => {
      if (!n) {
        var a = 1 / 0;
        for (s = 0; s < r.length; s++) {
          for (var [n, o, i] = r[s], u = !0, f = 0; f < n.length; f++)
            (!1 & i || a >= i) && Object.keys(t.O).every((r) => t.O[r](n[f]))
              ? n.splice(f--, 1)
              : ((u = !1), i < a && (a = i));
          if (u) {
            r.splice(s--, 1);
            var p = o();
            void 0 !== p && (e = p);
          }
        }
        return e;
      }
      i = i || 0;
      for (var s = r.length; s > 0 && r[s - 1][2] > i; s--) r[s] = r[s - 1];
      r[s] = [n, o, i];
    }),
    (t.d = (r, e) => {
      for (var n in e)
        t.o(e, n) &&
          !t.o(r, n) &&
          Object.defineProperty(r, n, { enumerable: !0, get: e[n] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (r) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e)),
    (() => {
      var r = { 179: 0 };
      t.O.j = (e) => 0 === r[e];
      var e = (e, n) => {
          var o,
            i,
            [a, u, f] = n,
            p = 0;
          if (a.some((e) => 0 !== r[e])) {
            for (o in u) t.o(u, o) && (t.m[o] = u[o]);
            if (f) var s = f(t);
          }
          for (e && e(n); p < a.length; p++)
            (i = a[p]), t.o(r, i) && r[i] && r[i][0](), (r[i] = 0);
          return t.O(s);
        },
        n = (self.webpackChunkwebpack5_ts_vue3 =
          self.webpackChunkwebpack5_ts_vue3 || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
  var o = t.O(void 0, [216], () => t(82));
  o = t.O(o);
})();
