import React from 'react';
import { Image, Text } from 'react-native';
import { Header } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import styles from './styles';
import { ThemeButtons } from '../../styles/theme';

import PeriodSelect from '../../components/Period';

export default function CustomHeader(props) {

    const navigation = useNavigation();
    function navigateToDestiny(destiny) {
        navigation.navigate(destiny);
    }

    return (
        <Header style={styles.header}>
            
            <Image style={styles.logo} source={logoImg} />

            {props.navigation === 'back' &&
                <Text style={ThemeButtons.simpleText, styles.backButton} onPress={() => { navigateToDestiny('Transactions') }}>&lt; Back</Text>
            }

            {props.navigation === 'period' &&
                <PeriodSelect />
            }

        </Header>
    );
}