const connection = require('../database/connection');

module.exports = async function checkId(db_table, res, id, user_id) {
    if (id) {
        let validId;
        if (user_id) {
            validId = await connection(db_table)
                .where('id', id)
                .andWhere('user_id', user_id)
                .first()
        } else {
            validId = await connection(db_table)
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
}