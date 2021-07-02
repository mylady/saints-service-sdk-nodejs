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
                return rp({
                  method: 'POST',
                  uri: "".concat(EventAPI.url, "/accesstoken"),
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
                return rp({
                  method: 'GET',
                  uri: "".concat(EventAPI.url, "/device/normal"),
                  qs: query,
                  headers: {
                    fix_token: EventAPI.headerToken
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
                return rp({
                  method: 'GET',
                  uri: "".concat(EventAPI.url, "/device/status"),
                  qs: query,
                  headers: {
                    fix_token: EventAPI.headerToken
                  },
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
                return rp({
                  method: 'GET',
                  uri: "".concat(EventAPI.url, "/device/fault"),
                  qs: query,
                  headers: {
                    fix_token: EventAPI.headerToken
                  },
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
                return rp({
                  method: 'GET',
                  uri: "".concat(EventAPI.url, "/device/alarm"),
                  qs: query,
                  headers: {
                    fix_token: EventAPI.headerToken
                  },
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

      function getAlarmEvent(_x4) {
        return _getAlarmEvent.apply(this, arguments);
      }

      return getAlarmEvent;
    }()
  }, {
    key: "processAlarm",
    value: function () {
      var _processAlarm = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(serial, data) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.getAccessToken();

              case 2:
                _context6.next = 4;
                return rp({
                  method: 'PUT',
                  uri: "".concat(EventAPI.url, "/device/alarm/").concat(serial),
                  qs: {
                    access_token: this.accessToken
                  },
                  body: data,
                  headers: {
                    fix_token: EventAPI.headerToken
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

      function processAlarm(_x5, _x6) {
        return _processAlarm.apply(this, arguments);
      }

      return processAlarm;
    }()
  }, {
    key: "checkAlarmDistrict",
    value: function () {
      var _checkAlarmDistrict = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(data) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.getAccessToken();

              case 2:
                _context7.next = 4;
                return rp({
                  method: 'POST',
                  uri: "".concat(EventAPI.url, "/device/alarm/check/district"),
                  qs: {
                    access_token: this.accessToken
                  },
                  body: data,
                  headers: {
                    fix_token: EventAPI.headerToken
                  },
                  json: true,
                  gzip: true
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

      function checkAlarmDistrict(_x7) {
        return _checkAlarmDistrict.apply(this, arguments);
      }

      return checkAlarmDistrict;
    }()
  }, {
    key: "statsAlarmCode",
    value: function () {
      var _statsAlarmCode = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(query) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context8.next = 5;
                return rp({
                  method: 'GET',
                  uri: "".concat(EventAPI.url, "/stats/alarm/alarmcode"),
                  qs: query,
                  headers: {
                    fix_token: EventAPI.headerToken
                  },
                  json: true,
                  gzip: true
                });

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function statsAlarmCode(_x8) {
        return _statsAlarmCode.apply(this, arguments);
      }

      return statsAlarmCode;
    }()
  }, {
    key: "statsAlarmProcessStatus",
    value: function () {
      var _statsAlarmProcessStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(query) {
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
                  uri: "".concat(EventAPI.url, "/stats/alarm/processstatus"),
                  qs: query,
                  headers: {
                    fix_token: EventAPI.headerToken
                  },
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

      function statsAlarmProcessStatus(_x9) {
        return _statsAlarmProcessStatus.apply(this, arguments);
      }

      return statsAlarmProcessStatus;
    }()
  }, {
    key: "statsAlarmTrend",
    value: function () {
      var _statsAlarmTrend = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(query) {
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
                  uri: "".concat(EventAPI.url, "/stats/alarm/trend"),
                  qs: query,
                  headers: {
                    fix_token: EventAPI.headerToken
                  },
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

      function statsAlarmTrend(_x10) {
        return _statsAlarmTrend.apply(this, arguments);
      }

      return statsAlarmTrend;
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