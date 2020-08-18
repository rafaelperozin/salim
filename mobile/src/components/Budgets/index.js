import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { ThemeProgressBar } from '../../styles/theme';
import { Globals } from '../../styles/globals';

export default function Budgets() {
    return (
        <View style={styles.contentBudgets}>

            <View style={styles.budget}>
                <Text style={styles.budgetTitle}>Home</Text>
                <View style={styles.budgetValues}>
                    <Text style={styles.budgetSpent}>£550.10 / £1,055.23</Text>
                    <Text style={[styles.budgetAvailable, { color: Globals.color.midGreen}]}>£504.00</Text>
                </View>
                <View style={[ThemeProgressBar.background, styles.budgetProgressBarBg]}>
                    <View style={[ThemeProgressBar.bar, { width: "33%", backgroundColor: Globals.color.midGreen }]}></View>
                </View>
            </View>

            <View style={styles.budget}>
                <Text style={styles.budgetTitle}>Home</Text>
                <View style={styles.budgetValues}>
                    <Text style={styles.budgetSpent}>£550.10 / £1,055.23</Text>
                    <Text style={[styles.budgetAvailable, { color: Globals.color.midRed}]}>£504.00</Text>
                </View>
                <View style={[ThemeProgressBar.background, styles.budgetProgressBarBg]}>
                    <View style={[ThemeProgressBar.bar, { width: "100%", backgroundColor: Globals.color.midRed }]}></View>
                </View>
            </View>

        </View>
    );
}