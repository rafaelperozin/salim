const checkAuthorization = require('../../validations/checkAuthorization');
const upperCaseAllFirstLetter = require('../../utils/upperCaseAllFirstLetter');
const connection = require('../../database/connection');

module.exports = async function (req, res) {
    const { id } = req.params;
    let {
        title,
        budget,
        saving
    } = req.body;

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

    title = title.toLowerCase();

    // User already in the app for this user?
    const budgetTitle = await connection('budget')
        .where('title', title)
        .andWhereNot('id', id)
        .andWhere('user_id', user_id)
        .first();
    if (budgetTitle) {
        return res.status(412).json({
            error: `Already exist a budget with title "${upperCaseAllFirstLetter(title)}" for this user`
        });
    }

    await connection('budget')
        .where('id', id)
        .update({
            id,
            title,
            budget,
            saving
        });
    
    return res.status(204).send();
}