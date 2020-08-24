import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Content, Button } from 'native-base';
// import { useNavigation } from '@react-navigation/native';

import { Theme, ThemeButtons } from '../../styles/theme';

import CustomHeader from '../../components/Header';
import HeroBalance from '../../components/Balance';
import IntervalSelect from '../../components/Interval';
import BudgetsList from '../../components/Budgets';
import FooterMenu from '../../components/Menu';

export default function Budgets() {

    // const navigation = useNavigation();

    // function navigateToDetail() {
    //     navigation.navigate('Transactions');
    // }

    return (
        <View style={Theme.container}>
            <ScrollView style={Theme.scrollView}>

                <CustomHeader navigation="period" />
                
                <HeroBalance />

                <Content style={Theme.content}>
                    <View style={Theme.contentHeader}>
                        <Text style={Theme.pageTitle}>Budgets</Text>

                        <IntervalSelect />
                        
                    </View>

                    <BudgetsList />

                    <Button style={ThemeButtons.primary}><Text style={ThemeButtons.primaryText}>Add Budget</Text></Button>
                    
                </Content>
                
            </ScrollView>

            <FooterMenu current="Budgets" />

        </View>
    );
}