import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { ThemeProgressBar } from '../../styles/theme';

import moneyFormat from '../../utils/moneyFormat';

class HeroBalance extends Component {

    state = {
        balance: this.props.data.value,
        budget: this.props.data.budget,
        total: this.props.data.total
    }

    static getDerivedStateFromProps(props, state) {
        if (props.data.value) {
            return {
                balance: props.data.value,
                budget: props.data.budget,
                total: props.data.total
            };
        } else {
            return null;
        }
    }
    
    render() {
        return (
            <View style={styles.hero}>
                <Text style={styles.heroTitle}>Balance</Text>
                <Text style={styles.heroValue}>{moneyFormat(this.state.balance)}</Text>
                <View style={[ThemeProgressBar.background, styles.heroProgessBarBg]}>
                    <View style={[ThemeProgressBar.bar, { width: "50%" }]}></View>
                </View>
                <Text style={styles.heroText}>{moneyFormat(this.state.total)} / {moneyFormat(this.state.budget)}</Text>
            </View>
        )
    }
}

export default HeroBalance;