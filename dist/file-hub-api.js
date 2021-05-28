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

var request = require('request'),
    rp = require('request-promise');
/*
    for upload file proxy,it uses nodejs default req&res object.
    if you use koa like framework,which wrapper req and res in context object
    you need set like koa, ctx.respond = false to interupt koa response
*/


var FileHubAPI = /*#__PURE__*/function () {
  function FileHubAPI() {
    (0, _classCallCheck2["default"])(this, FileHubAPI);
    this.accessToken = '';
  }

  (0, _createClass2["default"])(FileHubAPI, [{
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!FileHubAPI.headerToken) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", FileHubAPI.headerToken);

              case 4:
                _context.next = 6;
                return rp({
                  method: 'POST',
                  uri: "".concat(FileHubAPI.url, "/accesstoken"),
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
    key: "uploadDocProxy",
    value: function () {
      var _uploadDocProxy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getAccessToken();

              case 2:
                req.pipe(request({
                  method: 'POST',
                  uri: "".concat(FileHubAPI.url, "/upload/doc"),
                  qs: {
                    access_token: this.accessToken
                  },
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  }
                })).pipe(res);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function uploadDocProxy(_x, _x2) {
        return _uploadDocProxy.apply(this, arguments);
      }

      return uploadDocProxy;
    }()
  }, {
    key: "downloadDocProxy",
    value: function () {
      var _downloadDocProxy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, res) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getAccessToken();

              case 2:
                request({
                  method: 'GET',
                  uri: "".concat(FileHubAPI.url, "/download/doc/").concat(id),
                  qs: {
                    access_token: this.accessToken
                  },
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  }
                }).pipe(res);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function downloadDocProxy(_x3, _x4) {
        return _downloadDocProxy.apply(this, arguments);
      }

      return downloadDocProxy;
    }()
  }, {
    key: "searchDoc",
    value: function () {
      var _searchDoc = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(search) {
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
                  uri: "".concat(FileHubAPI.url, "/search/doc"),
                  qs: {
                    access_token: this.accessToken
                  },
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  body: search,
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

      function searchDoc(_x5) {
        return _searchDoc.apply(this, arguments);
      }

      return searchDoc;
    }()
  }, {
    key: "getDocDetail",
    value: function () {
      var _getDocDetail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getAccessToken();

              case 2:
                _context5.next = 4;
                return rp({
                  method: 'GET',
                  uri: "".concat(FileHubAPI.url, "/detail/doc/").concat(id),
                  qs: {
                    access_token: this.accessToken
                  },
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  gzip: true
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

      function getDocDetail(_x6) {
        return _getDocDetail.apply(this, arguments);
      }

      return getDocDetail;
    }()
  }, {
    key: "queryDocs",
    value: function () {
      var _queryDocs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(ids) {
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
                  uri: "".concat(FileHubAPI.url, "/query/doc"),
                  qs: {
                    access_token: this.accessToken
                  },
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  body: ids,
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

      function queryDocs(_x7) {
        return _queryDocs.apply(this, arguments);
      }

      return queryDocs;
    }()
  }, {
    key: "getDocs",
    value: function () {
      var _getDocs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(query) {
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
                  uri: "".concat(FileHubAPI.url, "/doc"),
                  qs: query,
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
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

      function getDocs(_x8) {
        return _getDocs.apply(this, arguments);
      }

      return getDocs;
    }()
  }, {
    key: "uploadImageProxy",
    value: function () {
      var _uploadImageProxy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.getAccessToken();

              case 2:
                req.pipe(request({
                  method: 'POST',
                  uri: "".concat(FileHubAPI.url, "/upload/image"),
                  qs: {
                    access_token: this.accessToken
                  },
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  }
                })).pipe(res);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function uploadImageProxy(_x9, _x10) {
        return _uploadImageProxy.apply(this, arguments);
      }

      return uploadImageProxy;
    }()
  }, {
    key: "downloadImageProxy",
    value: function () {
      var _downloadImageProxy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(id, res) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.getAccessToken();

              case 2:
                request({
                  method: 'GET',
                  uri: "".concat(FileHubAPI.url, "/download/image/").concat(id),
                  qs: {
                    access_token: this.accessToken
                  },
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  }
                }).pipe(res);

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function downloadImageProxy(_x11, _x12) {
        return _downloadImageProxy.apply(this, arguments);
      }

      return downloadImageProxy;
    }()
  }, {
    key: "getImageDetail",
    value: function () {
      var _getImageDetail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(id) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.getAccessToken();

              case 2:
                _context10.next = 4;
                return rp({
                  method: 'GET',
                  uri: "".concat(FileHubAPI.url, "/detail/image/").concat(id),
                  qs: {
                    access_token: this.accessToken
                  },
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  gzip: true
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

      function getImageDetail(_x13) {
        return _getImageDetail.apply(this, arguments);
      }

      return getImageDetail;
    }()
  }, {
    key: "queryImages",
    value: function () {
      var _queryImages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(ids) {
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
                  uri: "".concat(FileHubAPI.url, "/query/image"),
                  qs: {
                    access_token: this.accessToken
                  },
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  body: ids,
                  json: true,
                  gzip: true
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

      function queryImages(_x14) {
        return _queryImages.apply(this, arguments);
      }

      return queryImages;
    }()
  }, {
    key: "getImages",
    value: function () {
      var _getImages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(query) {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context12.next = 5;
                return rp({
                  method: 'GET',
                  uri: "".concat(FileHubAPI.url, "/image"),
                  qs: query,
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  gzip: true
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

      function getImages(_x15) {
        return _getImages.apply(this, arguments);
      }

      return getImages;
    }()
  }, {
    key: "uploadAttachProxy",
    value: function () {
      var _uploadAttachProxy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.getAccessToken();

              case 2:
                req.pipe(request({
                  method: 'POST',
                  uri: "".concat(FileHubAPI.url, "/upload/attach"),
                  qs: {
                    access_token: this.accessToken
                  },
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  }
                })).pipe(res);

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function uploadAttachProxy(_x16, _x17) {
        return _uploadAttachProxy.apply(this, arguments);
      }

      return uploadAttachProxy;
    }()
  }, {
    key: "downloadAttachProxy",
    value: function () {
      var _downloadAttachProxy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(id, res) {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.getAccessToken();

              case 2:
                request({
                  method: 'GET',
                  uri: "".concat(FileHubAPI.url, "/download/attach/").concat(id),
                  qs: {
                    access_token: this.accessToken
                  },
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  }
                }).pipe(res);

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function downloadAttachProxy(_x18, _x19) {
        return _downloadAttachProxy.apply(this, arguments);
      }

      return downloadAttachProxy;
    }()
  }, {
    key: "getAttachDetail",
    value: function () {
      var _getAttachDetail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(id) {
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.getAccessToken();

              case 2:
                _context15.next = 4;
                return rp({
                  method: 'GET',
                  uri: "".concat(FileHubAPI.url, "/detail/attach/").concat(id),
                  qs: {
                    access_token: this.accessToken
                  },
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  gzip: true
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

      function getAttachDetail(_x20) {
        return _getAttachDetail.apply(this, arguments);
      }

      return getAttachDetail;
    }()
  }, {
    key: "queryAttaches",
    value: function () {
      var _queryAttaches = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(ids) {
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.getAccessToken();

              case 2:
                _context16.next = 4;
                return rp({
                  method: 'POST',
                  uri: "".concat(FileHubAPI.url, "/query/attach"),
                  qs: {
                    access_token: this.accessToken
                  },
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  body: ids,
                  json: true,
                  gzip: true
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

      function queryAttaches(_x21) {
        return _queryAttaches.apply(this, arguments);
      }

      return queryAttaches;
    }()
  }, {
    key: "getAttaches",
    value: function () {
      var _getAttaches = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(query) {
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context17.next = 5;
                return rp({
                  method: 'GET',
                  uri: "".concat(FileHubAPI.url, "/attach"),
                  qs: query,
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  gzip: true
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

      function getAttaches(_x22) {
        return _getAttaches.apply(this, arguments);
      }

      return getAttaches;
    }()
  }], [{
    key: "initialize",
    value: function initialize(url) {
      var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (typeof url !== 'string') {
        throw new Error('invalid url');
      }

      if (url.lastIndexOf('/') === url.length - 1) {
        FileHubAPI.url = url.substring(0, url.lastIndexOf('/'));
      } else {
        FileHubAPI.url = url;
      }

      FileHubAPI.headerToken = token;
    }
  }]);
  return FileHubAPI;
}();

exports["default"] = FileHubAPI;