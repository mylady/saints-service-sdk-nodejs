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

var YiTuV18 = /*#__PURE__*/function () {
  function YiTuV18(url, token) {
    (0, _classCallCheck2["default"])(this, YiTuV18);
    this.url = url;
    this.token = token;
  }

  (0, _createClass2["default"])(YiTuV18, [{
    key: "importFace",
    value: function () {
      var _importFace = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(face) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _got["default"])("".concat(this.url, "/yitu/face/v18/import"), {
                  method: 'POST',
                  headers: {
                    fix_token: this.token
                  },
                  json: face,
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

      function importFace(_x) {
        return _importFace.apply(this, arguments);
      }

      return importFace;
    }()
  }, {
    key: "searchFace",
    value: function () {
      var _searchFace = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(face) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _got["default"])("".concat(this.url, "/yitu/face/v18/search"), {
                  method: 'POST',
                  headers: {
                    fix_token: this.token
                  },
                  json: face,
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

      function searchFace(_x2) {
        return _searchFace.apply(this, arguments);
      }

      return searchFace;
    }()
  }]);
  return YiTuV18;
}();

exports["default"] = YiTuV18;