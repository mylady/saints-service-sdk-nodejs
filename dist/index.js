"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fileHubApi = _interopRequireDefault(require("./file-hub-api"));

var _identityApi = _interopRequireDefault(require("./identity-api"));

var _logApi = _interopRequireDefault(require("./log-api"));

var _deviceApi = _interopRequireDefault(require("./device-api"));

var _resourceType = require("./resource-type");

var _eventApi = _interopRequireDefault(require("./event-api"));

var _messageHubApi = _interopRequireDefault(require("./message-hub-api"));

var _cloudProxyApi = _interopRequireDefault(require("./cloud-proxy-api"));

var sdk = {
  FileHubAPI: _fileHubApi["default"],
  IdentityAPI: _identityApi["default"],
  LogAPI: _logApi["default"],
  DeviceAPI: _deviceApi["default"],
  ResourceTypeName: _resourceType.ResourceTypeName,
  getResourceTypeName: _resourceType.getResourceTypeName,
  EventAPI: _eventApi["default"],
  MessageAPI: _messageHubApi["default"],
  CloudProxyAPI: _cloudProxyApi["default"]
};
var _default = sdk;
exports["default"] = _default;
module.exports = sdk;
module.exports["default"] = sdk;