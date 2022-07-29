
import FileHubAPI from './file-hub-api';
import IdentityAPI from './identity-api';
import LogAPI from './log-api';
import DeviceAPI from './device-api';
import DeviceType from './device-type';
import EventAPI from './event-api';
import MessageAPI from './message-hub-api';

const sdk = {
    FileHubAPI: FileHubAPI,
    IdentityAPI: IdentityAPI,
    LogAPI: LogAPI,
    DeviceAPI: DeviceAPI,
    DeviceType: DeviceType,
    EventAPI: EventAPI,
    MessageAPI: MessageAPI
};

export default sdk;
module.exports = sdk;
module.exports.default = sdk;