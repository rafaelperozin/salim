import React from 'react';
import { Form, Item, Picker, Icon } from 'native-base';

import { ThemeForm } from '../../styles/theme';

export default function PeriodSelect () {
    return (
        <Form style={ThemeForm.form}>
            <Item picker>
                <Picker mode="dropdown" 
                    iosIcon={<Icon name="arrow-down" />} 
                    style={ThemeForm.selectPicker} 
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
    );
}