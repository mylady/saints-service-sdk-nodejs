const { LogAPI } = require('../dist').default,
    api = new LogAPI();


LogAPI.initialize('http://192.168.0.21:8008/rest');

const testLog = async () => {
    let logs = await api.getAccessLog({});
    console.log(logs);
};

try {
    testLog();
} catch (err) {
    console.log(err);
}