// const upperCaseAllFirstLetter = require('../utils/upperCaseAllFirstLetter');
const checkAuthorization = require('../validations/checkAuthorization');
const checkId = require('../validations/checkId');
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const user_id = req.headers.authorization;
        checkAuthorization(user_id, res);

        const transactions = await connection('transaction')
            .where('user_id', user_id)
            .select('*');
        
        return res.json(transactions);
    },
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

        checkId('budget', res, budget_id, user_id);

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
    async get(req, res) {
        const { id } = req.params;
        
        const user_id = req.headers.authorization;
        checkAuthorization(user_id, res);

        checkId('transaction', res, id, user_id);

        const transactions = await connection('transaction').where('id', id);
        
        return res.json(transactions);
    },
    async update(req, res) {
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

        checkId('transaction', res, id, user_id);

        checkId('budget', res, budget_id, user_id);

        type = type.toLowerCase();
        title = title.toLowerCase();
        status = status.toLowerCase();
        const dateValue = date.split('-');
        date = `${dateValue[2]}-${dateValue[1]}-${dateValue[0]}`;

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
    },
    async delete(req, res) {
        const { id } = req.params;
        
        const user_id = req.headers.authorization;
        checkAuthorization(user_id, res);

        checkId('transaction', res, id, user_id);

        await connection('transaction').where('id', id).delete();

        return res.status(204).send();
    }
};