const checkAuthMaster = require('../../validations/checkAuthMaster');
const connection = require('../../database/connection');

module.exports = async function (req, res) {

    const masterAuth = req.headers.masterauth;
    checkAuthMaster(masterAuth, res);

    const user = await connection('user').select('*');
    
    return res.json(user);

}