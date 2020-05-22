import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Budgets from './pages/Budgets';
import Transactions from './pages/Transactions';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShow: false }}>

                <AppStack.Screen name="Budgets" component={Budgets} />
                <AppStack.Screen name="Transactions" component={Transactions} />

            </AppStack.Navigator>

        </NavigationContainer>
    );
}