'use strict';

const request = require('request'),
    rp = require('request-promise');

/*
    for upload file proxy,it uses nodejs default req&res object.
    if you use koa like framework,which wrapper req and res in context object
    you need set like koa, ctx.respond = false to interupt koa response
*/

export default class FileHubAPI {
    constructor() {
        this.accessToken = '';
    }

    static async initialize(url) {
        if (typeof (url) !== 'string') {
            throw new Error('invalid url');
        }

        if (url.lastIndexOf('/') === url.length - 1) {
            FileHubAPI.url = url.substring(0, url.lastIndexOf('/'));
        } else {
            FileHubAPI.url = url;
        }
    }

    async getAccessToken() {
        let res = await rp({
            method: 'POST',
            uri: FileHubAPI.url + '/accesstoken',
            json: true
        });
        this.accessToken = res.data;
    }

    async uploadDocProxy(req,res) {
        await this.getAccessToken();
        req.pipe(request({
            method: 'POST',
            uri: FileHubAPI.url + '/upload/doc',
            qs: {
                access_token: this.accessToken
            }
        })).pipe(res);
    }

    async downloadDocProxy(id, res) {
        await this.getAccessToken();
        request({
            method: 'GET',
            uri: FileHubAPI.url + `/download/doc/${id}`,
            qs: {
                access_token: this.accessToken
            }
        }).pipe(res);
    }

    async searchDoc(search) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: FileHubAPI.url + '/search/doc',
            qs: {
                access_token: this.accessToken
            },
            body: search,
            json: true
        });
    }

    async getDocDetail(id) {
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: FileHubAPI.url + `/detail/doc/${id}`,
            qs: {
                access_token: this.accessToken
            },
            json: true
        });
    }

    async queryDocs(ids) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: FileHubAPI.url + '/query/doc',
            qs: {
                access_token: this.accessToken
            },
            body: ids,
            json: true
        });
    }

    async getDocs(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: FileHubAPI.url + '/doc',
            qs: query,
            json: true
        });
    }

    async uploadImageProxy(req,res) {
        await this.getAccessToken();
        req.pipe(request({
            method: 'POST',
            uri: FileHubAPI.url + '/upload/image',
            qs: {
                access_token: this.accessToken
            }
        })).pipe(res);
    }

    async downloadImageProxy(id, res) {
        await this.getAccessToken();
        request({
            method: 'GET',
            uri: FileHubAPI.url + `/download/image/${id}`,
            qs: {
                access_token: this.accessToken
            }
        }).pipe(res);
    }

    async getImageDetail(id) {
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: FileHubAPI.url + `/detail/image/${id}`,
            qs: {
                access_token: this.accessToken
            },
            json: true
        });
    }

    async queryImages(ids) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: FileHubAPI.url + '/query/image',
            qs: {
                access_token: this.accessToken
            },
            body: ids,
            json: true
        });
    }

    async getImages(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: FileHubAPI.url + '/image',
            qs: query,
            json: true
        });
    }

    async uploadAttachProxy(req,res) {
        await this.getAccessToken();
        req.pipe(request({
            method: 'POST',
            uri: FileHubAPI.url + '/upload/attach',
            qs: {
                access_token: this.accessToken
            }
        })).pipe(res);
    }

    async downloadAttachProxy(id, res) {
        await this.getAccessToken();
        request({
            method: 'GET',
            uri: FileHubAPI.url + `/download/attach/${id}`,
            qs: {
                access_token: this.accessToken
            }
        }).pipe(res);
    }

    async getAttachDetail(id) {
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: FileHubAPI.url + `/detail/attach/${id}`,
            qs: {
                access_token: this.accessToken
            },
            json: true
        });
    }

    async queryAttaches(ids) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: FileHubAPI.url + '/query/attach',
            qs: {
                access_token: this.accessToken
            },
            body: ids,
            json: true
        });
    }

    async getAttaches(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: FileHubAPI.url + '/attach',
            qs: query,
            json: true
        });
    }
}