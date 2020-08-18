import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Content } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import Header from '../../components/Header';
import IntervalSelect from '../../components/Interval';
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

                <Content style={styles.budgets}>
                    <View style={styles.contentHeader}>
                        <Text style={styles.pageTitle}>Cash Flow</Text>

                        <IntervalSelect />
                        
                    </View>
                    
                </Content>
                
            </ScrollView>

            <FooterMenu />

        </View>
    );
}