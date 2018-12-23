(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Parlx", [], factory);
	else if(typeof exports === 'object')
		exports["Parlx"] = factory();
	else
		root["Parlx"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/parlx.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/parlx.js":
/*!**********************!*\
  !*** ./src/parlx.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Parlx; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Parlx =
/*#__PURE__*/
function () {
  function Parlx(element) {
    var _this = this;

    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Parlx);

    _defineProperty(this, "onWindowScroll", function () {
      if (_this.element) {
        _this.parallaxEffect();

        if (typeof _this.settings.onScroll === 'function') {
          _this.settings.onScroll(_this.element);
        }
      }
    });

    _defineProperty(this, "onWindowResize", function () {
      if (_this.element) {
        _this.parallaxEffect();

        if (typeof _this.settings.onResize === 'function') {
          _this.settings.onResize(_this.element);
        }
      }
    });

    this.element = element;
    this.settings = this.extendSettings(settings);

    if (typeof this.settings.onInit === 'function') {
      this.settings.onInit(this.element);
    }

    this.parallaxEffect();
    this.addEventListeners();
  }

  _createClass(Parlx, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      window.addEventListener('scroll', this.onWindowScroll);
      window.addEventListener('resize', this.onWindowResize);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      window.removeEventListener('scroll', this.onWindowScroll);
      window.removeEventListener('resize', this.onWindowResize);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (typeof this.settings.onDestroy === 'function') {
        this.settings.onDestroy(this.element);
      }

      this.removeEventListeners();
      this.element.parlx = null;
      delete this.element.parlx;
      this.element = null;
    }
  }, {
    key: "transforms",
    value: function transforms() {
      var moveX, moveY;

      if (this.settings.direction === 'horizontal') {
        moveX = this.movement;
        moveY = '0';
      } else if (this.settings.direction === 'vertical') {
        moveX = '0';
        moveY = this.movement;
      } else if (this.settings.direction === 'diagonal') {
        moveX = this.movement;
        moveY = this.movement;
      }

      this.transform = "translate(".concat(moveX, "px, ").concat(moveY, "px)");
    }
  }, {
    key: "parallaxEffect",
    value: function parallaxEffect() {
      this.element.style.height = this.settings.height;
      var scrolled = this.element.getBoundingClientRect().y;
      if (Math.abs(this.settings.speed) > 1) this.settings.speed = 0.3;
      this.movement = this.settings.speed * scrolled / 2;

      if (navigator.userAgent.match(this.settings.exclude)) {
        this.settings.speed = 0;
      }

      this.transforms();

      if (this.settings.type === 'foreground') {
        Object.assign(this.element.style, {
          transform: this.transform
        });
      } else if (this.settings.type === 'background') {
        Object.assign(this.element.querySelector('.parlx-children').style, {
          transform: this.transform,
          'object-fit': 'cover',
          'min-width': "".concat(this.element.offsetWidth * (1 + Math.abs(this.settings.speed) * 2), "px"),
          height: "".concat(this.element.offsetHeight * (1 + Math.abs(this.settings.speed) * 2), "px")
        });
      }

      var values = {
        move: this.movement
      };
      this.element.dispatchEvent(new CustomEvent('parlxMove', {
        detail: values
      }));
    }
  }, {
    key: "extendSettings",
    value: function extendSettings(settings) {
      var _this2 = this;

      var defaultSettings = {
        direction: 'vertical',
        // parallax element move direction
        type: 'background',
        // type of parallax: foreground (div move), background (inner image move)
        speed: 0.3,
        // parallax speed (min: -1, max: 1)
        height: '400px',
        // parallax element height
        exclude: null,
        // enable/disable parallax effect on selected user agents
        onInit: null,
        // callback on plugin init
        onScroll: null,
        // callback on window scroll
        onResize: null,
        // callback on window resize
        onDestroy: null // callback on plugin destroy

      };
      var newSettings = {};
      Object.keys(defaultSettings).forEach(function (property) {
        if (property in settings) {
          newSettings[property] = settings[property];
        } else if (_this2.element.getAttribute("data-".concat(property))) {
          var attribute = _this2.element.getAttribute("data-".concat(property));

          try {
            newSettings[property] = JSON.parse(attribute);
          } catch (err) {
            newSettings[property] = attribute;
          }
        } else {
          newSettings[property] = defaultSettings[property];
        }
      });
      return newSettings;
    }
  }], [{
    key: "init",
    value: function init(elements, settings) {
      if (elements instanceof Node) elements = [elements];
      if (elements instanceof NodeList) elements = [].slice.call(elements);
      if (!(elements instanceof Array)) return;
      elements.forEach(function (element) {
        if (!('parlx' in element)) element.parlx = new Parlx(element, settings);
      });
    }
  }]);

  return Parlx;
}();


var scope;
if (typeof window !== 'undefined') scope = window;else if (typeof global !== 'undefined') scope = global;

if (typeof document !== 'undefined') {
  scope.Parlx = Parlx;
  Parlx.init(document.querySelectorAll('[data-parlx]'));
}

if (scope && scope.jQuery) {
  var $ = scope.jQuery;

  $.fn.parlx = function (elements, options) {
    return Parlx.init(elements, options);
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
});
//# sourceMappingURL=parlx.js.map