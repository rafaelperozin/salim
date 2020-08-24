import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { ThemeStatus } from '../../styles/theme';

import CheckIcon from '@material-ui/icons/Check';
import WarningIcon from '@material-ui/icons/Warning';

export default function TransactionsList() {
    return (
        <View style={styles.transactions}>

            <View style={[styles.transactionContainer, styles.transactionsAmount]}>
                <Text style={styles.transactionsAmountTitle}>Previews Period Balance</Text>
                <Text style={[styles.transactionsAmountValue, ThemeStatus.positive]}>+£504.90</Text>
            </View>

            <View style={styles.transactionsList}>
                <View style={styles.transactionContainer} transaction-type="Expense">
                    <View style={styles.transactionBackground}>
                        <View style={styles.transactionStatus}>
                            <CheckIcon style={{fontSize: 18}} />
                        </View>
                        <View style={[styles.transactionBudget, ThemeStatus.paid]}>
                            <Text style={styles.transactionBudgetName}>Groceries</Text>
                        </View>
                        <Text style={[styles.transactionText, styles.transactionDescription, ThemeStatus.paid]}>Previews Period Balance</Text>
                        <Text style={[styles.transactionText, styles.transactionValue, ThemeStatus.negative, ThemeStatus.paid]}>-£504.90</Text>
                    </View>
                </View>
                <View style={styles.transactionContainer} transaction-type="Income">
                    <View style={[styles.transactionBackground, ThemeStatus.overdueBackground]}>
                        <View style={[styles.transactionStatus, ThemeStatus.overdue]}>
                            <WarningIcon style={{fontSize: 18}} />
                        </View>
                        <View style={[styles.transactionBudget, styles.negativeTransBudget]}>
                            <Text style={[styles.transactionBudgetName, styles.negativeTransBudgetName]}>Groceries</Text>
                        </View>
                        <Text style={[styles.transactionText, styles.transactionDescription]}>Previews Period Balance</Text>
                        <Text style={[styles.transactionText, styles.transactionValue, ThemeStatus.overdue]}>+£504.90</Text>
                    </View>
                </View>
                <View style={styles.transactionContainer} transaction-type="Income">
                    <View style={styles.transactionBackground}>
                        <Text style={styles.transactionText}>28</Text>
                        <View style={[styles.transactionBudget, styles.negativeTransBudget]}>
                            <Text style={[styles.transactionBudgetName, styles.negativeTransBudgetName]}>Groceries</Text>
                        </View>
                        <Text style={[styles.transactionText, styles.transactionDescription]}>Previews Period Balance</Text>
                        <Text style={[styles.transactionText, styles.transactionValue, ThemeStatus.positive]}>-£504.90</Text>
                    </View>
                </View>
                <View style={styles.transactionContainer} transaction-type="Expense">
                    <View style={styles.transactionBackground}>
                        <Text style={styles.transactionText}>25</Text>
                        <View style={[styles.transactionBudget, styles.negativeTransBudget]}>
                            <Text style={[styles.transactionBudgetName, styles.negativeTransBudgetName]}>Groceries</Text>
                        </View>
                        <Text style={[styles.transactionText, styles.transactionDescription]}>Previews Period Balance</Text>
                        <Text style={[styles.transactionText, styles.transactionValue, ThemeStatus.negative]}>-£504.90</Text>
                    </View>
                </View>
            </View>

            <View style={[styles.transactionContainer, styles.transactionsAmount]}>
                <Text style={styles.transactionsAmountTitle}>Current Period Balance</Text>
                <Text style={[styles.transactionsAmountValue, ThemeStatus.negative]}>-£504.90</Text>
            </View>

        </View>
    );
}