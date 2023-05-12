import got from 'got';

export default class IdentityAPI {
    constructor() {
        this.accessToken = '';
    }

    static initialize(url, token) {
        if (typeof (url) !== 'string') {
            throw new Error('invalid url');
        }

        if (url.lastIndexOf('/') === url.length - 1) {
            IdentityAPI.url = url.substring(0, url.lastIndexOf('/'));
        } else {
            IdentityAPI.url = url;
        }

        IdentityAPI.headerToken = token;
    }

    async getAccessToken() {
        if (IdentityAPI.headerToken) {
            return;
        } else {
            let res = await got(`${IdentityAPI.url}/accesstoken`, {
                method: 'POST',
                resolveBodyOnly: true,
                responseType: 'json'
            });
            this.accessToken = res.data;
        }
    }

    async getUsers() {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/service/user`, {
            method: 'GET',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async getUserWithIds(idArray) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/service/user/ids`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: idArray,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async getUserWithId(id) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/service/user/id`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                id: id
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async getUserWithMobile(mobile) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/service/user/mobile`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                mobile: mobile
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async createUser(user) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/service/user`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: user,
            resolveBodyOnly: true,
            responseType: 'json'
        })
    }

    async updateUser(id, user) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/service/user/${id}`, {
            method: 'PUT',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: user,
            resolveBodyOnly: true,
            responseType: 'json'
        })
    }

    async passwordReset(uid, pwd) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/service/user/password`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                id: uid,
                pwd: pwd
            },
            resolveBodyOnly: true,
            responseType: 'json'
        })
    }

    async encrypt(txt) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/security/encrypt`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                content: txt,
            },
            resolveBodyOnly: true,
            responseType: 'json'
        })
    }

    async descrypt(txt) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/security/decrypt`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                content: txt
            },
            resolveBodyOnly: true,
            responseType: 'json'
        })
    }

    async signTxt(txt) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/security/sign/txt`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                content: txt
            },
            resolveBodyOnly: true,
            responseType: 'json'
        })
    }

    async verifyTxt(sign, txt) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/security/verify/txt`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                sign: sign,
                content: txt
            },
            resolveBodyOnly: true,
            responseType: 'json'
        })
    }

    async login(uname, pwd) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/auth/login`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                user_name: uname,
                user_pwd: pwd
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async login2(idNumber) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/auth/login/idnumber`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                id_number: idNumber
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async login3(fingerPrint) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/auth/login/fingerprint`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                finger_print: fingerPrint
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async login4(id) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/auth/login/id`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                id: id
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async logout(token) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/auth/logout`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                token: token
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async getByIdNumber(idNumber) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/service/user/idnumber`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                id_number: idNumber
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async createFingerPrint(fingerPrint) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/fingerprint`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: fingerPrint,
            resolveBodyOnly: true,
            responseType: 'json'
        })
    }

    async getFingerPrints(userId) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/fingerprint`, {
            method: 'GET',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken,
                user_id: userId
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    //check
    async checkAccount(account) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/service/user/check/account`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                account: account
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async checkMobile(mobile) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/service/user/check/mobile`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                mobile: mobile
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async checkEmail(email) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/service/user/check/email`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                email: email
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async checkIDNumber(idNumber) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/service/user/check/idnumber`, {
            method: 'POST',
            headers: {
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                id_number: idNumber
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    //self
    async self(token) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/self`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async updateSelf(token, self) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/self`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: self,
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }

    async passwordSelf(token, oldPwd, newPwd) {
        await this.getAccessToken();
        return await got(`${IdentityAPI.url}/self/password`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                fix_token: IdentityAPI.headerToken
            },
            searchParams: {
                access_token: this.accessToken
            },
            json: {
                old_pwd: oldPwd,
                new_pwd: newPwd
            },
            resolveBodyOnly: true,
            responseType: 'json'
        });
    }
}