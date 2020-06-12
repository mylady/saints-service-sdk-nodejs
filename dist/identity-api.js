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
    var debug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    (0, _classCallCheck2["default"])(this, IdentityAPI);
    this.accessToken = '';
    rp.debug = debug;
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
                return rp({
                  method: 'POST',
                  uri: IdentityAPI.url + '/view/user',
                  qs: {
                    access_token: this.accessToken
                  },
                  body: idArray,
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

      function getUserWithIds(_x) {
        return _getUserWithIds.apply(this, arguments);
      }

      return getUserWithIds;
    }()
  }, {
    key: "getUser",
    value: function () {
      var _getUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(uid) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getAccessToken();

              case 2:
                _context4.next = 4;
                return rp({
                  method: 'GET',
                  uri: IdentityAPI.url + "/view/user/".concat(uid),
                  qs: {
                    access_token: this.accessToken
                  },
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

      function getUser(_x2) {
        return _getUser.apply(this, arguments);
      }

      return getUser;
    }()
  }, {
    key: "createUser",
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(user) {
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
                  uri: IdentityAPI.url + "/service/user",
                  qs: {
                    access_token: this.accessToken
                  },
                  body: user,
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

      function createUser(_x3) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "passwordReset",
    value: function () {
      var _passwordReset = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(uid, pwd) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.getAccessToken();

              case 2:
                _context6.next = 4;
                return rp({
                  method: 'POST',
                  uri: IdentityAPI.url + "/service/user/password",
                  qs: {
                    access_token: this.accessToken
                  },
                  body: {
                    id: uid,
                    pwd: pwd
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

      function passwordReset(_x4, _x5) {
        return _passwordReset.apply(this, arguments);
      }

      return passwordReset;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(uname, pwd) {
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
                  uri: IdentityAPI.url + '/auth/login',
                  qs: {
                    access_token: this.accessToken
                  },
                  body: {
                    user_name: uname,
                    user_pwd: pwd
                  },
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

      function login(_x6, _x7) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(token) {
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
                return _context8.abrupt("return", _context8.sent);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function logout(_x8) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
  }, {
    key: "self",
    value: function () {
      var _self = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(token) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.getAccessToken();

              case 2:
                _context9.next = 4;
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
                return _context9.abrupt("return", _context9.sent);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function self(_x9) {
        return _self.apply(this, arguments);
      }

      return self;
    }()
  }, {
    key: "updateSelf",
    value: function () {
      var _updateSelf = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(token, self) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.getAccessToken();

              case 2:
                _context10.next = 4;
                return rp({
                  method: 'PUT',
                  uri: IdentityAPI.url + '/self',
                  qs: {
                    access_token: this.accessToken
                  },
                  auth: {
                    bearer: token
                  },
                  body: self,
                  json: true
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

      function updateSelf(_x10, _x11) {
        return _updateSelf.apply(this, arguments);
      }

      return updateSelf;
    }()
  }, {
    key: "passwordSelf",
    value: function () {
      var _passwordSelf = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(token, oldPwd, newPwd) {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.getAccessToken();

              case 2:
                _context11.next = 4;
                return rp({
                  method: 'POST',
                  uri: IdentityAPI.url + '/self/password',
                  qs: {
                    access_token: this.accessToken
                  },
                  auth: {
                    bearer: token
                  },
                  body: {
                    old_pwd: oldPwd,
                    new_pwd: newPwd
                  },
                  json: true
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

      function passwordSelf(_x12, _x13, _x14) {
        return _passwordSelf.apply(this, arguments);
      }

      return passwordSelf;
    }()
  }], [{
    key: "initialize",
    value: function () {
      var _initialize = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(url) {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (!(typeof url !== 'string')) {
                  _context12.next = 2;
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
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function initialize(_x15) {
        return _initialize.apply(this, arguments);
      }

      return initialize;
    }()
  }]);
  return IdentityAPI;
}();

exports["default"] = IdentityAPI;