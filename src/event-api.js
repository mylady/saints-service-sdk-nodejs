'use strict';

const rp = require('request-promise');

export default class EventAPI {
    constructor() {
        this.accessToken = '';
    }

    static initialize(url, token = '') {
        if (typeof (url) !== 'string') {
            throw new Error('invalid url');
        }

        if (url.lastIndexOf('/') === url.length - 1) {
            EventAPI.url = url.substring(0, url.lastIndexOf('/'));
        } else {
            EventAPI.url = url;
        }

        EventAPI.headerToken = token;
    }

    async getAccessToken() {
        if (EventAPI.headerToken) {
            return;
        } else {
            let res = await rp({
                method: 'POST',
                uri: `${EventAPI.url}/accesstoken`,
                json: true
            });
            this.accessToken = res.data;
        }
    }

    async getNormalEvent(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${EventAPI.url}/device/normal`,
            qs: query,
            headers: {
                fix_token: EventAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }

    async getStatusEvent(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${EventAPI.url}/device/status`,
            qs: query,
            headers: {
                fix_token: EventAPI.headerToken
            },
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
            headers: {
                fix_token: EventAPI.headerToken
            },
            json: true,
            gzip: true
        });
    }

    async getAlarmEvent(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${EventAPI.url}/device/alarm`,
            qs: query,
            headers: {
                fix_token: EventAPI.headerToken
            },
            json: true,
            gzip: true
        });
    }

    async processAlarm(serial, data) {
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: `${EventAPI.url}/device/alarm/${serial}`,
            qs: {
                access_token: this.accessToken
            },
            body: data,
            headers: {
                fix_token: EventAPI.headerToken
            },
            json: true,
            gzip: true
        });
    }

    async statsAlarmCode(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${EventAPI.url}/stats/alarm/alarmcode`,
            qs: query,
            headers: {
                fix_token: EventAPI.headerToken
            },
            json: true,
            gzip: true
        });
    }

    async statsAlarmProcessStatus(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${EventAPI.url}/stats/alarm/processstatus`,
            qs: query,
            headers: {
                fix_token: EventAPI.headerToken
            },
            json: true,
            gzip: true
        });
    }

    async statsAlarmTrend(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${EventAPI.url}/stats/alarm/trend`,
            qs: query,
            headers: {
                fix_token: EventAPI.headerToken
            },
            json: true,
            gzip: true
        });
    }
}