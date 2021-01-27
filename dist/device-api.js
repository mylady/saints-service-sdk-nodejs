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
                  uri: "".concat(DeviceAPI.url, "/accesstoken"),
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
      var _getCommonDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(query) {
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
                  uri: "".concat(DeviceAPI.url, "/commondevice"),
                  qs: query,
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

      function getCommonDevice(_x) {
        return _getCommonDevice.apply(this, arguments);
      }

      return getCommonDevice;
    }()
  }, {
    key: "getCommonDeviceById",
    value: function () {
      var _getCommonDeviceById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getAccessToken();

              case 2:
                _context3.next = 4;
                return rp({
                  method: 'GET',
                  uri: "".concat(DeviceAPI.url, "/commondevice/").concat(id),
                  qs: {
                    access_token: this.accessToken
                  },
                  json: true,
                  gzip: true
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

      function getCommonDeviceById(_x2) {
        return _getCommonDeviceById.apply(this, arguments);
      }

      return getCommonDeviceById;
    }()
  }, {
    key: "updateCommonDevice",
    value: function () {
      var _updateCommonDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, value) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getAccessToken();

              case 2:
                _context4.next = 4;
                return rp({
                  method: 'PUT',
                  uri: "".concat(DeviceAPI.url, "/commondevice/").concat(id),
                  body: value,
                  qs: {
                    access_token: this.accessToken
                  },
                  json: true,
                  gzip: true
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

      function updateCommonDevice(_x3, _x4) {
        return _updateCommonDevice.apply(this, arguments);
      }

      return updateCommonDevice;
    }()
  }, {
    key: "getCommonVideoDevice",
    value: function () {
      var _getCommonVideoDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(query) {
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
                  uri: "".concat(DeviceAPI.url, "/commonvideodevice"),
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

      function getCommonVideoDevice(_x5) {
        return _getCommonVideoDevice.apply(this, arguments);
      }

      return getCommonVideoDevice;
    }()
  }, {
    key: "getCommonVideoDeviceById",
    value: function () {
      var _getCommonVideoDeviceById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.getAccessToken();

              case 2:
                _context6.next = 4;
                return rp({
                  method: 'GET',
                  uri: "".concat(DeviceAPI.url, "/commonvideodevice/").concat(id),
                  qs: {
                    access_token: this.accessToken
                  },
                  json: true,
                  gzip: true
                });

              case 4:
                return _context6.abrupt("return", _context6.sent);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getCommonVideoDeviceById(_x6) {
        return _getCommonVideoDeviceById.apply(this, arguments);
      }

      return getCommonVideoDeviceById;
    }()
  }, {
    key: "getTypeDevice",
    value: function () {
      var _getTypeDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(typeName, query) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context7.next = 5;
                return rp({
                  method: 'GET',
                  uri: "".concat(DeviceAPI.url, "/").concat(typeName),
                  qs: query,
                  json: true,
                  gzip: true
                });

              case 5:
                return _context7.abrupt("return", _context7.sent);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getTypeDevice(_x7, _x8) {
        return _getTypeDevice.apply(this, arguments);
      }

      return getTypeDevice;
    }()
  }, {
    key: "getTypeDeviceById",
    value: function () {
      var _getTypeDeviceById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(typeName, id) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.getAccessToken();

              case 2:
                _context8.next = 4;
                return rp({
                  method: 'GET',
                  uri: "".concat(DeviceAPI.url, "/").concat(typeName, "/").concat(id),
                  qs: {
                    access_token: this.accessToken
                  },
                  json: true,
                  gzip: true
                });

              case 4:
                return _context8.abrupt("return", _context8.sent);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getTypeDeviceById(_x9, _x10) {
        return _getTypeDeviceById.apply(this, arguments);
      }

      return getTypeDeviceById;
    }()
  }, {
    key: "getDeviceModel",
    value: function () {
      var _getDeviceModel = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(query) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context9.next = 5;
                return rp({
                  method: 'GET',
                  uri: "".concat(DeviceAPI.url, "/devicemodel"),
                  qs: query,
                  json: true,
                  gzip: true
                });

              case 5:
                return _context9.abrupt("return", _context9.sent);

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getDeviceModel(_x11) {
        return _getDeviceModel.apply(this, arguments);
      }

      return getDeviceModel;
    }()
  }, {
    key: "getDeviceTag",
    value: function () {
      var _getDeviceTag = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(query) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context10.next = 5;
                return rp({
                  method: 'GET',
                  uri: "".concat(DeviceAPI.url, "/devicetag"),
                  qs: query,
                  json: true,
                  gzip: true
                });

              case 5:
                return _context10.abrupt("return", _context10.sent);

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getDeviceTag(_x12) {
        return _getDeviceTag.apply(this, arguments);
      }

      return getDeviceTag;
    }()
  }], [{
    key: "initialize",
    value: function initialize(url) {
      if (typeof url !== 'string') {
        throw new Error('invalid url');
      }

      if (url.lastIndexOf('/') === url.length - 1) {
        DeviceAPI.url = url.substring(0, url.lastIndexOf('/'));
      } else {
        DeviceAPI.url = url;
      }
    }
  }]);
  return DeviceAPI;
}();

exports["default"] = DeviceAPI;