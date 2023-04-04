import YiTuV18 from './yitu-v18';
import Aliyun from './aliyun';
import Xinzhi from './xinzhi';

export default class CloudProxyAPI {
    static initialize(url, token = '') {
        if (typeof (url) !== 'string') {
            throw new Error('invalid url');
        }

        if (url.lastIndexOf('/') === url.length - 1) {
            CloudProxyAPI.url = url.substring(0, url.lastIndexOf('/'));
        } else {
            CloudProxyAPI.url = url;
        }

        CloudProxyAPI.headerToken = token;
        CloudProxyAPI.yituV18 = new YiTuV18(url, token);
        CloudProxyAPI.aliyun = new Aliyun(url, token);
        CloudProxyAPI.xinzhi = new Xinzhi(url, token);
    }
}