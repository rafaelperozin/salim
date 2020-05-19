const checkAuthorization = require('../../validations/checkAuthorization');
const connection = require('../../database/connection');

module.exports = async function (req, res) {

    const { id } = req.params;
    let {
        type,
        title,
        value,
        date,
        status,
        budget_id,
    } = req.body;

    const user_id = req.headers.authorization;
    checkAuthorization(user_id, res);

    if (id) {
        let validId;
        if (user_id) {
            validId = await connection('transaction')
                .where('id', id)
                .andWhere('user_id', user_id)
                .first()
        } else {
            validId = await connection('transaction')
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

    if (budget_id) {
        let validId;
        if (user_id) {
            validId = await connection('budget')
                .where('id', budget_id)
                .andWhere('user_id', user_id)
                .first()
        } else {
            validId = await connection('budget')
                .where('id', budget_id)
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

    type = type.toLowerCase();
    title = title.toLowerCase();
    status = status.toLowerCase();

    await connection('transaction')
        .where('id', id)
        .update({
            id,
            type,
            title,
            value,
            date,
            status,
            budget_id,
            user_id
        });
    
    return res.status(204).send();

}