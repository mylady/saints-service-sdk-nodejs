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

    static initialize(url, token = '') {
        if (typeof (url) !== 'string') {
            throw new Error('invalid url');
        }

        if (url.lastIndexOf('/') === url.length - 1) {
            FileHubAPI.url = url.substring(0, url.lastIndexOf('/'));
        } else {
            FileHubAPI.url = url;
        }

        FileHubAPI.headerToken = token;
    }

    async getAccessToken() {
        if (FileHubAPI.headerToken) {
            return;
        } else {
            let res = await rp({
                method: 'POST',
                uri: `${FileHubAPI.url}/accesstoken`,
                json: true
            });
            this.accessToken = res.data;
        }
    }

    async uploadDocProxy(req, res) {
        await this.getAccessToken();
        req.pipe(request({
            method: 'POST',
            uri: `${FileHubAPI.url}/upload/doc`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            }
        })).pipe(res);
    }

    async downloadDocProxy(id, res) {
        await this.getAccessToken();
        request({
            method: 'GET',
            uri: `${FileHubAPI.url}/download/doc/${id}`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            }
        }).pipe(res);
    }

    async searchDoc(search) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: `${FileHubAPI.url}/search/doc`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            body: search,
            json: true,
            gzip: true,
        });
    }

    async getDocDetail(id) {
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: `${FileHubAPI.url}/detail/doc/${id}`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }

    async queryDocs(ids) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: `${FileHubAPI.url}/query/doc`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            body: ids,
            json: true,
            gzip: true,
        });
    }

    async getDocs(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${FileHubAPI.url}/doc`,
            qs: query,
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            gzip: true,
        });
    }

    async deleteDoc(id) {
        await this.getAccessToken();
        return await rp({
            method: 'DELETE',
            uri: `${FileHubAPI.url}/detail/doc/${id}`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }

    async deleteDocs(ids) {
        await this.getAccessToken();
        return await rp({
            method: 'DELETE',
            uri: `${FileHubAPI.url}/batch/doc`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            body: ids,
            json: true,
            gzip: true,
        });
    }

    async uploadImageProxy(req, res) {
        await this.getAccessToken();
        req.pipe(request({
            method: 'POST',
            uri: `${FileHubAPI.url}/upload/image`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            }
        })).pipe(res);
    }

    async downloadImageProxy(id, res) {
        await this.getAccessToken();
        request({
            method: 'GET',
            uri: `${FileHubAPI.url}/download/image/${id}`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            }
        }).pipe(res);
    }

    async getImageDetail(id) {
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: `${FileHubAPI.url}/detail/image/${id}`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }

    async queryImages(ids) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: `${FileHubAPI.url}/query/image`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            body: ids,
            json: true,
            gzip: true
        });
    }

    async getImages(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${FileHubAPI.url}/image`,
            qs: query,
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }

    async deleteImage(id) {
        await this.getAccessToken();
        return await rp({
            method: 'DELETE',
            uri: `${FileHubAPI.url}/detail/image/${id}`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }

    async deleteImages(ids) {
        await this.getAccessToken();
        return await rp({
            method: 'DELETE',
            uri: `${FileHubAPI.url}/batch/image`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            body: ids,
            json: true,
            gzip: true,
        });
    }

    async uploadAttachProxy(req, res) {
        await this.getAccessToken();
        req.pipe(request({
            method: 'POST',
            uri: `${FileHubAPI.url}/upload/attach`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            },
        })).pipe(res);
    }

    async downloadAttachProxy(id, res) {
        await this.getAccessToken();
        request({
            method: 'GET',
            uri: `${FileHubAPI.url}/download/attach/${id}`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            },
        }).pipe(res);
    }

    async getAttachDetail(id) {
        await this.getAccessToken();
        return await rp({
            method: 'GET',
            uri: `${FileHubAPI.url}/detail/attach/${id}`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }

    async queryAttaches(ids) {
        await this.getAccessToken();
        return await rp({
            method: 'POST',
            uri: `${FileHubAPI.url}/query/attach`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            body: ids,
            json: true,
            gzip: true
        });
    }

    async getAttaches(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await rp({
            method: 'GET',
            uri: `${FileHubAPI.url}/attach`,
            qs: query,
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }

    async deleteAttach(id) {
        await this.getAccessToken();
        return await rp({
            method: 'DELETE',
            uri: `${FileHubAPI.url}/detail/attach/${id}`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            json: true,
            gzip: true,
        });
    }

    async deleteAttaches(ids) {
        await this.getAccessToken();
        return await rp({
            method: 'DELETE',
            uri: `${FileHubAPI.url}/batch/attach`,
            qs: {
                access_token: this.accessToken
            },
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            body: ids,
            json: true,
            gzip: true,
        });
    }
}