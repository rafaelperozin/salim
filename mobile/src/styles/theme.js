import { StyleSheet } from "react-native";
// import Constants from "expo-constants";

import { Globals } from './globals';

export const Theme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Globals.color.white
  },
  content: {
    paddingTop: 30,
    paddingBottom: 70,
    backgroundColor: Globals.color.white,
    marginTop: -1
  },
  pageTitle: {
    color: Globals.color.darkGrey,
    fontSize: 24,
    lineHeight: 28,
    fontWeight: "bold"
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15
  }
});

export const ThemeButtons = StyleSheet.create({
  primary: {
    height: 62,
    borderRadius: 5,
    backgroundColor: Globals.color.lighterGrey,
    marginTop: 30,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10
  },
  primaryText: {
    textAlign: "center",
    color: Globals.color.midGrey,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "600",
    width: "100%"
  },
  simple: {
    backgroundColor: "none"
  },
  simpleText: {
    textAlign: "center",
    color: Globals.color.midGrey,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "400",
    width: "100%"
  }
});

export const ThemeForm = StyleSheet.create({
  form: {
    marginRight: 5
  },
  selectPicker: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottom: "1px solid " + Globals.color.midGrey,
    width: 130,
    fontSize: 14,
    color: Globals.color.midGrey,
    height: 34
  }
});

export const ThemeProgressBar = StyleSheet.create({
  background: {
    borderRadius: 3,
    width: "100%",
    height: 6,
    position: "relative"
  },
  bar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 6,
    backgroundColor: "#4ADBA9",
    borderRadius: 3,
    width: 0
  }
});