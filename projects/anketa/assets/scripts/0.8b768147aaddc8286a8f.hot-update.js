webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	
		(0, _jquery2.default)(function () {
			(0, _jquery2.default)("#slider-range-max").slider({
				range: "max",
				min: 1,
				max: 4,
				value: 2
			});
		});
	});

/***/ }
])
//# sourceMappingURL=0.8b768147aaddc8286a8f.hot-update.js.map