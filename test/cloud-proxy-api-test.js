const CloudProxyAPI = require('../dist/cloud-proxy-api').default;


CloudProxyAPI.initialize('http://localhost:8004/rest', 'vGbKmqzaVK8KFILN-lBvV');

const testFace = async () => {
    let f = await CloudProxyAPI.yituV18.searchFace({
        face_image: '',
        threshold: 80,
        repo_ids: []
    });
    console.log(f);
};

const testWeather = async() =>{
    let w = await CloudProxyAPI.xinzhi.weather();
    console.log(w);
}

try {
    testWeather();
} catch (err) {
    console.log(err);
}