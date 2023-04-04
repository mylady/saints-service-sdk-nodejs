
import FileHubAPI from './file-hub-api';
import IdentityAPI from './identity-api';
import LogAPI from './log-api';
import DeviceAPI from './device-api';
import { ResourceTypeName, getResourceTypeName } from './resource-type';
import EventAPI from './event-api';
import MessageAPI from './message-hub-api';
import CloudProxyAPI from './cloud-proxy-api';

const sdk = {
    FileHubAPI: FileHubAPI,
    IdentityAPI: IdentityAPI,
    LogAPI: LogAPI,
    DeviceAPI: DeviceAPI,
    ResourceTypeName: ResourceTypeName,
    getResourceTypeName: getResourceTypeName,
    EventAPI: EventAPI,
    MessageAPI: MessageAPI,
    CloudProxyAPI: CloudProxyAPI
};

export default sdk;
module.exports = sdk;
module.exports.default = sdk;