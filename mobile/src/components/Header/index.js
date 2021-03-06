import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Header } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import styles from './styles';
import { ThemeButtons } from '../../styles/theme';

import PeriodSelect from '../../components/Period';

class CustomHeader extends Component {
    
    navigateToDestiny(destiny) {
        const navigation = useNavigation();
        navigation.navigate(destiny);
    }

    render() {
        return (
            <Header style={styles.header}>
                
                <Image style={styles.logo} source={logoImg} />

                {this.props.navigation === 'back' &&
                    <Text style={ThemeButtons.simpleText, styles.backButton} onPress={() => { navigateToDestiny(this.props.destiny) }}>&lt; Back</Text>
                }

                {this.props.navigation === 'period' &&
                    <PeriodSelect parentCallback={this.props.parentCallback} />
                }

            </Header>
        );
    }
}

export default CustomHeader;