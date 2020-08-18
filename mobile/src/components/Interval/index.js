import React from 'react';
import { Form, Item, Picker, Icon } from 'native-base';

import { ThemeForm } from '../../styles/theme';

export default function IntervalSelect() {
    return (
        <Form style={ThemeForm.form}>
            <Item picker>
                <Picker mode="dropdown" 
                    iosIcon={<Icon name="arrow-down" />} 
                    style={ThemeForm.selectPicker} 
                    selectedValue="4"
                >
                    <Picker.Item label="Quarterly" value="12" />
                    <Picker.Item label="Monthly" value="4" />
                    <Picker.Item label="Fortnightly" value="2" />
                    <Picker.Item label="Weekly" value="1" />
                </Picker>
            </Item>
        </Form>
    );
}