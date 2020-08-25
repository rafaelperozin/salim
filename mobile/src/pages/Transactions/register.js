import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Switch } from 'react-native';
import { Content, Form, Item, Picker, Icon } from 'native-base';

import styles from './styles';
import { Globals } from '../../styles/globals';
import { Theme, ThemeForm } from '../../styles/theme';

import CustomHeader from '../../components/Header';
import FooterMenu from '../../components/Menu';

export default function NewTransaction() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <View style={Theme.container}>
            <ScrollView style={Theme.scrollView}>

                <CustomHeader navigation="back" />

                <Content style={Theme.content}>
                    <View style={Theme.contentHeader}>

                        <Text style={Theme.pageTitle}>New Transaction</Text>
                        
                    </View>

                    <Form style={[ThemeForm.form, styles.form]}>
                        
                        <View style={ThemeForm.inputContainer}>
                            <Item picker style={styles.type}>
                                    <Picker mode="dropdown" 
                                        iosIcon={<Icon name="arrow-down" />} 
                                        style={[ThemeForm.selectPicker, styles.picker]} 
                                        selectedValue="expense"
                                    >
                                        <Picker.Item label="Income" value="income" />
                                        <Picker.Item label="Expense" value="expense" />
                                    </Picker>
                            </Item>
                        </View>

                        <View style={[ThemeForm.inputContainer, styles.field]}>
                            <TextInput
                                placeholder="Title"
                                style={[ThemeForm.input, styles.input]}
                            />
                        </View>

                        <View style={styles.field}>
                            <View style={[ThemeForm.inputContainer, styles.value]}>
                                <TextInput
                                    placeholder="Value"
                                    style={[ThemeForm.input, styles.input]}
                                />
                            </View>
                            <Text style={styles.egLabel}>E.g.: 1,500.50</Text>
                        </View>

                        <View style={styles.field}>
                            <View style={ThemeForm.inputContainer}>
                                <Item picker style={styles.budget}>
                                    <Picker mode="dropdown" 
                                        iosIcon={<Icon name="arrow-down" />} 
                                        style={[ThemeForm.selectPicker, styles.picker]} 
                                        selectedValue="unplanned"
                                    >
                                        <Picker.Item label="Budget Group" value="unplanned" />
                                    </Picker>
                                </Item>
                            </View>
                        </View>

                        <View style={styles.field}>
                            <View style={[ThemeForm.inputContainer, styles.day]}>
                                <TextInput
                                    placeholder="Day"
                                    style={[ThemeForm.input, styles.input]}
                                />
                            </View>
                            <Text style={styles.egLabel}>The due day{"\n"}of the month</Text>
                        </View>

                        <View style={styles.field}>
                            <Switch
                                trackColor={{ false: Globals.color.lightGrey, true: Globals.color.midGreen }}
                                thumbColor={Globals.color.white}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>

                        <View style={styles.field}>
                            <View style={ThemeForm.inputContainer}>
                                <Item picker style={styles.month}>
                                    <Picker mode="dropdown" 
                                        iosIcon={<Icon name="arrow-down" />} 
                                        style={[ThemeForm.selectPicker, styles.picker]} 
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
                            </View>
                            <View style={ThemeForm.inputContainer}>
                                <Item picker style={styles.year}>
                                    <Picker mode="dropdown" 
                                        iosIcon={<Icon name="arrow-down" />} 
                                        style={[ThemeForm.selectPicker, styles.picker]} 
                                        selectedValue="2020"
                                    >
                                        <Picker.Item label="2020" value="2020" />
                                    </Picker>
                                </Item>
                            </View>
                        </View>

                    </Form>
                    
                </Content>
                
            </ScrollView>

            <FooterMenu current="Transactions" />

        </View>
    );
}