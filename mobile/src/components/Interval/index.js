import React, { useState } from 'react';
import { Form, Item, Picker, Icon } from 'native-base';

import styles from '../Period/styles';
import { ThemeForm } from '../../styles/theme';

export default function IntervalSelect() {

    const [intervalValue, setIntervalValue] = useState("4");

    return (
        <Form style={[ThemeForm.fieldContainer, styles.fieldContainer]}>
            <Picker mode="dropdown" 
                iosIcon={<Icon name="arrow-down" />} 
                style={[ThemeForm.select, styles.select, styles.intervalSelect]} 
                selectedValue={intervalValue}
                onValueChange={(value, index) => setIntervalValue(value)}
            >
                <Picker.Item label="Quarterly" value="12" />
                <Picker.Item label="Monthly" value="4" />
                <Picker.Item label="Fortnightly" value="2" />
                <Picker.Item label="Weekly" value="1" />
            </Picker>
        </Form>
    );
}