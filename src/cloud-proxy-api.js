import got from 'got';

export default class CloudProxyAPI {
    constructor() {
        this.accessToken = '';
    }

    static initialize(url, token = '') {
        if (typeof (url) !== 'string') {
            throw new Error('invalid url');
        }

        if (url.lastIndexOf('/') === url.length - 1) {
            CloudProxyAPI.url = url.substring(0, url.lastIndexOf('/'));
        } else {
            CloudProxyAPI.url = url;
        }

        CloudProxyAPI.host = CloudProxyAPI.url.replace('/rest', '');
        CloudProxyAPI.headerToken = token;
    }

    async getAccessToken() {
        if (CloudProxyAPI.headerToken) {
            return;
        } else {
            let res = await got(`${CloudProxyAPI.url}/accesstoken`, {
                method: 'POST',
                resolveBodyOnly: true,
                responseType: 'json'
            });
            this.accessToken = res.data;
        }
    }

    async ocrBizLicense(type) {
        await this.getAccessToken();
        req.url = `${CloudProxyAPI.url}/ocr/license/biz?access_token=${this.accessToken}&type_name=${type}`;
        proxy.web(req, res, {
            headers: {
                fix_token: CloudProxyAPI.headerToken
            },
            target: `${CloudProxyAPI.host}`
        });
    }

    async orcFoodSellLicense(type) {
        await this.getAccessToken();
        req.url = `${CloudProxyAPI.url}/ocr/license/foodsell?access_token=${this.accessToken}&type_name=${type}`;
        proxy.web(req, res, {
            headers: {
                fix_token: CloudProxyAPI.headerToken
            },
            target: `${CloudProxyAPI.host}`
        });
    }

    async sendSms(sms, type) {
        return await got(`${CloudProxyAPI.url}/sms`, {
            method: 'POST',
            headers: {
                fix_token: this.token
            },
            searchParams: {
                type_name: type
            },
            json: sms,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async mapSuggest(query, type) {
        return await got(`${CloudProxyAPI.url}/map/suggest`, {
            method: 'GET',
            headers: {
                fix_token: this.token
            },
            searchParam: {
                ...query,
                type_name: type
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async mapCordConvert(query, type) {
        return await got(`${CloudProxyAPI.url}/map/coordconvert`, {
            method: 'GET',
            headers: {
                fix_token: this.token
            },
            searchParam: {
                ...query,
                type_name: type
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async weather(type) {
        return await got(`${CloudProxyAPI.url}/weather`, {
            method: 'GET',
            headers: {
                fix_token: this.token
            },
            searchParams: {
                type_name: type
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async importFace(face, type) {
        return await got(`${CloudProxyAPI.url}/face/import`, {
            method: 'POST',
            headers: {
                fix_token: this.token
            },
            searchParams: {
                type_name: type
            },
            json: face,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async searchFace(face, type) {
        return await got(`${CloudProxyAPI.url}/face/search`, {
            method: 'POST',
            headers: {
                fix_token: this.token
            },
            searchParams: {
                type_name: type
            },
            json: face,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }
}