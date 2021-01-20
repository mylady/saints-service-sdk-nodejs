'use strict';

const rp = require('request-promise');

export default class EventAPI {
    constructor() {
        this.accessToken = '';
    }

    static initialize(url) {
        if (typeof (url) !== 'string') {
            throw new Error('invalid url');
        }

        if (url.lastIndexOf('/') === url.length - 1) {
            EventAPI.url = url.substring(0, url.lastIndexOf('/'));
        } else {
            EventAPI.url = url;
        }
    }

    async getAccessToken() {
        let res = await rp({
            method: 'POST',
            uri: `${EventAPI.url}/accesstoken`,
            json: true
        });
        this.accessToken = res.data;
    }

    async getNormalEvent(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${EventAPI.url}/device/normal`,
            qs: query,
            json: true,
            gzip: true,
        });
    }

    async getAlarmEvent(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${EventAPI.url}/device/alarm`,
            qs: query,
            json: true,
            gzip: true
        });
    }

    async getStatusEvent(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${EventAPI.url}/device/status`,
            qs: query,
            json: true,
            gzip: true
        });
    }

    async getFaultEvent(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${EventAPI.url}/device/fault`,
            qs: query,
            json: true,
            gzip: true
        });
    }
}