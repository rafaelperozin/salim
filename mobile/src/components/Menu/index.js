import React from 'react';
import { Text } from 'react-native';
import { Button, Footer, FooterTab } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function FooterMenu() {

    const navigation = useNavigation();

    function navigateToDestiny(destiny) {
        navigation.navigate(destiny);
    }

    return (
        <Footer style={styles.footerNav}>
            <FooterTab style={styles.footerNavTab}>
                <Button
                    style={[styles.footerButton, styles.footerButtonActive]}
                    onPress={() => { navigateToDestiny('Budgets') }}>
                    <Text style={[styles.footerBtnTxt, styles.footerBtnTxtActive]}>Budgets</Text>
                </Button>
                <Button
                    style={styles.footerButton}
                    onPress={() => { navigateToDestiny('Transactions') }}>
                    <Text style={styles.footerBtnTxt}>Cash Flow</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
}