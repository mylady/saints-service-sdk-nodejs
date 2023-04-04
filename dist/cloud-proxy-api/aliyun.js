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

var Aliyun = /*#__PURE__*/function () {
  function Aliyun(url, token) {
    (0, _classCallCheck2["default"])(this, Aliyun);
    this.url = url;
    this.token = token;
  }

  (0, _createClass2["default"])(Aliyun, [{
    key: "sendSms",
    value: function () {
      var _sendSms = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(sms) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _got["default"])("".concat(this.url, "/aliyun/sms"), {
                  method: 'POST',
                  headers: {
                    fix_token: this.token
                  },
                  json: sms,
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function sendSms(_x) {
        return _sendSms.apply(this, arguments);
      }

      return sendSms;
    }() //audio should be Buffer

  }, {
    key: "voiceCommand",
    value: function () {
      var _voiceCommand = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(audio) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _got["default"])("".concat(this.url, "/aliyun/voice/command"), {
                  method: 'POST',
                  headers: {
                    fix_token: this.token
                  },
                  body: audio,
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

      function voiceCommand(_x2) {
        return _voiceCommand.apply(this, arguments);
      }

      return voiceCommand;
    }()
  }]);
  return Aliyun;
}();

exports["default"] = Aliyun;