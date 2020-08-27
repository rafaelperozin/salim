import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Budgets from './pages/Budgets';
import Transactions from './pages/Transactions';
import NewTransaction from './pages/Transactions/register';
import NewBudget from './pages/Budgets/register';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator headerMode="none">

                <AppStack.Screen name="Budgets" component={Budgets} />
                <AppStack.Screen name="Transactions" component={Transactions} />
                <AppStack.Screen name="NewTransaction" component={NewTransaction} />
                <AppStack.Screen name="NewBudget" component={NewBudget} />

            </AppStack.Navigator>

        </NavigationContainer>
    );
}