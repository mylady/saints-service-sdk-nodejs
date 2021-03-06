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

var got = require('got')["default"];

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
                if (!IdentityAPI.headerToken) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return got("".concat(IdentityAPI.url, "/accesstoken"), {
                  method: 'POST',
                  resolveBodyOnly: true,
                  responseType: 'json'
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
                return got("".concat(IdentityAPI.url, "/service/user"), {
                  method: 'GET',
                  headers: {
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  resolveBodyOnly: true,
                  responseType: 'json'
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
    key: "getUserWithIds",
    value: function () {
      var _getUserWithIds = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(idArray) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getAccessToken();

              case 2:
                _context3.next = 4;
                return got("".concat(IdentityAPI.url, "/service/user/ids"), {
                  method: 'POST',
                  headers: {
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: idArray,
                  resolveBodyOnly: true,
                  responseType: 'json'
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

      function getUserWithIds(_x) {
        return _getUserWithIds.apply(this, arguments);
      }

      return getUserWithIds;
    }()
  }, {
    key: "createUser",
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(user) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getAccessToken();

              case 2:
                _context4.next = 4;
                return got("".concat(IdentityAPI.url, "/service/user"), {
                  method: 'POST',
                  headers: {
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: user,
                  resolveBodyOnly: true,
                  responseType: 'json'
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

      function createUser(_x2) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "passwordReset",
    value: function () {
      var _passwordReset = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(uid, pwd) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getAccessToken();

              case 2:
                _context5.next = 4;
                return got("".concat(IdentityAPI.url, "/service/user/password"), {
                  method: 'POST',
                  headers: {
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: {
                    id: uid,
                    pwd: pwd
                  },
                  resolveBodyOnly: true,
                  responseType: 'json'
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

      function passwordReset(_x3, _x4) {
        return _passwordReset.apply(this, arguments);
      }

      return passwordReset;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(uname, pwd) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.getAccessToken();

              case 2:
                _context6.next = 4;
                return got("".concat(IdentityAPI.url, "/auth/login"), {
                  method: 'POST',
                  headers: {
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: {
                    user_name: uname,
                    user_pwd: pwd
                  },
                  resolveBodyOnly: true,
                  responseType: 'json'
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

      function login(_x5, _x6) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(token) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.getAccessToken();

              case 2:
                _context7.next = 4;
                return got("".concat(IdentityAPI.url, "/auth/logout"), {
                  method: 'POST',
                  headers: {
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: {
                    token: token
                  },
                  resolveBodyOnly: true,
                  responseType: 'json'
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

      function logout(_x7) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
  }, {
    key: "self",
    value: function () {
      var _self = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(token) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.getAccessToken();

              case 2:
                _context8.next = 4;
                return got("".concat(IdentityAPI.url, "/self"), {
                  method: 'GET',
                  headers: {
                    Authorization: "Bearer ".concat(token),
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  resolveBodyOnly: true,
                  responseType: 'json'
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

      function self(_x8) {
        return _self.apply(this, arguments);
      }

      return self;
    }()
  }, {
    key: "updateSelf",
    value: function () {
      var _updateSelf = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(token, self) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.getAccessToken();

              case 2:
                _context9.next = 4;
                return got("".concat(IdentityAPI.url, "/self"), {
                  method: 'PUT',
                  headers: {
                    Authorization: "Bearer ".concat(token),
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: self,
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 4:
                return _context9.abrupt("return", _context9.sent);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function updateSelf(_x9, _x10) {
        return _updateSelf.apply(this, arguments);
      }

      return updateSelf;
    }()
  }, {
    key: "passwordSelf",
    value: function () {
      var _passwordSelf = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(token, oldPwd, newPwd) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.getAccessToken();

              case 2:
                _context10.next = 4;
                return got("".concat(IdentityAPI.url, "/self/password"), {
                  method: 'POST',
                  headers: {
                    Authorization: "Bearer ".concat(token),
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: {
                    old_pwd: oldPwd,
                    new_pwd: newPwd
                  },
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 4:
                return _context10.abrupt("return", _context10.sent);

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function passwordSelf(_x11, _x12, _x13) {
        return _passwordSelf.apply(this, arguments);
      }

      return passwordSelf;
    }()
  }], [{
    key: "initialize",
    value: function initialize(url, token) {
      if (typeof url !== 'string') {
        throw new Error('invalid url');
      }

      if (url.lastIndexOf('/') === url.length - 1) {
        IdentityAPI.url = url.substring(0, url.lastIndexOf('/'));
      } else {
        IdentityAPI.url = url;
      }

      IdentityAPI.headerToken = token;
    }
  }]);
  return IdentityAPI;
}();

exports["default"] = IdentityAPI;