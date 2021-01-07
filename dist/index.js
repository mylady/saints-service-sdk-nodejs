"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fileHubApi = _interopRequireDefault(require("./file-hub-api"));

var _identityApi = _interopRequireDefault(require("./identity-api"));

var _logApi = _interopRequireDefault(require("./log-api"));

var sdk = {
  FileHubAPI: _fileHubApi["default"],
  IdentityAPI: _identityApi["default"],
  LogAPI: _logApi["default"]
};
var _default = sdk;
exports["default"] = _default;
module.exports = sdk;
module.exports["default"] = sdk;