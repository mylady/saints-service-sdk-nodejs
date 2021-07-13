'use strict';

const got = require('got').default;

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
            let res = await got(`${FileHubAPI.url}/accesstoken`, {
                method: 'POST',
                resolveBodyOnly: true,
                responseType: 'json'
            });
            this.accessToken = res.data;
        }
    }

    async uploadDocProxy(req) {
        await this.getAccessToken();
        return req.pipe(got(`${FileHubAPI.url}/upload/doc`, {
            method: 'POST',
            isStream: true,
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            throwHttpErrors: false
        }));
    }

    async downloadDocProxy(id) {
        await this.getAccessToken();
        return got(`${FileHubAPI.url}/download/doc/${id}`, {
            method: 'GET',
            isStream: true,
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            throwHttpErrors: false
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

    async uploadImageProxy(req) {
        await this.getAccessToken();
        return req.pipe(got(`${FileHubAPI.url}/upload/image`, {
            method: 'POST',
            isStream: true,
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            throwHttpErrors: false
        }));
    }

    async downloadImageProxy(id) {
        await this.getAccessToken();
        return got(`${FileHubAPI.url}/download/image/${id}`, {
            method: 'GET',
            isStream: true,
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            throwHttpErrors: false
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

    async uploadAttachProxy(req) {
        await this.getAccessToken();
        return req.pipe(got(`${FileHubAPI.url}/upload/attach`, {
            method: 'POST',
            isStream: true,
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            throwHttpErrors: false
        }));
    }

    async downloadAttachProxy(id) {
        await this.getAccessToken();
        return got(`${FileHubAPI.url}/download/attach/${id}`, {
            method: 'GET',
            isStream: true,
            headers: {
                fix_token: FileHubAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            throwHttpErrors: false
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