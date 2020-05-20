const checkAuthorization = require('../../validations/checkAuthorization');
const upperCaseAllFirstLetter = require('../../utils/upperCaseAllFirstLetter');
const connection = require('../../database/connection');

module.exports = async function(req, res) {
    let {
        title,
        budget,
        saving
    } = req.body;

    const user_id = req.headers.authorization;
    const auth = await checkAuthorization(user_id, res);    
    if (auth) return auth;

    title = title.toLowerCase();

    // User already in the app for this user?
    const budgetTitle = await connection('budget')
        .where('title', title)
        .andWhere('user_id', user_id)
        .first();
    if (budgetTitle) {
        return res.status(412).json({
            error: `Already exist a budget with title "${upperCaseAllFirstLetter(title)}" for this user`
        });
    }

    const [id] = await connection('budget').insert({
        title,
        budget,
        saving,
        user_id
    });

    return res.json({ id });
}