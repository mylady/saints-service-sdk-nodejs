"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _got = _interopRequireDefault(require("got"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CloudProxyAPI = /*#__PURE__*/function () {
  function CloudProxyAPI() {
    (0, _classCallCheck2["default"])(this, CloudProxyAPI);
    this.accessToken = '';
  }

  (0, _createClass2["default"])(CloudProxyAPI, [{
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!CloudProxyAPI.headerToken) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return (0, _got["default"])("".concat(CloudProxyAPI.url, "/accesstoken"), {
                  method: 'POST',
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 6:
                res = _context.sent;
                this.accessToken = res.data;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }

      return getAccessToken;
    }()
  }, {
    key: "sendSms",
    value: function () {
      var _sendSms = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(sms, type) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _got["default"])("".concat(CloudProxyAPI.url, "/sms"), {
                  method: 'POST',
                  headers: {
                    fix_token: this.token
                  },
                  searchParams: {
                    type_name: type
                  },
                  json: sms,
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function sendSms(_x, _x2) {
        return _sendSms.apply(this, arguments);
      }

      return sendSms;
    }() //audio should be Buffer

  }, {
    key: "voiceCommand",
    value: function () {
      var _voiceCommand = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(audio, type) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _got["default"])("".concat(CloudProxyAPI.url, "/voice/command"), {
                  method: 'POST',
                  headers: {
                    fix_token: this.token
                  },
                  searchParams: {
                    type_name: type
                  },
                  body: audio,
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function voiceCommand(_x3, _x4) {
        return _voiceCommand.apply(this, arguments);
      }

      return voiceCommand;
    }()
  }, {
    key: "mapSuggest",
    value: function () {
      var _mapSuggest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(query, type) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _got["default"])("".concat(CloudProxyAPI.url, "/map/suggest"), {
                  method: 'GET',
                  headers: {
                    fix_token: this.token
                  },
                  searchParam: _objectSpread(_objectSpread({}, query), {}, {
                    type_name: type
                  }),
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function mapSuggest(_x5, _x6) {
        return _mapSuggest.apply(this, arguments);
      }

      return mapSuggest;
    }()
  }, {
    key: "mapCordConvert",
    value: function () {
      var _mapCordConvert = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(query, type) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _got["default"])("".concat(CloudProxyAPI.url, "/map/coordconvert"), {
                  method: 'GET',
                  headers: {
                    fix_token: this.token
                  },
                  searchParam: _objectSpread(_objectSpread({}, query), {}, {
                    type_name: type
                  }),
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function mapCordConvert(_x7, _x8) {
        return _mapCordConvert.apply(this, arguments);
      }

      return mapCordConvert;
    }()
  }, {
    key: "weather",
    value: function () {
      var _weather = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(type) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _got["default"])("".concat(CloudProxyAPI.url, "/weather"), {
                  method: 'GET',
                  headers: {
                    fix_token: this.token
                  },
                  searchParams: {
                    type_name: type
                  },
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function weather(_x9) {
        return _weather.apply(this, arguments);
      }

      return weather;
    }()
  }, {
    key: "importFace",
    value: function () {
      var _importFace = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(face, type) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _got["default"])("".concat(CloudProxyAPI.url, "/face/import"), {
                  method: 'POST',
                  headers: {
                    fix_token: this.token
                  },
                  searchParams: {
                    type_name: type
                  },
                  json: face,
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 2:
                return _context7.abrupt("return", _context7.sent);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function importFace(_x10, _x11) {
        return _importFace.apply(this, arguments);
      }

      return importFace;
    }()
  }, {
    key: "searchFace",
    value: function () {
      var _searchFace = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(face, type) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _got["default"])("".concat(CloudProxyAPI.url, "/face/search"), {
                  method: 'POST',
                  headers: {
                    fix_token: this.token
                  },
                  searchParams: {
                    type_name: type
                  },
                  json: face,
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 2:
                return _context8.abrupt("return", _context8.sent);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function searchFace(_x12, _x13) {
        return _searchFace.apply(this, arguments);
      }

      return searchFace;
    }()
  }], [{
    key: "initialize",
    value: function initialize(url) {
      var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (typeof url !== 'string') {
        throw new Error('invalid url');
      }

      if (url.lastIndexOf('/') === url.length - 1) {
        CloudProxyAPI.url = url.substring(0, url.lastIndexOf('/'));
      } else {
        CloudProxyAPI.url = url;
      }

      CloudProxyAPI.headerToken = token;
    }
  }]);
  return CloudProxyAPI;
}();

exports["default"] = CloudProxyAPI;