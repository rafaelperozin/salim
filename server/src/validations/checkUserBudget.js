const connection = require('../database/connection');

module.exports = async function checkUserBudget(user_id, budget_id, res) {
    const userBudget = await connection('budget')
        .where('id', budget_id)
        .andWhere('user_id', user_id)
        .first();
    if (!userBudget) {
        return res.status(401).json({
            error: `Invalid budget for this user.`
        });
    }
}