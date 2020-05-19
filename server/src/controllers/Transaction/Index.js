const checkAuthorization = require('../../validations/checkAuthorization');
const connection = require('../../database/connection');

module.exports = async function (req, res) {

    const user_id = req.headers.authorization;
    checkAuthorization(user_id, res);

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

}