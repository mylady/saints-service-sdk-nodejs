import got from 'got';

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
            let res = await got(`${MessageHubAPI.url}/accesstoken`, {
                method: 'POST',
                resolveBodyOnly: true,
                responseType: 'json',
                throwHttpErrors: false
            });
            this.accessToken = res.data;
        }
    }

    async getMessage(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${MessageHubAPI.url}/message`, {
            method: 'GET',
            headers: {
                fix_token: MessageHubAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }
}