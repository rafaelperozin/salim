import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Budgets() {
    return (
        <View style={styles.contentBudgets}>
            <View style={styles.budget}>
                <Text style={styles.budgetTitle}>Home</Text>
                <View style={styles.budgetValues}>
                    <Text style={styles.budgetSpent}>£550.10 / £1,055.23</Text>
                    <Text style={[styles.budgetAvailable, { color: "#2AA77C"}]}>£504.00</Text>
                </View>
                <View style={[styles.progressBarBg, styles.budgetProgressBarBg]}>
                    <View style={[styles.progressBar, { width: "33%", backgroundColor: "#2AA77C" }]}></View>
                </View>
            </View>
            <View style={styles.budget}>
                <Text style={styles.budgetTitle}>Home</Text>
                <View style={styles.budgetValues}>
                    <Text style={styles.budgetSpent}>£550.10 / £1,055.23</Text>
                    <Text style={[styles.budgetAvailable, { color: "#DE4C68"}]}>£504.00</Text>
                </View>
                <View style={[styles.progressBarBg, styles.budgetProgressBarBg]}>
                    <View style={[styles.progressBar, { width: "100%", backgroundColor: "#DE4C68" }]}></View>
                </View>
            </View>
            <View style={styles.budget}>
                <Text style={styles.budgetTitle}>Home</Text>
                <View style={styles.budgetValues}>
                    <Text style={styles.budgetSpent}>£550.10 / £1,055.23</Text>
                    <Text style={[styles.budgetAvailable, { color: "#2AA77C"}]}>£504.00</Text>
                </View>
                <View style={[styles.progressBarBg, styles.budgetProgressBarBg]}>
                    <View style={[styles.progressBar, { width: "33%", backgroundColor: "#2AA77C" }]}></View>
                </View>
            </View>
            <View style={styles.budget}>
                <Text style={styles.budgetTitle}>Home</Text>
                <View style={styles.budgetValues}>
                    <Text style={styles.budgetSpent}>£550.10 / £1,055.23</Text>
                    <Text style={[styles.budgetAvailable, { color: "#2AA77C"}]}>£504.00</Text>
                </View>
                <View style={[styles.progressBarBg, styles.budgetProgressBarBg]}>
                    <View style={[styles.progressBar, { width: "33%", backgroundColor: "#2AA77C" }]}></View>
                </View>
            </View>
        </View>
    );
}