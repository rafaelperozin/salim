import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Content } from 'native-base';

// import styles from './styles';
import { Theme } from '../../styles/theme';

import CustomHeader from '../../components/Header';
import FooterMenu from '../../components/Menu';

export default function NewTransaction() {
    return (
        <View style={Theme.container}>
            <ScrollView style={Theme.scrollView}>

                <CustomHeader navigation="back" />

                <Content style={Theme.content}>
                    <View style={Theme.contentHeader}>

                        <Text style={Theme.pageTitle}>New Transaction</Text>
                        
                    </View>
                    
                </Content>
                
            </ScrollView>

            <FooterMenu current="Transactions" />

        </View>
    );
}