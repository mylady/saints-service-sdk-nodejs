'use strict';

const rp = require('request-promise');

export default class DeviceAPI {
    constructor() {
        this.accessToken = '';
    }

    static async initialize(url) {
        if (typeof (url) !== 'string') {
            throw new Error('invalid url');
        }

        if (url.lastIndexOf('/') === url.length - 1) {
            LogAPI.url = url.substring(0, url.lastIndexOf('/'));
        } else {
            LogAPI.url = url;
        }
    }

    async getAccessToken() {
        let res = await rp({
            method: 'POST',
            uri: LogAPI.url + '/accesstoken',
            json: true
        });
        this.accessToken = res.data;
    }

    async getCommonDevice(log) {
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: LogAPI.url + '/commondevice',
            qs: {
                access_token: this.accessToken
            },
            body: log,
            json: true
        });
    }

    async getCommonVideoDevice(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: LogAPI.url + '/commonvideodevice',
            qs: query,
            json: true,
            gzip: true,
        });
    }

    async getTypeDevice(typeName, query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: LogAPI.url + '/' + typeName,
            qs: query,
            json: true,
            gzip: true,
        });
    }

    async getDeviceModel(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: LogAPI.url + '/devicemodel',
            qs: query,
            json: true,
            gzip: true,
        });
    }

    async getDeviceTag(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: LogAPI.url + '/devicetag',
            qs: query,
            json: true,
            gzip: true,
        });
    }
}