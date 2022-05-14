(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@webcomponents/custom-elements/custom-elements.min.js')) :
  typeof define === 'function' && define.amd ? define(['@webcomponents/custom-elements/custom-elements.min.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.MicInput = factory());
})(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _isNativeReflectConstruct$1() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct$1()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  /**
  @license @nocompile
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  (function () {

    var v;

    function ba(a) {
      var b = 0;
      return function () {
        return b < a.length ? {
          done: !1,
          value: a[b++]
        } : {
          done: !0
        };
      };
    }

    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      if (a == Array.prototype || a == Object.prototype) return a;
      a[b] = c.value;
      return a;
    };

    function da(a) {
      a = ["object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis, a, "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window, "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self, "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global];

      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }

      throw Error("Cannot find global object");
    }

    var ea = da(this);

    function ia(a, b) {
      if (b) a: {
        var c = ea;
        a = a.split(".");

        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }

        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && ca(c, a, {
          configurable: !0,
          writable: !0,
          value: b
        });
      }
    }

    ia("Symbol", function (a) {
      function b(e) {
        if (this instanceof b) throw new TypeError("Symbol is not a constructor");
        return new c("jscomp_symbol_" + (e || "") + "_" + d++, e);
      }

      function c(e, f) {
        this.g = e;
        ca(this, "description", {
          configurable: !0,
          writable: !0,
          value: f
        });
      }

      if (a) return a;

      c.prototype.toString = function () {
        return this.g;
      };

      var d = 0;
      return b;
    });
    ia("Symbol.iterator", function (a) {
      if (a) return a;
      a = Symbol("Symbol.iterator");

      for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
        var d = ea[b[c]];
        "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function value() {
            return ja(ba(this));
          }
        });
      }

      return a;
    });

    function ja(a) {
      a = {
        next: a
      };

      a[Symbol.iterator] = function () {
        return this;
      };

      return a;
    }

    function ka(a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : {
        next: ba(a)
      };
    }

    function x(a) {
      if (!(a instanceof Array)) {
        a = ka(a);

        for (var b, c = []; !(b = a.next()).done;) {
          c.push(b.value);
        }

        a = c;
      }

      return a;
    }

    var ma;
    if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;else {
      var na;

      a: {
        var oa = {
          a: !0
        },
            pa = {};

        try {
          pa.__proto__ = oa;
          na = pa.a;
          break a;
        } catch (a) {}

        na = !1;
      }

      ma = na ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      } : null;
    }
    var qa = ma;

    function ra() {
      this.u = !1;
      this.h = null;
      this.Ka = void 0;
      this.g = 1;
      this.da = 0;
      this.i = null;
    }

    function ua(a) {
      if (a.u) throw new TypeError("Generator is already running");
      a.u = !0;
    }

    ra.prototype.O = function (a) {
      this.Ka = a;
    };

    function xa(a, b) {
      a.i = {
        Wa: b,
        $a: !0
      };
      a.g = a.da;
    }

    ra.prototype["return"] = function (a) {
      this.i = {
        "return": a
      };
      this.g = this.da;
    };

    function ya(a, b) {
      a.g = 3;
      return {
        value: b
      };
    }

    function za(a) {
      this.g = new ra();
      this.h = a;
    }

    function Aa(a, b) {
      ua(a.g);
      var c = a.g.h;
      if (c) return Ba(a, "return" in c ? c["return"] : function (d) {
        return {
          value: d,
          done: !0
        };
      }, b, a.g["return"]);
      a.g["return"](b);
      return Ca(a);
    }

    function Ba(a, b, c, d) {
      try {
        var e = b.call(a.g.h, c);
        if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
        if (!e.done) return a.g.u = !1, e;
        var f = e.value;
      } catch (g) {
        return a.g.h = null, xa(a.g, g), Ca(a);
      }

      a.g.h = null;
      d.call(a.g, f);
      return Ca(a);
    }

    function Ca(a) {
      for (; a.g.g;) {
        try {
          var b = a.h(a.g);
          if (b) return a.g.u = !1, {
            value: b.value,
            done: !1
          };
        } catch (c) {
          a.g.Ka = void 0, xa(a.g, c);
        }
      }

      a.g.u = !1;

      if (a.g.i) {
        b = a.g.i;
        a.g.i = null;
        if (b.$a) throw b.Wa;
        return {
          value: b["return"],
          done: !0
        };
      }

      return {
        value: void 0,
        done: !0
      };
    }

    function Da(a) {
      this.next = function (b) {
        ua(a.g);
        a.g.h ? b = Ba(a, a.g.h.next, b, a.g.O) : (a.g.O(b), b = Ca(a));
        return b;
      };

      this["throw"] = function (b) {
        ua(a.g);
        a.g.h ? b = Ba(a, a.g.h["throw"], b, a.g.O) : (xa(a.g, b), b = Ca(a));
        return b;
      };

      this["return"] = function (b) {
        return Aa(a, b);
      };

      this[Symbol.iterator] = function () {
        return this;
      };
    }

    function Ea(a, b) {
      b = new Da(new za(b));
      qa && a.prototype && qa(b, a.prototype);
      return b;
    }

    Array.from || (Array.from = function (a) {
      return [].slice.call(a);
    });
    Object.assign || (Object.assign = function (a) {
      for (var b = [].slice.call(arguments, 1), c = 0, d; c < b.length; c++) {
        if (d = b[c]) for (var e = a, f = Object.keys(d), g = 0; g < f.length; g++) {
          var h = f[g];
          e[h] = d[h];
        }
      }

      return a;
    });
    var Fa = setTimeout;

    function Ga() {}

    function Ha(a, b) {
      return function () {
        a.apply(b, arguments);
      };
    }

    function A(a) {
      if (!(this instanceof A)) throw new TypeError("Promises must be constructed via new");
      if ("function" !== typeof a) throw new TypeError("not a function");
      this.N = 0;
      this.Ea = !1;
      this.I = void 0;
      this.ba = [];
      Ia(a, this);
    }

    function Ja(a, b) {
      for (; 3 === a.N;) {
        a = a.I;
      }

      0 === a.N ? a.ba.push(b) : (a.Ea = !0, Ka(function () {
        var c = 1 === a.N ? b.bb : b.cb;
        if (null === c) (1 === a.N ? La : Ma)(b.promise, a.I);else {
          try {
            var d = c(a.I);
          } catch (e) {
            Ma(b.promise, e);
            return;
          }

          La(b.promise, d);
        }
      }));
    }

    function La(a, b) {
      try {
        if (b === a) throw new TypeError("A promise cannot be resolved with itself.");

        if (b && ("object" === _typeof(b) || "function" === typeof b)) {
          var c = b.then;

          if (b instanceof A) {
            a.N = 3;
            a.I = b;
            Na(a);
            return;
          }

          if ("function" === typeof c) {
            Ia(Ha(c, b), a);
            return;
          }
        }

        a.N = 1;
        a.I = b;
        Na(a);
      } catch (d) {
        Ma(a, d);
      }
    }

    function Ma(a, b) {
      a.N = 2;
      a.I = b;
      Na(a);
    }

    function Na(a) {
      2 === a.N && 0 === a.ba.length && Ka(function () {
        a.Ea || "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a.I);
      });

      for (var b = 0, c = a.ba.length; b < c; b++) {
        Ja(a, a.ba[b]);
      }

      a.ba = null;
    }

    function Oa(a, b, c) {
      this.bb = "function" === typeof a ? a : null;
      this.cb = "function" === typeof b ? b : null;
      this.promise = c;
    }

    function Ia(a, b) {
      var c = !1;

      try {
        a(function (d) {
          c || (c = !0, La(b, d));
        }, function (d) {
          c || (c = !0, Ma(b, d));
        });
      } catch (d) {
        c || (c = !0, Ma(b, d));
      }
    }

    A.prototype["catch"] = function (a) {
      return this.then(null, a);
    };

    A.prototype.then = function (a, b) {
      var c = new this.constructor(Ga);
      Ja(this, new Oa(a, b, c));
      return c;
    };

    A.prototype["finally"] = function (a) {
      var b = this.constructor;
      return this.then(function (c) {
        return b.resolve(a()).then(function () {
          return c;
        });
      }, function (c) {
        return b.resolve(a()).then(function () {
          return b.reject(c);
        });
      });
    };

    function Pa(a) {
      return new A(function (b, c) {
        function d(h, k) {
          try {
            if (k && ("object" === _typeof(k) || "function" === typeof k)) {
              var l = k.then;

              if ("function" === typeof l) {
                l.call(k, function (m) {
                  d(h, m);
                }, c);
                return;
              }
            }

            e[h] = k;
            0 === --f && b(e);
          } catch (m) {
            c(m);
          }
        }

        if (!a || "undefined" === typeof a.length) return c(new TypeError("Promise.all accepts an array"));
        var e = Array.prototype.slice.call(a);
        if (0 === e.length) return b([]);

        for (var f = e.length, g = 0; g < e.length; g++) {
          d(g, e[g]);
        }
      });
    }

    function Qa(a) {
      return a && "object" === _typeof(a) && a.constructor === A ? a : new A(function (b) {
        b(a);
      });
    }

    function Ra(a) {
      return new A(function (b, c) {
        c(a);
      });
    }

    function Sa(a) {
      return new A(function (b, c) {
        if (!a || "undefined" === typeof a.length) return c(new TypeError("Promise.race accepts an array"));

        for (var d = 0, e = a.length; d < e; d++) {
          Qa(a[d]).then(b, c);
        }
      });
    }

    var Ka = "function" === typeof setImmediate && function (a) {
      setImmediate(a);
    } || function (a) {
      Fa(a, 0);
    };
    /*
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */


    if (!window.Promise) {
      window.Promise = A;
      A.prototype.then = A.prototype.then;
      A.all = Pa;
      A.race = Sa;
      A.resolve = Qa;
      A.reject = Ra;
      var Ta = document.createTextNode(""),
          Va = [];
      new MutationObserver(function () {
        for (var a = Va.length, b = 0; b < a; b++) {
          Va[b]();
        }

        Va.splice(0, a);
      }).observe(Ta, {
        characterData: !0
      });

      Ka = function Ka(a) {
        Va.push(a);
        Ta.textContent = 0 < Ta.textContent.length ? "" : "a";
      };
    }
    /*
    Copyright (C) 2015 by WebReflection
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    */

    (function (a, b) {
      if (!(b in a)) {
        var c = (typeof global === "undefined" ? "undefined" : _typeof(global)) === _typeof(c) ? window : global,
            d = 0,
            e = String(Math.random()),
            f = "__\x01symbol@@" + e,
            g = a.getOwnPropertyNames,
            h = a.getOwnPropertyDescriptor,
            k = a.create,
            l = a.keys,
            m = a.freeze || a,
            q = a.defineProperty,
            H = a.defineProperties,
            C = h(a, "getOwnPropertyNames"),
            t = a.prototype,
            F = t.hasOwnProperty,
            E = t.propertyIsEnumerable,
            M = t.toString,
            y = function y(I, u, G) {
          F.call(I, f) || q(I, f, {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: {}
          });
          I[f]["@@" + u] = G;
        },
            W = function W(I, u) {
          var G = k(I);
          g(u).forEach(function (p) {
            sa.call(u, p) && Ua(G, p, u[p]);
          });
          return G;
        },
            w = function w() {},
            ta = function ta(I) {
          return I != f && !F.call(fa, I);
        },
            ha = function ha(I) {
          return I != f && F.call(fa, I);
        },
            sa = function sa(I) {
          var u = String(I);
          return ha(u) ? F.call(this, u) && !!this[f] && this[f]["@@" + u] : E.call(this, I);
        },
            n = function n(I) {
          q(t, I, {
            enumerable: !1,
            configurable: !0,
            get: w,
            set: function set(u) {
              wa(this, I, {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: u
              });
              y(this, I, !0);
            }
          });
          fa[I] = q(a(I), "constructor", gc);
          return m(fa[I]);
        },
            J = function G(u) {
          if (this instanceof G) throw new TypeError("Symbol is not a constructor");
          return n("__\x01symbol:".concat(u || "", e, ++d));
        },
            fa = k(null),
            gc = {
          value: J
        },
            fb = function fb(u) {
          return fa[u];
        },
            Ua = function Ua(u, G, p) {
          var r = String(G);

          if (ha(r)) {
            G = wa;

            if (p.enumerable) {
              var B = k(p);
              B.enumerable = !1;
            } else B = p;

            G(u, r, B);
            y(u, r, !!p.enumerable);
          } else q(u, G, p);

          return u;
        },
            gb = function gb(u) {
          return g(u).filter(ha).map(fb);
        };

        C.value = Ua;
        q(a, "defineProperty", C);
        C.value = gb;
        q(a, b, C);

        C.value = function (u) {
          return g(u).filter(ta);
        };

        q(a, "getOwnPropertyNames", C);

        C.value = function (u, G) {
          var p = gb(G);
          p.length ? l(G).concat(p).forEach(function (r) {
            sa.call(G, r) && Ua(u, r, G[r]);
          }) : H(u, G);
          return u;
        };

        q(a, "defineProperties", C);
        C.value = sa;
        q(t, "propertyIsEnumerable", C);
        C.value = J;
        q(c, "Symbol", C);

        C.value = function (u) {
          u = "__\x01symbol:".concat("__\x01symbol:", u, e);
          return u in t ? fa[u] : n(u);
        };

        q(J, "for", C);

        C.value = function (u) {
          if (ta(u)) throw new TypeError(u + " is not a symbol");
          if (F.call(fa, u) && (u = u.slice(10), "__\x01symbol:" === u.slice(0, 10) && (u = u.slice(10), u !== e))) return u = u.slice(0, u.length - e.length), 0 < u.length ? u : void 0;
        };

        q(J, "keyFor", C);

        C.value = function (u, G) {
          var p = h(u, G);
          p && ha(G) && (p.enumerable = sa.call(u, G));
          return p;
        };

        q(a, "getOwnPropertyDescriptor", C);

        C.value = function (u, G) {
          return 1 === arguments.length || "undefined" === typeof G ? k(u) : W(u, G);
        };

        q(a, "create", C);

        C.value = function () {
          var u = M.call(this);
          return "[object String]" === u && ha(this) ? "[object Symbol]" : u;
        };

        q(t, "toString", C);

        try {
          if (!0 === k(q({}, "__\x01symbol:", {
            get: function get() {
              return q(this, "__\x01symbol:", {
                value: !0
              })["__\x01symbol:"];
            }
          }))["__\x01symbol:"]) var wa = q;else throw "IE11";
        } catch (u) {
          wa = function wa(G, p, r) {
            var B = h(t, p);
            delete t[p];
            q(G, p, r);
            q(t, p, B);
          };
        }
      }
    })(Object, "getOwnPropertySymbols");

    (function (a, b) {
      var c = a.defineProperty,
          d = a.prototype,
          e = d.toString,
          f;
      "iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function (g) {
        g in b || (c(b, g, {
          value: b(g)
        }), "toStringTag" === g && (f = a.getOwnPropertyDescriptor(d, "toString"), f.value = function () {
          var h = e.call(this),
              k = null == this ? this : this[b.toStringTag];
          return null == k ? h : "[object " + k + "]";
        }, c(d, "toString", f)));
      });
    })(Object, Symbol);

    (function (a, b, c) {
      function d() {
        return this;
      }

      b[a] || (b[a] = function () {
        var e = 0,
            f = this,
            g = {
          next: function next() {
            var h = f.length <= e;
            return h ? {
              done: h
            } : {
              done: h,
              value: f[e++]
            };
          }
        };
        g[a] = d;
        return g;
      });
      c[a] || (c[a] = function () {
        var e = String.fromCodePoint,
            f = this,
            g = 0,
            h = f.length,
            k = {
          next: function next() {
            var l = h <= g,
                m = l ? "" : e(f.codePointAt(g));
            g += m.length;
            return l ? {
              done: l
            } : {
              done: l,
              value: m
            };
          }
        };
        k[a] = d;
        return k;
      });
    })(Symbol.iterator, Array.prototype, String.prototype);
    /*
    Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */


    var Wa = Object.prototype.toString;

    Object.prototype.toString = function () {
      return void 0 === this ? "[object Undefined]" : null === this ? "[object Null]" : Wa.call(this);
    };

    Object.keys = function (a) {
      return Object.getOwnPropertyNames(a).filter(function (b) {
        return (b = Object.getOwnPropertyDescriptor(a, b)) && b.enumerable;
      });
    };

    String.prototype[Symbol.iterator] && String.prototype.codePointAt || (String.prototype[Symbol.iterator] = function Xa() {
      var b,
          c = this;
      return Ea(Xa, function (d) {
        1 == d.g && (b = 0);
        if (3 != d.g) return b < c.length ? d = ya(d, c[b]) : (d.g = 0, d = void 0), d;
        b++;
        d.g = 2;
      });
    });
    Set.prototype[Symbol.iterator] || (Set.prototype[Symbol.iterator] = function Ya() {
      var b,
          c = this,
          d;
      return Ea(Ya, function (e) {
        1 == e.g && (b = [], c.forEach(function (f) {
          b.push(f);
        }), d = 0);
        if (3 != e.g) return d < b.length ? e = ya(e, b[d]) : (e.g = 0, e = void 0), e;
        d++;
        e.g = 2;
      });
    });
    Map.prototype[Symbol.iterator] || (Map.prototype[Symbol.iterator] = function Za() {
      var b,
          c = this,
          d;
      return Ea(Za, function (e) {
        1 == e.g && (b = [], c.forEach(function (f, g) {
          b.push([g, f]);
        }), d = 0);
        if (3 != e.g) return d < b.length ? e = ya(e, b[d]) : (e.g = 0, e = void 0), e;
        d++;
        e.g = 2;
      });
    });
    /*
    Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    var $a = document.createEvent("Event");
    $a.initEvent("foo", !0, !0);
    $a.preventDefault();

    if (!$a.defaultPrevented) {
      var ab = Event.prototype.preventDefault;

      Event.prototype.preventDefault = function () {
        this.cancelable && (ab.call(this), Object.defineProperty(this, "defaultPrevented", {
          get: function get() {
            return !0;
          },
          configurable: !0
        }));
      };
    }

    var bb = /Trident/.test(navigator.userAgent);

    if (!window.Event || bb && "function" !== typeof window.Event) {
      var cb = window.Event;

      window.Event = function (a, b) {
        b = b || {};
        var c = document.createEvent("Event");
        c.initEvent(a, !!b.bubbles, !!b.cancelable);
        return c;
      };

      if (cb) {
        for (var db in cb) {
          window.Event[db] = cb[db];
        }

        window.Event.prototype = cb.prototype;
      }
    }

    if (!window.CustomEvent || bb && "function" !== typeof window.CustomEvent) window.CustomEvent = function (a, b) {
      b = b || {};
      var c = document.createEvent("CustomEvent");
      c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);
      return c;
    }, window.CustomEvent.prototype = window.Event.prototype;

    if (!window.MouseEvent || bb && "function" !== typeof window.MouseEvent) {
      var eb = window.MouseEvent;

      window.MouseEvent = function (a, b) {
        b = b || {};
        var c = document.createEvent("MouseEvent");
        c.initMouseEvent(a, !!b.bubbles, !!b.cancelable, b.view || window, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget);
        return c;
      };

      if (eb) for (var hb in eb) {
        window.MouseEvent[hb] = eb[hb];
      }
      window.MouseEvent.prototype = eb.prototype;
    }
    Object.getOwnPropertyDescriptor(Node.prototype, "baseURI") || Object.defineProperty(Node.prototype, "baseURI", {
      get: function get() {
        var a = (this.ownerDocument || this).querySelector("base[href]");
        return a && a.href || window.location.href;
      },
      configurable: !0,
      enumerable: !0
    });
    /*
    Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */

    var ib,
        jb,
        kb = Element.prototype,
        nb = null !== (ib = Object.getOwnPropertyDescriptor(kb, "attributes")) && void 0 !== ib ? ib : Object.getOwnPropertyDescriptor(Node.prototype, "attributes"),
        ob = null !== (jb = null === nb || void 0 === nb ? void 0 : nb.get) && void 0 !== jb ? jb : function () {
      return this.attributes;
    },
        pb = Array.prototype.map;
    kb.hasOwnProperty("getAttributeNames") || (kb.getAttributeNames = function () {
      return pb.call(ob.call(this), function (a) {
        return a.name;
      });
    });
    var qb,
        rb = Element.prototype;
    rb.hasOwnProperty("matches") || (rb.matches = null !== (qb = rb.webkitMatchesSelector) && void 0 !== qb ? qb : rb.msMatchesSelector);
    var sb = Node.prototype.appendChild;

    function tb(a) {
      a = a.prototype;
      a.hasOwnProperty("append") || Object.defineProperty(a, "append", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: function value(b) {
          for (var c = [], d = 0; d < arguments.length; ++d) {
            c[d] = arguments[d];
          }

          c = ka(c);

          for (d = c.next(); !d.done; d = c.next()) {
            d = d.value, sb.call(this, "string" === typeof d ? document.createTextNode(d) : d);
          }
        }
      });
    }

    tb(Document);
    tb(DocumentFragment);
    tb(Element);
    var ub,
        vb,
        wb = Node.prototype.insertBefore,
        xb = null !== (vb = null === (ub = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild")) || void 0 === ub ? void 0 : ub.get) && void 0 !== vb ? vb : function () {
      return this.firstChild;
    };

    function yb(a) {
      a = a.prototype;
      a.hasOwnProperty("prepend") || Object.defineProperty(a, "prepend", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: function value(b) {
          for (var c = [], d = 0; d < arguments.length; ++d) {
            c[d] = arguments[d];
          }

          d = xb.call(this);
          c = ka(c);

          for (var e = c.next(); !e.done; e = c.next()) {
            e = e.value, wb.call(this, "string" === typeof e ? document.createTextNode(e) : e, d);
          }
        }
      });
    }

    yb(Document);
    yb(DocumentFragment);
    yb(Element);
    var zb,
        Ab,
        Bb = Node.prototype.appendChild,
        Cb = Node.prototype.removeChild,
        Db = null !== (Ab = null === (zb = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild")) || void 0 === zb ? void 0 : zb.get) && void 0 !== Ab ? Ab : function () {
      return this.firstChild;
    };

    function Eb(a) {
      a = a.prototype;
      a.hasOwnProperty("replaceChildren") || Object.defineProperty(a, "replaceChildren", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: function value(b) {
          for (var c = [], d = 0; d < arguments.length; ++d) {
            c[d] = arguments[d];
          }

          for (; null !== (d = Db.call(this));) {
            Cb.call(this, d);
          }

          c = ka(c);

          for (d = c.next(); !d.done; d = c.next()) {
            d = d.value, Bb.call(this, "string" === typeof d ? document.createTextNode(d) : d);
          }
        }
      });
    }

    Eb(Document);
    Eb(DocumentFragment);
    Eb(Element);
    var Fb,
        Gb,
        Hb,
        Ib,
        Jb = Node.prototype.insertBefore,
        Kb = null !== (Gb = null === (Fb = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === Fb ? void 0 : Fb.get) && void 0 !== Gb ? Gb : function () {
      return this.parentNode;
    },
        Lb = null !== (Ib = null === (Hb = Object.getOwnPropertyDescriptor(Node.prototype, "nextSibling")) || void 0 === Hb ? void 0 : Hb.get) && void 0 !== Ib ? Ib : function () {
      return this.nextSibling;
    };

    function Mb(a) {
      a = a.prototype;
      a.hasOwnProperty("after") || Object.defineProperty(a, "after", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: function value(b) {
          for (var c = [], d = 0; d < arguments.length; ++d) {
            c[d] = arguments[d];
          }

          d = Kb.call(this);

          if (null !== d) {
            var e = Lb.call(this);
            c = ka(c);

            for (var f = c.next(); !f.done; f = c.next()) {
              f = f.value, Jb.call(d, "string" === typeof f ? document.createTextNode(f) : f, e);
            }
          }
        }
      });
    }

    Mb(CharacterData);
    Mb(Element);
    var Nb,
        Ob,
        Pb = Node.prototype.insertBefore,
        Qb = null !== (Ob = null === (Nb = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === Nb ? void 0 : Nb.get) && void 0 !== Ob ? Ob : function () {
      return this.parentNode;
    };

    function Rb(a) {
      a = a.prototype;
      a.hasOwnProperty("before") || Object.defineProperty(a, "before", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: function value(b) {
          for (var c = [], d = 0; d < arguments.length; ++d) {
            c[d] = arguments[d];
          }

          d = Qb.call(this);

          if (null !== d) {
            c = ka(c);

            for (var e = c.next(); !e.done; e = c.next()) {
              e = e.value, Pb.call(d, "string" === typeof e ? document.createTextNode(e) : e, this);
            }
          }
        }
      });
    }

    Rb(CharacterData);
    Rb(Element);
    var Sb,
        Tb,
        Ub = Node.prototype.removeChild,
        Vb = null !== (Tb = null === (Sb = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === Sb ? void 0 : Sb.get) && void 0 !== Tb ? Tb : function () {
      return this.parentNode;
    };

    function Wb(a) {
      a = a.prototype;
      a.hasOwnProperty("remove") || Object.defineProperty(a, "remove", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: function value() {
          var b = Vb.call(this);
          b && Ub.call(b, this);
        }
      });
    }

    Wb(CharacterData);
    Wb(Element);
    var Xb,
        Yb,
        Zb = Node.prototype.insertBefore,
        $b = Node.prototype.removeChild,
        ac = null !== (Yb = null === (Xb = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === Xb ? void 0 : Xb.get) && void 0 !== Yb ? Yb : function () {
      return this.parentNode;
    };

    function bc(a) {
      a = a.prototype;
      a.hasOwnProperty("replaceWith") || Object.defineProperty(a, "replaceWith", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: function value(b) {
          for (var c = [], d = 0; d < arguments.length; ++d) {
            c[d] = arguments[d];
          }

          d = ac.call(this);

          if (null !== d) {
            c = ka(c);

            for (var e = c.next(); !e.done; e = c.next()) {
              e = e.value, Zb.call(d, "string" === typeof e ? document.createTextNode(e) : e, this);
            }

            $b.call(d, this);
          }
        }
      });
    }

    bc(CharacterData);
    bc(Element);
    var cc = window.Element.prototype,
        dc = window.HTMLElement.prototype,
        ec = window.SVGElement.prototype;
    !dc.hasOwnProperty("classList") || cc.hasOwnProperty("classList") || ec.hasOwnProperty("classList") || Object.defineProperty(cc, "classList", Object.getOwnPropertyDescriptor(dc, "classList"));
    /*
    Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found
    at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
    be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
    Google as part of the polymer project is also subject to an additional IP
    rights grant found at http://polymer.github.io/PATENTS.txt
    */

    var fc = document.createElement("style");
    fc.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
    var hc = document.querySelector("head");
    hc.insertBefore(fc, hc.firstChild);
    var ic = window;
    ic.WebComponents = ic.WebComponents || {
      flags: {}
    };
    var jc = document.querySelector('script[src*="webcomponents-bundle"]'),
        kc = /wc-(.+)/,
        lc = {};

    if (!lc.noOpts) {
      location.search.slice(1).split("&").forEach(function (a) {
        a = a.split("=");
        var b;
        a[0] && (b = a[0].match(kc)) && (lc[b[1]] = a[1] || !0);
      });
      if (jc) for (var mc = 0, nc = void 0; nc = jc.attributes[mc]; mc++) {
        "src" !== nc.name && (lc[nc.name] = nc.value || !0);
      }
      var oc = {};
      lc.log && lc.log.split && lc.log.split(",").forEach(function (a) {
        oc[a] = !0;
      });
      lc.log = oc;
    }

    ic.WebComponents.flags = lc;
    var pc = lc.shadydom;

    if (pc) {
      ic.ShadyDOM = ic.ShadyDOM || {};
      ic.ShadyDOM.force = pc;
      var qc = lc.noPatch;
      ic.ShadyDOM.noPatch = "true" === qc ? !0 : qc;
    }

    var rc = lc.register || lc.ce;
    rc && window.customElements && (ic.customElements.forcePolyfill = rc);
    /*
    Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    (function () {
      function a() {}

      function b(p, r) {
        if (!p.childNodes.length) return [];

        switch (p.nodeType) {
          case Node.DOCUMENT_NODE:
            return F.call(p, r);

          case Node.DOCUMENT_FRAGMENT_NODE:
            return E.call(p, r);

          default:
            return t.call(p, r);
        }
      }

      var c = "undefined" === typeof HTMLTemplateElement,
          d = !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment),
          e = !1;
      /Trident/.test(navigator.userAgent) && function () {
        function p(z, R) {
          if (z instanceof DocumentFragment) for (var lb; lb = z.firstChild;) {
            B.call(this, lb, R);
          } else B.call(this, z, R);
          return z;
        }

        e = !0;
        var r = Node.prototype.cloneNode;

        Node.prototype.cloneNode = function (z) {
          z = r.call(this, z);
          this instanceof DocumentFragment && (z.__proto__ = DocumentFragment.prototype);
          return z;
        };

        DocumentFragment.prototype.querySelectorAll = HTMLElement.prototype.querySelectorAll;
        DocumentFragment.prototype.querySelector = HTMLElement.prototype.querySelector;
        Object.defineProperties(DocumentFragment.prototype, {
          nodeType: {
            get: function get() {
              return Node.DOCUMENT_FRAGMENT_NODE;
            },
            configurable: !0
          },
          localName: {
            get: function get() {},
            configurable: !0
          },
          nodeName: {
            get: function get() {
              return "#document-fragment";
            },
            configurable: !0
          }
        });
        var B = Node.prototype.insertBefore;
        Node.prototype.insertBefore = p;
        var K = Node.prototype.appendChild;

        Node.prototype.appendChild = function (z) {
          z instanceof DocumentFragment ? p.call(this, z, null) : K.call(this, z);
          return z;
        };

        var aa = Node.prototype.removeChild,
            la = Node.prototype.replaceChild;

        Node.prototype.replaceChild = function (z, R) {
          z instanceof DocumentFragment ? (p.call(this, z, R), aa.call(this, R)) : la.call(this, z, R);
          return R;
        };

        Document.prototype.createDocumentFragment = function () {
          var z = this.createElement("df");
          z.__proto__ = DocumentFragment.prototype;
          return z;
        };

        var va = Document.prototype.importNode;

        Document.prototype.importNode = function (z, R) {
          R = va.call(this, z, R || !1);
          z instanceof DocumentFragment && (R.__proto__ = DocumentFragment.prototype);
          return R;
        };
      }();

      var f = Node.prototype.cloneNode,
          g = Document.prototype.createElement,
          h = Document.prototype.importNode,
          k = Node.prototype.removeChild,
          l = Node.prototype.appendChild,
          m = Node.prototype.replaceChild,
          q = DOMParser.prototype.parseFromString,
          H = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML") || {
        get: function get() {
          return this.innerHTML;
        },
        set: function set(p) {
          this.innerHTML = p;
        }
      },
          C = Object.getOwnPropertyDescriptor(window.Node.prototype, "childNodes") || {
        get: function get() {
          return this.childNodes;
        }
      },
          t = Element.prototype.querySelectorAll,
          F = Document.prototype.querySelectorAll,
          E = DocumentFragment.prototype.querySelectorAll,
          M = function () {
        if (!c) {
          var p = document.createElement("template"),
              r = document.createElement("template");
          r.content.appendChild(document.createElement("div"));
          p.content.appendChild(r);
          p = p.cloneNode(!0);
          return 0 === p.content.childNodes.length || 0 === p.content.firstChild.content.childNodes.length || d;
        }
      }();

      if (c) {
        var y = document.implementation.createHTMLDocument("template"),
            W = !0,
            w = document.createElement("style");
        w.textContent = "template{display:none;}";
        var ta = document.head;
        ta.insertBefore(w, ta.firstElementChild);
        a.prototype = Object.create(HTMLElement.prototype);
        var ha = !document.createElement("div").hasOwnProperty("innerHTML");

        a.Z = function (p) {
          if (!p.content && p.namespaceURI === document.documentElement.namespaceURI) {
            p.content = y.createDocumentFragment();

            for (var r; r = p.firstChild;) {
              l.call(p.content, r);
            }

            if (ha) p.__proto__ = a.prototype;else if (p.cloneNode = function (B) {
              return a.sa(this, B);
            }, W) try {
              n(p), J(p);
            } catch (B) {
              W = !1;
            }
            a.bootstrap(p.content);
          }
        };

        var sa = {
          option: ["select"],
          thead: ["table"],
          col: ["colgroup", "table"],
          tr: ["tbody", "table"],
          th: ["tr", "tbody", "table"],
          td: ["tr", "tbody", "table"]
        },
            n = function n(p) {
          Object.defineProperty(p, "innerHTML", {
            get: function get() {
              return wa(this);
            },
            set: function set(r) {
              var B = sa[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(r) || ["", ""])[1].toLowerCase()];
              if (B) for (var K = 0; K < B.length; K++) {
                r = "<" + B[K] + ">" + r + "</" + B[K] + ">";
              }
              y.body.innerHTML = r;

              for (a.bootstrap(y); this.content.firstChild;) {
                k.call(this.content, this.content.firstChild);
              }

              r = y.body;
              if (B) for (K = 0; K < B.length; K++) {
                r = r.lastChild;
              }

              for (; r.firstChild;) {
                l.call(this.content, r.firstChild);
              }
            },
            configurable: !0
          });
        },
            J = function J(p) {
          Object.defineProperty(p, "outerHTML", {
            get: function get() {
              return "<template>" + this.innerHTML + "</template>";
            },
            set: function set(r) {
              if (this.parentNode) {
                y.body.innerHTML = r;

                for (r = this.ownerDocument.createDocumentFragment(); y.body.firstChild;) {
                  l.call(r, y.body.firstChild);
                }

                m.call(this.parentNode, r, this);
              } else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
            },
            configurable: !0
          });
        };

        n(a.prototype);
        J(a.prototype);

        a.bootstrap = function (p) {
          p = b(p, "template");

          for (var r = 0, B = p.length, K; r < B && (K = p[r]); r++) {
            a.Z(K);
          }
        };

        document.addEventListener("DOMContentLoaded", function () {
          a.bootstrap(document);
        });

        Document.prototype.createElement = function () {
          var p = g.apply(this, arguments);
          "template" === p.localName && a.Z(p);
          return p;
        };

        DOMParser.prototype.parseFromString = function () {
          var p = q.apply(this, arguments);
          a.bootstrap(p);
          return p;
        };

        Object.defineProperty(HTMLElement.prototype, "innerHTML", {
          get: function get() {
            return wa(this);
          },
          set: function set(p) {
            H.set.call(this, p);
            a.bootstrap(this);
          },
          configurable: !0,
          enumerable: !0
        });

        var fa = /[&\u00A0"]/g,
            gc = /[&\u00A0<>]/g,
            fb = function fb(p) {
          switch (p) {
            case "&":
              return "&amp;";

            case "<":
              return "&lt;";

            case ">":
              return "&gt;";

            case '"':
              return "&quot;";

            case "\xA0":
              return "&nbsp;";
          }
        };

        w = function w(p) {
          for (var r = {}, B = 0; B < p.length; B++) {
            r[p[B]] = !0;
          }

          return r;
        };

        var Ua = w("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
            gb = w("style script xmp iframe noembed noframes plaintext noscript".split(" ")),
            wa = function wa(p, r) {
          "template" === p.localName && (p = p.content);

          for (var B = "", K = r ? r(p) : C.get.call(p), aa = 0, la = K.length, va; aa < la && (va = K[aa]); aa++) {
            a: {
              var z = va;
              var R = p;
              var lb = r;

              switch (z.nodeType) {
                case Node.ELEMENT_NODE:
                  for (var Fc = z.localName, mb = "<" + Fc, Bh = z.attributes, oe = 0; R = Bh[oe]; oe++) {
                    mb += " " + R.name + '="' + R.value.replace(fa, fb) + '"';
                  }

                  mb += ">";
                  z = Ua[Fc] ? mb : mb + wa(z, lb) + "</" + Fc + ">";
                  break a;

                case Node.TEXT_NODE:
                  z = z.data;
                  z = R && gb[R.localName] ? z : z.replace(gc, fb);
                  break a;

                case Node.COMMENT_NODE:
                  z = "\x3c!--" + z.data + "--\x3e";
                  break a;

                default:
                  throw window.console.error(z), Error("not implemented");
              }
            }

            B += z;
          }

          return B;
        };
      }

      if (c || M) {
        a.sa = function (p, r) {
          var B = f.call(p, !1);
          this.Z && this.Z(B);
          r && (l.call(B.content, f.call(p.content, !0)), I(B.content, p.content));
          return B;
        };

        var I = function I(p, r) {
          if (r.querySelectorAll && (r = b(r, "template"), 0 !== r.length)) {
            p = b(p, "template");

            for (var B = 0, K = p.length, aa, la; B < K; B++) {
              la = r[B], aa = p[B], a && a.Z && a.Z(la), m.call(aa.parentNode, u.call(la, !0), aa);
            }
          }
        },
            u = Node.prototype.cloneNode = function (p) {
          if (!e && d && this instanceof DocumentFragment) {
            if (p) var r = G.call(this.ownerDocument, this, !0);else return this.ownerDocument.createDocumentFragment();
          } else this.nodeType === Node.ELEMENT_NODE && "template" === this.localName && this.namespaceURI == document.documentElement.namespaceURI ? r = a.sa(this, p) : r = f.call(this, p);
          p && I(r, this);
          return r;
        },
            G = Document.prototype.importNode = function (p, r) {
          r = r || !1;
          if ("template" === p.localName) return a.sa(p, r);
          var B = h.call(this, p, r);

          if (r) {
            I(B, p);
            p = b(B, 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');

            for (var K, aa = 0; aa < p.length; aa++) {
              K = p[aa];
              r = g.call(document, "script");
              r.textContent = K.textContent;

              for (var la = K.attributes, va = 0, z; va < la.length; va++) {
                z = la[va], r.setAttribute(z.name, z.value);
              }

              m.call(K.parentNode, r, K);
            }
          }

          return B;
        };
      }

      c && (window.HTMLTemplateElement = a);
    })();
    /*
    Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */


    function sc() {}

    sc.prototype.toJSON = function () {
      return {};
    };

    function D(a) {
      a.__shady || (a.__shady = new sc());
      return a.__shady;
    }

    function L(a) {
      return a && a.__shady;
    }
    var N = window.ShadyDOM || {};
    N.Ya = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
    var tc = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
    N.H = !!(tc && tc.configurable && tc.get);
    N.ya = N.force || !N.Ya;
    N.J = N.noPatch || !1;
    N.fa = N.preferPerformance;
    N.Aa = "on-demand" === N.J;
    N.Na = navigator.userAgent.match("Trident");

    function uc() {
      return Document.prototype.msElementsFromPoint ? "msElementsFromPoint" : "elementsFromPoint";
    }

    function vc(a) {
      return (a = L(a)) && void 0 !== a.firstChild;
    }

    function O(a) {
      return a instanceof ShadowRoot;
    }

    function wc(a) {
      return (a = (a = L(a)) && a.root) && xc(a);
    }

    var yc = Element.prototype,
        zc = yc.matches || yc.matchesSelector || yc.mozMatchesSelector || yc.msMatchesSelector || yc.oMatchesSelector || yc.webkitMatchesSelector,
        Ac = document.createTextNode(""),
        Bc = 0,
        Cc = [];
    new MutationObserver(function () {
      for (; Cc.length;) {
        try {
          Cc.shift()();
        } catch (a) {
          throw Ac.textContent = Bc++, a;
        }
      }
    }).observe(Ac, {
      characterData: !0
    });

    function Dc(a) {
      Cc.push(a);
      Ac.textContent = Bc++;
    }

    var Ec = document.contains ? function (a, b) {
      return a.__shady_native_contains(b);
    } : function (a, b) {
      return a === b || a.documentElement && a.documentElement.__shady_native_contains(b);
    };

    function Gc(a, b) {
      for (; b;) {
        if (b == a) return !0;
        b = b.__shady_parentNode;
      }

      return !1;
    }

    function Hc(a) {
      for (var b = a.length - 1; 0 <= b; b--) {
        var c = a[b],
            d = c.getAttribute("id") || c.getAttribute("name");
        d && "length" !== d && isNaN(d) && (a[d] = c);
      }

      a.item = function (e) {
        return a[e];
      };

      a.namedItem = function (e) {
        if ("length" !== e && isNaN(e) && a[e]) return a[e];

        for (var f = ka(a), g = f.next(); !g.done; g = f.next()) {
          if (g = g.value, (g.getAttribute("id") || g.getAttribute("name")) == e) return g;
        }

        return null;
      };

      return a;
    }

    function Ic(a) {
      var b = [];

      for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) {
        b.push(a);
      }

      return b;
    }

    function Jc(a) {
      var b = [];

      for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
        b.push(a);
      }

      return b;
    }

    function Kc(a, b, c) {
      c.configurable = !0;
      if (c.value) a[b] = c.value;else try {
        Object.defineProperty(a, b, c);
      } catch (d) {}
    }

    function P(a, b, c, d) {
      c = void 0 === c ? "" : c;

      for (var e in b) {
        d && 0 <= d.indexOf(e) || Kc(a, c + e, b[e]);
      }
    }

    function Lc(a, b) {
      for (var c in b) {
        c in a && Kc(a, c, b[c]);
      }
    }

    function Q(a) {
      var b = {};
      Object.getOwnPropertyNames(a).forEach(function (c) {
        b[c] = Object.getOwnPropertyDescriptor(a, c);
      });
      return b;
    }

    function Mc(a, b) {
      for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length; d++) {
        e = c[d], a[e] = b[e];
      }
    }

    function Nc(a) {
      return a instanceof Node ? a : document.createTextNode("" + a);
    }

    function Oc(a) {
      for (var b = [], c = 0; c < arguments.length; ++c) {
        b[c] = arguments[c];
      }

      if (1 === b.length) return Nc(b[0]);
      c = document.createDocumentFragment();
      b = ka(b);

      for (var d = b.next(); !d.done; d = b.next()) {
        c.appendChild(Nc(d.value));
      }

      return c;
    }
    var Pc = [],
        Qc;

    function Rc(a) {
      Qc || (Qc = !0, Dc(Sc));
      Pc.push(a);
    }

    function Sc() {
      Qc = !1;

      for (var a = !!Pc.length; Pc.length;) {
        Pc.shift()();
      }

      return a;
    }

    Sc.list = Pc;

    function Tc() {
      this.g = !1;
      this.addedNodes = [];
      this.removedNodes = [];
      this.oa = new Set();
    }

    function Uc(a) {
      a.g || (a.g = !0, Dc(function () {
        a.flush();
      }));
    }

    Tc.prototype.flush = function () {
      if (this.g) {
        this.g = !1;
        var a = this.takeRecords();
        a.length && this.oa.forEach(function (b) {
          b(a);
        });
      }
    };

    Tc.prototype.takeRecords = function () {
      if (this.addedNodes.length || this.removedNodes.length) {
        var a = [{
          addedNodes: this.addedNodes,
          removedNodes: this.removedNodes
        }];
        this.addedNodes = [];
        this.removedNodes = [];
        return a;
      }

      return [];
    };

    function Vc(a, b) {
      var c = D(a);
      c.ea || (c.ea = new Tc());
      c.ea.oa.add(b);
      var d = c.ea;
      return {
        Ra: b,
        X: d,
        Sa: a,
        takeRecords: function takeRecords() {
          return d.takeRecords();
        }
      };
    }

    function Wc(a) {
      var b = a && a.X;
      b && (b.oa["delete"](a.Ra), b.oa.size || (D(a.Sa).ea = null));
    }

    function Xc(a, b) {
      var c = b.getRootNode();
      return a.map(function (d) {
        var e = c === d.target.getRootNode();

        if (e && d.addedNodes) {
          if (e = [].slice.call(d.addedNodes).filter(function (f) {
            return c === f.getRootNode();
          }), e.length) return d = Object.create(d), Object.defineProperty(d, "addedNodes", {
            value: e,
            configurable: !0
          }), d;
        } else if (e) return d;
      }).filter(function (d) {
        return d;
      });
    }
    var Yc = /[&\u00A0"]/g,
        Zc = /[&\u00A0<>]/g;

    function $c(a) {
      switch (a) {
        case "&":
          return "&amp;";

        case "<":
          return "&lt;";

        case ">":
          return "&gt;";

        case '"':
          return "&quot;";

        case "\xA0":
          return "&nbsp;";
      }
    }

    function ad(a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        b[a[c]] = !0;
      }

      return b;
    }

    var bd = ad("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
        cd = ad("style script xmp iframe noembed noframes plaintext noscript".split(" "));

    function dd(a, b) {
      "template" === a.localName && (a = a.content);

      for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
        a: {
          var h = g;
          var k = a,
              l = b;

          switch (h.nodeType) {
            case Node.ELEMENT_NODE:
              k = h.localName;

              for (var m = "<" + k, q = h.attributes, H = 0, C; C = q[H]; H++) {
                m += " " + C.name + '="' + C.value.replace(Yc, $c) + '"';
              }

              m += ">";
              h = bd[k] ? m : m + dd(h, l) + "</" + k + ">";
              break a;

            case Node.TEXT_NODE:
              h = h.data;
              h = k && cd[k.localName] ? h : h.replace(Zc, $c);
              break a;

            case Node.COMMENT_NODE:
              h = "\x3c!--" + h.data + "--\x3e";
              break a;

            default:
              throw window.console.error(h), Error("not implemented");
          }
        }

        c += h;
      }

      return c;
    }
    var ed = N.H,
        fd = {
      querySelector: function querySelector(a) {
        return this.__shady_native_querySelector(a);
      },
      querySelectorAll: function querySelectorAll(a) {
        return this.__shady_native_querySelectorAll(a);
      }
    },
        gd = {};

    function hd(a) {
      gd[a] = function (b) {
        return b["__shady_native_" + a];
      };
    }

    function id(a, b) {
      P(a, b, "__shady_native_");

      for (var c in b) {
        hd(c);
      }
    }

    function S(a, b) {
      b = void 0 === b ? [] : b;

      for (var c = 0; c < b.length; c++) {
        var d = b[c],
            e = Object.getOwnPropertyDescriptor(a, d);
        e && (Object.defineProperty(a, "__shady_native_" + d, e), e.value ? fd[d] || (fd[d] = e.value) : hd(d));
      }
    }

    var jd = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
        kd = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
        ld = document.implementation.createHTMLDocument("inert");

    function md(a) {
      for (var b; b = a.__shady_native_firstChild;) {
        a.__shady_native_removeChild(b);
      }
    }

    var nd = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
        od = ["querySelector", "querySelectorAll", "append", "prepend", "replaceChildren"];

    function pd() {
      var a = ["dispatchEvent", "addEventListener", "removeEventListener"];
      window.EventTarget ? (S(window.EventTarget.prototype, a), void 0 === window.__shady_native_addEventListener && S(Window.prototype, a)) : (S(Node.prototype, a), S(Window.prototype, a));
      ed ? S(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : id(Node.prototype, {
        parentNode: {
          get: function get() {
            jd.currentNode = this;
            return jd.parentNode();
          }
        },
        firstChild: {
          get: function get() {
            jd.currentNode = this;
            return jd.firstChild();
          }
        },
        lastChild: {
          get: function get() {
            jd.currentNode = this;
            return jd.lastChild();
          }
        },
        previousSibling: {
          get: function get() {
            jd.currentNode = this;
            return jd.previousSibling();
          }
        },
        nextSibling: {
          get: function get() {
            jd.currentNode = this;
            return jd.nextSibling();
          }
        },
        childNodes: {
          get: function get() {
            var b = [];
            jd.currentNode = this;

            for (var c = jd.firstChild(); c;) {
              b.push(c), c = jd.nextSibling();
            }

            return b;
          }
        },
        parentElement: {
          get: function get() {
            kd.currentNode = this;
            return kd.parentNode();
          }
        },
        textContent: {
          get: function get() {
            switch (this.nodeType) {
              case Node.ELEMENT_NODE:
              case Node.DOCUMENT_FRAGMENT_NODE:
                for (var b = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), c = "", d; d = b.nextNode();) {
                  c += d.nodeValue;
                }

                return c;

              default:
                return this.nodeValue;
            }
          },
          set: function set(b) {
            if ("undefined" === typeof b || null === b) b = "";

            switch (this.nodeType) {
              case Node.ELEMENT_NODE:
              case Node.DOCUMENT_FRAGMENT_NODE:
                md(this);
                (0 < b.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(b), void 0);
                break;

              default:
                this.nodeValue = b;
            }
          }
        }
      });
      S(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
      S(HTMLElement.prototype, ["parentElement", "contains"]);
      a = {
        firstElementChild: {
          get: function get() {
            kd.currentNode = this;
            return kd.firstChild();
          }
        },
        lastElementChild: {
          get: function get() {
            kd.currentNode = this;
            return kd.lastChild();
          }
        },
        children: {
          get: function get() {
            var b = [];
            kd.currentNode = this;

            for (var c = kd.firstChild(); c;) {
              b.push(c), c = kd.nextSibling();
            }

            return Hc(b);
          }
        },
        childElementCount: {
          get: function get() {
            return this.children ? this.children.length : 0;
          }
        }
      };
      ed ? (S(Element.prototype, nd), S(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]), S(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (id(Element.prototype, a), id(Element.prototype, {
        previousElementSibling: {
          get: function get() {
            kd.currentNode = this;
            return kd.previousSibling();
          }
        },
        nextElementSibling: {
          get: function get() {
            kd.currentNode = this;
            return kd.nextSibling();
          }
        },
        innerHTML: {
          get: function get() {
            return dd(this, Ic);
          },
          set: function set(b) {
            var c = "template" === this.localName ? this.content : this;
            md(c);
            var d = this.localName || "div";
            d = this.namespaceURI && this.namespaceURI !== ld.namespaceURI ? ld.createElementNS(this.namespaceURI, d) : ld.createElement(d);
            d.innerHTML = b;

            for (b = "template" === this.localName ? d.content : d; d = b.__shady_native_firstChild;) {
              c.__shady_native_insertBefore(d, void 0);
            }
          }
        },
        className: {
          get: function get() {
            return this.getAttribute("class") || "";
          },
          set: function set(b) {
            this.setAttribute("class", b);
          }
        }
      }));
      S(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));
      S(Element.prototype, od);
      S(HTMLElement.prototype, ["focus", "blur"]);
      window.HTMLTemplateElement && S(window.HTMLTemplateElement.prototype, ["innerHTML"]);
      ed ? S(DocumentFragment.prototype, nd) : id(DocumentFragment.prototype, a);
      S(DocumentFragment.prototype, od);
      ed ? (S(Document.prototype, nd), S(Document.prototype, ["activeElement"])) : id(Document.prototype, a);
      S(Document.prototype, ["importNode", "getElementById", "elementFromPoint", uc()]);
      S(Document.prototype, od);
    }
    var qd = Q({
      get childNodes() {
        return this.__shady_childNodes;
      },

      get firstChild() {
        return this.__shady_firstChild;
      },

      get lastChild() {
        return this.__shady_lastChild;
      },

      get childElementCount() {
        return this.__shady_childElementCount;
      },

      get children() {
        return this.__shady_children;
      },

      get firstElementChild() {
        return this.__shady_firstElementChild;
      },

      get lastElementChild() {
        return this.__shady_lastElementChild;
      },

      get shadowRoot() {
        return this.__shady_shadowRoot;
      }

    }),
        rd = Q({
      get textContent() {
        return this.__shady_textContent;
      },

      set textContent(a) {
        this.__shady_textContent = a;
      },

      get innerHTML() {
        return this.__shady_innerHTML;
      },

      set innerHTML(a) {
        this.__shady_innerHTML = a;
      }

    }),
        sd = Q({
      get parentElement() {
        return this.__shady_parentElement;
      },

      get parentNode() {
        return this.__shady_parentNode;
      },

      get nextSibling() {
        return this.__shady_nextSibling;
      },

      get previousSibling() {
        return this.__shady_previousSibling;
      },

      get nextElementSibling() {
        return this.__shady_nextElementSibling;
      },

      get previousElementSibling() {
        return this.__shady_previousElementSibling;
      },

      get className() {
        return this.__shady_className;
      },

      set className(a) {
        this.__shady_className = a;
      }

    });

    function td(a) {
      for (var b in a) {
        var c = a[b];
        c && (c.enumerable = !1);
      }
    }

    td(qd);
    td(rd);
    td(sd);
    var ud = N.H || !0 === N.J,
        vd = ud ? function () {} : function (a) {
      var b = D(a);
      b.Pa || (b.Pa = !0, Lc(a, sd));
    },
        wd = ud ? function () {} : function (a) {
      var b = D(a);
      b.Oa || (b.Oa = !0, Lc(a, qd), window.customElements && window.customElements.polyfillWrapFlushCallback && !N.J || Lc(a, rd));
    };

    var xd = "__eventWrappers" + Date.now(),
        yd = function () {
      var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
      return a ? function (b) {
        return a.get.call(b);
      } : null;
    }(),
        zd = function () {
      function a() {}

      var b = !1,
          c = {
        get capture() {
          b = !0;
          return !1;
        }

      };
      window.addEventListener("test", a, c);
      window.removeEventListener("test", a, c);
      return b;
    }();

    function Ad(a) {
      if (a && "object" === _typeof(a)) {
        var b = !!a.capture;
        var c = !!a.once;
        var d = !!a.passive;
        var e = a.U;
      } else b = !!a, d = c = !1;

      return {
        La: e,
        capture: b,
        once: c,
        passive: d,
        Ja: zd ? a : b
      };
    }

    var Bd = {
      blur: !0,
      focus: !0,
      focusin: !0,
      focusout: !0,
      click: !0,
      dblclick: !0,
      mousedown: !0,
      mouseenter: !0,
      mouseleave: !0,
      mousemove: !0,
      mouseout: !0,
      mouseover: !0,
      mouseup: !0,
      wheel: !0,
      beforeinput: !0,
      input: !0,
      keydown: !0,
      keyup: !0,
      compositionstart: !0,
      compositionupdate: !0,
      compositionend: !0,
      touchstart: !0,
      touchend: !0,
      touchmove: !0,
      touchcancel: !0,
      pointerover: !0,
      pointerenter: !0,
      pointerdown: !0,
      pointermove: !0,
      pointerup: !0,
      pointercancel: !0,
      pointerout: !0,
      pointerleave: !0,
      gotpointercapture: !0,
      lostpointercapture: !0,
      dragstart: !0,
      drag: !0,
      dragenter: !0,
      dragleave: !0,
      dragover: !0,
      drop: !0,
      dragend: !0,
      DOMActivate: !0,
      DOMFocusIn: !0,
      DOMFocusOut: !0,
      keypress: !0
    },
        Cd = {
      DOMAttrModified: !0,
      DOMAttributeNameChanged: !0,
      DOMCharacterDataModified: !0,
      DOMElementNameChanged: !0,
      DOMNodeInserted: !0,
      DOMNodeInsertedIntoDocument: !0,
      DOMNodeRemoved: !0,
      DOMNodeRemovedFromDocument: !0,
      DOMSubtreeModified: !0
    };

    function Dd(a) {
      return a instanceof Node ? a.__shady_getRootNode() : a;
    }

    function Ed(a, b) {
      var c = [],
          d = a;

      for (a = Dd(a); d;) {
        c.push(d), d = d.__shady_assignedSlot ? d.__shady_assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.__shady_parentNode;
      }

      c[c.length - 1] === document && c.push(window);
      return c;
    }

    function Fd(a) {
      a.__composedPath || (a.__composedPath = Ed(a.target, !0));
      return a.__composedPath;
    }

    function Gd(a, b) {
      if (!O) return a;
      a = Ed(a, !0);

      for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++) {
        if (d = b[c], f = Dd(d), f !== e && (g = a.indexOf(f), e = f), !O(f) || -1 < g) return d;
      }
    }

    function Hd(a) {
      function b(c, d) {
        c = new a(c, d);
        c.__composed = d && !!d.composed;
        return c;
      }

      b.__proto__ = a;
      b.prototype = a.prototype;
      return b;
    }

    var Id = {
      focus: !0,
      blur: !0
    };

    function Jd(a) {
      return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget;
    }

    function Kd(a, b, c) {
      if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && (!Jd(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.__immediatePropagationStopped); d++) {
      }
    }

    function Ld(a) {
      var b = a.composedPath(),
          c = b.map(function (k) {
        return Gd(k, b);
      }),
          d = a.bubbles;
      Object.defineProperty(a, "currentTarget", {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return g;
        }
      });
      var e = Event.CAPTURING_PHASE;
      Object.defineProperty(a, "eventPhase", {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return e;
        }
      });

      for (var f = b.length - 1; 0 <= f; f--) {
        var g = b[f];
        e = g === c[f] ? Event.AT_TARGET : Event.CAPTURING_PHASE;
        Kd(a, g, "capture");
        if (a.ra) return;
      }

      for (f = 0; f < b.length; f++) {
        g = b[f];
        var h = g === c[f];
        if (h || d) if (e = h ? Event.AT_TARGET : Event.BUBBLING_PHASE, Kd(a, g, "bubble"), a.ra) return;
      }

      e = 0;
      g = null;
    }

    function Md(a, b, c, d, e, f) {
      for (var g = 0; g < a.length; g++) {
        var h = a[g],
            k = h.type,
            l = h.capture,
            m = h.once,
            q = h.passive;
        if (b === h.node && c === k && d === l && e === m && f === q) return g;
      }

      return -1;
    }

    function Nd(a) {
      Sc();
      return !N.fa && this instanceof Node && !Ec(document, this) ? (a.__target || Od(a, this), Ld(a)) : this.__shady_native_dispatchEvent(a);
    }

    function Pd(a, b, c) {
      var d = Ad(c),
          e = d.capture,
          f = d.once,
          g = d.passive,
          h = d.La;
      d = d.Ja;

      if (b) {
        var k = _typeof(b);

        if ("function" === k || "object" === k) if ("object" !== k || b.handleEvent && "function" === typeof b.handleEvent) {
          if (Cd[a]) return this.__shady_native_addEventListener(a, b, d);
          var l = h || this;

          if (h = b[xd]) {
            if (-1 < Md(h, l, a, e, f, g)) return;
          } else b[xd] = [];

          h = function h(m) {
            f && this.__shady_removeEventListener(a, b, c);
            m.__target || Od(m);

            if (l !== this) {
              var q = Object.getOwnPropertyDescriptor(m, "currentTarget");
              Object.defineProperty(m, "currentTarget", {
                get: function get() {
                  return l;
                },
                configurable: !0
              });
              var H = Object.getOwnPropertyDescriptor(m, "eventPhase");
              Object.defineProperty(m, "eventPhase", {
                configurable: !0,
                enumerable: !0,
                get: function get() {
                  return e ? Event.CAPTURING_PHASE : Event.BUBBLING_PHASE;
                }
              });
            }

            m.__previousCurrentTarget = m.currentTarget;
            if (!O(l) && "slot" !== l.localName || -1 != m.composedPath().indexOf(l)) if (m.composed || -1 < m.composedPath().indexOf(l)) if (Jd(m) && m.target === m.relatedTarget) m.eventPhase === Event.BUBBLING_PHASE && m.stopImmediatePropagation();else if (m.eventPhase === Event.CAPTURING_PHASE || m.bubbles || m.target === l || l instanceof Window) {
              var C = "function" === k ? b.call(l, m) : b.handleEvent && b.handleEvent(m);
              l !== this && (q ? (Object.defineProperty(m, "currentTarget", q), q = null) : delete m.currentTarget, H ? (Object.defineProperty(m, "eventPhase", H), H = null) : delete m.eventPhase);
              return C;
            }
          };

          b[xd].push({
            node: l,
            type: a,
            capture: e,
            once: f,
            passive: g,
            pb: h
          });
          this.__handlers = this.__handlers || {};
          this.__handlers[a] = this.__handlers[a] || {
            capture: [],
            bubble: []
          };

          this.__handlers[a][e ? "capture" : "bubble"].push(h);

          Id[a] || this.__shady_native_addEventListener(a, h, d);
        }
      }
    }

    function Qd(a, b, c) {
      if (b) {
        var d = Ad(c);
        c = d.capture;
        var e = d.once,
            f = d.passive,
            g = d.La;
        d = d.Ja;
        if (Cd[a]) return this.__shady_native_removeEventListener(a, b, d);
        var h = g || this;
        g = void 0;
        var k = null;

        try {
          k = b[xd];
        } catch (l) {}

        k && (e = Md(k, h, a, c, e, f), -1 < e && (g = k.splice(e, 1)[0].pb, k.length || (b[xd] = void 0)));

        this.__shady_native_removeEventListener(a, g || b, d);

        g && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][c ? "capture" : "bubble"], b = a.indexOf(g), -1 < b && a.splice(b, 1));
      }
    }

    function Rd() {
      for (var a in Id) {
        window.__shady_native_addEventListener(a, function (b) {
          b.__target || (Od(b), Ld(b));
        }, !0);
      }
    }

    var Sd = Q({
      get composed() {
        void 0 === this.__composed && (yd ? this.__composed = "focusin" === this.type || "focusout" === this.type || yd(this) : !1 !== this.isTrusted && (this.__composed = Bd[this.type]));
        return this.__composed || !1;
      },

      composedPath: function composedPath() {
        this.__composedPath || (this.__composedPath = Ed(this.__target, this.composed));
        return this.__composedPath;
      },

      get target() {
        return Gd(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
      },

      get relatedTarget() {
        if (!this.__relatedTarget) return null;
        this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = Ed(this.__relatedTarget, !0));
        return Gd(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath);
      },

      stopPropagation: function stopPropagation() {
        Event.prototype.stopPropagation.call(this);
        this.ra = !0;
      },
      stopImmediatePropagation: function stopImmediatePropagation() {
        Event.prototype.stopImmediatePropagation.call(this);
        this.ra = this.__immediatePropagationStopped = !0;
      }
    });

    function Od(a, b) {
      b = void 0 === b ? a.target : b;
      a.__target = b;
      a.__relatedTarget = a.relatedTarget;

      if (N.H) {
        b = Object.getPrototypeOf(a);

        if (!b.hasOwnProperty("__shady_patchedProto")) {
          var c = Object.create(b);
          c.__shady_sourceProto = b;
          P(c, Sd);
          b.__shady_patchedProto = c;
        }

        a.__proto__ = b.__shady_patchedProto;
      } else P(a, Sd);
    }

    var Td = Hd(Event),
        Ud = Hd(CustomEvent),
        Vd = Hd(MouseEvent);

    function Wd() {
      if (!yd && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
        var a = function a() {
          var b = new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0,
            composed: !0
          });

          this.__shady_dispatchEvent(b);
        };

        Element.prototype.click ? Element.prototype.click = a : HTMLElement.prototype.click && (HTMLElement.prototype.click = a);
      }
    }

    var Xd = Object.getOwnPropertyNames(Element.prototype).filter(function (a) {
      return "on" === a.substring(0, 2);
    }),
        Yd = Object.getOwnPropertyNames(HTMLElement.prototype).filter(function (a) {
      return "on" === a.substring(0, 2);
    });

    function Zd(a) {
      return {
        set: function set(b) {
          var c = D(this),
              d = a.substring(2);
          c.T || (c.T = {});
          c.T[a] && this.removeEventListener(d, c.T[a]);

          this.__shady_addEventListener(d, b);

          c.T[a] = b;
        },
        get: function get() {
          var b = L(this);
          return b && b.T && b.T[a];
        },
        configurable: !0
      };
    }

    function $d(a, b) {
      return {
        index: a,
        ga: [],
        na: b
      };
    }

    function ae(a, b, c, d) {
      var e = 0,
          f = 0,
          g = 0,
          h = 0,
          k = Math.min(b - e, d - f);
      if (0 == e && 0 == f) a: {
        for (g = 0; g < k; g++) {
          if (a[g] !== c[g]) break a;
        }

        g = k;
      }

      if (b == a.length && d == c.length) {
        h = a.length;

        for (var l = c.length, m = 0; m < k - g && be(a[--h], c[--l]);) {
          m++;
        }

        h = m;
      }

      e += g;
      f += g;
      b -= h;
      d -= h;
      if (0 == b - e && 0 == d - f) return [];

      if (e == b) {
        for (b = $d(e, 0); f < d;) {
          b.ga.push(c[f++]);
        }

        return [b];
      }

      if (f == d) return [$d(e, b - e)];
      k = e;
      g = f;
      d = d - g + 1;
      h = b - k + 1;
      b = Array(d);

      for (l = 0; l < d; l++) {
        b[l] = Array(h), b[l][0] = l;
      }

      for (l = 0; l < h; l++) {
        b[0][l] = l;
      }

      for (l = 1; l < d; l++) {
        for (m = 1; m < h; m++) {
          if (a[k + m - 1] === c[g + l - 1]) b[l][m] = b[l - 1][m - 1];else {
            var q = b[l - 1][m] + 1,
                H = b[l][m - 1] + 1;
            b[l][m] = q < H ? q : H;
          }
        }
      }

      k = b.length - 1;
      g = b[0].length - 1;
      d = b[k][g];

      for (a = []; 0 < k || 0 < g;) {
        0 == k ? (a.push(2), g--) : 0 == g ? (a.push(3), k--) : (h = b[k - 1][g - 1], l = b[k - 1][g], m = b[k][g - 1], q = l < m ? l < h ? l : h : m < h ? m : h, q == h ? (h == d ? a.push(0) : (a.push(1), d = h), k--, g--) : q == l ? (a.push(3), k--, d = l) : (a.push(2), g--, d = m));
      }

      a.reverse();
      b = void 0;
      k = [];

      for (g = 0; g < a.length; g++) {
        switch (a[g]) {
          case 0:
            b && (k.push(b), b = void 0);
            e++;
            f++;
            break;

          case 1:
            b || (b = $d(e, 0));
            b.na++;
            e++;
            b.ga.push(c[f]);
            f++;
            break;

          case 2:
            b || (b = $d(e, 0));
            b.na++;
            e++;
            break;

          case 3:
            b || (b = $d(e, 0)), b.ga.push(c[f]), f++;
        }
      }

      b && k.push(b);
      return k;
    }

    function be(a, b) {
      return a === b;
    }
    var ce = Q({
      dispatchEvent: Nd,
      addEventListener: Pd,
      removeEventListener: Qd
    });
    var de = null;

    function ee() {
      de || (de = window.ShadyCSS && window.ShadyCSS.ScopingShim);
      return de || null;
    }

    function fe(a, b, c) {
      var d = ee();
      return d && "class" === b ? (d.setElementClass(a, c), !0) : !1;
    }

    function ge(a, b) {
      var c = ee();
      c && c.unscopeNode(a, b);
    }

    function he(a, b) {
      var c = ee();
      if (!c) return !0;

      if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        c = !0;

        for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
          c = c && he(a, b);
        }

        return c;
      }

      return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b;
    }

    function ie(a) {
      if (a.nodeType !== Node.ELEMENT_NODE) return "";
      var b = ee();
      return b ? b.currentScopeForNode(a) : "";
    }

    function je(a, b) {
      if (a) for (a.nodeType === Node.ELEMENT_NODE && b(a), a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
        a.nodeType === Node.ELEMENT_NODE && je(a, b);
      }
    }
    var ke = window.document,
        le = N.fa,
        me = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
        ne = me && me.get;

    function pe(a) {
      for (var b; b = a.__shady_firstChild;) {
        a.__shady_removeChild(b);
      }
    }

    function qe(a) {
      var b = L(a);
      if (b && void 0 !== b.qa) for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling) {
        qe(b);
      }
      if (a = L(a)) a.qa = void 0;
    }

    function re(a) {
      var b = a;

      if (a && "slot" === a.localName) {
        var c = L(a);
        (c = c && c.aa) && (b = c.length ? c[0] : re(a.__shady_nextSibling));
      }

      return b;
    }

    function se(a, b, c) {
      if (a = (a = L(a)) && a.ea) {
        if (b) if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (var d = 0, e = b.childNodes.length; d < e; d++) {
          a.addedNodes.push(b.childNodes[d]);
        } else a.addedNodes.push(b);
        c && a.removedNodes.push(c);
        Uc(a);
      }
    }

    var ze = Q({
      get parentNode() {
        var a = L(this);
        a = a && a.parentNode;
        return void 0 !== a ? a : this.__shady_native_parentNode;
      },

      get firstChild() {
        var a = L(this);
        a = a && a.firstChild;
        return void 0 !== a ? a : this.__shady_native_firstChild;
      },

      get lastChild() {
        var a = L(this);
        a = a && a.lastChild;
        return void 0 !== a ? a : this.__shady_native_lastChild;
      },

      get nextSibling() {
        var a = L(this);
        a = a && a.nextSibling;
        return void 0 !== a ? a : this.__shady_native_nextSibling;
      },

      get previousSibling() {
        var a = L(this);
        a = a && a.previousSibling;
        return void 0 !== a ? a : this.__shady_native_previousSibling;
      },

      get childNodes() {
        if (vc(this)) {
          var a = L(this);

          if (!a.childNodes) {
            a.childNodes = [];

            for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) {
              a.childNodes.push(b);
            }
          }

          var c = a.childNodes;
        } else c = this.__shady_native_childNodes;

        c.item = function (d) {
          return c[d];
        };

        return c;
      },

      get parentElement() {
        var a = L(this);
        (a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);
        return void 0 !== a ? a : this.__shady_native_parentElement;
      },

      get isConnected() {
        if (ne && ne.call(this)) return !0;
        if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
        var a = this.ownerDocument;
        if (null === a || Ec(a, this)) return !0;

        for (a = this; a && !(a instanceof Document);) {
          a = a.__shady_parentNode || (O(a) ? a.host : void 0);
        }

        return !!(a && a instanceof Document);
      },

      get textContent() {
        if (vc(this)) {
          for (var a = [], b = this.__shady_firstChild; b; b = b.__shady_nextSibling) {
            b.nodeType !== Node.COMMENT_NODE && a.push(b.__shady_textContent);
          }

          return a.join("");
        }

        return this.__shady_native_textContent;
      },

      set textContent(a) {
        if ("undefined" === typeof a || null === a) a = "";

        switch (this.nodeType) {
          case Node.ELEMENT_NODE:
          case Node.DOCUMENT_FRAGMENT_NODE:
            if (!vc(this) && N.H) {
              var b = this.__shady_firstChild;
              (b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) && pe(this);
              this.__shady_native_textContent = a;
            } else pe(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));

            break;

          default:
            this.nodeValue = a;
        }
      },

      insertBefore: function insertBefore(a, b) {
        if (this.ownerDocument !== ke && a.ownerDocument !== ke) return this.__shady_native_insertBefore(a, b), a;
        if (a === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");

        if (b) {
          var c = L(b);
          c = c && c.parentNode;
          if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
        }

        if (b === a) return a;
        se(this, a);
        var d = [],
            e = (c = te(this)) ? c.host.localName : ie(this),
            f = a.__shady_parentNode;

        if (f) {
          var g = ie(a);
          var h = !!c || !te(a) || le && void 0 !== this.__noInsertionPoint;

          f.__shady_removeChild(a, h);
        }

        f = !0;
        var k = (!le || void 0 === a.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !he(a, e),
            l = c && !a.__noInsertionPoint && (!le || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
        if (l || k) k && (g = g || ie(a)), je(a, function (m) {
          l && "slot" === m.localName && d.push(m);

          if (k) {
            var q = g;
            ee() && (q && ge(m, q), (q = ee()) && q.scopeNode(m, e));
          }
        });
        d.length && (ue(c), c.i.push.apply(c.i, x(d)), ve(c));
        vc(this) && (we(a, this, b), h = L(this), h.root ? (f = !1, wc(this) && ve(h.root)) : c && "slot" === this.localName && (f = !1, ve(c)));
        f ? (c = O(this) ? this.host : this, b ? (b = re(b), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a)) : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);
        return a;
      },
      appendChild: function appendChild(a) {
        if (this != a || !O(a)) return this.__shady_insertBefore(a);
      },
      removeChild: function removeChild(a, b) {
        b = void 0 === b ? !1 : b;
        if (this.ownerDocument !== ke) return this.__shady_native_removeChild(a);
        if (a.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);
        se(this, null, a);
        var c = te(a),
            d = c && xe(c, a),
            e = L(this);

        if (vc(this) && (ye(a, this), wc(this))) {
          ve(e.root);
          var f = !0;
        }

        if (ee() && !b && c && a.nodeType !== Node.TEXT_NODE) {
          var g = ie(a);
          je(a, function (h) {
            ge(h, g);
          });
        }

        qe(a);
        c && ((b = "slot" === this.localName) && (f = !0), (d || b) && ve(c));
        f || (f = O(this) ? this.host : this, (!e.root && "slot" !== a.localName || f === a.__shady_native_parentNode) && f.__shady_native_removeChild(a));
        return a;
      },
      replaceChild: function replaceChild(a, b) {
        this.__shady_insertBefore(a, b);

        this.__shady_removeChild(b);

        return a;
      },
      cloneNode: function cloneNode(a) {
        if ("template" == this.localName) return this.__shady_native_cloneNode(a);

        var b = this.__shady_native_cloneNode(!1);

        if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
          a = this.__shady_firstChild;

          for (var c; a; a = a.__shady_nextSibling) {
            c = a.__shady_cloneNode(!0), b.__shady_appendChild(c);
          }
        }

        return b;
      },
      getRootNode: function getRootNode(a) {
        if (this && this.nodeType) {
          var b = D(this),
              c = b.qa;
          void 0 === c && (O(this) ? (c = this, b.qa = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this, document.documentElement.__shady_native_contains(this) && (b.qa = c)));
          return c;
        }
      },
      contains: function contains(a) {
        return Gc(this, a);
      }
    });
    var Be = Q({
      get assignedSlot() {
        var a = this.__shady_parentNode;
        (a = a && a.__shady_shadowRoot) && Ae(a);
        return (a = L(this)) && a.assignedSlot || null;
      }

    });

    function Ce(a, b, c) {
      var d = [];
      De(a, b, c, d);
      return d;
    }

    function De(a, b, c, d) {
      for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
        var e;

        if (e = a.nodeType === Node.ELEMENT_NODE) {
          e = a;
          var f = b,
              g = c,
              h = d,
              k = f(e);
          k && h.push(e);
          g && g(k) ? e = k : (De(e, f, g, h), e = void 0);
        }

        if (e) break;
      }
    }

    var Ee = {
      get firstElementChild() {
        var a = L(this);

        if (a && void 0 !== a.firstChild) {
          for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) {
            a = a.__shady_nextSibling;
          }

          return a;
        }

        return this.__shady_native_firstElementChild;
      },

      get lastElementChild() {
        var a = L(this);

        if (a && void 0 !== a.lastChild) {
          for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) {
            a = a.__shady_previousSibling;
          }

          return a;
        }

        return this.__shady_native_lastElementChild;
      },

      get children() {
        return vc(this) ? Hc(Array.prototype.filter.call(Jc(this), function (a) {
          return a.nodeType === Node.ELEMENT_NODE;
        })) : this.__shady_native_children;
      },

      get childElementCount() {
        var a = this.__shady_children;
        return a ? a.length : 0;
      }

    },
        Fe = Q((Ee.append = function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) {
        b[c] = arguments[c];
      }

      this.__shady_insertBefore(Oc.apply(null, x(b)), null);
    }, Ee.prepend = function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) {
        b[c] = arguments[c];
      }

      this.__shady_insertBefore(Oc.apply(null, x(b)), this.__shady_firstChild);
    }, Ee.replaceChildren = function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) {
        b[c] = arguments[c];
      }

      for (; null !== (c = this.__shady_firstChild);) {
        this.__shady_removeChild(c);
      }

      this.__shady_insertBefore(Oc.apply(null, x(b)), null);
    }, Ee)),
        Ge = Q({
      querySelector: function querySelector(a) {
        return Ce(this, function (b) {
          return zc.call(b, a);
        }, function (b) {
          return !!b;
        })[0] || null;
      },
      querySelectorAll: function querySelectorAll(a, b) {
        if (b) {
          b = Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));

          var c = this.__shady_getRootNode();

          return Hc(b.filter(function (d) {
            return d.__shady_getRootNode() == c;
          }));
        }

        return Hc(Ce(this, function (d) {
          return zc.call(d, a);
        }));
      }
    }),
        He = N.fa && !N.J ? Mc({}, Fe) : Fe;
    Mc(Fe, Ge);
    var Ie = Q({
      after: function after(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) {
          b[c] = arguments[c];
        }

        c = this.__shady_parentNode;

        if (null !== c) {
          var d = this.__shady_nextSibling;

          c.__shady_insertBefore(Oc.apply(null, x(b)), d);
        }
      },
      before: function before(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) {
          b[c] = arguments[c];
        }

        c = this.__shady_parentNode;
        null !== c && c.__shady_insertBefore(Oc.apply(null, x(b)), this);
      },
      remove: function remove() {
        var a = this.__shady_parentNode;
        null !== a && a.__shady_removeChild(this);
      },
      replaceWith: function replaceWith(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) {
          b[c] = arguments[c];
        }

        c = this.__shady_parentNode;

        if (null !== c) {
          var d = this.__shady_nextSibling;

          c.__shady_removeChild(this);

          c.__shady_insertBefore(Oc.apply(null, x(b)), d);
        }
      }
    });
    var Je = window.document;

    function Ke(a, b) {
      if ("slot" === b) a = a.__shady_parentNode, wc(a) && ve(L(a).root);else if ("slot" === a.localName && "name" === b && (b = te(a))) {
        if (b.g) {
          Le(b);
          var c = a.Qa,
              d = Me(a);

          if (d !== c) {
            c = b.h[c];
            var e = c.indexOf(a);
            0 <= e && c.splice(e, 1);
            c = b.h[d] || (b.h[d] = []);
            c.push(a);
            1 < c.length && (b.h[d] = Ne(c));
          }
        }

        ve(b);
      }
    }

    var Oe = Q({
      get previousElementSibling() {
        var a = L(this);

        if (a && void 0 !== a.previousSibling) {
          for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) {
            a = a.__shady_previousSibling;
          }

          return a;
        }

        return this.__shady_native_previousElementSibling;
      },

      get nextElementSibling() {
        var a = L(this);

        if (a && void 0 !== a.nextSibling) {
          for (a = this.__shady_nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) {
            a = a.__shady_nextSibling;
          }

          return a;
        }

        return this.__shady_native_nextElementSibling;
      },

      get slot() {
        return this.getAttribute("slot");
      },

      set slot(a) {
        this.__shady_setAttribute("slot", a);
      },

      get className() {
        return this.getAttribute("class") || "";
      },

      set className(a) {
        this.__shady_setAttribute("class", a);
      },

      setAttribute: function setAttribute(a, b) {
        this.ownerDocument !== Je ? this.__shady_native_setAttribute(a, b) : fe(this, a, b) || (this.__shady_native_setAttribute(a, b), Ke(this, a));
      },
      removeAttribute: function removeAttribute(a) {
        this.ownerDocument !== Je ? this.__shady_native_removeAttribute(a) : fe(this, a, "") ? "" === this.getAttribute(a) && this.__shady_native_removeAttribute(a) : (this.__shady_native_removeAttribute(a), Ke(this, a));
      }
    });
    N.fa || Xd.forEach(function (a) {
      Oe[a] = Zd(a);
    });
    var Te = Q({
      attachShadow: function attachShadow(a) {
        if (!this) throw Error("Must provide a host.");
        if (!a) throw Error("Not enough arguments.");

        if (a.shadyUpgradeFragment && !N.Na) {
          var b = a.shadyUpgradeFragment;
          b.__proto__ = ShadowRoot.prototype;
          Pe(b, this, a);
          Qe(b, b);
          a = b.__noInsertionPoint ? null : b.querySelectorAll("slot");
          b.__noInsertionPoint = void 0;

          if (a && a.length) {
            var c = b;
            ue(c);
            c.i.push.apply(c.i, x(a));
            ve(b);
          }

          b.host.__shady_native_appendChild(b);
        } else b = new Re(Se, this, a);

        return this.__CE_shadowRoot = b;
      },

      get shadowRoot() {
        var a = L(this);
        return a && a.gb || null;
      }

    });
    Mc(Oe, Te);
    var Ue = document.implementation.createHTMLDocument("inert"),
        Ve = Q({
      get innerHTML() {
        return vc(this) ? dd("template" === this.localName ? this.content : this, Jc) : this.__shady_native_innerHTML;
      },

      set innerHTML(a) {
        if ("template" === this.localName) this.__shady_native_innerHTML = a;else {
          pe(this);
          var b = this.localName || "div";
          b = this.namespaceURI && this.namespaceURI !== Ue.namespaceURI ? Ue.createElementNS(this.namespaceURI, b) : Ue.createElement(b);

          for (N.H ? b.__shady_native_innerHTML = a : b.innerHTML = a; a = b.__shady_firstChild;) {
            this.__shady_insertBefore(a);
          }
        }
      }

    });
    var We = Q({
      blur: function blur() {
        var a = L(this);
        (a = (a = a && a.root) && a.activeElement) ? a.__shady_blur() : this.__shady_native_blur();
      }
    });
    N.fa || Yd.forEach(function (a) {
      We[a] = Zd(a);
    });
    var Xe = Q({
      assignedNodes: function assignedNodes(a) {
        if ("slot" === this.localName) {
          var b = this.__shady_getRootNode();

          b && O(b) && Ae(b);
          return (b = L(this)) ? (a && a.flatten ? b.aa : b.assignedNodes) || [] : [];
        }
      },
      addEventListener: function addEventListener(a, b, c) {
        if ("slot" !== this.localName || "slotchange" === a) Pd.call(this, a, b, c);else {
          "object" !== _typeof(c) && (c = {
            capture: !!c
          });
          var d = this.__shady_parentNode;
          if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
          c.U = this;

          d.__shady_addEventListener(a, b, c);
        }
      },
      removeEventListener: function removeEventListener(a, b, c) {
        if ("slot" !== this.localName || "slotchange" === a) Qd.call(this, a, b, c);else {
          "object" !== _typeof(c) && (c = {
            capture: !!c
          });
          var d = this.__shady_parentNode;
          if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
          c.U = this;

          d.__shady_removeEventListener(a, b, c);
        }
      }
    });
    var Ye = Q({
      getElementById: function getElementById(a) {
        return "" === a ? null : Ce(this, function (b) {
          return b.id == a;
        }, function (b) {
          return !!b;
        })[0] || null;
      }
    });

    function Ze(a, b) {
      for (var c; b && !a.has(c = b.__shady_getRootNode());) {
        b = c.host;
      }

      return b;
    }

    function $e(a) {
      var b = new Set();

      for (b.add(a); O(a) && a.host;) {
        a = a.host.__shady_getRootNode(), b.add(a);
      }

      return b;
    }

    var af = "__shady_native_" + uc(),
        bf = Q({
      get activeElement() {
        var a = N.H ? document.__shady_native_activeElement : document.activeElement;
        if (!a || !a.nodeType) return null;
        var b = !!O(this);
        if (!(this === document || b && this.host !== a && this.host.__shady_native_contains(a))) return null;

        for (b = te(a); b && b !== this;) {
          a = b.host, b = te(a);
        }

        return this === document ? b ? null : a : b === this ? a : null;
      },

      elementsFromPoint: function elementsFromPoint(a, b) {
        a = [].slice.call(document[af](a, b));
        b = $e(this);

        for (var c = new Set(), d = 0; d < a.length; d++) {
          c.add(Ze(b, a[d]));
        }

        var e = [];
        c.forEach(function (f) {
          return e.push(f);
        });
        return e;
      },
      elementFromPoint: function elementFromPoint(a, b) {
        return this.__shady_elementsFromPoint(a, b)[0] || null;
      }
    });
    var cf = window.document,
        df = Q({
      importNode: function importNode(a, b) {
        if (a.ownerDocument !== cf || "template" === a.localName) return this.__shady_native_importNode(a, b);

        var c = this.__shady_native_importNode(a, !1);

        if (b) for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
          b = this.__shady_importNode(a, !0), c.__shady_appendChild(b);
        }
        return c;
      }
    });
    var ef = Q({
      dispatchEvent: Nd,
      addEventListener: Pd.bind(window),
      removeEventListener: Qd.bind(window)
    });
    var ff = {};
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (ff.parentElement = ze.parentElement);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (ff.contains = ze.contains);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (ff.children = Fe.children);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (ff.innerHTML = Ve.innerHTML);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (ff.className = Oe.className);
    var gf = {
      EventTarget: [ce],
      Node: [ze, window.EventTarget ? null : ce],
      Text: [Be],
      Comment: [Be],
      CDATASection: [Be],
      ProcessingInstruction: [Be],
      Element: [Oe, Fe, Ie, Be, !N.H || "innerHTML" in Element.prototype ? Ve : null, window.HTMLSlotElement ? null : Xe],
      HTMLElement: [We, ff],
      HTMLSlotElement: [Xe],
      DocumentFragment: [He, Ye],
      Document: [df, He, Ye, bf],
      Window: [ef],
      CharacterData: [Ie]
    },
        hf = N.H ? null : ["innerHTML", "textContent"];

    function jf(a, b, c, d) {
      b.forEach(function (e) {
        return a && e && P(a, e, c, d);
      });
    }

    function kf(a) {
      var b = a ? null : hf,
          c;

      for (c in gf) {
        jf(window[c] && window[c].prototype, gf[c], a, b);
      }
    }

    ["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach(function (a) {
      var b = window[a],
          c = Object.create(b.prototype);
      c.__shady_protoIsPatched = !0;
      jf(c, gf.EventTarget);
      jf(c, gf.Node);
      gf[a] && jf(c, gf[a]);
      b.prototype.__shady_patchedProto = c;
    });

    function lf(a) {
      a.__shady_protoIsPatched = !0;
      jf(a, gf.EventTarget);
      jf(a, gf.Node);
      jf(a, gf.Element);
      jf(a, gf.HTMLElement);
      jf(a, gf.HTMLSlotElement);
      return a;
    }
    var mf = N.Aa,
        nf = N.H;

    function of(a, b) {
      if (mf && !a.__shady_protoIsPatched && !O(a)) {
        var c = Object.getPrototypeOf(a),
            d = c.hasOwnProperty("__shady_patchedProto") && c.__shady_patchedProto;

        d || (d = Object.create(c), lf(d), c.__shady_patchedProto = d);
        Object.setPrototypeOf(a, d);
      }

      nf || (1 === b ? vd(a) : 2 === b && wd(a));
    }

    function pf(a, b, c, d) {
      of(a, 1);
      d = d || null;
      var e = D(a),
          f = d ? D(d) : null;
      e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;
      if (f = L(e.previousSibling)) f.nextSibling = a;
      if (f = L(e.nextSibling = d)) f.previousSibling = a;
      e.parentNode = b;
      d ? d === c.firstChild && (c.firstChild = a) : (c.lastChild = a, c.firstChild || (c.firstChild = a));
      c.childNodes = null;
    }

    function we(a, b, c) {
      of(b, 2);
      var d = D(b);
      void 0 !== d.firstChild && (d.childNodes = null);
      if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) {
        pf(a, b, d, c);
      } else pf(a, b, d, c);
    }

    function ye(a, b) {
      var c = D(a);
      b = D(b);
      a === b.firstChild && (b.firstChild = c.nextSibling);
      a === b.lastChild && (b.lastChild = c.previousSibling);
      a = c.previousSibling;
      var d = c.nextSibling;
      a && (D(a).nextSibling = d);
      d && (D(d).previousSibling = a);
      c.parentNode = c.previousSibling = c.nextSibling = void 0;
      void 0 !== b.childNodes && (b.childNodes = null);
    }

    function Qe(a, b) {
      var c = D(a);

      if (b || void 0 === c.firstChild) {
        c.childNodes = null;
        var d = c.firstChild = a.__shady_native_firstChild;
        c.lastChild = a.__shady_native_lastChild;
        of(a, 2);
        c = d;

        for (d = void 0; c; c = c.__shady_native_nextSibling) {
          var e = D(c);
          e.parentNode = b || a;
          e.nextSibling = c.__shady_native_nextSibling;
          e.previousSibling = d || null;
          d = c;
          of(c, 1);
        }
      }
    }
    var qf = Q({
      addEventListener: function addEventListener(a, b, c) {
        "object" !== _typeof(c) && (c = {
          capture: !!c
        });
        c.U = c.U || this;

        this.host.__shady_addEventListener(a, b, c);
      },
      removeEventListener: function removeEventListener(a, b, c) {
        "object" !== _typeof(c) && (c = {
          capture: !!c
        });
        c.U = c.U || this;

        this.host.__shady_removeEventListener(a, b, c);
      }
    });

    function rf(a, b) {
      P(a, qf, b);
      P(a, bf, b);
      P(a, Ve, b);
      P(a, Fe, b);
      N.J && !b ? (P(a, ze, b), P(a, Ye, b)) : N.H || (P(a, sd), P(a, qd), P(a, rd));
    }
    var Se = {},
        sf = N.deferConnectionCallbacks && "loading" === document.readyState,
        tf;

    function uf(a) {
      var b = [];

      do {
        b.unshift(a);
      } while (a = a.__shady_parentNode);

      return b;
    }

    function Re(a, b, c) {
      if (a !== Se) throw new TypeError("Illegal constructor");
      this.g = null;
      Pe(this, b, c);
    }

    function Pe(a, b, c) {
      a.host = b;
      a.mode = c && c.mode;
      Qe(a.host);
      b = D(a.host);
      b.root = a;
      b.gb = "closed" !== a.mode ? a : null;
      b = D(a);
      b.firstChild = b.lastChild = b.parentNode = b.nextSibling = b.previousSibling = null;
      if (N.preferPerformance) for (; b = a.host.__shady_native_firstChild;) {
        a.host.__shady_native_removeChild(b);
      } else ve(a);
    }

    function ve(a) {
      a.Y || (a.Y = !0, Rc(function () {
        return Ae(a);
      }));
    }

    function Ae(a) {
      var b;

      if (b = a.Y) {
        for (var c; a;) {
          a: {
            a.Y && (c = a), b = a;
            a = b.host.__shady_getRootNode();
            if (O(a) && (b = L(b.host)) && 0 < b.ia) break a;
            a = void 0;
          }
        }

        b = c;
      }

      (c = b) && c._renderSelf();
    }

    Re.prototype._renderSelf = function () {
      var a = sf;
      sf = !0;
      this.Y = !1;

      if (this.g) {
        Le(this);

        for (var b = 0, c; b < this.g.length; b++) {
          c = this.g[b];
          var d = L(c),
              e = d.assignedNodes;
          d.assignedNodes = [];
          d.aa = [];
          if (d.Ga = e) for (d = 0; d < e.length; d++) {
            var f = L(e[d]);
            f.ua = f.assignedSlot;
            f.assignedSlot === c && (f.assignedSlot = null);
          }
        }

        for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) {
          vf(this, b);
        }

        for (b = 0; b < this.g.length; b++) {
          c = this.g[b];
          e = L(c);
          if (!e.assignedNodes.length) for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling) {
            vf(this, d, c);
          }
          (d = (d = L(c.__shady_parentNode)) && d.root) && (xc(d) || d.Y) && d._renderSelf();
          wf(this, e.aa, e.assignedNodes);

          if (d = e.Ga) {
            for (f = 0; f < d.length; f++) {
              L(d[f]).ua = null;
            }

            e.Ga = null;
            d.length > e.assignedNodes.length && (e.xa = !0);
          }

          e.xa && (e.xa = !1, xf(this, c));
        }

        c = this.g;
        b = [];

        for (e = 0; e < c.length; e++) {
          d = c[e].__shady_parentNode, (f = L(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);
        }

        for (c = 0; c < b.length; c++) {
          f = b[c];
          e = f === this ? this.host : f;
          d = [];

          for (f = f.__shady_firstChild; f; f = f.__shady_nextSibling) {
            if ("slot" == f.localName) for (var g = L(f).aa, h = 0; h < g.length; h++) {
              d.push(g[h]);
            } else d.push(f);
          }

          f = Ic(e);
          g = ae(d, d.length, f, f.length);

          for (var k = h = 0, l = void 0; h < g.length && (l = g[h]); h++) {
            for (var m = 0, q = void 0; m < l.ga.length && (q = l.ga[m]); m++) {
              q.__shady_native_parentNode === e && e.__shady_native_removeChild(q), f.splice(l.index + k, 1);
            }

            k -= l.na;
          }

          k = 0;

          for (l = void 0; k < g.length && (l = g[k]); k++) {
            for (h = f[l.index], m = l.index; m < l.index + l.na; m++) {
              q = d[m], e.__shady_native_insertBefore(q, h), f.splice(m, 0, q);
            }
          }
        }
      }

      if (!N.preferPerformance && !this.Fa) for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) {
        c = L(b), b.__shady_native_parentNode !== this.host || "slot" !== b.localName && c.assignedSlot || this.host.__shady_native_removeChild(b);
      }
      this.Fa = !0;
      sf = a;
      tf && tf();
    };

    function vf(a, b, c) {
      var d = D(b),
          e = d.ua;
      d.ua = null;
      c || (c = (a = a.h[b.__shady_slot || "__catchall"]) && a[0]);
      c ? (D(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;
      e !== d.assignedSlot && d.assignedSlot && (D(d.assignedSlot).xa = !0);
    }

    function wf(a, b, c) {
      for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++) {
        if ("slot" == e.localName) {
          var f = L(e).assignedNodes;
          f && f.length && wf(a, b, f);
        } else b.push(c[d]);
      }
    }

    function xf(a, b) {
      b.__shady_native_dispatchEvent(new Event("slotchange"));

      b = L(b);
      b.assignedSlot && xf(a, b.assignedSlot);
    }

    function ue(a) {
      a.i = a.i || [];
      a.g = a.g || [];
      a.h = a.h || {};
    }

    function Le(a) {
      if (a.i && a.i.length) {
        for (var b = a.i, c, d = 0; d < b.length; d++) {
          var e = b[d];
          Qe(e);
          var f = e.__shady_parentNode;
          Qe(f);
          f = L(f);
          f.ia = (f.ia || 0) + 1;
          f = Me(e);
          a.h[f] ? (c = c || {}, c[f] = !0, a.h[f].push(e)) : a.h[f] = [e];
          a.g.push(e);
        }

        if (c) for (var g in c) {
          a.h[g] = Ne(a.h[g]);
        }
        a.i = [];
      }
    }

    function Me(a) {
      var b = a.name || a.getAttribute("name") || "__catchall";
      return a.Qa = b;
    }

    function Ne(a) {
      return a.sort(function (b, c) {
        b = uf(b);

        for (var d = uf(c), e = 0; e < b.length; e++) {
          c = b[e];
          var f = d[e];
          if (c !== f) return b = Jc(c.__shady_parentNode), b.indexOf(c) - b.indexOf(f);
        }
      });
    }

    function xe(a, b) {
      if (a.g) {
        Le(a);
        var c = a.h,
            d;

        for (d in c) {
          for (var e = c[d], f = 0; f < e.length; f++) {
            var g = e[f];

            if (Gc(b, g)) {
              e.splice(f, 1);
              var h = a.g.indexOf(g);
              0 <= h && (a.g.splice(h, 1), (h = L(g.__shady_parentNode)) && h.ia && h.ia--);
              f--;
              g = L(g);
              if (h = g.aa) for (var k = 0; k < h.length; k++) {
                var l = h[k],
                    m = l.__shady_native_parentNode;
                m && m.__shady_native_removeChild(l);
              }
              g.aa = [];
              g.assignedNodes = [];
              h = !0;
            }
          }
        }

        return h;
      }
    }

    function xc(a) {
      Le(a);
      return !(!a.g || !a.g.length);
    }

    (function (a) {
      a.__proto__ = DocumentFragment.prototype;
      rf(a, "__shady_");
      rf(a);
      Object.defineProperties(a, {
        nodeType: {
          value: Node.DOCUMENT_FRAGMENT_NODE,
          configurable: !0
        },
        nodeName: {
          value: "#document-fragment",
          configurable: !0
        },
        nodeValue: {
          value: null,
          configurable: !0
        }
      });
      ["localName", "namespaceURI", "prefix"].forEach(function (b) {
        Object.defineProperty(a, b, {
          value: void 0,
          configurable: !0
        });
      });
      ["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
        Object.defineProperty(a, b, {
          get: function get() {
            return this.host[b];
          },
          configurable: !0
        });
      });
    })(Re.prototype);

    if (window.customElements && window.customElements.define && N.ya && !N.preferPerformance) {
      var yf = new Map();

      tf = function tf() {
        var a = [];
        yf.forEach(function (d, e) {
          a.push([e, d]);
        });
        yf.clear();

        for (var b = 0; b < a.length; b++) {
          var c = a[b][0];
          a[b][1] ? c.__shadydom_connectedCallback() : c.__shadydom_disconnectedCallback();
        }
      };

      sf && document.addEventListener("readystatechange", function () {
        sf = !1;
        tf();
      }, {
        once: !0
      });

      var zf = function zf(a, b, c) {
        var d = 0,
            e = "__isConnected" + d++;
        if (b || c) a.prototype.connectedCallback = a.prototype.__shadydom_connectedCallback = function () {
          sf ? yf.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this));
        }, a.prototype.disconnectedCallback = a.prototype.__shadydom_disconnectedCallback = function () {
          sf ? this.isConnected || yf.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this));
        };
        return a;
      },
          Af = window.customElements.define,
          Bf = function Bf(a, b) {
        var c = b.prototype.connectedCallback,
            d = b.prototype.disconnectedCallback;
        Af.call(window.customElements, a, zf(b, c, d));
        b.prototype.connectedCallback = c;
        b.prototype.disconnectedCallback = d;
      };

      window.customElements.define = Bf;
      Object.defineProperty(window.CustomElementRegistry.prototype, "define", {
        value: Bf,
        configurable: !0
      });
    }

    function te(a) {
      a = a.__shady_getRootNode();
      if (O(a)) return a;
    }

    function Cf(a) {
      this.node = a;
    }

    v = Cf.prototype;

    v.addEventListener = function (a, b, c) {
      return this.node.__shady_addEventListener(a, b, c);
    };

    v.removeEventListener = function (a, b, c) {
      return this.node.__shady_removeEventListener(a, b, c);
    };

    v.appendChild = function (a) {
      return this.node.__shady_appendChild(a);
    };

    v.insertBefore = function (a, b) {
      return this.node.__shady_insertBefore(a, b);
    };

    v.removeChild = function (a) {
      return this.node.__shady_removeChild(a);
    };

    v.replaceChild = function (a, b) {
      return this.node.__shady_replaceChild(a, b);
    };

    v.cloneNode = function (a) {
      return this.node.__shady_cloneNode(a);
    };

    v.getRootNode = function (a) {
      return this.node.__shady_getRootNode(a);
    };

    v.contains = function (a) {
      return this.node.__shady_contains(a);
    };

    v.dispatchEvent = function (a) {
      return this.node.__shady_dispatchEvent(a);
    };

    v.setAttribute = function (a, b) {
      this.node.__shady_setAttribute(a, b);
    };

    v.getAttribute = function (a) {
      return this.node.__shady_native_getAttribute(a);
    };

    v.hasAttribute = function (a) {
      return this.node.__shady_native_hasAttribute(a);
    };

    v.removeAttribute = function (a) {
      this.node.__shady_removeAttribute(a);
    };

    v.attachShadow = function (a) {
      return this.node.__shady_attachShadow(a);
    };

    v.focus = function () {
      this.node.__shady_native_focus();
    };

    v.blur = function () {
      this.node.__shady_blur();
    };

    v.importNode = function (a, b) {
      if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(a, b);
    };

    v.getElementById = function (a) {
      if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(a);
    };

    v.elementsFromPoint = function (a, b) {
      return this.node.__shady_elementsFromPoint(a, b);
    };

    v.elementFromPoint = function (a, b) {
      return this.node.__shady_elementFromPoint(a, b);
    };

    v.querySelector = function (a) {
      return this.node.__shady_querySelector(a);
    };

    v.querySelectorAll = function (a, b) {
      return this.node.__shady_querySelectorAll(a, b);
    };

    v.assignedNodes = function (a) {
      if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(a);
    };

    v.append = function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) {
        b[c] = arguments[c];
      }

      return this.node.__shady_append.apply(this.node, x(b));
    };

    v.prepend = function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) {
        b[c] = arguments[c];
      }

      return this.node.__shady_prepend.apply(this.node, x(b));
    };

    v.after = function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) {
        b[c] = arguments[c];
      }

      return this.node.__shady_after.apply(this.node, x(b));
    };

    v.before = function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) {
        b[c] = arguments[c];
      }

      return this.node.__shady_before.apply(this.node, x(b));
    };

    v.remove = function () {
      return this.node.__shady_remove();
    };

    v.replaceWith = function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) {
        b[c] = arguments[c];
      }

      return this.node.__shady_replaceWith.apply(this.node, x(b));
    };

    ea.Object.defineProperties(Cf.prototype, {
      activeElement: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          if (O(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement;
        }
      },
      _activeElement: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.activeElement;
        }
      },
      host: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          if (O(this.node)) return this.node.host;
        }
      },
      parentNode: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_parentNode;
        }
      },
      firstChild: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_firstChild;
        }
      },
      lastChild: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_lastChild;
        }
      },
      nextSibling: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_nextSibling;
        }
      },
      previousSibling: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_previousSibling;
        }
      },
      childNodes: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_childNodes;
        }
      },
      parentElement: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_parentElement;
        }
      },
      firstElementChild: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_firstElementChild;
        }
      },
      lastElementChild: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_lastElementChild;
        }
      },
      nextElementSibling: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_nextElementSibling;
        }
      },
      previousElementSibling: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_previousElementSibling;
        }
      },
      children: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_children;
        }
      },
      childElementCount: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_childElementCount;
        }
      },
      shadowRoot: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_shadowRoot;
        }
      },
      assignedSlot: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_assignedSlot;
        }
      },
      isConnected: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_isConnected;
        }
      },
      innerHTML: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_innerHTML;
        },
        set: function set(a) {
          this.node.__shady_innerHTML = a;
        }
      },
      textContent: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_textContent;
        },
        set: function set(a) {
          this.node.__shady_textContent = a;
        }
      },
      slot: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_slot;
        },
        set: function set(a) {
          this.node.__shady_slot = a;
        }
      },
      className: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return this.node.__shady_className;
        },
        set: function set(a) {
          this.node.__shady_className = a;
        }
      }
    });

    function Df(a) {
      Object.defineProperty(Cf.prototype, a, {
        get: function get() {
          return this.node["__shady_" + a];
        },
        set: function set(b) {
          this.node["__shady_" + a] = b;
        },
        configurable: !0
      });
    }

    Xd.forEach(function (a) {
      return Df(a);
    });
    Yd.forEach(function (a) {
      return Df(a);
    });
    var Ef = new WeakMap();

    function Ff(a) {
      if (O(a) || a instanceof Cf) return a;
      var b = Ef.get(a);
      b || (b = new Cf(a), Ef.set(a, b));
      return b;
    }

    if (N.ya) {
      var Gf = N.H ? function (a) {
        return a;
      } : function (a) {
        wd(a);
        vd(a);
        return a;
      },
          ShadyDOM = {
        inUse: N.ya,
        patch: Gf,
        isShadyRoot: O,
        enqueue: Rc,
        flush: Sc,
        flushInitial: function flushInitial(a) {
          !a.Fa && a.Y && Ae(a);
        },
        settings: N,
        filterMutations: Xc,
        observeChildren: Vc,
        unobserveChildren: Wc,
        deferConnectionCallbacks: N.deferConnectionCallbacks,
        preferPerformance: N.preferPerformance,
        handlesDynamicScoping: !0,
        wrap: N.J ? Ff : Gf,
        wrapIfNeeded: !0 === N.J ? Ff : function (a) {
          return a;
        },
        Wrapper: Cf,
        composedPath: Fd,
        noPatch: N.J,
        patchOnDemand: N.Aa,
        nativeMethods: fd,
        nativeTree: gd,
        patchElementProto: lf
      };
      window.ShadyDOM = ShadyDOM;
      pd();
      kf("__shady_");
      Object.defineProperty(document, "_activeElement", bf.activeElement);
      P(Window.prototype, ef, "__shady_");
      N.J ? N.Aa && P(Element.prototype, Te) : (kf(), Wd());
      Rd();
      window.Event = Td;
      window.CustomEvent = Ud;
      window.MouseEvent = Vd;
      window.ShadowRoot = Re;
    }
    var Hf = window.Document.prototype.createElement,
        If = window.Document.prototype.createElementNS,
        Jf = window.Document.prototype.importNode,
        Kf = window.Document.prototype.prepend,
        Lf = window.Document.prototype.append,
        Mf = window.DocumentFragment.prototype.prepend,
        Nf = window.DocumentFragment.prototype.append,
        Of = window.Node.prototype.cloneNode,
        Pf = window.Node.prototype.appendChild,
        Qf = window.Node.prototype.insertBefore,
        Rf = window.Node.prototype.removeChild,
        Sf = window.Node.prototype.replaceChild,
        Tf = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
        Uf = window.Element.prototype.attachShadow,
        Vf = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
        Wf = window.Element.prototype.getAttribute,
        Xf = window.Element.prototype.setAttribute,
        Yf = window.Element.prototype.removeAttribute,
        Zf = window.Element.prototype.getAttributeNS,
        $f = window.Element.prototype.setAttributeNS,
        ag = window.Element.prototype.removeAttributeNS,
        bg = window.Element.prototype.insertAdjacentElement,
        cg = window.Element.prototype.insertAdjacentHTML,
        dg = window.Element.prototype.prepend,
        eg = window.Element.prototype.append,
        fg = window.Element.prototype.before,
        gg = window.Element.prototype.after,
        hg = window.Element.prototype.replaceWith,
        ig = window.Element.prototype.remove,
        jg = window.HTMLElement,
        kg = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
        lg = window.HTMLElement.prototype.insertAdjacentElement,
        mg = window.HTMLElement.prototype.insertAdjacentHTML;
    var ng = new Set();
    "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function (a) {
      return ng.add(a);
    });

    function og(a) {
      var b = ng.has(a);
      a = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);
      return !b && a;
    }

    var pg = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);

    function T(a) {
      var b = a.isConnected;
      if (void 0 !== b) return b;
      if (pg(a)) return !0;

      for (; a && !(a.__CE_isImportDocument || a instanceof Document);) {
        a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
      }

      return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
    }

    function qg(a) {
      var b = a.children;
      if (b) return Array.prototype.slice.call(b);
      b = [];

      for (a = a.firstChild; a; a = a.nextSibling) {
        a.nodeType === Node.ELEMENT_NODE && b.push(a);
      }

      return b;
    }

    function rg(a, b) {
      for (; b && b !== a && !b.nextSibling;) {
        b = b.parentNode;
      }

      return b && b !== a ? b.nextSibling : null;
    }

    function sg(a, b, c) {
      for (var d = a; d;) {
        if (d.nodeType === Node.ELEMENT_NODE) {
          var e = d;
          b(e);
          var f = e.localName;

          if ("link" === f && "import" === e.getAttribute("rel")) {
            d = e["import"];
            void 0 === c && (c = new Set());
            if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) {
              sg(d, b, c);
            }
            d = rg(a, e);
            continue;
          } else if ("template" === f) {
            d = rg(a, e);
            continue;
          }

          if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) {
            sg(e, b, c);
          }
        }

        d = d.firstChild ? d.firstChild : rg(a, d);
      }
    }

    function tg() {
      var a = !(null === ug || void 0 === ug || !ug.noDocumentConstructionObserver),
          b = !(null === ug || void 0 === ug || !ug.shadyDomFastWalk);
      this.ca = [];
      this.g = [];
      this.W = !1;
      this.shadyDomFastWalk = b;
      this.nb = !a;
    }

    function vg(a, b, c, d) {
      var e = window.ShadyDOM;

      if (a.shadyDomFastWalk && e && e.inUse) {
        if (b.nodeType === Node.ELEMENT_NODE && c(b), b.querySelectorAll) for (a = e.nativeMethods.querySelectorAll.call(b, "*"), b = 0; b < a.length; b++) {
          c(a[b]);
        }
      } else sg(b, c, d);
    }

    function wg(a, b) {
      a.W = !0;
      a.ca.push(b);
    }

    function xg(a, b) {
      a.W = !0;
      a.g.push(b);
    }

    function yg(a, b) {
      a.W && vg(a, b, function (c) {
        return zg(a, c);
      });
    }

    function zg(a, b) {
      if (a.W && !b.__CE_patched) {
        b.__CE_patched = !0;

        for (var c = 0; c < a.ca.length; c++) {
          a.ca[c](b);
        }

        for (c = 0; c < a.g.length; c++) {
          a.g[c](b);
        }
      }
    }

    function Ag(a, b) {
      var c = [];
      vg(a, b, function (e) {
        return c.push(e);
      });

      for (b = 0; b < c.length; b++) {
        var d = c[b];
        1 === d.__CE_state ? a.connectedCallback(d) : Bg(a, d);
      }
    }

    function Cg(a, b) {
      var c = [];
      vg(a, b, function (e) {
        return c.push(e);
      });

      for (b = 0; b < c.length; b++) {
        var d = c[b];
        1 === d.__CE_state && a.disconnectedCallback(d);
      }
    }

    function Dg(a, b, c) {
      c = void 0 === c ? {} : c;

      var d = c.ob,
          e = c.upgrade || function (g) {
        return Bg(a, g);
      },
          f = [];

      vg(a, b, function (g) {
        a.W && zg(a, g);

        if ("link" === g.localName && "import" === g.getAttribute("rel")) {
          var h = g["import"];
          h instanceof Node && (h.__CE_isImportDocument = !0, h.__CE_registry = document.__CE_registry);
          h && "complete" === h.readyState ? h.__CE_documentLoadHandled = !0 : g.addEventListener("load", function () {
            var k = g["import"];

            if (!k.__CE_documentLoadHandled) {
              k.__CE_documentLoadHandled = !0;
              var l = new Set();
              d && (d.forEach(function (m) {
                return l.add(m);
              }), l["delete"](k));
              Dg(a, k, {
                ob: l,
                upgrade: e
              });
            }
          });
        } else f.push(g);
      }, d);

      for (b = 0; b < f.length; b++) {
        e(f[b]);
      }
    }

    function Bg(a, b) {
      try {
        var c = b.ownerDocument,
            d = c.__CE_registry;
        var e = d && (c.defaultView || c.__CE_isImportDocument) ? Eg(d, b.localName) : void 0;

        if (e && void 0 === b.__CE_state) {
          e.constructionStack.push(b);

          try {
            try {
              if (new e.constructorFunction() !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
            } finally {
              e.constructionStack.pop();
            }
          } catch (k) {
            throw b.__CE_state = 2, k;
          }

          b.__CE_state = 1;
          b.__CE_definition = e;

          if (e.attributeChangedCallback && b.hasAttributes()) {
            var f = e.observedAttributes;

            for (e = 0; e < f.length; e++) {
              var g = f[e],
                  h = b.getAttribute(g);
              null !== h && a.attributeChangedCallback(b, g, null, h, null);
            }
          }

          T(b) && a.connectedCallback(b);
        }
      } catch (k) {
        Fg(k);
      }
    }

    tg.prototype.connectedCallback = function (a) {
      var b = a.__CE_definition;
      if (b.connectedCallback) try {
        b.connectedCallback.call(a);
      } catch (c) {
        Fg(c);
      }
    };

    tg.prototype.disconnectedCallback = function (a) {
      var b = a.__CE_definition;
      if (b.disconnectedCallback) try {
        b.disconnectedCallback.call(a);
      } catch (c) {
        Fg(c);
      }
    };

    tg.prototype.attributeChangedCallback = function (a, b, c, d, e) {
      var f = a.__CE_definition;
      if (f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b)) try {
        f.attributeChangedCallback.call(a, b, c, d, e);
      } catch (g) {
        Fg(g);
      }
    };

    function Gg(a, b, c, d) {
      var e = b.__CE_registry;
      if (e && (null === d || "http://www.w3.org/1999/xhtml" === d) && (e = Eg(e, c))) try {
        var f = new e.constructorFunction();
        if (void 0 === f.__CE_state || void 0 === f.__CE_definition) throw Error("Failed to construct '" + c + "': The returned value was not constructed with the HTMLElement constructor.");
        if ("http://www.w3.org/1999/xhtml" !== f.namespaceURI) throw Error("Failed to construct '" + c + "': The constructed element's namespace must be the HTML namespace.");
        if (f.hasAttributes()) throw Error("Failed to construct '" + c + "': The constructed element must not have any attributes.");
        if (null !== f.firstChild) throw Error("Failed to construct '" + c + "': The constructed element must not have any children.");
        if (null !== f.parentNode) throw Error("Failed to construct '" + c + "': The constructed element must not have a parent node.");
        if (f.ownerDocument !== b) throw Error("Failed to construct '" + c + "': The constructed element's owner document is incorrect.");
        if (f.localName !== c) throw Error("Failed to construct '" + c + "': The constructed element's local name is incorrect.");
        return f;
      } catch (g) {
        return Fg(g), b = null === d ? Hf.call(b, c) : If.call(b, d, c), Object.setPrototypeOf(b, HTMLUnknownElement.prototype), b.__CE_state = 2, b.__CE_definition = void 0, zg(a, b), b;
      }
      b = null === d ? Hf.call(b, c) : If.call(b, d, c);
      zg(a, b);
      return b;
    }

    function Fg(a) {
      var b = a.message,
          c = a.sourceURL || a.fileName || "",
          d = a.line || a.lineNumber || 0,
          e = a.column || a.columnNumber || 0,
          f = void 0;
      void 0 === ErrorEvent.prototype.initErrorEvent ? f = new ErrorEvent("error", {
        cancelable: !0,
        message: b,
        filename: c,
        lineno: d,
        colno: e,
        error: a
      }) : (f = document.createEvent("ErrorEvent"), f.initErrorEvent("error", !1, !0, b, c, d), f.preventDefault = function () {
        Object.defineProperty(this, "defaultPrevented", {
          configurable: !0,
          get: function get() {
            return !0;
          }
        });
      });
      void 0 === f.error && Object.defineProperty(f, "error", {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return a;
        }
      });
      window.dispatchEvent(f);
      f.defaultPrevented || console.error(a);
    }

    function Hg() {
      var a = this;
      this.I = void 0;
      this.Ha = new Promise(function (b) {
        a.g = b;
      });
    }

    Hg.prototype.resolve = function (a) {
      if (this.I) throw Error("Already resolved.");
      this.I = a;
      this.g(a);
    };

    function Ig(a) {
      var b = document;
      this.X = void 0;
      this.S = a;
      this.g = b;
      Dg(this.S, this.g);
      "loading" === this.g.readyState && (this.X = new MutationObserver(this.h.bind(this)), this.X.observe(this.g, {
        childList: !0,
        subtree: !0
      }));
    }

    function Jg(a) {
      a.X && a.X.disconnect();
    }

    Ig.prototype.h = function (a) {
      var b = this.g.readyState;
      "interactive" !== b && "complete" !== b || Jg(this);

      for (b = 0; b < a.length; b++) {
        for (var c = a[b].addedNodes, d = 0; d < c.length; d++) {
          Dg(this.S, c[d]);
        }
      }
    };

    function U(a) {
      this.ka = new Map();
      this.la = new Map();
      this.Ca = new Map();
      this.ta = !1;
      this.wa = new Map();

      this.ja = function (b) {
        return b();
      };

      this.V = !1;
      this.ma = [];
      this.S = a;
      this.Da = a.nb ? new Ig(a) : void 0;
    }

    v = U.prototype;

    v.eb = function (a, b) {
      var c = this;
      if (!(b instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");
      Kg(this, a);
      this.ka.set(a, b);
      this.ma.push(a);
      this.V || (this.V = !0, this.ja(function () {
        return Lg(c);
      }));
    };

    v.define = function (a, b) {
      var c = this;
      if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
      Kg(this, a);
      Mg(this, a, b);
      this.ma.push(a);
      this.V || (this.V = !0, this.ja(function () {
        return Lg(c);
      }));
    };

    function Kg(a, b) {
      if (!og(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");
      if (Eg(a, b)) throw Error("A custom element with name '" + (b + "' has already been defined."));
      if (a.ta) throw Error("A custom element is already being defined.");
    }

    function Mg(a, b, c) {
      a.ta = !0;
      var d;

      try {
        var e = c.prototype;
        if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");

        var f = function f(m) {
          var q = e[m];
          if (void 0 !== q && !(q instanceof Function)) throw Error("The '" + m + "' callback must be a function.");
          return q;
        };

        var g = f("connectedCallback");
        var h = f("disconnectedCallback");
        var k = f("adoptedCallback");
        var l = (d = f("attributeChangedCallback")) && c.observedAttributes || [];
      } catch (m) {
        throw m;
      } finally {
        a.ta = !1;
      }

      c = {
        localName: b,
        constructorFunction: c,
        connectedCallback: g,
        disconnectedCallback: h,
        adoptedCallback: k,
        attributeChangedCallback: d,
        observedAttributes: l,
        constructionStack: []
      };
      a.la.set(b, c);
      a.Ca.set(c.constructorFunction, c);
      return c;
    }

    v.upgrade = function (a) {
      Dg(this.S, a);
    };

    function Lg(a) {
      if (!1 !== a.V) {
        a.V = !1;

        for (var b = [], c = a.ma, d = new Map(), e = 0; e < c.length; e++) {
          d.set(c[e], []);
        }

        Dg(a.S, document, {
          upgrade: function upgrade(k) {
            if (void 0 === k.__CE_state) {
              var l = k.localName,
                  m = d.get(l);
              m ? m.push(k) : a.la.has(l) && b.push(k);
            }
          }
        });

        for (e = 0; e < b.length; e++) {
          Bg(a.S, b[e]);
        }

        for (e = 0; e < c.length; e++) {
          for (var f = c[e], g = d.get(f), h = 0; h < g.length; h++) {
            Bg(a.S, g[h]);
          }

          (f = a.wa.get(f)) && f.resolve(void 0);
        }

        c.length = 0;
      }
    }

    v.get = function (a) {
      if (a = Eg(this, a)) return a.constructorFunction;
    };

    v.whenDefined = function (a) {
      if (!og(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
      var b = this.wa.get(a);
      if (b) return b.Ha;
      b = new Hg();
      this.wa.set(a, b);
      var c = this.la.has(a) || this.ka.has(a);
      a = -1 === this.ma.indexOf(a);
      c && a && b.resolve(void 0);
      return b.Ha;
    };

    v.polyfillWrapFlushCallback = function (a) {
      this.Da && Jg(this.Da);
      var b = this.ja;

      this.ja = function (c) {
        return a(function () {
          return b(c);
        });
      };
    };

    function Eg(a, b) {
      var c = a.la.get(b);
      if (c) return c;

      if (c = a.ka.get(b)) {
        a.ka["delete"](b);

        try {
          return Mg(a, b, c());
        } catch (d) {
          Fg(d);
        }
      }
    }

    window.CustomElementRegistry = U;
    U.prototype.define = U.prototype.define;
    U.prototype.upgrade = U.prototype.upgrade;
    U.prototype.get = U.prototype.get;
    U.prototype.whenDefined = U.prototype.whenDefined;
    U.prototype.polyfillDefineLazy = U.prototype.eb;
    U.prototype.polyfillWrapFlushCallback = U.prototype.polyfillWrapFlushCallback;

    function Ng(a, b, c) {
      function d(e) {
        return function (f) {
          for (var g = [], h = 0; h < arguments.length; ++h) {
            g[h] = arguments[h];
          }

          h = [];

          for (var k = [], l = 0; l < g.length; l++) {
            var m = g[l];
            m instanceof Element && T(m) && k.push(m);
            if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) {
              h.push(m);
            } else h.push(m);
          }

          e.apply(this, g);

          for (g = 0; g < k.length; g++) {
            Cg(a, k[g]);
          }

          if (T(this)) for (g = 0; g < h.length; g++) {
            k = h[g], k instanceof Element && Ag(a, k);
          }
        };
      }

      void 0 !== c.prepend && (b.prepend = d(c.prepend));
      void 0 !== c.append && (b.append = d(c.append));
    }

    function Og(a) {
      Document.prototype.createElement = function (b) {
        return Gg(a, this, b, null);
      };

      Document.prototype.importNode = function (b, c) {
        b = Jf.call(this, b, !!c);
        this.__CE_registry ? Dg(a, b) : yg(a, b);
        return b;
      };

      Document.prototype.createElementNS = function (b, c) {
        return Gg(a, this, c, b);
      };

      Ng(a, Document.prototype, {
        prepend: Kf,
        append: Lf
      });
    }

    function Pg(a) {
      function b(d) {
        return function (e) {
          for (var f = [], g = 0; g < arguments.length; ++g) {
            f[g] = arguments[g];
          }

          g = [];

          for (var h = [], k = 0; k < f.length; k++) {
            var l = f[k];
            l instanceof Element && T(l) && h.push(l);
            if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) {
              g.push(l);
            } else g.push(l);
          }

          d.apply(this, f);

          for (f = 0; f < h.length; f++) {
            Cg(a, h[f]);
          }

          if (T(this)) for (f = 0; f < g.length; f++) {
            h = g[f], h instanceof Element && Ag(a, h);
          }
        };
      }

      var c = Element.prototype;
      void 0 !== fg && (c.before = b(fg));
      void 0 !== gg && (c.after = b(gg));
      void 0 !== hg && (c.replaceWith = function (d) {
        for (var e = [], f = 0; f < arguments.length; ++f) {
          e[f] = arguments[f];
        }

        f = [];

        for (var g = [], h = 0; h < e.length; h++) {
          var k = e[h];
          k instanceof Element && T(k) && g.push(k);
          if (k instanceof DocumentFragment) for (k = k.firstChild; k; k = k.nextSibling) {
            f.push(k);
          } else f.push(k);
        }

        h = T(this);
        hg.apply(this, e);

        for (e = 0; e < g.length; e++) {
          Cg(a, g[e]);
        }

        if (h) for (Cg(a, this), e = 0; e < f.length; e++) {
          g = f[e], g instanceof Element && Ag(a, g);
        }
      });
      void 0 !== ig && (c.remove = function () {
        var d = T(this);
        ig.call(this);
        d && Cg(a, this);
      });
    }

    function Qg(a) {
      function b(e, f) {
        Object.defineProperty(e, "innerHTML", {
          enumerable: f.enumerable,
          configurable: !0,
          get: f.get,
          set: function set(g) {
            var h = this,
                k = void 0;
            T(this) && (k = [], vg(a, this, function (q) {
              q !== h && k.push(q);
            }));
            f.set.call(this, g);
            if (k) for (var l = 0; l < k.length; l++) {
              var m = k[l];
              1 === m.__CE_state && a.disconnectedCallback(m);
            }
            this.ownerDocument.__CE_registry ? Dg(a, this) : yg(a, this);
            return g;
          }
        });
      }

      function c(e, f) {
        e.insertAdjacentElement = function (g, h) {
          var k = T(h);
          g = f.call(this, g, h);
          k && Cg(a, h);
          T(g) && Ag(a, h);
          return g;
        };
      }

      function d(e, f) {
        function g(h, k) {
          for (var l = []; h !== k; h = h.nextSibling) {
            l.push(h);
          }

          for (k = 0; k < l.length; k++) {
            Dg(a, l[k]);
          }
        }

        e.insertAdjacentHTML = function (h, k) {
          h = h.toLowerCase();

          if ("beforebegin" === h) {
            var l = this.previousSibling;
            f.call(this, h, k);
            g(l || this.parentNode.firstChild, this);
          } else if ("afterbegin" === h) l = this.firstChild, f.call(this, h, k), g(this.firstChild, l);else if ("beforeend" === h) l = this.lastChild, f.call(this, h, k), g(l || this.firstChild, null);else if ("afterend" === h) l = this.nextSibling, f.call(this, h, k), g(this.nextSibling, l);else throw new SyntaxError("The value provided (" + String(h) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
        };
      }

      Uf && (Element.prototype.attachShadow = function (e) {
        e = Uf.call(this, e);

        if (a.W && !e.__CE_patched) {
          e.__CE_patched = !0;

          for (var f = 0; f < a.ca.length; f++) {
            a.ca[f](e);
          }
        }

        return this.__CE_shadowRoot = e;
      });
      Vf && Vf.get ? b(Element.prototype, Vf) : kg && kg.get ? b(HTMLElement.prototype, kg) : xg(a, function (e) {
        b(e, {
          enumerable: !0,
          configurable: !0,
          get: function get() {
            return Of.call(this, !0).innerHTML;
          },
          set: function set(f) {
            var g = "template" === this.localName,
                h = g ? this.content : this,
                k = If.call(document, this.namespaceURI, this.localName);

            for (k.innerHTML = f; 0 < h.childNodes.length;) {
              Rf.call(h, h.childNodes[0]);
            }

            for (f = g ? k.content : k; 0 < f.childNodes.length;) {
              Pf.call(h, f.childNodes[0]);
            }
          }
        });
      });

      Element.prototype.setAttribute = function (e, f) {
        if (1 !== this.__CE_state) return Xf.call(this, e, f);
        var g = Wf.call(this, e);
        Xf.call(this, e, f);
        f = Wf.call(this, e);
        a.attributeChangedCallback(this, e, g, f, null);
      };

      Element.prototype.setAttributeNS = function (e, f, g) {
        if (1 !== this.__CE_state) return $f.call(this, e, f, g);
        var h = Zf.call(this, e, f);
        $f.call(this, e, f, g);
        g = Zf.call(this, e, f);
        a.attributeChangedCallback(this, f, h, g, e);
      };

      Element.prototype.removeAttribute = function (e) {
        if (1 !== this.__CE_state) return Yf.call(this, e);
        var f = Wf.call(this, e);
        Yf.call(this, e);
        null !== f && a.attributeChangedCallback(this, e, f, null, null);
      };

      Element.prototype.removeAttributeNS = function (e, f) {
        if (1 !== this.__CE_state) return ag.call(this, e, f);
        var g = Zf.call(this, e, f);
        ag.call(this, e, f);
        var h = Zf.call(this, e, f);
        g !== h && a.attributeChangedCallback(this, f, g, h, e);
      };

      lg ? c(HTMLElement.prototype, lg) : bg && c(Element.prototype, bg);
      mg ? d(HTMLElement.prototype, mg) : cg && d(Element.prototype, cg);
      Ng(a, Element.prototype, {
        prepend: dg,
        append: eg
      });
      Pg(a);
    }
    var Rg = {};

    function Sg(a) {
      function b() {
        var c = this.constructor;

        var d = document.__CE_registry.Ca.get(c);

        if (!d) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
        var e = d.constructionStack;
        if (0 === e.length) return e = Hf.call(document, d.localName), Object.setPrototypeOf(e, c.prototype), e.__CE_state = 1, e.__CE_definition = d, zg(a, e), e;
        var f = e.length - 1,
            g = e[f];
        if (g === Rg) throw Error("Failed to construct '" + d.localName + "': This element was already constructed.");
        e[f] = Rg;
        Object.setPrototypeOf(g, c.prototype);
        zg(a, g);
        return g;
      }

      b.prototype = jg.prototype;
      Object.defineProperty(HTMLElement.prototype, "constructor", {
        writable: !0,
        configurable: !0,
        enumerable: !1,
        value: b
      });
      window.HTMLElement = b;
    }

    function Tg(a) {
      function b(c, d) {
        Object.defineProperty(c, "textContent", {
          enumerable: d.enumerable,
          configurable: !0,
          get: d.get,
          set: function set(e) {
            if (this.nodeType === Node.TEXT_NODE) d.set.call(this, e);else {
              var f = void 0;

              if (this.firstChild) {
                var g = this.childNodes,
                    h = g.length;

                if (0 < h && T(this)) {
                  f = Array(h);

                  for (var k = 0; k < h; k++) {
                    f[k] = g[k];
                  }
                }
              }

              d.set.call(this, e);
              if (f) for (e = 0; e < f.length; e++) {
                Cg(a, f[e]);
              }
            }
          }
        });
      }

      Node.prototype.insertBefore = function (c, d) {
        if (c instanceof DocumentFragment) {
          var e = qg(c);
          c = Qf.call(this, c, d);
          if (T(this)) for (d = 0; d < e.length; d++) {
            Ag(a, e[d]);
          }
          return c;
        }

        e = c instanceof Element && T(c);
        d = Qf.call(this, c, d);
        e && Cg(a, c);
        T(this) && Ag(a, c);
        return d;
      };

      Node.prototype.appendChild = function (c) {
        if (c instanceof DocumentFragment) {
          var d = qg(c);
          c = Pf.call(this, c);
          if (T(this)) for (var e = 0; e < d.length; e++) {
            Ag(a, d[e]);
          }
          return c;
        }

        d = c instanceof Element && T(c);
        e = Pf.call(this, c);
        d && Cg(a, c);
        T(this) && Ag(a, c);
        return e;
      };

      Node.prototype.cloneNode = function (c) {
        c = Of.call(this, !!c);
        this.ownerDocument.__CE_registry ? Dg(a, c) : yg(a, c);
        return c;
      };

      Node.prototype.removeChild = function (c) {
        var d = c instanceof Element && T(c),
            e = Rf.call(this, c);
        d && Cg(a, c);
        return e;
      };

      Node.prototype.replaceChild = function (c, d) {
        if (c instanceof DocumentFragment) {
          var e = qg(c);
          c = Sf.call(this, c, d);
          if (T(this)) for (Cg(a, d), d = 0; d < e.length; d++) {
            Ag(a, e[d]);
          }
          return c;
        }

        e = c instanceof Element && T(c);
        var f = Sf.call(this, c, d),
            g = T(this);
        g && Cg(a, d);
        e && Cg(a, c);
        g && Ag(a, c);
        return f;
      };

      Tf && Tf.get ? b(Node.prototype, Tf) : wg(a, function (c) {
        b(c, {
          enumerable: !0,
          configurable: !0,
          get: function get() {
            for (var d = [], e = this.firstChild; e; e = e.nextSibling) {
              e.nodeType !== Node.COMMENT_NODE && d.push(e.textContent);
            }

            return d.join("");
          },
          set: function set(d) {
            for (; this.firstChild;) {
              Rf.call(this, this.firstChild);
            }

            null != d && "" !== d && Pf.call(this, document.createTextNode(d));
          }
        });
      });
    }
    var ug = window.customElements;

    function Ug() {
      var a = new tg();
      Sg(a);
      Og(a);
      Ng(a, DocumentFragment.prototype, {
        prepend: Mf,
        append: Nf
      });
      Tg(a);
      Qg(a);
      a = new U(a);
      document.__CE_registry = a;
      Object.defineProperty(window, "customElements", {
        configurable: !0,
        enumerable: !0,
        value: a
      });
    }

    ug && !ug.forcePolyfill && "function" == typeof ug.define && "function" == typeof ug.get || Ug();
    window.__CE_installPolyfill = Ug;
    /*
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    function Vg() {
      this.end = this.start = 0;
      this.rules = this.parent = this.previous = null;
      this.cssText = this.parsedCssText = "";
      this.atRule = !1;
      this.type = 0;
      this.parsedSelector = this.selector = this.keyframesName = "";
    }

    function Wg(a) {
      var b = a = a.replace(Xg, "").replace(Yg, ""),
          c = new Vg();
      c.start = 0;
      c.end = b.length;

      for (var d = c, e = 0, f = b.length; e < f; e++) {
        if ("{" === b[e]) {
          d.rules || (d.rules = []);
          var g = d,
              h = g.rules[g.rules.length - 1] || null;
          d = new Vg();
          d.start = e + 1;
          d.parent = g;
          d.previous = h;
          g.rules.push(d);
        } else "}" === b[e] && (d.end = e + 1, d = d.parent || c);
      }

      return Zg(c, a);
    }

    function Zg(a, b) {
      var c = b.substring(a.start, a.end - 1);
      a.parsedCssText = a.cssText = c.trim();
      a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = $g(c), c = c.replace(ah, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = bh : c.match(ch) && (a.type = dh, a.keyframesName = a.selector.split(ah).pop()) : a.type = 0 === c.indexOf("--") ? eh : fh);
      if (c = a.rules) for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) {
        Zg(f, b);
      }
      return a;
    }

    function $g(a) {
      return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (b, c) {
        b = c;

        for (c = 6 - b.length; c--;) {
          b = "0" + b;
        }

        return "\\" + b;
      });
    }

    function gh(a, b, c) {
      c = void 0 === c ? "" : c;
      var d = "";

      if (a.cssText || a.rules) {
        var e = a.rules,
            f;
        if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));

        if (f) {
          f = 0;

          for (var g = e.length, h = void 0; f < g && (h = e[f]); f++) {
            d = gh(h, b, d);
          }
        } else b ? b = a.cssText : (b = a.cssText, b = b.replace(hh, "").replace(ih, ""), b = b.replace(jh, "").replace(kh, "")), (d = b.trim()) && (d = "  " + d + "\n");
      }

      d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));
      return c;
    }

    var fh = 1,
        dh = 7,
        bh = 4,
        eh = 1E3,
        Xg = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
        Yg = /@import[^;]*;/gim,
        hh = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
        ih = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
        jh = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
        kh = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
        ch = /^@[^\s]*keyframes/,
        ah = /\s+/g;
    var V = !(window.ShadyDOM && window.ShadyDOM.inUse),
        lh;

    function mh(a) {
      lh = a && a.shimcssproperties ? !1 : V || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
    }

    var nh;
    window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (nh = window.ShadyCSS.cssBuild);
    var oh = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
    window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? lh = window.ShadyCSS.nativeCss : window.ShadyCSS ? (mh(window.ShadyCSS), window.ShadyCSS = void 0) : mh(window.WebComponents && window.WebComponents.flags);
    var X = lh;
    var ph = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
        qh = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
        rh = /(--[\w-]+)\s*([:,;)]|$)/gi,
        sh = /(animation\s*:)|(animation-name\s*:)/,
        th = /@media\s(.*)/,
        uh = /\{[^}]*\}/g;
    var vh = new Set();

    function wh(a, b) {
      if (!a) return "";
      "string" === typeof a && (a = Wg(a));
      b && xh(a, b);
      return gh(a, X);
    }

    function yh(a) {
      !a.__cssRules && a.textContent && (a.__cssRules = Wg(a.textContent));
      return a.__cssRules || null;
    }

    function zh(a) {
      return !!a.parent && a.parent.type === dh;
    }

    function xh(a, b, c, d) {
      if (a) {
        var e = !1,
            f = a.type;

        if (d && f === bh) {
          var g = a.selector.match(th);
          g && (window.matchMedia(g[1]).matches || (e = !0));
        }

        f === fh ? b(a) : c && f === dh ? c(a) : f === eh && (e = !0);
        if ((a = a.rules) && !e) for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) {
          xh(g, b, c, d);
        }
      }
    }

    function Ah(a, b, c, d) {
      var e = document.createElement("style");
      b && e.setAttribute("scope", b);
      e.textContent = a;
      Ch(e, c, d);
      return e;
    }

    var Dh = null;

    function Eh(a) {
      a = document.createComment(" Shady DOM styles for " + a + " ");
      var b = document.head;
      b.insertBefore(a, (Dh ? Dh.nextSibling : null) || b.firstChild);
      return Dh = a;
    }

    function Ch(a, b, c) {
      b = b || document.head;
      b.insertBefore(a, c && c.nextSibling || b.firstChild);
      Dh ? a.compareDocumentPosition(Dh) === Node.DOCUMENT_POSITION_PRECEDING && (Dh = a) : Dh = a;
    }

    function Fh(a, b) {
      for (var c = 0, d = a.length; b < d; b++) {
        if ("(" === a[b]) c++;else if (")" === a[b] && 0 === --c) return b;
      }

      return -1;
    }

    function Gh(a, b) {
      var c = a.indexOf("var(");
      if (-1 === c) return b(a, "", "", "");
      var d = Fh(a, c + 3),
          e = a.substring(c + 4, d);
      c = a.substring(0, c);
      a = Gh(a.substring(d + 1), b);
      d = e.indexOf(",");
      return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
    }

    function Hh(a, b) {
      V ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
    }

    var Ih = window.ShadyDOM && window.ShadyDOM.wrap || function (a) {
      return a;
    };

    function Jh(a) {
      var b = a.localName,
          c = "";
      b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a["extends"]);
      return {
        is: b,
        ha: c
      };
    }

    function Kh(a) {
      for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++) {
        if ("(" === a[d]) {
          var e = Fh(a, d);
          c += a.slice(d, e + 1);
          d = e;
        } else "," === a[d] ? (b.push(c), c = "") : c += a[d];
      }

      c && b.push(c);
      return b;
    }

    function Lh(a) {
      if (void 0 !== nh) return nh;

      if (void 0 === a.__cssBuild) {
        var b = a.getAttribute("css-build");
        if (b) a.__cssBuild = b;else {
          a: {
            b = "template" === a.localName ? a.content.firstChild : a.firstChild;

            if (b instanceof Comment && (b = b.textContent.trim().split(":"), "css-build" === b[0])) {
              b = b[1];
              break a;
            }

            b = "";
          }

          if ("" !== b) {
            var c = "template" === a.localName ? a.content.firstChild : a.firstChild;
            c.parentNode.removeChild(c);
          }

          a.__cssBuild = b;
        }
      }

      return a.__cssBuild || "";
    }

    function Mh(a) {
      a = void 0 === a ? "" : a;
      return "" !== a && X ? V ? "shadow" === a : "shady" === a : !1;
    }

    function Nh() {}

    function Oh(a, b) {
      Ph(Qh, a, function (c) {
        Rh(c, b || "");
      });
    }

    function Ph(a, b, c) {
      b.nodeType === Node.ELEMENT_NODE && c(b);
      var d;
      "template" === b.localName ? d = (b.content || b._content || b).childNodes : d = b.children || b.childNodes;
      if (d) for (b = 0; b < d.length; b++) {
        Ph(a, d[b], c);
      }
    }

    function Rh(a, b, c) {
      if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));else if (a.getAttribute) {
        var d = a.getAttribute("class");
        c ? d && (b = d.replace("style-scope", "").replace(b, ""), Hh(a, b)) : Hh(a, (d ? d + " " : "") + "style-scope " + b);
      }
    }

    function Sh(a, b, c) {
      Ph(Qh, a, function (d) {
        Rh(d, b, !0);
        Rh(d, c);
      });
    }

    function Th(a, b) {
      Ph(Qh, a, function (c) {
        Rh(c, b || "", !0);
      });
    }

    function Uh(a, b, c, d, e) {
      var f = Qh;
      e = void 0 === e ? "" : e;
      "" === e && (V || "shady" === (void 0 === d ? "" : d) ? e = wh(b, c) : (a = Jh(a), e = Vh(f, b, a.is, a.ha, c) + "\n\n"));
      return e.trim();
    }

    function Vh(a, b, c, d, e) {
      var f = Wh(c, d);
      c = c ? "." + c : "";
      return wh(b, function (g) {
        g.i || (g.selector = g.F = Xh(a, g, a.h, c, f), g.i = !0);
        e && e(g, c, f);
      });
    }

    function Wh(a, b) {
      return b ? "[is=" + a + "]" : a;
    }

    function Xh(a, b, c, d, e) {
      var f = Kh(b.selector);

      if (!zh(b)) {
        b = 0;

        for (var g = f.length, h = void 0; b < g && (h = f[b]); b++) {
          f[b] = c.call(a, h, d, e);
        }
      }

      return f.filter(function (k) {
        return !!k;
      }).join(",");
    }

    function Yh(a) {
      return a.replace(Zh, function (b, c, d) {
        -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));
        return ":" + c + "(" + d + ")";
      });
    }

    function $h(a) {
      for (var b = [], c; c = a.match(ai);) {
        var d = c.index,
            e = Fh(a, d);
        if (-1 === e) throw Error(c.input + " selector missing ')'");
        c = a.slice(d, e + 1);
        a = a.replace(c, "\uE000");
        b.push(c);
      }

      return {
        Ba: a,
        matches: b
      };
    }

    function bi(a, b) {
      var c = a.split("\uE000");
      return b.reduce(function (d, e, f) {
        return d + e + c[f + 1];
      }, c[0]);
    }

    Nh.prototype.h = function (a, b, c) {
      var d = !1;
      a = a.trim();
      var e = Zh.test(a);
      e && (a = a.replace(Zh, function (h, k, l) {
        return ":" + k + "(" + l.replace(/\s/g, "") + ")";
      }), a = Yh(a));
      var f = ai.test(a);

      if (f) {
        var g = $h(a);
        a = g.Ba;
        g = g.matches;
      }

      a = a.replace(ci, ":host $1");
      a = a.replace(di, function (h, k, l) {
        d || (h = ei(l, k, b, c), d = d || h.stop, k = h.Ua, l = h.value);
        return k + l;
      });
      f && (a = bi(a, g));
      e && (a = Yh(a));
      return a = a.replace(fi, function (h, k, l, m) {
        return '[dir="' + l + '"] ' + k + m + ", " + k + '[dir="' + l + '"]' + m;
      });
    };

    function ei(a, b, c, d) {
      var e = a.indexOf("::slotted");
      0 <= a.indexOf(":host") ? a = gi(a, d) : 0 !== e && (a = c ? hi(a, c) : a);
      c = !1;
      0 <= e && (b = "", c = !0);

      if (c) {
        var f = !0;
        c && (a = a.replace(ii, function (g, h) {
          return " > " + h;
        }));
      }

      return {
        value: a,
        Ua: b,
        stop: f
      };
    }

    function hi(a, b) {
      a = a.split(/(\[.+?\])/);

      for (var c = [], d = 0; d < a.length; d++) {
        if (1 === d % 2) c.push(a[d]);else {
          var e = a[d];
          if ("" !== e || d !== a.length - 1) e = e.split(":"), e[0] += b, c.push(e.join(":"));
        }
      }

      return c.join("");
    }

    function gi(a, b) {
      var c = a.match(ji);
      return (c = c && c[2].trim() || "") ? c[0].match(ki) ? a.replace(ji, function (d, e, f) {
        return b + f;
      }) : c.split(ki)[0] === b ? c : "should_not_match" : a.replace(":host", b);
    }

    function li(a) {
      ":root" === a.selector && (a.selector = "html");
    }

    Nh.prototype.i = function (a) {
      return a.match(":host") ? "" : a.match("::slotted") ? this.h(a, ":not(.style-scope)") : hi(a.trim(), ":not(.style-scope)");
    };

    ea.Object.defineProperties(Nh.prototype, {
      g: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return "style-scope";
        }
      }
    });
    var Zh = /:(nth[-\w]+)\(([^)]+)\)/,
        di = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
        ki = /[[.:#*]/,
        ci = /^(::slotted)/,
        ji = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
        ii = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
        fi = /(.*):dir\((?:(ltr|rtl))\)(.*)/,
        ai = /:(?:matches|any|-(?:webkit|moz)-any)/,
        Qh = new Nh();

    function mi(a, b, c, d, e) {
      this.M = a || null;
      this.h = b || null;
      this.za = c || [];
      this.K = null;
      this.cssBuild = e || "";
      this.ha = d || "";
      this.g = this.L = this.R = null;
    }

    function ni(a) {
      return a ? a.__styleInfo : null;
    }

    function oi(a, b) {
      return a.__styleInfo = b;
    }

    mi.prototype.i = function () {
      return this.M;
    };

    mi.prototype._getStyleRules = mi.prototype.i;

    function pi(a) {
      var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;
      return b && b.call(this, a);
    }

    var qi = /:host\s*>\s*/,
        ri = navigator.userAgent.match("Trident");

    function si() {}

    function ti(a) {
      var b = {},
          c = [],
          d = 0;
      xh(a, function (f) {
        ui(f);
        f.index = d++;
        f = f.D.cssText;

        for (var g; g = rh.exec(f);) {
          var h = g[1];
          ":" !== g[2] && (b[h] = !0);
        }
      }, function (f) {
        c.push(f);
      });
      a.h = c;
      a = [];

      for (var e in b) {
        a.push(e);
      }

      return a;
    }

    function ui(a) {
      if (!a.D) {
        var b = {},
            c = {};
        vi(a, c) && (b.P = c, a.rules = null);
        b.cssText = a.parsedCssText.replace(uh, "").replace(ph, "");
        a.D = b;
      }
    }

    function vi(a, b) {
      var c = a.D;

      if (c) {
        if (c.P) return Object.assign(b, c.P), !0;
      } else {
        c = a.parsedCssText;

        for (var d; a = ph.exec(c);) {
          d = (a[2] || a[3]).trim();
          if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;
          d = !0;
        }

        return d;
      }
    }

    function wi(a, b, c) {
      b && (b = 0 <= b.indexOf(";") ? xi(a, b, c) : Gh(b, function (d, e, f, g) {
        if (!e) return d + g;
        (e = wi(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = wi(a, c[f] || f, c) || f;
        return d + (e || "") + g;
      }));
      return b && b.trim() || "";
    }

    function xi(a, b, c) {
      b = b.split(";");

      for (var d = 0, e, f; d < b.length; d++) {
        if (e = b[d]) {
          qh.lastIndex = 0;
          if (f = qh.exec(e)) e = wi(a, c[f[1]], c);else if (f = e.indexOf(":"), -1 !== f) {
            var g = e.substring(f);
            g = g.trim();
            g = wi(a, g, c) || g;
            e = e.substring(0, f) + g;
          }
          b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
        }
      }

      return b.join(";");
    }

    function yi(a, b) {
      var c = {},
          d = [];
      xh(a, function (e) {
        e.D || ui(e);
        var f = e.F || e.parsedSelector;
        b && e.D.P && f && pi.call(b, f) && (vi(e, c), e = e.index, f = parseInt(e / 32, 10), d[f] = (d[f] || 0) | 1 << e % 32);
      }, null, !0);
      return {
        P: c,
        key: d
      };
    }

    function zi(a, b, c, d) {
      b.D || ui(b);

      if (b.D.P) {
        var e = Jh(a);
        a = e.is;
        e = e.ha;
        e = a ? Wh(a, e) : "html";
        var f = b.parsedSelector;
        var g = !!f.match(qi) || "html" === e && -1 < f.indexOf("html");
        var h = 0 === f.indexOf(":host") && !g;
        "shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));
        if (g || h) c = e, h && (b.F || (b.F = Xh(Qh, b, Qh.h, a ? "." + a : "", e)), c = b.F || e), g && "html" === e && (c = b.F || b.O), d({
          Ba: c,
          ab: h,
          qb: g
        });
      }
    }

    function Ai(a, b, c) {
      var d = {},
          e = {};
      xh(b, function (f) {
        zi(a, f, c, function (g) {
          pi.call(a._element || a, g.Ba) && (g.ab ? vi(f, d) : vi(f, e));
        });
      }, null, !0);
      return {
        hb: e,
        Za: d
      };
    }

    function Bi(a, b, c, d) {
      var e = Jh(b),
          f = Wh(e.is, e.ha),
          g = new RegExp("(?:^|[^.#[:])" + (b["extends"] ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
          h = ni(b);
      e = h.M;
      h = h.cssBuild;
      var k = Ci(e, d);
      return Uh(b, e, function (l) {
        var m = "";
        l.D || ui(l);
        l.D.cssText && (m = xi(a, l.D.cssText, c));
        l.cssText = m;

        if (!V && !zh(l) && l.cssText) {
          var q = m = l.cssText;
          null == l.Ia && (l.Ia = sh.test(m));
          if (l.Ia) if (null == l.pa) {
            l.pa = [];

            for (var H in k) {
              q = k[H], q = q(m), m !== q && (m = q, l.pa.push(H));
            }
          } else {
            for (H = 0; H < l.pa.length; ++H) {
              q = k[l.pa[H]], m = q(m);
            }

            q = m;
          }
          l.cssText = q;
          l.F = l.F || l.selector;
          m = "." + d;
          H = Kh(l.F);
          q = 0;

          for (var C = H.length, t = void 0; q < C && (t = H[q]); q++) {
            H[q] = t.match(g) ? t.replace(f, m) : m + " " + t;
          }

          l.selector = H.join(",");
        }
      }, h);
    }

    function Ci(a, b) {
      a = a.h;
      var c = {};
      if (!V && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
        var f = e,
            g = b;
        f.u = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");
        f.g = f.keyframesName + "-" + g;
        f.F = f.F || f.selector;
        f.selector = f.F.replace(f.keyframesName, f.g);
        c[e.keyframesName] = Di(e);
      }
      return c;
    }

    function Di(a) {
      return function (b) {
        return b.replace(a.u, a.g);
      };
    }

    function Ei(a, b) {
      var c = Fi,
          d = yh(a);
      a.textContent = wh(d, function (e) {
        var f = e.cssText = e.parsedCssText;
        e.D && e.D.cssText && (f = f.replace(hh, "").replace(ih, ""), e.cssText = xi(c, f, b));
      });
    }

    ea.Object.defineProperties(si.prototype, {
      g: {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return "x-scope";
        }
      }
    });
    var Fi = new si();
    var Gi = {};

    function Ji() {
      this.cache = {};
    }

    Ji.prototype.store = function (a, b, c, d) {
      var e = this.cache[a] || [];
      e.push({
        P: b,
        styleElement: c,
        L: d
      });
      100 < e.length && e.shift();
      this.cache[a] = e;
    };

    function Ki() {}

    var Li = new RegExp(Qh.g + "\\s*([^\\s]*)");

    function Mi(a) {
      return (a = (a.classList && a.classList.value ? a.classList.value : a.getAttribute("class") || "").match(Li)) ? a[1] : "";
    }

    function Ni(a) {
      var b = Ih(a).getRootNode();
      return b === a || b === a.ownerDocument ? "" : (a = b.host) ? Jh(a).is : "";
    }

    function Oi(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
          var e = c.addedNodes[d];

          if (e.nodeType === Node.ELEMENT_NODE) {
            var f = e.getRootNode(),
                g = Mi(e);
            if (g && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === Lh(e))) Th(e, g);else if (f instanceof ShadowRoot) for (f = Ni(e), f !== g && Sh(e, g, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + Qh.g + ")"), g = 0; g < e.length; g++) {
              f = e[g];
              var h = Ni(f);
              h && Rh(f, h);
            }
          }
        }
      }
    }

    if (!(V || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
      var Pi = new MutationObserver(Oi),
          Qi = function Qi(a) {
        Pi.observe(a, {
          childList: !0,
          subtree: !0
        });
      };

      if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Qi(document);else {
        var Ri = function Ri() {
          Qi(document.body);
        };

        window.HTMLImports ? window.HTMLImports.whenReady(Ri) : requestAnimationFrame(function () {
          if ("loading" === document.readyState) {
            var a = function a() {
              Ri();
              document.removeEventListener("readystatechange", a);
            };

            document.addEventListener("readystatechange", a);
          } else Ri();
        });
      }

      Ki = function Ki() {
        Oi(Pi.takeRecords());
      };
    }
    var Si = {};
    var Ti = Promise.resolve();

    function Ui(a) {
      if (a = Si[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
    }

    function Vi(a) {
      return a._applyShimCurrentVersion === a._applyShimNextVersion;
    }

    function Wi(a) {
      a._applyShimValidatingVersion = a._applyShimNextVersion;
      a._validating || (a._validating = !0, Ti.then(function () {
        a._applyShimCurrentVersion = a._applyShimNextVersion;
        a._validating = !1;
      }));
    }
    var Xi = {},
        Yi = new Ji();

    function Y() {
      this.da = {};
      this.i = document.documentElement;
      var a = new Vg();
      a.rules = [];
      this.u = oi(this.i, new mi(a));
      this.O = !1;
      this.g = this.h = null;
    }

    v = Y.prototype;

    v.flush = function () {
      Ki();
    };

    v.Xa = function (a) {
      return yh(a);
    };

    v.lb = function (a) {
      return wh(a);
    };

    v.prepareTemplate = function (a, b, c) {
      this.prepareTemplateDom(a, b);
      this.prepareTemplateStyles(a, b, c);
    };

    v.prepareTemplateStyles = function (a, b, c) {
      if (!a._prepared && !oh) {
        V || Gi[b] || (Gi[b] = Eh(b));
        a._prepared = !0;
        a.name = b;
        a["extends"] = c;
        Si[b] = a;
        var d = Lh(a),
            e = Mh(d);
        c = {
          is: b,
          "extends": c
        };

        for (var f = [], g = a.content.querySelectorAll("style"), h = 0; h < g.length; h++) {
          var k = g[h];

          if (k.hasAttribute("shady-unscoped")) {
            if (!V) {
              var l = k.textContent;

              if (!vh.has(l)) {
                vh.add(l);
                var m = document.createElement("style");
                m.setAttribute("shady-unscoped", "");
                m.textContent = l;
                document.head.appendChild(m);
              }

              k.parentNode.removeChild(k);
            }
          } else f.push(k.textContent), k.parentNode.removeChild(k);
        }

        f = f.join("").trim() + (Xi[b] || "");
        Zi(this);

        if (!e) {
          if (g = !d) g = qh.test(f) || ph.test(f), qh.lastIndex = 0, ph.lastIndex = 0;
          h = Wg(f);
          g && X && this.h && this.h.transformRules(h, b);
          a._styleAst = h;
        }

        g = [];
        X || (g = ti(a._styleAst));
        if (!g.length || X) h = V ? a.content : null, b = Gi[b] || null, d = Uh(c, a._styleAst, null, d, e ? f : ""), d = d.length ? Ah(d, c.is, h, b) : null, a._style = d;
        a.g = g;
      }
    };

    v.fb = function (a, b) {
      Xi[b] = a.join(" ");
    };

    v.prepareTemplateDom = function (a, b) {
      if (!oh) {
        var c = Lh(a);
        V || "shady" === c || a._domPrepared || (a._domPrepared = !0, Oh(a.content, b));
      }
    };

    function $i(a) {
      var b = Jh(a),
          c = b.is;
      b = b.ha;
      var d = Gi[c] || null,
          e = Si[c];

      if (e) {
        c = e._styleAst;
        var f = e.g;
        e = Lh(e);
        b = new mi(c, d, f, b, e);
        oi(a, b);
        return b;
      }
    }

    function aj(a) {
      !a.g && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.g = window.ShadyCSS.CustomStyleInterface, a.g.transformCallback = function (b) {
        a.Ma(b);
      }, a.g.validateCallback = function () {
        requestAnimationFrame(function () {
          (a.g.enqueued || a.O) && a.flushCustomStyles();
        });
      });
    }

    function Zi(a) {
      if (!a.h && window.ShadyCSS && window.ShadyCSS.ApplyShim) {
        a.h = window.ShadyCSS.ApplyShim;
        a.h.invalidCallback = Ui;
        var b = !0;
      } else b = !1;

      aj(a);
      return b;
    }

    v.flushCustomStyles = function () {
      if (!oh) {
        var a = Zi(this);

        if (this.g) {
          var b = this.g.processStyles();

          if ((a || this.g.enqueued) && !Mh(this.u.cssBuild)) {
            if (X) {
              if (!this.u.cssBuild) for (a = 0; a < b.length; a++) {
                var c = this.g.getStyleForCustomStyle(b[a]);

                if (c && X && this.h) {
                  var d = yh(c);
                  Zi(this);
                  this.h.transformRules(d);
                  c.textContent = wh(d);
                }
              }
            } else {
              bj(this, b);
              cj(this, this.i, this.u);

              for (a = 0; a < b.length; a++) {
                (c = this.g.getStyleForCustomStyle(b[a])) && Ei(c, this.u.R);
              }

              this.O && this.styleDocument();
            }

            this.g.enqueued = !1;
          }
        }
      }
    };

    function bj(a, b) {
      b = b.map(function (c) {
        return a.g.getStyleForCustomStyle(c);
      }).filter(function (c) {
        return !!c;
      });
      b.sort(function (c, d) {
        c = d.compareDocumentPosition(c);
        return c & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : c & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
      });
      a.u.M.rules = b.map(function (c) {
        return yh(c);
      });
    }

    v.styleElement = function (a, b) {
      if (oh) {
        if (b) {
          ni(a) || oi(a, new mi(null));
          var c = ni(a);
          c.K = c.K || {};
          Object.assign(c.K, b);
          dj(this, a, c);
        }
      } else if (c = ni(a) || $i(a)) if (a !== this.i && (this.O = !0), b && (c.K = c.K || {}, Object.assign(c.K, b)), X) dj(this, a, c);else if (this.flush(), cj(this, a, c), c.za && c.za.length) {
        b = Jh(a).is;
        var d;

        a: {
          if (d = Yi.cache[b]) for (var e = d.length - 1; 0 <= e; e--) {
            var f = d[e];

            b: {
              var g = c.za;

              for (var h = 0; h < g.length; h++) {
                var k = g[h];

                if (f.P[k] !== c.R[k]) {
                  g = !1;
                  break b;
                }
              }

              g = !0;
            }

            if (g) {
              d = f;
              break a;
            }
          }
          d = void 0;
        }

        g = d ? d.styleElement : null;
        e = c.L;
        (f = d && d.L) || (f = this.da[b] = (this.da[b] || 0) + 1, f = b + "-" + f);
        c.L = f;
        f = c.L;
        h = Fi;
        h = g ? g.textContent || "" : Bi(h, a, c.R, f);
        k = ni(a);
        var l = k.g;
        l && !V && l !== g && (l._useCount--, 0 >= l._useCount && l.parentNode && l.parentNode.removeChild(l));
        V ? k.g ? (k.g.textContent = h, g = k.g) : h && (g = Ah(h, f, a.shadowRoot, k.h)) : g ? g.parentNode || (ri && -1 < h.indexOf("@media") && (g.textContent = h), Ch(g, null, k.h)) : h && (g = Ah(h, f, null, k.h));
        g && (g._useCount = g._useCount || 0, k.g != g && g._useCount++, k.g = g);
        f = g;
        V || (g = c.L, k = h = a.getAttribute("class") || "", e && (k = h.replace(new RegExp("\\s*x-scope\\s*" + e + "\\s*", "g"), " ")), k += (k ? " " : "") + "x-scope " + g, h !== k && Hh(a, k));
        d || Yi.store(b, c.R, f, c.L);
      }
    };

    function dj(a, b, c) {
      var d = Jh(b).is;

      if (c.K) {
        var e = c.K,
            f;

        for (f in e) {
          null === f ? b.style.removeProperty(f) : b.style.setProperty(f, e[f]);
        }
      }

      e = Si[d];

      if (!(!e && b !== a.i || e && "" !== Lh(e)) && e && e._style && !Vi(e)) {
        if (Vi(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) Zi(a), a.h && a.h.transformRules(e._styleAst, d), e._style.textContent = Uh(b, c.M), Wi(e);
        V && (a = b.shadowRoot) && (a = a.querySelector("style")) && (a.textContent = Uh(b, c.M));
        c.M = e._styleAst;
      }
    }

    function ej(a, b) {
      return (b = Ih(b).getRootNode().host) ? ni(b) || $i(b) ? b : ej(a, b) : a.i;
    }

    function cj(a, b, c) {
      var d = ej(a, b),
          e = ni(d),
          f = e.R;
      d === a.i || f || (cj(a, d, e), f = e.R);
      a = Object.create(f || null);
      d = Ai(b, c.M, c.cssBuild);
      b = yi(e.M, b).P;
      Object.assign(a, d.Za, b, d.hb);
      b = c.K;

      for (var g in b) {
        if ((e = b[g]) || 0 === e) a[g] = e;
      }

      g = Fi;
      b = Object.getOwnPropertyNames(a);

      for (e = 0; e < b.length; e++) {
        d = b[e], a[d] = wi(g, a[d], a);
      }

      c.R = a;
    }

    v.styleDocument = function (a) {
      this.styleSubtree(this.i, a);
    };

    v.styleSubtree = function (a, b) {
      var c = Ih(a),
          d = c.shadowRoot,
          e = a === this.i;
      (d || e) && this.styleElement(a, b);
      if (a = e ? c : d) for (a = Array.from(a.querySelectorAll("*")).filter(function (f) {
        return Ih(f).shadowRoot;
      }), b = 0; b < a.length; b++) {
        this.styleSubtree(a[b]);
      }
    };

    v.Ma = function (a) {
      var b = this,
          c = Lh(a);
      c !== this.u.cssBuild && (this.u.cssBuild = c);

      if (!Mh(c)) {
        var d = yh(a);
        xh(d, function (e) {
          if (V) li(e);else {
            var f = Qh;
            e.selector = e.parsedSelector;
            li(e);
            e.selector = e.F = Xh(f, e, f.i, void 0, void 0);
          }
          X && "" === c && (Zi(b), b.h && b.h.transformRule(e));
        });
        X ? a.textContent = wh(d) : this.u.M.rules.push(d);
      }
    };

    v.getComputedStyleValue = function (a, b) {
      var c;
      X || (c = (ni(a) || ni(ej(this, a))).R[b]);
      return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "";
    };

    v.kb = function (a, b) {
      var c = Ih(a).getRootNode();
      b = b ? ("string" === typeof b ? b : String(b)).split(/\s/) : [];
      c = c.host && c.host.localName;

      if (!c) {
        var d = a.getAttribute("class");

        if (d) {
          d = d.split(/\s/);

          for (var e = 0; e < d.length; e++) {
            if (d[e] === Qh.g) {
              c = d[e + 1];
              break;
            }
          }
        }
      }

      c && b.push(Qh.g, c);
      X || (c = ni(a)) && c.L && b.push(Fi.g, c.L);
      Hh(a, b.join(" "));
    };

    v.Ta = function (a) {
      return ni(a);
    };

    v.jb = function (a, b) {
      Rh(a, b);
    };

    v.mb = function (a, b) {
      Rh(a, b, !0);
    };

    v.ib = function (a) {
      return Ni(a);
    };

    v.Va = function (a) {
      return Mi(a);
    };

    Y.prototype.flush = Y.prototype.flush;
    Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;
    Y.prototype.styleElement = Y.prototype.styleElement;
    Y.prototype.styleDocument = Y.prototype.styleDocument;
    Y.prototype.styleSubtree = Y.prototype.styleSubtree;
    Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;
    Y.prototype.setElementClass = Y.prototype.kb;
    Y.prototype._styleInfoForNode = Y.prototype.Ta;
    Y.prototype.transformCustomStyleForDocument = Y.prototype.Ma;
    Y.prototype.getStyleAst = Y.prototype.Xa;
    Y.prototype.styleAstToString = Y.prototype.lb;
    Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;
    Y.prototype.scopeNode = Y.prototype.jb;
    Y.prototype.unscopeNode = Y.prototype.mb;
    Y.prototype.scopeForNode = Y.prototype.ib;
    Y.prototype.currentScopeForNode = Y.prototype.Va;
    Y.prototype.prepareAdoptedCssText = Y.prototype.fb;
    Object.defineProperties(Y.prototype, {
      nativeShadow: {
        get: function get() {
          return V;
        }
      },
      nativeCss: {
        get: function get() {
          return X;
        }
      }
    });
    var Z = new Y(),
        fj,
        gj;
    window.ShadyCSS && (fj = window.ShadyCSS.ApplyShim, gj = window.ShadyCSS.CustomStyleInterface);
    window.ShadyCSS = {
      ScopingShim: Z,
      prepareTemplate: function prepareTemplate(a, b, c) {
        Z.flushCustomStyles();
        Z.prepareTemplate(a, b, c);
      },
      prepareTemplateDom: function prepareTemplateDom(a, b) {
        Z.prepareTemplateDom(a, b);
      },
      prepareTemplateStyles: function prepareTemplateStyles(a, b, c) {
        Z.flushCustomStyles();
        Z.prepareTemplateStyles(a, b, c);
      },
      styleSubtree: function styleSubtree(a, b) {
        Z.flushCustomStyles();
        Z.styleSubtree(a, b);
      },
      styleElement: function styleElement(a) {
        Z.flushCustomStyles();
        Z.styleElement(a);
      },
      styleDocument: function styleDocument(a) {
        Z.flushCustomStyles();
        Z.styleDocument(a);
      },
      flushCustomStyles: function flushCustomStyles() {
        Z.flushCustomStyles();
      },
      getComputedStyleValue: function getComputedStyleValue(a, b) {
        return Z.getComputedStyleValue(a, b);
      },
      nativeCss: X,
      nativeShadow: V,
      cssBuild: nh,
      disableRuntime: oh
    };
    fj && (window.ShadyCSS.ApplyShim = fj);
    gj && (window.ShadyCSS.CustomStyleInterface = gj);

    (function (a) {
      function b(t) {
        "" == t && (f.call(this), this.m = !0);
        return t.toLowerCase();
      }

      function c(t) {
        var F = t.charCodeAt(0);
        return 32 < F && 127 > F && -1 == [34, 35, 60, 62, 63, 96].indexOf(F) ? t : encodeURIComponent(t);
      }

      function d(t) {
        var F = t.charCodeAt(0);
        return 32 < F && 127 > F && -1 == [34, 35, 60, 62, 96].indexOf(F) ? t : encodeURIComponent(t);
      }

      function e(t, F, E) {
        function M(fa) {
        }

        var y = F || "scheme start",
            W = 0,
            w = "",
            ta = !1,
            ha = !1;

        a: for (; (void 0 != t[W - 1] || 0 == W) && !this.m;) {
          var n = t[W];

          switch (y) {
            case "scheme start":
              if (n && q.test(n)) w += n.toLowerCase(), y = "scheme";else if (F) {
                break a;
              } else {
                w = "";
                y = "no scheme";
                continue;
              }
              break;

            case "scheme":
              if (n && H.test(n)) w += n.toLowerCase();else if (":" == n) {
                this.l = w;
                w = "";
                if (F) break a;
                void 0 !== l[this.l] && (this.G = !0);
                y = "file" == this.l ? "relative" : this.G && E && E.l == this.l ? "relative or authority" : this.G ? "authority first slash" : "scheme data";
              } else if (F) {
                break a;
              } else {
                w = "";
                W = 0;
                y = "no scheme";
                continue;
              }
              break;

            case "scheme data":
              "?" == n ? (this.A = "?", y = "query") : "#" == n ? (this.C = "#", y = "fragment") : void 0 != n && "\t" != n && "\n" != n && "\r" != n && (this.va += c(n));
              break;

            case "no scheme":
              if (E && void 0 !== l[E.l]) {
                y = "relative";
                continue;
              } else f.call(this), this.m = !0;

              break;

            case "relative or authority":
              if ("/" == n && "/" == t[W + 1]) y = "authority ignore slashes";else {
                y = "relative";
                continue;
              }
              break;

            case "relative":
              this.G = !0;
              "file" != this.l && (this.l = E.l);

              if (void 0 == n) {
                this.o = E.o;
                this.v = E.v;
                this.s = E.s.slice();
                this.A = E.A;
                this.B = E.B;
                this.j = E.j;
                break a;
              } else if ("/" == n || "\\" == n) y = "relative slash";else if ("?" == n) this.o = E.o, this.v = E.v, this.s = E.s.slice(), this.A = "?", this.B = E.B, this.j = E.j, y = "query";else if ("#" == n) this.o = E.o, this.v = E.v, this.s = E.s.slice(), this.A = E.A, this.C = "#", this.B = E.B, this.j = E.j, y = "fragment";else {
                y = t[W + 1];
                var J = t[W + 2];
                if ("file" != this.l || !q.test(n) || ":" != y && "|" != y || void 0 != J && "/" != J && "\\" != J && "?" != J && "#" != J) this.o = E.o, this.v = E.v, this.B = E.B, this.j = E.j, this.s = E.s.slice(), this.s.pop();
                y = "relative path";
                continue;
              }

              break;

            case "relative slash":
              if ("/" == n || "\\" == n) y = "file" == this.l ? "file host" : "authority ignore slashes";else {
                "file" != this.l && (this.o = E.o, this.v = E.v, this.B = E.B, this.j = E.j);
                y = "relative path";
                continue;
              }
              break;

            case "authority first slash":
              if ("/" == n) y = "authority second slash";else {
                y = "authority ignore slashes";
                continue;
              }
              break;

            case "authority second slash":
              y = "authority ignore slashes";

              if ("/" != n) {
                continue;
              }

              break;

            case "authority ignore slashes":
              if ("/" != n && "\\" != n) {
                y = "authority";
                continue;
              }

              break;

            case "authority":
              if ("@" == n) {
                ta && (w += "%40");
                ta = !0;

                for (n = 0; n < w.length; n++) {
                  J = w[n], "\t" == J || "\n" == J || "\r" == J ? M() : ":" == J && null === this.j ? this.j = "" : (J = c(J), null !== this.j ? this.j += J : this.B += J);
                }

                w = "";
              } else if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n) {
                W -= w.length;
                w = "";
                y = "host";
                continue;
              } else w += n;

              break;

            case "file host":
              if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n) {
                2 != w.length || !q.test(w[0]) || ":" != w[1] && "|" != w[1] ? (0 != w.length && (this.o = b.call(this, w), w = ""), y = "relative path start") : y = "relative path";
                continue;
              } else "\t" == n || "\n" == n || "\r" == n ? M() : w += n;

              break;

            case "host":
            case "hostname":
              if (":" != n || ha) {
                if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n) {
                  this.o = b.call(this, w);
                  w = "";
                  y = "relative path start";
                  if (F) break a;
                  continue;
                } else "\t" != n && "\n" != n && "\r" != n ? ("[" == n ? ha = !0 : "]" == n && (ha = !1), w += n) : M();
              } else if (this.o = b.call(this, w), w = "", y = "port", "hostname" == F) break a;
              break;

            case "port":
              if (/[0-9]/.test(n)) w += n;else if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n || F) {
                "" != w && (w = parseInt(w, 10), w != l[this.l] && (this.v = w + ""), w = "");
                if (F) break a;
                y = "relative path start";
                continue;
              } else "\t" == n || "\n" == n || "\r" == n ? M() : (f.call(this), this.m = !0);
              break;

            case "relative path start":
              y = "relative path";
              if ("/" != n && "\\" != n) continue;
              break;

            case "relative path":
              if (void 0 != n && "/" != n && "\\" != n && (F || "?" != n && "#" != n)) "\t" != n && "\n" != n && "\r" != n && (w += c(n));else {
                if (J = m[w.toLowerCase()]) w = J;
                ".." == w ? (this.s.pop(), "/" != n && "\\" != n && this.s.push("")) : "." == w && "/" != n && "\\" != n ? this.s.push("") : "." != w && ("file" == this.l && 0 == this.s.length && 2 == w.length && q.test(w[0]) && "|" == w[1] && (w = w[0] + ":"), this.s.push(w));
                w = "";
                "?" == n ? (this.A = "?", y = "query") : "#" == n && (this.C = "#", y = "fragment");
              }
              break;

            case "query":
              F || "#" != n ? void 0 != n && "\t" != n && "\n" != n && "\r" != n && (this.A += d(n)) : (this.C = "#", y = "fragment");
              break;

            case "fragment":
              void 0 != n && "\t" != n && "\n" != n && "\r" != n && (this.C += n);
          }

          W++;
        }
      }

      function f() {
        this.B = this.va = this.l = "";
        this.j = null;
        this.v = this.o = "";
        this.s = [];
        this.C = this.A = "";
        this.G = this.m = !1;
      }

      function g(t, F) {
        void 0 === F || F instanceof g || (F = new g(String(F)));
        this.g = t;
        f.call(this);
        e.call(this, this.g.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, ""), null, F);
      }

      var h = !1;

      try {
        var k = new URL("b", "http://a");
        k.pathname = "c%20d";
        h = "http://a/c%20d" === k.href;
      } catch (t) {}

      if (!h) {
        var l = Object.create(null);
        l.ftp = 21;
        l.file = 0;
        l.gopher = 70;
        l.http = 80;
        l.https = 443;
        l.ws = 80;
        l.wss = 443;
        var m = Object.create(null);
        m["%2e"] = ".";
        m[".%2e"] = "..";
        m["%2e."] = "..";
        m["%2e%2e"] = "..";
        var q = /[a-zA-Z]/,
            H = /[a-zA-Z0-9+\-.]/;
        g.prototype = {
          toString: function toString() {
            return this.href;
          },

          get href() {
            if (this.m) return this.g;
            var t = "";
            if ("" != this.B || null != this.j) t = this.B + (null != this.j ? ":" + this.j : "") + "@";
            return this.protocol + (this.G ? "//" + t + this.host : "") + this.pathname + this.A + this.C;
          },

          set href(t) {
            f.call(this);
            e.call(this, t);
          },

          get protocol() {
            return this.l + ":";
          },

          set protocol(t) {
            this.m || e.call(this, t + ":", "scheme start");
          },

          get host() {
            return this.m ? "" : this.v ? this.o + ":" + this.v : this.o;
          },

          set host(t) {
            !this.m && this.G && e.call(this, t, "host");
          },

          get hostname() {
            return this.o;
          },

          set hostname(t) {
            !this.m && this.G && e.call(this, t, "hostname");
          },

          get port() {
            return this.v;
          },

          set port(t) {
            !this.m && this.G && e.call(this, t, "port");
          },

          get pathname() {
            return this.m ? "" : this.G ? "/" + this.s.join("/") : this.va;
          },

          set pathname(t) {
            !this.m && this.G && (this.s = [], e.call(this, t, "relative path start"));
          },

          get search() {
            return this.m || !this.A || "?" == this.A ? "" : this.A;
          },

          set search(t) {
            !this.m && this.G && (this.A = "?", "?" == t[0] && (t = t.slice(1)), e.call(this, t, "query"));
          },

          get hash() {
            return this.m || !this.C || "#" == this.C ? "" : this.C;
          },

          set hash(t) {
            this.m || (t ? (this.C = "#", "#" == t[0] && (t = t.slice(1)), e.call(this, t, "fragment")) : this.C = "");
          },

          get origin() {
            var t;
            if (this.m || !this.l) return "";

            switch (this.l) {
              case "data":
              case "file":
              case "javascript":
              case "mailto":
                return "null";
            }

            return (t = this.host) ? this.l + "://" + t : "";
          }

        };
        var C = a.URL;
        C && (g.createObjectURL = function (t) {
          return C.createObjectURL.apply(C, arguments);
        }, g.revokeObjectURL = function (t) {
          C.revokeObjectURL(t);
        });
        a.URL = g;
      }
    })(window);
    /*
    Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */


    var hj = window.customElements,
        ij = !1,
        jj = null;
    hj.polyfillWrapFlushCallback && hj.polyfillWrapFlushCallback(function (a) {
      jj = a;
      ij && a();
    });

    function kj() {
      window.HTMLTemplateElement.bootstrap && window.HTMLTemplateElement.bootstrap(window.document);
      jj && jj();
      ij = !0;
      window.WebComponents.ready = !0;
      document.dispatchEvent(new CustomEvent("WebComponentsReady", {
        bubbles: !0
      }));
    }

    "complete" !== document.readyState ? (window.addEventListener("load", kj), window.addEventListener("DOMContentLoaded", function () {
      window.removeEventListener("load", kj);
      kj();
    })) : kj();
  }).call(undefined);

  /**
  @license @nocompile
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  (function () {

    (function () {
      if (void 0 === window.Reflect || void 0 === window.customElements || window.customElements.polyfillWrapFlushCallback) return;
      var a = HTMLElement;
      window.HTMLElement = {
        HTMLElement: function HTMLElement() {
          return Reflect.construct(a, [], this.constructor);
        }
      }.HTMLElement, HTMLElement.prototype = a.prototype, HTMLElement.prototype.constructor = HTMLElement, Object.setPrototypeOf(HTMLElement, a);
    })();
  })();

  var speechError = {
    'no-speech': 'No speech was detected.',
    aborted: 'Speech input was aborted in some manner, perhaps by some user-agent-specific behavior like a button the user can press to cancel speech input.',
    'audio-capture': 'Audio capture failed.',
    network: 'Network communication required for completing the recognition failed.',
    'not-allowed': 'The user agent disallowed any speech input from occurring for reasons of security, privacy or user preference.',
    'service-not-allowed': "The user agent disallowed the requested speech recognition service, either because the user agent doesn't support it or because of reasons of security, privacy or user preference. In this case it would allow another more suitable speech recognition service to be used instead.",
    'bad-grammar': 'There was an error in the speech recognition grammar or semantic tags, or the chosen grammar format or semantic tag format was unsupported.',
    'language-not-supported': 'The language was not supported.'
  };

  var grantTimeout = 30; // throw error if no result within 5 seconds

  var defaultTimeout = 5;
  function Speech(callbackHandler) {
    var _self = this;

    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var grantTimer = null;
    var resultTimer = null;
    _self.isSpeeching = false;
    _self.callbackHandler = callbackHandler;

    var callError = function (msg) {
      var _this$callbackHandler;

      _self.recognition.stop();

      if (typeof ((_this$callbackHandler = this.callbackHandler) === null || _this$callbackHandler === void 0 ? void 0 : _this$callbackHandler.onerror) === 'function') {
        if (_self.isSpeeching) {
          if (msg in speechError) {
            this.callbackHandler.onerror(speechError[msg]);
          } else {
            this.callbackHandler.onerror(msg);
          }

          _self.isSpeeching = false;
        }
      }
    }.bind(_self);

    if (typeof SpeechRecognition === 'function') {
      _self.recognition = new SpeechRecognition();
      _self.recognition.lang = 'cmn-Hant-TW';
      _self.recognition.continuous = false;

      _self.recognition.onstart = function () {
        var _self$callbackHandler;

        if (grantTimer !== null) {
          clearTimeout(grantTimeout);
        }

        resultTimer = setTimeout(function () {
          callError('no-speech');
        }, defaultTimeout * 1000);

        if (typeof ((_self$callbackHandler = _self.callbackHandler) === null || _self$callbackHandler === void 0 ? void 0 : _self$callbackHandler.onstart) === 'function') {
          _self.callbackHandler.onstart();
        }
      };

      _self.recognition.onend = function () {
        _self.isSpeeching = false;
      };

      _self.recognition.onspeechstart = function () {
        if (resultTimer !== null) {
          clearTimeout(resultTimer);
        }
      };

      _self.recognition.onspeechend = function () {
        var _self$callbackHandler2;

        if (resultTimer !== null) {
          clearTimeout(resultTimer);
        }

        if (typeof ((_self$callbackHandler2 = _self.callbackHandler) === null || _self$callbackHandler2 === void 0 ? void 0 : _self$callbackHandler2.onstop) === 'function') {
          _self.callbackHandler.onstop();
        }
      }; // This runs when the speech recognition service returns result


      _self.recognition.onresult = function (event) {
        var _self$callbackHandler3;

        if (resultTimer !== null) {
          clearTimeout(resultTimer);
        }

        var transcript = event.results[0][0].transcript;

        if (typeof ((_self$callbackHandler3 = _self.callbackHandler) === null || _self$callbackHandler3 === void 0 ? void 0 : _self$callbackHandler3.onresult) === 'function') {
          _self.callbackHandler.onresult(transcript);
        }

        _self.recognition.stop();
      };

      _self.recognition.onerror = function (event) {
        if (resultTimer !== null) {
          clearTimeout(resultTimer);
        }

        callError(event.error);
      };

      _self.speech = function (cb, ecb, startcb, endcb) {
        if (!_self.isSpeeching) {
          try {
            _self.isSpeeching = true;

            _self.recognition.start();
          } catch (err) {
            callError(err.toString());
          }

          grantTimer = setTimeout(function () {
            callError('Speech grant timeout.');
          }, grantTimeout * 1000);
        }
      };

      _self.abort = function () {
        var _self$callbackHandler4;

        if (resultTimer !== null) {
          clearTimeout(resultTimer);
        }

        if (typeof ((_self$callbackHandler4 = _self.callbackHandler) === null || _self$callbackHandler4 === void 0 ? void 0 : _self$callbackHandler4.onstop) === 'function') {
          _self.callbackHandler.onstop();
        }

        _self.recognition.abort();
      };
    } else {
      callError('Speech recognition is not supported.');
    }
  }

  var micStyle = ".wrap .input-block{display:flex;align-items:center;position:relative;width:100%}.wrap .input-block input{height:var(--input-height);width:100%;line-height:var(--input-height);border-radius:calc(var(--input-height)/10);border-width:1px;padding:calc(var(--input-height)/4);font-size:calc(var(--input-height)*.6);box-sizing:border-box}.wrap .input-block .right-icon{display:flex;align-items:center;position:absolute;right:calc(var(--input-height)/4);height:var(--input-height);cursor:pointer}.wrap .input-block .right-icon svg{transform:scale(var(--icon-scale))}.wrap .input-block .right-icon:hover svg path:last-child{fill:blue}.wrap .sound-animation{display:flex;align-items:center;justify-content:center}.wrap .sound-animation span{font-size:calc(var(--input-height)*.5);display:inline-block;padding-right:10px}.wrap .sound-animation img{max-height:var(--input-height);display:inline-block}.wrap #error-message{display:flex;align-items:center}.wrap #error-message.fade-out{-webkit-animation:fadeOut 10s linear forwards;animation:fadeOut 10s linear forwards}.wrap #error-message::before{content:\"\";-webkit-mask:url('data:image/svg+xml; utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" width=\"48\"><path d=\"M22.65 26.35H25.65V13.7H22.65ZM24 34Q24.7 34 25.175 33.525Q25.65 33.05 25.65 32.35Q25.65 31.65 25.175 31.175Q24.7 30.7 24 30.7Q23.3 30.7 22.825 31.175Q22.35 31.65 22.35 32.35Q22.35 33.05 22.825 33.525Q23.3 34 24 34ZM24 44Q19.75 44 16.1 42.475Q12.45 40.95 9.75 38.25Q7.05 35.55 5.525 31.9Q4 28.25 4 24Q4 19.8 5.525 16.15Q7.05 12.5 9.75 9.8Q12.45 7.1 16.1 5.55Q19.75 4 24 4Q28.2 4 31.85 5.55Q35.5 7.1 38.2 9.8Q40.9 12.5 42.45 16.15Q44 19.8 44 24Q44 28.25 42.45 31.9Q40.9 35.55 38.2 38.25Q35.5 40.95 31.85 42.475Q28.2 44 24 44ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24ZM24 41Q31 41 36 36Q41 31 41 24Q41 17 36 12Q31 7 24 7Q17 7 12 12Q7 17 7 24Q7 31 12 36Q17 41 24 41Z\"/></svg>') no-repeat 0 0;mask:url('data:image/svg+xml; utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" width=\"48\"><path d=\"M22.65 26.35H25.65V13.7H22.65ZM24 34Q24.7 34 25.175 33.525Q25.65 33.05 25.65 32.35Q25.65 31.65 25.175 31.175Q24.7 30.7 24 30.7Q23.3 30.7 22.825 31.175Q22.35 31.65 22.35 32.35Q22.35 33.05 22.825 33.525Q23.3 34 24 34ZM24 44Q19.75 44 16.1 42.475Q12.45 40.95 9.75 38.25Q7.05 35.55 5.525 31.9Q4 28.25 4 24Q4 19.8 5.525 16.15Q7.05 12.5 9.75 9.8Q12.45 7.1 16.1 5.55Q19.75 4 24 4Q28.2 4 31.85 5.55Q35.5 7.1 38.2 9.8Q40.9 12.5 42.45 16.15Q44 19.8 44 24Q44 28.25 42.45 31.9Q40.9 35.55 38.2 38.25Q35.5 40.95 31.85 42.475Q28.2 44 24 44ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24ZM24 41Q31 41 36 36Q41 31 41 24Q41 17 36 12Q31 7 24 7Q17 7 12 12Q7 17 7 24Q7 31 12 36Q17 41 24 41Z\"/></svg>') no-repeat 0 0;-webkit-mask-size:cover;mask-size:cover;height:20px;width:20px;background-color:red;display:inline-block;flex-shrink:0}.wrap #error-message span{color:red;padding-left:5px;flex-shrink:1}@keyframes fadeOut{0%{opacity:1}70%{opacity:1}90%{opacity:.95}100%{opacity:0}}@-webkit-keyframes fadeOut{0%{opacity:1}70%{opacity:1}90%{opacity:.95}100%{opacity:0}}";

  var soundImg = 'data:image/gif;base64,R0lGODlhyADIAPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDAwMDAwQEBAQEBAUFBQYGBgYGBgcHBwkJCQ8PDxgYGCMjIzAwMDk5OUBAQENDQ0VFRUhISE5OTlZWVl9fX2hoaHh4eIqKiqGhoa+vr7u7u8DAwMTExMfHx8nJyczMzM7Ozs7Ozs7Ozs7Ozs/Pz8/Pz9DQ0NLS0tTU1Nra2uzs7PPz8/b29vj4+Pv7+/7+/v7+/v7+/v7+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBAC6ACH+H0dlbmVyYXRlZCBieSBvbmxpbmVHSUZ0b29scy5jb20ALAAAAADIAMgAAAj+AHUJHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmT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I0XPPsF0lx0NFC+/GdJRlnSlKd1iSyc6tknRdJYRXJUGkwa7XrEwhqcia7CEGCu3BouKs7Jrsfj618AOtrCHTexiG/vYyE62spfN7GY7+9nQjra0p03talv72tjOtra3ze1ue/vb4A63uMdN7nInJCAAIfkECQQAugAh/h9HZW5lcmF0ZWQgYnkgb25saW5lR0lGdG9vbHMuY29tACwAAAAAyADIAIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQEBAQGBgYHBwcJCQkNDQ0SEhIXFxccHBwgICAlJSUrKyswMDAzMzM2NjY6Ojo+Pj5DQ0NISEhNTU1QUFBUVFRYWFhdXV1gYGBiYmJlZWVmZmZoaGhra2tubm5xcXF3d3eIiIiRkZGmpqatra3Ozs7T09Pr6+vz8/P6+vr7+/v8/Pz+/v7+/v7+/v7+/v7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8I/gB1CRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql2L1AwVKmW6tmkz9k0UBjoYGHkCJ+uaJXmdrAnrhYHhEoa9YGVjmAFiBmzAAtaLl4ETrFTyGqlcBezhxoixfv7sebNmvKJNU9YB9rHjxlhdu/Z8WrPo2no9vyZ9dfTr0pVNpw6O+qts2FePG6a9Ondv3EZ0Hxe9+/fX5sJ7q87uVTmD2KCR/nslbvs5dunhqU+/vr24Vezuu3oH75v59tvnr1cP3Xv/d/bkDVdba+Etl1yB/40HHX736bfee/4BN6B2AUr0xhtLzXdgfRC1AYVjUNCFFHnOvbfgQ21sppqIRvnGH4QPNmTFflaM2B5rEamxhRZqCAUfjg7BtwRSGj40xWdTBFVkQ0sSRWJ0D4GB2xhAPQmRlUe5mGBDTux32U9aXhlhljdeWSaYZwaZ5kttjFFGZBE1uZCcOtGZkJ0pabFaFhFhGeSJPvnZkKAspbFfGmLGyFCYYI4ZpKMtPdEeFGZWqKalKF040Y+VTugSngeBapCoHnkIIosOkUqQqiMRupCr/grBGlKKzaG6KKCD4soSo48q+iqkJM0oW40P8ToosCtxWuyaizLbantDLotps9OuxKpA1+qSLUbZdosgTLIiFO5B43pUbkHnEpRuq8jG2m5CxpIU76++ultvSspe6umgzoqUL7/VxtpvSt5ymOq3JxVcHUTbfrSuQA/rEjFGEVesa7LvipsxuRub2zG6H6sb8rMBwzuwuCc7nLJB/1K7L0sKz/ZQwxbFLB6TCLtkcX5/8lzSzg32HPRDb6yxBoYDuQWXRPPam16xIxOkdFx9Ri2x1U0rZIZrZ+hiV3B8dbqa2NwB/PJCX2sWtrRnC1wyym8fpEZ7axQ2mmIz54yz/sF7L/yQ3bvhfTDfDNlsoENSFBjFZKp9KXRwV14cq+QJMV6Z47n6fKvmr1IuLnRZa3yv6E/3Wvqxo3OcOstYt67cyujCrq7sA7X8Ku0Q4y6x7ra7XZvhWxaut/CEzzm88cUrBDzDCAINebGekxs9y9OjW72619eePcSgu376ot7zZrr4qH9Pr/lOkw/+63GzzPv77cce/+zz1w5/2yaTt3zeyd95vPL/81//ELK/wVXHeeV5XAIzN7TNNbBznJtcBOG1PYl1b3Ugw6DINFi78FlnfB8sn/rON8L07eZ+Y2NbCvW1QrO10GUvvF39cjfD3ekvgATEYah0OCoeFqSA/n2TmQGFGMTGILBEDHyeApHoQCUmcYFNhCIEHyjB9njwRSIM4frQB68rBo+EWgQjFrc4GhSWDYZnlCH+4LZGcpkxPmiEoxpXA0Ti+W2IN7MjEfWYR+TdsYiHA6RhKnhEKC3RkE9k4hSdGEVFVpGRizyNFxPFRdKVsIschNgkoZbJq7Gvje6rYe/yB0r5lZJ+p7SfKN+ogzr6cY+v7CMAB7hDWvbQlj/04aqaR8heTvBzv5ReMKk3TOsVE3vH1B58NgnCMYrxiyZ0ZjShiclKqs6arPtkDH23TVJ2k43fdOMqx5lKGpbThr/T5UBcOcs/8jGQ76RmDnG5S3quk5fJ/uRePi24z0JGrp++pCIFl9nJ0F3zkpYM4zQpidCDKrSaDc1mgVhJNjlyM40Xtag3MbpRjYKTox/FCzsF6M5YwtOk8qxlSdsJS5bKkqSu8Sf0AEpTgQLTpsLEKTF1akwrFpSZWZQmRB+aUKEWNaUSjWgGJ0rOcIbynKMMKZBcCFJxQpWVXRpNE5hnT2yp06td1UVWd7NV/q0Upi+d51nV6pov4AYM/+QpMuWqTLoKxK3NgetM7cpPvkZMCrhJUhRcI4W+cBKbS1XqBhFbkME2prAMJapDjTpZpBZkDfsZjC7QYIUqIKpPFFVhVRHCWc8yLbQsHK1BDJWXJaAhIyNl/mtaPxJblbYUbWxgA9IoFlBIPlKK/uotcAfKV5AYNKmSRS5lPfbT5jKWZFdtqmo5ElWrOtWU1yVJbW+5Vtp+VVvfpVlHZHpIlJA3kYjcFVDJmNzxrveZ4EItVT2qMunS96nZHcl2cxlWboX3v/11mHAdSVzfhuS8jUwvxpyr2A52EiObkc1U2bvcxLZXXvKN44RHcoX28Em098XudPUL4O5y97YgcUNeXmMEN3DVxPyFsbwGrODfEnhWVNgMFWyV4LgaGCV3kQ2lDttgTT74Jce1cIVJkob29AjEG85olHNSXfyOeCR2Q4zg8HhSl3Y5J/s1SRvSkAYX94nGVUJz/pbeq5MkL7bIVNadE9rzhCpleCjZGkOBqPSTMO9kYlVYDRWCguChuPmyXOCCZqtktbzIpgQ2qmGkz9lh4mCBSN/FdFjb8BjE6IDHPqrgiETdBilsZgqg9pHVRrRqgcDBsEmpclNkTRXxEsXWS5lYlkT9lEMrxddRoXWudQcVXAvF2LHmdYuUPetWt8jZsyY2mST9FGQDxdq73ueotd1raDvJ28Omdouk7RRs+8TcRdH1srntFGCz+sjtJne65c0UdPPE3oZmtpP0nWtwqxre0Rb3vIlT46yM9TFltUqgRzPor+BVNXq1Chtwk+qsONYwkMXKGp5gGMGMpbSf3YobQczMlpKb/OQoT7nKV87ylrv85TCPucxnTvOa2/zmOM+5znfO8577/OdAD7rQh070ohv96EhPutKXzvSmO/3pTw8IACH5BAkFALoAIf4fR2VuZXJhdGVkIGJ5IG9ubGluZUdJRnRvb2xzLmNvbQAsAAAAAMgAyACHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMDAwMDAwMDAwMDBQUFBwcHCgoKDQ0NDg4OEBAQEhISFBQUFxcXGhoaHh4eJSUlKysrMTExPDw8RERET09PVlZWX19fZGRkaWlpbW1tcXFxdHR0eXl5gICAhYWFiYmJjY2NkJCQlJSUmZmZoaGhp6enra2ttLS0vb29xcXFycnJzc3N0dHR1dXV4eHh7e3t8fHx9vb2+Pj4+/v7/v7+/v7+/v7+/v7+/v7+////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CP4AdQkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNo06pdy7at27dw48qdSxeoGCtVyNR1OoUBAxIMpmxNw4VLGrFYcDAYwkCxlqxVFjeuEnbJX79/l2D1ctkvCS9gJStmjANrE9KSnYAF7BkzVtadGYQe3Xgx1tqoh4SODfg2b9lfRYu+nbvxasywXyN3HZz26NvObQf/7Rt27+DFS18VTvp4a7/Kv/4D94obN3Tuu62Pryr+esQzZ5ZyN749e8QvtY+ARqoe/NX+6zFUxnIMlIFUec9FtEYYX7AhFILSORRFdFIcSB1EV8B2RVDtBbhQhwfa99AXxYEB1HzaOYQifwR6qBAUBD4BFIAQ0XgUhLo9hOOJ0eWoYo8WqgcRiD8RqeKFRq2oo4g+Kakik0XZ6JCUPVHJkJVD7agjkEVy+SN6NyLZkJE9kcmQmVlCeaaaOzk5JptCYamQnDnRiZCdXYL5ZW486jmml0WhqZCgORGKkKEqteGgRG6uieCJcCbUKEtmNPFXE2ZEhKdBm9bUKUGfjoRGdIdt6eeZgPKk5Z7mvdSXdf6C6SjmmbOaBN9EiBqUa0nz+fjmo0sCexJ+iukX0aSDRopSqAIxq4uzGA34nYEPOQvtR6v+eeqHqY40oXAVmsqnuK26tCtB5w6Urkbr6tJuuyAhK6myB8kbL7264luQvSdZ22KN//Yb8JQDN3StR9miuu2g3YqUMLcLS9pwSu/WOqjFIVUspKwbQ7SFFFI8NtBdeTGqL7onq5syQSTrdezK7sLMr0FwPIFbE3Do0tdlsVZb8JU/LwTtzoD1TLB4ACPts9IOXUGgFYkJJzKrCVIdobbjOhQ1alNjXa7XVYN9NUNHRJeEZdZpxvFyQ2J8qNsHoY2c2kd2PCbcuuK97/5vM+8r89/C/urckIAPHqzhTyLoL9MGBz2n4wktHlvSky9d+dGxPcxwxIdO3Dnn9XoeOui6il466fv2qDHba7fWtt20wv6h3ujSrq7tAnXYN8qBO4q44MMdHnziv/s+PPDdCU+a5MlZ3jzmzzfOONDTCw35ndcfBKDmEqOOrumpe68u+N+Lnzv545vvruq4u9v+6q63ftnrrNdd/92yX9xf4ccbnzzx/fsQ//6HPPoAkID+awzzmAM9Bkrvcg+MHvUgOEEJWq96jxMP9z6XNbH5SmEdBOHXRBg2Eo4NYiFEYXnex8L8SaqF94tdDGfnwrfVsF58G6ABC5giHhKud/4CBGKyhDgvIh4qOwv0TwOVGEEHVtCJF6RgFC2YQSlWETYbHF0KN7fF7nWRgyNUYQnFeEIuhtGMtIFh/Oy3RvzNUH9vfOEN8zbHvdWxdvszYr102MME9jGIxQNkAIcYSEIOsojOSaKLIpc9TjWyIIqkHBUZiUFKZg5951NfFk/3RS2e0YufBOMY0VhGUKbxjrdDZe7UOD/5uceNbZRhLGkYRxsSiI8/LCQiD3lEPebLl34DJu902ctEPhJUxxxIJJ0HxSs205KTxF4lpXlJTWJyfdbMZic5GUpPjtKUpRSlZFj5Slm2ko3nhGU6zVlOWs4Sju+U4y2FqTJ65g6Xyv7boR9zycs92jNmiktmswT6LIIuc4mLpGY0tWfQFm0yfNuEaDe5+U1xfpCMFyVlRsG5UYvCb53uBCk8RSrPeNrSpDhUpftUqjt8HlCfgkRgTGFqSJnWlKa7tGlOFdjQaTLUp44EKiR7akVoPlOhR/1pNSNaPqamz6mZhCo2pfrQpk5UohX15jhZSs6EprSWX0UpHcE6VrHakaxn/Y5LfZjPP97UrTuFazH7+Uti+tOYQkVmXpVJ1IUGtahIZeITBTvFpP4Vi9es6lOvatWsUjScWu1oZIeUWPZx9bJoxWNmU7nZVWLWrJoFLWdbs4TiNIGfOp1rau9K14KUtjynbf4ranGqWtqyljRcINAWJGnYoe51oL/VRW6/s1tmEtaZxzVqchGiBAIlQRdUEA0VjlVZbTKWINElzXQpa13HYhWyBrlCdLAgEDNgAQuZOlZX6SdagpgXvYxaryu9ehAowCYKGdldPe1a19ZyRL/3/CeAB+IFKlDhCxo5aBOX+xEFD5a+vKouVa+JEcVG9boX9i5JPtrOkXY4Y/JF54dRMuASw6zCxZFsf1e7YtuaxMGFZbBHdtYZoz2YtzKOcHfB+10Vd2RUwimV1XzcWB6ThDHWkWtYSXpSJoOkUn5pQnzY6+SyVrkkVCgOZWTL5ZQoCldrZckajNAaI6wBxxDWK/5gbwLjlaxhCoyZghqou2Miz8TCU8VwoUJcJj4TxcT/hAmg+VulvvaWJm3mkIT1LOhFa7hNfob0Z6+sqjC3ydJxMnSOEa3pNLfJ0Ua+M6jtrBMOe1ompg6RgE/8kkH7dyeJxkms8yTVJ0QHv7TWM55x0i4x8EYMJ4r0g06c29F0rUyYDsq13kCGMrwh08GVAoHClSQK3+iaZogOGoLU2aTAawxJ8MsRXHYjVifJ3GoQMouCu+41W2XX11YfVOAVJpXO29yBwjdTDhYlgs7b2tWW91PonaT23TvQ5Ua4U/hNFIbLB+CBgjhTCF4UGFlHRl95LW1iaxUSlcdEXxluZ1qKexWnXWZDYcluY7ablQU1iCzvTe9eZk7zmtv85jjPuc53zvOe+/znQA+60IdO9KIb/ehIT7rSl870pjv96VCPutSnTvWqW/3qWM+61rfO9a57/etgDzvVAwIAIfkECQQAugAh/h9HZW5lcmF0ZWQgYnkgb25saW5lR0lGdG9vbHMuY29tACwAAAAAyADIAIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMFBQUHBwcKCgoMDAwODg4PDw8REREUFBQXFxcaGhodHR0gICAlJSUsLCwwMDA1NTU7OztCQkJHR0dNTU1QUFBWVlZaWlpiYmJoaGhubm50dHR4eHh/f3+Hh4ePj4+dnZ2qqqq1tbW9vb3Dw8PGxsbJycnPz8/T09PU1NTX19fl5eXp6env7+/y8vL19fX+/v7+/v7+/v7+/v7+/v7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8I/gB1CRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt3Djyp1Lt67du3jz6t3Ll2yaMGLS9DWqxYERBzy0DB46xgEKB5BRjNEahgoVMGKfHOZh2AEUrHGiIDb8RA7Yx5EhO8DaRTVqLmBHbzaMNQnn2UwkqiEzRo3S1KmxAne8GiIX1A5gI+18G/FENmuGMmcOcczsw2SQIkce8UwTx0zO/gTdrhqiaOCfj8qWDRFNc85ogK6/DXE+bfXEgz+0kt+xFfn9PVZfgMUZNd1m9V13n08HOvdQgzxo51p5D5EHGVAWFthQhsu9t2BD9hkhn4ciPkjicgQOSB6AKz6YonoKRvhgjPLROON8Eg4HEYc/8eiQj0WFWN+JPwlp4oEo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AAAAyADIAIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUHBwcKCgoMDAwNDQ0PDw8QEBASEhIYGBgdHR0mJiYtLS04ODhFRUVSUlJcXFxkZGRqampwcHB4eHh9fX2GhoaLi4uOjo6RkZGWlpadnZ2jo6Oqqqqurq6zs7O5ubm9vb3CwsLIyMjLy8vR0dHa2trq6urx8fHy8vL09PT+/v7+/v7+/v7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8I/gB1CRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3L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6FnPk37wdKUdk2AT29W5I/OwhyLqo653JvURj35/bN9G5fomW3jOmxM7IV9nGCdyeEJsoBCHcSLFxLtBsXeBIoctPEEFW6i3iJGiY+/wmNygTkq3ddJkBxD5OJejkaR10mWJdAY5vbnKyaDCBRB1wTfZfsocb6xAHCtsqypW+I+Vw+KFLGChwlYJw3PGTJigqIY16645UNgQBjC0QedAD7rQh070ohv96EhPutKXzvSmO/3pUI+61KdO9apb/epYz7rWt871rnv962APu9jHTvaym/3saE+72tfO9ra7/e1wr3pAAAAh+QQJBAC6ACH+H0dlbmVyYXRlZCBieSBvbmxpbmVHSUZ0b29scy5jb20ALAAAAADIAMgAhwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDAwMDAwMDAwMDAwUFBQYGBggICAoKCgwMDA4ODhAQEBISEhQUFBcXFxgYGBoaGhwcHB8fHyIiIiYmJioqKi8vLzg4OD4+PkNDQ0tLS1FRUVZWVlxcXGFhYWVlZW1tbXR0dHp6eoCAgIyMjJaWlp2dnaSkpK+vr7a2tr29vcXFxdPT09nZ2fLy8vr6+v7+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wj+AHUJHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu2rdu3cOPKnUu37lAzXLScsTO2jRgxbLTaseLAAQoHVviC9eJgiQMfXLKS8dH4sYMyYM8YLmz4DFYomwujgAJWimPKjqlgrYz6MdjDojljhR3aAVjLpxuvbo36du3Dq3/b/sqa9ercp19zpj17uWzivHVfxY3bN23g04XfRu56OncfymP+F24ufrhX6r2nR1+ydM6cieWxW41v3qibJ5SntIlYPLl39EjB4ZwDcEB03XNWHTjeUV5E9wVE6EkHVB1uuKEYhOshRR+E2gGVBm1p8NehUf1151CJ4P3UBnf7PYQiUgrWx1CMQG0xoBYGDijjUBGy52KGP/WIYX8ajtjQhkEayRCSJH4HoZNBQnmilEXR+JCVPmHZkJZECfkjkUECeaKYRTF5pJI7mbkkmkK96CKVPLk5JYBHcbmQnTrhmZCeQHk5Jpg++XkkmV2ymZCaaRqKEKJtwrmQnD1BuqSjDdlxIUx8HpSpTZsW1GlBcXBh2BZyxCTokoSmmapCpy4khxP+xb0nkHsrMXqoogrRqpKti+JqEBi/gaHLffm1eJKkj1KqELEO6JcSsqwquyh3TggoXoEnfTqQtgJZGxq2JnGri7gxNljcg8eueqi6CJmbG7omtcoquwf1yOtH9xqUb0H7ctTvQP8KRB+0IRE8LZ1z8oaSwfVK2zB64mJEro45lofSxBZfqaO8BdOrr8f8guyvyACTLPB6AQtERxiGhUGHiAdyGLOLvnaU8s3CMWwQHVLg5kQdTyJ8pMP6En0QXnpdOrTQkzKdLMQUPyTGgGJUXJvVzGmcsUODxZYY1ghuGbVDMXK8aHRPDImc2tV9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//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8I/gDjCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql0LFk0YMWe2nqHSoMGUuGG1NLjRgEiWrGeW7O1LAg3YMHUbkKgbBmuVxIsbVAH7hC+RwVCwDr7MVwnYupEVN9AsGvTor30379XMOfUNsKFDY42d+LPlzZpvW/5cWjRp2p9bc2at+vVX2nVnQ66NWnff3K6fo+69+Pfy4MWJ64a9PPlV5Ke9/haXbnU8Ed7Ar5o2jX27euGrj3cPXxW87ejn1TvPL546farr+YYafMaVRyB3ASqXYHP4QSccetep599SbKwxEX7xGZgdUmZEoRgUZkRk33fzcZhEdHg5ZJ6DuB1FV2xUQBRgdRKmZxSGSch4YFBiXGHFGBJhWGBRIzpUpE9TmDaFiCUeteJDT/q0hXNdyLgfUjP+t1CWQDVBXRMyTujkjiqS2ZOQOm5o1JEMsbmTmwrBuZAZX3wRYkxRNpQnT3tueSVEVrhmBZ5iqljomYcyxOVDYFAHxkAVroQmlGY+FKlK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AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMDAwMDAwMDBAQEBQUFBgYGCgoKDAwMDw8PEhISFxcXHBwcIiIiKCgoLi4uMTExNjY2Ojo6PT09QUFBRUVFSkpKS0tLTU1NVFRUXV1dZmZmcXFxenp6gICAhoaGi4uLk5OTm5ubpaWlr6+vvb29wsLCyMjI0dHR19fX3d3d/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CP4AcQkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gJ55B43Vs2IFjkgxpsGSM1rRr24Yt02BEg7sjymClaxev3q9Q1tposDYK1sANBhcGOxjv3QZYG9d9DDYxYctDsGLGXHmyY82eJ1cWfNmGZtKCwfYNjXX16sqKOV/drLiza8izQ9sdTft0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YbjDIX6Wilv84hjPuMY3zvGOe/zjIA+5yCZHTvKSm/zkKE+5ylfO8pa7/OUwj7nMZ07zmtv85jjPuc53rvKAAAAh+QQJBQB2ACH+H0dlbmVyYXRlZCBieSBvbmxpbmVHSUZ0b29scy5jb20ALAAAAADIAMgAhwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwQEBAUFBQYGBggICAkJCQsLCw0NDQ8PDxISEhYWFhgYGBwcHB8fHyQkJCoqKi8vLzQ0NDk5OT4+PkNDQ0lJSU1NTVNTU1dXV19fX2lpaW9vb3V1dXt7e4GBgYyMjJaWlqKioqysrLW1tbu7u76+vsnJyc3NzdDQ0NXV1dzc3OPj4+np6e3t7fPz8/7+/v7+/v7+/v7+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wj+AO0IHEiwoMGDCBMq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Pjkmfaalb5zgHs/YSZGEJo6h5XTSx1hnMj+Zl6N7A2mfKHMwnNlCULKGab5oOlIN5mZd7sIjC9th1IEpUxA5DBnTGUXMSoG1HbDgniwgpbZFmVcbxAQaJmjoKL59NXnboIUnMGELSga2qV+97KbI2kUjdgquiTLtpQS7KNdmSqBj3WxtRxvb32ZKtYUy7hLFGdvn1na3h7LtqDwb2OHekHaPUm4XpZvd9+b2cZm9b2fHW0iifUq9Iz1vp2Qb3wt+SrtdtO5Y/3vTD791wXM9cW3ne9MXZ3i/ibJwhUf80LWBKFdslKAcD19lCsqZAli20BwuYKUMzaEzV55QGii4IStj4LUSxjAWL1BhCoily9zYQvSiG/3oSE+60pfO9KY7/elQj7rUp071qlv96ljPuta3zvWue/3rYA+72MdO9rKb/exoT7va1872trvd6gEBACH5BAkEALgAIf4fR2VuZXJhdGVkIGJ5IG9ubGluZUdJRnRvb2xzLmNvbQAsAAAAAMgAyACHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBAQEBgYGBwcHCQkJCgoKDAwMDg4ODw8PERERExMTFBQUFRUVFxcXGBgYGRkZGhoaGxsbHR0dICAgIyMjJiYmKSkpLCwsLy8vNTU1Pj4+RERESUlJT09PWVlZYmJiampqdHR0fX19iIiIk5OTl5eXnJycoqKipKSkpqamp6enqamprKysrq6usLCws7OzuLi4vb29wsLCxsbGysrKzs7Ozs7O6enp7e3t8PDw9PT0+fn5+/v7/v7+/v7+/v7+/v7+/v7+////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CP4AcQkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNo06pdy7at27dw48qdSxfrGjBf2BCqy5TQFQcOTDjAMkgrHDRo4IhVg8PBEQeN12Qd4xhymLBRAgMODAUrG82ATbABW7nxYxxYp5yubAWs4NCbsb4G7YC0aciOseJefYQ0bcG6f9f+Wrq0bt6QXW+eLXt5bOK3TeuOnpu48OCzgRNHjvpq8dPKYf4Dbi5+uNfdu6d/953dfNXy2iPewbP0e3Lv3CO+wf3kTdL2410FoHsMyeGcA3IIBAgcbwQiFHrSRbRggw9S19tDYVA3Bi5rzCYZUPARyFCHm334U4gQhfgGcoqdmN9DK6LXok/2dedQjV8c2AVQA0KUo3g7/tTjQwNCWB2NFqaY5IlL3mghiide9xCUNEp5o3A1gvjijVv2lOWU3A3pk5gNkcmTmQsV2aSXazJk5IVIrjflk1Z6Waebd+5EZUMhfkljl24CqqegCtWIpk6HJpQoTosepKaccfKmJKRsUuomne2BmGehm+a0J54AEkrSIA5K5CefouJ0aqAQNvoRHf5YBHZFHRG5WpCtNOE60KOSnqQHdXxM2quTlurZ5kJvfjpSGb+VkWKnCClb0nwTSZtQn6l+ZB+cqEKYYrYf7ddYfxGtimyYB4ookq4CsYuLuxgZKF6CRKYLEa/pnfSmsPkSO2xJGRa34ZzFFoqpcyhZGy20BymsLcMGORwxluB2ZG6h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AgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDAwMDAwMDAwQEBAQEBAUFBQYGBgcHBwkJCQoKCg0NDRAQEBQUFBoaGh8fHyQkJCkpKSwsLC4uLjAwMDIyMjMzMzU1NTk5OT09PUBAQENDQ0ZGRklJSU5OTlFRUVZWVlxcXGZmZnNzc4CAgIiIiIuLi5KSkpiYmJ+fn6enp62trbGxsbe3t7m5ubu7u7+/v8XFxcvLy9HR0dra2u7u7vf39/r6+v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wj+AAMJHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu2rdu3cOPKnUu3rt27ePPq3cuXLxwzZ970NerlwZIHQLYMHrrmgYoHkFWsybrHzJMnZPiEpXIYiOEHVrDuoYLY8BPNXx9HhvwAqxnWqsmALd3ZMFYVnmtLkYinDZs8SlevxirccWuIZ1Q/QENQj56hn3Mjnugceu3OENtcf9AmUJwqjqn+xAmqXHnE7+HHAy3PGuIV2JCvzJHumQ5Q2rQhzo/+wP5P/LlBBKBhXRgXWRf3GWgcRAWWh+B/Cj4mYISQbbfEfdsB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X6UNZRiDmMHSGONIfTE/2QMc3IAatLv97XCPu9znTve62/3ueM+73vfO9777/e+AD7zgB0/4whv+8IhPvOIXz/jGO/7xkI+85CdP+cpb/vKYz7zmN8/5znv+83UJCAAh+QQJBAB/ACH+H0dlbmVyYXRlZCBieSBvbmxpbmVHSUZ0b29scy5jb20ALAAAAADIAMgAhwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwQEBAQEBAUFBQYGBggICAkJCQoKCgsLCw8PDxQUFBoaGiIiIikpKTIyMjk5OT8/P0REREhISEtLS05OTlBQUFNTU1ZWVldXV1paWlxcXGBgYGdnZ29vb3V1dXp6en19fYGBgYaGhouLi5OTk5ubm6KioqioqK6urrGxsbS0tLe3t7u7u729vb+/v8LCwsfHx8jIyMnJycvLy8zMzM7OztHR0eDg4Obm5vr6+v7+/v7+/v7+/v7+/v7+/v//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////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KfP+Sl6aPJjw+LWujcmb78kv3MokyoK1s5yj2Nw7c1lJYrYlTNDsJxJvps0vmfOc3exL2urZzUuGE59h5+Y/Vwqqr+RwTAi9EzYHkdGxPRRsl/noREcaVofts5wtDadAz3PQhsaSoRed6EbPOFy2xvNMdE3YUruE14b15HNrompVVxrTMHz1SzjtqVkj+te2FnWcy+Q5SL+XUbqVGJUTzepcITu6F242djUN63Gv1Z6gHnWc0z3tn96X2KfWyRAqVOBqKraVx2YupV8SBfBIgbFjXnasf2KHD8/GCC8uaYnR/ZImAEhDTVQvTewQhSKEQAp0sI6756uTM1QIzPzNTuqg8A0TMhChNUmAGYKz06H88AYJQ2EDGybi8ufA/Cop0gKAxmYVna+H51UxFBOms9+rDF02Ra8KEyrEsjBIAQoqz4rToa4VMYAn6oTxCWZmA/Ss/4QOZBCDmb1O9rKb/exoT7va1872trv97XCPu9znTve62/3ueM+73vfO9777/e+AD7zgB0/4whv+8IhPvOIXz/jGO/7xkI+85CdP+b0EBAAh+QQJBAB+ACH+H0dlbmVyYXRlZCBieSBvbmxpbmVHSUZ0b29scy5jb20ALAAAAADIAMgAhwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDAwMDAwMDAwMDAwMDAwQEBAQEBAUFBQYGBggICAsLCw0NDQ4ODhAQEBMTExYWFhgYGBsbGx0dHR8fHyEhISMjIyQkJCYmJigoKCoqKiwsLC4uLjIyMjU1NTg4ODs7Ozw8PD4+PkREREhISExMTFBQUFZWVlpaWl5eXmVlZWxsbHV1dX5+foSEhIqKipGRkZaWlpycnKOjo6qqqq+vr7m5ub+/v8PDw87OztfX19/f3+rq6u/v7/Ly8vf39/v7+/7+/v7+/v7+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wj+AP0IHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu2rdu3cOPKnUu37lYxT5qQqTMQTRcvaLj6Bay1ThIGDEIwSELHzxQGPRjEgKL1ceTJWcHEgCyZQZgxiREnHoMVtGLEIUhfJRIaNREjlzkjwQq7c+TZVzlvvny6NQOsvXsDF93btm2sxncj323ct2Lkzn/njq5bN/LYl68nDy56OOruV7n+i2auPDd5yMurR44OnXt74oixS9ZOnr5u8dKt4vfuOzl68+qlJx97QrnhxkTfffdegvLFEBQanQ1xRkTqzZdbg/v9xAZ8DKwBUYb6cYjYeT0ABcV5VEDkX4lByZEGGnNItGKCoQFF43MP3ZifT2H0JgaF1DVoo5A5EunTGfIFVuR2IgIFYkNP8tQEh0x8KOKKNpKoopY/YZkjiTraSKBDYXY5ZkM6Vuhgl0ai2SZPaqqIYZM/RbmQnTrhmRB+XvrUJ5pc+hkooBWeCaehC5XpJ6IKpfnmTnEuWR+bycnJJI1O0umQnjhxehCfg8IZaqKj6vQnQzMympOiaKqKE6v+qAZZKaWTkvmoqbcmpKanNvFakK80ATsQqAF2Waqux76a7EGpuieRgSvBmqirCkGr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AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwQEBAYGBggICAoKCg4ODhERERMTExUVFR0dHScnJy8vLzg4OEREREtLS1ZWVl9fX2pqanR0dH5+foiIiJCQkJqamqGhoaqqqrKysre3t7u7u8DAwMjIyM3NzdDQ0NTU1NXV1d/f3+Dg4OPj4+vr6/Hx8f7+/v7+/v7+/v7+/v7+/v7+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wj+AO8IHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXYvxjBcvZ7i6hbvVjJUGDaqYEZilgY4GR7Jo7fs3cFYzTfwCNnGmC94GJvB2weoYb+QGk69eeXzZipTCiqdg/Qw4NFbFRxQzscy5wWnIrV9fhl0atI7TqW3jRu139mys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wHXslFkTPN5MIlHEX+2gKk0nXVXxOG13QE4VQ02nCWIwDm+pknLmrHwqWdjTHcDQ6QY8AQxaoTlebq6VKcxmCm4YyBn20pWhd4ULVagCZdnC9KY7/elQj7rUp071qlv96ljPuta3zvWue/3rYA+72MdO9rKb/exoT7va1872trv97XCPu9znTve6290sAQEAIfkECQUAggAh/h9HZW5lcmF0ZWQgYnkgb25saW5lR0lGdG9vbHMuY29tACwAAAAAyADIAIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUGBgYGBgYICAgKCgoMDAwODg4RERETExMWFhYbGxseHh4gICAjIyMnJyctLS00NDQ4ODg9PT1AQEBBQUFERERHR0dMTExTU1NaWlphYWFubm5+fn6Pj4+goKCysrK+vr7Dw8PHx8fJycnLy8vOzs7T09PX19fa2trb29ve3t7h4eHl5eXo6Ojr6+vv7+/z8/P29vb+/v7+/v7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8I/gAFCRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXryvfwPEqluzYgWymIHFQZY3WtGvbvlXL1m0bBycc6D3RBuvdvHv7Xv2rF2+bLmt5OFjrBStiB4oZO0682IEXxXsLY8WMV/NVzoD1Roa8GCtpykhMjx7dObPp1p1fhwaMGrLp2jxun4Y827PV3nqxAhddObLq4qWv7mbdW3bhvM4zI0+se3X14sOFP/dddfjy5Fa//qdWvroybOjKzzuI3hr3derKcWe/Ov/39sLlx4fPf7y2evbohafedLbFt9x7vN23Hn0Kaicdcaj1d5qEzG0H4IICAueegdZxiF2DDD7oIGziUQheVeI9GCCK/6Wn4YEewheefCDaJ2KIJPJH3nQmrtVihha6eN+GM8JY5Gr1dVejkg+WuGOET+72I4vNCSkdkShiSRWBPCRJlZdTeafjT3SMEcUJZMgRkZP7ETglT3OcWZgUc0CkIoZUDmlkT2PURoadWk7FJZg6QTEkRIRGJSaPEJV5ZpopsdmQpA05iqaaKVkKqZ353QlRnKHRiZKnD5HqEKhz1nkSqnqJWuqA/oEq1Oduf57EJaB7MjTraLWatGtlvU5K440OGXolSokilOxBxraHUrO0IaogpQtRK5K1CWGLkLYfcWtQim9WG+6142Zb7rbndpvut7DmWm2sId1aKrzb0tutvd8OC5u0xJa0rEH/FhQwRwMPtCiUDnnbkcIEMTyQwxpBLAi4VSa87sIXN5zxwxtH3PHE7XaYML4Lk9ywyQ+jHLHKE+sbGr/7nlSwQDMLUjNGNR88YaljliTxzz2TBLSbFU/6MUamGl00Q0kL/fGd8o7s7rUsRy3s1PFW7TJ3DN18Uc5Ldh32SGA3GXS1Z1+bdrZrb9t2t29/2+nTR1/UtLhL4x2k/kl3KwS11liDZDXTgIvsc+Ef9iu24g6VJVHZMTvktSCORwR5aEMj7BBcda0Zd0GZ7/wQ53JxymjCc+ft98eEBWYn3aqbGztCrRv2+uwH/R147iw/Nlpj8+6er/Cg914b8FIbTvhyl3O9EGjOK9R8cA/VDD31ko8t/bSfN9z9w98LFLpxPJ8+afgTo0/x3kqzzzTs7uvt2qu4s1s/6PBfSfzJ+6fcv/iIk9HVlPeu/7XMgIPSXkKmh6fFRa4hDITZy6qnQGVxz3xMU58GMYg2Dvptg5rLoAfZRrT4re5+GkMhx1QovvzFhn4mlF0M0fUiAvotgAVKXnFwZcNs4TA3/sHrYb2YV8GDRJCCjNteEhdYRIA1UWBPJIjOyIe6EbrNirkDoejOh0W5dRF0WqzQ/CzGQpCVsW8yHGP71Pi+M7qQNgj8IQ93GEQ66lCAyxMi7+JIxCVa0I9GjKLBBEkzQtrMkEfMntm+6D1Ggs+R4gvjiUQYwg5W8oOQTF8J2Si/F5Jxhrl7YwM7uaI2gtJ+p8RfDe04QFbm0ZUF1OPwZFk8PtKSf7f0H5IQyUtAOtGXUASmFHv5QAdOUJE5yuT4JmnJLVLSmc2kIhcvSUJqXtE/bsxmKlO4zRV2s4Xa5OQJv2lGPeUSgLaE5Q3TicdYqtOH7MxhKxOTSAgS85j2/hTmIPVZSH4e0p9TZCYmrZlFZUpSP9OE5kAVWk2GXlNK4fTkGiVqSnGmkaKkHOU4LUpDcurunAcE6eDc2c51ilSOdSwpPHcJ0HtGj4ktjWkxF1JPYxZmmQhliBTKUwXTEdSLPwVjJneKnJ6WL6iNxKZHP4aG86DhdkuNaCkX0tTZPBWGHA3lKlU6RJAKggun2cKaUHpHeTYErJER6xy5ukeWzlSJb12IGsQwBjU8zqXYy2dcFTLXut5Vppg76KgEe1SHws2gm8ToRhUbL1FCNaseQWNH9XdSAyKNrPM060hGatLE7TWQ/sQZXjUK0896hIE4HSxikfpI1kbsoJLV/io5keZYrDJWcKLk7ErfKTjMvpKtkf1hTck2Wgm+FCSoJSzflJtQaQoNtrXlW3QnOlVySVUvvt1sdjsL3JLFs0vFlVl4kYlPkiR3tYaNLHOf6dzNQve6o5puRW+rruvqtqu8vdd316pZqn13uCIBcGnLS1zA3hR9RKWMUZeL3vYqJMGkWXBJIKwYCbPXPGWs6nOuKl34PkTDe+FwSUCMFxHPF45eReti1Gqr7SpExUhg8UlgLOPMgje0guirXVMiYL7Sdccq0fFfk+namFCYLT5Nb1PWB9makPgEJs7ohe6LExqP1bJHSSCOYSJkyxkSKQHNqaDQhxQm09cpsUVz/sjyi2aWlXlref3Sl48S5h71KM1LrptRPsrmJbs5y3AmLVQmV5Q6R8nBUTFzdROt56LwubtMoXKb+2japhCaKIZuU5HLnLrZZrnRRHl0fxP95z0HekQElkqmUUTmLHe6yZEG9VBEDcQj9TnSp8ZRqhV1wU27OpOcTuyioYLnWG911MQutaNzbaNKM2XVW2r1nl995jyXscxrhvRSJO1nSu960HM2CrTHDOxfKxXW25a1UGiNoFpnydvHfcqlhzKcE5QnCsK5d76REwUynGcMWPH3bAB+FYE/ZwxymMJpnEAHrCR84Q2/ysMjw3BBzIEMSIDCGFSFlYtnfONa8bjGPTkOlpKb/OQoT7nKV87ylrv85TCPucxnTvOa2/zmOM+5znfO8577/OdAD7rQh070ohv96EhPutKXznSVBAQAIfkECQQAdQAh/h9HZW5lcmF0ZWQgYnkgb25saW5lR0lGdG9vbHMuY29tACwAAAAAyADIAIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQFBQUHBwcKCgoODg4TExMYGBgaGhogICAlJSUrKys0NDQ9PT1ISEhSUlJbW1toaGh2dnZ+fn6GhoaPj4+cnJyqqqqysrK1tbW9vb3JycnMzMzQ0NDm5ubo6Ojq6urs7Oz+/v7+/v7+/v7+/v7+/v7+/v7+/v7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8I/gDrCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql2L8QwYMGe4uoUr921cgVwa/GigZIvWvHv7/tXL1y+YBohRIP6C9XDixY0RN1Dc4MuUwISrYL3MN/NmzHurPH6MdfTkBqVPj1ZCmPWP0q47v74qWzZl1aiv3r6Ndbfk1q1Lg+YrvDZr3IpT+1YumXJs17CBz7ZqXK9vxL2bS85uWjpx2sOV/hR/bjo5beS5qaOvPr0q++igr6evKp87bu/iwRsfDxw9c9LnXUdee1S9R9uA9emmHXYKdhcef4FB2Jl/AWr3n2oDwiebhq4laJWH9C2I2IP6PSfhcctVCKB6AkrHoV4v/gAiVTNOJR9+J55Y3nwFUsjighlGBIYWWYAhlIEQDVnkkQiKGJEVj1kRVI0LQXmalEDdSKJDXAzXBVA4PtRlbV/+hN+OEEWBXBRg+tiQmruxaeZ6QTqEZE93MpTnTuxRmZCfIo3RRRdjSAToQYfapOV+D4V5khayZRGRow1RytOZbuqZ6UheIOcFRGg2uqlOO+6pkKkhSUHeFKDWWamr/iedYcZEfTr5UKId4UqQrgPxupEYcEYhRkSLmtjoliVZupCypyJL0hjDFXpsdaMmFKpJ11ZaLULZknQFcleASqeLjcI6EqrcmnuquiFVl5+dTZoGka8Z0WuvrSbd6yCjdjp7rr/N8lspwO0SzG143S677UcJn7qwQQ23+3BBpbKbLrnYWnwQuhtr7BHHEMeL27z4lqTvyLeWTNLJtzFrrcEMwwyxzBTTzJHLB1Obop0T39zzQBFz+7NGQW88LmitYpysxxQzTRDIHUH9tMi8pSzvSSxvZzXK+aq8ULHBTWsstjYDXbZAOMcssJ4ID11H0QeZgQViWMwq7s7a4q2p/t4MyU233aLy7XCLSJerdN9PtIbCXfAevqzTQEMukBmJB7Z40oU3Hp/XCtGbxYKSbl21Q1kz6NDno4VOOud/ipj2zGsvO9wToJ79tu2v11wb7WKH3a/OFgYePM+CW+s23BQfr3zxQhO+oeGZv+r4utNbK/nb10sdefUXb3716t83VDqPX7OO0Pgkh88Q2BH23v7vYw8ce8Dxsz3/y/fnXL/swK+Y9/D/89/eADhAASqMeUZDIMSWByTudcyBIYNg0yQ4NQpuL3p6yp4GpYM+0WkNfFwTn/kQNUKDdBCELcOdCvO3sRXuj36+k98L8TdD/fVHgcnD4dMYaMDBEfCA/j/0YQ+Np0OgHe15mkOi9DD4OAuibYNMpF4UredE7HGwhAU5oQjVVz4udg6LuwJjr8QoEPZ9B34xtF8NW8hC2K3RjWnk3xt1N8enta2IaOPhae4WRCL2sXl/TGAgF4jHtx0ROtBTYgarqL0nMhKKimziFLtnGzLWQYvrsyQmuxjCTHqxdfuqo9naSMc4wvB9MjQlDVVpQ1SqkZVsJI8ezUO8QebQljssJPJyiUsj6vKQMEokIpM4zCVGUorHpOIkH7jMCDZzgt7rJCdHt0VpfvGT59OkNrFJQm6a0HUuhCUcXSlHcZaSnKc8YyrRuUp2tnJCv4xnL/MozyEC0p6C/sQnIedpSOcVc5HPrGBAL5hMSv5TkgVlZkKduVBoVtKbWdymNUE50WxCNIwXHWNGyyjRFJLSjh8dpSjRFk53xtKcIB3p7UJK0v7tUXj6vGVMeTlTX/JzlzatKT1vCkwCIfSgyASqMhsqUKISVKgGDSYxlWrMDnX0g9Wkpicr2k2qfnOjl3yq6aL6m5Kq85UmHedXyxnWc441ne9a51nbCU+e1vOltdRpP91KV7nidKereaReB+pIvlrRr438q1H7OljBOhWr9JrCgqSQPqtGFLGWVOxoGOvBrU7VoyrNHUG8MJxPuW+t70wrWEF7EM7WxrNoLGtKb1hXuJ7uNqqL/qtrCzhbIMq1DlmA7aRmiRhIIjUhgiKURAJL3OsJJLjSwlxhawVZrGJkk9d0LEfGp1mRonQj1W1pZm2HkeyuVJZvpWWyeMvH217krnPNK2CNe17fMhWghe2ue2WkVfKJBLoUlepIqOtV0f6Lpd+9rnYFnBHvYiq89pUYgstbW5Ggt2J7jW97I/xbhlY4avPFL0g0XFX93re+BubueftbOwB3t78Pdlt3yQvTBockcbvhnWydQ+H3nmu+yr0wR7ZAHr8I0zr1RQmHryrdjahBCo+RQhoai1kCe/fEAA6xiTPCBStQgQtqmNQdWyteb4GLwV22rYtxAuH1VhEjYiDP/rB+7NOg2phUVIPqZeVMEjDA+AlGYjKdo+vhnJjRv2hdSRmSW+LtTtklB+ZygsnMYp+UubBTII9mzHS9SANn0o6Os2UX4hjVMOYn9Oo0ZT7tkz9HJC+u8bGZuItqvaja0Vs271wYN6dCCmTWR+ppjGJEL6T0+iimLhGBkZJo8xoFvcTW9YHOfBTmFlkpvzZKsKkj4mPHesxPQXazlU0d9h5b04t+SrSLMm33VLsoxca2U7R9bG67x9voBrd9+gyVchfo3ERJd5ilwm50u7tA8M63vBv07KTYeypPbva19x2Vfuf73wgP+FCcTW9xW9LX4Dw0uvE98YWHe90q3rZvgpQgcSYBB9ANJ48S5jYaLFmF5aoJ11VgTpkrkCFaWIFWbQhNFZ3HplBiQHIDoBAGrQALMcIyupoakPSByMorT+9K1NlC9apb/epYz7rWt871rnv962APu9jHTvaym/3saE+72tfO9ra7/e1wj7vc5073utv97njPu973zve++/0sAQEAIfkECQQAdQAh/h9HZW5lcmF0ZWQgYnkgb25saW5lR0lGdG9vbHMuY29tACwAAAAAyADIAIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMEBAQGBgYKCgoQEBAUFBQVFRUXFxcaGhodHR0hISEjIyMlJSUnJycpKSktLS0xMTE1NTU8PDxCQkJGRkZNTU1UVFRbW1tgYGBjY2NoaGhtbW1zc3N2dnZ5eXl+fn6BgYGDg4OEhISPj4+ZmZmrq6uvr6+ysrK4uLjCwsLLy8vY2Njx8fH39/f9/f3+/v7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8I/gDrCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt3Djyp1Lt+7YM1mynOGKVy/fvHsFTlkQZAENKFoHFz6cmLBhxF0WhFhAOUQXrJEnV758NTNlyV2QLHacBKtow6RNjy6cRLPkz1hdu4792TXq1Vhv385Nw3Hvwq8rL8gd/DVx2ZRXG86tnAZz3TSQU6YtfPpV6ZR/774KnTBv346L/k8+Xns4d/HJoT/X7px7c+zUi8e3zd479/pBvitHT154/+DNreebgIvBd1151lmFXXf5ReTGGWW8IRSD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kg0SsKIj2fDoKl2vTRPQoJwwYCVG2pmuVNDumL18QTha0MoWhPOhrMz9NXWvwxsgBHCtWEjLV/m7XQZP+MIb/vCIT7ziF8/4xjv+8ZCPvOQnT/nKW/7ymM+85jfP+c57/vOgD73oR0/60pv+9KhPvepXz/rWu/71sI+97FkSEAAh+QQJBAB7ACH+H0dlbmVyYXRlZCBieSBvbmxpbmVHSUZ0b29scy5jb20ALAAAAADIAMgAhwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwQEBAcHBwkJCQsLCw0NDQ8PDxQUFBkZGR0dHSAgICIiIiUlJScnJykpKSsrKy0tLTIyMjk5OT4+PkJCQkVFRUpKSk9PT1ZWVlpaWl5eXmFhYWVlZWlpaXJycn19fYeHh4yMjJKSkpeXl5ycnKCgoKSkpKqqqrS0tLm5ubu7u76+vsHBwc7OzuHh4ePj4+Tk5OXl5f7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wj+APcIHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu2rdu3cOPKnUu3rt27ePPq3cu3r9+/SddQ+fFjyhqtggkbRjy48OE1QxK0SKDjx+GrkCVTtow18+TKghOI3iB6ClYqohOQTmD6KurRpTd81hwEq2zKtG3PnhwENmysvlUnAC7ctw7Nx1tMVKNmKO7dy5sLff58dfHhEMMQUU0kTFDr1iP+aufuHSj41MiRQyyzO0EZoOk/r2///md83NdJQ3SS3wn8/Ng5xB94/tkHIHXJQYQgZfAl95yCDh6nQ4PxnScaRBYG2FOGGKYW3k8Z3jfhQyLC196IDpVo34nB6UcigP+dpyCMBloYoWQQxkchdCTeqJx9PnL4kJA+EdmQkTyFeKKCS66IIJNPOnkjjSlS2VOLGjKEZYweiuZjjjz6tOCPKX4JZIVdXjhkmlnuhORCb+qkZJQpNimmnQ2peOeCVmrZ505bvihjjWmaWaaOZ4aZp6FXBslmh8GZ9+iakYLIpp554skTplpqCiiLfyoUqJihJjTqlQcyqqWqgLIqqqv+OY0ZZ0Kz4lTrQbfaNGeEUPIqpXokeqqTiKf6OSipx+ZZKk5Yjgnmgylx8YQTXUjkbI+IiulopQ7l6tERsB3BBqTXkfthkZcKa6q6IFnRHha9AlsnnSd5QYUUXlgLarLGdomSEPnVJqi/A/+GkhLWMRFRs7AidK1JDy+arcSKkoTFjVo8m5y3BHFcEBhUVPGFRB4LVPIeJwsEssgSbefbEOaix+5BnDL0xHNNLDyzQTWLurNBNyeXc7zyBcsnvwsVu5AW+WVcsHAzIi3qsgcxDZ7TVUptaqoTr9r1QkPcWITGOGJbcdINHxR2emObDe2hu50s96Td0n2k3QzNze3+3XvnnS69nQKe9M8E9byu4D4jfriv8zKe6dEEZx25slo7TDXPlxek9NSV05x54Vyf/erXo4tuato8o6656oWzPlDEXseNN5yzK6R3uZTiXnfftPNu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Z2dnbGxscnJyenp6gICAiIiIkpKSmpqan5+fo6OjqKiorq6utbW1u7u7w8PDyMjIzs7O1dXV3t7e7u7u/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CP4ABwkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNo06pdy7at27dw48qdS7eu3bt48+rdy7ev379h7YBx4gSMHa2CCRsOLKWBjgZInNzBaqfx48iTv4JpwNkEZzBYN3f+DNbEZccNoGA1DRm16q+jR2ON3cDz0jp0JrY+rWMobt1IUAfvLfT3wDZTak9pE9Ez7aDIlTOH6Lw25wbQk5tYPggO7wZxIP4KFw7U+27w4r8jKf89zhbrnbeIh28d6PvqJuQ/pG375/3r+Z0X3Hr7DbcbUAJCJp6BwyHIIGT4XUcdgBL+FCFnEz5nIYXXqZeegAh6uJ+IPo13Gn39OcQfdj+tOF+ECKLI2YPEqUijgyYumGOLNF7IokM+AhXkQ0P65KOJCo4IYoskNoQkgSWq5+J+MsYII5VXlihjgjU6eSOPO9oYZk9cFtmQmTyhuZCaOh3ZJENPhrikim/u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vexnT/va2/72uM+97nfP+977/vfAD77wh0/84hv/+MhPvvKXz/zmO//50I++9KdP/epb//rYz772tw/P/e57//vgD7/4xw+XgAAAIfkECQQAegAh/h9HZW5lcmF0ZWQgYnkgb25saW5lR0lGdG9vbHMuY29tACwAAAAAyADIAIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFBQUGBgYJCQkLCwsMDAwODg4QEBASEhIUFBQWFhYXFxcZGRkcHBwgICAjIyMmJiYnJycqKiosLCwuLi4wMDAyMjI1NTU5OTk8PDxCQkJJSUlOTk5SUlJXV1dcXFxjY2Nqamp1dXWBgYGEhISJiYmOjo6UlJSZmZmjo6Oqqqq2trbFxcXR0dHX19fd3d3z8/P+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8I/gD1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/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wj+ANUIHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXQuTixQpXLi6hTv2iQIVCmg40WoXr96wUhQI5iBYCtbAgwuDPeL3roIkWBnndQz5a+LEWC8rIAx2cmMVmWk4Fg36K2HNWE9vFqyg8+e8mV/T6Lwa81XNnC2T9hx69F2wqlWnZi3csuzYnmFbrr06M/PcXpOT7v0ZOHHWw1Ebl4589+zlwVv+334uPrr337fPl/YaXnB25q653z4O/rrz8J3VU+dt+rr7q+2V15VvfnU3Gm34jZegeQTuN11/2lkVYHzeGVhgfbZZhZuARknRBBNTSCQdekB5CKKI+gVlYogCKZGYEhFNCJSLq8EIkYw/0UgYjE+8BgVEBCrnU4/J/fhQkN8N6aMPz/kAJHlAAdHkkwv2JGVwTKbo0Ijr9cQlkFp6qR6ODZHJk5kLoalTgEgCSZ9PbR75ppeybUilfT/ZeSSUeZL35ZFhPhQGGCv9uWWgDg1a6Jj+cZhmoxFdccRm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5jv/+dCPvvSnT/3qW//62M++9rcXz/3ue//74A+/+MdP/vKb//zoT39GAgIAIfkECQQAdQAh/h9HZW5lcmF0ZWQgYnkgb25saW5lR0lGdG9vbHMuY29tACwAAAAAyADIAIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMEBAQFBQUGBgYICAgJCQkLCwsMDAwNDQ0ODg4PDw8QEBARERESEhIUFBQWFhYaGhohISEnJycvLy82NjY8PDxCQkJERERHR0dLS0tQUFBTU1NWVlZcXFxiYmJnZ2dvb293d3d9fX2Hh4eOjo6UlJSbm5uhoaGqqqqvr6+zs7O3t7e8vLzBwcHGxsbKysrMzMzX19fu7u7x8fHz8/P09PT29vb5+fn+/v7+/v7+/v7+/v7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8I/gDrCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzI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ZYjkdTR7NcmjKxNp+mq5IJMWTKVJkum1gCE3pI3sjUt3OpQ49i6QnSObB3JquqSaJK3uAOqqcBkfjKWYRTaIaG0Q6pPsutfbrbNCfq0SYgsEDFJ4Qhb0ONZBF6S2r1UJtG8b6IFMeyXXdm7ikGJXqKjZKd++0J6PgmeqCO0o5wb3tsm9bnCzj9vvfkq5lzJvqaS7KPdmSrfZPU9vx9so4f7RuAE+8KbkeygHV8q+Ad7upgSc3v92eMGJUu+oJDwoF+d2wym+cYjnFN4fl/fEy4dScahk/CcnZ3i/+b3iqDxc4RHX98iFUvKnpLwnN+f4ylXecn+HHOAxp/fMg1Jzp+R8J0eneceVvnOHB53mT09K0YsydaYkPSdXB8rCqb50qUdd618n99C1PnZ0cxMpWUc5eHrAmrWDJQq5gQJW4N4auX8lDUC4zA6YvRS8653vU0lDFGzAAygAtu+DL/zhzcL4xjv+8ZCPvOQnT/nKW/7ymM+85jfP+c57/vOgD73oR0/60pv+9KhPvepXz/rWu/71sI+97GfPk4AAACH5BAkEAGkAIf4fR2VuZXJhdGVkIGJ5IG9ubGluZUdJRnRvb2xzLmNvbQAsAAAAAMgAyACHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMDAwMDAwMDAwMDBQUFBgYGCAgICgoKDAwMDQ0NDg4ODg4ODw8PEBAQEhISFBQUFRUVFxcXGRkZHBwcHx8fJCQkKSkpLS0tMTExNTU1Nzc3Ojo6PT09RUVFS0tLUFBQVFRUWVlZXl5eYmJiZmZmbGxscnJyeXl5hISEioqKk5OTmpqasrKywMDA0dHR2NjY4ODg4+Pj5+fn/v7+/v7+/v7+/v7+////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CP4A0wgcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNo06pd+/ILEwQIlHzZ+kWLlrlhv+BAgALBjAt4r07h61dK2CdwEVyA6wSrlsSLEWgBS3gG4RtYifS13NcIZcWQEWCFGxk0Zc5++Y5GzRls6dJYXyemvLny6NqbP8seDZq06K+pca+urPqrbLixQyMHjtvv7eDOgfc2fdW379PEUQwXblz5b6vHv/53zR7dKvkZukPz3g2cdXHz7rV3ty6eanja0NFXb67fK/3F66nXXnbbBeead8nRhx9rzzEoHXvmTQfggNzBR+B80yWYIXP5NWjbgwJGCOF48Um0RRRQcCFUfu89dGKKSt0HkRK+KRGUjA/RCJqNSJ0HURXNWQGUjw8BCZ2QR/1X30I/SOjDkBIuqVCTrz2ZZIkPsSifT1pC1OVRODYUJk9jLlTmivx5meZPRDrUZlFKehkllCMyFKdMY4gx0ZduYplSnnv62RCfKAE6kBdGKGaEFxGdmZCjISGqKKMQQXqQpR9JesGiaXhhA3SBDbqmm6OW5CmoanaYZakknYqaW/4SMiFnnQvdadJbr8ma5Zy70ioSrpC95Z4NXgpqp7EjsUhslsgqRChJymJakLQEUbuRtQJhm4a2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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDAwMDAwMDAwMDAwMDAwQEBAYGBggICAoKCgwMDA0NDQ8PDw8PDxERERISEhQUFBYWFhgYGBsbGx0dHR8fHyEhISMjIyYmJikpKTAwMDk5OUVFRVBQUFdXV19fX2tra3d3d4GBgYmJiY6OjpWVlZiYmJ+fn6enp7W1tcDAwNLS0uTk5PT09Pr6+v7+/v7+/v7+/v7+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wj+AOkIHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu2rdu3cOPKnUsX5ZcrVcC0qcu0TRQGDEIw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3hZxT5z9WWbXhNzshTZPrP0mXFMb3L2edLLjjSF/fonY3/4QRH+07yVpsjHv1vW/cz3r7pkLN+CqlDoP3piE74hvw8pOs34E8d9MfEztpQMaRhkFMxAq4xtvTMfMk5Jngayh1D8pOR1OvpRsz4jbT/n0jPgGFXQnxeZQUbm/Ax5zmA/J502ROZ94WfPCYcjoT9E5UZTecqATxeVOEfrDiR5zpA/J6k1hulC0fnOn81qdNaf5UabwmymAhQnIiQJWWIYe/XqFzuIZDVYyrZkuiAVdp9HCVtQghjCogSxl8IIXcsWXwhv+8IhPvOIXz/jGO/7xkI+85CdP+cpb/vKYz7zmN8/5znv+86APvehHT/rSm/70qE+96lfP+ta7/vWwj73sZ097hAQEACH5BAkEAG8AIf4fR2VuZXJhdGVkIGJ5IG9ubGluZUdJRnRvb2xzLmNvbQAsAAAAAMgAyACHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBAQEBAQEBQUFBQUFBwcHCgoKDAwMDg4OFBQUGxsbISEhKioqMzMzPz8/SEhIUVFRWVlZXl5eZGRkaGhob29vfHx8kZGRnJycrq6ut7e3u7u7wsLCyMjIzs7O3d3d5ubm8PDw9fX1+Pj4+/v7/v7+////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CP4A3wgcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNo06pdy7at27dw48qdS7eu3bt48+rdy5cpGCxZwPQ1aoUBEQY2qgweyoXBCAaQR3DJegZLkyZYzoSNctiGYQZSsJ6BgthwE81fH0eGzAArFtaqsYAt3dkw1hGeazuZ7Rh266urV8+u3XliGjRDP+dGbBy5UtW9IUcUQ8UxlTFBoUOfXn3E9aS0af5DHNNEOYMyQMPnHl++NvqjwXtDLKzdSvro8h/Sh20fPnHmD5l3WBPp/WcDRAIyQOBR2rEGUYPS/QThbw5NiJR6tgW43Ho/YUgEghtmaFR8jyGIX4kdnkhhQySuSFSCBwZoYIHqITgjg75FWGGOLu5k4UM/jhjihxoKmN6QIBoJn4omNnifkwEy6V+NMlLpE4w2WllUkA1xyZOXC4EplIdJEnekkg6RuSSUaUp5pZsswvnijWnS2ROWVW6IlJgJ8YmTnwcBeiWSRZrZIaFpIlpUi0369qSjUbK5qJ0M4XklpQtZuiWPD3Iqoac7xnehopWSupOaiaK5qJyZsqoTo/6RQjoipgppypOtmdKaHahd8vqlr2ECy9IZYYDhXJniFZosSsQaKxGqLJpKUrPHdgGdFxHB2qakJVnLGraNCheruBD9hYVgEnkLGbZg/IdunVpWqitI7Yb3LovzHoTrQoXlpli57lYX3BSdigqksAv9FZhEAkdH8MEGh4ofRI0FN9lDDas2BbSlqtqxofop96+yHKYKcrQeLwRFiKGR/JmrCWkbJ7cLNabd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AgICAgICAgICAgMDAwMDAwMDAwMDAwMDAwMDAwQEBAUFBQYGBggICAsLCw4ODhISEhUVFRgYGCAgICkpKTc3N0lJSVhYWGJiYmtra3Jycnl5eX5+foSEhIqKipaWlrW1tdDQ0N3d3d/f3+Hh4ePj4+bm5vT09P7+/v7+/v7+/v7+/v7+/v7+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wj+AOEIHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu2rdu3cOPKnUu3rt27ePPq3cu3r9+/erdYsbKFq2DCYslQccDDQZIpZ7AqZuwYMtgsDjKfyJwFK2bNnJWK8dJFjEQnjZNQjoIVtePVSbFsDg0RNGisth1sRtpFdWoHX2r7fs1j6BjTEokTR7rYNhWIs3VndhA0TBTdUcJEjB4dKeXhSWr+/04NVMx4B8gdfv/uXfrth7l3/7TiXreV2vXlG1XuW/j64j/x55h/4yHF3XTQTdfdTwdmlmBu3p0XHnwSAvXfgBTy196B+HEYYH7U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9rKb/exoT7va1872trv97XCPu9znTve62/3ueM+73vfO9777/e+AD7zgB0/4whv+8IhPvOIXz3isBAQAIfkECQUAaQAh/h9HZW5lcmF0ZWQgYnkgb25saW5lR0lGdG9vbHMuY29tACwAAAAAyADIAIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQHBwcLCwsNDQ0PDw8REREWFhYaGhofHx8lJSUqKio5OTlHR0daWlpoaGh0dHSBgYGKioqUlJShoaG1tbXPz8/a2trc3Nze3t7h4eHk5OTp6env7+/z8/P4+Pj5+fn7+/v+/v7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8I/gDTCBxIsKDBgwgTKlzIsKHD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sXyDouSv7rdTch5KnmWy6JyQGUs4vilONrzhQP+5w5NOtE4K3cpD26TRJ84ycMHUZ544AUC2wmuZCwVnnmABPVhoL48drWmdMEY5vDXxUVRcGRbLNShdyEIWuiARZOFEC6c6moOpJGmcZEEJj0FCeL856xyhbidbWLNpkTwVTkPF2EsaNVWGyexlP6XSDrr2uWmXI3Y/BdxGgXdTyO2gzkEF3UbB97zdnW9+N0XeRAH4Uuidb3s/xQnoaVFVEJ4ahXMlU9zhVFUgvhmJd4UKtJEtVjBeGo2D5UAJ4grISL98l5Kb/OQoT7nKV87ylrv85TCPucxnTvOa2/zmOM+5znfO8577/OdAD7rQh070ohv96EhPutKXzvSmO/3pUI+61KdOdZQEBAAh+QQJBQBzACH+H0dlbmVyYXRlZCBieSBvbmxpbmVHSUZ0b29scy5jb20ALAAAAADIAMgAhwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDAwMDAwMDAwUFBQoKCg8PDxMTExgYGBsbGx4eHiIiIiUlJSgoKCoqKisrKy0tLS8vLzExMTQ0NDY2Njg4ODo6Oj4+PkZGRkxMTE9PT1NTU1ZWVmRkZGlpaWxsbHZ2do+Pj5qamru7u9DQ0Nzc3Obm5u/v7/n5+fv7+/z8/P7+/v7+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wj+AOcIHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXZs0TRqvbsmiUbKDAZMzWufWvRsWDYO/JP6iweoXsGCwU+oiYVD3CtbEDBY3BmvYMNbKDAJTlhyZ8WXOksEGxox1dOa/DCgrZhz58mrFlE9bvopZ89fOrz+zDv3VtOnSqH/fft2aNnEksX2npi379ObdnmmDju5V+V/gpIfjLm4VOuzbzW3+dw+/3Ot23t2n7xAdHDX25qrPu5YPXvll8s9zS/fOPrtV6+V15R13VQ2IXH3t3WefUmuoMdF51BWoXltOZObEWxAB+J5wRqWxGGcYOmTgfKAhlUV4WEBUW4BUrYgUhEqoOGFQZnjhBV4RQbjeURo+1ONPUhgmRUQ/FjXiQ0f6NAZxY6h43Iv4IRmlT0yEx4SKUxo5o4hb9qSjjPzx2N51Po7J4k5FMpRmQ2iIIcZgMSXZkJw80bmQnQtpgVuKMLko5YI++SlilgyRER4ZfXbJ0JcSNbgSo1yG6RAT0zUB05oKYapQGhWScGFKmiIU6kGjmoRnQqci5OF2IZaU6kH+rxoUq6uE3lmrQif6xqept6LaK0KCtgTpnIreOV2MJw27aLEKKbtSqQVBS5C0G1ErkLVzYAvSrARxO5C3GoE7h7jibvsrrOfKmm5HwS66brfvjuRss8yiWu+298Kar6z7loTtv2aiBLB/DWn7EblPIpmwqQvP2fCiDz8ar0Dt2goorRe7m7HFCb40r72SEhsySR8D22+3J480MHxlEkzSyhwWHLDHETdbM6o3b5szrDvL2vNDZUwxBaI5Tjyu0RUzFPTQEiXt68bNGi3Q0kSv8cRuTbABpn6Rci2y1wxZjbXWSKZMsdnjoi22YlmLMWYYGc7sEMzuPeR2ZXC3zPL+3HLL7PJCd8sWBl3bXakwfSL+3K3iAxHOmeGJI+6w5BBTvpDjrFWJ9OZQP93xoJ0Dy/nnc45eGdol6zuysavT2zrIYLMeu+uzw44b3WTy/XemfavZ+0K4n8n77gkBiLDlNiOPs/LAMk6x8+NCf/x0pjv3J+kaY8/xbKBrH3Xo6IKvrnWol/+6yeerXjv666uP29bvl+1d8HETL+rvw+/tt/6+208q/sUz0/R24yTm8cyAPkNgQQb4nciV6HDUE98Cqyee0kkQXhf8FgWF5znuWXBM5msfv9I3QhEuMITx61oKv7bCZc0PgPfzn0Hop7eY9Y9/wIPh/2QYLQFK74f+ClxcEL8FxAc6kIAQROIRV7NBLGWQYk28ngezN8XtWa97pyPhCbWIMi5+C4XoYWEYXWjCLpbxiy/k4bR0OEM29lCNA6Gh7nCYPxvmEDMMJFDljDg5Pu5RiX0E5B8bGEhCDrIzUcTiFT9Yxe95r4OLpGIkrVhBSY4GjBEiYwtlt0naddJ2Y+RkKD05SlAyRo77s2Md6zZHVQYQjtdy4xphmS0fDvF5t4xeLvN4oCXq8U5FFCQwIZRIRk7SkY2EZCUpyUHRPfFoz1xR6kr4SfZV032ltGY2sZlJUXaTlN805Q5QeUNXxpCOr0TnOc25Q3W2k51txGMwDTlMP9ZTmMn+s2c+8bk8ffaTn80jZjSLaclmhu+RzkToQZOZUIYuVDaY3JEKt0lNim7xjGfzYkYxmjaNdvQ15LyjO+M50jeWdJYnjaMsVUpL483zl/ukZ0xh+k+Z1pSmAfVnTgF6wAgqdHw/neBAhxpUDBZVg0R1KFCzyNFpXvSaFQ2nNqXKTYmKkapRtaomJdMEENYvpbFs6UoFsoQxLeGr8DRpWlG61oGUtTJLWNJ28ubLXhYSpz3lqUHEwKQC6jSvNt1pYA/C1+00CQqmccIanHhUKCb1mAp5gmmgQDZFLhOZkG1oZhEiWdRQViBm0IIVzNC0iMLPogYpQxauQNocmVZ+HJ3+2mpbi5GQrjJ3/hprLcVKS53t8qV2JRlw/apXjDUWmsd1mrkee1llGtRUr50oVtkV3atq9Vm6tW1ItLtOVgpruEkcrEd4SVzxGlepQk2u1C6i3Ic2V7PvTVZ1tzpdjjjVjFB9KmpVlt3+9vYi3H2nd1lC3vDidbzgrWufCLqQxfjmuiJp71I3O+H4Qtej9x3IFqbTBZRkeKP5xe9+RRJgg6ShLqdBQqte5l+w7tbFvv1rAmVs4ikspgorFu5vd0xjkjFYJxJOL3oJcjXfOCFRGEYbkpuKNjNMh7YtKXFNpFyQMBiGri4pcKAS/JA0mMEMOSbwj3MSZKMOeScf/mj+iGdCKehYCrZr1gmVZzKGMTWphgMeipZ9ggXcVCFH0MNJXXxDAsaemSZn+MIXcGRoCvdEC9Phwmnru5Q04yQNownMDsKczrYqxWA3SQMUFhMFTt80uFMpl07WsNimrdcoZU61ko9i6aeAuii3ZoqqYR3op8RaKb+OSq1hPWun5HooxwZ2r3mdS6gEG0rPdHaxteRRqCQ7KNd+0bKNtG1dv9pI39b1tIky7KZk+yfnZnaPK93tSodbz+8G9rj1PO9P6xYp6eZ2s2ndbmDHOyjP9vV0UC0VCBE8K32ujBWwknDZLPwraCCOqZ8ScVb1RXNMgBNhMK7xsKhh4lT5OFtARk7ykpv85ChPucpXzvKWu/zlMI+5zGdO85rb/OY4z7nOd87znvv850APutCHTvSiG/3oSE+60pfO9KY7fQ4BAQA7';

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function getPixel(val) {
    var pixelVal = parseInt(val);

    if (!isNaN(pixelVal) && pixelVal > 0) {
      return pixelVal;
    } else {
      return 50;
    }
  }

  var MicInput = /*#__PURE__*/function (_HTMLElement) {
    _inherits(MicInput, _HTMLElement);

    var _super = _createSuper(MicInput);

    function MicInput() {
      var _this;

      _classCallCheck(this, MicInput);

      _this = _super.call(this); // Shadow dom

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.innerHTML = _this.template();
      _this.realInput = null;
      _this.value_ = '0';
      return _this;
    }

    _createClass(MicInput, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this$attributes$name,
            _this2 = this,
            _self$attributes$heig,
            _self$attributes$heig2;

        var _self = this;

        this.realInput = document.createElement('input');
        this.realInput.type = 'hidden';
        var inputName = (_this$attributes$name = this.attributes.name) === null || _this$attributes$name === void 0 ? void 0 : _this$attributes$name.value;

        if (inputName !== undefined) {
          this.realInput.name = inputName;
        }

        this.realInput.value = this.value_;
        this.appendChild(this.realInput);
        this.recognizer = new Speech({
          onstart: function onstart() {
            _this2.showAnimation.bind(_this2)();
          },
          onstop: function onstop() {
            _this2.hideAnimation.bind(_this2)();
          },
          onresult: function onresult(text) {
            _this2.shadowRoot.getElementById('mic-input').value = String(text).replace('。', '');

            _this2.valueChange();

            _this2.hideAnimation.bind(_this2)();
          },
          onerror: function onerror(errMsg) {
            // console.log(err)
            _this2.hideAnimation.bind(_this2)();

            _this2.displayError.bind(_this2)(errMsg);
          }
        }); // Style

        var styleElement = document.createElement('style');
        styleElement.appendChild(document.createTextNode(":host{--input-height: ".concat(getPixel((_self$attributes$heig = _self.attributes.height) === null || _self$attributes$heig === void 0 ? void 0 : _self$attributes$heig.value), "px;--icon-scale: ").concat(getPixel((_self$attributes$heig2 = _self.attributes.height) === null || _self$attributes$heig2 === void 0 ? void 0 : _self$attributes$heig2.value) / 48, ";}")));
        styleElement.appendChild(document.createTextNode(micStyle));
        this.shadowRoot.appendChild(styleElement);
        this.valueChange = this.valueChange.bind(this);
        this.speech = this.speech.bind(this);
        this.shadowRoot.getElementById('mic-icon').addEventListener('click', this.speech);
        this.shadowRoot.getElementById('mic-input').addEventListener('change', this.valueChange);
      }
    }, {
      key: "speech",
      value: function speech() {
        var element = this.shadowRoot.getElementById('error-message');

        if (element) {
          element.parentElement.removeChild(element);
        }

        this.recognizer.speech();
      }
    }, {
      key: "showAnimation",
      value: function showAnimation() {
        var element = document.createElement('div');
        element.id = 'sound-animation';
        element.classList.add('sound-animation');
        var spanElement = document.createElement('span');
        spanElement.append(document.createTextNode('Listening...'));
        element.appendChild(spanElement);
        var imgElement = document.createElement('img');
        imgElement.src = soundImg;
        element.appendChild(imgElement);
        this.shadowRoot.querySelector('.wrap').appendChild(element);
      }
    }, {
      key: "hideAnimation",
      value: function hideAnimation() {
        var element = this.shadowRoot.getElementById('sound-animation');

        if (element) {
          element.parentElement.removeChild(element);
        }
      }
    }, {
      key: "displayError",
      value: function displayError(errMsg) {
        var element = document.createElement('div');
        element.id = 'error-message';
        element.classList.add('fade-out');
        var spanElement = document.createElement('span');
        spanElement.append(document.createTextNode(errMsg));
        element.appendChild(spanElement);
        this.shadowRoot.querySelector('.wrap').appendChild(element);
        element.addEventListener('animationend', function () {
          element.parentElement.removeChild(element);
        });
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {}
    }, {
      key: "valueChange",
      value: function valueChange() {
        this.value_ = this.shadowRoot.getElementById('mic-input').value;

        if (this.realInput) {
          this.realInput.value = this.value_;
        }
      }
    }, {
      key: "template",
      value: function template() {
        return "\n      <div class=\"wrap\">\n        <div class=\"input-block\">\n          <input id=\"mic-input\" type=\"text\" />\n          <div id=\"mic-icon\" class=\"right-icon\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#000000\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z\"/></svg>\n          </div>\n        </div>\n      </div>\n    ";
      }
    }]);

    return MicInput;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  window.customElements.define('mic-input', MicInput);

  return MicInput;

}));
