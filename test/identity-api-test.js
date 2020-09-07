const { IdentityAPI } = require('../dist').default,
    api = new IdentityAPI();


IdentityAPI.initialize('http://192.168.0.21:8001/rest');

const testUser = async () => {
    let users = await api.getUserList();
    console.log(users);
};

try {
    testUser();
} catch (err) {
    console.log(err);
}