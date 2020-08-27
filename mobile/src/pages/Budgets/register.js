import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Switch } from 'react-native';
import { Content, Form, Picker, Icon, Button } from 'native-base';

import styles from './styles';
import { Theme, ThemeForm, ThemeButtons } from '../../styles/theme';

import CustomHeader from '../../components/Header';
import FooterMenu from '../../components/Menu';

export default function NewTransaction() {

    const [typeValue, setTypeValue] = useState("expense");
    
    return (
        <View style={Theme.container}>
            <ScrollView style={Theme.scrollView}>

                <CustomHeader navigation="back" destiny="Budgets" />

                <Content style={Theme.content}>
                    <View style={Theme.contentHeader}>

                        <Text style={Theme.pageTitle}>New Budget</Text>
                        
                    </View>

                    <Form style={[ThemeForm.form, styles.form]}>
                        
                        <View style={[ThemeForm.fieldContainer, styles.type]}>
                            <Picker mode="dropdown" 
                                iosIcon={<Icon name="arrow-down" />} 
                                style={ThemeForm.select} 
                                selectedValue={typeValue}
                                onValueChange={(value, index) => setTypeValue(value)}
                            >
                                <Picker.Item label="Income" value="income" />
                                <Picker.Item label="Expense" value="expense" />
                            </Picker>
                        </View>

                        <View style={[ThemeForm.fieldContainer, styles.field]}>
                            <TextInput
                                placeholder="Title"
                                style={ThemeForm.input}
                            />
                        </View>

                        <View style={styles.field}>
                            <View style={[ThemeForm.fieldContainer, styles.value]}>
                                <TextInput
                                    placeholder="Value"
                                    style={ThemeForm.input}
                                    keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
                                />
                            </View>
                            <Text style={ThemeForm.example}>E.g.: 1500.50</Text>
                        </View>

                        <Button style={[ThemeButtons.primary, styles.button]}><Text style={ThemeButtons.primaryText}>Add Budget</Text></Button>

                    </Form>
                    
                </Content>
                
            </ScrollView>

            <FooterMenu current="Budgets" />

        </View>
    );
}