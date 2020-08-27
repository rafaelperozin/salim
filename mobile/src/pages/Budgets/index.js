import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Content, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Theme, ThemeButtons } from '../../styles/theme';

import CustomHeader from '../../components/Header';
import HeroBalance from '../../components/Balance';
import IntervalSelect from '../../components/Interval';
import BudgetsList from '../../components/Budgets';
import FooterMenu from '../../components/Menu';

export default function Budgets() {

    const navigation = useNavigation();

    function navigateToDestiny(destiny) {
        navigation.navigate(destiny);
    }

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

                    <View style={Theme.alignCenter}>
                        <Button
                            style={ThemeButtons.simple}
                            onPress={() => { navigateToDestiny('NewBudget') }}
                        >
                            <Text style={ThemeButtons.simpleText}>+ Add Budget</Text>
                        </Button>
                    </View>
                    
                </Content>
                
            </ScrollView>

            <FooterMenu current="Budgets" />

        </View>
    );
}