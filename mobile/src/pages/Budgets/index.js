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
                    <View style={styles.heroProgressBarBg}>
                        <View style={[styles.heroProgressBar, { width: 200 }]}></View>
                    </View>
                    <Text style={styles.heroText}>£500.00 / £5,000.00</Text>
                </View>

                <Content style={styles.budgets}>
                    <Text style={styles.pageTitle}>Budgets</Text>
                </Content>

            </ScrollView>


        </View>
    );
}