import { StyleSheet } from "react-native";
// import Constants from "expo-constants";

import { Globals } from '../../styles/globals';

export default StyleSheet.create({
    tabs: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "nowrap",
    },
    tabButton: {
        backgroundColor: Globals.color.white,
        paddingBottom: 5,
        flexGrow: 1,
        marginRight: 20,
        height: 35,
        elevation: 0,
        width: "20%",
        borderRadius: 0
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
    }
});