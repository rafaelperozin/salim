const upperCaseAllFirstLetter = require('../../utils/upperCaseAllFirstLetter');
const connection = require('../../database/connection');

module.exports = async function(req, res) {
    let {
        title,
        budget,
        saving
    } = req.body;

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