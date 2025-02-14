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
                if (!DeviceAPI.headerToken) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return (0, _got["default"])("".concat(DeviceAPI.url, "/accesstoken"), {
                  method: 'POST',
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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
                return (0, _got["default"])("".concat(DeviceAPI.url, "/commondevice"), {
                  method: 'GET',
                  headers: {
                    fix_token: DeviceAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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
    key: "queryCommonDevice",
    value: function () {
      var _queryCommonDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(query) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context3.next = 5;
                return (0, _got["default"])("".concat(DeviceAPI.url, "/commondevice/query"), {
                  method: 'POST',
                  headers: {
                    fix_token: DeviceAPI.headerToken
                  },
                  json: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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

      function queryCommonDevice(_x2) {
        return _queryCommonDevice.apply(this, arguments);
      }

      return queryCommonDevice;
    }()
  }, {
    key: "getCommonDeviceById",
    value: function () {
      var _getCommonDeviceById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getAccessToken();

              case 2:
                _context4.next = 4;
                return (0, _got["default"])("".concat(DeviceAPI.url, "/commondevice/").concat(id), {
                  method: 'GET',
                  headers: {
                    fix_token: DeviceAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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

      function getCommonDeviceById(_x3) {
        return _getCommonDeviceById.apply(this, arguments);
      }

      return getCommonDeviceById;
    }()
  }, {
    key: "updateCommonDevice",
    value: function () {
      var _updateCommonDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id, value) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getAccessToken();

              case 2:
                _context5.next = 4;
                return (0, _got["default"])("".concat(DeviceAPI.url, "/commondevice/").concat(id), {
                  method: 'PUT',
                  json: value,
                  headers: {
                    fix_token: DeviceAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 4:
                return _context5.abrupt("return", _context5.sent);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function updateCommonDevice(_x4, _x5) {
        return _updateCommonDevice.apply(this, arguments);
      }

      return updateCommonDevice;
    }()
  }, {
    key: "getTypeDevice",
    value: function () {
      var _getTypeDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(typeName, query) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context6.next = 5;
                return (0, _got["default"])("".concat(DeviceAPI.url, "/").concat(typeName), {
                  method: 'GET',
                  headers: {
                    fix_token: DeviceAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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

      function getTypeDevice(_x6, _x7) {
        return _getTypeDevice.apply(this, arguments);
      }

      return getTypeDevice;
    }()
  }, {
    key: "queryTypeDevice",
    value: function () {
      var _queryTypeDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(typeName, query) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context7.next = 5;
                return (0, _got["default"])("".concat(DeviceAPI.url, "/").concat(typeName, "/query"), {
                  method: 'POST',
                  headers: {
                    fix_token: DeviceAPI.headerToken
                  },
                  json: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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

      function queryTypeDevice(_x8, _x9) {
        return _queryTypeDevice.apply(this, arguments);
      }

      return queryTypeDevice;
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
                return (0, _got["default"])("".concat(DeviceAPI.url, "/").concat(typeName, "/").concat(id), {
                  method: 'GET',
                  headers: {
                    fix_token: DeviceAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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

      function getTypeDeviceById(_x10, _x11) {
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
                return (0, _got["default"])("".concat(DeviceAPI.url, "/devicemodel"), {
                  method: 'GET',
                  headers: {
                    fix_token: DeviceAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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

      function getDeviceModel(_x12) {
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
                return (0, _got["default"])("".concat(DeviceAPI.url, "/devicetag"), {
                  method: 'GET',
                  headers: {
                    fix_token: DeviceAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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

      function getDeviceTag(_x13) {
        return _getDeviceTag.apply(this, arguments);
      }

      return getDeviceTag;
    }()
  }, {
    key: "getStreamAddress",
    value: function () {
      var _getStreamAddress = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(id) {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.getAccessToken();

              case 2:
                _context11.next = 4;
                return (0, _got["default"])("".concat(DeviceAPI.url, "/stream/").concat(id), {
                  method: 'GET',
                  headers: {
                    fix_token: DeviceAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 4:
                return _context11.abrupt("return", _context11.sent);

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getStreamAddress(_x14) {
        return _getStreamAddress.apply(this, arguments);
      }

      return getStreamAddress;
    }()
  }, {
    key: "getRecordAddress",
    value: function () {
      var _getRecordAddress = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(id, query) {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context12.next = 5;
                return (0, _got["default"])("".concat(DeviceAPI.url, "/record/").concat(id), {
                  method: 'GET',
                  headers: {
                    fix_token: DeviceAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 5:
                return _context12.abrupt("return", _context12.sent);

              case 6:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getRecordAddress(_x15, _x16) {
        return _getRecordAddress.apply(this, arguments);
      }

      return getRecordAddress;
    }()
  }, {
    key: "statsDeviceStatus",
    value: function () {
      var _statsDeviceStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13() {
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.getAccessToken();

              case 2:
                _context13.next = 4;
                return (0, _got["default"])("".concat(DeviceAPI.url, "/stats/device/status"), {
                  method: 'GET',
                  headers: {
                    fix_token: DeviceAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 4:
                return _context13.abrupt("return", _context13.sent);

              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function statsDeviceStatus() {
        return _statsDeviceStatus.apply(this, arguments);
      }

      return statsDeviceStatus;
    }()
  }, {
    key: "statsDeviceFault",
    value: function () {
      var _statsDeviceFault = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14() {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.getAccessToken();

              case 2:
                _context14.next = 4;
                return (0, _got["default"])("".concat(DeviceAPI.url, "/stats/device/fault"), {
                  method: 'GET',
                  headers: {
                    fix_token: DeviceAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 4:
                return _context14.abrupt("return", _context14.sent);

              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function statsDeviceFault() {
        return _statsDeviceFault.apply(this, arguments);
      }

      return statsDeviceFault;
    }()
  }, {
    key: "statsDeviceCategory",
    value: function () {
      var _statsDeviceCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(query) {
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context15.next = 5;
                return (0, _got["default"])("".concat(DeviceAPI.url, "/stats/device/category"), {
                  method: 'GET',
                  headers: {
                    fix_token: DeviceAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 5:
                return _context15.abrupt("return", _context15.sent);

              case 6:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function statsDeviceCategory(_x17) {
        return _statsDeviceCategory.apply(this, arguments);
      }

      return statsDeviceCategory;
    }()
  }, {
    key: "statsDeviceCategoryStatus",
    value: function () {
      var _statsDeviceCategoryStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(query) {
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context16.next = 5;
                return (0, _got["default"])("".concat(DeviceAPI.url, "/stats/device/categorystatus"), {
                  method: 'GET',
                  headers: {
                    fix_token: DeviceAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 5:
                return _context16.abrupt("return", _context16.sent);

              case 6:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function statsDeviceCategoryStatus(_x18) {
        return _statsDeviceCategoryStatus.apply(this, arguments);
      }

      return statsDeviceCategoryStatus;
    }()
  }, {
    key: "statsDeviceTag",
    value: function () {
      var _statsDeviceTag = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(query) {
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context17.next = 5;
                return (0, _got["default"])("".concat(DeviceAPI.url, "/stats/device/status"), {
                  method: 'GET',
                  headers: {
                    fix_token: DeviceAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 5:
                return _context17.abrupt("return", _context17.sent);

              case 6:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function statsDeviceTag(_x19) {
        return _statsDeviceTag.apply(this, arguments);
      }

      return statsDeviceTag;
    }()
  }, {
    key: "statsTagUsed",
    value: function () {
      var _statsTagUsed = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(query) {
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context18.next = 5;
                return (0, _got["default"])("".concat(DeviceAPI.url, "/stats/tag/used"), {
                  method: 'GET',
                  headers: {
                    fix_token: DeviceAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 5:
                return _context18.abrupt("return", _context18.sent);

              case 6:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function statsTagUsed(_x20) {
        return _statsTagUsed.apply(this, arguments);
      }

      return statsTagUsed;
    }()
  }], [{
    key: "initialize",
    value: function initialize(url) {
      var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (typeof url !== 'string') {
        throw new Error('invalid url');
      }

      if (url.lastIndexOf('/') === url.length - 1) {
        DeviceAPI.url = url.substring(0, url.lastIndexOf('/'));
      } else {
        DeviceAPI.url = url;
      }

      DeviceAPI.headerToken = token;
    }
  }]);
  return DeviceAPI;
}();

exports["default"] = DeviceAPI;