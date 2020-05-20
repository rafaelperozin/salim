const checkAuthorization = require('../../validations/checkAuthorization');
const connection = require('../../database/connection');

module.exports = async function (req, res) {
    const { id } = req.params;
    
    const user_id = req.headers.authorization;
    const auth = await checkAuthorization(user_id, res);    
    if (auth) return auth;

    if (id) {
        let validId;
        if (user_id) {
            validId = await connection('budget')
                .where('id', id)
                .andWhere('user_id', user_id)
                .first()
        } else {
            validId = await connection('budget')
                .where('id', id)
                .first();            
        }
        if (validId == undefined) {
            return res.status(401).json({
                error: 'Invalid ID for this user.'
            });
        }
    } else {
        return res.status(401).json({
            error: `The ${db_table} ID is required.`
        });
    }

    await connection('budget').where('id', id).delete();

    return res.status(204).send();
}