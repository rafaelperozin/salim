import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Switch } from 'react-native';
import { Content, Form, Picker, Icon, Button } from 'native-base';

import styles from './styles';
import { Globals } from '../../styles/globals';
import { Theme, ThemeForm, ThemeButtons } from '../../styles/theme';

import CustomHeader from '../../components/Header';
import FooterMenu from '../../components/Menu';

export default function NewTransaction() {

    const curDate = new Date();
    const currentMonth = curDate.getMonth() + 1;

    const [typeValue, setTypeValue] = useState("expense");
    const [budgetValue, setBudgetValue] = useState("unplanned");
    const [monthValue, setMonthValue] = useState(`${currentMonth}`);
    const [yearValue, setYearValue] = useState("2020");
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <View style={Theme.container}>
            <ScrollView style={Theme.scrollView}>

                <CustomHeader navigation="back" destiny="Transactions" />

                <Content style={Theme.content}>
                    <View style={Theme.contentHeader}>

                        <Text style={Theme.pageTitle}>New Transaction</Text>
                        
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

                        <View style={styles.field}>
                            <View style={[ThemeForm.fieldContainer, styles.budget]}>
                                <Picker mode="dropdown" 
                                    iosIcon={<Icon name="arrow-down" />} 
                                    style={[ThemeForm.select, styles.budgetSelect]} 
                                    selectedValue={budgetValue}
                                    onValueChange={(value, index) => setBudgetValue(value)}
                                >
                                    <Picker.Item label="Budget Group" value="unplanned" />
                                </Picker>
                            </View>
                        </View>

                        <View style={styles.field}>
                            <View style={[ThemeForm.fieldContainer, styles.day]}>
                                <TextInput
                                    placeholder="Day"
                                    style={ThemeForm.input}
                                    keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
                                />
                            </View>
                            <View style={[ThemeForm.fieldContainer, styles.month]}>
                                <Picker mode="dropdown" 
                                    iosIcon={<Icon name="arrow-down" />} 
                                    style={ThemeForm.select} 
                                    selectedValue={monthValue}
                                    onValueChange={(value, index) => setMonthValue(value)}
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
                            </View>
                            <View style={[ThemeForm.fieldContainer, styles.year]}>
                                <Picker mode="dropdown" 
                                    iosIcon={<Icon name="arrow-down" />} 
                                    style={ThemeForm.select} 
                                    selectedValue={yearValue}
                                    onValueChange={(value, index) => setYearValue(value)}
                                >
                                    <Picker.Item label="2020" value="2020" />
                                </Picker>
                            </View>
                        </View>

                        <View style={[styles.field, styles.repeater]}>
                            <Switch
                                trackColor={{ false: Globals.color.lightGrey, true: Globals.color.midGreen }}
                                thumbColor={Globals.color.white}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <Text style={[ThemeForm.label, styles.label]}>Repeat</Text>
                        </View>
                        <Text style={[ThemeForm.example, styles.info]}>Activate to repeat every month on the same day.</Text>

                        <Button style={[ThemeButtons.primary, styles.button]}><Text style={ThemeButtons.primaryText}>Add Transaction</Text></Button>

                    </Form>
                    
                </Content>
                
            </ScrollView>

            <FooterMenu current="Transactions" />

        </View>
    );
}