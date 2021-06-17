'use strict';

const rp = require('request-promise');

export default class DeviceAPI {
    constructor() {
        this.accessToken = '';
    }

    static initialize(url, token = '') {
        if (typeof (url) !== 'string') {
            throw new Error('invalid url');
        }

        if (url.lastIndexOf('/') === url.length - 1) {
            DeviceAPI.url = url.substring(0, url.lastIndexOf('/'));
        } else {
            DeviceAPI.url = url;
        }

        DeviceAPI.headerToken = token;
    }

    async getAccessToken() {
        if (DeviceAPI.headerToken) {
            return;
        } else {
            let res = await rp({
                method: 'POST',
                uri: `${DeviceAPI.url}/accesstoken`,
                json: true
            });
            this.accessToken = res.data;
        }
    }

    async getCommonDevice(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${DeviceAPI.url}/commondevice`,
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            qs: query,
            json: true,
            gzip: true
        });
    }

    async getCommonDeviceById(id) {
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: `${DeviceAPI.url}/commondevice/${id}`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            json: true,
            gzip: true
        });
    }

    async updateCommonDevice(id, value) {
        await this.getAccessToken();
        return await rp({
            method: 'PUT',
            uri: `${DeviceAPI.url}/commondevice/${id}`,
            body: value,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: DeviceAPI.headerToken
            },
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
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }

    async getCommonVideoDeviceById(id) {
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: `${DeviceAPI.url}/commonvideodevice/${id}`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: DeviceAPI.headerToken
            },
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
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }

    async getTypeDeviceById(typeName, id) {
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: `${DeviceAPI.url}/${typeName}/${id}`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: DeviceAPI.headerToken
            },
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
            headers: {
                fix_token: DeviceAPI.headerToken
            },
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
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }

    async statsDeviceStatus(){
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: `${DeviceAPI.url}/stats/device/status`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }

    async statsDeviceFault(){
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: `${DeviceAPI.url}/stats/device/fault`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }

    async statsDeviceCategory(){
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: `${DeviceAPI.url}/stats/device/category`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }

    async statsDeviceTag(query){
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${DeviceAPI.url}/stats/device/status`,
            qs: query,
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }

    async statsTagUsed(){
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: `${DeviceAPI.url}/stats/tag/used`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }
}