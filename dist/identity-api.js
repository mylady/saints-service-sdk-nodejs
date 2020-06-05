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

var IdentityAPI = /*#__PURE__*/function () {
  function IdentityAPI() {
    (0, _classCallCheck2["default"])(this, IdentityAPI);
    this.accessToken = '';
  }

  (0, _createClass2["default"])(IdentityAPI, [{
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
                  uri: IdentityAPI.url + '/accesstoken',
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
    key: "getUserList",
    value: function () {
      var _getUserList = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
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
                  uri: IdentityAPI.url + '/view/user',
                  qs: {
                    access_token: this.accessToken
                  },
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

      function getUserList() {
        return _getUserList.apply(this, arguments);
      }

      return getUserList;
    }()
  }, {
    key: "getUser",
    value: function () {
      var _getUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(uid) {
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
                  uri: IdentityAPI.url + "/view/user/".concat(uid),
                  qs: {
                    access_token: this.accessToken
                  },
                  json: true
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

      function getUser(_x) {
        return _getUser.apply(this, arguments);
      }

      return getUser;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(auth) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getAccessToken();

              case 2:
                _context4.next = 4;
                return rp({
                  method: 'POST',
                  uri: IdentityAPI.url + '/auth/login',
                  qs: {
                    access_token: this.accessToken
                  },
                  body: auth,
                  json: true
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

      function login(_x2) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(token) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getAccessToken();

              case 2:
                _context5.next = 4;
                return rp({
                  method: 'POST',
                  uri: IdentityAPI.url + '/auth/logout',
                  qs: {
                    access_token: this.accessToken
                  },
                  body: {
                    token: token
                  },
                  json: true
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

      function logout(_x3) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
  }, {
    key: "self",
    value: function () {
      var _self = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(token) {
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
                  uri: IdentityAPI.url + '/self',
                  qs: {
                    access_token: this.accessToken
                  },
                  auth: {
                    bearer: token
                  },
                  json: true
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

      function self(_x4) {
        return _self.apply(this, arguments);
      }

      return self;
    }()
  }, {
    key: "updateSelf",
    value: function () {
      var _updateSelf = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(token, body) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.getAccessToken();

              case 2:
                _context7.next = 4;
                return rp({
                  method: 'PUT',
                  uri: IdentityAPI.url + '/self',
                  qs: {
                    access_token: this.accessToken
                  },
                  auth: {
                    bearer: token
                  },
                  body: body,
                  json: true
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

      function updateSelf(_x5, _x6) {
        return _updateSelf.apply(this, arguments);
      }

      return updateSelf;
    }()
  }, {
    key: "password",
    value: function () {
      var _password = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(token, pwd) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.getAccessToken();

              case 2:
                _context8.next = 4;
                return rp({
                  method: 'POST',
                  uri: IdentityAPI.url + '/self/password',
                  qs: {
                    access_token: this.accessToken
                  },
                  auth: {
                    bearer: token
                  },
                  body: pwd,
                  json: true
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

      function password(_x7, _x8) {
        return _password.apply(this, arguments);
      }

      return password;
    }()
  }], [{
    key: "initialize",
    value: function () {
      var _initialize = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(url) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!(typeof url !== 'string')) {
                  _context9.next = 2;
                  break;
                }

                throw new Error('invalid url');

              case 2:
                if (url.lastIndexOf('/') === url.length - 1) {
                  IdentityAPI.url = url.substring(0, url.lastIndexOf('/'));
                } else {
                  IdentityAPI.url = url;
                }

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function initialize(_x9) {
        return _initialize.apply(this, arguments);
      }

      return initialize;
    }()
  }]);
  return IdentityAPI;
}();

exports["default"] = IdentityAPI;