(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FlvExtend"] = factory();
	else
		root["FlvExtend"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5115);
/* harmony import */ var core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9730);
/* harmony import */ var core_js_modules_es6_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1876);
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9371);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(110);
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5767);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1246);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8388);
/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7476);
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8837);
/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4882);
/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4336);
/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8351);
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7470);
/* harmony import */ var core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9115);
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6253);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6997);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1181);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var mpegts_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2527);
/* harmony import */ var mpegts_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(mpegts_js__WEBPACK_IMPORTED_MODULE_18__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * 基于flv.js的播放增强插件
 * 特性：追帧、断流重连、实时更新、解决stuck问题
 * author：Xia
 */

var DEFAULT_OPTIONS = {
  element: '',
  // video element
  frameTracking: false,
  // 追帧设置
  updateOnStart: false,
  // 点击播放按钮后实时更新视频
  updateOnFocus: false,
  // 获得焦点后实时更新视频
  reconnect: true,
  // 断流后重连
  reconnectInterval: 1000,
  // 重连间隔(ms)
  maxReconnectAttempts: null,
  // 最大重连次数（为null则不限制次数）
  trackingDelta: 2,
  // 追帧最大延迟
  trackingPlaybackRate: 1.1,
  // 追帧时的播放速率
  showLog: true // 是否显示插件的log信息（回到前台、跳帧、卡住重建、视频ERROR）
};
var FlvExtend = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   */
  function FlvExtend(options) {
    _classCallCheck(this, FlvExtend);
    _defineProperty(this, "player", null);
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    this.videoElement = this.options.element;
    this.reconnectAttempts = 0;
    this.forcedClose = false;
    this._validateOptions();
  }

  /**
   * 初始化播放器
   * @param mediaDataSource
   * @param config
   * @returns FlvJs.Player
   */
  _createClass(FlvExtend, [{
    key: "init",
    value: function init(mediaDataSource) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this.player) {
        this.destroy();
      }
      this.mediaDataSource = mediaDataSource;
      this.config = config;
      this.forcedClose = false;
      if (this.videoElement) {
        this.player = mpegts_js__WEBPACK_IMPORTED_MODULE_18___default().createPlayer(mediaDataSource, config);
        this.player.attachMediaElement(this.videoElement);
        this.player.load();
      }
      this._bindPlayerOptions();
      this._bindPlayerMethods();
      this._bindPlayerEvents();
      this._handleStuck();
      return this.player;
    }

    // 更新时间到最新
  }, {
    key: "update",
    value: function update() {
      if (this.player && this.player.buffered.length) {
        this.player.currentTime = this.player.buffered.end(0) - 1;
      }
    }

    // 重建播放器
  }, {
    key: "rebuild",
    value: function rebuild() {
      if (this.forcedClose) return;
      this.destroy();
      this.init(this.mediaDataSource, this.config);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.player) {
        this.player.pause();
        this.player.unload();
        this.player.detachMediaElement();
        this.player.destroy();
        this.player = null;
      }
      this.interval && clearInterval(this.interval);
      this.timeout && clearTimeout(this.timeout);
      this.videoElement.removeEventListener('progress', this._onProgress.bind(this));
      this.videoElement.removeEventListener('play', this.update.bind(this));
      window.onfocus = null;
    }
  }, {
    key: "_onProgress",
    value: function _onProgress(e) {
      // 追帧设置
      if (this.options.frameTracking) {
        this._handleFrameTracking();
      }
      this.reconnectAttempts = 0;
      this.onProgress(e, this.player);
    }
  }, {
    key: "_bindPlayerOptions",
    value: function _bindPlayerOptions() {
      var _this = this;
      this.videoElement.removeEventListener('progress', this._onProgress.bind(this));
      this.videoElement.addEventListener('progress', this._onProgress.bind(this));

      // 点击播放按钮，更新视频
      if (this.options.updateOnStart) {
        this.videoElement.removeEventListener('play', this.update.bind(this));
        this.videoElement.addEventListener('play', this.update.bind(this));
      }

      // 网页重新激活后，更新视频
      if (this.options.updateOnFocus) {
        window.onfocus = function () {
          _this.log('回到前台');
          _this.update();
        };
      }
    }
  }, {
    key: "_bindPlayerMethods",
    value: function _bindPlayerMethods() {
      var _this2 = this;
      // this.player.close = this.destroy.bind(this)
      this.player.close = function () {
        _this2.forcedClose = true;
        _this2.destroy();
      };
      this.player.update = this.update.bind(this);
      this.player.rebuild = this.rebuild.bind(this);

      // 从 v0.3.0 开始废弃
      this.player.onerror = function (e) {};
      this.player.onstats = function (e) {};
      this.player.onmedia = function (e) {};
    }
  }, {
    key: "_bindPlayerEvents",
    value: function _bindPlayerEvents() {
      var _this3 = this;
      var events = (mpegts_js__WEBPACK_IMPORTED_MODULE_18___default().Events);
      var _loop = function _loop() {
        var eventCamelCase = _this3.toCamelCase(events[i]);
        _this3["on".concat(eventCamelCase)] = function (e, player) {};

        // 批量绑定mpegts事件回调
        if (events[i] !== 'error') {
          _this3.player.on(events[i], function (e) {
            _this3["on".concat(eventCamelCase)](e, _this3.player);
          });
        }
      };
      for (var i in events) {
        _loop();
      }
      this.player.on((mpegts_js__WEBPACK_IMPORTED_MODULE_18___default().Events.ERROR), function () {
        for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
          e[_key] = arguments[_key];
        }
        var err = [].concat(e);
        var errorObj = {
          type: err[0],
          detail: err[1],
          info: err[2]
        };
        _this3.onError(errorObj, _this3.player);
        _this3.player.onerror(errorObj);
        _this3._tryReconnect(errorObj);
        _this3.log('视频ERROR', errorObj);
      });
      this.player.on((mpegts_js__WEBPACK_IMPORTED_MODULE_18___default().Events.STATISTICS_INFO), function (statisticsInfo) {
        _this3.player.onstats(statisticsInfo);
      });
      this.player.on((mpegts_js__WEBPACK_IMPORTED_MODULE_18___default().Events.MEDIA_INFO), function (mediaInfo) {
        _this3.reconnectAttempts = 0;
        _this3.player.onmedia(mediaInfo);
      });
    }
  }, {
    key: "_tryReconnect",
    value: function _tryReconnect(e) {
      var _this4 = this;
      var _this$options = this.options,
        reconnect = _this$options.reconnect,
        reconnectInterval = _this$options.reconnectInterval,
        maxReconnectAttempts = _this$options.maxReconnectAttempts;
      if (!reconnect) return;
      if (!maxReconnectAttempts || maxReconnectAttempts && this.reconnectAttempts < maxReconnectAttempts) {
        this.timeout = setTimeout(function () {
          _this4.reconnectAttempts++;
          _this4.onReconnect(_objectSpread(_objectSpread({}, e), {}, {
            reconnectAttempts: _this4.reconnectAttempts
          }), _this4.player);
          _this4.rebuild();
        }, reconnectInterval);

        // 重连次数已耗尽，重连失败
      } else {
        this.onReconnectFailed(e, this.player);
      }
    }

    // 追帧
  }, {
    key: "_handleFrameTracking",
    value: function _handleFrameTracking() {
      var _this$player;
      if (!this.player || !((_this$player = this.player) !== null && _this$player !== void 0 && _this$player.buffered.length)) return;
      try {
        var end = this.player.buffered.end(0); // 获取当前buffered值(缓冲区末尾)
        var delta = end - this.player.currentTime; // 获取buffered与当前播放位置的差值

        // 延迟过大，通过跳帧的方式更新视频
        if (delta > 10 || delta < 0) {
          this.log('跳帧');
          this.update();
          return;
        }

        // 延迟较小时，通过调整播放速度的方式来追帧
        if (delta > this.options.trackingDelta) {
          this.videoElement.playbackRate = this.options.trackingPlaybackRate;
        } else {
          this.videoElement.playbackRate = 1;
        }
      } catch (e) {
        console.log(e);
      }
    }

    // 解决stuck的问题
  }, {
    key: "_handleStuck",
    value: function _handleStuck() {
      var _this5 = this;
      var lastDecodedFrames = 0;
      var stuckTime = 0;
      this.interval && clearInterval(this.interval);

      // 目前连续3s帧无变化则为视频卡住，后续可根据需求进行扩展
      this.interval = setInterval(function () {
        var decodedFrames = _this5.player.statisticsInfo.decodedFrames;
        if (!decodedFrames) return;
        if (lastDecodedFrames === decodedFrames && !_this5.videoElement.paused) {
          stuckTime++;
          if (stuckTime > 2) {
            _this5.onStuck(_this5.player);
            // this.log('STUCK')
            // this.rebuild()
          }
        } else {
          lastDecodedFrames = decodedFrames;
          stuckTime = 0;
        }
      }, 1000);
    }
  }, {
    key: "_validateOptions",
    value: function _validateOptions() {
      if (!this.videoElement) {
        throw new Error('options中缺少element参数！');
      }
      if (this.options.trackingPlaybackRate < 1) {
        throw new Error('trackingPlaybackRate参数不能小于1！');
      }

      // 兼容旧参数
      if (this.options.frameTrackingDelta) {
        this.options.trackingDelta = this.options.frameTrackingDelta;
      }
      if (this.options.reconnectInterval <= 0) {
        this.options.reconnectInterval = 1000;
      }
    }
  }, {
    key: "log",
    value: function log(message) {
      if (this.options.showLog) {
        var _console;
        for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          rest[_key2 - 1] = arguments[_key2];
        }
        (_console = console).log.apply(_console, ["%c ".concat(message), 'background:red;color:#fff'].concat(rest));
      }
    }
  }, {
    key: "toCamelCase",
    value: function toCamelCase(str) {
      var arr = str.split(/[_-]/);
      var capitalizedArr = arr.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      return capitalizedArr.join('');
    }
  }, {
    key: "onReconnect",
    value: function onReconnect(e, player) {}
  }, {
    key: "onReconnectFailed",
    value: function onReconnectFailed(e, player) {}
  }, {
    key: "onProgress",
    value: function onProgress(e, player) {}
  }, {
    key: "onStuck",
    value: function onStuck(player) {}
  }]);
  return FlvExtend;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlvExtend);

/***/ }),

/***/ 5579:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(4926)["default"];

/***/ }),

/***/ 4963:
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 7722:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(6314)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(7728)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 6793:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var at = __webpack_require__(4496)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ 7007:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(5286);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 9315:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(2110);
var toLength = __webpack_require__(875);
var toAbsoluteIndex = __webpack_require__(2337);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 50:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(741);
var IObject = __webpack_require__(9797);
var toObject = __webpack_require__(508);
var toLength = __webpack_require__(875);
var asc = __webpack_require__(6886);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ 2736:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(5286);
var isArray = __webpack_require__(4302);
var SPECIES = __webpack_require__(6314)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ 6886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(2736);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ 4398:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(4963);
var isObject = __webpack_require__(5286);
var invoke = __webpack_require__(7242);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ 1488:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(2032);
var TAG = __webpack_require__(6314)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ 2032:
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 5645:
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 2811:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(9275);
var createDesc = __webpack_require__(681);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 741:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(4963);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 1355:
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 7057:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(4253)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 2457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(5286);
var document = (__webpack_require__(3816).document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 4430:
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 5541:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(7184);
var gOPS = __webpack_require__(4548);
var pIE = __webpack_require__(4682);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ 2985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3816);
var core = __webpack_require__(5645);
var hide = __webpack_require__(7728);
var redefine = __webpack_require__(7234);
var ctx = __webpack_require__(741);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 4253:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 8082:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(8269);
var redefine = __webpack_require__(7234);
var hide = __webpack_require__(7728);
var fails = __webpack_require__(4253);
var defined = __webpack_require__(1355);
var wks = __webpack_require__(6314);
var regexpExec = __webpack_require__(1165);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ 3218:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(7007);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 18:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3825)('native-function-to-string', Function.toString);


/***/ }),

/***/ 3816:
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 9181:
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 7728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(9275);
var createDesc = __webpack_require__(681);
module.exports = __webpack_require__(7057) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 639:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = (__webpack_require__(3816).document);
module.exports = document && document.documentElement;


/***/ }),

/***/ 1734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(7057) && !__webpack_require__(4253)(function () {
  return Object.defineProperty(__webpack_require__(2457)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 266:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(5286);
var setPrototypeOf = (__webpack_require__(7375).set);
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ 7242:
/***/ ((module) => {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ 9797:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(2032);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 4302:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(2032);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 5286:
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 5364:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(5286);
var cof = __webpack_require__(2032);
var MATCH = __webpack_require__(6314)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ 9988:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(2503);
var descriptor = __webpack_require__(681);
var setToStringTag = __webpack_require__(2943);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7728)(IteratorPrototype, __webpack_require__(6314)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ 2923:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(4461);
var $export = __webpack_require__(2985);
var redefine = __webpack_require__(7234);
var hide = __webpack_require__(7728);
var Iterators = __webpack_require__(2803);
var $iterCreate = __webpack_require__(9988);
var setToStringTag = __webpack_require__(2943);
var getPrototypeOf = __webpack_require__(468);
var ITERATOR = __webpack_require__(6314)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ 5436:
/***/ ((module) => {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ 2803:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 4461:
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ 4728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var META = __webpack_require__(3953)('meta');
var isObject = __webpack_require__(5286);
var has = __webpack_require__(9181);
var setDesc = (__webpack_require__(9275).f);
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(4253)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ 5345:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(7057);
var getKeys = __webpack_require__(7184);
var gOPS = __webpack_require__(4548);
var pIE = __webpack_require__(4682);
var toObject = __webpack_require__(508);
var IObject = __webpack_require__(9797);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(4253)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 2503:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7007);
var dPs = __webpack_require__(5588);
var enumBugKeys = __webpack_require__(4430);
var IE_PROTO = __webpack_require__(9335)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(2457)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(639).appendChild)(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ 9275:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(7007);
var IE8_DOM_DEFINE = __webpack_require__(1734);
var toPrimitive = __webpack_require__(1689);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7057) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 5588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(9275);
var anObject = __webpack_require__(7007);
var getKeys = __webpack_require__(7184);

module.exports = __webpack_require__(7057) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 8693:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(4682);
var createDesc = __webpack_require__(681);
var toIObject = __webpack_require__(2110);
var toPrimitive = __webpack_require__(1689);
var has = __webpack_require__(9181);
var IE8_DOM_DEFINE = __webpack_require__(1734);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(7057) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ 9327:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(2110);
var gOPN = (__webpack_require__(616).f);
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ 616:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(189);
var hiddenKeys = (__webpack_require__(4430).concat)('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ 4548:
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 468:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(9181);
var toObject = __webpack_require__(508);
var IE_PROTO = __webpack_require__(9335)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ 189:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(9181);
var toIObject = __webpack_require__(2110);
var arrayIndexOf = __webpack_require__(9315)(false);
var IE_PROTO = __webpack_require__(9335)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 7184:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(189);
var enumBugKeys = __webpack_require__(4430);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 4682:
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 3160:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(2985);
var core = __webpack_require__(5645);
var fails = __webpack_require__(4253);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ 7643:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(616);
var gOPS = __webpack_require__(4548);
var anObject = __webpack_require__(7007);
var Reflect = (__webpack_require__(3816).Reflect);
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ 681:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 7234:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3816);
var hide = __webpack_require__(7728);
var has = __webpack_require__(9181);
var SRC = __webpack_require__(3953)('src');
var $toString = __webpack_require__(18);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

(__webpack_require__(5645).inspectSource) = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ 7787:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classof = __webpack_require__(1488);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ 1165:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexpFlags = __webpack_require__(3218);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ 7375:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(5286);
var anObject = __webpack_require__(7007);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(741)(Function.call, (__webpack_require__(8693).f)(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ 2943:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = (__webpack_require__(9275).f);
var has = __webpack_require__(9181);
var TAG = __webpack_require__(6314)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ 9335:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(3825)('keys');
var uid = __webpack_require__(3953);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 3825:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(5645);
var global = __webpack_require__(3816);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(4461) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 8364:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(7007);
var aFunction = __webpack_require__(4963);
var SPECIES = __webpack_require__(6314)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ 7717:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(4253);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ 4496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(1467);
var defined = __webpack_require__(1355);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ 9599:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(2985);
var defined = __webpack_require__(1355);
var fails = __webpack_require__(4253);
var spaces = __webpack_require__(4644);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ 4644:
/***/ ((module) => {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ 2337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(1467);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 1467:
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 2110:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(9797);
var defined = __webpack_require__(1355);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(1467);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 508:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(1355);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 1689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5286);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 3953:
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 6074:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3816);
var core = __webpack_require__(5645);
var LIBRARY = __webpack_require__(4461);
var wksExt = __webpack_require__(8787);
var defineProperty = (__webpack_require__(9275).f);
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ 8787:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.f = __webpack_require__(6314);


/***/ }),

/***/ 6314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(3825)('wks');
var uid = __webpack_require__(3953);
var Symbol = (__webpack_require__(3816).Symbol);
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 8837:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var $filter = __webpack_require__(50)(2);

$export($export.P + $export.F * !__webpack_require__(7717)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ 4336:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var $forEach = __webpack_require__(50)(0);
var STRICT = __webpack_require__(7717)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ 6997:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var addToUnscopables = __webpack_require__(7722);
var step = __webpack_require__(5436);
var Iterators = __webpack_require__(2803);
var toIObject = __webpack_require__(2110);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(2923)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 9371:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var $map = __webpack_require__(50)(1);

$export($export.P + $export.F * !__webpack_require__(7717)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ 110:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var html = __webpack_require__(639);
var cof = __webpack_require__(2032);
var toAbsoluteIndex = __webpack_require__(2337);
var toLength = __webpack_require__(875);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(4253)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ 9730:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(2985);

$export($export.P, 'Function', { bind: __webpack_require__(4398) });


/***/ }),

/***/ 1246:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(3816);
var has = __webpack_require__(9181);
var cof = __webpack_require__(2032);
var inheritIfRequired = __webpack_require__(266);
var toPrimitive = __webpack_require__(1689);
var fails = __webpack_require__(4253);
var gOPN = (__webpack_require__(616).f);
var gOPD = (__webpack_require__(8693).f);
var dP = (__webpack_require__(9275).f);
var $trim = (__webpack_require__(9599).trim);
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(2503)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(7057) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(7234)(global, NUMBER, $Number);
}


/***/ }),

/***/ 5115:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(2985);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(5345) });


/***/ }),

/***/ 7470:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(2985);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(7057), 'Object', { defineProperties: __webpack_require__(5588) });


/***/ }),

/***/ 8388:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(2985);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7057), 'Object', { defineProperty: (__webpack_require__(9275).f) });


/***/ }),

/***/ 4882:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(2110);
var $getOwnPropertyDescriptor = (__webpack_require__(8693).f);

__webpack_require__(3160)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ 7476:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(508);
var $keys = __webpack_require__(7184);

__webpack_require__(3160)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 6253:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(1488);
var test = {};
test[__webpack_require__(6314)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(7234)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ 8269:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var regexpExec = __webpack_require__(1165);
__webpack_require__(2985)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ 1876:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isRegExp = __webpack_require__(5364);
var anObject = __webpack_require__(7007);
var speciesConstructor = __webpack_require__(8364);
var advanceStringIndex = __webpack_require__(6793);
var toLength = __webpack_require__(875);
var callRegExpExec = __webpack_require__(7787);
var regexpExec = __webpack_require__(1165);
var fails = __webpack_require__(4253);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(8082)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ 9115:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $at = __webpack_require__(4496)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(2923)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 5767:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3816);
var has = __webpack_require__(9181);
var DESCRIPTORS = __webpack_require__(7057);
var $export = __webpack_require__(2985);
var redefine = __webpack_require__(7234);
var META = (__webpack_require__(4728).KEY);
var $fails = __webpack_require__(4253);
var shared = __webpack_require__(3825);
var setToStringTag = __webpack_require__(2943);
var uid = __webpack_require__(3953);
var wks = __webpack_require__(6314);
var wksExt = __webpack_require__(8787);
var wksDefine = __webpack_require__(6074);
var enumKeys = __webpack_require__(5541);
var isArray = __webpack_require__(4302);
var anObject = __webpack_require__(7007);
var isObject = __webpack_require__(5286);
var toObject = __webpack_require__(508);
var toIObject = __webpack_require__(2110);
var toPrimitive = __webpack_require__(1689);
var createDesc = __webpack_require__(681);
var _create = __webpack_require__(2503);
var gOPNExt = __webpack_require__(9327);
var $GOPD = __webpack_require__(8693);
var $GOPS = __webpack_require__(4548);
var $DP = __webpack_require__(9275);
var $keys = __webpack_require__(7184);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  (__webpack_require__(616).f) = gOPNExt.f = $getOwnPropertyNames;
  (__webpack_require__(4682).f) = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(4461)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7728)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 8351:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(2985);
var ownKeys = __webpack_require__(7643);
var toIObject = __webpack_require__(2110);
var gOPD = __webpack_require__(8693);
var createProperty = __webpack_require__(2811);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ 1181:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $iterators = __webpack_require__(6997);
var getKeys = __webpack_require__(7184);
var redefine = __webpack_require__(7234);
var global = __webpack_require__(3816);
var hide = __webpack_require__(7728);
var Iterators = __webpack_require__(2803);
var wks = __webpack_require__(6314);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ 2527:
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(window,(function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=14)}([function(e,t,i){"use strict";var n=i(6),a=i.n(n),r=function(){function e(){}return e.e=function(t,i){t&&!e.FORCE_GLOBAL_TAG||(t=e.GLOBAL_TAG);var n="["+t+"] > "+i;e.ENABLE_CALLBACK&&e.emitter.emit("log","error",n),e.ENABLE_ERROR&&(console.error?console.error(n):console.warn?console.warn(n):console.log(n))},e.i=function(t,i){t&&!e.FORCE_GLOBAL_TAG||(t=e.GLOBAL_TAG);var n="["+t+"] > "+i;e.ENABLE_CALLBACK&&e.emitter.emit("log","info",n),e.ENABLE_INFO&&(console.info?console.info(n):console.log(n))},e.w=function(t,i){t&&!e.FORCE_GLOBAL_TAG||(t=e.GLOBAL_TAG);var n="["+t+"] > "+i;e.ENABLE_CALLBACK&&e.emitter.emit("log","warn",n),e.ENABLE_WARN&&(console.warn?console.warn(n):console.log(n))},e.d=function(t,i){t&&!e.FORCE_GLOBAL_TAG||(t=e.GLOBAL_TAG);var n="["+t+"] > "+i;e.ENABLE_CALLBACK&&e.emitter.emit("log","debug",n),e.ENABLE_DEBUG&&(console.debug?console.debug(n):console.log(n))},e.v=function(t,i){t&&!e.FORCE_GLOBAL_TAG||(t=e.GLOBAL_TAG);var n="["+t+"] > "+i;e.ENABLE_CALLBACK&&e.emitter.emit("log","verbose",n),e.ENABLE_VERBOSE&&console.log(n)},e}();r.GLOBAL_TAG="mpegts.js",r.FORCE_GLOBAL_TAG=!1,r.ENABLE_ERROR=!0,r.ENABLE_INFO=!0,r.ENABLE_WARN=!0,r.ENABLE_DEBUG=!0,r.ENABLE_VERBOSE=!0,r.ENABLE_CALLBACK=!1,r.emitter=new a.a,t.a=r},function(e,t,i){"use strict";t.a={IO_ERROR:"io_error",DEMUX_ERROR:"demux_error",INIT_SEGMENT:"init_segment",MEDIA_SEGMENT:"media_segment",LOADING_COMPLETE:"loading_complete",RECOVERED_EARLY_EOF:"recovered_early_eof",MEDIA_INFO:"media_info",METADATA_ARRIVED:"metadata_arrived",SCRIPTDATA_ARRIVED:"scriptdata_arrived",TIMED_ID3_METADATA_ARRIVED:"timed_id3_metadata_arrived",SMPTE2038_METADATA_ARRIVED:"smpte2038_metadata_arrived",SCTE35_METADATA_ARRIVED:"scte35_metadata_arrived",PES_PRIVATE_DATA_DESCRIPTOR:"pes_private_data_descriptor",PES_PRIVATE_DATA_ARRIVED:"pes_private_data_arrived",STATISTICS_INFO:"statistics_info",RECOMMEND_SEEKPOINT:"recommend_seekpoint"}},function(e,t,i){"use strict";i.d(t,"c",(function(){return a})),i.d(t,"b",(function(){return r})),i.d(t,"a",(function(){return s}));var n=i(3),a={kIdle:0,kConnecting:1,kBuffering:2,kError:3,kComplete:4},r={OK:"OK",EXCEPTION:"Exception",HTTP_STATUS_CODE_INVALID:"HttpStatusCodeInvalid",CONNECTING_TIMEOUT:"ConnectingTimeout",EARLY_EOF:"EarlyEof",UNRECOVERABLE_EARLY_EOF:"UnrecoverableEarlyEof"},s=function(){function e(e){this._type=e||"undefined",this._status=a.kIdle,this._needStash=!1,this._onContentLengthKnown=null,this._onURLRedirect=null,this._onDataArrival=null,this._onError=null,this._onComplete=null}return e.prototype.destroy=function(){this._status=a.kIdle,this._onContentLengthKnown=null,this._onURLRedirect=null,this._onDataArrival=null,this._onError=null,this._onComplete=null},e.prototype.isWorking=function(){return this._status===a.kConnecting||this._status===a.kBuffering},Object.defineProperty(e.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"status",{get:function(){return this._status},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"needStashBuffer",{get:function(){return this._needStash},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onContentLengthKnown",{get:function(){return this._onContentLengthKnown},set:function(e){this._onContentLengthKnown=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onURLRedirect",{get:function(){return this._onURLRedirect},set:function(e){this._onURLRedirect=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onDataArrival",{get:function(){return this._onDataArrival},set:function(e){this._onDataArrival=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onError",{get:function(){return this._onError},set:function(e){this._onError=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onComplete",{get:function(){return this._onComplete},set:function(e){this._onComplete=e},enumerable:!1,configurable:!0}),e.prototype.open=function(e,t){throw new n.c("Unimplemented abstract function!")},e.prototype.abort=function(){throw new n.c("Unimplemented abstract function!")},e}()},function(e,t,i){"use strict";i.d(t,"d",(function(){return r})),i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return d}));var n,a=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),r=function(){function e(e){this._message=e}return Object.defineProperty(e.prototype,"name",{get:function(){return"RuntimeException"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this._message},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return this.name+": "+this.message},e}(),s=function(e){function t(t){return e.call(this,t)||this}return a(t,e),Object.defineProperty(t.prototype,"name",{get:function(){return"IllegalStateException"},enumerable:!1,configurable:!0}),t}(r),o=function(e){function t(t){return e.call(this,t)||this}return a(t,e),Object.defineProperty(t.prototype,"name",{get:function(){return"InvalidArgumentException"},enumerable:!1,configurable:!0}),t}(r),d=function(e){function t(t){return e.call(this,t)||this}return a(t,e),Object.defineProperty(t.prototype,"name",{get:function(){return"NotImplementedException"},enumerable:!1,configurable:!0}),t}(r)},function(e,t,i){"use strict";var n={};!function(){var e=self.navigator.userAgent.toLowerCase(),t=/(edge)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(chrome)[ \/]([\w.]+)/.exec(e)||/(iemobile)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(firefox)[ \/]([\w.]+)/.exec(e)||[],i=/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(android)/.exec(e)||/(windows)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||[],a={browser:t[5]||t[3]||t[1]||"",version:t[2]||t[4]||"0",majorVersion:t[4]||t[2]||"0",platform:i[0]||""},r={};if(a.browser){r[a.browser]=!0;var s=a.majorVersion.split(".");r.version={major:parseInt(a.majorVersion,10),string:a.version},s.length>1&&(r.version.minor=parseInt(s[1],10)),s.length>2&&(r.version.build=parseInt(s[2],10))}if(a.platform&&(r[a.platform]=!0),(r.chrome||r.opr||r.safari)&&(r.webkit=!0),r.rv||r.iemobile){r.rv&&delete r.rv;a.browser="msie",r.msie=!0}if(r.edge){delete r.edge;a.browser="msedge",r.msedge=!0}if(r.opr){a.browser="opera",r.opera=!0}if(r.safari&&r.android){a.browser="android",r.android=!0}for(var o in r.name=a.browser,r.platform=a.platform,n)n.hasOwnProperty(o)&&delete n[o];Object.assign(n,r)}(),t.a=n},function(e,t,i){"use strict";t.a={OK:"OK",FORMAT_ERROR:"FormatError",FORMAT_UNSUPPORTED:"FormatUnsupported",CODEC_UNSUPPORTED:"CodecUnsupported"}},function(e,t,i){"use strict";var n,a="object"==typeof Reflect?Reflect:null,r=a&&"function"==typeof a.apply?a.apply:function(e,t,i){return Function.prototype.apply.call(e,t,i)};n=a&&"function"==typeof a.ownKeys?a.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise((function(i,n){function a(i){e.removeListener(t,r),n(i)}function r(){"function"==typeof e.removeListener&&e.removeListener("error",a),i([].slice.call(arguments))}g(e,t,r,{once:!0}),"error"!==t&&function(e,t,i){"function"==typeof e.on&&g(e,"error",t,i)}(e,a,{once:!0})}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var d=10;function _(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function h(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function c(e,t,i,n){var a,r,s,o;if(_(i),void 0===(r=e._events)?(r=e._events=Object.create(null),e._eventsCount=0):(void 0!==r.newListener&&(e.emit("newListener",t,i.listener?i.listener:i),r=e._events),s=r[t]),void 0===s)s=r[t]=i,++e._eventsCount;else if("function"==typeof s?s=r[t]=n?[i,s]:[s,i]:n?s.unshift(i):s.push(i),(a=h(e))>0&&s.length>a&&!s.warned){s.warned=!0;var d=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");d.name="MaxListenersExceededWarning",d.emitter=e,d.type=t,d.count=s.length,o=d,console&&console.warn&&console.warn(o)}return e}function u(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(e,t,i){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:i},a=u.bind(n);return a.listener=i,n.wrapFn=a,a}function f(e,t,i){var n=e._events;if(void 0===n)return[];var a=n[t];return void 0===a?[]:"function"==typeof a?i?[a.listener||a]:[a]:i?function(e){for(var t=new Array(e.length),i=0;i<t.length;++i)t[i]=e[i].listener||e[i];return t}(a):m(a,a.length)}function p(e){var t=this._events;if(void 0!==t){var i=t[e];if("function"==typeof i)return 1;if(void 0!==i)return i.length}return 0}function m(e,t){for(var i=new Array(t),n=0;n<t;++n)i[n]=e[n];return i}function g(e,t,i,n){if("function"==typeof e.on)n.once?e.once(t,i):e.on(t,i);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function a(r){n.once&&e.removeEventListener(t,a),i(r)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return d},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");d=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return h(this)},o.prototype.emit=function(e){for(var t=[],i=1;i<arguments.length;i++)t.push(arguments[i]);var n="error"===e,a=this._events;if(void 0!==a)n=n&&void 0===a.error;else if(!n)return!1;if(n){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var o=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw o.context=s,o}var d=a[e];if(void 0===d)return!1;if("function"==typeof d)r(d,this,t);else{var _=d.length,h=m(d,_);for(i=0;i<_;++i)r(h[i],this,t)}return!0},o.prototype.addListener=function(e,t){return c(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return c(this,e,t,!0)},o.prototype.once=function(e,t){return _(t),this.on(e,l(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return _(t),this.prependListener(e,l(this,e,t)),this},o.prototype.removeListener=function(e,t){var i,n,a,r,s;if(_(t),void 0===(n=this._events))return this;if(void 0===(i=n[e]))return this;if(i===t||i.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,i.listener||t));else if("function"!=typeof i){for(a=-1,r=i.length-1;r>=0;r--)if(i[r]===t||i[r].listener===t){s=i[r].listener,a=r;break}if(a<0)return this;0===a?i.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(i,a),1===i.length&&(n[e]=i[0]),void 0!==n.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,i,n;if(void 0===(i=this._events))return this;if(void 0===i.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==i[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete i[e]),this;if(0===arguments.length){var a,r=Object.keys(i);for(n=0;n<r.length;++n)"removeListener"!==(a=r[n])&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=i[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},o.prototype.listeners=function(e){return f(this,e,!0)},o.prototype.rawListeners=function(e){return f(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}},function(e,t,i){"use strict";i.d(t,"d",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"a",(function(){return r})),i.d(t,"c",(function(){return s}));var n=function(e,t,i,n,a){this.dts=e,this.pts=t,this.duration=i,this.originalDts=n,this.isSyncPoint=a,this.fileposition=null},a=function(){function e(){this.beginDts=0,this.endDts=0,this.beginPts=0,this.endPts=0,this.originalBeginDts=0,this.originalEndDts=0,this.syncPoints=[],this.firstSample=null,this.lastSample=null}return e.prototype.appendSyncPoint=function(e){e.isSyncPoint=!0,this.syncPoints.push(e)},e}(),r=function(){function e(){this._list=[]}return e.prototype.clear=function(){this._list=[]},e.prototype.appendArray=function(e){var t=this._list;0!==e.length&&(t.length>0&&e[0].originalDts<t[t.length-1].originalDts&&this.clear(),Array.prototype.push.apply(t,e))},e.prototype.getLastSyncPointBeforeDts=function(e){if(0==this._list.length)return null;var t=this._list,i=0,n=t.length-1,a=0,r=0,s=n;for(e<t[0].dts&&(i=0,r=s+1);r<=s;){if((a=r+Math.floor((s-r)/2))===n||e>=t[a].dts&&e<t[a+1].dts){i=a;break}t[a].dts<e?r=a+1:s=a-1}return this._list[i]},e}(),s=function(){function e(e){this._type=e,this._list=[],this._lastAppendLocation=-1}return Object.defineProperty(e.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"length",{get:function(){return this._list.length},enumerable:!1,configurable:!0}),e.prototype.isEmpty=function(){return 0===this._list.length},e.prototype.clear=function(){this._list=[],this._lastAppendLocation=-1},e.prototype._searchNearestSegmentBefore=function(e){var t=this._list;if(0===t.length)return-2;var i=t.length-1,n=0,a=0,r=i,s=0;if(e<t[0].originalBeginDts)return s=-1;for(;a<=r;){if((n=a+Math.floor((r-a)/2))===i||e>t[n].lastSample.originalDts&&e<t[n+1].originalBeginDts){s=n;break}t[n].originalBeginDts<e?a=n+1:r=n-1}return s},e.prototype._searchNearestSegmentAfter=function(e){return this._searchNearestSegmentBefore(e)+1},e.prototype.append=function(e){var t=this._list,i=e,n=this._lastAppendLocation,a=0;-1!==n&&n<t.length&&i.originalBeginDts>=t[n].lastSample.originalDts&&(n===t.length-1||n<t.length-1&&i.originalBeginDts<t[n+1].originalBeginDts)?a=n+1:t.length>0&&(a=this._searchNearestSegmentBefore(i.originalBeginDts)+1),this._lastAppendLocation=a,this._list.splice(a,0,i)},e.prototype.getLastSegmentBefore=function(e){var t=this._searchNearestSegmentBefore(e);return t>=0?this._list[t]:null},e.prototype.getLastSampleBefore=function(e){var t=this.getLastSegmentBefore(e);return null!=t?t.lastSample:null},e.prototype.getLastSyncPointBefore=function(e){for(var t=this._searchNearestSegmentBefore(e),i=this._list[t].syncPoints;0===i.length&&t>0;)t--,i=this._list[t].syncPoints;return i.length>0?i[i.length-1]:null},e}()},function(e,t,i){"use strict";var n=function(){function e(){this.mimeType=null,this.duration=null,this.hasAudio=null,this.hasVideo=null,this.audioCodec=null,this.videoCodec=null,this.audioDataRate=null,this.videoDataRate=null,this.audioSampleRate=null,this.audioChannelCount=null,this.width=null,this.height=null,this.fps=null,this.profile=null,this.level=null,this.refFrames=null,this.chromaFormat=null,this.sarNum=null,this.sarDen=null,this.metadata=null,this.segments=null,this.segmentCount=null,this.hasKeyframesIndex=null,this.keyframesIndex=null}return e.prototype.isComplete=function(){var e=!1===this.hasAudio||!0===this.hasAudio&&null!=this.audioCodec&&null!=this.audioSampleRate&&null!=this.audioChannelCount,t=!1===this.hasVideo||!0===this.hasVideo&&null!=this.videoCodec&&null!=this.width&&null!=this.height&&null!=this.fps&&null!=this.profile&&null!=this.level&&null!=this.refFrames&&null!=this.chromaFormat&&null!=this.sarNum&&null!=this.sarDen;return null!=this.mimeType&&e&&t},e.prototype.isSeekable=function(){return!0===this.hasKeyframesIndex},e.prototype.getNearestKeyframe=function(e){if(null==this.keyframesIndex)return null;var t=this.keyframesIndex,i=this._search(t.times,e);return{index:i,milliseconds:t.times[i],fileposition:t.filepositions[i]}},e.prototype._search=function(e,t){var i=0,n=e.length-1,a=0,r=0,s=n;for(t<e[0]&&(i=0,r=s+1);r<=s;){if((a=r+Math.floor((s-r)/2))===n||t>=e[a]&&t<e[a+1]){i=a;break}e[a]<t?r=a+1:s=a-1}return i},e}();t.a=n},function(e,t,i){"use strict";var n=i(6),a=i.n(n),r=i(0),s=function(){function e(){}return Object.defineProperty(e,"forceGlobalTag",{get:function(){return r.a.FORCE_GLOBAL_TAG},set:function(t){r.a.FORCE_GLOBAL_TAG=t,e._notifyChange()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"globalTag",{get:function(){return r.a.GLOBAL_TAG},set:function(t){r.a.GLOBAL_TAG=t,e._notifyChange()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"enableAll",{get:function(){return r.a.ENABLE_VERBOSE&&r.a.ENABLE_DEBUG&&r.a.ENABLE_INFO&&r.a.ENABLE_WARN&&r.a.ENABLE_ERROR},set:function(t){r.a.ENABLE_VERBOSE=t,r.a.ENABLE_DEBUG=t,r.a.ENABLE_INFO=t,r.a.ENABLE_WARN=t,r.a.ENABLE_ERROR=t,e._notifyChange()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"enableDebug",{get:function(){return r.a.ENABLE_DEBUG},set:function(t){r.a.ENABLE_DEBUG=t,e._notifyChange()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"enableVerbose",{get:function(){return r.a.ENABLE_VERBOSE},set:function(t){r.a.ENABLE_VERBOSE=t,e._notifyChange()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"enableInfo",{get:function(){return r.a.ENABLE_INFO},set:function(t){r.a.ENABLE_INFO=t,e._notifyChange()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"enableWarn",{get:function(){return r.a.ENABLE_WARN},set:function(t){r.a.ENABLE_WARN=t,e._notifyChange()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"enableError",{get:function(){return r.a.ENABLE_ERROR},set:function(t){r.a.ENABLE_ERROR=t,e._notifyChange()},enumerable:!1,configurable:!0}),e.getConfig=function(){return{globalTag:r.a.GLOBAL_TAG,forceGlobalTag:r.a.FORCE_GLOBAL_TAG,enableVerbose:r.a.ENABLE_VERBOSE,enableDebug:r.a.ENABLE_DEBUG,enableInfo:r.a.ENABLE_INFO,enableWarn:r.a.ENABLE_WARN,enableError:r.a.ENABLE_ERROR,enableCallback:r.a.ENABLE_CALLBACK}},e.applyConfig=function(e){r.a.GLOBAL_TAG=e.globalTag,r.a.FORCE_GLOBAL_TAG=e.forceGlobalTag,r.a.ENABLE_VERBOSE=e.enableVerbose,r.a.ENABLE_DEBUG=e.enableDebug,r.a.ENABLE_INFO=e.enableInfo,r.a.ENABLE_WARN=e.enableWarn,r.a.ENABLE_ERROR=e.enableError,r.a.ENABLE_CALLBACK=e.enableCallback},e._notifyChange=function(){var t=e.emitter;if(t.listenerCount("change")>0){var i=e.getConfig();t.emit("change",i)}},e.registerListener=function(t){e.emitter.addListener("change",t)},e.removeListener=function(t){e.emitter.removeListener("change",t)},e.addLogListener=function(t){r.a.emitter.addListener("log",t),r.a.emitter.listenerCount("log")>0&&(r.a.ENABLE_CALLBACK=!0,e._notifyChange())},e.removeLogListener=function(t){r.a.emitter.removeListener("log",t),0===r.a.emitter.listenerCount("log")&&(r.a.ENABLE_CALLBACK=!1,e._notifyChange())},e}();s.emitter=new a.a,t.a=s},function(e,t,i){"use strict";var n=i(6),a=i.n(n),r=i(0),s=i(4),o=i(8);function d(e,t,i){var n=e;if(t+i<n.length){for(;i--;)if(128!=(192&n[++t]))return!1;return!0}return!1}var _,h=function(e){for(var t=[],i=e,n=0,a=e.length;n<a;)if(i[n]<128)t.push(String.fromCharCode(i[n])),++n;else{if(i[n]<192);else if(i[n]<224){if(d(i,n,1))if((r=(31&i[n])<<6|63&i[n+1])>=128){t.push(String.fromCharCode(65535&r)),n+=2;continue}}else if(i[n]<240){if(d(i,n,2))if((r=(15&i[n])<<12|(63&i[n+1])<<6|63&i[n+2])>=2048&&55296!=(63488&r)){t.push(String.fromCharCode(65535&r)),n+=3;continue}}else if(i[n]<248){var r;if(d(i,n,3))if((r=(7&i[n])<<18|(63&i[n+1])<<12|(63&i[n+2])<<6|63&i[n+3])>65536&&r<1114112){r-=65536,t.push(String.fromCharCode(r>>>10|55296)),t.push(String.fromCharCode(1023&r|56320)),n+=4;continue}}t.push(String.fromCharCode(65533)),++n}return t.join("")},c=i(3),u=(_=new ArrayBuffer(2),new DataView(_).setInt16(0,256,!0),256===new Int16Array(_)[0]),l=function(){function e(){}return e.parseScriptData=function(t,i,n){var a={};try{var s=e.parseValue(t,i,n),o=e.parseValue(t,i+s.size,n-s.size);a[s.data]=o.data}catch(e){r.a.e("AMF",e.toString())}return a},e.parseObject=function(t,i,n){if(n<3)throw new c.a("Data not enough when parse ScriptDataObject");var a=e.parseString(t,i,n),r=e.parseValue(t,i+a.size,n-a.size),s=r.objectEnd;return{data:{name:a.data,value:r.data},size:a.size+r.size,objectEnd:s}},e.parseVariable=function(t,i,n){return e.parseObject(t,i,n)},e.parseString=function(e,t,i){if(i<2)throw new c.a("Data not enough when parse String");var n=new DataView(e,t,i).getUint16(0,!u);return{data:n>0?h(new Uint8Array(e,t+2,n)):"",size:2+n}},e.parseLongString=function(e,t,i){if(i<4)throw new c.a("Data not enough when parse LongString");var n=new DataView(e,t,i).getUint32(0,!u);return{data:n>0?h(new Uint8Array(e,t+4,n)):"",size:4+n}},e.parseDate=function(e,t,i){if(i<10)throw new c.a("Data size invalid when parse Date");var n=new DataView(e,t,i),a=n.getFloat64(0,!u),r=n.getInt16(8,!u);return{data:new Date(a+=60*r*1e3),size:10}},e.parseValue=function(t,i,n){if(n<1)throw new c.a("Data not enough when parse Value");var a,s=new DataView(t,i,n),o=1,d=s.getUint8(0),_=!1;try{switch(d){case 0:a=s.getFloat64(1,!u),o+=8;break;case 1:a=!!s.getUint8(1),o+=1;break;case 2:var h=e.parseString(t,i+1,n-1);a=h.data,o+=h.size;break;case 3:a={};var l=0;for(9==(16777215&s.getUint32(n-4,!u))&&(l=3);o<n-4;){var f=e.parseObject(t,i+o,n-o-l);if(f.objectEnd)break;a[f.data.name]=f.data.value,o+=f.size}if(o<=n-3)9===(16777215&s.getUint32(o-1,!u))&&(o+=3);break;case 8:a={},o+=4;l=0;for(9==(16777215&s.getUint32(n-4,!u))&&(l=3);o<n-8;){var p=e.parseVariable(t,i+o,n-o-l);if(p.objectEnd)break;a[p.data.name]=p.data.value,o+=p.size}if(o<=n-3)9===(16777215&s.getUint32(o-1,!u))&&(o+=3);break;case 9:a=void 0,o=1,_=!0;break;case 10:a=[];var m=s.getUint32(1,!u);o+=4;for(var g=0;g<m;g++){var v=e.parseValue(t,i+o,n-o);a.push(v.data),o+=v.size}break;case 11:var y=e.parseDate(t,i+1,n-1);a=y.data,o+=y.size;break;case 12:var b=e.parseString(t,i+1,n-1);a=b.data,o+=b.size;break;default:o=n,r.a.w("AMF","Unsupported AMF value type "+d)}}catch(e){r.a.e("AMF",e.toString())}return{data:a,size:o,objectEnd:_}},e}(),f=function(){function e(e){this.TAG="ExpGolomb",this._buffer=e,this._buffer_index=0,this._total_bytes=e.byteLength,this._total_bits=8*e.byteLength,this._current_word=0,this._current_word_bits_left=0}return e.prototype.destroy=function(){this._buffer=null},e.prototype._fillCurrentWord=function(){var e=this._total_bytes-this._buffer_index;if(e<=0)throw new c.a("ExpGolomb: _fillCurrentWord() but no bytes available");var t=Math.min(4,e),i=new Uint8Array(4);i.set(this._buffer.subarray(this._buffer_index,this._buffer_index+t)),this._current_word=new DataView(i.buffer).getUint32(0,!1),this._buffer_index+=t,this._current_word_bits_left=8*t},e.prototype.readBits=function(e){if(e>32)throw new c.b("ExpGolomb: readBits() bits exceeded max 32bits!");if(e<=this._current_word_bits_left){var t=this._current_word>>>32-e;return this._current_word<<=e,this._current_word_bits_left-=e,t}var i=this._current_word_bits_left?this._current_word:0;i>>>=32-this._current_word_bits_left;var n=e-this._current_word_bits_left;this._fillCurrentWord();var a=Math.min(n,this._current_word_bits_left),r=this._current_word>>>32-a;return this._current_word<<=a,this._current_word_bits_left-=a,i=i<<a|r},e.prototype.readBool=function(){return 1===this.readBits(1)},e.prototype.readByte=function(){return this.readBits(8)},e.prototype._skipLeadingZero=function(){var e;for(e=0;e<this._current_word_bits_left;e++)if(0!=(this._current_word&2147483648>>>e))return this._current_word<<=e,this._current_word_bits_left-=e,e;return this._fillCurrentWord(),e+this._skipLeadingZero()},e.prototype.readUEG=function(){var e=this._skipLeadingZero();return this.readBits(e+1)-1},e.prototype.readSEG=function(){var e=this.readUEG();return 1&e?e+1>>>1:-1*(e>>>1)},e}(),p=function(){function e(){}return e._ebsp2rbsp=function(e){for(var t=e,i=t.byteLength,n=new Uint8Array(i),a=0,r=0;r<i;r++)r>=2&&3===t[r]&&0===t[r-1]&&0===t[r-2]||(n[a]=t[r],a++);return new Uint8Array(n.buffer,0,a)},e.parseSPS=function(t){for(var i=t.subarray(1,4),n="avc1.",a=0;a<3;a++){var r=i[a].toString(16);r.length<2&&(r="0"+r),n+=r}var s=e._ebsp2rbsp(t),o=new f(s);o.readByte();var d=o.readByte();o.readByte();var _=o.readByte();o.readUEG();var h=e.getProfileString(d),c=e.getLevelString(_),u=1,l=420,p=8,m=8;if((100===d||110===d||122===d||244===d||44===d||83===d||86===d||118===d||128===d||138===d||144===d)&&(3===(u=o.readUEG())&&o.readBits(1),u<=3&&(l=[0,420,422,444][u]),p=o.readUEG()+8,m=o.readUEG()+8,o.readBits(1),o.readBool()))for(var g=3!==u?8:12,v=0;v<g;v++)o.readBool()&&(v<6?e._skipScalingList(o,16):e._skipScalingList(o,64));o.readUEG();var y=o.readUEG();if(0===y)o.readUEG();else if(1===y){o.readBits(1),o.readSEG(),o.readSEG();var b=o.readUEG();for(v=0;v<b;v++)o.readSEG()}var S=o.readUEG();o.readBits(1);var E=o.readUEG(),A=o.readUEG(),R=o.readBits(1);0===R&&o.readBits(1),o.readBits(1);var T=0,L=0,w=0,k=0;o.readBool()&&(T=o.readUEG(),L=o.readUEG(),w=o.readUEG(),k=o.readUEG());var D=1,C=1,B=0,I=!0,O=0,P=0;if(o.readBool()){if(o.readBool()){var M=o.readByte();M>0&&M<16?(D=[1,12,10,16,40,24,20,32,80,18,15,64,160,4,3,2][M-1],C=[1,11,11,11,33,11,11,11,33,11,11,33,99,3,2,1][M-1]):255===M&&(D=o.readByte()<<8|o.readByte(),C=o.readByte()<<8|o.readByte())}if(o.readBool()&&o.readBool(),o.readBool()&&(o.readBits(4),o.readBool()&&o.readBits(24)),o.readBool()&&(o.readUEG(),o.readUEG()),o.readBool()){var x=o.readBits(32),U=o.readBits(32);I=o.readBool(),B=(O=U)/(P=2*x)}}var N=1;1===D&&1===C||(N=D/C);var G=0,V=0;0===u?(G=1,V=2-R):(G=3===u?1:2,V=(1===u?2:1)*(2-R));var F=16*(E+1),j=16*(A+1)*(2-R);F-=(T+L)*G,j-=(w+k)*V;var z=Math.ceil(F*N);return o.destroy(),o=null,{codec_mimetype:n,profile_idc:d,level_idc:_,profile_string:h,level_string:c,chroma_format_idc:u,bit_depth:p,bit_depth_luma:p,bit_depth_chroma:m,ref_frames:S,chroma_format:l,chroma_format_string:e.getChromaFormatString(l),frame_rate:{fixed:I,fps:B,fps_den:P,fps_num:O},sar_ratio:{width:D,height:C},codec_size:{width:F,height:j},present_size:{width:z,height:j}}},e._skipScalingList=function(e,t){for(var i=8,n=8,a=0;a<t;a++)0!==n&&(n=(i+e.readSEG()+256)%256),i=0===n?i:n},e.getProfileString=function(e){switch(e){case 66:return"Baseline";case 77:return"Main";case 88:return"Extended";case 100:return"High";case 110:return"High10";case 122:return"High422";case 244:return"High444";default:return"Unknown"}},e.getLevelString=function(e){return(e/10).toFixed(1)},e.getChromaFormatString=function(e){switch(e){case 420:return"4:2:0";case 422:return"4:2:2";case 444:return"4:4:4";default:return"Unknown"}},e}(),m=i(5),g=function(){function e(){}return e._ebsp2rbsp=function(e){for(var t=e,i=t.byteLength,n=new Uint8Array(i),a=0,r=0;r<i;r++)r>=2&&3===t[r]&&0===t[r-1]&&0===t[r-2]||(n[a]=t[r],a++);return new Uint8Array(n.buffer,0,a)},e.parseVPS=function(t){var i=e._ebsp2rbsp(t),n=new f(i);n.readByte(),n.readByte();n.readBits(4);n.readBits(2);n.readBits(6);return{num_temporal_layers:n.readBits(3)+1,temporal_id_nested:n.readBool()}},e.parseSPS=function(t){var i=e._ebsp2rbsp(t),n=new f(i);n.readByte(),n.readByte();for(var a=0,r=0,s=0,o=0,d=(n.readBits(4),n.readBits(3)),_=(n.readBool(),n.readBits(2)),h=n.readBool(),c=n.readBits(5),u=n.readByte(),l=n.readByte(),p=n.readByte(),m=n.readByte(),g=n.readByte(),v=n.readByte(),y=n.readByte(),b=n.readByte(),S=n.readByte(),E=n.readByte(),A=n.readByte(),R=[],T=[],L=0;L<d;L++)R.push(n.readBool()),T.push(n.readBool());if(d>0)for(L=d;L<8;L++)n.readBits(2);for(L=0;L<d;L++)R[L]&&(n.readByte(),n.readByte(),n.readByte(),n.readByte(),n.readByte(),n.readByte(),n.readByte(),n.readByte(),n.readByte(),n.readByte(),n.readByte()),T[L]&&n.readByte();n.readUEG();var w=n.readUEG();3==w&&n.readBits(1);var k=n.readUEG(),D=n.readUEG();n.readBool()&&(a+=n.readUEG(),r+=n.readUEG(),s+=n.readUEG(),o+=n.readUEG());var C=n.readUEG(),B=n.readUEG(),I=n.readUEG();for(L=n.readBool()?0:d;L<=d;L++)n.readUEG(),n.readUEG(),n.readUEG();n.readUEG(),n.readUEG(),n.readUEG(),n.readUEG(),n.readUEG(),n.readUEG();if(n.readBool()&&n.readBool())for(var O=0;O<4;O++)for(var P=0;P<(3===O?2:6);P++){if(n.readBool()){var M=Math.min(64,1<<4+(O<<1));O>1&&n.readSEG();for(L=0;L<M;L++)n.readSEG()}else n.readUEG()}n.readBool(),n.readBool();n.readBool()&&(n.readByte(),n.readUEG(),n.readUEG(),n.readBool());var x=n.readUEG(),U=0;for(L=0;L<x;L++){var N=!1;if(0!==L&&(N=n.readBool()),N){L===x&&n.readUEG(),n.readBool(),n.readUEG();for(var G=0,V=0;V<=U;V++){var F=n.readBool(),j=!1;F||(j=n.readBool()),(F||j)&&G++}U=G}else{var z=n.readUEG(),H=n.readUEG();U=z+H;for(V=0;V<z;V++)n.readUEG(),n.readBool();for(V=0;V<H;V++)n.readUEG(),n.readBool()}}if(n.readBool()){var q=n.readUEG();for(L=0;L<q;L++){for(V=0;V<I+4;V++)n.readBits(1);n.readBits(1)}}var K=0,W=1,X=1,Y=!1,J=1,Z=1;n.readBool(),n.readBool();if(n.readBool()){if(n.readBool()){var Q=n.readByte();Q>0&&Q<=16?(W=[1,12,10,16,40,24,20,32,80,18,15,64,160,4,3,2][Q-1],X=[1,11,11,11,33,11,11,11,33,11,11,33,99,3,2,1][Q-1]):255===Q&&(W=n.readBits(16),X=n.readBits(16))}if(n.readBool()&&n.readBool(),n.readBool())n.readBits(3),n.readBool(),n.readBool()&&(n.readByte(),n.readByte(),n.readByte());n.readBool()&&(n.readUEG(),n.readUEG());n.readBool(),n.readBool(),n.readBool();if(n.readBool()&&(n.readUEG(),n.readUEG(),n.readUEG(),n.readUEG()),n.readBool())if(J=n.readBits(32),Z=n.readBits(32),n.readBool())if(n.readUEG(),n.readBool()){var $=!1,ee=!1,te=!1;if($=n.readBool(),ee=n.readBool(),$||ee){(te=n.readBool())&&(n.readByte(),n.readBits(5),n.readBool(),n.readBits(5));n.readBits(4),n.readBits(4);te&&n.readBits(4),n.readBits(5),n.readBits(5),n.readBits(5)}for(L=0;L<=d;L++){var ie=n.readBool();Y=ie;var ne=!1,ae=1;ie||(ne=n.readBool());var re=!1;if(ne?n.readSEG():re=n.readBool(),re||(ae=n.readUEG()+1),$)for(V=0;V<ae;V++)n.readUEG(),n.readUEG(),te&&(n.readUEG(),n.readUEG());if(ee)for(V=0;V<ae;V++)n.readUEG(),n.readUEG(),te&&(n.readUEG(),n.readUEG())}}if(n.readBool()){n.readBool(),n.readBool(),n.readBool();K=n.readUEG();n.readUEG(),n.readUEG(),n.readUEG(),n.readUEG()}}n.readBool();var se="hvc1."+c+".1.L"+A+".B0",oe=k-(a+r)*(1===w||2===w?2:1),de=D-(s+o)*(1===w?2:1),_e=1;return 1!==W&&1!==X&&(_e=W/X),n.destroy(),n=null,{codec_mimetype:se,level_string:e.getLevelString(A),profile_idc:c,bit_depth:C+8,ref_frames:1,chroma_format:w,chroma_format_string:e.getChromaFormatString(w),general_level_idc:A,general_profile_space:_,general_tier_flag:h,general_profile_idc:c,general_profile_compatibility_flags_1:u,general_profile_compatibility_flags_2:l,general_profile_compatibility_flags_3:p,general_profile_compatibility_flags_4:m,general_constraint_indicator_flags_1:g,general_constraint_indicator_flags_2:v,general_constraint_indicator_flags_3:y,general_constraint_indicator_flags_4:b,general_constraint_indicator_flags_5:S,general_constraint_indicator_flags_6:E,min_spatial_segmentation_idc:K,constant_frame_rate:0,chroma_format_idc:w,bit_depth_luma_minus8:C,bit_depth_chroma_minus8:B,frame_rate:{fixed:Y,fps:Z/J,fps_den:J,fps_num:Z},sar_ratio:{width:W,height:X},codec_size:{width:oe,height:de},present_size:{width:oe*_e,height:de}}},e.parsePPS=function(t){var i=e._ebsp2rbsp(t),n=new f(i);n.readByte(),n.readByte();n.readUEG(),n.readUEG(),n.readBool(),n.readBool(),n.readBits(3),n.readBool(),n.readBool(),n.readUEG(),n.readUEG(),n.readSEG(),n.readBool(),n.readBool();if(n.readBool())n.readUEG();n.readSEG(),n.readSEG(),n.readBool(),n.readBool(),n.readBool(),n.readBool();var a=n.readBool(),r=n.readBool(),s=1;return r&&a?s=0:r?s=3:a&&(s=2),{parallelismType:s}},e.getChromaFormatString=function(e){switch(e){case 0:return"4:0:0";case 1:return"4:2:0";case 2:return"4:2:2";case 3:return"4:4:4";default:return"Unknown"}},e.getProfileString=function(e){switch(e){case 1:return"Main";case 2:return"Main10";case 3:return"MainSP";case 4:return"Rext";case 9:return"SCC";default:return"Unknown"}},e.getLevelString=function(e){return(e/30).toFixed(1)},e}();function v(e){return e.byteOffset%2==0&&e.byteLength%2==0}function y(e){return e.byteOffset%4==0&&e.byteLength%4==0}function b(e,t){for(var i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}var S=function(e,t){return e.byteLength===t.byteLength&&(y(e)&&y(t)?function(e,t){return b(new Uint32Array(e.buffer,e.byteOffset,e.byteLength/4),new Uint32Array(t.buffer,t.byteOffset,t.byteLength/4))}(e,t):v(e)&&v(t)?function(e,t){return b(new Uint16Array(e.buffer,e.byteOffset,e.byteLength/2),new Uint16Array(t.buffer,t.byteOffset,t.byteLength/2))}(e,t):function(e,t){return b(e,t)}(e,t))};var E,A=function(){function e(e,t){this.TAG="FLVDemuxer",this._config=t,this._onError=null,this._onMediaInfo=null,this._onMetaDataArrived=null,this._onScriptDataArrived=null,this._onTrackMetadata=null,this._onDataAvailable=null,this._dataOffset=e.dataOffset,this._firstParse=!0,this._dispatch=!1,this._hasAudio=e.hasAudioTrack,this._hasVideo=e.hasVideoTrack,this._hasAudioFlagOverrided=!1,this._hasVideoFlagOverrided=!1,this._audioInitialMetadataDispatched=!1,this._videoInitialMetadataDispatched=!1,this._mediaInfo=new o.a,this._mediaInfo.hasAudio=this._hasAudio,this._mediaInfo.hasVideo=this._hasVideo,this._metadata=null,this._audioMetadata=null,this._videoMetadata=null,this._naluLengthSize=4,this._timestampBase=0,this._timescale=1e3,this._duration=0,this._durationOverrided=!1,this._referenceFrameRate={fixed:!0,fps:23.976,fps_num:23976,fps_den:1e3},this._flvSoundRateTable=[5500,11025,22050,44100,48e3],this._mpegSamplingRates=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],this._mpegAudioV10SampleRateTable=[44100,48e3,32e3,0],this._mpegAudioV20SampleRateTable=[22050,24e3,16e3,0],this._mpegAudioV25SampleRateTable=[11025,12e3,8e3,0],this._mpegAudioL1BitRateTable=[0,32,64,96,128,160,192,224,256,288,320,352,384,416,448,-1],this._mpegAudioL2BitRateTable=[0,32,48,56,64,80,96,112,128,160,192,224,256,320,384,-1],this._mpegAudioL3BitRateTable=[0,32,40,48,56,64,80,96,112,128,160,192,224,256,320,-1],this._videoTrack={type:"video",id:1,sequenceNumber:0,samples:[],length:0},this._audioTrack={type:"audio",id:2,sequenceNumber:0,samples:[],length:0},this._littleEndian=function(){var e=new ArrayBuffer(2);return new DataView(e).setInt16(0,256,!0),256===new Int16Array(e)[0]}()}return e.prototype.destroy=function(){this._mediaInfo=null,this._metadata=null,this._audioMetadata=null,this._videoMetadata=null,this._videoTrack=null,this._audioTrack=null,this._onError=null,this._onMediaInfo=null,this._onMetaDataArrived=null,this._onScriptDataArrived=null,this._onTrackMetadata=null,this._onDataAvailable=null},e.probe=function(e){var t=new Uint8Array(e);if(t.byteLength<9)return{needMoreData:!0};var i={match:!1};if(70!==t[0]||76!==t[1]||86!==t[2]||1!==t[3])return i;var n,a,r=(4&t[4])>>>2!=0,s=0!=(1&t[4]),o=(n=t)[a=5]<<24|n[a+1]<<16|n[a+2]<<8|n[a+3];return o<9?i:{match:!0,consumed:o,dataOffset:o,hasAudioTrack:r,hasVideoTrack:s}},e.prototype.bindDataSource=function(e){return e.onDataArrival=this.parseChunks.bind(this),this},Object.defineProperty(e.prototype,"onTrackMetadata",{get:function(){return this._onTrackMetadata},set:function(e){this._onTrackMetadata=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onMediaInfo",{get:function(){return this._onMediaInfo},set:function(e){this._onMediaInfo=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onMetaDataArrived",{get:function(){return this._onMetaDataArrived},set:function(e){this._onMetaDataArrived=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onScriptDataArrived",{get:function(){return this._onScriptDataArrived},set:function(e){this._onScriptDataArrived=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onError",{get:function(){return this._onError},set:function(e){this._onError=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onDataAvailable",{get:function(){return this._onDataAvailable},set:function(e){this._onDataAvailable=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"timestampBase",{get:function(){return this._timestampBase},set:function(e){this._timestampBase=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"overridedDuration",{get:function(){return this._duration},set:function(e){this._durationOverrided=!0,this._duration=e,this._mediaInfo.duration=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"overridedHasAudio",{set:function(e){this._hasAudioFlagOverrided=!0,this._hasAudio=e,this._mediaInfo.hasAudio=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"overridedHasVideo",{set:function(e){this._hasVideoFlagOverrided=!0,this._hasVideo=e,this._mediaInfo.hasVideo=e},enumerable:!1,configurable:!0}),e.prototype.resetMediaInfo=function(){this._mediaInfo=new o.a},e.prototype._isInitialMetadataDispatched=function(){return this._hasAudio&&this._hasVideo?this._audioInitialMetadataDispatched&&this._videoInitialMetadataDispatched:this._hasAudio&&!this._hasVideo?this._audioInitialMetadataDispatched:!(this._hasAudio||!this._hasVideo)&&this._videoInitialMetadataDispatched},e.prototype.parseChunks=function(t,i){if(!(this._onError&&this._onMediaInfo&&this._onTrackMetadata&&this._onDataAvailable))throw new c.a("Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");var n=0,a=this._littleEndian;if(0===i){if(!(t.byteLength>13))return 0;n=e.probe(t).dataOffset}this._firstParse&&(this._firstParse=!1,i+n!==this._dataOffset&&r.a.w(this.TAG,"First time parsing but chunk byteStart invalid!"),0!==(s=new DataView(t,n)).getUint32(0,!a)&&r.a.w(this.TAG,"PrevTagSize0 !== 0 !!!"),n+=4);for(;n<t.byteLength;){this._dispatch=!0;var s=new DataView(t,n);if(n+11+4>t.byteLength)break;var o=s.getUint8(0),d=16777215&s.getUint32(0,!a);if(n+11+d+4>t.byteLength)break;if(8===o||9===o||18===o){var _=s.getUint8(4),h=s.getUint8(5),u=s.getUint8(6)|h<<8|_<<16|s.getUint8(7)<<24;0!==(16777215&s.getUint32(7,!a))&&r.a.w(this.TAG,"Meet tag which has StreamID != 0!");var l=n+11;switch(o){case 8:this._parseAudioData(t,l,d,u);break;case 9:this._parseVideoData(t,l,d,u,i+n);break;case 18:this._parseScriptData(t,l,d)}var f=s.getUint32(11+d,!a);f!==11+d&&r.a.w(this.TAG,"Invalid PrevTagSize "+f),n+=11+d+4}else r.a.w(this.TAG,"Unsupported tag type "+o+", skipped"),n+=11+d+4}return this._isInitialMetadataDispatched()&&this._dispatch&&(this._audioTrack.length||this._videoTrack.length)&&this._onDataAvailable(this._audioTrack,this._videoTrack),n},e.prototype._parseScriptData=function(e,t,i){var n=l.parseScriptData(e,t,i);if(n.hasOwnProperty("onMetaData")){if(null==n.onMetaData||"object"!=typeof n.onMetaData)return void r.a.w(this.TAG,"Invalid onMetaData structure!");this._metadata&&r.a.w(this.TAG,"Found another onMetaData tag!"),this._metadata=n;var a=this._metadata.onMetaData;if(this._onMetaDataArrived&&this._onMetaDataArrived(Object.assign({},a)),"boolean"==typeof a.hasAudio&&!1===this._hasAudioFlagOverrided&&(this._hasAudio=a.hasAudio,this._mediaInfo.hasAudio=this._hasAudio),"boolean"==typeof a.hasVideo&&!1===this._hasVideoFlagOverrided&&(this._hasVideo=a.hasVideo,this._mediaInfo.hasVideo=this._hasVideo),"number"==typeof a.audiodatarate&&(this._mediaInfo.audioDataRate=a.audiodatarate),"number"==typeof a.videodatarate&&(this._mediaInfo.videoDataRate=a.videodatarate),"number"==typeof a.width&&(this._mediaInfo.width=a.width),"number"==typeof a.height&&(this._mediaInfo.height=a.height),"number"==typeof a.duration){if(!this._durationOverrided){var s=Math.floor(a.duration*this._timescale);this._duration=s,this._mediaInfo.duration=s}}else this._mediaInfo.duration=0;if("number"==typeof a.framerate){var o=Math.floor(1e3*a.framerate);if(o>0){var d=o/1e3;this._referenceFrameRate.fixed=!0,this._referenceFrameRate.fps=d,this._referenceFrameRate.fps_num=o,this._referenceFrameRate.fps_den=1e3,this._mediaInfo.fps=d}}if("object"==typeof a.keyframes){this._mediaInfo.hasKeyframesIndex=!0;var _=a.keyframes;this._mediaInfo.keyframesIndex=this._parseKeyframesIndex(_),a.keyframes=null}else this._mediaInfo.hasKeyframesIndex=!1;this._dispatch=!1,this._mediaInfo.metadata=a,r.a.v(this.TAG,"Parsed onMetaData"),this._mediaInfo.isComplete()&&this._onMediaInfo(this._mediaInfo)}Object.keys(n).length>0&&this._onScriptDataArrived&&this._onScriptDataArrived(Object.assign({},n))},e.prototype._parseKeyframesIndex=function(e){for(var t=[],i=[],n=1;n<e.times.length;n++){var a=this._timestampBase+Math.floor(1e3*e.times[n]);t.push(a),i.push(e.filepositions[n])}return{times:t,filepositions:i}},e.prototype._parseAudioData=function(e,t,i,n){if(i<=1)r.a.w(this.TAG,"Flv: Invalid audio packet, missing SoundData payload!");else if(!0!==this._hasAudioFlagOverrided||!1!==this._hasAudio){this._littleEndian;var a=new DataView(e,t,i).getUint8(0),s=a>>>4;if(2===s||10===s){var o=0,d=(12&a)>>>2;if(d>=0&&d<=4){o=this._flvSoundRateTable[d];var _=1&a,h=this._audioMetadata,c=this._audioTrack;if(h||(!1===this._hasAudio&&!1===this._hasAudioFlagOverrided&&(this._hasAudio=!0,this._mediaInfo.hasAudio=!0),(h=this._audioMetadata={}).type="audio",h.id=c.id,h.timescale=this._timescale,h.duration=this._duration,h.audioSampleRate=o,h.channelCount=0===_?1:2),10===s){var u=this._parseAACAudioData(e,t+1,i-1);if(null==u)return;if(0===u.packetType){if(h.config){if(S(u.data.config,h.config))return;r.a.w(this.TAG,"AudioSpecificConfig has been changed, re-generate initialization segment")}var l=u.data;h.audioSampleRate=l.samplingRate,h.channelCount=l.channelCount,h.codec=l.codec,h.originalCodec=l.originalCodec,h.config=l.config,h.refSampleDuration=1024/h.audioSampleRate*h.timescale,r.a.v(this.TAG,"Parsed AudioSpecificConfig"),this._isInitialMetadataDispatched()?this._dispatch&&(this._audioTrack.length||this._videoTrack.length)&&this._onDataAvailable(this._audioTrack,this._videoTrack):this._audioInitialMetadataDispatched=!0,this._dispatch=!1,this._onTrackMetadata("audio",h),(g=this._mediaInfo).audioCodec=h.originalCodec,g.audioSampleRate=h.audioSampleRate,g.audioChannelCount=h.channelCount,g.hasVideo?null!=g.videoCodec&&(g.mimeType='video/x-flv; codecs="'+g.videoCodec+","+g.audioCodec+'"'):g.mimeType='video/x-flv; codecs="'+g.audioCodec+'"',g.isComplete()&&this._onMediaInfo(g)}else if(1===u.packetType){var f=this._timestampBase+n,p={unit:u.data,length:u.data.byteLength,dts:f,pts:f};c.samples.push(p),c.length+=u.data.length}else r.a.e(this.TAG,"Flv: Unsupported AAC data type "+u.packetType)}else if(2===s){if(!h.codec){var g;if(null==(l=this._parseMP3AudioData(e,t+1,i-1,!0)))return;h.audioSampleRate=l.samplingRate,h.channelCount=l.channelCount,h.codec=l.codec,h.originalCodec=l.originalCodec,h.refSampleDuration=1152/h.audioSampleRate*h.timescale,r.a.v(this.TAG,"Parsed MPEG Audio Frame Header"),this._audioInitialMetadataDispatched=!0,this._onTrackMetadata("audio",h),(g=this._mediaInfo).audioCodec=h.codec,g.audioSampleRate=h.audioSampleRate,g.audioChannelCount=h.channelCount,g.audioDataRate=l.bitRate,g.hasVideo?null!=g.videoCodec&&(g.mimeType='video/x-flv; codecs="'+g.videoCodec+","+g.audioCodec+'"'):g.mimeType='video/x-flv; codecs="'+g.audioCodec+'"',g.isComplete()&&this._onMediaInfo(g)}var v=this._parseMP3AudioData(e,t+1,i-1,!1);if(null==v)return;f=this._timestampBase+n;var y={unit:v,length:v.byteLength,dts:f,pts:f};c.samples.push(y),c.length+=v.length}}else this._onError(m.a.FORMAT_ERROR,"Flv: Invalid audio sample rate idx: "+d)}else this._onError(m.a.CODEC_UNSUPPORTED,"Flv: Unsupported audio codec idx: "+s)}},e.prototype._parseAACAudioData=function(e,t,i){if(!(i<=1)){var n={},a=new Uint8Array(e,t,i);return n.packetType=a[0],0===a[0]?n.data=this._parseAACAudioSpecificConfig(e,t+1,i-1):n.data=a.subarray(1),n}r.a.w(this.TAG,"Flv: Invalid AAC packet, missing AACPacketType or/and Data!")},e.prototype._parseAACAudioSpecificConfig=function(e,t,i){var n,a,r=new Uint8Array(e,t,i),s=null,o=0,d=null;if(o=n=r[0]>>>3,(a=(7&r[0])<<1|r[1]>>>7)<0||a>=this._mpegSamplingRates.length)this._onError(m.a.FORMAT_ERROR,"Flv: AAC invalid sampling frequency index!");else{var _=this._mpegSamplingRates[a],h=(120&r[1])>>>3;if(!(h<0||h>=8)){5===o&&(d=(7&r[1])<<1|r[2]>>>7,(124&r[2])>>>2);var c=self.navigator.userAgent.toLowerCase();return-1!==c.indexOf("firefox")?a>=6?(o=5,s=new Array(4),d=a-3):(o=2,s=new Array(2),d=a):-1!==c.indexOf("android")?(o=2,s=new Array(2),d=a):(o=5,d=a,s=new Array(4),a>=6?d=a-3:1===h&&(o=2,s=new Array(2),d=a)),s[0]=o<<3,s[0]|=(15&a)>>>1,s[1]=(15&a)<<7,s[1]|=(15&h)<<3,5===o&&(s[1]|=(15&d)>>>1,s[2]=(1&d)<<7,s[2]|=8,s[3]=0),{config:s,samplingRate:_,channelCount:h,codec:"mp4a.40."+o,originalCodec:"mp4a.40."+n}}this._onError(m.a.FORMAT_ERROR,"Flv: AAC invalid channel configuration")}},e.prototype._parseMP3AudioData=function(e,t,i,n){if(!(i<4)){this._littleEndian;var a=new Uint8Array(e,t,i),s=null;if(n){if(255!==a[0])return;var o=a[1]>>>3&3,d=(6&a[1])>>1,_=(240&a[2])>>>4,h=(12&a[2])>>>2,c=3!==(a[3]>>>6&3)?2:1,u=0,l=0;switch(o){case 0:u=this._mpegAudioV25SampleRateTable[h];break;case 2:u=this._mpegAudioV20SampleRateTable[h];break;case 3:u=this._mpegAudioV10SampleRateTable[h]}switch(d){case 1:34,_<this._mpegAudioL3BitRateTable.length&&(l=this._mpegAudioL3BitRateTable[_]);break;case 2:33,_<this._mpegAudioL2BitRateTable.length&&(l=this._mpegAudioL2BitRateTable[_]);break;case 3:32,_<this._mpegAudioL1BitRateTable.length&&(l=this._mpegAudioL1BitRateTable[_])}s={bitRate:l,samplingRate:u,channelCount:c,codec:"mp3",originalCodec:"mp3"}}else s=a;return s}r.a.w(this.TAG,"Flv: Invalid MP3 packet, header missing!")},e.prototype._parseVideoData=function(e,t,i,n,a){if(i<=1)r.a.w(this.TAG,"Flv: Invalid video packet, missing VideoData payload!");else if(!0!==this._hasVideoFlagOverrided||!1!==this._hasVideo){var s=new Uint8Array(e,t,i)[0],o=(112&s)>>>4;if(0!=(128&s)){var d=15&s,_=String.fromCharCode.apply(String,new Uint8Array(e,t,i).slice(1,5));if("hvc1"!==_)return void this._onError(m.a.CODEC_UNSUPPORTED,"Flv: Unsupported codec in video frame: "+_);this._parseEnhancedHEVCVideoPacket(e,t+5,i-5,n,a,o,d)}else{var h=15&s;if(7===h)this._parseAVCVideoPacket(e,t+1,i-1,n,a,o);else{if(12!==h)return void this._onError(m.a.CODEC_UNSUPPORTED,"Flv: Unsupported codec in video frame: "+h);this._parseHEVCVideoPacket(e,t+1,i-1,n,a,o)}}}},e.prototype._parseAVCVideoPacket=function(e,t,i,n,a,s){if(i<4)r.a.w(this.TAG,"Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime");else{var o=this._littleEndian,d=new DataView(e,t,i),_=d.getUint8(0),h=(16777215&d.getUint32(0,!o))<<8>>8;if(0===_)this._parseAVCDecoderConfigurationRecord(e,t+4,i-4);else if(1===_)this._parseAVCVideoData(e,t+4,i-4,n,a,s,h);else if(2!==_)return void this._onError(m.a.FORMAT_ERROR,"Flv: Invalid video packet type "+_)}},e.prototype._parseHEVCVideoPacket=function(e,t,i,n,a,s){if(i<4)r.a.w(this.TAG,"Flv: Invalid HEVC packet, missing HEVCPacketType or/and CompositionTime");else{var o=this._littleEndian,d=new DataView(e,t,i),_=d.getUint8(0),h=(16777215&d.getUint32(0,!o))<<8>>8;if(0===_)this._parseHEVCDecoderConfigurationRecord(e,t+4,i-4);else if(1===_)this._parseHEVCVideoData(e,t+4,i-4,n,a,s,h);else if(2!==_)return void this._onError(m.a.FORMAT_ERROR,"Flv: Invalid video packet type "+_)}},e.prototype._parseEnhancedHEVCVideoPacket=function(e,t,i,n,a,s,o){if(i<4)r.a.w(this.TAG,"Flv: Invalid HEVC packet, missing HEVCPacketType or/and CompositionTime");else{var d=this._littleEndian,_=new DataView(e,t,i);if(0===o)this._parseHEVCDecoderConfigurationRecord(e,t,i);else if(1===o){var h=(4294967040&_.getUint32(0,!d))>>8;this._parseHEVCVideoData(e,t+3,i-3,n,a,s,h)}else if(3===o)this._parseHEVCVideoData(e,t,i,n,a,s,0);else if(2!==o)return void this._onError(m.a.FORMAT_ERROR,"Flv: Invalid video packet type "+o)}},e.prototype._parseAVCDecoderConfigurationRecord=function(e,t,i){if(i<7)r.a.w(this.TAG,"Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");else{var n=this._videoMetadata,a=this._videoTrack,s=this._littleEndian,o=new DataView(e,t,i);if(n){if(void 0!==n.avcc){var d=new Uint8Array(e,t,i);if(S(d,n.avcc))return;r.a.w(this.TAG,"AVCDecoderConfigurationRecord has been changed, re-generate initialization segment")}}else!1===this._hasVideo&&!1===this._hasVideoFlagOverrided&&(this._hasVideo=!0,this._mediaInfo.hasVideo=!0),(n=this._videoMetadata={}).type="video",n.id=a.id,n.timescale=this._timescale,n.duration=this._duration;var _=o.getUint8(0),h=o.getUint8(1);o.getUint8(2),o.getUint8(3);if(1===_&&0!==h)if(this._naluLengthSize=1+(3&o.getUint8(4)),3===this._naluLengthSize||4===this._naluLengthSize){var c=31&o.getUint8(5);if(0!==c){c>1&&r.a.w(this.TAG,"Flv: Strange AVCDecoderConfigurationRecord: SPS Count = "+c);for(var u=6,l=0;l<c;l++){var f=o.getUint16(u,!s);if(u+=2,0!==f){var g=new Uint8Array(e,t+u,f);u+=f;var v=p.parseSPS(g);if(0===l){n.codecWidth=v.codec_size.width,n.codecHeight=v.codec_size.height,n.presentWidth=v.present_size.width,n.presentHeight=v.present_size.height,n.profile=v.profile_string,n.level=v.level_string,n.bitDepth=v.bit_depth,n.chromaFormat=v.chroma_format,n.sarRatio=v.sar_ratio,n.frameRate=v.frame_rate,!1!==v.frame_rate.fixed&&0!==v.frame_rate.fps_num&&0!==v.frame_rate.fps_den||(n.frameRate=this._referenceFrameRate);var y=n.frameRate.fps_den,b=n.frameRate.fps_num;n.refSampleDuration=n.timescale*(y/b);for(var E=g.subarray(1,4),A="avc1.",R=0;R<3;R++){var T=E[R].toString(16);T.length<2&&(T="0"+T),A+=T}n.codec=A;var L=this._mediaInfo;L.width=n.codecWidth,L.height=n.codecHeight,L.fps=n.frameRate.fps,L.profile=n.profile,L.level=n.level,L.refFrames=v.ref_frames,L.chromaFormat=v.chroma_format_string,L.sarNum=n.sarRatio.width,L.sarDen=n.sarRatio.height,L.videoCodec=A,L.hasAudio?null!=L.audioCodec&&(L.mimeType='video/x-flv; codecs="'+L.videoCodec+","+L.audioCodec+'"'):L.mimeType='video/x-flv; codecs="'+L.videoCodec+'"',L.isComplete()&&this._onMediaInfo(L)}}}var w=o.getUint8(u);if(0!==w){w>1&&r.a.w(this.TAG,"Flv: Strange AVCDecoderConfigurationRecord: PPS Count = "+w),u++;for(l=0;l<w;l++){f=o.getUint16(u,!s);u+=2,0!==f&&(u+=f)}n.avcc=new Uint8Array(i),n.avcc.set(new Uint8Array(e,t,i),0),r.a.v(this.TAG,"Parsed AVCDecoderConfigurationRecord"),this._isInitialMetadataDispatched()?this._dispatch&&(this._audioTrack.length||this._videoTrack.length)&&this._onDataAvailable(this._audioTrack,this._videoTrack):this._videoInitialMetadataDispatched=!0,this._dispatch=!1,this._onTrackMetadata("video",n)}else this._onError(m.a.FORMAT_ERROR,"Flv: Invalid AVCDecoderConfigurationRecord: No PPS")}else this._onError(m.a.FORMAT_ERROR,"Flv: Invalid AVCDecoderConfigurationRecord: No SPS")}else this._onError(m.a.FORMAT_ERROR,"Flv: Strange NaluLengthSizeMinusOne: "+(this._naluLengthSize-1));else this._onError(m.a.FORMAT_ERROR,"Flv: Invalid AVCDecoderConfigurationRecord")}},e.prototype._parseHEVCDecoderConfigurationRecord=function(e,t,i){if(i<22)r.a.w(this.TAG,"Flv: Invalid HEVCDecoderConfigurationRecord, lack of data!");else{var n=this._videoMetadata,a=this._videoTrack,s=this._littleEndian,o=new DataView(e,t,i);if(n){if(void 0!==n.hvcc){var d=new Uint8Array(e,t,i);if(S(d,n.hvcc))return;r.a.w(this.TAG,"HEVCDecoderConfigurationRecord has been changed, re-generate initialization segment")}}else!1===this._hasVideo&&!1===this._hasVideoFlagOverrided&&(this._hasVideo=!0,this._mediaInfo.hasVideo=!0),(n=this._videoMetadata={}).type="video",n.id=a.id,n.timescale=this._timescale,n.duration=this._duration;var _=o.getUint8(0),h=31&o.getUint8(1);if(1===_&&0!==h)if(this._naluLengthSize=1+(3&o.getUint8(21)),3===this._naluLengthSize||4===this._naluLengthSize){for(var c=o.getUint8(22),u=0,l=23;u<c;u++){var f=63&o.getUint8(l+0),p=o.getUint16(l+1,!s);l+=3;for(var v=0;v<p;v++){var y=o.getUint16(l+0,!s);if(0===v)if(33===f){l+=2;var b=new Uint8Array(e,t+l,y),E=g.parseSPS(b);n.codecWidth=E.codec_size.width,n.codecHeight=E.codec_size.height,n.presentWidth=E.present_size.width,n.presentHeight=E.present_size.height,n.profile=E.profile_string,n.level=E.level_string,n.bitDepth=E.bit_depth,n.chromaFormat=E.chroma_format,n.sarRatio=E.sar_ratio,n.frameRate=E.frame_rate,!1!==E.frame_rate.fixed&&0!==E.frame_rate.fps_num&&0!==E.frame_rate.fps_den||(n.frameRate=this._referenceFrameRate);var A=n.frameRate.fps_den,R=n.frameRate.fps_num;n.refSampleDuration=n.timescale*(A/R),n.codec=E.codec_mimetype;var T=this._mediaInfo;T.width=n.codecWidth,T.height=n.codecHeight,T.fps=n.frameRate.fps,T.profile=n.profile,T.level=n.level,T.refFrames=E.ref_frames,T.chromaFormat=E.chroma_format_string,T.sarNum=n.sarRatio.width,T.sarDen=n.sarRatio.height,T.videoCodec=E.codec_mimetype,T.hasAudio?null!=T.audioCodec&&(T.mimeType='video/x-flv; codecs="'+T.videoCodec+","+T.audioCodec+'"'):T.mimeType='video/x-flv; codecs="'+T.videoCodec+'"',T.isComplete()&&this._onMediaInfo(T),l+=y}else l+=2+y;else l+=2+y}}n.hvcc=new Uint8Array(i),n.hvcc.set(new Uint8Array(e,t,i),0),r.a.v(this.TAG,"Parsed HEVCDecoderConfigurationRecord"),this._isInitialMetadataDispatched()?this._dispatch&&(this._audioTrack.length||this._videoTrack.length)&&this._onDataAvailable(this._audioTrack,this._videoTrack):this._videoInitialMetadataDispatched=!0,this._dispatch=!1,this._onTrackMetadata("video",n)}else this._onError(m.a.FORMAT_ERROR,"Flv: Strange NaluLengthSizeMinusOne: "+(this._naluLengthSize-1));else this._onError(m.a.FORMAT_ERROR,"Flv: Invalid HEVCDecoderConfigurationRecord")}},e.prototype._parseAVCVideoData=function(e,t,i,n,a,s,o){for(var d=this._littleEndian,_=new DataView(e,t,i),h=[],c=0,u=0,l=this._naluLengthSize,f=this._timestampBase+n,p=1===s;u<i;){if(u+4>=i){r.a.w(this.TAG,"Malformed Nalu near timestamp "+f+", offset = "+u+", dataSize = "+i);break}var m=_.getUint32(u,!d);if(3===l&&(m>>>=8),m>i-l)return void r.a.w(this.TAG,"Malformed Nalus near timestamp "+f+", NaluSize > DataSize!");var g=31&_.getUint8(u+l);5===g&&(p=!0);var v=new Uint8Array(e,t+u,l+m),y={type:g,data:v};h.push(y),c+=v.byteLength,u+=l+m}if(h.length){var b=this._videoTrack,S={units:h,length:c,isKeyframe:p,dts:f,cts:o,pts:f+o};p&&(S.fileposition=a),b.samples.push(S),b.length+=c}},e.prototype._parseHEVCVideoData=function(e,t,i,n,a,s,o){for(var d=this._littleEndian,_=new DataView(e,t,i),h=[],c=0,u=0,l=this._naluLengthSize,f=this._timestampBase+n,p=1===s;u<i;){if(u+4>=i){r.a.w(this.TAG,"Malformed Nalu near timestamp "+f+", offset = "+u+", dataSize = "+i);break}var m=_.getUint32(u,!d);if(3===l&&(m>>>=8),m>i-l)return void r.a.w(this.TAG,"Malformed Nalus near timestamp "+f+", NaluSize > DataSize!");var g=31&_.getUint8(u+l);19!==g&&20!==g||(p=!0);var v=new Uint8Array(e,t+u,l+m),y={type:g,data:v};h.push(y),c+=v.byteLength,u+=l+m}if(h.length){var b=this._videoTrack,S={units:h,length:c,isKeyframe:p,dts:f,cts:o,pts:f+o};p&&(S.fileposition=a),b.samples.push(S),b.length+=c}},e}(),R=function(){function e(){}return e.prototype.destroy=function(){this.onError=null,this.onMediaInfo=null,this.onMetaDataArrived=null,this.onTrackMetadata=null,this.onDataAvailable=null,this.onTimedID3Metadata=null,this.onSMPTE2038Metadata=null,this.onSCTE35Metadata=null,this.onPESPrivateData=null,this.onPESPrivateDataDescriptor=null},e}(),T=function(){this.program_pmt_pid={}};!function(e){e[e.kMPEG1Audio=3]="kMPEG1Audio",e[e.kMPEG2Audio=4]="kMPEG2Audio",e[e.kPESPrivateData=6]="kPESPrivateData",e[e.kADTSAAC=15]="kADTSAAC",e[e.kLOASAAC=17]="kLOASAAC",e[e.kAC3=129]="kAC3",e[e.kID3=21]="kID3",e[e.kSCTE35=134]="kSCTE35",e[e.kH264=27]="kH264",e[e.kH265=36]="kH265"}(E||(E={}));var L,w=function(){this.pid_stream_type={},this.common_pids={h264:void 0,h265:void 0,adts_aac:void 0,loas_aac:void 0,opus:void 0,ac3:void 0,mp3:void 0},this.pes_private_data_pids={},this.timed_id3_pids={},this.scte_35_pids={},this.smpte2038_pids={}},k=function(){},D=function(){},C=function(){this.slices=[],this.total_length=0,this.expected_length=0,this.file_position=0};!function(e){e[e.kUnspecified=0]="kUnspecified",e[e.kSliceNonIDR=1]="kSliceNonIDR",e[e.kSliceDPA=2]="kSliceDPA",e[e.kSliceDPB=3]="kSliceDPB",e[e.kSliceDPC=4]="kSliceDPC",e[e.kSliceIDR=5]="kSliceIDR",e[e.kSliceSEI=6]="kSliceSEI",e[e.kSliceSPS=7]="kSliceSPS",e[e.kSlicePPS=8]="kSlicePPS",e[e.kSliceAUD=9]="kSliceAUD",e[e.kEndOfSequence=10]="kEndOfSequence",e[e.kEndOfStream=11]="kEndOfStream",e[e.kFiller=12]="kFiller",e[e.kSPSExt=13]="kSPSExt",e[e.kReserved0=14]="kReserved0"}(L||(L={}));var B,I,O=function(){},P=function(e){var t=e.data.byteLength;this.type=e.type,this.data=new Uint8Array(4+t),new DataView(this.data.buffer).setUint32(0,t),this.data.set(e.data,4)},M=function(){function e(e){this.TAG="H264AnnexBParser",this.current_startcode_offset_=0,this.eof_flag_=!1,this.data_=e,this.current_startcode_offset_=this.findNextStartCodeOffset(0),this.eof_flag_&&r.a.e(this.TAG,"Could not find H264 startcode until payload end!")}return e.prototype.findNextStartCodeOffset=function(e){for(var t=e,i=this.data_;;){if(t+3>=i.byteLength)return this.eof_flag_=!0,i.byteLength;var n=i[t+0]<<24|i[t+1]<<16|i[t+2]<<8|i[t+3],a=i[t+0]<<16|i[t+1]<<8|i[t+2];if(1===n||1===a)return t;t++}},e.prototype.readNextNaluPayload=function(){for(var e=this.data_,t=null;null==t&&!this.eof_flag_;){var i=this.current_startcode_offset_,n=31&e[i+=1===(e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3])?4:3],a=(128&e[i])>>>7,r=this.findNextStartCodeOffset(i);if(this.current_startcode_offset_=r,!(n>=L.kReserved0)&&0===a){var s=e.subarray(i,r);(t=new O).type=n,t.data=s}}return t},e}(),x=function(){function e(e,t,i){var n=8+e.byteLength+1+2+t.byteLength,a=!1;66!==e[3]&&77!==e[3]&&88!==e[3]&&(a=!0,n+=4);var r=this.data=new Uint8Array(n);r[0]=1,r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=255,r[5]=225;var s=e.byteLength;r[6]=s>>>8,r[7]=255&s;var o=8;r.set(e,8),r[o+=s]=1;var d=t.byteLength;r[o+1]=d>>>8,r[o+2]=255&d,r.set(t,o+3),o+=3+d,a&&(r[o]=252|i.chroma_format_idc,r[o+1]=248|i.bit_depth_luma-8,r[o+2]=248|i.bit_depth_chroma-8,r[o+3]=0,o+=4)}return e.prototype.getData=function(){return this.data},e}();!function(e){e[e.kNull=0]="kNull",e[e.kAACMain=1]="kAACMain",e[e.kAAC_LC=2]="kAAC_LC",e[e.kAAC_SSR=3]="kAAC_SSR",e[e.kAAC_LTP=4]="kAAC_LTP",e[e.kAAC_SBR=5]="kAAC_SBR",e[e.kAAC_Scalable=6]="kAAC_Scalable",e[e.kLayer1=32]="kLayer1",e[e.kLayer2=33]="kLayer2",e[e.kLayer3=34]="kLayer3"}(B||(B={})),function(e){e[e.k96000Hz=0]="k96000Hz",e[e.k88200Hz=1]="k88200Hz",e[e.k64000Hz=2]="k64000Hz",e[e.k48000Hz=3]="k48000Hz",e[e.k44100Hz=4]="k44100Hz",e[e.k32000Hz=5]="k32000Hz",e[e.k24000Hz=6]="k24000Hz",e[e.k22050Hz=7]="k22050Hz",e[e.k16000Hz=8]="k16000Hz",e[e.k12000Hz=9]="k12000Hz",e[e.k11025Hz=10]="k11025Hz",e[e.k8000Hz=11]="k8000Hz",e[e.k7350Hz=12]="k7350Hz"}(I||(I={}));var U,N,G=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],V=(U=function(e,t){return(U=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}U(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),F=function(){},j=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return V(t,e),t}(F),z=function(){function e(e){this.TAG="AACADTSParser",this.data_=e,this.current_syncword_offset_=this.findNextSyncwordOffset(0),this.eof_flag_&&r.a.e(this.TAG,"Could not found ADTS syncword until payload end")}return e.prototype.findNextSyncwordOffset=function(e){for(var t=e,i=this.data_;;){if(t+7>=i.byteLength)return this.eof_flag_=!0,i.byteLength;if(4095===(i[t+0]<<8|i[t+1])>>>4)return t;t++}},e.prototype.readNextAACFrame=function(){for(var e=this.data_,t=null;null==t&&!this.eof_flag_;){var i=this.current_syncword_offset_,n=(8&e[i+1])>>>3,a=(6&e[i+1])>>>1,r=1&e[i+1],s=(192&e[i+2])>>>6,o=(60&e[i+2])>>>2,d=(1&e[i+2])<<2|(192&e[i+3])>>>6,_=(3&e[i+3])<<11|e[i+4]<<3|(224&e[i+5])>>>5;e[i+6];if(i+_>this.data_.byteLength){this.eof_flag_=!0,this.has_last_incomplete_data=!0;break}var h=1===r?7:9,c=_-h;i+=h;var u=this.findNextSyncwordOffset(i+c);if(this.current_syncword_offset_=u,(0===n||1===n)&&0===a){var l=e.subarray(i,i+c);(t=new F).audio_object_type=s+1,t.sampling_freq_index=o,t.sampling_frequency=G[o],t.channel_config=d,t.data=l}}return t},e.prototype.hasIncompleteData=function(){return this.has_last_incomplete_data},e.prototype.getIncompleteData=function(){return this.has_last_incomplete_data?this.data_.subarray(this.current_syncword_offset_):null},e}(),H=function(){function e(e){this.TAG="AACLOASParser",this.data_=e,this.current_syncword_offset_=this.findNextSyncwordOffset(0),this.eof_flag_&&r.a.e(this.TAG,"Could not found LOAS syncword until payload end")}return e.prototype.findNextSyncwordOffset=function(e){for(var t=e,i=this.data_;;){if(t+1>=i.byteLength)return this.eof_flag_=!0,i.byteLength;if(695===(i[t+0]<<3|i[t+1]>>>5))return t;t++}},e.prototype.getLATMValue=function(e){for(var t=e.readBits(2),i=0,n=0;n<=t;n++)i<<=8,i|=e.readByte();return i},e.prototype.readNextAACFrame=function(e){for(var t=this.data_,i=null;null==i&&!this.eof_flag_;){var n=this.current_syncword_offset_,a=(31&t[n+1])<<8|t[n+2];if(n+3+a>=this.data_.byteLength){this.eof_flag_=!0,this.has_last_incomplete_data=!0;break}var s=new f(t.subarray(n+3,n+3+a)),o=null;if(s.readBool()){if(null==e){r.a.w(this.TAG,"StreamMuxConfig Missing"),this.current_syncword_offset_=this.findNextSyncwordOffset(n+3+a),s.destroy();continue}o=e}else{var d=s.readBool();if(d&&s.readBool()){r.a.e(this.TAG,"audioMuxVersionA is Not Supported"),s.destroy();break}if(d&&this.getLATMValue(s),!s.readBool()){r.a.e(this.TAG,"allStreamsSameTimeFraming zero is Not Supported"),s.destroy();break}if(0!==s.readBits(6)){r.a.e(this.TAG,"more than 2 numSubFrames Not Supported"),s.destroy();break}if(0!==s.readBits(4)){r.a.e(this.TAG,"more than 2 numProgram Not Supported"),s.destroy();break}if(0!==s.readBits(3)){r.a.e(this.TAG,"more than 2 numLayer Not Supported"),s.destroy();break}var _=d?this.getLATMValue(s):0,h=s.readBits(5);_-=5;var c=s.readBits(4);_-=4;var u=s.readBits(4);_-=4,s.readBits(3),(_-=3)>0&&s.readBits(_);var l=s.readBits(3);if(0!==l){r.a.e(this.TAG,"frameLengthType = "+l+". Only frameLengthType = 0 Supported"),s.destroy();break}s.readByte();var p=s.readBool();if(p)if(d)this.getLATMValue(s);else{for(var m=0;;){m<<=8;var g=s.readBool();if(m+=s.readByte(),!g)break}console.log(m)}s.readBool()&&s.readByte(),(o=new j).audio_object_type=h,o.sampling_freq_index=c,o.sampling_frequency=G[o.sampling_freq_index],o.channel_config=u,o.other_data_present=p}for(var v=0;;){var y=s.readByte();if(v+=y,255!==y)break}for(var b=new Uint8Array(v),S=0;S<v;S++)b[S]=s.readByte();(i=new j).audio_object_type=o.audio_object_type,i.sampling_freq_index=o.sampling_freq_index,i.sampling_frequency=G[o.sampling_freq_index],i.channel_config=o.channel_config,i.other_data_present=o.other_data_present,i.data=b,this.current_syncword_offset_=this.findNextSyncwordOffset(n+3+a)}return i},e.prototype.hasIncompleteData=function(){return this.has_last_incomplete_data},e.prototype.getIncompleteData=function(){return this.has_last_incomplete_data?this.data_.subarray(this.current_syncword_offset_):null},e}(),q=function(e){var t=null,i=e.audio_object_type,n=e.audio_object_type,a=e.sampling_freq_index,r=e.channel_config,s=0,o=navigator.userAgent.toLowerCase();-1!==o.indexOf("firefox")?a>=6?(n=5,t=new Array(4),s=a-3):(n=2,t=new Array(2),s=a):-1!==o.indexOf("android")?(n=2,t=new Array(2),s=a):(n=5,s=a,t=new Array(4),a>=6?s=a-3:1===r&&(n=2,t=new Array(2),s=a)),t[0]=n<<3,t[0]|=(15&a)>>>1,t[1]=(15&a)<<7,t[1]|=(15&r)<<3,5===n&&(t[1]|=(15&s)>>>1,t[2]=(1&s)<<7,t[2]|=8,t[3]=0),this.config=t,this.sampling_rate=G[a],this.channel_count=r,this.codec_mimetype="mp4a.40."+n,this.original_codec_mimetype="mp4a.40."+i},K=function(){},W=function(){};!function(e){e[e.kSpliceNull=0]="kSpliceNull",e[e.kSpliceSchedule=4]="kSpliceSchedule",e[e.kSpliceInsert=5]="kSpliceInsert",e[e.kTimeSignal=6]="kTimeSignal",e[e.kBandwidthReservation=7]="kBandwidthReservation",e[e.kPrivateCommand=255]="kPrivateCommand"}(N||(N={}));var X,Y=function(e){var t=e.readBool();return t?(e.readBits(6),{time_specified_flag:t,pts_time:4*e.readBits(31)+e.readBits(2)}):(e.readBits(7),{time_specified_flag:t})},J=function(e){var t=e.readBool();return e.readBits(6),{auto_return:t,duration:4*e.readBits(31)+e.readBits(2)}},Z=function(e,t){var i=t.readBits(8);return e?{component_tag:i}:{component_tag:i,splice_time:Y(t)}},Q=function(e){return{component_tag:e.readBits(8),utc_splice_time:e.readBits(32)}},$=function(e){var t=e.readBits(32),i=e.readBool();e.readBits(7);var n={splice_event_id:t,splice_event_cancel_indicator:i};if(i)return n;if(n.out_of_network_indicator=e.readBool(),n.program_splice_flag=e.readBool(),n.duration_flag=e.readBool(),e.readBits(5),n.program_splice_flag)n.utc_splice_time=e.readBits(32);else{n.component_count=e.readBits(8),n.components=[];for(var a=0;a<n.component_count;a++)n.components.push(Q(e))}return n.duration_flag&&(n.break_duration=J(e)),n.unique_program_id=e.readBits(16),n.avail_num=e.readBits(8),n.avails_expected=e.readBits(8),n},ee=function(e,t,i,n){return{descriptor_tag:e,descriptor_length:t,identifier:i,provider_avail_id:n.readBits(32)}},te=function(e,t,i,n){var a=n.readBits(8),r=n.readBits(3);n.readBits(5);for(var s="",o=0;o<r;o++)s+=String.fromCharCode(n.readBits(8));return{descriptor_tag:e,descriptor_length:t,identifier:i,preroll:a,dtmf_count:r,DTMF_char:s}},ie=function(e){var t=e.readBits(8);return e.readBits(7),{component_tag:t,pts_offset:4*e.readBits(31)+e.readBits(2)}},ne=function(e,t,i,n){var a=n.readBits(32),r=n.readBool();n.readBits(7);var s={descriptor_tag:e,descriptor_length:t,identifier:i,segmentation_event_id:a,segmentation_event_cancel_indicator:r};if(r)return s;if(s.program_segmentation_flag=n.readBool(),s.segmentation_duration_flag=n.readBool(),s.delivery_not_restricted_flag=n.readBool(),s.delivery_not_restricted_flag?n.readBits(5):(s.web_delivery_allowed_flag=n.readBool(),s.no_regional_blackout_flag=n.readBool(),s.archive_allowed_flag=n.readBool(),s.device_restrictions=n.readBits(2)),!s.program_segmentation_flag){s.component_count=n.readBits(8),s.components=[];for(var o=0;o<s.component_count;o++)s.components.push(ie(n))}s.segmentation_duration_flag&&(s.segmentation_duration=n.readBits(40)),s.segmentation_upid_type=n.readBits(8),s.segmentation_upid_length=n.readBits(8);var d=new Uint8Array(s.segmentation_upid_length);for(o=0;o<s.segmentation_upid_length;o++)d[o]=n.readBits(8);return s.segmentation_upid=d.buffer,s.segmentation_type_id=n.readBits(8),s.segment_num=n.readBits(8),s.segments_expected=n.readBits(8),52!==s.segmentation_type_id&&54!==s.segmentation_type_id&&56!==s.segmentation_type_id&&58!==s.segmentation_type_id||(s.sub_segment_num=n.readBits(8),s.sub_segments_expected=n.readBits(8)),s},ae=function(e,t,i,n){return{descriptor_tag:e,descriptor_length:t,identifier:i,TAI_seconds:n.readBits(48),TAI_ns:n.readBits(32),UTC_offset:n.readBits(16)}},re=function(e){return{component_tag:e.readBits(8),ISO_code:String.fromCharCode(e.readBits(8),e.readBits(8),e.readBits(8)),Bit_Stream_Mode:e.readBits(3),Num_Channels:e.readBits(4),Full_Srvc_Audio:e.readBool()}},se=function(e,t,i,n){for(var a=n.readBits(4),r=[],s=0;s<a;s++)r.push(re(n));return{descriptor_tag:e,descriptor_length:t,identifier:i,audio_count:a,components:r}},oe=function(e){var t=new f(e),i=t.readBits(8),n=t.readBool(),a=t.readBool();t.readBits(2);var r=t.readBits(12),s=t.readBits(8),o=t.readBool(),d=t.readBits(6),_=4*t.readBits(31)+t.readBits(2),h=t.readBits(8),c=t.readBits(12),u=t.readBits(12),l=t.readBits(8),p=null;l===N.kSpliceNull?p={}:l===N.kSpliceSchedule?p=function(e){for(var t=e.readBits(8),i=[],n=0;n<t;n++)i.push($(e));return{splice_count:t,events:i}}(t):l===N.kSpliceInsert?p=function(e){var t=e.readBits(32),i=e.readBool();e.readBits(7);var n={splice_event_id:t,splice_event_cancel_indicator:i};if(i)return n;if(n.out_of_network_indicator=e.readBool(),n.program_splice_flag=e.readBool(),n.duration_flag=e.readBool(),n.splice_immediate_flag=e.readBool(),e.readBits(4),n.program_splice_flag&&!n.splice_immediate_flag&&(n.splice_time=Y(e)),!n.program_splice_flag){n.component_count=e.readBits(8),n.components=[];for(var a=0;a<n.component_count;a++)n.components.push(Z(n.splice_immediate_flag,e))}return n.duration_flag&&(n.break_duration=J(e)),n.unique_program_id=e.readBits(16),n.avail_num=e.readBits(8),n.avails_expected=e.readBits(8),n}(t):l===N.kTimeSignal?p=function(e){return{splice_time:Y(e)}}(t):l===N.kBandwidthReservation?p={}:l===N.kPrivateCommand?p=function(e,t){for(var i=String.fromCharCode(t.readBits(8),t.readBits(8),t.readBits(8),t.readBits(8)),n=new Uint8Array(e-4),a=0;a<e-4;a++)n[a]=t.readBits(8);return{identifier:i,private_data:n.buffer}}(u,t):t.readBits(8*u);for(var m=[],g=t.readBits(16),v=0;v<g;){var y=t.readBits(8),b=t.readBits(8),S=String.fromCharCode(t.readBits(8),t.readBits(8),t.readBits(8),t.readBits(8));0===y?m.push(ee(y,b,S,t)):1===y?m.push(te(y,b,S,t)):2===y?m.push(ne(y,b,S,t)):3===y?m.push(ae(y,b,S,t)):4===y?m.push(se(y,b,S,t)):t.readBits(8*(b-4)),v+=2+b}var E={table_id:i,section_syntax_indicator:n,private_indicator:a,section_length:r,protocol_version:s,encrypted_packet:o,encryption_algorithm:d,pts_adjustment:_,cw_index:h,tier:c,splice_command_length:u,splice_command_type:l,splice_command:p,descriptor_loop_length:g,splice_descriptors:m,E_CRC32:o?t.readBits(32):void 0,CRC32:t.readBits(32)};if(l===N.kSpliceInsert){var A=p;if(A.splice_event_cancel_indicator)return{splice_command_type:l,detail:E,data:e};if(A.program_splice_flag&&!A.splice_immediate_flag){var R=A.duration_flag?A.break_duration.auto_return:void 0,T=A.duration_flag?A.break_duration.duration/90:void 0;return A.splice_time.time_specified_flag?{splice_command_type:l,pts:(_+A.splice_time.pts_time)%Math.pow(2,33),auto_return:R,duraiton:T,detail:E,data:e}:{splice_command_type:l,auto_return:R,duraiton:T,detail:E,data:e}}return{splice_command_type:l,auto_return:R=A.duration_flag?A.break_duration.auto_return:void 0,duraiton:T=A.duration_flag?A.break_duration.duration/90:void 0,detail:E,data:e}}if(l===N.kTimeSignal){var L=p;return L.splice_time.time_specified_flag?{splice_command_type:l,pts:(_+L.splice_time.pts_time)%Math.pow(2,33),detail:E,data:e}:{splice_command_type:l,detail:E,data:e}}return{splice_command_type:l,detail:E,data:e}};!function(e){e[e.kSliceIDR_W_RADL=19]="kSliceIDR_W_RADL",e[e.kSliceIDR_N_LP=20]="kSliceIDR_N_LP",e[e.kSliceCRA_NUT=21]="kSliceCRA_NUT",e[e.kSliceVPS=32]="kSliceVPS",e[e.kSliceSPS=33]="kSliceSPS",e[e.kSlicePPS=34]="kSlicePPS",e[e.kSliceAUD=35]="kSliceAUD"}(X||(X={}));var de=function(){},_e=function(e){var t=e.data.byteLength;this.type=e.type,this.data=new Uint8Array(4+t),new DataView(this.data.buffer).setUint32(0,t),this.data.set(e.data,4)},he=function(){function e(e){this.TAG="H265AnnexBParser",this.current_startcode_offset_=0,this.eof_flag_=!1,this.data_=e,this.current_startcode_offset_=this.findNextStartCodeOffset(0),this.eof_flag_&&r.a.e(this.TAG,"Could not find H265 startcode until payload end!")}return e.prototype.findNextStartCodeOffset=function(e){for(var t=e,i=this.data_;;){if(t+3>=i.byteLength)return this.eof_flag_=!0,i.byteLength;var n=i[t+0]<<24|i[t+1]<<16|i[t+2]<<8|i[t+3],a=i[t+0]<<16|i[t+1]<<8|i[t+2];if(1===n||1===a)return t;t++}},e.prototype.readNextNaluPayload=function(){for(var e=this.data_,t=null;null==t&&!this.eof_flag_;){var i=this.current_startcode_offset_,n=e[i+=1===(e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3])?4:3]>>1&63,a=(128&e[i])>>>7,r=this.findNextStartCodeOffset(i);if(this.current_startcode_offset_=r,0===a){var s=e.subarray(i,r);(t=new de).type=n,t.data=s}}return t},e}(),ce=function(){function e(e,t,i,n){var a=23+(5+e.byteLength)+(5+t.byteLength)+(5+i.byteLength),r=this.data=new Uint8Array(a);r[0]=1,r[1]=(3&n.general_profile_space)<<6|(n.general_tier_flag?1:0)<<5|31&n.general_profile_idc,r[2]=n.general_profile_compatibility_flags_1,r[3]=n.general_profile_compatibility_flags_2,r[4]=n.general_profile_compatibility_flags_3,r[5]=n.general_profile_compatibility_flags_4,r[6]=n.general_constraint_indicator_flags_1,r[7]=n.general_constraint_indicator_flags_2,r[8]=n.general_constraint_indicator_flags_3,r[9]=n.general_constraint_indicator_flags_4,r[10]=n.general_constraint_indicator_flags_5,r[11]=n.general_constraint_indicator_flags_6,r[12]=n.general_level_idc,r[13]=240|(3840&n.min_spatial_segmentation_idc)>>8,r[14]=255&n.min_spatial_segmentation_idc,r[15]=252|3&n.parallelismType,r[16]=252|3&n.chroma_format_idc,r[17]=248|7&n.bit_depth_luma_minus8,r[18]=248|7&n.bit_depth_chroma_minus8,r[19]=0,r[20]=0,r[21]=(3&n.constant_frame_rate)<<6|(7&n.num_temporal_layers)<<3|(n.temporal_id_nested?1:0)<<2|3,r[22]=3,r[23]=128|X.kSliceVPS,r[24]=0,r[25]=1,r[26]=(65280&e.byteLength)>>8,r[27]=(255&e.byteLength)>>0,r.set(e,28),r[23+(5+e.byteLength)+0]=128|X.kSliceSPS,r[23+(5+e.byteLength)+1]=0,r[23+(5+e.byteLength)+2]=1,r[23+(5+e.byteLength)+3]=(65280&t.byteLength)>>8,r[23+(5+e.byteLength)+4]=(255&t.byteLength)>>0,r.set(t,23+(5+e.byteLength)+5),r[23+(5+e.byteLength+5+t.byteLength)+0]=128|X.kSlicePPS,r[23+(5+e.byteLength+5+t.byteLength)+1]=0,r[23+(5+e.byteLength+5+t.byteLength)+2]=1,r[23+(5+e.byteLength+5+t.byteLength)+3]=(65280&i.byteLength)>>8,r[23+(5+e.byteLength+5+t.byteLength)+4]=(255&i.byteLength)>>0,r.set(i,23+(5+e.byteLength+5+t.byteLength)+5)}return e.prototype.getData=function(){return this.data},e}(),ue=function(){},le=function(){},fe=function(){},pe=[[64,64,80,80,96,96,112,112,128,128,160,160,192,192,224,224,256,256,320,320,384,384,448,448,512,512,640,640,768,768,896,896,1024,1024,1152,1152,1280,1280],[69,70,87,88,104,105,121,122,139,140,174,175,208,209,243,244,278,279,348,349,417,418,487,488,557,558,696,697,835,836,975,976,1114,1115,1253,1254,1393,1394],[96,96,120,120,144,144,168,168,192,192,240,240,288,288,336,336,384,384,480,480,576,576,672,672,768,768,960,960,1152,1152,1344,1344,1536,1536,1728,1728,1920,1920]],me=function(){function e(e){this.TAG="AC3Parser",this.data_=e,this.current_syncword_offset_=this.findNextSyncwordOffset(0),this.eof_flag_&&r.a.e(this.TAG,"Could not found AC3 syncword until payload end")}return e.prototype.findNextSyncwordOffset=function(e){for(var t=e,i=this.data_;;){if(t+7>=i.byteLength)return this.eof_flag_=!0,i.byteLength;if(2935===(i[t+0]<<8|i[t+1]<<0))return t;t++}},e.prototype.readNextAC3Frame=function(){for(var e=this.data_,t=null;null==t&&!this.eof_flag_;){var i=this.current_syncword_offset_,n=e[i+4]>>6,a=[48e3,44200,33e3][n],r=63&e[i+4],s=2*pe[n][r];if(i+s>this.data_.byteLength){this.eof_flag_=!0,this.has_last_incomplete_data=!0;break}var o=this.findNextSyncwordOffset(i+s);this.current_syncword_offset_=o;var d=e[i+5]>>3,_=7&e[i+5],h=e[i+6]>>5,c=0;0!=(1&h)&&1!==h&&(c+=2),0!=(4&h)&&(c+=2),2===h&&(c+=2);var u=(e[i+6]<<8|e[i+7]<<0)>>12-c&1,l=[2,1,2,3,3,4,4,5][h]+u;(t=new fe).sampling_frequency=a,t.channel_count=l,t.channel_mode=h,t.bit_stream_identification=d,t.low_frequency_effects_channel_on=u,t.bit_stream_mode=_,t.frame_size_code=r,t.data=e.subarray(i,i+s)}return t},e.prototype.hasIncompleteData=function(){return this.has_last_incomplete_data},e.prototype.getIncompleteData=function(){return this.has_last_incomplete_data?this.data_.subarray(this.current_syncword_offset_):null},e}(),ge=function(e){var t;t=[e.sampling_rate_code<<6|e.bit_stream_identification<<1|e.bit_stream_mode>>2,(3&e.bit_stream_mode)<<6|e.channel_mode<<3|e.low_frequency_effects_channel_on<<2|e.frame_size_code>>4,e.frame_size_code<<4&224],this.config=t,this.sampling_rate=e.sampling_frequency,this.bit_stream_identification=e.bit_stream_identification,this.bit_stream_mode=e.bit_stream_mode,this.low_frequency_effects_channel_on=e.low_frequency_effects_channel_on,this.channel_count=e.channel_count,this.channel_mode=e.channel_mode,this.codec_mimetype="ac-3",this.original_codec_mimetype="ac-3"},ve=function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(t,i)};return function(t,i){function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),ye=function(){return(ye=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},be=function(e){function t(t,i){var n=e.call(this)||this;return n.TAG="TSDemuxer",n.first_parse_=!0,n.media_info_=new o.a,n.timescale_=90,n.duration_=0,n.current_pmt_pid_=-1,n.program_pmt_map_={},n.pes_slice_queues_={},n.section_slice_queues_={},n.video_metadata_={vps:void 0,sps:void 0,pps:void 0,details:void 0},n.audio_metadata_={codec:void 0,audio_object_type:void 0,sampling_freq_index:void 0,sampling_frequency:void 0,channel_config:void 0},n.aac_last_sample_pts_=void 0,n.aac_last_incomplete_data_=null,n.has_video_=!1,n.has_audio_=!1,n.video_init_segment_dispatched_=!1,n.audio_init_segment_dispatched_=!1,n.video_metadata_changed_=!1,n.audio_metadata_changed_=!1,n.loas_previous_frame=null,n.video_track_={type:"video",id:1,sequenceNumber:0,samples:[],length:0},n.audio_track_={type:"audio",id:2,sequenceNumber:0,samples:[],length:0},n.ts_packet_size_=t.ts_packet_size,n.sync_offset_=t.sync_offset,n.config_=i,n}return ve(t,e),t.prototype.destroy=function(){this.media_info_=null,this.pes_slice_queues_=null,this.section_slice_queues_=null,this.video_metadata_=null,this.audio_metadata_=null,this.aac_last_incomplete_data_=null,this.video_track_=null,this.audio_track_=null,e.prototype.destroy.call(this)},t.probe=function(e){var t=new Uint8Array(e),i=-1,n=188;if(t.byteLength<=3*n)return{needMoreData:!0};for(;-1===i;){for(var a=Math.min(1e3,t.byteLength-3*n),s=0;s<a;){if(71===t[s]&&71===t[s+n]&&71===t[s+2*n]){i=s;break}s++}if(-1===i)if(188===n)n=192;else{if(192!==n)break;n=204}}return-1===i?{match:!1}:(192===n&&i>=4?(r.a.v("TSDemuxer","ts_packet_size = 192, m2ts mode"),i-=4):204===n&&r.a.v("TSDemuxer","ts_packet_size = 204, RS encoded MPEG2-TS stream"),{match:!0,consumed:0,ts_packet_size:n,sync_offset:i})},t.prototype.bindDataSource=function(e){return e.onDataArrival=this.parseChunks.bind(this),this},t.prototype.resetMediaInfo=function(){this.media_info_=new o.a},t.prototype.parseChunks=function(e,t){if(!(this.onError&&this.onMediaInfo&&this.onTrackMetadata&&this.onDataAvailable))throw new c.a("onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");var i=0;for(this.first_parse_&&(this.first_parse_=!1,i=this.sync_offset_);i+this.ts_packet_size_<=e.byteLength;){var n=t+i;192===this.ts_packet_size_&&(i+=4);var a=new Uint8Array(e,i,188),s=a[0];if(71!==s){r.a.e(this.TAG,"sync_byte = "+s+", not 0x47");break}var o=(64&a[1])>>>6,d=(a[1],(31&a[1])<<8|a[2]),_=(48&a[3])>>>4,h=15&a[3],u={},l=4;if(2==_||3==_){var f=a[4];if(5+f===188){i+=188,204===this.ts_packet_size_&&(i+=16);continue}f>0&&(u=this.parseAdaptationField(e,i+4,1+f)),l=5+f}if(1==_||3==_)if(0===d||d===this.current_pmt_pid_||null!=this.pmt_&&this.pmt_.pid_stream_type[d]===E.kSCTE35){var p=188-l;this.handleSectionSlice(e,i+l,p,{pid:d,file_position:n,payload_unit_start_indicator:o,continuity_conunter:h,random_access_indicator:u.random_access_indicator})}else if(null!=this.pmt_&&null!=this.pmt_.pid_stream_type[d]){p=188-l;var m=this.pmt_.pid_stream_type[d];d!==this.pmt_.common_pids.h264&&d!==this.pmt_.common_pids.h265&&d!==this.pmt_.common_pids.adts_aac&&d!==this.pmt_.common_pids.loas_aac&&d!==this.pmt_.common_pids.ac3&&d!==this.pmt_.common_pids.opus&&d!==this.pmt_.common_pids.mp3&&!0!==this.pmt_.pes_private_data_pids[d]&&!0!==this.pmt_.timed_id3_pids[d]||this.handlePESSlice(e,i+l,p,{pid:d,stream_type:m,file_position:n,payload_unit_start_indicator:o,continuity_conunter:h,random_access_indicator:u.random_access_indicator})}i+=188,204===this.ts_packet_size_&&(i+=16)}return this.dispatchAudioVideoMediaSegment(),i},t.prototype.parseAdaptationField=function(e,t,i){var n=new Uint8Array(e,t,i),a=n[0];return a>0?a>183?(r.a.w(this.TAG,"Illegal adaptation_field_length: "+a),{}):{discontinuity_indicator:(128&n[1])>>>7,random_access_indicator:(64&n[1])>>>6,elementary_stream_priority_indicator:(32&n[1])>>>5}:{}},t.prototype.handleSectionSlice=function(e,t,i,n){var a=new Uint8Array(e,t,i),r=this.section_slice_queues_[n.pid];if(n.payload_unit_start_indicator){var s=a[0];if(null!=r&&0!==r.total_length){var o=new Uint8Array(e,t+1,Math.min(i,s));r.slices.push(o),r.total_length+=o.byteLength,r.total_length===r.expected_length?this.emitSectionSlices(r,n):this.clearSlices(r,n)}for(var d=1+s;d<a.byteLength;){if(255===a[d+0])break;var _=(15&a[d+1])<<8|a[d+2];this.section_slice_queues_[n.pid]=new C,(r=this.section_slice_queues_[n.pid]).expected_length=_+3,r.file_position=n.file_position,r.random_access_indicator=n.random_access_indicator;o=new Uint8Array(e,t+d,Math.min(i-d,r.expected_length-r.total_length));r.slices.push(o),r.total_length+=o.byteLength,r.total_length===r.expected_length?this.emitSectionSlices(r,n):r.total_length>=r.expected_length&&this.clearSlices(r,n),d+=o.byteLength}}else if(null!=r&&0!==r.total_length){o=new Uint8Array(e,t,Math.min(i,r.expected_length-r.total_length));r.slices.push(o),r.total_length+=o.byteLength,r.total_length===r.expected_length?this.emitSectionSlices(r,n):r.total_length>=r.expected_length&&this.clearSlices(r,n)}},t.prototype.handlePESSlice=function(e,t,i,n){var a=new Uint8Array(e,t,i),s=a[0]<<16|a[1]<<8|a[2],o=(a[3],a[4]<<8|a[5]);if(n.payload_unit_start_indicator){if(1!==s)return void r.a.e(this.TAG,"handlePESSlice: packet_start_code_prefix should be 1 but with value "+s);var d=this.pes_slice_queues_[n.pid];d&&(0===d.expected_length||d.expected_length===d.total_length?this.emitPESSlices(d,n):this.clearSlices(d,n)),this.pes_slice_queues_[n.pid]=new C,this.pes_slice_queues_[n.pid].file_position=n.file_position,this.pes_slice_queues_[n.pid].random_access_indicator=n.random_access_indicator}if(null!=this.pes_slice_queues_[n.pid]){var _=this.pes_slice_queues_[n.pid];_.slices.push(a),n.payload_unit_start_indicator&&(_.expected_length=0===o?0:o+6),_.total_length+=a.byteLength,_.expected_length>0&&_.expected_length===_.total_length?this.emitPESSlices(_,n):_.expected_length>0&&_.expected_length<_.total_length&&this.clearSlices(_,n)}},t.prototype.emitSectionSlices=function(e,t){for(var i=new Uint8Array(e.total_length),n=0,a=0;n<e.slices.length;n++){var r=e.slices[n];i.set(r,a),a+=r.byteLength}e.slices=[],e.expected_length=-1,e.total_length=0;var s=new D;s.pid=t.pid,s.data=i,s.file_position=e.file_position,s.random_access_indicator=e.random_access_indicator,this.parseSection(s)},t.prototype.emitPESSlices=function(e,t){for(var i=new Uint8Array(e.total_length),n=0,a=0;n<e.slices.length;n++){var r=e.slices[n];i.set(r,a),a+=r.byteLength}e.slices=[],e.expected_length=-1,e.total_length=0;var s=new k;s.pid=t.pid,s.data=i,s.stream_type=t.stream_type,s.file_position=e.file_position,s.random_access_indicator=e.random_access_indicator,this.parsePES(s)},t.prototype.clearSlices=function(e,t){e.slices=[],e.expected_length=-1,e.total_length=0},t.prototype.parseSection=function(e){var t=e.data,i=e.pid;0===i?this.parsePAT(t):i===this.current_pmt_pid_?this.parsePMT(t):null!=this.pmt_&&this.pmt_.scte_35_pids[i]&&this.parseSCTE35(t)},t.prototype.parsePES=function(e){var t=e.data,i=t[0]<<16|t[1]<<8|t[2],n=t[3],a=t[4]<<8|t[5];if(1===i){if(188!==n&&190!==n&&191!==n&&240!==n&&241!==n&&255!==n&&242!==n&&248!==n){t[6];var s=(192&t[7])>>>6,o=t[8],d=void 0,_=void 0;2!==s&&3!==s||(d=536870912*(14&t[9])+4194304*(255&t[10])+16384*(254&t[11])+128*(255&t[12])+(254&t[13])/2,_=3===s?536870912*(14&t[14])+4194304*(255&t[15])+16384*(254&t[16])+128*(255&t[17])+(254&t[18])/2:d);var h=9+o,c=void 0;if(0!==a){if(a<3+o)return void r.a.v(this.TAG,"Malformed PES: PES_packet_length < 3 + PES_header_data_length");c=a-3-o}else c=t.byteLength-h;var u=t.subarray(h,h+c);switch(e.stream_type){case E.kMPEG1Audio:case E.kMPEG2Audio:this.parseMP3Payload(u,d);break;case E.kPESPrivateData:this.pmt_.common_pids.opus===e.pid?this.parseOpusPayload(u,d):this.pmt_.common_pids.ac3===e.pid?this.parseAC3Payload(u,d):this.pmt_.smpte2038_pids[e.pid]?this.parseSMPTE2038MetadataPayload(u,d,_,e.pid,n):this.parsePESPrivateDataPayload(u,d,_,e.pid,n);break;case E.kADTSAAC:this.parseADTSAACPayload(u,d);break;case E.kLOASAAC:this.parseLOASAACPayload(u,d);break;case E.kAC3:this.parseAC3Payload(u,d);break;case E.kID3:this.parseTimedID3MetadataPayload(u,d,_,e.pid,n);break;case E.kH264:this.parseH264Payload(u,d,_,e.file_position,e.random_access_indicator);break;case E.kH265:this.parseH265Payload(u,d,_,e.file_position,e.random_access_indicator)}}else if((188===n||191===n||240===n||241===n||255===n||242===n||248===n)&&e.stream_type===E.kPESPrivateData){h=6,c=void 0;c=0!==a?a:t.byteLength-h;u=t.subarray(h,h+c);this.parsePESPrivateDataPayload(u,void 0,void 0,e.pid,n)}}else r.a.e(this.TAG,"parsePES: packet_start_code_prefix should be 1 but with value "+i)},t.prototype.parsePAT=function(e){var t=e[0];if(0===t){var i=(15&e[1])<<8|e[2],n=(e[3],e[4],(62&e[5])>>>1),a=1&e[5],s=e[6],o=(e[7],null);if(1===a&&0===s)(o=new T).version_number=n;else if(null==(o=this.pat_))return;for(var d=i-5-4,_=-1,h=-1,c=8;c<8+d;c+=4){var u=e[c]<<8|e[c+1],l=(31&e[c+2])<<8|e[c+3];0===u?o.network_pid=l:(o.program_pmt_pid[u]=l,-1===_&&(_=u),-1===h&&(h=l))}1===a&&0===s&&(null==this.pat_&&r.a.v(this.TAG,"Parsed first PAT: "+JSON.stringify(o)),this.pat_=o,this.current_program_=_,this.current_pmt_pid_=h)}else r.a.e(this.TAG,"parsePAT: table_id "+t+" is not corresponded to PAT!")},t.prototype.parsePMT=function(e){var t=e[0];if(2===t){var i=(15&e[1])<<8|e[2],n=e[3]<<8|e[4],a=(62&e[5])>>>1,s=1&e[5],o=e[6],d=(e[7],null);if(1===s&&0===o)(d=new w).program_number=n,d.version_number=a,this.program_pmt_map_[n]=d;else if(null==(d=this.program_pmt_map_[n]))return;e[8],e[9];for(var _=(15&e[10])<<8|e[11],h=12+_,c=i-9-_-4,u=h;u<h+c;){var l=e[u],f=(31&e[u+1])<<8|e[u+2],p=(15&e[u+3])<<8|e[u+4];d.pid_stream_type[f]=l;var m=d.common_pids.h264||d.common_pids.h265,g=d.common_pids.adts_aac||d.common_pids.loas_aac||d.common_pids.ac3||d.common_pids.opus||d.common_pids.mp3;if(l!==E.kH264||m)if(l!==E.kH265||m)if(l!==E.kADTSAAC||g)if(l!==E.kLOASAAC||g)if(l!==E.kAC3||g)if(l!==E.kMPEG1Audio&&l!==E.kMPEG2Audio||g)if(l===E.kPESPrivateData){if(d.pes_private_data_pids[f]=!0,p>0){for(var v=u+5;v<u+5+p;){var y=e[v+0],b=e[v+1];if(5===y){var S=String.fromCharCode.apply(String,Array.from(e.subarray(v+2,v+2+b)));"VANC"===S?d.smpte2038_pids[f]=!0:"Opus"===S&&(d.common_pids.opus=f)}else if(127===y&&f===d.common_pids.opus){var A=null;if(128===e[v+2]&&(A=e[v+3]),null==A){r.a.e(this.TAG,"Not Supported Opus channel count.");continue}var R={codec:"opus",channel_count:0==(15&A)?2:15&A,channel_config_code:A,sample_rate:48e3},T={codec:"opus",meta:R};0==this.audio_init_segment_dispatched_?(this.audio_metadata_=R,this.dispatchAudioInitSegment(T)):this.detectAudioMetadataChange(T)&&(this.dispatchAudioMediaSegment(),this.dispatchAudioInitSegment(T))}v+=2+b}var L=e.subarray(u+5,u+5+p);this.dispatchPESPrivateDataDescriptor(f,l,L)}}else l===E.kID3?d.timed_id3_pids[f]=!0:l===E.kSCTE35&&(d.scte_35_pids[f]=!0);else d.common_pids.mp3=f;else d.common_pids.ac3=f;else d.common_pids.loas_aac=f;else d.common_pids.adts_aac=f;else d.common_pids.h265=f;else d.common_pids.h264=f;u+=5+p}n===this.current_program_&&(null==this.pmt_&&r.a.v(this.TAG,"Parsed first PMT: "+JSON.stringify(d)),this.pmt_=d,(d.common_pids.h264||d.common_pids.h265)&&(this.has_video_=!0),(d.common_pids.adts_aac||d.common_pids.loas_aac||d.common_pids.ac3||d.common_pids.opus||d.common_pids.mp3)&&(this.has_audio_=!0))}else r.a.e(this.TAG,"parsePMT: table_id "+t+" is not corresponded to PMT!")},t.prototype.parseSCTE35=function(e){var t=oe(e);if(null!=t.pts){var i=Math.floor(t.pts/this.timescale_);t.pts=i}else t.nearest_pts=this.aac_last_sample_pts_;this.onSCTE35Metadata&&this.onSCTE35Metadata(t)},t.prototype.parseH264Payload=function(e,t,i,n,a){for(var s=new M(e),o=null,d=[],_=0,h=!1;null!=(o=s.readNextNaluPayload());){var c=new P(o);if(c.type===L.kSliceSPS){var u=p.parseSPS(o.data);this.video_init_segment_dispatched_?!0===this.detectVideoMetadataChange(c,u)&&(r.a.v(this.TAG,"H264: Critical h264 metadata has been changed, attempt to re-generate InitSegment"),this.video_metadata_changed_=!0,this.video_metadata_={vps:void 0,sps:c,pps:void 0,details:u}):(this.video_metadata_.sps=c,this.video_metadata_.details=u)}else c.type===L.kSlicePPS?this.video_init_segment_dispatched_&&!this.video_metadata_changed_||(this.video_metadata_.pps=c,this.video_metadata_.sps&&this.video_metadata_.pps&&(this.video_metadata_changed_&&this.dispatchVideoMediaSegment(),this.dispatchVideoInitSegment())):(c.type===L.kSliceIDR||c.type===L.kSliceNonIDR&&1===a)&&(h=!0);this.video_init_segment_dispatched_&&(d.push(c),_+=c.data.byteLength)}var l=Math.floor(t/this.timescale_),f=Math.floor(i/this.timescale_);if(d.length){var m=this.video_track_,g={units:d,length:_,isKeyframe:h,dts:f,pts:l,cts:l-f,file_position:n};m.samples.push(g),m.length+=_}},t.prototype.parseH265Payload=function(e,t,i,n,a){for(var s=new he(e),o=null,d=[],_=0,h=!1;null!=(o=s.readNextNaluPayload());){var c=new _e(o);if(c.type===X.kSliceVPS){if(!this.video_init_segment_dispatched_){var u=g.parseVPS(o.data);this.video_metadata_.vps=c,this.video_metadata_.details=ye(ye({},this.video_metadata_.details),u)}}else if(c.type===X.kSliceSPS){u=g.parseSPS(o.data);this.video_init_segment_dispatched_?!0===this.detectVideoMetadataChange(c,u)&&(r.a.v(this.TAG,"H265: Critical h265 metadata has been changed, attempt to re-generate InitSegment"),this.video_metadata_changed_=!0,this.video_metadata_={vps:void 0,sps:c,pps:void 0,details:u}):(this.video_metadata_.sps=c,this.video_metadata_.details=ye(ye({},this.video_metadata_.details),u))}else if(c.type===X.kSlicePPS){if(!this.video_init_segment_dispatched_||this.video_metadata_changed_){u=g.parsePPS(o.data);this.video_metadata_.pps=c,this.video_metadata_.details=ye(ye({},this.video_metadata_.details),u),this.video_metadata_.vps&&this.video_metadata_.sps&&this.video_metadata_.pps&&(this.video_metadata_changed_&&this.dispatchVideoMediaSegment(),this.dispatchVideoInitSegment())}}else c.type!==X.kSliceIDR_W_RADL&&c.type!==X.kSliceIDR_N_LP&&c.type!==X.kSliceCRA_NUT||(h=!0);this.video_init_segment_dispatched_&&(d.push(c),_+=c.data.byteLength)}var l=Math.floor(t/this.timescale_),f=Math.floor(i/this.timescale_);if(d.length){var p=this.video_track_,m={units:d,length:_,isKeyframe:h,dts:f,pts:l,cts:l-f,file_position:n};p.samples.push(m),p.length+=_}},t.prototype.detectVideoMetadataChange=function(e,t){if(t.codec_mimetype!==this.video_metadata_.details.codec_mimetype)return r.a.v(this.TAG,"Video: Codec mimeType changed from "+this.video_metadata_.details.codec_mimetype+" to "+t.codec_mimetype),!0;if(t.codec_size.width!==this.video_metadata_.details.codec_size.width||t.codec_size.height!==this.video_metadata_.details.codec_size.height){var i=this.video_metadata_.details.codec_size,n=t.codec_size;return r.a.v(this.TAG,"Video: Coded Resolution changed from "+i.width+"x"+i.height+" to "+n.width+"x"+n.height),!0}return t.present_size.width!==this.video_metadata_.details.present_size.width&&(r.a.v(this.TAG,"Video: Present resolution width changed from "+this.video_metadata_.details.present_size.width+" to "+t.present_size.width),!0)},t.prototype.isInitSegmentDispatched=function(){return this.has_video_&&this.has_audio_?this.video_init_segment_dispatched_&&this.audio_init_segment_dispatched_:this.has_video_&&!this.has_audio_?this.video_init_segment_dispatched_:!(this.has_video_||!this.has_audio_)&&this.audio_init_segment_dispatched_},t.prototype.dispatchVideoInitSegment=function(){var e=this.video_metadata_.details,t={type:"video"};t.id=this.video_track_.id,t.timescale=1e3,t.duration=this.duration_,t.codecWidth=e.codec_size.width,t.codecHeight=e.codec_size.height,t.presentWidth=e.present_size.width,t.presentHeight=e.present_size.height,t.profile=e.profile_string,t.level=e.level_string,t.bitDepth=e.bit_depth,t.chromaFormat=e.chroma_format,t.sarRatio=e.sar_ratio,t.frameRate=e.frame_rate;var i=t.frameRate.fps_den,n=t.frameRate.fps_num;if(t.refSampleDuration=i/n*1e3,t.codec=e.codec_mimetype,this.video_metadata_.vps){var a=this.video_metadata_.vps.data.subarray(4),s=this.video_metadata_.sps.data.subarray(4),o=this.video_metadata_.pps.data.subarray(4),d=new ce(a,s,o,e);t.hvcc=d.getData(),0==this.video_init_segment_dispatched_&&r.a.v(this.TAG,"Generated first HEVCDecoderConfigurationRecord for mimeType: "+t.codec)}else{s=this.video_metadata_.sps.data.subarray(4),o=this.video_metadata_.pps.data.subarray(4);var _=new x(s,o,e);t.avcc=_.getData(),0==this.video_init_segment_dispatched_&&r.a.v(this.TAG,"Generated first AVCDecoderConfigurationRecord for mimeType: "+t.codec)}this.onTrackMetadata("video",t),this.video_init_segment_dispatched_=!0,this.video_metadata_changed_=!1;var h=this.media_info_;h.hasVideo=!0,h.width=t.codecWidth,h.height=t.codecHeight,h.fps=t.frameRate.fps,h.profile=t.profile,h.level=t.level,h.refFrames=e.ref_frames,h.chromaFormat=e.chroma_format_string,h.sarNum=t.sarRatio.width,h.sarDen=t.sarRatio.height,h.videoCodec=t.codec,h.hasAudio&&h.audioCodec?h.mimeType='video/mp2t; codecs="'+h.videoCodec+","+h.audioCodec+'"':h.mimeType='video/mp2t; codecs="'+h.videoCodec+'"',h.isComplete()&&this.onMediaInfo(h)},t.prototype.dispatchVideoMediaSegment=function(){this.isInitSegmentDispatched()&&this.video_track_.length&&this.onDataAvailable(null,this.video_track_)},t.prototype.dispatchAudioMediaSegment=function(){this.isInitSegmentDispatched()&&this.audio_track_.length&&this.onDataAvailable(this.audio_track_,null)},t.prototype.dispatchAudioVideoMediaSegment=function(){this.isInitSegmentDispatched()&&(this.audio_track_.length||this.video_track_.length)&&this.onDataAvailable(this.audio_track_,this.video_track_)},t.prototype.parseADTSAACPayload=function(e,t){if(!this.has_video_||this.video_init_segment_dispatched_){if(this.aac_last_incomplete_data_){var i=new Uint8Array(e.byteLength+this.aac_last_incomplete_data_.byteLength);i.set(this.aac_last_incomplete_data_,0),i.set(e,this.aac_last_incomplete_data_.byteLength),e=i}var n,a;if(null!=t&&(a=t/this.timescale_),"aac"===this.audio_metadata_.codec){if(null==t&&null!=this.aac_last_sample_pts_)n=1024/this.audio_metadata_.sampling_frequency*1e3,a=this.aac_last_sample_pts_+n;else if(null==t)return void r.a.w(this.TAG,"AAC: Unknown pts");if(this.aac_last_incomplete_data_&&this.aac_last_sample_pts_){n=1024/this.audio_metadata_.sampling_frequency*1e3;var s=this.aac_last_sample_pts_+n;Math.abs(s-a)>1&&(r.a.w(this.TAG,"AAC: Detected pts overlapped, expected: "+s+"ms, PES pts: "+a+"ms"),a=s)}}for(var o,d=new z(e),_=null,h=a;null!=(_=d.readNextAACFrame());){n=1024/_.sampling_frequency*1e3;var c={codec:"aac",data:_};0==this.audio_init_segment_dispatched_?(this.audio_metadata_={codec:"aac",audio_object_type:_.audio_object_type,sampling_freq_index:_.sampling_freq_index,sampling_frequency:_.sampling_frequency,channel_config:_.channel_config},this.dispatchAudioInitSegment(c)):this.detectAudioMetadataChange(c)&&(this.dispatchAudioMediaSegment(),this.dispatchAudioInitSegment(c)),o=h;var u=Math.floor(h),l={unit:_.data,length:_.data.byteLength,pts:u,dts:u};this.audio_track_.samples.push(l),this.audio_track_.length+=_.data.byteLength,h+=n}d.hasIncompleteData()&&(this.aac_last_incomplete_data_=d.getIncompleteData()),o&&(this.aac_last_sample_pts_=o)}},t.prototype.parseLOASAACPayload=function(e,t){var i;if(!this.has_video_||this.video_init_segment_dispatched_){if(this.aac_last_incomplete_data_){var n=new Uint8Array(e.byteLength+this.aac_last_incomplete_data_.byteLength);n.set(this.aac_last_incomplete_data_,0),n.set(e,this.aac_last_incomplete_data_.byteLength),e=n}var a,s;if(null!=t&&(s=t/this.timescale_),"aac"===this.audio_metadata_.codec){if(null==t&&null!=this.aac_last_sample_pts_)a=1024/this.audio_metadata_.sampling_frequency*1e3,s=this.aac_last_sample_pts_+a;else if(null==t)return void r.a.w(this.TAG,"AAC: Unknown pts");if(this.aac_last_incomplete_data_&&this.aac_last_sample_pts_){a=1024/this.audio_metadata_.sampling_frequency*1e3;var o=this.aac_last_sample_pts_+a;Math.abs(o-s)>1&&(r.a.w(this.TAG,"AAC: Detected pts overlapped, expected: "+o+"ms, PES pts: "+s+"ms"),s=o)}}for(var d,_=new H(e),h=null,c=s;null!=(h=_.readNextAACFrame(null!==(i=this.loas_previous_frame)&&void 0!==i?i:void 0));){this.loas_previous_frame=h,a=1024/h.sampling_frequency*1e3;var u={codec:"aac",data:h};0==this.audio_init_segment_dispatched_?(this.audio_metadata_={codec:"aac",audio_object_type:h.audio_object_type,sampling_freq_index:h.sampling_freq_index,sampling_frequency:h.sampling_frequency,channel_config:h.channel_config},this.dispatchAudioInitSegment(u)):this.detectAudioMetadataChange(u)&&(this.dispatchAudioMediaSegment(),this.dispatchAudioInitSegment(u)),d=c;var l=Math.floor(c),f={unit:h.data,length:h.data.byteLength,pts:l,dts:l};this.audio_track_.samples.push(f),this.audio_track_.length+=h.data.byteLength,c+=a}_.hasIncompleteData()&&(this.aac_last_incomplete_data_=_.getIncompleteData()),d&&(this.aac_last_sample_pts_=d)}},t.prototype.parseAC3Payload=function(e,t){if(!this.has_video_||this.video_init_segment_dispatched_){var i,n;if(null!=t&&(n=t/this.timescale_),"ac-3"===this.audio_metadata_.codec)if(null==t&&null!=this.aac_last_sample_pts_)i=1536/this.audio_metadata_.sampling_frequency*1e3,n=this.aac_last_sample_pts_+i;else if(null==t)return void r.a.w(this.TAG,"Opus: Unknown pts");for(var a,s=new me(e),o=null,d=n;null!=(o=s.readNextAC3Frame());){i=1536/o.sampling_frequency*1e3;var _={codec:"ac-3",data:o};0==this.audio_init_segment_dispatched_?(this.audio_metadata_={codec:"ac-3",sampling_frequency:o.sampling_frequency,bit_stream_identification:o.bit_stream_identification,bit_stream_mode:o.bit_stream_mode,low_frequency_effects_channel_on:o.low_frequency_effects_channel_on,channel_mode:o.channel_mode},console.log(JSON.stringify(this.audio_metadata_)),this.dispatchAudioInitSegment(_)):this.detectAudioMetadataChange(_)&&(this.dispatchAudioMediaSegment(),this.dispatchAudioInitSegment(_)),a=d;var h=Math.floor(d),c={unit:o.data,length:o.data.byteLength,pts:h,dts:h};this.audio_track_.samples.push(c),this.audio_track_.length+=o.data.byteLength,d+=i}a&&(this.aac_last_sample_pts_=a)}},t.prototype.parseOpusPayload=function(e,t){if(!this.has_video_||this.video_init_segment_dispatched_){var i,n;if(null!=t&&(n=t/this.timescale_),"opus"===this.audio_metadata_.codec)if(null==t&&null!=this.aac_last_sample_pts_)i=20,n=this.aac_last_sample_pts_+i;else if(null==t)return void r.a.w(this.TAG,"Opus: Unknown pts");for(var a,s=n,o=0;o<e.length;){i=20;for(var d=0!=(16&e[o+1]),_=0!=(8&e[o+1]),h=o+2,c=0;255===e[h];)c+=255,h+=1;c+=e[h],h+=1,h+=d?2:0,h+=_?2:0,a=s;var u=Math.floor(s),l=e.slice(h,h+c),f={unit:l,length:l.byteLength,pts:u,dts:u};this.audio_track_.samples.push(f),this.audio_track_.length+=l.byteLength,s+=i,o=h+c}a&&(this.aac_last_sample_pts_=a)}},t.prototype.parseMP3Payload=function(e,t){if(!this.has_video_||this.video_init_segment_dispatched_){var i=[0,32,64,96,128,160,192,224,256,288,320,352,384,416,448,-1],n=[0,32,48,56,64,80,96,112,128,160,192,224,256,320,384,-1],a=[0,32,40,48,56,64,80,96,112,128,160,192,224,256,320,-1],r=e[1]>>>3&3,s=(6&e[1])>>1,o=(240&e[2])>>>4,d=(12&e[2])>>>2,_=3!==(e[3]>>>6&3)?2:1,h=0,c=34;switch(r){case 0:h=[11025,12e3,8e3,0][d];break;case 2:h=[22050,24e3,16e3,0][d];break;case 3:h=[44100,48e3,32e3,0][d]}switch(s){case 1:c=34,o<a.length&&a[o];break;case 2:c=33,o<n.length&&n[o];break;case 3:c=32,o<i.length&&i[o]}var u=new le;u.object_type=c,u.sample_rate=h,u.channel_count=_,u.data=e;var l={codec:"mp3",data:u};0==this.audio_init_segment_dispatched_?(this.audio_metadata_={codec:"mp3",object_type:c,sample_rate:h,channel_count:_},this.dispatchAudioInitSegment(l)):this.detectAudioMetadataChange(l)&&(this.dispatchAudioMediaSegment(),this.dispatchAudioInitSegment(l));var f={unit:e,length:e.byteLength,pts:t/this.timescale_,dts:t/this.timescale_};this.audio_track_.samples.push(f),this.audio_track_.length+=e.byteLength}},t.prototype.detectAudioMetadataChange=function(e){if(e.codec!==this.audio_metadata_.codec)return r.a.v(this.TAG,"Audio: Audio Codecs changed from "+this.audio_metadata_.codec+" to "+e.codec),!0;if("aac"===e.codec&&"aac"===this.audio_metadata_.codec){if((t=e.data).audio_object_type!==this.audio_metadata_.audio_object_type)return r.a.v(this.TAG,"AAC: AudioObjectType changed from "+this.audio_metadata_.audio_object_type+" to "+t.audio_object_type),!0;if(t.sampling_freq_index!==this.audio_metadata_.sampling_freq_index)return r.a.v(this.TAG,"AAC: SamplingFrequencyIndex changed from "+this.audio_metadata_.sampling_freq_index+" to "+t.sampling_freq_index),!0;if(t.channel_config!==this.audio_metadata_.channel_config)return r.a.v(this.TAG,"AAC: Channel configuration changed from "+this.audio_metadata_.channel_config+" to "+t.channel_config),!0}else if("ac-3"===e.codec&&"ac-3"===this.audio_metadata_.codec){var t;if((t=e.data).sampling_frequency!==this.audio_metadata_.sampling_frequency)return r.a.v(this.TAG,"AC3: Sampling Frequency changed from "+this.audio_metadata_.sampling_frequency+" to "+t.sampling_frequency),!0;if(t.bit_stream_identification!==this.audio_metadata_.bit_stream_identification)return r.a.v(this.TAG,"AC3: Bit Stream Identification changed from "+this.audio_metadata_.bit_stream_identification+" to "+t.bit_stream_identification),!0;if(t.bit_stream_mode!==this.audio_metadata_.bit_stream_mode)return r.a.v(this.TAG,"AC3: BitStream Mode changed from "+this.audio_metadata_.bit_stream_mode+" to "+t.bit_stream_mode),!0;if(t.channel_mode!==this.audio_metadata_.channel_mode)return r.a.v(this.TAG,"AC3: Channel Mode changed from "+this.audio_metadata_.channel_mode+" to "+t.channel_mode),!0;if(t.low_frequency_effects_channel_on!==this.audio_metadata_.low_frequency_effects_channel_on)return r.a.v(this.TAG,"AC3: Low Frequency Effects Channel On changed from "+this.audio_metadata_.low_frequency_effects_channel_on+" to "+t.low_frequency_effects_channel_on),!0}else if("opus"===e.codec&&"opus"===this.audio_metadata_.codec){if((i=e.meta).sample_rate!==this.audio_metadata_.sample_rate)return r.a.v(this.TAG,"Opus: SamplingFrequencyIndex changed from "+this.audio_metadata_.sample_rate+" to "+i.sample_rate),!0;if(i.channel_count!==this.audio_metadata_.channel_count)return r.a.v(this.TAG,"Opus: Channel count changed from "+this.audio_metadata_.channel_count+" to "+i.channel_count),!0}else if("mp3"===e.codec&&"mp3"===this.audio_metadata_.codec){var i;if((i=e.data).object_type!==this.audio_metadata_.object_type)return r.a.v(this.TAG,"MP3: AudioObjectType changed from "+this.audio_metadata_.object_type+" to "+i.object_type),!0;if(i.sample_rate!==this.audio_metadata_.sample_rate)return r.a.v(this.TAG,"MP3: SamplingFrequencyIndex changed from "+this.audio_metadata_.sample_rate+" to "+i.sample_rate),!0;if(i.channel_count!==this.audio_metadata_.channel_count)return r.a.v(this.TAG,"MP3: Channel count changed from "+this.audio_metadata_.channel_count+" to "+i.channel_count),!0}return!1},t.prototype.dispatchAudioInitSegment=function(e){var t={type:"audio"};if(t.id=this.audio_track_.id,t.timescale=1e3,t.duration=this.duration_,"aac"===this.audio_metadata_.codec){var i="aac"===e.codec?e.data:null,n=new q(i);t.audioSampleRate=n.sampling_rate,t.channelCount=n.channel_count,t.codec=n.codec_mimetype,t.originalCodec=n.original_codec_mimetype,t.config=n.config,t.refSampleDuration=1024/t.audioSampleRate*t.timescale}else if("ac-3"===this.audio_metadata_.codec){var a="ac-3"===e.codec?e.data:null,s=new ge(a);t.audioSampleRate=s.sampling_rate,t.channelCount=s.channel_count,t.codec=s.codec_mimetype,t.originalCodec=s.original_codec_mimetype,t.config=s.config,t.refSampleDuration=1536/t.audioSampleRate*t.timescale}else"opus"===this.audio_metadata_.codec?(t.audioSampleRate=this.audio_metadata_.sample_rate,t.channelCount=this.audio_metadata_.channel_count,t.channelConfigCode=this.audio_metadata_.channel_config_code,t.codec="opus",t.originalCodec="opus",t.config=void 0,t.refSampleDuration=20):"mp3"===this.audio_metadata_.codec&&(t.audioSampleRate=this.audio_metadata_.sample_rate,t.channelCount=this.audio_metadata_.channel_count,t.codec="mp3",t.originalCodec="mp3",t.config=void 0);0==this.audio_init_segment_dispatched_&&r.a.v(this.TAG,"Generated first AudioSpecificConfig for mimeType: "+t.codec),this.onTrackMetadata("audio",t),this.audio_init_segment_dispatched_=!0,this.video_metadata_changed_=!1;var o=this.media_info_;o.hasAudio=!0,o.audioCodec=t.originalCodec,o.audioSampleRate=t.audioSampleRate,o.audioChannelCount=t.channelCount,o.hasVideo&&o.videoCodec?o.mimeType='video/mp2t; codecs="'+o.videoCodec+","+o.audioCodec+'"':o.mimeType='video/mp2t; codecs="'+o.audioCodec+'"',o.isComplete()&&this.onMediaInfo(o)},t.prototype.dispatchPESPrivateDataDescriptor=function(e,t,i){var n=new W;n.pid=e,n.stream_type=t,n.descriptor=i,this.onPESPrivateDataDescriptor&&this.onPESPrivateDataDescriptor(n)},t.prototype.parsePESPrivateDataPayload=function(e,t,i,n,a){var r=new K;if(r.pid=n,r.stream_id=a,r.len=e.byteLength,r.data=e,null!=t){var s=Math.floor(t/this.timescale_);r.pts=s}else r.nearest_pts=this.aac_last_sample_pts_;if(null!=i){var o=Math.floor(i/this.timescale_);r.dts=o}this.onPESPrivateData&&this.onPESPrivateData(r)},t.prototype.parseTimedID3MetadataPayload=function(e,t,i,n,a){var r=new K;if(r.pid=n,r.stream_id=a,r.len=e.byteLength,r.data=e,null!=t){var s=Math.floor(t/this.timescale_);r.pts=s}if(null!=i){var o=Math.floor(i/this.timescale_);r.dts=o}this.onTimedID3Metadata&&this.onTimedID3Metadata(r)},t.prototype.parseSMPTE2038MetadataPayload=function(e,t,i,n,a){var r=new ue;if(r.pid=n,r.stream_id=a,r.len=e.byteLength,r.data=e,null!=t){var s=Math.floor(t/this.timescale_);r.pts=s}if(r.nearest_pts=this.aac_last_sample_pts_,null!=i){var o=Math.floor(i/this.timescale_);r.dts=o}r.ancillaries=function(e){for(var t=new f(e),i=0,n=[];;){if(i+=6,0!==t.readBits(6))break;var a=t.readBool();i+=1;var r=t.readBits(11);i+=11;var s=t.readBits(12);i+=12;var o=255&t.readBits(10);i+=10;var d=255&t.readBits(10);i+=10;var _=255&t.readBits(10);i+=10;for(var h=new Uint8Array(_),c=0;c<_;c++){var u=255&t.readBits(10);i+=10,h[c]=u}t.readBits(10);i+=10;var l="User Defined";65===o?7===d&&(l="SCTE-104"):95===o?220===d?l="ARIB STD-B37 (1SEG)":221===d?l="ARIB STD-B37 (ANALOG)":222===d?l="ARIB STD-B37 (SD)":223===d&&(l="ARIB STD-B37 (HD)"):97===o&&(1===d?l="EIA-708":2===d&&(l="EIA-608")),n.push({yc_indicator:a,line_number:r,horizontal_offset:s,did:o,sdid:d,user_data:h,description:l,information:{}}),t.readBits(8-(i-Math.floor(i/8))%8),i+=(8-(i-Math.floor(i/8)))%8}return t.destroy(),t=null,n}(e),this.onSMPTE2038Metadata&&this.onSMPTE2038Metadata(r)},t}(R),Se=function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),a=0;for(t=0;t<i;t++)for(var r=arguments[t],s=0,o=r.length;s<o;s++,a++)n[a]=r[s];return n},Ee=function(){function e(){}return e.init=function(){for(var t in e.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],hvc1:[],hvcC:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[],".mp3":[],Opus:[],dOps:[],"ac-3":[],dac3:[]},e.types)e.types.hasOwnProperty(t)&&(e.types[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);var i=e.constants={};i.FTYP=new Uint8Array([105,115,111,109,0,0,0,1,105,115,111,109,97,118,99,49]),i.STSD_PREFIX=new Uint8Array([0,0,0,0,0,0,0,1]),i.STTS=new Uint8Array([0,0,0,0,0,0,0,0]),i.STSC=i.STCO=i.STTS,i.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),i.HDLR_VIDEO=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),i.HDLR_AUDIO=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]),i.DREF=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),i.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),i.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0])},e.box=function(e){for(var t=8,i=null,n=Array.prototype.slice.call(arguments,1),a=n.length,r=0;r<a;r++)t+=n[r].byteLength;(i=new Uint8Array(t))[0]=t>>>24&255,i[1]=t>>>16&255,i[2]=t>>>8&255,i[3]=255&t,i.set(e,4);var s=8;for(r=0;r<a;r++)i.set(n[r],s),s+=n[r].byteLength;return i},e.generateInitSegment=function(t){var i=e.box(e.types.ftyp,e.constants.FTYP),n=e.moov(t),a=new Uint8Array(i.byteLength+n.byteLength);return a.set(i,0),a.set(n,i.byteLength),a},e.moov=function(t){var i=e.mvhd(t.timescale,t.duration),n=e.trak(t),a=e.mvex(t);return e.box(e.types.moov,i,n,a)},e.mvhd=function(t,i){return e.box(e.types.mvhd,new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,t>>>24&255,t>>>16&255,t>>>8&255,255&t,i>>>24&255,i>>>16&255,i>>>8&255,255&i,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]))},e.trak=function(t){return e.box(e.types.trak,e.tkhd(t),e.mdia(t))},e.tkhd=function(t){var i=t.id,n=t.duration,a=t.presentWidth,r=t.presentHeight;return e.box(e.types.tkhd,new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,i>>>24&255,i>>>16&255,i>>>8&255,255&i,0,0,0,0,n>>>24&255,n>>>16&255,n>>>8&255,255&n,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,a>>>8&255,255&a,0,0,r>>>8&255,255&r,0,0]))},e.mdia=function(t){return e.box(e.types.mdia,e.mdhd(t),e.hdlr(t),e.minf(t))},e.mdhd=function(t){var i=t.timescale,n=t.duration;return e.box(e.types.mdhd,new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,i>>>24&255,i>>>16&255,i>>>8&255,255&i,n>>>24&255,n>>>16&255,n>>>8&255,255&n,85,196,0,0]))},e.hdlr=function(t){var i=null;return i="audio"===t.type?e.constants.HDLR_AUDIO:e.constants.HDLR_VIDEO,e.box(e.types.hdlr,i)},e.minf=function(t){var i=null;return i="audio"===t.type?e.box(e.types.smhd,e.constants.SMHD):e.box(e.types.vmhd,e.constants.VMHD),e.box(e.types.minf,i,e.dinf(),e.stbl(t))},e.dinf=function(){return e.box(e.types.dinf,e.box(e.types.dref,e.constants.DREF))},e.stbl=function(t){return e.box(e.types.stbl,e.stsd(t),e.box(e.types.stts,e.constants.STTS),e.box(e.types.stsc,e.constants.STSC),e.box(e.types.stsz,e.constants.STSZ),e.box(e.types.stco,e.constants.STCO))},e.stsd=function(t){return"audio"===t.type?"mp3"===t.codec?e.box(e.types.stsd,e.constants.STSD_PREFIX,e.mp3(t)):"ac-3"===t.codec?e.box(e.types.stsd,e.constants.STSD_PREFIX,e.ac3(t)):"opus"===t.codec?e.box(e.types.stsd,e.constants.STSD_PREFIX,e.Opus(t)):e.box(e.types.stsd,e.constants.STSD_PREFIX,e.mp4a(t)):"video"===t.type&&t.codec.startsWith("hvc1")?e.box(e.types.stsd,e.constants.STSD_PREFIX,e.hvc1(t)):e.box(e.types.stsd,e.constants.STSD_PREFIX,e.avc1(t))},e.mp3=function(t){var i=t.channelCount,n=t.audioSampleRate,a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,i,0,16,0,0,0,0,n>>>8&255,255&n,0,0]);return e.box(e.types[".mp3"],a)},e.mp4a=function(t){var i=t.channelCount,n=t.audioSampleRate,a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,i,0,16,0,0,0,0,n>>>8&255,255&n,0,0]);return e.box(e.types.mp4a,a,e.esds(t))},e.ac3=function(t){var i=t.channelCount,n=t.audioSampleRate,a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,i,0,16,0,0,0,0,n>>>8&255,255&n,0,0]);return e.box(e.types["ac-3"],a,e.box(e.types.dac3,new Uint8Array(t.config)))},e.esds=function(t){var i=t.config||[],n=i.length,a=new Uint8Array([0,0,0,0,3,23+n,0,1,0,4,15+n,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([n]).concat(i).concat([6,1,2]));return e.box(e.types.esds,a)},e.Opus=function(t){var i=t.channelCount,n=t.audioSampleRate,a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,i,0,16,0,0,0,0,n>>>8&255,255&n,0,0]);return e.box(e.types.Opus,a,e.dOps(t))},e.dOps=function(t){var i=t.channelCount,n=t.channelConfigCode,a=t.audioSampleRate;if(t.config)return e.box(e.types.dOps,s);var r=[];switch(n){case 1:case 2:r=[0];break;case 0:r=[255,1,1,0,1];break;case 128:r=[255,2,0,0,1];break;case 3:r=[1,2,1,0,2,1];break;case 4:r=[1,2,2,0,1,2,3];break;case 5:r=[1,3,2,0,4,1,2,3];break;case 6:r=[1,4,2,0,4,1,2,3,5];break;case 7:r=[1,4,2,0,4,1,2,3,5,6];break;case 8:r=[1,5,3,0,6,1,2,3,4,5,7];break;case 130:r=[1,1,2,0,1];break;case 131:r=[1,1,3,0,1,2];break;case 132:r=[1,1,4,0,1,2,3];break;case 133:r=[1,1,5,0,1,2,3,4];break;case 134:r=[1,1,6,0,1,2,3,4,5];break;case 135:r=[1,1,7,0,1,2,3,4,5,6];break;case 136:r=[1,1,8,0,1,2,3,4,5,6,7]}var s=new Uint8Array(Se([0,i,0,0,a>>>24&255,a>>>17&255,a>>>8&255,a>>>0&255,0,0],r));return e.box(e.types.dOps,s)},e.avc1=function(t){var i=t.avcc,n=t.codecWidth,a=t.codecHeight,r=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,n>>>8&255,255&n,a>>>8&255,255&a,0,72,0,0,0,72,0,0,0,0,0,0,0,1,10,120,113,113,47,102,108,118,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,255,255]);return e.box(e.types.avc1,r,e.box(e.types.avcC,i))},e.hvc1=function(t){var i=t.hvcc,n=t.codecWidth,a=t.codecHeight,r=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,n>>>8&255,255&n,a>>>8&255,255&a,0,72,0,0,0,72,0,0,0,0,0,0,0,1,10,120,113,113,47,102,108,118,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,255,255]);return e.box(e.types.hvc1,r,e.box(e.types.hvcC,i))},e.mvex=function(t){return e.box(e.types.mvex,e.trex(t))},e.trex=function(t){var i=t.id,n=new Uint8Array([0,0,0,0,i>>>24&255,i>>>16&255,i>>>8&255,255&i,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]);return e.box(e.types.trex,n)},e.moof=function(t,i){return e.box(e.types.moof,e.mfhd(t.sequenceNumber),e.traf(t,i))},e.mfhd=function(t){var i=new Uint8Array([0,0,0,0,t>>>24&255,t>>>16&255,t>>>8&255,255&t]);return e.box(e.types.mfhd,i)},e.traf=function(t,i){var n=t.id,a=e.box(e.types.tfhd,new Uint8Array([0,0,0,0,n>>>24&255,n>>>16&255,n>>>8&255,255&n])),r=e.box(e.types.tfdt,new Uint8Array([0,0,0,0,i>>>24&255,i>>>16&255,i>>>8&255,255&i])),s=e.sdtp(t),o=e.trun(t,s.byteLength+16+16+8+16+8+8);return e.box(e.types.traf,a,r,o,s)},e.sdtp=function(t){for(var i=t.samples||[],n=i.length,a=new Uint8Array(4+n),r=0;r<n;r++){var s=i[r].flags;a[r+4]=s.isLeading<<6|s.dependsOn<<4|s.isDependedOn<<2|s.hasRedundancy}return e.box(e.types.sdtp,a)},e.trun=function(t,i){var n=t.samples||[],a=n.length,r=12+16*a,s=new Uint8Array(r);i+=8+r,s.set([0,0,15,1,a>>>24&255,a>>>16&255,a>>>8&255,255&a,i>>>24&255,i>>>16&255,i>>>8&255,255&i],0);for(var o=0;o<a;o++){var d=n[o].duration,_=n[o].size,h=n[o].flags,c=n[o].cts;s.set([d>>>24&255,d>>>16&255,d>>>8&255,255&d,_>>>24&255,_>>>16&255,_>>>8&255,255&_,h.isLeading<<2|h.dependsOn,h.isDependedOn<<6|h.hasRedundancy<<4|h.isNonSync,0,0,c>>>24&255,c>>>16&255,c>>>8&255,255&c],12+16*o)}return e.box(e.types.trun,s)},e.mdat=function(t){return e.box(e.types.mdat,t)},e}();Ee.init();var Ae=Ee,Re=function(){function e(){}return e.getSilentFrame=function(e,t){if("mp4a.40.2"===e){if(1===t)return new Uint8Array([0,200,0,128,35,128]);if(2===t)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224])}else{if(1===t)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}return null},e}(),Te=i(7),Le=function(){function e(e){this.TAG="MP4Remuxer",this._config=e,this._isLive=!0===e.isLive,this._dtsBase=-1,this._dtsBaseInited=!1,this._audioDtsBase=1/0,this._videoDtsBase=1/0,this._audioNextDts=void 0,this._videoNextDts=void 0,this._audioStashedLastSample=null,this._videoStashedLastSample=null,this._audioMeta=null,this._videoMeta=null,this._audioSegmentInfoList=new Te.c("audio"),this._videoSegmentInfoList=new Te.c("video"),this._onInitSegment=null,this._onMediaSegment=null,this._forceFirstIDR=!(!s.a.chrome||!(s.a.version.major<50||50===s.a.version.major&&s.a.version.build<2661)),this._fillSilentAfterSeek=s.a.msedge||s.a.msie,this._mp3UseMpegAudio=!s.a.firefox,this._fillAudioTimestampGap=this._config.fixAudioTimestampGap}return e.prototype.destroy=function(){this._dtsBase=-1,this._dtsBaseInited=!1,this._audioMeta=null,this._videoMeta=null,this._audioSegmentInfoList.clear(),this._audioSegmentInfoList=null,this._videoSegmentInfoList.clear(),this._videoSegmentInfoList=null,this._onInitSegment=null,this._onMediaSegment=null},e.prototype.bindDataSource=function(e){return e.onDataAvailable=this.remux.bind(this),e.onTrackMetadata=this._onTrackMetadataReceived.bind(this),this},Object.defineProperty(e.prototype,"onInitSegment",{get:function(){return this._onInitSegment},set:function(e){this._onInitSegment=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onMediaSegment",{get:function(){return this._onMediaSegment},set:function(e){this._onMediaSegment=e},enumerable:!1,configurable:!0}),e.prototype.insertDiscontinuity=function(){this._audioNextDts=this._videoNextDts=void 0},e.prototype.seek=function(e){this._audioStashedLastSample=null,this._videoStashedLastSample=null,this._videoSegmentInfoList.clear(),this._audioSegmentInfoList.clear()},e.prototype.remux=function(e,t){if(!this._onMediaSegment)throw new c.a("MP4Remuxer: onMediaSegment callback must be specificed!");this._dtsBaseInited||this._calculateDtsBase(e,t),t&&this._remuxVideo(t),e&&this._remuxAudio(e)},e.prototype._onTrackMetadataReceived=function(e,t){var i=null,n="mp4",a=t.codec;if("audio"===e)this._audioMeta=t,"mp3"===t.codec&&this._mp3UseMpegAudio?(n="mpeg",a="",i=new Uint8Array):i=Ae.generateInitSegment(t);else{if("video"!==e)return;this._videoMeta=t,i=Ae.generateInitSegment(t)}if(!this._onInitSegment)throw new c.a("MP4Remuxer: onInitSegment callback must be specified!");this._onInitSegment(e,{type:e,data:i.buffer,codec:a,container:e+"/"+n,mediaDuration:t.duration})},e.prototype._calculateDtsBase=function(e,t){this._dtsBaseInited||(e&&e.samples&&e.samples.length&&(this._audioDtsBase=e.samples[0].dts),t&&t.samples&&t.samples.length&&(this._videoDtsBase=t.samples[0].dts),this._dtsBase=Math.min(this._audioDtsBase,this._videoDtsBase),this._dtsBaseInited=!0)},e.prototype.getTimestampBase=function(){if(this._dtsBaseInited)return this._dtsBase},e.prototype.flushStashedSamples=function(){var e=this._videoStashedLastSample,t=this._audioStashedLastSample,i={type:"video",id:1,sequenceNumber:0,samples:[],length:0};null!=e&&(i.samples.push(e),i.length=e.length);var n={type:"audio",id:2,sequenceNumber:0,samples:[],length:0};null!=t&&(n.samples.push(t),n.length=t.length),this._videoStashedLastSample=null,this._audioStashedLastSample=null,this._remuxVideo(i,!0),this._remuxAudio(n,!0)},e.prototype._remuxAudio=function(e,t){if(null!=this._audioMeta){var i,n=e,a=n.samples,o=void 0,d=-1,_=this._audioMeta.refSampleDuration,h="mp3"===this._audioMeta.codec&&this._mp3UseMpegAudio,c=this._dtsBaseInited&&void 0===this._audioNextDts,u=!1;if(a&&0!==a.length&&(1!==a.length||t)){var l=0,f=null,p=0;h?(l=0,p=n.length):(l=8,p=8+n.length);var m=null;if(a.length>1&&(p-=(m=a.pop()).length),null!=this._audioStashedLastSample){var g=this._audioStashedLastSample;this._audioStashedLastSample=null,a.unshift(g),p+=g.length}null!=m&&(this._audioStashedLastSample=m);var v=a[0].dts-this._dtsBase;if(this._audioNextDts)o=v-this._audioNextDts;else if(this._audioSegmentInfoList.isEmpty())o=0,this._fillSilentAfterSeek&&!this._videoSegmentInfoList.isEmpty()&&"mp3"!==this._audioMeta.originalCodec&&(u=!0);else{var y=this._audioSegmentInfoList.getLastSampleBefore(v);if(null!=y){var b=v-(y.originalDts+y.duration);b<=3&&(b=0),o=v-(y.dts+y.duration+b)}else o=0}if(u){var S=v-o,E=this._videoSegmentInfoList.getLastSegmentBefore(v);if(null!=E&&E.beginDts<S){if(O=Re.getSilentFrame(this._audioMeta.originalCodec,this._audioMeta.channelCount)){var A=E.beginDts,R=S-E.beginDts;r.a.v(this.TAG,"InsertPrefixSilentAudio: dts: "+A+", duration: "+R),a.unshift({unit:O,dts:A,pts:A}),p+=O.byteLength}}else u=!1}for(var T=[],L=0;L<a.length;L++){var w=(g=a[L]).unit,k=g.dts-this._dtsBase,D=(A=k,!1),C=null,B=0;if(!(k<-.001)){if("mp3"!==this._audioMeta.codec){var I=k;if(this._audioNextDts&&(I=this._audioNextDts),(o=k-I)<=-3*_){r.a.w(this.TAG,"Dropping 1 audio frame (originalDts: "+k+" ms ,curRefDts: "+I+" ms)  due to dtsCorrection: "+o+" ms overlap.");continue}if(o>=3*_&&this._fillAudioTimestampGap&&!s.a.safari){D=!0;var O,P=Math.floor(o/_);r.a.w(this.TAG,"Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.\noriginalDts: "+k+" ms, curRefDts: "+I+" ms, dtsCorrection: "+Math.round(o)+" ms, generate: "+P+" frames"),A=Math.floor(I),B=Math.floor(I+_)-A,null==(O=Re.getSilentFrame(this._audioMeta.originalCodec,this._audioMeta.channelCount))&&(r.a.w(this.TAG,"Unable to generate silent frame for "+this._audioMeta.originalCodec+" with "+this._audioMeta.channelCount+" channels, repeat last frame"),O=w),C=[];for(var M=0;M<P;M++){I+=_;var x=Math.floor(I),U=Math.floor(I+_)-x,N={dts:x,pts:x,cts:0,unit:O,size:O.byteLength,duration:U,originalDts:k,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0}};C.push(N),p+=N.size}this._audioNextDts=I+_}else A=Math.floor(I),B=Math.floor(I+_)-A,this._audioNextDts=I+_}else{if(A=k-o,L!==a.length-1)B=a[L+1].dts-this._dtsBase-o-A;else if(null!=m)B=m.dts-this._dtsBase-o-A;else B=T.length>=1?T[T.length-1].duration:Math.floor(_);this._audioNextDts=A+B}-1===d&&(d=A),T.push({dts:A,pts:A,cts:0,unit:g.unit,size:g.unit.byteLength,duration:B,originalDts:k,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0}}),D&&T.push.apply(T,C)}}if(0===T.length)return n.samples=[],void(n.length=0);h?f=new Uint8Array(p):((f=new Uint8Array(p))[0]=p>>>24&255,f[1]=p>>>16&255,f[2]=p>>>8&255,f[3]=255&p,f.set(Ae.types.mdat,4));for(L=0;L<T.length;L++){w=T[L].unit;f.set(w,l),l+=w.byteLength}var G=T[T.length-1];i=G.dts+G.duration;var V=new Te.b;V.beginDts=d,V.endDts=i,V.beginPts=d,V.endPts=i,V.originalBeginDts=T[0].originalDts,V.originalEndDts=G.originalDts+G.duration,V.firstSample=new Te.d(T[0].dts,T[0].pts,T[0].duration,T[0].originalDts,!1),V.lastSample=new Te.d(G.dts,G.pts,G.duration,G.originalDts,!1),this._isLive||this._audioSegmentInfoList.append(V),n.samples=T,n.sequenceNumber++;var F=null;F=h?new Uint8Array:Ae.moof(n,d),n.samples=[],n.length=0;var j={type:"audio",data:this._mergeBoxes(F,f).buffer,sampleCount:T.length,info:V};h&&c&&(j.timestampOffset=d),this._onMediaSegment("audio",j)}}},e.prototype._remuxVideo=function(e,t){if(null!=this._videoMeta){var i,n,a=e,r=a.samples,s=void 0,o=-1,d=-1;if(r&&0!==r.length&&(1!==r.length||t)){var _=8,h=null,c=8+e.length,u=null;if(r.length>1&&(c-=(u=r.pop()).length),null!=this._videoStashedLastSample){var l=this._videoStashedLastSample;this._videoStashedLastSample=null,r.unshift(l),c+=l.length}null!=u&&(this._videoStashedLastSample=u);var f=r[0].dts-this._dtsBase;if(this._videoNextDts)s=f-this._videoNextDts;else if(this._videoSegmentInfoList.isEmpty())s=0;else{var p=this._videoSegmentInfoList.getLastSampleBefore(f);if(null!=p){var m=f-(p.originalDts+p.duration);m<=3&&(m=0),s=f-(p.dts+p.duration+m)}else s=0}for(var g=new Te.b,v=[],y=0;y<r.length;y++){var b=(l=r[y]).dts-this._dtsBase,S=l.isKeyframe,E=b-s,A=l.cts,R=E+A;-1===o&&(o=E,d=R);var T=0;if(y!==r.length-1)T=r[y+1].dts-this._dtsBase-s-E;else if(null!=u)T=u.dts-this._dtsBase-s-E;else T=v.length>=1?v[v.length-1].duration:Math.floor(this._videoMeta.refSampleDuration);if(S){var L=new Te.d(E,R,T,l.dts,!0);L.fileposition=l.fileposition,g.appendSyncPoint(L)}v.push({dts:E,pts:R,cts:A,units:l.units,size:l.length,isKeyframe:S,duration:T,originalDts:b,flags:{isLeading:0,dependsOn:S?2:1,isDependedOn:S?1:0,hasRedundancy:0,isNonSync:S?0:1}})}(h=new Uint8Array(c))[0]=c>>>24&255,h[1]=c>>>16&255,h[2]=c>>>8&255,h[3]=255&c,h.set(Ae.types.mdat,4);for(y=0;y<v.length;y++)for(var w=v[y].units;w.length;){var k=w.shift().data;h.set(k,_),_+=k.byteLength}var D=v[v.length-1];if(i=D.dts+D.duration,n=D.pts+D.duration,this._videoNextDts=i,g.beginDts=o,g.endDts=i,g.beginPts=d,g.endPts=n,g.originalBeginDts=v[0].originalDts,g.originalEndDts=D.originalDts+D.duration,g.firstSample=new Te.d(v[0].dts,v[0].pts,v[0].duration,v[0].originalDts,v[0].isKeyframe),g.lastSample=new Te.d(D.dts,D.pts,D.duration,D.originalDts,D.isKeyframe),this._isLive||this._videoSegmentInfoList.append(g),a.samples=v,a.sequenceNumber++,this._forceFirstIDR){var C=v[0].flags;C.dependsOn=2,C.isNonSync=0}var B=Ae.moof(a,o);a.samples=[],a.length=0,this._onMediaSegment("video",{type:"video",data:this._mergeBoxes(B,h).buffer,sampleCount:v.length,info:g})}}},e.prototype._mergeBoxes=function(e,t){var i=new Uint8Array(e.byteLength+t.byteLength);return i.set(e,0),i.set(t,e.byteLength),i},e}(),we=i(11),ke=i(1),De=function(){function e(e,t){this.TAG="TransmuxingController",this._emitter=new a.a,this._config=t,e.segments||(e.segments=[{duration:e.duration,filesize:e.filesize,url:e.url}]),"boolean"!=typeof e.cors&&(e.cors=!0),"boolean"!=typeof e.withCredentials&&(e.withCredentials=!1),this._mediaDataSource=e,this._currentSegmentIndex=0;var i=0;this._mediaDataSource.segments.forEach((function(n){n.timestampBase=i,i+=n.duration,n.cors=e.cors,n.withCredentials=e.withCredentials,t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy)})),isNaN(i)||this._mediaDataSource.duration===i||(this._mediaDataSource.duration=i),this._mediaInfo=null,this._demuxer=null,this._remuxer=null,this._ioctl=null,this._pendingSeekTime=null,this._pendingResolveSeekPoint=null,this._statisticsReporter=null}return e.prototype.destroy=function(){this._mediaInfo=null,this._mediaDataSource=null,this._statisticsReporter&&this._disableStatisticsReporter(),this._ioctl&&(this._ioctl.destroy(),this._ioctl=null),this._demuxer&&(this._demuxer.destroy(),this._demuxer=null),this._remuxer&&(this._remuxer.destroy(),this._remuxer=null),this._emitter.removeAllListeners(),this._emitter=null},e.prototype.on=function(e,t){this._emitter.addListener(e,t)},e.prototype.off=function(e,t){this._emitter.removeListener(e,t)},e.prototype.start=function(){this._loadSegment(0),this._enableStatisticsReporter()},e.prototype._loadSegment=function(e,t){this._currentSegmentIndex=e;var i=this._mediaDataSource.segments[e],n=this._ioctl=new we.a(i,this._config,e);n.onError=this._onIOException.bind(this),n.onSeeked=this._onIOSeeked.bind(this),n.onComplete=this._onIOComplete.bind(this),n.onRedirect=this._onIORedirect.bind(this),n.onRecoveredEarlyEof=this._onIORecoveredEarlyEof.bind(this),t?this._demuxer.bindDataSource(this._ioctl):n.onDataArrival=this._onInitChunkArrival.bind(this),n.open(t)},e.prototype.stop=function(){this._internalAbort(),this._disableStatisticsReporter()},e.prototype._internalAbort=function(){this._ioctl&&(this._ioctl.destroy(),this._ioctl=null)},e.prototype.pause=function(){this._ioctl&&this._ioctl.isWorking()&&(this._ioctl.pause(),this._disableStatisticsReporter())},e.prototype.resume=function(){this._ioctl&&this._ioctl.isPaused()&&(this._ioctl.resume(),this._enableStatisticsReporter())},e.prototype.seek=function(e){if(null!=this._mediaInfo&&this._mediaInfo.isSeekable()){var t=this._searchSegmentIndexContains(e);if(t===this._currentSegmentIndex){var i=this._mediaInfo.segments[t];if(null==i)this._pendingSeekTime=e;else{var n=i.getNearestKeyframe(e);this._remuxer.seek(n.milliseconds),this._ioctl.seek(n.fileposition),this._pendingResolveSeekPoint=n.milliseconds}}else{var a=this._mediaInfo.segments[t];if(null==a)this._pendingSeekTime=e,this._internalAbort(),this._remuxer.seek(),this._remuxer.insertDiscontinuity(),this._loadSegment(t);else{n=a.getNearestKeyframe(e);this._internalAbort(),this._remuxer.seek(e),this._remuxer.insertDiscontinuity(),this._demuxer.resetMediaInfo(),this._demuxer.timestampBase=this._mediaDataSource.segments[t].timestampBase,this._loadSegment(t,n.fileposition),this._pendingResolveSeekPoint=n.milliseconds,this._reportSegmentMediaInfo(t)}}this._enableStatisticsReporter()}},e.prototype._searchSegmentIndexContains=function(e){for(var t=this._mediaDataSource.segments,i=t.length-1,n=0;n<t.length;n++)if(e<t[n].timestampBase){i=n-1;break}return i},e.prototype._onInitChunkArrival=function(e,t){var i=this,n=0;if(t>0)this._demuxer.bindDataSource(this._ioctl),this._demuxer.timestampBase=this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase,n=this._demuxer.parseChunks(e,t);else{var a=null;(a=A.probe(e)).match&&(this._setupFLVDemuxerRemuxer(a),n=this._demuxer.parseChunks(e,t)),a.match||a.needMoreData||(a=be.probe(e)).match&&(this._setupTSDemuxerRemuxer(a),n=this._demuxer.parseChunks(e,t)),a.match||a.needMoreData||(a=null,r.a.e(this.TAG,"Non MPEG-TS/FLV, Unsupported media type!"),Promise.resolve().then((function(){i._internalAbort()})),this._emitter.emit(ke.a.DEMUX_ERROR,m.a.FORMAT_UNSUPPORTED,"Non MPEG-TS/FLV, Unsupported media type!"))}return n},e.prototype._setupFLVDemuxerRemuxer=function(e){this._demuxer=new A(e,this._config),this._remuxer||(this._remuxer=new Le(this._config));var t=this._mediaDataSource;null==t.duration||isNaN(t.duration)||(this._demuxer.overridedDuration=t.duration),"boolean"==typeof t.hasAudio&&(this._demuxer.overridedHasAudio=t.hasAudio),"boolean"==typeof t.hasVideo&&(this._demuxer.overridedHasVideo=t.hasVideo),this._demuxer.timestampBase=t.segments[this._currentSegmentIndex].timestampBase,this._demuxer.onError=this._onDemuxException.bind(this),this._demuxer.onMediaInfo=this._onMediaInfo.bind(this),this._demuxer.onMetaDataArrived=this._onMetaDataArrived.bind(this),this._demuxer.onScriptDataArrived=this._onScriptDataArrived.bind(this),this._remuxer.bindDataSource(this._demuxer.bindDataSource(this._ioctl)),this._remuxer.onInitSegment=this._onRemuxerInitSegmentArrival.bind(this),this._remuxer.onMediaSegment=this._onRemuxerMediaSegmentArrival.bind(this)},e.prototype._setupTSDemuxerRemuxer=function(e){var t=this._demuxer=new be(e,this._config);this._remuxer||(this._remuxer=new Le(this._config)),t.onError=this._onDemuxException.bind(this),t.onMediaInfo=this._onMediaInfo.bind(this),t.onMetaDataArrived=this._onMetaDataArrived.bind(this),t.onTimedID3Metadata=this._onTimedID3Metadata.bind(this),t.onSMPTE2038Metadata=this._onSMPTE2038Metadata.bind(this),t.onSCTE35Metadata=this._onSCTE35Metadata.bind(this),t.onPESPrivateDataDescriptor=this._onPESPrivateDataDescriptor.bind(this),t.onPESPrivateData=this._onPESPrivateData.bind(this),this._remuxer.bindDataSource(this._demuxer),this._demuxer.bindDataSource(this._ioctl),this._remuxer.onInitSegment=this._onRemuxerInitSegmentArrival.bind(this),this._remuxer.onMediaSegment=this._onRemuxerMediaSegmentArrival.bind(this)},e.prototype._onMediaInfo=function(e){var t=this;null==this._mediaInfo&&(this._mediaInfo=Object.assign({},e),this._mediaInfo.keyframesIndex=null,this._mediaInfo.segments=[],this._mediaInfo.segmentCount=this._mediaDataSource.segments.length,Object.setPrototypeOf(this._mediaInfo,o.a.prototype));var i=Object.assign({},e);Object.setPrototypeOf(i,o.a.prototype),this._mediaInfo.segments[this._currentSegmentIndex]=i,this._reportSegmentMediaInfo(this._currentSegmentIndex),null!=this._pendingSeekTime&&Promise.resolve().then((function(){var e=t._pendingSeekTime;t._pendingSeekTime=null,t.seek(e)}))},e.prototype._onMetaDataArrived=function(e){this._emitter.emit(ke.a.METADATA_ARRIVED,e)},e.prototype._onScriptDataArrived=function(e){this._emitter.emit(ke.a.SCRIPTDATA_ARRIVED,e)},e.prototype._onTimedID3Metadata=function(e){var t=this._remuxer.getTimestampBase();null!=t&&(null!=e.pts&&(e.pts-=t),null!=e.dts&&(e.dts-=t),this._emitter.emit(ke.a.TIMED_ID3_METADATA_ARRIVED,e))},e.prototype._onSMPTE2038Metadata=function(e){var t=this._remuxer.getTimestampBase();null!=t&&(null!=e.pts&&(e.pts-=t),null!=e.dts&&(e.dts-=t),null!=e.nearest_pts&&(e.nearest_pts-=t),this._emitter.emit(ke.a.SMPTE2038_METADATA_ARRIVED,e))},e.prototype._onSCTE35Metadata=function(e){var t=this._remuxer.getTimestampBase();null!=t&&(null!=e.pts&&(e.pts-=t),null!=e.nearest_pts&&(e.nearest_pts-=t),this._emitter.emit(ke.a.SCTE35_METADATA_ARRIVED,e))},e.prototype._onPESPrivateDataDescriptor=function(e){this._emitter.emit(ke.a.PES_PRIVATE_DATA_DESCRIPTOR,e)},e.prototype._onPESPrivateData=function(e){var t=this._remuxer.getTimestampBase();null!=t&&(null!=e.pts&&(e.pts-=t),null!=e.nearest_pts&&(e.nearest_pts-=t),null!=e.dts&&(e.dts-=t),this._emitter.emit(ke.a.PES_PRIVATE_DATA_ARRIVED,e))},e.prototype._onIOSeeked=function(){this._remuxer.insertDiscontinuity()},e.prototype._onIOComplete=function(e){var t=e+1;t<this._mediaDataSource.segments.length?(this._internalAbort(),this._remuxer&&this._remuxer.flushStashedSamples(),this._loadSegment(t)):(this._remuxer&&this._remuxer.flushStashedSamples(),this._emitter.emit(ke.a.LOADING_COMPLETE),this._disableStatisticsReporter())},e.prototype._onIORedirect=function(e){var t=this._ioctl.extraData;this._mediaDataSource.segments[t].redirectedURL=e},e.prototype._onIORecoveredEarlyEof=function(){this._emitter.emit(ke.a.RECOVERED_EARLY_EOF)},e.prototype._onIOException=function(e,t){r.a.e(this.TAG,"IOException: type = "+e+", code = "+t.code+", msg = "+t.msg),this._emitter.emit(ke.a.IO_ERROR,e,t),this._disableStatisticsReporter()},e.prototype._onDemuxException=function(e,t){r.a.e(this.TAG,"DemuxException: type = "+e+", info = "+t),this._emitter.emit(ke.a.DEMUX_ERROR,e,t)},e.prototype._onRemuxerInitSegmentArrival=function(e,t){this._emitter.emit(ke.a.INIT_SEGMENT,e,t)},e.prototype._onRemuxerMediaSegmentArrival=function(e,t){if(null==this._pendingSeekTime&&(this._emitter.emit(ke.a.MEDIA_SEGMENT,e,t),null!=this._pendingResolveSeekPoint&&"video"===e)){var i=t.info.syncPoints,n=this._pendingResolveSeekPoint;this._pendingResolveSeekPoint=null,s.a.safari&&i.length>0&&i[0].originalDts===n&&(n=i[0].pts),this._emitter.emit(ke.a.RECOMMEND_SEEKPOINT,n)}},e.prototype._enableStatisticsReporter=function(){null==this._statisticsReporter&&(this._statisticsReporter=self.setInterval(this._reportStatisticsInfo.bind(this),this._config.statisticsInfoReportInterval))},e.prototype._disableStatisticsReporter=function(){this._statisticsReporter&&(self.clearInterval(this._statisticsReporter),this._statisticsReporter=null)},e.prototype._reportSegmentMediaInfo=function(e){var t=this._mediaInfo.segments[e],i=Object.assign({},t);i.duration=this._mediaInfo.duration,i.segmentCount=this._mediaInfo.segmentCount,delete i.segments,delete i.keyframesIndex,this._emitter.emit(ke.a.MEDIA_INFO,i)},e.prototype._reportStatisticsInfo=function(){var e={};e.url=this._ioctl.currentURL,e.hasRedirect=this._ioctl.hasRedirect,e.hasRedirect&&(e.redirectedURL=this._ioctl.currentRedirectedURL),e.speed=this._ioctl.currentSpeed,e.loaderType=this._ioctl.loaderType,e.currentSegmentIndex=this._currentSegmentIndex,e.totalSegmentCount=this._mediaDataSource.segments.length,this._emitter.emit(ke.a.STATISTICS_INFO,e)},e}();t.a=De},function(e,t,i){"use strict";var n,a=i(0),r=function(){function e(){this._firstCheckpoint=0,this._lastCheckpoint=0,this._intervalBytes=0,this._totalBytes=0,this._lastSecondBytes=0,self.performance&&self.performance.now?this._now=self.performance.now.bind(self.performance):this._now=Date.now}return e.prototype.reset=function(){this._firstCheckpoint=this._lastCheckpoint=0,this._totalBytes=this._intervalBytes=0,this._lastSecondBytes=0},e.prototype.addBytes=function(e){0===this._firstCheckpoint?(this._firstCheckpoint=this._now(),this._lastCheckpoint=this._firstCheckpoint,this._intervalBytes+=e,this._totalBytes+=e):this._now()-this._lastCheckpoint<1e3?(this._intervalBytes+=e,this._totalBytes+=e):(this._lastSecondBytes=this._intervalBytes,this._intervalBytes=e,this._totalBytes+=e,this._lastCheckpoint=this._now())},Object.defineProperty(e.prototype,"currentKBps",{get:function(){this.addBytes(0);var e=(this._now()-this._lastCheckpoint)/1e3;return 0==e&&(e=1),this._intervalBytes/e/1024},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lastSecondKBps",{get:function(){return this.addBytes(0),0!==this._lastSecondBytes?this._lastSecondBytes/1024:this._now()-this._lastCheckpoint>=500?this.currentKBps:0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"averageKBps",{get:function(){var e=(this._now()-this._firstCheckpoint)/1e3;return this._totalBytes/e/1024},enumerable:!1,configurable:!0}),e}(),s=i(2),o=i(4),d=i(3),_=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),h=function(e){function t(t,i){var n=e.call(this,"fetch-stream-loader")||this;return n.TAG="FetchStreamLoader",n._seekHandler=t,n._config=i,n._needStash=!0,n._requestAbort=!1,n._abortController=null,n._contentLength=null,n._receivedLength=0,n}return _(t,e),t.isSupported=function(){try{var e=o.a.msedge&&o.a.version.minor>=15048,t=!o.a.msedge||e;return self.fetch&&self.ReadableStream&&t}catch(e){return!1}},t.prototype.destroy=function(){this.isWorking()&&this.abort(),e.prototype.destroy.call(this)},t.prototype.open=function(e,t){var i=this;this._dataSource=e,this._range=t;var n=e.url;this._config.reuseRedirectedURL&&null!=e.redirectedURL&&(n=e.redirectedURL);var a=this._seekHandler.getConfig(n,t),r=new self.Headers;if("object"==typeof a.headers){var o=a.headers;for(var _ in o)o.hasOwnProperty(_)&&r.append(_,o[_])}var h={method:"GET",headers:r,mode:"cors",cache:"default",referrerPolicy:"no-referrer-when-downgrade"};if("object"==typeof this._config.headers)for(var _ in this._config.headers)r.append(_,this._config.headers[_]);!1===e.cors&&(h.mode="same-origin"),e.withCredentials&&(h.credentials="include"),e.referrerPolicy&&(h.referrerPolicy=e.referrerPolicy),self.AbortController&&(this._abortController=new self.AbortController,h.signal=this._abortController.signal),this._status=s.c.kConnecting,self.fetch(a.url,h).then((function(e){if(i._requestAbort)return i._status=s.c.kIdle,void e.body.cancel();if(e.ok&&e.status>=200&&e.status<=299){if(e.url!==a.url&&i._onURLRedirect){var t=i._seekHandler.removeURLParameters(e.url);i._onURLRedirect(t)}var n=e.headers.get("Content-Length");return null!=n&&(i._contentLength=parseInt(n),0!==i._contentLength&&i._onContentLengthKnown&&i._onContentLengthKnown(i._contentLength)),i._pump.call(i,e.body.getReader())}if(i._status=s.c.kError,!i._onError)throw new d.d("FetchStreamLoader: Http code invalid, "+e.status+" "+e.statusText);i._onError(s.b.HTTP_STATUS_CODE_INVALID,{code:e.status,msg:e.statusText})})).catch((function(e){if(!i._abortController||!i._abortController.signal.aborted){if(i._status=s.c.kError,!i._onError)throw e;i._onError(s.b.EXCEPTION,{code:-1,msg:e.message})}}))},t.prototype.abort=function(){if(this._requestAbort=!0,(this._status!==s.c.kBuffering||!o.a.chrome)&&this._abortController)try{this._abortController.abort()}catch(e){}},t.prototype._pump=function(e){var t=this;return e.read().then((function(i){if(i.done)if(null!==t._contentLength&&t._receivedLength<t._contentLength){t._status=s.c.kError;var n=s.b.EARLY_EOF,a={code:-1,msg:"Fetch stream meet Early-EOF"};if(!t._onError)throw new d.d(a.msg);t._onError(n,a)}else t._status=s.c.kComplete,t._onComplete&&t._onComplete(t._range.from,t._range.from+t._receivedLength-1);else{if(t._abortController&&t._abortController.signal.aborted)return void(t._status=s.c.kComplete);if(!0===t._requestAbort)return t._status=s.c.kComplete,e.cancel();t._status=s.c.kBuffering;var r=i.value.buffer,o=t._range.from+t._receivedLength;t._receivedLength+=r.byteLength,t._onDataArrival&&t._onDataArrival(r,o,t._receivedLength),t._pump(e)}})).catch((function(e){if(t._abortController&&t._abortController.signal.aborted)t._status=s.c.kComplete;else if(11!==e.code||!o.a.msedge){t._status=s.c.kError;var i=0,n=null;if(19!==e.code&&"network error"!==e.message||!(null===t._contentLength||null!==t._contentLength&&t._receivedLength<t._contentLength)?(i=s.b.EXCEPTION,n={code:e.code,msg:e.message}):(i=s.b.EARLY_EOF,n={code:e.code,msg:"Fetch stream meet Early-EOF"}),!t._onError)throw new d.d(n.msg);t._onError(i,n)}}))},t}(s.a),c=function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(t,i)};return function(t,i){function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),u=function(e){function t(t,i){var n=e.call(this,"xhr-moz-chunked-loader")||this;return n.TAG="MozChunkedLoader",n._seekHandler=t,n._config=i,n._needStash=!0,n._xhr=null,n._requestAbort=!1,n._contentLength=null,n._receivedLength=0,n}return c(t,e),t.isSupported=function(){try{var e=new XMLHttpRequest;return e.open("GET","https://example.com",!0),e.responseType="moz-chunked-arraybuffer","moz-chunked-arraybuffer"===e.responseType}catch(e){return a.a.w("MozChunkedLoader",e.message),!1}},t.prototype.destroy=function(){this.isWorking()&&this.abort(),this._xhr&&(this._xhr.onreadystatechange=null,this._xhr.onprogress=null,this._xhr.onloadend=null,this._xhr.onerror=null,this._xhr=null),e.prototype.destroy.call(this)},t.prototype.open=function(e,t){this._dataSource=e,this._range=t;var i=e.url;this._config.reuseRedirectedURL&&null!=e.redirectedURL&&(i=e.redirectedURL);var n=this._seekHandler.getConfig(i,t);this._requestURL=n.url;var a=this._xhr=new XMLHttpRequest;if(a.open("GET",n.url,!0),a.responseType="moz-chunked-arraybuffer",a.onreadystatechange=this._onReadyStateChange.bind(this),a.onprogress=this._onProgress.bind(this),a.onloadend=this._onLoadEnd.bind(this),a.onerror=this._onXhrError.bind(this),e.withCredentials&&(a.withCredentials=!0),"object"==typeof n.headers){var r=n.headers;for(var o in r)r.hasOwnProperty(o)&&a.setRequestHeader(o,r[o])}if("object"==typeof this._config.headers){r=this._config.headers;for(var o in r)r.hasOwnProperty(o)&&a.setRequestHeader(o,r[o])}this._status=s.c.kConnecting,a.send()},t.prototype.abort=function(){this._requestAbort=!0,this._xhr&&this._xhr.abort(),this._status=s.c.kComplete},t.prototype._onReadyStateChange=function(e){var t=e.target;if(2===t.readyState){if(null!=t.responseURL&&t.responseURL!==this._requestURL&&this._onURLRedirect){var i=this._seekHandler.removeURLParameters(t.responseURL);this._onURLRedirect(i)}if(0!==t.status&&(t.status<200||t.status>299)){if(this._status=s.c.kError,!this._onError)throw new d.d("MozChunkedLoader: Http code invalid, "+t.status+" "+t.statusText);this._onError(s.b.HTTP_STATUS_CODE_INVALID,{code:t.status,msg:t.statusText})}else this._status=s.c.kBuffering}},t.prototype._onProgress=function(e){if(this._status!==s.c.kError){null===this._contentLength&&null!==e.total&&0!==e.total&&(this._contentLength=e.total,this._onContentLengthKnown&&this._onContentLengthKnown(this._contentLength));var t=e.target.response,i=this._range.from+this._receivedLength;this._receivedLength+=t.byteLength,this._onDataArrival&&this._onDataArrival(t,i,this._receivedLength)}},t.prototype._onLoadEnd=function(e){!0!==this._requestAbort?this._status!==s.c.kError&&(this._status=s.c.kComplete,this._onComplete&&this._onComplete(this._range.from,this._range.from+this._receivedLength-1)):this._requestAbort=!1},t.prototype._onXhrError=function(e){this._status=s.c.kError;var t=0,i=null;if(this._contentLength&&e.loaded<this._contentLength?(t=s.b.EARLY_EOF,i={code:-1,msg:"Moz-Chunked stream meet Early-Eof"}):(t=s.b.EXCEPTION,i={code:-1,msg:e.constructor.name+" "+e.type}),!this._onError)throw new d.d(i.msg);this._onError(t,i)},t}(s.a),l=function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(t,i)};return function(t,i){function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),f=function(e){function t(t,i){var n=e.call(this,"xhr-range-loader")||this;return n.TAG="RangeLoader",n._seekHandler=t,n._config=i,n._needStash=!1,n._chunkSizeKBList=[128,256,384,512,768,1024,1536,2048,3072,4096,5120,6144,7168,8192],n._currentChunkSizeKB=384,n._currentSpeedNormalized=0,n._zeroSpeedChunkCount=0,n._xhr=null,n._speedSampler=new r,n._requestAbort=!1,n._waitForTotalLength=!1,n._totalLengthReceived=!1,n._currentRequestURL=null,n._currentRedirectedURL=null,n._currentRequestRange=null,n._totalLength=null,n._contentLength=null,n._receivedLength=0,n._lastTimeLoaded=0,n}return l(t,e),t.isSupported=function(){try{var e=new XMLHttpRequest;return e.open("GET","https://example.com",!0),e.responseType="arraybuffer","arraybuffer"===e.responseType}catch(e){return a.a.w("RangeLoader",e.message),!1}},t.prototype.destroy=function(){this.isWorking()&&this.abort(),this._xhr&&(this._xhr.onreadystatechange=null,this._xhr.onprogress=null,this._xhr.onload=null,this._xhr.onerror=null,this._xhr=null),e.prototype.destroy.call(this)},Object.defineProperty(t.prototype,"currentSpeed",{get:function(){return this._speedSampler.lastSecondKBps},enumerable:!1,configurable:!0}),t.prototype.open=function(e,t){this._dataSource=e,this._range=t,this._status=s.c.kConnecting;var i=!1;null!=this._dataSource.filesize&&0!==this._dataSource.filesize&&(i=!0,this._totalLength=this._dataSource.filesize),this._totalLengthReceived||i?this._openSubRange():(this._waitForTotalLength=!0,this._internalOpen(this._dataSource,{from:0,to:-1}))},t.prototype._openSubRange=function(){var e=1024*this._currentChunkSizeKB,t=this._range.from+this._receivedLength,i=t+e;null!=this._contentLength&&i-this._range.from>=this._contentLength&&(i=this._range.from+this._contentLength-1),this._currentRequestRange={from:t,to:i},this._internalOpen(this._dataSource,this._currentRequestRange)},t.prototype._internalOpen=function(e,t){this._lastTimeLoaded=0;var i=e.url;this._config.reuseRedirectedURL&&(null!=this._currentRedirectedURL?i=this._currentRedirectedURL:null!=e.redirectedURL&&(i=e.redirectedURL));var n=this._seekHandler.getConfig(i,t);this._currentRequestURL=n.url;var a=this._xhr=new XMLHttpRequest;if(a.open("GET",n.url,!0),a.responseType="arraybuffer",a.onreadystatechange=this._onReadyStateChange.bind(this),a.onprogress=this._onProgress.bind(this),a.onload=this._onLoad.bind(this),a.onerror=this._onXhrError.bind(this),e.withCredentials&&(a.withCredentials=!0),"object"==typeof n.headers){var r=n.headers;for(var s in r)r.hasOwnProperty(s)&&a.setRequestHeader(s,r[s])}if("object"==typeof this._config.headers){r=this._config.headers;for(var s in r)r.hasOwnProperty(s)&&a.setRequestHeader(s,r[s])}a.send()},t.prototype.abort=function(){this._requestAbort=!0,this._internalAbort(),this._status=s.c.kComplete},t.prototype._internalAbort=function(){this._xhr&&(this._xhr.onreadystatechange=null,this._xhr.onprogress=null,this._xhr.onload=null,this._xhr.onerror=null,this._xhr.abort(),this._xhr=null)},t.prototype._onReadyStateChange=function(e){var t=e.target;if(2===t.readyState){if(null!=t.responseURL){var i=this._seekHandler.removeURLParameters(t.responseURL);t.responseURL!==this._currentRequestURL&&i!==this._currentRedirectedURL&&(this._currentRedirectedURL=i,this._onURLRedirect&&this._onURLRedirect(i))}if(t.status>=200&&t.status<=299){if(this._waitForTotalLength)return;this._status=s.c.kBuffering}else{if(this._status=s.c.kError,!this._onError)throw new d.d("RangeLoader: Http code invalid, "+t.status+" "+t.statusText);this._onError(s.b.HTTP_STATUS_CODE_INVALID,{code:t.status,msg:t.statusText})}}},t.prototype._onProgress=function(e){if(this._status!==s.c.kError){if(null===this._contentLength){var t=!1;if(this._waitForTotalLength){this._waitForTotalLength=!1,this._totalLengthReceived=!0,t=!0;var i=e.total;this._internalAbort(),null!=i&0!==i&&(this._totalLength=i)}if(-1===this._range.to?this._contentLength=this._totalLength-this._range.from:this._contentLength=this._range.to-this._range.from+1,t)return void this._openSubRange();this._onContentLengthKnown&&this._onContentLengthKnown(this._contentLength)}var n=e.loaded-this._lastTimeLoaded;this._lastTimeLoaded=e.loaded,this._speedSampler.addBytes(n)}},t.prototype._normalizeSpeed=function(e){var t=this._chunkSizeKBList,i=t.length-1,n=0,a=0,r=i;if(e<t[0])return t[0];for(;a<=r;){if((n=a+Math.floor((r-a)/2))===i||e>=t[n]&&e<t[n+1])return t[n];t[n]<e?a=n+1:r=n-1}},t.prototype._onLoad=function(e){if(this._status!==s.c.kError)if(this._waitForTotalLength)this._waitForTotalLength=!1;else{this._lastTimeLoaded=0;var t=this._speedSampler.lastSecondKBps;if(0===t&&(this._zeroSpeedChunkCount++,this._zeroSpeedChunkCount>=3&&(t=this._speedSampler.currentKBps)),0!==t){var i=this._normalizeSpeed(t);this._currentSpeedNormalized!==i&&(this._currentSpeedNormalized=i,this._currentChunkSizeKB=i)}var n=e.target.response,a=this._range.from+this._receivedLength;this._receivedLength+=n.byteLength;var r=!1;null!=this._contentLength&&this._receivedLength<this._contentLength?this._openSubRange():r=!0,this._onDataArrival&&this._onDataArrival(n,a,this._receivedLength),r&&(this._status=s.c.kComplete,this._onComplete&&this._onComplete(this._range.from,this._range.from+this._receivedLength-1))}},t.prototype._onXhrError=function(e){this._status=s.c.kError;var t=0,i=null;if(this._contentLength&&this._receivedLength>0&&this._receivedLength<this._contentLength?(t=s.b.EARLY_EOF,i={code:-1,msg:"RangeLoader meet Early-Eof"}):(t=s.b.EXCEPTION,i={code:-1,msg:e.constructor.name+" "+e.type}),!this._onError)throw new d.d(i.msg);this._onError(t,i)},t}(s.a),p=function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(t,i)};return function(t,i){function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),m=function(e){function t(){var t=e.call(this,"websocket-loader")||this;return t.TAG="WebSocketLoader",t._needStash=!0,t._ws=null,t._requestAbort=!1,t._receivedLength=0,t}return p(t,e),t.isSupported=function(){try{return void 0!==self.WebSocket}catch(e){return!1}},t.prototype.destroy=function(){this._ws&&this.abort(),e.prototype.destroy.call(this)},t.prototype.open=function(e){try{var t=this._ws=new self.WebSocket(e.url);t.binaryType="arraybuffer",t.onopen=this._onWebSocketOpen.bind(this),t.onclose=this._onWebSocketClose.bind(this),t.onmessage=this._onWebSocketMessage.bind(this),t.onerror=this._onWebSocketError.bind(this),this._status=s.c.kConnecting}catch(e){this._status=s.c.kError;var i={code:e.code,msg:e.message};if(!this._onError)throw new d.d(i.msg);this._onError(s.b.EXCEPTION,i)}},t.prototype.abort=function(){var e=this._ws;!e||0!==e.readyState&&1!==e.readyState||(this._requestAbort=!0,e.close()),this._ws=null,this._status=s.c.kComplete},t.prototype._onWebSocketOpen=function(e){this._status=s.c.kBuffering},t.prototype._onWebSocketClose=function(e){!0!==this._requestAbort?(this._status=s.c.kComplete,this._onComplete&&this._onComplete(0,this._receivedLength-1)):this._requestAbort=!1},t.prototype._onWebSocketMessage=function(e){var t=this;if(e.data instanceof ArrayBuffer)this._dispatchArrayBuffer(e.data);else if(e.data instanceof Blob){var i=new FileReader;i.onload=function(){t._dispatchArrayBuffer(i.result)},i.readAsArrayBuffer(e.data)}else{this._status=s.c.kError;var n={code:-1,msg:"Unsupported WebSocket message type: "+e.data.constructor.name};if(!this._onError)throw new d.d(n.msg);this._onError(s.b.EXCEPTION,n)}},t.prototype._dispatchArrayBuffer=function(e){var t=e,i=this._receivedLength;this._receivedLength+=t.byteLength,this._onDataArrival&&this._onDataArrival(t,i,this._receivedLength)},t.prototype._onWebSocketError=function(e){this._status=s.c.kError;var t={code:e.code,msg:e.message};if(!this._onError)throw new d.d(t.msg);this._onError(s.b.EXCEPTION,t)},t}(s.a),g=function(){function e(e){this._zeroStart=e||!1}return e.prototype.getConfig=function(e,t){var i={};if(0!==t.from||-1!==t.to){var n=void 0;n=-1!==t.to?"bytes="+t.from.toString()+"-"+t.to.toString():"bytes="+t.from.toString()+"-",i.Range=n}else this._zeroStart&&(i.Range="bytes=0-");return{url:e,headers:i}},e.prototype.removeURLParameters=function(e){return e},e}(),v=function(){function e(e,t){this._startName=e,this._endName=t}return e.prototype.getConfig=function(e,t){var i=e;if(0!==t.from||-1!==t.to){var n=!0;-1===i.indexOf("?")&&(i+="?",n=!1),n&&(i+="&"),i+=this._startName+"="+t.from.toString(),-1!==t.to&&(i+="&"+this._endName+"="+t.to.toString())}return{url:i,headers:{}}},e.prototype.removeURLParameters=function(e){var t=e.split("?")[0],i=void 0,n=e.indexOf("?");-1!==n&&(i=e.substring(n+1));var a="";if(null!=i&&i.length>0)for(var r=i.split("&"),s=0;s<r.length;s++){var o=r[s].split("="),d=s>0;o[0]!==this._startName&&o[0]!==this._endName&&(d&&(a+="&"),a+=r[s])}return 0===a.length?t:t+"?"+a},e}(),y=function(){function e(e,t,i){this.TAG="IOController",this._config=t,this._extraData=i,this._stashInitialSize=65536,null!=t.stashInitialSize&&t.stashInitialSize>0&&(this._stashInitialSize=t.stashInitialSize),this._stashUsed=0,this._stashSize=this._stashInitialSize,this._bufferSize=3145728,this._stashBuffer=new ArrayBuffer(this._bufferSize),this._stashByteStart=0,this._enableStash=!0,!1===t.enableStashBuffer&&(this._enableStash=!1),this._loader=null,this._loaderClass=null,this._seekHandler=null,this._dataSource=e,this._isWebSocketURL=/wss?:\/\/(.+?)/.test(e.url),this._refTotalLength=e.filesize?e.filesize:null,this._totalLength=this._refTotalLength,this._fullRequestFlag=!1,this._currentRange=null,this._redirectedURL=null,this._speedNormalized=0,this._speedSampler=new r,this._speedNormalizeList=[32,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096],this._isEarlyEofReconnecting=!1,this._paused=!1,this._resumeFrom=0,this._onDataArrival=null,this._onSeeked=null,this._onError=null,this._onComplete=null,this._onRedirect=null,this._onRecoveredEarlyEof=null,this._selectSeekHandler(),this._selectLoader(),this._createLoader()}return e.prototype.destroy=function(){this._loader.isWorking()&&this._loader.abort(),this._loader.destroy(),this._loader=null,this._loaderClass=null,this._dataSource=null,this._stashBuffer=null,this._stashUsed=this._stashSize=this._bufferSize=this._stashByteStart=0,this._currentRange=null,this._speedSampler=null,this._isEarlyEofReconnecting=!1,this._onDataArrival=null,this._onSeeked=null,this._onError=null,this._onComplete=null,this._onRedirect=null,this._onRecoveredEarlyEof=null,this._extraData=null},e.prototype.isWorking=function(){return this._loader&&this._loader.isWorking()&&!this._paused},e.prototype.isPaused=function(){return this._paused},Object.defineProperty(e.prototype,"status",{get:function(){return this._loader.status},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"extraData",{get:function(){return this._extraData},set:function(e){this._extraData=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onDataArrival",{get:function(){return this._onDataArrival},set:function(e){this._onDataArrival=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onSeeked",{get:function(){return this._onSeeked},set:function(e){this._onSeeked=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onError",{get:function(){return this._onError},set:function(e){this._onError=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onComplete",{get:function(){return this._onComplete},set:function(e){this._onComplete=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onRedirect",{get:function(){return this._onRedirect},set:function(e){this._onRedirect=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onRecoveredEarlyEof",{get:function(){return this._onRecoveredEarlyEof},set:function(e){this._onRecoveredEarlyEof=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentURL",{get:function(){return this._dataSource.url},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasRedirect",{get:function(){return null!=this._redirectedURL||null!=this._dataSource.redirectedURL},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentRedirectedURL",{get:function(){return this._redirectedURL||this._dataSource.redirectedURL},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentSpeed",{get:function(){return this._loaderClass===f?this._loader.currentSpeed:this._speedSampler.lastSecondKBps},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"loaderType",{get:function(){return this._loader.type},enumerable:!1,configurable:!0}),e.prototype._selectSeekHandler=function(){var e=this._config;if("range"===e.seekType)this._seekHandler=new g(this._config.rangeLoadZeroStart);else if("param"===e.seekType){var t=e.seekParamStart||"bstart",i=e.seekParamEnd||"bend";this._seekHandler=new v(t,i)}else{if("custom"!==e.seekType)throw new d.b("Invalid seekType in config: "+e.seekType);if("function"!=typeof e.customSeekHandler)throw new d.b("Custom seekType specified in config but invalid customSeekHandler!");this._seekHandler=new e.customSeekHandler}},e.prototype._selectLoader=function(){if(null!=this._config.customLoader)this._loaderClass=this._config.customLoader;else if(this._isWebSocketURL)this._loaderClass=m;else if(h.isSupported())this._loaderClass=h;else if(u.isSupported())this._loaderClass=u;else{if(!f.isSupported())throw new d.d("Your browser doesn't support xhr with arraybuffer responseType!");this._loaderClass=f}},e.prototype._createLoader=function(){this._loader=new this._loaderClass(this._seekHandler,this._config),!1===this._loader.needStashBuffer&&(this._enableStash=!1),this._loader.onContentLengthKnown=this._onContentLengthKnown.bind(this),this._loader.onURLRedirect=this._onURLRedirect.bind(this),this._loader.onDataArrival=this._onLoaderChunkArrival.bind(this),this._loader.onComplete=this._onLoaderComplete.bind(this),this._loader.onError=this._onLoaderError.bind(this)},e.prototype.open=function(e){this._currentRange={from:0,to:-1},e&&(this._currentRange.from=e),this._speedSampler.reset(),e||(this._fullRequestFlag=!0),this._loader.open(this._dataSource,Object.assign({},this._currentRange))},e.prototype.abort=function(){this._loader.abort(),this._paused&&(this._paused=!1,this._resumeFrom=0)},e.prototype.pause=function(){this.isWorking()&&(this._loader.abort(),0!==this._stashUsed?(this._resumeFrom=this._stashByteStart,this._currentRange.to=this._stashByteStart-1):this._resumeFrom=this._currentRange.to+1,this._stashUsed=0,this._stashByteStart=0,this._paused=!0)},e.prototype.resume=function(){if(this._paused){this._paused=!1;var e=this._resumeFrom;this._resumeFrom=0,this._internalSeek(e,!0)}},e.prototype.seek=function(e){this._paused=!1,this._stashUsed=0,this._stashByteStart=0,this._internalSeek(e,!0)},e.prototype._internalSeek=function(e,t){this._loader.isWorking()&&this._loader.abort(),this._flushStashBuffer(t),this._loader.destroy(),this._loader=null;var i={from:e,to:-1};this._currentRange={from:i.from,to:-1},this._speedSampler.reset(),this._stashSize=this._stashInitialSize,this._createLoader(),this._loader.open(this._dataSource,i),this._onSeeked&&this._onSeeked()},e.prototype.updateUrl=function(e){if(!e||"string"!=typeof e||0===e.length)throw new d.b("Url must be a non-empty string!");this._dataSource.url=e},e.prototype._expandBuffer=function(e){for(var t=this._stashSize;t+1048576<e;)t*=2;if((t+=1048576)!==this._bufferSize){var i=new ArrayBuffer(t);if(this._stashUsed>0){var n=new Uint8Array(this._stashBuffer,0,this._stashUsed);new Uint8Array(i,0,t).set(n,0)}this._stashBuffer=i,this._bufferSize=t}},e.prototype._normalizeSpeed=function(e){var t=this._speedNormalizeList,i=t.length-1,n=0,a=0,r=i;if(e<t[0])return t[0];for(;a<=r;){if((n=a+Math.floor((r-a)/2))===i||e>=t[n]&&e<t[n+1])return t[n];t[n]<e?a=n+1:r=n-1}},e.prototype._adjustStashSize=function(e){var t=0;(t=this._config.isLive?e/8:e<512?e:e>=512&&e<=1024?Math.floor(1.5*e):2*e)>8192&&(t=8192);var i=1024*t+1048576;this._bufferSize<i&&this._expandBuffer(i),this._stashSize=1024*t},e.prototype._dispatchChunks=function(e,t){return this._currentRange.to=t+e.byteLength-1,this._onDataArrival(e,t)},e.prototype._onURLRedirect=function(e){this._redirectedURL=e,this._onRedirect&&this._onRedirect(e)},e.prototype._onContentLengthKnown=function(e){e&&this._fullRequestFlag&&(this._totalLength=e,this._fullRequestFlag=!1)},e.prototype._onLoaderChunkArrival=function(e,t,i){if(!this._onDataArrival)throw new d.a("IOController: No existing consumer (onDataArrival) callback!");if(!this._paused){this._isEarlyEofReconnecting&&(this._isEarlyEofReconnecting=!1,this._onRecoveredEarlyEof&&this._onRecoveredEarlyEof()),this._speedSampler.addBytes(e.byteLength);var n=this._speedSampler.lastSecondKBps;if(0!==n){var a=this._normalizeSpeed(n);this._speedNormalized!==a&&(this._speedNormalized=a,this._adjustStashSize(a))}if(this._enableStash)if(0===this._stashUsed&&0===this._stashByteStart&&(this._stashByteStart=t),this._stashUsed+e.byteLength<=this._stashSize){(o=new Uint8Array(this._stashBuffer,0,this._stashSize)).set(new Uint8Array(e),this._stashUsed),this._stashUsed+=e.byteLength}else{o=new Uint8Array(this._stashBuffer,0,this._bufferSize);if(this._stashUsed>0){var r=this._stashBuffer.slice(0,this._stashUsed);if((_=this._dispatchChunks(r,this._stashByteStart))<r.byteLength){if(_>0){h=new Uint8Array(r,_);o.set(h,0),this._stashUsed=h.byteLength,this._stashByteStart+=_}}else this._stashUsed=0,this._stashByteStart+=_;this._stashUsed+e.byteLength>this._bufferSize&&(this._expandBuffer(this._stashUsed+e.byteLength),o=new Uint8Array(this._stashBuffer,0,this._bufferSize)),o.set(new Uint8Array(e),this._stashUsed),this._stashUsed+=e.byteLength}else{if((_=this._dispatchChunks(e,t))<e.byteLength)(s=e.byteLength-_)>this._bufferSize&&(this._expandBuffer(s),o=new Uint8Array(this._stashBuffer,0,this._bufferSize)),o.set(new Uint8Array(e,_),0),this._stashUsed+=s,this._stashByteStart=t+_}}else if(0===this._stashUsed){var s;if((_=this._dispatchChunks(e,t))<e.byteLength)(s=e.byteLength-_)>this._bufferSize&&this._expandBuffer(s),(o=new Uint8Array(this._stashBuffer,0,this._bufferSize)).set(new Uint8Array(e,_),0),this._stashUsed+=s,this._stashByteStart=t+_}else{var o,_;if(this._stashUsed+e.byteLength>this._bufferSize&&this._expandBuffer(this._stashUsed+e.byteLength),(o=new Uint8Array(this._stashBuffer,0,this._bufferSize)).set(new Uint8Array(e),this._stashUsed),this._stashUsed+=e.byteLength,(_=this._dispatchChunks(this._stashBuffer.slice(0,this._stashUsed),this._stashByteStart))<this._stashUsed&&_>0){var h=new Uint8Array(this._stashBuffer,_);o.set(h,0)}this._stashUsed-=_,this._stashByteStart+=_}}},e.prototype._flushStashBuffer=function(e){if(this._stashUsed>0){var t=this._stashBuffer.slice(0,this._stashUsed),i=this._dispatchChunks(t,this._stashByteStart),n=t.byteLength-i;if(i<t.byteLength){if(!e){if(i>0){var r=new Uint8Array(this._stashBuffer,0,this._bufferSize),s=new Uint8Array(t,i);r.set(s,0),this._stashUsed=s.byteLength,this._stashByteStart+=i}return 0}a.a.w(this.TAG,n+" bytes unconsumed data remain when flush buffer, dropped")}return this._stashUsed=0,this._stashByteStart=0,n}return 0},e.prototype._onLoaderComplete=function(e,t){this._flushStashBuffer(!0),this._onComplete&&this._onComplete(this._extraData)},e.prototype._onLoaderError=function(e,t){switch(a.a.e(this.TAG,"Loader error, code = "+t.code+", msg = "+t.msg),this._flushStashBuffer(!1),this._isEarlyEofReconnecting&&(this._isEarlyEofReconnecting=!1,e=s.b.UNRECOVERABLE_EARLY_EOF),e){case s.b.EARLY_EOF:if(!this._config.isLive&&this._totalLength){var i=this._currentRange.to+1;return void(i<this._totalLength&&(a.a.w(this.TAG,"Connection lost, trying reconnect..."),this._isEarlyEofReconnecting=!0,this._internalSeek(i,!1)))}e=s.b.UNRECOVERABLE_EARLY_EOF;break;case s.b.UNRECOVERABLE_EARLY_EOF:case s.b.CONNECTING_TIMEOUT:case s.b.HTTP_STATUS_CODE_INVALID:case s.b.EXCEPTION:}if(!this._onError)throw new d.d("IOException: "+t.msg);this._onError(e,t)},e}();t.a=y},function(e,t,i){"use strict";var n=function(){function e(){}return e.install=function(){Object.setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Object.assign=Object.assign||function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),i=1;i<arguments.length;i++){var n=arguments[i];if(null!=n)for(var a in n)n.hasOwnProperty(a)&&(t[a]=n[a])}return t},"function"!=typeof self.Promise&&i(15).polyfill()},e}();n.install(),t.a=n},function(e,t,i){function n(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.i=function(e){return e},i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var n=i(i.s=ENTRY_MODULE);return n.default||n}function a(e){return(e+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function r(e,t,n){var r={};r[n]=[];var s=t.toString(),o=s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);if(!o)return r;for(var d,_=o[1],h=new RegExp("(\\\\n|\\W)"+a(_)+"\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)","g");d=h.exec(s);)"dll-reference"!==d[3]&&r[n].push(d[3]);for(h=new RegExp("\\("+a(_)+'\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)',"g");d=h.exec(s);)e[d[2]]||(r[n].push(d[1]),e[d[2]]=i(d[1]).m),r[d[2]]=r[d[2]]||[],r[d[2]].push(d[4]);for(var c,u=Object.keys(r),l=0;l<u.length;l++)for(var f=0;f<r[u[l]].length;f++)c=r[u[l]][f],isNaN(1*c)||(r[u[l]][f]=1*r[u[l]][f]);return r}function s(e){return Object.keys(e).reduce((function(t,i){return t||e[i].length>0}),!1)}e.exports=function(e,t){t=t||{};var a={main:i.m},o=t.all?{main:Object.keys(a.main)}:function(e,t){for(var i={main:[t]},n={main:[]},a={main:{}};s(i);)for(var o=Object.keys(i),d=0;d<o.length;d++){var _=o[d],h=i[_].pop();if(a[_]=a[_]||{},!a[_][h]&&e[_][h]){a[_][h]=!0,n[_]=n[_]||[],n[_].push(h);for(var c=r(e,e[_][h],_),u=Object.keys(c),l=0;l<u.length;l++)i[u[l]]=i[u[l]]||[],i[u[l]]=i[u[l]].concat(c[u[l]])}}return n}(a,e),d="";Object.keys(o).filter((function(e){return"main"!==e})).forEach((function(e){for(var t=0;o[e][t];)t++;o[e].push(t),a[e][t]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",d=d+"var "+e+" = ("+n.toString().replace("ENTRY_MODULE",JSON.stringify(t))+")({"+o[e].map((function(t){return JSON.stringify(t)+": "+a[e][t].toString()})).join(",")+"});\n"})),d=d+"new (("+n.toString().replace("ENTRY_MODULE",JSON.stringify(e))+")({"+o.main.map((function(e){return JSON.stringify(e)+": "+a.main[e].toString()})).join(",")+"}))(self);";var _=new window.Blob([d],{type:"text/javascript"});if(t.bare)return _;var h=(window.URL||window.webkitURL||window.mozURL||window.msURL).createObjectURL(_),c=new window.Worker(h);return c.objectURL=h,c}},function(e,t,i){e.exports=i(19).default},function(e,t,i){(function(t,i){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */var n;n=function(){"use strict";function e(e){return"function"==typeof e}var n=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},a=0,r=void 0,s=void 0,o=function(e,t){f[a]=e,f[a+1]=t,2===(a+=2)&&(s?s(p):b())},d="undefined"!=typeof window?window:void 0,_=d||{},h=_.MutationObserver||_.WebKitMutationObserver,c="undefined"==typeof self&&void 0!==t&&"[object process]"==={}.toString.call(t),u="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function l(){var e=setTimeout;return function(){return e(p,1)}}var f=new Array(1e3);function p(){for(var e=0;e<a;e+=2)(0,f[e])(f[e+1]),f[e]=void 0,f[e+1]=void 0;a=0}var m,g,v,y,b=void 0;function S(e,t){var i=this,n=new this.constructor(R);void 0===n[A]&&P(n);var a=i._state;if(a){var r=arguments[a-1];o((function(){return I(a,n,r,i._result)}))}else C(i,n,e,t);return n}function E(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(R);return L(t,e),t}c?b=function(){return t.nextTick(p)}:h?(g=0,v=new h(p),y=document.createTextNode(""),v.observe(y,{characterData:!0}),b=function(){y.data=g=++g%2}):u?((m=new MessageChannel).port1.onmessage=p,b=function(){return m.port2.postMessage(0)}):b=void 0===d?function(){try{var e=Function("return this")().require("vertx");return void 0!==(r=e.runOnLoop||e.runOnContext)?function(){r(p)}:l()}catch(e){return l()}}():l();var A=Math.random().toString(36).substring(2);function R(){}function T(t,i,n){i.constructor===t.constructor&&n===S&&i.constructor.resolve===E?function(e,t){1===t._state?k(e,t._result):2===t._state?D(e,t._result):C(t,void 0,(function(t){return L(e,t)}),(function(t){return D(e,t)}))}(t,i):void 0===n?k(t,i):e(n)?function(e,t,i){o((function(e){var n=!1,a=function(e,t,i,n){try{e.call(t,i,n)}catch(e){return e}}(i,t,(function(i){n||(n=!0,t!==i?L(e,i):k(e,i))}),(function(t){n||(n=!0,D(e,t))}),e._label);!n&&a&&(n=!0,D(e,a))}),e)}(t,i,n):k(t,i)}function L(e,t){if(e===t)D(e,new TypeError("You cannot resolve a promise with itself"));else if(a=typeof(n=t),null===n||"object"!==a&&"function"!==a)k(e,t);else{var i=void 0;try{i=t.then}catch(t){return void D(e,t)}T(e,t,i)}var n,a}function w(e){e._onerror&&e._onerror(e._result),B(e)}function k(e,t){void 0===e._state&&(e._result=t,e._state=1,0!==e._subscribers.length&&o(B,e))}function D(e,t){void 0===e._state&&(e._state=2,e._result=t,o(w,e))}function C(e,t,i,n){var a=e._subscribers,r=a.length;e._onerror=null,a[r]=t,a[r+1]=i,a[r+2]=n,0===r&&e._state&&o(B,e)}function B(e){var t=e._subscribers,i=e._state;if(0!==t.length){for(var n=void 0,a=void 0,r=e._result,s=0;s<t.length;s+=3)n=t[s],a=t[s+i],n?I(i,n,a,r):a(r);e._subscribers.length=0}}function I(t,i,n,a){var r=e(n),s=void 0,o=void 0,d=!0;if(r){try{s=n(a)}catch(e){d=!1,o=e}if(i===s)return void D(i,new TypeError("A promises callback cannot return that same promise."))}else s=a;void 0!==i._state||(r&&d?L(i,s):!1===d?D(i,o):1===t?k(i,s):2===t&&D(i,s))}var O=0;function P(e){e[A]=O++,e._state=void 0,e._result=void 0,e._subscribers=[]}var M=function(){function e(e,t){this._instanceConstructor=e,this.promise=new e(R),this.promise[A]||P(this.promise),n(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?k(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&k(this.promise,this._result))):D(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;void 0===this._state&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var i=this._instanceConstructor,n=i.resolve;if(n===E){var a=void 0,r=void 0,s=!1;try{a=e.then}catch(e){s=!0,r=e}if(a===S&&void 0!==e._state)this._settledAt(e._state,t,e._result);else if("function"!=typeof a)this._remaining--,this._result[t]=e;else if(i===x){var o=new i(R);s?D(o,r):T(o,e,a),this._willSettleAt(o,t)}else this._willSettleAt(new i((function(t){return t(e)})),t)}else this._willSettleAt(n(e),t)},e.prototype._settledAt=function(e,t,i){var n=this.promise;void 0===n._state&&(this._remaining--,2===e?D(n,i):this._result[t]=i),0===this._remaining&&k(n,this._result)},e.prototype._willSettleAt=function(e,t){var i=this;C(e,void 0,(function(e){return i._settledAt(1,t,e)}),(function(e){return i._settledAt(2,t,e)}))},e}(),x=function(){function t(e){this[A]=O++,this._result=this._state=void 0,this._subscribers=[],R!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t((function(t){L(e,t)}),(function(t){D(e,t)}))}catch(t){D(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var i=this.constructor;return e(t)?this.then((function(e){return i.resolve(t()).then((function(){return e}))}),(function(e){return i.resolve(t()).then((function(){throw e}))})):this.then(t,t)},t}();return x.prototype.then=S,x.all=function(e){return new M(this,e).promise},x.race=function(e){var t=this;return n(e)?new t((function(i,n){for(var a=e.length,r=0;r<a;r++)t.resolve(e[r]).then(i,n)})):new t((function(e,t){return t(new TypeError("You must pass an array to race."))}))},x.resolve=E,x.reject=function(e){var t=new this(R);return D(t,e),t},x._setScheduler=function(e){s=e},x._setAsap=function(e){o=e},x._asap=o,x.polyfill=function(){var e=void 0;if(void 0!==i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=x},x.Promise=x,x},e.exports=n()}).call(this,i(16),i(17))},function(e,t){var i,n,a=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(i===setTimeout)return setTimeout(e,0);if((i===r||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:r}catch(e){i=r}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var d,_=[],h=!1,c=-1;function u(){h&&d&&(h=!1,d.length?_=d.concat(_):c=-1,_.length&&l())}function l(){if(!h){var e=o(u);h=!0;for(var t=_.length;t;){for(d=_,_=[];++c<t;)d&&d[c].run();c=-1,t=_.length}d=null,h=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];_.push(new f(e,t)),1!==_.length||h||o(l)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){"use strict";i.r(t);var n=i(9),a=i(12),r=i(10),s=i(1);t.default=function(e){var t=null,i=function(t,i){e.postMessage({msg:"logcat_callback",data:{type:t,logcat:i}})}.bind(this);function o(t,i){var n={msg:s.a.INIT_SEGMENT,data:{type:t,data:i}};e.postMessage(n,[i.data])}function d(t,i){var n={msg:s.a.MEDIA_SEGMENT,data:{type:t,data:i}};e.postMessage(n,[i.data])}function _(){var t={msg:s.a.LOADING_COMPLETE};e.postMessage(t)}function h(){var t={msg:s.a.RECOVERED_EARLY_EOF};e.postMessage(t)}function c(t){var i={msg:s.a.MEDIA_INFO,data:t};e.postMessage(i)}function u(t){var i={msg:s.a.METADATA_ARRIVED,data:t};e.postMessage(i)}function l(t){var i={msg:s.a.SCRIPTDATA_ARRIVED,data:t};e.postMessage(i)}function f(t){var i={msg:s.a.TIMED_ID3_METADATA_ARRIVED,data:t};e.postMessage(i)}function p(t){var i={msg:s.a.SMPTE2038_METADATA_ARRIVED,data:t};e.postMessage(i)}function m(t){var i={msg:s.a.SCTE35_METADATA_ARRIVED,data:t};e.postMessage(i)}function g(t){var i={msg:s.a.PES_PRIVATE_DATA_DESCRIPTOR,data:t};e.postMessage(i)}function v(t){var i={msg:s.a.PES_PRIVATE_DATA_ARRIVED,data:t};e.postMessage(i)}function y(t){var i={msg:s.a.STATISTICS_INFO,data:t};e.postMessage(i)}function b(t,i){e.postMessage({msg:s.a.IO_ERROR,data:{type:t,info:i}})}function S(t,i){e.postMessage({msg:s.a.DEMUX_ERROR,data:{type:t,info:i}})}function E(t){e.postMessage({msg:s.a.RECOMMEND_SEEKPOINT,data:t})}a.a.install(),e.addEventListener("message",(function(a){switch(a.data.cmd){case"init":(t=new r.a(a.data.param[0],a.data.param[1])).on(s.a.IO_ERROR,b.bind(this)),t.on(s.a.DEMUX_ERROR,S.bind(this)),t.on(s.a.INIT_SEGMENT,o.bind(this)),t.on(s.a.MEDIA_SEGMENT,d.bind(this)),t.on(s.a.LOADING_COMPLETE,_.bind(this)),t.on(s.a.RECOVERED_EARLY_EOF,h.bind(this)),t.on(s.a.MEDIA_INFO,c.bind(this)),t.on(s.a.METADATA_ARRIVED,u.bind(this)),t.on(s.a.SCRIPTDATA_ARRIVED,l.bind(this)),t.on(s.a.TIMED_ID3_METADATA_ARRIVED,f.bind(this)),t.on(s.a.SMPTE2038_METADATA_ARRIVED,p.bind(this)),t.on(s.a.SCTE35_METADATA_ARRIVED,m.bind(this)),t.on(s.a.PES_PRIVATE_DATA_DESCRIPTOR,g.bind(this)),t.on(s.a.PES_PRIVATE_DATA_ARRIVED,v.bind(this)),t.on(s.a.STATISTICS_INFO,y.bind(this)),t.on(s.a.RECOMMEND_SEEKPOINT,E.bind(this));break;case"destroy":t&&(t.destroy(),t=null),e.postMessage({msg:"destroyed"});break;case"start":t.start();break;case"stop":t.stop();break;case"seek":t.seek(a.data.param);break;case"pause":t.pause();break;case"resume":t.resume();break;case"logging_config":var A=a.data.param;n.a.applyConfig(A),!0===A.enableCallback?n.a.addLogListener(i):n.a.removeLogListener(i)}}))}},function(e,t,i){"use strict";i.r(t);var n=i(12),a=i(11),r={enableWorker:!1,enableStashBuffer:!0,stashInitialSize:void 0,isLive:!1,liveBufferLatencyChasing:!1,liveBufferLatencyMaxLatency:1.5,liveBufferLatencyMinRemain:.5,lazyLoad:!0,lazyLoadMaxDuration:180,lazyLoadRecoverDuration:30,deferLoadAfterSourceOpen:!0,autoCleanupMaxBackwardDuration:180,autoCleanupMinBackwardDuration:120,statisticsInfoReportInterval:600,fixAudioTimestampGap:!0,accurateSeek:!1,seekType:"range",seekParamStart:"bstart",seekParamEnd:"bend",rangeLoadZeroStart:!1,customSeekHandler:void 0,reuseRedirectedURL:!1,headers:void 0,customLoader:void 0};function s(){return Object.assign({},r)}var o=function(){function e(){}return e.supportMSEH264Playback=function(){return window.MediaSource&&window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')},e.supportMSEH265Playback=function(){return window.MediaSource&&window.MediaSource.isTypeSupported('video/mp4; codecs="hvc1.1.6.L93.B0"')},e.supportNetworkStreamIO=function(){var e=new a.a({},s()),t=e.loaderType;return e.destroy(),"fetch-stream-loader"==t||"xhr-moz-chunked-loader"==t},e.getNetworkLoaderTypeName=function(){var e=new a.a({},s()),t=e.loaderType;return e.destroy(),t},e.supportNativeMediaPlayback=function(t){null==e.videoElement&&(e.videoElement=window.document.createElement("video"));var i=e.videoElement.canPlayType(t);return"probably"===i||"maybe"==i},e.getFeatureList=function(){var t={msePlayback:!1,mseLivePlayback:!1,mseH265Playback:!1,networkStreamIO:!1,networkLoaderName:"",nativeMP4H264Playback:!1,nativeMP4H265Playback:!1,nativeWebmVP8Playback:!1,nativeWebmVP9Playback:!1};return t.msePlayback=e.supportMSEH264Playback(),t.networkStreamIO=e.supportNetworkStreamIO(),t.networkLoaderName=e.getNetworkLoaderTypeName(),t.mseLivePlayback=t.msePlayback&&t.networkStreamIO,t.mseH265Playback=e.supportMSEH265Playback(),t.nativeMP4H264Playback=e.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"'),t.nativeMP4H265Playback=e.supportNativeMediaPlayback('video/mp4; codecs="hvc1.1.6.L93.B0"'),t.nativeWebmVP8Playback=e.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"'),t.nativeWebmVP9Playback=e.supportNativeMediaPlayback('video/webm; codecs="vp9"'),t},e}(),d=i(2),_=i(6),h=i.n(_),c=i(0),u=i(4),l={ERROR:"error",LOADING_COMPLETE:"loading_complete",RECOVERED_EARLY_EOF:"recovered_early_eof",MEDIA_INFO:"media_info",METADATA_ARRIVED:"metadata_arrived",SCRIPTDATA_ARRIVED:"scriptdata_arrived",TIMED_ID3_METADATA_ARRIVED:"timed_id3_metadata_arrived",SMPTE2038_METADATA_ARRIVED:"smpte2038_metadata_arrived",SCTE35_METADATA_ARRIVED:"scte35_metadata_arrived",PES_PRIVATE_DATA_DESCRIPTOR:"pes_private_data_descriptor",PES_PRIVATE_DATA_ARRIVED:"pes_private_data_arrived",STATISTICS_INFO:"statistics_info"},f=i(13),p=i.n(f),m=i(9),g=i(10),v=i(1),y=i(8),b=function(){function e(e,t){if(this.TAG="Transmuxer",this._emitter=new h.a,t.enableWorker&&"undefined"!=typeof Worker)try{this._worker=p()(18),this._workerDestroying=!1,this._worker.addEventListener("message",this._onWorkerMessage.bind(this)),this._worker.postMessage({cmd:"init",param:[e,t]}),this.e={onLoggingConfigChanged:this._onLoggingConfigChanged.bind(this)},m.a.registerListener(this.e.onLoggingConfigChanged),this._worker.postMessage({cmd:"logging_config",param:m.a.getConfig()})}catch(i){c.a.e(this.TAG,"Error while initialize transmuxing worker, fallback to inline transmuxing"),this._worker=null,this._controller=new g.a(e,t)}else this._controller=new g.a(e,t);if(this._controller){var i=this._controller;i.on(v.a.IO_ERROR,this._onIOError.bind(this)),i.on(v.a.DEMUX_ERROR,this._onDemuxError.bind(this)),i.on(v.a.INIT_SEGMENT,this._onInitSegment.bind(this)),i.on(v.a.MEDIA_SEGMENT,this._onMediaSegment.bind(this)),i.on(v.a.LOADING_COMPLETE,this._onLoadingComplete.bind(this)),i.on(v.a.RECOVERED_EARLY_EOF,this._onRecoveredEarlyEof.bind(this)),i.on(v.a.MEDIA_INFO,this._onMediaInfo.bind(this)),i.on(v.a.METADATA_ARRIVED,this._onMetaDataArrived.bind(this)),i.on(v.a.SCRIPTDATA_ARRIVED,this._onScriptDataArrived.bind(this)),i.on(v.a.TIMED_ID3_METADATA_ARRIVED,this._onTimedID3MetadataArrived.bind(this)),i.on(v.a.SMPTE2038_METADATA_ARRIVED,this._onSMPTE2038MetadataArrived.bind(this)),i.on(v.a.SCTE35_METADATA_ARRIVED,this._onSCTE35MetadataArrived.bind(this)),i.on(v.a.PES_PRIVATE_DATA_DESCRIPTOR,this._onPESPrivateDataDescriptor.bind(this)),i.on(v.a.PES_PRIVATE_DATA_ARRIVED,this._onPESPrivateDataArrived.bind(this)),i.on(v.a.STATISTICS_INFO,this._onStatisticsInfo.bind(this)),i.on(v.a.RECOMMEND_SEEKPOINT,this._onRecommendSeekpoint.bind(this))}}return e.prototype.destroy=function(){this._worker?this._workerDestroying||(this._workerDestroying=!0,this._worker.postMessage({cmd:"destroy"}),m.a.removeListener(this.e.onLoggingConfigChanged),this.e=null):(this._controller.destroy(),this._controller=null),this._emitter.removeAllListeners(),this._emitter=null},e.prototype.on=function(e,t){this._emitter.addListener(e,t)},e.prototype.off=function(e,t){this._emitter.removeListener(e,t)},e.prototype.hasWorker=function(){return null!=this._worker},e.prototype.open=function(){this._worker?this._worker.postMessage({cmd:"start"}):this._controller.start()},e.prototype.close=function(){this._worker?this._worker.postMessage({cmd:"stop"}):this._controller.stop()},e.prototype.seek=function(e){this._worker?this._worker.postMessage({cmd:"seek",param:e}):this._controller.seek(e)},e.prototype.pause=function(){this._worker?this._worker.postMessage({cmd:"pause"}):this._controller.pause()},e.prototype.resume=function(){this._worker?this._worker.postMessage({cmd:"resume"}):this._controller.resume()},e.prototype._onInitSegment=function(e,t){var i=this;Promise.resolve().then((function(){i._emitter.emit(v.a.INIT_SEGMENT,e,t)}))},e.prototype._onMediaSegment=function(e,t){var i=this;Promise.resolve().then((function(){i._emitter.emit(v.a.MEDIA_SEGMENT,e,t)}))},e.prototype._onLoadingComplete=function(){var e=this;Promise.resolve().then((function(){e._emitter.emit(v.a.LOADING_COMPLETE)}))},e.prototype._onRecoveredEarlyEof=function(){var e=this;Promise.resolve().then((function(){e._emitter.emit(v.a.RECOVERED_EARLY_EOF)}))},e.prototype._onMediaInfo=function(e){var t=this;Promise.resolve().then((function(){t._emitter.emit(v.a.MEDIA_INFO,e)}))},e.prototype._onMetaDataArrived=function(e){var t=this;Promise.resolve().then((function(){t._emitter.emit(v.a.METADATA_ARRIVED,e)}))},e.prototype._onScriptDataArrived=function(e){var t=this;Promise.resolve().then((function(){t._emitter.emit(v.a.SCRIPTDATA_ARRIVED,e)}))},e.prototype._onTimedID3MetadataArrived=function(e){var t=this;Promise.resolve().then((function(){t._emitter.emit(v.a.TIMED_ID3_METADATA_ARRIVED,e)}))},e.prototype._onSMPTE2038MetadataArrived=function(e){var t=this;Promise.resolve().then((function(){t._emitter.emit(v.a.SMPTE2038_METADATA_ARRIVED,e)}))},e.prototype._onSCTE35MetadataArrived=function(e){var t=this;Promise.resolve().then((function(){t._emitter.emit(v.a.SCTE35_METADATA_ARRIVED,e)}))},e.prototype._onPESPrivateDataDescriptor=function(e){var t=this;Promise.resolve().then((function(){t._emitter.emit(v.a.PES_PRIVATE_DATA_DESCRIPTOR,e)}))},e.prototype._onPESPrivateDataArrived=function(e){var t=this;Promise.resolve().then((function(){t._emitter.emit(v.a.PES_PRIVATE_DATA_ARRIVED,e)}))},e.prototype._onStatisticsInfo=function(e){var t=this;Promise.resolve().then((function(){t._emitter.emit(v.a.STATISTICS_INFO,e)}))},e.prototype._onIOError=function(e,t){var i=this;Promise.resolve().then((function(){i._emitter.emit(v.a.IO_ERROR,e,t)}))},e.prototype._onDemuxError=function(e,t){var i=this;Promise.resolve().then((function(){i._emitter.emit(v.a.DEMUX_ERROR,e,t)}))},e.prototype._onRecommendSeekpoint=function(e){var t=this;Promise.resolve().then((function(){t._emitter.emit(v.a.RECOMMEND_SEEKPOINT,e)}))},e.prototype._onLoggingConfigChanged=function(e){this._worker&&this._worker.postMessage({cmd:"logging_config",param:e})},e.prototype._onWorkerMessage=function(e){var t=e.data,i=t.data;if("destroyed"===t.msg||this._workerDestroying)return this._workerDestroying=!1,this._worker.terminate(),void(this._worker=null);switch(t.msg){case v.a.INIT_SEGMENT:case v.a.MEDIA_SEGMENT:this._emitter.emit(t.msg,i.type,i.data);break;case v.a.LOADING_COMPLETE:case v.a.RECOVERED_EARLY_EOF:this._emitter.emit(t.msg);break;case v.a.MEDIA_INFO:Object.setPrototypeOf(i,y.a.prototype),this._emitter.emit(t.msg,i);break;case v.a.METADATA_ARRIVED:case v.a.SCRIPTDATA_ARRIVED:case v.a.TIMED_ID3_METADATA_ARRIVED:case v.a.SMPTE2038_METADATA_ARRIVED:case v.a.SCTE35_METADATA_ARRIVED:case v.a.PES_PRIVATE_DATA_DESCRIPTOR:case v.a.PES_PRIVATE_DATA_ARRIVED:case v.a.STATISTICS_INFO:this._emitter.emit(t.msg,i);break;case v.a.IO_ERROR:case v.a.DEMUX_ERROR:this._emitter.emit(t.msg,i.type,i.info);break;case v.a.RECOMMEND_SEEKPOINT:this._emitter.emit(t.msg,i);break;case"logcat_callback":c.a.emitter.emit("log",i.type,i.logcat)}},e}(),S={ERROR:"error",SOURCE_OPEN:"source_open",UPDATE_END:"update_end",BUFFER_FULL:"buffer_full"},E=i(7),A=i(3),R=function(){function e(e){this.TAG="MSEController",this._config=e,this._emitter=new h.a,this._config.isLive&&null==this._config.autoCleanupSourceBuffer&&(this._config.autoCleanupSourceBuffer=!0),this.e={onSourceOpen:this._onSourceOpen.bind(this),onSourceEnded:this._onSourceEnded.bind(this),onSourceClose:this._onSourceClose.bind(this),onSourceBufferError:this._onSourceBufferError.bind(this),onSourceBufferUpdateEnd:this._onSourceBufferUpdateEnd.bind(this)},this._mediaSource=null,this._mediaSourceObjectURL=null,this._mediaElement=null,this._isBufferFull=!1,this._hasPendingEos=!1,this._requireSetMediaDuration=!1,this._pendingMediaDuration=0,this._pendingSourceBufferInit=[],this._mimeTypes={video:null,audio:null},this._sourceBuffers={video:null,audio:null},this._lastInitSegments={video:null,audio:null},this._pendingSegments={video:[],audio:[]},this._pendingRemoveRanges={video:[],audio:[]},this._idrList=new E.a}return e.prototype.destroy=function(){(this._mediaElement||this._mediaSource)&&this.detachMediaElement(),this.e=null,this._emitter.removeAllListeners(),this._emitter=null},e.prototype.on=function(e,t){this._emitter.addListener(e,t)},e.prototype.off=function(e,t){this._emitter.removeListener(e,t)},e.prototype.attachMediaElement=function(e){if(this._mediaSource)throw new A.a("MediaSource has been attached to an HTMLMediaElement!");var t=this._mediaSource=new window.MediaSource;t.addEventListener("sourceopen",this.e.onSourceOpen),t.addEventListener("sourceended",this.e.onSourceEnded),t.addEventListener("sourceclose",this.e.onSourceClose),this._mediaElement=e,this._mediaSourceObjectURL=window.URL.createObjectURL(this._mediaSource),e.src=this._mediaSourceObjectURL},e.prototype.detachMediaElement=function(){if(this._mediaSource){var e=this._mediaSource;for(var t in this._sourceBuffers){var i=this._pendingSegments[t];i.splice(0,i.length),this._pendingSegments[t]=null,this._pendingRemoveRanges[t]=null,this._lastInitSegments[t]=null;var n=this._sourceBuffers[t];if(n){if("closed"!==e.readyState){try{e.removeSourceBuffer(n)}catch(e){c.a.e(this.TAG,e.message)}n.removeEventListener("error",this.e.onSourceBufferError),n.removeEventListener("updateend",this.e.onSourceBufferUpdateEnd)}this._mimeTypes[t]=null,this._sourceBuffers[t]=null}}if("open"===e.readyState)try{e.endOfStream()}catch(e){c.a.e(this.TAG,e.message)}e.removeEventListener("sourceopen",this.e.onSourceOpen),e.removeEventListener("sourceended",this.e.onSourceEnded),e.removeEventListener("sourceclose",this.e.onSourceClose),this._pendingSourceBufferInit=[],this._isBufferFull=!1,this._idrList.clear(),this._mediaSource=null}this._mediaElement&&(this._mediaElement.src="",this._mediaElement.removeAttribute("src"),this._mediaElement=null),this._mediaSourceObjectURL&&(window.URL.revokeObjectURL(this._mediaSourceObjectURL),this._mediaSourceObjectURL=null)},e.prototype.appendInitSegment=function(e,t){if(!this._mediaSource||"open"!==this._mediaSource.readyState)return this._pendingSourceBufferInit.push(e),void this._pendingSegments[e.type].push(e);var i=e,n=""+i.container;i.codec&&i.codec.length>0&&(n+=";codecs="+i.codec);var a=!1;if(c.a.v(this.TAG,"Received Initialization Segment, mimeType: "+n),this._lastInitSegments[i.type]=i,n!==this._mimeTypes[i.type]){if(this._mimeTypes[i.type])c.a.v(this.TAG,"Notice: "+i.type+" mimeType changed, origin: "+this._mimeTypes[i.type]+", target: "+n);else{a=!0;try{var r=this._sourceBuffers[i.type]=this._mediaSource.addSourceBuffer(n);r.addEventListener("error",this.e.onSourceBufferError),r.addEventListener("updateend",this.e.onSourceBufferUpdateEnd)}catch(e){return c.a.e(this.TAG,e.message),void this._emitter.emit(S.ERROR,{code:e.code,msg:e.message})}}this._mimeTypes[i.type]=n}t||this._pendingSegments[i.type].push(i),a||this._sourceBuffers[i.type]&&!this._sourceBuffers[i.type].updating&&this._doAppendSegments(),u.a.safari&&"audio/mpeg"===i.container&&i.mediaDuration>0&&(this._requireSetMediaDuration=!0,this._pendingMediaDuration=i.mediaDuration/1e3,this._updateMediaSourceDuration())},e.prototype.appendMediaSegment=function(e){var t=e;this._pendingSegments[t.type].push(t),this._config.autoCleanupSourceBuffer&&this._needCleanupSourceBuffer()&&this._doCleanupSourceBuffer();var i=this._sourceBuffers[t.type];!i||i.updating||this._hasPendingRemoveRanges()||this._doAppendSegments()},e.prototype.seek=function(e){for(var t in this._sourceBuffers)if(this._sourceBuffers[t]){var i=this._sourceBuffers[t];if("open"===this._mediaSource.readyState)try{i.abort()}catch(e){c.a.e(this.TAG,e.message)}this._idrList.clear();var n=this._pendingSegments[t];if(n.splice(0,n.length),"closed"!==this._mediaSource.readyState){for(var a=0;a<i.buffered.length;a++){var r=i.buffered.start(a),s=i.buffered.end(a);this._pendingRemoveRanges[t].push({start:r,end:s})}if(i.updating||this._doRemoveRanges(),u.a.safari){var o=this._lastInitSegments[t];o&&(this._pendingSegments[t].push(o),i.updating||this._doAppendSegments())}}}},e.prototype.endOfStream=function(){var e=this._mediaSource,t=this._sourceBuffers;e&&"open"===e.readyState?t.video&&t.video.updating||t.audio&&t.audio.updating?this._hasPendingEos=!0:(this._hasPendingEos=!1,e.endOfStream()):e&&"closed"===e.readyState&&this._hasPendingSegments()&&(this._hasPendingEos=!0)},e.prototype.getNearestKeyframe=function(e){return this._idrList.getLastSyncPointBeforeDts(e)},e.prototype._needCleanupSourceBuffer=function(){if(!this._config.autoCleanupSourceBuffer)return!1;var e=this._mediaElement.currentTime;for(var t in this._sourceBuffers){var i=this._sourceBuffers[t];if(i){var n=i.buffered;if(n.length>=1&&e-n.start(0)>=this._config.autoCleanupMaxBackwardDuration)return!0}}return!1},e.prototype._doCleanupSourceBuffer=function(){var e=this._mediaElement.currentTime;for(var t in this._sourceBuffers){var i=this._sourceBuffers[t];if(i){for(var n=i.buffered,a=!1,r=0;r<n.length;r++){var s=n.start(r),o=n.end(r);if(s<=e&&e<o+3){if(e-s>=this._config.autoCleanupMaxBackwardDuration){a=!0;var d=e-this._config.autoCleanupMinBackwardDuration;this._pendingRemoveRanges[t].push({start:s,end:d})}}else o<e&&(a=!0,this._pendingRemoveRanges[t].push({start:s,end:o}))}a&&!i.updating&&this._doRemoveRanges()}}},e.prototype._updateMediaSourceDuration=function(){var e=this._sourceBuffers;if(0!==this._mediaElement.readyState&&"open"===this._mediaSource.readyState&&!(e.video&&e.video.updating||e.audio&&e.audio.updating)){var t=this._mediaSource.duration,i=this._pendingMediaDuration;i>0&&(isNaN(t)||i>t)&&(c.a.v(this.TAG,"Update MediaSource duration from "+t+" to "+i),this._mediaSource.duration=i),this._requireSetMediaDuration=!1,this._pendingMediaDuration=0}},e.prototype._doRemoveRanges=function(){for(var e in this._pendingRemoveRanges)if(this._sourceBuffers[e]&&!this._sourceBuffers[e].updating)for(var t=this._sourceBuffers[e],i=this._pendingRemoveRanges[e];i.length&&!t.updating;){var n=i.shift();t.remove(n.start,n.end)}},e.prototype._doAppendSegments=function(){var e=this._pendingSegments;for(var t in e)if(this._sourceBuffers[t]&&!this._sourceBuffers[t].updating&&e[t].length>0){var i=e[t].shift();if(i.timestampOffset){var n=this._sourceBuffers[t].timestampOffset,a=i.timestampOffset/1e3;Math.abs(n-a)>.1&&(c.a.v(this.TAG,"Update MPEG audio timestampOffset from "+n+" to "+a),this._sourceBuffers[t].timestampOffset=a),delete i.timestampOffset}if(!i.data||0===i.data.byteLength)continue;try{this._sourceBuffers[t].appendBuffer(i.data),this._isBufferFull=!1,"video"===t&&i.hasOwnProperty("info")&&this._idrList.appendArray(i.info.syncPoints)}catch(e){this._pendingSegments[t].unshift(i),22===e.code?(this._isBufferFull||this._emitter.emit(S.BUFFER_FULL),this._isBufferFull=!0):(c.a.e(this.TAG,e.message),this._emitter.emit(S.ERROR,{code:e.code,msg:e.message}))}}},e.prototype._onSourceOpen=function(){if(c.a.v(this.TAG,"MediaSource onSourceOpen"),this._mediaSource.removeEventListener("sourceopen",this.e.onSourceOpen),this._pendingSourceBufferInit.length>0)for(var e=this._pendingSourceBufferInit;e.length;){var t=e.shift();this.appendInitSegment(t,!0)}this._hasPendingSegments()&&this._doAppendSegments(),this._emitter.emit(S.SOURCE_OPEN)},e.prototype._onSourceEnded=function(){c.a.v(this.TAG,"MediaSource onSourceEnded")},e.prototype._onSourceClose=function(){c.a.v(this.TAG,"MediaSource onSourceClose"),this._mediaSource&&null!=this.e&&(this._mediaSource.removeEventListener("sourceopen",this.e.onSourceOpen),this._mediaSource.removeEventListener("sourceended",this.e.onSourceEnded),this._mediaSource.removeEventListener("sourceclose",this.e.onSourceClose))},e.prototype._hasPendingSegments=function(){var e=this._pendingSegments;return e.video.length>0||e.audio.length>0},e.prototype._hasPendingRemoveRanges=function(){var e=this._pendingRemoveRanges;return e.video.length>0||e.audio.length>0},e.prototype._onSourceBufferUpdateEnd=function(){this._requireSetMediaDuration?this._updateMediaSourceDuration():this._hasPendingRemoveRanges()?this._doRemoveRanges():this._hasPendingSegments()?this._doAppendSegments():this._hasPendingEos&&this.endOfStream(),this._emitter.emit(S.UPDATE_END)},e.prototype._onSourceBufferError=function(e){c.a.e(this.TAG,"SourceBuffer Error: "+e)},e}(),T=i(5),L={NETWORK_ERROR:"NetworkError",MEDIA_ERROR:"MediaError",OTHER_ERROR:"OtherError"},w={NETWORK_EXCEPTION:d.b.EXCEPTION,NETWORK_STATUS_CODE_INVALID:d.b.HTTP_STATUS_CODE_INVALID,NETWORK_TIMEOUT:d.b.CONNECTING_TIMEOUT,NETWORK_UNRECOVERABLE_EARLY_EOF:d.b.UNRECOVERABLE_EARLY_EOF,MEDIA_MSE_ERROR:"MediaMSEError",MEDIA_FORMAT_ERROR:T.a.FORMAT_ERROR,MEDIA_FORMAT_UNSUPPORTED:T.a.FORMAT_UNSUPPORTED,MEDIA_CODEC_UNSUPPORTED:T.a.CODEC_UNSUPPORTED},k=function(){function e(e,t){this.TAG="MSEPlayer",this._type="MSEPlayer",this._emitter=new h.a,this._config=s(),"object"==typeof t&&Object.assign(this._config,t);var i=e.type.toLowerCase();if("mse"!==i&&"mpegts"!==i&&"m2ts"!==i&&"flv"!==i)throw new A.b("MSEPlayer requires an mpegts/m2ts/flv MediaDataSource input!");!0===e.isLive&&(this._config.isLive=!0),this.e={onvLoadedMetadata:this._onvLoadedMetadata.bind(this),onvSeeking:this._onvSeeking.bind(this),onvCanPlay:this._onvCanPlay.bind(this),onvStalled:this._onvStalled.bind(this),onvProgress:this._onvProgress.bind(this)},self.performance&&self.performance.now?this._now=self.performance.now.bind(self.performance):this._now=Date.now,this._pendingSeekTime=null,this._requestSetTime=!1,this._seekpointRecord=null,this._progressChecker=null,this._mediaDataSource=e,this._mediaElement=null,this._msectl=null,this._transmuxer=null,this._mseSourceOpened=!1,this._hasPendingLoad=!1,this._receivedCanPlay=!1,this._mediaInfo=null,this._statisticsInfo=null;var n=u.a.chrome&&(u.a.version.major<50||50===u.a.version.major&&u.a.version.build<2661);this._alwaysSeekKeyframe=!!(n||u.a.msedge||u.a.msie),this._alwaysSeekKeyframe&&(this._config.accurateSeek=!1)}return e.prototype.destroy=function(){null!=this._progressChecker&&(window.clearInterval(this._progressChecker),this._progressChecker=null),this._transmuxer&&this.unload(),this._mediaElement&&this.detachMediaElement(),this.e=null,this._mediaDataSource=null,this._emitter.removeAllListeners(),this._emitter=null},e.prototype.on=function(e,t){var i=this;e===l.MEDIA_INFO?null!=this._mediaInfo&&Promise.resolve().then((function(){i._emitter.emit(l.MEDIA_INFO,i.mediaInfo)})):e===l.STATISTICS_INFO&&null!=this._statisticsInfo&&Promise.resolve().then((function(){i._emitter.emit(l.STATISTICS_INFO,i.statisticsInfo)})),this._emitter.addListener(e,t)},e.prototype.off=function(e,t){this._emitter.removeListener(e,t)},e.prototype.attachMediaElement=function(e){var t=this;if(this._mediaElement=e,e.addEventListener("loadedmetadata",this.e.onvLoadedMetadata),e.addEventListener("seeking",this.e.onvSeeking),e.addEventListener("canplay",this.e.onvCanPlay),e.addEventListener("stalled",this.e.onvStalled),e.addEventListener("progress",this.e.onvProgress),this._msectl=new R(this._config),this._msectl.on(S.UPDATE_END,this._onmseUpdateEnd.bind(this)),this._msectl.on(S.BUFFER_FULL,this._onmseBufferFull.bind(this)),this._msectl.on(S.SOURCE_OPEN,(function(){t._mseSourceOpened=!0,t._hasPendingLoad&&(t._hasPendingLoad=!1,t.load())})),this._msectl.on(S.ERROR,(function(e){t._emitter.emit(l.ERROR,L.MEDIA_ERROR,w.MEDIA_MSE_ERROR,e)})),this._msectl.attachMediaElement(e),null!=this._pendingSeekTime)try{e.currentTime=this._pendingSeekTime,this._pendingSeekTime=null}catch(e){}},e.prototype.detachMediaElement=function(){this._mediaElement&&(this._msectl.detachMediaElement(),this._mediaElement.removeEventListener("loadedmetadata",this.e.onvLoadedMetadata),this._mediaElement.removeEventListener("seeking",this.e.onvSeeking),this._mediaElement.removeEventListener("canplay",this.e.onvCanPlay),this._mediaElement.removeEventListener("stalled",this.e.onvStalled),this._mediaElement.removeEventListener("progress",this.e.onvProgress),this._mediaElement=null),this._msectl&&(this._msectl.destroy(),this._msectl=null)},e.prototype.load=function(){var e=this;if(!this._mediaElement)throw new A.a("HTMLMediaElement must be attached before load()!");if(this._transmuxer)throw new A.a("MSEPlayer.load() has been called, please call unload() first!");this._hasPendingLoad||(this._config.deferLoadAfterSourceOpen&&!1===this._mseSourceOpened?this._hasPendingLoad=!0:(this._mediaElement.readyState>0&&(this._requestSetTime=!0,this._mediaElement.currentTime=0),this._transmuxer=new b(this._mediaDataSource,this._config),this._transmuxer.on(v.a.INIT_SEGMENT,(function(t,i){e._msectl.appendInitSegment(i)})),this._transmuxer.on(v.a.MEDIA_SEGMENT,(function(t,i){if(e._msectl.appendMediaSegment(i),e._config.lazyLoad&&!e._config.isLive){var n=e._mediaElement.currentTime;i.info.endDts>=1e3*(n+e._config.lazyLoadMaxDuration)&&null==e._progressChecker&&(c.a.v(e.TAG,"Maximum buffering duration exceeded, suspend transmuxing task"),e._suspendTransmuxer())}})),this._transmuxer.on(v.a.LOADING_COMPLETE,(function(){e._msectl.endOfStream(),e._emitter.emit(l.LOADING_COMPLETE)})),this._transmuxer.on(v.a.RECOVERED_EARLY_EOF,(function(){e._emitter.emit(l.RECOVERED_EARLY_EOF)})),this._transmuxer.on(v.a.IO_ERROR,(function(t,i){e._emitter.emit(l.ERROR,L.NETWORK_ERROR,t,i)})),this._transmuxer.on(v.a.DEMUX_ERROR,(function(t,i){e._emitter.emit(l.ERROR,L.MEDIA_ERROR,t,{code:-1,msg:i})})),this._transmuxer.on(v.a.MEDIA_INFO,(function(t){e._mediaInfo=t,e._emitter.emit(l.MEDIA_INFO,Object.assign({},t))})),this._transmuxer.on(v.a.METADATA_ARRIVED,(function(t){e._emitter.emit(l.METADATA_ARRIVED,t)})),this._transmuxer.on(v.a.SCRIPTDATA_ARRIVED,(function(t){e._emitter.emit(l.SCRIPTDATA_ARRIVED,t)})),this._transmuxer.on(v.a.TIMED_ID3_METADATA_ARRIVED,(function(t){e._emitter.emit(l.TIMED_ID3_METADATA_ARRIVED,t)})),this._transmuxer.on(v.a.SMPTE2038_METADATA_ARRIVED,(function(t){e._emitter.emit(l.SMPTE2038_METADATA_ARRIVED,t)})),this._transmuxer.on(v.a.SCTE35_METADATA_ARRIVED,(function(t){e._emitter.emit(l.SCTE35_METADATA_ARRIVED,t)})),this._transmuxer.on(v.a.PES_PRIVATE_DATA_DESCRIPTOR,(function(t){e._emitter.emit(l.PES_PRIVATE_DATA_DESCRIPTOR,t)})),this._transmuxer.on(v.a.PES_PRIVATE_DATA_ARRIVED,(function(t){e._emitter.emit(l.PES_PRIVATE_DATA_ARRIVED,t)})),this._transmuxer.on(v.a.STATISTICS_INFO,(function(t){e._statisticsInfo=e._fillStatisticsInfo(t),e._emitter.emit(l.STATISTICS_INFO,Object.assign({},e._statisticsInfo))})),this._transmuxer.on(v.a.RECOMMEND_SEEKPOINT,(function(t){e._mediaElement&&!e._config.accurateSeek&&(e._requestSetTime=!0,e._mediaElement.currentTime=t/1e3)})),this._transmuxer.open()))},e.prototype.unload=function(){this._mediaElement&&this._mediaElement.pause(),this._msectl&&this._msectl.seek(0),this._transmuxer&&(this._transmuxer.close(),this._transmuxer.destroy(),this._transmuxer=null)},e.prototype.play=function(){return this._mediaElement.play()},e.prototype.pause=function(){this._mediaElement.pause()},Object.defineProperty(e.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"buffered",{get:function(){return this._mediaElement.buffered},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"duration",{get:function(){return this._mediaElement.duration},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"volume",{get:function(){return this._mediaElement.volume},set:function(e){this._mediaElement.volume=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"muted",{get:function(){return this._mediaElement.muted},set:function(e){this._mediaElement.muted=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentTime",{get:function(){return this._mediaElement?this._mediaElement.currentTime:0},set:function(e){this._mediaElement?this._internalSeek(e):this._pendingSeekTime=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mediaInfo",{get:function(){return Object.assign({},this._mediaInfo)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"statisticsInfo",{get:function(){return null==this._statisticsInfo&&(this._statisticsInfo={}),this._statisticsInfo=this._fillStatisticsInfo(this._statisticsInfo),Object.assign({},this._statisticsInfo)},enumerable:!1,configurable:!0}),e.prototype._fillStatisticsInfo=function(e){if(e.playerType=this._type,!(this._mediaElement instanceof HTMLVideoElement))return e;var t=!0,i=0,n=0;if(this._mediaElement.getVideoPlaybackQuality){var a=this._mediaElement.getVideoPlaybackQuality();i=a.totalVideoFrames,n=a.droppedVideoFrames}else null!=this._mediaElement.webkitDecodedFrameCount?(i=this._mediaElement.webkitDecodedFrameCount,n=this._mediaElement.webkitDroppedFrameCount):t=!1;return t&&(e.decodedFrames=i,e.droppedFrames=n),e},e.prototype._onmseUpdateEnd=function(){var e=this._mediaElement.buffered,t=this._mediaElement.currentTime;if(this._config.isLive&&this._config.liveBufferLatencyChasing&&e.length>0&&!this._mediaElement.paused){var i=e.end(e.length-1);if(i>this._config.liveBufferLatencyMaxLatency&&i-t>this._config.liveBufferLatencyMaxLatency){var n=i-this._config.liveBufferLatencyMinRemain;this.currentTime=n}}if(this._config.lazyLoad&&!this._config.isLive){for(var a=0,r=0;r<e.length;r++){var s=e.start(r),o=e.end(r);if(s<=t&&t<o){s,a=o;break}}a>=t+this._config.lazyLoadMaxDuration&&null==this._progressChecker&&(c.a.v(this.TAG,"Maximum buffering duration exceeded, suspend transmuxing task"),this._suspendTransmuxer())}},e.prototype._onmseBufferFull=function(){c.a.v(this.TAG,"MSE SourceBuffer is full, suspend transmuxing task"),null==this._progressChecker&&this._suspendTransmuxer()},e.prototype._suspendTransmuxer=function(){this._transmuxer&&(this._transmuxer.pause(),null==this._progressChecker&&(this._progressChecker=window.setInterval(this._checkProgressAndResume.bind(this),1e3)))},e.prototype._checkProgressAndResume=function(){for(var e=this._mediaElement.currentTime,t=this._mediaElement.buffered,i=!1,n=0;n<t.length;n++){var a=t.start(n),r=t.end(n);if(e>=a&&e<r){e>=r-this._config.lazyLoadRecoverDuration&&(i=!0);break}}i&&(window.clearInterval(this._progressChecker),this._progressChecker=null,i&&(c.a.v(this.TAG,"Continue loading from paused position"),this._transmuxer.resume()))},e.prototype._isTimepointBuffered=function(e){for(var t=this._mediaElement.buffered,i=0;i<t.length;i++){var n=t.start(i),a=t.end(i);if(e>=n&&e<a)return!0}return!1},e.prototype._internalSeek=function(e){var t=this._isTimepointBuffered(e),i=!1,n=0;if(e<1&&this._mediaElement.buffered.length>0){var a=this._mediaElement.buffered.start(0);(a<1&&e<a||u.a.safari)&&(i=!0,n=u.a.safari?.1:a)}if(i)this._requestSetTime=!0,this._mediaElement.currentTime=n;else if(t){if(this._alwaysSeekKeyframe){var r=this._msectl.getNearestKeyframe(Math.floor(1e3*e));this._requestSetTime=!0,this._mediaElement.currentTime=null!=r?r.dts/1e3:e}else this._requestSetTime=!0,this._mediaElement.currentTime=e;null!=this._progressChecker&&this._checkProgressAndResume()}else null!=this._progressChecker&&(window.clearInterval(this._progressChecker),this._progressChecker=null),this._msectl.seek(e),this._transmuxer.seek(Math.floor(1e3*e)),this._config.accurateSeek&&(this._requestSetTime=!0,this._mediaElement.currentTime=e)},e.prototype._checkAndApplyUnbufferedSeekpoint=function(){if(this._seekpointRecord)if(this._seekpointRecord.recordTime<=this._now()-100){var e=this._mediaElement.currentTime;this._seekpointRecord=null,this._isTimepointBuffered(e)||(null!=this._progressChecker&&(window.clearTimeout(this._progressChecker),this._progressChecker=null),this._msectl.seek(e),this._transmuxer.seek(Math.floor(1e3*e)),this._config.accurateSeek&&(this._requestSetTime=!0,this._mediaElement.currentTime=e))}else window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this),50)},e.prototype._checkAndResumeStuckPlayback=function(e){var t=this._mediaElement;if(e||!this._receivedCanPlay||t.readyState<2){var i=t.buffered;i.length>0&&t.currentTime<i.start(0)&&(c.a.w(this.TAG,"Playback seems stuck at "+t.currentTime+", seek to "+i.start(0)),this._requestSetTime=!0,this._mediaElement.currentTime=i.start(0),this._mediaElement.removeEventListener("progress",this.e.onvProgress))}else this._mediaElement.removeEventListener("progress",this.e.onvProgress)},e.prototype._onvLoadedMetadata=function(e){null!=this._pendingSeekTime&&(this._mediaElement.currentTime=this._pendingSeekTime,this._pendingSeekTime=null)},e.prototype._onvSeeking=function(e){var t=this._mediaElement.currentTime,i=this._mediaElement.buffered;if(this._requestSetTime)this._requestSetTime=!1;else{if(t<1&&i.length>0){var n=i.start(0);if(n<1&&t<n||u.a.safari)return this._requestSetTime=!0,void(this._mediaElement.currentTime=u.a.safari?.1:n)}if(this._isTimepointBuffered(t)){if(this._alwaysSeekKeyframe){var a=this._msectl.getNearestKeyframe(Math.floor(1e3*t));null!=a&&(this._requestSetTime=!0,this._mediaElement.currentTime=a.dts/1e3)}null!=this._progressChecker&&this._checkProgressAndResume()}else this._seekpointRecord={seekPoint:t,recordTime:this._now()},window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this),50)}},e.prototype._onvCanPlay=function(e){this._receivedCanPlay=!0,this._mediaElement.removeEventListener("canplay",this.e.onvCanPlay)},e.prototype._onvStalled=function(e){this._checkAndResumeStuckPlayback(!0)},e.prototype._onvProgress=function(e){this._checkAndResumeStuckPlayback()},e}(),D=function(){function e(e,t){this.TAG="NativePlayer",this._type="NativePlayer",this._emitter=new h.a,this._config=s(),"object"==typeof t&&Object.assign(this._config,t);var i=e.type.toLowerCase();if("mse"===i||"mpegts"===i||"m2ts"===i||"flv"===i)throw new A.b("NativePlayer does't support mse/mpegts/m2ts/flv MediaDataSource input!");if(e.hasOwnProperty("segments"))throw new A.b("NativePlayer("+e.type+") doesn't support multipart playback!");this.e={onvLoadedMetadata:this._onvLoadedMetadata.bind(this)},this._pendingSeekTime=null,this._statisticsReporter=null,this._mediaDataSource=e,this._mediaElement=null}return e.prototype.destroy=function(){this._mediaElement&&(this.unload(),this.detachMediaElement()),this.e=null,this._mediaDataSource=null,this._emitter.removeAllListeners(),this._emitter=null},e.prototype.on=function(e,t){var i=this;e===l.MEDIA_INFO?null!=this._mediaElement&&0!==this._mediaElement.readyState&&Promise.resolve().then((function(){i._emitter.emit(l.MEDIA_INFO,i.mediaInfo)})):e===l.STATISTICS_INFO&&null!=this._mediaElement&&0!==this._mediaElement.readyState&&Promise.resolve().then((function(){i._emitter.emit(l.STATISTICS_INFO,i.statisticsInfo)})),this._emitter.addListener(e,t)},e.prototype.off=function(e,t){this._emitter.removeListener(e,t)},e.prototype.attachMediaElement=function(e){if(this._mediaElement=e,e.addEventListener("loadedmetadata",this.e.onvLoadedMetadata),null!=this._pendingSeekTime)try{e.currentTime=this._pendingSeekTime,this._pendingSeekTime=null}catch(e){}},e.prototype.detachMediaElement=function(){this._mediaElement&&(this._mediaElement.src="",this._mediaElement.removeAttribute("src"),this._mediaElement.removeEventListener("loadedmetadata",this.e.onvLoadedMetadata),this._mediaElement=null),null!=this._statisticsReporter&&(window.clearInterval(this._statisticsReporter),this._statisticsReporter=null)},e.prototype.load=function(){if(!this._mediaElement)throw new A.a("HTMLMediaElement must be attached before load()!");this._mediaElement.src=this._mediaDataSource.url,this._mediaElement.readyState>0&&(this._mediaElement.currentTime=0),this._mediaElement.preload="auto",this._mediaElement.load(),this._statisticsReporter=window.setInterval(this._reportStatisticsInfo.bind(this),this._config.statisticsInfoReportInterval)},e.prototype.unload=function(){this._mediaElement&&(this._mediaElement.src="",this._mediaElement.removeAttribute("src")),null!=this._statisticsReporter&&(window.clearInterval(this._statisticsReporter),this._statisticsReporter=null)},e.prototype.play=function(){return this._mediaElement.play()},e.prototype.pause=function(){this._mediaElement.pause()},Object.defineProperty(e.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"buffered",{get:function(){return this._mediaElement.buffered},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"duration",{get:function(){return this._mediaElement.duration},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"volume",{get:function(){return this._mediaElement.volume},set:function(e){this._mediaElement.volume=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"muted",{get:function(){return this._mediaElement.muted},set:function(e){this._mediaElement.muted=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentTime",{get:function(){return this._mediaElement?this._mediaElement.currentTime:0},set:function(e){this._mediaElement?this._mediaElement.currentTime=e:this._pendingSeekTime=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mediaInfo",{get:function(){var e={mimeType:(this._mediaElement instanceof HTMLAudioElement?"audio/":"video/")+this._mediaDataSource.type};return this._mediaElement&&(e.duration=Math.floor(1e3*this._mediaElement.duration),this._mediaElement instanceof HTMLVideoElement&&(e.width=this._mediaElement.videoWidth,e.height=this._mediaElement.videoHeight)),e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"statisticsInfo",{get:function(){var e={playerType:this._type,url:this._mediaDataSource.url};if(!(this._mediaElement instanceof HTMLVideoElement))return e;var t=!0,i=0,n=0;if(this._mediaElement.getVideoPlaybackQuality){var a=this._mediaElement.getVideoPlaybackQuality();i=a.totalVideoFrames,n=a.droppedVideoFrames}else null!=this._mediaElement.webkitDecodedFrameCount?(i=this._mediaElement.webkitDecodedFrameCount,n=this._mediaElement.webkitDroppedFrameCount):t=!1;return t&&(e.decodedFrames=i,e.droppedFrames=n),e},enumerable:!1,configurable:!0}),e.prototype._onvLoadedMetadata=function(e){null!=this._pendingSeekTime&&(this._mediaElement.currentTime=this._pendingSeekTime,this._pendingSeekTime=null),this._emitter.emit(l.MEDIA_INFO,this.mediaInfo)},e.prototype._reportStatisticsInfo=function(){this._emitter.emit(l.STATISTICS_INFO,this.statisticsInfo)},e}();n.a.install();var C={createPlayer:function(e,t){var i=e;if(null==i||"object"!=typeof i)throw new A.b("MediaDataSource must be an javascript object!");if(!i.hasOwnProperty("type"))throw new A.b("MediaDataSource must has type field to indicate video file type!");switch(i.type){case"mse":case"mpegts":case"m2ts":case"flv":return new k(i,t);default:return new D(i,t)}},isSupported:function(){return o.supportMSEH264Playback()},getFeatureList:function(){return o.getFeatureList()}};C.BaseLoader=d.a,C.LoaderStatus=d.c,C.LoaderErrors=d.b,C.Events=l,C.ErrorTypes=L,C.ErrorDetails=w,C.MSEPlayer=k,C.NativePlayer=D,C.LoggingControl=m.a,Object.defineProperty(C,"version",{enumerable:!0,get:function(){return"1.7.3"}});t.default=C}])}));
//# sourceMappingURL=mpegts.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(5579);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});