'use strict';

const rp = require('request-promise');

export default class LogAPI {
    constructor() {
        this.accessToken = '';
    }

    static initialize(url, token = '') {
        if (typeof (url) !== 'string') {
            throw new Error('invalid url');
        }

        if (url.lastIndexOf('/') === url.length - 1) {
            LogAPI.url = url.substring(0, url.lastIndexOf('/'));
        } else {
            LogAPI.url = url;
        }

        LogAPI.headerToken = token;
    }

    async getAccessToken() {
        if (LogAPI.headerToken) {
            return LogAPI.headerToken;
        } else {
            let res = await rp({
                method: 'POST',
                uri: `${LogAPI.url}/accesstoken`,
                json: true
            });
            this.accessToken = res.data;
        }
    }

    async addOpLog(log) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: `${LogAPI.url}/oplog`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: LogAPI.headerToken
            },
            body: log,
            json: true
        });
    }

    async getOpLog(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${LogAPI.url}/oplog`,
            qs: query,
            headers: {
                fix_token: LogAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }

    async addAccessLog(log) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: `${LogAPI.url}/accesslog`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: LogAPI.headerToken
            },
            body: log,
            json: true
        });
    }

    async getAccessLog(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${LogAPI.url}/accesslog`,
            qs: query,
            headers: {
                fix_token: LogAPI.headerToken
            },
            json: true,
            gzip: true
        });
    }
}