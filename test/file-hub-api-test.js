const { FileHubAPI } = require('../dist').default,
    api = new FileHubAPI(),
    stream = require('stream/promises'),
    fs = require('fs');

FileHubAPI.initialize('http://localhost:8002/rest');

const testDownloadPack = async () => {
    let resp = await api.downloadZipDocsProxy(["e1abdc0a-41e4-4fba-b3f8-e40596fefde6"]);
    console.log(resp.headers);
    //await stream.pipeline(resp,fs.createWriteStream('./tmp.zip'));
};

try {
    testDownloadPack();
} catch (err) {
    console.log(err);
}