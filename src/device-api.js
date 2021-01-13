'use strict';

const rp = require('request-promise');

export default class DeviceAPI {
    constructor() {
        this.accessToken = '';
    }

    static initialize(url) {
        if (typeof (url) !== 'string') {
            throw new Error('invalid url');
        }

        if (url.lastIndexOf('/') === url.length - 1) {
            DeviceAPI.url = url.substring(0, url.lastIndexOf('/'));
        } else {
            DeviceAPI.url = url;
        }
    }

    async getAccessToken() {
        let res = await rp({
            method: 'POST',
            uri: `${DeviceAPI.url}/accesstoken`,
            json: true
        });
        this.accessToken = res.data;
    }

    async getCommonDevice(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${DeviceAPI.url}/commondevice`,
            qs: query,
            json: true,
            gzip: true
        });
    }

    async getCommonDeviceById(id) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${DeviceAPI.url}/commondevice/${id}`,
            qs: query,
            json: true,
            gzip: true
        });
    }

    async getCommonVideoDevice(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${DeviceAPI.url}/commonvideodevice`,
            qs: query,
            json: true,
            gzip: true,
        });
    }

    async getCommonVideoDeviceById(id) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${DeviceAPI.url}/commonvideodevice/${id}`,
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
            uri: `${DeviceAPI.url}/${typeName}`,
            qs: query,
            json: true,
            gzip: true,
        });
    }

    async getTypeDeviceById(typeName, id) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${DeviceAPI.url}/${typeName}/${id}`,
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
            uri: `${DeviceAPI.url}/devicemodel`,
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
            uri: `${DeviceAPI.url}/devicetag`,
            qs: query,
            json: true,
            gzip: true,
        });
    }
}