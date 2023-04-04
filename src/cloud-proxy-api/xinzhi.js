import got from 'got';

export default class Xinzhi {
    constructor(url, token) {
        this.url = url;
        this.token = token;
    }

    async weather() {
        return await got(`${this.url}/xinzhi/weather`, {
            method: 'GET',
            headers: {
                fix_token: this.token
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }
}