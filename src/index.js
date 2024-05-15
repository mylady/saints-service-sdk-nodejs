
import FileHubAPI from './file-hub-api';
import IdentityAPI from './identity-api';
import LogAPI from './log-api';
import DeviceAPI from './device-api';
import { ResourceTypeName, getResourceTypeName } from './resource-type';
import EventAPI from './event-api';
import MessageAPI from './message-hub-api';
import CloudProxyAPI from './cloud-proxy-api';
import VideoRecordAPI from './video-record-api';

const sdk = {
    FileHubAPI,
    IdentityAPI,
    LogAPI,
    DeviceAPI,
    ResourceTypeName,
    getResourceTypeName,
    EventAPI,
    MessageAPI,
    CloudProxyAPI,
    VideoRecordAPI
};

export default sdk;
module.exports = sdk;
module.exports.default = sdk;