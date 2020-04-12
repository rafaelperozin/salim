const connection = require('../../database/connection');

module.exports = async function (req, res) {
    const { id } = req.params;
    
    const user_id = req.headers.authorization;
    if (user_id) {
        const user = await connection('user')
            .where('id', user_id)
            .first();
        if (!user) {
            return res.status(401).json({
                error: 'Operation not permitted.'
            });
        }
    } else {
        return res.status(401).json({
            error: 'Operation not permitted.'
        });
    }

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

    const budget = await connection('budget').where('id', id);
    
    return res.json(budget);
}