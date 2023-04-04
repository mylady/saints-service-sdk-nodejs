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

var Xinzhi = /*#__PURE__*/function () {
  function Xinzhi(url, token) {
    (0, _classCallCheck2["default"])(this, Xinzhi);
    this.url = url;
    this.token = token;
  }

  (0, _createClass2["default"])(Xinzhi, [{
    key: "weather",
    value: function () {
      var _weather = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _got["default"])("".concat(this.url, "/xinzhi/weather"), {
                  method: 'GET',
                  headers: {
                    fix_token: this.token
                  },
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

      function weather() {
        return _weather.apply(this, arguments);
      }

      return weather;
    }()
  }]);
  return Xinzhi;
}();

exports["default"] = Xinzhi;