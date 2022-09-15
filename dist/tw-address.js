(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.TWAddress = factory());
})(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var classCallCheck = {exports: {}};

	(function (module) {
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
	})(classCallCheck);

	var _classCallCheck = /*@__PURE__*/getDefaultExportFromCjs(classCallCheck.exports);

	var createClass = {exports: {}};

	(function (module) {
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

	  module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
	})(createClass);

	var _createClass = /*@__PURE__*/getDefaultExportFromCjs(createClass.exports);

	var assertThisInitialized = {exports: {}};

	(function (module) {
	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
	})(assertThisInitialized);

	var _assertThisInitialized = /*@__PURE__*/getDefaultExportFromCjs(assertThisInitialized.exports);

	var inherits = {exports: {}};

	var setPrototypeOf = {exports: {}};

	(function (module) {
	  function _setPrototypeOf(o, p) {
	    module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	    return _setPrototypeOf(o, p);
	  }

	  module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	})(setPrototypeOf);

	(function (module) {
	  var setPrototypeOf$1 = setPrototypeOf.exports;

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
	    if (superClass) setPrototypeOf$1(subClass, superClass);
	  }

	  module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
	})(inherits);

	var _inherits = /*@__PURE__*/getDefaultExportFromCjs(inherits.exports);

	var possibleConstructorReturn = {exports: {}};

	var _typeof$1 = {exports: {}};

	(function (module) {
	  function _typeof(obj) {
	    "@babel/helpers - typeof";

	    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	      return typeof obj;
	    } : function (obj) {
	      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
	  }

	  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
	})(_typeof$1);

	var _typeof = /*@__PURE__*/getDefaultExportFromCjs(_typeof$1.exports);

	(function (module) {
	  var _typeof = _typeof$1.exports["default"];
	  var assertThisInitialized$1 = assertThisInitialized.exports;

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    } else if (call !== void 0) {
	      throw new TypeError("Derived constructors may only return object or undefined");
	    }

	    return assertThisInitialized$1(self);
	  }

	  module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
	})(possibleConstructorReturn);

	var _possibleConstructorReturn = /*@__PURE__*/getDefaultExportFromCjs(possibleConstructorReturn.exports);

	var getPrototypeOf = {exports: {}};

	(function (module) {
	  function _getPrototypeOf(o) {
	    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	    return _getPrototypeOf(o);
	  }

	  module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	})(getPrototypeOf);

	var _getPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(getPrototypeOf.exports);

	var wrapNativeSuper = {exports: {}};

	var isNativeFunction = {exports: {}};

	(function (module) {
	  function _isNativeFunction(fn) {
	    return Function.toString.call(fn).indexOf("[native code]") !== -1;
	  }

	  module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;
	})(isNativeFunction);

	var construct = {exports: {}};

	var isNativeReflectConstruct = {exports: {}};

	(function (module) {
	  function _isNativeReflectConstruct() {
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

	  module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
	})(isNativeReflectConstruct);

	(function (module) {
	  var setPrototypeOf$1 = setPrototypeOf.exports;
	  var isNativeReflectConstruct$1 = isNativeReflectConstruct.exports;

	  function _construct(Parent, args, Class) {
	    if (isNativeReflectConstruct$1()) {
	      module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
	    } else {
	      module.exports = _construct = function _construct(Parent, args, Class) {
	        var a = [null];
	        a.push.apply(a, args);
	        var Constructor = Function.bind.apply(Parent, a);
	        var instance = new Constructor();
	        if (Class) setPrototypeOf$1(instance, Class.prototype);
	        return instance;
	      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	    }

	    return _construct.apply(null, arguments);
	  }

	  module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
	})(construct);

	(function (module) {
	  var getPrototypeOf$1 = getPrototypeOf.exports;
	  var setPrototypeOf$1 = setPrototypeOf.exports;
	  var isNativeFunction$1 = isNativeFunction.exports;
	  var construct$1 = construct.exports;

	  function _wrapNativeSuper(Class) {
	    var _cache = typeof Map === "function" ? new Map() : undefined;

	    module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
	      if (Class === null || !isNativeFunction$1(Class)) return Class;

	      if (typeof Class !== "function") {
	        throw new TypeError("Super expression must either be null or a function");
	      }

	      if (typeof _cache !== "undefined") {
	        if (_cache.has(Class)) return _cache.get(Class);

	        _cache.set(Class, Wrapper);
	      }

	      function Wrapper() {
	        return construct$1(Class, arguments, getPrototypeOf$1(this).constructor);
	      }

	      Wrapper.prototype = Object.create(Class.prototype, {
	        constructor: {
	          value: Wrapper,
	          enumerable: false,
	          writable: true,
	          configurable: true
	        }
	      });
	      return setPrototypeOf$1(Wrapper, Class);
	    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	    return _wrapNativeSuper(Class);
	  }

	  module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
	})(wrapNativeSuper);

	var _wrapNativeSuper = /*@__PURE__*/getDefaultExportFromCjs(wrapNativeSuper.exports);

	var classPrivateFieldGet = {exports: {}};

	var classApplyDescriptorGet = {exports: {}};

	(function (module) {
	  function _classApplyDescriptorGet(receiver, descriptor) {
	    if (descriptor.get) {
	      return descriptor.get.call(receiver);
	    }

	    return descriptor.value;
	  }

	  module.exports = _classApplyDescriptorGet, module.exports.__esModule = true, module.exports["default"] = module.exports;
	})(classApplyDescriptorGet);

	var classExtractFieldDescriptor = {exports: {}};

	(function (module) {
	  function _classExtractFieldDescriptor(receiver, privateMap, action) {
	    if (!privateMap.has(receiver)) {
	      throw new TypeError("attempted to " + action + " private field on non-instance");
	    }

	    return privateMap.get(receiver);
	  }

	  module.exports = _classExtractFieldDescriptor, module.exports.__esModule = true, module.exports["default"] = module.exports;
	})(classExtractFieldDescriptor);

	(function (module) {
	  var classApplyDescriptorGet$1 = classApplyDescriptorGet.exports;
	  var classExtractFieldDescriptor$1 = classExtractFieldDescriptor.exports;

	  function _classPrivateFieldGet(receiver, privateMap) {
	    var descriptor = classExtractFieldDescriptor$1(receiver, privateMap, "get");
	    return classApplyDescriptorGet$1(receiver, descriptor);
	  }

	  module.exports = _classPrivateFieldGet, module.exports.__esModule = true, module.exports["default"] = module.exports;
	})(classPrivateFieldGet);

	var _classPrivateFieldGet = /*@__PURE__*/getDefaultExportFromCjs(classPrivateFieldGet.exports);

	var classPrivateFieldSet = {exports: {}};

	var classApplyDescriptorSet = {exports: {}};

	(function (module) {
	  function _classApplyDescriptorSet(receiver, descriptor, value) {
	    if (descriptor.set) {
	      descriptor.set.call(receiver, value);
	    } else {
	      if (!descriptor.writable) {
	        throw new TypeError("attempted to set read only private field");
	      }

	      descriptor.value = value;
	    }
	  }

	  module.exports = _classApplyDescriptorSet, module.exports.__esModule = true, module.exports["default"] = module.exports;
	})(classApplyDescriptorSet);

	(function (module) {
	  var classApplyDescriptorSet$1 = classApplyDescriptorSet.exports;
	  var classExtractFieldDescriptor$1 = classExtractFieldDescriptor.exports;

	  function _classPrivateFieldSet(receiver, privateMap, value) {
	    var descriptor = classExtractFieldDescriptor$1(receiver, privateMap, "set");
	    classApplyDescriptorSet$1(receiver, descriptor, value);
	    return value;
	  }

	  module.exports = _classPrivateFieldSet, module.exports.__esModule = true, module.exports["default"] = module.exports;
	})(classPrivateFieldSet);

	var _classPrivateFieldSet = /*@__PURE__*/getDefaultExportFromCjs(classPrivateFieldSet.exports);

	var dropdown = {exports: {}};

	(function (module, exports) {
	  !function (e, t) {
	    module.exports = t() ;
	  }(commonjsGlobal, function () {

	    function e(e) {
	      return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e;
	    }

	    var t = {
	      exports: {}
	    };
	    !function (e) {
	      e.exports = function (e, t) {
	        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	      }, e.exports.__esModule = !0, e.exports["default"] = e.exports;
	    }(t);
	    var o = e(t.exports),
	        s = {
	      exports: {}
	    };
	    !function (e) {
	      function t(e, t) {
	        for (var o = 0; o < t.length; o++) {
	          var s = t[o];
	          s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
	        }
	      }

	      e.exports = function (e, o, s) {
	        return o && t(e.prototype, o), s && t(e, s), Object.defineProperty(e, "prototype", {
	          writable: !1
	        }), e;
	      }, e.exports.__esModule = !0, e.exports["default"] = e.exports;
	    }(s);
	    var i = e(s.exports),
	        n = {
	      exports: {}
	    };
	    !function (e) {
	      e.exports = function (e) {
	        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        return e;
	      }, e.exports.__esModule = !0, e.exports["default"] = e.exports;
	    }(n);
	    var r = e(n.exports),
	        l = {
	      exports: {}
	    },
	        a = {
	      exports: {}
	    };
	    !function (e) {
	      function t(o, s) {
	        return e.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
	          return e.__proto__ = t, e;
	        }, e.exports.__esModule = !0, e.exports["default"] = e.exports, t(o, s);
	      }

	      e.exports = t, e.exports.__esModule = !0, e.exports["default"] = e.exports;
	    }(a), function (e) {
	      var t = a.exports;
	      e.exports = function (e, o) {
	        if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function");
	        e.prototype = Object.create(o && o.prototype, {
	          constructor: {
	            value: e,
	            writable: !0,
	            configurable: !0
	          }
	        }), Object.defineProperty(e, "prototype", {
	          writable: !1
	        }), o && t(e, o);
	      }, e.exports.__esModule = !0, e.exports["default"] = e.exports;
	    }(l);
	    var u = e(l.exports),
	        c = {
	      exports: {}
	    },
	        p = {
	      exports: {}
	    };
	    !function (e) {
	      function t(o) {
	        return e.exports = t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
	          return _typeof(e);
	        } : function (e) {
	          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
	        }, e.exports.__esModule = !0, e.exports["default"] = e.exports, t(o);
	      }

	      e.exports = t, e.exports.__esModule = !0, e.exports["default"] = e.exports;
	    }(p), function (e) {
	      var t = p.exports["default"],
	          o = n.exports;
	      e.exports = function (e, s) {
	        if (s && ("object" === t(s) || "function" == typeof s)) return s;
	        if (void 0 !== s) throw new TypeError("Derived constructors may only return object or undefined");
	        return o(e);
	      }, e.exports.__esModule = !0, e.exports["default"] = e.exports;
	    }(c);
	    var d = e(c.exports),
	        h = {
	      exports: {}
	    };
	    !function (e) {
	      function t(o) {
	        return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
	          return e.__proto__ || Object.getPrototypeOf(e);
	        }, e.exports.__esModule = !0, e.exports["default"] = e.exports, t(o);
	      }

	      e.exports = t, e.exports.__esModule = !0, e.exports["default"] = e.exports;
	    }(h);
	    var f = e(h.exports),
	        x = {
	      exports: {}
	    },
	        v = {
	      exports: {}
	    };
	    !function (e) {
	      e.exports = function (e) {
	        return -1 !== Function.toString.call(e).indexOf("[native code]");
	      }, e.exports.__esModule = !0, e.exports["default"] = e.exports;
	    }(v);
	    var m = {
	      exports: {}
	    },
	        b = {
	      exports: {}
	    };
	    !function (e) {
	      e.exports = function () {
	        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
	        if (Reflect.construct.sham) return !1;
	        if ("function" == typeof Proxy) return !0;

	        try {
	          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
	        } catch (e) {
	          return !1;
	        }
	      }, e.exports.__esModule = !0, e.exports["default"] = e.exports;
	    }(b), function (e) {
	      var t = a.exports,
	          o = b.exports;

	      function s(i, n, r) {
	        return o() ? (e.exports = s = Reflect.construct.bind(), e.exports.__esModule = !0, e.exports["default"] = e.exports) : (e.exports = s = function s(e, o, _s) {
	          var i = [null];
	          i.push.apply(i, o);
	          var n = new (Function.bind.apply(e, i))();
	          return _s && t(n, _s.prototype), n;
	        }, e.exports.__esModule = !0, e.exports["default"] = e.exports), s.apply(null, arguments);
	      }

	      e.exports = s, e.exports.__esModule = !0, e.exports["default"] = e.exports;
	    }(m), function (e) {
	      var t = h.exports,
	          o = a.exports,
	          s = v.exports,
	          i = m.exports;

	      function n(r) {
	        var l = "function" == typeof Map ? new Map() : void 0;
	        return e.exports = n = function n(e) {
	          if (null === e || !s(e)) return e;
	          if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

	          if (void 0 !== l) {
	            if (l.has(e)) return l.get(e);
	            l.set(e, n);
	          }

	          function n() {
	            return i(e, arguments, t(this).constructor);
	          }

	          return n.prototype = Object.create(e.prototype, {
	            constructor: {
	              value: n,
	              enumerable: !1,
	              writable: !0,
	              configurable: !0
	            }
	          }), o(n, e);
	        }, e.exports.__esModule = !0, e.exports["default"] = e.exports, n(r);
	      }

	      e.exports = n, e.exports.__esModule = !0, e.exports["default"] = e.exports;
	    }(x);
	    var y = e(x.exports),
	        w = {
	      exports: {}
	    },
	        g = {
	      exports: {}
	    };
	    !function (e) {
	      e.exports = function (e, t) {
	        return t.get ? t.get.call(e) : t.value;
	      }, e.exports.__esModule = !0, e.exports["default"] = e.exports;
	    }(g);
	    var k = {
	      exports: {}
	    };
	    !function (e) {
	      e.exports = function (e, t, o) {
	        if (!t.has(e)) throw new TypeError("attempted to " + o + " private field on non-instance");
	        return t.get(e);
	      }, e.exports.__esModule = !0, e.exports["default"] = e.exports;
	    }(k), function (e) {
	      var t = g.exports,
	          o = k.exports;
	      e.exports = function (e, s) {
	        var i = o(e, s, "get");
	        return t(e, i);
	      }, e.exports.__esModule = !0, e.exports["default"] = e.exports;
	    }(w);
	    var M = e(w.exports),
	        _ = {
	      exports: {}
	    },
	        S = {
	      exports: {}
	    };
	    !function (e) {
	      e.exports = function (e, t, o) {
	        if (t.set) t.set.call(e, o);else {
	          if (!t.writable) throw new TypeError("attempted to set read only private field");
	          t.value = o;
	        }
	      }, e.exports.__esModule = !0, e.exports["default"] = e.exports;
	    }(S), function (e) {
	      var t = S.exports,
	          o = k.exports;
	      e.exports = function (e, s, i) {
	        var n = o(e, s, "set");
	        return t(e, n, i), i;
	      }, e.exports.__esModule = !0, e.exports["default"] = e.exports;
	    }(_);
	    var E = e(_.exports);

	    function A(e) {
	      var t = function () {
	        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
	        if (Reflect.construct.sham) return !1;
	        if ("function" == typeof Proxy) return !0;

	        try {
	          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
	        } catch (e) {
	          return !1;
	        }
	      }();

	      return function () {
	        var o,
	            s = f(e);

	        if (t) {
	          var i = f(this).constructor;
	          o = Reflect.construct(s, arguments, i);
	        } else o = s.apply(this, arguments);

	        return d(this, o);
	      };
	    }

	    function R(e, t) {
	      O(e, t), t.add(e);
	    }

	    function L(e, t, o) {
	      O(e, t), t.set(e, o);
	    }

	    function O(e, t) {
	      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
	    }

	    function W(e, t, o) {
	      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
	      return o;
	    }

	    function T(e, t) {
	      if (e.hasAttribute(t)) {
	        var o = parseInt(String(e.getAttribute(t)));
	        return isNaN(o) ? 0 : o;
	      }

	      return 0;
	    }

	    function C(e, t) {
	      return e.hasAttribute(t) ? String(e.getAttribute(t)) : "";
	    }

	    function j(e, t) {
	      if (!e.hasAttribute(t)) return [];

	      try {
	        var o = JSON.parse(String(e.getAttribute(t)));
	        return Array.isArray(o) ? o : [];
	      } catch (e) {
	        return console.log(e), [];
	      }
	    }

	    var q = new WeakMap(),
	        z = new WeakMap(),
	        N = new WeakMap(),
	        P = new WeakMap(),
	        K = new WeakMap(),
	        B = new WeakMap(),
	        D = new WeakMap(),
	        I = new WeakMap(),
	        U = new WeakMap(),
	        H = new WeakMap(),
	        F = new WeakSet(),
	        J = new WeakSet(),
	        Y = new WeakSet(),
	        Z = new WeakSet(),
	        $ = new WeakSet(),
	        G = new WeakSet(),
	        Q = new WeakSet(),
	        V = function (e) {
	      u(s, e);
	      var t = A(s);

	      function s() {
	        var e;
	        return o(this, s), e = t.call(this), R(r(e), Q), R(r(e), G), R(r(e), $), R(r(e), Z), R(r(e), Y), R(r(e), J), R(r(e), F), L(r(e), q, {
	          writable: !0,
	          value: void 0
	        }), L(r(e), z, {
	          writable: !0,
	          value: void 0
	        }), L(r(e), N, {
	          writable: !0,
	          value: void 0
	        }), L(r(e), P, {
	          writable: !0,
	          value: void 0
	        }), L(r(e), K, {
	          writable: !0,
	          value: void 0
	        }), L(r(e), B, {
	          writable: !0,
	          value: void 0
	        }), L(r(e), D, {
	          writable: !0,
	          value: void 0
	        }), L(r(e), I, {
	          writable: !0,
	          value: void 0
	        }), L(r(e), U, {
	          writable: !0,
	          value: void 0
	        }), L(r(e), H, {
	          writable: !0,
	          value: void 0
	        }), e.attachShadow({
	          mode: "open"
	        }), e.toggleMenu = e.toggleMenu.bind(r(e)), e.expandMenu = e.expandMenu.bind(r(e)), e.hideMenu = e.hideMenu.bind(r(e)), e.handlefocus = e.handlefocus.bind(r(e)), e.handleblur = e.handleblur.bind(r(e)), e.handleKeyup = e.handleKeyup.bind(r(e)), e.handleKeydown = e.handleKeydown.bind(r(e)), e.chooseOption = e.chooseOption.bind(r(e)), e.mouseEnter = e.mouseEnter.bind(r(e)), E(r(e), q, {
	          name: "",
	          value: "",
	          placeholder: "",
	          options: [],
	          startitem: 0,
	          maxitems: 0
	        }), E(r(e), z, null), E(r(e), N, null), E(r(e), P, null), E(r(e), K, null), E(r(e), B, null), E(r(e), D, null), E(r(e), I, -1), E(r(e), U, 0), E(r(e), H, -1), e;
	      }

	      return i(s, [{
	        key: "connectedCallback",
	        value: function value() {
	          if (null !== this.shadowRoot) {
	            E(this, q, {
	              name: C(this, "name"),
	              value: C(this, "value"),
	              placeholder: C(this, "placeholder"),
	              options: j(this, "options"),
	              startitem: T(this, "startitem"),
	              maxitems: T(this, "maxitems")
	            }), this.shadowRoot.innerHTML = this.template(M(this, q)), E(this, z, this.shadowRoot.querySelector(".container")), E(this, N, this.shadowRoot.querySelector(".custom-select")), E(this, P, this.shadowRoot.querySelector("input")), E(this, K, this.shadowRoot.querySelector(".result-text")), E(this, B, this.shadowRoot.querySelector("#optionsRef")), W(this, F, X).call(this), E(this, D, document.createElement("input")), M(this, D).type = "hidden", M(this, D).name = M(this, q).name, this.appendChild(M(this, D));
	            var e = document.createElement("style");
	            e.appendChild(document.createTextNode('.container{position:relative;border:1px solid #ced4da;position:relative;outline:none;background-color:#fff}.custom-select{position:relative;font-family:Arial}.custom-select select{display:none}.select-items{width:100%;position:absolute;background-color:#fff;top:calc(100% + 1px);left:0;right:0;z-index:99;border-color:#ced4da;box-sizing:border-box;overflow-y:auto}.select-items .select-option,.select-items .select-result{font-size:1rem;text-align:left;color:#000;padding:8px 16px;border-width:0 0 1px 0;border-style:solid;border-color:rgba(0,0,0,.1);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.select-items .select-option.select-selected{color:#0199f8}.select-items .select-option:hover,.select-items .select-option.hover{background-color:#01bbfe;color:#fff}.select-hide{display:none}.select{width:50%;margin:1em 0;position:relative}.tiny{width:10%}.small{width:25%}.large{width:auto}.select label{display:block}input.custom.replaced{position:relative;z-index:10;width:100%;border:0;opacity:0;line-height:2;background-color:#fff;cursor:pointer}.custom-select{display:block;position:absolute;top:0;left:0;width:100%;height:100%;padding:0px !important;border:0 !important}.custom-select.expand .select-result i.chevron:after{transform:rotate(135deg);-webkit-transform:rotate(135deg);top:calc(50% - .175rem);transition:100ms ease all}.custom-select .select-result{display:flex;flex-direction:row;align-items:center;justify-content:space-between;height:100%;padding:0 10px;box-sizing:border-box;border-radius:5px;border:0px}.custom-select .select-result .result-text{color:#121212;line-height:calc(2em + 20px);font-size:16px;letter-spacing:-0.4px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.custom-select .select-result .result-text.placeholder{color:#999}.custom-select .select-result i.chevron{position:relative;display:block;height:100%;width:14px}.custom-select .select-result i.chevron:after{content:"";width:0;height:0;position:absolute;right:0;top:calc(50% - .375rem);display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border:solid #01bbfe;border-width:0 0 3px 3px;padding:3px;transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transition:100ms ease all}.custom-select.focused .select-result i.chevron:after{border:solid #0199f8;border-width:0 0 3px 3px}.custom-select-input:hover+.custom-select .select-result i.chevron:after{border:solid #0199f8;border-width:0 0 3px 3px}.custom-select.active>span{border-color:#666;box-shadow:0 0 2px rgba(0,0,0,.5)}.custom-select-input{border-bottom:2px solid #9fb6cb;height:39px;padding:0px}.custom-select-input.editable{font-weight:400;outline:0;font-size:16px;letter-spacing:-0.4px;padding-left:2px;line-height:28px;margin-top:10px;border-bottom:2px solid #01bbfe}.custom-select-input.editable::placeholder,.custom-select-input.editable:-ms-input-placeholder,.custom-select-input.editable::-ms-input-placeholder{color:#121212}.custom-select-input.editable:hover{border-bottom:2px solid #0199f8}.custom-select-input.editable:focus{border-bottom:2px solid #0199f8}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075) !important}')), this.shadowRoot.appendChild(e), null !== M(this, P) && (M(this, P).addEventListener("click", this.toggleMenu), M(this, P).addEventListener("focus", this.handlefocus), M(this, P).addEventListener("keyup", this.handleKeyup), M(this, P).addEventListener("keydown", this.handleKeydown)), null !== M(this, z) && (M(this, z).addEventListener("blur", this.handleblur), M(this, z).addEventListener("keyup", this.handleKeyup), M(this, z).addEventListener("keydown", this.handleKeydown));
	          }
	        }
	      }, {
	        key: "disconnectedCallback",
	        value: function value() {}
	      }, {
	        key: "toggleMenu",
	        value: function value() {
	          null !== M(this, N) && (M(this, N).classList.contains("expand") ? this.hideMenu() : this.expandMenu());
	        }
	      }, {
	        key: "expandMenu",
	        value: function value() {
	          var e,
	              t = null === (e = this.shadowRoot) || void 0 === e ? void 0 : e.querySelector(".select-items");
	          null != t && t.classList.remove("select-hide"), null !== M(this, N) && M(this, N).classList.add("expand"), null !== M(this, B) && (W(this, Y, te).call(this) || (M(this, B).style.overflowY = "hidden"), W(this, $, se).call(this) > 0 && (M(this, B).style.height = "".concat(W(this, $, se).call(this), "px")));
	        }
	      }, {
	        key: "hideMenu",
	        value: function value() {
	          var e,
	              t = null === (e = this.shadowRoot) || void 0 === e ? void 0 : e.querySelector(".select-items");
	          null != t && t.classList.add("select-hide"), null !== M(this, N) && M(this, N).classList.remove("expand");
	        }
	      }, {
	        key: "handlefocus",
	        value: function value() {
	          null !== M(this, z) && M(this, z).focus(), null !== M(this, N) && M(this, N).classList.add("focused");
	        }
	      }, {
	        key: "handleblur",
	        value: function value(e) {
	          if (null !== this.shadowRoot) {
	            var t = e.relatedTarget;
	            this.shadowRoot.contains(t) || (this.hideMenu(), null !== M(this, N) && M(this, N).classList.remove("focused"));
	          }
	        }
	      }, {
	        key: "handleKeyup",
	        value: function value(e) {
	          "Tab" != e.key && e.preventDefault();
	        }
	      }, {
	        key: "handleKeydown",
	        value: function value(e) {
	          if ("Tab" != e.key) {
	            if (e.preventDefault(), " " == e.key || "Enter" == e.key) W(this, J, ee).call(this) ? (M(this, I) >= 0 && M(this, I) < M(this, q).options.length && this.setSelectedOption(M(this, I)), this.hideMenu()) : (this.expandMenu(), M(this, H) >= 0 ? E(this, I, M(this, H)) : W(this, Q, ne).call(this, 0));else if ("ArrowDown" == e.key) W(this, J, ee).call(this) ? W(this, Q, ne).call(this, (M(this, I) + 1) % M(this, q).options.length) : (this.expandMenu(), M(this, H) >= 0 ? E(this, I, M(this, H)) : W(this, Q, ne).call(this, 0));else if ("ArrowUp" == e.key) W(this, J, ee).call(this) ? W(this, Q, ne).call(this, (M(this, q).options.length + M(this, I) - 1) % M(this, q).options.length) : (this.expandMenu(), M(this, H) >= 0 ? E(this, I, M(this, H)) : W(this, Q, ne).call(this, 0));else if ("Escape" == e.key) this.hideMenu(), E(this, I, -1);else if (e.key.match(/^[a-zA-Z0-9]$/) && Array.isArray(M(this, q).options)) {
	              var t = M(this, I),
	                  o = M(this, q).options.findIndex(function (o, s) {
	                return o.name.toUpperCase().startsWith(e.key.toUpperCase()) && s > t;
	              });
	              o < 0 && (o = M(this, q).options.findIndex(function (t, o) {
	                return t.name.toUpperCase().startsWith(e.key.toUpperCase());
	              })), o >= 0 && (W(this, G, ie).call(this, o), W(this, Q, ne).call(this, o));
	            }
	          } else this.hideMenu();
	        }
	      }, {
	        key: "chooseOption",
	        value: function value(e) {
	          var t = e.target;
	          t.hasAttribute("data-index") && this.setSelectedOption(parseInt(String(t.getAttribute("data-index"))));
	        }
	      }, {
	        key: "mouseEnter",
	        value: function value(e) {
	          var t = e.target;

	          if (t.hasAttribute("data-index")) {
	            var o = parseInt(String(t.getAttribute("data-index")));

	            if (o >= 0 && Array.isArray(M(this, q).options) && o < M(this, q).options.length) {
	              var s, i;
	              E(this, I, o);
	              var n = null === (s = this.shadowRoot) || void 0 === s ? void 0 : s.querySelector(".select-option.hover");
	              null != n && n.classList.remove("hover");
	              var r = null === (i = this.shadowRoot) || void 0 === i ? void 0 : i.querySelector('.select-option[data-index="'.concat(M(this, I), '"]'));
	              null != r && r.classList.add("hover");
	            }
	          }
	        }
	      }, {
	        key: "setSelectedOption",
	        value: function value(e) {
	          if (!isNaN(e) && e >= 0 && e < M(this, q).options.length) {
	            var t, o;
	            E(this, H, e), null !== M(this, P) && (M(this, P).value = M(this, q).options[e].value), null !== M(this, K) && (M(this, K).classList.remove("placeholder"), M(this, K).textContent = M(this, q).options[e].name, this.hideMenu()), null !== M(this, D) && (M(this, D).value = M(this, q).options[e].value);
	            var s = null === (t = this.shadowRoot) || void 0 === t ? void 0 : t.querySelector(".select-selected");
	            null != s && s.classList.remove("select-selected");
	            var i = null === (o = this.shadowRoot) || void 0 === o ? void 0 : o.querySelector('.select-option[data-index="'.concat(e, '"]'));

	            if (null != i) {
	              i.classList.add("select-selected");
	              var n = new CustomEvent("change", {
	                detail: M(this, q).options[e]
	              });
	              this.dispatchEvent(n);
	            }
	          }
	        }
	      }, {
	        key: "options",
	        get: function get() {
	          return M(this, q).options;
	        },
	        set: function set(e) {
	          Array.isArray(e) && (M(this, q).options = e, E(this, H, -1), null !== M(this, K) && (M(this, K).textContent = M(this, q).placeholder, M(this, K).classList.add("placeholder")), null !== M(this, D) && (M(this, D).value = ""), W(this, F, X).call(this));
	        }
	      }, {
	        key: "value",
	        get: function get() {
	          return M(this, H) >= 0 && M(this, H) in M(this, q).options && "string" == typeof M(this, q).options[M(this, H)].value ? M(this, q).options[M(this, H)].value : "";
	        }
	      }, {
	        key: "template",
	        value: function value(e) {
	          return '\n      <div class="container" tabindex="0">\n        <input\n          placeholder="'.concat(e.placeholder, '\n          type="text"\n          class="custom replaced custom-select-input"\n          name="').concat(e.name, '"\n          value="').concat(e.value, '"\n          readonly="readonly"\n          style="z-index: 10"\n        />\n        <div class="custom-select">\n          <div class="select-result form-control">\n            <span class="result-text placeholder">').concat(e.placeholder, '</span>\n            <i class="chevron"></i>\n          </div>\n          <div id="optionsRef" class="shadow-sm select-items select-hide">\n          </div>\n        </div>\n      </div>\n    ');
	        }
	      }]), s;
	    }(y(HTMLElement));

	    function X() {
	      var e = this,
	          t = this;
	      null !== M(t, B) && Array.isArray(M(t, q).options) && (M(t, B).innerHTML = "", E(t, I, -1), E(t, U, 0), E(t, H, -1), M(t, q).options.forEach(function (o, s) {
	        var i,
	            n = document.createElement("span"),
	            r = document.createElement("div");
	        n.setAttribute("data-index", String(s)), n.textContent = o.name, r.classList.add("select-option"), r.setAttribute("value", o.value), r.setAttribute("data-index", String(s)), r.appendChild(n), r.addEventListener("click", e.chooseOption), r.addEventListener("mouseenter", e.mouseEnter), null === (i = M(t, B)) || void 0 === i || i.appendChild(r);
	      }));
	    }

	    function ee() {
	      return null !== M(this, N) && M(this, N).classList.contains("expand");
	    }

	    function te() {
	      return M(this, q).maxitems > 0 && M(this, q).maxitems < M(this, q).options.length;
	    }

	    function oe() {
	      if (M(this, q).options.length > 0 && null !== M(this, z)) {
	        var e = M(this, z).querySelector(".select-option");

	        if (null !== e) {
	          var t = window.getComputedStyle(e);
	          return Number(t.height.replace("px", "")) + Number(t.paddingTop.replace("px", "")) + Number(t.paddingBottom.replace("px", "")) + Number(t.borderTopWidth.replace("px", "")) + Number(t.borderBottomWidth.replace("px", ""));
	        }
	      }

	      return 0;
	    }

	    function se() {
	      var e = W(this, Z, oe).call(this);
	      return M(this, q).maxitems > 0 && M(this, q).maxitems <= M(this, q).options.length ? M(this, q).maxitems * e : M(this, q).options.length * e;
	    }

	    function ie(e) {
	      e >= 0 && Array.isArray(M(this, q).options) && e < M(this, q).options.length && (E(this, U, e), null !== M(this, B) && (M(this, B).scrollTop = M(this, U) * W(this, Z, oe).call(this)));
	    }

	    function ne(e) {
	      if (e >= 0 && Array.isArray(M(this, q).options) && e < M(this, q).options.length) {
	        var t, o;
	        E(this, I, e);
	        var s = null === (t = this.shadowRoot) || void 0 === t ? void 0 : t.querySelector(".select-option.hover");
	        null != s && s.classList.remove("hover");
	        var i = null === (o = this.shadowRoot) || void 0 === o ? void 0 : o.querySelector('.select-option[data-index="'.concat(M(this, I), '"]'));
	        null != i && i.classList.add("hover"), W(this, Y, te).call(this) && (M(this, I) == M(this, U) + M(this, q).maxitems ? W(this, G, ie).call(this, M(this, U) + 1) : (M(this, I) < M(this, U) || M(this, I) > M(this, U) + M(this, q).maxitems) && W(this, G, ie).call(this, M(this, I)));
	      }
	    }

	    return window.customElements.define("dropdown-menu", V), V;
	  });
	})(dropdown);

	var addressStyle = ".container{position:relative;width:100%}.container .section{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center}.container .section:not(:last-child){margin-bottom:10px;justify-content:space-between;gap:5px 10px}.container .section .zip{display:inline-flex;line-height:100%;min-width:24px}.container .section .zip.hidden{display:none}.container .section .menu{flex-shrink:1;flex-grow:1}.container input{height:40px;width:100%;border:1px solid #ced4da;background-color:#fff;font-size:1rem;padding-left:10px;padding-right:10px;outline:none}";

	var cities = [{
	  value: 'A',
	  name: '臺北市'
	}, {
	  value: 'B',
	  name: '臺中市'
	}, {
	  value: 'C',
	  name: '基隆市'
	}, {
	  value: 'D',
	  name: '臺南市'
	}, {
	  value: 'E',
	  name: '高雄市'
	}, {
	  value: 'F',
	  name: '新北市'
	}, {
	  value: 'G',
	  name: '宜蘭縣'
	}, {
	  value: 'H',
	  name: '桃園市'
	}, {
	  value: 'I',
	  name: '嘉義市'
	}, {
	  value: 'J',
	  name: '新竹縣'
	}, {
	  value: 'K',
	  name: '苗栗縣'
	}, {
	  value: 'M',
	  name: '南投縣'
	}, {
	  value: 'N',
	  name: '彰化縣'
	}, {
	  value: 'O',
	  name: '新竹市'
	}, {
	  value: 'P',
	  name: '雲林縣'
	}, {
	  value: 'Q',
	  name: '嘉義縣'
	}, {
	  value: 'T',
	  name: '屏東縣'
	}, {
	  value: 'U',
	  name: '花蓮縣'
	}, {
	  value: 'V',
	  name: '臺東縣'
	}, {
	  value: 'W',
	  name: '金門縣'
	}, {
	  value: 'X',
	  name: '澎湖縣'
	}, {
	  value: 'Z',
	  name: '連江縣'
	}];

	var towns = {
	  A: [{
	    value: 'A01',
	    name: '松山區'
	  }, {
	    value: 'A17',
	    name: '信義區'
	  }, {
	    value: 'A02',
	    name: '大安區'
	  }, {
	    value: 'A10',
	    name: '中山區'
	  }, {
	    value: 'A03',
	    name: '中正區'
	  }, {
	    value: 'A09',
	    name: '大同區'
	  }, {
	    value: 'A05',
	    name: '萬華區'
	  }, {
	    value: 'A11',
	    name: '文山區'
	  }, {
	    value: 'A13',
	    name: '南港區'
	  }, {
	    value: 'A14',
	    name: '內湖區'
	  }, {
	    value: 'A15',
	    name: '士林區'
	  }, {
	    value: 'A16',
	    name: '北投區'
	  }],
	  B: [{
	    value: 'B01',
	    name: '中區'
	  }, {
	    value: 'B02',
	    name: '東區'
	  }, {
	    value: 'B03',
	    name: '南區'
	  }, {
	    value: 'B04',
	    name: '西區'
	  }, {
	    value: 'B05',
	    name: '北區'
	  }, {
	    value: 'B06',
	    name: '西屯區'
	  }, {
	    value: 'B07',
	    name: '南屯區'
	  }, {
	    value: 'B08',
	    name: '北屯區'
	  }, {
	    value: 'B09',
	    name: '豐原區'
	  }, {
	    value: 'B10',
	    name: '東勢區'
	  }, {
	    value: 'B11',
	    name: '大甲區'
	  }, {
	    value: 'B12',
	    name: '清水區'
	  }, {
	    value: 'B13',
	    name: '沙鹿區'
	  }, {
	    value: 'B14',
	    name: '梧棲區'
	  }, {
	    value: 'B15',
	    name: '后里區'
	  }, {
	    value: 'B16',
	    name: '神岡區'
	  }, {
	    value: 'B17',
	    name: '潭子區'
	  }, {
	    value: 'B18',
	    name: '大雅區'
	  }, {
	    value: 'B19',
	    name: '新社區'
	  }, {
	    value: 'B20',
	    name: '石岡區'
	  }, {
	    value: 'B21',
	    name: '外埔區'
	  }, {
	    value: 'B22',
	    name: '大安區'
	  }, {
	    value: 'B23',
	    name: '烏日區'
	  }, {
	    value: 'B24',
	    name: '大肚區'
	  }, {
	    value: 'B25',
	    name: '龍井區'
	  }, {
	    value: 'B26',
	    name: '霧峰區'
	  }, {
	    value: 'B27',
	    name: '太平區'
	  }, {
	    value: 'B28',
	    name: '大里區'
	  }, {
	    value: 'B29',
	    name: '和平區'
	  }],
	  C: [{
	    value: 'C01',
	    name: '中正區'
	  }, {
	    value: 'C02',
	    name: '七堵區'
	  }, {
	    value: 'C03',
	    name: '暖暖區'
	  }, {
	    value: 'C04',
	    name: '仁愛區'
	  }, {
	    value: 'C05',
	    name: '中山區'
	  }, {
	    value: 'C06',
	    name: '安樂區'
	  }, {
	    value: 'C07',
	    name: '信義區'
	  }],
	  D: [{
	    value: 'D09',
	    name: '新營區'
	  }, {
	    value: 'D10',
	    name: '鹽水區'
	  }, {
	    value: 'D12',
	    name: '白河區'
	  }, {
	    value: 'D11',
	    name: '柳營區'
	  }, {
	    value: 'D13',
	    name: '後壁區'
	  }, {
	    value: 'D14',
	    name: '東山區'
	  }, {
	    value: 'D15',
	    name: '麻豆區'
	  }, {
	    value: 'D16',
	    name: '下營區'
	  }, {
	    value: 'D17',
	    name: '六甲區'
	  }, {
	    value: 'D18',
	    name: '官田區'
	  }, {
	    value: 'D19',
	    name: '大內區'
	  }, {
	    value: 'D20',
	    name: '佳里區'
	  }, {
	    value: 'D25',
	    name: '學甲區'
	  }, {
	    value: 'D21',
	    name: '西港區'
	  }, {
	    value: 'D22',
	    name: '七股區'
	  }, {
	    value: 'D23',
	    name: '將軍區'
	  }, {
	    value: 'D24',
	    name: '北門區'
	  }, {
	    value: 'D26',
	    name: '新化區'
	  }, {
	    value: 'D27',
	    name: '善化區'
	  }, {
	    value: 'D28',
	    name: '新市區'
	  }, {
	    value: 'D29',
	    name: '安定區'
	  }, {
	    value: 'D30',
	    name: '山上區'
	  }, {
	    value: 'D36',
	    name: '玉井區'
	  }, {
	    value: 'D37',
	    name: '楠西區'
	  }, {
	    value: 'D38',
	    name: '南化區'
	  }, {
	    value: 'D31',
	    name: '左鎮區'
	  }, {
	    value: 'D32',
	    name: '仁德區'
	  }, {
	    value: 'D33',
	    name: '歸仁區'
	  }, {
	    value: 'D34',
	    name: '關廟區'
	  }, {
	    value: 'D35',
	    name: '龍崎區'
	  }, {
	    value: 'D39',
	    name: '永康區'
	  }, {
	    value: 'D01',
	    name: '東區'
	  }, {
	    value: 'D02',
	    name: '南區'
	  }, {
	    value: 'D04',
	    name: '北區'
	  }, {
	    value: 'D06',
	    name: '安南區'
	  }, {
	    value: 'D07',
	    name: '安平區'
	  }, {
	    value: 'D08',
	    name: '中西區'
	  }],
	  E: [{
	    value: 'E01',
	    name: '鹽埕區'
	  }, {
	    value: 'E02',
	    name: '鼓山區'
	  }, {
	    value: 'E03',
	    name: '左營區'
	  }, {
	    value: 'E04',
	    name: '楠梓區'
	  }, {
	    value: 'E05',
	    name: '三民區'
	  }, {
	    value: 'E06',
	    name: '新興區'
	  }, {
	    value: 'E07',
	    name: '前金區'
	  }, {
	    value: 'E08',
	    name: '苓雅區'
	  }, {
	    value: 'E09',
	    name: '前鎮區'
	  }, {
	    value: 'E10',
	    name: '旗津區'
	  }, {
	    value: 'E11',
	    name: '小港區'
	  }, {
	    value: 'E12',
	    name: '鳳山區'
	  }, {
	    value: 'E13',
	    name: '林園區'
	  }, {
	    value: 'E14',
	    name: '大寮區'
	  }, {
	    value: 'E15',
	    name: '大樹區'
	  }, {
	    value: 'E16',
	    name: '大社區'
	  }, {
	    value: 'E17',
	    name: '仁武區'
	  }, {
	    value: 'E18',
	    name: '鳥松區'
	  }, {
	    value: 'E19',
	    name: '岡山區'
	  }, {
	    value: 'E20',
	    name: '橋頭區'
	  }, {
	    value: 'E21',
	    name: '燕巢區'
	  }, {
	    value: 'E22',
	    name: '田寮區'
	  }, {
	    value: 'E23',
	    name: '阿蓮區'
	  }, {
	    value: 'E24',
	    name: '路竹區'
	  }, {
	    value: 'E25',
	    name: '湖內區'
	  }, {
	    value: 'E26',
	    name: '茄萣區'
	  }, {
	    value: 'E27',
	    name: '永安區'
	  }, {
	    value: 'E28',
	    name: '彌陀區'
	  }, {
	    value: 'E29',
	    name: '梓官區'
	  }, {
	    value: 'E30',
	    name: '旗山區'
	  }, {
	    value: 'E31',
	    name: '美濃區'
	  }, {
	    value: 'E32',
	    name: '六龜區'
	  }, {
	    value: 'E33',
	    name: '甲仙區'
	  }, {
	    value: 'E34',
	    name: '杉林區'
	  }, {
	    value: 'E35',
	    name: '內門區'
	  }, {
	    value: 'E36',
	    name: '茂林區'
	  }, {
	    value: 'E37',
	    name: '桃源區'
	  }, {
	    value: 'E38',
	    name: '那瑪夏區'
	  }],
	  F: [{
	    value: 'F14',
	    name: '板橋區'
	  }, {
	    value: 'F05',
	    name: '三重區'
	  }, {
	    value: 'F18',
	    name: '中和區'
	  }, {
	    value: 'F33',
	    name: '永和區'
	  }, {
	    value: 'F01',
	    name: '新莊區'
	  }, {
	    value: 'F07',
	    name: '新店區'
	  }, {
	    value: 'F17',
	    name: '樹林區'
	  }, {
	    value: 'F16',
	    name: '鶯歌區'
	  }, {
	    value: 'F15',
	    name: '三峽區'
	  }, {
	    value: 'F27',
	    name: '淡水區'
	  }, {
	    value: 'F28',
	    name: '汐止區'
	  }, {
	    value: 'F21',
	    name: '瑞芳區'
	  }, {
	    value: 'F19',
	    name: '土城區'
	  }, {
	    value: 'F04',
	    name: '蘆洲區'
	  }, {
	    value: 'F03',
	    name: '五股區'
	  }, {
	    value: 'F06',
	    name: '泰山區'
	  }, {
	    value: 'F02',
	    name: '林口區'
	  }, {
	    value: 'F09',
	    name: '深坑區'
	  }, {
	    value: 'F08',
	    name: '石碇區'
	  }, {
	    value: 'F10',
	    name: '坪林區'
	  }, {
	    value: 'F30',
	    name: '三芝區'
	  }, {
	    value: 'F31',
	    name: '石門區'
	  }, {
	    value: 'F32',
	    name: '八里區'
	  }, {
	    value: 'F22',
	    name: '平溪區'
	  }, {
	    value: 'F23',
	    name: '雙溪區'
	  }, {
	    value: 'F24',
	    name: '貢寮區'
	  }, {
	    value: 'F25',
	    name: '金山區'
	  }, {
	    value: 'F26',
	    name: '萬里區'
	  }, {
	    value: 'F11',
	    name: '烏來區'
	  }],
	  G: [{
	    value: 'G01',
	    name: '宜蘭市'
	  }, {
	    value: 'G06',
	    name: '羅東鎮'
	  }, {
	    value: 'G09',
	    name: '蘇澳鎮'
	  }, {
	    value: 'G02',
	    name: '頭城鎮'
	  }, {
	    value: 'G03',
	    name: '礁溪鄉'
	  }, {
	    value: 'G04',
	    name: '壯圍鄉'
	  }, {
	    value: 'G05',
	    name: '員山鄉'
	  }, {
	    value: 'G08',
	    name: '冬山鄉'
	  }, {
	    value: 'G07',
	    name: '五結鄉'
	  }, {
	    value: 'G10',
	    name: '三星鄉'
	  }, {
	    value: 'G11',
	    name: '大同鄉'
	  }, {
	    value: 'G12',
	    name: '南澳鄉'
	  }],
	  H: [{
	    value: 'H01',
	    name: '桃園區'
	  }, {
	    value: 'H03',
	    name: '中壢區'
	  }, {
	    value: 'H02',
	    name: '大溪區'
	  }, {
	    value: 'H04',
	    name: '楊梅區'
	  }, {
	    value: 'H05',
	    name: '蘆竹區'
	  }, {
	    value: 'H06',
	    name: '大園區'
	  }, {
	    value: 'H07',
	    name: '龜山區'
	  }, {
	    value: 'H08',
	    name: '八德區'
	  }, {
	    value: 'H09',
	    name: '龍潭區'
	  }, {
	    value: 'H10',
	    name: '平鎮區'
	  }, {
	    value: 'H11',
	    name: '新屋區'
	  }, {
	    value: 'H12',
	    name: '觀音區'
	  }, {
	    value: 'H13',
	    name: '復興區'
	  }],
	  I: [{
	    value: 'I01',
	    name: '東區'
	  }, {
	    value: 'I02',
	    name: '西區'
	  }],
	  J: [{
	    value: 'J05',
	    name: '竹北市'
	  }, {
	    value: 'J02',
	    name: '竹東鎮'
	  }, {
	    value: 'J04',
	    name: '新埔鎮'
	  }, {
	    value: 'J03',
	    name: '關西鎮'
	  }, {
	    value: 'J06',
	    name: '湖口鄉'
	  }, {
	    value: 'J09',
	    name: '新豐鄉'
	  }, {
	    value: 'J10',
	    name: '芎林鄉'
	  }, {
	    value: 'J08',
	    name: '橫山鄉'
	  }, {
	    value: 'J12',
	    name: '北埔鄉'
	  }, {
	    value: 'J11',
	    name: '寶山鄉'
	  }, {
	    value: 'J13',
	    name: '峨眉鄉'
	  }, {
	    value: 'J14',
	    name: '尖石鄉'
	  }, {
	    value: 'J15',
	    name: '五峰鄉'
	  }],
	  K: [{
	    value: 'K01',
	    name: '苗栗市'
	  }, {
	    value: 'K02',
	    name: '苑裡鎮'
	  }, {
	    value: 'K03',
	    name: '通霄鎮'
	  }, {
	    value: 'K09',
	    name: '竹南鎮'
	  }, {
	    value: 'K10',
	    name: '頭份市'
	  }, {
	    value: 'K12',
	    name: '後龍鎮'
	  }, {
	    value: 'K16',
	    name: '卓蘭鎮'
	  }, {
	    value: 'K15',
	    name: '大湖鄉'
	  }, {
	    value: 'K04',
	    name: '公館鄉'
	  }, {
	    value: 'K05',
	    name: '銅鑼鄉'
	  }, {
	    value: 'K14',
	    name: '南庄鄉'
	  }, {
	    value: 'K08',
	    name: '頭屋鄉'
	  }, {
	    value: 'K06',
	    name: '三義鄉'
	  }, {
	    value: 'K07',
	    name: '西湖鄉'
	  }, {
	    value: 'K11',
	    name: '造橋鄉'
	  }, {
	    value: 'K13',
	    name: '三灣鄉'
	  }, {
	    value: 'K17',
	    name: '獅潭鄉'
	  }, {
	    value: 'K18',
	    name: '泰安鄉'
	  }],
	  M: [{
	    value: 'M01',
	    name: '南投市'
	  }, {
	    value: 'M02',
	    name: '埔里鎮'
	  }, {
	    value: 'M03',
	    name: '草屯鎮'
	  }, {
	    value: 'M04',
	    name: '竹山鎮'
	  }, {
	    value: 'M05',
	    name: '集集鎮'
	  }, {
	    value: 'M06',
	    name: '名間鄉'
	  }, {
	    value: 'M07',
	    name: '鹿谷鄉'
	  }, {
	    value: 'M08',
	    name: '中寮鄉'
	  }, {
	    value: 'M09',
	    name: '魚池鄉'
	  }, {
	    value: 'M10',
	    name: '國姓鄉'
	  }, {
	    value: 'M11',
	    name: '水里鄉'
	  }, {
	    value: 'M12',
	    name: '信義鄉'
	  }, {
	    value: 'M13',
	    name: '仁愛鄉'
	  }],
	  N: [{
	    value: 'N01',
	    name: '彰化市'
	  }, {
	    value: 'N02',
	    name: '鹿港鎮'
	  }, {
	    value: 'N03',
	    name: '和美鎮'
	  }, {
	    value: 'N09',
	    name: '線西鄉'
	  }, {
	    value: 'N10',
	    name: '伸港鄉'
	  }, {
	    value: 'N11',
	    name: '福興鄉'
	  }, {
	    value: 'N12',
	    name: '秀水鄉'
	  }, {
	    value: 'N13',
	    name: '花壇鄉'
	  }, {
	    value: 'N14',
	    name: '芬園鄉'
	  }, {
	    value: 'N05',
	    name: '員林市'
	  }, {
	    value: 'N06',
	    name: '溪湖鎮'
	  }, {
	    value: 'N07',
	    name: '田中鎮'
	  }, {
	    value: 'N15',
	    name: '大村鄉'
	  }, {
	    value: 'N16',
	    name: '埔鹽鄉'
	  }, {
	    value: 'N17',
	    name: '埔心鄉'
	  }, {
	    value: 'N18',
	    name: '永靖鄉'
	  }, {
	    value: 'N19',
	    name: '社頭鄉'
	  }, {
	    value: 'N20',
	    name: '二水鄉'
	  }, {
	    value: 'N04',
	    name: '北斗鎮'
	  }, {
	    value: 'N08',
	    name: '二林鎮'
	  }, {
	    value: 'N21',
	    name: '田尾鄉'
	  }, {
	    value: 'N22',
	    name: '埤頭鄉'
	  }, {
	    value: 'N23',
	    name: '芳苑鄉'
	  }, {
	    value: 'N24',
	    name: '大城鄉'
	  }, {
	    value: 'N25',
	    name: '竹塘鄉'
	  }, {
	    value: 'N26',
	    name: '溪州鄉'
	  }],
	  O: [{
	    value: 'O01',
	    name: '東區'
	  }, {
	    value: 'O02',
	    name: '北區'
	  }, {
	    value: 'O03',
	    name: '香山區'
	  }],
	  P: [{
	    value: 'P01',
	    name: '斗六市'
	  }, {
	    value: 'P02',
	    name: '斗南鎮'
	  }, {
	    value: 'P03',
	    name: '虎尾鎮'
	  }, {
	    value: 'P04',
	    name: '西螺鎮'
	  }, {
	    value: 'P05',
	    name: '土庫鎮'
	  }, {
	    value: 'P06',
	    name: '北港鎮'
	  }, {
	    value: 'P07',
	    name: '古坑鄉'
	  }, {
	    value: 'P08',
	    name: '大埤鄉'
	  }, {
	    value: 'P09',
	    name: '莿桐鄉'
	  }, {
	    value: 'P10',
	    name: '林內鄉'
	  }, {
	    value: 'P11',
	    name: '二崙鄉'
	  }, {
	    value: 'P12',
	    name: '崙背鄉'
	  }, {
	    value: 'P13',
	    name: '麥寮鄉'
	  }, {
	    value: 'P14',
	    name: '東勢鄉'
	  }, {
	    value: 'P15',
	    name: '褒忠鄉'
	  }, {
	    value: 'P16',
	    name: '臺西鄉'
	  }, {
	    value: 'P17',
	    name: '元長鄉'
	  }, {
	    value: 'P18',
	    name: '四湖鄉'
	  }, {
	    value: 'P19',
	    name: '口湖鄉'
	  }, {
	    value: 'P20',
	    name: '水林鄉'
	  }],
	  Q: [{
	    value: 'Q12',
	    name: '太保市'
	  }, {
	    value: 'Q02',
	    name: '朴子市'
	  }, {
	    value: 'Q03',
	    name: '布袋鎮'
	  }, {
	    value: 'Q04',
	    name: '大林鎮'
	  }, {
	    value: 'Q05',
	    name: '民雄鄉'
	  }, {
	    value: 'Q06',
	    name: '溪口鄉'
	  }, {
	    value: 'Q07',
	    name: '新港鄉'
	  }, {
	    value: 'Q08',
	    name: '六腳鄉'
	  }, {
	    value: 'Q09',
	    name: '東石鄉'
	  }, {
	    value: 'Q10',
	    name: '義竹鄉'
	  }, {
	    value: 'Q11',
	    name: '鹿草鄉'
	  }, {
	    value: 'Q13',
	    name: '水上鄉'
	  }, {
	    value: 'Q14',
	    name: '中埔鄉'
	  }, {
	    value: 'Q15',
	    name: '竹崎鄉'
	  }, {
	    value: 'Q16',
	    name: '梅山鄉'
	  }, {
	    value: 'Q17',
	    name: '番路鄉'
	  }, {
	    value: 'Q18',
	    name: '大埔鄉'
	  }, {
	    value: 'Q20',
	    name: '阿里山鄉'
	  }],
	  T: [{
	    value: 'T01',
	    name: '屏東市'
	  }, {
	    value: 'T02',
	    name: '潮州鎮'
	  }, {
	    value: 'T03',
	    name: '東港鎮'
	  }, {
	    value: 'T04',
	    name: '恆春鎮'
	  }, {
	    value: 'T05',
	    name: '萬丹鄉'
	  }, {
	    value: 'T06',
	    name: '長治鄉'
	  }, {
	    value: 'T07',
	    name: '麟洛鄉'
	  }, {
	    value: 'T08',
	    name: '九如鄉'
	  }, {
	    value: 'T09',
	    name: '里港鄉'
	  }, {
	    value: 'T10',
	    name: '鹽埔鄉'
	  }, {
	    value: 'T11',
	    name: '高樹鄉'
	  }, {
	    value: 'T12',
	    name: '萬巒鄉'
	  }, {
	    value: 'T13',
	    name: '內埔鄉'
	  }, {
	    value: 'T14',
	    name: '竹田鄉'
	  }, {
	    value: 'T15',
	    name: '新埤鄉'
	  }, {
	    value: 'T16',
	    name: '枋寮鄉'
	  }, {
	    value: 'T17',
	    name: '新園鄉'
	  }, {
	    value: 'T18',
	    name: '崁頂鄉'
	  }, {
	    value: 'T19',
	    name: '林邊鄉'
	  }, {
	    value: 'T20',
	    name: '南州鄉'
	  }, {
	    value: 'T21',
	    name: '佳冬鄉'
	  }, {
	    value: 'T22',
	    name: '琉球鄉'
	  }, {
	    value: 'T23',
	    name: '車城鄉'
	  }, {
	    value: 'T24',
	    name: '滿州鄉'
	  }, {
	    value: 'T25',
	    name: '枋山鄉'
	  }, {
	    value: 'T26',
	    name: '三地門鄉'
	  }, {
	    value: 'T27',
	    name: '霧臺鄉'
	  }, {
	    value: 'T28',
	    name: '瑪家鄉'
	  }, {
	    value: 'T29',
	    name: '泰武鄉'
	  }, {
	    value: 'T30',
	    name: '來義鄉'
	  }, {
	    value: 'T31',
	    name: '春日鄉'
	  }, {
	    value: 'T32',
	    name: '獅子鄉'
	  }, {
	    value: 'T33',
	    name: '牡丹鄉'
	  }],
	  U: [{
	    value: 'U01',
	    name: '花蓮市'
	  }, {
	    value: 'U07',
	    name: '鳳林鎮'
	  }, {
	    value: 'U03',
	    name: '玉里鎮'
	  }, {
	    value: 'U04',
	    name: '新城鄉'
	  }, {
	    value: 'U05',
	    name: '吉安鄉'
	  }, {
	    value: 'U06',
	    name: '壽豐鄉'
	  }, {
	    value: 'U02',
	    name: '光復鄉'
	  }, {
	    value: 'U08',
	    name: '豐濱鄉'
	  }, {
	    value: 'U09',
	    name: '瑞穗鄉'
	  }, {
	    value: 'U10',
	    name: '富里鄉'
	  }, {
	    value: 'U11',
	    name: '秀林鄉'
	  }, {
	    value: 'U12',
	    name: '萬榮鄉'
	  }, {
	    value: 'U13',
	    name: '卓溪鄉'
	  }],
	  V: [{
	    value: 'V01',
	    name: '臺東市'
	  }, {
	    value: 'V02',
	    name: '成功鎮'
	  }, {
	    value: 'V03',
	    name: '關山鎮'
	  }, {
	    value: 'V04',
	    name: '卑南鄉'
	  }, {
	    value: 'V09',
	    name: '鹿野鄉'
	  }, {
	    value: 'V10',
	    name: '池上鄉'
	  }, {
	    value: 'V07',
	    name: '東河鄉'
	  }, {
	    value: 'V08',
	    name: '長濱鄉'
	  }, {
	    value: 'V06',
	    name: '太麻里鄉'
	  }, {
	    value: 'V05',
	    name: '大武鄉'
	  }, {
	    value: 'V11',
	    name: '綠島鄉'
	  }, {
	    value: 'V13',
	    name: '海端鄉'
	  }, {
	    value: 'V12',
	    name: '延平鄉'
	  }, {
	    value: 'V15',
	    name: '金峰鄉'
	  }, {
	    value: 'V14',
	    name: '達仁鄉'
	  }, {
	    value: 'V16',
	    name: '蘭嶼鄉'
	  }],
	  W: [{
	    value: 'W03',
	    name: '金城鎮'
	  }, {
	    value: 'W02',
	    name: '金沙鎮'
	  }, {
	    value: 'W01',
	    name: '金湖鎮'
	  }, {
	    value: 'W04',
	    name: '金寧鄉'
	  }, {
	    value: 'W05',
	    name: '烈嶼鄉'
	  }, {
	    value: 'W06',
	    name: '烏坵鄉'
	  }],
	  X: [{
	    value: 'X01',
	    name: '馬公市'
	  }, {
	    value: 'X02',
	    name: '湖西鄉'
	  }, {
	    value: 'X03',
	    name: '白沙鄉'
	  }, {
	    value: 'X04',
	    name: '西嶼鄉'
	  }, {
	    value: 'X05',
	    name: '望安鄉'
	  }, {
	    value: 'X06',
	    name: '七美鄉'
	  }],
	  Z: [{
	    value: 'Z01',
	    name: '南竿鄉'
	  }, {
	    value: 'Z02',
	    name: '北竿鄉'
	  }, {
	    value: 'Z03',
	    name: '莒光鄉'
	  }, {
	    value: 'Z04',
	    name: '東引鄉'
	  }]
	};

	var zips = {
	  A01: '105',
	  A17: '110',
	  A02: '106',
	  A10: '104',
	  A03: '100',
	  A09: '103',
	  A05: '108',
	  A11: '116',
	  A13: '115',
	  A14: '114',
	  A15: '111',
	  A16: '112',
	  B01: '400',
	  B02: '401',
	  B03: '402',
	  B04: '403',
	  B05: '404',
	  B06: '407',
	  B07: '408',
	  B08: '406',
	  B09: '420',
	  B10: '423',
	  B11: '437',
	  B12: '436',
	  B13: '433',
	  B14: '435',
	  B15: '421',
	  B16: '429',
	  B17: '427',
	  B18: '428',
	  B19: '426',
	  B20: '422',
	  B21: '438',
	  B22: '439',
	  B23: '414',
	  B24: '432',
	  B25: '434',
	  B26: '413',
	  B27: '411',
	  B28: '412',
	  B29: '424',
	  C01: '202',
	  C02: '206',
	  C03: '205',
	  C04: '200',
	  C05: '203',
	  C06: '204',
	  C07: '201',
	  D09: '730',
	  D10: '737',
	  D12: '732',
	  D11: '736',
	  D13: '731',
	  D14: '733',
	  D15: '721',
	  D16: '735',
	  D17: '734',
	  D18: '720',
	  D19: '742',
	  D20: '722',
	  D25: '726',
	  D21: '723',
	  D22: '724',
	  D23: '725',
	  D24: '727',
	  D26: '712',
	  D27: '741',
	  D28: '744',
	  D29: '745',
	  D30: '743',
	  D36: '714',
	  D37: '715',
	  D38: '716',
	  D31: '713',
	  D32: '717',
	  D33: '711',
	  D34: '718',
	  D35: '719',
	  D39: '710',
	  D01: '701',
	  D02: '702',
	  D04: '704',
	  D06: '709',
	  D07: '708',
	  D08: '700',
	  E01: '803',
	  E02: '804',
	  E03: '813',
	  E04: '811',
	  E05: '807',
	  E06: '800',
	  E07: '801',
	  E08: '802',
	  E09: '806',
	  E10: '805',
	  E11: '812',
	  E12: '830',
	  E13: '832',
	  E14: '831',
	  E15: '840',
	  E16: '815',
	  E17: '814',
	  E18: '833',
	  E19: '820',
	  E20: '825',
	  E21: '824',
	  E22: '823',
	  E23: '822',
	  E24: '821',
	  E25: '829',
	  E26: '852',
	  E27: '828',
	  E28: '827',
	  E29: '826',
	  E30: '842',
	  E31: '843',
	  E32: '844',
	  E33: '847',
	  E34: '846',
	  E35: '845',
	  E36: '851',
	  E37: '848',
	  E38: '849',
	  F14: '220',
	  F05: '241',
	  F18: '235',
	  F33: '234',
	  F01: '242',
	  F07: '231',
	  F17: '238',
	  F16: '239',
	  F15: '237',
	  F27: '251',
	  F28: '221',
	  F21: '224',
	  F19: '236',
	  F04: '247',
	  F03: '248',
	  F06: '243',
	  F02: '244',
	  F09: '222',
	  F08: '223',
	  F10: '232',
	  F30: '252',
	  F31: '253',
	  F32: '249',
	  F22: '226',
	  F23: '227',
	  F24: '228',
	  F25: '208',
	  F26: '207',
	  F11: '233',
	  G01: '260',
	  G06: '265',
	  G09: '270',
	  G02: '261',
	  G03: '262',
	  G04: '263',
	  G05: '264',
	  G08: '269',
	  G07: '268',
	  G10: '266',
	  G11: '267',
	  G12: '272',
	  H01: '330',
	  H03: '320',
	  H02: '335',
	  H04: '326',
	  H05: '338',
	  H06: '337',
	  H07: '333',
	  H08: '334',
	  H09: '325',
	  H10: '324',
	  H11: '327',
	  H12: '328',
	  H13: '336',
	  I01: '600',
	  I02: '600',
	  J05: '302',
	  J02: '310',
	  J04: '305',
	  J03: '306',
	  J06: '303',
	  J09: '304',
	  J10: '307',
	  J08: '312',
	  J12: '314',
	  J11: '308',
	  J13: '315',
	  J14: '313',
	  J15: '311',
	  K01: '360',
	  K02: '358',
	  K03: '357',
	  K09: '350',
	  K10: '351',
	  K12: '356',
	  K16: '369',
	  K15: '364',
	  K04: '363',
	  K05: '366',
	  K14: '353',
	  K08: '362',
	  K06: '367',
	  K07: '368',
	  K11: '361',
	  K13: '352',
	  K17: '354',
	  K18: '365',
	  M01: '540',
	  M02: '545',
	  M03: '542',
	  M04: '557',
	  M05: '552',
	  M06: '551',
	  M07: '558',
	  M08: '541',
	  M09: '555',
	  M10: '544',
	  M11: '553',
	  M12: '556',
	  M13: '546',
	  N01: '500',
	  N02: '505',
	  N03: '508',
	  N09: '507',
	  N10: '509',
	  N11: '506',
	  N12: '504',
	  N13: '503',
	  N14: '502',
	  N05: '510',
	  N06: '514',
	  N07: '520',
	  N15: '515',
	  N16: '516',
	  N17: '513',
	  N18: '512',
	  N19: '511',
	  N20: '530',
	  N04: '521',
	  N08: '526',
	  N21: '522',
	  N22: '523',
	  N23: '528',
	  N24: '527',
	  N25: '525',
	  N26: '524',
	  O01: '300',
	  O02: '300',
	  O03: '300',
	  P01: '640',
	  P02: '630',
	  P03: '632',
	  P04: '648',
	  P05: '633',
	  P06: '651',
	  P07: '646',
	  P08: '631',
	  P09: '647',
	  P10: '643',
	  P11: '649',
	  P12: '637',
	  P13: '638',
	  P14: '635',
	  P15: '634',
	  P16: '636',
	  P17: '655',
	  P18: '654',
	  P19: '653',
	  P20: '652',
	  Q12: '612',
	  Q02: '613',
	  Q03: '625',
	  Q04: '622',
	  Q05: '621',
	  Q06: '623',
	  Q07: '616',
	  Q08: '615',
	  Q09: '614',
	  Q10: '624',
	  Q11: '611',
	  Q13: '608',
	  Q14: '606',
	  Q15: '604',
	  Q16: '603',
	  Q17: '602',
	  Q18: '607',
	  Q20: '605',
	  T01: '900',
	  T02: '920',
	  T03: '928',
	  T04: '946',
	  T05: '913',
	  T06: '908',
	  T07: '909',
	  T08: '904',
	  T09: '905',
	  T10: '907',
	  T11: '906',
	  T12: '923',
	  T13: '912',
	  T14: '911',
	  T15: '925',
	  T16: '940',
	  T17: '932',
	  T18: '924',
	  T19: '927',
	  T20: '926',
	  T21: '931',
	  T22: '929',
	  T23: '944',
	  T24: '947',
	  T25: '941',
	  T26: '901',
	  T27: '902',
	  T28: '903',
	  T29: '921',
	  T30: '922',
	  T31: '942',
	  T32: '943',
	  T33: '945',
	  U01: '970',
	  U07: '975',
	  U03: '981',
	  U04: '971',
	  U05: '973',
	  U06: '974',
	  U02: '976',
	  U08: '977',
	  U09: '978',
	  U10: '983',
	  U11: '972',
	  U12: '979',
	  U13: '982',
	  V01: '950',
	  V02: '961',
	  V03: '956',
	  V04: '954',
	  V09: '955',
	  V10: '958',
	  V07: '959',
	  V08: '962',
	  V06: '963',
	  V05: '965',
	  V11: '951',
	  V13: '957',
	  V12: '953',
	  V15: '964',
	  V14: '966',
	  V16: '952',
	  W03: '893',
	  W02: '890',
	  W01: '891',
	  W04: '892',
	  W05: '894',
	  W06: '896',
	  X01: '880',
	  X02: '885',
	  X03: '884',
	  X04: '881',
	  X05: '882',
	  X06: '883',
	  Z01: '209',
	  Z02: '210',
	  Z03: '211',
	  Z04: '212'
	};

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

	function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

	function getStrAttribute(element, attr) {
	  if (element.hasAttribute(attr)) {
	    return String(element.getAttribute(attr));
	  } else {
	    return '';
	  }
	}

	var _cityRef = /*#__PURE__*/new WeakMap();

	var _townRef = /*#__PURE__*/new WeakMap();

	var _zipRef = /*#__PURE__*/new WeakMap();

	var _inputRef = /*#__PURE__*/new WeakMap();

	var _realInput = /*#__PURE__*/new WeakMap();

	var _zip = /*#__PURE__*/new WeakMap();

	var _city = /*#__PURE__*/new WeakMap();

	var _town = /*#__PURE__*/new WeakMap();

	var _address = /*#__PURE__*/new WeakMap();

	var _props = /*#__PURE__*/new WeakMap();

	var TWAddress = /*#__PURE__*/function (_HTMLElement) {
	  _inherits(TWAddress, _HTMLElement);

	  var _super = _createSuper(TWAddress);

	  function TWAddress() {
	    var _this;

	    _classCallCheck(this, TWAddress);

	    _this = _super.call(this);

	    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _cityRef, {
	      writable: true,
	      value: void 0
	    });

	    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _townRef, {
	      writable: true,
	      value: void 0
	    });

	    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _zipRef, {
	      writable: true,
	      value: void 0
	    });

	    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _inputRef, {
	      writable: true,
	      value: void 0
	    });

	    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _realInput, {
	      writable: true,
	      value: void 0
	    });

	    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _zip, {
	      writable: true,
	      value: void 0
	    });

	    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _city, {
	      writable: true,
	      value: void 0
	    });

	    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _town, {
	      writable: true,
	      value: void 0
	    });

	    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _address, {
	      writable: true,
	      value: void 0
	    });

	    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _props, {
	      writable: true,
	      value: void 0
	    });

	    _this.attachShadow({
	      mode: 'open'
	    });

	    _this.cityChosen = _this.cityChosen.bind(_assertThisInitialized(_this));
	    _this.townChosen = _this.townChosen.bind(_assertThisInitialized(_this));
	    _this.inputChange = _this.inputChange.bind(_assertThisInitialized(_this));

	    _classPrivateFieldSet(_assertThisInitialized(_this), _cityRef, null);

	    _classPrivateFieldSet(_assertThisInitialized(_this), _townRef, null);

	    _classPrivateFieldSet(_assertThisInitialized(_this), _zipRef, null);

	    _classPrivateFieldSet(_assertThisInitialized(_this), _inputRef, null);

	    _classPrivateFieldSet(_assertThisInitialized(_this), _realInput, document.createElement('input'));

	    _classPrivateFieldGet(_assertThisInitialized(_this), _realInput).type = 'hidden';

	    _classPrivateFieldSet(_assertThisInitialized(_this), _zip, '');

	    _classPrivateFieldSet(_assertThisInitialized(_this), _city, null);

	    _classPrivateFieldSet(_assertThisInitialized(_this), _town, null);

	    _classPrivateFieldSet(_assertThisInitialized(_this), _address, '');

	    _classPrivateFieldSet(_assertThisInitialized(_this), _props, {
	      name: ''
	    });

	    return _this;
	  }

	  _createClass(TWAddress, [{
	    key: "connectedCallback",
	    value: function connectedCallback() {
	      if (this.shadowRoot !== null) {
	        // 0. Setup props
	        _classPrivateFieldGet(this, _props).name = getStrAttribute(this, 'name'); // 1. DOM

	        this.shadowRoot.innerHTML = this.render();

	        _classPrivateFieldSet(this, _cityRef, this.shadowRoot.querySelector('.city-menu'));

	        _classPrivateFieldSet(this, _townRef, this.shadowRoot.querySelector('.town-menu'));

	        _classPrivateFieldSet(this, _zipRef, this.shadowRoot.querySelector('span.zip'));

	        _classPrivateFieldSet(this, _inputRef, this.shadowRoot.querySelector('input.address-input')); // Real input element


	        if (_classPrivateFieldGet(this, _realInput) !== null) {
	          _classPrivateFieldGet(this, _realInput).name = _classPrivateFieldGet(this, _props).name;
	          this.appendChild(_classPrivateFieldGet(this, _realInput));
	        } // Init cities options


	        if (_classPrivateFieldGet(this, _cityRef) !== null) {
	          _classPrivateFieldGet(this, _cityRef).options = cities;
	        } // 2. Style


	        this.style.display = 'block';
	        var styleElement = document.createElement('style');
	        styleElement.appendChild(document.createTextNode(addressStyle));
	        this.shadowRoot.appendChild(styleElement);
	      } // 3. Event


	      if (_classPrivateFieldGet(this, _cityRef) !== null) {
	        _classPrivateFieldGet(this, _cityRef).addEventListener('change', this.cityChosen);
	      }

	      if (_classPrivateFieldGet(this, _townRef) !== null) {
	        _classPrivateFieldGet(this, _townRef).addEventListener('change', this.townChosen);
	      }

	      if (_classPrivateFieldGet(this, _inputRef) !== null) {
	        _classPrivateFieldGet(this, _inputRef).addEventListener('keyup', this.inputChange);
	      }
	    }
	  }, {
	    key: "disconnectedCallback",
	    value: function disconnectedCallback() {
	      if (_classPrivateFieldGet(this, _cityRef) !== null) {
	        _classPrivateFieldGet(this, _cityRef).removeEventListener('change', this.cityChosen);
	      }

	      if (_classPrivateFieldGet(this, _townRef) !== null) {
	        _classPrivateFieldGet(this, _townRef).removeEventListener('change', this.townChosen);
	      }

	      if (_classPrivateFieldGet(this, _inputRef) !== null) {
	        _classPrivateFieldGet(this, _inputRef).removeEventListener('keyup', this.inputChange);
	      }
	    }
	  }, {
	    key: "cityChosen",
	    value: function cityChosen(option) {
	      var city = option.detail;

	      if (city.value in towns) {
	        if (_classPrivateFieldGet(this, _townRef) !== null) {
	          _classPrivateFieldGet(this, _townRef).options = towns[city.value];

	          _classPrivateFieldSet(this, _city, city);

	          _classPrivateFieldSet(this, _town, null);

	          _classPrivateFieldSet(this, _zip, '');

	          this.valueChange();

	          if (_classPrivateFieldGet(this, _zipRef) !== null) {
	            _classPrivateFieldGet(this, _zipRef).classList.add('hidden');
	          }
	        }
	      }
	    }
	  }, {
	    key: "townChosen",
	    value: function townChosen(option) {
	      var town = option.detail;

	      if (town.value in zips) {
	        var zip = zips[town.value];

	        _classPrivateFieldSet(this, _town, town);

	        _classPrivateFieldSet(this, _zip, zip);

	        this.valueChange();

	        if (_classPrivateFieldGet(this, _zipRef) !== null) {
	          _classPrivateFieldGet(this, _zipRef).textContent = zip;

	          _classPrivateFieldGet(this, _zipRef).classList.remove('hidden');
	        }
	      }
	    }
	  }, {
	    key: "inputChange",
	    value: function inputChange() {
	      if (_classPrivateFieldGet(this, _inputRef) !== null) {
	        _classPrivateFieldSet(this, _address, _classPrivateFieldGet(this, _inputRef).value);

	        this.valueChange();
	      }
	    }
	  }, {
	    key: "valueChange",
	    value: function valueChange() {
	      if (_classPrivateFieldGet(this, _realInput) !== null) {
	        _classPrivateFieldGet(this, _realInput).value = [_classPrivateFieldGet(this, _zip), _classPrivateFieldGet(this, _city) === null ? '' : _classPrivateFieldGet(this, _city).name, _classPrivateFieldGet(this, _town) === null ? '' : _classPrivateFieldGet(this, _town).name, _classPrivateFieldGet(this, _address)].join(' ');
	        var evt = new CustomEvent('change', {
	          detail: {
	            zip: _classPrivateFieldGet(this, _zip),
	            city: _classPrivateFieldGet(this, _city) === null ? '' : _classPrivateFieldGet(this, _city).name,
	            town: _classPrivateFieldGet(this, _town) === null ? '' : _classPrivateFieldGet(this, _town).name,
	            address: _classPrivateFieldGet(this, _address)
	          }
	        });
	        this.dispatchEvent(evt);
	      }
	    }
	  }, {
	    key: "value",
	    get: function get() {
	      return {
	        zip: _classPrivateFieldGet(this, _zip),
	        city: _classPrivateFieldGet(this, _city) === null ? '' : _classPrivateFieldGet(this, _city).name,
	        town: _classPrivateFieldGet(this, _town) === null ? '' : _classPrivateFieldGet(this, _town).name,
	        address: _classPrivateFieldGet(this, _address)
	      };
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return "\n      <div class=\"container\">\n        <div class=\"section\">\n          <span class=\"zip hidden\"></span>\n          <dropdown-menu\n            class=\"menu city-menu\"\n            placeholder=\"\u8ACB\u9078\u64C7\u7E23\u5E02\"\n            maxitems=\"5\"\n          ></dropdown-menu>\n          <dropdown-menu\n            class=\"menu town-menu\"\n            placeholder=\"\u8ACB\u9078\u64C7\u9109/\u93AE/\u5E02/\u5340\"\n            maxitems=\"5\"\n          ></dropdown-menu>\n        </div>\n        <div class=\"section\">\n          <input class=\"address-input\" type=\"text\" placeholder=\"\u91CC\u3001\u9130\u3001\u5DF7\u5F04\u3001\u9053\u8DEF/\u8857\u540D\u3001\u865F\u3001\u6A13\u5C64\u3001\u5BA4\" />\n        </div>\n      </div>\n    ";
	    }
	  }]);

	  return TWAddress;
	}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

	window.customElements.define('tw-address', TWAddress);

	return TWAddress;

}));
