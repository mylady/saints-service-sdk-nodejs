'use strict';

const rp = require('request-promise');

export default class MessageHubAPI {
    constructor() {
        this.accessToken = '';
    }

    static initialize(url, token = '') {
        if (typeof (url) !== 'string') {
            throw new Error('invalid url');
        }

        if (url.lastIndexOf('/') === url.length - 1) {
            MessageHubAPI.url = url.substring(0, url.lastIndexOf('/'));
        } else {
            MessageHubAPI.url = url;
        }

        MessageHubAPI.headerToken = token;
    }

    async getAccessToken() {
        if (MessageHubAPI.headerToken) {
            return;
        } else {
            let res = await rp({
                method: 'POST',
                uri: `${MessageHubAPI.url}/accesstoken`,
                json: true
            });
            this.accessToken = res.data;
        }
    }

    async getMessage(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${MessageHubAPI.url}/message`,
            qs: query,
            headers: {
                fix_token: MessageHubAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }
}