import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Content, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Theme, ThemeButtons } from '../../styles/theme';

import CustomHeader from '../../components/Header';
import HeroBalance from '../../components/Balance';
import BudgetsList from '../../components/Budgets';
import FooterMenu from '../../components/Menu';
// import IntervalSelect from '../../components/Interval';

class Budgets extends Component {

    state = {
        balance: {
            value: "",
            budget: "",
            total: ""
        },
        period: new Date().getMonth() + 1,
    }

    getDataFromBudgetsList = data => {
        this.setState({
            balance: {
                value: data.balance,
                budget: data.budget,
                total: data.total,
            }
        });
    }

    getDataFromPeriod = newPeriod => {
        this.setState({
            period: newPeriod
        });
    }

    navigateToDestiny(destiny) {
        const navigation = useNavigation();
        navigation.navigate(destiny);
    }

    render() {

        const { budget, balance, period } = this.state;

        return (
            <View style={Theme.container}>
                <ScrollView style={Theme.scrollView}>

                    <CustomHeader navigation="period" parentCallback={this.getDataFromPeriod} />
                    
                    <HeroBalance data={balance} />

                    <Content style={Theme.content}>
                        <View style={Theme.contentHeader}>
                            <Text style={Theme.pageTitle}>Budgets</Text>

                            {/* <IntervalSelect /> Need to change api to set interval */}
                            
                        </View>

                        <View style={styles.contentBudgets}>
                            <BudgetsList parentCallback={this.getDataFromBudgetsList} period={period} />
                        </View>

                        <View style={Theme.alignCenter}>
                            <Button
                                style={ThemeButtons.simple}
                                onPress={() => { navigateToDestiny('NewBudget') }}
                            >
                                <Text style={ThemeButtons.simpleText}>+ Add Budget {budget}</Text>
                            </Button>
                        </View>
                        
                    </Content>
                    
                </ScrollView>

                <FooterMenu current="Budgets" />

            </View>
        )
    }
}

export default Budgets;