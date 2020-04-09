const connection = require('../database/connection');

module.exports = async function checkId(db_table, res, id, user_id) {
    if (id) {
        const validId = await connection(db_table)
            .where('id', id)
            .andWhere('user_id', user_id)
            .first();
        if (!validId) {
            return res.status(401).json({
                error: 'Invalid ID.'
            });
        }
    } else {
        return res.status(401).json({
            error: 'The ID is required'
        });
    }
}