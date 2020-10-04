import React, { Component, useState } from 'react';
import { Form, Picker, Icon } from 'native-base';

import styles from './styles';
import { ThemeForm } from '../../styles/theme';

class PeriodSelect extends Component {

    state = {
        period: new Date().getMonth() + 1
    }

    changePeriod = newPeriod => {
        this.setState({ period: newPeriod });
        this.sendData(newPeriod);
    }

    sendData = period => {        
        this.props.parentCallback(period);
    }

    render() {

        const { period } = this.state;
        
        return (
            <Form style={[ThemeForm.fieldContainer, styles.fieldContainer]}>
                <Picker mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={[ThemeForm.select, styles.select]}
                    selectedValue={period.toString()}
                    onValueChange={value => this.changePeriod(value)}
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
            </Form>
        )
    }
}

export default PeriodSelect;