'use strict';

const rp = require('request-promise');

export default class IdentityAPI {
    constructor() {
        this.accessToken = '';
    }

    static async initialize(url) {
        if (typeof (url) !== 'string') {
            throw new Error('invalid url');
        }

        if (url.lastIndexOf('/') === url.length - 1) {
            IdentityAPI.url = url.substring(0, url.lastIndexOf('/'));
        } else {
            IdentityAPI.url = url;
        }
    }

    async getAccessToken() {
        let res = await rp({
            method: 'POST',
            uri: IdentityAPI.url + '/accesstoken',
            json: true
        });
        this.accessToken = res.data;
    }

    async getUserList() {
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: IdentityAPI.url + '/service/user',
            qs: {
                access_token: this.accessToken
            },
            json: true
        });
    }

    async getUserWithIds(idArray) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: IdentityAPI.url + '/service/user/ids',
            qs: {
                access_token: this.accessToken
            },
            body: idArray,
            json: true
        });
    }

    async createUser(user) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: IdentityAPI.url + `/service/user`,
            qs: {
                access_token: this.accessToken
            },
            body: user,
            json: true
        })
    }

    async passwordReset(uid, pwd) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: IdentityAPI.url + `/service/user/password`,
            qs: {
                access_token: this.accessToken
            },
            body: {
                id: uid,
                pwd: pwd
            },
            json: true
        })
    }

    async login(uname, pwd) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: IdentityAPI.url + '/auth/login',
            qs: {
                access_token: this.accessToken
            },
            body: {
                user_name: uname,
                user_pwd: pwd
            },
            json: true
        });
    }

    async logout(token) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: IdentityAPI.url + '/auth/logout',
            qs: {
                access_token: this.accessToken
            },
            body: {
                token: token
            },
            json: true
        });
    }

    async self(token) {
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: IdentityAPI.url + '/self',
            qs: {
                access_token: this.accessToken
            },
            auth: {
                bearer: token
            },
            json: true
        });
    }

    async updateSelf(token, self) {
        await this.getAccessToken();
        return await rp({
            method: 'PUT',
            uri: IdentityAPI.url + '/self',
            qs: {
                access_token: this.accessToken
            },
            auth: {
                bearer: token
            },
            body: self,
            json: true
        });
    }


    async passwordSelf(token, oldPwd, newPwd) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: IdentityAPI.url + '/self/password',
            qs: {
                access_token: this.accessToken
            },
            auth: {
                bearer: token
            },
            body: {
                old_pwd: oldPwd,
                new_pwd: newPwd
            },
            json: true
        });
    }
}