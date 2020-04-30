/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PhotoOfTheDayPage = __webpack_require__(16);

var _PhotoOfTheDayPage2 = _interopRequireDefault(_PhotoOfTheDayPage);

var _App = __webpack_require__(22);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
    routes: [_extends({}, _PhotoOfTheDayPage2.default)]
})];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var GET_PHOTOS_OF_THE_MONTH = exports.GET_PHOTOS_OF_THE_MONTH = 'GET_PHOTOS_OF_THE_MONTH';

var getPhotosOfTheMonth = exports.getPhotosOfTheMonth = function getPhotosOfTheMonth(monthYear) {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return api.get('/photography/photo-of-the-day/_jcr_content/.gallery.' + monthYear + '.json');

                        case 2:
                            res = _context.sent;


                            dispatch({
                                type: GET_PHOTOS_OF_THE_MONTH,
                                data: res.data.items,
                                monthYear: monthYear
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_ROOT = exports.API_ROOT = 'https://www.nationalgeographic.com';

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(12);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(25);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(1);

var _expressHttpProxy = __webpack_require__(30);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

var _constants = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//proxy set up
app.use('/api', (0, _expressHttpProxy2.default)(_constants.API_ROOT));

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
    var store = (0, _createStore2.default)(req);

    //init and load data to store
    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route,
            match = _ref.match;

        return route.loadData ? route.loadData(store) : Promise.resolve(null);
    });

    Promise.all(promises).then(function () {
        var context = {};
        var content = (0, _renderer2.default)(req, store, context);
        // if (context.notFound) res.status(404);
        res.send(content);
    });
});

app.listen(3000, function () {
    console.log('Listening to port 3000');
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(13);

var _reactRouterDom = __webpack_require__(14);

var _reactRedux = __webpack_require__(2);

var _reactHelmet = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(1);

var _serializeJavascript = __webpack_require__(15);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

var _style = __webpack_require__(23);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path, context: context },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));

    var helmet = _reactHelmet.Helmet.renderStatic();

    return '\n        <html>\n            <head>\n                <style>' + _style2.default + '</style>\n                ' + helmet.title.toString() + '\n                ' + helmet.meta.toString() + '\n            </head>\n            <body>\n                <div id="root">' + content + '</div>\n                <script>\n                    window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n                </script>\n                <script src="bundle.js"></script>\n            </body>\n        </html>\n    ';
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(5);

var _PhotoHeaderComponent = __webpack_require__(17);

var _PhotoHeaderComponent2 = _interopRequireDefault(_PhotoHeaderComponent);

var _HelmetComponent = __webpack_require__(18);

var _HelmetComponent2 = _interopRequireDefault(_HelmetComponent);

var _DateSelectorComponent = __webpack_require__(19);

var _DateSelectorComponent2 = _interopRequireDefault(_DateSelectorComponent);

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoOfTheDayPage = function PhotoOfTheDayPage(_ref) {
    var photos = _ref.photos,
        getPhotosOfTheMonth = _ref.getPhotosOfTheMonth,
        monthYear = _ref.monthYear;

    var _useState = (0, _react.useState)((0, _moment2.default)(new Date())),
        _useState2 = _slicedToArray(_useState, 2),
        date = _useState2[0],
        setDate = _useState2[1];

    var findPhoto = function findPhoto() {
        var dateFormattedAsPublishDate = date.format('MMMM D, YYYY'); // publishDate format in NatGeo JSON
        var p = photos.find(function (p) {
            return p.publishDate === dateFormattedAsPublishDate;
        });
        if (!p) p = photos[0]; // default latest if no photo was found
        return p;
    };

    (0, _react.useEffect)(function () {
        var formattedDate = getFormattedDate(date);
        if (formattedDate !== monthYear) //if it is the same month and year, we already have all the photos
            getPhotosOfTheMonth(formattedDate);
    }, [date]);

    var renderPhoto = function renderPhoto() {
        var photo = findPhoto();

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_DateSelectorComponent2.default, { date: date, setDate: setDate }),
            photo ? _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_HelmetComponent2.default, { photo: photo }),
                _react2.default.createElement(
                    'div',
                    { className: 'bgimg-1', style: { backgroundImage: 'url(' + photo.image.uri + ')' } },
                    _react2.default.createElement(_PhotoHeaderComponent2.default, { title: photo.image.title, description: photo.social['og:description'] })
                )
            ) : _react2.default.createElement(_PhotoHeaderComponent2.default, { title: 'Photo not found', description: 'Try another date' })
        );
    };

    return renderPhoto();
};

var getFormattedDate = function getFormattedDate(date) {
    return date.format('YYYY-MM');
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        photos: state.photo.photosOfTheMonth,
        monthYear: state.photo.monthYear
    };
};

var loadData = function loadData(store) {
    return store.dispatch((0, _actions.getPhotosOfTheMonth)(getFormattedDate((0, _moment2.default)(new Date()))));
};

exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { getPhotosOfTheMonth: _actions.getPhotosOfTheMonth })(PhotoOfTheDayPage)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoHeaderComponent = function PhotoHeaderComponent(_ref) {
    var title = _ref.title,
        description = _ref.description;

    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "div",
            { className: "captionTitle" },
            _react2.default.createElement(
                "span",
                { className: "borderTitle" },
                title
            ),
            _react2.default.createElement("br", null)
        ),
        _react2.default.createElement(
            "div",
            { className: "captionDescription" },
            _react2.default.createElement(
                "span",
                { className: "borderDescription" },
                description
            ),
            _react2.default.createElement("br", null)
        )
    );
};

exports.default = PhotoHeaderComponent;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HelmetComponent = function HelmetComponent(_ref) {
    var photo = _ref.photo;

    return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
            "title",
            null,
            "NatGEO photo of the day: " + photo.image.title
        ),
        Object.keys(photo.social).map(function (key) {
            return _react2.default.createElement("meta", { key: key, property: key, content: photo.social[key] });
        }),
        _react2.default.createElement("meta", { property: "og:image", content: photo.image.uri })
    );
};

exports.default = HelmetComponent;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDates = __webpack_require__(20);

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import 'react-dates/lib/css/_datepicker.css';

var DateSelectorComponent = function DateSelectorComponent(_ref) {
    var date = _ref.date,
        setDate = _ref.setDate;

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        hasFocus = _useState2[0],
        setHasFocus = _useState2[1];

    return _react2.default.createElement(
        'div',
        { className: 'dateSelector' },
        _react2.default.createElement(_reactDates.SingleDatePicker, {
            block: true,
            noBorder: true,
            isOutsideRange: function isOutsideRange(day) {
                return day.isAfter((0, _moment2.default)(new Date())) || day.isBefore((0, _moment2.default)('01-01-2009'));
            } // 01-01-2009 starts the NatGeo archive
            , date: date,
            onDateChange: function onDateChange(date) {
                return date ? setDate(date) : null;
            },
            displayFormat: 'DD-MM-YYYY',
            id: 'dateSelector',
            openDirection: 'down',
            numberOfMonths: 1,
            focused: hasFocus,
            keepOpenOnDateSelect: true,
            onFocusChange: function onFocusChange(_ref2) {
                var focused = _ref2.focused;
                return setHasFocus(focused);
            }
        })
    );
};

exports.default = DateSelectorComponent;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dates");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dates/initialize");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;


    return _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

exports.default = {
    component: App
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(24);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body{\r\n    overflow: hidden;\r\n}\r\n\r\n.bgimg-1 {\r\n    opacity: 0.75;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 100%;\r\n    width:100%;\r\n    display:block;\r\n    position:absolute;\r\n    bottom:0;\r\n    right:0;\r\n    transition: background 0.5s ease-out 0.3s, transform .7s;\r\n}\r\n\r\n.bgimg-1:hover {\r\n    -ms-transform: scale(1.1); /* IE 9 */\r\n    -webkit-transform: scale(1.1); /* Safari 3-8 */\r\n    transform: scale(1.1);\r\n}\r\n\r\n.captionDescription {\r\n    position: absolute;\r\n    right: 10%;\r\n    top: 70%;\r\n    width: 40%;\r\n    text-align: right;\r\n    color: #000;\r\n}\r\n\r\n.captionDescription span.borderDescription {\r\n    opacity: 0.7;\r\n    background-color: #111;\r\n    color: #fff;\r\n    padding: 5px;\r\n    font-size: 15px;\r\n    letter-spacing: 5px;\r\n    line-height: 1.7;\r\n}\r\n\r\n.captionTitle{\r\n    position: absolute;\r\n    left: 0;\r\n    top: 20%;\r\n    width: 50%;\r\n    text-align: center;\r\n    color: #000;\r\n}\r\n\r\n.captionTitle span.borderTitle {\r\n    opacity: 0.7;\r\n    background-color: #111;\r\n    color: #fff;\r\n    padding: 8px;\r\n    font-size: 25px;\r\n    letter-spacing: 10px;\r\n}\r\n\r\n.dateSelector {\r\n    position: absolute;\r\n    z-index: 1;\r\n    right: 10%;\r\n}\r\n\r\n/* everywhere else */\r\n* {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n/*!*Airbnb date picker*!*/\r\n.PresetDateRangePicker_panel {\r\n    padding: 0 22px 11px\r\n}\r\n.PresetDateRangePicker_button {\r\n    position: relative;\r\n    height: 100%;\r\n    text-align: center;\r\n    background: 0 0;\r\n    border: 2px solid #00a699;\r\n    color: #00a699;\r\n    padding: 4px 12px;\r\n    margin-right: 8px;\r\n    font: inherit;\r\n    font-weight: 700;\r\n    line-height: normal;\r\n    overflow: visible;\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    cursor: pointer\r\n}\r\n.PresetDateRangePicker_button:active {\r\n    outline: 0\r\n}\r\n.PresetDateRangePicker_button__selected {\r\n    color: #fff;\r\n    background: #00a699\r\n}\r\n.SingleDatePickerInput {\r\n    display: inline-block;\r\n    background-color: #fff\r\n}\r\n.SingleDatePickerInput__withBorder {\r\n    border-radius: 2px;\r\n    border: 1px solid #dbdbdb\r\n}\r\n.SingleDatePickerInput__rtl {\r\n    direction: rtl\r\n}\r\n.SingleDatePickerInput__disabled {\r\n    background-color: #f2f2f2\r\n}\r\n.SingleDatePickerInput__block {\r\n    display: block\r\n}\r\n.SingleDatePickerInput__showClearDate {\r\n    padding-right: 30px\r\n}\r\n.SingleDatePickerInput_clearDate {\r\n    background: 0 0;\r\n    border: 0;\r\n    color: inherit;\r\n    font: inherit;\r\n    line-height: normal;\r\n    overflow: visible;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    margin: 0 10px 0 5px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    -ms-transform: translateY(-50%);\r\n    transform: translateY(-50%)\r\n}\r\n.SingleDatePickerInput_clearDate__default:focus,\r\n.SingleDatePickerInput_clearDate__default:hover {\r\n    background: #dbdbdb;\r\n    border-radius: 50%\r\n}\r\n.SingleDatePickerInput_clearDate__small {\r\n    padding: 6px\r\n}\r\n.SingleDatePickerInput_clearDate__hide {\r\n    visibility: hidden\r\n}\r\n.SingleDatePickerInput_clearDate_svg {\r\n    fill: #82888a;\r\n    height: 12px;\r\n    width: 15px;\r\n    vertical-align: middle\r\n}\r\n.SingleDatePickerInput_clearDate_svg__small {\r\n    height: 9px\r\n}\r\n.SingleDatePickerInput_calendarIcon {\r\n    background: 0 0;\r\n    border: 0;\r\n    color: inherit;\r\n    font: inherit;\r\n    line-height: normal;\r\n    overflow: visible;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    padding: 10px;\r\n    margin: 0 5px 0 10px\r\n}\r\n.SingleDatePickerInput_calendarIcon_svg {\r\n    fill: #82888a;\r\n    height: 15px;\r\n    width: 14px;\r\n    vertical-align: middle\r\n}\r\n.SingleDatePicker {\r\n    position: relative;\r\n    display: inline-block\r\n}\r\n.SingleDatePicker__block {\r\n    display: block\r\n}\r\n.SingleDatePicker_picker {\r\n    z-index: 1;\r\n    background-color: #fff;\r\n    position: absolute\r\n}\r\n.SingleDatePicker_picker__rtl {\r\n    direction: rtl\r\n}\r\n.SingleDatePicker_picker__directionLeft {\r\n    left: 0\r\n}\r\n.SingleDatePicker_picker__directionRight {\r\n    right: 0\r\n}\r\n.SingleDatePicker_picker__portal {\r\n    background-color: rgba(0,0,0,.3);\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%\r\n}\r\n.SingleDatePicker_picker__fullScreenPortal {\r\n    background-color: #fff\r\n}\r\n.SingleDatePicker_closeButton {\r\n    background: 0 0;\r\n    border: 0;\r\n    color: inherit;\r\n    font: inherit;\r\n    line-height: normal;\r\n    overflow: visible;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 15px;\r\n    z-index: 2\r\n}\r\n.SingleDatePicker_closeButton:focus,\r\n.SingleDatePicker_closeButton:hover {\r\n    color: darken(#cacccd,10%);\r\n    text-decoration: none\r\n}\r\n.SingleDatePicker_closeButton_svg {\r\n    height: 15px;\r\n    width: 15px;\r\n    fill: #cacccd\r\n}\r\n.DayPickerKeyboardShortcuts_buttonReset {\r\n    background: 0 0;\r\n    border: 0;\r\n    border-radius: 0;\r\n    color: inherit;\r\n    font: inherit;\r\n    line-height: normal;\r\n    overflow: visible;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    font-size: 14px\r\n}\r\n.DayPickerKeyboardShortcuts_buttonReset:active {\r\n    outline: 0\r\n}\r\n.DayPickerKeyboardShortcuts_show {\r\n    width: 33px;\r\n    height: 26px;\r\n    position: absolute;\r\n    z-index: 2\r\n}\r\n.DayPickerKeyboardShortcuts_show::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute\r\n}\r\n.DayPickerKeyboardShortcuts_show__bottomRight {\r\n    bottom: 0;\r\n    right: 0\r\n}\r\n.DayPickerKeyboardShortcuts_show__bottomRight::before {\r\n    border-top: 26px solid transparent;\r\n    border-right: 33px solid #00a699;\r\n    bottom: 0;\r\n    right: 0\r\n}\r\n.DayPickerKeyboardShortcuts_show__bottomRight:hover::before {\r\n    border-right: 33px solid #008489\r\n}\r\n.DayPickerKeyboardShortcuts_show__topRight {\r\n    top: 0;\r\n    right: 0\r\n}\r\n.DayPickerKeyboardShortcuts_show__topRight::before {\r\n    border-bottom: 26px solid transparent;\r\n    border-right: 33px solid #00a699;\r\n    top: 0;\r\n    right: 0\r\n}\r\n.DayPickerKeyboardShortcuts_show__topRight:hover::before {\r\n    border-right: 33px solid #008489\r\n}\r\n.DayPickerKeyboardShortcuts_show__topLeft {\r\n    top: 0;\r\n    left: 0\r\n}\r\n.DayPickerKeyboardShortcuts_show__topLeft::before {\r\n    border-bottom: 26px solid transparent;\r\n    border-left: 33px solid #00a699;\r\n    top: 0;\r\n    left: 0\r\n}\r\n.DayPickerKeyboardShortcuts_show__topLeft:hover::before {\r\n    border-left: 33px solid #008489\r\n}\r\n.DayPickerKeyboardShortcuts_showSpan {\r\n    color: #fff;\r\n    position: absolute\r\n}\r\n.DayPickerKeyboardShortcuts_showSpan__bottomRight {\r\n    bottom: 0;\r\n    right: 5px\r\n}\r\n.DayPickerKeyboardShortcuts_showSpan__topRight {\r\n    top: 1px;\r\n    right: 5px\r\n}\r\n.DayPickerKeyboardShortcuts_showSpan__topLeft {\r\n    top: 1px;\r\n    left: 5px\r\n}\r\n.DayPickerKeyboardShortcuts_panel {\r\n    overflow: auto;\r\n    background: #fff;\r\n    border: 1px solid #dbdbdb;\r\n    border-radius: 2px;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 2;\r\n    padding: 22px;\r\n    margin: 33px;\r\n    text-align: left\r\n}\r\n.DayPickerKeyboardShortcuts_title {\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    margin: 0\r\n}\r\n.DayPickerKeyboardShortcuts_list {\r\n    list-style: none;\r\n    padding: 0;\r\n    font-size: 14px\r\n}\r\n.DayPickerKeyboardShortcuts_close {\r\n    position: absolute;\r\n    right: 22px;\r\n    top: 22px;\r\n    z-index: 2\r\n}\r\n.DayPickerKeyboardShortcuts_close:active {\r\n    outline: 0\r\n}\r\n.DayPickerKeyboardShortcuts_closeSvg {\r\n    height: 15px;\r\n    width: 15px;\r\n    fill: #cacccd\r\n}\r\n.DayPickerKeyboardShortcuts_closeSvg:focus,\r\n.DayPickerKeyboardShortcuts_closeSvg:hover {\r\n    fill: #82888a\r\n}\r\n.CalendarDay {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    text-align: center\r\n}\r\n.CalendarDay:active {\r\n    outline: 0\r\n}\r\n.CalendarDay__defaultCursor {\r\n    cursor: default\r\n}\r\n.CalendarDay__default {\r\n    border: 1px solid #e4e7e7;\r\n    color: #484848;\r\n    background: #fff\r\n}\r\n.CalendarDay__default:hover {\r\n    background: #e4e7e7;\r\n    border: 1px solid #e4e7e7;\r\n    color: inherit\r\n}\r\n.CalendarDay__hovered_offset {\r\n    background: #f4f5f5;\r\n    border: 1px double #e4e7e7;\r\n    color: inherit\r\n}\r\n.CalendarDay__outside {\r\n    border: 0;\r\n    background: #fff;\r\n    color: #484848\r\n}\r\n.CalendarDay__outside:hover {\r\n    border: 0\r\n}\r\n.CalendarDay__blocked_minimum_nights {\r\n    background: #fff;\r\n    border: 1px solid #eceeee;\r\n    color: #cacccd\r\n}\r\n.CalendarDay__blocked_minimum_nights:active,\r\n.CalendarDay__blocked_minimum_nights:hover {\r\n    background: #fff;\r\n    color: #cacccd\r\n}\r\n.CalendarDay__highlighted_calendar {\r\n    background: #ffe8bc;\r\n    color: #484848\r\n}\r\n.CalendarDay__highlighted_calendar:active,\r\n.CalendarDay__highlighted_calendar:hover {\r\n    background: #ffce71;\r\n    color: #484848\r\n}\r\n.CalendarDay__selected_span {\r\n    background: #66e2da;\r\n    border: 1px double #33dacd;\r\n    color: #fff\r\n}\r\n.CalendarDay__selected_span:active,\r\n.CalendarDay__selected_span:hover {\r\n    background: #33dacd;\r\n    border: 1px double #33dacd;\r\n    color: #fff\r\n}\r\n.CalendarDay__selected,\r\n.CalendarDay__selected:active,\r\n.CalendarDay__selected:hover {\r\n    background: #00a699;\r\n    border: 1px double #00a699;\r\n    color: #fff\r\n}\r\n.CalendarDay__hovered_span,\r\n.CalendarDay__hovered_span:hover {\r\n    background: #b2f1ec;\r\n    border: 1px double #80e8e0;\r\n    color: #007a87\r\n}\r\n.CalendarDay__hovered_span:active {\r\n    background: #80e8e0;\r\n    border: 1px double #80e8e0;\r\n    color: #007a87\r\n}\r\n.CalendarDay__blocked_calendar,\r\n.CalendarDay__blocked_calendar:active,\r\n.CalendarDay__blocked_calendar:hover {\r\n    background: #cacccd;\r\n    border: 1px solid #cacccd;\r\n    color: #82888a\r\n}\r\n.CalendarDay__blocked_out_of_range,\r\n.CalendarDay__blocked_out_of_range:active,\r\n.CalendarDay__blocked_out_of_range:hover {\r\n    background: #fff;\r\n    border: 1px solid #e4e7e7;\r\n    color: #cacccd\r\n}\r\n.CalendarDay__hovered_start_first_possible_end {\r\n    background: #eceeee;\r\n    border: 1px double #eceeee\r\n}\r\n.CalendarDay__hovered_start_blocked_min_nights {\r\n    background: #eceeee;\r\n    border: 1px double #e4e7e7\r\n}\r\n.CalendarMonth {\r\n    background: #fff;\r\n    text-align: center;\r\n    vertical-align: top;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none\r\n}\r\n.CalendarMonth_table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0\r\n}\r\n.CalendarMonth_verticalSpacing {\r\n    border-collapse: separate\r\n}\r\n.CalendarMonth_caption {\r\n    color: #484848;\r\n    font-size: 18px;\r\n    text-align: center;\r\n    padding-top: 22px;\r\n    padding-bottom: 37px;\r\n    caption-side: initial\r\n}\r\n.CalendarMonth_caption__verticalScrollable {\r\n    padding-top: 12px;\r\n    padding-bottom: 7px\r\n}\r\n.CalendarMonthGrid {\r\n    background: #fff;\r\n    text-align: left;\r\n    z-index: 0\r\n}\r\n.CalendarMonthGrid__animating {\r\n    z-index: 1\r\n}\r\n.CalendarMonthGrid__horizontal {\r\n    position: absolute;\r\n    left: 9px\r\n}\r\n.CalendarMonthGrid__vertical,\r\n.CalendarMonthGrid__vertical_scrollable {\r\n    margin: 0 auto\r\n}\r\n.CalendarMonthGrid_month__horizontal {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    min-height: 100%\r\n}\r\n.CalendarMonthGrid_month__hideForAnimation {\r\n    position: absolute;\r\n    z-index: -1;\r\n    opacity: 0;\r\n    pointer-events: none\r\n}\r\n.CalendarMonthGrid_month__hidden {\r\n    visibility: hidden\r\n}\r\n.DayPickerNavigation {\r\n    position: relative;\r\n    z-index: 2\r\n}\r\n.DayPickerNavigation__horizontal {\r\n    height: 0\r\n}\r\n.DayPickerNavigation__verticalScrollable_prevNav {\r\n    z-index: 1\r\n}\r\n.DayPickerNavigation__verticalDefault {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 52px;\r\n    bottom: 0;\r\n    left: 0\r\n}\r\n.DayPickerNavigation__verticalScrollableDefault {\r\n    position: relative\r\n}\r\n.DayPickerNavigation__bottom {\r\n    height: auto\r\n}\r\n.DayPickerNavigation__bottomDefault {\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    display: -webkit-box;\r\n    display: -moz-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-justify-content: space-between;\r\n    justify-content: space-between\r\n}\r\n.DayPickerNavigation_button {\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    border: 0;\r\n    padding: 0;\r\n    margin: 0\r\n}\r\n.DayPickerNavigation_button__default {\r\n    border: 1px solid #e4e7e7;\r\n    background-color: #fff;\r\n    color: #757575\r\n}\r\n.DayPickerNavigation_button__default:focus,\r\n.DayPickerNavigation_button__default:hover {\r\n    border: 1px solid #c4c4c4\r\n}\r\n.DayPickerNavigation_button__default:active {\r\n    background: #f2f2f2\r\n}\r\n.DayPickerNavigation_button__disabled {\r\n    cursor: default;\r\n    border: 1px solid #f2f2f2\r\n}\r\n.DayPickerNavigation_button__disabled:focus,\r\n.DayPickerNavigation_button__disabled:hover {\r\n    border: 1px solid #f2f2f2\r\n}\r\n.DayPickerNavigation_button__disabled:active {\r\n    background: 0 0\r\n}\r\n.DayPickerNavigation_button__horizontalDefault {\r\n    position: absolute;\r\n    top: 18px;\r\n    line-height: .78;\r\n    border-radius: 3px;\r\n    padding: 6px 9px\r\n}\r\n.DayPickerNavigation_bottomButton__horizontalDefault {\r\n    position: static;\r\n    margin: -10px 22px 30px\r\n}\r\n.DayPickerNavigation_leftButton__horizontalDefault {\r\n    left: 22px\r\n}\r\n.DayPickerNavigation_rightButton__horizontalDefault {\r\n    right: 22px\r\n}\r\n.DayPickerNavigation_button__verticalDefault {\r\n    padding: 5px;\r\n    background: #fff;\r\n    box-shadow: 0 0 5px 2px rgba(0,0,0,.1);\r\n    position: relative;\r\n    display: inline-block;\r\n    text-align: center;\r\n    height: 100%;\r\n    width: 50%\r\n}\r\n.DayPickerNavigation_nextButton__verticalDefault {\r\n    border-left: 0\r\n}\r\n.DayPickerNavigation_nextButton__verticalScrollableDefault,\r\n.DayPickerNavigation_prevButton__verticalScrollableDefault {\r\n    width: 100%\r\n}\r\n.DayPickerNavigation_svg__horizontal {\r\n    height: 19px;\r\n    width: 19px;\r\n    fill: #82888a;\r\n    display: block\r\n}\r\n.DayPickerNavigation_svg__vertical {\r\n    height: 42px;\r\n    width: 42px;\r\n    fill: #484848\r\n}\r\n.DayPickerNavigation_svg__disabled {\r\n    fill: #f2f2f2\r\n}\r\n.DayPicker {\r\n    background: #fff;\r\n    position: relative;\r\n    text-align: left\r\n}\r\n.DayPicker__horizontal {\r\n    background: #fff\r\n}\r\n.DayPicker__verticalScrollable {\r\n    height: 100%\r\n}\r\n.DayPicker__hidden {\r\n    visibility: hidden\r\n}\r\n.DayPicker__withBorder {\r\n    box-shadow: 0 2px 6px rgba(0,0,0,.05),0 0 0 1px rgba(0,0,0,.07);\r\n    border-radius: 3px\r\n}\r\n.DayPicker_portal__horizontal {\r\n    box-shadow: none;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%\r\n}\r\n.DayPicker_portal__vertical {\r\n    position: initial\r\n}\r\n.DayPicker_focusRegion {\r\n    outline: 0\r\n}\r\n.DayPicker_calendarInfo__horizontal,\r\n.DayPicker_wrapper__horizontal {\r\n    display: inline-block;\r\n    vertical-align: top\r\n}\r\n.DayPicker_weekHeaders {\r\n    position: relative\r\n}\r\n.DayPicker_weekHeaders__horizontal {\r\n    margin-left: 9px\r\n}\r\n.DayPicker_weekHeader {\r\n    color: #757575;\r\n    position: absolute;\r\n    top: 62px;\r\n    z-index: 2;\r\n    text-align: left\r\n}\r\n.DayPicker_weekHeader__vertical {\r\n    left: 50%\r\n}\r\n.DayPicker_weekHeader__verticalScrollable {\r\n    top: 0;\r\n    display: table-row;\r\n    border-bottom: 1px solid #dbdbdb;\r\n    background: #fff;\r\n    margin-left: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    text-align: center\r\n}\r\n.DayPicker_weekHeader_ul {\r\n    list-style: none;\r\n    margin: 1px 0;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    font-size: 14px\r\n}\r\n.DayPicker_weekHeader_li {\r\n    display: inline-block;\r\n    text-align: center\r\n}\r\n.DayPicker_transitionContainer {\r\n    position: relative;\r\n    overflow: hidden;\r\n    border-radius: 3px\r\n}\r\n.DayPicker_transitionContainer__horizontal {\r\n    -webkit-transition: height .2s ease-in-out;\r\n    -moz-transition: height .2s ease-in-out;\r\n    transition: height .2s ease-in-out\r\n}\r\n.DayPicker_transitionContainer__vertical {\r\n    width: 100%\r\n}\r\n.DayPicker_transitionContainer__verticalScrollable {\r\n    padding-top: 20px;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    overflow-y: scroll\r\n}\r\n.DateInput {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: #fff;\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 130px;\r\n    vertical-align: middle\r\n}\r\n.DateInput__small {\r\n    width: 97px\r\n}\r\n.DateInput__block {\r\n    width: 100%\r\n}\r\n.DateInput__disabled {\r\n    background: #f2f2f2;\r\n    color: #dbdbdb\r\n}\r\n.DateInput_input {\r\n    font-weight: 200;\r\n    font-size: 19px;\r\n    line-height: 24px;\r\n    color: #484848;\r\n    background-color: #fff;\r\n    width: 100%;\r\n    padding: 11px 11px 9px;\r\n    border: 0;\r\n    border-top: 0;\r\n    border-right: 0;\r\n    border-bottom: 2px solid transparent;\r\n    border-left: 0;\r\n    border-radius: 0\r\n}\r\n.DateInput_input__small {\r\n    font-size: 15px;\r\n    line-height: 18px;\r\n    letter-spacing: .2px;\r\n    padding: 7px 7px 5px\r\n}\r\n.DateInput_input__regular {\r\n    font-weight: auto\r\n}\r\n.DateInput_input__readOnly {\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none\r\n}\r\n.DateInput_input__focused {\r\n    outline: 0;\r\n    background: #fff;\r\n    border: 0;\r\n    border-top: 0;\r\n    border-right: 0;\r\n    border-bottom: 2px solid #008489;\r\n    border-left: 0\r\n}\r\n.DateInput_input__disabled {\r\n    background: #f2f2f2;\r\n    font-style: italic\r\n}\r\n.DateInput_screenReaderMessage {\r\n    border: 0;\r\n    clip: rect(0,0,0,0);\r\n    height: 1px;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    position: absolute;\r\n    width: 1px\r\n}\r\n.DateInput_fang {\r\n    position: absolute;\r\n    width: 20px;\r\n    height: 10px;\r\n    left: 22px;\r\n    z-index: 2\r\n}\r\n.DateInput_fangShape {\r\n    fill: #fff\r\n}\r\n.DateInput_fangStroke {\r\n    stroke: #dbdbdb;\r\n    fill: transparent\r\n}\r\n.DateRangePickerInput {\r\n    background-color: #fff;\r\n    display: inline-block\r\n}\r\n.DateRangePickerInput__disabled {\r\n    background: #f2f2f2\r\n}\r\n.DateRangePickerInput__withBorder {\r\n    border-radius: 2px;\r\n    border: 1px solid #dbdbdb\r\n}\r\n.DateRangePickerInput__rtl {\r\n    direction: rtl\r\n}\r\n.DateRangePickerInput__block {\r\n    display: block\r\n}\r\n.DateRangePickerInput__showClearDates {\r\n    padding-right: 30px\r\n}\r\n.DateRangePickerInput_arrow {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    color: #484848\r\n}\r\n.DateRangePickerInput_arrow_svg {\r\n    vertical-align: middle;\r\n    fill: #484848;\r\n    height: 24px;\r\n    width: 24px\r\n}\r\n.DateRangePickerInput_clearDates {\r\n    background: 0 0;\r\n    border: 0;\r\n    color: inherit;\r\n    font: inherit;\r\n    line-height: normal;\r\n    overflow: visible;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    margin: 0 10px 0 5px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    -ms-transform: translateY(-50%);\r\n    transform: translateY(-50%)\r\n}\r\n.DateRangePickerInput_clearDates__small {\r\n    padding: 6px\r\n}\r\n.DateRangePickerInput_clearDates_default:focus,\r\n.DateRangePickerInput_clearDates_default:hover {\r\n    background: #dbdbdb;\r\n    border-radius: 50%\r\n}\r\n.DateRangePickerInput_clearDates__hide {\r\n    visibility: hidden\r\n}\r\n.DateRangePickerInput_clearDates_svg {\r\n    fill: #82888a;\r\n    height: 12px;\r\n    width: 15px;\r\n    vertical-align: middle\r\n}\r\n.DateRangePickerInput_clearDates_svg__small {\r\n    height: 9px\r\n}\r\n.DateRangePickerInput_calendarIcon {\r\n    background: 0 0;\r\n    border: 0;\r\n    color: inherit;\r\n    font: inherit;\r\n    line-height: normal;\r\n    overflow: visible;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    padding: 10px;\r\n    margin: 0 5px 0 10px\r\n}\r\n.DateRangePickerInput_calendarIcon_svg {\r\n    fill: #82888a;\r\n    height: 15px;\r\n    width: 14px;\r\n    vertical-align: middle\r\n}\r\n.DateRangePicker {\r\n    position: relative;\r\n    display: inline-block\r\n}\r\n.DateRangePicker__block {\r\n    display: block\r\n}\r\n.DateRangePicker_picker {\r\n    z-index: 1;\r\n    background-color: #fff;\r\n    position: absolute\r\n}\r\n.DateRangePicker_picker__rtl {\r\n    direction: rtl\r\n}\r\n.DateRangePicker_picker__directionLeft {\r\n    left: 0\r\n}\r\n.DateRangePicker_picker__directionRight {\r\n    right: 0\r\n}\r\n.DateRangePicker_picker__portal {\r\n    background-color: rgba(0,0,0,.3);\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%\r\n}\r\n.DateRangePicker_picker__fullScreenPortal {\r\n    background-color: #fff\r\n}\r\n.DateRangePicker_closeButton {\r\n    background: 0 0;\r\n    border: 0;\r\n    color: inherit;\r\n    font: inherit;\r\n    line-height: normal;\r\n    overflow: visible;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 15px;\r\n    z-index: 2\r\n}\r\n.DateRangePicker_closeButton:focus,\r\n.DateRangePicker_closeButton:hover {\r\n    color: darken(#cacccd,10%);\r\n    text-decoration: none\r\n}\r\n.DateRangePicker_closeButton_svg {\r\n    height: 15px;\r\n    width: 15px;\r\n    fill: #cacccd\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(7);

var _reduxThunk = __webpack_require__(26);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(27);

var _axios2 = _interopRequireDefault(_axios);

var _index = __webpack_require__(28);

var _index2 = _interopRequireDefault(_index);

var _constants = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
    var axiosInstance = _axios2.default.create({
        baseURL: _constants.API_ROOT, // no proxy on server side
        headers: { cookie: req.get('cookie') || '' // if cookie exists pass it to api
        } });

    var store = (0, _redux.createStore)(_index2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

    return store;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _redux = __webpack_require__(7);

var _reducers = __webpack_require__(29);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
   photo: _reducers2.default
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(5);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var _ref = arguments[1];
    var type = _ref.type,
        data = _ref.data,
        monthYear = _ref.monthYear;

    switch (type) {
        case _actions.GET_PHOTOS_OF_THE_MONTH:
            return { photosOfTheMonth: data, monthYear: monthYear };
        default:
            return state;
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ })
/******/ ]);