import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Content, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import Header from '../../components/Header';
import HeroBalance from '../../components/Balance';
import IntervalSelect from '../../components/Interval';
import BudgetsList from '../../components/Budgets';
import FooterMenu from '../../components/Menu';

export default function Budgets() {

    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Transactions');
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>

                <Header />
                
                <HeroBalance />

                <Content style={styles.budgets}>
                    <View style={styles.contentHeader}>
                        <Text style={styles.pageTitle}>Budgets</Text>

                        <IntervalSelect />
                        
                    </View>

                    <BudgetsList />

                    <Button style={styles.primaryButton}><Text style={styles.buttonText}>Add Budget</Text></Button>
                    
                </Content>
                
            </ScrollView>

            <FooterMenu />

        </View>
    );
}