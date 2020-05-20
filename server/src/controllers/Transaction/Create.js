const checkAuthorization = require('../../validations/checkAuthorization');
const connection = require('../../database/connection');

module.exports = async function (req, res) {

    let {
        type,
        title,
        value,
        date,
        status,
        budget_id
    } = req.body;

    const user_id = req.headers.authorization;

    const auth = await checkAuthorization(user_id, res);    
    if (auth) return auth;

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

    const dateReg = /[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/;
    if (!date.match(dateReg)) {
        return res.status(400).json({
            error: 'Invalid date format.'
        });
    }

    type = type.toLowerCase();
    title = title.toLowerCase();
    status = status.toLowerCase();

    const [id] = await connection('transaction').insert({
        type,
        title,
        value,
        date,
        status,
        budget_id,
        user_id
    });

    return res.json({ id });

}