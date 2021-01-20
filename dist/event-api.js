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
                _context.next = 2;
                return rp({
                  method: 'POST',
                  uri: "".concat(EventAPI.url, "/accesstoken"),
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
    key: "getAlarmEvent",
    value: function () {
      var _getAlarmEvent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(query) {
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
                  uri: "".concat(EventAPI.url, "/device/alarm"),
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

      function getAlarmEvent(_x2) {
        return _getAlarmEvent.apply(this, arguments);
      }

      return getAlarmEvent;
    }()
  }, {
    key: "getStatusEvent",
    value: function () {
      var _getStatusEvent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(query) {
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
                  uri: "".concat(EventAPI.url, "/device/status"),
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

      function getStatusEvent(_x3) {
        return _getStatusEvent.apply(this, arguments);
      }

      return getStatusEvent;
    }()
  }, {
    key: "getFaultEvent",
    value: function () {
      var _getFaultEvent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(query) {
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
                  uri: "".concat(EventAPI.url, "/device/fault"),
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

      function getFaultEvent(_x4) {
        return _getFaultEvent.apply(this, arguments);
      }

      return getFaultEvent;
    }()
  }], [{
    key: "initialize",
    value: function initialize(url) {
      if (typeof url !== 'string') {
        throw new Error('invalid url');
      }

      if (url.lastIndexOf('/') === url.length - 1) {
        EventAPI.url = url.substring(0, url.lastIndexOf('/'));
      } else {
        EventAPI.url = url;
      }
    }
  }]);
  return EventAPI;
}();

exports["default"] = EventAPI;