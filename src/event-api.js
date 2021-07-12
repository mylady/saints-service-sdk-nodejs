'use strict';

const got = require('got').default;

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
            let res = await got(`${EventAPI.url}/accesstoken`, {
                method: 'POST',
                resolveBodyOnly: true,
                responseType: 'json'
            });
            this.accessToken = res.data;
        }
    }

    async getNormalEvent(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${EventAPI.url}/device/normal`, {
            method: 'GET',
            headers: {
                fix_token: EventAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async getStatusEvent(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${EventAPI.url}/device/status`, {
            method: 'GET',
            headers: {
                fix_token: EventAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async getFaultEvent(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${EventAPI.url}/device/fault`, {
            method: 'GET',
            headers: {
                fix_token: EventAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async getAlarmEvent(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${EventAPI.url}/device/alarm`, {
            method: 'GET',
            headers: {
                fix_token: EventAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async processAlarm(serial, data) {
        await this.getAccessToken();
        return await got(`${EventAPI.url}/device/alarm/${serial}`, {
            method: 'PUT',
            headers: {
                fix_token: EventAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: data,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async checkAlarmDistrict(data) {
        await this.getAccessToken();
        return await got(`${EventAPI.url}/device/alarm/check/district`, {
            method: 'POST',
            headers: {
                fix_token: EventAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: data,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async statsAlarmCode(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${EventAPI.url}/stats/alarm/alarmcode`, {
            method: 'GET',
            headers: {
                fix_token: EventAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async statsAlarmProcessStatus(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${EventAPI.url}/stats/alarm/processstatus`, {
            method: 'GET',
            headers: {
                fix_token: EventAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async statsAlarmTrend(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${EventAPI.url}/stats/alarm/trend`, {
            method: 'GET',
            headers: {
                fix_token: EventAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }
}