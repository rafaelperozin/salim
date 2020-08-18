import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Budgets() {
    return (
        <View style={styles.hero}>
            <Text style={styles.heroTitle}>Balance</Text>
            <Text style={styles.heroValue}>£4,500.00</Text>
            <View style={[styles.progressBarBg, styles.heroProgessBarBg]}>
                <View style={[styles.progressBar, { width: "50%" }]}></View>
            </View>
            <Text style={styles.heroText}>£500.00 / £5,000.00</Text>
        </View>
    );
}