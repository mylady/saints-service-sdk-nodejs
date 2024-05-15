const { VideoRecordAPI } = require('../dist'),
    api = new VideoRecordAPI(),
    stream = require('stream/promises'),
    fs = require('fs');

VideoRecordAPI.initialize('http://localhost:8009/rest');

const testDownload = async () => {
    let resp = await api.downloadRecord({folder:'310117111202101220323',id:'171352d5-712a-4620-805c-0c8e87a05737'})
    console.log(resp.headers);
    //await stream.pipeline(resp,fs.createWriteStream('./tmp.zip'));
};

try {
    testDownload();
} catch (err) {
    console.log(err);
}