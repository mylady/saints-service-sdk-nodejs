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
    key: "getUserWithId",
    value: function () {
      var _getUserWithId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getAccessToken();

              case 2:
                _context4.next = 4;
                return got("".concat(IdentityAPI.url, "/service/user/id"), {
                  method: 'POST',
                  headers: {
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: {
                    id: id
                  },
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

      function getUserWithId(_x2) {
        return _getUserWithId.apply(this, arguments);
      }

      return getUserWithId;
    }()
  }, {
    key: "getUserWithMobile",
    value: function () {
      var _getUserWithMobile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(mobile) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getAccessToken();

              case 2:
                _context5.next = 4;
                return got("".concat(IdentityAPI.url, "/service/user/mobile"), {
                  method: 'POST',
                  headers: {
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: {
                    mobile: mobile
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

      function getUserWithMobile(_x3) {
        return _getUserWithMobile.apply(this, arguments);
      }

      return getUserWithMobile;
    }()
  }, {
    key: "createUser",
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(user) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.getAccessToken();

              case 2:
                _context6.next = 4;
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
                return _context6.abrupt("return", _context6.sent);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function createUser(_x4) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "passwordReset",
    value: function () {
      var _passwordReset = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(uid, pwd) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.getAccessToken();

              case 2:
                _context7.next = 4;
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
                return _context7.abrupt("return", _context7.sent);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function passwordReset(_x5, _x6) {
        return _passwordReset.apply(this, arguments);
      }

      return passwordReset;
    }()
  }, {
    key: "encrypt",
    value: function () {
      var _encrypt = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(txt) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.getAccessToken();

              case 2:
                _context8.next = 4;
                return got("".concat(IdentityAPI.url, "/security/encrypt"), {
                  method: 'POST',
                  headers: {
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: {
                    content: txt
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

      function encrypt(_x7) {
        return _encrypt.apply(this, arguments);
      }

      return encrypt;
    }()
  }, {
    key: "descrypt",
    value: function () {
      var _descrypt = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(txt) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.getAccessToken();

              case 2:
                _context9.next = 4;
                return got("".concat(IdentityAPI.url, "/security/decrypt"), {
                  method: 'POST',
                  headers: {
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: {
                    content: txt
                  },
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

      function descrypt(_x8) {
        return _descrypt.apply(this, arguments);
      }

      return descrypt;
    }()
  }, {
    key: "signTxt",
    value: function () {
      var _signTxt = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(txt) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.getAccessToken();

              case 2:
                _context10.next = 4;
                return got("".concat(IdentityAPI.url, "/security/sign/txt"), {
                  method: 'POST',
                  headers: {
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: {
                    content: txt
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

      function signTxt(_x9) {
        return _signTxt.apply(this, arguments);
      }

      return signTxt;
    }()
  }, {
    key: "verifyTxt",
    value: function () {
      var _verifyTxt = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(sign, txt) {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.getAccessToken();

              case 2:
                _context11.next = 4;
                return got("".concat(IdentityAPI.url, "/security/verify/txt"), {
                  method: 'POST',
                  headers: {
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: {
                    sign: sign,
                    content: txt
                  },
                  resolveBodyOnly: true,
                  responseType: 'json'
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

      function verifyTxt(_x10, _x11) {
        return _verifyTxt.apply(this, arguments);
      }

      return verifyTxt;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(uname, pwd) {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.getAccessToken();

              case 2:
                _context12.next = 4;
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
                return _context12.abrupt("return", _context12.sent);

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function login(_x12, _x13) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "login2",
    value: function () {
      var _login2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(idNumber) {
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.getAccessToken();

              case 2:
                _context13.next = 4;
                return got("".concat(IdentityAPI.url, "/auth/login/idnumber"), {
                  method: 'POST',
                  headers: {
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: {
                    id_number: idNumber
                  },
                  resolveBodyOnly: true,
                  responseType: 'json'
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

      function login2(_x14) {
        return _login2.apply(this, arguments);
      }

      return login2;
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(token) {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.getAccessToken();

              case 2:
                _context14.next = 4;
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
                return _context14.abrupt("return", _context14.sent);

              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function logout(_x15) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
  }, {
    key: "self",
    value: function () {
      var _self = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(token) {
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.getAccessToken();

              case 2:
                _context15.next = 4;
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
                return _context15.abrupt("return", _context15.sent);

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function self(_x16) {
        return _self.apply(this, arguments);
      }

      return self;
    }()
  }, {
    key: "updateSelf",
    value: function () {
      var _updateSelf = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(token, self) {
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.getAccessToken();

              case 2:
                _context16.next = 4;
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
                return _context16.abrupt("return", _context16.sent);

              case 5:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function updateSelf(_x17, _x18) {
        return _updateSelf.apply(this, arguments);
      }

      return updateSelf;
    }()
  }, {
    key: "passwordSelf",
    value: function () {
      var _passwordSelf = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(token, oldPwd, newPwd) {
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.getAccessToken();

              case 2:
                _context17.next = 4;
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
                return _context17.abrupt("return", _context17.sent);

              case 5:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function passwordSelf(_x19, _x20, _x21) {
        return _passwordSelf.apply(this, arguments);
      }

      return passwordSelf;
    }()
  }, {
    key: "getByIdNumber",
    value: function () {
      var _getByIdNumber = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(idNumber) {
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this.getAccessToken();

              case 2:
                _context18.next = 4;
                return got("".concat(IdentityAPI.url, "/service/user/idnumber"), {
                  method: 'POST',
                  headers: {
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: {
                    id_number: idNumber
                  },
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 4:
                return _context18.abrupt("return", _context18.sent);

              case 5:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function getByIdNumber(_x22) {
        return _getByIdNumber.apply(this, arguments);
      }

      return getByIdNumber;
    }()
  }, {
    key: "checkByID",
    value: function () {
      var _checkByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(id) {
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return this.getAccessToken();

              case 2:
                _context19.next = 4;
                return got("".concat(IdentityAPI.url, "/service/user/checkid"), {
                  method: 'POST',
                  headers: {
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: {
                    id: id
                  },
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 4:
                return _context19.abrupt("return", _context19.sent);

              case 5:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function checkByID(_x23) {
        return _checkByID.apply(this, arguments);
      }

      return checkByID;
    }()
  }, {
    key: "checkByMobile",
    value: function () {
      var _checkByMobile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(mobile) {
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return this.getAccessToken();

              case 2:
                _context20.next = 4;
                return got("".concat(IdentityAPI.url, "/service/user/checkmobile"), {
                  method: 'POST',
                  headers: {
                    fix_token: IdentityAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: {
                    mobile: mobile
                  },
                  resolveBodyOnly: true,
                  responseType: 'json'
                });

              case 4:
                return _context20.abrupt("return", _context20.sent);

              case 5:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function checkByMobile(_x24) {
        return _checkByMobile.apply(this, arguments);
      }

      return checkByMobile;
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