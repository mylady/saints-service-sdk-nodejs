"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _yituV = _interopRequireDefault(require("./yitu-v18"));

var _aliyun = _interopRequireDefault(require("./aliyun"));

var _xinzhi = _interopRequireDefault(require("./xinzhi"));

var CloudProxyAPI = /*#__PURE__*/function () {
  function CloudProxyAPI() {
    (0, _classCallCheck2["default"])(this, CloudProxyAPI);
  }

  (0, _createClass2["default"])(CloudProxyAPI, null, [{
    key: "initialize",
    value: function initialize(url) {
      var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (typeof url !== 'string') {
        throw new Error('invalid url');
      }

      if (url.lastIndexOf('/') === url.length - 1) {
        CloudProxyAPI.url = url.substring(0, url.lastIndexOf('/'));
      } else {
        CloudProxyAPI.url = url;
      }

      CloudProxyAPI.headerToken = token;
      CloudProxyAPI.yituV18 = new _yituV["default"](url, token);
      CloudProxyAPI.aliyun = new _aliyun["default"](url, token);
      CloudProxyAPI.xinzhi = new _xinzhi["default"](url, token);
    }
  }]);
  return CloudProxyAPI;
}();

exports["default"] = CloudProxyAPI;