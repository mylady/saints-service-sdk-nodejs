import got from 'got';

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
            let res = await got(`${DeviceAPI.url}/accesstoken`, {
                method: 'POST',
                resolveBodyOnly: true,
                responseType: 'json',
                throwHttpErrors: false
            });
            this.accessToken = res.data;
        }
    }

    async getCommonDevice(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${DeviceAPI.url}/commondevice`, {
            method: 'GET',
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async queryCommonDevice(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${DeviceAPI.url}/commondevice/query`, {
            method: 'POST',
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            json: query,
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async getCommonDeviceById(id) {
        await this.getAccessToken();
        return await got(`${DeviceAPI.url}/commondevice/${id}`, {
            method: 'GET',
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async updateCommonDevice(id, value) {
        await this.getAccessToken();
        return await got(`${DeviceAPI.url}/commondevice/${id}`, {
            method: 'PUT',
            json: value,
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async getTypeDevice(typeName, query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${DeviceAPI.url}/${typeName}`, {
            method: 'GET',
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async queryTypeDevice(typeName, query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${DeviceAPI.url}/${typeName}/query`, {
            method: 'POST',
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            json: query,
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async getTypeDeviceById(typeName, id) {
        await this.getAccessToken();
        return await got(`${DeviceAPI.url}/${typeName}/${id}`, {
            method: 'GET',
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async getDeviceModel(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${DeviceAPI.url}/devicemodel`, {
            method: 'GET',
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async getDeviceTag(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${DeviceAPI.url}/devicetag`, {
            method: 'GET',
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async getStreamAddress(id) {
        await this.getAccessToken();
        return await got(`${DeviceAPI.url}/stream/${id}`, {
            method: 'GET',
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async statsDeviceStatus() {
        await this.getAccessToken();
        return await got(`${DeviceAPI.url}/stats/device/status`, {
            method: 'GET',
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async statsDeviceFault() {
        await this.getAccessToken();
        return await got(`${DeviceAPI.url}/stats/device/fault`, {
            method: 'GET',
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async statsDeviceCategory(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${DeviceAPI.url}/stats/device/category`, {
            method: 'GET',
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async statsDeviceTag(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${DeviceAPI.url}/stats/device/status`, {
            method: 'GET',
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }

    async statsTagUsed() {
        await this.getAccessToken();
        return await got(`${DeviceAPI.url}/stats/tag/used`, {
            method: 'GET',
            headers: {
                fix_token: DeviceAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            resolveBodyOnly: true,
            responseType: 'json',
            throwHttpErrors: false
        });
    }
}