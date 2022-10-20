'use strict';

const got = require('got').default,
    httpProxy = require('http-proxy'),
    proxy = httpProxy.createProxy();

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

        FileHubAPI.host = FileHubAPI.url.replace('/rest', '');
        FileHubAPI.headerToken = token;
    }

    async getAccessToken() {
        if (FileHubAPI.headerToken) {
            return;
        } else {
            let res = await got(`${FileHubAPI.url}/accesstoken`, {
                method: 'POST',
                resolveBodyOnly: true,
                responseType: 'json'
            });
            this.accessToken = res.data;
        }
    }

    async uploadDocProxy(req, res) {
        await this.getAccessToken();
        req.url = `/rest/upload/doc?access_token=${this.accessToken}`;
        proxy.web(req, res, {
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            target: `${FileHubAPI.host}`
        });
    }

    async downloadDocProxy(id, req, res) {
        await this.getAccessToken();
        req.url = `/rest/download/doc/${id}?access_token=${this.accessToken}`;
        proxy.web(req, res, {
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            target: `${FileHubAPI.host}`
        });
    }

    async downloadZipDocsProxy(req, res) {
        await this.getAccessToken();
        req.url = `/rest/download/doc/zip?access_token=${this.accessToken}`;
        proxy.web(req, res, {
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            target: `${FileHubAPI.host}`
        });
    }

    async searchDoc(search) {
        await this.getAccessToken();
        return await got(`${FileHubAPI.url}/search/doc`, {
            method: 'POST',
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: search,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async getDocDetail(id) {
        await this.getAccessToken();
        return await got(`${FileHubAPI.url}/detail/doc/${id}`, {
            method: 'GET',
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async queryDocs(ids) {
        await this.getAccessToken();
        return await got(`${FileHubAPI.url}/query/doc`, {
            method: 'POST',
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: ids,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async getDocs(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${FileHubAPI.url}/doc`, {
            method: 'GET',
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async deleteDoc(id) {
        await this.getAccessToken();
        return await got(`${FileHubAPI.url}/detail/doc/${id}`, {
            method: 'DELETE',
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async deleteDocs(ids) {
        await this.getAccessToken();
        return await got(`${FileHubAPI.url}/batch/doc`, {
            method: 'DELETE',
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: ids,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async uploadImageProxy(req, res) {
        await this.getAccessToken();
        req.url = `/rest/upload/image?access_token=${this.accessToken}`;
        proxy.web(req, res, {
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            target: `${FileHubAPI.host}`
        });
    }

    async downloadImageProxy(id, req, res) {
        await this.getAccessToken();
        req.url = `/rest/download/image/${id}?access_token=${this.accessToken}`;
        proxy.web(req, res, {
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            target: `${FileHubAPI.host}`
        });
    }

    async getImageBase64(id) {
        await this.getAccessToken();
        return await got(`${FileHubAPI.url}/detail/image/base64/${id}`, {
            method: 'GET',
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async getImageDetail(id) {
        await this.getAccessToken();
        return await got(`${FileHubAPI.url}/detail/image/${id}`, {
            method: 'GET',
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async queryImages(ids) {
        await this.getAccessToken();
        return await got(`${FileHubAPI.url}/query/image`, {
            method: 'POST',
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: ids,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async getImages(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${FileHubAPI.url}/image`, {
            method: 'GET',
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async deleteImage(id) {
        await this.getAccessToken();
        return await got(`${FileHubAPI.url}/detail/image/${id}`, {
            method: 'DELETE',
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async deleteImages(ids) {
        await this.getAccessToken();
        return await got(`${FileHubAPI.url}/batch/image`, {
            method: 'DELETE',
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: ids,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async uploadAttachProxy(req, res) {
        await this.getAccessToken();
        req.url = `/rest/upload/attach?access_token=${this.accessToken}`;
        proxy.web(req, res, {
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            target: `${FileHubAPI.host}`
        });
    }

    async downloadAttachProxy(id, req, res) {
        await this.getAccessToken();
        req.url = `/rest/download/attach/${id}?access_token=${this.accessToken}`;
        proxy.web(req, res, {
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            target: `${FileHubAPI.host}`
        });
    }

    async getAttachDetail(id) {
        await this.getAccessToken();
        return await got(`${FileHubAPI.url}/detail/attach/${id}`, {
            method: 'GET',
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async queryAttaches(ids) {
        await this.getAccessToken();
        return await got(`${FileHubAPI.url}/query/attach`, {
            method: 'POST',
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: ids,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async getAttaches(query) {
        await this.getAccessToken();
        query['access_token'] = this.accessToken;
        return await got(`${FileHubAPI.url}/attach`, {
            method: 'GET',
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: query,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async deleteAttach(id) {
        await this.getAccessToken();
        return await got(`${FileHubAPI.url}/detail/attach/${id}`, {
            method: 'DELETE',
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async deleteAttaches(ids) {
        await this.getAccessToken();
        return await got(`${FileHubAPI.url}/batch/attach`, {
            method: 'DELETE',
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: ids,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }
}