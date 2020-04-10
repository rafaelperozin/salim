// const upperCaseAllFirstLetter = require('../utils/upperCaseAllFirstLetter');
const checkAuthorization = require('../validations/checkAuthorization');
const checkUserBudget = require('../validations/checkUserBudget');
// const checkId = require('../validations/checkId');
const connection = require('../database/connection');

module.exports = {
    // async index(req, res) {
    //     const user_id = req.headers.authorization;
    //     checkAuthorization(user_id, res);

    //     const budgets = await connection('budget')
    //         .where('user_id', user_id)
    //         .select('*');
        
    //     return res.json(budgets);
    // },
    async create(req, res) {
        let {
            type,
            title,
            value,
            date,
            status,
            budget_id
        } = req.body;

        const user_id = req.headers.authorization;

        checkAuthorization(user_id, res);

        checkUserBudget(user_id, budget_id, res);

        type = type.toLowerCase();
        title = title.toLowerCase();
        status = status.toLowerCase();
        const dateValue = date.split('-');
        date = `${dateValue[2]}-${dateValue[1]}-${dateValue[0]}`;

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
    },
    // async get(req, res) {
    //     const { id } = req.params;
        
    //     const user_id = req.headers.authorization;
    //     checkAuthorization(user_id, res);

    //     checkId('budget', res, id, user_id);

    //     const budget = await connection('budget').where('id', id);
        
    //     return res.json(budget);
    // },
    // async update(req, res) {
    //     const { id } = req.params;
    //     let {
    //         title,
    //         budget,
    //         status
    //     } = req.body;

    //     const user_id = req.headers.authorization;
    //     checkAuthorization(user_id, res);

    //     checkId('budget', res, id, user_id);

    //     title = title.toLowerCase();

    //     // User already in the app for this user?
    //     const budgetTitle = await connection('budget')
    //         .where('title', title)
    //         .andWhereNot('id', id)
    //         .andWhere('user_id', user_id)
    //         .first();
    //     if (budgetTitle) {
    //         return res.status(412).json({
    //             error: `Already exist a budget with title "${upperCaseAllFirstLetter(title)}" for this user`
    //         });
    //     }

    //     await connection('budget')
    //         .where('id', id)
    //         .update({
    //             id,
    //             title,
    //             budget,
    //             status
    //         });
        
    //     return res.status(204).send();
    // },
    // async delete(req, res) {
    //     const { id } = req.params;
        
    //     const user_id = req.headers.authorization;
    //     checkAuthorization(user_id, res);

    //     checkId('budget', res, id);

    //     await connection('budget').where('id', id).delete();

    //     return res.status(204).send();
    // }
};