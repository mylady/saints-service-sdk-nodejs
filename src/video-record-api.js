import got from 'got';
import httpProxy from 'http-proxy';
const proxy = httpProxy.createProxy();

export default class VideoRecordAPI {
    constructor() {
        this.accessToken = '';
    }

    static initialize(url, token = '') {
        if (typeof (url) !== 'string') {
            throw new Error('invalid url');
        }

        if (url.lastIndexOf('/') === url.length - 1) {
            VideoRecordAPI.url = url.substring(0, url.lastIndexOf('/'));
        } else {
            VideoRecordAPI.url = url;
        }

        VideoRecordAPI.host = VideoRecordAPI.url.replace('/rest', '');
        VideoRecordAPI.headerToken = token;
    }

    async getAccessToken() {
        if (VideoRecordAPI.headerToken) {
            return;
        } else {
            let res = await got(`${VideoRecordAPI.url}/accesstoken`, {
                method: 'POST',
                resolveBodyOnly: true,
                responseType: 'json',
                throwHttpErrors: false
            });
            this.accessToken = res.data;
        }
    }

    async startRecord(data) {
        await this.getAccessToken();
        return await got(`${VideoRecordAPI.url}/record/start`, {
            method: 'POST',
            headers: {
                fix_token: VideoRecordAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: data,
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async stopRecord(id) {
        await this.getAccessToken();
        return await got(`${VideoRecordAPI.url}/record/stop/${id}`, {
            method: 'POST',
            headers: {
                fix_token: VideoRecordAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async downloadRecord(data) {
        await this.getAccessToken();
        req.url = `/rest/record/download/${data.folder}/${data.id}?access_token=${this.accessToken}`;
        proxy.web(req, res, {
            headers: {
                fix_token: VideoRecordAPI.headerToken
            },
            target: `${VideoRecordAPI.host}`
        });
    }
}