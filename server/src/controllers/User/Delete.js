const checkAuthMaster = require('../../validations/checkAuthMaster');
const checkId = require('../../validations/checkId')
const connection = require('../../database/connection');

module.exports = async function (req, res) {

    const { id } = req.params;
    
    const masterAuth = req.headers.masterauth;
    checkAuthMaster(masterAuth, res);

    checkId('user', res, id);

    await connection('user').where('id', id).delete();

    return res.status(204).send();

}