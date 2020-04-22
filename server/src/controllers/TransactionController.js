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

        const d = new Date(), m = d.getMonth() + 1, y = d.getFullYear();
        const {
            month = m,
            year = y
        } = req.query;
        
        if (Number(year) > y
            || (Number(year) == y && Number(month) > m)
            || Number(month) <= 0
            || Number(month) > 12
            || Number(year) < 2020)
        {
            return res.status(400).json({
                error: 'Invalid date.'
            });
        }

        let firstDay = year + '-' + (Number(month) < 10 ? + '0' + month.toString() : month) + '-01';
        let lastDay = year + '-' + (Number(month) < 10 ? + '0' + month.toString() : month) + '-31';
        let firstDayLast = year + '-' + (Number(month) < 10 ? + '0' + (month-1).toString() : (month-1)) + '-01';
        let lastDayLast = year + '-' + (Number(month) < 10 ? + '0' + (month-1).toString() : (month-1)) + '-31';

        const transactions = await connection('transaction')
            .where('user_id', user_id)
            .whereBetween('date', [firstDay, lastDay])
            .select('*');
        
        const sum_cur_incomes_to_pay = await connection('transaction')
            .sum('value')
            .where('user_id', user_id)
            .where('type', 'income')
            .where('status', 'to pay')
            .whereBetween('date', [firstDay, lastDay]);
        const sum_cur_incomes_paid = await connection('transaction')
            .sum('value')
            .where('user_id', user_id)
            .where('type', 'income')
            .where('status', 'paid')
            .whereBetween('date', [firstDay, lastDay]);
        const sum_cur_expenses_to_pay = await connection('transaction')
            .sum('value')
            .where('user_id', user_id)
            .where('type', 'expense')
            .where('status', 'to pay')
            .whereBetween('date', [firstDay, lastDay]);
        const sum_cur_expenses_paid = await connection('transaction')
            .sum('value')
            .where('user_id', user_id)
            .where('type', 'expense')
            .where('status', 'paid')
            .whereBetween('date', [firstDay, lastDay]);
        const sum_last_incomes = await connection('transaction')
            .sum('value')
            .where('user_id', user_id)
            .where('type', 'income')
            .whereBetween('date', [firstDayLast, lastDayLast]);
        const sum_last_expenses = await connection('transaction')
            .sum('value')
            .where('user_id', user_id)
            .where('type', 'expense')
            .whereBetween('date', [firstDayLast, lastDayLast]);
        
        const cur_incomes_to_pay = sum_cur_incomes_to_pay[0]['sum(`value`)'] == null 
            ? 0 : sum_cur_incomes_to_pay[0]['sum(`value`)'];
        const cur_incomes_paid = sum_cur_incomes_paid[0]['sum(`value`)'] == null 
            ? 0 : sum_cur_incomes_paid[0]['sum(`value`)'];
        const cur_expenses_to_pay = sum_cur_expenses_to_pay[0]['sum(`value`)'] == null 
            ? 0 : sum_cur_expenses_to_pay[0]['sum(`value`)'];
        const cur_expenses_paid = sum_cur_expenses_paid[0]['sum(`value`)'] == null 
            ? 0 : sum_cur_expenses_paid[0]['sum(`value`)'];
        const last_incomes = sum_last_incomes[0]['sum(`value`)'] == null 
            ? 0 : sum_last_incomes[0]['sum(`value`)'];
        const last_expenses = sum_last_expenses[0]['sum(`value`)'] == null 
            ? 0 : sum_last_expenses[0]['sum(`value`)'];
        
        res.header('X-Current-Total-Incomes-To-Pay', cur_incomes_to_pay);
        res.header('X-Current-Total-Incomes-Paid', cur_incomes_paid);
        res.header('X-Current-Total-Expenses-To-Pay', cur_expenses_to_pay);
        res.header('X-Current-Total-Expenses-Paid', cur_expenses_paid);
        res.header('X-Last-Total-Incomes-', last_incomes);
        res.header('X-Last-Total-Expenses', last_expenses);
        
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

        const dateReg = /[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/;
        if (!date.match(dateReg)) {
            return res.status(400).json({
                error: 'Invalid date format.'
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