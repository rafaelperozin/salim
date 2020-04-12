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
                // sort by id
                function compare(a, b) {
                    const idA = a.id;
                    const idB = b.id;
                    
                    let comparison = 0;
                    if (idA > idB) {
                        comparison = 1;
                    } else if (idA < idB) {
                        comparison = -1;
                    }
                    return comparison;
                }
                // after sort by id, map to structure the data
                const newData = data.sort(compare)
                    .map(item => {
                        return budgetItem = {
                            "id": item.id,
                            "title": item.title,
                            "budget": item.budget,
                            "saving": item.saving,
                            "user_id": item.user_id,
                            "transactions": [{
                                "id": item.tid,
                                "type": item.type,
                                "title": item.ttitle,
                                "value": item.value,
                                "date": item.date,
                                "status": item.status,
                            }]
                        }
                    });
                // group by ID and User_ID
                function groupBy(objectArray, prop1, prop2) {
                    return objectArray.reduce(function (acc, cur, index) {
                        // set key as last position(index) in the array
                        const key = acc.length - 1;
                        // Just for the first item
                        if (acc.length === 0) {
                            // Show empty transaction array if no transaction
                            const transArray = (cur['transactions'][0]['id'] != null) ? [{
                                "id": cur['transactions'][0]['id'],
                                "type": cur['transactions'][0]['type'],
                                "title": cur['transactions'][0]['title'],
                                "value": cur['transactions'][0]['value'],
                                "date": cur['transactions'][0]['date'],
                                "status": cur['transactions'][0]['status'],
                            }] : [];
                            // structure the data
                            acc[0] = {
                                "id": cur['id'],
                                "title": cur['title'],
                                "budget": cur['budget'],
                                "saving": cur['saving'],
                                "user_id": cur['user_id'],
                                "transactions": transArray
                            };
                        } else {
                            // check id and user id
                            if (acc[key][prop1] === cur[prop1] && acc[key][prop2] === cur[prop2]) {
                                // prevent duplicated data and only add the transaction
                                // to the last budget
                                acc[key]['transactions'].push(cur['transactions'][0]);
                            }
                            else {
                                // Show empty transaction array if no transaction
                                if (cur['transactions'][0]['id'] === null) cur['transactions'] = [];
                                // create a new position in the array when id and user_id don't match
                                acc.push(cur);
                            }
                        }
                        return acc;
                    }, []);
                }
                return groupBy(newData, 'id', 'user_id');
            });
        
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