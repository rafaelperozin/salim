const connection = require('../../database/connection');

module.exports = async function (req, res) {
    
    const {
        name,
        mobile,
        city,
        country
    } = req.body;

    await connection('user')
        .where('id', id)
        .update({
            id,
            name,
            mobile,
            city,
            country,
        });
    
    return res.status(204).send();

}