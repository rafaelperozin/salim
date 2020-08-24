import { StyleSheet } from "react-native";
// import Constants from "expo-constants";

import { Globals } from '../../styles/globals';
import { Row } from "native-base";

export default StyleSheet.create({
    tabs: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        paddingLeft: 15,
        paddingRight: 15
    },
    tabButton: {
        backgroundColor: Globals.color.white,
        paddingBottom: 5,
        flexGrow: 1,
        marginRight: 20,
        height: 35
    },
    selectedTab: {
        borderBottomColor: Globals.color.midGreen,
        borderBottomWidth: 2
    },
    tabText: {
        width: "100%",
        fontSize: 14,
        lineHeight: 14,
        color: Globals.color.midGrey
    },
    selectedText: {
        color: Globals.color.midGreen
    },
    transactions: {
        marginTop: 25,
        paddingLeft: 15,
        paddingRight: 15
    },
    transactionContainer: {
        width: "100%",
        flexDirection: "Row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: Globals.color.lightGrey
    },
    transactionBackground: {
        width: "100%",
        flexDirection: "Row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    transactionsAmountTitle: {
        flexGrow: 1,
        fontWeight: 700,
        color: Globals.color.midGrey,
        fontSize: 14
    },
    transactionsAmountValue: {
        fontWeight: 700,
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