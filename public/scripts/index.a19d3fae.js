function t(t) {
  Object.defineProperty(t, "__esModule", { value: !0, configurable: !0 });
}
function e(t, e, n, i) {
  Object.defineProperty(t, e, {
    get: n,
    set: i,
    enumerable: !0,
    configurable: !0,
  });
}
function n(t) {
  return t && t.__esModule ? t.default : t;
}
var i =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  r = {},
  o = {},
  a = i.parcelRequiredab0;
null == a &&
  (((a = function (t) {
    if (t in r) return r[t].exports;
    if (t in o) {
      var e = o[t];
      delete o[t];
      var n = { id: t, exports: {} };
      return (r[t] = n), e.call(n.exports, n, n.exports), n.exports;
    }
    var i = new Error("Cannot find module '" + t + "'");
    throw ((i.code = "MODULE_NOT_FOUND"), i);
  }).register = function (t, e) {
    o[t] = e;
  }),
  (i.parcelRequiredab0 = a)),
  a.register("2FcER", function (n, i) {
    t(n.exports),
      e(
        n.exports,
        "unByKey",
        () => c,
        (t) => (c = t)
      ),
      e(
        n.exports,
        "default",
        () => p,
        (t) => (p = t)
      );
    var r,
      o = a("KD0eF"),
      s = a("3xzSb"),
      l = a("ilM9F"),
      u =
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Class extends value " +
                String(e) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      h = (function (t) {
        function e() {
          var e = t.call(this) || this;
          return (
            (e.on = e.onInternal),
            (e.once = e.onceInternal),
            (e.un = e.unInternal),
            (e.revision_ = 0),
            e
          );
        }
        return (
          u(e, t),
          (e.prototype.changed = function () {
            ++this.revision_, this.dispatchEvent(s.default.CHANGE);
          }),
          (e.prototype.getRevision = function () {
            return this.revision_;
          }),
          (e.prototype.onInternal = function (t, e) {
            if (Array.isArray(t)) {
              for (var n = t.length, i = new Array(n), r = 0; r < n; ++r)
                i[r] = l.listen(this, t[r], e);
              return i;
            }
            return l.listen(this, t, e);
          }),
          (e.prototype.onceInternal = function (t, e) {
            var n;
            if (Array.isArray(t)) {
              var i = t.length;
              n = new Array(i);
              for (var r = 0; r < i; ++r) n[r] = l.listenOnce(this, t[r], e);
            } else n = l.listenOnce(this, t, e);
            return (e.ol_key = n), n;
          }),
          (e.prototype.unInternal = function (t, e) {
            var n = e.ol_key;
            if (n) c(n);
            else if (Array.isArray(t))
              for (var i = 0, r = t.length; i < r; ++i)
                this.removeEventListener(t[i], e);
            else this.removeEventListener(t, e);
          }),
          e
        );
      })(o.default);
    function c(t) {
      if (Array.isArray(t))
        for (var e = 0, n = t.length; e < n; ++e) l.unlistenByKey(t[e]);
      else l.unlistenByKey(t);
    }
    h.prototype.on, h.prototype.once, h.prototype.un;
    var p = h;
  }),
  a.register("KD0eF", function (t, n) {
    e(
      t.exports,
      "default",
      () => h,
      (t) => (h = t)
    );
    var i,
      r = a("4kyFN"),
      o = a("f18Q2"),
      s = a("6wUzV"),
      l = a("gn0g3"),
      u =
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Class extends value " +
                String(e) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      h = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            (n.eventTarget_ = e),
            (n.pendingRemovals_ = null),
            (n.dispatching_ = null),
            (n.listeners_ = null),
            n
          );
        }
        return (
          u(e, t),
          (e.prototype.addEventListener = function (t, e) {
            if (t && e) {
              var n = this.listeners_ || (this.listeners_ = {}),
                i = n[t] || (n[t] = []);
              -1 === i.indexOf(e) && i.push(e);
            }
          }),
          (e.prototype.dispatchEvent = function (t) {
            var e = "string" == typeof t,
              n = e ? t : t.type,
              i = this.listeners_ && this.listeners_[n];
            if (i) {
              var r = e ? new o.default(t) : t;
              r.target || (r.target = this.eventTarget_ || this);
              var a,
                l = this.dispatching_ || (this.dispatching_ = {}),
                u = this.pendingRemovals_ || (this.pendingRemovals_ = {});
              n in l || ((l[n] = 0), (u[n] = 0)), ++l[n];
              for (var h = 0, c = i.length; h < c; ++h)
                if (
                  !1 ===
                    (a =
                      "handleEvent" in i[h]
                        ? i[h].handleEvent(r)
                        : i[h].call(this, r)) ||
                  r.propagationStopped
                ) {
                  a = !1;
                  break;
                }
              if (0 == --l[n]) {
                var p = u[n];
                for (delete u[n]; p--; ) this.removeEventListener(n, s.VOID);
                delete l[n];
              }
              return a;
            }
          }),
          (e.prototype.disposeInternal = function () {
            this.listeners_ && l.clear(this.listeners_);
          }),
          (e.prototype.getListeners = function (t) {
            return (this.listeners_ && this.listeners_[t]) || void 0;
          }),
          (e.prototype.hasListener = function (t) {
            return (
              !!this.listeners_ &&
              (t
                ? t in this.listeners_
                : Object.keys(this.listeners_).length > 0)
            );
          }),
          (e.prototype.removeEventListener = function (t, e) {
            var n = this.listeners_ && this.listeners_[t];
            if (n) {
              var i = n.indexOf(e);
              -1 !== i &&
                (this.pendingRemovals_ && t in this.pendingRemovals_
                  ? ((n[i] = s.VOID), ++this.pendingRemovals_[t])
                  : (n.splice(i, 1),
                    0 === n.length && delete this.listeners_[t]));
            }
          }),
          e
        );
      })(r.default);
  }),
  a.register("4kyFN", function (t, n) {
    e(t.exports, "default", () => i);
    var i = (function () {
      function t() {
        this.disposed = !1;
      }
      return (
        (t.prototype.dispose = function () {
          this.disposed || ((this.disposed = !0), this.disposeInternal());
        }),
        (t.prototype.disposeInternal = function () {}),
        t
      );
    })();
  }),
  a.register("f18Q2", function (t, n) {
    e(t.exports, "default", () => i);
    var i = (function () {
      function t(t) {
        this.propagationStopped,
          this.defaultPrevented,
          (this.type = t),
          (this.target = null);
      }
      return (
        (t.prototype.preventDefault = function () {
          this.defaultPrevented = !0;
        }),
        (t.prototype.stopPropagation = function () {
          this.propagationStopped = !0;
        }),
        t
      );
    })();
  }),
  a.register("6wUzV", function (t, n) {
    e(t.exports, "TRUE", () => r),
      e(t.exports, "FALSE", () => o),
      e(t.exports, "VOID", () => s),
      e(t.exports, "memoizeOne", () => l);
    var i = a("fVVyM");
    function r() {
      return !0;
    }
    function o() {
      return !1;
    }
    function s() {}
    function l(t) {
      var e,
        n,
        r,
        o = !1;
      return function () {
        var a = Array.prototype.slice.call(arguments);
        return (
          (o && this === r && i.equals(a, n)) ||
            ((o = !0), (r = this), (n = a), (e = t.apply(this, arguments))),
          e
        );
      };
    }
  }),
  a.register("fVVyM", function (t, n) {
    function i(t, e, n) {
      for (var i, o, a = n || r, s = 0, l = t.length, u = !1; s < l; )
        (o = +a(t[(i = s + ((l - s) >> 1))], e)) < 0
          ? (s = i + 1)
          : ((l = i), (u = !o));
      return u ? s : ~s;
    }
    function r(t, e) {
      return t > e ? 1 : t < e ? -1 : 0;
    }
    function o(t, e, n) {
      var i = t.length;
      if (t[0] <= e) return 0;
      if (e <= t[i - 1]) return i - 1;
      var r = void 0;
      if (n > 0) {
        for (r = 1; r < i; ++r) if (t[r] < e) return r - 1;
      } else if (n < 0) {
        for (r = 1; r < i; ++r) if (t[r] <= e) return r;
      } else
        for (r = 1; r < i; ++r) {
          if (t[r] == e) return r;
          if (t[r] < e)
            return "function" == typeof n
              ? n(e, t[r - 1], t[r]) > 0
                ? r - 1
                : r
              : t[r - 1] - e < e - t[r]
              ? r - 1
              : r;
        }
      return i - 1;
    }
    function a(t, e, n) {
      for (; e < n; ) {
        var i = t[e];
        (t[e] = t[n]), (t[n] = i), ++e, --n;
      }
    }
    function s(t, e) {
      for (var n = Array.isArray(e) ? e : [e], i = n.length, r = 0; r < i; r++)
        t[t.length] = n[r];
    }
    function l(t, e) {
      var n = t.length;
      if (n !== e.length) return !1;
      for (var i = 0; i < n; i++) if (t[i] !== e[i]) return !1;
      return !0;
    }
    function u(t, e, n) {
      var i = e || r;
      return t.every(function (e, r) {
        if (0 === r) return !0;
        var o = i(t[r - 1], e);
        return !(o > 0 || (n && 0 === o));
      });
    }
    e(t.exports, "binarySearch", () => i),
      e(t.exports, "numberSafeCompareFunction", () => r),
      e(t.exports, "linearFindNearest", () => o),
      e(t.exports, "reverseSubArray", () => a),
      e(t.exports, "extend", () => s),
      e(t.exports, "equals", () => l),
      e(t.exports, "isSorted", () => u);
  }),
  a.register("gn0g3", function (t, n) {
    e(t.exports, "assign", () => i),
      e(t.exports, "clear", () => r),
      e(t.exports, "getValues", () => o),
      e(t.exports, "isEmpty", () => a);
    var i =
      "function" == typeof Object.assign
        ? Object.assign
        : function (t, e) {
            if (null == t)
              throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(t), i = 1, r = arguments.length; i < r; ++i) {
              var o = arguments[i];
              if (null != o)
                for (var a in o) o.hasOwnProperty(a) && (n[a] = o[a]);
            }
            return n;
          };
    function r(t) {
      for (var e in t) delete t[e];
    }
    var o =
      "function" == typeof Object.values
        ? Object.values
        : function (t) {
            var e = [];
            for (var n in t) e.push(t[n]);
            return e;
          };
    function a(t) {
      var e;
      for (e in t) return !1;
      return !e;
    }
  }),
  a.register("3xzSb", function (t, n) {
    e(t.exports, "default", () => i);
    var i = {
      CHANGE: "change",
      ERROR: "error",
      BLUR: "blur",
      CLEAR: "clear",
      CONTEXTMENU: "contextmenu",
      CLICK: "click",
      DBLCLICK: "dblclick",
      DRAGENTER: "dragenter",
      DRAGOVER: "dragover",
      DROP: "drop",
      FOCUS: "focus",
      KEYDOWN: "keydown",
      KEYPRESS: "keypress",
      LOAD: "load",
      RESIZE: "resize",
      TOUCHMOVE: "touchmove",
      WHEEL: "wheel",
    };
  }),
  a.register("ilM9F", function (t, n) {
    e(t.exports, "listen", () => r),
      e(t.exports, "listenOnce", () => o),
      e(t.exports, "unlistenByKey", () => s);
    var i = a("gn0g3");
    function r(t, e, n, i, r) {
      if ((i && i !== t && (n = n.bind(i)), r)) {
        var o = n;
        n = function () {
          t.removeEventListener(e, n), o.apply(this, arguments);
        };
      }
      var a = { target: t, type: e, listener: n };
      return t.addEventListener(e, n), a;
    }
    function o(t, e, n, i) {
      return r(t, e, n, i, !0);
    }
    function s(t) {
      t &&
        t.target &&
        (t.target.removeEventListener(t.type, t.listener), i.clear(t));
    }
  }),
  a.register("YSU3I", function (n, i) {
    t(n.exports),
      e(
        n.exports,
        "GroupEvent",
        () => m,
        (t) => (m = t)
      ),
      e(
        n.exports,
        "default",
        () => C,
        (t) => (C = t)
      );
    var r,
      o = a("7xdj9"),
      s = a("cD8Qe"),
      l = a("1TIYs"),
      u = a("f18Q2"),
      h = a("3xzSb"),
      c = a("jXCUw"),
      p = a("d8cxx"),
      f = a("4Cz58"),
      d = a("gn0g3"),
      g = a("9pD6L"),
      _ = a("9iPUS"),
      y = a("ilM9F"),
      v =
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Class extends value " +
                String(e) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      m = (function (t) {
        function e(e, n) {
          var i = t.call(this, e) || this;
          return (i.layer = n), i;
        }
        return v(e, t), e;
      })(u.default),
      x = "layers",
      C = (function (t) {
        function e(e) {
          var n = this,
            i = e || {},
            r = d.assign({}, i);
          delete r.layers;
          var o = i.layers;
          return (
            (n = t.call(this, r) || this).on,
            n.once,
            n.un,
            (n.layersListenerKeys_ = []),
            (n.listenerKeys_ = {}),
            n.addChangeListener(x, n.handleLayersChanged_),
            o
              ? Array.isArray(o)
                ? (o = new s.default(o.slice(), { unique: !0 }))
                : f.assert("function" == typeof o.getArray, 43)
              : (o = new s.default(void 0, { unique: !0 })),
            n.setLayers(o),
            n
          );
        }
        return (
          v(e, t),
          (e.prototype.handleLayerChange_ = function () {
            this.changed();
          }),
          (e.prototype.handleLayersChanged_ = function () {
            this.layersListenerKeys_.forEach(y.unlistenByKey),
              (this.layersListenerKeys_.length = 0);
            var t = this.getLayers();
            for (var e in (this.layersListenerKeys_.push(
              y.listen(t, l.default.ADD, this.handleLayersAdd_, this),
              y.listen(t, l.default.REMOVE, this.handleLayersRemove_, this)
            ),
            this.listenerKeys_))
              this.listenerKeys_[e].forEach(y.unlistenByKey);
            d.clear(this.listenerKeys_);
            for (var n = t.getArray(), i = 0, r = n.length; i < r; i++) {
              var o = n[i];
              this.registerLayerListeners_(o),
                this.dispatchEvent(new m("addlayer", o));
            }
            this.changed();
          }),
          (e.prototype.registerLayerListeners_ = function (t) {
            var n = [
              y.listen(
                t,
                c.default.PROPERTYCHANGE,
                this.handleLayerChange_,
                this
              ),
              y.listen(t, h.default.CHANGE, this.handleLayerChange_, this),
            ];
            t instanceof e &&
              n.push(
                y.listen(t, "addlayer", this.handleLayerGroupAdd_, this),
                y.listen(t, "removelayer", this.handleLayerGroupRemove_, this)
              ),
              (this.listenerKeys_[_.getUid(t)] = n);
          }),
          (e.prototype.handleLayerGroupAdd_ = function (t) {
            this.dispatchEvent(new m("addlayer", t.layer));
          }),
          (e.prototype.handleLayerGroupRemove_ = function (t) {
            this.dispatchEvent(new m("removelayer", t.layer));
          }),
          (e.prototype.handleLayersAdd_ = function (t) {
            var e = t.element;
            this.registerLayerListeners_(e),
              this.dispatchEvent(new m("addlayer", e)),
              this.changed();
          }),
          (e.prototype.handleLayersRemove_ = function (t) {
            var e = t.element,
              n = _.getUid(e);
            this.listenerKeys_[n].forEach(y.unlistenByKey),
              delete this.listenerKeys_[n],
              this.dispatchEvent(new m("removelayer", e)),
              this.changed();
          }),
          (e.prototype.getLayers = function () {
            return this.get(x);
          }),
          (e.prototype.setLayers = function (t) {
            var e = this.getLayers();
            if (e)
              for (var n = e.getArray(), i = 0, r = n.length; i < r; ++i)
                this.dispatchEvent(new m("removelayer", n[i]));
            this.set(x, t);
          }),
          (e.prototype.getLayersArray = function (t) {
            var e = void 0 !== t ? t : [];
            return (
              this.getLayers().forEach(function (t) {
                t.getLayersArray(e);
              }),
              e
            );
          }),
          (e.prototype.getLayerStatesArray = function (t) {
            var e = void 0 !== t ? t : [],
              n = e.length;
            this.getLayers().forEach(function (t) {
              t.getLayerStatesArray(e);
            });
            var i = this.getLayerState(),
              r = i.zIndex;
            t || void 0 !== i.zIndex || (r = 0);
            for (var o = n, a = e.length; o < a; o++) {
              var s = e[o];
              (s.opacity *= i.opacity),
                (s.visible = s.visible && i.visible),
                (s.maxResolution = Math.min(s.maxResolution, i.maxResolution)),
                (s.minResolution = Math.max(s.minResolution, i.minResolution)),
                (s.minZoom = Math.max(s.minZoom, i.minZoom)),
                (s.maxZoom = Math.min(s.maxZoom, i.maxZoom)),
                void 0 !== i.extent &&
                  (void 0 !== s.extent
                    ? (s.extent = g.getIntersection(s.extent, i.extent))
                    : (s.extent = i.extent)),
                void 0 === s.zIndex && (s.zIndex = r);
            }
            return e;
          }),
          (e.prototype.getSourceState = function () {
            return p.default.READY;
          }),
          e
        );
      })(o.default);
  }),
  a.register("7xdj9", function (t, n) {
    e(
      t.exports,
      "default",
      () => p,
      (t) => (p = t)
    );
    var i,
      r = a("fFFY7"),
      o = a("lbO8S"),
      s = a("9iPUS"),
      l = a("4Cz58"),
      u = a("gn0g3"),
      h = a("9byFX"),
      c =
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Class extends value " +
                String(e) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      p = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          n.on, n.once, n.un, (n.background_ = e.background);
          var i = u.assign({}, e);
          return (
            "object" == typeof e.properties &&
              (delete i.properties, u.assign(i, e.properties)),
            (i[o.default.OPACITY] = void 0 !== e.opacity ? e.opacity : 1),
            l.assert("number" == typeof i[o.default.OPACITY], 64),
            (i[o.default.VISIBLE] = void 0 === e.visible || e.visible),
            (i[o.default.Z_INDEX] = e.zIndex),
            (i[o.default.MAX_RESOLUTION] =
              void 0 !== e.maxResolution ? e.maxResolution : 1 / 0),
            (i[o.default.MIN_RESOLUTION] =
              void 0 !== e.minResolution ? e.minResolution : 0),
            (i[o.default.MIN_ZOOM] = void 0 !== e.minZoom ? e.minZoom : -1 / 0),
            (i[o.default.MAX_ZOOM] = void 0 !== e.maxZoom ? e.maxZoom : 1 / 0),
            (n.className_ = void 0 !== i.className ? i.className : "ol-layer"),
            delete i.className,
            n.setProperties(i),
            (n.state_ = null),
            n
          );
        }
        return (
          c(e, t),
          (e.prototype.getBackground = function () {
            return this.background_;
          }),
          (e.prototype.getClassName = function () {
            return this.className_;
          }),
          (e.prototype.getLayerState = function (t) {
            var e = this.state_ || { layer: this, managed: void 0 === t || t },
              n = this.getZIndex();
            return (
              (e.opacity = h.clamp(
                Math.round(100 * this.getOpacity()) / 100,
                0,
                1
              )),
              (e.visible = this.getVisible()),
              (e.extent = this.getExtent()),
              (e.zIndex = void 0 !== n || e.managed ? n : 1 / 0),
              (e.maxResolution = this.getMaxResolution()),
              (e.minResolution = Math.max(this.getMinResolution(), 0)),
              (e.minZoom = this.getMinZoom()),
              (e.maxZoom = this.getMaxZoom()),
              (this.state_ = e),
              e
            );
          }),
          (e.prototype.getLayersArray = function (t) {
            return s.abstract();
          }),
          (e.prototype.getLayerStatesArray = function (t) {
            return s.abstract();
          }),
          (e.prototype.getExtent = function () {
            return this.get(o.default.EXTENT);
          }),
          (e.prototype.getMaxResolution = function () {
            return this.get(o.default.MAX_RESOLUTION);
          }),
          (e.prototype.getMinResolution = function () {
            return this.get(o.default.MIN_RESOLUTION);
          }),
          (e.prototype.getMinZoom = function () {
            return this.get(o.default.MIN_ZOOM);
          }),
          (e.prototype.getMaxZoom = function () {
            return this.get(o.default.MAX_ZOOM);
          }),
          (e.prototype.getOpacity = function () {
            return this.get(o.default.OPACITY);
          }),
          (e.prototype.getSourceState = function () {
            return s.abstract();
          }),
          (e.prototype.getVisible = function () {
            return this.get(o.default.VISIBLE);
          }),
          (e.prototype.getZIndex = function () {
            return this.get(o.default.Z_INDEX);
          }),
          (e.prototype.setBackground = function (t) {
            (this.background_ = t), this.changed();
          }),
          (e.prototype.setExtent = function (t) {
            this.set(o.default.EXTENT, t);
          }),
          (e.prototype.setMaxResolution = function (t) {
            this.set(o.default.MAX_RESOLUTION, t);
          }),
          (e.prototype.setMinResolution = function (t) {
            this.set(o.default.MIN_RESOLUTION, t);
          }),
          (e.prototype.setMaxZoom = function (t) {
            this.set(o.default.MAX_ZOOM, t);
          }),
          (e.prototype.setMinZoom = function (t) {
            this.set(o.default.MIN_ZOOM, t);
          }),
          (e.prototype.setOpacity = function (t) {
            l.assert("number" == typeof t, 64), this.set(o.default.OPACITY, t);
          }),
          (e.prototype.setVisible = function (t) {
            this.set(o.default.VISIBLE, t);
          }),
          (e.prototype.setZIndex = function (t) {
            this.set(o.default.Z_INDEX, t);
          }),
          (e.prototype.disposeInternal = function () {
            this.state_ && ((this.state_.layer = null), (this.state_ = null)),
              t.prototype.disposeInternal.call(this);
          }),
          e
        );
      })(r.default);
  }),
  a.register("fFFY7", function (t, n) {
    e(
      t.exports,
      "ObjectEvent",
      () => c,
      (t) => (c = t)
    ),
      e(
        t.exports,
        "default",
        () => p,
        (t) => (p = t)
      );
    var i,
      r = a("f18Q2"),
      o = a("jXCUw"),
      s = a("2FcER"),
      l = a("gn0g3"),
      u = a("9iPUS"),
      h =
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Class extends value " +
                String(e) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      c = (function (t) {
        function e(e, n, i) {
          var r = t.call(this, e) || this;
          return (r.key = n), (r.oldValue = i), r;
        }
        return h(e, t), e;
      })(r.default),
      p = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            n.on,
            n.once,
            n.un,
            u.getUid(n),
            (n.values_ = null),
            void 0 !== e && n.setProperties(e),
            n
          );
        }
        return (
          h(e, t),
          (e.prototype.get = function (t) {
            var e;
            return (
              this.values_ &&
                this.values_.hasOwnProperty(t) &&
                (e = this.values_[t]),
              e
            );
          }),
          (e.prototype.getKeys = function () {
            return (this.values_ && Object.keys(this.values_)) || [];
          }),
          (e.prototype.getProperties = function () {
            return (this.values_ && l.assign({}, this.values_)) || {};
          }),
          (e.prototype.hasProperties = function () {
            return !!this.values_;
          }),
          (e.prototype.notify = function (t, e) {
            var n;
            (n = "change:".concat(t)),
              this.hasListener(n) && this.dispatchEvent(new c(n, t, e)),
              (n = o.default.PROPERTYCHANGE),
              this.hasListener(n) && this.dispatchEvent(new c(n, t, e));
          }),
          (e.prototype.addChangeListener = function (t, e) {
            this.addEventListener("change:".concat(t), e);
          }),
          (e.prototype.removeChangeListener = function (t, e) {
            this.removeEventListener("change:".concat(t), e);
          }),
          (e.prototype.set = function (t, e, n) {
            var i = this.values_ || (this.values_ = {});
            if (n) i[t] = e;
            else {
              var r = i[t];
              (i[t] = e), r !== e && this.notify(t, r);
            }
          }),
          (e.prototype.setProperties = function (t, e) {
            for (var n in t) this.set(n, t[n], e);
          }),
          (e.prototype.applyProperties = function (t) {
            t.values_ &&
              l.assign(this.values_ || (this.values_ = {}), t.values_);
          }),
          (e.prototype.unset = function (t, e) {
            if (this.values_ && t in this.values_) {
              var n = this.values_[t];
              delete this.values_[t],
                l.isEmpty(this.values_) && (this.values_ = null),
                e || this.notify(t, n);
            }
          }),
          e
        );
      })(s.default);
  }),
  a.register("jXCUw", function (t, n) {
    e(t.exports, "default", () => i);
    var i = { PROPERTYCHANGE: "propertychange" };
  }),
  a.register("9iPUS", function (t, n) {
    function i() {
      return (function () {
        throw new Error("Unimplemented abstract method.");
      })();
    }
    e(t.exports, "abstract", () => i),
      e(t.exports, "getUid", () => o),
      e(t.exports, "VERSION", () => a);
    var r = 0;
    function o(t) {
      return t.ol_uid || (t.ol_uid = String(++r));
    }
    var a = "6.14.1";
  }),
  a.register("lbO8S", function (t, n) {
    e(t.exports, "default", () => i);
    var i = {
      OPACITY: "opacity",
      VISIBLE: "visible",
      EXTENT: "extent",
      Z_INDEX: "zIndex",
      MAX_RESOLUTION: "maxResolution",
      MIN_RESOLUTION: "minResolution",
      MAX_ZOOM: "maxZoom",
      MIN_ZOOM: "minZoom",
      SOURCE: "source",
      MAP: "map",
    };
  }),
  a.register("4Cz58", function (t, n) {
    e(t.exports, "assert", () => r);
    var i = a("5wMtC");
    function r(t, e) {
      if (!t) throw new i.default(e);
    }
  }),
  a.register("5wMtC", function (t, n) {
    e(
      t.exports,
      "default",
      () => s,
      (t) => (s = t)
    );
    var i,
      r = a("9iPUS"),
      o =
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Class extends value " +
                String(e) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      s = (function (t) {
        function e(e) {
          var n = this,
            i =
              "Assertion failed. See https://openlayers.org/en/" +
              ("latest" === r.VERSION
                ? r.VERSION
                : "v" + r.VERSION.split("-")[0]) +
              "/doc/errors/#" +
              e +
              " for details.";
          return (
            ((n = t.call(this, i) || this).code = e),
            (n.name = "AssertionError"),
            (n.message = i),
            n
          );
        }
        return o(e, t), e;
      })(Error);
  }),
  a.register("9byFX", function (t, n) {
    function i(t, e, n) {
      return Math.min(Math.max(t, e), n);
    }
    e(t.exports, "clamp", () => i),
      e(t.exports, "cosh", () => r),
      e(t.exports, "log2", () => o),
      e(t.exports, "squaredSegmentDistance", () => a),
      e(t.exports, "squaredDistance", () => s),
      e(t.exports, "solveLinearSystem", () => l),
      e(t.exports, "toDegrees", () => u),
      e(t.exports, "toRadians", () => h),
      e(t.exports, "modulo", () => c),
      e(t.exports, "lerp", () => p),
      e(t.exports, "round", () => d),
      e(t.exports, "floor", () => g),
      e(t.exports, "ceil", () => _);
    var r =
        "cosh" in Math
          ? Math.cosh
          : function (t) {
              var e = Math.exp(t);
              return (e + 1 / e) / 2;
            },
      o =
        "log2" in Math
          ? Math.log2
          : function (t) {
              return Math.log(t) * Math.LOG2E;
            };
    function a(t, e, n, i, r, o) {
      var a = r - n,
        l = o - i;
      if (0 !== a || 0 !== l) {
        var u = ((t - n) * a + (e - i) * l) / (a * a + l * l);
        u > 1 ? ((n = r), (i = o)) : u > 0 && ((n += a * u), (i += l * u));
      }
      return s(t, e, n, i);
    }
    function s(t, e, n, i) {
      var r = n - t,
        o = i - e;
      return r * r + o * o;
    }
    function l(t) {
      for (var e = t.length, n = 0; n < e; n++) {
        for (var i = n, r = Math.abs(t[n][n]), o = n + 1; o < e; o++) {
          var a = Math.abs(t[o][n]);
          a > r && ((r = a), (i = o));
        }
        if (0 === r) return null;
        var s = t[i];
        (t[i] = t[n]), (t[n] = s);
        for (var l = n + 1; l < e; l++)
          for (var u = -t[l][n] / t[n][n], h = n; h < e + 1; h++)
            n == h ? (t[l][h] = 0) : (t[l][h] += u * t[n][h]);
      }
      for (var c = new Array(e), p = e - 1; p >= 0; p--) {
        c[p] = t[p][e] / t[p][p];
        for (var f = p - 1; f >= 0; f--) t[f][e] -= t[f][p] * c[p];
      }
      return c;
    }
    function u(t) {
      return (180 * t) / Math.PI;
    }
    function h(t) {
      return (t * Math.PI) / 180;
    }
    function c(t, e) {
      var n = t % e;
      return n * e < 0 ? n + e : n;
    }
    function p(t, e, n) {
      return t + n * (e - t);
    }
    function f(t, e) {
      var n = Math.pow(10, e);
      return Math.round(t * n) / n;
    }
    function d(t, e) {
      return Math.round(f(t, e));
    }
    function g(t, e) {
      return Math.floor(f(t, e));
    }
    function _(t, e) {
      return Math.ceil(f(t, e));
    }
  }),
  a.register("cD8Qe", function (t, n) {
    e(
      t.exports,
      "CollectionEvent",
      () => c,
      (t) => (c = t)
    ),
      e(
        t.exports,
        "default",
        () => p,
        (t) => (p = t)
      );
    var i,
      r = a("5wMtC"),
      o = a("fFFY7"),
      s = a("1TIYs"),
      l = a("f18Q2"),
      u =
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Class extends value " +
                String(e) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      h = "length",
      c = (function (t) {
        function e(e, n, i) {
          var r = t.call(this, e) || this;
          return (r.element = n), (r.index = i), r;
        }
        return u(e, t), e;
      })(l.default),
      p = (function (t) {
        function e(e, n) {
          var i = t.call(this) || this;
          i.on, i.once, i.un;
          var r = n || {};
          if (((i.unique_ = !!r.unique), (i.array_ = e || []), i.unique_))
            for (var o = 0, a = i.array_.length; o < a; ++o)
              i.assertUnique_(i.array_[o], o);
          return i.updateLength_(), i;
        }
        return (
          u(e, t),
          (e.prototype.clear = function () {
            for (; this.getLength() > 0; ) this.pop();
          }),
          (e.prototype.extend = function (t) {
            for (var e = 0, n = t.length; e < n; ++e) this.push(t[e]);
            return this;
          }),
          (e.prototype.forEach = function (t) {
            for (var e = this.array_, n = 0, i = e.length; n < i; ++n)
              t(e[n], n, e);
          }),
          (e.prototype.getArray = function () {
            return this.array_;
          }),
          (e.prototype.item = function (t) {
            return this.array_[t];
          }),
          (e.prototype.getLength = function () {
            return this.get(h);
          }),
          (e.prototype.insertAt = function (t, e) {
            this.unique_ && this.assertUnique_(e),
              this.array_.splice(t, 0, e),
              this.updateLength_(),
              this.dispatchEvent(new c(s.default.ADD, e, t));
          }),
          (e.prototype.pop = function () {
            return this.removeAt(this.getLength() - 1);
          }),
          (e.prototype.push = function (t) {
            this.unique_ && this.assertUnique_(t);
            var e = this.getLength();
            return this.insertAt(e, t), this.getLength();
          }),
          (e.prototype.remove = function (t) {
            for (var e = this.array_, n = 0, i = e.length; n < i; ++n)
              if (e[n] === t) return this.removeAt(n);
          }),
          (e.prototype.removeAt = function (t) {
            var e = this.array_[t];
            return (
              this.array_.splice(t, 1),
              this.updateLength_(),
              this.dispatchEvent(new c(s.default.REMOVE, e, t)),
              e
            );
          }),
          (e.prototype.setAt = function (t, e) {
            var n = this.getLength();
            if (t < n) {
              this.unique_ && this.assertUnique_(e, t);
              var i = this.array_[t];
              (this.array_[t] = e),
                this.dispatchEvent(new c(s.default.REMOVE, i, t)),
                this.dispatchEvent(new c(s.default.ADD, e, t));
            } else {
              for (var r = n; r < t; ++r) this.insertAt(r, void 0);
              this.insertAt(t, e);
            }
          }),
          (e.prototype.updateLength_ = function () {
            this.set(h, this.array_.length);
          }),
          (e.prototype.assertUnique_ = function (t, e) {
            for (var n = 0, i = this.array_.length; n < i; ++n)
              if (this.array_[n] === t && n !== e) throw new r.default(58);
          }),
          e
        );
      })(o.default);
  }),
  a.register("1TIYs", function (t, n) {
    e(t.exports, "default", () => i);
    var i = { ADD: "add", REMOVE: "remove" };
  }),
  a.register("d8cxx", function (t, n) {
    e(t.exports, "default", () => i);
    var i = {
      UNDEFINED: "undefined",
      LOADING: "loading",
      READY: "ready",
      ERROR: "error",
    };
  }),
  a.register("9pD6L", function (t, n) {
    e(t.exports, "boundingExtent", () => s),
      e(t.exports, "createEmpty", () => g),
      e(t.exports, "extendCoordinate", () => E),
      e(t.exports, "createOrUpdate", () => _),
      e(t.exports, "buffer", () => l),
      e(t.exports, "clone", () => u),
      e(t.exports, "closestSquaredDistanceXY", () => h),
      e(t.exports, "containsCoordinate", () => c),
      e(t.exports, "containsXY", () => f),
      e(t.exports, "containsExtent", () => p),
      e(t.exports, "coordinateRelationship", () => d),
      e(t.exports, "createOrUpdateEmpty", () => y),
      e(t.exports, "createOrUpdateFromCoordinate", () => v),
      e(t.exports, "createOrUpdateFromFlatCoordinates", () => m),
      e(t.exports, "extendFlatCoordinates", () => S),
      e(t.exports, "equals", () => x),
      e(t.exports, "extend", () => C),
      e(t.exports, "forEachCorner", () => O),
      e(t.exports, "getBottomLeft", () => b),
      e(t.exports, "getBottomRight", () => R),
      e(t.exports, "getTopRight", () => D),
      e(t.exports, "getTopLeft", () => A),
      e(t.exports, "getArea", () => T),
      e(t.exports, "isEmpty", () => G),
      e(t.exports, "getWidth", () => j),
      e(t.exports, "getHeight", () => M),
      e(t.exports, "getCenter", () => I),
      e(t.exports, "getCorner", () => P),
      e(t.exports, "getForViewAndSize", () => L),
      e(t.exports, "getIntersection", () => F),
      e(t.exports, "intersects", () => N),
      e(t.exports, "returnOrUpdate", () => k),
      e(t.exports, "intersectsSegment", () => z),
      e(t.exports, "applyTransform", () => U),
      e(t.exports, "wrapX", () => X);
    var i = a("43hY5"),
      r = a("iM9A6"),
      o = a("4Cz58");
    function s(t) {
      for (var e = g(), n = 0, i = t.length; n < i; ++n) E(e, t[n]);
      return e;
    }
    function l(t, e, n) {
      return n
        ? ((n[0] = t[0] - e),
          (n[1] = t[1] - e),
          (n[2] = t[2] + e),
          (n[3] = t[3] + e),
          n)
        : [t[0] - e, t[1] - e, t[2] + e, t[3] + e];
    }
    function u(t, e) {
      return e
        ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e)
        : t.slice();
    }
    function h(t, e, n) {
      var i, r;
      return (
        (i = e < t[0] ? t[0] - e : t[2] < e ? e - t[2] : 0) * i +
        (r = n < t[1] ? t[1] - n : t[3] < n ? n - t[3] : 0) * r
      );
    }
    function c(t, e) {
      return f(t, e[0], e[1]);
    }
    function p(t, e) {
      return t[0] <= e[0] && e[2] <= t[2] && t[1] <= e[1] && e[3] <= t[3];
    }
    function f(t, e, n) {
      return t[0] <= e && e <= t[2] && t[1] <= n && n <= t[3];
    }
    function d(t, e) {
      var n = t[0],
        i = t[1],
        o = t[2],
        a = t[3],
        s = e[0],
        l = e[1],
        u = r.default.UNKNOWN;
      return (
        s < n ? (u |= r.default.LEFT) : s > o && (u |= r.default.RIGHT),
        l < i ? (u |= r.default.BELOW) : l > a && (u |= r.default.ABOVE),
        u === r.default.UNKNOWN && (u = r.default.INTERSECTING),
        u
      );
    }
    function g() {
      return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    }
    function _(t, e, n, i, r) {
      return r
        ? ((r[0] = t), (r[1] = e), (r[2] = n), (r[3] = i), r)
        : [t, e, n, i];
    }
    function y(t) {
      return _(1 / 0, 1 / 0, -1 / 0, -1 / 0, t);
    }
    function v(t, e) {
      var n = t[0],
        i = t[1];
      return _(n, i, n, i, e);
    }
    function m(t, e, n, i, r) {
      return S(y(r), t, e, n, i);
    }
    function x(t, e) {
      return t[0] == e[0] && t[2] == e[2] && t[1] == e[1] && t[3] == e[3];
    }
    function C(t, e) {
      return (
        e[0] < t[0] && (t[0] = e[0]),
        e[2] > t[2] && (t[2] = e[2]),
        e[1] < t[1] && (t[1] = e[1]),
        e[3] > t[3] && (t[3] = e[3]),
        t
      );
    }
    function E(t, e) {
      e[0] < t[0] && (t[0] = e[0]),
        e[0] > t[2] && (t[2] = e[0]),
        e[1] < t[1] && (t[1] = e[1]),
        e[1] > t[3] && (t[3] = e[1]);
    }
    function S(t, e, n, i, r) {
      for (; n < i; n += r) w(t, e[n], e[n + 1]);
      return t;
    }
    function w(t, e, n) {
      (t[0] = Math.min(t[0], e)),
        (t[1] = Math.min(t[1], n)),
        (t[2] = Math.max(t[2], e)),
        (t[3] = Math.max(t[3], n));
    }
    function O(t, e) {
      var n;
      return (n = e(b(t))) || (n = e(R(t))) || (n = e(D(t)))
        ? n
        : (n = e(A(t))) || !1;
    }
    function T(t) {
      var e = 0;
      return G(t) || (e = j(t) * M(t)), e;
    }
    function b(t) {
      return [t[0], t[1]];
    }
    function R(t) {
      return [t[2], t[1]];
    }
    function I(t) {
      return [(t[0] + t[2]) / 2, (t[1] + t[3]) / 2];
    }
    function P(t, e) {
      var n;
      return (
        e === i.default.BOTTOM_LEFT
          ? (n = b(t))
          : e === i.default.BOTTOM_RIGHT
          ? (n = R(t))
          : e === i.default.TOP_LEFT
          ? (n = A(t))
          : e === i.default.TOP_RIGHT
          ? (n = D(t))
          : o.assert(!1, 13),
        n
      );
    }
    function L(t, e, n, i, r) {
      var o = (e * i[0]) / 2,
        a = (e * i[1]) / 2,
        s = Math.cos(n),
        l = Math.sin(n),
        u = o * s,
        h = o * l,
        c = a * s,
        p = a * l,
        f = t[0],
        d = t[1],
        g = f - u + p,
        y = f - u - p,
        v = f + u - p,
        m = f + u + p,
        x = d - h - c,
        C = d - h + c,
        E = d + h + c,
        S = d + h - c;
      return _(
        Math.min(g, y, v, m),
        Math.min(x, C, E, S),
        Math.max(g, y, v, m),
        Math.max(x, C, E, S),
        r
      );
    }
    function M(t) {
      return t[3] - t[1];
    }
    function F(t, e, n) {
      var i = n || [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      return (
        N(t, e)
          ? (t[0] > e[0] ? (i[0] = t[0]) : (i[0] = e[0]),
            t[1] > e[1] ? (i[1] = t[1]) : (i[1] = e[1]),
            t[2] < e[2] ? (i[2] = t[2]) : (i[2] = e[2]),
            t[3] < e[3] ? (i[3] = t[3]) : (i[3] = e[3]))
          : y(i),
        i
      );
    }
    function A(t) {
      return [t[0], t[3]];
    }
    function D(t) {
      return [t[2], t[3]];
    }
    function j(t) {
      return t[2] - t[0];
    }
    function N(t, e) {
      return t[0] <= e[2] && t[2] >= e[0] && t[1] <= e[3] && t[3] >= e[1];
    }
    function G(t) {
      return t[2] < t[0] || t[3] < t[1];
    }
    function k(t, e) {
      return e
        ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e)
        : t;
    }
    function z(t, e, n) {
      var i = !1,
        o = d(t, e),
        a = d(t, n);
      if (o === r.default.INTERSECTING || a === r.default.INTERSECTING) i = !0;
      else {
        var s = t[0],
          l = t[1],
          u = t[2],
          h = t[3],
          c = e[0],
          p = e[1],
          f = n[0],
          g = n[1],
          _ = (g - p) / (f - c),
          y = void 0,
          v = void 0;
        a & r.default.ABOVE &&
          !(o & r.default.ABOVE) &&
          (i = (y = f - (g - h) / _) >= s && y <= u),
          i ||
            !(a & r.default.RIGHT) ||
            o & r.default.RIGHT ||
            (i = (v = g - (f - u) * _) >= l && v <= h),
          i ||
            !(a & r.default.BELOW) ||
            o & r.default.BELOW ||
            (i = (y = f - (g - l) / _) >= s && y <= u),
          i ||
            !(a & r.default.LEFT) ||
            o & r.default.LEFT ||
            (i = (v = g - (f - s) * _) >= l && v <= h);
      }
      return i;
    }
    function U(t, e, n, i) {
      var r = [];
      if (i > 1)
        for (var o = t[2] - t[0], a = t[3] - t[1], s = 0; s < i; ++s)
          r.push(
            t[0] + (o * s) / i,
            t[1],
            t[2],
            t[1] + (a * s) / i,
            t[2] - (o * s) / i,
            t[3],
            t[0],
            t[3] - (a * s) / i
          );
      else r = [t[0], t[1], t[2], t[1], t[2], t[3], t[0], t[3]];
      e(r, r, 2);
      for (var l = [], u = [], h = ((s = 0), r.length); s < h; s += 2)
        l.push(r[s]), u.push(r[s + 1]);
      return (function (t, e, n) {
        return _(
          Math.min.apply(null, t),
          Math.min.apply(null, e),
          Math.max.apply(null, t),
          Math.max.apply(null, e),
          n
        );
      })(l, u, n);
    }
    function X(t, e) {
      var n = e.getExtent(),
        i = I(t);
      if (e.canWrapX() && (i[0] < n[0] || i[0] >= n[2])) {
        var r = j(n),
          o = Math.floor((i[0] - n[0]) / r) * r;
        (t[0] -= o), (t[2] -= o);
      }
      return t;
    }
  }),
  a.register("43hY5", function (t, n) {
    e(t.exports, "default", () => i);
    var i = {
      BOTTOM_LEFT: "bottom-left",
      BOTTOM_RIGHT: "bottom-right",
      TOP_LEFT: "top-left",
      TOP_RIGHT: "top-right",
    };
  }),
  a.register("iM9A6", function (t, n) {
    e(t.exports, "default", () => i);
    var i = {
      UNKNOWN: 0,
      INTERSECTING: 1,
      ABOVE: 2,
      RIGHT: 4,
      BELOW: 8,
      LEFT: 16,
    };
  }),
  a.register("fVglf", function (n, i) {
    t(n.exports),
      e(
        n.exports,
        "default",
        () => p,
        (t) => (p = t)
      );
    var r,
      o = a("fFFY7"),
      s = a("jDfdj"),
      l = a("6wUzV"),
      u = a("ilM9F"),
      h = a("DfnQm"),
      c =
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Class extends value " +
                String(e) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      p = (function (t) {
        function e(e) {
          var n = t.call(this) || this,
            i = e.element;
          return (
            !i ||
              e.target ||
              i.style.pointerEvents ||
              (i.style.pointerEvents = "auto"),
            (n.element = i || null),
            (n.target_ = null),
            (n.map_ = null),
            (n.listenerKeys = []),
            e.render && (n.render = e.render),
            e.target && n.setTarget(e.target),
            n
          );
        }
        return (
          c(e, t),
          (e.prototype.disposeInternal = function () {
            h.removeNode(this.element), t.prototype.disposeInternal.call(this);
          }),
          (e.prototype.getMap = function () {
            return this.map_;
          }),
          (e.prototype.setMap = function (t) {
            this.map_ && h.removeNode(this.element);
            for (var e = 0, n = this.listenerKeys.length; e < n; ++e)
              u.unlistenByKey(this.listenerKeys[e]);
            ((this.listenerKeys.length = 0), (this.map_ = t), t) &&
              ((this.target_
                ? this.target_
                : t.getOverlayContainerStopEvent()
              ).appendChild(this.element),
              this.render !== l.VOID &&
                this.listenerKeys.push(
                  u.listen(t, s.default.POSTRENDER, this.render, this)
                ),
              t.render());
          }),
          (e.prototype.render = function (t) {}),
          (e.prototype.setTarget = function (t) {
            this.target_ =
              "string" == typeof t ? document.getElementById(t) : t;
          }),
          e
        );
      })(o.default);
  }),
  a.register("jDfdj", function (t, n) {
    e(t.exports, "default", () => i);
    var i = {
      POSTRENDER: "postrender",
      MOVESTART: "movestart",
      MOVEEND: "moveend",
      LOADSTART: "loadstart",
      LOADEND: "loadend",
    };
  }),
  a.register("DfnQm", function (t, n) {
    e(t.exports, "createCanvasContext2D", () => r),
      e(t.exports, "replaceNode", () => o),
      e(t.exports, "removeNode", () => s),
      e(t.exports, "removeChildren", () => l),
      e(t.exports, "replaceChildren", () => u);
    var i = a("8UoiJ");
    function r(t, e, n, r) {
      var o;
      return (
        (o =
          n && n.length
            ? n.shift()
            : i.WORKER_OFFSCREEN_CANVAS
            ? new OffscreenCanvas(t || 300, e || 300)
            : document.createElement("canvas")),
        t && (o.width = t),
        e && (o.height = e),
        o.getContext("2d", r)
      );
    }
    function o(t, e) {
      var n = e.parentNode;
      n && n.replaceChild(t, e);
    }
    function s(t) {
      return t && t.parentNode ? t.parentNode.removeChild(t) : null;
    }
    function l(t) {
      for (; t.lastChild; ) t.removeChild(t.lastChild);
    }
    function u(t, e) {
      for (var n = t.childNodes, i = 0; ; ++i) {
        var r = n[i],
          o = e[i];
        if (!r && !o) break;
        r !== o &&
          (r
            ? o
              ? t.insertBefore(o, r)
              : (t.removeChild(r), --i)
            : t.appendChild(o));
      }
    }
  }),
  a.register("8UoiJ", function (t, n) {
    e(t.exports, "FIREFOX", () => r),
      e(t.exports, "WEBKIT", () => o),
      e(t.exports, "MAC", () => a),
      e(t.exports, "DEVICE_PIXEL_RATIO", () => s),
      e(t.exports, "WORKER_OFFSCREEN_CANVAS", () => l),
      e(t.exports, "IMAGE_DECODE", () => u),
      e(t.exports, "PASSIVE_EVENT_LISTENERS", () => h);
    var i =
        "undefined" != typeof navigator && void 0 !== navigator.userAgent
          ? navigator.userAgent.toLowerCase()
          : "",
      r = -1 !== i.indexOf("firefox"),
      o =
        (-1 !== i.indexOf("safari") &&
          -1 == i.indexOf("chrom") &&
          (i.indexOf("version/15.4") >= 0 ||
            i.match(/cpu (os|iphone os) 15_4 like mac os x/)),
        -1 !== i.indexOf("webkit") && -1 == i.indexOf("edge")),
      a = -1 !== i.indexOf("macintosh"),
      s = "undefined" != typeof devicePixelRatio ? devicePixelRatio : 1,
      l =
        "undefined" != typeof WorkerGlobalScope &&
        "undefined" != typeof OffscreenCanvas &&
        self instanceof WorkerGlobalScope,
      u = "undefined" != typeof Image && Image.prototype.decode,
      h = (function () {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function () {
              t = !0;
            },
          });
          window.addEventListener("_", null, e),
            window.removeEventListener("_", null, e);
        } catch (t) {}
        return t;
      })();
  });
var s = {};
e(
  s,
  "default",
  () => So,
  (t) => (So = t)
);
var l = {};
e(
  l,
  "default",
  () => Xt,
  (t) => (Xt = t)
);
var u = {};
e(
  u,
  "default",
  () => rt,
  (t) => (rt = t)
);
var h,
  c = a("4kyFN"),
  p = a("6wUzV"),
  f = a("9iPUS"),
  d = a("8UoiJ"),
  g = a("4Cz58");
new Array(6);
function _(t, e, n, i, r, o, a) {
  return (
    (t[0] = e), (t[1] = n), (t[2] = i), (t[3] = r), (t[4] = o), (t[5] = a), t
  );
}
function y(t, e) {
  var n = e[0],
    i = e[1];
  return (
    (e[0] = t[0] * n + t[2] * i + t[4]), (e[1] = t[1] * n + t[3] * i + t[5]), e
  );
}
function v(t, e, n, i, r, o, a, s) {
  var l = Math.sin(o),
    u = Math.cos(o);
  return (
    (t[0] = i * u),
    (t[1] = r * l),
    (t[2] = -i * l),
    (t[3] = r * u),
    (t[4] = a * i * u - s * i * l + e),
    (t[5] = a * r * l + s * r * u + n),
    t
  );
}
function m(t, e) {
  var n,
    i = (n = e)[0] * n[3] - n[1] * n[2];
  g.assert(0 !== i, 32);
  var r = e[0],
    o = e[1],
    a = e[2],
    s = e[3],
    l = e[4],
    u = e[5];
  return (
    (t[0] = s / i),
    (t[1] = -o / i),
    (t[2] = -a / i),
    (t[3] = r / i),
    (t[4] = (a * u - s * l) / i),
    (t[5] = -(r * u - o * l) / i),
    t
  );
}
function x(t) {
  var e = "matrix(" + t.join(", ") + ")";
  if (d.WORKER_OFFSCREEN_CANVAS) return e;
  var n = h || (h = document.createElement("div"));
  return (n.style.transform = e), n.style.transform;
}
var C = a("9pD6L"),
  E = ((g = a("4Cz58")), a("9byFX")),
  S = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,
  w = /^([a-z]*)$|^hsla?\(.*\)$/i;
function O(t) {
  return "string" == typeof t ? t : M(t);
}
function T(t) {
  var e = document.createElement("div");
  if (((e.style.color = t), "" !== e.style.color)) {
    document.body.appendChild(e);
    var n = getComputedStyle(e).color;
    return document.body.removeChild(e), n;
  }
  return "";
}
var b,
  R,
  I =
    ((b = {}),
    (R = 0),
    function (t) {
      var e;
      if (b.hasOwnProperty(t)) e = b[t];
      else {
        if (R >= 1024) {
          var n = 0;
          for (var i in b) 3 & n++ || (delete b[i], --R);
        }
        (e = (function (t) {
          var e, n, i, r, o;
          if ((w.exec(t) && (t = T(t)), S.exec(t))) {
            var a = t.length - 1,
              s = void 0;
            s = a <= 4 ? 1 : 2;
            var l = 4 === a || 8 === a;
            (e = parseInt(t.substr(1 + 0 * s, s), 16)),
              (n = parseInt(t.substr(1 + 1 * s, s), 16)),
              (i = parseInt(t.substr(1 + 2 * s, s), 16)),
              (r = l ? parseInt(t.substr(1 + 3 * s, s), 16) : 255),
              1 == s &&
                ((e = (e << 4) + e),
                (n = (n << 4) + n),
                (i = (i << 4) + i),
                l && (r = (r << 4) + r)),
              (o = [e, n, i, r / 255]);
          } else
            0 == t.indexOf("rgba(")
              ? L((o = t.slice(5, -1).split(",").map(Number)))
              : 0 == t.indexOf("rgb(")
              ? ((o = t.slice(4, -1).split(",").map(Number)).push(1), L(o))
              : g.assert(!1, 14);
          return o;
        })(t)),
          (b[t] = e),
          ++R;
      }
      return e;
    });
function P(t) {
  return Array.isArray(t) ? t : I(t);
}
function L(t) {
  return (
    (t[0] = E.clamp((t[0] + 0.5) | 0, 0, 255)),
    (t[1] = E.clamp((t[1] + 0.5) | 0, 0, 255)),
    (t[2] = E.clamp((t[2] + 0.5) | 0, 0, 255)),
    (t[3] = E.clamp(t[3], 0, 1)),
    t
  );
}
function M(t) {
  var e = t[0];
  e != (0 | e) && (e = (e + 0.5) | 0);
  var n = t[1];
  n != (0 | n) && (n = (n + 0.5) | 0);
  var i = t[2];
  return (
    i != (0 | i) && (i = (i + 0.5) | 0),
    "rgba(" +
      e +
      "," +
      n +
      "," +
      i +
      "," +
      (void 0 === t[3] ? 1 : Math.round(100 * t[3]) / 100) +
      ")"
  );
}
var F = (function () {
  function t() {
    (this.cache_ = {}), (this.cacheSize_ = 0), (this.maxCacheSize_ = 32);
  }
  return (
    (t.prototype.clear = function () {
      (this.cache_ = {}), (this.cacheSize_ = 0);
    }),
    (t.prototype.canExpireCache = function () {
      return this.cacheSize_ > this.maxCacheSize_;
    }),
    (t.prototype.expire = function () {
      if (this.canExpireCache()) {
        var t = 0;
        for (var e in this.cache_) {
          var n = this.cache_[e];
          3 & t++ ||
            n.hasListener() ||
            (delete this.cache_[e], --this.cacheSize_);
        }
      }
    }),
    (t.prototype.get = function (t, e, n) {
      var i = A(t, e, n);
      return i in this.cache_ ? this.cache_[i] : null;
    }),
    (t.prototype.set = function (t, e, n, i) {
      var r = A(t, e, n);
      (this.cache_[r] = i), ++this.cacheSize_;
    }),
    (t.prototype.setSize = function (t) {
      (this.maxCacheSize_ = t), this.expire();
    }),
    t
  );
})();
function A(t, e, n) {
  return e + ":" + t + ":" + (n ? O(n) : "null");
}
var D = new F(),
  j = {};
e(
  j,
  "inView",
  () => q,
  (t) => (q = t)
),
  e(
    j,
    "default",
    () => J,
    (t) => (J = t)
  );
var N,
  G = a("7xdj9"),
  k = a("3xzSb"),
  z = a("lbO8S"),
  U = "prerender",
  X = "postrender",
  Y = "precompose",
  V = "postcompose",
  W = "rendercomplete",
  K = a("d8cxx"),
  B = ((g = a("4Cz58")), a("gn0g3")),
  Z = a("ilM9F"),
  H =
    ((N = function (t, e) {
      return (N =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, e);
    }),
    function (t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Class extends value " + String(e) + " is not a constructor or null"
        );
      function n() {
        this.constructor = t;
      }
      N(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((n.prototype = e.prototype), new n()));
    });
function q(t, e) {
  if (!t.visible) return !1;
  var n = e.resolution;
  if (n < t.minResolution || n >= t.maxResolution) return !1;
  var i = e.zoom;
  return i > t.minZoom && i <= t.maxZoom;
}
var J = (function (t) {
  function e(e) {
    var n = this,
      i = B.assign({}, e);
    delete i.source,
      (n = t.call(this, i) || this).on,
      n.once,
      n.un,
      (n.mapPrecomposeKey_ = null),
      (n.mapRenderKey_ = null),
      (n.sourceChangeKey_ = null),
      (n.renderer_ = null),
      (n.rendered = !1),
      e.render && (n.render = e.render),
      e.map && n.setMap(e.map),
      n.addChangeListener(z.default.SOURCE, n.handleSourcePropertyChange_);
    var r = e.source ? e.source : null;
    return n.setSource(r), n;
  }
  return (
    H(e, t),
    (e.prototype.getLayersArray = function (t) {
      var e = t || [];
      return e.push(this), e;
    }),
    (e.prototype.getLayerStatesArray = function (t) {
      var e = t || [];
      return e.push(this.getLayerState()), e;
    }),
    (e.prototype.getSource = function () {
      return this.get(z.default.SOURCE) || null;
    }),
    (e.prototype.getRenderSource = function () {
      return this.getSource();
    }),
    (e.prototype.getSourceState = function () {
      var t = this.getSource();
      return t ? t.getState() : K.default.UNDEFINED;
    }),
    (e.prototype.handleSourceChange_ = function () {
      this.changed();
    }),
    (e.prototype.handleSourcePropertyChange_ = function () {
      this.sourceChangeKey_ &&
        (Z.unlistenByKey(this.sourceChangeKey_),
        (this.sourceChangeKey_ = null));
      var t = this.getSource();
      t &&
        (this.sourceChangeKey_ = Z.listen(
          t,
          k.default.CHANGE,
          this.handleSourceChange_,
          this
        )),
        this.changed();
    }),
    (e.prototype.getFeatures = function (t) {
      return this.renderer_
        ? this.renderer_.getFeatures(t)
        : new Promise(function (t) {
            return t([]);
          });
    }),
    (e.prototype.getData = function (t) {
      return this.renderer_ && this.rendered ? this.renderer_.getData(t) : null;
    }),
    (e.prototype.render = function (t, e) {
      var n = this.getRenderer();
      if (n.prepareFrame(t)) return (this.rendered = !0), n.renderFrame(t, e);
    }),
    (e.prototype.unrender = function () {
      this.rendered = !1;
    }),
    (e.prototype.setMapInternal = function (t) {
      t || this.unrender(), this.set(z.default.MAP, t);
    }),
    (e.prototype.getMapInternal = function () {
      return this.get(z.default.MAP);
    }),
    (e.prototype.setMap = function (t) {
      this.mapPrecomposeKey_ &&
        (Z.unlistenByKey(this.mapPrecomposeKey_),
        (this.mapPrecomposeKey_ = null)),
        t || this.changed(),
        this.mapRenderKey_ &&
          (Z.unlistenByKey(this.mapRenderKey_), (this.mapRenderKey_ = null)),
        t &&
          ((this.mapPrecomposeKey_ = Z.listen(
            t,
            Y,
            function (t) {
              var e = t.frameState.layerStatesArray,
                n = this.getLayerState(!1);
              g.assert(
                !e.some(function (t) {
                  return t.layer === n.layer;
                }),
                67
              ),
                e.push(n);
            },
            this
          )),
          (this.mapRenderKey_ = Z.listen(this, k.default.CHANGE, t.render, t)),
          this.changed());
    }),
    (e.prototype.setSource = function (t) {
      this.set(z.default.SOURCE, t);
    }),
    (e.prototype.getRenderer = function () {
      return (
        this.renderer_ || (this.renderer_ = this.createRenderer()),
        this.renderer_
      );
    }),
    (e.prototype.hasRenderer = function () {
      return !!this.renderer_;
    }),
    (e.prototype.createRenderer = function () {
      return null;
    }),
    (e.prototype.disposeInternal = function () {
      this.renderer_ && (this.renderer_.dispose(), delete this.renderer_),
        this.setSource(null),
        t.prototype.disposeInternal.call(this);
    }),
    e
  );
})(G.default);
(C = a("9pD6L")), (E = a("9byFX"));
function Q(t, e) {
  for (var n = !0, i = t.length - 1; i >= 0; --i)
    if (t[i] != e[i]) {
      n = !1;
      break;
    }
  return n;
}
function $(t, e) {
  var n = Math.cos(e),
    i = Math.sin(e),
    r = t[0] * n - t[1] * i,
    o = t[1] * n + t[0] * i;
  return (t[0] = r), (t[1] = o), t;
}
function tt(t, e) {
  if (e.canWrapX()) {
    var n = C.getWidth(e.getExtent()),
      i = et(t, e, n);
    i && (t[0] -= i * n);
  }
  return t;
}
function et(t, e, n) {
  var i = e.getExtent(),
    r = 0;
  if (e.canWrapX() && (t[0] < i[0] || t[0] > i[2])) {
    var o = n || C.getWidth(i);
    r = Math.floor((t[0] - i[0]) / o);
  }
  return r;
}
var nt = (function () {
  var t = function (e, n) {
    return (t =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      })(e, n);
  };
  return function (e, n) {
    if ("function" != typeof n && null !== n)
      throw new TypeError(
        "Class extends value " + String(n) + " is not a constructor or null"
      );
    function i() {
      this.constructor = e;
    }
    t(e, n),
      (e.prototype =
        null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
  };
})();
function it(t, e) {
  D.expire();
}
var rt = (function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return (n.map_ = e), n;
    }
    return (
      nt(e, t),
      (e.prototype.dispatchRenderEvent = function (t, e) {
        f.abstract();
      }),
      (e.prototype.calculateMatrices2D = function (t) {
        var e = t.viewState,
          n = t.coordinateToPixelTransform,
          i = t.pixelToCoordinateTransform;
        v(
          n,
          t.size[0] / 2,
          t.size[1] / 2,
          1 / e.resolution,
          -1 / e.resolution,
          -e.rotation,
          -e.center[0],
          -e.center[1]
        ),
          m(i, n);
      }),
      (e.prototype.forEachFeatureAtCoordinate = function (
        t,
        e,
        n,
        i,
        r,
        o,
        a,
        s
      ) {
        var l,
          u = e.viewState;
        function h(t, e, n, i) {
          return r.call(o, e, t ? n : null, i);
        }
        var c = u.projection,
          p = tt(t.slice(), c),
          f = [[0, 0]];
        if (c.canWrapX() && i) {
          var d = c.getExtent(),
            g = C.getWidth(d);
          f.push([-g, 0], [g, 0]);
        }
        for (
          var _ = e.layerStatesArray, y = _.length, v = [], m = [], x = 0;
          x < f.length;
          x++
        )
          for (var E = y - 1; E >= 0; --E) {
            var S = _[E],
              w = S.layer;
            if (w.hasRenderer() && j.inView(S, u) && a.call(s, w)) {
              var O = w.getRenderer(),
                T = w.getSource();
              if (O && T) {
                var b = T.getWrapX() ? p : t,
                  R = h.bind(null, S.managed);
                (m[0] = b[0] + f[x][0]),
                  (m[1] = b[1] + f[x][1]),
                  (l = O.forEachFeatureAtCoordinate(m, e, n, R, v));
              }
              if (l) return l;
            }
          }
        if (0 !== v.length) {
          var I = 1 / v.length;
          return (
            v.forEach(function (t, e) {
              return (t.distanceSq += e * I);
            }),
            v.sort(function (t, e) {
              return t.distanceSq - e.distanceSq;
            }),
            v.some(function (t) {
              return (l = t.callback(t.feature, t.layer, t.geometry));
            }),
            l
          );
        }
      }),
      (e.prototype.forEachLayerAtPixel = function (t, e, n, i, r) {
        return f.abstract();
      }),
      (e.prototype.hasFeatureAtCoordinate = function (t, e, n, i, r, o) {
        return (
          void 0 !==
          this.forEachFeatureAtCoordinate(t, e, n, i, p.TRUE, this, r, o)
        );
      }),
      (e.prototype.getMap = function () {
        return this.map_;
      }),
      (e.prototype.renderFrame = function (t) {
        f.abstract();
      }),
      (e.prototype.scheduleExpireIconCache = function (t) {
        D.canExpireCache() && t.postRenderFunctions.push(it);
      }),
      e
    );
  })(c.default),
  ot = a("jXCUw"),
  at = {};
e(
  at,
  "default",
  () => ut,
  (t) => (ut = t)
);
var st = a("f18Q2"),
  lt = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  ut = (function (t) {
    function e(e, n, i, r) {
      var o = t.call(this, e) || this;
      return (
        (o.inversePixelTransform = n), (o.frameState = i), (o.context = r), o
      );
    }
    return lt(e, t), e;
  })(st.default),
  ht = ((K = a("d8cxx")), "ol-hidden"),
  ct = "ol-unselectable",
  pt = "ol-control",
  ft = "ol-collapsed",
  dt = new RegExp(
    [
      "^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)",
      "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?",
      "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))",
      "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",
      "?\\s*([-,\\\"\\'\\sa-z]+?)\\s*$",
    ].join(""),
    "i"
  ),
  gt = ["style", "variant", "weight", "size", "lineHeight", "family"],
  _t = function (t) {
    var e = t.match(dt);
    if (!e) return null;
    for (
      var n = {
          lineHeight: "normal",
          size: "1.2em",
          style: "normal",
          weight: "normal",
          variant: "normal",
        },
        i = 0,
        r = gt.length;
      i < r;
      ++i
    ) {
      var o = e[i + 1];
      void 0 !== o && (n[gt[i]] = o);
    }
    return (n.families = n.family.split(/,\s?/)), n;
  };
function yt(t) {
  return 1 === t ? "" : String(Math.round(100 * t) / 100);
}
var vt = a("fFFY7"),
  mt = a("KD0eF"),
  xt = ((d = a("8UoiJ")), (B = a("gn0g3")), a("DfnQm")),
  Ct = "10px sans-serif",
  Et = "#000",
  St = "round",
  wt = [],
  Ot = "round",
  Tt = "#000",
  bt = "center",
  Rt = "middle",
  It = [0, 0, 0, 0],
  Pt = new vt.default();
new mt.default().setSize = function () {
  console.warn("labelCache is deprecated.");
};
var Lt,
  Mt,
  Ft = null,
  At = {},
  Dt = (function () {
    var t,
      e,
      n = "32px ",
      i = ["monospace", "serif"],
      r = i.length,
      o = "wmytzilWMYTZIL@#/&?$%10";
    function a(t, a, s) {
      for (var l = !0, u = 0; u < r; ++u) {
        var h = i[u];
        if (((e = Gt(t + " " + a + " " + n + h, o)), s != h)) {
          var c = Gt(t + " " + a + " " + n + s + "," + h, o);
          l = l && c != e;
        }
      }
      return !!l;
    }
    function s() {
      for (var e = !0, n = Pt.getKeys(), i = 0, r = n.length; i < r; ++i) {
        var o = n[i];
        Pt.get(o) < 100 &&
          (a.apply(this, o.split("\n"))
            ? (B.clear(At), (Ft = null), (Lt = void 0), Pt.set(o, 100))
            : (Pt.set(o, Pt.get(o) + 1, !0), (e = !1)));
      }
      e && (clearInterval(t), (t = void 0));
    }
    return function (e) {
      var n = _t(e);
      if (n)
        for (var i = n.families, r = 0, o = i.length; r < o; ++r) {
          var l = i[r],
            u = n.style + "\n" + n.weight + "\n" + l;
          void 0 === Pt.get(u) &&
            (Pt.set(u, 100, !0),
            a(n.style, n.weight, l) ||
              (Pt.set(u, 0, !0), void 0 === t && (t = setInterval(s, 32))));
        }
    };
  })(),
  jt = function (t) {
    var e = At[t];
    if (null == e) {
      if (d.WORKER_OFFSCREEN_CANVAS) {
        var n = _t(t),
          i = Nt(t, "Žg");
        e =
          (isNaN(Number(n.lineHeight)) ? 1.2 : Number(n.lineHeight)) *
          (i.actualBoundingBoxAscent + i.actualBoundingBoxDescent);
      } else
        Mt ||
          (((Mt = document.createElement("div")).innerHTML = "M"),
          (Mt.style.minHeight = "0"),
          (Mt.style.maxHeight = "none"),
          (Mt.style.height = "auto"),
          (Mt.style.padding = "0"),
          (Mt.style.border = "none"),
          (Mt.style.position = "absolute"),
          (Mt.style.display = "block"),
          (Mt.style.left = "-99999px")),
          (Mt.style.font = t),
          document.body.appendChild(Mt),
          (e = Mt.offsetHeight),
          document.body.removeChild(Mt);
      At[t] = e;
    }
    return e;
  };
function Nt(t, e) {
  return (
    Ft || (Ft = xt.createCanvasContext2D(1, 1)),
    t != Lt && ((Ft.font = t), (Lt = Ft.font)),
    Ft.measureText(e)
  );
}
function Gt(t, e) {
  return Nt(t, e).width;
}
function kt(t, e, n) {
  if (e in n) return n[e];
  var i = Gt(t, e);
  return (n[e] = i), i;
}
function zt(t, e, n, i, r, o, a, s, l, u, h) {
  t.save(),
    1 !== n && (t.globalAlpha *= n),
    e && t.setTransform.apply(t, e),
    i.contextInstructions
      ? (t.translate(l, u),
        t.scale(h[0], h[1]),
        (function (t, e) {
          for (
            var n = t.contextInstructions, i = 0, r = n.length;
            i < r;
            i += 2
          )
            Array.isArray(n[i + 1])
              ? e[n[i]].apply(e, n[i + 1])
              : (e[n[i]] = n[i + 1]);
        })(i, t))
      : h[0] < 0 || h[1] < 0
      ? (t.translate(l, u),
        t.scale(h[0], h[1]),
        t.drawImage(i, r, o, a, s, 0, 0, a, s))
      : t.drawImage(i, r, o, a, s, l, u, a * h[0], s * h[1]),
    t.restore();
}
(Z = a("ilM9F")), (xt = a("DfnQm"));
var Ut = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Xt = (function (t) {
    function e(e) {
      var n = t.call(this, e) || this;
      (n.fontChangeListenerKey_ = Z.listen(
        Pt,
        ot.default.PROPERTYCHANGE,
        e.redrawText.bind(e)
      )),
        (n.element_ = document.createElement("div"));
      var i = n.element_.style;
      (i.position = "absolute"),
        (i.width = "100%"),
        (i.height = "100%"),
        (i.zIndex = "0"),
        (n.element_.className = ct + " ol-layers");
      var r = e.getViewport();
      return (
        r.insertBefore(n.element_, r.firstChild || null),
        (n.children_ = []),
        (n.renderedVisible_ = !0),
        n
      );
    }
    return (
      Ut(e, t),
      (e.prototype.dispatchRenderEvent = function (t, e) {
        var n = this.getMap();
        if (n.hasListener(t)) {
          var i = new at.default(t, void 0, e);
          n.dispatchEvent(i);
        }
      }),
      (e.prototype.disposeInternal = function () {
        Z.unlistenByKey(this.fontChangeListenerKey_),
          this.element_.parentNode.removeChild(this.element_),
          t.prototype.disposeInternal.call(this);
      }),
      (e.prototype.renderFrame = function (t) {
        if (t) {
          this.calculateMatrices2D(t), this.dispatchRenderEvent(Y, t);
          var e = t.layerStatesArray.sort(function (t, e) {
              return t.zIndex - e.zIndex;
            }),
            n = t.viewState;
          this.children_.length = 0;
          for (var i = [], r = null, o = 0, a = e.length; o < a; ++o) {
            var s = e[o];
            t.layerIndex = o;
            var l = s.layer,
              u = l.getSourceState();
            if (
              !j.inView(s, n) ||
              (u != K.default.READY && u != K.default.UNDEFINED)
            )
              l.unrender();
            else {
              var h = l.render(t, r);
              h &&
                (h !== r && (this.children_.push(h), (r = h)),
                "getDeclutter" in l && i.push(l));
            }
          }
          for (o = i.length - 1; o >= 0; --o) i[o].renderDeclutter(t);
          xt.replaceChildren(this.element_, this.children_),
            this.dispatchRenderEvent(V, t),
            this.renderedVisible_ ||
              ((this.element_.style.display = ""),
              (this.renderedVisible_ = !0)),
            this.scheduleExpireIconCache(t);
        } else
          this.renderedVisible_ &&
            ((this.element_.style.display = "none"),
            (this.renderedVisible_ = !1));
      }),
      (e.prototype.forEachLayerAtPixel = function (t, e, n, i, r) {
        for (
          var o = e.viewState, a = e.layerStatesArray, s = a.length - 1;
          s >= 0;
          --s
        ) {
          var l = a[s],
            u = l.layer;
          if (u.hasRenderer() && j.inView(l, o) && r(u)) {
            var h = u.getRenderer().getDataAtPixel(t, e, n);
            if (h) {
              var c = i(u, h);
              if (c) return c;
            }
          }
        }
      }),
      e
    );
  })(u.default),
  Yt = {};
e(
  Yt,
  "default",
  () => $i,
  (t) => ($i = t)
);
vt = a("fFFY7");
var Vt = a("cD8Qe"),
  Wt = a("1TIYs"),
  Kt = ((k = a("3xzSb")), a("YSU3I")),
  Bt = {};
e(
  Bt,
  "default",
  () => Qt,
  (t) => (Qt = t)
);
var Zt = {};
e(
  Zt,
  "default",
  () => qt,
  (t) => (qt = t)
);
st = a("f18Q2");
var Ht = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  qt = (function (t) {
    function e(e, n, i) {
      var r = t.call(this, e) || this;
      return (r.map = n), (r.frameState = void 0 !== i ? i : null), r;
    }
    return Ht(e, t), e;
  })(st.default),
  Jt = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Qt = (function (t) {
    function e(e, n, i, r, o) {
      var a = t.call(this, e, n, o) || this;
      return (
        (a.originalEvent = i),
        (a.pixel_ = null),
        (a.coordinate_ = null),
        (a.dragging = void 0 !== r && r),
        a
      );
    }
    return (
      Jt(e, t),
      Object.defineProperty(e.prototype, "pixel", {
        get: function () {
          return (
            this.pixel_ ||
              (this.pixel_ = this.map.getEventPixel(this.originalEvent)),
            this.pixel_
          );
        },
        set: function (t) {
          this.pixel_ = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "coordinate", {
        get: function () {
          return (
            this.coordinate_ ||
              (this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel)),
            this.coordinate_
          );
        },
        set: function (t) {
          this.coordinate_ = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.preventDefault = function () {
        t.prototype.preventDefault.call(this),
          "preventDefault" in this.originalEvent &&
            this.originalEvent.preventDefault();
      }),
      (e.prototype.stopPropagation = function () {
        t.prototype.stopPropagation.call(this),
          "stopPropagation" in this.originalEvent &&
            this.originalEvent.stopPropagation();
      }),
      e
    );
  })(Zt.default),
  $t = {};
e(
  $t,
  "default",
  () => re,
  (t) => (re = t)
);
k = a("3xzSb");
var te = {
    SINGLECLICK: "singleclick",
    CLICK: (k = a("3xzSb")).default.CLICK,
    DBLCLICK: k.default.DBLCLICK,
    POINTERDRAG: "pointerdrag",
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel",
  },
  ee = "pointermove",
  ne = "pointerdown",
  ie =
    ((mt = a("KD0eF")),
    (d = a("8UoiJ")),
    (p = a("6wUzV")),
    (Z = a("ilM9F")),
    (function () {
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function i() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((i.prototype = n.prototype), new i()));
      };
    })()),
  re = (function (t) {
    function e(e, n) {
      var i = t.call(this, e) || this;
      (i.map_ = e),
        i.clickTimeoutId_,
        (i.emulateClicks_ = !1),
        (i.dragging_ = !1),
        (i.dragListenerKeys_ = []),
        (i.moveTolerance_ = void 0 === n ? 1 : n),
        (i.down_ = null);
      var r = i.map_.getViewport();
      return (
        (i.activePointers_ = 0),
        (i.trackedTouches_ = {}),
        (i.element_ = r),
        (i.pointerdownListenerKey_ = Z.listen(r, ne, i.handlePointerDown_, i)),
        i.originalPointerMoveEvent_,
        (i.relayedListenerKey_ = Z.listen(r, ee, i.relayEvent_, i)),
        (i.boundHandleTouchMove_ = i.handleTouchMove_.bind(i)),
        i.element_.addEventListener(
          k.default.TOUCHMOVE,
          i.boundHandleTouchMove_,
          !!d.PASSIVE_EVENT_LISTENERS && { passive: !1 }
        ),
        i
      );
    }
    return (
      ie(e, t),
      (e.prototype.emulateClick_ = function (t) {
        var e = new Bt.default(te.CLICK, this.map_, t);
        this.dispatchEvent(e),
          void 0 !== this.clickTimeoutId_
            ? (clearTimeout(this.clickTimeoutId_),
              (this.clickTimeoutId_ = void 0),
              (e = new Bt.default(te.DBLCLICK, this.map_, t)),
              this.dispatchEvent(e))
            : (this.clickTimeoutId_ = setTimeout(
                function () {
                  this.clickTimeoutId_ = void 0;
                  var e = new Bt.default(te.SINGLECLICK, this.map_, t);
                  this.dispatchEvent(e);
                }.bind(this),
                250
              ));
      }),
      (e.prototype.updateActivePointers_ = function (t) {
        var e = t;
        e.type == te.POINTERUP || e.type == te.POINTERCANCEL
          ? delete this.trackedTouches_[e.pointerId]
          : e.type == te.POINTERDOWN &&
            (this.trackedTouches_[e.pointerId] = !0),
          (this.activePointers_ = Object.keys(this.trackedTouches_).length);
      }),
      (e.prototype.handlePointerUp_ = function (t) {
        this.updateActivePointers_(t);
        var e = new Bt.default(te.POINTERUP, this.map_, t);
        this.dispatchEvent(e),
          this.emulateClicks_ &&
            !e.defaultPrevented &&
            !this.dragging_ &&
            this.isMouseActionButton_(t) &&
            this.emulateClick_(this.down_),
          0 === this.activePointers_ &&
            (this.dragListenerKeys_.forEach(Z.unlistenByKey),
            (this.dragListenerKeys_.length = 0),
            (this.dragging_ = !1),
            (this.down_ = null));
      }),
      (e.prototype.isMouseActionButton_ = function (t) {
        return 0 === t.button;
      }),
      (e.prototype.handlePointerDown_ = function (t) {
        (this.emulateClicks_ = 0 === this.activePointers_),
          this.updateActivePointers_(t);
        var e = new Bt.default(te.POINTERDOWN, this.map_, t);
        for (var n in (this.dispatchEvent(e), (this.down_ = {}), t)) {
          var i = t[n];
          this.down_[n] = "function" == typeof i ? p.VOID : i;
        }
        if (0 === this.dragListenerKeys_.length) {
          var r = this.map_.getOwnerDocument();
          this.dragListenerKeys_.push(
            Z.listen(r, te.POINTERMOVE, this.handlePointerMove_, this),
            Z.listen(r, te.POINTERUP, this.handlePointerUp_, this),
            Z.listen(
              this.element_,
              te.POINTERCANCEL,
              this.handlePointerUp_,
              this
            )
          ),
            this.element_.getRootNode &&
              this.element_.getRootNode() !== r &&
              this.dragListenerKeys_.push(
                Z.listen(
                  this.element_.getRootNode(),
                  te.POINTERUP,
                  this.handlePointerUp_,
                  this
                )
              );
        }
      }),
      (e.prototype.handlePointerMove_ = function (t) {
        if (this.isMoving_(t)) {
          this.dragging_ = !0;
          var e = new Bt.default(te.POINTERDRAG, this.map_, t, this.dragging_);
          this.dispatchEvent(e);
        }
      }),
      (e.prototype.relayEvent_ = function (t) {
        this.originalPointerMoveEvent_ = t;
        var e = !(!this.down_ || !this.isMoving_(t));
        this.dispatchEvent(new Bt.default(t.type, this.map_, t, e));
      }),
      (e.prototype.handleTouchMove_ = function (t) {
        var e = this.originalPointerMoveEvent_;
        (e && !e.defaultPrevented) ||
          ("boolean" == typeof t.cancelable && !0 !== t.cancelable) ||
          t.preventDefault();
      }),
      (e.prototype.isMoving_ = function (t) {
        return (
          this.dragging_ ||
          Math.abs(t.clientX - this.down_.clientX) > this.moveTolerance_ ||
          Math.abs(t.clientY - this.down_.clientY) > this.moveTolerance_
        );
      }),
      (e.prototype.disposeInternal = function () {
        this.relayedListenerKey_ &&
          (Z.unlistenByKey(this.relayedListenerKey_),
          (this.relayedListenerKey_ = null)),
          this.element_.removeEventListener(
            k.default.TOUCHMOVE,
            this.boundHandleTouchMove_
          ),
          this.pointerdownListenerKey_ &&
            (Z.unlistenByKey(this.pointerdownListenerKey_),
            (this.pointerdownListenerKey_ = null)),
          this.dragListenerKeys_.forEach(Z.unlistenByKey),
          (this.dragListenerKeys_.length = 0),
          (this.element_ = null),
          t.prototype.disposeInternal.call(this);
      }),
      e
    );
  })(mt.default),
  oe = a("jDfdj"),
  ae = "layergroup",
  se = "size",
  le = "target",
  ue = "view",
  he = ((ot = a("jXCUw")), {});
e(
  he,
  "default",
  () => me,
  (t) => (me = t)
),
  e(
    he,
    "getTilePriority",
    () => xe,
    (t) => (xe = t)
  );
(k = a("3xzSb")), (g = a("4Cz58")), (B = a("gn0g3"));
var ce = 1 / 0,
  pe = (function () {
    function t(t, e) {
      (this.priorityFunction_ = t),
        (this.keyFunction_ = e),
        (this.elements_ = []),
        (this.priorities_ = []),
        (this.queuedElements_ = {});
    }
    return (
      (t.prototype.clear = function () {
        (this.elements_.length = 0),
          (this.priorities_.length = 0),
          B.clear(this.queuedElements_);
      }),
      (t.prototype.dequeue = function () {
        var t = this.elements_,
          e = this.priorities_,
          n = t[0];
        1 == t.length
          ? ((t.length = 0), (e.length = 0))
          : ((t[0] = t.pop()), (e[0] = e.pop()), this.siftUp_(0));
        var i = this.keyFunction_(n);
        return delete this.queuedElements_[i], n;
      }),
      (t.prototype.enqueue = function (t) {
        g.assert(!(this.keyFunction_(t) in this.queuedElements_), 31);
        var e = this.priorityFunction_(t);
        return (
          e != ce &&
          (this.elements_.push(t),
          this.priorities_.push(e),
          (this.queuedElements_[this.keyFunction_(t)] = !0),
          this.siftDown_(0, this.elements_.length - 1),
          !0)
        );
      }),
      (t.prototype.getCount = function () {
        return this.elements_.length;
      }),
      (t.prototype.getLeftChildIndex_ = function (t) {
        return 2 * t + 1;
      }),
      (t.prototype.getRightChildIndex_ = function (t) {
        return 2 * t + 2;
      }),
      (t.prototype.getParentIndex_ = function (t) {
        return (t - 1) >> 1;
      }),
      (t.prototype.heapify_ = function () {
        var t;
        for (t = (this.elements_.length >> 1) - 1; t >= 0; t--) this.siftUp_(t);
      }),
      (t.prototype.isEmpty = function () {
        return 0 === this.elements_.length;
      }),
      (t.prototype.isKeyQueued = function (t) {
        return t in this.queuedElements_;
      }),
      (t.prototype.isQueued = function (t) {
        return this.isKeyQueued(this.keyFunction_(t));
      }),
      (t.prototype.siftUp_ = function (t) {
        for (
          var e = this.elements_,
            n = this.priorities_,
            i = e.length,
            r = e[t],
            o = n[t],
            a = t;
          t < i >> 1;

        ) {
          var s = this.getLeftChildIndex_(t),
            l = this.getRightChildIndex_(t),
            u = l < i && n[l] < n[s] ? l : s;
          (e[t] = e[u]), (n[t] = n[u]), (t = u);
        }
        (e[t] = r), (n[t] = o), this.siftDown_(a, t);
      }),
      (t.prototype.siftDown_ = function (t, e) {
        for (
          var n = this.elements_, i = this.priorities_, r = n[e], o = i[e];
          e > t;

        ) {
          var a = this.getParentIndex_(e);
          if (!(i[a] > o)) break;
          (n[e] = n[a]), (i[e] = i[a]), (e = a);
        }
        (n[e] = r), (i[e] = o);
      }),
      (t.prototype.reprioritize = function () {
        var t,
          e,
          n,
          i = this.priorityFunction_,
          r = this.elements_,
          o = this.priorities_,
          a = 0,
          s = r.length;
        for (e = 0; e < s; ++e)
          (n = i((t = r[e]))) == ce
            ? delete this.queuedElements_[this.keyFunction_(t)]
            : ((o[a] = n), (r[a++] = t));
        (r.length = a), (o.length = a), this.heapify_();
      }),
      t
    );
  })(),
  fe = 0,
  de = 1,
  ge = 2,
  _e = 3,
  ye = 4,
  ve = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  me = (function (t) {
    function e(e, n) {
      var i =
        t.call(
          this,
          function (t) {
            return e.apply(null, t);
          },
          function (t) {
            return t[0].getKey();
          }
        ) || this;
      return (
        (i.boundHandleTileChange_ = i.handleTileChange.bind(i)),
        (i.tileChangeCallback_ = n),
        (i.tilesLoading_ = 0),
        (i.tilesLoadingKeys_ = {}),
        i
      );
    }
    return (
      ve(e, t),
      (e.prototype.enqueue = function (e) {
        var n = t.prototype.enqueue.call(this, e);
        n &&
          e[0].addEventListener(k.default.CHANGE, this.boundHandleTileChange_);
        return n;
      }),
      (e.prototype.getTilesLoading = function () {
        return this.tilesLoading_;
      }),
      (e.prototype.handleTileChange = function (t) {
        var e = t.target,
          n = e.getState();
        if (n === ge || n === _e || n === ye) {
          e.removeEventListener(k.default.CHANGE, this.boundHandleTileChange_);
          var i = e.getKey();
          i in this.tilesLoadingKeys_ &&
            (delete this.tilesLoadingKeys_[i], --this.tilesLoading_),
            this.tileChangeCallback_();
        }
      }),
      (e.prototype.loadMoreTiles = function (t, e) {
        for (
          var n, i, r = 0;
          this.tilesLoading_ < t && r < e && this.getCount() > 0;

        )
          (i = (n = this.dequeue()[0]).getKey()),
            n.getState() !== fe ||
              i in this.tilesLoadingKeys_ ||
              ((this.tilesLoadingKeys_[i] = !0),
              ++this.tilesLoading_,
              ++r,
              n.load());
      }),
      e
    );
  })(pe);
function xe(t, e, n, i, r) {
  if (!t || !(n in t.wantedTiles)) return ce;
  if (!t.wantedTiles[n][e.getKey()]) return ce;
  var o = t.viewState.center,
    a = i[0] - o[0],
    s = i[1] - o[1];
  return 65536 * Math.log(r) + Math.sqrt(a * a + s * s) / r;
}
var Ce = {};
e(
  Ce,
  "createResolutionConstraint",
  () => Yi,
  (t) => (Yi = t)
),
  e(
    Ce,
    "createCenterConstraint",
    () => Xi,
    (t) => (Xi = t)
  ),
  e(
    Ce,
    "createRotationConstraint",
    () => Vi,
    (t) => (Vi = t)
  ),
  e(
    Ce,
    "isNoopAnimation",
    () => Wi,
    (t) => (Wi = t)
  ),
  e(
    Ce,
    "default",
    () => Bi,
    (t) => (Bi = t)
  );
vt = a("fFFY7");
var Ee = {
    POINT: "Point",
    LINE_STRING: "LineString",
    LINEAR_RING: "LinearRing",
    POLYGON: "Polygon",
    MULTI_POINT: "MultiPoint",
    MULTI_LINE_STRING: "MultiLineString",
    MULTI_POLYGON: "MultiPolygon",
    GEOMETRY_COLLECTION: "GeometryCollection",
    CIRCLE: "Circle",
  },
  Se = {
    RADIANS: "radians",
    DEGREES: "degrees",
    FEET: "ft",
    METERS: "m",
    PIXELS: "pixels",
    TILE_PIXELS: "tile-pixels",
    USFEET: "us-ft",
  };
var we = {};
(we[Se.RADIANS] = 6370997 / (2 * Math.PI)),
  (we[Se.DEGREES] = (2 * Math.PI * 6370997) / 360),
  (we[Se.FEET] = 0.3048),
  (we[Se.METERS] = 1),
  (we[Se.USFEET] = 1200 / 3937);
var Oe = Se,
  Te = 0,
  be = 1,
  Re = { CENTER: "center", RESOLUTION: "resolution", ROTATION: "rotation" },
  Ie = 42,
  Pe = 256,
  Le = {};
e(
  Le,
  "PROJECTIONS",
  () => ze,
  (t) => (ze = t)
),
  e(
    Le,
    "fromEPSG4326",
    () => Ue,
    (t) => (Ue = t)
  ),
  e(
    Le,
    "toEPSG4326",
    () => Xe,
    (t) => (Xe = t)
  );
var Me = (function () {
    function t(t) {
      (this.code_ = t.code),
        (this.units_ = t.units),
        (this.extent_ = void 0 !== t.extent ? t.extent : null),
        (this.worldExtent_ = void 0 !== t.worldExtent ? t.worldExtent : null),
        (this.axisOrientation_ =
          void 0 !== t.axisOrientation ? t.axisOrientation : "enu"),
        (this.global_ = void 0 !== t.global && t.global),
        (this.canWrapX_ = !(!this.global_ || !this.extent_)),
        (this.getPointResolutionFunc_ = t.getPointResolution),
        (this.defaultTileGrid_ = null),
        (this.metersPerUnit_ = t.metersPerUnit);
    }
    return (
      (t.prototype.canWrapX = function () {
        return this.canWrapX_;
      }),
      (t.prototype.getCode = function () {
        return this.code_;
      }),
      (t.prototype.getExtent = function () {
        return this.extent_;
      }),
      (t.prototype.getUnits = function () {
        return this.units_;
      }),
      (t.prototype.getMetersPerUnit = function () {
        return this.metersPerUnit_ || we[this.units_];
      }),
      (t.prototype.getWorldExtent = function () {
        return this.worldExtent_;
      }),
      (t.prototype.getAxisOrientation = function () {
        return this.axisOrientation_;
      }),
      (t.prototype.isGlobal = function () {
        return this.global_;
      }),
      (t.prototype.setGlobal = function (t) {
        (this.global_ = t), (this.canWrapX_ = !(!t || !this.extent_));
      }),
      (t.prototype.getDefaultTileGrid = function () {
        return this.defaultTileGrid_;
      }),
      (t.prototype.setDefaultTileGrid = function (t) {
        this.defaultTileGrid_ = t;
      }),
      (t.prototype.setExtent = function (t) {
        (this.extent_ = t), (this.canWrapX_ = !(!this.global_ || !t));
      }),
      (t.prototype.setWorldExtent = function (t) {
        this.worldExtent_ = t;
      }),
      (t.prototype.setGetPointResolution = function (t) {
        this.getPointResolutionFunc_ = t;
      }),
      (t.prototype.getPointResolutionFunc = function () {
        return this.getPointResolutionFunc_;
      }),
      t
    );
  })(),
  Fe =
    ((E = a("9byFX")),
    (function () {
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function i() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((i.prototype = n.prototype), new i()));
      };
    })()),
  Ae = 6378137,
  De = Math.PI * Ae,
  je = [-De, -De, De, De],
  Ne = [-180, -85, 180, 85],
  Ge = Ae * Math.log(Math.tan(Math.PI / 2)),
  ke = (function (t) {
    function e(e) {
      return (
        t.call(this, {
          code: e,
          units: Oe.METERS,
          extent: je,
          global: !0,
          worldExtent: Ne,
          getPointResolution: function (t, e) {
            return t / E.cosh(e[1] / Ae);
          },
        }) || this
      );
    }
    return Fe(e, t), e;
  })(Me),
  ze = [
    new ke("EPSG:3857"),
    new ke("EPSG:102100"),
    new ke("EPSG:102113"),
    new ke("EPSG:900913"),
    new ke("http://www.opengis.net/def/crs/EPSG/0/3857"),
    new ke("http://www.opengis.net/gml/srs/epsg.xml#3857"),
  ];
function Ue(t, e, n) {
  var i = t.length,
    r = n > 1 ? n : 2,
    o = e;
  void 0 === o && (o = r > 2 ? t.slice() : new Array(i));
  for (var a = 0; a < i; a += r) {
    o[a] = (De * t[a]) / 180;
    var s = Ae * Math.log(Math.tan((Math.PI * (+t[a + 1] + 90)) / 360));
    s > Ge ? (s = Ge) : s < -Ge && (s = -Ge), (o[a + 1] = s);
  }
  return o;
}
function Xe(t, e, n) {
  var i = t.length,
    r = n > 1 ? n : 2,
    o = e;
  void 0 === o && (o = r > 2 ? t.slice() : new Array(i));
  for (var a = 0; a < i; a += r)
    (o[a] = (180 * t[a]) / De),
      (o[a + 1] = (360 * Math.atan(Math.exp(t[a + 1] / Ae))) / Math.PI - 90);
  return o;
}
var Ye = {};
e(
  Ye,
  "PROJECTIONS",
  () => Ze,
  (t) => (Ze = t)
);
var Ve = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  We = [-180, -90, 180, 90],
  Ke = (6378137 * Math.PI) / 180,
  Be = (function (t) {
    function e(e, n) {
      return (
        t.call(this, {
          code: e,
          units: Oe.DEGREES,
          extent: We,
          axisOrientation: n,
          global: !0,
          metersPerUnit: Ke,
          worldExtent: We,
        }) || this
      );
    }
    return Ve(e, t), e;
  })(Me),
  Ze = [
    new Be("CRS:84"),
    new Be("EPSG:4326", "neu"),
    new Be("urn:ogc:def:crs:OGC:1.3:CRS84"),
    new Be("urn:ogc:def:crs:OGC:2:84"),
    new Be("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
    new Be("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
    new Be("http://www.opengis.net/def/crs/EPSG/0/4326", "neu"),
  ],
  He = {};
B = a("gn0g3");
var qe = {};
function Je(t, e, n) {
  var i = t.getCode(),
    r = e.getCode();
  i in qe || (qe[i] = {}), (qe[i][r] = n);
}
(C = a("9pD6L")), (E = a("9byFX")), (E = a("9byFX"));
var Qe = 6371008.8;
function $e(t, e, n) {
  var i = n || Qe,
    r = E.toRadians(t[1]),
    o = E.toRadians(e[1]),
    a = (o - r) / 2,
    s = E.toRadians(e[0] - t[0]) / 2,
    l =
      Math.sin(a) * Math.sin(a) +
      Math.sin(s) * Math.sin(s) * Math.cos(r) * Math.cos(o);
  return 2 * i * Math.atan2(Math.sqrt(l), Math.sqrt(1 - l));
}
function tn(t, e, n, i) {
  var r = i || Qe,
    o = E.toRadians(t[1]),
    a = E.toRadians(t[0]),
    s = e / r,
    l = Math.asin(
      Math.sin(o) * Math.cos(s) + Math.cos(o) * Math.sin(s) * Math.cos(n)
    ),
    u =
      a +
      Math.atan2(
        Math.sin(n) * Math.sin(s) * Math.cos(o),
        Math.cos(s) - Math.sin(o) * Math.sin(l)
      );
  return [E.toDegrees(u), E.toDegrees(l)];
}
var en = !0;
function nn(t) {
  en = !(void 0 === t || t);
}
function rn(t, e, n) {
  var i;
  if (void 0 !== e) {
    for (var r = 0, o = t.length; r < o; ++r) e[r] = t[r];
    i = e;
  } else i = t.slice();
  return i;
}
function on(t, e, n) {
  if (void 0 !== e && t !== e) {
    for (var i = 0, r = t.length; i < r; ++i) e[i] = t[i];
    t = e;
  }
  return t;
}
function an(t) {
  !(function (t, e) {
    He[t] = e;
  })(t.getCode(), t),
    Je(t, t, rn);
}
function sn(t) {
  return "string" == typeof t
    ? He[(e = t)] ||
        He[e.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] ||
        null
    : t || null;
  var e;
}
function ln(t, e, n, i) {
  var r,
    o = (t = sn(t)).getPointResolutionFunc();
  if (o) {
    if (((r = o(e, n)), i && i !== t.getUnits()))
      (s = t.getMetersPerUnit()) && (r = (r * s) / we[i]);
  } else {
    var a = t.getUnits();
    if ((a == Oe.DEGREES && !i) || i == Oe.DEGREES) r = e;
    else {
      var s,
        l = pn(t, sn("EPSG:4326"));
      if (l === on && a !== Oe.DEGREES) r = e * t.getMetersPerUnit();
      else {
        var u = [
          n[0] - e / 2,
          n[1],
          n[0] + e / 2,
          n[1],
          n[0],
          n[1] - e / 2,
          n[0],
          n[1] + e / 2,
        ];
        r =
          ($e((u = l(u, u, 2)).slice(0, 2), u.slice(2, 4)) +
            $e(u.slice(4, 6), u.slice(6, 8))) /
          2;
      }
      void 0 !== (s = i ? we[i] : t.getMetersPerUnit()) && (r /= s);
    }
  }
  return r;
}
function un(t) {
  !(function (t) {
    t.forEach(an);
  })(t),
    t.forEach(function (e) {
      t.forEach(function (t) {
        e !== t && Je(e, t, rn);
      });
    });
}
function hn(t, e) {
  return t ? ("string" == typeof t ? sn(t) : t) : sn(e);
}
function cn(t, e) {
  if (t === e) return !0;
  var n = t.getUnits() === e.getUnits();
  return (t.getCode() === e.getCode() || pn(t, e) === rn) && n;
}
function pn(t, e) {
  var n = (function (t, e) {
    var n;
    return t in qe && e in qe[t] && (n = qe[t][e]), n;
  })(t.getCode(), e.getCode());
  return n || (n = on), n;
}
function fn(t, e) {
  return pn(sn(t), sn(e));
}
function dn(t, e, n) {
  return fn(e, n)(t, void 0, t.length);
}
function gn(t, e, n, i) {
  var r = fn(e, n);
  return C.applyTransform(t, r, void 0, i);
}
var _n,
  yn,
  vn,
  mn = null;
function xn() {
  return mn;
}
function Cn(t, e) {
  return mn ? dn(t, e, mn) : t;
}
function En(t, e) {
  return mn
    ? dn(t, mn, e)
    : (en &&
        !Q(t, [0, 0]) &&
        t[0] >= -180 &&
        t[0] <= 180 &&
        t[1] >= -90 &&
        t[1] <= 90 &&
        ((en = !1),
        console.warn(
          "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates."
        )),
      t);
}
function Sn(t, e) {
  return mn ? gn(t, e, mn) : t;
}
function wn(t, e) {
  return mn ? gn(t, mn, e) : t;
}
function On(t, e) {
  if (!mn) return t;
  var n = sn(e).getUnits(),
    i = mn.getUnits();
  return n && i ? (t * we[n]) / we[i] : t;
}
un(Le.PROJECTIONS),
  un(Ye.PROJECTIONS),
  (_n = Le.PROJECTIONS),
  (yn = Le.fromEPSG4326),
  (vn = Le.toEPSG4326),
  Ye.PROJECTIONS.forEach(function (t) {
    _n.forEach(function (e) {
      Je(t, e, yn), Je(e, t, vn);
    });
  });
(p = a("6wUzV")), (g = a("4Cz58")), (B = a("gn0g3")), (E = a("9byFX"));
function Tn(t, e, n) {
  return function (i, r, o, a, s) {
    if (i) {
      if (!r && !e) return i;
      var l = e ? 0 : o[0] * r,
        u = e ? 0 : o[1] * r,
        h = s ? s[0] : 0,
        c = s ? s[1] : 0,
        p = t[0] + l / 2 + h,
        f = t[2] - l / 2 + h,
        d = t[1] + u / 2 + c,
        g = t[3] - u / 2 + c;
      p > f && (f = p = (f + p) / 2), d > g && (g = d = (g + d) / 2);
      var _ = E.clamp(i[0], p, f),
        y = E.clamp(i[1], d, g);
      if (a && n && r) {
        var v = 30 * r;
        (_ +=
          -v * Math.log(1 + Math.max(0, p - i[0]) / v) +
          v * Math.log(1 + Math.max(0, i[0] - f) / v)),
          (y +=
            -v * Math.log(1 + Math.max(0, d - i[1]) / v) +
            v * Math.log(1 + Math.max(0, i[1] - g) / v));
      }
      return [_, y];
    }
  };
}
function bn(t) {
  return t;
}
(E = a("9byFX")), (E = a("9byFX")), (C = a("9pD6L"));
var Rn = a("fVVyM");
function In(t, e, n, i) {
  var r = C.getWidth(e) / n[0],
    o = C.getHeight(e) / n[1];
  return i ? Math.min(t, Math.max(r, o)) : Math.min(t, Math.min(r, o));
}
function Pn(t, e, n) {
  var i = Math.min(t, e);
  return (
    (i *= Math.log(1 + 50 * Math.max(0, t / e - 1)) / 50 + 1),
    n &&
      ((i = Math.max(i, n)),
      (i /= Math.log(1 + 50 * Math.max(0, n / t - 1)) / 50 + 1)),
    E.clamp(i, n / 2, 2 * e)
  );
}
function Ln(t, e, n, i, r) {
  return function (o, a, s, l) {
    if (void 0 !== o) {
      var u = i ? In(t, i, s, r) : t;
      return (void 0 === n || n) && l ? Pn(o, u, e) : E.clamp(o, e, u);
    }
  };
}
E = a("9byFX");
function Mn(t) {
  return void 0 !== t ? 0 : void 0;
}
function Fn(t) {
  return void 0 !== t ? t : void 0;
}
function An(t) {
  return Math.pow(t, 3);
}
function Dn(t) {
  return 1 - An(1 - t);
}
function jn(t) {
  return 3 * t * t - 2 * t * t * t;
}
function Nn(t) {
  return t;
}
(C = a("9pD6L")), (Rn = a("fVVyM"));
var Gn = {};
e(
  Gn,
  "default",
  () => Ai,
  (t) => (Ai = t)
),
  e(
    Gn,
    "circular",
    () => Di,
    (t) => (Di = t)
  ),
  e(
    Gn,
    "fromExtent",
    () => ji,
    (t) => (ji = t)
  ),
  e(
    Gn,
    "fromCircle",
    () => Ni,
    (t) => (Ni = t)
  ),
  e(
    Gn,
    "makeRegular",
    () => Gi,
    (t) => (Gi = t)
  );
var kn = { XY: "XY", XYZ: "XYZ", XYM: "XYM", XYZM: "XYZM" },
  zn = {};
e(
  zn,
  "default",
  () => _i,
  (t) => (_i = t)
);
var Un = {};
e(
  Un,
  "getStrideForLayout",
  () => Hn,
  (t) => (Hn = t)
),
  e(
    Un,
    "transformGeom2D",
    () => qn,
    (t) => (qn = t)
  ),
  e(
    Un,
    "default",
    () => Jn,
    (t) => (Jn = t)
  );
var Xn = {};
e(
  Xn,
  "default",
  () => Bn,
  (t) => (Bn = t)
);
(vt = a("fFFY7")), (f = a("9iPUS")), (C = a("9pD6L")), (p = a("6wUzV"));
function Yn(t, e, n, i, r, o) {
  for (var a = o || [], s = 0, l = e; l < n; l += i) {
    var u = t[l],
      h = t[l + 1];
    (a[s++] = r[0] * u + r[2] * h + r[4]),
      (a[s++] = r[1] * u + r[3] * h + r[5]);
  }
  return o && a.length != s && (a.length = s), a;
}
function Vn(t, e, n, i, r, o, a) {
  for (
    var s = a || [],
      l = Math.cos(r),
      u = Math.sin(r),
      h = o[0],
      c = o[1],
      p = 0,
      f = e;
    f < n;
    f += i
  ) {
    var d = t[f] - h,
      g = t[f + 1] - c;
    (s[p++] = h + d * l - g * u), (s[p++] = c + d * u + g * l);
    for (var _ = f + 2; _ < f + i; ++_) s[p++] = t[_];
  }
  return a && s.length != p && (s.length = p), s;
}
var Wn = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Kn = [1, 0, 0, 1, 0, 0],
  Bn = (function (t) {
    function e() {
      var e = t.call(this) || this;
      return (
        (e.extent_ = C.createEmpty()),
        (e.extentRevision_ = -1),
        (e.simplifiedGeometryMaxMinSquaredTolerance = 0),
        (e.simplifiedGeometryRevision = 0),
        (e.simplifyTransformedInternal = p.memoizeOne(function (t, e, n) {
          if (!n) return this.getSimplifiedGeometry(e);
          var i = this.clone();
          return i.applyTransform(n), i.getSimplifiedGeometry(e);
        })),
        e
      );
    }
    return (
      Wn(e, t),
      (e.prototype.simplifyTransformed = function (t, e) {
        return this.simplifyTransformedInternal(this.getRevision(), t, e);
      }),
      (e.prototype.clone = function () {
        return f.abstract();
      }),
      (e.prototype.closestPointXY = function (t, e, n, i) {
        return f.abstract();
      }),
      (e.prototype.containsXY = function (t, e) {
        var n = this.getClosestPoint([t, e]);
        return n[0] === t && n[1] === e;
      }),
      (e.prototype.getClosestPoint = function (t, e) {
        var n = e || [NaN, NaN];
        return this.closestPointXY(t[0], t[1], n, 1 / 0), n;
      }),
      (e.prototype.intersectsCoordinate = function (t) {
        return this.containsXY(t[0], t[1]);
      }),
      (e.prototype.computeExtent = function (t) {
        return f.abstract();
      }),
      (e.prototype.getExtent = function (t) {
        if (this.extentRevision_ != this.getRevision()) {
          var e = this.computeExtent(this.extent_);
          (isNaN(e[0]) || isNaN(e[1])) && C.createOrUpdateEmpty(e),
            (this.extentRevision_ = this.getRevision());
        }
        return C.returnOrUpdate(this.extent_, t);
      }),
      (e.prototype.rotate = function (t, e) {
        f.abstract();
      }),
      (e.prototype.scale = function (t, e, n) {
        f.abstract();
      }),
      (e.prototype.simplify = function (t) {
        return this.getSimplifiedGeometry(t * t);
      }),
      (e.prototype.getSimplifiedGeometry = function (t) {
        return f.abstract();
      }),
      (e.prototype.getType = function () {
        return f.abstract();
      }),
      (e.prototype.applyTransform = function (t) {
        f.abstract();
      }),
      (e.prototype.intersectsExtent = function (t) {
        return f.abstract();
      }),
      (e.prototype.translate = function (t, e) {
        f.abstract();
      }),
      (e.prototype.transform = function (t, e) {
        var n = sn(t),
          i =
            n.getUnits() == Oe.TILE_PIXELS
              ? function (t, i, r) {
                  var o = n.getExtent(),
                    a = n.getWorldExtent(),
                    s = C.getHeight(a) / C.getHeight(o);
                  return (
                    v(Kn, a[0], a[3], s, -s, 0, 0, 0),
                    Yn(t, 0, t.length, r, Kn, i),
                    fn(n, e)(t, i, r)
                  );
                }
              : fn(n, e);
        return this.applyTransform(i), this;
      }),
      e
    );
  })(vt.default),
  Zn =
    ((f = a("9iPUS")),
    (C = a("9pD6L")),
    (function () {
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function i() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((i.prototype = n.prototype), new i()));
      };
    })());
function Hn(t) {
  var e;
  return (
    t == kn.XY
      ? (e = 2)
      : t == kn.XYZ || t == kn.XYM
      ? (e = 3)
      : t == kn.XYZM && (e = 4),
    e
  );
}
function qn(t, e, n) {
  var i = t.getFlatCoordinates();
  if (i) {
    var r = t.getStride();
    return Yn(i, 0, i.length, r, e, n);
  }
  return null;
}
var Jn = (function (t) {
  function e() {
    var e = t.call(this) || this;
    return (e.layout = kn.XY), (e.stride = 2), (e.flatCoordinates = null), e;
  }
  return (
    Zn(e, t),
    (e.prototype.computeExtent = function (t) {
      return C.createOrUpdateFromFlatCoordinates(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        t
      );
    }),
    (e.prototype.getCoordinates = function () {
      return f.abstract();
    }),
    (e.prototype.getFirstCoordinate = function () {
      return this.flatCoordinates.slice(0, this.stride);
    }),
    (e.prototype.getFlatCoordinates = function () {
      return this.flatCoordinates;
    }),
    (e.prototype.getLastCoordinate = function () {
      return this.flatCoordinates.slice(
        this.flatCoordinates.length - this.stride
      );
    }),
    (e.prototype.getLayout = function () {
      return this.layout;
    }),
    (e.prototype.getSimplifiedGeometry = function (t) {
      if (
        (this.simplifiedGeometryRevision !== this.getRevision() &&
          ((this.simplifiedGeometryMaxMinSquaredTolerance = 0),
          (this.simplifiedGeometryRevision = this.getRevision())),
        t < 0 ||
          (0 !== this.simplifiedGeometryMaxMinSquaredTolerance &&
            t <= this.simplifiedGeometryMaxMinSquaredTolerance))
      )
        return this;
      var e = this.getSimplifiedGeometryInternal(t);
      return e.getFlatCoordinates().length < this.flatCoordinates.length
        ? e
        : ((this.simplifiedGeometryMaxMinSquaredTolerance = t), this);
    }),
    (e.prototype.getSimplifiedGeometryInternal = function (t) {
      return this;
    }),
    (e.prototype.getStride = function () {
      return this.stride;
    }),
    (e.prototype.setFlatCoordinates = function (t, e) {
      (this.stride = Hn(t)), (this.layout = t), (this.flatCoordinates = e);
    }),
    (e.prototype.setCoordinates = function (t, e) {
      f.abstract();
    }),
    (e.prototype.setLayout = function (t, e, n) {
      var i;
      if (t) i = Hn(t);
      else {
        for (var r = 0; r < n; ++r) {
          if (0 === e.length)
            return (this.layout = kn.XY), void (this.stride = 2);
          e = e[0];
        }
        t = (function (t) {
          var e;
          2 == t
            ? (e = kn.XY)
            : 3 == t
            ? (e = kn.XYZ)
            : 4 == t && (e = kn.XYZM);
          return e;
        })((i = e.length));
      }
      (this.layout = t), (this.stride = i);
    }),
    (e.prototype.applyTransform = function (t) {
      this.flatCoordinates &&
        (t(this.flatCoordinates, this.flatCoordinates, this.stride),
        this.changed());
    }),
    (e.prototype.rotate = function (t, e) {
      var n = this.getFlatCoordinates();
      if (n) {
        var i = this.getStride();
        Vn(n, 0, n.length, i, t, e, n), this.changed();
      }
    }),
    (e.prototype.scale = function (t, e, n) {
      var i = e;
      void 0 === i && (i = t);
      var r = n;
      r || (r = C.getCenter(this.getExtent()));
      var o = this.getFlatCoordinates();
      if (o) {
        var a = this.getStride();
        !(function (t, e, n, i, r, o, a, s) {
          for (
            var l = s || [], u = a[0], h = a[1], c = 0, p = e;
            p < n;
            p += i
          ) {
            var f = t[p] - u,
              d = t[p + 1] - h;
            (l[c++] = u + r * f), (l[c++] = h + o * d);
            for (var g = p + 2; g < p + i; ++g) l[c++] = t[g];
          }
          s && l.length != c && (l.length = c);
        })(o, 0, o.length, a, t, i, r, o),
          this.changed();
      }
    }),
    (e.prototype.translate = function (t, e) {
      var n = this.getFlatCoordinates();
      if (n) {
        var i = this.getStride();
        !(function (t, e, n, i, r, o, a) {
          for (var s = a || [], l = 0, u = e; u < n; u += i) {
            (s[l++] = t[u] + r), (s[l++] = t[u + 1] + o);
            for (var h = u + 2; h < u + i; ++h) s[l++] = t[h];
          }
          a && s.length != l && (s.length = l);
        })(n, 0, n.length, i, t, e, n),
          this.changed();
      }
    }),
    e
  );
})(Xn.default);
E = a("9byFX");
function Qn(t, e, n, i, r, o, a) {
  var s,
    l = t[e],
    u = t[e + 1],
    h = t[n] - l,
    c = t[n + 1] - u;
  if (0 === h && 0 === c) s = e;
  else {
    var p = ((r - l) * h + (o - u) * c) / (h * h + c * c);
    if (p > 1) s = n;
    else {
      if (p > 0) {
        for (var f = 0; f < i; ++f) a[f] = E.lerp(t[e + f], t[n + f], p);
        return void (a.length = i);
      }
      s = e;
    }
  }
  for (f = 0; f < i; ++f) a[f] = t[s + f];
  a.length = i;
}
function $n(t, e, n, i, r) {
  var o = t[e],
    a = t[e + 1];
  for (e += i; e < n; e += i) {
    var s = t[e],
      l = t[e + 1],
      u = E.squaredDistance(o, a, s, l);
    u > r && (r = u), (o = s), (a = l);
  }
  return r;
}
function ti(t, e, n, i, r) {
  for (var o = 0, a = n.length; o < a; ++o) {
    var s = n[o];
    (r = $n(t, e, s, i, r)), (e = s);
  }
  return r;
}
function ei(t, e, n, i, r, o, a, s, l, u, h) {
  if (e == n) return u;
  var c, p;
  if (0 === r) {
    if ((p = E.squaredDistance(a, s, t[e], t[e + 1])) < u) {
      for (c = 0; c < i; ++c) l[c] = t[e + c];
      return (l.length = i), p;
    }
    return u;
  }
  for (var f = h || [NaN, NaN], d = e + i; d < n; )
    if (
      (Qn(t, d - i, d, i, a, s, f),
      (p = E.squaredDistance(a, s, f[0], f[1])) < u)
    ) {
      for (u = p, c = 0; c < i; ++c) l[c] = f[c];
      (l.length = i), (d += i);
    } else d += i * Math.max(((Math.sqrt(p) - Math.sqrt(u)) / r) | 0, 1);
  if (
    o &&
    (Qn(t, n - i, e, i, a, s, f), (p = E.squaredDistance(a, s, f[0], f[1])) < u)
  ) {
    for (u = p, c = 0; c < i; ++c) l[c] = f[c];
    l.length = i;
  }
  return u;
}
function ni(t, e, n, i, r, o, a, s, l, u, h) {
  for (var c = h || [NaN, NaN], p = 0, f = n.length; p < f; ++p) {
    var d = n[p];
    (u = ei(t, e, d, i, r, o, a, s, l, u, c)), (e = d);
  }
  return u;
}
C = a("9pD6L");
function ii(t, e, n, i) {
  for (var r = 0, o = n.length; r < o; ++r)
    for (var a = n[r], s = 0; s < i; ++s) t[e++] = a[s];
  return e;
}
function ri(t, e, n, i, r) {
  for (var o = r || [], a = 0, s = 0, l = n.length; s < l; ++s) {
    var u = ii(t, e, n[s], i);
    (o[a++] = u), (e = u);
  }
  return (o.length = a), o;
}
E = a("9byFX");
function oi(t, e, n, i, r, o, a) {
  var s = (n - e) / i;
  if (s < 3) {
    for (; e < n; e += i) (o[a++] = t[e]), (o[a++] = t[e + 1]);
    return a;
  }
  var l = new Array(s);
  (l[0] = 1), (l[s - 1] = 1);
  for (var u = [e, n - i], h = 0; u.length > 0; ) {
    for (
      var c = u.pop(),
        p = u.pop(),
        f = 0,
        d = t[p],
        g = t[p + 1],
        _ = t[c],
        y = t[c + 1],
        v = p + i;
      v < c;
      v += i
    ) {
      var m = t[v],
        x = t[v + 1],
        C = E.squaredSegmentDistance(m, x, d, g, _, y);
      C > f && ((h = v), (f = C));
    }
    f > r &&
      ((l[(h - e) / i] = 1),
      p + i < h && u.push(p, h),
      h + i < c && u.push(h, c));
  }
  for (v = 0; v < s; ++v)
    l[v] && ((o[a++] = t[e + v * i]), (o[a++] = t[e + v * i + 1]));
  return a;
}
function ai(t, e, n, i, r, o, a, s) {
  for (var l = 0, u = n.length; l < u; ++l) {
    var h = n[l];
    (a = oi(t, e, h, i, r, o, a)), s.push(a), (e = h);
  }
  return a;
}
function si(t, e) {
  return e * Math.round(t / e);
}
function li(t, e, n, i, r, o, a) {
  if (e == n) return a;
  var s,
    l,
    u = si(t[e], r),
    h = si(t[e + 1], r);
  (e += i), (o[a++] = u), (o[a++] = h);
  do {
    if (((s = si(t[e], r)), (l = si(t[e + 1], r)), (e += i) == n))
      return (o[a++] = s), (o[a++] = l), a;
  } while (s == u && l == h);
  for (; e < n; ) {
    var c = si(t[e], r),
      p = si(t[e + 1], r);
    if (((e += i), c != s || p != l)) {
      var f = s - u,
        d = l - h,
        g = c - u,
        _ = p - h;
      f * _ == d * g &&
      ((f < 0 && g < f) || f == g || (f > 0 && g > f)) &&
      ((d < 0 && _ < d) || d == _ || (d > 0 && _ > d))
        ? ((s = c), (l = p))
        : ((o[a++] = s), (o[a++] = l), (u = s), (h = l), (s = c), (l = p));
    }
  }
  return (o[a++] = s), (o[a++] = l), a;
}
function ui(t, e, n, i, r, o, a, s) {
  for (var l = 0, u = n.length; l < u; ++l) {
    var h = n[l];
    (a = li(t, e, h, i, r, o, a)), s.push(a), (e = h);
  }
  return a;
}
function hi(t, e, n, i, r) {
  for (var o = void 0 !== r ? r : [], a = 0, s = e; s < n; s += i)
    o[a++] = t.slice(s, s + i);
  return (o.length = a), o;
}
function ci(t, e, n, i, r) {
  for (var o = void 0 !== r ? r : [], a = 0, s = 0, l = n.length; s < l; ++s) {
    var u = n[s];
    (o[a++] = hi(t, e, u, i, o[a])), (e = u);
  }
  return (o.length = a), o;
}
function pi(t, e, n, i, r) {
  for (var o = void 0 !== r ? r : [], a = 0, s = 0, l = n.length; s < l; ++s) {
    var u = n[s];
    (o[a++] = ci(t, e, u, i, o[a])), (e = u[u.length - 1]);
  }
  return (o.length = a), o;
}
function fi(t, e, n, i) {
  for (var r = 0, o = t[n - i], a = t[n - i + 1]; e < n; e += i) {
    var s = t[e],
      l = t[e + 1];
    (r += a * s - o * l), (o = s), (a = l);
  }
  return r / 2;
}
function di(t, e, n, i) {
  for (var r = 0, o = 0, a = n.length; o < a; ++o) {
    var s = n[o];
    (r += fi(t, e, s, i)), (e = s);
  }
  return r;
}
var gi = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  _i = (function (t) {
    function e(e, n) {
      var i = t.call(this) || this;
      return (
        (i.maxDelta_ = -1),
        (i.maxDeltaRevision_ = -1),
        void 0 === n || Array.isArray(e[0])
          ? i.setCoordinates(e, n)
          : i.setFlatCoordinates(n, e),
        i
      );
    }
    return (
      gi(e, t),
      (e.prototype.clone = function () {
        return new e(this.flatCoordinates.slice(), this.layout);
      }),
      (e.prototype.closestPointXY = function (t, e, n, i) {
        return i < C.closestSquaredDistanceXY(this.getExtent(), t, e)
          ? i
          : (this.maxDeltaRevision_ != this.getRevision() &&
              ((this.maxDelta_ = Math.sqrt(
                $n(
                  this.flatCoordinates,
                  0,
                  this.flatCoordinates.length,
                  this.stride,
                  0
                )
              )),
              (this.maxDeltaRevision_ = this.getRevision())),
            ei(
              this.flatCoordinates,
              0,
              this.flatCoordinates.length,
              this.stride,
              this.maxDelta_,
              !0,
              t,
              e,
              n,
              i
            ));
      }),
      (e.prototype.getArea = function () {
        return fi(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride
        );
      }),
      (e.prototype.getCoordinates = function () {
        return hi(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride
        );
      }),
      (e.prototype.getSimplifiedGeometryInternal = function (t) {
        var n = [];
        return (
          (n.length = oi(
            this.flatCoordinates,
            0,
            this.flatCoordinates.length,
            this.stride,
            t,
            n,
            0
          )),
          new e(n, kn.XY)
        );
      }),
      (e.prototype.getType = function () {
        return Ee.LINEAR_RING;
      }),
      (e.prototype.intersectsExtent = function (t) {
        return !1;
      }),
      (e.prototype.setCoordinates = function (t, e) {
        this.setLayout(e, t, 1),
          this.flatCoordinates || (this.flatCoordinates = []),
          (this.flatCoordinates.length = ii(
            this.flatCoordinates,
            0,
            t,
            this.stride
          )),
          this.changed();
      }),
      e
    );
  })(Un.default),
  yi = {};
e(
  yi,
  "default",
  () => mi,
  (t) => (mi = t)
);
(C = a("9pD6L")), (E = a("9byFX"));
var vi = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  mi = (function (t) {
    function e(e, n) {
      var i = t.call(this) || this;
      return i.setCoordinates(e, n), i;
    }
    return (
      vi(e, t),
      (e.prototype.clone = function () {
        var t = new e(this.flatCoordinates.slice(), this.layout);
        return t.applyProperties(this), t;
      }),
      (e.prototype.closestPointXY = function (t, e, n, i) {
        var r = this.flatCoordinates,
          o = E.squaredDistance(t, e, r[0], r[1]);
        if (o < i) {
          for (var a = this.stride, s = 0; s < a; ++s) n[s] = r[s];
          return (n.length = a), o;
        }
        return i;
      }),
      (e.prototype.getCoordinates = function () {
        return this.flatCoordinates ? this.flatCoordinates.slice() : [];
      }),
      (e.prototype.computeExtent = function (t) {
        return C.createOrUpdateFromCoordinate(this.flatCoordinates, t);
      }),
      (e.prototype.getType = function () {
        return Ee.POINT;
      }),
      (e.prototype.intersectsExtent = function (t) {
        return C.containsXY(
          t,
          this.flatCoordinates[0],
          this.flatCoordinates[1]
        );
      }),
      (e.prototype.setCoordinates = function (t, e) {
        this.setLayout(e, t, 0),
          this.flatCoordinates || (this.flatCoordinates = []),
          (this.flatCoordinates.length = (function (t, e, n, i) {
            for (var r = 0, o = n.length; r < o; ++r) t[e++] = n[r];
            return e;
          })(this.flatCoordinates, 0, t, this.stride)),
          this.changed();
      }),
      e
    );
  })(Un.default);
(C = a("9pD6L")), (Rn = a("fVVyM")), (C = a("9pD6L"));
function xi(t, e, n, i, r) {
  return !C.forEachCorner(r, function (r) {
    return !Ci(t, e, n, i, r[0], r[1]);
  });
}
function Ci(t, e, n, i, r, o) {
  for (var a = 0, s = t[n - i], l = t[n - i + 1]; e < n; e += i) {
    var u = t[e],
      h = t[e + 1];
    l <= o
      ? h > o && (u - s) * (o - l) - (r - s) * (h - l) > 0 && a++
      : h <= o && (u - s) * (o - l) - (r - s) * (h - l) < 0 && a--,
      (s = u),
      (l = h);
  }
  return 0 !== a;
}
function Ei(t, e, n, i, r, o) {
  if (0 === n.length) return !1;
  if (!Ci(t, e, n[0], i, r, o)) return !1;
  for (var a = 1, s = n.length; a < s; ++a)
    if (Ci(t, n[a - 1], n[a], i, r, o)) return !1;
  return !0;
}
Rn = a("fVVyM");
function Si(t, e, n, i, r, o, a) {
  for (
    var s, l, u, h, c, p, f, d = r[o + 1], g = [], _ = 0, y = n.length;
    _ < y;
    ++_
  ) {
    var v = n[_];
    for (h = t[v - i], p = t[v - i + 1], s = e; s < v; s += i)
      (c = t[s]),
        (f = t[s + 1]),
        ((d <= p && f <= d) || (p <= d && d <= f)) &&
          ((u = ((d - p) / (f - p)) * (c - h) + h), g.push(u)),
        (h = c),
        (p = f);
  }
  var m = NaN,
    x = -1 / 0;
  for (
    g.sort(Rn.numberSafeCompareFunction), h = g[0], s = 1, l = g.length;
    s < l;
    ++s
  ) {
    c = g[s];
    var C = Math.abs(c - h);
    C > x && Ei(t, e, n, i, (u = (h + c) / 2), d) && ((m = u), (x = C)),
      (h = c);
  }
  return isNaN(m) && (m = r[o]), a ? (a.push(m, d, x), a) : [m, d, x];
}
C = a("9pD6L");
function wi(t, e, n, i, r) {
  var o;
  for (e += i; e < n; e += i)
    if ((o = r(t.slice(e - i, e), t.slice(e, e + i)))) return o;
  return !1;
}
function Oi(t, e, n, i, r) {
  var o = C.extendFlatCoordinates(C.createEmpty(), t, e, n, i);
  return (
    !!C.intersects(r, o) &&
    (!!C.containsExtent(r, o) ||
      (o[0] >= r[0] && o[2] <= r[2]) ||
      (o[1] >= r[1] && o[3] <= r[3]) ||
      wi(t, e, n, i, function (t, e) {
        return C.intersectsSegment(r, t, e);
      }))
  );
}
function Ti(t, e, n, i, r) {
  if (
    !(function (t, e, n, i, r) {
      return !!(
        Oi(t, e, n, i, r) ||
        Ci(t, e, n, i, r[0], r[1]) ||
        Ci(t, e, n, i, r[0], r[3]) ||
        Ci(t, e, n, i, r[2], r[1]) ||
        Ci(t, e, n, i, r[2], r[3])
      );
    })(t, e, n[0], i, r)
  )
    return !1;
  if (1 === n.length) return !0;
  for (var o = 1, a = n.length; o < a; ++o)
    if (xi(t, n[o - 1], n[o], i, r) && !Oi(t, n[o - 1], n[o], i, r)) return !1;
  return !0;
}
function bi(t, e, n, i) {
  for (; e < n - i; ) {
    for (var r = 0; r < i; ++r) {
      var o = t[e + r];
      (t[e + r] = t[n - i + r]), (t[n - i + r] = o);
    }
    (e += i), (n -= i);
  }
}
function Ri(t, e, n, i) {
  for (var r = 0, o = t[n - i], a = t[n - i + 1]; e < n; e += i) {
    var s = t[e],
      l = t[e + 1];
    (r += (s - o) * (l + a)), (o = s), (a = l);
  }
  return 0 === r ? void 0 : r > 0;
}
function Ii(t, e, n, i, r) {
  for (var o = void 0 !== r && r, a = 0, s = n.length; a < s; ++a) {
    var l = n[a],
      u = Ri(t, e, l, i);
    if (0 === a) {
      if ((o && u) || (!o && !u)) return !1;
    } else if ((o && !u) || (!o && u)) return !1;
    e = l;
  }
  return !0;
}
function Pi(t, e, n, i, r) {
  for (var o = void 0 !== r && r, a = 0, s = n.length; a < s; ++a) {
    var l = n[a],
      u = Ri(t, e, l, i);
    (0 === a ? (o && u) || (!o && !u) : (o && !u) || (!o && u)) &&
      bi(t, e, l, i),
      (e = l);
  }
  return e;
}
function Li(t, e, n, i, r) {
  for (var o = 0, a = n.length; o < a; ++o) e = Pi(t, e, n[o], i, r);
  return e;
}
E = a("9byFX");
var Mi = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Fi = (function (t) {
    function e(e, n, i) {
      var r = t.call(this) || this;
      return (
        (r.ends_ = []),
        (r.flatInteriorPointRevision_ = -1),
        (r.flatInteriorPoint_ = null),
        (r.maxDelta_ = -1),
        (r.maxDeltaRevision_ = -1),
        (r.orientedRevision_ = -1),
        (r.orientedFlatCoordinates_ = null),
        void 0 !== n && i
          ? (r.setFlatCoordinates(n, e), (r.ends_ = i))
          : r.setCoordinates(e, n),
        r
      );
    }
    return (
      Mi(e, t),
      (e.prototype.appendLinearRing = function (t) {
        this.flatCoordinates
          ? Rn.extend(this.flatCoordinates, t.getFlatCoordinates())
          : (this.flatCoordinates = t.getFlatCoordinates().slice()),
          this.ends_.push(this.flatCoordinates.length),
          this.changed();
      }),
      (e.prototype.clone = function () {
        var t = new e(
          this.flatCoordinates.slice(),
          this.layout,
          this.ends_.slice()
        );
        return t.applyProperties(this), t;
      }),
      (e.prototype.closestPointXY = function (t, e, n, i) {
        return i < C.closestSquaredDistanceXY(this.getExtent(), t, e)
          ? i
          : (this.maxDeltaRevision_ != this.getRevision() &&
              ((this.maxDelta_ = Math.sqrt(
                ti(this.flatCoordinates, 0, this.ends_, this.stride, 0)
              )),
              (this.maxDeltaRevision_ = this.getRevision())),
            ni(
              this.flatCoordinates,
              0,
              this.ends_,
              this.stride,
              this.maxDelta_,
              !0,
              t,
              e,
              n,
              i
            ));
      }),
      (e.prototype.containsXY = function (t, e) {
        return Ei(
          this.getOrientedFlatCoordinates(),
          0,
          this.ends_,
          this.stride,
          t,
          e
        );
      }),
      (e.prototype.getArea = function () {
        return di(
          this.getOrientedFlatCoordinates(),
          0,
          this.ends_,
          this.stride
        );
      }),
      (e.prototype.getCoordinates = function (t) {
        var e;
        return (
          void 0 !== t
            ? Pi(
                (e = this.getOrientedFlatCoordinates().slice()),
                0,
                this.ends_,
                this.stride,
                t
              )
            : (e = this.flatCoordinates),
          ci(e, 0, this.ends_, this.stride)
        );
      }),
      (e.prototype.getEnds = function () {
        return this.ends_;
      }),
      (e.prototype.getFlatInteriorPoint = function () {
        if (this.flatInteriorPointRevision_ != this.getRevision()) {
          var t = C.getCenter(this.getExtent());
          (this.flatInteriorPoint_ = Si(
            this.getOrientedFlatCoordinates(),
            0,
            this.ends_,
            this.stride,
            t,
            0
          )),
            (this.flatInteriorPointRevision_ = this.getRevision());
        }
        return this.flatInteriorPoint_;
      }),
      (e.prototype.getInteriorPoint = function () {
        return new yi.default(this.getFlatInteriorPoint(), kn.XYM);
      }),
      (e.prototype.getLinearRingCount = function () {
        return this.ends_.length;
      }),
      (e.prototype.getLinearRing = function (t) {
        return t < 0 || this.ends_.length <= t
          ? null
          : new zn.default(
              this.flatCoordinates.slice(
                0 === t ? 0 : this.ends_[t - 1],
                this.ends_[t]
              ),
              this.layout
            );
      }),
      (e.prototype.getLinearRings = function () {
        for (
          var t = this.layout,
            e = this.flatCoordinates,
            n = this.ends_,
            i = [],
            r = 0,
            o = 0,
            a = n.length;
          o < a;
          ++o
        ) {
          var s = n[o],
            l = new zn.default(e.slice(r, s), t);
          i.push(l), (r = s);
        }
        return i;
      }),
      (e.prototype.getOrientedFlatCoordinates = function () {
        if (this.orientedRevision_ != this.getRevision()) {
          var t = this.flatCoordinates;
          Ii(t, 0, this.ends_, this.stride)
            ? (this.orientedFlatCoordinates_ = t)
            : ((this.orientedFlatCoordinates_ = t.slice()),
              (this.orientedFlatCoordinates_.length = Pi(
                this.orientedFlatCoordinates_,
                0,
                this.ends_,
                this.stride
              ))),
            (this.orientedRevision_ = this.getRevision());
        }
        return this.orientedFlatCoordinates_;
      }),
      (e.prototype.getSimplifiedGeometryInternal = function (t) {
        var n = [],
          i = [];
        return (
          (n.length = ui(
            this.flatCoordinates,
            0,
            this.ends_,
            this.stride,
            Math.sqrt(t),
            n,
            0,
            i
          )),
          new e(n, kn.XY, i)
        );
      }),
      (e.prototype.getType = function () {
        return Ee.POLYGON;
      }),
      (e.prototype.intersectsExtent = function (t) {
        return Ti(
          this.getOrientedFlatCoordinates(),
          0,
          this.ends_,
          this.stride,
          t
        );
      }),
      (e.prototype.setCoordinates = function (t, e) {
        this.setLayout(e, t, 2),
          this.flatCoordinates || (this.flatCoordinates = []);
        var n = ri(this.flatCoordinates, 0, t, this.stride, this.ends_);
        (this.flatCoordinates.length = 0 === n.length ? 0 : n[n.length - 1]),
          this.changed();
      }),
      e
    );
  })(Un.default),
  Ai = Fi;
function Di(t, e, n, i) {
  for (var r = n || 32, o = [], a = 0; a < r; ++a)
    Rn.extend(o, tn(t, e, (2 * Math.PI * a) / r, i));
  return o.push(o[0], o[1]), new Fi(o, kn.XY, [o.length]);
}
function ji(t) {
  var e = t[0],
    n = t[1],
    i = t[2],
    r = t[3],
    o = [e, n, e, r, i, r, i, n, e, n];
  return new Fi(o, kn.XY, [o.length]);
}
function Ni(t, e, n) {
  for (
    var i = e || 32,
      r = t.getStride(),
      o = t.getLayout(),
      a = t.getCenter(),
      s = r * (i + 1),
      l = new Array(s),
      u = 0;
    u < s;
    u += r
  ) {
    (l[u] = 0), (l[u + 1] = 0);
    for (var h = 2; h < r; h++) l[u + h] = a[h];
  }
  var c = [l.length],
    p = new Fi(l, o, c);
  return Gi(p, a, t.getRadius(), n), p;
}
function Gi(t, e, n, i) {
  for (
    var r = t.getFlatCoordinates(),
      o = t.getStride(),
      a = r.length / o - 1,
      s = i || 0,
      l = 0;
    l <= a;
    ++l
  ) {
    var u = l * o,
      h = s + (2 * E.modulo(l, a) * Math.PI) / a;
    (r[u] = e[0] + n * Math.cos(h)), (r[u + 1] = e[1] + n * Math.sin(h));
  }
  t.changed();
}
var ki = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  zi = 0;
function Ui(t, e) {
  setTimeout(function () {
    t(e);
  }, 0);
}
function Xi(t) {
  if (void 0 !== t.extent) {
    var e = void 0 === t.smoothExtentConstraint || t.smoothExtentConstraint;
    return Tn(t.extent, t.constrainOnlyCenter, e);
  }
  var n = hn(t.projection, "EPSG:3857");
  if (!0 !== t.multiWorld && n.isGlobal()) {
    var i = n.getExtent().slice();
    return (i[0] = -1 / 0), (i[2] = 1 / 0), Tn(i, !1, !1);
  }
  return bn;
}
function Yi(t) {
  var e,
    n,
    i,
    r = void 0 !== t.minZoom ? t.minZoom : zi,
    o = void 0 !== t.maxZoom ? t.maxZoom : 28,
    a = void 0 !== t.zoomFactor ? t.zoomFactor : 2,
    s = void 0 !== t.multiWorld && t.multiWorld,
    l = void 0 === t.smoothResolutionConstraint || t.smoothResolutionConstraint,
    u = void 0 !== t.showFullExtent && t.showFullExtent,
    h = hn(t.projection, "EPSG:3857"),
    c = h.getExtent(),
    p = t.constrainOnlyCenter,
    f = t.extent;
  if (
    (s || f || !h.isGlobal() || ((p = !1), (f = c)), void 0 !== t.resolutions)
  ) {
    var d = t.resolutions;
    (n = d[r]),
      (i = void 0 !== d[o] ? d[o] : d[d.length - 1]),
      (e = t.constrainResolution
        ? (function (t, e, n, i) {
            return function (r, o, a, s) {
              if (void 0 !== r) {
                var l = t[0],
                  u = t[t.length - 1],
                  h = n ? In(l, n, a, i) : l;
                if (s)
                  return void 0 === e || e ? Pn(r, h, u) : E.clamp(r, u, h);
                var c = Math.min(h, r),
                  p = Math.floor(Rn.linearFindNearest(t, c, o));
                return t[p] > h && p < t.length - 1 ? t[p + 1] : t[p];
              }
            };
          })(d, l, !p && f, u)
        : Ln(n, i, l, !p && f, u));
  } else {
    var g =
        (c
          ? Math.max(C.getWidth(c), C.getHeight(c))
          : (360 * we[Oe.DEGREES]) / h.getMetersPerUnit()) /
        Pe /
        Math.pow(2, zi),
      _ = g / Math.pow(2, 28 - zi);
    void 0 !== (n = t.maxResolution) ? (r = 0) : (n = g / Math.pow(a, r)),
      void 0 === (i = t.minResolution) &&
        (i =
          void 0 !== t.maxZoom
            ? void 0 !== t.maxResolution
              ? n / Math.pow(a, o)
              : g / Math.pow(a, o)
            : _),
      (o = r + Math.floor(Math.log(n / i) / Math.log(a))),
      (i = n / Math.pow(a, o - r)),
      (e = t.constrainResolution
        ? (function (t, e, n, i, r, o) {
            return function (a, s, l, u) {
              if (void 0 !== a) {
                var h = r ? In(e, r, l, o) : e,
                  c = void 0 !== n ? n : 0;
                if (u)
                  return void 0 === i || i ? Pn(a, h, c) : E.clamp(a, c, h);
                var p = Math.ceil(Math.log(e / h) / Math.log(t) - 1e-9),
                  f = -s * (0.5 - 1e-9) + 0.5,
                  d = Math.min(h, a),
                  g = Math.floor(Math.log(e / d) / Math.log(t) + f),
                  _ = Math.max(p, g),
                  y = e / Math.pow(t, _);
                return E.clamp(y, c, h);
              }
            };
          })(a, n, i, l, !p && f, u)
        : Ln(n, i, l, !p && f, u));
  }
  return {
    constraint: e,
    maxResolution: n,
    minResolution: i,
    minZoom: r,
    zoomFactor: a,
  };
}
function Vi(t) {
  var e, n, i, r;
  if (void 0 === t.enableRotation || t.enableRotation) {
    var o = t.constrainRotation;
    return void 0 === o || !0 === o
      ? ((r = i || E.toRadians(5)),
        function (t, e) {
          return e ? t : void 0 !== t ? (Math.abs(t) <= r ? 0 : t) : void 0;
        })
      : !1 === o
      ? Fn
      : "number" == typeof o
      ? ((e = o),
        (n = (2 * Math.PI) / e),
        function (t, e) {
          return e
            ? t
            : void 0 !== t
            ? (t = Math.floor(t / n + 0.5) * n)
            : void 0;
        })
      : Fn;
  }
  return Mn;
}
function Wi(t) {
  return (
    !(t.sourceCenter && t.targetCenter && !Q(t.sourceCenter, t.targetCenter)) &&
    t.sourceResolution === t.targetResolution &&
    t.sourceRotation === t.targetRotation
  );
}
function Ki(t, e, n, i, r) {
  var o = Math.cos(-r),
    a = Math.sin(-r),
    s = t[0] * o - t[1] * a,
    l = t[1] * o + t[0] * a;
  return [
    (s += (e[0] / 2 - n[0]) * i) * o - (l += (n[1] - e[1] / 2) * i) * (a = -a),
    l * o + s * a,
  ];
}
var Bi = (function (t) {
  function e(e) {
    var n = t.call(this) || this;
    n.on, n.once, n.un;
    var i = B.assign({}, e);
    return (
      (n.hints_ = [0, 0]),
      (n.animations_ = []),
      n.updateAnimationKey_,
      (n.projection_ = hn(i.projection, "EPSG:3857")),
      (n.viewportSize_ = [100, 100]),
      (n.targetCenter_ = null),
      n.targetResolution_,
      n.targetRotation_,
      (n.nextCenter_ = null),
      n.nextResolution_,
      n.nextRotation_,
      (n.cancelAnchor_ = void 0),
      i.projection && nn(),
      i.center && (i.center = En(i.center, n.projection_)),
      i.extent && (i.extent = wn(i.extent, n.projection_)),
      n.applyOptions_(i),
      n
    );
  }
  return (
    ki(e, t),
    (e.prototype.applyOptions_ = function (t) {
      var e = B.assign({}, t);
      for (var n in Re) delete e[n];
      this.setProperties(e, !0);
      var i = Yi(t);
      (this.maxResolution_ = i.maxResolution),
        (this.minResolution_ = i.minResolution),
        (this.zoomFactor_ = i.zoomFactor),
        (this.resolutions_ = t.resolutions),
        (this.padding_ = t.padding),
        (this.minZoom_ = i.minZoom);
      var r = Xi(t),
        o = i.constraint,
        a = Vi(t);
      (this.constraints_ = { center: r, resolution: o, rotation: a }),
        this.setRotation(void 0 !== t.rotation ? t.rotation : 0),
        this.setCenterInternal(void 0 !== t.center ? t.center : null),
        void 0 !== t.resolution
          ? this.setResolution(t.resolution)
          : void 0 !== t.zoom && this.setZoom(t.zoom);
    }),
    Object.defineProperty(e.prototype, "padding", {
      get: function () {
        return this.padding_;
      },
      set: function (t) {
        var e = this.padding_;
        this.padding_ = t;
        var n = this.getCenter();
        if (n) {
          var i = t || [0, 0, 0, 0];
          e = e || [0, 0, 0, 0];
          var r = this.getResolution(),
            o = (r / 2) * (i[3] - e[3] + e[1] - i[1]),
            a = (r / 2) * (i[0] - e[0] + e[2] - i[2]);
          this.setCenterInternal([n[0] + o, n[1] - a]);
        }
      },
      enumerable: !1,
      configurable: !0,
    }),
    (e.prototype.getUpdatedOptions_ = function (t) {
      var e = this.getProperties();
      return (
        void 0 !== e.resolution
          ? (e.resolution = this.getResolution())
          : (e.zoom = this.getZoom()),
        (e.center = this.getCenterInternal()),
        (e.rotation = this.getRotation()),
        B.assign({}, e, t)
      );
    }),
    (e.prototype.animate = function (t) {
      this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
      for (var e = new Array(arguments.length), n = 0; n < e.length; ++n) {
        var i = arguments[n];
        i.center &&
          ((i = B.assign({}, i)).center = En(i.center, this.getProjection())),
          i.anchor &&
            ((i = B.assign({}, i)).anchor = En(i.anchor, this.getProjection())),
          (e[n] = i);
      }
      this.animateInternal.apply(this, e);
    }),
    (e.prototype.animateInternal = function (t) {
      var e,
        n = arguments.length;
      n > 1 &&
        "function" == typeof arguments[n - 1] &&
        ((e = arguments[n - 1]), --n);
      for (var i = 0; i < n && !this.isDef(); ++i) {
        var r = arguments[i];
        r.center && this.setCenterInternal(r.center),
          void 0 !== r.zoom
            ? this.setZoom(r.zoom)
            : r.resolution && this.setResolution(r.resolution),
          void 0 !== r.rotation && this.setRotation(r.rotation);
      }
      if (i !== n) {
        for (
          var o = Date.now(),
            a = this.targetCenter_.slice(),
            s = this.targetResolution_,
            l = this.targetRotation_,
            u = [];
          i < n;
          ++i
        ) {
          var h = arguments[i],
            c = {
              start: o,
              complete: !1,
              anchor: h.anchor,
              duration: void 0 !== h.duration ? h.duration : 1e3,
              easing: h.easing || jn,
              callback: e,
            };
          if (
            (h.center &&
              ((c.sourceCenter = a),
              (c.targetCenter = h.center.slice()),
              (a = c.targetCenter)),
            void 0 !== h.zoom
              ? ((c.sourceResolution = s),
                (c.targetResolution = this.getResolutionForZoom(h.zoom)),
                (s = c.targetResolution))
              : h.resolution &&
                ((c.sourceResolution = s),
                (c.targetResolution = h.resolution),
                (s = c.targetResolution)),
            void 0 !== h.rotation)
          ) {
            c.sourceRotation = l;
            var p = E.modulo(h.rotation - l + Math.PI, 2 * Math.PI) - Math.PI;
            (c.targetRotation = l + p), (l = c.targetRotation);
          }
          Wi(c) ? (c.complete = !0) : (o += c.duration), u.push(c);
        }
        this.animations_.push(u), this.setHint(Te, 1), this.updateAnimations_();
      } else e && Ui(e, !0);
    }),
    (e.prototype.getAnimating = function () {
      return this.hints_[Te] > 0;
    }),
    (e.prototype.getInteracting = function () {
      return this.hints_[be] > 0;
    }),
    (e.prototype.cancelAnimations = function () {
      var t;
      this.setHint(Te, -this.hints_[Te]);
      for (var e = 0, n = this.animations_.length; e < n; ++e) {
        var i = this.animations_[e];
        if ((i[0].callback && Ui(i[0].callback, !1), !t))
          for (var r = 0, o = i.length; r < o; ++r) {
            var a = i[r];
            if (!a.complete) {
              t = a.anchor;
              break;
            }
          }
      }
      (this.animations_.length = 0),
        (this.cancelAnchor_ = t),
        (this.nextCenter_ = null),
        (this.nextResolution_ = NaN),
        (this.nextRotation_ = NaN);
    }),
    (e.prototype.updateAnimations_ = function () {
      if (
        (void 0 !== this.updateAnimationKey_ &&
          (cancelAnimationFrame(this.updateAnimationKey_),
          (this.updateAnimationKey_ = void 0)),
        this.getAnimating())
      ) {
        for (
          var t = Date.now(), e = !1, n = this.animations_.length - 1;
          n >= 0;
          --n
        ) {
          for (
            var i = this.animations_[n], r = !0, o = 0, a = i.length;
            o < a;
            ++o
          ) {
            var s = i[o];
            if (!s.complete) {
              var l = t - s.start,
                u = s.duration > 0 ? l / s.duration : 1;
              u >= 1 ? ((s.complete = !0), (u = 1)) : (r = !1);
              var h = s.easing(u);
              if (s.sourceCenter) {
                var c = s.sourceCenter[0],
                  p = s.sourceCenter[1],
                  f = s.targetCenter[0],
                  d = s.targetCenter[1];
                this.nextCenter_ = s.targetCenter;
                var g = c + h * (f - c),
                  _ = p + h * (d - p);
                this.targetCenter_ = [g, _];
              }
              if (s.sourceResolution && s.targetResolution) {
                var y =
                  1 === h
                    ? s.targetResolution
                    : s.sourceResolution +
                      h * (s.targetResolution - s.sourceResolution);
                if (s.anchor) {
                  var v = this.getViewportSize_(this.getRotation()),
                    m = this.constraints_.resolution(y, 0, v, !0);
                  this.targetCenter_ = this.calculateCenterZoom(m, s.anchor);
                }
                (this.nextResolution_ = s.targetResolution),
                  (this.targetResolution_ = y),
                  this.applyTargetState_(!0);
              }
              if (void 0 !== s.sourceRotation && void 0 !== s.targetRotation) {
                var x =
                  1 === h
                    ? E.modulo(s.targetRotation + Math.PI, 2 * Math.PI) -
                      Math.PI
                    : s.sourceRotation +
                      h * (s.targetRotation - s.sourceRotation);
                if (s.anchor) {
                  var C = this.constraints_.rotation(x, !0);
                  this.targetCenter_ = this.calculateCenterRotate(C, s.anchor);
                }
                (this.nextRotation_ = s.targetRotation),
                  (this.targetRotation_ = x);
              }
              if ((this.applyTargetState_(!0), (e = !0), !s.complete)) break;
            }
          }
          if (r) {
            (this.animations_[n] = null),
              this.setHint(Te, -1),
              (this.nextCenter_ = null),
              (this.nextResolution_ = NaN),
              (this.nextRotation_ = NaN);
            var S = i[0].callback;
            S && Ui(S, !0);
          }
        }
        (this.animations_ = this.animations_.filter(Boolean)),
          e &&
            void 0 === this.updateAnimationKey_ &&
            (this.updateAnimationKey_ = requestAnimationFrame(
              this.updateAnimations_.bind(this)
            ));
      }
    }),
    (e.prototype.calculateCenterRotate = function (t, e) {
      var n,
        i,
        r,
        o = this.getCenterInternal();
      return (
        void 0 !== o &&
          ($((n = [o[0] - e[0], o[1] - e[1]]), t - this.getRotation()),
          (r = e),
          ((i = n)[0] += +r[0]),
          (i[1] += +r[1])),
        n
      );
    }),
    (e.prototype.calculateCenterZoom = function (t, e) {
      var n,
        i = this.getCenterInternal(),
        r = this.getResolution();
      void 0 !== i &&
        void 0 !== r &&
        (n = [e[0] - (t * (e[0] - i[0])) / r, e[1] - (t * (e[1] - i[1])) / r]);
      return n;
    }),
    (e.prototype.getViewportSize_ = function (t) {
      var e = this.viewportSize_;
      if (t) {
        var n = e[0],
          i = e[1];
        return [
          Math.abs(n * Math.cos(t)) + Math.abs(i * Math.sin(t)),
          Math.abs(n * Math.sin(t)) + Math.abs(i * Math.cos(t)),
        ];
      }
      return e;
    }),
    (e.prototype.setViewportSize = function (t) {
      (this.viewportSize_ = Array.isArray(t) ? t.slice() : [100, 100]),
        this.getAnimating() || this.resolveConstraints(0);
    }),
    (e.prototype.getCenter = function () {
      var t = this.getCenterInternal();
      return t ? Cn(t, this.getProjection()) : t;
    }),
    (e.prototype.getCenterInternal = function () {
      return this.get(Re.CENTER);
    }),
    (e.prototype.getConstraints = function () {
      return this.constraints_;
    }),
    (e.prototype.getConstrainResolution = function () {
      return this.get("constrainResolution");
    }),
    (e.prototype.getHints = function (t) {
      return void 0 !== t
        ? ((t[0] = this.hints_[0]), (t[1] = this.hints_[1]), t)
        : this.hints_.slice();
    }),
    (e.prototype.calculateExtent = function (t) {
      return Sn(this.calculateExtentInternal(t), this.getProjection());
    }),
    (e.prototype.calculateExtentInternal = function (t) {
      var e = t || this.getViewportSizeMinusPadding_(),
        n = this.getCenterInternal();
      g.assert(n, 1);
      var i = this.getResolution();
      g.assert(void 0 !== i, 2);
      var r = this.getRotation();
      return g.assert(void 0 !== r, 3), C.getForViewAndSize(n, i, r, e);
    }),
    (e.prototype.getMaxResolution = function () {
      return this.maxResolution_;
    }),
    (e.prototype.getMinResolution = function () {
      return this.minResolution_;
    }),
    (e.prototype.getMaxZoom = function () {
      return this.getZoomForResolution(this.minResolution_);
    }),
    (e.prototype.setMaxZoom = function (t) {
      this.applyOptions_(this.getUpdatedOptions_({ maxZoom: t }));
    }),
    (e.prototype.getMinZoom = function () {
      return this.getZoomForResolution(this.maxResolution_);
    }),
    (e.prototype.setMinZoom = function (t) {
      this.applyOptions_(this.getUpdatedOptions_({ minZoom: t }));
    }),
    (e.prototype.setConstrainResolution = function (t) {
      this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: t }));
    }),
    (e.prototype.getProjection = function () {
      return this.projection_;
    }),
    (e.prototype.getResolution = function () {
      return this.get(Re.RESOLUTION);
    }),
    (e.prototype.getResolutions = function () {
      return this.resolutions_;
    }),
    (e.prototype.getResolutionForExtent = function (t, e) {
      return this.getResolutionForExtentInternal(
        wn(t, this.getProjection()),
        e
      );
    }),
    (e.prototype.getResolutionForExtentInternal = function (t, e) {
      var n = e || this.getViewportSizeMinusPadding_(),
        i = C.getWidth(t) / n[0],
        r = C.getHeight(t) / n[1];
      return Math.max(i, r);
    }),
    (e.prototype.getResolutionForValueFunction = function (t) {
      var e = t || 2,
        n = this.getConstrainedResolution(this.maxResolution_),
        i = this.minResolution_,
        r = Math.log(n / i) / Math.log(e);
      return function (t) {
        return n / Math.pow(e, t * r);
      };
    }),
    (e.prototype.getRotation = function () {
      return this.get(Re.ROTATION);
    }),
    (e.prototype.getValueForResolutionFunction = function (t) {
      var e = Math.log(t || 2),
        n = this.getConstrainedResolution(this.maxResolution_),
        i = this.minResolution_,
        r = Math.log(n / i) / e;
      return function (t) {
        return Math.log(n / t) / e / r;
      };
    }),
    (e.prototype.getViewportSizeMinusPadding_ = function (t) {
      var e = this.getViewportSize_(t),
        n = this.padding_;
      return n && (e = [e[0] - n[1] - n[3], e[1] - n[0] - n[2]]), e;
    }),
    (e.prototype.getState = function () {
      var t = this.getProjection(),
        e = this.getResolution(),
        n = this.getRotation(),
        i = this.getCenterInternal(),
        r = this.padding_;
      if (r) {
        var o = this.getViewportSizeMinusPadding_();
        i = Ki(
          i,
          this.getViewportSize_(),
          [o[0] / 2 + r[3], o[1] / 2 + r[0]],
          e,
          n
        );
      }
      return {
        center: i.slice(0),
        projection: void 0 !== t ? t : null,
        resolution: e,
        nextCenter: this.nextCenter_,
        nextResolution: this.nextResolution_,
        nextRotation: this.nextRotation_,
        rotation: n,
        zoom: this.getZoom(),
      };
    }),
    (e.prototype.getZoom = function () {
      var t,
        e = this.getResolution();
      return void 0 !== e && (t = this.getZoomForResolution(e)), t;
    }),
    (e.prototype.getZoomForResolution = function (t) {
      var e,
        n,
        i = this.minZoom_ || 0;
      if (this.resolutions_) {
        var r = Rn.linearFindNearest(this.resolutions_, t, 1);
        (i = r),
          (e = this.resolutions_[r]),
          (n =
            r == this.resolutions_.length - 1
              ? 2
              : e / this.resolutions_[r + 1]);
      } else (e = this.maxResolution_), (n = this.zoomFactor_);
      return i + Math.log(e / t) / Math.log(n);
    }),
    (e.prototype.getResolutionForZoom = function (t) {
      if (this.resolutions_) {
        if (this.resolutions_.length <= 1) return 0;
        var e = E.clamp(Math.floor(t), 0, this.resolutions_.length - 2),
          n = this.resolutions_[e] / this.resolutions_[e + 1];
        return this.resolutions_[e] / Math.pow(n, E.clamp(t - e, 0, 1));
      }
      return (
        this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_)
      );
    }),
    (e.prototype.fit = function (t, e) {
      var n;
      if (
        (g.assert(
          Array.isArray(t) || "function" == typeof t.getSimplifiedGeometry,
          24
        ),
        Array.isArray(t))
      ) {
        g.assert(!C.isEmpty(t), 25);
        var i = wn(t, this.getProjection());
        n = Gn.fromExtent(i);
      } else if (t.getType() === Ee.CIRCLE) {
        i = wn(t.getExtent(), this.getProjection());
        (n = Gn.fromExtent(i)).rotate(this.getRotation(), C.getCenter(i));
      } else {
        var r = xn();
        n = r ? t.clone().transform(r, this.getProjection()) : t;
      }
      this.fitInternal(n, e);
    }),
    (e.prototype.rotatedExtentForGeometry = function (t) {
      for (
        var e = this.getRotation(),
          n = Math.cos(e),
          i = Math.sin(-e),
          r = t.getFlatCoordinates(),
          o = t.getStride(),
          a = 1 / 0,
          s = 1 / 0,
          l = -1 / 0,
          u = -1 / 0,
          h = 0,
          c = r.length;
        h < c;
        h += o
      ) {
        var p = r[h] * n - r[h + 1] * i,
          f = r[h] * i + r[h + 1] * n;
        (a = Math.min(a, p)),
          (s = Math.min(s, f)),
          (l = Math.max(l, p)),
          (u = Math.max(u, f));
      }
      return [a, s, l, u];
    }),
    (e.prototype.fitInternal = function (t, e) {
      var n = e || {},
        i = n.size;
      i || (i = this.getViewportSizeMinusPadding_());
      var r,
        o = void 0 !== n.padding ? n.padding : [0, 0, 0, 0],
        a = void 0 !== n.nearest && n.nearest;
      r =
        void 0 !== n.minResolution
          ? n.minResolution
          : void 0 !== n.maxZoom
          ? this.getResolutionForZoom(n.maxZoom)
          : 0;
      var s = this.rotatedExtentForGeometry(t),
        l = this.getResolutionForExtentInternal(s, [
          i[0] - o[1] - o[3],
          i[1] - o[0] - o[2],
        ]);
      (l = isNaN(l) ? r : Math.max(l, r)),
        (l = this.getConstrainedResolution(l, a ? 0 : 1));
      var u = this.getRotation(),
        h = Math.sin(u),
        c = Math.cos(u),
        f = C.getCenter(s);
      (f[0] += ((o[1] - o[3]) / 2) * l), (f[1] += ((o[0] - o[2]) / 2) * l);
      var d = f[0] * c - f[1] * h,
        g = f[1] * c + f[0] * h,
        _ = this.getConstrainedCenter([d, g], l),
        y = n.callback ? n.callback : p.VOID;
      void 0 !== n.duration
        ? this.animateInternal(
            {
              resolution: l,
              center: _,
              duration: n.duration,
              easing: n.easing,
            },
            y
          )
        : ((this.targetResolution_ = l),
          (this.targetCenter_ = _),
          this.applyTargetState_(!1, !0),
          Ui(y, !0));
    }),
    (e.prototype.centerOn = function (t, e, n) {
      this.centerOnInternal(En(t, this.getProjection()), e, n);
    }),
    (e.prototype.centerOnInternal = function (t, e, n) {
      this.setCenterInternal(
        Ki(t, e, n, this.getResolution(), this.getRotation())
      );
    }),
    (e.prototype.calculateCenterShift = function (t, e, n, i) {
      var r,
        o = this.padding_;
      if (o && t) {
        var a = this.getViewportSizeMinusPadding_(-n),
          s = Ki(t, i, [a[0] / 2 + o[3], a[1] / 2 + o[0]], e, n);
        r = [t[0] - s[0], t[1] - s[1]];
      }
      return r;
    }),
    (e.prototype.isDef = function () {
      return !!this.getCenterInternal() && void 0 !== this.getResolution();
    }),
    (e.prototype.adjustCenter = function (t) {
      var e = Cn(this.targetCenter_, this.getProjection());
      this.setCenter([e[0] + t[0], e[1] + t[1]]);
    }),
    (e.prototype.adjustCenterInternal = function (t) {
      var e = this.targetCenter_;
      this.setCenterInternal([e[0] + t[0], e[1] + t[1]]);
    }),
    (e.prototype.adjustResolution = function (t, e) {
      var n = e && En(e, this.getProjection());
      this.adjustResolutionInternal(t, n);
    }),
    (e.prototype.adjustResolutionInternal = function (t, e) {
      var n = this.getAnimating() || this.getInteracting(),
        i = this.getViewportSize_(this.getRotation()),
        r = this.constraints_.resolution(this.targetResolution_ * t, 0, i, n);
      e && (this.targetCenter_ = this.calculateCenterZoom(r, e)),
        (this.targetResolution_ *= t),
        this.applyTargetState_();
    }),
    (e.prototype.adjustZoom = function (t, e) {
      this.adjustResolution(Math.pow(this.zoomFactor_, -t), e);
    }),
    (e.prototype.adjustRotation = function (t, e) {
      e && (e = En(e, this.getProjection())), this.adjustRotationInternal(t, e);
    }),
    (e.prototype.adjustRotationInternal = function (t, e) {
      var n = this.getAnimating() || this.getInteracting(),
        i = this.constraints_.rotation(this.targetRotation_ + t, n);
      e && (this.targetCenter_ = this.calculateCenterRotate(i, e)),
        (this.targetRotation_ += t),
        this.applyTargetState_();
    }),
    (e.prototype.setCenter = function (t) {
      this.setCenterInternal(t ? En(t, this.getProjection()) : t);
    }),
    (e.prototype.setCenterInternal = function (t) {
      (this.targetCenter_ = t), this.applyTargetState_();
    }),
    (e.prototype.setHint = function (t, e) {
      return (this.hints_[t] += e), this.changed(), this.hints_[t];
    }),
    (e.prototype.setResolution = function (t) {
      (this.targetResolution_ = t), this.applyTargetState_();
    }),
    (e.prototype.setRotation = function (t) {
      (this.targetRotation_ = t), this.applyTargetState_();
    }),
    (e.prototype.setZoom = function (t) {
      this.setResolution(this.getResolutionForZoom(t));
    }),
    (e.prototype.applyTargetState_ = function (t, e) {
      var n = this.getAnimating() || this.getInteracting() || e,
        i = this.constraints_.rotation(this.targetRotation_, n),
        r = this.getViewportSize_(i),
        o = this.constraints_.resolution(this.targetResolution_, 0, r, n),
        a = this.constraints_.center(
          this.targetCenter_,
          o,
          r,
          n,
          this.calculateCenterShift(this.targetCenter_, o, i, r)
        );
      this.get(Re.ROTATION) !== i && this.set(Re.ROTATION, i),
        this.get(Re.RESOLUTION) !== o &&
          (this.set(Re.RESOLUTION, o), this.set("zoom", this.getZoom(), !0)),
        (a && this.get(Re.CENTER) && Q(this.get(Re.CENTER), a)) ||
          this.set(Re.CENTER, a),
        this.getAnimating() && !t && this.cancelAnimations(),
        (this.cancelAnchor_ = void 0);
    }),
    (e.prototype.resolveConstraints = function (t, e, n) {
      var i = void 0 !== t ? t : 200,
        r = e || 0,
        o = this.constraints_.rotation(this.targetRotation_),
        a = this.getViewportSize_(o),
        s = this.constraints_.resolution(this.targetResolution_, r, a),
        l = this.constraints_.center(
          this.targetCenter_,
          s,
          a,
          !1,
          this.calculateCenterShift(this.targetCenter_, s, o, a)
        );
      if (0 === i && !this.cancelAnchor_)
        return (
          (this.targetResolution_ = s),
          (this.targetRotation_ = o),
          (this.targetCenter_ = l),
          void this.applyTargetState_()
        );
      var u = n || (0 === i ? this.cancelAnchor_ : void 0);
      (this.cancelAnchor_ = void 0),
        (this.getResolution() === s &&
          this.getRotation() === o &&
          this.getCenterInternal() &&
          Q(this.getCenterInternal(), l)) ||
          (this.getAnimating() && this.cancelAnimations(),
          this.animateInternal({
            rotation: o,
            center: l,
            resolution: s,
            duration: i,
            easing: Dn,
            anchor: u,
          }));
    }),
    (e.prototype.beginInteraction = function () {
      this.resolveConstraints(0), this.setHint(be, 1);
    }),
    (e.prototype.endInteraction = function (t, e, n) {
      var i = n && En(n, this.getProjection());
      this.endInteractionInternal(t, e, i);
    }),
    (e.prototype.endInteractionInternal = function (t, e, n) {
      this.setHint(be, -1), this.resolveConstraints(t, e, n);
    }),
    (e.prototype.getConstrainedCenter = function (t, e) {
      var n = this.getViewportSize_(this.getRotation());
      return this.constraints_.center(t, e || this.getResolution(), n);
    }),
    (e.prototype.getConstrainedZoom = function (t, e) {
      var n = this.getResolutionForZoom(t);
      return this.getZoomForResolution(this.getConstrainedResolution(n, e));
    }),
    (e.prototype.getConstrainedResolution = function (t, e) {
      var n = e || 0,
        i = this.getViewportSize_(this.getRotation());
      return this.constraints_.resolution(t, n, i);
    }),
    e
  );
})(vt.default);
(d = a("8UoiJ")),
  (p = a("6wUzV")),
  (g = a("4Cz58")),
  (C = a("9pD6L")),
  (f = a("9iPUS"));
function Zi(t) {
  return t[0] > 0 && t[1] > 0;
}
function Hi(t, e) {
  return Array.isArray(t)
    ? t
    : (void 0 === e ? (e = [t, t]) : ((e[0] = t), (e[1] = t)), e);
}
(Z = a("ilM9F")), (xt = a("DfnQm"));
var qi = (function () {
  var t = function (e, n) {
    return (t =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      })(e, n);
  };
  return function (e, n) {
    if ("function" != typeof n && null !== n)
      throw new TypeError(
        "Class extends value " + String(n) + " is not a constructor or null"
      );
    function i() {
      this.constructor = e;
    }
    t(e, n),
      (e.prototype =
        null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
  };
})();
function Ji(t) {
  t instanceof j.default
    ? t.setMapInternal(null)
    : t instanceof Kt.default && t.getLayers().forEach(Ji);
}
function Qi(t, e) {
  if (t instanceof j.default) t.setMapInternal(e);
  else if (t instanceof Kt.default)
    for (var n = t.getLayers().getArray(), i = 0, r = n.length; i < r; ++i)
      Qi(n[i], e);
}
var $i = (function (t) {
    function e(e) {
      var n = t.call(this) || this;
      n.on, n.once, n.un;
      var i = (function (t) {
        var e = null;
        void 0 !== t.keyboardEventTarget &&
          (e =
            "string" == typeof t.keyboardEventTarget
              ? document.getElementById(t.keyboardEventTarget)
              : t.keyboardEventTarget);
        var n,
          i,
          r,
          o = {},
          a =
            t.layers && "function" == typeof t.layers.getLayers
              ? t.layers
              : new Kt.default({ layers: t.layers });
        (o[ae] = a),
          (o[le] = t.target),
          (o[ue] = t.view instanceof Ce.default ? t.view : new Ce.default()),
          void 0 !== t.controls &&
            (Array.isArray(t.controls)
              ? (n = new Vt.default(t.controls.slice()))
              : (g.assert("function" == typeof t.controls.getArray, 47),
                (n = t.controls)));
        void 0 !== t.interactions &&
          (Array.isArray(t.interactions)
            ? (i = new Vt.default(t.interactions.slice()))
            : (g.assert("function" == typeof t.interactions.getArray, 48),
              (i = t.interactions)));
        void 0 !== t.overlays
          ? Array.isArray(t.overlays)
            ? (r = new Vt.default(t.overlays.slice()))
            : (g.assert("function" == typeof t.overlays.getArray, 49),
              (r = t.overlays))
          : (r = new Vt.default());
        return {
          controls: n,
          interactions: i,
          keyboardEventTarget: e,
          overlays: r,
          values: o,
        };
      })(e);
      n.renderComplete_,
        (n.loaded_ = !0),
        (n.boundHandleBrowserEvent_ = n.handleBrowserEvent.bind(n)),
        (n.maxTilesLoading_ =
          void 0 !== e.maxTilesLoading ? e.maxTilesLoading : 16),
        (n.pixelRatio_ =
          void 0 !== e.pixelRatio ? e.pixelRatio : d.DEVICE_PIXEL_RATIO),
        n.postRenderTimeoutHandle_,
        n.animationDelayKey_,
        (n.animationDelay_ = function () {
          (this.animationDelayKey_ = void 0), this.renderFrame_(Date.now());
        }.bind(n)),
        (n.coordinateToPixelTransform_ = [1, 0, 0, 1, 0, 0]),
        (n.pixelToCoordinateTransform_ = [1, 0, 0, 1, 0, 0]),
        (n.frameIndex_ = 0),
        (n.frameState_ = null),
        (n.previousExtent_ = null),
        (n.viewPropertyListenerKey_ = null),
        (n.viewChangeListenerKey_ = null),
        (n.layerGroupPropertyListenerKeys_ = null),
        (n.viewport_ = document.createElement("div")),
        (n.viewport_.className =
          "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : "")),
        (n.viewport_.style.position = "relative"),
        (n.viewport_.style.overflow = "hidden"),
        (n.viewport_.style.width = "100%"),
        (n.viewport_.style.height = "100%"),
        (n.overlayContainer_ = document.createElement("div")),
        (n.overlayContainer_.style.position = "absolute"),
        (n.overlayContainer_.style.zIndex = "0"),
        (n.overlayContainer_.style.width = "100%"),
        (n.overlayContainer_.style.height = "100%"),
        (n.overlayContainer_.style.pointerEvents = "none"),
        (n.overlayContainer_.className = "ol-overlaycontainer"),
        n.viewport_.appendChild(n.overlayContainer_),
        (n.overlayContainerStopEvent_ = document.createElement("div")),
        (n.overlayContainerStopEvent_.style.position = "absolute"),
        (n.overlayContainerStopEvent_.style.zIndex = "0"),
        (n.overlayContainerStopEvent_.style.width = "100%"),
        (n.overlayContainerStopEvent_.style.height = "100%"),
        (n.overlayContainerStopEvent_.style.pointerEvents = "none"),
        (n.overlayContainerStopEvent_.className =
          "ol-overlaycontainer-stopevent"),
        n.viewport_.appendChild(n.overlayContainerStopEvent_),
        (n.mapBrowserEventHandler_ = null),
        (n.moveTolerance_ = e.moveTolerance),
        (n.keyboardEventTarget_ = i.keyboardEventTarget),
        (n.targetChangeHandlerKeys_ = null),
        (n.controls = i.controls || new Vt.default()),
        (n.interactions = i.interactions || new Vt.default()),
        (n.overlays_ = i.overlays),
        (n.overlayIdIndex_ = {}),
        (n.renderer_ = null),
        (n.postRenderFunctions_ = []),
        (n.tileQueue_ = new he.default(
          n.getTilePriority.bind(n),
          n.handleTileChange_.bind(n)
        )),
        n.addChangeListener(ae, n.handleLayerGroupChanged_),
        n.addChangeListener(ue, n.handleViewChanged_),
        n.addChangeListener(se, n.handleSizeChanged_),
        n.addChangeListener(le, n.handleTargetChanged_),
        n.setProperties(i.values);
      var r = n;
      return (
        !e.view ||
          e.view instanceof Ce.default ||
          e.view.then(function (t) {
            r.setView(new Ce.default(t));
          }),
        n.controls.addEventListener(
          Wt.default.ADD,
          function (t) {
            t.element.setMap(this);
          }.bind(n)
        ),
        n.controls.addEventListener(
          Wt.default.REMOVE,
          function (t) {
            t.element.setMap(null);
          }.bind(n)
        ),
        n.interactions.addEventListener(
          Wt.default.ADD,
          function (t) {
            t.element.setMap(this);
          }.bind(n)
        ),
        n.interactions.addEventListener(
          Wt.default.REMOVE,
          function (t) {
            t.element.setMap(null);
          }.bind(n)
        ),
        n.overlays_.addEventListener(
          Wt.default.ADD,
          function (t) {
            this.addOverlayInternal_(t.element);
          }.bind(n)
        ),
        n.overlays_.addEventListener(
          Wt.default.REMOVE,
          function (t) {
            var e = t.element.getId();
            void 0 !== e && delete this.overlayIdIndex_[e.toString()],
              t.element.setMap(null);
          }.bind(n)
        ),
        n.controls.forEach(
          function (t) {
            t.setMap(this);
          }.bind(n)
        ),
        n.interactions.forEach(
          function (t) {
            t.setMap(this);
          }.bind(n)
        ),
        n.overlays_.forEach(n.addOverlayInternal_.bind(n)),
        n
      );
    }
    return (
      qi(e, t),
      (e.prototype.createRenderer = function () {
        throw new Error("Use a map type that has a createRenderer method");
      }),
      (e.prototype.addControl = function (t) {
        this.getControls().push(t);
      }),
      (e.prototype.addInteraction = function (t) {
        this.getInteractions().push(t);
      }),
      (e.prototype.addLayer = function (t) {
        this.getLayerGroup().getLayers().push(t);
      }),
      (e.prototype.handleLayerAdd_ = function (t) {
        Qi(t.layer, this);
      }),
      (e.prototype.addOverlay = function (t) {
        this.getOverlays().push(t);
      }),
      (e.prototype.addOverlayInternal_ = function (t) {
        var e = t.getId();
        void 0 !== e && (this.overlayIdIndex_[e.toString()] = t),
          t.setMap(this);
      }),
      (e.prototype.disposeInternal = function () {
        this.setTarget(null), t.prototype.disposeInternal.call(this);
      }),
      (e.prototype.forEachFeatureAtPixel = function (t, e, n) {
        if (this.frameState_ && this.renderer_) {
          var i = this.getCoordinateFromPixelInternal(t),
            r =
              void 0 !== (n = void 0 !== n ? n : {}).hitTolerance
                ? n.hitTolerance
                : 0,
            o = void 0 !== n.layerFilter ? n.layerFilter : p.TRUE,
            a = !1 !== n.checkWrapped;
          return this.renderer_.forEachFeatureAtCoordinate(
            i,
            this.frameState_,
            r,
            a,
            e,
            null,
            o,
            null
          );
        }
      }),
      (e.prototype.getFeaturesAtPixel = function (t, e) {
        var n = [];
        return (
          this.forEachFeatureAtPixel(
            t,
            function (t) {
              n.push(t);
            },
            e
          ),
          n
        );
      }),
      (e.prototype.getAllLayers = function () {
        var t = [];
        return (
          (function e(n) {
            n.forEach(function (n) {
              n instanceof Kt.default ? e(n.getLayers()) : t.push(n);
            });
          })(this.getLayers()),
          t
        );
      }),
      (e.prototype.forEachLayerAtPixel = function (t, e, n) {
        if (this.frameState_ && this.renderer_) {
          var i = n || {},
            r = void 0 !== i.hitTolerance ? i.hitTolerance : 0,
            o = i.layerFilter || p.TRUE;
          return this.renderer_.forEachLayerAtPixel(
            t,
            this.frameState_,
            r,
            e,
            o
          );
        }
      }),
      (e.prototype.hasFeatureAtPixel = function (t, e) {
        if (!this.frameState_ || !this.renderer_) return !1;
        var n = this.getCoordinateFromPixelInternal(t),
          i =
            void 0 !== (e = void 0 !== e ? e : {}).layerFilter
              ? e.layerFilter
              : p.TRUE,
          r = void 0 !== e.hitTolerance ? e.hitTolerance : 0,
          o = !1 !== e.checkWrapped;
        return this.renderer_.hasFeatureAtCoordinate(
          n,
          this.frameState_,
          r,
          o,
          i,
          null
        );
      }),
      (e.prototype.getEventCoordinate = function (t) {
        return this.getCoordinateFromPixel(this.getEventPixel(t));
      }),
      (e.prototype.getEventCoordinateInternal = function (t) {
        return this.getCoordinateFromPixelInternal(this.getEventPixel(t));
      }),
      (e.prototype.getEventPixel = function (t) {
        var e = this.viewport_.getBoundingClientRect(),
          n = "changedTouches" in t ? t.changedTouches[0] : t;
        return [n.clientX - e.left, n.clientY - e.top];
      }),
      (e.prototype.getTarget = function () {
        return this.get(le);
      }),
      (e.prototype.getTargetElement = function () {
        var t = this.getTarget();
        return void 0 !== t
          ? "string" == typeof t
            ? document.getElementById(t)
            : t
          : null;
      }),
      (e.prototype.getCoordinateFromPixel = function (t) {
        return Cn(
          this.getCoordinateFromPixelInternal(t),
          this.getView().getProjection()
        );
      }),
      (e.prototype.getCoordinateFromPixelInternal = function (t) {
        var e = this.frameState_;
        return e ? y(e.pixelToCoordinateTransform, t.slice()) : null;
      }),
      (e.prototype.getControls = function () {
        return this.controls;
      }),
      (e.prototype.getOverlays = function () {
        return this.overlays_;
      }),
      (e.prototype.getOverlayById = function (t) {
        var e = this.overlayIdIndex_[t.toString()];
        return void 0 !== e ? e : null;
      }),
      (e.prototype.getInteractions = function () {
        return this.interactions;
      }),
      (e.prototype.getLayerGroup = function () {
        return this.get(ae);
      }),
      (e.prototype.setLayers = function (t) {
        var e = this.getLayerGroup();
        if (t instanceof Vt.default) e.setLayers(t);
        else {
          var n = e.getLayers();
          n.clear(), n.extend(t);
        }
      }),
      (e.prototype.getLayers = function () {
        return this.getLayerGroup().getLayers();
      }),
      (e.prototype.getLoadingOrNotReady = function () {
        for (
          var t = this.getLayerGroup().getLayerStatesArray(),
            e = 0,
            n = t.length;
          e < n;
          ++e
        ) {
          var i = t[e];
          if (i.visible) {
            var r = i.layer.getRenderer();
            if (r && !r.ready) return !0;
            var o = i.layer.getSource();
            if (o && o.loading) return !0;
          }
        }
        return !1;
      }),
      (e.prototype.getPixelFromCoordinate = function (t) {
        var e = En(t, this.getView().getProjection());
        return this.getPixelFromCoordinateInternal(e);
      }),
      (e.prototype.getPixelFromCoordinateInternal = function (t) {
        var e = this.frameState_;
        return e ? y(e.coordinateToPixelTransform, t.slice(0, 2)) : null;
      }),
      (e.prototype.getRenderer = function () {
        return this.renderer_;
      }),
      (e.prototype.getSize = function () {
        return this.get(se);
      }),
      (e.prototype.getView = function () {
        return this.get(ue);
      }),
      (e.prototype.getViewport = function () {
        return this.viewport_;
      }),
      (e.prototype.getOverlayContainer = function () {
        return this.overlayContainer_;
      }),
      (e.prototype.getOverlayContainerStopEvent = function () {
        return this.overlayContainerStopEvent_;
      }),
      (e.prototype.getOwnerDocument = function () {
        var t = this.getTargetElement();
        return t ? t.ownerDocument : document;
      }),
      (e.prototype.getTilePriority = function (t, e, n, i) {
        return he.getTilePriority(this.frameState_, t, e, n, i);
      }),
      (e.prototype.handleBrowserEvent = function (t, e) {
        var n = e || t.type,
          i = new Bt.default(n, this, t);
        this.handleMapBrowserEvent(i);
      }),
      (e.prototype.handleMapBrowserEvent = function (t) {
        if (this.frameState_) {
          var e = t.originalEvent,
            n = e.type;
          if (n === ne || n === k.default.WHEEL || n === k.default.KEYDOWN) {
            var i = this.getOwnerDocument(),
              r = this.viewport_.getRootNode ? this.viewport_.getRootNode() : i,
              o = e.target;
            if (
              this.overlayContainerStopEvent_.contains(o) ||
              !(r === i ? i.documentElement : r).contains(o)
            )
              return;
          }
          if (((t.frameState = this.frameState_), !1 !== this.dispatchEvent(t)))
            for (
              var a = this.getInteractions().getArray().slice(),
                s = a.length - 1;
              s >= 0;
              s--
            ) {
              var l = a[s];
              if (
                l.getMap() === this &&
                l.getActive() &&
                this.getTargetElement()
              )
                if (!l.handleEvent(t) || t.propagationStopped) break;
            }
        }
      }),
      (e.prototype.handlePostRender = function () {
        var t = this.frameState_,
          e = this.tileQueue_;
        if (!e.isEmpty()) {
          var n = this.maxTilesLoading_,
            i = n;
          if (t) {
            var r = t.viewHints;
            if (r[Te] || r[be]) {
              var o = Date.now() - t.time > 8;
              (n = o ? 0 : 8), (i = o ? 0 : 2);
            }
          }
          e.getTilesLoading() < n && (e.reprioritize(), e.loadMoreTiles(n, i));
        }
        t &&
          this.renderer_ &&
          !t.animate &&
          (!0 === this.renderComplete_
            ? (this.hasListener(W) && this.renderer_.dispatchRenderEvent(W, t),
              !1 === this.loaded_ &&
                ((this.loaded_ = !0),
                this.dispatchEvent(
                  new Zt.default(oe.default.LOADEND, this, t)
                )))
            : !0 === this.loaded_ &&
              ((this.loaded_ = !1),
              this.dispatchEvent(
                new Zt.default(oe.default.LOADSTART, this, t)
              )));
        for (var a = this.postRenderFunctions_, s = 0, l = a.length; s < l; ++s)
          a[s](this, t);
        a.length = 0;
      }),
      (e.prototype.handleSizeChanged_ = function () {
        this.getView() &&
          !this.getView().getAnimating() &&
          this.getView().resolveConstraints(0),
          this.render();
      }),
      (e.prototype.handleTargetChanged_ = function () {
        if (this.mapBrowserEventHandler_) {
          for (var t = 0, e = this.targetChangeHandlerKeys_.length; t < e; ++t)
            Z.unlistenByKey(this.targetChangeHandlerKeys_[t]);
          (this.targetChangeHandlerKeys_ = null),
            this.viewport_.removeEventListener(
              k.default.CONTEXTMENU,
              this.boundHandleBrowserEvent_
            ),
            this.viewport_.removeEventListener(
              k.default.WHEEL,
              this.boundHandleBrowserEvent_
            ),
            this.mapBrowserEventHandler_.dispose(),
            (this.mapBrowserEventHandler_ = null),
            xt.removeNode(this.viewport_);
        }
        var n = this.getTargetElement();
        if (n) {
          for (var i in (n.appendChild(this.viewport_),
          this.renderer_ || (this.renderer_ = this.createRenderer()),
          (this.mapBrowserEventHandler_ = new $t.default(
            this,
            this.moveTolerance_
          )),
          te))
            this.mapBrowserEventHandler_.addEventListener(
              te[i],
              this.handleMapBrowserEvent.bind(this)
            );
          this.viewport_.addEventListener(
            k.default.CONTEXTMENU,
            this.boundHandleBrowserEvent_,
            !1
          ),
            this.viewport_.addEventListener(
              k.default.WHEEL,
              this.boundHandleBrowserEvent_,
              !!d.PASSIVE_EVENT_LISTENERS && { passive: !1 }
            );
          var r = this.getOwnerDocument().defaultView,
            o = this.keyboardEventTarget_ ? this.keyboardEventTarget_ : n;
          this.targetChangeHandlerKeys_ = [
            Z.listen(o, k.default.KEYDOWN, this.handleBrowserEvent, this),
            Z.listen(o, k.default.KEYPRESS, this.handleBrowserEvent, this),
            Z.listen(r, k.default.RESIZE, this.updateSize, this),
          ];
        } else
          this.renderer_ &&
            (clearTimeout(this.postRenderTimeoutHandle_),
            (this.postRenderTimeoutHandle_ = void 0),
            (this.postRenderFunctions_.length = 0),
            this.renderer_.dispose(),
            (this.renderer_ = null)),
            this.animationDelayKey_ &&
              (cancelAnimationFrame(this.animationDelayKey_),
              (this.animationDelayKey_ = void 0));
        this.updateSize();
      }),
      (e.prototype.handleTileChange_ = function () {
        this.render();
      }),
      (e.prototype.handleViewPropertyChanged_ = function () {
        this.render();
      }),
      (e.prototype.handleViewChanged_ = function () {
        this.viewPropertyListenerKey_ &&
          (Z.unlistenByKey(this.viewPropertyListenerKey_),
          (this.viewPropertyListenerKey_ = null)),
          this.viewChangeListenerKey_ &&
            (Z.unlistenByKey(this.viewChangeListenerKey_),
            (this.viewChangeListenerKey_ = null));
        var t = this.getView();
        t &&
          (this.updateViewportSize_(),
          (this.viewPropertyListenerKey_ = Z.listen(
            t,
            ot.default.PROPERTYCHANGE,
            this.handleViewPropertyChanged_,
            this
          )),
          (this.viewChangeListenerKey_ = Z.listen(
            t,
            k.default.CHANGE,
            this.handleViewPropertyChanged_,
            this
          )),
          t.resolveConstraints(0)),
          this.render();
      }),
      (e.prototype.handleLayerGroupChanged_ = function () {
        this.layerGroupPropertyListenerKeys_ &&
          (this.layerGroupPropertyListenerKeys_.forEach(Z.unlistenByKey),
          (this.layerGroupPropertyListenerKeys_ = null));
        var t = this.getLayerGroup();
        t &&
          (this.handleLayerAdd_(new Kt.GroupEvent("addlayer", t)),
          (this.layerGroupPropertyListenerKeys_ = [
            Z.listen(t, ot.default.PROPERTYCHANGE, this.render, this),
            Z.listen(t, k.default.CHANGE, this.render, this),
            Z.listen(t, "addlayer", this.handleLayerAdd_, this),
            Z.listen(t, "removelayer", this.handleLayerRemove_, this),
          ])),
          this.render();
      }),
      (e.prototype.isRendered = function () {
        return !!this.frameState_;
      }),
      (e.prototype.renderSync = function () {
        this.animationDelayKey_ &&
          cancelAnimationFrame(this.animationDelayKey_),
          this.animationDelay_();
      }),
      (e.prototype.redrawText = function () {
        for (
          var t = this.getLayerGroup().getLayerStatesArray(),
            e = 0,
            n = t.length;
          e < n;
          ++e
        ) {
          var i = t[e].layer;
          i.hasRenderer() && i.getRenderer().handleFontsChanged();
        }
      }),
      (e.prototype.render = function () {
        this.renderer_ &&
          void 0 === this.animationDelayKey_ &&
          (this.animationDelayKey_ = requestAnimationFrame(
            this.animationDelay_
          ));
      }),
      (e.prototype.removeControl = function (t) {
        return this.getControls().remove(t);
      }),
      (e.prototype.removeInteraction = function (t) {
        return this.getInteractions().remove(t);
      }),
      (e.prototype.removeLayer = function (t) {
        return this.getLayerGroup().getLayers().remove(t);
      }),
      (e.prototype.handleLayerRemove_ = function (t) {
        Ji(t.layer);
      }),
      (e.prototype.removeOverlay = function (t) {
        return this.getOverlays().remove(t);
      }),
      (e.prototype.renderFrame_ = function (t) {
        var e = this,
          n = this.getSize(),
          i = this.getView(),
          r = this.frameState_,
          o = null;
        if (void 0 !== n && Zi(n) && i && i.isDef()) {
          var a = i.getHints(
              this.frameState_ ? this.frameState_.viewHints : void 0
            ),
            s = i.getState();
          if (
            ((o = {
              animate: !1,
              coordinateToPixelTransform: this.coordinateToPixelTransform_,
              declutterTree: null,
              extent: C.getForViewAndSize(
                s.center,
                s.resolution,
                s.rotation,
                n
              ),
              index: this.frameIndex_++,
              layerIndex: 0,
              layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
              pixelRatio: this.pixelRatio_,
              pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
              postRenderFunctions: [],
              size: n,
              tileQueue: this.tileQueue_,
              time: t,
              usedTiles: {},
              viewState: s,
              viewHints: a,
              wantedTiles: {},
              mapId: f.getUid(this),
              renderTargets: {},
            }),
            s.nextCenter && s.nextResolution)
          ) {
            var l = isNaN(s.nextRotation) ? s.rotation : s.nextRotation;
            o.nextExtent = C.getForViewAndSize(
              s.nextCenter,
              s.nextResolution,
              l,
              n
            );
          }
        }
        if (((this.frameState_ = o), this.renderer_.renderFrame(o), o)) {
          if (
            (o.animate && this.render(),
            Array.prototype.push.apply(
              this.postRenderFunctions_,
              o.postRenderFunctions
            ),
            r)
          )
            (!this.previousExtent_ ||
              (!C.isEmpty(this.previousExtent_) &&
                !C.equals(o.extent, this.previousExtent_))) &&
              (this.dispatchEvent(
                new Zt.default(oe.default.MOVESTART, this, r)
              ),
              (this.previousExtent_ = C.createOrUpdateEmpty(
                this.previousExtent_
              )));
          this.previousExtent_ &&
            !o.viewHints[Te] &&
            !o.viewHints[be] &&
            !C.equals(o.extent, this.previousExtent_) &&
            (this.dispatchEvent(new Zt.default(oe.default.MOVEEND, this, o)),
            C.clone(o.extent, this.previousExtent_));
        }
        this.dispatchEvent(new Zt.default(oe.default.POSTRENDER, this, o)),
          (this.renderComplete_ =
            this.hasListener(oe.default.LOADSTART) ||
            this.hasListener(oe.default.LOADEND) ||
            this.hasListener(W)
              ? !this.tileQueue_.getTilesLoading() &&
                !this.tileQueue_.getCount() &&
                !this.getLoadingOrNotReady()
              : void 0),
          this.postRenderTimeoutHandle_ ||
            (this.postRenderTimeoutHandle_ = setTimeout(function () {
              (e.postRenderTimeoutHandle_ = void 0), e.handlePostRender();
            }, 0));
      }),
      (e.prototype.setLayerGroup = function (t) {
        var e = this.getLayerGroup();
        e && this.handleLayerRemove_(new Kt.GroupEvent("removelayer", e)),
          this.set(ae, t);
      }),
      (e.prototype.setSize = function (t) {
        this.set(se, t);
      }),
      (e.prototype.setTarget = function (t) {
        this.set(le, t);
      }),
      (e.prototype.setView = function (t) {
        if (!t || t instanceof Ce.default) this.set(ue, t);
        else {
          this.set(ue, new Ce.default());
          var e = this;
          t.then(function (t) {
            e.setView(new Ce.default(t));
          });
        }
      }),
      (e.prototype.updateSize = function () {
        var t = this.getTargetElement(),
          e = void 0;
        if (t) {
          var n = getComputedStyle(t),
            i =
              t.offsetWidth -
              parseFloat(n.borderLeftWidth) -
              parseFloat(n.paddingLeft) -
              parseFloat(n.paddingRight) -
              parseFloat(n.borderRightWidth),
            r =
              t.offsetHeight -
              parseFloat(n.borderTopWidth) -
              parseFloat(n.paddingTop) -
              parseFloat(n.paddingBottom) -
              parseFloat(n.borderBottomWidth);
          isNaN(i) ||
            isNaN(r) ||
            (!Zi((e = [i, r])) &&
              (t.offsetWidth || t.offsetHeight || t.getClientRects().length) &&
              console.warn(
                "No map visible because the map container's width or height are 0."
              ));
        }
        this.setSize(e), this.updateViewportSize_();
      }),
      (e.prototype.updateViewportSize_ = function () {
        var t = this.getView();
        if (t) {
          var e = void 0,
            n = getComputedStyle(this.viewport_);
          n.width &&
            n.height &&
            (e = [parseInt(n.width, 10), parseInt(n.height, 10)]),
            t.setViewportSize(e);
        }
      }),
      e
    );
  })(vt.default),
  tr = ((B = a("gn0g3")), {});
e(
  tr,
  "default",
  () => ir,
  (t) => (ir = t)
);
var er = a("fVglf"),
  nr =
    ((k = a("3xzSb")),
    (Rn = a("fVVyM")),
    (xt = a("DfnQm")),
    (function () {
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function i() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((i.prototype = n.prototype), new i()));
      };
    })()),
  ir = (function (t) {
    function e(e) {
      var n = this,
        i = e || {};
      ((n =
        t.call(this, {
          element: document.createElement("div"),
          render: i.render,
          target: i.target,
        }) || this).ulElement_ = document.createElement("ul")),
        (n.collapsed_ = void 0 === i.collapsed || i.collapsed),
        (n.userCollapsed_ = n.collapsed_),
        (n.overrideCollapsible_ = void 0 !== i.collapsible),
        (n.collapsible_ = void 0 === i.collapsible || i.collapsible),
        n.collapsible_ || (n.collapsed_ = !1);
      var r = void 0 !== i.className ? i.className : "ol-attribution",
        o = void 0 !== i.tipLabel ? i.tipLabel : "Attributions",
        a = void 0 !== i.expandClassName ? i.expandClassName : r + "-expand",
        s = void 0 !== i.collapseLabel ? i.collapseLabel : "›",
        l =
          void 0 !== i.collapseClassName
            ? i.collapseClassName
            : r + "-collapse";
      "string" == typeof s
        ? ((n.collapseLabel_ = document.createElement("span")),
          (n.collapseLabel_.textContent = s),
          (n.collapseLabel_.className = l))
        : (n.collapseLabel_ = s);
      var u = void 0 !== i.label ? i.label : "i";
      "string" == typeof u
        ? ((n.label_ = document.createElement("span")),
          (n.label_.textContent = u),
          (n.label_.className = a))
        : (n.label_ = u);
      var h = n.collapsible_ && !n.collapsed_ ? n.collapseLabel_ : n.label_;
      (n.toggleButton_ = document.createElement("button")),
        n.toggleButton_.setAttribute("type", "button"),
        n.toggleButton_.setAttribute("aria-expanded", String(!n.collapsed_)),
        (n.toggleButton_.title = o),
        n.toggleButton_.appendChild(h),
        n.toggleButton_.addEventListener(
          k.default.CLICK,
          n.handleClick_.bind(n),
          !1
        );
      var c =
          r +
          " " +
          ct +
          " " +
          pt +
          (n.collapsed_ && n.collapsible_ ? " " + ft : "") +
          (n.collapsible_ ? "" : " ol-uncollapsible"),
        p = n.element;
      return (
        (p.className = c),
        p.appendChild(n.toggleButton_),
        p.appendChild(n.ulElement_),
        (n.renderedAttributions_ = []),
        (n.renderedVisible_ = !0),
        n
      );
    }
    return (
      nr(e, t),
      (e.prototype.collectSourceAttributions_ = function (t) {
        for (
          var e = {},
            n = [],
            i = !0,
            r = t.layerStatesArray,
            o = 0,
            a = r.length;
          o < a;
          ++o
        ) {
          var s = r[o];
          if (j.inView(s, t.viewState)) {
            var l = s.layer.getSource();
            if (l) {
              var u = l.getAttributions();
              if (u) {
                var h = u(t);
                if (h)
                  if (
                    ((i = i && !1 !== l.getAttributionsCollapsible()),
                    Array.isArray(h))
                  )
                    for (var c = 0, p = h.length; c < p; ++c)
                      h[c] in e || (n.push(h[c]), (e[h[c]] = !0));
                  else h in e || (n.push(h), (e[h] = !0));
              }
            }
          }
        }
        return this.overrideCollapsible_ || this.setCollapsible(i), n;
      }),
      (e.prototype.updateElement_ = function (t) {
        if (t) {
          var e = this.collectSourceAttributions_(t),
            n = e.length > 0;
          if (
            (this.renderedVisible_ != n &&
              ((this.element.style.display = n ? "" : "none"),
              (this.renderedVisible_ = n)),
            !Rn.equals(e, this.renderedAttributions_))
          ) {
            xt.removeChildren(this.ulElement_);
            for (var i = 0, r = e.length; i < r; ++i) {
              var o = document.createElement("li");
              (o.innerHTML = e[i]), this.ulElement_.appendChild(o);
            }
            this.renderedAttributions_ = e;
          }
        } else
          this.renderedVisible_ &&
            ((this.element.style.display = "none"),
            (this.renderedVisible_ = !1));
      }),
      (e.prototype.handleClick_ = function (t) {
        t.preventDefault(),
          this.handleToggle_(),
          (this.userCollapsed_ = this.collapsed_);
      }),
      (e.prototype.handleToggle_ = function () {
        this.element.classList.toggle(ft),
          this.collapsed_
            ? xt.replaceNode(this.collapseLabel_, this.label_)
            : xt.replaceNode(this.label_, this.collapseLabel_),
          (this.collapsed_ = !this.collapsed_),
          this.toggleButton_.setAttribute(
            "aria-expanded",
            String(!this.collapsed_)
          );
      }),
      (e.prototype.getCollapsible = function () {
        return this.collapsible_;
      }),
      (e.prototype.setCollapsible = function (t) {
        this.collapsible_ !== t &&
          ((this.collapsible_ = t),
          this.element.classList.toggle("ol-uncollapsible"),
          this.userCollapsed_ && this.handleToggle_());
      }),
      (e.prototype.setCollapsed = function (t) {
        (this.userCollapsed_ = t),
          this.collapsible_ && this.collapsed_ !== t && this.handleToggle_();
      }),
      (e.prototype.getCollapsed = function () {
        return this.collapsed_;
      }),
      (e.prototype.render = function (t) {
        this.updateElement_(t.frameState);
      }),
      e
    );
  })(er.default),
  rr = ((Vt = a("cD8Qe")), {});
e(
  rr,
  "default",
  () => ar,
  (t) => (ar = t)
);
(er = a("fVglf")), (k = a("3xzSb"));
var or = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  ar = (function (t) {
    function e(e) {
      var n = this,
        i = e || {};
      n =
        t.call(this, {
          element: document.createElement("div"),
          render: i.render,
          target: i.target,
        }) || this;
      var r = void 0 !== i.className ? i.className : "ol-rotate",
        o = void 0 !== i.label ? i.label : "⇧",
        a = void 0 !== i.compassClassName ? i.compassClassName : "ol-compass";
      (n.label_ = null),
        "string" == typeof o
          ? ((n.label_ = document.createElement("span")),
            (n.label_.className = a),
            (n.label_.textContent = o))
          : ((n.label_ = o), n.label_.classList.add(a));
      var s = i.tipLabel ? i.tipLabel : "Reset rotation",
        l = document.createElement("button");
      (l.className = r + "-reset"),
        l.setAttribute("type", "button"),
        (l.title = s),
        l.appendChild(n.label_),
        l.addEventListener(k.default.CLICK, n.handleClick_.bind(n), !1);
      var u = r + " " + ct + " " + pt,
        h = n.element;
      return (
        (h.className = u),
        h.appendChild(l),
        (n.callResetNorth_ = i.resetNorth ? i.resetNorth : void 0),
        (n.duration_ = void 0 !== i.duration ? i.duration : 250),
        (n.autoHide_ = void 0 === i.autoHide || i.autoHide),
        (n.rotation_ = void 0),
        n.autoHide_ && n.element.classList.add(ht),
        n
      );
    }
    return (
      or(e, t),
      (e.prototype.handleClick_ = function (t) {
        t.preventDefault(),
          void 0 !== this.callResetNorth_
            ? this.callResetNorth_()
            : this.resetNorth_();
      }),
      (e.prototype.resetNorth_ = function () {
        var t = this.getMap().getView();
        if (t) {
          var e = t.getRotation();
          void 0 !== e &&
            (this.duration_ > 0 && e % (2 * Math.PI) != 0
              ? t.animate({ rotation: 0, duration: this.duration_, easing: Dn })
              : t.setRotation(0));
        }
      }),
      (e.prototype.render = function (t) {
        var e = t.frameState;
        if (e) {
          var n = e.viewState.rotation;
          if (n != this.rotation_) {
            var i = "rotate(" + n + "rad)";
            if (this.autoHide_) {
              var r = this.element.classList.contains(ht);
              r || 0 !== n
                ? r && 0 !== n && this.element.classList.remove(ht)
                : this.element.classList.add(ht);
            }
            this.label_.style.transform = i;
          }
          this.rotation_ = n;
        }
      }),
      e
    );
  })(er.default),
  sr = {};
e(
  sr,
  "default",
  () => ur,
  (t) => (ur = t)
);
(er = a("fVglf")), (k = a("3xzSb"));
var lr = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  ur = (function (t) {
    function e(e) {
      var n = this,
        i = e || {};
      n =
        t.call(this, {
          element: document.createElement("div"),
          target: i.target,
        }) || this;
      var r = void 0 !== i.className ? i.className : "ol-zoom",
        o = void 0 !== i.delta ? i.delta : 1,
        a = void 0 !== i.zoomInClassName ? i.zoomInClassName : r + "-in",
        s = void 0 !== i.zoomOutClassName ? i.zoomOutClassName : r + "-out",
        l = void 0 !== i.zoomInLabel ? i.zoomInLabel : "+",
        u = void 0 !== i.zoomOutLabel ? i.zoomOutLabel : "–",
        h = void 0 !== i.zoomInTipLabel ? i.zoomInTipLabel : "Zoom in",
        c = void 0 !== i.zoomOutTipLabel ? i.zoomOutTipLabel : "Zoom out",
        p = document.createElement("button");
      (p.className = a),
        p.setAttribute("type", "button"),
        (p.title = h),
        p.appendChild("string" == typeof l ? document.createTextNode(l) : l),
        p.addEventListener(k.default.CLICK, n.handleClick_.bind(n, o), !1);
      var f = document.createElement("button");
      (f.className = s),
        f.setAttribute("type", "button"),
        (f.title = c),
        f.appendChild("string" == typeof u ? document.createTextNode(u) : u),
        f.addEventListener(k.default.CLICK, n.handleClick_.bind(n, -o), !1);
      var d = r + " " + ct + " " + pt,
        g = n.element;
      return (
        (g.className = d),
        g.appendChild(p),
        g.appendChild(f),
        (n.duration_ = void 0 !== i.duration ? i.duration : 250),
        n
      );
    }
    return (
      lr(e, t),
      (e.prototype.handleClick_ = function (t, e) {
        e.preventDefault(), this.zoomByDelta_(t);
      }),
      (e.prototype.zoomByDelta_ = function (t) {
        var e = this.getMap().getView();
        if (e) {
          var n = e.getZoom();
          if (void 0 !== n) {
            var i = e.getConstrainedZoom(n + t);
            this.duration_ > 0
              ? (e.getAnimating() && e.cancelAnimations(),
                e.animate({ zoom: i, duration: this.duration_, easing: Dn }))
              : e.setZoom(i);
          }
        }
      }),
      e
    );
  })(er.default);
Vt = a("cD8Qe");
var hr = {};
e(
  hr,
  "default",
  () => vr,
  (t) => (vr = t)
);
var cr = {};
e(
  cr,
  "pan",
  () => dr,
  (t) => (dr = t)
),
  e(
    cr,
    "zoomByDelta",
    () => gr,
    (t) => (gr = t)
  ),
  e(
    cr,
    "default",
    () => _r,
    (t) => (_r = t)
  );
vt = a("fFFY7");
var pr = "active",
  fr = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })();
function dr(t, e, n) {
  var i = t.getCenterInternal();
  if (i) {
    var r = [i[0] + e[0], i[1] + e[1]];
    t.animateInternal({
      duration: void 0 !== n ? n : 250,
      easing: Nn,
      center: t.getConstrainedCenter(r),
    });
  }
}
function gr(t, e, n, i) {
  var r = t.getZoom();
  if (void 0 !== r) {
    var o = t.getConstrainedZoom(r + e),
      a = t.getResolutionForZoom(o);
    t.getAnimating() && t.cancelAnimations(),
      t.animate({
        resolution: a,
        anchor: n,
        duration: void 0 !== i ? i : 250,
        easing: Dn,
      });
  }
}
var _r = (function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return (
        n.on,
        n.once,
        n.un,
        e && e.handleEvent && (n.handleEvent = e.handleEvent),
        (n.map_ = null),
        n.setActive(!0),
        n
      );
    }
    return (
      fr(e, t),
      (e.prototype.getActive = function () {
        return this.get(pr);
      }),
      (e.prototype.getMap = function () {
        return this.map_;
      }),
      (e.prototype.handleEvent = function (t) {
        return !0;
      }),
      (e.prototype.setActive = function (t) {
        this.set(pr, t);
      }),
      (e.prototype.setMap = function (t) {
        this.map_ = t;
      }),
      e
    );
  })(vt.default),
  yr = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  vr = (function (t) {
    function e(e) {
      var n = t.call(this) || this,
        i = e || {};
      return (
        (n.delta_ = i.delta ? i.delta : 1),
        (n.duration_ = void 0 !== i.duration ? i.duration : 250),
        n
      );
    }
    return (
      yr(e, t),
      (e.prototype.handleEvent = function (t) {
        var e = !1;
        if (t.type == te.DBLCLICK) {
          var n = t.originalEvent,
            i = t.map,
            r = t.coordinate,
            o = n.shiftKey ? -this.delta_ : this.delta_,
            a = i.getView();
          cr.zoomByDelta(a, o, r, this.duration_), n.preventDefault(), (e = !0);
        }
        return !e;
      }),
      e
    );
  })(cr.default),
  mr = {};
e(
  mr,
  "default",
  () => jr,
  (t) => (jr = t)
);
var xr = {};
e(
  xr,
  "centroid",
  () => Er,
  (t) => (Er = t)
),
  e(
    xr,
    "default",
    () => Sr,
    (t) => (Sr = t)
  );
B = a("gn0g3");
var Cr = (function () {
  var t = function (e, n) {
    return (t =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      })(e, n);
  };
  return function (e, n) {
    if ("function" != typeof n && null !== n)
      throw new TypeError(
        "Class extends value " + String(n) + " is not a constructor or null"
      );
    function i() {
      this.constructor = e;
    }
    t(e, n),
      (e.prototype =
        null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
  };
})();
function Er(t) {
  for (var e = t.length, n = 0, i = 0, r = 0; r < e; r++)
    (n += t[r].clientX), (i += t[r].clientY);
  return [n / e, i / e];
}
var Sr = (function (t) {
  function e(e) {
    var n = this,
      i = e || {};
    return (
      (n = t.call(this, i) || this),
      i.handleDownEvent && (n.handleDownEvent = i.handleDownEvent),
      i.handleDragEvent && (n.handleDragEvent = i.handleDragEvent),
      i.handleMoveEvent && (n.handleMoveEvent = i.handleMoveEvent),
      i.handleUpEvent && (n.handleUpEvent = i.handleUpEvent),
      i.stopDown && (n.stopDown = i.stopDown),
      (n.handlingDownUpSequence = !1),
      (n.trackedPointers_ = {}),
      (n.targetPointers = []),
      n
    );
  }
  return (
    Cr(e, t),
    (e.prototype.getPointerCount = function () {
      return this.targetPointers.length;
    }),
    (e.prototype.handleDownEvent = function (t) {
      return !1;
    }),
    (e.prototype.handleDragEvent = function (t) {}),
    (e.prototype.handleEvent = function (t) {
      if (!t.originalEvent) return !0;
      var e = !1;
      if ((this.updateTrackedPointers_(t), this.handlingDownUpSequence)) {
        if (t.type == te.POINTERDRAG)
          this.handleDragEvent(t), t.originalEvent.preventDefault();
        else if (t.type == te.POINTERUP) {
          var n = this.handleUpEvent(t);
          this.handlingDownUpSequence = n && this.targetPointers.length > 0;
        }
      } else if (t.type == te.POINTERDOWN) {
        var i = this.handleDownEvent(t);
        (this.handlingDownUpSequence = i), (e = this.stopDown(i));
      } else t.type == te.POINTERMOVE && this.handleMoveEvent(t);
      return !e;
    }),
    (e.prototype.handleMoveEvent = function (t) {}),
    (e.prototype.handleUpEvent = function (t) {
      return !1;
    }),
    (e.prototype.stopDown = function (t) {
      return t;
    }),
    (e.prototype.updateTrackedPointers_ = function (t) {
      if (
        (function (t) {
          var e = t.type;
          return (
            e === te.POINTERDOWN || e === te.POINTERDRAG || e === te.POINTERUP
          );
        })(t)
      ) {
        var e = t.originalEvent,
          n = e.pointerId.toString();
        t.type == te.POINTERUP
          ? delete this.trackedPointers_[n]
          : (t.type == te.POINTERDOWN || n in this.trackedPointers_) &&
            (this.trackedPointers_[n] = e),
          (this.targetPointers = B.getValues(this.trackedPointers_));
      }
    }),
    e
  );
})(cr.default);
(p = a("6wUzV")), (p = a("6wUzV")), (d = a("8UoiJ")), (g = a("4Cz58"));
function wr(t) {
  var e = arguments;
  return function (t) {
    for (var n = !0, i = 0, r = e.length; i < r && (n = n && e[i](t)); ++i);
    return n;
  };
}
var Or = function (t) {
    var e = t.originalEvent;
    return e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey;
  },
  Tr = function (t) {
    return (
      !t.map.getTargetElement().hasAttribute("tabindex") ||
      (function (t) {
        var e = t.map.getTargetElement(),
          n = t.map.getOwnerDocument().activeElement;
        return e.contains(n);
      })(t)
    );
  },
  br = p.TRUE,
  Rr = function (t) {
    var e = t.originalEvent;
    return 0 == e.button && !(d.WEBKIT && d.MAC && e.ctrlKey);
  },
  Ir =
    (p.FALSE,
    function (t) {
      var e = t.originalEvent;
      return !e.altKey && !(e.metaKey || e.ctrlKey) && !e.shiftKey;
    }),
  Pr = function (t) {
    var e = t.originalEvent;
    return !e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey;
  },
  Lr = function (t) {
    var e = t.originalEvent.target.tagName;
    return "INPUT" !== e && "SELECT" !== e && "TEXTAREA" !== e;
  },
  Mr = function (t) {
    var e = t.originalEvent;
    return g.assert(void 0 !== e, 56), "mouse" == e.pointerType;
  },
  Fr = function (t) {
    var e = t.originalEvent;
    return g.assert(void 0 !== e, 56), e.isPrimary && 0 === e.button;
  },
  Ar = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Dr = (function (t) {
    function e(e) {
      var n = t.call(this, { stopDown: p.FALSE }) || this,
        i = e || {};
      (n.kinetic_ = i.kinetic),
        (n.lastCentroid = null),
        n.lastPointersCount_,
        (n.panning_ = !1);
      var r = i.condition ? i.condition : wr(Ir, Fr);
      return (
        (n.condition_ = i.onFocusOnly ? wr(Tr, r) : r), (n.noKinetic_ = !1), n
      );
    }
    return (
      Ar(e, t),
      (e.prototype.handleDragEvent = function (t) {
        this.panning_ ||
          ((this.panning_ = !0), this.getMap().getView().beginInteraction());
        var e = this.targetPointers,
          n = xr.centroid(e);
        if (e.length == this.lastPointersCount_) {
          if (
            (this.kinetic_ && this.kinetic_.update(n[0], n[1]),
            this.lastCentroid)
          ) {
            var i = [this.lastCentroid[0] - n[0], n[1] - this.lastCentroid[1]],
              r = t.map.getView();
            !(function (t, e) {
              (t[0] *= e), (t[1] *= e);
            })(i, r.getResolution()),
              $(i, r.getRotation()),
              r.adjustCenterInternal(i);
          }
        } else this.kinetic_ && this.kinetic_.begin();
        (this.lastCentroid = n),
          (this.lastPointersCount_ = e.length),
          t.originalEvent.preventDefault();
      }),
      (e.prototype.handleUpEvent = function (t) {
        var e = t.map,
          n = e.getView();
        if (0 === this.targetPointers.length) {
          if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
            var i = this.kinetic_.getDistance(),
              r = this.kinetic_.getAngle(),
              o = n.getCenterInternal(),
              a = e.getPixelFromCoordinateInternal(o),
              s = e.getCoordinateFromPixelInternal([
                a[0] - i * Math.cos(r),
                a[1] - i * Math.sin(r),
              ]);
            n.animateInternal({
              center: n.getConstrainedCenter(s),
              duration: 500,
              easing: Dn,
            });
          }
          return (
            this.panning_ && ((this.panning_ = !1), n.endInteraction()), !1
          );
        }
        return (
          this.kinetic_ && this.kinetic_.begin(), (this.lastCentroid = null), !0
        );
      }),
      (e.prototype.handleDownEvent = function (t) {
        if (this.targetPointers.length > 0 && this.condition_(t)) {
          var e = t.map.getView();
          return (
            (this.lastCentroid = null),
            e.getAnimating() && e.cancelAnimations(),
            this.kinetic_ && this.kinetic_.begin(),
            (this.noKinetic_ = this.targetPointers.length > 1),
            !0
          );
        }
        return !1;
      }),
      e
    );
  })(xr.default),
  jr = Dr,
  Nr = {};
e(
  Nr,
  "default",
  () => kr,
  (t) => (kr = t)
);
p = a("6wUzV");
var Gr = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  kr = (function (t) {
    function e(e) {
      var n = this,
        i = e || {};
      return (
        ((n = t.call(this, { stopDown: p.FALSE }) || this).condition_ =
          i.condition ? i.condition : Or),
        (n.lastAngle_ = void 0),
        (n.duration_ = void 0 !== i.duration ? i.duration : 250),
        n
      );
    }
    return (
      Gr(e, t),
      (e.prototype.handleDragEvent = function (t) {
        if (Mr(t)) {
          var e = t.map,
            n = e.getView();
          if (n.getConstraints().rotation !== Mn) {
            var i = e.getSize(),
              r = t.pixel,
              o = Math.atan2(i[1] / 2 - r[1], r[0] - i[0] / 2);
            if (void 0 !== this.lastAngle_) {
              var a = o - this.lastAngle_;
              n.adjustRotationInternal(-a);
            }
            this.lastAngle_ = o;
          }
        }
      }),
      (e.prototype.handleUpEvent = function (t) {
        return !Mr(t) || (t.map.getView().endInteraction(this.duration_), !1);
      }),
      (e.prototype.handleDownEvent = function (t) {
        return (
          !!Mr(t) &&
          !(!Rr(t) || !this.condition_(t)) &&
          (t.map.getView().beginInteraction(), (this.lastAngle_ = void 0), !0)
        );
      }),
      e
    );
  })(xr.default),
  zr = {};
e(
  zr,
  "default",
  () => $r,
  (t) => ($r = t)
);
var Ur = {};
e(
  Ur,
  "DragBoxEvent",
  () => qr,
  (t) => (qr = t)
),
  e(
    Ur,
    "default",
    () => Jr,
    (t) => (Jr = t)
  );
st = a("f18Q2");
var Xr = {};
e(
  Xr,
  "default",
  () => Vr,
  (t) => (Vr = t)
);
c = a("4kyFN");
var Yr = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Vr = (function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return (
        (n.geometry_ = null),
        (n.element_ = document.createElement("div")),
        (n.element_.style.position = "absolute"),
        (n.element_.style.pointerEvents = "auto"),
        (n.element_.className = "ol-box " + e),
        (n.map_ = null),
        (n.startPixel_ = null),
        (n.endPixel_ = null),
        n
      );
    }
    return (
      Yr(e, t),
      (e.prototype.disposeInternal = function () {
        this.setMap(null);
      }),
      (e.prototype.render_ = function () {
        var t = this.startPixel_,
          e = this.endPixel_,
          n = "px",
          i = this.element_.style;
        (i.left = Math.min(t[0], e[0]) + n),
          (i.top = Math.min(t[1], e[1]) + n),
          (i.width = Math.abs(e[0] - t[0]) + n),
          (i.height = Math.abs(e[1] - t[1]) + n);
      }),
      (e.prototype.setMap = function (t) {
        if (this.map_) {
          this.map_.getOverlayContainer().removeChild(this.element_);
          var e = this.element_.style;
          (e.left = "inherit"),
            (e.top = "inherit"),
            (e.width = "inherit"),
            (e.height = "inherit");
        }
        (this.map_ = t),
          this.map_ &&
            this.map_.getOverlayContainer().appendChild(this.element_);
      }),
      (e.prototype.setPixels = function (t, e) {
        (this.startPixel_ = t),
          (this.endPixel_ = e),
          this.createOrUpdateGeometry(),
          this.render_();
      }),
      (e.prototype.createOrUpdateGeometry = function () {
        var t = this.startPixel_,
          e = this.endPixel_,
          n = [t, [t[0], e[1]], e, [e[0], t[1]]].map(
            this.map_.getCoordinateFromPixelInternal,
            this.map_
          );
        (n[4] = n[0].slice()),
          this.geometry_
            ? this.geometry_.setCoordinates([n])
            : (this.geometry_ = new Gn.default([n]));
      }),
      (e.prototype.getGeometry = function () {
        return this.geometry_;
      }),
      e
    );
  })(c.default),
  Wr = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Kr = "boxstart",
  Br = "boxdrag",
  Zr = "boxend",
  Hr = "boxcancel",
  qr = (function (t) {
    function e(e, n, i) {
      var r = t.call(this, e) || this;
      return (r.coordinate = n), (r.mapBrowserEvent = i), r;
    }
    return Wr(e, t), e;
  })(st.default),
  Jr = (function (t) {
    function e(e) {
      var n = t.call(this) || this;
      n.on, n.once, n.un;
      var i = e || {};
      return (
        (n.box_ = new Xr.default(i.className || "ol-dragbox")),
        (n.minArea_ = void 0 !== i.minArea ? i.minArea : 64),
        i.onBoxEnd && (n.onBoxEnd = i.onBoxEnd),
        (n.startPixel_ = null),
        (n.condition_ = i.condition ? i.condition : Rr),
        (n.boxEndCondition_ = i.boxEndCondition
          ? i.boxEndCondition
          : n.defaultBoxEndCondition),
        n
      );
    }
    return (
      Wr(e, t),
      (e.prototype.defaultBoxEndCondition = function (t, e, n) {
        var i = n[0] - e[0],
          r = n[1] - e[1];
        return i * i + r * r >= this.minArea_;
      }),
      (e.prototype.getGeometry = function () {
        return this.box_.getGeometry();
      }),
      (e.prototype.handleDragEvent = function (t) {
        this.box_.setPixels(this.startPixel_, t.pixel),
          this.dispatchEvent(new qr(Br, t.coordinate, t));
      }),
      (e.prototype.handleUpEvent = function (t) {
        this.box_.setMap(null);
        var e = this.boxEndCondition_(t, this.startPixel_, t.pixel);
        return (
          e && this.onBoxEnd(t),
          this.dispatchEvent(new qr(e ? Zr : Hr, t.coordinate, t)),
          !1
        );
      }),
      (e.prototype.handleDownEvent = function (t) {
        return (
          !!this.condition_(t) &&
          ((this.startPixel_ = t.pixel),
          this.box_.setMap(t.map),
          this.box_.setPixels(this.startPixel_, this.startPixel_),
          this.dispatchEvent(new qr(Kr, t.coordinate, t)),
          !0)
        );
      }),
      (e.prototype.onBoxEnd = function (t) {}),
      e
    );
  })(xr.default),
  Qr = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  $r = (function (t) {
    function e(e) {
      var n = this,
        i = e || {},
        r = i.condition ? i.condition : Pr;
      return (
        ((n =
          t.call(this, {
            condition: r,
            className: i.className || "ol-dragzoom",
            minArea: i.minArea,
          }) || this).duration_ = void 0 !== i.duration ? i.duration : 200),
        (n.out_ = void 0 !== i.out && i.out),
        n
      );
    }
    return (
      Qr(e, t),
      (e.prototype.onBoxEnd = function (t) {
        var e = this.getMap().getView(),
          n = this.getGeometry();
        if (this.out_) {
          var i = e.rotatedExtentForGeometry(n),
            r = e.getResolutionForExtentInternal(i),
            o = e.getResolution() / r;
          (n = n.clone()).scale(o * o);
        }
        e.fitInternal(n, { duration: this.duration_, easing: Dn });
      }),
      e
    );
  })(Ur.default),
  to = {};
e(
  to,
  "default",
  () => ao,
  (t) => (ao = t)
);
k = a("3xzSb");
var eo = 37,
  no = 38,
  io = 39,
  ro = 40,
  oo = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  ao = (function (t) {
    function e(e) {
      var n = t.call(this) || this,
        i = e || {};
      return (
        (n.defaultCondition_ = function (t) {
          return Ir(t) && Lr(t);
        }),
        (n.condition_ =
          void 0 !== i.condition ? i.condition : n.defaultCondition_),
        (n.duration_ = void 0 !== i.duration ? i.duration : 100),
        (n.pixelDelta_ = void 0 !== i.pixelDelta ? i.pixelDelta : 128),
        n
      );
    }
    return (
      oo(e, t),
      (e.prototype.handleEvent = function (t) {
        var e = !1;
        if (t.type == k.default.KEYDOWN) {
          var n = t.originalEvent,
            i = n.keyCode;
          if (
            this.condition_(t) &&
            (i == ro || i == eo || i == io || i == no)
          ) {
            var r = t.map.getView(),
              o = r.getResolution() * this.pixelDelta_,
              a = 0,
              s = 0;
            i == ro
              ? (s = -o)
              : i == eo
              ? (a = -o)
              : i == io
              ? (a = o)
              : (s = o);
            var l = [a, s];
            $(l, r.getRotation()),
              cr.pan(r, l, this.duration_),
              n.preventDefault(),
              (e = !0);
          }
        }
        return !e;
      }),
      e
    );
  })(cr.default),
  so = {};
e(
  so,
  "default",
  () => uo,
  (t) => (uo = t)
);
k = a("3xzSb");
var lo = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  uo = (function (t) {
    function e(e) {
      var n = t.call(this) || this,
        i = e || {};
      return (
        (n.condition_ = i.condition ? i.condition : Lr),
        (n.delta_ = i.delta ? i.delta : 1),
        (n.duration_ = void 0 !== i.duration ? i.duration : 100),
        n
      );
    }
    return (
      lo(e, t),
      (e.prototype.handleEvent = function (t) {
        var e = !1;
        if (t.type == k.default.KEYDOWN || t.type == k.default.KEYPRESS) {
          var n = t.originalEvent,
            i = n.charCode;
          if (
            this.condition_(t) &&
            (i == "+".charCodeAt(0) || i == "-".charCodeAt(0))
          ) {
            var r = t.map,
              o = i == "+".charCodeAt(0) ? this.delta_ : -this.delta_,
              a = r.getView();
            cr.zoomByDelta(a, o, void 0, this.duration_),
              n.preventDefault(),
              (e = !0);
          }
        }
        return !e;
      }),
      e
    );
  })(cr.default),
  ho = (function () {
    function t(t, e, n) {
      (this.decay_ = t),
        (this.minVelocity_ = e),
        (this.delay_ = n),
        (this.points_ = []),
        (this.angle_ = 0),
        (this.initialVelocity_ = 0);
    }
    return (
      (t.prototype.begin = function () {
        (this.points_.length = 0),
          (this.angle_ = 0),
          (this.initialVelocity_ = 0);
      }),
      (t.prototype.update = function (t, e) {
        this.points_.push(t, e, Date.now());
      }),
      (t.prototype.end = function () {
        if (this.points_.length < 6) return !1;
        var t = Date.now() - this.delay_,
          e = this.points_.length - 3;
        if (this.points_[e + 2] < t) return !1;
        for (var n = e - 3; n > 0 && this.points_[n + 2] > t; ) n -= 3;
        var i = this.points_[e + 2] - this.points_[n + 2];
        if (i < 1e3 / 60) return !1;
        var r = this.points_[e] - this.points_[n],
          o = this.points_[e + 1] - this.points_[n + 1];
        return (
          (this.angle_ = Math.atan2(o, r)),
          (this.initialVelocity_ = Math.sqrt(r * r + o * o) / i),
          this.initialVelocity_ > this.minVelocity_
        );
      }),
      (t.prototype.getDistance = function () {
        return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
      }),
      (t.prototype.getAngle = function () {
        return this.angle_;
      }),
      t
    );
  })(),
  co = {};
e(
  co,
  "Mode",
  () => fo,
  (t) => (fo = t)
),
  e(
    co,
    "default",
    () => go,
    (t) => (go = t)
  );
(k = a("3xzSb")), (d = a("8UoiJ")), (E = a("9byFX"));
var po = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  fo = { TRACKPAD: "trackpad", WHEEL: "wheel" },
  go = (function (t) {
    function e(e) {
      var n = this,
        i = e || {};
      ((n = t.call(this, i) || this).totalDelta_ = 0),
        (n.lastDelta_ = 0),
        (n.maxDelta_ = void 0 !== i.maxDelta ? i.maxDelta : 1),
        (n.duration_ = void 0 !== i.duration ? i.duration : 250),
        (n.timeout_ = void 0 !== i.timeout ? i.timeout : 80),
        (n.useAnchor_ = void 0 === i.useAnchor || i.useAnchor),
        (n.constrainResolution_ =
          void 0 !== i.constrainResolution && i.constrainResolution);
      var r = i.condition ? i.condition : br;
      return (
        (n.condition_ = i.onFocusOnly ? wr(Tr, r) : r),
        (n.lastAnchor_ = null),
        (n.startTime_ = void 0),
        n.timeoutId_,
        (n.mode_ = void 0),
        (n.trackpadEventGap_ = 400),
        n.trackpadTimeoutId_,
        (n.deltaPerZoom_ = 300),
        n
      );
    }
    return (
      po(e, t),
      (e.prototype.endInteraction_ = function () {
        (this.trackpadTimeoutId_ = void 0),
          this.getMap()
            .getView()
            .endInteraction(
              void 0,
              this.lastDelta_ ? (this.lastDelta_ > 0 ? 1 : -1) : 0,
              this.lastAnchor_
            );
      }),
      (e.prototype.handleEvent = function (t) {
        if (!this.condition_(t)) return !0;
        if (t.type !== k.default.WHEEL) return !0;
        var e,
          n = t.map,
          i = t.originalEvent;
        if (
          (i.preventDefault(),
          this.useAnchor_ && (this.lastAnchor_ = t.coordinate),
          t.type == k.default.WHEEL &&
            ((e = i.deltaY),
            d.FIREFOX &&
              i.deltaMode === WheelEvent.DOM_DELTA_PIXEL &&
              (e /= d.DEVICE_PIXEL_RATIO),
            i.deltaMode === WheelEvent.DOM_DELTA_LINE && (e *= 40)),
          0 === e)
        )
          return !1;
        this.lastDelta_ = e;
        var r = Date.now();
        void 0 === this.startTime_ && (this.startTime_ = r),
          (!this.mode_ || r - this.startTime_ > this.trackpadEventGap_) &&
            (this.mode_ = Math.abs(e) < 4 ? fo.TRACKPAD : fo.WHEEL);
        var o = n.getView();
        if (
          this.mode_ === fo.TRACKPAD &&
          !o.getConstrainResolution() &&
          !this.constrainResolution_
        )
          return (
            this.trackpadTimeoutId_
              ? clearTimeout(this.trackpadTimeoutId_)
              : (o.getAnimating() && o.cancelAnimations(),
                o.beginInteraction()),
            (this.trackpadTimeoutId_ = setTimeout(
              this.endInteraction_.bind(this),
              this.timeout_
            )),
            o.adjustZoom(-e / this.deltaPerZoom_, this.lastAnchor_),
            (this.startTime_ = r),
            !1
          );
        this.totalDelta_ += e;
        var a = Math.max(this.timeout_ - (r - this.startTime_), 0);
        return (
          clearTimeout(this.timeoutId_),
          (this.timeoutId_ = setTimeout(
            this.handleWheelZoom_.bind(this, n),
            a
          )),
          !1
        );
      }),
      (e.prototype.handleWheelZoom_ = function (t) {
        var e = t.getView();
        e.getAnimating() && e.cancelAnimations();
        var n =
          -E.clamp(
            this.totalDelta_,
            -this.maxDelta_ * this.deltaPerZoom_,
            this.maxDelta_ * this.deltaPerZoom_
          ) / this.deltaPerZoom_;
        (e.getConstrainResolution() || this.constrainResolution_) &&
          (n = n ? (n > 0 ? 1 : -1) : 0),
          cr.zoomByDelta(e, n, this.lastAnchor_, this.duration_),
          (this.mode_ = void 0),
          (this.totalDelta_ = 0),
          (this.lastAnchor_ = null),
          (this.startTime_ = void 0),
          (this.timeoutId_ = void 0);
      }),
      (e.prototype.setMouseAnchor = function (t) {
        (this.useAnchor_ = t), t || (this.lastAnchor_ = null);
      }),
      e
    );
  })(cr.default),
  _o = {};
e(
  _o,
  "default",
  () => vo,
  (t) => (vo = t)
);
p = a("6wUzV");
var yo = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  vo = (function (t) {
    function e(e) {
      var n = this,
        i = e || {},
        r = i;
      return (
        r.stopDown || (r.stopDown = p.FALSE),
        ((n = t.call(this, r) || this).anchor_ = null),
        (n.lastAngle_ = void 0),
        (n.rotating_ = !1),
        (n.rotationDelta_ = 0),
        (n.threshold_ = void 0 !== i.threshold ? i.threshold : 0.3),
        (n.duration_ = void 0 !== i.duration ? i.duration : 250),
        n
      );
    }
    return (
      yo(e, t),
      (e.prototype.handleDragEvent = function (t) {
        var e = 0,
          n = this.targetPointers[0],
          i = this.targetPointers[1],
          r = Math.atan2(i.clientY - n.clientY, i.clientX - n.clientX);
        if (void 0 !== this.lastAngle_) {
          var o = r - this.lastAngle_;
          (this.rotationDelta_ += o),
            !this.rotating_ &&
              Math.abs(this.rotationDelta_) > this.threshold_ &&
              (this.rotating_ = !0),
            (e = o);
        }
        this.lastAngle_ = r;
        var a = t.map,
          s = a.getView();
        if (s.getConstraints().rotation !== Mn) {
          var l = a.getViewport().getBoundingClientRect(),
            u = xr.centroid(this.targetPointers);
          (u[0] -= l.left),
            (u[1] -= l.top),
            (this.anchor_ = a.getCoordinateFromPixelInternal(u)),
            this.rotating_ &&
              (a.render(), s.adjustRotationInternal(e, this.anchor_));
        }
      }),
      (e.prototype.handleUpEvent = function (t) {
        return (
          !(this.targetPointers.length < 2) ||
          (t.map.getView().endInteraction(this.duration_), !1)
        );
      }),
      (e.prototype.handleDownEvent = function (t) {
        if (this.targetPointers.length >= 2) {
          var e = t.map;
          return (
            (this.anchor_ = null),
            (this.lastAngle_ = void 0),
            (this.rotating_ = !1),
            (this.rotationDelta_ = 0),
            this.handlingDownUpSequence || e.getView().beginInteraction(),
            !0
          );
        }
        return !1;
      }),
      e
    );
  })(xr.default),
  mo = {};
e(
  mo,
  "default",
  () => Co,
  (t) => (Co = t)
);
p = a("6wUzV");
var xo = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Co = (function (t) {
    function e(e) {
      var n = this,
        i = e || {},
        r = i;
      return (
        r.stopDown || (r.stopDown = p.FALSE),
        ((n = t.call(this, r) || this).anchor_ = null),
        (n.duration_ = void 0 !== i.duration ? i.duration : 400),
        (n.lastDistance_ = void 0),
        (n.lastScaleDelta_ = 1),
        n
      );
    }
    return (
      xo(e, t),
      (e.prototype.handleDragEvent = function (t) {
        var e = 1,
          n = this.targetPointers[0],
          i = this.targetPointers[1],
          r = n.clientX - i.clientX,
          o = n.clientY - i.clientY,
          a = Math.sqrt(r * r + o * o);
        void 0 !== this.lastDistance_ && (e = this.lastDistance_ / a),
          (this.lastDistance_ = a);
        var s = t.map,
          l = s.getView();
        1 != e && (this.lastScaleDelta_ = e);
        var u = s.getViewport().getBoundingClientRect(),
          h = xr.centroid(this.targetPointers);
        (h[0] -= u.left),
          (h[1] -= u.top),
          (this.anchor_ = s.getCoordinateFromPixelInternal(h)),
          s.render(),
          l.adjustResolutionInternal(e, this.anchor_);
      }),
      (e.prototype.handleUpEvent = function (t) {
        if (this.targetPointers.length < 2) {
          var e = t.map.getView(),
            n = this.lastScaleDelta_ > 1 ? 1 : -1;
          return e.endInteraction(this.duration_, n), !1;
        }
        return !0;
      }),
      (e.prototype.handleDownEvent = function (t) {
        if (this.targetPointers.length >= 2) {
          var e = t.map;
          return (
            (this.anchor_ = null),
            (this.lastDistance_ = void 0),
            (this.lastScaleDelta_ = 1),
            this.handlingDownUpSequence || e.getView().beginInteraction(),
            !0
          );
        }
        return !1;
      }),
      e
    );
  })(xr.default);
var Eo = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  So = (function (t) {
    function e(e) {
      return (
        (e = B.assign({}, e)).controls ||
          (e.controls = (function (t) {
            var e = t || {},
              n = new Vt.default();
            return (
              (void 0 === e.zoom || e.zoom) &&
                n.push(new sr.default(e.zoomOptions)),
              (void 0 === e.rotate || e.rotate) &&
                n.push(new rr.default(e.rotateOptions)),
              (void 0 === e.attribution || e.attribution) &&
                n.push(new tr.default(e.attributionOptions)),
              n
            );
          })()),
        e.interactions ||
          (e.interactions = (function (t) {
            var e = t || {},
              n = new Vt.default(),
              i = new ho(-0.005, 0.05, 100);
            return (
              (void 0 === e.altShiftDragRotate || e.altShiftDragRotate) &&
                n.push(new Nr.default()),
              (void 0 === e.doubleClickZoom || e.doubleClickZoom) &&
                n.push(
                  new hr.default({
                    delta: e.zoomDelta,
                    duration: e.zoomDuration,
                  })
                ),
              (void 0 === e.dragPan || e.dragPan) &&
                n.push(
                  new mr.default({ onFocusOnly: e.onFocusOnly, kinetic: i })
                ),
              (void 0 === e.pinchRotate || e.pinchRotate) &&
                n.push(new _o.default()),
              (void 0 === e.pinchZoom || e.pinchZoom) &&
                n.push(new mo.default({ duration: e.zoomDuration })),
              (void 0 === e.keyboard || e.keyboard) &&
                (n.push(new to.default()),
                n.push(
                  new so.default({
                    delta: e.zoomDelta,
                    duration: e.zoomDuration,
                  })
                )),
              (void 0 === e.mouseWheelZoom || e.mouseWheelZoom) &&
                n.push(
                  new co.default({
                    onFocusOnly: e.onFocusOnly,
                    duration: e.zoomDuration,
                  })
                ),
              (void 0 === e.shiftDragZoom || e.shiftDragZoom) &&
                n.push(new zr.default({ duration: e.zoomDuration })),
              n
            );
          })({ onFocusOnly: !0 })),
        t.call(this, e) || this
      );
    }
    return (
      Eo(e, t),
      (e.prototype.createRenderer = function () {
        return new l.default(this);
      }),
      e
    );
  })(Yt.default),
  wo = {};
e(
  wo,
  "default",
  () => Bo,
  (t) => (Bo = t)
);
var Oo = {};
e(
  Oo,
  "default",
  () => bo,
  (t) => (bo = t)
);
var To = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  bo = (function (t) {
    function e(e) {
      var n = e || {};
      return t.call(this, n) || this;
    }
    return To(e, t), e;
  })(j.default),
  Ro = {};
e(
  Ro,
  "default",
  () => Wo,
  (t) => (Wo = t)
);
var Io = {};
e(
  Io,
  "default",
  () => Uo,
  (t) => (Uo = t)
);
var Po = {};
e(
  Po,
  "default",
  () => Go,
  (t) => (Go = t)
);
k = a("3xzSb");
var Lo = 0,
  Mo = 1,
  Fo = 2,
  Ao = 3,
  Do = 4,
  jo = a("2FcER"),
  No =
    ((K = a("d8cxx")),
    (f = a("9iPUS")),
    (function () {
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function i() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((i.prototype = n.prototype), new i()));
      };
    })()),
  Go = (function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return (
        (n.ready = !0),
        (n.boundHandleImageChange_ = n.handleImageChange_.bind(n)),
        (n.layer_ = e),
        (n.declutterExecutorGroup = null),
        n
      );
    }
    return (
      No(e, t),
      (e.prototype.getFeatures = function (t) {
        return f.abstract();
      }),
      (e.prototype.getData = function (t) {
        return null;
      }),
      (e.prototype.prepareFrame = function (t) {
        return f.abstract();
      }),
      (e.prototype.renderFrame = function (t, e) {
        return f.abstract();
      }),
      (e.prototype.loadedTileCallback = function (t, e, n) {
        t[e] || (t[e] = {}), (t[e][n.tileCoord.toString()] = n);
      }),
      (e.prototype.createLoadedTileFinder = function (t, e, n) {
        return function (i, r) {
          var o = this.loadedTileCallback.bind(this, n, i);
          return t.forEachLoadedTile(e, i, r, o);
        }.bind(this);
      }),
      (e.prototype.forEachFeatureAtCoordinate = function (t, e, n, i, r) {}),
      (e.prototype.getDataAtPixel = function (t, e, n) {
        return null;
      }),
      (e.prototype.getLayer = function () {
        return this.layer_;
      }),
      (e.prototype.handleFontsChanged = function () {}),
      (e.prototype.handleImageChange_ = function (t) {
        t.target.getState() === Fo && this.renderIfReadyAndVisible();
      }),
      (e.prototype.loadImage = function (t) {
        var e = t.getState();
        return (
          e != Fo &&
            e != Ao &&
            t.addEventListener(k.default.CHANGE, this.boundHandleImageChange_),
          e == Lo && (t.load(), (e = t.getState())),
          e == Fo
        );
      }),
      (e.prototype.renderIfReadyAndVisible = function () {
        var t = this.getLayer();
        t.getVisible() && t.getSourceState() == K.default.READY && t.changed();
      }),
      (e.prototype.disposeInternal = function () {
        delete this.layer_, t.prototype.disposeInternal.call(this);
      }),
      e
    );
  })(jo.default),
  ko =
    ((C = a("9pD6L")),
    (xt = a("DfnQm")),
    (Rn = a("fVVyM")),
    (function () {
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function i() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((i.prototype = n.prototype), new i()));
      };
    })()),
  zo = null;
var Uo = (function (t) {
    function e(e) {
      var n = t.call(this, e) || this;
      return (
        (n.container = null),
        n.renderedResolution,
        (n.tempTransform = [1, 0, 0, 1, 0, 0]),
        (n.pixelTransform = [1, 0, 0, 1, 0, 0]),
        (n.inversePixelTransform = [1, 0, 0, 1, 0, 0]),
        (n.context = null),
        (n.containerReused = !1),
        (n.pixelContext_ = null),
        (n.frameState = null),
        n
      );
    }
    return (
      ko(e, t),
      (e.prototype.getImageData = function (t, e, n) {
        var i, r;
        zo ||
          (((i = document.createElement("canvas")).width = 1),
          (i.height = 1),
          (zo = i.getContext("2d"))),
          zo.clearRect(0, 0, 1, 1);
        try {
          zo.drawImage(t, e, n, 1, 1, 0, 0, 1, 1),
            (r = zo.getImageData(0, 0, 1, 1).data);
        } catch (t) {
          return null;
        }
        return r;
      }),
      (e.prototype.getBackground = function (t) {
        var e = this.getLayer().getBackground();
        return (
          "function" == typeof e && (e = e(t.viewState.resolution)), e || void 0
        );
      }),
      (e.prototype.useContainer = function (t, e, n, i) {
        var r,
          o,
          a = this.getLayer().getClassName();
        t &&
          t.className === a &&
          "" === t.style.opacity &&
          1 === n &&
          (!i ||
            (t.style.backgroundColor &&
              Rn.equals(P(t.style.backgroundColor), P(i)))) &&
          (l = t.firstElementChild) instanceof HTMLCanvasElement &&
          (o = l.getContext("2d"));
        if (
          (o && o.canvas.style.transform === e
            ? ((this.container = t),
              (this.context = o),
              (this.containerReused = !0))
            : this.containerReused &&
              ((this.container = null),
              (this.context = null),
              (this.containerReused = !1)),
          !this.container)
        ) {
          (r = document.createElement("div")).className = a;
          var s = r.style;
          (s.position = "absolute"),
            (s.width = "100%"),
            (s.height = "100%"),
            i && (s.backgroundColor = i);
          var l = (o = xt.createCanvasContext2D()).canvas;
          r.appendChild(l),
            ((s = l.style).position = "absolute"),
            (s.left = "0"),
            (s.transformOrigin = "top left"),
            (this.container = r),
            (this.context = o);
        }
      }),
      (e.prototype.clipUnrotated = function (t, e, n) {
        var i = C.getTopLeft(n),
          r = C.getTopRight(n),
          o = C.getBottomRight(n),
          a = C.getBottomLeft(n);
        y(e.coordinateToPixelTransform, i),
          y(e.coordinateToPixelTransform, r),
          y(e.coordinateToPixelTransform, o),
          y(e.coordinateToPixelTransform, a);
        var s = this.inversePixelTransform;
        y(s, i),
          y(s, r),
          y(s, o),
          y(s, a),
          t.save(),
          t.beginPath(),
          t.moveTo(Math.round(i[0]), Math.round(i[1])),
          t.lineTo(Math.round(r[0]), Math.round(r[1])),
          t.lineTo(Math.round(o[0]), Math.round(o[1])),
          t.lineTo(Math.round(a[0]), Math.round(a[1])),
          t.clip();
      }),
      (e.prototype.dispatchRenderEvent_ = function (t, e, n) {
        var i = this.getLayer();
        if (i.hasListener(t)) {
          var r = new at.default(t, this.inversePixelTransform, n, e);
          i.dispatchEvent(r);
        }
      }),
      (e.prototype.preRender = function (t, e) {
        (this.frameState = e), this.dispatchRenderEvent_(U, t, e);
      }),
      (e.prototype.postRender = function (t, e) {
        this.dispatchRenderEvent_(X, t, e);
      }),
      (e.prototype.getRenderTransform = function (t, e, n, i, r, o, a) {
        var s = r / 2,
          l = o / 2,
          u = i / e,
          h = -u,
          c = -t[0] + a,
          p = -t[1];
        return v(this.tempTransform, s, l, u, h, -n, c, p);
      }),
      (e.prototype.getDataAtPixel = function (t, e, n) {
        var i = y(this.inversePixelTransform, t.slice()),
          r = this.context,
          o = this.getLayer().getExtent();
        if (o) {
          var a = y(e.pixelToCoordinateTransform, t.slice());
          if (!C.containsCoordinate(o, a)) return null;
        }
        var s,
          l = Math.round(i[0]),
          u = Math.round(i[1]),
          h = this.pixelContext_;
        if (!h) {
          var c = document.createElement("canvas");
          (c.width = 1),
            (c.height = 1),
            (h = c.getContext("2d")),
            (this.pixelContext_ = h);
        }
        h.clearRect(0, 0, 1, 1);
        try {
          h.drawImage(r.canvas, l, u, 1, 1, 0, 0, 1, 1),
            (s = h.getImageData(0, 0, 1, 1).data);
        } catch (t) {
          return "SecurityError" === t.name
            ? ((this.pixelContext_ = null), new Uint8Array())
            : s;
        }
        return 0 === s[3] ? null : s;
      }),
      (e.prototype.disposeInternal = function () {
        delete this.frameState, t.prototype.disposeInternal.call(this);
      }),
      e
    );
  })(Po.default),
  Xo = { imageSmoothingEnabled: !1, msImageSmoothingEnabled: !1 },
  Yo = { imageSmoothingEnabled: !0, msImageSmoothingEnabled: !0 },
  Vo =
    ((B = a("gn0g3")),
    (C = a("9pD6L")),
    (function () {
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function i() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((i.prototype = n.prototype), new i()));
      };
    })()),
  Wo = (function (t) {
    function e(e) {
      var n = t.call(this, e) || this;
      return (n.image_ = null), n;
    }
    return (
      Vo(e, t),
      (e.prototype.getImage = function () {
        return this.image_ ? this.image_.getImage() : null;
      }),
      (e.prototype.prepareFrame = function (t) {
        var e = t.layerStatesArray[t.layerIndex],
          n = t.pixelRatio,
          i = t.viewState,
          r = i.resolution,
          o = this.getLayer().getSource(),
          a = t.viewHints,
          s = t.extent;
        if (
          (void 0 !== e.extent &&
            (s = C.getIntersection(s, wn(e.extent, i.projection))),
          !a[Te] && !a[be] && !C.isEmpty(s))
        )
          if (o) {
            var l = i.projection,
              u = o.getImage(s, r, n, l);
            u &&
              (this.loadImage(u)
                ? (this.image_ = u)
                : u.getState() === Do && (this.image_ = null));
          } else this.image_ = null;
        return !!this.image_;
      }),
      (e.prototype.getData = function (t) {
        var e = this.frameState;
        if (!e) return null;
        var n = this.getLayer(),
          i = y(e.pixelToCoordinateTransform, t.slice()),
          r = n.getExtent();
        if (r && !C.containsCoordinate(r, i)) return null;
        var o = this.image_.getExtent(),
          a = this.image_.getImage(),
          s = C.getWidth(o),
          l = Math.floor(a.width * ((i[0] - o[0]) / s));
        if (l < 0 || l >= a.width) return null;
        var u = C.getHeight(o),
          h = Math.floor(a.height * ((o[3] - i[1]) / u));
        return h < 0 || h >= a.height ? null : this.getImageData(a, l, h);
      }),
      (e.prototype.renderFrame = function (t, e) {
        var n = this.image_,
          i = n.getExtent(),
          r = n.getResolution(),
          o = n.getPixelRatio(),
          a = t.layerStatesArray[t.layerIndex],
          s = t.pixelRatio,
          l = t.viewState,
          u = l.center,
          h = l.resolution,
          c = t.size,
          p = (s * r) / (h * o),
          f = Math.round(c[0] * s),
          d = Math.round(c[1] * s),
          g = l.rotation;
        if (g) {
          var _ = Math.round(Math.sqrt(f * f + d * d));
          (f = _), (d = _);
        }
        v(
          this.pixelTransform,
          t.size[0] / 2,
          t.size[1] / 2,
          1 / s,
          1 / s,
          g,
          -f / 2,
          -d / 2
        ),
          m(this.inversePixelTransform, this.pixelTransform);
        var y = x(this.pixelTransform);
        this.useContainer(e, y, a.opacity, this.getBackground(t));
        var E = this.context,
          S = E.canvas;
        S.width != f || S.height != d
          ? ((S.width = f), (S.height = d))
          : this.containerReused || E.clearRect(0, 0, f, d);
        var w = !1,
          O = !0;
        if (a.extent) {
          var T = wn(a.extent, l.projection);
          (w =
            (O = C.intersects(T, t.extent)) &&
            !C.containsExtent(T, t.extent)) && this.clipUnrotated(E, t, T);
        }
        var b = n.getImage(),
          R = v(
            this.tempTransform,
            f / 2,
            d / 2,
            p,
            p,
            0,
            (o * (i[0] - u[0])) / r,
            (o * (u[1] - i[3])) / r
          );
        this.renderedResolution = (r * s) / o;
        var I = b.width * R[0],
          P = b.height * R[3];
        if (
          (this.getLayer().getSource().getInterpolate() || B.assign(E, Xo),
          this.preRender(E, t),
          O && I >= 0.5 && P >= 0.5)
        ) {
          var L = R[4],
            M = R[5],
            F = a.opacity,
            A = void 0;
          1 !== F && ((A = E.globalAlpha), (E.globalAlpha = F)),
            E.drawImage(
              b,
              0,
              0,
              +b.width,
              +b.height,
              Math.round(L),
              Math.round(M),
              Math.round(I),
              Math.round(P)
            ),
            1 !== F && (E.globalAlpha = A);
        }
        return (
          this.postRender(E, t),
          w && E.restore(),
          B.assign(E, Yo),
          y !== S.style.transform && (S.style.transform = y),
          this.container
        );
      }),
      e
    );
  })(Io.default),
  Ko = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Bo = (function (t) {
    function e(e) {
      return t.call(this, e) || this;
    }
    return (
      Ko(e, t),
      (e.prototype.createRenderer = function () {
        return new Ro.default(this);
      }),
      (e.prototype.getData = function (e) {
        return t.prototype.getData.call(this, e);
      }),
      e
    );
  })(Oo.default),
  Zo = {};
e(
  Zo,
  "default",
  () => Ia,
  (t) => (Ia = t)
);
var Ho = {};
e(
  Ho,
  "default",
  () => $o,
  (t) => ($o = t)
);
var qo = "preload",
  Jo = "useInterimTilesOnError",
  Qo =
    ((B = a("gn0g3")),
    (function () {
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function i() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((i.prototype = n.prototype), new i()));
      };
    })()),
  $o = (function (t) {
    function e(e) {
      var n = this,
        i = e || {},
        r = B.assign({}, i);
      return (
        delete r.preload,
        delete r.useInterimTilesOnError,
        (n = t.call(this, r) || this).on,
        n.once,
        n.un,
        n.setPreload(void 0 !== i.preload ? i.preload : 0),
        n.setUseInterimTilesOnError(
          void 0 === i.useInterimTilesOnError || i.useInterimTilesOnError
        ),
        n
      );
    }
    return (
      Qo(e, t),
      (e.prototype.getPreload = function () {
        return this.get(qo);
      }),
      (e.prototype.setPreload = function (t) {
        this.set(qo, t);
      }),
      (e.prototype.getUseInterimTilesOnError = function () {
        return this.get(Jo);
      }),
      (e.prototype.setUseInterimTilesOnError = function (t) {
        this.set(Jo, t);
      }),
      (e.prototype.getData = function (e) {
        return t.prototype.getData.call(this, e);
      }),
      e
    );
  })(j.default),
  ta = {};
e(
  ta,
  "default",
  () => ba,
  (t) => (ba = t)
);
var ea = {};
e(
  ea,
  "default",
  () => fa,
  (t) => (fa = t)
);
var na = {};
e(
  na,
  "default",
  () => ra,
  (t) => (ra = t)
);
(mt = a("KD0eF")), (k = a("3xzSb")), (f = a("9iPUS"));
var ia = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  ra = (function (t) {
    function e(e, n, i) {
      var r = t.call(this) || this,
        o = i || {};
      return (
        (r.tileCoord = e),
        (r.state = n),
        (r.interimTile = null),
        (r.key = ""),
        (r.transition_ = void 0 === o.transition ? 250 : o.transition),
        (r.transitionStarts_ = {}),
        (r.interpolate = !!o.interpolate),
        r
      );
    }
    return (
      ia(e, t),
      (e.prototype.changed = function () {
        this.dispatchEvent(k.default.CHANGE);
      }),
      (e.prototype.release = function () {}),
      (e.prototype.getKey = function () {
        return this.key + "/" + this.tileCoord;
      }),
      (e.prototype.getInterimTile = function () {
        if (!this.interimTile) return this;
        var t = this.interimTile;
        do {
          if (t.getState() == ge) return (this.transition_ = 0), t;
          t = t.interimTile;
        } while (t);
        return this;
      }),
      (e.prototype.refreshInterimChain = function () {
        if (this.interimTile) {
          var t = this.interimTile,
            e = this;
          do {
            if (t.getState() == ge) {
              t.interimTile = null;
              break;
            }
            t.getState() == de
              ? (e = t)
              : t.getState() == fe
              ? (e.interimTile = t.interimTile)
              : (e = t),
              (t = e.interimTile);
          } while (t);
        }
      }),
      (e.prototype.getTileCoord = function () {
        return this.tileCoord;
      }),
      (e.prototype.getState = function () {
        return this.state;
      }),
      (e.prototype.setState = function (t) {
        if (this.state !== _e && this.state > t)
          throw new Error("Tile load sequence violation");
        (this.state = t), this.changed();
      }),
      (e.prototype.load = function () {
        f.abstract();
      }),
      (e.prototype.getAlpha = function (t, e) {
        if (!this.transition_) return 1;
        var n = this.transitionStarts_[t];
        if (n) {
          if (-1 === n) return 1;
        } else (n = e), (this.transitionStarts_[t] = n);
        var i = e - n + 1e3 / 60;
        return i >= this.transition_ ? 1 : An(i / this.transition_);
      }),
      (e.prototype.inTransition = function (t) {
        return !!this.transition_ && -1 !== this.transitionStarts_[t];
      }),
      (e.prototype.endTransition = function (t) {
        this.transition_ && (this.transitionStarts_[t] = -1);
      }),
      e
    );
  })(mt.default),
  oa = ((xt = a("DfnQm")), {});
e(
  oa,
  "listenImage",
  () => ha,
  (t) => (ha = t)
),
  e(
    oa,
    "default",
    () => ca,
    (t) => (ca = t)
  );
k = a("3xzSb");
var aa = {};
e(
  aa,
  "default",
  () => la,
  (t) => (la = t)
);
(mt = a("KD0eF")), (k = a("3xzSb")), (f = a("9iPUS"));
var sa = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  la = (function (t) {
    function e(e, n, i, r) {
      var o = t.call(this) || this;
      return (
        (o.extent = e),
        (o.pixelRatio_ = i),
        (o.resolution = n),
        (o.state = r),
        o
      );
    }
    return (
      sa(e, t),
      (e.prototype.changed = function () {
        this.dispatchEvent(k.default.CHANGE);
      }),
      (e.prototype.getExtent = function () {
        return this.extent;
      }),
      (e.prototype.getImage = function () {
        return f.abstract();
      }),
      (e.prototype.getPixelRatio = function () {
        return this.pixelRatio_;
      }),
      (e.prototype.getResolution = function () {
        return this.resolution;
      }),
      (e.prototype.getState = function () {
        return this.state;
      }),
      (e.prototype.load = function () {
        f.abstract();
      }),
      e
    );
  })(mt.default),
  ua =
    ((d = a("8UoiJ")),
    (C = a("9pD6L")),
    (Z = a("ilM9F")),
    (function () {
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function i() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((i.prototype = n.prototype), new i()));
      };
    })());
function ha(t, e, n) {
  var i = t,
    r = !0,
    o = !1,
    a = !1,
    s = [
      Z.listenOnce(i, k.default.LOAD, function () {
        (a = !0), o || e();
      }),
    ];
  return (
    i.src && d.IMAGE_DECODE
      ? ((o = !0),
        i
          .decode()
          .then(function () {
            r && e();
          })
          .catch(function (t) {
            r && (a ? e() : n());
          }))
      : s.push(Z.listenOnce(i, k.default.ERROR, n)),
    function () {
      (r = !1), s.forEach(Z.unlistenByKey);
    }
  );
}
var ca = (function (t) {
    function e(e, n, i, r, o, a) {
      var s = t.call(this, e, n, i, Lo) || this;
      return (
        (s.src_ = r),
        (s.image_ = new Image()),
        null !== o && (s.image_.crossOrigin = o),
        (s.unlisten_ = null),
        (s.state = Lo),
        (s.imageLoadFunction_ = a),
        s
      );
    }
    return (
      ua(e, t),
      (e.prototype.getImage = function () {
        return this.image_;
      }),
      (e.prototype.handleImageError_ = function () {
        (this.state = Ao), this.unlistenImage_(), this.changed();
      }),
      (e.prototype.handleImageLoad_ = function () {
        void 0 === this.resolution &&
          (this.resolution = C.getHeight(this.extent) / this.image_.height),
          (this.state = Fo),
          this.unlistenImage_(),
          this.changed();
      }),
      (e.prototype.load = function () {
        (this.state != Lo && this.state != Ao) ||
          ((this.state = Mo),
          this.changed(),
          this.imageLoadFunction_(this, this.src_),
          (this.unlisten_ = ha(
            this.image_,
            this.handleImageLoad_.bind(this),
            this.handleImageError_.bind(this)
          )));
      }),
      (e.prototype.setImage = function (t) {
        (this.image_ = t),
          (this.resolution = C.getHeight(this.extent) / this.image_.height);
      }),
      (e.prototype.unlistenImage_ = function () {
        this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null));
      }),
      e
    );
  })(aa.default),
  pa = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })();
var fa = (function (t) {
    function e(e, n, i, r, o, a) {
      var s = t.call(this, e, n, a) || this;
      return (
        (s.crossOrigin_ = r),
        (s.src_ = i),
        (s.key = i),
        (s.image_ = new Image()),
        null !== r && (s.image_.crossOrigin = r),
        (s.unlisten_ = null),
        (s.tileLoadFunction_ = o),
        s
      );
    }
    return (
      pa(e, t),
      (e.prototype.getImage = function () {
        return this.image_;
      }),
      (e.prototype.setImage = function (t) {
        (this.image_ = t),
          (this.state = ge),
          this.unlistenImage_(),
          this.changed();
      }),
      (e.prototype.handleImageError_ = function () {
        var t;
        (this.state = _e),
          this.unlistenImage_(),
          (this.image_ =
            (((t = xt.createCanvasContext2D(1, 1)).fillStyle = "rgba(0,0,0,0)"),
            t.fillRect(0, 0, 1, 1),
            t.canvas)),
          this.changed();
      }),
      (e.prototype.handleImageLoad_ = function () {
        var t = this.image_;
        t.naturalWidth && t.naturalHeight
          ? (this.state = ge)
          : (this.state = ye),
          this.unlistenImage_(),
          this.changed();
      }),
      (e.prototype.load = function () {
        this.state == _e &&
          ((this.state = fe),
          (this.image_ = new Image()),
          null !== this.crossOrigin_ &&
            (this.image_.crossOrigin = this.crossOrigin_)),
          this.state == fe &&
            ((this.state = de),
            this.changed(),
            this.tileLoadFunction_(this, this.src_),
            (this.unlisten_ = oa.listenImage(
              this.image_,
              this.handleImageLoad_.bind(this),
              this.handleImageError_.bind(this)
            )));
      }),
      (e.prototype.unlistenImage_ = function () {
        this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null));
      }),
      e
    );
  })(na.default),
  da = {};
e(
  da,
  "default",
  () => Ea,
  (t) => (Ea = t)
);
(k = a("3xzSb")), (C = a("9pD6L")), (E = a("9byFX"));
var ga,
  _a = (function () {
    function t(t, e, n, i, r, o) {
      (this.sourceProj_ = t), (this.targetProj_ = e);
      var a = {},
        s = fn(this.targetProj_, this.sourceProj_);
      (this.transformInv_ = function (t) {
        var e = t[0] + "/" + t[1];
        return a[e] || (a[e] = s(t)), a[e];
      }),
        (this.maxSourceExtent_ = i),
        (this.errorThresholdSquared_ = r * r),
        (this.triangles_ = []),
        (this.wrapsXInSource_ = !1),
        (this.canWrapXInSource_ =
          this.sourceProj_.canWrapX() &&
          !!i &&
          !!this.sourceProj_.getExtent() &&
          C.getWidth(i) == C.getWidth(this.sourceProj_.getExtent())),
        (this.sourceWorldWidth_ = this.sourceProj_.getExtent()
          ? C.getWidth(this.sourceProj_.getExtent())
          : null),
        (this.targetWorldWidth_ = this.targetProj_.getExtent()
          ? C.getWidth(this.targetProj_.getExtent())
          : null);
      var l = C.getTopLeft(n),
        u = C.getTopRight(n),
        h = C.getBottomRight(n),
        c = C.getBottomLeft(n),
        p = this.transformInv_(l),
        f = this.transformInv_(u),
        d = this.transformInv_(h),
        g = this.transformInv_(c),
        _ =
          10 +
          (o
            ? Math.max(0, Math.ceil(E.log2(C.getArea(n) / (o * o * 65536))))
            : 0);
      if ((this.addQuad_(l, u, h, c, p, f, d, g, _), this.wrapsXInSource_)) {
        var y = 1 / 0;
        this.triangles_.forEach(function (t, e, n) {
          y = Math.min(y, t.source[0][0], t.source[1][0], t.source[2][0]);
        }),
          this.triangles_.forEach(
            function (t) {
              if (
                Math.max(t.source[0][0], t.source[1][0], t.source[2][0]) - y >
                this.sourceWorldWidth_ / 2
              ) {
                var e = [
                  [t.source[0][0], t.source[0][1]],
                  [t.source[1][0], t.source[1][1]],
                  [t.source[2][0], t.source[2][1]],
                ];
                e[0][0] - y > this.sourceWorldWidth_ / 2 &&
                  (e[0][0] -= this.sourceWorldWidth_),
                  e[1][0] - y > this.sourceWorldWidth_ / 2 &&
                    (e[1][0] -= this.sourceWorldWidth_),
                  e[2][0] - y > this.sourceWorldWidth_ / 2 &&
                    (e[2][0] -= this.sourceWorldWidth_);
                var n = Math.min(e[0][0], e[1][0], e[2][0]);
                Math.max(e[0][0], e[1][0], e[2][0]) - n <
                  this.sourceWorldWidth_ / 2 && (t.source = e);
              }
            }.bind(this)
          );
      }
      a = {};
    }
    return (
      (t.prototype.addTriangle_ = function (t, e, n, i, r, o) {
        this.triangles_.push({ source: [i, r, o], target: [t, e, n] });
      }),
      (t.prototype.addQuad_ = function (t, e, n, i, r, o, a, s, l) {
        var u = C.boundingExtent([r, o, a, s]),
          h = this.sourceWorldWidth_
            ? C.getWidth(u) / this.sourceWorldWidth_
            : null,
          c = this.sourceWorldWidth_,
          p = this.sourceProj_.canWrapX() && h > 0.5 && h < 1,
          f = !1;
        if (l > 0) {
          if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
            var d = C.boundingExtent([t, e, n, i]);
            f = C.getWidth(d) / this.targetWorldWidth_ > 0.25 || f;
          }
          !p && this.sourceProj_.isGlobal() && h && (f = h > 0.25 || f);
        }
        if (
          !(
            !f &&
            this.maxSourceExtent_ &&
            isFinite(u[0]) &&
            isFinite(u[1]) &&
            isFinite(u[2]) &&
            isFinite(u[3])
          ) ||
          C.intersects(u, this.maxSourceExtent_)
        ) {
          var g = 0;
          if (
            !(
              f ||
              (isFinite(r[0]) &&
                isFinite(r[1]) &&
                isFinite(o[0]) &&
                isFinite(o[1]) &&
                isFinite(a[0]) &&
                isFinite(a[1]) &&
                isFinite(s[0]) &&
                isFinite(s[1]))
            )
          )
            if (l > 0) f = !0;
            else if (
              1 !=
                (g =
                  (isFinite(r[0]) && isFinite(r[1]) ? 0 : 8) +
                  (isFinite(o[0]) && isFinite(o[1]) ? 0 : 4) +
                  (isFinite(a[0]) && isFinite(a[1]) ? 0 : 2) +
                  (isFinite(s[0]) && isFinite(s[1]) ? 0 : 1)) &&
              2 != g &&
              4 != g &&
              8 != g
            )
              return;
          if (l > 0) {
            if (!f) {
              var _ = [(t[0] + n[0]) / 2, (t[1] + n[1]) / 2],
                y = this.transformInv_(_),
                v = void 0;
              if (p)
                v =
                  (E.modulo(r[0], c) + E.modulo(a[0], c)) / 2 -
                  E.modulo(y[0], c);
              else v = (r[0] + a[0]) / 2 - y[0];
              var m = (r[1] + a[1]) / 2 - y[1];
              f = v * v + m * m > this.errorThresholdSquared_;
            }
            if (f) {
              if (Math.abs(t[0] - n[0]) <= Math.abs(t[1] - n[1])) {
                var x = [(e[0] + n[0]) / 2, (e[1] + n[1]) / 2],
                  S = this.transformInv_(x),
                  w = [(i[0] + t[0]) / 2, (i[1] + t[1]) / 2],
                  O = this.transformInv_(w);
                this.addQuad_(t, e, x, w, r, o, S, O, l - 1),
                  this.addQuad_(w, x, n, i, O, S, a, s, l - 1);
              } else {
                var T = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2],
                  b = this.transformInv_(T),
                  R = [(n[0] + i[0]) / 2, (n[1] + i[1]) / 2],
                  I = this.transformInv_(R);
                this.addQuad_(t, T, R, i, r, b, I, s, l - 1),
                  this.addQuad_(T, e, n, R, b, o, a, I, l - 1);
              }
              return;
            }
          }
          if (p) {
            if (!this.canWrapXInSource_) return;
            this.wrapsXInSource_ = !0;
          }
          11 & g || this.addTriangle_(t, n, i, r, a, s),
            14 & g || this.addTriangle_(t, n, e, r, a, o),
            g &&
              (13 & g || this.addTriangle_(e, i, t, o, s, r),
              7 & g || this.addTriangle_(e, i, n, o, s, a));
        }
      }),
      (t.prototype.calculateSourceExtent = function () {
        var t = C.createEmpty();
        return (
          this.triangles_.forEach(function (e, n, i) {
            var r = e.source;
            C.extendCoordinate(t, r[0]),
              C.extendCoordinate(t, r[1]),
              C.extendCoordinate(t, r[2]);
          }),
          t
        );
      }),
      (t.prototype.getTriangles = function () {
        return this.triangles_;
      }),
      t
    );
  })();
(B = a("gn0g3")), (C = a("9pD6L")), (xt = a("DfnQm")), (E = a("9byFX"));
function ya(t, e, n, i, r) {
  t.beginPath(),
    t.moveTo(0, 0),
    t.lineTo(e, n),
    t.lineTo(i, r),
    t.closePath(),
    t.save(),
    t.clip(),
    t.fillRect(0, 0, Math.max(e, i) + 1, Math.max(n, r)),
    t.restore();
}
function va(t, e) {
  return Math.abs(t[4 * e] - 210) > 2 || Math.abs(t[4 * e + 3] - 191.25) > 2;
}
function ma(t, e, n, i) {
  var r = dn(n, e, t),
    o = ln(e, i, n),
    a = e.getMetersPerUnit();
  void 0 !== a && (o *= a);
  var s = t.getMetersPerUnit();
  void 0 !== s && (o /= s);
  var l = t.getExtent();
  if (!l || C.containsCoordinate(l, r)) {
    var u = ln(t, o, r) / o;
    isFinite(u) && u > 0 && (o /= u);
  }
  return o;
}
function xa(t, e, n, i, r, o, a, s, l, u, h, c) {
  var p = xt.createCanvasContext2D(Math.round(n * t), Math.round(n * e));
  if ((c || B.assign(p, Xo), 0 === l.length)) return p.canvas;
  function f(t) {
    return Math.round(t * n) / n;
  }
  p.scale(n, n), (p.globalCompositeOperation = "lighter");
  var d = C.createEmpty();
  l.forEach(function (t, e, n) {
    C.extend(d, t.extent);
  });
  var g = C.getWidth(d),
    _ = C.getHeight(d),
    y = xt.createCanvasContext2D(
      Math.round((n * g) / i),
      Math.round((n * _) / i)
    );
  c || B.assign(y, Xo);
  var v = n / i;
  l.forEach(function (t, e, n) {
    var i = t.extent[0] - d[0],
      r = -(t.extent[3] - d[3]),
      o = C.getWidth(t.extent),
      a = C.getHeight(t.extent);
    t.image.width > 0 &&
      t.image.height > 0 &&
      y.drawImage(
        t.image,
        u,
        u,
        t.image.width - 2 * u,
        t.image.height - 2 * u,
        i * v,
        r * v,
        o * v,
        a * v
      );
  });
  var m = C.getTopLeft(a);
  return (
    s.getTriangles().forEach(function (t, e, r) {
      var a = t.source,
        s = t.target,
        l = a[0][0],
        u = a[0][1],
        h = a[1][0],
        g = a[1][1],
        _ = a[2][0],
        v = a[2][1],
        x = f((s[0][0] - m[0]) / o),
        C = f(-(s[0][1] - m[1]) / o),
        S = f((s[1][0] - m[0]) / o),
        w = f(-(s[1][1] - m[1]) / o),
        O = f((s[2][0] - m[0]) / o),
        T = f(-(s[2][1] - m[1]) / o),
        b = l,
        R = u;
      (l = 0), (u = 0);
      var I = [
          [(h -= b), (g -= R), 0, 0, S - x],
          [(_ -= b), (v -= R), 0, 0, O - x],
          [0, 0, h, g, w - C],
          [0, 0, _, v, T - C],
        ],
        P = E.solveLinearSystem(I);
      if (P) {
        if (
          (p.save(),
          p.beginPath(),
          (function () {
            if (void 0 === ga) {
              var t = document.createElement("canvas").getContext("2d");
              (t.globalCompositeOperation = "lighter"),
                (t.fillStyle = "rgba(210, 0, 0, 0.75)"),
                ya(t, 4, 5, 4, 0),
                ya(t, 4, 5, 0, 5);
              var e = t.getImageData(0, 0, 3, 3).data;
              ga = va(e, 0) || va(e, 4) || va(e, 8);
            }
            return ga;
          })() || !c)
        ) {
          p.moveTo(S, w);
          for (var L = x - S, M = C - w, F = 0; F < 4; F++)
            p.lineTo(S + f(((F + 1) * L) / 4), w + f((F * M) / 3)),
              3 != F &&
                p.lineTo(S + f(((F + 1) * L) / 4), w + f(((F + 1) * M) / 3));
          p.lineTo(O, T);
        } else p.moveTo(S, w), p.lineTo(x, C), p.lineTo(O, T);
        p.clip(),
          p.transform(P[0], P[2], P[1], P[3], x, C),
          p.translate(d[0] - b, d[3] - R),
          p.scale(i / n, -i / n),
          p.drawImage(y.canvas, 0, 0),
          p.restore();
      }
    }),
    h &&
      (p.save(),
      (p.globalCompositeOperation = "source-over"),
      (p.strokeStyle = "black"),
      (p.lineWidth = 1),
      s.getTriangles().forEach(function (t, e, n) {
        var i = t.target,
          r = (i[0][0] - m[0]) / o,
          a = -(i[0][1] - m[1]) / o,
          s = (i[1][0] - m[0]) / o,
          l = -(i[1][1] - m[1]) / o,
          u = (i[2][0] - m[0]) / o,
          h = -(i[2][1] - m[1]) / o;
        p.beginPath(),
          p.moveTo(s, l),
          p.lineTo(r, a),
          p.lineTo(u, h),
          p.closePath(),
          p.stroke();
      }),
      p.restore()),
    p.canvas
  );
}
(E = a("9byFX")), (C = a("9pD6L")), (Z = a("ilM9F"));
var Ca = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Ea = (function (t) {
    function e(e, n, i, r, o, a, s, l, u, h, c, p) {
      var f = t.call(this, o, fe, { interpolate: !!p }) || this;
      (f.renderEdges_ = void 0 !== c && c),
        (f.pixelRatio_ = s),
        (f.gutter_ = l),
        (f.canvas_ = null),
        (f.sourceTileGrid_ = n),
        (f.targetTileGrid_ = r),
        (f.wrappedTileCoord_ = a || o),
        (f.sourceTiles_ = []),
        (f.sourcesListenerKeys_ = null),
        (f.sourceZ_ = 0);
      var d = r.getTileCoordExtent(f.wrappedTileCoord_),
        g = f.targetTileGrid_.getExtent(),
        _ = f.sourceTileGrid_.getExtent(),
        y = g ? C.getIntersection(d, g) : d;
      if (0 === C.getArea(y)) return (f.state = ye), f;
      var v = e.getExtent();
      v && (_ = _ ? C.getIntersection(_, v) : v);
      var m = r.getResolution(f.wrappedTileCoord_[0]),
        x = (function (t, e, n, i) {
          var r = C.getCenter(n),
            o = ma(t, e, r, i);
          return (
            (!isFinite(o) || o <= 0) &&
              C.forEachCorner(n, function (n) {
                return (o = ma(t, e, n, i)), isFinite(o) && o > 0;
              }),
            o
          );
        })(e, i, y, m);
      if (!isFinite(x) || x <= 0) return (f.state = ye), f;
      var S = void 0 !== h ? h : 0.5;
      if (
        ((f.triangulation_ = new _a(e, i, y, _, x * S, m)),
        0 === f.triangulation_.getTriangles().length)
      )
        return (f.state = ye), f;
      f.sourceZ_ = n.getZForResolution(x);
      var w = f.triangulation_.calculateSourceExtent();
      if (
        (_ &&
          (e.canWrapX()
            ? ((w[1] = E.clamp(w[1], _[1], _[3])),
              (w[3] = E.clamp(w[3], _[1], _[3])))
            : (w = C.getIntersection(w, _))),
        C.getArea(w))
      ) {
        for (
          var O = n.getTileRangeForExtentAndZ(w, f.sourceZ_), T = O.minX;
          T <= O.maxX;
          T++
        )
          for (var b = O.minY; b <= O.maxY; b++) {
            var R = u(f.sourceZ_, T, b, s);
            R && f.sourceTiles_.push(R);
          }
        0 === f.sourceTiles_.length && (f.state = ye);
      } else f.state = ye;
      return f;
    }
    return (
      Ca(e, t),
      (e.prototype.getImage = function () {
        return this.canvas_;
      }),
      (e.prototype.reproject_ = function () {
        var t = [];
        if (
          (this.sourceTiles_.forEach(
            function (e, n, i) {
              e &&
                e.getState() == ge &&
                t.push({
                  extent: this.sourceTileGrid_.getTileCoordExtent(e.tileCoord),
                  image: e.getImage(),
                });
            }.bind(this)
          ),
          (this.sourceTiles_.length = 0),
          0 === t.length)
        )
          this.state = _e;
        else {
          var e = this.wrappedTileCoord_[0],
            n = this.targetTileGrid_.getTileSize(e),
            i = "number" == typeof n ? n : n[0],
            r = "number" == typeof n ? n : n[1],
            o = this.targetTileGrid_.getResolution(e),
            a = this.sourceTileGrid_.getResolution(this.sourceZ_),
            s = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
          (this.canvas_ = xa(
            i,
            r,
            this.pixelRatio_,
            a,
            this.sourceTileGrid_.getExtent(),
            o,
            s,
            this.triangulation_,
            t,
            this.gutter_,
            this.renderEdges_,
            this.interpolate
          )),
            (this.state = ge);
        }
        this.changed();
      }),
      (e.prototype.load = function () {
        if (this.state == fe) {
          (this.state = de), this.changed();
          var t = 0;
          (this.sourcesListenerKeys_ = []),
            this.sourceTiles_.forEach(
              function (e, n, i) {
                var r = e.getState();
                if (r == fe || r == de) {
                  t++;
                  var o = Z.listen(
                    e,
                    k.default.CHANGE,
                    function (n) {
                      var i = e.getState();
                      (i != ge && i != _e && i != ye) ||
                        (Z.unlistenByKey(o),
                        0 === --t &&
                          (this.unlistenSources_(), this.reproject_()));
                    },
                    this
                  );
                  this.sourcesListenerKeys_.push(o);
                }
              }.bind(this)
            ),
            0 === t
              ? setTimeout(this.reproject_.bind(this), 0)
              : this.sourceTiles_.forEach(function (t, e, n) {
                  t.getState() == fe && t.load();
                });
        }
      }),
      (e.prototype.unlistenSources_ = function () {
        this.sourcesListenerKeys_.forEach(Z.unlistenByKey),
          (this.sourcesListenerKeys_ = null);
      }),
      e
    );
  })(na.default),
  Sa = (function () {
    function t(t, e, n, i) {
      (this.minX = t), (this.maxX = e), (this.minY = n), (this.maxY = i);
    }
    return (
      (t.prototype.contains = function (t) {
        return this.containsXY(t[1], t[2]);
      }),
      (t.prototype.containsTileRange = function (t) {
        return (
          this.minX <= t.minX &&
          t.maxX <= this.maxX &&
          this.minY <= t.minY &&
          t.maxY <= this.maxY
        );
      }),
      (t.prototype.containsXY = function (t, e) {
        return (
          this.minX <= t && t <= this.maxX && this.minY <= e && e <= this.maxY
        );
      }),
      (t.prototype.equals = function (t) {
        return (
          this.minX == t.minX &&
          this.minY == t.minY &&
          this.maxX == t.maxX &&
          this.maxY == t.maxY
        );
      }),
      (t.prototype.extend = function (t) {
        t.minX < this.minX && (this.minX = t.minX),
          t.maxX > this.maxX && (this.maxX = t.maxX),
          t.minY < this.minY && (this.minY = t.minY),
          t.maxY > this.maxY && (this.maxY = t.maxY);
      }),
      (t.prototype.getHeight = function () {
        return this.maxY - this.minY + 1;
      }),
      (t.prototype.getSize = function () {
        return [this.getWidth(), this.getHeight()];
      }),
      (t.prototype.getWidth = function () {
        return this.maxX - this.minX + 1;
      }),
      (t.prototype.intersects = function (t) {
        return (
          this.minX <= t.maxX &&
          this.maxX >= t.minX &&
          this.minY <= t.maxY &&
          this.maxY >= t.minY
        );
      }),
      t
    );
  })();
function wa(t, e, n, i, r) {
  return void 0 !== r
    ? ((r.minX = t), (r.maxX = e), (r.minY = n), (r.maxY = i), r)
    : new Sa(t, e, n, i);
}
var Oa = Sa,
  Ta =
    ((B = a("gn0g3")),
    (C = a("9pD6L")),
    (f = a("9iPUS")),
    (Rn = a("fVVyM")),
    (function () {
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function i() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((i.prototype = n.prototype), new i()));
      };
    })()),
  ba = (function (t) {
    function e(e) {
      var n = t.call(this, e) || this;
      return (
        (n.extentChanged = !0),
        (n.renderedExtent_ = null),
        n.renderedPixelRatio,
        (n.renderedProjection = null),
        n.renderedRevision,
        (n.renderedTiles = []),
        (n.newTiles_ = !1),
        (n.tmpExtent = C.createEmpty()),
        (n.tmpTileRange_ = new Oa(0, 0, 0, 0)),
        n
      );
    }
    return (
      Ta(e, t),
      (e.prototype.isDrawableTile = function (t) {
        var e = this.getLayer(),
          n = t.getState(),
          i = e.getUseInterimTilesOnError();
        return n == ge || n == ye || (n == _e && !i);
      }),
      (e.prototype.getTile = function (t, e, n, i) {
        var r = i.pixelRatio,
          o = i.viewState.projection,
          a = this.getLayer(),
          s = a.getSource().getTile(t, e, n, r, o);
        return (
          s.getState() == _e &&
            (a.getUseInterimTilesOnError()
              ? a.getPreload() > 0 && (this.newTiles_ = !0)
              : s.setState(ge)),
          this.isDrawableTile(s) || (s = s.getInterimTile()),
          s
        );
      }),
      (e.prototype.getData = function (t) {
        var e = this.frameState;
        if (!e) return null;
        var n = this.getLayer(),
          i = y(e.pixelToCoordinateTransform, t.slice()),
          r = n.getExtent();
        if (r && !C.containsCoordinate(r, i)) return null;
        for (
          var o = e.pixelRatio,
            a = e.viewState.projection,
            s = e.viewState,
            l = n.getRenderSource(),
            u = l.getTileGridForProjection(s.projection),
            h = l.getTilePixelRatio(e.pixelRatio),
            c = u.getZForResolution(s.resolution);
          c >= u.getMinZoom();
          --c
        ) {
          var p = u.getTileCoordForCoordAndZ(i, c),
            f = l.getTile(c, p[1], p[2], o, a);
          if (!(f instanceof ea.default || f instanceof da.default))
            return null;
          if (f.getState() === ge) {
            var d = u.getOrigin(c),
              g = Hi(u.getTileSize(c)),
              _ = u.getResolution(c),
              v = Math.floor(h * ((i[0] - d[0]) / _ - p[1] * g[0])),
              m = Math.floor(h * ((d[1] - i[1]) / _ - p[2] * g[1]));
            return this.getImageData(f.getImage(), v, m);
          }
        }
        return null;
      }),
      (e.prototype.loadedTileCallback = function (e, n, i) {
        return (
          !!this.isDrawableTile(i) &&
          t.prototype.loadedTileCallback.call(this, e, n, i)
        );
      }),
      (e.prototype.prepareFrame = function (t) {
        return !!this.getLayer().getSource();
      }),
      (e.prototype.renderFrame = function (t, e) {
        var n = t.layerStatesArray[t.layerIndex],
          i = t.viewState,
          r = i.projection,
          o = i.resolution,
          a = i.center,
          s = i.rotation,
          l = t.pixelRatio,
          u = this.getLayer(),
          h = u.getSource(),
          c = h.getRevision(),
          p = h.getTileGridForProjection(r),
          d = p.getZForResolution(o, h.zDirection),
          g = p.getResolution(d),
          _ = t.extent,
          E = n.extent && wn(n.extent, r);
        E && (_ = C.getIntersection(_, wn(n.extent, r)));
        var S = h.getTilePixelRatio(l),
          w = Math.round(t.size[0] * S),
          O = Math.round(t.size[1] * S);
        if (s) {
          var T = Math.round(Math.sqrt(w * w + O * O));
          (w = T), (O = T);
        }
        var b = (g * w) / 2 / S,
          R = (g * O) / 2 / S,
          I = [a[0] - b, a[1] - R, a[0] + b, a[1] + R],
          P = p.getTileRangeForExtentAndZ(_, d),
          L = {};
        L[d] = {};
        var M = this.createLoadedTileFinder(h, r, L),
          F = this.tmpExtent,
          A = this.tmpTileRange_;
        this.newTiles_ = !1;
        for (var D = P.minX; D <= P.maxX; ++D)
          for (var j = P.minY; j <= P.maxY; ++j) {
            var N = this.getTile(d, D, j, t);
            if (this.isDrawableTile(N)) {
              var G = f.getUid(this);
              if (N.getState() == ge) {
                L[d][N.tileCoord.toString()] = N;
                var k = N.inTransition(G);
                this.newTiles_ ||
                  (!k && -1 !== this.renderedTiles.indexOf(N)) ||
                  (this.newTiles_ = !0);
              }
              if (1 === N.getAlpha(G, t.time)) continue;
            }
            var z = p.getTileCoordChildTileRange(N.tileCoord, A, F),
              U = !1;
            z && (U = M(d + 1, z)),
              U || p.forEachTileCoordParentTileRange(N.tileCoord, M, A, F);
          }
        var X = g / o;
        v(
          this.pixelTransform,
          t.size[0] / 2,
          t.size[1] / 2,
          1 / S,
          1 / S,
          s,
          -w / 2,
          -O / 2
        );
        var Y = x(this.pixelTransform);
        this.useContainer(e, Y, n.opacity, this.getBackground(t));
        var V = this.context,
          W = V.canvas;
        m(this.inversePixelTransform, this.pixelTransform),
          v(this.tempTransform, w / 2, O / 2, X, X, 0, -w / 2, -O / 2),
          W.width != w || W.height != O
            ? ((W.width = w), (W.height = O))
            : this.containerReused || V.clearRect(0, 0, w, O),
          E && this.clipUnrotated(V, t, E),
          h.getInterpolate() || B.assign(V, Xo),
          this.preRender(V, t),
          (this.renderedTiles.length = 0);
        var K,
          Z,
          H,
          q = Object.keys(L).map(Number);
        q.sort(Rn.numberSafeCompareFunction),
          1 !== n.opacity ||
          (this.containerReused && !h.getOpaque(t.viewState.projection))
            ? ((K = []), (Z = []))
            : (q = q.reverse());
        for (var J = q.length - 1; J >= 0; --J) {
          var Q = q[J],
            $ = h.getTilePixelSize(Q, l, r),
            tt = p.getResolution(Q) / g,
            et = $[0] * tt * X,
            nt = $[1] * tt * X,
            it = p.getTileCoordForCoordAndZ(C.getTopLeft(I), Q),
            rt = p.getTileCoordExtent(it),
            ot = y(this.tempTransform, [
              (S * (rt[0] - I[0])) / g,
              (S * (I[3] - rt[3])) / g,
            ]),
            at = S * h.getGutterForProjection(r),
            st = L[Q];
          for (var lt in st) {
            var ut = (N = st[lt]).tileCoord,
              ht = it[1] - ut[1],
              ct = Math.round(ot[0] - (ht - 1) * et),
              pt = it[2] - ut[2],
              ft = Math.round(ot[1] - (pt - 1) * nt),
              dt = ct - (D = Math.round(ot[0] - ht * et)),
              gt = ft - (j = Math.round(ot[1] - pt * nt)),
              _t = d === Q,
              vt = !1;
            if (!(k = _t && 1 !== N.getAlpha(f.getUid(this), t.time)))
              if (K) {
                H = [D, j, D + dt, j, D + dt, j + gt, D, j + gt];
                for (var mt = 0, xt = K.length; mt < xt; ++mt)
                  if (d !== Q && Q < Z[mt]) {
                    var Ct = K[mt];
                    C.intersects(
                      [D, j, D + dt, j + gt],
                      [Ct[0], Ct[3], Ct[4], Ct[7]]
                    ) &&
                      (vt || (V.save(), (vt = !0)),
                      V.beginPath(),
                      V.moveTo(H[0], H[1]),
                      V.lineTo(H[2], H[3]),
                      V.lineTo(H[4], H[5]),
                      V.lineTo(H[6], H[7]),
                      V.moveTo(Ct[6], Ct[7]),
                      V.lineTo(Ct[4], Ct[5]),
                      V.lineTo(Ct[2], Ct[3]),
                      V.lineTo(Ct[0], Ct[1]),
                      V.clip());
                  }
                K.push(H), Z.push(Q);
              } else V.clearRect(D, j, dt, gt);
            this.drawTileImage(N, t, D, j, dt, gt, at, _t),
              K && !k
                ? (vt && V.restore(), this.renderedTiles.unshift(N))
                : this.renderedTiles.push(N),
              this.updateUsedTiles(t.usedTiles, h, N);
          }
        }
        (this.renderedRevision = c),
          (this.renderedResolution = g),
          (this.extentChanged =
            !this.renderedExtent_ || !C.equals(this.renderedExtent_, I)),
          (this.renderedExtent_ = I),
          (this.renderedPixelRatio = l),
          (this.renderedProjection = r),
          this.manageTilePyramid(t, h, p, l, r, _, d, u.getPreload()),
          this.scheduleExpireCache(t, h),
          this.postRender(V, t),
          n.extent && V.restore(),
          B.assign(V, Yo),
          Y !== W.style.transform && (W.style.transform = Y);
        var Et = yt(n.opacity),
          St = this.container;
        return (
          Et !== St.style.opacity && (St.style.opacity = Et), this.container
        );
      }),
      (e.prototype.drawTileImage = function (t, e, n, i, r, o, a, s) {
        var l = this.getTileImage(t);
        if (l) {
          var u = f.getUid(this),
            h = s ? t.getAlpha(u, e.time) : 1,
            c = h !== this.context.globalAlpha;
          c && (this.context.save(), (this.context.globalAlpha = h)),
            this.context.drawImage(
              l,
              a,
              a,
              l.width - 2 * a,
              l.height - 2 * a,
              n,
              i,
              r,
              o
            ),
            c && this.context.restore(),
            1 !== h ? (e.animate = !0) : s && t.endTransition(u);
        }
      }),
      (e.prototype.getImage = function () {
        var t = this.context;
        return t ? t.canvas : null;
      }),
      (e.prototype.getTileImage = function (t) {
        return t.getImage();
      }),
      (e.prototype.scheduleExpireCache = function (t, e) {
        if (e.canExpireCache()) {
          var n = function (t, e, n) {
            var i = f.getUid(t);
            i in n.usedTiles &&
              t.expireCache(n.viewState.projection, n.usedTiles[i]);
          }.bind(null, e);
          t.postRenderFunctions.push(n);
        }
      }),
      (e.prototype.updateUsedTiles = function (t, e, n) {
        var i = f.getUid(e);
        i in t || (t[i] = {}), (t[i][n.getKey()] = !0);
      }),
      (e.prototype.manageTilePyramid = function (t, e, n, i, r, o, a, s, l) {
        var u = f.getUid(e);
        u in t.wantedTiles || (t.wantedTiles[u] = {});
        var h,
          c,
          p,
          d,
          g,
          _,
          y = t.wantedTiles[u],
          v = t.tileQueue,
          m = 0;
        for (_ = n.getMinZoom(); _ <= a; ++_)
          for (
            c = n.getTileRangeForExtentAndZ(o, _, c),
              p = n.getResolution(_),
              d = c.minX;
            d <= c.maxX;
            ++d
          )
            for (g = c.minY; g <= c.maxY; ++g)
              a - _ <= s
                ? (++m,
                  (h = e.getTile(_, d, g, i, r)).getState() == fe &&
                    ((y[h.getKey()] = !0),
                    v.isKeyQueued(h.getKey()) ||
                      v.enqueue([h, u, n.getTileCoordCenter(h.tileCoord), p])),
                  void 0 !== l && l(h))
                : e.useTile(_, d, g, r);
        e.updateCacheSize(m, r);
      }),
      e
    );
  })(Io.default),
  Ra = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Ia = (function (t) {
    function e(e) {
      return t.call(this, e) || this;
    }
    return (
      Ra(e, t),
      (e.prototype.createRenderer = function () {
        return new ta.default(this);
      }),
      e
    );
  })(Ho.default),
  Pa = {};
e(
  Pa,
  "ATTRIBUTION",
  () => _s,
  (t) => (_s = t)
),
  e(
    Pa,
    "default",
    () => ys,
    (t) => (ys = t)
  );
var La = {};
e(
  La,
  "default",
  () => ds,
  (t) => (ds = t)
);
var Ma = {};
e(
  Ma,
  "default",
  () => ps,
  (t) => (ps = t)
);
k = a("3xzSb");
var Fa = {};
e(
  Fa,
  "default",
  () => ka,
  (t) => (ka = t)
);
g = a("4Cz58");
var Aa = (function () {
  function t(t) {
    (this.highWaterMark = void 0 !== t ? t : 2048),
      (this.count_ = 0),
      (this.entries_ = {}),
      (this.oldest_ = null),
      (this.newest_ = null);
  }
  return (
    (t.prototype.canExpireCache = function () {
      return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
    }),
    (t.prototype.expireCache = function (t) {
      for (; this.canExpireCache(); ) this.pop();
    }),
    (t.prototype.clear = function () {
      (this.count_ = 0),
        (this.entries_ = {}),
        (this.oldest_ = null),
        (this.newest_ = null);
    }),
    (t.prototype.containsKey = function (t) {
      return this.entries_.hasOwnProperty(t);
    }),
    (t.prototype.forEach = function (t) {
      for (var e = this.oldest_; e; ) t(e.value_, e.key_, this), (e = e.newer);
    }),
    (t.prototype.get = function (t, e) {
      var n = this.entries_[t];
      return (
        g.assert(void 0 !== n, 15),
        n === this.newest_ ||
          (n === this.oldest_
            ? ((this.oldest_ = this.oldest_.newer), (this.oldest_.older = null))
            : ((n.newer.older = n.older), (n.older.newer = n.newer)),
          (n.newer = null),
          (n.older = this.newest_),
          (this.newest_.newer = n),
          (this.newest_ = n)),
        n.value_
      );
    }),
    (t.prototype.remove = function (t) {
      var e = this.entries_[t];
      return (
        g.assert(void 0 !== e, 15),
        e === this.newest_
          ? ((this.newest_ = e.older),
            this.newest_ && (this.newest_.newer = null))
          : e === this.oldest_
          ? ((this.oldest_ = e.newer),
            this.oldest_ && (this.oldest_.older = null))
          : ((e.newer.older = e.older), (e.older.newer = e.newer)),
        delete this.entries_[t],
        --this.count_,
        e.value_
      );
    }),
    (t.prototype.getCount = function () {
      return this.count_;
    }),
    (t.prototype.getKeys = function () {
      var t,
        e = new Array(this.count_),
        n = 0;
      for (t = this.newest_; t; t = t.older) e[n++] = t.key_;
      return e;
    }),
    (t.prototype.getValues = function () {
      var t,
        e = new Array(this.count_),
        n = 0;
      for (t = this.newest_; t; t = t.older) e[n++] = t.value_;
      return e;
    }),
    (t.prototype.peekLast = function () {
      return this.oldest_.value_;
    }),
    (t.prototype.peekLastKey = function () {
      return this.oldest_.key_;
    }),
    (t.prototype.peekFirstKey = function () {
      return this.newest_.key_;
    }),
    (t.prototype.pop = function () {
      var t = this.oldest_;
      return (
        delete this.entries_[t.key_],
        t.newer && (t.newer.older = null),
        (this.oldest_ = t.newer),
        this.oldest_ || (this.newest_ = null),
        --this.count_,
        t.value_
      );
    }),
    (t.prototype.replace = function (t, e) {
      this.get(t), (this.entries_[t].value_ = e);
    }),
    (t.prototype.set = function (t, e) {
      g.assert(!(t in this.entries_), 16);
      var n = { key_: t, newer: null, older: this.newest_, value_: e };
      this.newest_ ? (this.newest_.newer = n) : (this.oldest_ = n),
        (this.newest_ = n),
        (this.entries_[t] = n),
        ++this.count_;
    }),
    (t.prototype.setSize = function (t) {
      this.highWaterMark = t;
    }),
    t
  );
})();
function Da(t, e, n, i) {
  return void 0 !== i ? ((i[0] = t), (i[1] = e), (i[2] = n), i) : [t, e, n];
}
function ja(t, e, n) {
  return t + "/" + e + "/" + n;
}
function Na(t) {
  return ja(t[0], t[1], t[2]);
}
var Ga = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  ka = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      Ga(e, t),
      (e.prototype.expireCache = function (t) {
        for (; this.canExpireCache(); ) {
          if (this.peekLast().getKey() in t) break;
          this.pop().release();
        }
      }),
      (e.prototype.pruneExceptNewestZ = function () {
        if (0 !== this.getCount()) {
          var t = (function (t) {
              return t.split("/").map(Number);
            })(this.peekFirstKey()),
            e = t[0];
          this.forEach(
            function (t) {
              t.tileCoord[0] !== e &&
                (this.remove(Na(t.tileCoord)), t.release());
            }.bind(this)
          );
        }
      }),
      e
    );
  })(Aa),
  za = {};
e(
  za,
  "default",
  () => ls,
  (t) => (ls = t)
);
var Ua = "tileloadstart",
  Xa = "tileloadend",
  Ya = "tileloaderror",
  Va = {};
e(
  Va,
  "TileSourceEvent",
  () => is,
  (t) => (is = t)
),
  e(
    Va,
    "default",
    () => rs,
    (t) => (rs = t)
  );
st = a("f18Q2");
var Wa = {};
e(
  Wa,
  "default",
  () => Za,
  (t) => (Za = t)
);
(vt = a("fFFY7")), (K = a("d8cxx")), (f = a("9iPUS"));
var Ka = (function () {
  var t = function (e, n) {
    return (t =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      })(e, n);
  };
  return function (e, n) {
    if ("function" != typeof n && null !== n)
      throw new TypeError(
        "Class extends value " + String(n) + " is not a constructor or null"
      );
    function i() {
      this.constructor = e;
    }
    t(e, n),
      (e.prototype =
        null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
  };
})();
function Ba(t) {
  return t
    ? Array.isArray(t)
      ? function (e) {
          return t;
        }
      : "function" == typeof t
      ? t
      : function (e) {
          return [t];
        }
    : null;
}
var Za = (function (t) {
    function e(e) {
      var n = t.call(this) || this;
      (n.projection = sn(e.projection)),
        (n.attributions_ = Ba(e.attributions)),
        (n.attributionsCollapsible_ =
          void 0 === e.attributionsCollapsible || e.attributionsCollapsible),
        (n.loading = !1),
        (n.state_ = void 0 !== e.state ? e.state : K.default.READY),
        (n.wrapX_ = void 0 !== e.wrapX && e.wrapX),
        (n.interpolate_ = !!e.interpolate),
        (n.viewResolver = null),
        (n.viewRejector = null);
      var i = n;
      return (
        (n.viewPromise_ = new Promise(function (t, e) {
          (i.viewResolver = t), (i.viewRejector = e);
        })),
        n
      );
    }
    return (
      Ka(e, t),
      (e.prototype.getAttributions = function () {
        return this.attributions_;
      }),
      (e.prototype.getAttributionsCollapsible = function () {
        return this.attributionsCollapsible_;
      }),
      (e.prototype.getProjection = function () {
        return this.projection;
      }),
      (e.prototype.getResolutions = function () {
        return f.abstract();
      }),
      (e.prototype.getView = function () {
        return this.viewPromise_;
      }),
      (e.prototype.getState = function () {
        return this.state_;
      }),
      (e.prototype.getWrapX = function () {
        return this.wrapX_;
      }),
      (e.prototype.getInterpolate = function () {
        return this.interpolate_;
      }),
      (e.prototype.refresh = function () {
        this.changed();
      }),
      (e.prototype.setAttributions = function (t) {
        (this.attributions_ = Ba(t)), this.changed();
      }),
      (e.prototype.setState = function (t) {
        (this.state_ = t), this.changed();
      }),
      e
    );
  })(vt.default),
  Ha = ((f = a("9iPUS")), (g = a("4Cz58")), a("43hY5")),
  qa =
    ((g = a("4Cz58")),
    (E = a("9byFX")),
    (C = a("9pD6L")),
    (Rn = a("fVVyM")),
    [0, 0, 0]),
  Ja = (function () {
    function t(t) {
      var e;
      if (
        ((this.minZoom = void 0 !== t.minZoom ? t.minZoom : 0),
        (this.resolutions_ = t.resolutions),
        g.assert(
          Rn.isSorted(
            this.resolutions_,
            function (t, e) {
              return e - t;
            },
            !0
          ),
          17
        ),
        !t.origins)
      )
        for (var n = 0, i = this.resolutions_.length - 1; n < i; ++n)
          if (e) {
            if (this.resolutions_[n] / this.resolutions_[n + 1] !== e) {
              e = void 0;
              break;
            }
          } else e = this.resolutions_[n] / this.resolutions_[n + 1];
      (this.zoomFactor_ = e),
        (this.maxZoom = this.resolutions_.length - 1),
        (this.origin_ = void 0 !== t.origin ? t.origin : null),
        (this.origins_ = null),
        void 0 !== t.origins &&
          ((this.origins_ = t.origins),
          g.assert(this.origins_.length == this.resolutions_.length, 20));
      var r = t.extent;
      void 0 === r ||
        this.origin_ ||
        this.origins_ ||
        (this.origin_ = C.getTopLeft(r)),
        g.assert(
          (!this.origin_ && this.origins_) || (this.origin_ && !this.origins_),
          18
        ),
        (this.tileSizes_ = null),
        void 0 !== t.tileSizes &&
          ((this.tileSizes_ = t.tileSizes),
          g.assert(this.tileSizes_.length == this.resolutions_.length, 19)),
        (this.tileSize_ =
          void 0 !== t.tileSize ? t.tileSize : this.tileSizes_ ? null : Pe),
        g.assert(
          (!this.tileSize_ && this.tileSizes_) ||
            (this.tileSize_ && !this.tileSizes_),
          22
        ),
        (this.extent_ = void 0 !== r ? r : null),
        (this.fullTileRanges_ = null),
        (this.tmpSize_ = [0, 0]),
        (this.tmpExtent_ = [0, 0, 0, 0]),
        void 0 !== t.sizes
          ? (this.fullTileRanges_ = t.sizes.map(function (t, e) {
              var n = new Oa(
                Math.min(0, t[0]),
                Math.max(t[0] - 1, -1),
                Math.min(0, t[1]),
                Math.max(t[1] - 1, -1)
              );
              if (r) {
                var i = this.getTileRangeForExtentAndZ(r, e);
                (n.minX = Math.max(i.minX, n.minX)),
                  (n.maxX = Math.min(i.maxX, n.maxX)),
                  (n.minY = Math.max(i.minY, n.minY)),
                  (n.maxY = Math.min(i.maxY, n.maxY));
              }
              return n;
            }, this))
          : r && this.calculateTileRanges_(r);
    }
    return (
      (t.prototype.forEachTileCoord = function (t, e, n) {
        for (
          var i = this.getTileRangeForExtentAndZ(t, e), r = i.minX, o = i.maxX;
          r <= o;
          ++r
        )
          for (var a = i.minY, s = i.maxY; a <= s; ++a) n([e, r, a]);
      }),
      (t.prototype.forEachTileCoordParentTileRange = function (t, e, n, i) {
        var r,
          o,
          a = null,
          s = t[0] - 1;
        for (
          2 === this.zoomFactor_
            ? ((r = t[1]), (o = t[2]))
            : (a = this.getTileCoordExtent(t, i));
          s >= this.minZoom;

        ) {
          if (
            e(
              s,
              2 === this.zoomFactor_
                ? wa((r = Math.floor(r / 2)), r, (o = Math.floor(o / 2)), o, n)
                : this.getTileRangeForExtentAndZ(a, s, n)
            )
          )
            return !0;
          --s;
        }
        return !1;
      }),
      (t.prototype.getExtent = function () {
        return this.extent_;
      }),
      (t.prototype.getMaxZoom = function () {
        return this.maxZoom;
      }),
      (t.prototype.getMinZoom = function () {
        return this.minZoom;
      }),
      (t.prototype.getOrigin = function (t) {
        return this.origin_ ? this.origin_ : this.origins_[t];
      }),
      (t.prototype.getResolution = function (t) {
        return this.resolutions_[t];
      }),
      (t.prototype.getResolutions = function () {
        return this.resolutions_;
      }),
      (t.prototype.getTileCoordChildTileRange = function (t, e, n) {
        if (t[0] < this.maxZoom) {
          if (2 === this.zoomFactor_) {
            var i = 2 * t[1],
              r = 2 * t[2];
            return wa(i, i + 1, r, r + 1, e);
          }
          var o = this.getTileCoordExtent(t, n || this.tmpExtent_);
          return this.getTileRangeForExtentAndZ(o, t[0] + 1, e);
        }
        return null;
      }),
      (t.prototype.getTileRangeForTileCoordAndZ = function (t, e, n) {
        if (e > this.maxZoom || e < this.minZoom) return null;
        var i = t[0],
          r = t[1],
          o = t[2];
        if (e === i) return wa(r, o, r, o, n);
        if (this.zoomFactor_) {
          var a = Math.pow(this.zoomFactor_, e - i),
            s = Math.floor(r * a),
            l = Math.floor(o * a);
          return e < i
            ? wa(s, s, l, l, n)
            : wa(
                s,
                Math.floor(a * (r + 1)) - 1,
                l,
                Math.floor(a * (o + 1)) - 1,
                n
              );
        }
        var u = this.getTileCoordExtent(t, this.tmpExtent_);
        return this.getTileRangeForExtentAndZ(u, e, n);
      }),
      (t.prototype.getTileRangeExtent = function (t, e, n) {
        var i = this.getOrigin(t),
          r = this.getResolution(t),
          o = Hi(this.getTileSize(t), this.tmpSize_),
          a = i[0] + e.minX * o[0] * r,
          s = i[0] + (e.maxX + 1) * o[0] * r,
          l = i[1] + e.minY * o[1] * r,
          u = i[1] + (e.maxY + 1) * o[1] * r;
        return C.createOrUpdate(a, l, s, u, n);
      }),
      (t.prototype.getTileRangeForExtentAndZ = function (t, e, n) {
        var i = qa;
        this.getTileCoordForXYAndZ_(t[0], t[3], e, !1, i);
        var r = i[1],
          o = i[2];
        return (
          this.getTileCoordForXYAndZ_(t[2], t[1], e, !0, i),
          wa(r, i[1], o, i[2], n)
        );
      }),
      (t.prototype.getTileCoordCenter = function (t) {
        var e = this.getOrigin(t[0]),
          n = this.getResolution(t[0]),
          i = Hi(this.getTileSize(t[0]), this.tmpSize_);
        return [e[0] + (t[1] + 0.5) * i[0] * n, e[1] - (t[2] + 0.5) * i[1] * n];
      }),
      (t.prototype.getTileCoordExtent = function (t, e) {
        var n = this.getOrigin(t[0]),
          i = this.getResolution(t[0]),
          r = Hi(this.getTileSize(t[0]), this.tmpSize_),
          o = n[0] + t[1] * r[0] * i,
          a = n[1] - (t[2] + 1) * r[1] * i,
          s = o + r[0] * i,
          l = a + r[1] * i;
        return C.createOrUpdate(o, a, s, l, e);
      }),
      (t.prototype.getTileCoordForCoordAndResolution = function (t, e, n) {
        return this.getTileCoordForXYAndResolution_(t[0], t[1], e, !1, n);
      }),
      (t.prototype.getTileCoordForXYAndResolution_ = function (t, e, n, i, r) {
        var o = this.getZForResolution(n),
          a = n / this.getResolution(o),
          s = this.getOrigin(o),
          l = Hi(this.getTileSize(o), this.tmpSize_),
          u = (a * (t - s[0])) / n / l[0],
          h = (a * (s[1] - e)) / n / l[1];
        return (
          i
            ? ((u = E.ceil(u, 5) - 1), (h = E.ceil(h, 5) - 1))
            : ((u = E.floor(u, 5)), (h = E.floor(h, 5))),
          Da(o, u, h, r)
        );
      }),
      (t.prototype.getTileCoordForXYAndZ_ = function (t, e, n, i, r) {
        var o = this.getOrigin(n),
          a = this.getResolution(n),
          s = Hi(this.getTileSize(n), this.tmpSize_),
          l = (t - o[0]) / a / s[0],
          u = (o[1] - e) / a / s[1];
        return (
          i
            ? ((l = E.ceil(l, 5) - 1), (u = E.ceil(u, 5) - 1))
            : ((l = E.floor(l, 5)), (u = E.floor(u, 5))),
          Da(n, l, u, r)
        );
      }),
      (t.prototype.getTileCoordForCoordAndZ = function (t, e, n) {
        return this.getTileCoordForXYAndZ_(t[0], t[1], e, !1, n);
      }),
      (t.prototype.getTileCoordResolution = function (t) {
        return this.resolutions_[t[0]];
      }),
      (t.prototype.getTileSize = function (t) {
        return this.tileSize_ ? this.tileSize_ : this.tileSizes_[t];
      }),
      (t.prototype.getFullTileRange = function (t) {
        return this.fullTileRanges_
          ? this.fullTileRanges_[t]
          : this.extent_
          ? this.getTileRangeForExtentAndZ(this.extent_, t)
          : null;
      }),
      (t.prototype.getZForResolution = function (t, e) {
        var n = Rn.linearFindNearest(this.resolutions_, t, e || 0);
        return E.clamp(n, this.minZoom, this.maxZoom);
      }),
      (t.prototype.calculateTileRanges_ = function (t) {
        for (
          var e = this.resolutions_.length, n = new Array(e), i = this.minZoom;
          i < e;
          ++i
        )
          n[i] = this.getTileRangeForExtentAndZ(t, i);
        this.fullTileRanges_ = n;
      }),
      t
    );
  })();
C = a("9pD6L");
function Qa(t) {
  var e = t.getDefaultTileGrid();
  return (
    e ||
      ((e = (function (t, e, n, i) {
        var r = ts(t);
        return (function (t, e, n, i) {
          var r = void 0 !== i ? i : Ha.default.TOP_LEFT,
            o = $a(t, e, n);
          return new Ja({
            extent: t,
            origin: C.getCorner(t, r),
            resolutions: o,
            tileSize: n,
          });
        })(r, e, n, i);
      })(t)),
      t.setDefaultTileGrid(e)),
    e
  );
}
function $a(t, e, n, i) {
  for (
    var r = void 0 !== e ? e : Ie,
      o = C.getHeight(t),
      a = C.getWidth(t),
      s = Hi(void 0 !== n ? n : Pe),
      l = i > 0 ? i : Math.max(a / s[0], o / s[1]),
      u = r + 1,
      h = new Array(u),
      c = 0;
    c < u;
    ++c
  )
    h[c] = l / Math.pow(2, c);
  return h;
}
function ts(t) {
  var e = (t = sn(t)).getExtent();
  if (!e) {
    var n = (180 * we[Oe.DEGREES]) / t.getMetersPerUnit();
    e = C.createOrUpdate(-n, -n, n, n);
  }
  return e;
}
var es = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  ns = (function (t) {
    function e(e) {
      var n =
        t.call(this, {
          attributions: e.attributions,
          attributionsCollapsible: e.attributionsCollapsible,
          projection: e.projection,
          state: e.state,
          wrapX: e.wrapX,
          interpolate: e.interpolate,
        }) || this;
      n.on,
        n.once,
        n.un,
        (n.opaque_ = void 0 !== e.opaque && e.opaque),
        (n.tilePixelRatio_ =
          void 0 !== e.tilePixelRatio ? e.tilePixelRatio : 1),
        (n.tileGrid = void 0 !== e.tileGrid ? e.tileGrid : null);
      return (
        n.tileGrid &&
          Hi(n.tileGrid.getTileSize(n.tileGrid.getMinZoom()), [256, 256]),
        (n.tileCache = new Fa.default(e.cacheSize || 0)),
        (n.tmpSize = [0, 0]),
        (n.key_ = e.key || ""),
        (n.tileOptions = {
          transition: e.transition,
          interpolate: e.interpolate,
        }),
        (n.zDirection = e.zDirection ? e.zDirection : 0),
        n
      );
    }
    return (
      es(e, t),
      (e.prototype.canExpireCache = function () {
        return this.tileCache.canExpireCache();
      }),
      (e.prototype.expireCache = function (t, e) {
        var n = this.getTileCacheForProjection(t);
        n && n.expireCache(e);
      }),
      (e.prototype.forEachLoadedTile = function (t, e, n, i) {
        var r = this.getTileCacheForProjection(t);
        if (!r) return !1;
        for (var o, a, s, l = !0, u = n.minX; u <= n.maxX; ++u)
          for (var h = n.minY; h <= n.maxY; ++h)
            (a = ja(e, u, h)),
              (s = !1),
              r.containsKey(a) &&
                (s = (o = r.get(a)).getState() === ge) &&
                (s = !1 !== i(o)),
              s || (l = !1);
        return l;
      }),
      (e.prototype.getGutterForProjection = function (t) {
        return 0;
      }),
      (e.prototype.getKey = function () {
        return this.key_;
      }),
      (e.prototype.setKey = function (t) {
        this.key_ !== t && ((this.key_ = t), this.changed());
      }),
      (e.prototype.getOpaque = function (t) {
        return this.opaque_;
      }),
      (e.prototype.getResolutions = function () {
        return this.tileGrid ? this.tileGrid.getResolutions() : null;
      }),
      (e.prototype.getTile = function (t, e, n, i, r) {
        return f.abstract();
      }),
      (e.prototype.getTileGrid = function () {
        return this.tileGrid;
      }),
      (e.prototype.getTileGridForProjection = function (t) {
        return this.tileGrid ? this.tileGrid : Qa(t);
      }),
      (e.prototype.getTileCacheForProjection = function (t) {
        return g.assert(cn(this.getProjection(), t), 68), this.tileCache;
      }),
      (e.prototype.getTilePixelRatio = function (t) {
        return this.tilePixelRatio_;
      }),
      (e.prototype.getTilePixelSize = function (t, e, n) {
        var i,
          r,
          o,
          a = this.getTileGridForProjection(n),
          s = this.getTilePixelRatio(e),
          l = Hi(a.getTileSize(t), this.tmpSize);
        return 1 == s
          ? l
          : ((i = l),
            (r = s),
            void 0 === (o = this.tmpSize) && (o = [0, 0]),
            (o[0] = (i[0] * r + 0.5) | 0),
            (o[1] = (i[1] * r + 0.5) | 0),
            o);
      }),
      (e.prototype.getTileCoordForTileUrlFunction = function (t, e) {
        var n = void 0 !== e ? e : this.getProjection(),
          i = this.getTileGridForProjection(n);
        return (
          this.getWrapX() &&
            n.isGlobal() &&
            (t = (function (t, e, n) {
              var i = e[0],
                r = t.getTileCoordCenter(e),
                o = ts(n);
              if (C.containsCoordinate(o, r)) return e;
              var a = C.getWidth(o),
                s = Math.ceil((o[0] - r[0]) / a);
              return (r[0] += a * s), t.getTileCoordForCoordAndZ(r, i);
            })(i, t, n)),
          (function (t, e) {
            var n = t[0],
              i = t[1],
              r = t[2];
            if (e.getMinZoom() > n || n > e.getMaxZoom()) return !1;
            var o = e.getFullTileRange(n);
            return !o || o.containsXY(i, r);
          })(t, i)
            ? t
            : null
        );
      }),
      (e.prototype.clear = function () {
        this.tileCache.clear();
      }),
      (e.prototype.refresh = function () {
        this.clear(), t.prototype.refresh.call(this);
      }),
      (e.prototype.updateCacheSize = function (t, e) {
        var n = this.getTileCacheForProjection(e);
        t > n.highWaterMark && (n.highWaterMark = t);
      }),
      (e.prototype.useTile = function (t, e, n, i) {}),
      e
    );
  })(Wa.default),
  is = (function (t) {
    function e(e, n) {
      var i = t.call(this, e) || this;
      return (i.tile = n), i;
    }
    return es(e, t), e;
  })(st.default),
  rs = ns;
(g = a("4Cz58")), (E = a("9byFX"));
function os(t, e) {
  var n = /\{z\}/g,
    i = /\{x\}/g,
    r = /\{y\}/g,
    o = /\{-y\}/g;
  return function (a, s, l) {
    return a
      ? t
          .replace(n, a[0].toString())
          .replace(i, a[1].toString())
          .replace(r, a[2].toString())
          .replace(o, function () {
            var t = a[0],
              n = e.getFullTileRange(t);
            return g.assert(n, 55), (n.getHeight() - a[2] - 1).toString();
          })
      : void 0;
  };
}
function as(t, e) {
  for (var n = t.length, i = new Array(n), r = 0; r < n; ++r)
    i[r] = os(t[r], e);
  return (function (t) {
    return 1 === t.length
      ? t[0]
      : function (e, n, i) {
          if (e) {
            var r = (function (t) {
                return (t[1] << t[0]) + t[2];
              })(e),
              o = E.modulo(r, t.length);
            return t[o](e, n, i);
          }
        };
  })(i);
}
f = a("9iPUS");
var ss = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  ls = (function (t) {
    function e(n) {
      var i =
        t.call(this, {
          attributions: n.attributions,
          cacheSize: n.cacheSize,
          opaque: n.opaque,
          projection: n.projection,
          state: n.state,
          tileGrid: n.tileGrid,
          tilePixelRatio: n.tilePixelRatio,
          wrapX: n.wrapX,
          transition: n.transition,
          interpolate: n.interpolate,
          key: n.key,
          attributionsCollapsible: n.attributionsCollapsible,
          zDirection: n.zDirection,
        }) || this;
      return (
        (i.generateTileUrlFunction_ =
          i.tileUrlFunction === e.prototype.tileUrlFunction),
        (i.tileLoadFunction = n.tileLoadFunction),
        n.tileUrlFunction && (i.tileUrlFunction = n.tileUrlFunction),
        (i.urls = null),
        n.urls ? i.setUrls(n.urls) : n.url && i.setUrl(n.url),
        (i.tileLoadingKeys_ = {}),
        i
      );
    }
    return (
      ss(e, t),
      (e.prototype.getTileLoadFunction = function () {
        return this.tileLoadFunction;
      }),
      (e.prototype.getTileUrlFunction = function () {
        return Object.getPrototypeOf(this).tileUrlFunction ===
          this.tileUrlFunction
          ? this.tileUrlFunction.bind(this)
          : this.tileUrlFunction;
      }),
      (e.prototype.getUrls = function () {
        return this.urls;
      }),
      (e.prototype.handleTileChange = function (t) {
        var e,
          n = t.target,
          i = f.getUid(n),
          r = n.getState();
        r == de
          ? ((this.tileLoadingKeys_[i] = !0), (e = Ua))
          : i in this.tileLoadingKeys_ &&
            (delete this.tileLoadingKeys_[i],
            (e = r == _e ? Ya : r == ge ? Xa : void 0)),
          null != e && this.dispatchEvent(new Va.TileSourceEvent(e, n));
      }),
      (e.prototype.setTileLoadFunction = function (t) {
        this.tileCache.clear(), (this.tileLoadFunction = t), this.changed();
      }),
      (e.prototype.setTileUrlFunction = function (t, e) {
        (this.tileUrlFunction = t),
          this.tileCache.pruneExceptNewestZ(),
          void 0 !== e ? this.setKey(e) : this.changed();
      }),
      (e.prototype.setUrl = function (t) {
        var e = (function (t) {
          var e = [],
            n = /\{([a-z])-([a-z])\}/.exec(t);
          if (n) {
            var i = n[1].charCodeAt(0),
              r = n[2].charCodeAt(0),
              o = void 0;
            for (o = i; o <= r; ++o)
              e.push(t.replace(n[0], String.fromCharCode(o)));
            return e;
          }
          if ((n = /\{(\d+)-(\d+)\}/.exec(t))) {
            for (
              var a = parseInt(n[2], 10), s = parseInt(n[1], 10);
              s <= a;
              s++
            )
              e.push(t.replace(n[0], s.toString()));
            return e;
          }
          return e.push(t), e;
        })(t);
        (this.urls = e), this.setUrls(e);
      }),
      (e.prototype.setUrls = function (t) {
        this.urls = t;
        var e = t.join("\n");
        this.generateTileUrlFunction_
          ? this.setTileUrlFunction(as(t, this.tileGrid), e)
          : this.setKey(e);
      }),
      (e.prototype.tileUrlFunction = function (t, e, n) {}),
      (e.prototype.useTile = function (t, e, n) {
        var i = ja(t, e, n);
        this.tileCache.containsKey(i) && this.tileCache.get(i);
      }),
      e
    );
  })(Va.default),
  us =
    ((f = a("9iPUS")),
    (function () {
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function i() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((i.prototype = n.prototype), new i()));
      };
    })()),
  hs = (function (t) {
    function e(e) {
      var n = this,
        i = void 0 === e.imageSmoothing || e.imageSmoothing;
      return (
        void 0 !== e.interpolate && (i = e.interpolate),
        ((n =
          t.call(this, {
            attributions: e.attributions,
            cacheSize: e.cacheSize,
            opaque: e.opaque,
            projection: e.projection,
            state: e.state,
            tileGrid: e.tileGrid,
            tileLoadFunction: e.tileLoadFunction ? e.tileLoadFunction : cs,
            tilePixelRatio: e.tilePixelRatio,
            tileUrlFunction: e.tileUrlFunction,
            url: e.url,
            urls: e.urls,
            wrapX: e.wrapX,
            transition: e.transition,
            interpolate: i,
            key: e.key,
            attributionsCollapsible: e.attributionsCollapsible,
            zDirection: e.zDirection,
          }) || this).crossOrigin =
          void 0 !== e.crossOrigin ? e.crossOrigin : null),
        (n.tileClass = void 0 !== e.tileClass ? e.tileClass : ea.default),
        (n.tileCacheForProjection = {}),
        (n.tileGridForProjection = {}),
        (n.reprojectionErrorThreshold_ = e.reprojectionErrorThreshold),
        (n.renderReprojectionEdges_ = !1),
        n
      );
    }
    return (
      us(e, t),
      (e.prototype.canExpireCache = function () {
        if (this.tileCache.canExpireCache()) return !0;
        for (var t in this.tileCacheForProjection)
          if (this.tileCacheForProjection[t].canExpireCache()) return !0;
        return !1;
      }),
      (e.prototype.expireCache = function (t, e) {
        var n = this.getTileCacheForProjection(t);
        for (var i in (this.tileCache.expireCache(this.tileCache == n ? e : {}),
        this.tileCacheForProjection)) {
          var r = this.tileCacheForProjection[i];
          r.expireCache(r == n ? e : {});
        }
      }),
      (e.prototype.getGutterForProjection = function (t) {
        return this.getProjection() && t && !cn(this.getProjection(), t)
          ? 0
          : this.getGutter();
      }),
      (e.prototype.getGutter = function () {
        return 0;
      }),
      (e.prototype.getKey = function () {
        var e = t.prototype.getKey.call(this);
        return this.getInterpolate() || (e += ":disable-interpolation"), e;
      }),
      (e.prototype.getOpaque = function (e) {
        return (
          !(this.getProjection() && e && !cn(this.getProjection(), e)) &&
          t.prototype.getOpaque.call(this, e)
        );
      }),
      (e.prototype.getTileGridForProjection = function (t) {
        var e = this.getProjection();
        if (!this.tileGrid || (e && !cn(e, t))) {
          var n = f.getUid(t);
          return (
            n in this.tileGridForProjection ||
              (this.tileGridForProjection[n] = Qa(t)),
            this.tileGridForProjection[n]
          );
        }
        return this.tileGrid;
      }),
      (e.prototype.getTileCacheForProjection = function (t) {
        var e = this.getProjection();
        if (!e || cn(e, t)) return this.tileCache;
        var n = f.getUid(t);
        return (
          n in this.tileCacheForProjection ||
            (this.tileCacheForProjection[n] = new Fa.default(
              this.tileCache.highWaterMark
            )),
          this.tileCacheForProjection[n]
        );
      }),
      (e.prototype.createTile_ = function (t, e, n, i, r, o) {
        var a = [t, e, n],
          s = this.getTileCoordForTileUrlFunction(a, r),
          l = s ? this.tileUrlFunction(s, i, r) : void 0,
          u = new this.tileClass(
            a,
            void 0 !== l ? fe : ye,
            void 0 !== l ? l : "",
            this.crossOrigin,
            this.tileLoadFunction,
            this.tileOptions
          );
        return (
          (u.key = o),
          u.addEventListener(
            k.default.CHANGE,
            this.handleTileChange.bind(this)
          ),
          u
        );
      }),
      (e.prototype.getTile = function (t, e, n, i, r) {
        var o = this.getProjection();
        if (o && r && !cn(o, r)) {
          var a = this.getTileCacheForProjection(r),
            s = [t, e, n],
            l = void 0,
            u = Na(s);
          a.containsKey(u) && (l = a.get(u));
          var h = this.getKey();
          if (l && l.key == h) return l;
          var c = this.getTileGridForProjection(o),
            p = this.getTileGridForProjection(r),
            f = this.getTileCoordForTileUrlFunction(s, r),
            d = new da.default(
              o,
              c,
              r,
              p,
              s,
              f,
              this.getTilePixelRatio(i),
              this.getGutter(),
              function (t, e, n, i) {
                return this.getTileInternal(t, e, n, i, o);
              }.bind(this),
              this.reprojectionErrorThreshold_,
              this.renderReprojectionEdges_,
              this.getInterpolate()
            );
          return (
            (d.key = h),
            l
              ? ((d.interimTile = l), d.refreshInterimChain(), a.replace(u, d))
              : a.set(u, d),
            d
          );
        }
        return this.getTileInternal(t, e, n, i, o || r);
      }),
      (e.prototype.getTileInternal = function (t, e, n, i, r) {
        var o = null,
          a = ja(t, e, n),
          s = this.getKey();
        if (this.tileCache.containsKey(a)) {
          if ((o = this.tileCache.get(a)).key != s) {
            var l = o;
            (o = this.createTile_(t, e, n, i, r, s)),
              l.getState() == fe
                ? (o.interimTile = l.interimTile)
                : (o.interimTile = l),
              o.refreshInterimChain(),
              this.tileCache.replace(a, o);
          }
        } else
          (o = this.createTile_(t, e, n, i, r, s)), this.tileCache.set(a, o);
        return o;
      }),
      (e.prototype.setRenderReprojectionEdges = function (t) {
        if (this.renderReprojectionEdges_ != t) {
          for (var e in ((this.renderReprojectionEdges_ = t),
          this.tileCacheForProjection))
            this.tileCacheForProjection[e].clear();
          this.changed();
        }
      }),
      (e.prototype.setTileGridForProjection = function (t, e) {
        var n = sn(t);
        if (n) {
          var i = f.getUid(n);
          i in this.tileGridForProjection ||
            (this.tileGridForProjection[i] = e);
        }
      }),
      e
    );
  })(za.default);
function cs(t, e) {
  t.getImage().src = e;
}
var ps = hs,
  fs = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  ds = (function (t) {
    function e(e) {
      var n = e || {},
        i = void 0 === n.imageSmoothing || n.imageSmoothing;
      void 0 !== n.interpolate && (i = n.interpolate);
      var r = void 0 !== n.projection ? n.projection : "EPSG:3857",
        o =
          void 0 !== n.tileGrid
            ? n.tileGrid
            : (function (t) {
                var e = t || {},
                  n = e.extent || sn("EPSG:3857").getExtent(),
                  i = {
                    extent: n,
                    minZoom: e.minZoom,
                    tileSize: e.tileSize,
                    resolutions: $a(n, e.maxZoom, e.tileSize, e.maxResolution),
                  };
                return new Ja(i);
              })({
                extent: ts(r),
                maxResolution: n.maxResolution,
                maxZoom: n.maxZoom,
                minZoom: n.minZoom,
                tileSize: n.tileSize,
              });
      return (
        t.call(this, {
          attributions: n.attributions,
          cacheSize: n.cacheSize,
          crossOrigin: n.crossOrigin,
          interpolate: i,
          opaque: n.opaque,
          projection: r,
          reprojectionErrorThreshold: n.reprojectionErrorThreshold,
          tileGrid: o,
          tileLoadFunction: n.tileLoadFunction,
          tilePixelRatio: n.tilePixelRatio,
          tileUrlFunction: n.tileUrlFunction,
          url: n.url,
          urls: n.urls,
          wrapX: void 0 === n.wrapX || n.wrapX,
          transition: n.transition,
          attributionsCollapsible: n.attributionsCollapsible,
          zDirection: n.zDirection,
        }) || this
      );
    }
    return fs(e, t), e;
  })(Ma.default),
  gs = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  _s =
    '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.',
  ys = (function (t) {
    function e(e) {
      var n,
        i = e || {},
        r = void 0 === i.imageSmoothing || i.imageSmoothing;
      void 0 !== i.interpolate && (r = i.interpolate),
        (n = void 0 !== i.attributions ? i.attributions : [_s]);
      var o = void 0 !== i.crossOrigin ? i.crossOrigin : "anonymous",
        a =
          void 0 !== i.url
            ? i.url
            : "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";
      return (
        t.call(this, {
          attributions: n,
          attributionsCollapsible: !1,
          cacheSize: i.cacheSize,
          crossOrigin: o,
          interpolate: r,
          maxZoom: void 0 !== i.maxZoom ? i.maxZoom : 19,
          opaque: void 0 === i.opaque || i.opaque,
          reprojectionErrorThreshold: i.reprojectionErrorThreshold,
          tileLoadFunction: i.tileLoadFunction,
          transition: i.transition,
          url: a,
          wrapX: i.wrapX,
          zDirection: i.zDirection,
        }) || this
      );
    }
    return gs(e, t), e;
  })(La.default),
  vs = {};
e(
  vs,
  "default",
  () => js,
  (t) => (js = t)
);
var ms = "1.3.0",
  xs = ((k = a("3xzSb")), {});
e(
  xs,
  "ImageSourceEventType",
  () => Os,
  (t) => (Os = t)
),
  e(
    xs,
    "ImageSourceEvent",
    () => Ts,
    (t) => (Ts = t)
  ),
  e(
    xs,
    "defaultImageLoadFunction",
    () => bs,
    (t) => (bs = t)
  ),
  e(
    xs,
    "default",
    () => Rs,
    (t) => (Rs = t)
  );
st = a("f18Q2");
var Cs = {};
e(
  Cs,
  "default",
  () => Ss,
  (t) => (Ss = t)
);
(k = a("3xzSb")), (C = a("9pD6L")), (Z = a("ilM9F"));
var Es = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Ss = (function (t) {
    function e(e, n, i, r, o, a, s) {
      var l = this,
        u = e.getExtent(),
        h = n.getExtent(),
        c = h ? C.getIntersection(i, h) : i,
        p = ma(e, n, C.getCenter(c), r),
        f = new _a(e, n, c, u, 0.5 * p, r),
        d = a(f.calculateSourceExtent(), p, o),
        g = d ? Lo : Do,
        _ = d ? d.getPixelRatio() : 1;
      return (
        ((l = t.call(this, i, r, _, g) || this).targetProj_ = n),
        (l.maxSourceExtent_ = u),
        (l.triangulation_ = f),
        (l.targetResolution_ = r),
        (l.targetExtent_ = i),
        (l.sourceImage_ = d),
        (l.sourcePixelRatio_ = _),
        (l.interpolate_ = s),
        (l.canvas_ = null),
        (l.sourceListenerKey_ = null),
        l
      );
    }
    return (
      Es(e, t),
      (e.prototype.disposeInternal = function () {
        this.state == Mo && this.unlistenSource_(),
          t.prototype.disposeInternal.call(this);
      }),
      (e.prototype.getImage = function () {
        return this.canvas_;
      }),
      (e.prototype.getProjection = function () {
        return this.targetProj_;
      }),
      (e.prototype.reproject_ = function () {
        var t = this.sourceImage_.getState();
        if (t == Fo) {
          var e = C.getWidth(this.targetExtent_) / this.targetResolution_,
            n = C.getHeight(this.targetExtent_) / this.targetResolution_;
          this.canvas_ = xa(
            e,
            n,
            this.sourcePixelRatio_,
            this.sourceImage_.getResolution(),
            this.maxSourceExtent_,
            this.targetResolution_,
            this.targetExtent_,
            this.triangulation_,
            [
              {
                extent: this.sourceImage_.getExtent(),
                image: this.sourceImage_.getImage(),
              },
            ],
            0,
            void 0,
            this.interpolate_
          );
        }
        (this.state = t), this.changed();
      }),
      (e.prototype.load = function () {
        if (this.state == Lo) {
          (this.state = Mo), this.changed();
          var t = this.sourceImage_.getState();
          t == Fo || t == Ao
            ? this.reproject_()
            : ((this.sourceListenerKey_ = Z.listen(
                this.sourceImage_,
                k.default.CHANGE,
                function (t) {
                  var e = this.sourceImage_.getState();
                  (e != Fo && e != Ao) ||
                    (this.unlistenSource_(), this.reproject_());
                },
                this
              )),
              this.sourceImage_.load());
        }
      }),
      (e.prototype.unlistenSource_ = function () {
        Z.unlistenByKey(this.sourceListenerKey_),
          (this.sourceListenerKey_ = null);
      }),
      e
    );
  })(aa.default),
  ws =
    ((f = a("9iPUS")),
    (C = a("9pD6L")),
    (Rn = a("fVVyM")),
    (function () {
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function i() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((i.prototype = n.prototype), new i()));
      };
    })()),
  Os = {
    IMAGELOADSTART: "imageloadstart",
    IMAGELOADEND: "imageloadend",
    IMAGELOADERROR: "imageloaderror",
  },
  Ts = (function (t) {
    function e(e, n) {
      var i = t.call(this, e) || this;
      return (i.image = n), i;
    }
    return ws(e, t), e;
  })(st.default);
function bs(t, e) {
  t.getImage().src = e;
}
var Rs = (function (t) {
    function e(e) {
      var n = this,
        i = void 0 === e.imageSmoothing || e.imageSmoothing;
      return (
        void 0 !== e.interpolate && (i = e.interpolate),
        (n =
          t.call(this, {
            attributions: e.attributions,
            projection: e.projection,
            state: e.state,
            interpolate: i,
          }) || this).on,
        n.once,
        n.un,
        (n.resolutions_ = void 0 !== e.resolutions ? e.resolutions : null),
        (n.reprojectedImage_ = null),
        (n.reprojectedRevision_ = 0),
        n
      );
    }
    return (
      ws(e, t),
      (e.prototype.getResolutions = function () {
        return this.resolutions_;
      }),
      (e.prototype.findNearestResolution = function (t) {
        if (this.resolutions_) {
          var e = Rn.linearFindNearest(this.resolutions_, t, 0);
          t = this.resolutions_[e];
        }
        return t;
      }),
      (e.prototype.getImage = function (t, e, n, i) {
        var r = this.getProjection();
        if (r && i && !cn(r, i)) {
          if (this.reprojectedImage_) {
            if (
              this.reprojectedRevision_ == this.getRevision() &&
              cn(this.reprojectedImage_.getProjection(), i) &&
              this.reprojectedImage_.getResolution() == e &&
              C.equals(this.reprojectedImage_.getExtent(), t)
            )
              return this.reprojectedImage_;
            this.reprojectedImage_.dispose(), (this.reprojectedImage_ = null);
          }
          return (
            (this.reprojectedImage_ = new Cs.default(
              r,
              i,
              t,
              e,
              n,
              function (t, e, n) {
                return this.getImageInternal(t, e, n, r);
              }.bind(this),
              this.getInterpolate()
            )),
            (this.reprojectedRevision_ = this.getRevision()),
            this.reprojectedImage_
          );
        }
        return r && (i = r), this.getImageInternal(t, e, n, i);
      }),
      (e.prototype.getImageInternal = function (t, e, n, i) {
        return f.abstract();
      }),
      (e.prototype.handleImageChange = function (t) {
        var e,
          n = t.target;
        switch (n.getState()) {
          case Mo:
            (this.loading = !0), (e = Os.IMAGELOADSTART);
            break;
          case Fo:
            (this.loading = !1), (e = Os.IMAGELOADEND);
            break;
          case Ao:
            (this.loading = !1), (e = Os.IMAGELOADERROR);
            break;
          default:
            return;
        }
        this.hasListener(e) && this.dispatchEvent(new Ts(e, n));
      }),
      e
    );
  })(Wa.default),
  Is = "carmentaserver",
  Ps = "geoserver",
  Ls = "mapserver",
  Ms = "qgis";
function Fs(t, e) {
  var n = [];
  Object.keys(e).forEach(function (t) {
    null !== e[t] &&
      void 0 !== e[t] &&
      n.push(t + "=" + encodeURIComponent(e[t]));
  });
  var i = n.join("&");
  return (
    (t = -1 === (t = t.replace(/[?&]$/, "")).indexOf("?") ? t + "?" : t + "&") +
    i
  );
}
(g = a("4Cz58")), (B = a("gn0g3")), (E = a("9byFX")), (C = a("9pD6L"));
var As = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Ds = [101, 101],
  js = (function (t) {
    function e(e) {
      var n = this,
        i = e || {},
        r = void 0 === i.imageSmoothing || i.imageSmoothing;
      return (
        void 0 !== i.interpolate && (r = i.interpolate),
        ((n =
          t.call(this, {
            attributions: i.attributions,
            interpolate: r,
            projection: i.projection,
            resolutions: i.resolutions,
          }) || this).crossOrigin_ =
          void 0 !== i.crossOrigin ? i.crossOrigin : null),
        (n.url_ = i.url),
        (n.imageLoadFunction_ =
          void 0 !== i.imageLoadFunction
            ? i.imageLoadFunction
            : xs.defaultImageLoadFunction),
        (n.params_ = i.params || {}),
        (n.v13_ = !0),
        n.updateV13_(),
        (n.serverType_ = i.serverType),
        (n.hidpi_ = void 0 === i.hidpi || i.hidpi),
        (n.image_ = null),
        (n.imageSize_ = [0, 0]),
        (n.renderedRevision_ = 0),
        (n.ratio_ = void 0 !== i.ratio ? i.ratio : 1.5),
        n
      );
    }
    return (
      As(e, t),
      (e.prototype.getFeatureInfoUrl = function (t, e, n, i) {
        if (void 0 !== this.url_) {
          var r = sn(n),
            o = this.getProjection();
          o && o !== r && ((e = ma(o, r, t, e)), (t = dn(t, r, o)));
          var a = C.getForViewAndSize(t, e, 0, Ds),
            s = {
              SERVICE: "WMS",
              VERSION: ms,
              REQUEST: "GetFeatureInfo",
              FORMAT: "image/png",
              TRANSPARENT: !0,
              QUERY_LAYERS: this.params_.LAYERS,
            };
          B.assign(s, this.params_, i);
          var l = E.floor((t[0] - a[0]) / e, 4),
            u = E.floor((a[3] - t[1]) / e, 4);
          return (
            (s[this.v13_ ? "I" : "X"] = l),
            (s[this.v13_ ? "J" : "Y"] = u),
            this.getRequestUrl_(a, Ds, 1, o || r, s)
          );
        }
      }),
      (e.prototype.getLegendUrl = function (t, e) {
        if (void 0 !== this.url_) {
          var n = {
            SERVICE: "WMS",
            VERSION: ms,
            REQUEST: "GetLegendGraphic",
            FORMAT: "image/png",
          };
          if (void 0 === e || void 0 === e.LAYER) {
            var i = this.params_.LAYERS;
            if (!(!Array.isArray(i) || 1 === i.length)) return;
            n.LAYER = i;
          }
          if (void 0 !== t) {
            var r = this.getProjection()
              ? this.getProjection().getMetersPerUnit()
              : 1;
            n.SCALE = (t * r) / 28e-5;
          }
          return B.assign(n, e), Fs(this.url_, n);
        }
      }),
      (e.prototype.getParams = function () {
        return this.params_;
      }),
      (e.prototype.getImageInternal = function (t, e, n, i) {
        if (void 0 === this.url_) return null;
        (e = this.findNearestResolution(e)),
          1 == n || (this.hidpi_ && void 0 !== this.serverType_) || (n = 1);
        var r = e / n,
          o = C.getCenter(t),
          a = E.ceil(C.getWidth(t) / r, 4),
          s = E.ceil(C.getHeight(t) / r, 4),
          l = C.getForViewAndSize(o, r, 0, [a, s]),
          u = E.ceil((this.ratio_ * C.getWidth(t)) / r, 4),
          h = E.ceil((this.ratio_ * C.getHeight(t)) / r, 4),
          c = C.getForViewAndSize(o, r, 0, [u, h]),
          p = this.image_;
        if (
          p &&
          this.renderedRevision_ == this.getRevision() &&
          p.getResolution() == e &&
          p.getPixelRatio() == n &&
          C.containsExtent(p.getExtent(), l)
        )
          return p;
        var f = {
          SERVICE: "WMS",
          VERSION: ms,
          REQUEST: "GetMap",
          FORMAT: "image/png",
          TRANSPARENT: !0,
        };
        B.assign(f, this.params_),
          (this.imageSize_[0] = E.round(C.getWidth(c) / r, 4)),
          (this.imageSize_[1] = E.round(C.getHeight(c) / r, 4));
        var d = this.getRequestUrl_(c, this.imageSize_, n, i, f);
        return (
          (this.image_ = new oa.default(
            c,
            e,
            n,
            d,
            this.crossOrigin_,
            this.imageLoadFunction_
          )),
          (this.renderedRevision_ = this.getRevision()),
          this.image_.addEventListener(
            k.default.CHANGE,
            this.handleImageChange.bind(this)
          ),
          this.image_
        );
      }),
      (e.prototype.getImageLoadFunction = function () {
        return this.imageLoadFunction_;
      }),
      (e.prototype.getRequestUrl_ = function (t, e, n, i, r) {
        if (
          (g.assert(void 0 !== this.url_, 9),
          (r[this.v13_ ? "CRS" : "SRS"] = i.getCode()),
          "STYLES" in this.params_ || (r.STYLES = ""),
          1 != n)
        )
          switch (this.serverType_) {
            case Ps:
              var o = (90 * n + 0.5) | 0;
              "FORMAT_OPTIONS" in r
                ? (r.FORMAT_OPTIONS += ";dpi:" + o)
                : (r.FORMAT_OPTIONS = "dpi:" + o);
              break;
            case Ls:
              r.MAP_RESOLUTION = 90 * n;
              break;
            case Is:
            case Ms:
              r.DPI = 90 * n;
              break;
            default:
              g.assert(!1, 8);
          }
        (r.WIDTH = e[0]), (r.HEIGHT = e[1]);
        var a,
          s = i.getAxisOrientation();
        return (
          (a =
            this.v13_ && "ne" == s.substr(0, 2) ? [t[1], t[0], t[3], t[2]] : t),
          (r.BBOX = a.join(",")),
          Fs(this.url_, r)
        );
      }),
      (e.prototype.getUrl = function () {
        return this.url_;
      }),
      (e.prototype.setImageLoadFunction = function (t) {
        (this.image_ = null), (this.imageLoadFunction_ = t), this.changed();
      }),
      (e.prototype.setUrl = function (t) {
        t != this.url_ &&
          ((this.url_ = t), (this.image_ = null), this.changed());
      }),
      (e.prototype.updateParams = function (t) {
        B.assign(this.params_, t),
          this.updateV13_(),
          (this.image_ = null),
          this.changed();
      }),
      (e.prototype.updateV13_ = function () {
        var t = this.params_.VERSION || ms;
        this.v13_ =
          (function (t, e) {
            for (
              var n = ("" + t).split("."), i = ("" + e).split("."), r = 0;
              r < Math.max(n.length, i.length);
              r++
            ) {
              var o = parseInt(n[r] || "0", 10),
                a = parseInt(i[r] || "0", 10);
              if (o > a) return 1;
              if (a > o) return -1;
            }
            return 0;
          })(t, "1.3") >= 0;
      }),
      e
    );
  })(xs.default),
  Ns = {};
Ns = (function (t, e, n) {
  (t = "default" in t ? t.default : t), (n = "default" in n ? n.default : n);
  const i = "layer-switcher-";
  class r extends t {
    constructor(t) {
      const e = Object.assign({}, t),
        n = document.createElement("div");
      super({ element: n, target: e.target }),
        (this.activationMode = e.activationMode || "mouseover"),
        (this.startActive = !0 === e.startActive),
        (this.label = void 0 !== e.label ? e.label : ""),
        (this.collapseLabel =
          void 0 !== e.collapseLabel ? e.collapseLabel : "»"),
        (this.tipLabel = e.tipLabel ? e.tipLabel : "Legend"),
        (this.collapseTipLabel = e.collapseTipLabel
          ? e.collapseTipLabel
          : "Collapse legend"),
        (this.groupSelectStyle = r.getGroupSelectStyle(e.groupSelectStyle)),
        (this.reverse = !1 !== e.reverse),
        (this.mapListeners = []),
        (this.hiddenClassName = "ol-unselectable ol-control layer-switcher"),
        r.isTouchDevice_() && (this.hiddenClassName += " touch"),
        (this.shownClassName = "shown"),
        (n.className = this.hiddenClassName),
        (this.button = document.createElement("button")),
        n.appendChild(this.button),
        (this.panel = document.createElement("div")),
        (this.panel.className = "panel"),
        n.appendChild(this.panel),
        r.enableTouchScroll_(this.panel),
        n.classList.add(i + "group-select-style-" + this.groupSelectStyle),
        n.classList.add(i + "activation-mode-" + this.activationMode),
        "click" === this.activationMode
          ? (n.classList.add("activationModeClick"),
            (this.button.onclick = (t) => {
              const e = t || window.event;
              this.element.classList.contains(this.shownClassName)
                ? this.hidePanel()
                : this.showPanel(),
                e.preventDefault();
            }))
          : ((this.button.onmouseover = () => {
              this.showPanel();
            }),
            (this.button.onclick = (t) => {
              const e = t || window.event;
              this.showPanel(), e.preventDefault();
            }),
            (this.panel.onmouseout = (t) => {
              this.panel.contains(t.relatedTarget) || this.hidePanel();
            })),
        this.updateButton();
    }
    setMap(t) {
      for (let t = 0; t < this.mapListeners.length; t++)
        e.unByKey(this.mapListeners[t]);
      (this.mapListeners.length = 0),
        super.setMap(t),
        t &&
          (this.startActive ? this.showPanel() : this.renderPanel(),
          "click" !== this.activationMode &&
            this.mapListeners.push(
              t.on("pointerdown", () => {
                this.hidePanel();
              })
            ));
    }
    showPanel() {
      this.element.classList.contains(this.shownClassName) ||
        (this.element.classList.add(this.shownClassName),
        this.updateButton(),
        this.renderPanel()),
        this.dispatchEvent("show");
    }
    hidePanel() {
      this.element.classList.contains(this.shownClassName) &&
        (this.element.classList.remove(this.shownClassName),
        this.updateButton()),
        this.dispatchEvent("hide");
    }
    updateButton() {
      this.element.classList.contains(this.shownClassName)
        ? ((this.button.textContent = this.collapseLabel),
          this.button.setAttribute("title", this.collapseTipLabel),
          this.button.setAttribute("aria-label", this.collapseTipLabel))
        : ((this.button.textContent = this.label),
          this.button.setAttribute("title", this.tipLabel),
          this.button.setAttribute("aria-label", this.tipLabel));
    }
    renderPanel() {
      this.dispatchEvent("render"),
        r.renderPanel(this.getMap(), this.panel, {
          groupSelectStyle: this.groupSelectStyle,
          reverse: this.reverse,
        }),
        this.dispatchEvent("rendercomplete");
    }
    static renderPanel(t, e, n) {
      const i = new Event("render");
      for (
        e.dispatchEvent(i),
          (n = n || {}).groupSelectStyle = r.getGroupSelectStyle(
            n.groupSelectStyle
          ),
          r.ensureTopVisibleBaseLayerShown(t, n.groupSelectStyle);
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      r.forEachRecursive(t, function (t, e, n) {
        t.set("indeterminate", !1);
      }),
        "children" === n.groupSelectStyle || "none" === n.groupSelectStyle
          ? r.setGroupVisibility(t)
          : "group" === n.groupSelectStyle && r.setChildVisibility(t);
      const o = document.createElement("ul");
      e.appendChild(o),
        r.renderLayers_(t, t, o, n, function (i) {
          r.renderPanel(t, e, n);
        });
      const a = new Event("rendercomplete");
      e.dispatchEvent(a);
    }
    static isBaseGroup(t) {
      if (t instanceof n) {
        const e = t.getLayers().getArray();
        return e.length && "base" === e[0].get("type");
      }
      return !1;
    }
    static setGroupVisibility(t) {
      r.getGroupsAndLayers(t, function (t) {
        return t instanceof n && !t.get("combine") && !r.isBaseGroup(t);
      })
        .reverse()
        .forEach(function (t) {
          const e = t.getLayersArray().map(function (t) {
            return t.getVisible();
          });
          e.every(function (t) {
            return !0 === t;
          })
            ? (t.setVisible(!0), t.set("indeterminate", !1))
            : e.every(function (t) {
                return !1 === t;
              })
            ? (t.setVisible(!1), t.set("indeterminate", !1))
            : (t.setVisible(!0), t.set("indeterminate", !0));
        });
    }
    static setChildVisibility(t) {
      r.getGroupsAndLayers(t, function (t) {
        return t instanceof n && !t.get("combine") && !r.isBaseGroup(t);
      }).forEach(function (t) {
        const e = t,
          n = e.getVisible(),
          i = e.get("indeterminate");
        e.getLayers()
          .getArray()
          .forEach(function (t) {
            t.set("indeterminate", !1),
              (n && !i) || !t.getVisible() || t.set("indeterminate", !0);
          });
      });
    }
    static ensureTopVisibleBaseLayerShown(t, e) {
      let n;
      r.forEachRecursive(t, function (t, e, i) {
        "base" === t.get("type") && t.getVisible() && (n = t);
      }),
        n && r.setVisible_(t, n, !0, e);
    }
    static getGroupsAndLayers(t, e) {
      const n = [];
      return (
        (e =
          e ||
          function (t, e, n) {
            return !0;
          }),
        r.forEachRecursive(t, function (t, i, r) {
          t.get("title") && e(t, i, r) && n.push(t);
        }),
        n
      );
    }
    static setVisible_(t, e, i, o) {
      e.setVisible(i),
        i &&
          "base" === e.get("type") &&
          r.forEachRecursive(t, function (t, n, i) {
            t != e && "base" === t.get("type") && t.setVisible(!1);
          }),
        e instanceof n &&
          !e.get("combine") &&
          "children" === o &&
          e.getLayers().forEach((n) => {
            r.setVisible_(t, n, e.getVisible(), o);
          });
    }
    static renderLayer_(t, e, o, a, s) {
      const l = document.createElement("li"),
        u = e.get("title"),
        h = r.uuid(),
        c = document.createElement("label");
      if (e instanceof n && !e.get("combine")) {
        const n = r.isBaseGroup(e);
        if (
          (l.classList.add("group"),
          n && l.classList.add(i + "base-group"),
          e.get("fold"))
        ) {
          l.classList.add(i + "fold"), l.classList.add(i + e.get("fold"));
          const t = document.createElement("button");
          (t.onclick = function (t) {
            const n = t || window.event;
            r.toggleFold_(e, l), n.preventDefault();
          }),
            l.appendChild(t);
        }
        if (!n && "none" != a.groupSelectStyle) {
          const n = document.createElement("input");
          (n.type = "checkbox"),
            (n.id = h),
            (n.checked = e.getVisible()),
            (n.indeterminate = e.get("indeterminate")),
            (n.onchange = function (n) {
              const i = n.target;
              r.setVisible_(t, e, i.checked, a.groupSelectStyle), s(e);
            }),
            l.appendChild(n),
            (c.htmlFor = h);
        }
        (c.innerHTML = u), l.appendChild(c);
        const o = document.createElement("ul");
        l.appendChild(o), r.renderLayers_(t, e, o, a, s);
      } else {
        l.className = "layer";
        const n = document.createElement("input");
        "base" === e.get("type") ? (n.type = "radio") : (n.type = "checkbox"),
          (n.id = h),
          (n.checked = e.get("visible")),
          (n.indeterminate = e.get("indeterminate")),
          (n.onchange = function (n) {
            const i = n.target;
            r.setVisible_(t, e, i.checked, a.groupSelectStyle), s(e);
          }),
          l.appendChild(n),
          (c.htmlFor = h),
          (c.innerHTML = u);
        const i = t.getView().getResolution();
        if (i >= e.getMaxResolution() || i < e.getMinResolution())
          c.className += " disabled";
        else if (e.getMinZoom && e.getMaxZoom) {
          const n = t.getView().getZoom();
          (n <= e.getMinZoom() || n > e.getMaxZoom()) &&
            (c.className += " disabled");
        }
        l.appendChild(c);
      }
      return l;
    }
    static renderLayers_(t, e, n, i, o) {
      let a = e.getLayers().getArray().slice();
      i.reverse && (a = a.reverse());
      for (let e, s = 0; s < a.length; s++)
        (e = a[s]),
          e.get("title") && n.appendChild(r.renderLayer_(t, e, s, i, o));
    }
    static forEachRecursive(t, e) {
      t.getLayers().forEach(function (t, i, o) {
        e(t, i, o), t instanceof n && r.forEachRecursive(t, e);
      });
    }
    static uuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (t) {
          const e = (16 * Math.random()) | 0;
          return ("x" == t ? e : (3 & e) | 8).toString(16);
        }
      );
    }
    static enableTouchScroll_(t) {
      if (r.isTouchDevice_()) {
        let e = 0;
        t.addEventListener(
          "touchstart",
          function (t) {
            e = this.scrollTop + t.touches[0].pageY;
          },
          !1
        ),
          t.addEventListener(
            "touchmove",
            function (t) {
              this.scrollTop = e - t.touches[0].pageY;
            },
            !1
          );
      }
    }
    static isTouchDevice_() {
      try {
        return document.createEvent("TouchEvent"), !0;
      } catch (t) {
        return !1;
      }
    }
    static toggleFold_(t, e) {
      e.classList.remove(i + t.get("fold")),
        t.set("fold", "open" === t.get("fold") ? "close" : "open"),
        e.classList.add(i + t.get("fold"));
    }
    static getGroupSelectStyle(t) {
      return ["none", "children", "group"].indexOf(t) >= 0 ? t : "children";
    }
  }
  return (
    window.ol && window.ol.control && (window.ol.control.LayerSwitcher = r), r
  );
})(a("fVglf"), a("2FcER"), a("YSU3I"));
Kt = a("YSU3I");
var Gs = {};
e(
  Gs,
  "default",
  () => Su,
  (t) => (Su = t)
);
var ks = {};
e(
  ks,
  "default",
  () => il,
  (t) => (il = t)
);
var zs = {};
zs = (function () {
  function t(t, i, r, o, a) {
    !(function t(n, i, r, o, a) {
      for (; o > r; ) {
        if (o - r > 600) {
          var s = o - r + 1,
            l = i - r + 1,
            u = Math.log(s),
            h = 0.5 * Math.exp((2 * u) / 3),
            c =
              0.5 * Math.sqrt((u * h * (s - h)) / s) * (l - s / 2 < 0 ? -1 : 1);
          t(
            n,
            i,
            Math.max(r, Math.floor(i - (l * h) / s + c)),
            Math.min(o, Math.floor(i + ((s - l) * h) / s + c)),
            a
          );
        }
        var p = n[i],
          f = r,
          d = o;
        for (e(n, r, i), a(n[o], p) > 0 && e(n, r, o); f < d; ) {
          for (e(n, f, d), f++, d--; a(n[f], p) < 0; ) f++;
          for (; a(n[d], p) > 0; ) d--;
        }
        0 === a(n[r], p) ? e(n, r, d) : e(n, ++d, o),
          d <= i && (r = d + 1),
          i <= d && (o = d - 1);
      }
    })(t, i, r || 0, o || t.length - 1, a || n);
  }
  function e(t, e, n) {
    var i = t[e];
    (t[e] = t[n]), (t[n] = i);
  }
  function n(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
  }
  var i = function (t) {
    void 0 === t && (t = 9),
      (this._maxEntries = Math.max(4, t)),
      (this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries))),
      this.clear();
  };
  function r(t, e, n) {
    if (!n) return e.indexOf(t);
    for (var i = 0; i < e.length; i++) if (n(t, e[i])) return i;
    return -1;
  }
  function o(t, e) {
    a(t, 0, t.children.length, e, t);
  }
  function a(t, e, n, i, r) {
    r || (r = d(null)),
      (r.minX = 1 / 0),
      (r.minY = 1 / 0),
      (r.maxX = -1 / 0),
      (r.maxY = -1 / 0);
    for (var o = e; o < n; o++) {
      var a = t.children[o];
      s(r, t.leaf ? i(a) : a);
    }
    return r;
  }
  function s(t, e) {
    return (
      (t.minX = Math.min(t.minX, e.minX)),
      (t.minY = Math.min(t.minY, e.minY)),
      (t.maxX = Math.max(t.maxX, e.maxX)),
      (t.maxY = Math.max(t.maxY, e.maxY)),
      t
    );
  }
  function l(t, e) {
    return t.minX - e.minX;
  }
  function u(t, e) {
    return t.minY - e.minY;
  }
  function h(t) {
    return (t.maxX - t.minX) * (t.maxY - t.minY);
  }
  function c(t) {
    return t.maxX - t.minX + (t.maxY - t.minY);
  }
  function p(t, e) {
    return (
      t.minX <= e.minX &&
      t.minY <= e.minY &&
      e.maxX <= t.maxX &&
      e.maxY <= t.maxY
    );
  }
  function f(t, e) {
    return (
      e.minX <= t.maxX &&
      e.minY <= t.maxY &&
      e.maxX >= t.minX &&
      e.maxY >= t.minY
    );
  }
  function d(t) {
    return {
      children: t,
      height: 1,
      leaf: !0,
      minX: 1 / 0,
      minY: 1 / 0,
      maxX: -1 / 0,
      maxY: -1 / 0,
    };
  }
  function g(e, n, i, r, o) {
    for (var a = [n, i]; a.length; )
      if (!((i = a.pop()) - (n = a.pop()) <= r)) {
        var s = n + Math.ceil((i - n) / r / 2) * r;
        t(e, s, n, i, o), a.push(n, s, s, i);
      }
  }
  return (
    (i.prototype.all = function () {
      return this._all(this.data, []);
    }),
    (i.prototype.search = function (t) {
      var e = this.data,
        n = [];
      if (!f(t, e)) return n;
      for (var i = this.toBBox, r = []; e; ) {
        for (var o = 0; o < e.children.length; o++) {
          var a = e.children[o],
            s = e.leaf ? i(a) : a;
          f(t, s) &&
            (e.leaf ? n.push(a) : p(t, s) ? this._all(a, n) : r.push(a));
        }
        e = r.pop();
      }
      return n;
    }),
    (i.prototype.collides = function (t) {
      var e = this.data;
      if (!f(t, e)) return !1;
      for (var n = []; e; ) {
        for (var i = 0; i < e.children.length; i++) {
          var r = e.children[i],
            o = e.leaf ? this.toBBox(r) : r;
          if (f(t, o)) {
            if (e.leaf || p(t, o)) return !0;
            n.push(r);
          }
        }
        e = n.pop();
      }
      return !1;
    }),
    (i.prototype.load = function (t) {
      if (!t || !t.length) return this;
      if (t.length < this._minEntries) {
        for (var e = 0; e < t.length; e++) this.insert(t[e]);
        return this;
      }
      var n = this._build(t.slice(), 0, t.length - 1, 0);
      if (this.data.children.length)
        if (this.data.height === n.height) this._splitRoot(this.data, n);
        else {
          if (this.data.height < n.height) {
            var i = this.data;
            (this.data = n), (n = i);
          }
          this._insert(n, this.data.height - n.height - 1, !0);
        }
      else this.data = n;
      return this;
    }),
    (i.prototype.insert = function (t) {
      return t && this._insert(t, this.data.height - 1), this;
    }),
    (i.prototype.clear = function () {
      return (this.data = d([])), this;
    }),
    (i.prototype.remove = function (t, e) {
      if (!t) return this;
      for (
        var n, i, o, a = this.data, s = this.toBBox(t), l = [], u = [];
        a || l.length;

      ) {
        if (
          (a || ((a = l.pop()), (i = l[l.length - 1]), (n = u.pop()), (o = !0)),
          a.leaf)
        ) {
          var h = r(t, a.children, e);
          if (-1 !== h)
            return a.children.splice(h, 1), l.push(a), this._condense(l), this;
        }
        o || a.leaf || !p(a, s)
          ? i
            ? (n++, (a = i.children[n]), (o = !1))
            : (a = null)
          : (l.push(a), u.push(n), (n = 0), (i = a), (a = a.children[0]));
      }
      return this;
    }),
    (i.prototype.toBBox = function (t) {
      return t;
    }),
    (i.prototype.compareMinX = function (t, e) {
      return t.minX - e.minX;
    }),
    (i.prototype.compareMinY = function (t, e) {
      return t.minY - e.minY;
    }),
    (i.prototype.toJSON = function () {
      return this.data;
    }),
    (i.prototype.fromJSON = function (t) {
      return (this.data = t), this;
    }),
    (i.prototype._all = function (t, e) {
      for (var n = []; t; )
        t.leaf ? e.push.apply(e, t.children) : n.push.apply(n, t.children),
          (t = n.pop());
      return e;
    }),
    (i.prototype._build = function (t, e, n, i) {
      var r,
        a = n - e + 1,
        s = this._maxEntries;
      if (a <= s) return o((r = d(t.slice(e, n + 1))), this.toBBox), r;
      i ||
        ((i = Math.ceil(Math.log(a) / Math.log(s))),
        (s = Math.ceil(a / Math.pow(s, i - 1)))),
        ((r = d([])).leaf = !1),
        (r.height = i);
      var l = Math.ceil(a / s),
        u = l * Math.ceil(Math.sqrt(s));
      g(t, e, n, u, this.compareMinX);
      for (var h = e; h <= n; h += u) {
        var c = Math.min(h + u - 1, n);
        g(t, h, c, l, this.compareMinY);
        for (var p = h; p <= c; p += l) {
          var f = Math.min(p + l - 1, c);
          r.children.push(this._build(t, p, f, i - 1));
        }
      }
      return o(r, this.toBBox), r;
    }),
    (i.prototype._chooseSubtree = function (t, e, n, i) {
      for (; i.push(e), !e.leaf && i.length - 1 !== n; ) {
        for (
          var r = 1 / 0, o = 1 / 0, a = void 0, s = 0;
          s < e.children.length;
          s++
        ) {
          var l = e.children[s],
            u = h(l),
            c =
              ((p = t),
              (f = l),
              (Math.max(f.maxX, p.maxX) - Math.min(f.minX, p.minX)) *
                (Math.max(f.maxY, p.maxY) - Math.min(f.minY, p.minY)) -
                u);
          c < o
            ? ((o = c), (r = u < r ? u : r), (a = l))
            : c === o && u < r && ((r = u), (a = l));
        }
        e = a || e.children[0];
      }
      var p, f;
      return e;
    }),
    (i.prototype._insert = function (t, e, n) {
      var i = n ? t : this.toBBox(t),
        r = [],
        o = this._chooseSubtree(i, this.data, e, r);
      for (
        o.children.push(t), s(o, i);
        e >= 0 && r[e].children.length > this._maxEntries;

      )
        this._split(r, e), e--;
      this._adjustParentBBoxes(i, r, e);
    }),
    (i.prototype._split = function (t, e) {
      var n = t[e],
        i = n.children.length,
        r = this._minEntries;
      this._chooseSplitAxis(n, r, i);
      var a = this._chooseSplitIndex(n, r, i),
        s = d(n.children.splice(a, n.children.length - a));
      (s.height = n.height),
        (s.leaf = n.leaf),
        o(n, this.toBBox),
        o(s, this.toBBox),
        e ? t[e - 1].children.push(s) : this._splitRoot(n, s);
    }),
    (i.prototype._splitRoot = function (t, e) {
      (this.data = d([t, e])),
        (this.data.height = t.height + 1),
        (this.data.leaf = !1),
        o(this.data, this.toBBox);
    }),
    (i.prototype._chooseSplitIndex = function (t, e, n) {
      for (
        var i, r, o, s, l, u, c, p = 1 / 0, f = 1 / 0, d = e;
        d <= n - e;
        d++
      ) {
        var g = a(t, 0, d, this.toBBox),
          _ = a(t, d, n, this.toBBox),
          y =
            ((r = g),
            (o = _),
            (s = void 0),
            (l = void 0),
            (u = void 0),
            (c = void 0),
            (s = Math.max(r.minX, o.minX)),
            (l = Math.max(r.minY, o.minY)),
            (u = Math.min(r.maxX, o.maxX)),
            (c = Math.min(r.maxY, o.maxY)),
            Math.max(0, u - s) * Math.max(0, c - l)),
          v = h(g) + h(_);
        y < p
          ? ((p = y), (i = d), (f = v < f ? v : f))
          : y === p && v < f && ((f = v), (i = d));
      }
      return i || n - e;
    }),
    (i.prototype._chooseSplitAxis = function (t, e, n) {
      var i = t.leaf ? this.compareMinX : l,
        r = t.leaf ? this.compareMinY : u;
      this._allDistMargin(t, e, n, i) < this._allDistMargin(t, e, n, r) &&
        t.children.sort(i);
    }),
    (i.prototype._allDistMargin = function (t, e, n, i) {
      t.children.sort(i);
      for (
        var r = this.toBBox,
          o = a(t, 0, e, r),
          l = a(t, n - e, n, r),
          u = c(o) + c(l),
          h = e;
        h < n - e;
        h++
      ) {
        var p = t.children[h];
        s(o, t.leaf ? r(p) : p), (u += c(o));
      }
      for (var f = n - e - 1; f >= e; f--) {
        var d = t.children[f];
        s(l, t.leaf ? r(d) : d), (u += c(l));
      }
      return u;
    }),
    (i.prototype._adjustParentBBoxes = function (t, e, n) {
      for (var i = n; i >= 0; i--) s(e[i], t);
    }),
    (i.prototype._condense = function (t) {
      for (var e = t.length - 1, n = void 0; e >= 0; e--)
        0 === t[e].children.length
          ? e > 0
            ? (n = t[e - 1].children).splice(n.indexOf(t[e]), 1)
            : this.clear()
          : o(t[e], this.toBBox);
    }),
    i
  );
})();
B = a("gn0g3");
var Us = {};
e(
  Us,
  "default",
  () => Zs,
  (t) => (Zs = t)
);
var Xs = {};
e(
  Xs,
  "default",
  () => Ks,
  (t) => (Ks = t)
);
f = a("9iPUS");
var Ys = (function () {
  function t(t) {
    (this.opacity_ = t.opacity),
      (this.rotateWithView_ = t.rotateWithView),
      (this.rotation_ = t.rotation),
      (this.scale_ = t.scale),
      (this.scaleArray_ = Hi(t.scale)),
      (this.displacement_ = t.displacement);
  }
  return (
    (t.prototype.clone = function () {
      var e = this.getScale();
      return new t({
        opacity: this.getOpacity(),
        scale: Array.isArray(e) ? e.slice() : e,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        displacement: this.getDisplacement().slice(),
      });
    }),
    (t.prototype.getOpacity = function () {
      return this.opacity_;
    }),
    (t.prototype.getRotateWithView = function () {
      return this.rotateWithView_;
    }),
    (t.prototype.getRotation = function () {
      return this.rotation_;
    }),
    (t.prototype.getScale = function () {
      return this.scale_;
    }),
    (t.prototype.getScaleArray = function () {
      return this.scaleArray_;
    }),
    (t.prototype.getDisplacement = function () {
      return this.displacement_;
    }),
    (t.prototype.getAnchor = function () {
      return f.abstract();
    }),
    (t.prototype.getImage = function (t) {
      return f.abstract();
    }),
    (t.prototype.getHitDetectionImage = function () {
      return f.abstract();
    }),
    (t.prototype.getPixelRatio = function (t) {
      return 1;
    }),
    (t.prototype.getImageState = function () {
      return f.abstract();
    }),
    (t.prototype.getImageSize = function () {
      return f.abstract();
    }),
    (t.prototype.getOrigin = function () {
      return f.abstract();
    }),
    (t.prototype.getSize = function () {
      return f.abstract();
    }),
    (t.prototype.setDisplacement = function (t) {
      this.displacement_ = t;
    }),
    (t.prototype.setOpacity = function (t) {
      this.opacity_ = t;
    }),
    (t.prototype.setRotateWithView = function (t) {
      this.rotateWithView_ = t;
    }),
    (t.prototype.setRotation = function (t) {
      this.rotation_ = t;
    }),
    (t.prototype.setScale = function (t) {
      (this.scale_ = t), (this.scaleArray_ = Hi(t));
    }),
    (t.prototype.listenImageChange = function (t) {
      f.abstract();
    }),
    (t.prototype.load = function () {
      f.abstract();
    }),
    (t.prototype.unlistenImageChange = function (t) {
      f.abstract();
    }),
    t
  );
})();
function Vs(t) {
  return Array.isArray(t) ? M(t) : t;
}
xt = a("DfnQm");
var Ws = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Ks = (function (t) {
    function e(e) {
      var n = this,
        i = void 0 !== e.rotateWithView && e.rotateWithView;
      return (
        ((n =
          t.call(this, {
            opacity: 1,
            rotateWithView: i,
            rotation: void 0 !== e.rotation ? e.rotation : 0,
            scale: void 0 !== e.scale ? e.scale : 1,
            displacement: void 0 !== e.displacement ? e.displacement : [0, 0],
          }) || this).canvas_ = void 0),
        (n.hitDetectionCanvas_ = null),
        (n.fill_ = void 0 !== e.fill ? e.fill : null),
        (n.origin_ = [0, 0]),
        (n.points_ = e.points),
        (n.radius_ = void 0 !== e.radius ? e.radius : e.radius1),
        (n.radius2_ = e.radius2),
        (n.angle_ = void 0 !== e.angle ? e.angle : 0),
        (n.stroke_ = void 0 !== e.stroke ? e.stroke : null),
        (n.size_ = null),
        (n.renderOptions_ = null),
        n.render(),
        n
      );
    }
    return (
      Ws(e, t),
      (e.prototype.clone = function () {
        var t = this.getScale(),
          n = new e({
            fill: this.getFill() ? this.getFill().clone() : void 0,
            points: this.getPoints(),
            radius: this.getRadius(),
            radius2: this.getRadius2(),
            angle: this.getAngle(),
            stroke: this.getStroke() ? this.getStroke().clone() : void 0,
            rotation: this.getRotation(),
            rotateWithView: this.getRotateWithView(),
            scale: Array.isArray(t) ? t.slice() : t,
            displacement: this.getDisplacement().slice(),
          });
        return n.setOpacity(this.getOpacity()), n;
      }),
      (e.prototype.getAnchor = function () {
        var t = this.size_;
        if (!t) return null;
        var e = this.getDisplacement();
        return [t[0] / 2 - e[0], t[1] / 2 + e[1]];
      }),
      (e.prototype.getAngle = function () {
        return this.angle_;
      }),
      (e.prototype.getFill = function () {
        return this.fill_;
      }),
      (e.prototype.getHitDetectionImage = function () {
        return (
          this.hitDetectionCanvas_ ||
            this.createHitDetectionCanvas_(this.renderOptions_),
          this.hitDetectionCanvas_
        );
      }),
      (e.prototype.getImage = function (t) {
        var e = this.canvas_[t];
        if (!e) {
          var n = this.renderOptions_,
            i = xt.createCanvasContext2D(n.size * t, n.size * t);
          this.draw_(n, i, t), (e = i.canvas), (this.canvas_[t] = e);
        }
        return e;
      }),
      (e.prototype.getPixelRatio = function (t) {
        return t;
      }),
      (e.prototype.getImageSize = function () {
        return this.size_;
      }),
      (e.prototype.getImageState = function () {
        return Fo;
      }),
      (e.prototype.getOrigin = function () {
        return this.origin_;
      }),
      (e.prototype.getPoints = function () {
        return this.points_;
      }),
      (e.prototype.getRadius = function () {
        return this.radius_;
      }),
      (e.prototype.getRadius2 = function () {
        return this.radius2_;
      }),
      (e.prototype.getSize = function () {
        return this.size_;
      }),
      (e.prototype.getStroke = function () {
        return this.stroke_;
      }),
      (e.prototype.listenImageChange = function (t) {}),
      (e.prototype.load = function () {}),
      (e.prototype.unlistenImageChange = function (t) {}),
      (e.prototype.calculateLineJoinSize_ = function (t, e, n) {
        if (
          0 === e ||
          this.points_ === 1 / 0 ||
          ("bevel" !== t && "miter" !== t)
        )
          return e;
        var i = this.radius_,
          r = void 0 === this.radius2_ ? i : this.radius2_;
        if (i < r) {
          var o = i;
          (i = r), (r = o);
        }
        var a = void 0 === this.radius2_ ? this.points_ : 2 * this.points_,
          s = (2 * Math.PI) / a,
          l = r * Math.sin(s),
          u = i - Math.sqrt(r * r - l * l),
          h = Math.sqrt(l * l + u * u),
          c = h / l;
        if ("miter" === t && c <= n) return c * e;
        var p = e / 2 / c,
          f = (e / 2) * (u / h),
          d = Math.sqrt((i + p) * (i + p) + f * f) - i;
        if (void 0 === this.radius2_ || "bevel" === t) return 2 * d;
        var g = i * Math.sin(s),
          _ = r - Math.sqrt(i * i - g * g),
          y = Math.sqrt(g * g + _ * _) / g;
        if (y <= n) {
          var v = (y * e) / 2 - r - i;
          return 2 * Math.max(d, v);
        }
        return 2 * d;
      }),
      (e.prototype.createRenderOptions = function () {
        var t,
          e = Ot,
          n = 0,
          i = null,
          r = 0,
          o = 0;
        this.stroke_ &&
          (null === (t = this.stroke_.getColor()) && (t = Tt),
          (t = Vs(t)),
          void 0 === (o = this.stroke_.getWidth()) && (o = 1),
          (i = this.stroke_.getLineDash()),
          (r = this.stroke_.getLineDashOffset()),
          void 0 === (e = this.stroke_.getLineJoin()) && (e = Ot),
          void 0 === (n = this.stroke_.getMiterLimit()) && (n = 10));
        var a = this.calculateLineJoinSize_(e, o, n),
          s = Math.max(this.radius_, this.radius2_ || 0);
        return {
          strokeStyle: t,
          strokeWidth: o,
          size: Math.ceil(2 * s + a),
          lineDash: i,
          lineDashOffset: r,
          lineJoin: e,
          miterLimit: n,
        };
      }),
      (e.prototype.render = function () {
        this.renderOptions_ = this.createRenderOptions();
        var t = this.renderOptions_.size;
        (this.canvas_ = {}), (this.size_ = [t, t]);
      }),
      (e.prototype.draw_ = function (t, e, n) {
        if (
          (e.scale(n, n),
          e.translate(t.size / 2, t.size / 2),
          this.createPath_(e),
          this.fill_)
        ) {
          var i = this.fill_.getColor();
          null === i && (i = Et), (e.fillStyle = Vs(i)), e.fill();
        }
        this.stroke_ &&
          ((e.strokeStyle = t.strokeStyle),
          (e.lineWidth = t.strokeWidth),
          e.setLineDash &&
            t.lineDash &&
            (e.setLineDash(t.lineDash), (e.lineDashOffset = t.lineDashOffset)),
          (e.lineJoin = t.lineJoin),
          (e.miterLimit = t.miterLimit),
          e.stroke());
      }),
      (e.prototype.createHitDetectionCanvas_ = function (t) {
        if (this.fill_) {
          var e = this.fill_.getColor(),
            n = 0;
          if (
            ("string" == typeof e && (e = P(e)),
            null === e
              ? (n = 1)
              : Array.isArray(e) && (n = 4 === e.length ? e[3] : 1),
            0 === n)
          ) {
            var i = xt.createCanvasContext2D(t.size, t.size);
            (this.hitDetectionCanvas_ = i.canvas),
              this.drawHitDetectionCanvas_(t, i);
          }
        }
        this.hitDetectionCanvas_ ||
          (this.hitDetectionCanvas_ = this.getImage(1));
      }),
      (e.prototype.createPath_ = function (t) {
        var e = this.points_,
          n = this.radius_;
        if (e === 1 / 0) t.arc(0, 0, n, 0, 2 * Math.PI);
        else {
          var i = void 0 === this.radius2_ ? n : this.radius2_;
          void 0 !== this.radius2_ && (e *= 2);
          for (
            var r = this.angle_ - Math.PI / 2, o = (2 * Math.PI) / e, a = 0;
            a < e;
            a++
          ) {
            var s = r + a * o,
              l = a % 2 == 0 ? n : i;
            t.lineTo(l * Math.cos(s), l * Math.sin(s));
          }
          t.closePath();
        }
      }),
      (e.prototype.drawHitDetectionCanvas_ = function (t, e) {
        e.translate(t.size / 2, t.size / 2),
          this.createPath_(e),
          (e.fillStyle = Et),
          e.fill(),
          this.stroke_ &&
            ((e.strokeStyle = t.strokeStyle),
            (e.lineWidth = t.strokeWidth),
            t.lineDash &&
              (e.setLineDash(t.lineDash),
              (e.lineDashOffset = t.lineDashOffset)),
            (e.lineJoin = t.lineJoin),
            (e.miterLimit = t.miterLimit),
            e.stroke());
      }),
      e
    );
  })(Ys),
  Bs = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Zs = (function (t) {
    function e(e) {
      var n = e || {};
      return (
        t.call(this, {
          points: 1 / 0,
          fill: n.fill,
          radius: n.radius,
          stroke: n.stroke,
          scale: void 0 !== n.scale ? n.scale : 1,
          rotation: void 0 !== n.rotation ? n.rotation : 0,
          rotateWithView: void 0 !== n.rotateWithView && n.rotateWithView,
          displacement: void 0 !== n.displacement ? n.displacement : [0, 0],
        }) || this
      );
    }
    return (
      Bs(e, t),
      (e.prototype.clone = function () {
        var t = this.getScale(),
          n = new e({
            fill: this.getFill() ? this.getFill().clone() : void 0,
            stroke: this.getStroke() ? this.getStroke().clone() : void 0,
            radius: this.getRadius(),
            scale: Array.isArray(t) ? t.slice() : t,
            rotation: this.getRotation(),
            rotateWithView: this.getRotateWithView(),
            displacement: this.getDisplacement().slice(),
          });
        return n.setOpacity(this.getOpacity()), n;
      }),
      (e.prototype.setRadius = function (t) {
        (this.radius_ = t), this.render();
      }),
      e
    );
  })(Xs.default),
  Hs = (function () {
    function t(t) {
      var e = t || {};
      this.color_ = void 0 !== e.color ? e.color : null;
    }
    return (
      (t.prototype.clone = function () {
        var e = this.getColor();
        return new t({ color: Array.isArray(e) ? e.slice() : e || void 0 });
      }),
      (t.prototype.getColor = function () {
        return this.color_;
      }),
      (t.prototype.setColor = function (t) {
        this.color_ = t;
      }),
      t
    );
  })(),
  qs = (function () {
    function t(t) {
      var e = t || {};
      (this.color_ = void 0 !== e.color ? e.color : null),
        (this.lineCap_ = e.lineCap),
        (this.lineDash_ = void 0 !== e.lineDash ? e.lineDash : null),
        (this.lineDashOffset_ = e.lineDashOffset),
        (this.lineJoin_ = e.lineJoin),
        (this.miterLimit_ = e.miterLimit),
        (this.width_ = e.width);
    }
    return (
      (t.prototype.clone = function () {
        var e = this.getColor();
        return new t({
          color: Array.isArray(e) ? e.slice() : e || void 0,
          lineCap: this.getLineCap(),
          lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
          lineDashOffset: this.getLineDashOffset(),
          lineJoin: this.getLineJoin(),
          miterLimit: this.getMiterLimit(),
          width: this.getWidth(),
        });
      }),
      (t.prototype.getColor = function () {
        return this.color_;
      }),
      (t.prototype.getLineCap = function () {
        return this.lineCap_;
      }),
      (t.prototype.getLineDash = function () {
        return this.lineDash_;
      }),
      (t.prototype.getLineDashOffset = function () {
        return this.lineDashOffset_;
      }),
      (t.prototype.getLineJoin = function () {
        return this.lineJoin_;
      }),
      (t.prototype.getMiterLimit = function () {
        return this.miterLimit_;
      }),
      (t.prototype.getWidth = function () {
        return this.width_;
      }),
      (t.prototype.setColor = function (t) {
        this.color_ = t;
      }),
      (t.prototype.setLineCap = function (t) {
        this.lineCap_ = t;
      }),
      (t.prototype.setLineDash = function (t) {
        this.lineDash_ = t;
      }),
      (t.prototype.setLineDashOffset = function (t) {
        this.lineDashOffset_ = t;
      }),
      (t.prototype.setLineJoin = function (t) {
        this.lineJoin_ = t;
      }),
      (t.prototype.setMiterLimit = function (t) {
        this.miterLimit_ = t;
      }),
      (t.prototype.setWidth = function (t) {
        this.width_ = t;
      }),
      t
    );
  })(),
  Js =
    ((g = a("4Cz58")),
    (function () {
      function t(t) {
        var e = t || {};
        (this.geometry_ = null),
          (this.geometryFunction_ = tl),
          void 0 !== e.geometry && this.setGeometry(e.geometry),
          (this.fill_ = void 0 !== e.fill ? e.fill : null),
          (this.image_ = void 0 !== e.image ? e.image : null),
          (this.renderer_ = void 0 !== e.renderer ? e.renderer : null),
          (this.hitDetectionRenderer_ =
            void 0 !== e.hitDetectionRenderer ? e.hitDetectionRenderer : null),
          (this.stroke_ = void 0 !== e.stroke ? e.stroke : null),
          (this.text_ = void 0 !== e.text ? e.text : null),
          (this.zIndex_ = e.zIndex);
      }
      return (
        (t.prototype.clone = function () {
          var e = this.getGeometry();
          return (
            e && "object" == typeof e && (e = e.clone()),
            new t({
              geometry: e,
              fill: this.getFill() ? this.getFill().clone() : void 0,
              image: this.getImage() ? this.getImage().clone() : void 0,
              renderer: this.getRenderer(),
              stroke: this.getStroke() ? this.getStroke().clone() : void 0,
              text: this.getText() ? this.getText().clone() : void 0,
              zIndex: this.getZIndex(),
            })
          );
        }),
        (t.prototype.getRenderer = function () {
          return this.renderer_;
        }),
        (t.prototype.setRenderer = function (t) {
          this.renderer_ = t;
        }),
        (t.prototype.setHitDetectionRenderer = function (t) {
          this.hitDetectionRenderer_ = t;
        }),
        (t.prototype.getHitDetectionRenderer = function () {
          return this.hitDetectionRenderer_;
        }),
        (t.prototype.getGeometry = function () {
          return this.geometry_;
        }),
        (t.prototype.getGeometryFunction = function () {
          return this.geometryFunction_;
        }),
        (t.prototype.getFill = function () {
          return this.fill_;
        }),
        (t.prototype.setFill = function (t) {
          this.fill_ = t;
        }),
        (t.prototype.getImage = function () {
          return this.image_;
        }),
        (t.prototype.setImage = function (t) {
          this.image_ = t;
        }),
        (t.prototype.getStroke = function () {
          return this.stroke_;
        }),
        (t.prototype.setStroke = function (t) {
          this.stroke_ = t;
        }),
        (t.prototype.getText = function () {
          return this.text_;
        }),
        (t.prototype.setText = function (t) {
          this.text_ = t;
        }),
        (t.prototype.getZIndex = function () {
          return this.zIndex_;
        }),
        (t.prototype.setGeometry = function (t) {
          "function" == typeof t
            ? (this.geometryFunction_ = t)
            : "string" == typeof t
            ? (this.geometryFunction_ = function (e) {
                return e.get(t);
              })
            : t
            ? void 0 !== t &&
              (this.geometryFunction_ = function () {
                return t;
              })
            : (this.geometryFunction_ = tl),
            (this.geometry_ = t);
        }),
        (t.prototype.setZIndex = function (t) {
          this.zIndex_ = t;
        }),
        t
      );
    })());
var Qs = null;
function $s(t, e) {
  if (!Qs) {
    var n = new Hs({ color: "rgba(255,255,255,0.4)" }),
      i = new qs({ color: "#3399CC", width: 1.25 });
    Qs = [
      new Js({
        image: new Us.default({ fill: n, stroke: i, radius: 5 }),
        fill: n,
        stroke: i,
      }),
    ];
  }
  return Qs;
}
function tl(t) {
  return t.getGeometry();
}
var el = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  nl = "renderOrder",
  il = (function (t) {
    function e(e) {
      var n = this,
        i = e || {},
        r = B.assign({}, i);
      return (
        delete r.style,
        delete r.renderBuffer,
        delete r.updateWhileAnimating,
        delete r.updateWhileInteracting,
        ((n = t.call(this, r) || this).declutter_ =
          void 0 !== i.declutter && i.declutter),
        (n.renderBuffer_ = void 0 !== i.renderBuffer ? i.renderBuffer : 100),
        (n.style_ = null),
        (n.styleFunction_ = void 0),
        n.setStyle(i.style),
        (n.updateWhileAnimating_ =
          void 0 !== i.updateWhileAnimating && i.updateWhileAnimating),
        (n.updateWhileInteracting_ =
          void 0 !== i.updateWhileInteracting && i.updateWhileInteracting),
        n
      );
    }
    return (
      el(e, t),
      (e.prototype.getDeclutter = function () {
        return this.declutter_;
      }),
      (e.prototype.getFeatures = function (e) {
        return t.prototype.getFeatures.call(this, e);
      }),
      (e.prototype.getRenderBuffer = function () {
        return this.renderBuffer_;
      }),
      (e.prototype.getRenderOrder = function () {
        return this.get(nl);
      }),
      (e.prototype.getStyle = function () {
        return this.style_;
      }),
      (e.prototype.getStyleFunction = function () {
        return this.styleFunction_;
      }),
      (e.prototype.getUpdateWhileAnimating = function () {
        return this.updateWhileAnimating_;
      }),
      (e.prototype.getUpdateWhileInteracting = function () {
        return this.updateWhileInteracting_;
      }),
      (e.prototype.renderDeclutter = function (t) {
        t.declutterTree || (t.declutterTree = new (n(zs))(9)),
          this.getRenderer().renderDeclutter(t);
      }),
      (e.prototype.setRenderOrder = function (t) {
        this.set(nl, t);
      }),
      (e.prototype.setStyle = function (t) {
        (this.style_ = void 0 !== t ? t : $s),
          (this.styleFunction_ =
            null === t
              ? void 0
              : (function (t) {
                  var e;
                  if ("function" == typeof t) e = t;
                  else {
                    var n;
                    Array.isArray(t)
                      ? (n = t)
                      : (g.assert("function" == typeof t.getZIndex, 41),
                        (n = [t])),
                      (e = function () {
                        return n;
                      });
                  }
                  return e;
                })(this.style_)),
          this.changed();
      }),
      e
    );
  })(j.default),
  rl = {};
e(
  rl,
  "default",
  () => Cu,
  (t) => (Cu = t)
);
var ol = {};
e(
  ol,
  "default",
  () => gl,
  (t) => (gl = t)
);
var al = {
    BEGIN_GEOMETRY: 0,
    BEGIN_PATH: 1,
    CIRCLE: 2,
    CLOSE_PATH: 3,
    CUSTOM: 4,
    DRAW_CHARS: 5,
    DRAW_IMAGE: 6,
    END_GEOMETRY: 7,
    FILL: 8,
    MOVE_TO_LINE_TO: 9,
    SET_FILL_STYLE: 10,
    SET_STROKE_STYLE: 11,
    STROKE: 12,
  },
  sl = [al.FILL],
  ll = [al.STROKE],
  ul = [al.BEGIN_PATH],
  hl = [al.CLOSE_PATH],
  cl = al,
  pl = a("iM9A6"),
  fl = (function () {
    function t() {}
    return (
      (t.prototype.drawCustom = function (t, e, n, i) {}),
      (t.prototype.drawGeometry = function (t) {}),
      (t.prototype.setStyle = function (t) {}),
      (t.prototype.drawCircle = function (t, e) {}),
      (t.prototype.drawFeature = function (t, e) {}),
      (t.prototype.drawGeometryCollection = function (t, e) {}),
      (t.prototype.drawLineString = function (t, e) {}),
      (t.prototype.drawMultiLineString = function (t, e) {}),
      (t.prototype.drawMultiPoint = function (t, e) {}),
      (t.prototype.drawMultiPolygon = function (t, e) {}),
      (t.prototype.drawPoint = function (t, e) {}),
      (t.prototype.drawPolygon = function (t, e) {}),
      (t.prototype.drawText = function (t, e) {}),
      (t.prototype.setFillStrokeStyle = function (t, e) {}),
      (t.prototype.setImageStyle = function (t, e) {}),
      (t.prototype.setTextStyle = function (t, e) {}),
      t
    );
  })(),
  dl =
    ((C = a("9pD6L")),
    (Rn = a("fVVyM")),
    (function () {
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function i() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((i.prototype = n.prototype), new i()));
      };
    })()),
  gl = (function (t) {
    function e(e, n, i, r) {
      var o = t.call(this) || this;
      return (
        (o.tolerance = e),
        (o.maxExtent = n),
        (o.pixelRatio = r),
        (o.maxLineWidth = 0),
        (o.resolution = i),
        (o.beginGeometryInstruction1_ = null),
        (o.beginGeometryInstruction2_ = null),
        (o.bufferedMaxExtent_ = null),
        (o.instructions = []),
        (o.coordinates = []),
        (o.tmpCoordinate_ = []),
        (o.hitDetectionInstructions = []),
        (o.state = {}),
        o
      );
    }
    return (
      dl(e, t),
      (e.prototype.applyPixelRatio = function (t) {
        var e = this.pixelRatio;
        return 1 == e
          ? t
          : t.map(function (t) {
              return t * e;
            });
      }),
      (e.prototype.appendFlatPointCoordinates = function (t, e) {
        for (
          var n = this.getBufferedMaxExtent(),
            i = this.tmpCoordinate_,
            r = this.coordinates,
            o = r.length,
            a = 0,
            s = t.length;
          a < s;
          a += e
        )
          (i[0] = t[a]),
            (i[1] = t[a + 1]),
            C.containsCoordinate(n, i) && ((r[o++] = i[0]), (r[o++] = i[1]));
        return o;
      }),
      (e.prototype.appendFlatLineCoordinates = function (t, e, n, i, r, o) {
        var a = this.coordinates,
          s = a.length,
          l = this.getBufferedMaxExtent();
        o && (e += i);
        var u,
          h,
          c,
          p = t[e],
          f = t[e + 1],
          d = this.tmpCoordinate_,
          g = !0;
        for (u = e + i; u < n; u += i)
          (d[0] = t[u]),
            (d[1] = t[u + 1]),
            (c = C.coordinateRelationship(l, d)) !== h
              ? (g && ((a[s++] = p), (a[s++] = f), (g = !1)),
                (a[s++] = d[0]),
                (a[s++] = d[1]))
              : c === pl.default.INTERSECTING
              ? ((a[s++] = d[0]), (a[s++] = d[1]), (g = !1))
              : (g = !0),
            (p = d[0]),
            (f = d[1]),
            (h = c);
        return ((r && g) || u === e + i) && ((a[s++] = p), (a[s++] = f)), s;
      }),
      (e.prototype.drawCustomCoordinates_ = function (t, e, n, i, r) {
        for (var o = 0, a = n.length; o < a; ++o) {
          var s = n[o],
            l = this.appendFlatLineCoordinates(t, e, s, i, !1, !1);
          r.push(l), (e = s);
        }
        return e;
      }),
      (e.prototype.drawCustom = function (t, e, n, i) {
        this.beginGeometry(t, e);
        var r,
          o,
          a,
          s,
          l,
          u = t.getType(),
          h = t.getStride(),
          c = this.coordinates.length;
        switch (u) {
          case Ee.MULTI_POLYGON:
            (r = t.getOrientedFlatCoordinates()), (s = []);
            var p = t.getEndss();
            l = 0;
            for (var f = 0, d = p.length; f < d; ++f) {
              var g = [];
              (l = this.drawCustomCoordinates_(r, l, p[f], h, g)), s.push(g);
            }
            this.instructions.push([cl.CUSTOM, c, s, t, n, pi]),
              this.hitDetectionInstructions.push([
                cl.CUSTOM,
                c,
                s,
                t,
                i || n,
                pi,
              ]);
            break;
          case Ee.POLYGON:
          case Ee.MULTI_LINE_STRING:
            (a = []),
              (r =
                u == Ee.POLYGON
                  ? t.getOrientedFlatCoordinates()
                  : t.getFlatCoordinates()),
              (l = this.drawCustomCoordinates_(r, 0, t.getEnds(), h, a)),
              this.instructions.push([cl.CUSTOM, c, a, t, n, ci]),
              this.hitDetectionInstructions.push([
                cl.CUSTOM,
                c,
                a,
                t,
                i || n,
                ci,
              ]);
            break;
          case Ee.LINE_STRING:
          case Ee.CIRCLE:
            (r = t.getFlatCoordinates()),
              (o = this.appendFlatLineCoordinates(r, 0, r.length, h, !1, !1)),
              this.instructions.push([cl.CUSTOM, c, o, t, n, hi]),
              this.hitDetectionInstructions.push([
                cl.CUSTOM,
                c,
                o,
                t,
                i || n,
                hi,
              ]);
            break;
          case Ee.MULTI_POINT:
            (r = t.getFlatCoordinates()),
              (o = this.appendFlatPointCoordinates(r, h)) > c &&
                (this.instructions.push([cl.CUSTOM, c, o, t, n, hi]),
                this.hitDetectionInstructions.push([
                  cl.CUSTOM,
                  c,
                  o,
                  t,
                  i || n,
                  hi,
                ]));
            break;
          case Ee.POINT:
            (r = t.getFlatCoordinates()),
              this.coordinates.push(r[0], r[1]),
              (o = this.coordinates.length),
              this.instructions.push([cl.CUSTOM, c, o, t, n]),
              this.hitDetectionInstructions.push([cl.CUSTOM, c, o, t, i || n]);
        }
        this.endGeometry(e);
      }),
      (e.prototype.beginGeometry = function (t, e) {
        (this.beginGeometryInstruction1_ = [cl.BEGIN_GEOMETRY, e, 0, t]),
          this.instructions.push(this.beginGeometryInstruction1_),
          (this.beginGeometryInstruction2_ = [cl.BEGIN_GEOMETRY, e, 0, t]),
          this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
      }),
      (e.prototype.finish = function () {
        return {
          instructions: this.instructions,
          hitDetectionInstructions: this.hitDetectionInstructions,
          coordinates: this.coordinates,
        };
      }),
      (e.prototype.reverseHitDetectionInstructions = function () {
        var t,
          e = this.hitDetectionInstructions;
        e.reverse();
        var n,
          i,
          r = e.length,
          o = -1;
        for (t = 0; t < r; ++t)
          (i = (n = e[t])[0]) == cl.END_GEOMETRY
            ? (o = t)
            : i == cl.BEGIN_GEOMETRY &&
              ((n[2] = t),
              Rn.reverseSubArray(this.hitDetectionInstructions, o, t),
              (o = -1));
      }),
      (e.prototype.setFillStrokeStyle = function (t, e) {
        var n = this.state;
        if (t) {
          var i = t.getColor();
          n.fillStyle = Vs(i || Et);
        } else n.fillStyle = void 0;
        if (e) {
          var r = e.getColor();
          n.strokeStyle = Vs(r || Tt);
          var o = e.getLineCap();
          n.lineCap = void 0 !== o ? o : St;
          var a = e.getLineDash();
          n.lineDash = a ? a.slice() : wt;
          var s = e.getLineDashOffset();
          n.lineDashOffset = s || 0;
          var l = e.getLineJoin();
          n.lineJoin = void 0 !== l ? l : Ot;
          var u = e.getWidth();
          n.lineWidth = void 0 !== u ? u : 1;
          var h = e.getMiterLimit();
          (n.miterLimit = void 0 !== h ? h : 10),
            n.lineWidth > this.maxLineWidth &&
              ((this.maxLineWidth = n.lineWidth),
              (this.bufferedMaxExtent_ = null));
        } else
          (n.strokeStyle = void 0),
            (n.lineCap = void 0),
            (n.lineDash = null),
            (n.lineDashOffset = void 0),
            (n.lineJoin = void 0),
            (n.lineWidth = void 0),
            (n.miterLimit = void 0);
      }),
      (e.prototype.createFill = function (t) {
        var e = t.fillStyle,
          n = [cl.SET_FILL_STYLE, e];
        return "string" != typeof e && n.push(!0), n;
      }),
      (e.prototype.applyStroke = function (t) {
        this.instructions.push(this.createStroke(t));
      }),
      (e.prototype.createStroke = function (t) {
        return [
          cl.SET_STROKE_STYLE,
          t.strokeStyle,
          t.lineWidth * this.pixelRatio,
          t.lineCap,
          t.lineJoin,
          t.miterLimit,
          this.applyPixelRatio(t.lineDash),
          t.lineDashOffset * this.pixelRatio,
        ];
      }),
      (e.prototype.updateFillStyle = function (t, e) {
        var n = t.fillStyle;
        ("string" == typeof n && t.currentFillStyle == n) ||
          (void 0 !== n && this.instructions.push(e.call(this, t)),
          (t.currentFillStyle = n));
      }),
      (e.prototype.updateStrokeStyle = function (t, e) {
        var n = t.strokeStyle,
          i = t.lineCap,
          r = t.lineDash,
          o = t.lineDashOffset,
          a = t.lineJoin,
          s = t.lineWidth,
          l = t.miterLimit;
        (t.currentStrokeStyle != n ||
          t.currentLineCap != i ||
          (r != t.currentLineDash && !Rn.equals(t.currentLineDash, r)) ||
          t.currentLineDashOffset != o ||
          t.currentLineJoin != a ||
          t.currentLineWidth != s ||
          t.currentMiterLimit != l) &&
          (void 0 !== n && e.call(this, t),
          (t.currentStrokeStyle = n),
          (t.currentLineCap = i),
          (t.currentLineDash = r),
          (t.currentLineDashOffset = o),
          (t.currentLineJoin = a),
          (t.currentLineWidth = s),
          (t.currentMiterLimit = l));
      }),
      (e.prototype.endGeometry = function (t) {
        (this.beginGeometryInstruction1_[2] = this.instructions.length),
          (this.beginGeometryInstruction1_ = null),
          (this.beginGeometryInstruction2_[2] =
            this.hitDetectionInstructions.length),
          (this.beginGeometryInstruction2_ = null);
        var e = [cl.END_GEOMETRY, t];
        this.instructions.push(e), this.hitDetectionInstructions.push(e);
      }),
      (e.prototype.getBufferedMaxExtent = function () {
        if (
          !this.bufferedMaxExtent_ &&
          ((this.bufferedMaxExtent_ = C.clone(this.maxExtent)),
          this.maxLineWidth > 0)
        ) {
          var t = (this.resolution * (this.maxLineWidth + 1)) / 2;
          C.buffer(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_);
        }
        return this.bufferedMaxExtent_;
      }),
      e
    );
  })(fl),
  _l = {};
e(
  _l,
  "default",
  () => vl,
  (t) => (vl = t)
);
var yl = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  vl = (function (t) {
    function e(e, n, i, r) {
      var o = t.call(this, e, n, i, r) || this;
      return (
        (o.hitDetectionImage_ = null),
        (o.image_ = null),
        (o.imagePixelRatio_ = void 0),
        (o.anchorX_ = void 0),
        (o.anchorY_ = void 0),
        (o.height_ = void 0),
        (o.opacity_ = void 0),
        (o.originX_ = void 0),
        (o.originY_ = void 0),
        (o.rotateWithView_ = void 0),
        (o.rotation_ = void 0),
        (o.scale_ = void 0),
        (o.width_ = void 0),
        (o.declutterImageWithText_ = void 0),
        o
      );
    }
    return (
      yl(e, t),
      (e.prototype.drawPoint = function (t, e) {
        if (this.image_) {
          this.beginGeometry(t, e);
          var n = t.getFlatCoordinates(),
            i = t.getStride(),
            r = this.coordinates.length,
            o = this.appendFlatPointCoordinates(n, i);
          this.instructions.push([
            cl.DRAW_IMAGE,
            r,
            o,
            this.image_,
            this.anchorX_ * this.imagePixelRatio_,
            this.anchorY_ * this.imagePixelRatio_,
            Math.ceil(this.height_ * this.imagePixelRatio_),
            this.opacity_,
            this.originX_,
            this.originY_,
            this.rotateWithView_,
            this.rotation_,
            [
              (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
              (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
            ],
            Math.ceil(this.width_ * this.imagePixelRatio_),
            this.declutterImageWithText_,
          ]),
            this.hitDetectionInstructions.push([
              cl.DRAW_IMAGE,
              r,
              o,
              this.hitDetectionImage_,
              this.anchorX_,
              this.anchorY_,
              this.height_,
              this.opacity_,
              this.originX_,
              this.originY_,
              this.rotateWithView_,
              this.rotation_,
              this.scale_,
              this.width_,
              this.declutterImageWithText_,
            ]),
            this.endGeometry(e);
        }
      }),
      (e.prototype.drawMultiPoint = function (t, e) {
        if (this.image_) {
          this.beginGeometry(t, e);
          var n = t.getFlatCoordinates(),
            i = t.getStride(),
            r = this.coordinates.length,
            o = this.appendFlatPointCoordinates(n, i);
          this.instructions.push([
            cl.DRAW_IMAGE,
            r,
            o,
            this.image_,
            this.anchorX_ * this.imagePixelRatio_,
            this.anchorY_ * this.imagePixelRatio_,
            Math.ceil(this.height_ * this.imagePixelRatio_),
            this.opacity_,
            this.originX_,
            this.originY_,
            this.rotateWithView_,
            this.rotation_,
            [
              (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
              (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
            ],
            Math.ceil(this.width_ * this.imagePixelRatio_),
            this.declutterImageWithText_,
          ]),
            this.hitDetectionInstructions.push([
              cl.DRAW_IMAGE,
              r,
              o,
              this.hitDetectionImage_,
              this.anchorX_,
              this.anchorY_,
              this.height_,
              this.opacity_,
              this.originX_,
              this.originY_,
              this.rotateWithView_,
              this.rotation_,
              this.scale_,
              this.width_,
              this.declutterImageWithText_,
            ]),
            this.endGeometry(e);
        }
      }),
      (e.prototype.finish = function () {
        return (
          this.reverseHitDetectionInstructions(),
          (this.anchorX_ = void 0),
          (this.anchorY_ = void 0),
          (this.hitDetectionImage_ = null),
          (this.image_ = null),
          (this.imagePixelRatio_ = void 0),
          (this.height_ = void 0),
          (this.scale_ = void 0),
          (this.opacity_ = void 0),
          (this.originX_ = void 0),
          (this.originY_ = void 0),
          (this.rotateWithView_ = void 0),
          (this.rotation_ = void 0),
          (this.width_ = void 0),
          t.prototype.finish.call(this)
        );
      }),
      (e.prototype.setImageStyle = function (t, e) {
        var n = t.getAnchor(),
          i = t.getSize(),
          r = t.getHitDetectionImage(),
          o = t.getImage(this.pixelRatio),
          a = t.getOrigin();
        (this.imagePixelRatio_ = t.getPixelRatio(this.pixelRatio)),
          (this.anchorX_ = n[0]),
          (this.anchorY_ = n[1]),
          (this.hitDetectionImage_ = r),
          (this.image_ = o),
          (this.height_ = i[1]),
          (this.opacity_ = t.getOpacity()),
          (this.originX_ = a[0] * this.imagePixelRatio_),
          (this.originY_ = a[1] * this.imagePixelRatio_),
          (this.rotateWithView_ = t.getRotateWithView()),
          (this.rotation_ = t.getRotation()),
          (this.scale_ = t.getScaleArray()),
          (this.width_ = i[0]),
          (this.declutterImageWithText_ = e);
      }),
      e
    );
  })(ol.default),
  ml = {};
e(
  ml,
  "default",
  () => Cl,
  (t) => (Cl = t)
);
var xl = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Cl = (function (t) {
    function e(e, n, i, r) {
      return t.call(this, e, n, i, r) || this;
    }
    return (
      xl(e, t),
      (e.prototype.drawFlatCoordinates_ = function (t, e, n, i) {
        var r = this.coordinates.length,
          o = this.appendFlatLineCoordinates(t, e, n, i, !1, !1),
          a = [cl.MOVE_TO_LINE_TO, r, o];
        return (
          this.instructions.push(a), this.hitDetectionInstructions.push(a), n
        );
      }),
      (e.prototype.drawLineString = function (t, e) {
        var n = this.state,
          i = n.strokeStyle,
          r = n.lineWidth;
        if (void 0 !== i && void 0 !== r) {
          this.updateStrokeStyle(n, this.applyStroke),
            this.beginGeometry(t, e),
            this.hitDetectionInstructions.push(
              [
                cl.SET_STROKE_STYLE,
                n.strokeStyle,
                n.lineWidth,
                n.lineCap,
                n.lineJoin,
                n.miterLimit,
                wt,
                0,
              ],
              ul
            );
          var o = t.getFlatCoordinates(),
            a = t.getStride();
          this.drawFlatCoordinates_(o, 0, o.length, a),
            this.hitDetectionInstructions.push(ll),
            this.endGeometry(e);
        }
      }),
      (e.prototype.drawMultiLineString = function (t, e) {
        var n = this.state,
          i = n.strokeStyle,
          r = n.lineWidth;
        if (void 0 !== i && void 0 !== r) {
          this.updateStrokeStyle(n, this.applyStroke),
            this.beginGeometry(t, e),
            this.hitDetectionInstructions.push(
              [
                cl.SET_STROKE_STYLE,
                n.strokeStyle,
                n.lineWidth,
                n.lineCap,
                n.lineJoin,
                n.miterLimit,
                n.lineDash,
                n.lineDashOffset,
              ],
              ul
            );
          for (
            var o = t.getEnds(),
              a = t.getFlatCoordinates(),
              s = t.getStride(),
              l = 0,
              u = 0,
              h = o.length;
            u < h;
            ++u
          )
            l = this.drawFlatCoordinates_(a, l, o[u], s);
          this.hitDetectionInstructions.push(ll), this.endGeometry(e);
        }
      }),
      (e.prototype.finish = function () {
        var e = this.state;
        return (
          null != e.lastStroke &&
            e.lastStroke != this.coordinates.length &&
            this.instructions.push(ll),
          this.reverseHitDetectionInstructions(),
          (this.state = null),
          t.prototype.finish.call(this)
        );
      }),
      (e.prototype.applyStroke = function (e) {
        null != e.lastStroke &&
          e.lastStroke != this.coordinates.length &&
          (this.instructions.push(ll),
          (e.lastStroke = this.coordinates.length)),
          (e.lastStroke = 0),
          t.prototype.applyStroke.call(this, e),
          this.instructions.push(ul);
      }),
      e
    );
  })(ol.default),
  El = {};
e(
  El,
  "default",
  () => wl,
  (t) => (wl = t)
);
var Sl = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  wl = (function (t) {
    function e(e, n, i, r) {
      return t.call(this, e, n, i, r) || this;
    }
    return (
      Sl(e, t),
      (e.prototype.drawFlatCoordinatess_ = function (t, e, n, i) {
        var r = this.state,
          o = void 0 !== r.fillStyle,
          a = void 0 !== r.strokeStyle,
          s = n.length;
        this.instructions.push(ul), this.hitDetectionInstructions.push(ul);
        for (var l = 0; l < s; ++l) {
          var u = n[l],
            h = this.coordinates.length,
            c = this.appendFlatLineCoordinates(t, e, u, i, !0, !a),
            p = [cl.MOVE_TO_LINE_TO, h, c];
          this.instructions.push(p),
            this.hitDetectionInstructions.push(p),
            a &&
              (this.instructions.push(hl),
              this.hitDetectionInstructions.push(hl)),
            (e = u);
        }
        return (
          o &&
            (this.instructions.push(sl),
            this.hitDetectionInstructions.push(sl)),
          a &&
            (this.instructions.push(ll),
            this.hitDetectionInstructions.push(ll)),
          e
        );
      }),
      (e.prototype.drawCircle = function (t, e) {
        var n = this.state,
          i = n.fillStyle,
          r = n.strokeStyle;
        if (void 0 !== i || void 0 !== r) {
          this.setFillStrokeStyles_(),
            this.beginGeometry(t, e),
            void 0 !== n.fillStyle &&
              this.hitDetectionInstructions.push([cl.SET_FILL_STYLE, Et]),
            void 0 !== n.strokeStyle &&
              this.hitDetectionInstructions.push([
                cl.SET_STROKE_STYLE,
                n.strokeStyle,
                n.lineWidth,
                n.lineCap,
                n.lineJoin,
                n.miterLimit,
                n.lineDash,
                n.lineDashOffset,
              ]);
          var o = t.getFlatCoordinates(),
            a = t.getStride(),
            s = this.coordinates.length;
          this.appendFlatLineCoordinates(o, 0, o.length, a, !1, !1);
          var l = [cl.CIRCLE, s];
          this.instructions.push(ul, l),
            this.hitDetectionInstructions.push(ul, l),
            void 0 !== n.fillStyle &&
              (this.instructions.push(sl),
              this.hitDetectionInstructions.push(sl)),
            void 0 !== n.strokeStyle &&
              (this.instructions.push(ll),
              this.hitDetectionInstructions.push(ll)),
            this.endGeometry(e);
        }
      }),
      (e.prototype.drawPolygon = function (t, e) {
        var n = this.state,
          i = n.fillStyle,
          r = n.strokeStyle;
        if (void 0 !== i || void 0 !== r) {
          this.setFillStrokeStyles_(),
            this.beginGeometry(t, e),
            void 0 !== n.fillStyle &&
              this.hitDetectionInstructions.push([cl.SET_FILL_STYLE, Et]),
            void 0 !== n.strokeStyle &&
              this.hitDetectionInstructions.push([
                cl.SET_STROKE_STYLE,
                n.strokeStyle,
                n.lineWidth,
                n.lineCap,
                n.lineJoin,
                n.miterLimit,
                n.lineDash,
                n.lineDashOffset,
              ]);
          var o = t.getEnds(),
            a = t.getOrientedFlatCoordinates(),
            s = t.getStride();
          this.drawFlatCoordinatess_(a, 0, o, s), this.endGeometry(e);
        }
      }),
      (e.prototype.drawMultiPolygon = function (t, e) {
        var n = this.state,
          i = n.fillStyle,
          r = n.strokeStyle;
        if (void 0 !== i || void 0 !== r) {
          this.setFillStrokeStyles_(),
            this.beginGeometry(t, e),
            void 0 !== n.fillStyle &&
              this.hitDetectionInstructions.push([cl.SET_FILL_STYLE, Et]),
            void 0 !== n.strokeStyle &&
              this.hitDetectionInstructions.push([
                cl.SET_STROKE_STYLE,
                n.strokeStyle,
                n.lineWidth,
                n.lineCap,
                n.lineJoin,
                n.miterLimit,
                n.lineDash,
                n.lineDashOffset,
              ]);
          for (
            var o = t.getEndss(),
              a = t.getOrientedFlatCoordinates(),
              s = t.getStride(),
              l = 0,
              u = 0,
              h = o.length;
            u < h;
            ++u
          )
            l = this.drawFlatCoordinatess_(a, l, o[u], s);
          this.endGeometry(e);
        }
      }),
      (e.prototype.finish = function () {
        this.reverseHitDetectionInstructions(), (this.state = null);
        var e = this.tolerance;
        if (0 !== e)
          for (var n = this.coordinates, i = 0, r = n.length; i < r; ++i)
            n[i] = si(n[i], e);
        return t.prototype.finish.call(this);
      }),
      (e.prototype.setFillStrokeStyles_ = function () {
        var t = this.state;
        void 0 !== t.fillStyle && this.updateFillStyle(t, this.createFill),
          void 0 !== t.strokeStyle &&
            this.updateStrokeStyle(t, this.applyStroke);
      }),
      e
    );
  })(ol.default),
  Ol = {};
e(
  Ol,
  "TEXT_ALIGN",
  () => Il,
  (t) => (Il = t)
),
  e(
    Ol,
    "default",
    () => Pl,
    (t) => (Pl = t)
  );
var Tl = "line";
(f = a("9iPUS")), (C = a("9pD6L"));
function bl(t, e, n, i, r) {
  var o,
    a,
    s,
    l,
    u,
    h,
    c,
    p,
    f,
    d = n,
    g = n,
    _ = 0,
    y = 0,
    v = n;
  for (o = n; o < i; o += r) {
    var m = e[o],
      x = e[o + 1];
    void 0 !== l &&
      ((p = m - l),
      (f = x - u),
      (s = Math.sqrt(p * p + f * f)),
      void 0 !== h &&
        ((y += a),
        Math.acos((h * p + c * f) / (a * s)) > t &&
          (y > _ && ((_ = y), (d = v), (g = o)), (y = 0), (v = o - r))),
      (a = s),
      (h = p),
      (c = f)),
      (l = m),
      (u = x);
  }
  return (y += s) > _ ? [v, o] : [d, g];
}
var Rl = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Il = {
    left: 0,
    end: 0,
    center: 0.5,
    right: 1,
    start: 1,
    top: 0,
    middle: 0.5,
    hanging: 0.2,
    alphabetic: 0.8,
    ideographic: 0.8,
    bottom: 1,
  },
  Pl = (function (t) {
    function e(e, n, i, r) {
      var o = t.call(this, e, n, i, r) || this;
      return (
        (o.labels_ = null),
        (o.text_ = ""),
        (o.textOffsetX_ = 0),
        (o.textOffsetY_ = 0),
        (o.textRotateWithView_ = void 0),
        (o.textRotation_ = 0),
        (o.textFillState_ = null),
        (o.fillStates = {}),
        (o.textStrokeState_ = null),
        (o.strokeStates = {}),
        (o.textState_ = {}),
        (o.textStates = {}),
        (o.textKey_ = ""),
        (o.fillKey_ = ""),
        (o.strokeKey_ = ""),
        (o.declutterImageWithText_ = void 0),
        o
      );
    }
    return (
      Rl(e, t),
      (e.prototype.finish = function () {
        var e = t.prototype.finish.call(this);
        return (
          (e.textStates = this.textStates),
          (e.fillStates = this.fillStates),
          (e.strokeStates = this.strokeStates),
          e
        );
      }),
      (e.prototype.drawText = function (t, e) {
        var n = this.textFillState_,
          i = this.textStrokeState_,
          r = this.textState_;
        if ("" !== this.text_ && r && (n || i)) {
          var o = this.coordinates,
            a = o.length,
            s = t.getType(),
            l = null,
            u = t.getStride();
          if (
            r.placement !== Tl ||
            (s != Ee.LINE_STRING &&
              s != Ee.MULTI_LINE_STRING &&
              s != Ee.POLYGON &&
              s != Ee.MULTI_POLYGON)
          ) {
            var h = r.overflow ? null : [];
            switch (s) {
              case Ee.POINT:
              case Ee.MULTI_POINT:
                l = t.getFlatCoordinates();
                break;
              case Ee.LINE_STRING:
                l = t.getFlatMidpoint();
                break;
              case Ee.CIRCLE:
                l = t.getCenter();
                break;
              case Ee.MULTI_LINE_STRING:
                (l = t.getFlatMidpoints()), (u = 2);
                break;
              case Ee.POLYGON:
                (l = t.getFlatInteriorPoint()),
                  r.overflow || h.push(l[2] / this.resolution),
                  (u = 3);
                break;
              case Ee.MULTI_POLYGON:
                var c = t.getFlatInteriorPoints();
                l = [];
                for (S = 0, w = c.length; S < w; S += 3)
                  r.overflow || h.push(c[S + 2] / this.resolution),
                    l.push(c[S], c[S + 1]);
                if (0 === l.length) return;
                u = 2;
            }
            if ((L = this.appendFlatPointCoordinates(l, u)) === a) return;
            if (h && (L - a) / 2 != l.length / u) {
              var p = a / 2;
              h = h.filter(function (t, e) {
                var n =
                  o[2 * (p + e)] === l[e * u] &&
                  o[2 * (p + e) + 1] === l[e * u + 1];
                return n || --p, n;
              });
            }
            this.saveTextStates_(),
              (r.backgroundFill || r.backgroundStroke) &&
                (this.setFillStrokeStyle(r.backgroundFill, r.backgroundStroke),
                r.backgroundFill &&
                  (this.updateFillStyle(this.state, this.createFill),
                  this.hitDetectionInstructions.push(
                    this.createFill(this.state)
                  )),
                r.backgroundStroke &&
                  (this.updateStrokeStyle(this.state, this.applyStroke),
                  this.hitDetectionInstructions.push(
                    this.createStroke(this.state)
                  ))),
              this.beginGeometry(t, e);
            var f = r.padding;
            if (f != It && (r.scale[0] < 0 || r.scale[1] < 0)) {
              var d = r.padding[0],
                g = r.padding[1],
                _ = r.padding[2],
                y = r.padding[3];
              r.scale[0] < 0 && ((g = -g), (y = -y)),
                r.scale[1] < 0 && ((d = -d), (_ = -_)),
                (f = [d, g, _, y]);
            }
            var v = this.pixelRatio;
            this.instructions.push([
              cl.DRAW_IMAGE,
              a,
              L,
              null,
              NaN,
              NaN,
              NaN,
              1,
              0,
              0,
              this.textRotateWithView_,
              this.textRotation_,
              [1, 1],
              NaN,
              this.declutterImageWithText_,
              f == It
                ? It
                : f.map(function (t) {
                    return t * v;
                  }),
              !!r.backgroundFill,
              !!r.backgroundStroke,
              this.text_,
              this.textKey_,
              this.strokeKey_,
              this.fillKey_,
              this.textOffsetX_,
              this.textOffsetY_,
              h,
            ]);
            var m = 1 / v;
            this.hitDetectionInstructions.push([
              cl.DRAW_IMAGE,
              a,
              L,
              null,
              NaN,
              NaN,
              NaN,
              1,
              0,
              0,
              this.textRotateWithView_,
              this.textRotation_,
              [m, m],
              NaN,
              this.declutterImageWithText_,
              f,
              !!r.backgroundFill,
              !!r.backgroundStroke,
              this.text_,
              this.textKey_,
              this.strokeKey_,
              this.fillKey_,
              this.textOffsetX_,
              this.textOffsetY_,
              h,
            ]),
              this.endGeometry(e);
          } else {
            if (!C.intersects(this.getBufferedMaxExtent(), t.getExtent()))
              return;
            var x = void 0;
            if (((l = t.getFlatCoordinates()), s == Ee.LINE_STRING))
              x = [l.length];
            else if (s == Ee.MULTI_LINE_STRING) x = t.getEnds();
            else if (s == Ee.POLYGON) x = t.getEnds().slice(0, 1);
            else if (s == Ee.MULTI_POLYGON) {
              var E = t.getEndss();
              x = [];
              for (var S = 0, w = E.length; S < w; ++S) x.push(E[S][0]);
            }
            this.beginGeometry(t, e);
            for (
              var O = r.textAlign, T = 0, b = void 0, R = 0, I = x.length;
              R < I;
              ++R
            ) {
              if (null == O) {
                var P = bl(r.maxAngle, l, T, x[R], u);
                (T = P[0]), (b = P[1]);
              } else b = x[R];
              for (var S = T; S < b; S += u) o.push(l[S], l[S + 1]);
              var L = o.length;
              (T = x[R]), this.drawChars_(a, L), (a = L);
            }
            this.endGeometry(e);
          }
        }
      }),
      (e.prototype.saveTextStates_ = function () {
        var t = this.textStrokeState_,
          e = this.textState_,
          n = this.textFillState_,
          i = this.strokeKey_;
        t &&
          (i in this.strokeStates ||
            (this.strokeStates[i] = {
              strokeStyle: t.strokeStyle,
              lineCap: t.lineCap,
              lineDashOffset: t.lineDashOffset,
              lineWidth: t.lineWidth,
              lineJoin: t.lineJoin,
              miterLimit: t.miterLimit,
              lineDash: t.lineDash,
            }));
        var r = this.textKey_;
        r in this.textStates ||
          (this.textStates[r] = {
            font: e.font,
            textAlign: e.textAlign || bt,
            textBaseline: e.textBaseline || Rt,
            scale: e.scale,
          });
        var o = this.fillKey_;
        n &&
          (o in this.fillStates ||
            (this.fillStates[o] = { fillStyle: n.fillStyle }));
      }),
      (e.prototype.drawChars_ = function (t, e) {
        var n = this.textStrokeState_,
          i = this.textState_,
          r = this.strokeKey_,
          o = this.textKey_,
          a = this.fillKey_;
        this.saveTextStates_();
        var s = this.pixelRatio,
          l = Il[i.textBaseline],
          u = this.textOffsetY_ * s,
          h = this.text_,
          c = n ? (n.lineWidth * Math.abs(i.scale[0])) / 2 : 0;
        this.instructions.push([
          cl.DRAW_CHARS,
          t,
          e,
          l,
          i.overflow,
          a,
          i.maxAngle,
          s,
          u,
          r,
          c * s,
          h,
          o,
          1,
        ]),
          this.hitDetectionInstructions.push([
            cl.DRAW_CHARS,
            t,
            e,
            l,
            i.overflow,
            a,
            i.maxAngle,
            1,
            u,
            r,
            c,
            h,
            o,
            1 / s,
          ]);
      }),
      (e.prototype.setTextStyle = function (t, e) {
        var n, i, r;
        if (t) {
          var o = t.getFill();
          o
            ? ((i = this.textFillState_) ||
                ((i = {}), (this.textFillState_ = i)),
              (i.fillStyle = Vs(o.getColor() || Et)))
            : ((i = null), (this.textFillState_ = i));
          var a = t.getStroke();
          if (a) {
            (r = this.textStrokeState_) ||
              ((r = {}), (this.textStrokeState_ = r));
            var s = a.getLineDash(),
              l = a.getLineDashOffset(),
              u = a.getWidth(),
              h = a.getMiterLimit();
            (r.lineCap = a.getLineCap() || St),
              (r.lineDash = s ? s.slice() : wt),
              (r.lineDashOffset = void 0 === l ? 0 : l),
              (r.lineJoin = a.getLineJoin() || Ot),
              (r.lineWidth = void 0 === u ? 1 : u),
              (r.miterLimit = void 0 === h ? 10 : h),
              (r.strokeStyle = Vs(a.getColor() || Tt));
          } else (r = null), (this.textStrokeState_ = r);
          n = this.textState_;
          var c = t.getFont() || Ct;
          Dt(c);
          var p = t.getScaleArray();
          (n.overflow = t.getOverflow()),
            (n.font = c),
            (n.maxAngle = t.getMaxAngle()),
            (n.placement = t.getPlacement()),
            (n.textAlign = t.getTextAlign()),
            (n.textBaseline = t.getTextBaseline() || Rt),
            (n.backgroundFill = t.getBackgroundFill()),
            (n.backgroundStroke = t.getBackgroundStroke()),
            (n.padding = t.getPadding() || It),
            (n.scale = void 0 === p ? [1, 1] : p);
          var d = t.getOffsetX(),
            g = t.getOffsetY(),
            _ = t.getRotateWithView(),
            y = t.getRotation();
          (this.text_ = t.getText() || ""),
            (this.textOffsetX_ = void 0 === d ? 0 : d),
            (this.textOffsetY_ = void 0 === g ? 0 : g),
            (this.textRotateWithView_ = void 0 !== _ && _),
            (this.textRotation_ = void 0 === y ? 0 : y),
            (this.strokeKey_ = r
              ? ("string" == typeof r.strokeStyle
                  ? r.strokeStyle
                  : f.getUid(r.strokeStyle)) +
                r.lineCap +
                r.lineDashOffset +
                "|" +
                r.lineWidth +
                r.lineJoin +
                r.miterLimit +
                "[" +
                r.lineDash.join() +
                "]"
              : ""),
            (this.textKey_ =
              n.font +
              n.scale +
              (n.textAlign || "?") +
              (n.textBaseline || "?")),
            (this.fillKey_ = i
              ? "string" == typeof i.fillStyle
                ? i.fillStyle
                : "|" + f.getUid(i.fillStyle)
              : "");
        } else this.text_ = "";
        this.declutterImageWithText_ = e;
      }),
      e
    );
  })(ol.default),
  Ll = {
    Circle: El.default,
    Default: ol.default,
    Image: _l.default,
    LineString: ml.default,
    Polygon: El.default,
    Text: Ol.default,
  },
  Ml = (function () {
    function t(t, e, n, i) {
      (this.tolerance_ = t),
        (this.maxExtent_ = e),
        (this.pixelRatio_ = i),
        (this.resolution_ = n),
        (this.buildersByZIndex_ = {});
    }
    return (
      (t.prototype.finish = function () {
        var t = {};
        for (var e in this.buildersByZIndex_) {
          t[e] = t[e] || {};
          var n = this.buildersByZIndex_[e];
          for (var i in n) {
            var r = n[i].finish();
            t[e][i] = r;
          }
        }
        return t;
      }),
      (t.prototype.getBuilder = function (t, e) {
        var n = void 0 !== t ? t.toString() : "0",
          i = this.buildersByZIndex_[n];
        void 0 === i && ((i = {}), (this.buildersByZIndex_[n] = i));
        var r = i[e];
        void 0 === r &&
          ((r = new (0, Ll[e])(
            this.tolerance_,
            this.maxExtent_,
            this.resolution_,
            this.pixelRatio_
          )),
          (i[e] = r));
        return r;
      }),
      t
    );
  })(),
  Fl = {
    CIRCLE: "Circle",
    DEFAULT: "Default",
    IMAGE: "Image",
    LINE_STRING: "LineString",
    POLYGON: "Polygon",
    TEXT: "Text",
  };
(d = a("8UoiJ")), (C = a("9pD6L")), (E = a("9byFX"));
function Al(t, e, n, i, r, o, a, s, l, u, h, c) {
  var p = t[e],
    f = t[e + 1],
    d = 0,
    g = 0,
    _ = 0,
    y = 0;
  function v() {
    (d = p),
      (g = f),
      (p = t[(e += i)]),
      (f = t[e + 1]),
      (y += _),
      (_ = Math.sqrt((p - d) * (p - d) + (f - g) * (f - g)));
  }
  do {
    v();
  } while (e < n - i && y + _ < o);
  for (
    var m = 0 === _ ? 0 : (o - y) / _,
      x = E.lerp(d, p, m),
      C = E.lerp(g, f, m),
      S = e - i,
      w = y,
      O = o + s * l(u, r, h);
    e < n - i && y + _ < O;

  )
    v();
  m = 0 === _ ? 0 : (O - y) / _;
  var T,
    b = E.lerp(d, p, m),
    R = E.lerp(g, f, m);
  if (c) {
    var I = [x, C, b, R];
    Vn(I, 0, 4, 2, c, I, I), (T = I[0] > I[2]);
  } else T = x > b;
  var P,
    L = Math.PI,
    M = [],
    F = S + i === e;
  if (((_ = 0), (y = w), (p = t[(e = S)]), (f = t[e + 1]), F)) {
    v(), (P = Math.atan2(f - g, p - d)), T && (P += P > 0 ? -L : L);
    var A = (b + x) / 2,
      D = (R + C) / 2;
    return (M[0] = [A, D, (O - o) / 2, P, r]), M;
  }
  for (var j = 0, N = r.length; j < N; ) {
    v();
    var G = Math.atan2(f - g, p - d);
    if ((T && (G += G > 0 ? -L : L), void 0 !== P)) {
      var k = G - P;
      if (((k += k > L ? -2 * L : k < -L ? 2 * L : 0), Math.abs(k) > a))
        return null;
    }
    P = G;
    for (var z = j, U = 0; j < N; ++j) {
      var X = s * l(u, r[T ? N - j - 1 : j], h);
      if (e + i < n && y + _ < o + U + X / 2) break;
      U += X;
    }
    if (j !== z) {
      var Y = T ? r.substring(N - z, N - j) : r.substring(z, j);
      m = 0 === _ ? 0 : (o + U / 2 - y) / _;
      (A = E.lerp(d, p, m)), (D = E.lerp(g, f, m));
      M.push([A, D, U / 2, G, Y]), (o += U);
    }
  }
  return M;
}
Rn = a("fVVyM");
function Dl(t, e, n, i) {
  for (var r = t[e], o = t[e + 1], a = 0, s = e + i; s < n; s += i) {
    var l = t[s],
      u = t[s + 1];
    (a += Math.sqrt((l - r) * (l - r) + (u - o) * (u - o))), (r = l), (o = u);
  }
  return a;
}
var jl = C.createEmpty(),
  Nl = [],
  Gl = [],
  kl = [],
  zl = [];
function Ul(t) {
  return t[3].declutterBox;
}
var Xl = new RegExp(
  "[" +
    String.fromCharCode(1425) +
    "-" +
    String.fromCharCode(2303) +
    String.fromCharCode(64285) +
    "-" +
    String.fromCharCode(65023) +
    String.fromCharCode(65136) +
    "-" +
    String.fromCharCode(65276) +
    String.fromCharCode(67584) +
    "-" +
    String.fromCharCode(69631) +
    String.fromCharCode(124928) +
    "-" +
    String.fromCharCode(126975) +
    "]"
);
function Yl(t, e) {
  return (
    ("start" !== e && "end" !== e) ||
      Xl.test(t) ||
      (e = "start" === e ? "left" : "right"),
    Ol.TEXT_ALIGN[e]
  );
}
function Vl(t, e, n) {
  return n > 0 && t.push("\n", ""), t.push(e, ""), t;
}
var Wl = (function () {
    function t(t, e, n, i) {
      (this.overlaps = n),
        (this.pixelRatio = e),
        (this.resolution = t),
        this.alignFill_,
        (this.instructions = i.instructions),
        (this.coordinates = i.coordinates),
        (this.coordinateCache_ = {}),
        (this.renderedTransform_ = [1, 0, 0, 1, 0, 0]),
        (this.hitDetectionInstructions = i.hitDetectionInstructions),
        (this.pixelCoordinates_ = null),
        (this.viewRotation_ = 0),
        (this.fillStates = i.fillStates || {}),
        (this.strokeStates = i.strokeStates || {}),
        (this.textStates = i.textStates || {}),
        (this.widths_ = {}),
        (this.labels_ = {});
    }
    return (
      (t.prototype.createLabel = function (t, e, n, i) {
        var r = t + e + n + i;
        if (this.labels_[r]) return this.labels_[r];
        var o = i ? this.strokeStates[i] : null,
          a = n ? this.fillStates[n] : null,
          s = this.textStates[e],
          l = this.pixelRatio,
          u = [s.scale[0] * l, s.scale[1] * l],
          h = Array.isArray(t),
          c = Yl(h ? t[0] : t, s.textAlign || bt),
          p = i && o.lineWidth ? o.lineWidth : 0,
          f = h ? t : t.split("\n").reduce(Vl, []),
          g = (function (t, e) {
            for (
              var n = [],
                i = [],
                r = [],
                o = 0,
                a = 0,
                s = 0,
                l = 0,
                u = 0,
                h = e.length;
              u <= h;
              u += 2
            ) {
              var c = e[u];
              if ("\n" !== c && u !== h) {
                var p = e[u + 1] || t.font,
                  f = Gt(p, c);
                n.push(f), (a += f);
                var d = jt(p);
                i.push(d), (l = Math.max(l, d));
              } else (o = Math.max(o, a)), r.push(a), (a = 0), (s += l);
            }
            return {
              width: o,
              height: s,
              widths: n,
              heights: i,
              lineWidths: r,
            };
          })(s, f),
          _ = g.width,
          y = g.height,
          v = g.widths,
          m = g.heights,
          x = g.lineWidths,
          C = _ + p,
          E = [],
          S = (C + 2) * u[0],
          w = (y + p) * u[1],
          O = {
            width: S < 0 ? Math.floor(S) : Math.ceil(S),
            height: w < 0 ? Math.floor(w) : Math.ceil(w),
            contextInstructions: E,
          };
        ((1 == u[0] && 1 == u[1]) || E.push("scale", u), i) &&
          (E.push("strokeStyle", o.strokeStyle),
          E.push("lineWidth", p),
          E.push("lineCap", o.lineCap),
          E.push("lineJoin", o.lineJoin),
          E.push("miterLimit", o.miterLimit),
          (d.WORKER_OFFSCREEN_CANVAS
            ? OffscreenCanvasRenderingContext2D
            : CanvasRenderingContext2D
          ).prototype.setLineDash &&
            (E.push("setLineDash", [o.lineDash]),
            E.push("lineDashOffset", o.lineDashOffset)));
        n && E.push("fillStyle", a.fillStyle),
          E.push("textBaseline", "middle"),
          E.push("textAlign", "center");
        for (
          var T,
            b = 0.5 - c,
            R = c * C + b * p,
            I = [],
            P = [],
            L = 0,
            M = 0,
            F = 0,
            A = 0,
            D = 0,
            j = f.length;
          D < j;
          D += 2
        ) {
          var N = f[D];
          if ("\n" !== N) {
            var G = f[D + 1] || s.font;
            G !== T &&
              (i && I.push("font", G), n && P.push("font", G), (T = G)),
              (L = Math.max(L, m[F]));
            var k = [N, R + b * v[F] + c * (v[F] - x[A]), 0.5 * (p + L) + M];
            (R += v[F]),
              i && I.push("strokeText", k),
              n && P.push("fillText", k),
              ++F;
          } else (M += L), (L = 0), (R = c * C + b * p), ++A;
        }
        return (
          Array.prototype.push.apply(E, I),
          Array.prototype.push.apply(E, P),
          (this.labels_[r] = O),
          O
        );
      }),
      (t.prototype.replayTextBackground_ = function (t, e, n, i, r, o, a) {
        t.beginPath(),
          t.moveTo.apply(t, e),
          t.lineTo.apply(t, n),
          t.lineTo.apply(t, i),
          t.lineTo.apply(t, r),
          t.lineTo.apply(t, e),
          o && ((this.alignFill_ = o[2]), this.fill_(t)),
          a && (this.setStrokeStyle_(t, a), t.stroke());
      }),
      (t.prototype.calculateImageOrLabelDimensions_ = function (
        t,
        e,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        u,
        h,
        c,
        p,
        f,
        d,
        g
      ) {
        var _,
          m = n - (a *= c[0]),
          x = i - (s *= c[1]),
          E = r + l > t ? t - l : r,
          S = o + u > e ? e - u : o,
          w = f[3] + E * c[0] + f[1],
          O = f[0] + S * c[1] + f[2],
          T = m - f[3],
          b = x - f[0];
        return (
          (d || 0 !== h) &&
            ((Nl[0] = T),
            (zl[0] = T),
            (Nl[1] = b),
            (Gl[1] = b),
            (Gl[0] = T + w),
            (kl[0] = Gl[0]),
            (kl[1] = b + O),
            (zl[1] = kl[1])),
          0 !== h
            ? (y((_ = v([1, 0, 0, 1, 0, 0], n, i, 1, 1, h, -n, -i)), Nl),
              y(_, Gl),
              y(_, kl),
              y(_, zl),
              C.createOrUpdate(
                Math.min(Nl[0], Gl[0], kl[0], zl[0]),
                Math.min(Nl[1], Gl[1], kl[1], zl[1]),
                Math.max(Nl[0], Gl[0], kl[0], zl[0]),
                Math.max(Nl[1], Gl[1], kl[1], zl[1]),
                jl
              ))
            : C.createOrUpdate(
                Math.min(T, T + w),
                Math.min(b, b + O),
                Math.max(T, T + w),
                Math.max(b, b + O),
                jl
              ),
          p && ((m = Math.round(m)), (x = Math.round(x))),
          {
            drawImageX: m,
            drawImageY: x,
            drawImageW: E,
            drawImageH: S,
            originX: l,
            originY: u,
            declutterBox: {
              minX: jl[0],
              minY: jl[1],
              maxX: jl[2],
              maxY: jl[3],
              value: g,
            },
            canvasTransform: _,
            scale: c,
          }
        );
      }),
      (t.prototype.replayImageOrLabel_ = function (t, e, n, i, r, o, a) {
        var s = !(!o && !a),
          l = i.declutterBox,
          u = t.canvas,
          h = a ? (a[2] * i.scale[0]) / 2 : 0;
        return (
          l.minX - h <= u.width / e &&
            l.maxX + h >= 0 &&
            l.minY - h <= u.height / e &&
            l.maxY + h >= 0 &&
            (s && this.replayTextBackground_(t, Nl, Gl, kl, zl, o, a),
            zt(
              t,
              i.canvasTransform,
              r,
              n,
              i.originX,
              i.originY,
              i.drawImageW,
              i.drawImageH,
              i.drawImageX,
              i.drawImageY,
              i.scale
            )),
          !0
        );
      }),
      (t.prototype.fill_ = function (t) {
        if (this.alignFill_) {
          var e = y(this.renderedTransform_, [0, 0]),
            n = 512 * this.pixelRatio;
          t.save(),
            t.translate(e[0] % n, e[1] % n),
            t.rotate(this.viewRotation_);
        }
        t.fill(), this.alignFill_ && t.restore();
      }),
      (t.prototype.setStrokeStyle_ = function (t, e) {
        (t.strokeStyle = e[1]),
          (t.lineWidth = e[2]),
          (t.lineCap = e[3]),
          (t.lineJoin = e[4]),
          (t.miterLimit = e[5]),
          t.setLineDash && ((t.lineDashOffset = e[7]), t.setLineDash(e[6]));
      }),
      (t.prototype.drawLabelWithPointPlacement_ = function (t, e, n, i) {
        var r = this.textStates[e],
          o = this.createLabel(t, e, i, n),
          a = this.strokeStates[n],
          s = this.pixelRatio,
          l = Yl(Array.isArray(t) ? t[0] : t, r.textAlign || bt),
          u = Ol.TEXT_ALIGN[r.textBaseline || Rt],
          h = a && a.lineWidth ? a.lineWidth : 0;
        return {
          label: o,
          anchorX: l * (o.width / s - 2 * r.scale[0]) + 2 * (0.5 - l) * h,
          anchorY: (u * o.height) / s + 2 * (0.5 - u) * h,
        };
      }),
      (t.prototype.execute_ = function (t, e, n, i, r, o, a, s) {
        var l, u, h;
        this.pixelCoordinates_ && Rn.equals(n, this.renderedTransform_)
          ? (l = this.pixelCoordinates_)
          : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []),
            (l = Yn(
              this.coordinates,
              0,
              this.coordinates.length,
              2,
              n,
              this.pixelCoordinates_
            )),
            (u = this.renderedTransform_),
            (h = n),
            (u[0] = h[0]),
            (u[1] = h[1]),
            (u[2] = h[2]),
            (u[3] = h[3]),
            (u[4] = h[4]),
            (u[5] = h[5]));
        for (
          var c,
            p,
            f,
            d,
            g,
            _,
            y,
            v,
            m,
            x,
            E,
            S,
            w,
            O,
            T,
            b,
            R = 0,
            I = i.length,
            P = 0,
            L = 0,
            M = 0,
            F = null,
            A = null,
            D = this.coordinateCache_,
            j = this.viewRotation_,
            N = Math.round(1e12 * Math.atan2(-n[1], n[0])) / 1e12,
            G = {
              context: t,
              pixelRatio: this.pixelRatio,
              resolution: this.resolution,
              rotation: j,
            },
            k = this.instructions != i || this.overlaps ? 0 : 200;
          R < I;

        ) {
          var z = i[R];
          switch (z[0]) {
            case cl.BEGIN_GEOMETRY:
              (w = z[1]),
                (b = z[3]),
                w.getGeometry()
                  ? void 0 === a || C.intersects(a, b.getExtent())
                    ? ++R
                    : (R = z[2] + 1)
                  : (R = z[2]);
              break;
            case cl.BEGIN_PATH:
              L > k && (this.fill_(t), (L = 0)),
                M > k && (t.stroke(), (M = 0)),
                L || M || (t.beginPath(), (d = NaN), (g = NaN)),
                ++R;
              break;
            case cl.CIRCLE:
              var U = l[(P = z[1])],
                X = l[P + 1],
                Y = l[P + 2] - U,
                V = l[P + 3] - X,
                W = Math.sqrt(Y * Y + V * V);
              t.moveTo(U + W, X), t.arc(U, X, W, 0, 2 * Math.PI, !0), ++R;
              break;
            case cl.CLOSE_PATH:
              t.closePath(), ++R;
              break;
            case cl.CUSTOM:
              (P = z[1]), (c = z[2]);
              var K = z[3],
                B = z[4],
                Z = 6 == z.length ? z[5] : void 0;
              (G.geometry = K), (G.feature = w), R in D || (D[R] = []);
              var H = D[R];
              Z
                ? Z(l, P, c, 2, H)
                : ((H[0] = l[P]), (H[1] = l[P + 1]), (H.length = 2)),
                B(H, G),
                ++R;
              break;
            case cl.DRAW_IMAGE:
              (P = z[1]), (c = z[2]), (v = z[3]), (p = z[4]), (f = z[5]);
              var q = z[6],
                J = z[7],
                Q = z[8],
                $ = z[9],
                tt = z[10],
                et = z[11],
                nt = z[12],
                it = z[13],
                rt = z[14];
              if (!v && z.length >= 19) {
                (m = z[18]), (x = z[19]), (E = z[20]), (S = z[21]);
                var ot = this.drawLabelWithPointPlacement_(m, x, E, S);
                (v = ot.label), (z[3] = v);
                var at = z[22];
                (p = (ot.anchorX - at) * this.pixelRatio), (z[4] = p);
                var st = z[23];
                (f = (ot.anchorY - st) * this.pixelRatio),
                  (z[5] = f),
                  (q = v.height),
                  (z[6] = q),
                  (it = v.width),
                  (z[13] = it);
              }
              var lt = void 0;
              z.length > 24 && (lt = z[24]);
              var ut = void 0,
                ht = void 0,
                ct = void 0;
              z.length > 16
                ? ((ut = z[15]), (ht = z[16]), (ct = z[17]))
                : ((ut = It), (ht = !1), (ct = !1)),
                tt && N ? (et += j) : tt || N || (et -= j);
              for (var pt = 0; P < c; P += 2)
                if (!(lt && lt[pt++] < it / this.pixelRatio)) {
                  var ft = [
                      t,
                      e,
                      v,
                      (Xt = this.calculateImageOrLabelDimensions_(
                        v.width,
                        v.height,
                        l[P],
                        l[P + 1],
                        it,
                        q,
                        p,
                        f,
                        Q,
                        $,
                        et,
                        nt,
                        r,
                        ut,
                        ht || ct,
                        w
                      )),
                      J,
                      ht ? F : null,
                      ct ? A : null,
                    ],
                    dt = void 0,
                    gt = void 0;
                  if (s && rt) {
                    var _t = c - P;
                    if (!rt[_t]) {
                      rt[_t] = ft;
                      continue;
                    }
                    if (
                      ((dt = rt[_t]),
                      delete rt[_t],
                      (gt = Ul(dt)),
                      s.collides(gt))
                    )
                      continue;
                  }
                  (s && s.collides(Xt.declutterBox)) ||
                    (dt &&
                      (s && s.insert(gt),
                      this.replayImageOrLabel_.apply(this, dt)),
                    s && s.insert(Xt.declutterBox),
                    this.replayImageOrLabel_.apply(this, ft));
                }
              ++R;
              break;
            case cl.DRAW_CHARS:
              var yt = z[1],
                vt = z[2],
                mt = z[3],
                xt = z[4];
              S = z[5];
              var Ct = z[6],
                Et = z[7],
                St = z[8];
              E = z[9];
              var wt = z[10];
              (m = z[11]), (x = z[12]);
              var Ot = [z[13], z[13]],
                Tt = this.textStates[x],
                bt = Tt.font,
                Rt = [Tt.scale[0] * Et, Tt.scale[1] * Et],
                Pt = void 0;
              bt in this.widths_
                ? (Pt = this.widths_[bt])
                : ((Pt = {}), (this.widths_[bt] = Pt));
              var Lt = Dl(l, yt, vt, 2),
                Mt = Math.abs(Rt[0]) * kt(bt, m, Pt);
              if (xt || Mt <= Lt) {
                var Ft = this.textStates[x].textAlign,
                  At = Al(
                    l,
                    yt,
                    vt,
                    2,
                    m,
                    (Lt - Mt) * Ol.TEXT_ALIGN[Ft],
                    Ct,
                    Math.abs(Rt[0]),
                    kt,
                    bt,
                    Pt,
                    N ? 0 : this.viewRotation_
                  );
                t: if (At) {
                  var Dt = [],
                    jt = void 0,
                    Nt = void 0,
                    Gt = void 0,
                    zt = void 0,
                    Ut = void 0;
                  if (E)
                    for (jt = 0, Nt = At.length; jt < Nt; ++jt) {
                      (Gt = (Ut = At[jt])[4]),
                        (zt = this.createLabel(Gt, x, "", E)),
                        (p = Ut[2] + (Rt[0] < 0 ? -wt : wt)),
                        (f =
                          mt * zt.height +
                          (2 * (0.5 - mt) * wt * Rt[1]) / Rt[0] -
                          St);
                      var Xt = this.calculateImageOrLabelDimensions_(
                        zt.width,
                        zt.height,
                        Ut[0],
                        Ut[1],
                        zt.width,
                        zt.height,
                        p,
                        f,
                        0,
                        0,
                        Ut[3],
                        Ot,
                        !1,
                        It,
                        !1,
                        w
                      );
                      if (s && s.collides(Xt.declutterBox)) break t;
                      Dt.push([t, e, zt, Xt, 1, null, null]);
                    }
                  if (S)
                    for (jt = 0, Nt = At.length; jt < Nt; ++jt) {
                      (Gt = (Ut = At[jt])[4]),
                        (zt = this.createLabel(Gt, x, S, "")),
                        (p = Ut[2]),
                        (f = mt * zt.height - St);
                      Xt = this.calculateImageOrLabelDimensions_(
                        zt.width,
                        zt.height,
                        Ut[0],
                        Ut[1],
                        zt.width,
                        zt.height,
                        p,
                        f,
                        0,
                        0,
                        Ut[3],
                        Ot,
                        !1,
                        It,
                        !1,
                        w
                      );
                      if (s && s.collides(Xt.declutterBox)) break t;
                      Dt.push([t, e, zt, Xt, 1, null, null]);
                    }
                  s && s.load(Dt.map(Ul));
                  for (var Yt = 0, Vt = Dt.length; Yt < Vt; ++Yt)
                    this.replayImageOrLabel_.apply(this, Dt[Yt]);
                }
              }
              ++R;
              break;
            case cl.END_GEOMETRY:
              if (void 0 !== o) {
                var Wt = o((w = z[1]), b);
                if (Wt) return Wt;
              }
              ++R;
              break;
            case cl.FILL:
              k ? L++ : this.fill_(t), ++R;
              break;
            case cl.MOVE_TO_LINE_TO:
              for (
                P = z[1],
                  c = z[2],
                  O = l[P],
                  y = ((T = l[P + 1]) + 0.5) | 0,
                  ((_ = (O + 0.5) | 0) === d && y === g) ||
                    (t.moveTo(O, T), (d = _), (g = y)),
                  P += 2;
                P < c;
                P += 2
              )
                (_ = ((O = l[P]) + 0.5) | 0),
                  (y = ((T = l[P + 1]) + 0.5) | 0),
                  (P != c - 2 && _ === d && y === g) ||
                    (t.lineTo(O, T), (d = _), (g = y));
              ++R;
              break;
            case cl.SET_FILL_STYLE:
              (F = z),
                (this.alignFill_ = z[2]),
                L && (this.fill_(t), (L = 0), M && (t.stroke(), (M = 0))),
                (t.fillStyle = z[1]),
                ++R;
              break;
            case cl.SET_STROKE_STYLE:
              (A = z),
                M && (t.stroke(), (M = 0)),
                this.setStrokeStyle_(t, z),
                ++R;
              break;
            case cl.STROKE:
              k ? M++ : t.stroke(), ++R;
              break;
            default:
              ++R;
          }
        }
        L && this.fill_(t), M && t.stroke();
      }),
      (t.prototype.execute = function (t, e, n, i, r, o) {
        (this.viewRotation_ = i),
          this.execute_(t, e, n, this.instructions, r, void 0, void 0, o);
      }),
      (t.prototype.executeHitDetection = function (t, e, n, i, r) {
        return (
          (this.viewRotation_ = n),
          this.execute_(t, 1, e, this.hitDetectionInstructions, !0, i, r)
        );
      }),
      t
    );
  })(),
  Kl =
    ((C = a("9pD6L")),
    (xt = a("DfnQm")),
    (B = a("gn0g3")),
    (Rn = a("fVVyM")),
    [Fl.POLYGON, Fl.CIRCLE, Fl.LINE_STRING, Fl.IMAGE, Fl.TEXT, Fl.DEFAULT]),
  Bl = (function () {
    function t(t, e, n, i, r, o) {
      (this.maxExtent_ = t),
        (this.overlaps_ = i),
        (this.pixelRatio_ = n),
        (this.resolution_ = e),
        (this.renderBuffer_ = o),
        (this.executorsByZIndex_ = {}),
        (this.hitDetectionContext_ = null),
        (this.hitDetectionTransform_ = [1, 0, 0, 1, 0, 0]),
        this.createExecutors_(r);
    }
    return (
      (t.prototype.clip = function (t, e) {
        var n = this.getClipCoords(e);
        t.beginPath(),
          t.moveTo(n[0], n[1]),
          t.lineTo(n[2], n[3]),
          t.lineTo(n[4], n[5]),
          t.lineTo(n[6], n[7]),
          t.clip();
      }),
      (t.prototype.createExecutors_ = function (t) {
        for (var e in t) {
          var n = this.executorsByZIndex_[e];
          void 0 === n && ((n = {}), (this.executorsByZIndex_[e] = n));
          var i = t[e];
          for (var r in i) {
            var o = i[r];
            n[r] = new Wl(
              this.resolution_,
              this.pixelRatio_,
              this.overlaps_,
              o
            );
          }
        }
      }),
      (t.prototype.hasExecutors = function (t) {
        for (var e in this.executorsByZIndex_)
          for (
            var n = this.executorsByZIndex_[e], i = 0, r = t.length;
            i < r;
            ++i
          )
            if (t[i] in n) return !0;
        return !1;
      }),
      (t.prototype.forEachFeatureAtCoordinate = function (t, e, n, i, r, o) {
        var a = 2 * (i = Math.round(i)) + 1,
          s = v(
            this.hitDetectionTransform_,
            i + 0.5,
            i + 0.5,
            1 / e,
            -1 / e,
            -n,
            -t[0],
            -t[1]
          ),
          l = !this.hitDetectionContext_;
        l && (this.hitDetectionContext_ = xt.createCanvasContext2D(a, a));
        var u,
          h = this.hitDetectionContext_;
        h.canvas.width !== a || h.canvas.height !== a
          ? ((h.canvas.width = a), (h.canvas.height = a))
          : l || h.clearRect(0, 0, a, a),
          void 0 !== this.renderBuffer_ &&
            ((u = C.createEmpty()),
            C.extendCoordinate(u, t),
            C.buffer(u, e * (this.renderBuffer_ + i), u));
        var c,
          p = (function (t) {
            if (void 0 !== Zl[t]) return Zl[t];
            for (
              var e = 2 * t + 1, n = t * t, i = new Array(n + 1), r = 0;
              r <= t;
              ++r
            )
              for (var o = 0; o <= t; ++o) {
                var a = r * r + o * o;
                if (a > n) break;
                var s = i[a];
                s || ((s = []), (i[a] = s)),
                  s.push(4 * ((t + r) * e + (t + o)) + 3),
                  r > 0 && s.push(4 * ((t - r) * e + (t + o)) + 3),
                  o > 0 &&
                    (s.push(4 * ((t + r) * e + (t - o)) + 3),
                    r > 0 && s.push(4 * ((t - r) * e + (t - o)) + 3));
              }
            for (var l = [], u = ((r = 0), i.length); r < u; ++r)
              i[r] && l.push.apply(l, i[r]);
            return (Zl[t] = l), l;
          })(i);
        function f(t, e) {
          for (
            var n = h.getImageData(0, 0, a, a).data, s = 0, l = p.length;
            s < l;
            s++
          )
            if (n[p[s]] > 0) {
              if (
                !o ||
                (c !== Fl.IMAGE && c !== Fl.TEXT) ||
                -1 !== o.indexOf(t)
              ) {
                var u = (p[s] - 3) / 4,
                  f = i - (u % a),
                  d = i - ((u / a) | 0),
                  g = r(t, e, f * f + d * d);
                if (g) return g;
              }
              h.clearRect(0, 0, a, a);
              break;
            }
        }
        var d,
          g,
          _,
          y,
          m,
          x = Object.keys(this.executorsByZIndex_).map(Number);
        for (
          x.sort(Rn.numberSafeCompareFunction), d = x.length - 1;
          d >= 0;
          --d
        ) {
          var E = x[d].toString();
          for (_ = this.executorsByZIndex_[E], g = Kl.length - 1; g >= 0; --g)
            if (
              void 0 !== (y = _[(c = Kl[g])]) &&
              (m = y.executeHitDetection(h, s, n, f, u))
            )
              return m;
        }
      }),
      (t.prototype.getClipCoords = function (t) {
        var e = this.maxExtent_;
        if (!e) return null;
        var n = e[0],
          i = e[1],
          r = e[2],
          o = e[3],
          a = [n, i, n, o, r, o, r, i];
        return Yn(a, 0, 8, 2, t, a), a;
      }),
      (t.prototype.isEmpty = function () {
        return B.isEmpty(this.executorsByZIndex_);
      }),
      (t.prototype.execute = function (t, e, n, i, r, o, a) {
        var s = Object.keys(this.executorsByZIndex_).map(Number);
        s.sort(Rn.numberSafeCompareFunction),
          this.maxExtent_ && (t.save(), this.clip(t, n));
        var l,
          u,
          h,
          c,
          p,
          f,
          d = o || Kl;
        for (a && s.reverse(), l = 0, u = s.length; l < u; ++l) {
          var g = s[l].toString();
          for (
            p = this.executorsByZIndex_[g], h = 0, c = d.length;
            h < c;
            ++h
          ) {
            void 0 !== (f = p[d[h]]) && f.execute(t, e, n, i, r, a);
          }
        }
        this.maxExtent_ && t.restore();
      }),
      t
    );
  })(),
  Zl = {};
var Hl = Bl,
  ql = {};
e(
  ql,
  "default",
  () => Ql,
  (t) => (Ql = t)
);
(Rn = a("fVVyM")), (C = a("9pD6L"));
var Jl = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Ql = (function (t) {
    function e(e, n, i, r, o, a, s) {
      var l = t.call(this) || this;
      return (
        (l.context_ = e),
        (l.pixelRatio_ = n),
        (l.extent_ = i),
        (l.transform_ = r),
        (l.viewRotation_ = o),
        (l.squaredTolerance_ = a),
        (l.userTransform_ = s),
        (l.contextFillState_ = null),
        (l.contextStrokeState_ = null),
        (l.contextTextState_ = null),
        (l.fillState_ = null),
        (l.strokeState_ = null),
        (l.image_ = null),
        (l.imageAnchorX_ = 0),
        (l.imageAnchorY_ = 0),
        (l.imageHeight_ = 0),
        (l.imageOpacity_ = 0),
        (l.imageOriginX_ = 0),
        (l.imageOriginY_ = 0),
        (l.imageRotateWithView_ = !1),
        (l.imageRotation_ = 0),
        (l.imageScale_ = [0, 0]),
        (l.imageWidth_ = 0),
        (l.text_ = ""),
        (l.textOffsetX_ = 0),
        (l.textOffsetY_ = 0),
        (l.textRotateWithView_ = !1),
        (l.textRotation_ = 0),
        (l.textScale_ = [0, 0]),
        (l.textFillState_ = null),
        (l.textStrokeState_ = null),
        (l.textState_ = null),
        (l.pixelCoordinates_ = []),
        (l.tmpLocalTransform_ = [1, 0, 0, 1, 0, 0]),
        l
      );
    }
    return (
      Jl(e, t),
      (e.prototype.drawImages_ = function (t, e, n, i) {
        if (this.image_) {
          var r = Yn(t, e, n, i, this.transform_, this.pixelCoordinates_),
            o = this.context_,
            a = this.tmpLocalTransform_,
            s = o.globalAlpha;
          1 != this.imageOpacity_ && (o.globalAlpha = s * this.imageOpacity_);
          var l = this.imageRotation_;
          this.imageRotateWithView_ && (l += this.viewRotation_);
          for (var u = 0, h = r.length; u < h; u += 2) {
            var c = r[u] - this.imageAnchorX_,
              p = r[u + 1] - this.imageAnchorY_;
            if (
              0 !== l ||
              1 != this.imageScale_[0] ||
              1 != this.imageScale_[1]
            ) {
              var f = c + this.imageAnchorX_,
                d = p + this.imageAnchorY_;
              v(a, f, d, 1, 1, l, -f, -d),
                o.setTransform.apply(o, a),
                o.translate(f, d),
                o.scale(this.imageScale_[0], this.imageScale_[1]),
                o.drawImage(
                  this.image_,
                  this.imageOriginX_,
                  this.imageOriginY_,
                  this.imageWidth_,
                  this.imageHeight_,
                  -this.imageAnchorX_,
                  -this.imageAnchorY_,
                  this.imageWidth_,
                  this.imageHeight_
                ),
                o.setTransform(1, 0, 0, 1, 0, 0);
            } else
              o.drawImage(
                this.image_,
                this.imageOriginX_,
                this.imageOriginY_,
                this.imageWidth_,
                this.imageHeight_,
                c,
                p,
                this.imageWidth_,
                this.imageHeight_
              );
          }
          1 != this.imageOpacity_ && (o.globalAlpha = s);
        }
      }),
      (e.prototype.drawText_ = function (t, e, n, i) {
        if (this.textState_ && "" !== this.text_) {
          this.textFillState_ && this.setContextFillState_(this.textFillState_),
            this.textStrokeState_ &&
              this.setContextStrokeState_(this.textStrokeState_),
            this.setContextTextState_(this.textState_);
          var r = Yn(t, e, n, i, this.transform_, this.pixelCoordinates_),
            o = this.context_,
            a = this.textRotation_;
          for (
            this.textRotateWithView_ && (a += this.viewRotation_);
            e < n;
            e += i
          ) {
            var s = r[e] + this.textOffsetX_,
              l = r[e + 1] + this.textOffsetY_;
            if (0 !== a || 1 != this.textScale_[0] || 1 != this.textScale_[1]) {
              var u = v(this.tmpLocalTransform_, s, l, 1, 1, a, -s, -l);
              o.setTransform.apply(o, u),
                o.translate(s, l),
                o.scale(this.textScale_[0], this.textScale_[1]),
                this.textStrokeState_ && o.strokeText(this.text_, 0, 0),
                this.textFillState_ && o.fillText(this.text_, 0, 0),
                o.setTransform(1, 0, 0, 1, 0, 0);
            } else
              this.textStrokeState_ && o.strokeText(this.text_, s, l),
                this.textFillState_ && o.fillText(this.text_, s, l);
          }
        }
      }),
      (e.prototype.moveToLineTo_ = function (t, e, n, i, r) {
        var o = this.context_,
          a = Yn(t, e, n, i, this.transform_, this.pixelCoordinates_);
        o.moveTo(a[0], a[1]);
        var s = a.length;
        r && (s -= 2);
        for (var l = 2; l < s; l += 2) o.lineTo(a[l], a[l + 1]);
        return r && o.closePath(), n;
      }),
      (e.prototype.drawRings_ = function (t, e, n, i) {
        for (var r = 0, o = n.length; r < o; ++r)
          e = this.moveToLineTo_(t, e, n[r], i, !0);
        return e;
      }),
      (e.prototype.drawCircle = function (t) {
        if (C.intersects(this.extent_, t.getExtent())) {
          if (this.fillState_ || this.strokeState_) {
            this.fillState_ && this.setContextFillState_(this.fillState_),
              this.strokeState_ &&
                this.setContextStrokeState_(this.strokeState_);
            var e = Un.transformGeom2D(
                t,
                this.transform_,
                this.pixelCoordinates_
              ),
              n = e[2] - e[0],
              i = e[3] - e[1],
              r = Math.sqrt(n * n + i * i),
              o = this.context_;
            o.beginPath(),
              o.arc(e[0], e[1], r, 0, 2 * Math.PI),
              this.fillState_ && o.fill(),
              this.strokeState_ && o.stroke();
          }
          "" !== this.text_ && this.drawText_(t.getCenter(), 0, 2, 2);
        }
      }),
      (e.prototype.setStyle = function (t) {
        this.setFillStrokeStyle(t.getFill(), t.getStroke()),
          this.setImageStyle(t.getImage()),
          this.setTextStyle(t.getText());
      }),
      (e.prototype.setTransform = function (t) {
        this.transform_ = t;
      }),
      (e.prototype.drawGeometry = function (t) {
        switch (t.getType()) {
          case Ee.POINT:
            this.drawPoint(t);
            break;
          case Ee.LINE_STRING:
            this.drawLineString(t);
            break;
          case Ee.POLYGON:
            this.drawPolygon(t);
            break;
          case Ee.MULTI_POINT:
            this.drawMultiPoint(t);
            break;
          case Ee.MULTI_LINE_STRING:
            this.drawMultiLineString(t);
            break;
          case Ee.MULTI_POLYGON:
            this.drawMultiPolygon(t);
            break;
          case Ee.GEOMETRY_COLLECTION:
            this.drawGeometryCollection(t);
            break;
          case Ee.CIRCLE:
            this.drawCircle(t);
        }
      }),
      (e.prototype.drawFeature = function (t, e) {
        var n = e.getGeometryFunction()(t);
        n &&
          C.intersects(this.extent_, n.getExtent()) &&
          (this.setStyle(e), this.drawGeometry(n));
      }),
      (e.prototype.drawGeometryCollection = function (t) {
        for (var e = t.getGeometriesArray(), n = 0, i = e.length; n < i; ++n)
          this.drawGeometry(e[n]);
      }),
      (e.prototype.drawPoint = function (t) {
        this.squaredTolerance_ &&
          (t = t.simplifyTransformed(
            this.squaredTolerance_,
            this.userTransform_
          ));
        var e = t.getFlatCoordinates(),
          n = t.getStride();
        this.image_ && this.drawImages_(e, 0, e.length, n),
          "" !== this.text_ && this.drawText_(e, 0, e.length, n);
      }),
      (e.prototype.drawMultiPoint = function (t) {
        this.squaredTolerance_ &&
          (t = t.simplifyTransformed(
            this.squaredTolerance_,
            this.userTransform_
          ));
        var e = t.getFlatCoordinates(),
          n = t.getStride();
        this.image_ && this.drawImages_(e, 0, e.length, n),
          "" !== this.text_ && this.drawText_(e, 0, e.length, n);
      }),
      (e.prototype.drawLineString = function (t) {
        if (
          (this.squaredTolerance_ &&
            (t = t.simplifyTransformed(
              this.squaredTolerance_,
              this.userTransform_
            )),
          C.intersects(this.extent_, t.getExtent()))
        ) {
          if (this.strokeState_) {
            this.setContextStrokeState_(this.strokeState_);
            var e = this.context_,
              n = t.getFlatCoordinates();
            e.beginPath(),
              this.moveToLineTo_(n, 0, n.length, t.getStride(), !1),
              e.stroke();
          }
          if ("" !== this.text_) {
            var i = t.getFlatMidpoint();
            this.drawText_(i, 0, 2, 2);
          }
        }
      }),
      (e.prototype.drawMultiLineString = function (t) {
        this.squaredTolerance_ &&
          (t = t.simplifyTransformed(
            this.squaredTolerance_,
            this.userTransform_
          ));
        var e = t.getExtent();
        if (C.intersects(this.extent_, e)) {
          if (this.strokeState_) {
            this.setContextStrokeState_(this.strokeState_);
            var n = this.context_,
              i = t.getFlatCoordinates(),
              r = 0,
              o = t.getEnds(),
              a = t.getStride();
            n.beginPath();
            for (var s = 0, l = o.length; s < l; ++s)
              r = this.moveToLineTo_(i, r, o[s], a, !1);
            n.stroke();
          }
          if ("" !== this.text_) {
            var u = t.getFlatMidpoints();
            this.drawText_(u, 0, u.length, 2);
          }
        }
      }),
      (e.prototype.drawPolygon = function (t) {
        if (
          (this.squaredTolerance_ &&
            (t = t.simplifyTransformed(
              this.squaredTolerance_,
              this.userTransform_
            )),
          C.intersects(this.extent_, t.getExtent()))
        ) {
          if (this.strokeState_ || this.fillState_) {
            this.fillState_ && this.setContextFillState_(this.fillState_),
              this.strokeState_ &&
                this.setContextStrokeState_(this.strokeState_);
            var e = this.context_;
            e.beginPath(),
              this.drawRings_(
                t.getOrientedFlatCoordinates(),
                0,
                t.getEnds(),
                t.getStride()
              ),
              this.fillState_ && e.fill(),
              this.strokeState_ && e.stroke();
          }
          if ("" !== this.text_) {
            var n = t.getFlatInteriorPoint();
            this.drawText_(n, 0, 2, 2);
          }
        }
      }),
      (e.prototype.drawMultiPolygon = function (t) {
        if (
          (this.squaredTolerance_ &&
            (t = t.simplifyTransformed(
              this.squaredTolerance_,
              this.userTransform_
            )),
          C.intersects(this.extent_, t.getExtent()))
        ) {
          if (this.strokeState_ || this.fillState_) {
            this.fillState_ && this.setContextFillState_(this.fillState_),
              this.strokeState_ &&
                this.setContextStrokeState_(this.strokeState_);
            var e = this.context_,
              n = t.getOrientedFlatCoordinates(),
              i = 0,
              r = t.getEndss(),
              o = t.getStride();
            e.beginPath();
            for (var a = 0, s = r.length; a < s; ++a) {
              var l = r[a];
              i = this.drawRings_(n, i, l, o);
            }
            this.fillState_ && e.fill(), this.strokeState_ && e.stroke();
          }
          if ("" !== this.text_) {
            var u = t.getFlatInteriorPoints();
            this.drawText_(u, 0, u.length, 2);
          }
        }
      }),
      (e.prototype.setContextFillState_ = function (t) {
        var e = this.context_,
          n = this.contextFillState_;
        n
          ? n.fillStyle != t.fillStyle &&
            ((n.fillStyle = t.fillStyle), (e.fillStyle = t.fillStyle))
          : ((e.fillStyle = t.fillStyle),
            (this.contextFillState_ = { fillStyle: t.fillStyle }));
      }),
      (e.prototype.setContextStrokeState_ = function (t) {
        var e = this.context_,
          n = this.contextStrokeState_;
        n
          ? (n.lineCap != t.lineCap &&
              ((n.lineCap = t.lineCap), (e.lineCap = t.lineCap)),
            e.setLineDash &&
              (Rn.equals(n.lineDash, t.lineDash) ||
                e.setLineDash((n.lineDash = t.lineDash)),
              n.lineDashOffset != t.lineDashOffset &&
                ((n.lineDashOffset = t.lineDashOffset),
                (e.lineDashOffset = t.lineDashOffset))),
            n.lineJoin != t.lineJoin &&
              ((n.lineJoin = t.lineJoin), (e.lineJoin = t.lineJoin)),
            n.lineWidth != t.lineWidth &&
              ((n.lineWidth = t.lineWidth), (e.lineWidth = t.lineWidth)),
            n.miterLimit != t.miterLimit &&
              ((n.miterLimit = t.miterLimit), (e.miterLimit = t.miterLimit)),
            n.strokeStyle != t.strokeStyle &&
              ((n.strokeStyle = t.strokeStyle),
              (e.strokeStyle = t.strokeStyle)))
          : ((e.lineCap = t.lineCap),
            e.setLineDash &&
              (e.setLineDash(t.lineDash),
              (e.lineDashOffset = t.lineDashOffset)),
            (e.lineJoin = t.lineJoin),
            (e.lineWidth = t.lineWidth),
            (e.miterLimit = t.miterLimit),
            (e.strokeStyle = t.strokeStyle),
            (this.contextStrokeState_ = {
              lineCap: t.lineCap,
              lineDash: t.lineDash,
              lineDashOffset: t.lineDashOffset,
              lineJoin: t.lineJoin,
              lineWidth: t.lineWidth,
              miterLimit: t.miterLimit,
              strokeStyle: t.strokeStyle,
            }));
      }),
      (e.prototype.setContextTextState_ = function (t) {
        var e = this.context_,
          n = this.contextTextState_,
          i = t.textAlign ? t.textAlign : bt;
        n
          ? (n.font != t.font && ((n.font = t.font), (e.font = t.font)),
            n.textAlign != i && ((n.textAlign = i), (e.textAlign = i)),
            n.textBaseline != t.textBaseline &&
              ((n.textBaseline = t.textBaseline),
              (e.textBaseline = t.textBaseline)))
          : ((e.font = t.font),
            (e.textAlign = i),
            (e.textBaseline = t.textBaseline),
            (this.contextTextState_ = {
              font: t.font,
              textAlign: i,
              textBaseline: t.textBaseline,
            }));
      }),
      (e.prototype.setFillStrokeStyle = function (t, e) {
        var n = this;
        if (t) {
          var i = t.getColor();
          this.fillState_ = { fillStyle: Vs(i || Et) };
        } else this.fillState_ = null;
        if (e) {
          var r = e.getColor(),
            o = e.getLineCap(),
            a = e.getLineDash(),
            s = e.getLineDashOffset(),
            l = e.getLineJoin(),
            u = e.getWidth(),
            h = e.getMiterLimit(),
            c = a || wt;
          this.strokeState_ = {
            lineCap: void 0 !== o ? o : St,
            lineDash:
              1 === this.pixelRatio_
                ? c
                : c.map(function (t) {
                    return t * n.pixelRatio_;
                  }),
            lineDashOffset: (s || 0) * this.pixelRatio_,
            lineJoin: void 0 !== l ? l : Ot,
            lineWidth: (void 0 !== u ? u : 1) * this.pixelRatio_,
            miterLimit: void 0 !== h ? h : 10,
            strokeStyle: Vs(r || Tt),
          };
        } else this.strokeState_ = null;
      }),
      (e.prototype.setImageStyle = function (t) {
        var e;
        if (t && (e = t.getSize())) {
          var n = t.getAnchor(),
            i = t.getOrigin();
          (this.image_ = t.getImage(this.pixelRatio_)),
            (this.imageAnchorX_ = n[0] * this.pixelRatio_),
            (this.imageAnchorY_ = n[1] * this.pixelRatio_),
            (this.imageHeight_ = e[1] * this.pixelRatio_),
            (this.imageOpacity_ = t.getOpacity()),
            (this.imageOriginX_ = i[0]),
            (this.imageOriginY_ = i[1]),
            (this.imageRotateWithView_ = t.getRotateWithView()),
            (this.imageRotation_ = t.getRotation()),
            (this.imageScale_ = t.getScaleArray()),
            (this.imageWidth_ = e[0] * this.pixelRatio_);
        } else this.image_ = null;
      }),
      (e.prototype.setTextStyle = function (t) {
        if (t) {
          var e = t.getFill();
          if (e) {
            var n = e.getColor();
            this.textFillState_ = { fillStyle: Vs(n || Et) };
          } else this.textFillState_ = null;
          var i = t.getStroke();
          if (i) {
            var r = i.getColor(),
              o = i.getLineCap(),
              a = i.getLineDash(),
              s = i.getLineDashOffset(),
              l = i.getLineJoin(),
              u = i.getWidth(),
              h = i.getMiterLimit();
            this.textStrokeState_ = {
              lineCap: void 0 !== o ? o : St,
              lineDash: a || wt,
              lineDashOffset: s || 0,
              lineJoin: void 0 !== l ? l : Ot,
              lineWidth: void 0 !== u ? u : 1,
              miterLimit: void 0 !== h ? h : 10,
              strokeStyle: Vs(r || Tt),
            };
          } else this.textStrokeState_ = null;
          var c = t.getFont(),
            p = t.getOffsetX(),
            f = t.getOffsetY(),
            d = t.getRotateWithView(),
            g = t.getRotation(),
            _ = t.getScaleArray(),
            y = t.getText(),
            v = t.getTextAlign(),
            m = t.getTextBaseline();
          (this.textState_ = {
            font: void 0 !== c ? c : Ct,
            textAlign: void 0 !== v ? v : bt,
            textBaseline: void 0 !== m ? m : Rt,
          }),
            (this.text_ =
              void 0 !== y
                ? Array.isArray(y)
                  ? y.reduce(function (t, e, n) {
                      return t + (n % 2 ? " " : e);
                    }, "")
                  : y
                : ""),
            (this.textOffsetX_ = void 0 !== p ? this.pixelRatio_ * p : 0),
            (this.textOffsetY_ = void 0 !== f ? this.pixelRatio_ * f : 0),
            (this.textRotateWithView_ = void 0 !== d && d),
            (this.textRotation_ = void 0 !== g ? g : 0),
            (this.textScale_ = [
              this.pixelRatio_ * _[0],
              this.pixelRatio_ * _[1],
            ]);
        } else this.text_ = "";
      }),
      e
    );
  })(fl),
  $l = "fraction",
  tu = "pixels",
  eu = {};
e(
  eu,
  "default",
  () => pu,
  (t) => (pu = t)
);
k = a("3xzSb");
var nu = "bottom-left",
  iu = "bottom-right",
  ru = "top-left",
  ou = "top-right",
  au = ((g = a("4Cz58")), {});
e(
  au,
  "get",
  () => hu,
  (t) => (hu = t)
);
(mt = a("KD0eF")), (k = a("3xzSb")), (xt = a("DfnQm"));
var su = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  lu = null,
  uu = (function (t) {
    function e(e, n, i, r, o, a) {
      var s = t.call(this) || this;
      return (
        (s.hitDetectionImage_ = null),
        (s.image_ = e || new Image()),
        null !== r && (s.image_.crossOrigin = r),
        (s.canvas_ = {}),
        (s.color_ = a),
        (s.unlisten_ = null),
        (s.imageState_ = o),
        (s.size_ = i),
        (s.src_ = n),
        s.tainted_,
        s
      );
    }
    return (
      su(e, t),
      (e.prototype.isTainted_ = function () {
        if (void 0 === this.tainted_ && this.imageState_ === Fo) {
          lu || (lu = xt.createCanvasContext2D(1, 1)),
            lu.drawImage(this.image_, 0, 0);
          try {
            lu.getImageData(0, 0, 1, 1), (this.tainted_ = !1);
          } catch (t) {
            (lu = null), (this.tainted_ = !0);
          }
        }
        return !0 === this.tainted_;
      }),
      (e.prototype.dispatchChangeEvent_ = function () {
        this.dispatchEvent(k.default.CHANGE);
      }),
      (e.prototype.handleImageError_ = function () {
        (this.imageState_ = Ao),
          this.unlistenImage_(),
          this.dispatchChangeEvent_();
      }),
      (e.prototype.handleImageLoad_ = function () {
        (this.imageState_ = Fo),
          this.size_
            ? ((this.image_.width = this.size_[0]),
              (this.image_.height = this.size_[1]))
            : (this.size_ = [this.image_.width, this.image_.height]),
          this.unlistenImage_(),
          this.dispatchChangeEvent_();
      }),
      (e.prototype.getImage = function (t) {
        return (
          this.replaceColor_(t), this.canvas_[t] ? this.canvas_[t] : this.image_
        );
      }),
      (e.prototype.getPixelRatio = function (t) {
        return this.replaceColor_(t), this.canvas_[t] ? t : 1;
      }),
      (e.prototype.getImageState = function () {
        return this.imageState_;
      }),
      (e.prototype.getHitDetectionImage = function () {
        if (!this.hitDetectionImage_)
          if (this.isTainted_()) {
            var t = this.size_[0],
              e = this.size_[1],
              n = xt.createCanvasContext2D(t, e);
            n.fillRect(0, 0, t, e), (this.hitDetectionImage_ = n.canvas);
          } else this.hitDetectionImage_ = this.image_;
        return this.hitDetectionImage_;
      }),
      (e.prototype.getSize = function () {
        return this.size_;
      }),
      (e.prototype.getSrc = function () {
        return this.src_;
      }),
      (e.prototype.load = function () {
        if (this.imageState_ == Lo) {
          this.imageState_ = Mo;
          try {
            this.image_.src = this.src_;
          } catch (t) {
            this.handleImageError_();
          }
          this.unlisten_ = oa.listenImage(
            this.image_,
            this.handleImageLoad_.bind(this),
            this.handleImageError_.bind(this)
          );
        }
      }),
      (e.prototype.replaceColor_ = function (t) {
        if (this.color_ && !this.canvas_[t] && this.imageState_ === Fo) {
          var e = document.createElement("canvas");
          (this.canvas_[t] = e),
            (e.width = Math.ceil(this.image_.width * t)),
            (e.height = Math.ceil(this.image_.height * t));
          var n = e.getContext("2d");
          if (
            (n.scale(t, t),
            n.drawImage(this.image_, 0, 0),
            (n.globalCompositeOperation = "multiply"),
            "multiply" === n.globalCompositeOperation || this.isTainted_())
          )
            (n.fillStyle = O(this.color_)),
              n.fillRect(0, 0, e.width / t, e.height / t),
              (n.globalCompositeOperation = "destination-in"),
              n.drawImage(this.image_, 0, 0);
          else {
            for (
              var i = n.getImageData(0, 0, e.width, e.height),
                r = i.data,
                o = this.color_[0] / 255,
                a = this.color_[1] / 255,
                s = this.color_[2] / 255,
                l = this.color_[3],
                u = 0,
                h = r.length;
              u < h;
              u += 4
            )
              (r[u] *= o), (r[u + 1] *= a), (r[u + 2] *= s), (r[u + 3] *= l);
            n.putImageData(i, 0, 0);
          }
        }
      }),
      (e.prototype.unlistenImage_ = function () {
        this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null));
      }),
      e
    );
  })(mt.default);
function hu(t, e, n, i, r, o) {
  var a = D.get(e, i, o);
  return a || ((a = new uu(t, e, n, i, r, o)), D.set(e, i, o, a)), a;
}
f = a("9iPUS");
var cu = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  pu = (function (t) {
    function e(e) {
      var n = this,
        i = e || {},
        r = void 0 !== i.opacity ? i.opacity : 1,
        o = void 0 !== i.rotation ? i.rotation : 0,
        a = void 0 !== i.scale ? i.scale : 1,
        s = void 0 !== i.rotateWithView && i.rotateWithView;
      ((n =
        t.call(this, {
          opacity: r,
          rotation: o,
          scale: a,
          displacement: void 0 !== i.displacement ? i.displacement : [0, 0],
          rotateWithView: s,
        }) || this).anchor_ = void 0 !== i.anchor ? i.anchor : [0.5, 0.5]),
        (n.normalizedAnchor_ = null),
        (n.anchorOrigin_ = void 0 !== i.anchorOrigin ? i.anchorOrigin : ru),
        (n.anchorXUnits_ = void 0 !== i.anchorXUnits ? i.anchorXUnits : $l),
        (n.anchorYUnits_ = void 0 !== i.anchorYUnits ? i.anchorYUnits : $l),
        (n.crossOrigin_ = void 0 !== i.crossOrigin ? i.crossOrigin : null);
      var l = void 0 !== i.img ? i.img : null;
      n.imgSize_ = i.imgSize;
      var u = i.src;
      g.assert(!(void 0 !== u && l), 4),
        g.assert(!l || (l && n.imgSize_), 5),
        (void 0 !== u && 0 !== u.length) || !l || (u = l.src || f.getUid(l)),
        g.assert(void 0 !== u && u.length > 0, 6);
      var h = void 0 !== i.src ? Lo : Fo;
      return (
        (n.color_ = void 0 !== i.color ? P(i.color) : null),
        (n.iconImage_ = au.get(
          l,
          u,
          void 0 !== n.imgSize_ ? n.imgSize_ : null,
          n.crossOrigin_,
          h,
          n.color_
        )),
        (n.offset_ = void 0 !== i.offset ? i.offset : [0, 0]),
        (n.offsetOrigin_ = void 0 !== i.offsetOrigin ? i.offsetOrigin : ru),
        (n.origin_ = null),
        (n.size_ = void 0 !== i.size ? i.size : null),
        n
      );
    }
    return (
      cu(e, t),
      (e.prototype.clone = function () {
        var t = this.getScale();
        return new e({
          anchor: this.anchor_.slice(),
          anchorOrigin: this.anchorOrigin_,
          anchorXUnits: this.anchorXUnits_,
          anchorYUnits: this.anchorYUnits_,
          color:
            this.color_ && this.color_.slice
              ? this.color_.slice()
              : this.color_ || void 0,
          crossOrigin: this.crossOrigin_,
          imgSize: this.imgSize_,
          offset: this.offset_.slice(),
          offsetOrigin: this.offsetOrigin_,
          opacity: this.getOpacity(),
          rotateWithView: this.getRotateWithView(),
          rotation: this.getRotation(),
          scale: Array.isArray(t) ? t.slice() : t,
          size: null !== this.size_ ? this.size_.slice() : void 0,
          src: this.getSrc(),
        });
      }),
      (e.prototype.getAnchor = function () {
        var t = this.normalizedAnchor_;
        if (!t) {
          t = this.anchor_;
          var e = this.getSize();
          if (this.anchorXUnits_ == $l || this.anchorYUnits_ == $l) {
            if (!e) return null;
            (t = this.anchor_.slice()),
              this.anchorXUnits_ == $l && (t[0] *= e[0]),
              this.anchorYUnits_ == $l && (t[1] *= e[1]);
          }
          if (this.anchorOrigin_ != ru) {
            if (!e) return null;
            t === this.anchor_ && (t = this.anchor_.slice()),
              (this.anchorOrigin_ != ou && this.anchorOrigin_ != iu) ||
                (t[0] = -t[0] + e[0]),
              (this.anchorOrigin_ != nu && this.anchorOrigin_ != iu) ||
                (t[1] = -t[1] + e[1]);
          }
          this.normalizedAnchor_ = t;
        }
        var n = this.getDisplacement();
        return [t[0] - n[0], t[1] + n[1]];
      }),
      (e.prototype.setAnchor = function (t) {
        (this.anchor_ = t), (this.normalizedAnchor_ = null);
      }),
      (e.prototype.getColor = function () {
        return this.color_;
      }),
      (e.prototype.getImage = function (t) {
        return this.iconImage_.getImage(t);
      }),
      (e.prototype.getPixelRatio = function (t) {
        return this.iconImage_.getPixelRatio(t);
      }),
      (e.prototype.getImageSize = function () {
        return this.iconImage_.getSize();
      }),
      (e.prototype.getImageState = function () {
        return this.iconImage_.getImageState();
      }),
      (e.prototype.getHitDetectionImage = function () {
        return this.iconImage_.getHitDetectionImage();
      }),
      (e.prototype.getOrigin = function () {
        if (this.origin_) return this.origin_;
        var t = this.offset_;
        if (this.offsetOrigin_ != ru) {
          var e = this.getSize(),
            n = this.iconImage_.getSize();
          if (!e || !n) return null;
          (t = t.slice()),
            (this.offsetOrigin_ != ou && this.offsetOrigin_ != iu) ||
              (t[0] = n[0] - e[0] - t[0]),
            (this.offsetOrigin_ != nu && this.offsetOrigin_ != iu) ||
              (t[1] = n[1] - e[1] - t[1]);
        }
        return (this.origin_ = t), this.origin_;
      }),
      (e.prototype.getSrc = function () {
        return this.iconImage_.getSrc();
      }),
      (e.prototype.getSize = function () {
        return this.size_ ? this.size_ : this.iconImage_.getSize();
      }),
      (e.prototype.listenImageChange = function (t) {
        this.iconImage_.addEventListener(k.default.CHANGE, t);
      }),
      (e.prototype.load = function () {
        this.iconImage_.load();
      }),
      (e.prototype.unlistenImageChange = function (t) {
        this.iconImage_.removeEventListener(k.default.CHANGE, t);
      }),
      e
    );
  })(Ys),
  fu =
    ((E = a("9byFX")),
    (xt = a("DfnQm")),
    (C = a("9pD6L")),
    (Rn = a("fVVyM")),
    0.5);
(C = a("9pD6L")), (f = a("9iPUS"));
var du = 0.5,
  gu = {
    Point: function (t, e, n, i, r) {
      var o,
        a = n.getImage(),
        s = n.getText();
      r && ((t = r), (o = a && s && s.getText() ? {} : void 0));
      if (a) {
        if (a.getImageState() != Fo) return;
        var l = t.getBuilder(n.getZIndex(), Fl.IMAGE);
        l.setImageStyle(a, o), l.drawPoint(e, i);
      }
      if (s && s.getText()) {
        var u = t.getBuilder(n.getZIndex(), Fl.TEXT);
        u.setTextStyle(s, o), u.drawText(e, i);
      }
    },
    LineString: function (t, e, n, i, r) {
      var o = n.getStroke();
      if (o) {
        var a = t.getBuilder(n.getZIndex(), Fl.LINE_STRING);
        a.setFillStrokeStyle(null, o), a.drawLineString(e, i);
      }
      var s = n.getText();
      if (s && s.getText()) {
        var l = (r || t).getBuilder(n.getZIndex(), Fl.TEXT);
        l.setTextStyle(s), l.drawText(e, i);
      }
    },
    Polygon: function (t, e, n, i, r) {
      var o = n.getFill(),
        a = n.getStroke();
      if (o || a) {
        var s = t.getBuilder(n.getZIndex(), Fl.POLYGON);
        s.setFillStrokeStyle(o, a), s.drawPolygon(e, i);
      }
      var l = n.getText();
      if (l && l.getText()) {
        var u = (r || t).getBuilder(n.getZIndex(), Fl.TEXT);
        u.setTextStyle(l), u.drawText(e, i);
      }
    },
    MultiPoint: function (t, e, n, i, r) {
      var o,
        a = n.getImage(),
        s = n.getText();
      r && ((t = r), (o = a && s && s.getText() ? {} : void 0));
      if (a) {
        if (a.getImageState() != Fo) return;
        var l = t.getBuilder(n.getZIndex(), Fl.IMAGE);
        l.setImageStyle(a, o), l.drawMultiPoint(e, i);
      }
      if (s && s.getText()) {
        var u = (r || t).getBuilder(n.getZIndex(), Fl.TEXT);
        u.setTextStyle(s, o), u.drawText(e, i);
      }
    },
    MultiLineString: function (t, e, n, i, r) {
      var o = n.getStroke();
      if (o) {
        var a = t.getBuilder(n.getZIndex(), Fl.LINE_STRING);
        a.setFillStrokeStyle(null, o), a.drawMultiLineString(e, i);
      }
      var s = n.getText();
      if (s && s.getText()) {
        var l = (r || t).getBuilder(n.getZIndex(), Fl.TEXT);
        l.setTextStyle(s), l.drawText(e, i);
      }
    },
    MultiPolygon: function (t, e, n, i, r) {
      var o = n.getFill(),
        a = n.getStroke();
      if (a || o) {
        var s = t.getBuilder(n.getZIndex(), Fl.POLYGON);
        s.setFillStrokeStyle(o, a), s.drawMultiPolygon(e, i);
      }
      var l = n.getText();
      if (l && l.getText()) {
        var u = (r || t).getBuilder(n.getZIndex(), Fl.TEXT);
        u.setTextStyle(l), u.drawText(e, i);
      }
    },
    GeometryCollection: function (t, e, n, i, r) {
      var o,
        a,
        s = e.getGeometriesArray();
      for (o = 0, a = s.length; o < a; ++o) {
        (0, gu[s[o].getType()])(t, s[o], n, i, r);
      }
    },
    Circle: function (t, e, n, i, r) {
      var o = n.getFill(),
        a = n.getStroke();
      if (o || a) {
        var s = t.getBuilder(n.getZIndex(), Fl.CIRCLE);
        s.setFillStrokeStyle(o, a), s.drawCircle(e, i);
      }
      var l = n.getText();
      if (l && l.getText()) {
        var u = (r || t).getBuilder(n.getZIndex(), Fl.TEXT);
        u.setTextStyle(l), u.drawText(e, i);
      }
    },
  };
function _u(t, e) {
  return parseInt(f.getUid(t), 10) - parseInt(f.getUid(e), 10);
}
function yu(t, e) {
  return (du * t) / e;
}
function vu(t, e, n, i, r, o, a) {
  var s = !1,
    l = n.getImage();
  if (l) {
    var u = l.getImageState();
    u == Fo || u == Ao
      ? l.unlistenImageChange(r)
      : (u == Lo && l.load(),
        (u = l.getImageState()),
        l.listenImageChange(r),
        (s = !0));
  }
  return (
    (function (t, e, n, i, r, o) {
      var a = n.getGeometryFunction()(e);
      if (!a) return;
      var s = a.simplifyTransformed(i, r),
        l = n.getRenderer();
      if (l) mu(t, s, n, e);
      else {
        (0, gu[s.getType()])(t, s, n, e, o);
      }
    })(t, e, n, i, o, a),
    s
  );
}
function mu(t, e, n, i) {
  if (e.getType() != Ee.GEOMETRY_COLLECTION)
    t.getBuilder(n.getZIndex(), Fl.DEFAULT).drawCustom(
      e,
      i,
      n.getRenderer(),
      n.getHitDetectionRenderer()
    );
  else
    for (var r = e.getGeometries(), o = 0, a = r.length; o < a; ++o)
      mu(t, r[o], n, i);
}
(Rn = a("fVVyM")), (f = a("9iPUS"));
var xu = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Cu = (function (t) {
    function e(e) {
      var n = t.call(this, e) || this;
      return (
        (n.boundHandleStyleImageChange_ = n.handleStyleImageChange_.bind(n)),
        n.animatingOrInteracting_,
        (n.dirty_ = !1),
        (n.hitDetectionImageData_ = null),
        (n.renderedFeatures_ = null),
        (n.renderedRevision_ = -1),
        (n.renderedResolution_ = NaN),
        (n.renderedExtent_ = C.createEmpty()),
        (n.wrappedRenderedExtent_ = C.createEmpty()),
        n.renderedRotation_,
        (n.renderedCenter_ = null),
        (n.renderedProjection_ = null),
        (n.renderedRenderOrder_ = null),
        (n.replayGroup_ = null),
        (n.replayGroupChanged = !0),
        (n.declutterExecutorGroup = null),
        (n.clipping = !0),
        n
      );
    }
    return (
      xu(e, t),
      (e.prototype.renderWorlds = function (t, e, n) {
        var i = e.extent,
          r = e.viewState,
          o = r.center,
          a = r.resolution,
          s = r.projection,
          l = r.rotation,
          u = s.getExtent(),
          h = this.getLayer().getSource(),
          c = e.pixelRatio,
          p = e.viewHints,
          f = !(p[Te] || p[be]),
          d = this.context,
          g = Math.round(e.size[0] * c),
          _ = Math.round(e.size[1] * c),
          y = h.getWrapX() && s.canWrapX(),
          v = y ? C.getWidth(u) : null,
          m = y ? Math.ceil((i[2] - u[2]) / v) + 1 : 1,
          x = y ? Math.floor((i[0] - u[0]) / v) : 0;
        do {
          var E = this.getRenderTransform(o, a, l, c, g, _, x * v);
          t.execute(d, 1, E, l, f, void 0, n);
        } while (++x < m);
      }),
      (e.prototype.renderDeclutter = function (t) {
        this.declutterExecutorGroup &&
          this.renderWorlds(this.declutterExecutorGroup, t, t.declutterTree);
      }),
      (e.prototype.renderFrame = function (t, e) {
        var n = t.pixelRatio,
          i = t.layerStatesArray[t.layerIndex];
        !(function (t, e, n) {
          _(t, e, 0, 0, n, 0, 0);
        })(this.pixelTransform, 1 / n, 1 / n),
          m(this.inversePixelTransform, this.pixelTransform);
        var r = x(this.pixelTransform);
        this.useContainer(e, r, i.opacity, this.getBackground(t));
        var o = this.context,
          a = o.canvas,
          s = this.replayGroup_,
          l = this.declutterExecutorGroup;
        if ((!s || s.isEmpty()) && (!l || l.isEmpty())) return null;
        var u = Math.round(t.size[0] * n),
          h = Math.round(t.size[1] * n);
        a.width != u || a.height != h
          ? ((a.width = u),
            (a.height = h),
            a.style.transform !== r && (a.style.transform = r))
          : this.containerReused || o.clearRect(0, 0, u, h),
          this.preRender(o, t);
        var c = t.viewState,
          p = c.projection,
          f = !1,
          d = !0;
        if (i.extent && this.clipping) {
          var g = wn(i.extent, p);
          (f =
            (d = C.intersects(g, t.extent)) &&
            !C.containsExtent(g, t.extent)) && this.clipUnrotated(o, t, g);
        }
        d && this.renderWorlds(s, t), f && o.restore(), this.postRender(o, t);
        var y = yt(i.opacity),
          v = this.container;
        return (
          y !== v.style.opacity && (v.style.opacity = y),
          this.renderedRotation_ !== c.rotation &&
            ((this.renderedRotation_ = c.rotation),
            (this.hitDetectionImageData_ = null)),
          this.container
        );
      }),
      (e.prototype.getFeatures = function (t) {
        return new Promise(
          function (e) {
            if (!this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
              var n = [this.context.canvas.width, this.context.canvas.height];
              y(this.pixelTransform, n);
              var i = this.renderedCenter_,
                r = this.renderedResolution_,
                o = this.renderedRotation_,
                a = this.renderedProjection_,
                s = this.wrappedRenderedExtent_,
                l = this.getLayer(),
                u = [],
                h = n[0] * fu,
                c = n[1] * fu;
              u.push(this.getRenderTransform(i, r, o, fu, h, c, 0).slice());
              var p = l.getSource(),
                f = a.getExtent();
              if (p.getWrapX() && a.canWrapX() && !C.containsExtent(f, s)) {
                for (
                  var d = s[0], g = C.getWidth(f), _ = 0, v = void 0;
                  d < f[0];

                )
                  (v = g * --_),
                    u.push(
                      this.getRenderTransform(i, r, o, fu, h, c, v).slice()
                    ),
                    (d += g);
                for (_ = 0, d = s[2]; d > f[2]; )
                  (v = g * ++_),
                    u.push(
                      this.getRenderTransform(i, r, o, fu, h, c, v).slice()
                    ),
                    (d -= g);
              }
              this.hitDetectionImageData_ = (function (t, e, n, i, r, o, a) {
                var s = t[0] * fu,
                  l = t[1] * fu,
                  u = xt.createCanvasContext2D(s, l);
                u.imageSmoothingEnabled = !1;
                for (
                  var h = u.canvas,
                    c = new ql.default(u, fu, r, null, a),
                    p = n.length,
                    f = Math.floor(16777215 / p),
                    d = {},
                    g = 1;
                  g <= p;
                  ++g
                ) {
                  var _ = n[g - 1],
                    y = _.getStyleFunction() || i;
                  if (i) {
                    var v = y(_, o);
                    if (v) {
                      Array.isArray(v) || (v = [v]);
                      for (
                        var m =
                            "#" + ("000000" + (g * f).toString(16)).slice(-6),
                          x = 0,
                          E = v.length;
                        x < E;
                        ++x
                      ) {
                        var S = v[x],
                          w = S.getGeometryFunction()(_);
                        if (w && C.intersects(r, w.getExtent())) {
                          var O = S.clone(),
                            T = O.getFill();
                          T && T.setColor(m);
                          var b = O.getStroke();
                          b && (b.setColor(m), b.setLineDash(null)),
                            O.setText(void 0);
                          var R = S.getImage();
                          if (R && 0 !== R.getOpacity()) {
                            var I = R.getImageSize();
                            if (!I) continue;
                            var P = xt.createCanvasContext2D(
                                I[0],
                                I[1],
                                void 0,
                                { alpha: !1 }
                              ),
                              L = P.canvas;
                            (P.fillStyle = m),
                              P.fillRect(0, 0, L.width, L.height),
                              O.setImage(
                                new eu.default({
                                  img: L,
                                  imgSize: I,
                                  anchor: R.getAnchor(),
                                  anchorXUnits: tu,
                                  anchorYUnits: tu,
                                  offset: R.getOrigin(),
                                  opacity: 1,
                                  size: R.getSize(),
                                  scale: R.getScale(),
                                  rotation: R.getRotation(),
                                  rotateWithView: R.getRotateWithView(),
                                })
                              );
                          }
                          var M = O.getZIndex() || 0;
                          (D = d[M]) ||
                            ((D = {}),
                            (d[M] = D),
                            (D[Ee.POLYGON] = []),
                            (D[Ee.CIRCLE] = []),
                            (D[Ee.LINE_STRING] = []),
                            (D[Ee.POINT] = [])),
                            D[w.getType().replace("Multi", "")].push(w, O);
                        }
                      }
                    }
                  }
                }
                for (
                  var F = Object.keys(d)
                      .map(Number)
                      .sort(Rn.numberSafeCompareFunction),
                    A = ((g = 0), F.length);
                  g < A;
                  ++g
                ) {
                  var D = d[F[g]];
                  for (var j in D) {
                    var N = D[j];
                    for (x = 0, E = N.length; x < E; x += 2) {
                      c.setStyle(N[x + 1]);
                      for (var G = 0, k = e.length; G < k; ++G)
                        c.setTransform(e[G]), c.drawGeometry(N[x]);
                    }
                  }
                }
                return u.getImageData(0, 0, h.width, h.height);
              })(n, u, this.renderedFeatures_, l.getStyleFunction(), s, r, o);
            }
            e(
              (function (t, e, n) {
                var i = [];
                if (n) {
                  var r = Math.floor(Math.round(t[0]) * fu),
                    o = Math.floor(Math.round(t[1]) * fu),
                    a =
                      4 *
                      (E.clamp(r, 0, n.width - 1) +
                        E.clamp(o, 0, n.height - 1) * n.width),
                    s = n.data[a],
                    l = n.data[a + 1],
                    u = n.data[a + 2] + 256 * (l + 256 * s),
                    h = Math.floor(16777215 / e.length);
                  u && u % h == 0 && i.push(e[u / h - 1]);
                }
                return i;
              })(t, this.renderedFeatures_, this.hitDetectionImageData_)
            );
          }.bind(this)
        );
      }),
      (e.prototype.forEachFeatureAtCoordinate = function (t, e, n, i, r) {
        var o = this;
        if (this.replayGroup_) {
          var a,
            s = e.viewState.resolution,
            l = e.viewState.rotation,
            u = this.getLayer(),
            h = {},
            c = function (t, e, n) {
              var o = f.getUid(t),
                a = h[o];
              if (a) {
                if (!0 !== a && n < a.distanceSq) {
                  if (0 === n)
                    return (
                      (h[o] = !0), r.splice(r.lastIndexOf(a), 1), i(t, u, e)
                    );
                  (a.geometry = e), (a.distanceSq = n);
                }
              } else {
                if (0 === n) return (h[o] = !0), i(t, u, e);
                r.push(
                  (h[o] = {
                    feature: t,
                    layer: u,
                    geometry: e,
                    distanceSq: n,
                    callback: i,
                  })
                );
              }
            },
            p = [this.replayGroup_];
          return (
            this.declutterExecutorGroup && p.push(this.declutterExecutorGroup),
            p.some(function (i) {
              return (a = i.forEachFeatureAtCoordinate(
                t,
                s,
                l,
                n,
                c,
                i === o.declutterExecutorGroup && e.declutterTree
                  ? e.declutterTree.all().map(function (t) {
                      return t.value;
                    })
                  : null
              ));
            }),
            a
          );
        }
      }),
      (e.prototype.handleFontsChanged = function () {
        var t = this.getLayer();
        t.getVisible() && this.replayGroup_ && t.changed();
      }),
      (e.prototype.handleStyleImageChange_ = function (t) {
        this.renderIfReadyAndVisible();
      }),
      (e.prototype.prepareFrame = function (t) {
        var e = this.getLayer(),
          n = e.getSource();
        if (!n) return !1;
        var i = t.viewHints[Te],
          r = t.viewHints[be],
          o = e.getUpdateWhileAnimating(),
          a = e.getUpdateWhileInteracting();
        if ((!this.dirty_ && !o && i) || (!a && r))
          return (this.animatingOrInteracting_ = !0), !0;
        this.animatingOrInteracting_ = !1;
        var s = t.extent,
          l = t.viewState,
          u = l.projection,
          h = l.resolution,
          c = t.pixelRatio,
          p = e.getRevision(),
          f = e.getRenderBuffer(),
          d = e.getRenderOrder();
        void 0 === d && (d = _u);
        var g = l.center.slice(),
          _ = C.buffer(s, f * h),
          y = _.slice(),
          v = [_.slice()],
          m = u.getExtent();
        if (n.getWrapX() && u.canWrapX() && !C.containsExtent(m, t.extent)) {
          var x = C.getWidth(m),
            E = Math.max(C.getWidth(_) / 2, x);
          (_[0] = m[0] - E), (_[2] = m[2] + E), tt(g, u);
          var S = C.wrapX(v[0], u);
          S[0] < m[0] && S[2] < m[2]
            ? v.push([S[0] + x, S[1], S[2] + x, S[3]])
            : S[0] > m[0] &&
              S[2] > m[2] &&
              v.push([S[0] - x, S[1], S[2] - x, S[3]]);
        }
        if (
          !this.dirty_ &&
          this.renderedResolution_ == h &&
          this.renderedRevision_ == p &&
          this.renderedRenderOrder_ == d &&
          C.containsExtent(this.wrappedRenderedExtent_, _)
        )
          return (
            Rn.equals(this.renderedExtent_, y) ||
              ((this.hitDetectionImageData_ = null),
              (this.renderedExtent_ = y)),
            (this.renderedCenter_ = g),
            (this.replayGroupChanged = !1),
            !0
          );
        (this.replayGroup_ = null), (this.dirty_ = !1);
        var w,
          O = new Ml(yu(h, c), _, h, c);
        this.getLayer().getDeclutter() && (w = new Ml(yu(h, c), _, h, c));
        var T,
          b = xn();
        if (b) {
          for (var R = 0, I = v.length; R < I; ++R) {
            var P = Sn(v[R], u);
            n.loadFeatures(P, On(h, u), b);
          }
          T = pn(b, u);
        } else for (R = 0, I = v.length; R < I; ++R) n.loadFeatures(v[R], h, u);
        var L = (function (t, e) {
            var n = yu(t, e);
            return n * n;
          })(h, c),
          M = function (t) {
            var n,
              i = t.getStyleFunction() || e.getStyleFunction();
            if ((i && (n = i(t, h)), n)) {
              var r = this.renderFeature(t, L, n, O, T, w);
              this.dirty_ = this.dirty_ || r;
            }
          }.bind(this),
          F = Sn(_, u),
          A = n.getFeaturesInExtent(F);
        d && A.sort(d);
        for (R = 0, I = A.length; R < I; ++R) M(A[R]);
        this.renderedFeatures_ = A;
        var D = O.finish(),
          j = new Hl(_, h, c, n.getOverlaps(), D, e.getRenderBuffer());
        return (
          w &&
            (this.declutterExecutorGroup = new Hl(
              _,
              h,
              c,
              n.getOverlaps(),
              w.finish(),
              e.getRenderBuffer()
            )),
          (this.renderedResolution_ = h),
          (this.renderedRevision_ = p),
          (this.renderedRenderOrder_ = d),
          (this.renderedExtent_ = y),
          (this.wrappedRenderedExtent_ = _),
          (this.renderedCenter_ = g),
          (this.renderedProjection_ = u),
          (this.replayGroup_ = j),
          (this.hitDetectionImageData_ = null),
          (this.replayGroupChanged = !0),
          !0
        );
      }),
      (e.prototype.renderFeature = function (t, e, n, i, r, o) {
        if (!n) return !1;
        var a = !1;
        if (Array.isArray(n))
          for (var s = 0, l = n.length; s < l; ++s)
            a = vu(i, t, n[s], e, this.boundHandleStyleImageChange_, r, o) || a;
        else a = vu(i, t, n, e, this.boundHandleStyleImageChange_, r, o);
        return a;
      }),
      e
    );
  })(Io.default),
  Eu = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Su = (function (t) {
    function e(e) {
      return t.call(this, e) || this;
    }
    return (
      Eu(e, t),
      (e.prototype.createRenderer = function () {
        return new rl.default(this);
      }),
      e
    );
  })(ks.default),
  wu = {};
e(
  wu,
  "VectorSourceEvent",
  () => Gu,
  (t) => (Gu = t)
),
  e(
    wu,
    "default",
    () => ku,
    (t) => (ku = t)
  );
(Vt = a("cD8Qe")),
  (Wt = a("1TIYs")),
  (st = a("f18Q2")),
  (k = a("3xzSb")),
  (ot = a("jXCUw")),
  (C = a("9pD6L")),
  (f = a("9iPUS")),
  (B = a("gn0g3"));
var Ou = (function () {
    function t(t) {
      (this.rbush_ = new (n(zs))(t)), (this.items_ = {});
    }
    return (
      (t.prototype.insert = function (t, e) {
        var n = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3], value: e };
        this.rbush_.insert(n), (this.items_[f.getUid(e)] = n);
      }),
      (t.prototype.load = function (t, e) {
        for (var n = new Array(e.length), i = 0, r = e.length; i < r; i++) {
          var o = t[i],
            a = e[i],
            s = { minX: o[0], minY: o[1], maxX: o[2], maxY: o[3], value: a };
          (n[i] = s), (this.items_[f.getUid(a)] = s);
        }
        this.rbush_.load(n);
      }),
      (t.prototype.remove = function (t) {
        var e = f.getUid(t),
          n = this.items_[e];
        return delete this.items_[e], null !== this.rbush_.remove(n);
      }),
      (t.prototype.update = function (t, e) {
        var n = this.items_[f.getUid(e)],
          i = [n.minX, n.minY, n.maxX, n.maxY];
        C.equals(i, t) || (this.remove(e), this.insert(t, e));
      }),
      (t.prototype.getAll = function () {
        return this.rbush_.all().map(function (t) {
          return t.value;
        });
      }),
      (t.prototype.getInExtent = function (t) {
        var e = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3] };
        return this.rbush_.search(e).map(function (t) {
          return t.value;
        });
      }),
      (t.prototype.forEach = function (t) {
        return this.forEach_(this.getAll(), t);
      }),
      (t.prototype.forEachInExtent = function (t, e) {
        return this.forEach_(this.getInExtent(t), e);
      }),
      (t.prototype.forEach_ = function (t, e) {
        for (var n, i = 0, r = t.length; i < r; i++)
          if ((n = e(t[i]))) return n;
        return n;
      }),
      (t.prototype.isEmpty = function () {
        return B.isEmpty(this.items_);
      }),
      (t.prototype.clear = function () {
        this.rbush_.clear(), (this.items_ = {});
      }),
      (t.prototype.getExtent = function (t) {
        var e = this.rbush_.toJSON();
        return C.createOrUpdate(e.minX, e.minY, e.maxX, e.maxY, t);
      }),
      (t.prototype.concat = function (t) {
        for (var e in (this.rbush_.load(t.rbush_.all()), t.items_))
          this.items_[e] = t.items_[e];
      }),
      t
    );
  })(),
  Tu = ((K = a("d8cxx")), "addfeature"),
  bu = "changefeature",
  Ru = "clear",
  Iu = "removefeature",
  Pu = "featuresloadstart",
  Lu = "featuresloadend",
  Mu = "featuresloaderror";
p = a("6wUzV");
function Fu(t, e) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
}
(g = a("4Cz58")),
  (C = a("9pD6L")),
  (Rn = a("fVVyM")),
  (f = a("9iPUS")),
  (B = a("gn0g3")),
  (Z = a("ilM9F"));
var Au = {
    ARRAY_BUFFER: "arraybuffer",
    JSON: "json",
    TEXT: "text",
    XML: "xml",
  },
  Du = ((p = a("6wUzV")), !1);
function ju(t, e) {
  return function (n, i, r, o, a) {
    var s = this;
    !(function (t, e, n, i, r, o, a) {
      var s = new XMLHttpRequest();
      s.open("GET", "function" == typeof t ? t(n, i, r) : t, !0),
        e.getType() == Au.ARRAY_BUFFER && (s.responseType = "arraybuffer"),
        (s.withCredentials = Du),
        (s.onload = function (t) {
          if (!s.status || (s.status >= 200 && s.status < 300)) {
            var i = e.getType(),
              l = void 0;
            i == Au.JSON || i == Au.TEXT
              ? (l = s.responseText)
              : i == Au.XML
              ? (l = s.responseXML) ||
                (l = new DOMParser().parseFromString(
                  s.responseText,
                  "application/xml"
                ))
              : i == Au.ARRAY_BUFFER && (l = s.response),
              l
                ? o(
                    e.readFeatures(l, { extent: n, featureProjection: r }),
                    e.readProjection(l)
                  )
                : a();
          } else a();
        }),
        (s.onerror = a),
        s.send();
    })(
      t,
      e,
      n,
      i,
      r,
      function (t, e) {
        s.addFeatures(t), void 0 !== o && o(t);
      },
      a || p.VOID
    );
  };
}
var Nu = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  Gu = (function (t) {
    function e(e, n, i) {
      var r = t.call(this, e) || this;
      return (r.feature = n), (r.features = i), r;
    }
    return Nu(e, t), e;
  })(st.default),
  ku = (function (t) {
    function e(e) {
      var n = this,
        i = e || {};
      (n =
        t.call(this, {
          attributions: i.attributions,
          interpolate: !0,
          projection: void 0,
          state: K.default.READY,
          wrapX: void 0 === i.wrapX || i.wrapX,
        }) || this).on,
        n.once,
        n.un,
        (n.loader_ = p.VOID),
        (n.format_ = i.format),
        (n.overlaps_ = void 0 === i.overlaps || i.overlaps),
        (n.url_ = i.url),
        void 0 !== i.loader
          ? (n.loader_ = i.loader)
          : void 0 !== n.url_ &&
            (g.assert(n.format_, 7), (n.loader_ = ju(n.url_, n.format_))),
        (n.strategy_ = void 0 !== i.strategy ? i.strategy : Fu);
      var r,
        o,
        a = void 0 === i.useSpatialIndex || i.useSpatialIndex;
      return (
        (n.featuresRtree_ = a ? new Ou() : null),
        (n.loadedExtentsRtree_ = new Ou()),
        (n.loadingExtentsCount_ = 0),
        (n.nullGeometryFeatures_ = {}),
        (n.idIndex_ = {}),
        (n.uidIndex_ = {}),
        (n.featureChangeKeys_ = {}),
        (n.featuresCollection_ = null),
        Array.isArray(i.features)
          ? (o = i.features)
          : i.features && (o = (r = i.features).getArray()),
        a || void 0 !== r || (r = new Vt.default(o)),
        void 0 !== o && n.addFeaturesInternal(o),
        void 0 !== r && n.bindFeaturesCollection_(r),
        n
      );
    }
    return (
      Nu(e, t),
      (e.prototype.addFeature = function (t) {
        this.addFeatureInternal(t), this.changed();
      }),
      (e.prototype.addFeatureInternal = function (t) {
        var e = f.getUid(t);
        if (this.addToIndex_(e, t)) {
          this.setupChangeEvents_(e, t);
          var n = t.getGeometry();
          if (n) {
            var i = n.getExtent();
            this.featuresRtree_ && this.featuresRtree_.insert(i, t);
          } else this.nullGeometryFeatures_[e] = t;
          this.dispatchEvent(new Gu(Tu, t));
        } else this.featuresCollection_ && this.featuresCollection_.remove(t);
      }),
      (e.prototype.setupChangeEvents_ = function (t, e) {
        this.featureChangeKeys_[t] = [
          Z.listen(e, k.default.CHANGE, this.handleFeatureChange_, this),
          Z.listen(
            e,
            ot.default.PROPERTYCHANGE,
            this.handleFeatureChange_,
            this
          ),
        ];
      }),
      (e.prototype.addToIndex_ = function (t, e) {
        var n = !0,
          i = e.getId();
        return (
          void 0 !== i &&
            (i.toString() in this.idIndex_
              ? (n = !1)
              : (this.idIndex_[i.toString()] = e)),
          n && (g.assert(!(t in this.uidIndex_), 30), (this.uidIndex_[t] = e)),
          n
        );
      }),
      (e.prototype.addFeatures = function (t) {
        this.addFeaturesInternal(t), this.changed();
      }),
      (e.prototype.addFeaturesInternal = function (t) {
        for (var e = [], n = [], i = [], r = 0, o = t.length; r < o; r++) {
          var a = t[r],
            s = f.getUid(a);
          this.addToIndex_(s, a) && n.push(a);
        }
        r = 0;
        for (var l = n.length; r < l; r++) {
          (a = n[r]), (s = f.getUid(a));
          this.setupChangeEvents_(s, a);
          var u = a.getGeometry();
          if (u) {
            var h = u.getExtent();
            e.push(h), i.push(a);
          } else this.nullGeometryFeatures_[s] = a;
        }
        if (
          (this.featuresRtree_ && this.featuresRtree_.load(e, i),
          this.hasListener(Tu))
        ) {
          r = 0;
          for (var c = n.length; r < c; r++)
            this.dispatchEvent(new Gu(Tu, n[r]));
        }
      }),
      (e.prototype.bindFeaturesCollection_ = function (t) {
        var e = !1;
        this.addEventListener(Tu, function (n) {
          e || ((e = !0), t.push(n.feature), (e = !1));
        }),
          this.addEventListener(Iu, function (n) {
            e || ((e = !0), t.remove(n.feature), (e = !1));
          }),
          t.addEventListener(
            Wt.default.ADD,
            function (t) {
              e || ((e = !0), this.addFeature(t.element), (e = !1));
            }.bind(this)
          ),
          t.addEventListener(
            Wt.default.REMOVE,
            function (t) {
              e || ((e = !0), this.removeFeature(t.element), (e = !1));
            }.bind(this)
          ),
          (this.featuresCollection_ = t);
      }),
      (e.prototype.clear = function (t) {
        if (t) {
          for (var e in this.featureChangeKeys_) {
            this.featureChangeKeys_[e].forEach(Z.unlistenByKey);
          }
          this.featuresCollection_ ||
            ((this.featureChangeKeys_ = {}),
            (this.idIndex_ = {}),
            (this.uidIndex_ = {}));
        } else if (this.featuresRtree_) {
          var n = function (t) {
            this.removeFeatureInternal(t);
          }.bind(this);
          for (var i in (this.featuresRtree_.forEach(n),
          this.nullGeometryFeatures_))
            this.removeFeatureInternal(this.nullGeometryFeatures_[i]);
        }
        this.featuresCollection_ && this.featuresCollection_.clear(),
          this.featuresRtree_ && this.featuresRtree_.clear(),
          (this.nullGeometryFeatures_ = {});
        var r = new Gu(Ru);
        this.dispatchEvent(r), this.changed();
      }),
      (e.prototype.forEachFeature = function (t) {
        if (this.featuresRtree_) return this.featuresRtree_.forEach(t);
        this.featuresCollection_ && this.featuresCollection_.forEach(t);
      }),
      (e.prototype.forEachFeatureAtCoordinateDirect = function (t, e) {
        var n = [t[0], t[1], t[0], t[1]];
        return this.forEachFeatureInExtent(n, function (n) {
          return n.getGeometry().intersectsCoordinate(t) ? e(n) : void 0;
        });
      }),
      (e.prototype.forEachFeatureInExtent = function (t, e) {
        if (this.featuresRtree_)
          return this.featuresRtree_.forEachInExtent(t, e);
        this.featuresCollection_ && this.featuresCollection_.forEach(e);
      }),
      (e.prototype.forEachFeatureIntersectingExtent = function (t, e) {
        return this.forEachFeatureInExtent(t, function (n) {
          if (n.getGeometry().intersectsExtent(t)) {
            var i = e(n);
            if (i) return i;
          }
        });
      }),
      (e.prototype.getFeaturesCollection = function () {
        return this.featuresCollection_;
      }),
      (e.prototype.getFeatures = function () {
        var t;
        return (
          this.featuresCollection_
            ? (t = this.featuresCollection_.getArray().slice(0))
            : this.featuresRtree_ &&
              ((t = this.featuresRtree_.getAll()),
              B.isEmpty(this.nullGeometryFeatures_) ||
                Rn.extend(t, B.getValues(this.nullGeometryFeatures_))),
          t
        );
      }),
      (e.prototype.getFeaturesAtCoordinate = function (t) {
        var e = [];
        return (
          this.forEachFeatureAtCoordinateDirect(t, function (t) {
            e.push(t);
          }),
          e
        );
      }),
      (e.prototype.getFeaturesInExtent = function (t) {
        return this.featuresRtree_
          ? this.featuresRtree_.getInExtent(t)
          : this.featuresCollection_
          ? this.featuresCollection_.getArray().slice(0)
          : [];
      }),
      (e.prototype.getClosestFeatureToCoordinate = function (t, e) {
        var n = t[0],
          i = t[1],
          r = null,
          o = [NaN, NaN],
          a = 1 / 0,
          s = [-1 / 0, -1 / 0, 1 / 0, 1 / 0],
          l = e || p.TRUE;
        return (
          this.featuresRtree_.forEachInExtent(s, function (t) {
            if (l(t)) {
              var e = t.getGeometry(),
                u = a;
              if ((a = e.closestPointXY(n, i, o, a)) < u) {
                r = t;
                var h = Math.sqrt(a);
                (s[0] = n - h), (s[1] = i - h), (s[2] = n + h), (s[3] = i + h);
              }
            }
          }),
          r
        );
      }),
      (e.prototype.getExtent = function (t) {
        return this.featuresRtree_.getExtent(t);
      }),
      (e.prototype.getFeatureById = function (t) {
        var e = this.idIndex_[t.toString()];
        return void 0 !== e ? e : null;
      }),
      (e.prototype.getFeatureByUid = function (t) {
        var e = this.uidIndex_[t];
        return void 0 !== e ? e : null;
      }),
      (e.prototype.getFormat = function () {
        return this.format_;
      }),
      (e.prototype.getOverlaps = function () {
        return this.overlaps_;
      }),
      (e.prototype.getUrl = function () {
        return this.url_;
      }),
      (e.prototype.handleFeatureChange_ = function (t) {
        var e = t.target,
          n = f.getUid(e),
          i = e.getGeometry();
        if (i) {
          var r = i.getExtent();
          n in this.nullGeometryFeatures_
            ? (delete this.nullGeometryFeatures_[n],
              this.featuresRtree_ && this.featuresRtree_.insert(r, e))
            : this.featuresRtree_ && this.featuresRtree_.update(r, e);
        } else
          n in this.nullGeometryFeatures_ ||
            (this.featuresRtree_ && this.featuresRtree_.remove(e),
            (this.nullGeometryFeatures_[n] = e));
        var o = e.getId();
        if (void 0 !== o) {
          var a = o.toString();
          this.idIndex_[a] !== e &&
            (this.removeFromIdIndex_(e), (this.idIndex_[a] = e));
        } else this.removeFromIdIndex_(e), (this.uidIndex_[n] = e);
        this.changed(), this.dispatchEvent(new Gu(bu, e));
      }),
      (e.prototype.hasFeature = function (t) {
        var e = t.getId();
        return void 0 !== e
          ? e in this.idIndex_
          : f.getUid(t) in this.uidIndex_;
      }),
      (e.prototype.isEmpty = function () {
        return this.featuresRtree_
          ? this.featuresRtree_.isEmpty() &&
              B.isEmpty(this.nullGeometryFeatures_)
          : !this.featuresCollection_ ||
              0 === this.featuresCollection_.getLength();
      }),
      (e.prototype.loadFeatures = function (t, e, n) {
        for (
          var i = this.loadedExtentsRtree_,
            r = this.strategy_(t, e, n),
            o = function (t, o) {
              var s = r[t];
              i.forEachInExtent(s, function (t) {
                return C.containsExtent(t.extent, s);
              }) ||
                (++a.loadingExtentsCount_,
                a.dispatchEvent(new Gu(Pu)),
                a.loader_.call(
                  a,
                  s,
                  e,
                  n,
                  function (t) {
                    --this.loadingExtentsCount_,
                      this.dispatchEvent(new Gu(Lu, void 0, t));
                  }.bind(a),
                  function () {
                    --this.loadingExtentsCount_, this.dispatchEvent(new Gu(Mu));
                  }.bind(a)
                ),
                i.insert(s, { extent: s.slice() }));
            },
            a = this,
            s = 0,
            l = r.length;
          s < l;
          ++s
        )
          o(s);
        this.loading =
          !(this.loader_.length < 4) && this.loadingExtentsCount_ > 0;
      }),
      (e.prototype.refresh = function () {
        this.clear(!0),
          this.loadedExtentsRtree_.clear(),
          t.prototype.refresh.call(this);
      }),
      (e.prototype.removeLoadedExtent = function (t) {
        var e,
          n = this.loadedExtentsRtree_;
        n.forEachInExtent(t, function (n) {
          if (C.equals(n.extent, t)) return (e = n), !0;
        }),
          e && n.remove(e);
      }),
      (e.prototype.removeFeature = function (t) {
        if (t) {
          var e = f.getUid(t);
          e in this.nullGeometryFeatures_
            ? delete this.nullGeometryFeatures_[e]
            : this.featuresRtree_ && this.featuresRtree_.remove(t),
            this.removeFeatureInternal(t) && this.changed();
        }
      }),
      (e.prototype.removeFeatureInternal = function (t) {
        var e = f.getUid(t),
          n = this.featureChangeKeys_[e];
        if (n) {
          n.forEach(Z.unlistenByKey), delete this.featureChangeKeys_[e];
          var i = t.getId();
          return (
            void 0 !== i && delete this.idIndex_[i.toString()],
            delete this.uidIndex_[e],
            this.dispatchEvent(new Gu(Iu, t)),
            t
          );
        }
      }),
      (e.prototype.removeFromIdIndex_ = function (t) {
        var e = !1;
        for (var n in this.idIndex_)
          if (this.idIndex_[n] === t) {
            delete this.idIndex_[n], (e = !0);
            break;
          }
        return e;
      }),
      (e.prototype.setLoader = function (t) {
        this.loader_ = t;
      }),
      (e.prototype.setUrl = function (t) {
        g.assert(this.format_, 7),
          (this.url_ = t),
          this.setLoader(ju(t, this.format_));
      }),
      e
    );
  })(Wa.default),
  zu = {};
e(
  zu,
  "default",
  () => vh,
  (t) => (vh = t)
);
var Uu = {};
e(
  Uu,
  "createStyleFunction",
  () => Yu,
  (t) => (Yu = t)
),
  e(
    Uu,
    "default",
    () => Vu,
    (t) => (Vu = t)
  );
(vt = a("fFFY7")), (k = a("3xzSb")), (g = a("4Cz58")), (Z = a("ilM9F"));
var Xu = (function () {
  var t = function (e, n) {
    return (t =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      })(e, n);
  };
  return function (e, n) {
    if ("function" != typeof n && null !== n)
      throw new TypeError(
        "Class extends value " + String(n) + " is not a constructor or null"
      );
    function i() {
      this.constructor = e;
    }
    t(e, n),
      (e.prototype =
        null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
  };
})();
function Yu(t) {
  return "function" == typeof t
    ? t
    : (Array.isArray(t)
        ? (e = t)
        : (g.assert("function" == typeof t.getZIndex, 41), (e = [t])),
      function () {
        return e;
      });
  var e;
}
var Vu = (function (t) {
    function e(e) {
      var n = t.call(this) || this;
      if (
        (n.on,
        n.once,
        n.un,
        (n.id_ = void 0),
        (n.geometryName_ = "geometry"),
        (n.style_ = null),
        (n.styleFunction_ = void 0),
        (n.geometryChangeKey_ = null),
        n.addChangeListener(n.geometryName_, n.handleGeometryChanged_),
        e)
      )
        if ("function" == typeof e.getSimplifiedGeometry) {
          var i = e;
          n.setGeometry(i);
        } else {
          var r = e;
          n.setProperties(r);
        }
      return n;
    }
    return (
      Xu(e, t),
      (e.prototype.clone = function () {
        var t = new e(this.hasProperties() ? this.getProperties() : null);
        t.setGeometryName(this.getGeometryName());
        var n = this.getGeometry();
        n && t.setGeometry(n.clone());
        var i = this.getStyle();
        return i && t.setStyle(i), t;
      }),
      (e.prototype.getGeometry = function () {
        return this.get(this.geometryName_);
      }),
      (e.prototype.getId = function () {
        return this.id_;
      }),
      (e.prototype.getGeometryName = function () {
        return this.geometryName_;
      }),
      (e.prototype.getStyle = function () {
        return this.style_;
      }),
      (e.prototype.getStyleFunction = function () {
        return this.styleFunction_;
      }),
      (e.prototype.handleGeometryChange_ = function () {
        this.changed();
      }),
      (e.prototype.handleGeometryChanged_ = function () {
        this.geometryChangeKey_ &&
          (Z.unlistenByKey(this.geometryChangeKey_),
          (this.geometryChangeKey_ = null));
        var t = this.getGeometry();
        t &&
          (this.geometryChangeKey_ = Z.listen(
            t,
            k.default.CHANGE,
            this.handleGeometryChange_,
            this
          )),
          this.changed();
      }),
      (e.prototype.setGeometry = function (t) {
        this.set(this.geometryName_, t);
      }),
      (e.prototype.setStyle = function (t) {
        (this.style_ = t),
          (this.styleFunction_ = t ? Yu(t) : void 0),
          this.changed();
      }),
      (e.prototype.setId = function (t) {
        (this.id_ = t), this.changed();
      }),
      (e.prototype.setGeometryName = function (t) {
        this.removeChangeListener(
          this.geometryName_,
          this.handleGeometryChanged_
        ),
          (this.geometryName_ = t),
          this.addChangeListener(
            this.geometryName_,
            this.handleGeometryChanged_
          ),
          this.handleGeometryChanged_();
      }),
      e
    );
  })(vt.default),
  Wu = {};
e(
  Wu,
  "default",
  () => Zu,
  (t) => (Zu = t)
);
(k = a("3xzSb")), (C = a("9pD6L")), (Z = a("ilM9F"));
var Ku = (function () {
  var t = function (e, n) {
    return (t =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      })(e, n);
  };
  return function (e, n) {
    if ("function" != typeof n && null !== n)
      throw new TypeError(
        "Class extends value " + String(n) + " is not a constructor or null"
      );
    function i() {
      this.constructor = e;
    }
    t(e, n),
      (e.prototype =
        null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
  };
})();
function Bu(t) {
  for (var e = [], n = 0, i = t.length; n < i; ++n) e.push(t[n].clone());
  return e;
}
var Zu = (function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return (
        (n.geometries_ = e || null),
        (n.changeEventsKeys_ = []),
        n.listenGeometriesChange_(),
        n
      );
    }
    return (
      Ku(e, t),
      (e.prototype.unlistenGeometriesChange_ = function () {
        this.changeEventsKeys_.forEach(Z.unlistenByKey),
          (this.changeEventsKeys_.length = 0);
      }),
      (e.prototype.listenGeometriesChange_ = function () {
        if (this.geometries_)
          for (var t = 0, e = this.geometries_.length; t < e; ++t)
            this.changeEventsKeys_.push(
              Z.listen(
                this.geometries_[t],
                k.default.CHANGE,
                this.changed,
                this
              )
            );
      }),
      (e.prototype.clone = function () {
        var t = new e(null);
        return t.setGeometries(this.geometries_), t.applyProperties(this), t;
      }),
      (e.prototype.closestPointXY = function (t, e, n, i) {
        if (i < C.closestSquaredDistanceXY(this.getExtent(), t, e)) return i;
        for (var r = this.geometries_, o = 0, a = r.length; o < a; ++o)
          i = r[o].closestPointXY(t, e, n, i);
        return i;
      }),
      (e.prototype.containsXY = function (t, e) {
        for (var n = this.geometries_, i = 0, r = n.length; i < r; ++i)
          if (n[i].containsXY(t, e)) return !0;
        return !1;
      }),
      (e.prototype.computeExtent = function (t) {
        C.createOrUpdateEmpty(t);
        for (var e = this.geometries_, n = 0, i = e.length; n < i; ++n)
          C.extend(t, e[n].getExtent());
        return t;
      }),
      (e.prototype.getGeometries = function () {
        return Bu(this.geometries_);
      }),
      (e.prototype.getGeometriesArray = function () {
        return this.geometries_;
      }),
      (e.prototype.getGeometriesArrayRecursive = function () {
        for (var t = [], e = this.geometries_, n = 0, i = e.length; n < i; ++n)
          e[n].getType() === this.getType()
            ? (t = t.concat(e[n].getGeometriesArrayRecursive()))
            : t.push(e[n]);
        return t;
      }),
      (e.prototype.getSimplifiedGeometry = function (t) {
        if (
          (this.simplifiedGeometryRevision !== this.getRevision() &&
            ((this.simplifiedGeometryMaxMinSquaredTolerance = 0),
            (this.simplifiedGeometryRevision = this.getRevision())),
          t < 0 ||
            (0 !== this.simplifiedGeometryMaxMinSquaredTolerance &&
              t < this.simplifiedGeometryMaxMinSquaredTolerance))
        )
          return this;
        for (
          var n = [], i = this.geometries_, r = !1, o = 0, a = i.length;
          o < a;
          ++o
        ) {
          var s = i[o],
            l = s.getSimplifiedGeometry(t);
          n.push(l), l !== s && (r = !0);
        }
        if (r) {
          var u = new e(null);
          return u.setGeometriesArray(n), u;
        }
        return (this.simplifiedGeometryMaxMinSquaredTolerance = t), this;
      }),
      (e.prototype.getType = function () {
        return Ee.GEOMETRY_COLLECTION;
      }),
      (e.prototype.intersectsExtent = function (t) {
        for (var e = this.geometries_, n = 0, i = e.length; n < i; ++n)
          if (e[n].intersectsExtent(t)) return !0;
        return !1;
      }),
      (e.prototype.isEmpty = function () {
        return 0 === this.geometries_.length;
      }),
      (e.prototype.rotate = function (t, e) {
        for (var n = this.geometries_, i = 0, r = n.length; i < r; ++i)
          n[i].rotate(t, e);
        this.changed();
      }),
      (e.prototype.scale = function (t, e, n) {
        var i = n;
        i || (i = C.getCenter(this.getExtent()));
        for (var r = this.geometries_, o = 0, a = r.length; o < a; ++o)
          r[o].scale(t, e, i);
        this.changed();
      }),
      (e.prototype.setGeometries = function (t) {
        this.setGeometriesArray(Bu(t));
      }),
      (e.prototype.setGeometriesArray = function (t) {
        this.unlistenGeometriesChange_(),
          (this.geometries_ = t),
          this.listenGeometriesChange_(),
          this.changed();
      }),
      (e.prototype.applyTransform = function (t) {
        for (var e = this.geometries_, n = 0, i = e.length; n < i; ++n)
          e[n].applyTransform(t);
        this.changed();
      }),
      (e.prototype.translate = function (t, e) {
        for (var n = this.geometries_, i = 0, r = n.length; i < r; ++i)
          n[i].translate(t, e);
        this.changed();
      }),
      (e.prototype.disposeInternal = function () {
        this.unlistenGeometriesChange_(),
          t.prototype.disposeInternal.call(this);
      }),
      e
    );
  })(Xn.default),
  Hu = {};
e(
  Hu,
  "default",
  () => th,
  (t) => (th = t)
);
(f = a("9iPUS")), (B = a("gn0g3"));
var qu = (function () {
  function t() {
    (this.dataProjection = void 0),
      (this.defaultFeatureProjection = void 0),
      (this.supportedMediaTypes = null);
  }
  return (
    (t.prototype.getReadOptions = function (t, e) {
      var n;
      if (e) {
        var i = e.dataProjection
          ? sn(e.dataProjection)
          : this.readProjection(t);
        e.extent &&
          i &&
          i.getUnits() === Oe.TILE_PIXELS &&
          (i = sn(i)).setWorldExtent(e.extent),
          (n = { dataProjection: i, featureProjection: e.featureProjection });
      }
      return this.adaptOptions(n);
    }),
    (t.prototype.adaptOptions = function (t) {
      return B.assign(
        {
          dataProjection: this.dataProjection,
          featureProjection: this.defaultFeatureProjection,
        },
        t
      );
    }),
    (t.prototype.getType = function () {
      return f.abstract();
    }),
    (t.prototype.readFeature = function (t, e) {
      return f.abstract();
    }),
    (t.prototype.readFeatures = function (t, e) {
      return f.abstract();
    }),
    (t.prototype.readGeometry = function (t, e) {
      return f.abstract();
    }),
    (t.prototype.readProjection = function (t) {
      return f.abstract();
    }),
    (t.prototype.writeFeature = function (t, e) {
      return f.abstract();
    }),
    (t.prototype.writeFeatures = function (t, e) {
      return f.abstract();
    }),
    (t.prototype.writeGeometry = function (t, e) {
      return f.abstract();
    }),
    t
  );
})();
function Ju(t, e, n) {
  var i,
    r = n ? sn(n.featureProjection) : null,
    o = n ? sn(n.dataProjection) : null;
  if (
    ((i =
      r && o && !cn(r, o)
        ? (e ? t.clone() : t).transform(e ? r : o, e ? o : r)
        : t),
    e && n && void 0 !== n.decimals)
  ) {
    var a = Math.pow(10, n.decimals);
    i === t && (i = t.clone()),
      i.applyTransform(function (t) {
        for (var e = 0, n = t.length; e < n; ++e)
          t[e] = Math.round(t[e] * a) / a;
        return t;
      });
  }
  return i;
}
f = a("9iPUS");
var Qu = (function () {
  var t = function (e, n) {
    return (t =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      })(e, n);
  };
  return function (e, n) {
    if ("function" != typeof n && null !== n)
      throw new TypeError(
        "Class extends value " + String(n) + " is not a constructor or null"
      );
    function i() {
      this.constructor = e;
    }
    t(e, n),
      (e.prototype =
        null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
  };
})();
function $u(t) {
  if ("string" == typeof t) {
    var e = JSON.parse(t);
    return e || null;
  }
  return null !== t ? t : null;
}
var th = (function (t) {
    function e() {
      return t.call(this) || this;
    }
    return (
      Qu(e, t),
      (e.prototype.getType = function () {
        return Au.JSON;
      }),
      (e.prototype.readFeature = function (t, e) {
        return this.readFeatureFromObject($u(t), this.getReadOptions(t, e));
      }),
      (e.prototype.readFeatures = function (t, e) {
        return this.readFeaturesFromObject($u(t), this.getReadOptions(t, e));
      }),
      (e.prototype.readFeatureFromObject = function (t, e) {
        return f.abstract();
      }),
      (e.prototype.readFeaturesFromObject = function (t, e) {
        return f.abstract();
      }),
      (e.prototype.readGeometry = function (t, e) {
        return this.readGeometryFromObject($u(t), this.getReadOptions(t, e));
      }),
      (e.prototype.readGeometryFromObject = function (t, e) {
        return f.abstract();
      }),
      (e.prototype.readProjection = function (t) {
        return this.readProjectionFromObject($u(t));
      }),
      (e.prototype.readProjectionFromObject = function (t) {
        return f.abstract();
      }),
      (e.prototype.writeFeature = function (t, e) {
        return JSON.stringify(this.writeFeatureObject(t, e));
      }),
      (e.prototype.writeFeatureObject = function (t, e) {
        return f.abstract();
      }),
      (e.prototype.writeFeatures = function (t, e) {
        return JSON.stringify(this.writeFeaturesObject(t, e));
      }),
      (e.prototype.writeFeaturesObject = function (t, e) {
        return f.abstract();
      }),
      (e.prototype.writeGeometry = function (t, e) {
        return JSON.stringify(this.writeGeometryObject(t, e));
      }),
      (e.prototype.writeGeometryObject = function (t, e) {
        return f.abstract();
      }),
      e
    );
  })(qu),
  eh = {};
e(
  eh,
  "default",
  () => oh,
  (t) => (oh = t)
);
(C = a("9pD6L")), (Rn = a("fVVyM")), (Rn = a("fVVyM")), (E = a("9byFX"));
function nh(t, e, n, i, r, o, a) {
  var s,
    l,
    u = (n - e) / i;
  if (1 === u) s = e;
  else if (2 === u) (s = e), (l = r);
  else if (0 !== u) {
    for (var h = t[e], c = t[e + 1], p = 0, f = [0], d = e + i; d < n; d += i) {
      var g = t[d],
        _ = t[d + 1];
      (p += Math.sqrt((g - h) * (g - h) + (_ - c) * (_ - c))),
        f.push(p),
        (h = g),
        (c = _);
    }
    var y = r * p,
      v = Rn.binarySearch(f, y);
    v < 0
      ? ((l = (y - f[-v - 2]) / (f[-v - 1] - f[-v - 2])),
        (s = e + (-v - 2) * i))
      : (s = e + v * i);
  }
  var m = a > 1 ? a : 2,
    x = o || new Array(m);
  for (d = 0; d < m; ++d)
    x[d] =
      void 0 === s
        ? NaN
        : void 0 === l
        ? t[s + d]
        : E.lerp(t[s + d], t[s + i + d], l);
  return x;
}
function ih(t, e, n, i, r, o) {
  if (n == e) return null;
  var a;
  if (r < t[e + i - 1])
    return o ? (((a = t.slice(e, e + i))[i - 1] = r), a) : null;
  if (t[n - 1] < r) return o ? (((a = t.slice(n - i, n))[i - 1] = r), a) : null;
  if (r == t[e + i - 1]) return t.slice(e, e + i);
  for (var s = e / i, l = n / i; s < l; ) {
    var u = (s + l) >> 1;
    r < t[(u + 1) * i - 1] ? (l = u) : (s = u + 1);
  }
  var h = t[s * i - 1];
  if (r == h) return t.slice((s - 1) * i, (s - 1) * i + i);
  var c = (r - h) / (t[(s + 1) * i - 1] - h);
  a = [];
  for (var p = 0; p < i - 1; ++p)
    a.push(E.lerp(t[(s - 1) * i + p], t[s * i + p], c));
  return a.push(r), a;
}
var rh = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  oh = (function (t) {
    function e(e, n) {
      var i = t.call(this) || this;
      return (
        (i.flatMidpoint_ = null),
        (i.flatMidpointRevision_ = -1),
        (i.maxDelta_ = -1),
        (i.maxDeltaRevision_ = -1),
        void 0 === n || Array.isArray(e[0])
          ? i.setCoordinates(e, n)
          : i.setFlatCoordinates(n, e),
        i
      );
    }
    return (
      rh(e, t),
      (e.prototype.appendCoordinate = function (t) {
        this.flatCoordinates
          ? Rn.extend(this.flatCoordinates, t)
          : (this.flatCoordinates = t.slice()),
          this.changed();
      }),
      (e.prototype.clone = function () {
        var t = new e(this.flatCoordinates.slice(), this.layout);
        return t.applyProperties(this), t;
      }),
      (e.prototype.closestPointXY = function (t, e, n, i) {
        return i < C.closestSquaredDistanceXY(this.getExtent(), t, e)
          ? i
          : (this.maxDeltaRevision_ != this.getRevision() &&
              ((this.maxDelta_ = Math.sqrt(
                $n(
                  this.flatCoordinates,
                  0,
                  this.flatCoordinates.length,
                  this.stride,
                  0
                )
              )),
              (this.maxDeltaRevision_ = this.getRevision())),
            ei(
              this.flatCoordinates,
              0,
              this.flatCoordinates.length,
              this.stride,
              this.maxDelta_,
              !1,
              t,
              e,
              n,
              i
            ));
      }),
      (e.prototype.forEachSegment = function (t) {
        return wi(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          t
        );
      }),
      (e.prototype.getCoordinateAtM = function (t, e) {
        if (this.layout != kn.XYM && this.layout != kn.XYZM) return null;
        var n = void 0 !== e && e;
        return ih(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          t,
          n
        );
      }),
      (e.prototype.getCoordinates = function () {
        return hi(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride
        );
      }),
      (e.prototype.getCoordinateAt = function (t, e) {
        return nh(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          t,
          e,
          this.stride
        );
      }),
      (e.prototype.getLength = function () {
        return Dl(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride
        );
      }),
      (e.prototype.getFlatMidpoint = function () {
        return (
          this.flatMidpointRevision_ != this.getRevision() &&
            ((this.flatMidpoint_ = this.getCoordinateAt(
              0.5,
              this.flatMidpoint_
            )),
            (this.flatMidpointRevision_ = this.getRevision())),
          this.flatMidpoint_
        );
      }),
      (e.prototype.getSimplifiedGeometryInternal = function (t) {
        var n = [];
        return (
          (n.length = oi(
            this.flatCoordinates,
            0,
            this.flatCoordinates.length,
            this.stride,
            t,
            n,
            0
          )),
          new e(n, kn.XY)
        );
      }),
      (e.prototype.getType = function () {
        return Ee.LINE_STRING;
      }),
      (e.prototype.intersectsExtent = function (t) {
        return Oi(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          t
        );
      }),
      (e.prototype.setCoordinates = function (t, e) {
        this.setLayout(e, t, 1),
          this.flatCoordinates || (this.flatCoordinates = []),
          (this.flatCoordinates.length = ii(
            this.flatCoordinates,
            0,
            t,
            this.stride
          )),
          this.changed();
      }),
      e
    );
  })(Un.default),
  ah = {};
e(
  ah,
  "default",
  () => lh,
  (t) => (lh = t)
);
(C = a("9pD6L")), (Rn = a("fVVyM"));
var sh = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  lh = (function (t) {
    function e(e, n, i) {
      var r = t.call(this) || this;
      if (
        ((r.ends_ = []),
        (r.maxDelta_ = -1),
        (r.maxDeltaRevision_ = -1),
        Array.isArray(e[0]))
      )
        r.setCoordinates(e, n);
      else if (void 0 !== n && i) r.setFlatCoordinates(n, e), (r.ends_ = i);
      else {
        for (
          var o = r.getLayout(), a = e, s = [], l = [], u = 0, h = a.length;
          u < h;
          ++u
        ) {
          var c = a[u];
          0 === u && (o = c.getLayout()),
            Rn.extend(s, c.getFlatCoordinates()),
            l.push(s.length);
        }
        r.setFlatCoordinates(o, s), (r.ends_ = l);
      }
      return r;
    }
    return (
      sh(e, t),
      (e.prototype.appendLineString = function (t) {
        this.flatCoordinates
          ? Rn.extend(this.flatCoordinates, t.getFlatCoordinates().slice())
          : (this.flatCoordinates = t.getFlatCoordinates().slice()),
          this.ends_.push(this.flatCoordinates.length),
          this.changed();
      }),
      (e.prototype.clone = function () {
        var t = new e(
          this.flatCoordinates.slice(),
          this.layout,
          this.ends_.slice()
        );
        return t.applyProperties(this), t;
      }),
      (e.prototype.closestPointXY = function (t, e, n, i) {
        return i < C.closestSquaredDistanceXY(this.getExtent(), t, e)
          ? i
          : (this.maxDeltaRevision_ != this.getRevision() &&
              ((this.maxDelta_ = Math.sqrt(
                ti(this.flatCoordinates, 0, this.ends_, this.stride, 0)
              )),
              (this.maxDeltaRevision_ = this.getRevision())),
            ni(
              this.flatCoordinates,
              0,
              this.ends_,
              this.stride,
              this.maxDelta_,
              !1,
              t,
              e,
              n,
              i
            ));
      }),
      (e.prototype.getCoordinateAtM = function (t, e, n) {
        if (
          (this.layout != kn.XYM && this.layout != kn.XYZM) ||
          0 === this.flatCoordinates.length
        )
          return null;
        var i = void 0 !== e && e,
          r = void 0 !== n && n;
        return (function (t, e, n, i, r, o, a) {
          if (a) return ih(t, e, n[n.length - 1], i, r, o);
          var s;
          if (r < t[i - 1])
            return o ? (((s = t.slice(0, i))[i - 1] = r), s) : null;
          if (t[t.length - 1] < r)
            return o ? (((s = t.slice(t.length - i))[i - 1] = r), s) : null;
          for (var l = 0, u = n.length; l < u; ++l) {
            var h = n[l];
            if (e != h) {
              if (r < t[e + i - 1]) return null;
              if (r <= t[h - 1]) return ih(t, e, h, i, r, !1);
              e = h;
            }
          }
          return null;
        })(this.flatCoordinates, 0, this.ends_, this.stride, t, i, r);
      }),
      (e.prototype.getCoordinates = function () {
        return ci(this.flatCoordinates, 0, this.ends_, this.stride);
      }),
      (e.prototype.getEnds = function () {
        return this.ends_;
      }),
      (e.prototype.getLineString = function (t) {
        return t < 0 || this.ends_.length <= t
          ? null
          : new eh.default(
              this.flatCoordinates.slice(
                0 === t ? 0 : this.ends_[t - 1],
                this.ends_[t]
              ),
              this.layout
            );
      }),
      (e.prototype.getLineStrings = function () {
        for (
          var t = this.flatCoordinates,
            e = this.ends_,
            n = this.layout,
            i = [],
            r = 0,
            o = 0,
            a = e.length;
          o < a;
          ++o
        ) {
          var s = e[o],
            l = new eh.default(t.slice(r, s), n);
          i.push(l), (r = s);
        }
        return i;
      }),
      (e.prototype.getFlatMidpoints = function () {
        for (
          var t = [],
            e = this.flatCoordinates,
            n = 0,
            i = this.ends_,
            r = this.stride,
            o = 0,
            a = i.length;
          o < a;
          ++o
        ) {
          var s = i[o],
            l = nh(e, n, s, r, 0.5);
          Rn.extend(t, l), (n = s);
        }
        return t;
      }),
      (e.prototype.getSimplifiedGeometryInternal = function (t) {
        var n = [],
          i = [];
        return (
          (n.length = ai(
            this.flatCoordinates,
            0,
            this.ends_,
            this.stride,
            t,
            n,
            0,
            i
          )),
          new e(n, kn.XY, i)
        );
      }),
      (e.prototype.getType = function () {
        return Ee.MULTI_LINE_STRING;
      }),
      (e.prototype.intersectsExtent = function (t) {
        return (function (t, e, n, i, r) {
          for (var o = 0, a = n.length; o < a; ++o) {
            if (Oi(t, e, n[o], i, r)) return !0;
            e = n[o];
          }
          return !1;
        })(this.flatCoordinates, 0, this.ends_, this.stride, t);
      }),
      (e.prototype.setCoordinates = function (t, e) {
        this.setLayout(e, t, 2),
          this.flatCoordinates || (this.flatCoordinates = []);
        var n = ri(this.flatCoordinates, 0, t, this.stride, this.ends_);
        (this.flatCoordinates.length = 0 === n.length ? 0 : n[n.length - 1]),
          this.changed();
      }),
      e
    );
  })(Un.default),
  uh = {};
e(
  uh,
  "default",
  () => ch,
  (t) => (ch = t)
);
(C = a("9pD6L")), (Rn = a("fVVyM")), (E = a("9byFX"));
var hh = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  ch = (function (t) {
    function e(e, n) {
      var i = t.call(this) || this;
      return (
        n && !Array.isArray(e[0])
          ? i.setFlatCoordinates(n, e)
          : i.setCoordinates(e, n),
        i
      );
    }
    return (
      hh(e, t),
      (e.prototype.appendPoint = function (t) {
        this.flatCoordinates
          ? Rn.extend(this.flatCoordinates, t.getFlatCoordinates())
          : (this.flatCoordinates = t.getFlatCoordinates().slice()),
          this.changed();
      }),
      (e.prototype.clone = function () {
        var t = new e(this.flatCoordinates.slice(), this.layout);
        return t.applyProperties(this), t;
      }),
      (e.prototype.closestPointXY = function (t, e, n, i) {
        if (i < C.closestSquaredDistanceXY(this.getExtent(), t, e)) return i;
        for (
          var r = this.flatCoordinates, o = this.stride, a = 0, s = r.length;
          a < s;
          a += o
        ) {
          var l = E.squaredDistance(t, e, r[a], r[a + 1]);
          if (l < i) {
            i = l;
            for (var u = 0; u < o; ++u) n[u] = r[a + u];
            n.length = o;
          }
        }
        return i;
      }),
      (e.prototype.getCoordinates = function () {
        return hi(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride
        );
      }),
      (e.prototype.getPoint = function (t) {
        var e = this.flatCoordinates
          ? this.flatCoordinates.length / this.stride
          : 0;
        return t < 0 || e <= t
          ? null
          : new yi.default(
              this.flatCoordinates.slice(
                t * this.stride,
                (t + 1) * this.stride
              ),
              this.layout
            );
      }),
      (e.prototype.getPoints = function () {
        for (
          var t = this.flatCoordinates,
            e = this.layout,
            n = this.stride,
            i = [],
            r = 0,
            o = t.length;
          r < o;
          r += n
        ) {
          var a = new yi.default(t.slice(r, r + n), e);
          i.push(a);
        }
        return i;
      }),
      (e.prototype.getType = function () {
        return Ee.MULTI_POINT;
      }),
      (e.prototype.intersectsExtent = function (t) {
        for (
          var e = this.flatCoordinates, n = this.stride, i = 0, r = e.length;
          i < r;
          i += n
        ) {
          var o = e[i],
            a = e[i + 1];
          if (C.containsXY(t, o, a)) return !0;
        }
        return !1;
      }),
      (e.prototype.setCoordinates = function (t, e) {
        this.setLayout(e, t, 1),
          this.flatCoordinates || (this.flatCoordinates = []),
          (this.flatCoordinates.length = ii(
            this.flatCoordinates,
            0,
            t,
            this.stride
          )),
          this.changed();
      }),
      e
    );
  })(Un.default),
  ph = {};
e(
  ph,
  "default",
  () => dh,
  (t) => (dh = t)
);
(C = a("9pD6L")), (Rn = a("fVVyM")), (C = a("9pD6L"));
var fh = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(e, n);
    };
    return function (e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })(),
  dh = (function (t) {
    function e(e, n, i) {
      var r = t.call(this) || this;
      if (
        ((r.endss_ = []),
        (r.flatInteriorPointsRevision_ = -1),
        (r.flatInteriorPoints_ = null),
        (r.maxDelta_ = -1),
        (r.maxDeltaRevision_ = -1),
        (r.orientedRevision_ = -1),
        (r.orientedFlatCoordinates_ = null),
        !i && !Array.isArray(e[0]))
      ) {
        for (
          var o = r.getLayout(), a = e, s = [], l = [], u = 0, h = a.length;
          u < h;
          ++u
        ) {
          var c = a[u];
          0 === u && (o = c.getLayout());
          for (
            var p = s.length, f = c.getEnds(), d = 0, g = f.length;
            d < g;
            ++d
          )
            f[d] += p;
          Rn.extend(s, c.getFlatCoordinates()), l.push(f);
        }
        (n = o), (e = s), (i = l);
      }
      return (
        void 0 !== n && i
          ? (r.setFlatCoordinates(n, e), (r.endss_ = i))
          : r.setCoordinates(e, n),
        r
      );
    }
    return (
      fh(e, t),
      (e.prototype.appendPolygon = function (t) {
        var e;
        if (this.flatCoordinates) {
          var n = this.flatCoordinates.length;
          Rn.extend(this.flatCoordinates, t.getFlatCoordinates());
          for (var i = 0, r = (e = t.getEnds().slice()).length; i < r; ++i)
            e[i] += n;
        } else
          (this.flatCoordinates = t.getFlatCoordinates().slice()),
            (e = t.getEnds().slice()),
            this.endss_.push();
        this.endss_.push(e), this.changed();
      }),
      (e.prototype.clone = function () {
        for (var t = this.endss_.length, n = new Array(t), i = 0; i < t; ++i)
          n[i] = this.endss_[i].slice();
        var r = new e(this.flatCoordinates.slice(), this.layout, n);
        return r.applyProperties(this), r;
      }),
      (e.prototype.closestPointXY = function (t, e, n, i) {
        return i < C.closestSquaredDistanceXY(this.getExtent(), t, e)
          ? i
          : (this.maxDeltaRevision_ != this.getRevision() &&
              ((this.maxDelta_ = Math.sqrt(
                (function (t, e, n, i, r) {
                  for (var o = 0, a = n.length; o < a; ++o) {
                    var s = n[o];
                    (r = ti(t, e, s, i, r)), (e = s[s.length - 1]);
                  }
                  return r;
                })(this.flatCoordinates, 0, this.endss_, this.stride, 0)
              )),
              (this.maxDeltaRevision_ = this.getRevision())),
            (function (t, e, n, i, r, o, a, s, l, u, h) {
              for (var c = h || [NaN, NaN], p = 0, f = n.length; p < f; ++p) {
                var d = n[p];
                (u = ni(t, e, d, i, r, o, a, s, l, u, c)),
                  (e = d[d.length - 1]);
              }
              return u;
            })(
              this.getOrientedFlatCoordinates(),
              0,
              this.endss_,
              this.stride,
              this.maxDelta_,
              !0,
              t,
              e,
              n,
              i
            ));
      }),
      (e.prototype.containsXY = function (t, e) {
        return (function (t, e, n, i, r, o) {
          if (0 === n.length) return !1;
          for (var a = 0, s = n.length; a < s; ++a) {
            var l = n[a];
            if (Ei(t, e, l, i, r, o)) return !0;
            e = l[l.length - 1];
          }
          return !1;
        })(
          this.getOrientedFlatCoordinates(),
          0,
          this.endss_,
          this.stride,
          t,
          e
        );
      }),
      (e.prototype.getArea = function () {
        return (function (t, e, n, i) {
          for (var r = 0, o = 0, a = n.length; o < a; ++o) {
            var s = n[o];
            (r += di(t, e, s, i)), (e = s[s.length - 1]);
          }
          return r;
        })(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride);
      }),
      (e.prototype.getCoordinates = function (t) {
        var e;
        return (
          void 0 !== t
            ? Li(
                (e = this.getOrientedFlatCoordinates().slice()),
                0,
                this.endss_,
                this.stride,
                t
              )
            : (e = this.flatCoordinates),
          pi(e, 0, this.endss_, this.stride)
        );
      }),
      (e.prototype.getEndss = function () {
        return this.endss_;
      }),
      (e.prototype.getFlatInteriorPoints = function () {
        if (this.flatInteriorPointsRevision_ != this.getRevision()) {
          var t = (function (t, e, n, i) {
            for (
              var r = [], o = C.createEmpty(), a = 0, s = n.length;
              a < s;
              ++a
            ) {
              var l = n[a];
              (o = C.createOrUpdateFromFlatCoordinates(t, e, l[0], i)),
                r.push((o[0] + o[2]) / 2, (o[1] + o[3]) / 2),
                (e = l[l.length - 1]);
            }
            return r;
          })(this.flatCoordinates, 0, this.endss_, this.stride);
          (this.flatInteriorPoints_ = (function (t, e, n, i, r) {
            for (var o = [], a = 0, s = n.length; a < s; ++a) {
              var l = n[a];
              (o = Si(t, e, l, i, r, 2 * a, o)), (e = l[l.length - 1]);
            }
            return o;
          })(
            this.getOrientedFlatCoordinates(),
            0,
            this.endss_,
            this.stride,
            t
          )),
            (this.flatInteriorPointsRevision_ = this.getRevision());
        }
        return this.flatInteriorPoints_;
      }),
      (e.prototype.getInteriorPoints = function () {
        return new uh.default(this.getFlatInteriorPoints().slice(), kn.XYM);
      }),
      (e.prototype.getOrientedFlatCoordinates = function () {
        if (this.orientedRevision_ != this.getRevision()) {
          var t = this.flatCoordinates;
          !(function (t, e, n, i, r) {
            for (var o = 0, a = n.length; o < a; ++o) {
              var s = n[o];
              if (!Ii(t, e, s, i, r)) return !1;
              s.length && (e = s[s.length - 1]);
            }
            return !0;
          })(t, 0, this.endss_, this.stride)
            ? ((this.orientedFlatCoordinates_ = t.slice()),
              (this.orientedFlatCoordinates_.length = Li(
                this.orientedFlatCoordinates_,
                0,
                this.endss_,
                this.stride
              )))
            : (this.orientedFlatCoordinates_ = t),
            (this.orientedRevision_ = this.getRevision());
        }
        return this.orientedFlatCoordinates_;
      }),
      (e.prototype.getSimplifiedGeometryInternal = function (t) {
        var n = [],
          i = [];
        return (
          (n.length = (function (t, e, n, i, r, o, a, s) {
            for (var l = 0, u = n.length; l < u; ++l) {
              var h = n[l],
                c = [];
              (a = ui(t, e, h, i, r, o, a, c)),
                s.push(c),
                (e = h[h.length - 1]);
            }
            return a;
          })(
            this.flatCoordinates,
            0,
            this.endss_,
            this.stride,
            Math.sqrt(t),
            n,
            0,
            i
          )),
          new e(n, kn.XY, i)
        );
      }),
      (e.prototype.getPolygon = function (t) {
        if (t < 0 || this.endss_.length <= t) return null;
        var e;
        if (0 === t) e = 0;
        else {
          var n = this.endss_[t - 1];
          e = n[n.length - 1];
        }
        var i = this.endss_[t].slice(),
          r = i[i.length - 1];
        if (0 !== e) for (var o = 0, a = i.length; o < a; ++o) i[o] -= e;
        return new Gn.default(this.flatCoordinates.slice(e, r), this.layout, i);
      }),
      (e.prototype.getPolygons = function () {
        for (
          var t = this.layout,
            e = this.flatCoordinates,
            n = this.endss_,
            i = [],
            r = 0,
            o = 0,
            a = n.length;
          o < a;
          ++o
        ) {
          var s = n[o].slice(),
            l = s[s.length - 1];
          if (0 !== r) for (var u = 0, h = s.length; u < h; ++u) s[u] -= r;
          var c = new Gn.default(e.slice(r, l), t, s);
          i.push(c), (r = l);
        }
        return i;
      }),
      (e.prototype.getType = function () {
        return Ee.MULTI_POLYGON;
      }),
      (e.prototype.intersectsExtent = function (t) {
        return (function (t, e, n, i, r) {
          for (var o = 0, a = n.length; o < a; ++o) {
            var s = n[o];
            if (Ti(t, e, s, i, r)) return !0;
            e = s[s.length - 1];
          }
          return !1;
        })(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t);
      }),
      (e.prototype.setCoordinates = function (t, e) {
        this.setLayout(e, t, 3),
          this.flatCoordinates || (this.flatCoordinates = []);
        var n = (function (t, e, n, i, r) {
          for (var o = r || [], a = 0, s = 0, l = n.length; s < l; ++s) {
            var u = ri(t, e, n[s], i, o[a]);
            (o[a++] = u), (e = u[u.length - 1]);
          }
          return (o.length = a), o;
        })(this.flatCoordinates, 0, t, this.stride, this.endss_);
        if (0 === n.length) this.flatCoordinates.length = 0;
        else {
          var i = n[n.length - 1];
          this.flatCoordinates.length = 0 === i.length ? 0 : i[i.length - 1];
        }
        this.changed();
      }),
      e
    );
  })(Un.default),
  gh =
    ((g = a("4Cz58")),
    (B = a("gn0g3")),
    (function () {
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function i() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((i.prototype = n.prototype), new i()));
      };
    })());
function _h(t, e) {
  if (!t) return null;
  var n;
  switch (t.type) {
    case Ee.POINT:
      n = (function (t) {
        return new yi.default(t.coordinates);
      })(t);
      break;
    case Ee.LINE_STRING:
      n = (function (t) {
        return new eh.default(t.coordinates);
      })(t);
      break;
    case Ee.POLYGON:
      n = (function (t) {
        return new Gn.default(t.coordinates);
      })(t);
      break;
    case Ee.MULTI_POINT:
      n = (function (t) {
        return new uh.default(t.coordinates);
      })(t);
      break;
    case Ee.MULTI_LINE_STRING:
      n = (function (t) {
        return new ah.default(t.coordinates);
      })(t);
      break;
    case Ee.MULTI_POLYGON:
      n = (function (t) {
        return new ph.default(t.coordinates);
      })(t);
      break;
    case Ee.GEOMETRY_COLLECTION:
      n = (function (t, e) {
        var n = t.geometries.map(function (t) {
          return _h(t, e);
        });
        return new Wu.default(n);
      })(t);
      break;
    default:
      throw new Error("Unsupported GeoJSON type: " + t.type);
  }
  return Ju(n, !1, e);
}
function yh(t, e) {
  var n,
    i = (t = Ju(t, !0, e)).getType();
  switch (i) {
    case Ee.POINT:
      n = (function (t, e) {
        return { type: "Point", coordinates: t.getCoordinates() };
      })(t);
      break;
    case Ee.LINE_STRING:
      n = (function (t, e) {
        return { type: "LineString", coordinates: t.getCoordinates() };
      })(t);
      break;
    case Ee.POLYGON:
      n = (function (t, e) {
        var n;
        e && (n = e.rightHanded);
        return { type: "Polygon", coordinates: t.getCoordinates(n) };
      })(t, e);
      break;
    case Ee.MULTI_POINT:
      n = (function (t, e) {
        return { type: "MultiPoint", coordinates: t.getCoordinates() };
      })(t);
      break;
    case Ee.MULTI_LINE_STRING:
      n = (function (t, e) {
        return { type: "MultiLineString", coordinates: t.getCoordinates() };
      })(t);
      break;
    case Ee.MULTI_POLYGON:
      n = (function (t, e) {
        var n;
        e && (n = e.rightHanded);
        return { type: "MultiPolygon", coordinates: t.getCoordinates(n) };
      })(t, e);
      break;
    case Ee.GEOMETRY_COLLECTION:
      n = (function (t, e) {
        var n = t.getGeometriesArray().map(function (t) {
          var n = B.assign({}, e);
          return delete n.featureProjection, yh(t, n);
        });
        return { type: "GeometryCollection", geometries: n };
      })(t, e);
      break;
    case Ee.CIRCLE:
      n = { type: "GeometryCollection", geometries: [] };
      break;
    default:
      throw new Error("Unsupported geometry type: " + i);
  }
  return n;
}
var vh = (function (t) {
    function e(e) {
      var n = this,
        i = e || {};
      return (
        ((n = t.call(this) || this).dataProjection = sn(
          i.dataProjection ? i.dataProjection : "EPSG:4326"
        )),
        i.featureProjection &&
          (n.defaultFeatureProjection = sn(i.featureProjection)),
        (n.geometryName_ = i.geometryName),
        (n.extractGeometryName_ = i.extractGeometryName),
        (n.supportedMediaTypes = [
          "application/geo+json",
          "application/vnd.geo+json",
        ]),
        n
      );
    }
    return (
      gh(e, t),
      (e.prototype.readFeatureFromObject = function (t, e) {
        var n = null,
          i = _h(
            (n =
              "Feature" === t.type
                ? t
                : { type: "Feature", geometry: t, properties: null }).geometry,
            e
          ),
          r = new Uu.default();
        return (
          this.geometryName_
            ? r.setGeometryName(this.geometryName_)
            : this.extractGeometryName_ && r.setGeometryName(n.geometry_name),
          r.setGeometry(i),
          "id" in n && r.setId(n.id),
          n.properties && r.setProperties(n.properties, !0),
          r
        );
      }),
      (e.prototype.readFeaturesFromObject = function (t, e) {
        var n = null;
        if ("FeatureCollection" === t.type) {
          n = [];
          for (var i = t.features, r = 0, o = i.length; r < o; ++r)
            n.push(this.readFeatureFromObject(i[r], e));
        } else n = [this.readFeatureFromObject(t, e)];
        return n;
      }),
      (e.prototype.readGeometryFromObject = function (t, e) {
        return _h(t, e);
      }),
      (e.prototype.readProjectionFromObject = function (t) {
        var e,
          n = t.crs;
        return (
          n
            ? "name" == n.type
              ? (e = sn(n.properties.name))
              : "EPSG" === n.type
              ? (e = sn("EPSG:" + n.properties.code))
              : g.assert(!1, 36)
            : (e = this.dataProjection),
          e
        );
      }),
      (e.prototype.writeFeatureObject = function (t, e) {
        e = this.adaptOptions(e);
        var n = { type: "Feature", geometry: null, properties: null },
          i = t.getId();
        if ((void 0 !== i && (n.id = i), !t.hasProperties())) return n;
        var r = t.getProperties(),
          o = t.getGeometry();
        return (
          o && ((n.geometry = yh(o, e)), delete r[t.getGeometryName()]),
          B.isEmpty(r) || (n.properties = r),
          n
        );
      }),
      (e.prototype.writeFeaturesObject = function (t, e) {
        e = this.adaptOptions(e);
        for (var n = [], i = 0, r = t.length; i < r; ++i)
          n.push(this.writeFeatureObject(t[i], e));
        return { type: "FeatureCollection", features: n };
      }),
      (e.prototype.writeGeometryObject = function (t, e) {
        return yh(t, this.adaptOptions(e));
      }),
      e
    );
  })(Hu.default),
  mh = new Kt.default({
    title: "Base maps",
    layers: [
      new Zo.default({
        title: "Satellite",
        type: "base",
        visible: !0,
        source: new La.default({
          attributions: [
            "Powered by Esri",
            "Source: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community",
          ],
          attributionsCollapsible: !1,
          url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
          maxZoom: 23,
        }),
      }),
      new Zo.default({
        title: "OSM",
        type: "base",
        visible: !0,
        source: new Pa.default(),
      }),
    ],
  }),
  xh = new wo.default({
    title: "Depth",
    source: new vs.default({
      url: "http://localhost:8084/geoserver/wms",
      params: { LAYERS: "Dem:Depth" },
      ratio: 1,
      serverType: "geoserver",
    }),
  }),
  Ch = new Kt.default({ title: "Overlays", layers: [] });
Ch.getLayers().push(xh);
var Eh = new Ce.default({ center: [0, 0], zoom: 2 }),
  Sh = new s.default({ target: "map", view: Eh, layers: [] });
Sh.addLayer(mh), Sh.addLayer(Ch);
var wh = new (n(Ns))({
  activationMode: "click",
  startActive: !0,
  tipLabel: "Layers",
  groupSelectStyle: "children",
  collapseTipLabel: "Collapse layers",
});
Sh.addControl(wh), wh.renderPanel();
var Oh = new Gs.default({
  title: "Rusle",
  source: new wu.default({
    url: "http://localhost:8443/geoserver/Peace_proj/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Peace_proj%3Arusle_data&maxFeatures=1000000&outputFormat=application%2Fjson",
    format: new zu.default(),
  }),
});
Ch.getLayers().push(Oh), wh.renderPanel();
//# sourceMappingURL=index.a19d3fae.js.map
