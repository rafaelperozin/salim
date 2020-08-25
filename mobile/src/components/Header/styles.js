import { StyleSheet } from "react-native";
// import Constants from "expo-constants";

import { Globals } from '../../styles/globals';

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Globals.color.white,
    height: 78
  },
  logo: {
    height: 36,
    width: 83,
    marginLeft: 5
  },
  backButton: {
    width: "auto",
    textAlign: "right",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    color: Globals.color.midGrey
  }
});