import { StyleSheet } from "react-native";
// import Constants from "expo-constants";

import { Globals } from '../../styles/globals';

export default StyleSheet.create({
    transactions: {
        marginTop: 25,
        paddingLeft: 15,
        paddingRight: 15
    },
    transactionContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: Globals.color.lighterGrey
    },
    transactionBackground: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 5
    },
    transactionsAmountTitle: {
        flexGrow: 1,
        fontWeight: "700",
        color: Globals.color.midGrey,
        fontSize: 14
    },
    transactionsAmountValue: {
        fontWeight: "700",
        color: Globals.color.midGrey,
        fontSize: 14
    },
    transactionStatus: {
        marginRight: 10,
        color: Globals.color.lightGrey
    },
    transactionText: {
        marginRight: 10,
        color: Globals.color.midGrey,
        fontSize: 14
    },
    transactionBudget: {
        borderRadius: 5,
        backgroundColor: Globals.color.lighterGrey,
        padding: 5,
        marginRight: 10
    },
    transactionBudgetName: {
        color: Globals.color.midGrey,
        fontSize: 14
    },
    transactionDescription: {
        flexGrow: 1
    },
    transactionValue: {
        marginRight: 0
    }
});