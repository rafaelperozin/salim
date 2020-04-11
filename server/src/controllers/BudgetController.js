const _ = require('underscore');

const upperCaseAllFirstLetter = require('../utils/upperCaseAllFirstLetter');
const checkId = require('../validations/checkId');
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

        const budgets = await connection('budget')
            .select(
                'budget.id as id',
                'budget.title as title',
                'budget.budget as budget',
                'budget.saving as saving',
                'budget.user_id as user_id',
                'transaction.id as tid',
                'transaction.type as type',
                'transaction.title as ttitle',
                'transaction.value as value',
                'transaction.date as date',
                'transaction.status as status'
            )
            .leftJoin('transaction', function () {
                this.on('transaction.budget_id', '=', 'budget.id')
                .andOn('transaction.user_id', '=', 'budget.user_id')
            })
            .where('budget.user_id', user_id)
            .then(function (data) {                
                return _.chain(data)
                    .groupBy(function (budget) {
                        return budget.id;
                    })
                    .map(function (budgets) {
                        const budget = _.chain(budgets)
                            .first()
                            .pick('id', 'title', 'budget', 'saving', 'user_id', 'transactions');
                        const budget_transactions = _.map(budgets, function (b) {
                            return {
                                'id': b.tid,
                                'type': b.type,
                                'title': b.ttitle,
                                'value': b.value,
                                'date': b.date,
                                'status': b.status
                            };
                        });
                        budget.transactions = budget_transactions;
                        return budget;
                    })
                    .value();
            });
        console.log(budgets);
        
        return res.json(budgets);
    },
    async create(req, res) {
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

        const budget = await connection('budget').where('id', id);
        
        return res.json(budget);
    },
    async update(req, res) {
        const { id } = req.params;
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

        await connection('budget').where('id', id).delete();

        return res.status(204).send();
    }
};