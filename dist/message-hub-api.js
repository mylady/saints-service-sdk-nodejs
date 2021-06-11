'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var rp = require('request-promise');

var MessageHubAPI = /*#__PURE__*/function () {
  function MessageHubAPI() {
    (0, _classCallCheck2["default"])(this, MessageHubAPI);
    this.accessToken = '';
  }

  (0, _createClass2["default"])(MessageHubAPI, [{
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!MessageHubAPI.headerToken) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return rp({
                  method: 'POST',
                  uri: "".concat(MessageHubAPI.url, "/accesstoken"),
                  json: true
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
    key: "getMessage",
    value: function () {
      var _getMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(query) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context2.next = 5;
                return rp({
                  method: 'GET',
                  uri: "".concat(MessageHubAPI.url, "/message"),
                  qs: query,
                  headers: {
                    fix_token: MessageHubAPI.headerToken
                  },
                  json: true,
                  gzip: true
                });

              case 5:
                return _context2.abrupt("return", _context2.sent);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getMessage(_x) {
        return _getMessage.apply(this, arguments);
      }

      return getMessage;
    }()
  }], [{
    key: "initialize",
    value: function initialize(url) {
      var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (typeof url !== 'string') {
        throw new Error('invalid url');
      }

      if (url.lastIndexOf('/') === url.length - 1) {
        MessageHubAPI.url = url.substring(0, url.lastIndexOf('/'));
      } else {
        MessageHubAPI.url = url;
      }

      MessageHubAPI.headerToken = token;
    }
  }]);
  return MessageHubAPI;
}();

exports["default"] = MessageHubAPI;