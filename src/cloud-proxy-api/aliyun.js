import got from 'got';

export default class Aliyun {
    constructor(url, token) {
        this.url = url;
        this.token = token;
    }

    async sendSms(sms) {
        return await got(`${this.url}/aliyun/sms`, {
            method: 'POST',
            headers: {
                fix_token: this.token
            },
            json: sms,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    //audio should be Buffer
    async voiceCommand(audio) {
        return await got(`${this.url}/aliyun/voice/command`, {
            method: 'POST',
            headers: {
                fix_token: this.token
            },
            body: audio,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }
}