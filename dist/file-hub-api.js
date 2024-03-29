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

var _httpProxy = _interopRequireDefault(require("http-proxy"));

var proxy = _httpProxy["default"].createProxy();
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

                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/accesstoken"), {
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
                req.url = "/rest/upload/doc?access_token=".concat(this.accessToken);
                proxy.web(req, res, {
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  target: "".concat(FileHubAPI.host)
                });

              case 4:
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
      var _downloadDocProxy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, req, res) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getAccessToken();

              case 2:
                req.url = "/rest/download/doc/".concat(id, "?access_token=").concat(this.accessToken);
                proxy.web(req, res, {
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  target: "".concat(FileHubAPI.host)
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function downloadDocProxy(_x3, _x4, _x5) {
        return _downloadDocProxy.apply(this, arguments);
      }

      return downloadDocProxy;
    }()
  }, {
    key: "downloadZipDocsProxy",
    value: function () {
      var _downloadZipDocsProxy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getAccessToken();

              case 2:
                req.url = "/rest/download/doc/zip?access_token=".concat(this.accessToken);
                proxy.web(req, res, {
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  target: "".concat(FileHubAPI.host)
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function downloadZipDocsProxy(_x6, _x7) {
        return _downloadZipDocsProxy.apply(this, arguments);
      }

      return downloadZipDocsProxy;
    }()
  }, {
    key: "searchDoc",
    value: function () {
      var _searchDoc = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(search) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getAccessToken();

              case 2:
                _context5.next = 4;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/search/doc"), {
                  method: 'POST',
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: search,
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

      function searchDoc(_x8) {
        return _searchDoc.apply(this, arguments);
      }

      return searchDoc;
    }()
  }, {
    key: "getDocDetail",
    value: function () {
      var _getDocDetail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.getAccessToken();

              case 2:
                _context6.next = 4;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/detail/doc/").concat(id), {
                  method: 'GET',
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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

      function getDocDetail(_x9) {
        return _getDocDetail.apply(this, arguments);
      }

      return getDocDetail;
    }()
  }, {
    key: "queryDocs",
    value: function () {
      var _queryDocs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(ids) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.getAccessToken();

              case 2:
                _context7.next = 4;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/query/doc"), {
                  method: 'POST',
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: ids,
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

      function queryDocs(_x10) {
        return _queryDocs.apply(this, arguments);
      }

      return queryDocs;
    }()
  }, {
    key: "getDocs",
    value: function () {
      var _getDocs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(query) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context8.next = 5;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/doc"), {
                  method: 'GET',
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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

      function getDocs(_x11) {
        return _getDocs.apply(this, arguments);
      }

      return getDocs;
    }()
  }, {
    key: "deleteDoc",
    value: function () {
      var _deleteDoc = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(id) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.getAccessToken();

              case 2:
                _context9.next = 4;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/detail/doc/").concat(id), {
                  method: 'DELETE',
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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

      function deleteDoc(_x12) {
        return _deleteDoc.apply(this, arguments);
      }

      return deleteDoc;
    }()
  }, {
    key: "deleteDocs",
    value: function () {
      var _deleteDocs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(ids) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.getAccessToken();

              case 2:
                _context10.next = 4;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/batch/doc"), {
                  method: 'DELETE',
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: ids,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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

      function deleteDocs(_x13) {
        return _deleteDocs.apply(this, arguments);
      }

      return deleteDocs;
    }()
  }, {
    key: "uploadImageProxy",
    value: function () {
      var _uploadImageProxy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.getAccessToken();

              case 2:
                req.url = "/rest/upload/image?access_token=".concat(this.accessToken);
                proxy.web(req, res, {
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  target: "".concat(FileHubAPI.host)
                });

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function uploadImageProxy(_x14, _x15) {
        return _uploadImageProxy.apply(this, arguments);
      }

      return uploadImageProxy;
    }()
  }, {
    key: "downloadImageProxy",
    value: function () {
      var _downloadImageProxy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(id, req, res) {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.getAccessToken();

              case 2:
                req.url = "/rest/download/image/".concat(id, "?access_token=").concat(this.accessToken);
                proxy.web(req, res, {
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  target: "".concat(FileHubAPI.host)
                });

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function downloadImageProxy(_x16, _x17, _x18) {
        return _downloadImageProxy.apply(this, arguments);
      }

      return downloadImageProxy;
    }()
  }, {
    key: "getImageBase64",
    value: function () {
      var _getImageBase = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(id) {
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.getAccessToken();

              case 2:
                _context13.next = 4;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/detail/image/base64/").concat(id), {
                  method: 'GET',
                  headers: {
                    fix_token: FileHubAPI.headerToken
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

      function getImageBase64(_x19) {
        return _getImageBase.apply(this, arguments);
      }

      return getImageBase64;
    }()
  }, {
    key: "getImageDetail",
    value: function () {
      var _getImageDetail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(id) {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.getAccessToken();

              case 2:
                _context14.next = 4;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/detail/image/").concat(id), {
                  method: 'GET',
                  headers: {
                    fix_token: FileHubAPI.headerToken
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

      function getImageDetail(_x20) {
        return _getImageDetail.apply(this, arguments);
      }

      return getImageDetail;
    }()
  }, {
    key: "queryImages",
    value: function () {
      var _queryImages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(ids) {
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.getAccessToken();

              case 2:
                _context15.next = 4;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/query/image"), {
                  method: 'POST',
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: ids,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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

      function queryImages(_x21) {
        return _queryImages.apply(this, arguments);
      }

      return queryImages;
    }()
  }, {
    key: "getImages",
    value: function () {
      var _getImages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(query) {
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context16.next = 5;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/image"), {
                  method: 'GET',
                  headers: {
                    fix_token: FileHubAPI.headerToken
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

      function getImages(_x22) {
        return _getImages.apply(this, arguments);
      }

      return getImages;
    }()
  }, {
    key: "deleteImage",
    value: function () {
      var _deleteImage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(id) {
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.getAccessToken();

              case 2:
                _context17.next = 4;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/detail/image/").concat(id), {
                  method: 'DELETE',
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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

      function deleteImage(_x23) {
        return _deleteImage.apply(this, arguments);
      }

      return deleteImage;
    }()
  }, {
    key: "deleteImages",
    value: function () {
      var _deleteImages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(ids) {
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this.getAccessToken();

              case 2:
                _context18.next = 4;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/batch/image"), {
                  method: 'DELETE',
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: ids,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
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

      function deleteImages(_x24) {
        return _deleteImages.apply(this, arguments);
      }

      return deleteImages;
    }()
  }, {
    key: "uploadAttachProxy",
    value: function () {
      var _uploadAttachProxy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(req, res) {
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return this.getAccessToken();

              case 2:
                req.url = "/rest/upload/attach?access_token=".concat(this.accessToken);
                proxy.web(req, res, {
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  target: "".concat(FileHubAPI.host)
                });

              case 4:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function uploadAttachProxy(_x25, _x26) {
        return _uploadAttachProxy.apply(this, arguments);
      }

      return uploadAttachProxy;
    }()
  }, {
    key: "downloadAttachProxy",
    value: function () {
      var _downloadAttachProxy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(id, req, res) {
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return this.getAccessToken();

              case 2:
                req.url = "/rest/download/attach/".concat(id, "?access_token=").concat(this.accessToken);
                proxy.web(req, res, {
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  target: "".concat(FileHubAPI.host)
                });

              case 4:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function downloadAttachProxy(_x27, _x28, _x29) {
        return _downloadAttachProxy.apply(this, arguments);
      }

      return downloadAttachProxy;
    }()
  }, {
    key: "getAttachDetail",
    value: function () {
      var _getAttachDetail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(id) {
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return this.getAccessToken();

              case 2:
                _context21.next = 4;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/detail/attach/").concat(id), {
                  method: 'GET',
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 4:
                return _context21.abrupt("return", _context21.sent);

              case 5:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function getAttachDetail(_x30) {
        return _getAttachDetail.apply(this, arguments);
      }

      return getAttachDetail;
    }()
  }, {
    key: "queryAttaches",
    value: function () {
      var _queryAttaches = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(ids) {
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return this.getAccessToken();

              case 2:
                _context22.next = 4;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/query/attach"), {
                  method: 'POST',
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: ids,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 4:
                return _context22.abrupt("return", _context22.sent);

              case 5:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function queryAttaches(_x31) {
        return _queryAttaches.apply(this, arguments);
      }

      return queryAttaches;
    }()
  }, {
    key: "getAttaches",
    value: function () {
      var _getAttaches = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(query) {
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.next = 2;
                return this.getAccessToken();

              case 2:
                query['access_token'] = this.accessToken;
                _context23.next = 5;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/attach"), {
                  method: 'GET',
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  searchParams: query,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 5:
                return _context23.abrupt("return", _context23.sent);

              case 6:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function getAttaches(_x32) {
        return _getAttaches.apply(this, arguments);
      }

      return getAttaches;
    }()
  }, {
    key: "deleteAttach",
    value: function () {
      var _deleteAttach = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(id) {
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return this.getAccessToken();

              case 2:
                _context24.next = 4;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/detail/attach/").concat(id), {
                  method: 'DELETE',
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 4:
                return _context24.abrupt("return", _context24.sent);

              case 5:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function deleteAttach(_x33) {
        return _deleteAttach.apply(this, arguments);
      }

      return deleteAttach;
    }()
  }, {
    key: "deleteAttaches",
    value: function () {
      var _deleteAttaches = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(ids) {
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.next = 2;
                return this.getAccessToken();

              case 2:
                _context25.next = 4;
                return (0, _got["default"])("".concat(FileHubAPI.url, "/batch/attach"), {
                  method: 'DELETE',
                  headers: {
                    fix_token: FileHubAPI.headerToken
                  },
                  searchParams: {
                    access_token: this.accessToken
                  },
                  json: ids,
                  resolveBodyOnly: true,
                  responseType: 'json',
                  throwHttpErrors: false
                });

              case 4:
                return _context25.abrupt("return", _context25.sent);

              case 5:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function deleteAttaches(_x34) {
        return _deleteAttaches.apply(this, arguments);
      }

      return deleteAttaches;
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

      FileHubAPI.host = FileHubAPI.url.replace('/rest', '');
      FileHubAPI.headerToken = token;
    }
  }]);
  return FileHubAPI;
}();

exports["default"] = FileHubAPI;