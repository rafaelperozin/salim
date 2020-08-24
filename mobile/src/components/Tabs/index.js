import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

import styles from './styles';

export default function Tabs() {

    return (
        <View style={styles.tabs}>
            <Button style={[styles.tabButton, styles.selectedTab]}>
                <Text style={[styles.tabText, styles.selectedText]}>All</Text></Button>
            <Button style={styles.tabButton}>
                <Text style={styles.tabText}>Incomes</Text></Button>
            <Button style={styles.tabButton}>
                <Text style={styles.tabText}>Expenses</Text></Button>
            <Button style={styles.tabButton}>
                <Text style={styles.tabText}>Filters</Text></Button>
        </View>
    );
}