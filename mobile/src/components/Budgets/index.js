import React, { Component } from 'react';
import { View, Text } from 'react-native';

import api from '../../services/api';
import moneyFormat from '../../utils/moneyFormat';

import styles from './styles';
import { ThemeProgressBar } from '../../styles/theme';
import { Globals } from '../../styles/globals';

class Budgets extends Component {

    state = {
        budget: '',
        totalUsed: '',
        balance: '',
        budgets: []
    }

    componentDidMount = async () => {
        await this.getBudgets();
        this.setBalance();
    }

    getBudgets = async () => {   
        const result = await api.get('budget/?month=4', {
            headers: {
                'Authorization': '42ca2c2c'
            }
        });
        this.setState({ budgets: result.data });
    }

    calculateAmount = (budget, totalUsed) => {
        return (totalUsed / budget) * 100;
    }

    getAmount = (budget, totalUsed) => {

        let usedAmount = this.calculateAmount(budget, totalUsed);

        const goodColor = Globals.color.midGreen;
        const takeCareColor = Globals.color.midYellow;
        const BadColor = Globals.color.midRed;

        let statusColor = goodColor;
        
        if (usedAmount > 80)
            statusColor = takeCareColor;
        if (usedAmount > 100) {
            statusColor = BadColor;
            usedAmount = 100; }
        if (usedAmount < 0)
            usedAmount = 0;
        
        usedAmount = `${usedAmount}%`;

        return {
            color: statusColor,
            value: usedAmount
        };
    }

    // setBalance = () => {
    //     const budget = this.state.budgets.reduce((a, b) => a.budget + b.budget);
    //     const total = this.state.budgets.reduce((a, b) => a.total + b.total);
    //     const balance = this.state.budgets.reduce((a, b) => (a.budget - a.total) + (b.budget - b.total));
    //     this.setState({ 
    //         budget: budget,
    //         totalUsed: total,
    //         balance: balance
    //      });
    // }

    render() {

        const { budgets } = this.state;
        let budgetTotal, budgetBudget, budgetBalance, amount, usedAmount, statusColor;


        return budgets.map(budget => {

            budgetTotal = moneyFormat(budget.total);
            budgetBudget = moneyFormat(budget.budget);
            budgetBalance = moneyFormat(budget.budget - budget.total);

            amount = this.getAmount(budget.budget, budget.total)
            usedAmount = amount.value;
            statusColor = amount.color;            

            return (
                <View style={styles.budget} key={budget.id}>
                    <Text style={styles.budgetTitle}>{budget.title}</Text>
                    <View style={styles.budgetValues}>
                        <Text style={styles.budgetSpent}>{budgetTotal} / {budgetBudget}</Text>
                        <Text style={[styles.budgetAvailable, { color: statusColor }]}>{budgetBalance}</Text>
                    </View>
                    <View style={[ThemeProgressBar.background, styles.budgetProgressBarBg]}>
                        <View style={[ThemeProgressBar.bar, { width: usedAmount, backgroundColor: statusColor }]}></View>
                    </View>
                </View>
            );

        });
    }
}

export default Budgets;