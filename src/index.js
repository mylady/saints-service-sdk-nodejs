
import FileHubAPI from './file-hub-api';
import IdentityAPI from './identity-api';
import LogAPI from './log-api';

const sdk = {
    FileHubAPI: FileHubAPI,
    IdentityAPI: IdentityAPI,
    LogAPI: LogAPI,
};

export default sdk;
module.exports = sdk;
module.exports.default = sdk;