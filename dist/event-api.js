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

var EventAPI = /*#__PURE__*/function () {
  function EventAPI() {
    (0, _classCallCheck2["default"])(this, EventAPI);
    this.accessToken = '';
  }

  (0, _createClass2["default"])(EventAPI, [{
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!EventAPI.headerToken) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return (0, _got["default"])("".concat(EventAPI.url, "/accesstoken"), {
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
    key: "getNormalEvent",
    value: function () {
      var _getNormalEvent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(query) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context2.next = 5;
                return (0, _got["default"])("".concat(EventAPI.url, "/device/normal"), {
                  method: 'GET',
                  headers: {
                    fix_token: EventAPI.headerToken
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

      function getNormalEvent(_x) {
        return _getNormalEvent.apply(this, arguments);
      }

      return getNormalEvent;
    }()
  }, {
    key: "getStatusEvent",
    value: function () {
      var _getStatusEvent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(query) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context3.next = 5;
                return (0, _got["default"])("".concat(EventAPI.url, "/device/status"), {
                  method: 'GET',
                  headers: {
                    fix_token: EventAPI.headerToken
                  },
                  searchParams: query,
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

      function getStatusEvent(_x2) {
        return _getStatusEvent.apply(this, arguments);
      }

      return getStatusEvent;
    }()
  }, {
    key: "getFaultEvent",
    value: function () {
      var _getFaultEvent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(query) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context4.next = 5;
                return (0, _got["default"])("".concat(EventAPI.url, "/device/fault"), {
                  method: 'GET',
                  headers: {
                    fix_token: EventAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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

      function getFaultEvent(_x3) {
        return _getFaultEvent.apply(this, arguments);
      }

      return getFaultEvent;
    }()
  }, {
    key: "getAlarmEvent",
    value: function () {
      var _getAlarmEvent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(query) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context5.next = 5;
                return (0, _got["default"])("".concat(EventAPI.url, "/device/alarm"), {
                  method: 'GET',
                  headers: {
                    fix_token: EventAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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

      function getAlarmEvent(_x4) {
        return _getAlarmEvent.apply(this, arguments);
      }

      return getAlarmEvent;
    }()
  }, {
    key: "getAlarmEventBySerial",
    value: function () {
      var _getAlarmEventBySerial = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(serial) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context6.next = 5;
                return (0, _got["default"])("".concat(EventAPI.url, "/device/alarm/").concat(serial), {
                  method: 'GET',
                  headers: {
                    fix_token: EventAPI.headerToken
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

      function getAlarmEventBySerial(_x5) {
        return _getAlarmEventBySerial.apply(this, arguments);
      }

      return getAlarmEventBySerial;
    }()
  }, {
    key: "processAlarm",
    value: function () {
      var _processAlarm = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(serial, data) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.getAccessToken();

              case 2:
                _context7.next = 4;
                return (0, _got["default"])("".concat(EventAPI.url, "/device/alarm/").concat(serial), {
                  method: 'PUT',
                  headers: {
                    fix_token: EventAPI.headerToken
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
                return _context7.abrupt("return", _context7.sent);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function processAlarm(_x6, _x7) {
        return _processAlarm.apply(this, arguments);
      }

      return processAlarm;
    }()
  }, {
    key: "checkAlarmDistrict",
    value: function () {
      var _checkAlarmDistrict = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(data) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.getAccessToken();

              case 2:
                _context8.next = 4;
                return (0, _got["default"])("".concat(EventAPI.url, "/device/alarm/check/district"), {
                  method: 'POST',
                  headers: {
                    fix_token: EventAPI.headerToken
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
                return _context8.abrupt("return", _context8.sent);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function checkAlarmDistrict(_x8) {
        return _checkAlarmDistrict.apply(this, arguments);
      }

      return checkAlarmDistrict;
    }()
  }, {
    key: "statsAlarmCode",
    value: function () {
      var _statsAlarmCode = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(query) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context9.next = 5;
                return (0, _got["default"])("".concat(EventAPI.url, "/stats/alarm/alarmcode"), {
                  method: 'GET',
                  headers: {
                    fix_token: EventAPI.headerToken
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

      function statsAlarmCode(_x9) {
        return _statsAlarmCode.apply(this, arguments);
      }

      return statsAlarmCode;
    }()
  }, {
    key: "statsAlarmDesp",
    value: function () {
      var _statsAlarmDesp = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(query) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context10.next = 5;
                return (0, _got["default"])("".concat(EventAPI.url, "/stats/alarm/alarmdesp"), {
                  method: 'GET',
                  headers: {
                    fix_token: EventAPI.headerToken
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

      function statsAlarmDesp(_x10) {
        return _statsAlarmDesp.apply(this, arguments);
      }

      return statsAlarmDesp;
    }()
  }, {
    key: "statsAlarmProcessStatus",
    value: function () {
      var _statsAlarmProcessStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(query) {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context11.next = 5;
                return (0, _got["default"])("".concat(EventAPI.url, "/stats/alarm/processstatus"), {
                  method: 'GET',
                  headers: {
                    fix_token: EventAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 5:
                return _context11.abrupt("return", _context11.sent);

              case 6:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function statsAlarmProcessStatus(_x11) {
        return _statsAlarmProcessStatus.apply(this, arguments);
      }

      return statsAlarmProcessStatus;
    }()
  }, {
    key: "statsAlarmTrend",
    value: function () {
      var _statsAlarmTrend = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(query) {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context12.next = 5;
                return (0, _got["default"])("".concat(EventAPI.url, "/stats/alarm/trend"), {
                  method: 'GET',
                  headers: {
                    fix_token: EventAPI.headerToken
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

      function statsAlarmTrend(_x12) {
        return _statsAlarmTrend.apply(this, arguments);
      }

      return statsAlarmTrend;
    }()
  }, {
    key: "statsAlarmDistrictCode",
    value: function () {
      var _statsAlarmDistrictCode = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(query) {
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context13.next = 5;
                return (0, _got["default"])("".concat(EventAPI.url, "/stats/alarm/districtcode"), {
                  method: 'GET',
                  headers: {
                    fix_token: EventAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 5:
                return _context13.abrupt("return", _context13.sent);

              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function statsAlarmDistrictCode(_x13) {
        return _statsAlarmDistrictCode.apply(this, arguments);
      }

      return statsAlarmDistrictCode;
    }()
  }, {
    key: "statsNormalName",
    value: function () {
      var _statsNormalName = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(query) {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context14.next = 5;
                return (0, _got["default"])("".concat(EventAPI.url, "/stats/normal/name"), {
                  method: 'GET',
                  headers: {
                    fix_token: EventAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 5:
                return _context14.abrupt("return", _context14.sent);

              case 6:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function statsNormalName(_x14) {
        return _statsNormalName.apply(this, arguments);
      }

      return statsNormalName;
    }()
  }], [{
    key: "initialize",
    value: function initialize(url) {
      var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (typeof url !== 'string') {
        throw new Error('invalid url');
      }

      if (url.lastIndexOf('/') === url.length - 1) {
        EventAPI.url = url.substring(0, url.lastIndexOf('/'));
      } else {
        EventAPI.url = url;
      }

      EventAPI.headerToken = token;
    }
  }]);
  return EventAPI;
}();

exports["default"] = EventAPI;