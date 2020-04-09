const upperCaseAllFirstLetter = require('../utils/upperCaseAllFirstLetter');
const checkAuthorization = require('../utils/checkAuthorization');
const checkId = require('../utils/checkId');
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const user_id = req.headers.authorization;
        checkAuthorization(user_id, res);

        const budgets = await connection('budget')
            .where('user_id', user_id)
            .select('*');
        
        return res.json(budgets);
    },
    async create(req, res) {
        let {
            title,
            budget,
            status,
            saving
        } = req.body;

        const user_id = req.headers.authorization;

        checkAuthorization(user_id, res);

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
            status,
            saving,
            user_id
        });

        return res.json({ id });
    },
    async get(req, res) {
        const { id } = req.params;
        
        const user_id = req.headers.authorization;
        checkAuthorization(user_id, res);

        checkId('budget', res, id, user_id);

        const budget = await connection('budget').where('id', id);
        
        return res.json(budget);
    },
    async update(req, res) {
        const { id } = req.params;

        const user_id = req.headers.authorization;
        checkAuthorization(user_id, res);

        checkId('budget', res, id, user_id);
        
        const {
            title,
            budget,
            status
        } = req.body;

        await connection('budget')
            .where('id', id)
            .update({
                id,
                title,
                budget,
                status
            });
        
        return res.status(204).send();
    },
    async status(req, res) {
        const { id, status } = req.params;

        const user_id = req.headers.authorization;
        checkAuthorization(user_id, res);

        checkId('budget', res, id, user_id);

        if (status !== 'active' && status !== 'inactive' ) {
            return res.status(401).json({
                error: 'Invalid status value.'
            });
        }

        await connection('budget')
            .where('id', id)
            .update({ status });
        
        return res.status(204).send();
    }
};