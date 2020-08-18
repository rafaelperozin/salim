import React from 'react';
import { Image } from 'react-native';
import { Header } from 'native-base';

import logoImg from '../../assets/logo.png';

import styles from './styles';

import PeriodSelect from '../../components/Period';

export default function Budgets() {
    return (
        <Header style={styles.header}>
            
            <Image style={styles.logo} source={logoImg} />

            <PeriodSelect />

        </Header>
    );
}