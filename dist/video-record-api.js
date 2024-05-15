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

var _httpProxy = _interopRequireDefault(require("http-proxy"));

var proxy = _httpProxy["default"].createProxy();

var VideoRecordAPI = /*#__PURE__*/function () {
  function VideoRecordAPI() {
    (0, _classCallCheck2["default"])(this, VideoRecordAPI);
    this.accessToken = '';
  }

  (0, _createClass2["default"])(VideoRecordAPI, [{
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _res;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!VideoRecordAPI.headerToken) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return (0, _got["default"])("".concat(VideoRecordAPI.url, "/accesstoken"), {
                  method: 'POST',
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 6:
                _res = _context.sent;
                this.accessToken = _res.data;

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
    key: "startRecord",
    value: function () {
      var _startRecord = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getAccessToken();

              case 2:
                _context2.next = 4;
                return (0, _got["default"])("".concat(VideoRecordAPI.url, "/record/start"), {
                  method: 'POST',
                  headers: {
                    fix_token: VideoRecordAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: data,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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

      function startRecord(_x) {
        return _startRecord.apply(this, arguments);
      }

      return startRecord;
    }()
  }, {
    key: "stopRecord",
    value: function () {
      var _stopRecord = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getAccessToken();

              case 2:
                _context3.next = 4;
                return (0, _got["default"])("".concat(VideoRecordAPI.url, "/record/stop/").concat(id), {
                  method: 'POST',
                  headers: {
                    fix_token: VideoRecordAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 4:
                return _context3.abrupt("return", _context3.sent);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function stopRecord(_x2) {
        return _stopRecord.apply(this, arguments);
      }

      return stopRecord;
    }()
  }, {
    key: "downloadRecord",
    value: function () {
      var _downloadRecord = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(data) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getAccessToken();

              case 2:
                req.url = "/rest/record/download/".concat(data.folder, "/").concat(data.id, "?access_token=").concat(this.accessToken);
                proxy.web(req, res, {
                  headers: {
                    fix_token: VideoRecordAPI.headerToken
                  },
                  target: "".concat(VideoRecordAPI.host)
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function downloadRecord(_x3) {
        return _downloadRecord.apply(this, arguments);
      }

      return downloadRecord;
    }()
  }], [{
    key: "initialize",
    value: function initialize(url) {
      var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (typeof url !== 'string') {
        throw new Error('invalid url');
      }

      if (url.lastIndexOf('/') === url.length - 1) {
        VideoRecordAPI.url = url.substring(0, url.lastIndexOf('/'));
      } else {
        VideoRecordAPI.url = url;
      }

      VideoRecordAPI.host = VideoRecordAPI.url.replace('/rest', '');
      VideoRecordAPI.headerToken = token;
    }
  }]);
  return VideoRecordAPI;
}();

exports["default"] = VideoRecordAPI;