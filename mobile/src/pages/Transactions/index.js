import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Content, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Theme, ThemeButtons } from '../../styles/theme';

import Header from '../../components/Header';
import FooterMenu from '../../components/Menu';

export default function Budgets() {

    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Transactions');
    }

    return (
        <View style={Theme.container}>
            <ScrollView style={Theme.scrollView}>

                <Header />

                <Content style={Theme.content}>
                    <View style={Theme.contentHeader}>

                        <Text style={Theme.pageTitle}>Cash Flow</Text>

                        <Button style={ThemeButtons.simple}><Text style={ThemeButtons.simpleText}>+ New Transaction</Text></Button>
                        
                    </View>
                    
                </Content>
                
            </ScrollView>

            <FooterMenu current="Transactions" />

        </View>
    );
}