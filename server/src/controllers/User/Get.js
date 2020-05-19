const connection = require('../../database/connection');

module.exports = async function (req, res) {

    const { id } = req.params;

    const user = await connection('user')
        .where('id', id);
    
    return res.json(user);

}