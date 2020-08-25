import { StyleSheet } from "react-native";
// import Constants from "expo-constants";

import { Globals } from '../../styles/globals';

export default StyleSheet.create({
    form: {
        paddingRight: 15,
        paddingLeft: 15,
        marginTop: 10
    },
    type: {
        width: 115
    },
    picker: {
        fontSize: 18
    },
    field: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        fontSize: 18
    },
    value: {
        width: 185
    },
    egLabel: {
        fontSize: 13,
        fontStyle: "italic",
        color: Globals.color.lightGrey,
        marginLeft: 20
    },
    day: {
        width: 60
    },
    budget: {
        width: 150
    }
});