import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Content, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Theme, ThemeButtons, ThemeValueSign } from '../../styles/theme';

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

                    <View style={styles.tabs}>
                        <Button style={styles.tabButton}>
                            <Text style={[styles.tabText, styles.alignLeftTab]}>All</Text></Button>
                        <Button style={styles.tabButton}>
                            <Text style={[styles.tabText, styles.alignLeftTab]}>Incomes</Text></Button>
                        <Button style={[styles.tabButton, styles.selectedTab]}>
                            <Text style={[styles.tabText, styles.alignRightTab, styles.selectedText]}>Expenses</Text></Button>
                        <Button style={styles.tabButton}>
                            <Text style={[styles.tabText, styles.alignRightTab]}>Filters</Text></Button>
                    </View>

                    <View style={styles.transactions}>

                        <View style={styles.transactionsAmount}>
                            <Text style={styles.transactionsTitle}>Previews Period Balance</Text>
                            <Text style={[styles.transactionsTitle, ThemeValueSign.positiveValue]}>£504.90</Text>
                        </View>

                        <View style={styles.transactionsList}>
                            <View style={styles.transactionContainer} transaction-type="Expenses">
                                <Text style={styles.transactionText}>12</Text>
                                <View style={[styles.transactionCategory, styles.negativeTransCat]}>
                                    <Text style={[styles.transactionCategoryName, styles.negativeTransCatName]}>Groceries</Text>
                                </View>
                                <Text style={[styles.transactioText, ThemeValueSign.negativeText]}>Previews Period Balance</Text>
                                <Text style={[styles.transactionText, ThemeValueSign.negativeValue]}>£504.90</Text>
                            </View>
                        </View>

                        <View style={styles.transactionsAmount}>
                            <Text style={styles.transactionsTitle}>Previews Period Balance</Text>
                            <Text style={[styles.transactionsTitle, ThemeValueSign.negativeValue]}>£504.90</Text>
                        </View>

                    </View>
                    
                </Content>
                
            </ScrollView>

            <FooterMenu current="Transactions" />

        </View>
    );
}