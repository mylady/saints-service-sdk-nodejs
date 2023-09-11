import got from 'got';

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
            return;
        } else {
            let res = await got(`${LogAPI.url}/accesstoken`, {
                method: 'POST',
                resolveBodyOnly: true,
                responseType: 'json',
                throwHttpErrors: false
            });
            this.accessToken = res.data;
        }
    }

    async addAccessLog(log) {
        await this.getAccessToken();
        return await got(`${LogAPI.url}/accesslog`, {
            method: 'POST',
            headers: {
                fix_token: LogAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: log,
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async getAccessLog(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${LogAPI.url}/accesslog`, {
            method: 'GET',
            headers: {
                fix_token: LogAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async addExtAccessLog(log) {
        await this.getAccessToken();
        return await got(`${LogAPI.url}/ext/accesslog`, {
            method: 'POST',
            headers: {
                fix_token: LogAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: log,
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async getExtAccessLog(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${LogAPI.url}/ext/accesslog`, {
            method: 'GET',
            headers: {
                fix_token: LogAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }
}