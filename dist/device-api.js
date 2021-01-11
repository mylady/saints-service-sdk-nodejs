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

var DeviceAPI = /*#__PURE__*/function () {
  function DeviceAPI() {
    (0, _classCallCheck2["default"])(this, DeviceAPI);
    this.accessToken = '';
  }

  (0, _createClass2["default"])(DeviceAPI, [{
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return rp({
                  method: 'POST',
                  uri: LogAPI.url + '/accesstoken',
                  json: true
                });

              case 2:
                res = _context.sent;
                this.accessToken = res.data;

              case 4:
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
    key: "getCommonDevice",
    value: function () {
      var _getCommonDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(log) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getAccessToken();

              case 2:
                _context2.next = 4;
                return rp({
                  method: 'GET',
                  uri: LogAPI.url + '/commondevice',
                  qs: {
                    access_token: this.accessToken
                  },
                  body: log,
                  json: true
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

      function getCommonDevice(_x) {
        return _getCommonDevice.apply(this, arguments);
      }

      return getCommonDevice;
    }()
  }, {
    key: "getCommonVideoDevice",
    value: function () {
      var _getCommonVideoDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(query) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context3.next = 5;
                return rp({
                  method: 'GET',
                  uri: LogAPI.url + '/commonvideodevice',
                  qs: query,
                  json: true,
                  gzip: true
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

      function getCommonVideoDevice(_x2) {
        return _getCommonVideoDevice.apply(this, arguments);
      }

      return getCommonVideoDevice;
    }()
  }, {
    key: "getTypeDevice",
    value: function () {
      var _getTypeDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(typeName, query) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context4.next = 5;
                return rp({
                  method: 'GET',
                  uri: LogAPI.url + '/' + typeName,
                  qs: query,
                  json: true,
                  gzip: true
                });

              case 5:
                return _context4.abrupt("return", _context4.sent);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getTypeDevice(_x3, _x4) {
        return _getTypeDevice.apply(this, arguments);
      }

      return getTypeDevice;
    }()
  }, {
    key: "getDeviceModel",
    value: function () {
      var _getDeviceModel = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(query) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context5.next = 5;
                return rp({
                  method: 'GET',
                  uri: LogAPI.url + '/devicemodel',
                  qs: query,
                  json: true,
                  gzip: true
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

      function getDeviceModel(_x5) {
        return _getDeviceModel.apply(this, arguments);
      }

      return getDeviceModel;
    }()
  }, {
    key: "getDeviceTag",
    value: function () {
      var _getDeviceTag = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(query) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context6.next = 5;
                return rp({
                  method: 'GET',
                  uri: LogAPI.url + '/devicetag',
                  qs: query,
                  json: true,
                  gzip: true
                });

              case 5:
                return _context6.abrupt("return", _context6.sent);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getDeviceTag(_x6) {
        return _getDeviceTag.apply(this, arguments);
      }

      return getDeviceTag;
    }()
  }], [{
    key: "initialize",
    value: function () {
      var _initialize = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(url) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(typeof url !== 'string')) {
                  _context7.next = 2;
                  break;
                }

                throw new Error('invalid url');

              case 2:
                if (url.lastIndexOf('/') === url.length - 1) {
                  LogAPI.url = url.substring(0, url.lastIndexOf('/'));
                } else {
                  LogAPI.url = url;
                }

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function initialize(_x7) {
        return _initialize.apply(this, arguments);
      }

      return initialize;
    }()
  }]);
  return DeviceAPI;
}();

exports["default"] = DeviceAPI;