'use strict';

const rp = require('request-promise');

export default class IdentityAPI {
    constructor(){
        this.accessToken = '';
    }

    static async initialize(url) {
        if (typeof (url) !== 'string') {
            throw new Error('invalid url');
        }

        if(url.lastIndexOf('/') === url.length -1){
            IdentityAPI.url = url.substring(0,url.lastIndexOf('/'));
        }else{
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
            uri: IdentityAPI.url + '/view/user',
            qs: {
                access_token: this.accessToken
            },
            json: true
        });
    }

    async getUser(uid) {
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: IdentityAPI.url + `/view/user/${uid}`,
            qs: {
                access_token: this.accessToken
            },
            json: true
        });
    }

    async login(auth) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: IdentityAPI.url + '/auth/login',
            qs: {
                access_token: this.accessToken
            },
            body: auth,
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

    async updateSelf(token, body) {
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
            body: body,
            json: true
        });
    }


    async password(token, pwd) {
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
            body: pwd,
            json: true
        });
    }
}