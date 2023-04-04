"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _got = _interopRequireDefault(require("got"));

var LogAPI = /*#__PURE__*/function () {
  function LogAPI() {
    (0, _classCallCheck2["default"])(this, LogAPI);
    this.accessToken = '';
  }

  (0, _createClass2["default"])(LogAPI, [{
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!LogAPI.headerToken) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return (0, _got["default"])("".concat(LogAPI.url, "/accesstoken"), {
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
    key: "addAccessLog",
    value: function () {
      var _addAccessLog = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(log) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getAccessToken();

              case 2:
                _context2.next = 4;
                return (0, _got["default"])("".concat(LogAPI.url, "/accesslog"), {
                  method: 'POST',
                  headers: {
                    fix_token: LogAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: log,
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addAccessLog(_x) {
        return _addAccessLog.apply(this, arguments);
      }

      return addAccessLog;
    }()
  }, {
    key: "getAccessLog",
    value: function () {
      var _getAccessLog = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(query) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context3.next = 5;
                return (0, _got["default"])("".concat(LogAPI.url, "/accesslog"), {
                  method: 'GET',
                  headers: {
                    fix_token: LogAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 5:
                return _context3.abrupt("return", _context3.sent);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAccessLog(_x2) {
        return _getAccessLog.apply(this, arguments);
      }

      return getAccessLog;
    }()
  }, {
    key: "addExtAccessLog",
    value: function () {
      var _addExtAccessLog = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(log) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getAccessToken();

              case 2:
                _context4.next = 4;
                return (0, _got["default"])("".concat(LogAPI.url, "/ext/accesslog"), {
                  method: 'POST',
                  headers: {
                    fix_token: LogAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: log,
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 4:
                return _context4.abrupt("return", _context4.sent);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function addExtAccessLog(_x3) {
        return _addExtAccessLog.apply(this, arguments);
      }

      return addExtAccessLog;
    }()
  }, {
    key: "getExtAccessLog",
    value: function () {
      var _getExtAccessLog = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(query) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context5.next = 5;
                return (0, _got["default"])("".concat(LogAPI.url, "/ext/accesslog"), {
                  method: 'GET',
                  headers: {
                    fix_token: LogAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 5:
                return _context5.abrupt("return", _context5.sent);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getExtAccessLog(_x4) {
        return _getExtAccessLog.apply(this, arguments);
      }

      return getExtAccessLog;
    }()
  }], [{
    key: "initialize",
    value: function initialize(url) {
      var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (typeof url !== 'string') {
        throw new Error('invalid url');
      }

      if (url.lastIndexOf('/') === url.length - 1) {
        LogAPI.url = url.substring(0, url.lastIndexOf('/'));
      } else {
        LogAPI.url = url;
      }

      LogAPI.headerToken = token;
    }
  }]);
  return LogAPI;
}();

exports["default"] = LogAPI;