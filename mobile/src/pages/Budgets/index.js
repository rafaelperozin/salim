import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import { Header, Content, Form, Item, Picker, Icon } from 'native-base';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Budgets() {
    return (
        <View style={styles.container}>

            <ScrollView style={styles.scrollView}>
                
                <Header style={styles.header}>
                    <Image style={styles.logo} source={logoImg} />

                    <Form style={styles.form}>
                        <Item picker>
                            <Picker mode="dropdown" 
                                iosIcon={<Icon name="arrow-down" />} 
                                style={styles.periodPicker} 
                                selectedValue="3"
                            >
                                <Picker.Item label="January" value="1" />
                                <Picker.Item label="February" value="2" />
                                <Picker.Item label="March" value="3" />
                                <Picker.Item label="April" value="4" />
                                <Picker.Item label="May" value="5" />
                                <Picker.Item label="June" value="6" />
                                <Picker.Item label="July" value="7" />
                                <Picker.Item label="August" value="8" />
                                <Picker.Item label="September" value="9" />
                                <Picker.Item label="October" value="10" />
                                <Picker.Item label="November" value="11" />
                                <Picker.Item label="December" value="12" />
                            </Picker>
                        </Item>
                    </Form>
                </Header>
                
                <View style={styles.hero}>
                    <Text style={styles.heroTitle}>Balance</Text>
                    <Text style={styles.heroValue}>£4,500.00</Text>
                    <View style={[styles.progressBarBg, styles.heroProgessBarBg]}>
                        <View style={[styles.progressBar, { width: "50%" }]}></View>
                    </View>
                    <Text style={styles.heroText}>£500.00 / £5,000.00</Text>
                </View>

                <Content style={styles.budgets}>
                    <View style={styles.contentHeader}>
                        <Text style={styles.pageTitle}>Budgets</Text>
                        <Form style={styles.form}>
                            <Item picker>
                                <Picker mode="dropdown" 
                                    iosIcon={<Icon name="arrow-down" />} 
                                    style={styles.periodPicker} 
                                    selectedValue="4"
                                >
                                    <Picker.Item label="Quarterly" value="12" />
                                    <Picker.Item label="Monthly" value="4" />
                                    <Picker.Item label="Fortnightly" value="2" />
                                    <Picker.Item label="Weekly" value="1" />
                                </Picker>
                            </Item>
                        </Form>
                    </View>

                    <View style={styles.contentBudgets}>
                        <View style={styles.budget}>
                            <Text style={styles.budgetTitle}>Home</Text>
                            <View style={styles.budgetValues}>
                                <Text style={styles.budgetSpent}>£550.10 / £1,055.23</Text>
                                <Text style={[styles.budgetAvailable, { color: "#2AA77C"}]}>£504.00</Text>
                            </View>
                            <View style={[styles.progressBarBg, styles.budgetProgressBarBg]}>
                                <View style={[styles.progressBar, { width: "33%", backgroundColor: "#2AA77C" }]}></View>
                            </View>
                        </View>
                        <View style={styles.budget}>
                            <Text style={styles.budgetTitle}>Home</Text>
                            <View style={styles.budgetValues}>
                                <Text style={styles.budgetSpent}>£550.10 / £1,055.23</Text>
                                <Text style={[styles.budgetAvailable, { color: "#DE4C68"}]}>£504.00</Text>
                            </View>
                            <View style={[styles.progressBarBg, styles.budgetProgressBarBg]}>
                                <View style={[styles.progressBar, { width: "100%", backgroundColor: "#DE4C68" }]}></View>
                            </View>
                        </View>
                    </View>
                    
                </Content>

            </ScrollView>

        </View>
    );
}