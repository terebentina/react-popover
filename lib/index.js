module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/lib/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.PopoverWrapper = exports.Popover = exports.popoverStore = undefined;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(1);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _function = __webpack_require__(2);

	var _function2 = _interopRequireDefault(_function);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//import './Popover.scss';

	var PopoverStore = function () {
		function PopoverStore() {
			_classCallCheck(this, PopoverStore);

			this.callbacks = {};
		}

		_createClass(PopoverStore, [{
			key: 'on',
			value: function on(event, cb) {
				if (!this.callbacks[event]) {
					this.callbacks[event] = [];
				}
				this.callbacks[event].push(cb);
			}
		}, {
			key: 'trigger',
			value: function trigger(event) {
				if (this.callbacks[event]) {
					this.callbacks[event].map(function (cb) {
						return cb();
					});
				}
			}
		}, {
			key: 'off',
			value: function off(event, cb) {
				if (this.callbacks[event]) {
					var idx = this.callbacks[event].indexOf(cb);
					if (idx > -1) {
						this.callbacks = [].concat(_toConsumableArray(this.callbacks.slice(0, idx)), _toConsumableArray(this.callbacks.slice(idx + 1)));
					}
				}
			}
		}]);

		return PopoverStore;
	}();

	var popoverStore = exports.popoverStore = new PopoverStore();

	var Popover = exports.Popover = function (_React$Component) {
		_inherits(Popover, _React$Component);

		function Popover() {
			var _Object$getPrototypeO;

			var _temp, _this, _ret;

			_classCallCheck(this, Popover);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Popover)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
				isPopoverShown: false
			}, _this.shouldComponentUpdate = _function2.default, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Popover, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				popoverStore.on('hide', this.hide.bind(this));
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				popoverStore.off('hide', this.hide.bind(this));
			}
		}, {
			key: 'show',
			value: function show() {
				this.immune = true;
				this.setState({ isPopoverShown: true });
			}
		}, {
			key: 'hide',
			value: function hide() {
				if (!this.immune) {
					this.setState({ isPopoverShown: false });
				}
				this.immune = false;
			}
		}, {
			key: 'toggle',
			value: function toggle(e) {
				e.preventDefault();
				if (this.state.isPopoverShown) {
					this.hide();
				} else {
					this.show();
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var popoverClasses = (0, _classnames2.default)('popover', this.props.className, 'popover--' + this.props.position, { 'popover--active': this.state.isPopoverShown });

				return _react2.default.createElement(
					'div',
					{ className: popoverClasses },
					_react2.default.createElement(
						'a',
						{ href: '#', onClick: this.toggle.bind(this), className: 'popover__trigger' },
						this.props.trigger
					),
					_react2.default.createElement(
						'div',
						{ className: 'popover__content' },
						this.props.children
					)
				);
			}
		}]);

		return Popover;
	}(_react2.default.Component);

	Popover.propTypes = {
		trigger: _react2.default.PropTypes.element,
		position: _react2.default.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
		className: _react2.default.PropTypes.string,
		children: _react2.default.PropTypes.node
	};
	Popover.defaultProps = {
		position: 'top'
	};

	var PopoverWrapper = exports.PopoverWrapper = function (_React$Component2) {
		_inherits(PopoverWrapper, _React$Component2);

		function PopoverWrapper() {
			_classCallCheck(this, PopoverWrapper);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(PopoverWrapper).apply(this, arguments));
		}

		_createClass(PopoverWrapper, [{
			key: 'hidePopovers',
			value: function hidePopovers() {
				popoverStore.trigger('hide');
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					_extends({ onClick: this.hidePopovers, onTouchEnd: this.hidePopovers }, this.props),
					this.props.children
				);
			}
		}]);

		return PopoverWrapper;
	}(_react2.default.Component);

	PopoverWrapper.propTypes = {
		children: _react2.default.PropTypes.node
	};
	exports.default = Popover;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = shouldPureComponentUpdate;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _shallowEqual = __webpack_require__(3);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function shouldPureComponentUpdate(nextProps, nextState) {
	  return !(0, _shallowEqual2['default'])(this.props, nextProps) || !(0, _shallowEqual2['default'])(this.state, nextState);
	}

	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = shallowEqual;

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ }
/******/ ]);