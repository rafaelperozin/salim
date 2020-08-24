import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Content, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Theme, ThemeButtons } from '../../styles/theme';

import CustomHeader from '../../components/Header';
import Tabs from '../../components/Tabs';
import TransactionsList from '../../components/Transactions';
import FooterMenu from '../../components/Menu';

export default function Transactions() {

    const navigation = useNavigation();

    function navigateToDestiny(destiny) {
        navigation.navigate(destiny);
    }

    return (
        <View style={Theme.container}>
            <ScrollView style={Theme.scrollView}>

                <CustomHeader navigation="period" />

                <Content style={Theme.content}>
                    <View style={Theme.contentHeader}>

                        <Text style={Theme.pageTitle}>Cash Flow</Text>

                        <Button
                            style={ThemeButtons.simple}
                            onPress={() => { navigateToDestiny('NewTransaction') }}
                        >
                            <Text style={ThemeButtons.simpleText}>+ New Transaction</Text>
                        </Button>
                        
                    </View>

                    <Tabs />

                    <TransactionsList />
                    
                </Content>
                
            </ScrollView>

            <FooterMenu current="Transactions" />

        </View>
    );
}