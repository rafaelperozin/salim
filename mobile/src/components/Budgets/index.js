import React, { Component } from 'react';
import { View, Text } from 'react-native';


import api from '../../services/api';
import moneyFormat from '../../utils/moneyFormat';
import getAmount from '../../utils/getAmount';

import styles from './styles';
import { ThemeProgressBar } from '../../styles/theme';

class BudgetsList extends Component {

    state = {
        period: this.props.period,
        budgets: []
    }

    componentDidMount = async () => {
        await this.getBudgets();
    }

    componentDidUpdate = (prevProps) => {
        if (this.state.period !== prevProps.period) {
            return this.getBudgets();
        } else {
            return null;
        }
    }
    

    calculateBalance = () => {
        const { budgets } = this.state;
        const budget = budgets.reduce((a, b) => a.budget + b.budget);
        const total = budgets.reduce((a, b) => a.total + b.total);
        const balance = budgets.reduce((a, b) => (a.budget - a.total) + (b.budget - b.total));

        return {
            budget: budget,
            total: total,
            balance: balance
        }
    }

    sendData = () => {
        // prevent reduce empty array
        if (!this.state.budget) return;
        const balance = this.calculateBalance();
        this.props.parentCallback(balance);
    }

    getBudgets = async () => {
        const result = await api.get(`budget/?month=${this.state.period}`, {
            headers: {
                'Authorization': '42ca2c2c'
            }
        });
        this.setState({  
            period: this.state.period,
            budgets: result.data
        });
        this.sendData();
    }

    render() {

        const { budgets } = this.state;
        let budgetTotal, budgetBudget, budgetBalance, amount, usedAmount, statusColor;

        return budgets.map(budget => {

            budgetTotal = moneyFormat(budget.total);
            budgetBudget = moneyFormat(budget.budget);
            budgetBalance = moneyFormat(budget.budget - budget.total);
            amount = getAmount(budget.budget, budget.total)            

            return (
                <View style={styles.budget} key={budget.id}>
                    <Text style={styles.budgetTitle}>{budget.title}</Text>
                    <View style={styles.budgetValues}>
                        <Text style={styles.budgetSpent}>{budgetTotal} / {budgetBudget}</Text>
                        <Text style={[styles.budgetAvailable, { color: amount.color }]}>{budgetBalance}</Text>
                    </View>
                    <View style={[ThemeProgressBar.background, styles.budgetProgressBarBg]}>
                        <View style={[ThemeProgressBar.bar, { width: amount.value, backgroundColor: amount.color }]}></View>
                    </View>
                </View>
            );
        });
    }
}

export default BudgetsList;