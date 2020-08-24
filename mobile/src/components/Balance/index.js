import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { ThemeProgressBar } from '../../styles/theme';

export default function HeroBalance() {
    return (
        <View style={styles.hero}>
            <Text style={styles.heroTitle}>Balance</Text>
            <Text style={styles.heroValue}>£4,500.00</Text>
            <View style={[ThemeProgressBar.background, styles.heroProgessBarBg]}>
                <View style={[ThemeProgressBar.bar, { width: "50%" }]}></View>
            </View>
            <Text style={styles.heroText}>£500.00 / £5,000.00</Text>
        </View>
    );
}