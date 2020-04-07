const upperCaseAllFirstLetter = require('../utils/upperCaseAllFirstLetter');
const connection = require('../database/connection');

async function checkAuthorization(user_id) {
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
}

module.exports = {
    async index(req, res) {
        const user_id = req.headers.authorization;
        checkAuthorization(user_id);

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

        checkAuthorization(user_id);

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
        checkAuthorization(user_id);

        const budget = await connection('budget')
            .where('id', id)
            .andWhere('user_id', user_id);
        return res.json(budget);
    },
    // async update(req, res) {
    //     const { id } = req.params;
        
    //     const {
    //         name,
    //         mobile,
    //         city,
    //         country
    //     } = req.body;

    //     await connection('user')
    //         .where('id', id)
    //         .update({
    //             id,
    //             name,
    //             mobile,
    //             city,
    //             country,
    //         });
        
    //     return res.status(204).send();
    // },
    // async delete(req, res) {
    //     const { id } = req.params;
        
    //     // Authorized?
    //     const masterAuth = req.headers.masterauth;

    //     if (masterAuth !== 'salim') {
    //         return res.status(401).json({
    //             error: 'Operation not permitted.'
    //         });
    //     }

    //     // Valid id?
    //     const user = await connection('user')
    //         .where('id', id)
    //         .first();
    
    //     if (!user) {
    //         return res.status(400).json({
    //             error: 'Invalid User.'
    //         });
    //     }

    //     await connection('user').where('id', id).delete();

    //     return res.status(204).send();
    // }
};