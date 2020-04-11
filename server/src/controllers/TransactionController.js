const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
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
    },
    async delete(req, res) {
        const { id } = req.params;
        
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

        await connection('transaction').where('id', id).delete();

        return res.status(204).send();
    }
};