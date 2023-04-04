import got from 'got';

export default class YiTuV18 {
    constructor(url, token) {
        this.url = url;
        this.token = token;
    }

    async importFace(face) {
        return await got(`${this.url}/yitu/face/v18/import`, {
            method: 'POST',
            headers: {
                fix_token: this.token
            },
            json: face,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async searchFace(face) {
        return await got(`${this.url}/yitu/face/v18/search`, {
            method: 'POST',
            headers: {
                fix_token: this.token
            },
            json: face,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }
}