exports.id = "main";
exports.modules = {

/***/ "../../../../src/App.js":
/*!*********************************************************************************************!*\
  !*** /Users/rajanchandi/MEGA/Lesspod Customers/Lesspod.com/lesspod/client/react/src/App.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\");\n\nvar _app = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n\nvar firebase = _interopRequireWildcard(_app);\n\n__webpack_require__(/*! sanitize.css */ \"../../../sanitize.css/sanitize.css\");\n\n__webpack_require__(/*! bulma/css/bulma.css */ \"../../../bulma/css/bulma.css\");\n\n__webpack_require__(/*! font-awesome/css/font-awesome.css */ \"../../../font-awesome/css/font-awesome.css\");\n\nvar _reactEasyState = __webpack_require__(/*! react-easy-state */ \"react-easy-state\");\n\n__webpack_require__(/*! ./styles/minireset.css */ \"../../../../src/styles/minireset.css\");\n\n__webpack_require__(/*! ./styles/common.css */ \"../../../../src/styles/common.css\");\n\n__webpack_require__(/*! ./styles/misc.css */ \"../../../../src/styles/misc.css\");\n\n__webpack_require__(/*! ./styles/theme-overrides.css */ \"../../../../src/styles/theme-overrides.css\");\n\n__webpack_require__(/*! ./startup/init */ \"../../../../src/startup/init.js\");\n\nvar _Routes = __webpack_require__(/*! ./config/Routes */ \"../../../../src/config/Routes.jsx\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _userStore = __webpack_require__(/*! ./stores/userStore */ \"../../../../src/stores/userStore.js\");\n\nvar _userStore2 = _interopRequireDefault(_userStore);\n\nvar _firebase = __webpack_require__(/*! ./api/firebase */ \"../../../../src/api/firebase.js\");\n\nvar _CustomLoader = __webpack_require__(/*! ./components/CustomLoader */ \"../../../../src/components/CustomLoader.jsx\");\n\nvar _CustomLoader2 = _interopRequireDefault(_CustomLoader);\n\nvar _utils = __webpack_require__(/*! ./utils/utils */ \"../../../../src/utils/utils.js\");\n\nvar _settingsStore = __webpack_require__(/*! ./stores/settingsStore */ \"../../../../src/stores/settingsStore.js\");\n\nvar _settingsStore2 = _interopRequireDefault(_settingsStore);\n\nvar _dataStore = __webpack_require__(/*! ./stores/dataStore */ \"../../../../src/stores/dataStore.js\");\n\nvar _dataStore2 = _interopRequireDefault(_dataStore);\n\nvar _CustomFavicon = __webpack_require__(/*! ./components/CustomFavicon */ \"../../../../src/components/CustomFavicon.jsx\");\n\nvar _ScrollToTopButton = __webpack_require__(/*! ./components/ScrollToTopButton */ \"../../../../src/components/ScrollToTopButton.jsx\");\n\n__webpack_require__(/*! react-image-gallery/styles/css/image-gallery.css */ \"../../../react-image-gallery/styles/css/image-gallery.css\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// Image gallery for the landing page\n\n\nvar styles = {\n  loaderContainer: {\n    width: '100vw',\n    height: '100vh',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    backgroundColor: '#FFFFFF'\n  }\n};\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      firebase.auth().onAuthStateChanged(function (user) {\n        (function () {\n          (0, _firebase.getSettingsFromFbase)().then(function (response) {\n            if (response.error) {\n              (0, _utils.showAlert)(response.error.message);\n            } else if (response.data) {\n              _settingsStore2.default.global = response.data.global;\n              _settingsStore2.default.landingPage = response.data.landingPage;\n              _settingsStore2.default.footer = response.data.footer;\n            }\n          });\n\n          return (0, _firebase.getAllMenusFromFbase)().then(function (res) {\n            if (res.error) {\n              (0, _utils.showAlert)(res.error.message);\n            } else {\n              _dataStore2.default.menus = res.data;\n            }\n          });\n        }).then(function () {\n          // this.setUserStoreData(user);\n          if (user) {\n            (0, _firebase.getUserProfileFromFbase)(user.uid).then(function (res) {\n              if (res.error) {\n                (0, _utils.showAlert)(res.error.message);\n              } else {\n                _userStore2.default.profileData = res.data;\n              }\n              _this2.setState({ isLoading: false });\n            });\n          } else {\n            _this2.setState({ isLoading: false });\n            _userStore2.default.profileData = null;\n          }\n          _this2.state = {\n            isLoading: true\n          };\n        });\n      });\n    }\n\n    // getCommonFbaseData = () => {\n    //   getSettingsFromFbase().then(response => {\n    //     if (response.error) {\n    //       showAlert(response.error.message);\n    //     } else if (response.data) {\n    //       settingsStore.global = response.data.global;\n    //       settingsStore.landingPage = response.data.landingPage;\n    //       settingsStore.footer = response.data.footer;\n    //     }\n    //   });\n\n    //   return getAllMenusFromFbase().then(res => {\n    //     if (res.error) {\n    //       showAlert(res.error.message);\n    //     } else {\n    //       dataStore.menus = res.data;\n    //     }\n    //   });\n    // };\n\n    // setUserStoreData = user => {\n    //   if (user) {\n    //     getUserProfileFromFbase(user.uid).then(res => {\n    //       if (res.error) {\n    //         showAlert(res.error.message);\n    //       } else {\n    //         userStore.profileData = res.data;\n    //       }\n    //       this.setState({ isLoading: false });\n    //     });\n    //   } else {\n    //     this.setState({ isLoading: false });\n    //     userStore.profileData = null;\n    //   }\n    // };\n\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_CustomFavicon.CustomFavicon, null),\n        _react2.default.createElement(_ScrollToTopButton.STTButton, null),\n        this.state.isLoading ? _react2.default.createElement(\n          'div',\n          { style: styles.loaderContainer },\n          _react2.default.createElement(_CustomLoader2.default, null)\n        ) : _react2.default.createElement(_Routes2.default, null)\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = (0, _reactHotLoader.hot)(module)((0, _reactEasyState.view)(App));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/cra-universal/node_modules/webpack/buildin/module.js */ \"../../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:////Users/rajanchandi/MEGA/Lesspod_Customers/Lesspod.com/lesspod/client/react/src/App.js?");

/***/ })

};