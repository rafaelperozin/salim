import { StyleSheet } from "react-native";
// import Constants from "expo-constants";

import { Globals } from './globals';

export const Theme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Globals.color.white
  },
  content: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
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
    paddingTop: 15,
    paddingBottom: 30
  },
  alignCenter: {
    alignItems: "center"
  }
});

export const ThemeButtons = StyleSheet.create({
  primary: {
    height: 62,
    borderRadius: 5,
    backgroundColor: Globals.color.midGreen,
    marginTop: 30,
    marginBottom: 10
  },
  primaryText: {
    textAlign: "center",
    color: Globals.color.white,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "600",
    width: "100%"
  },
  simple: {
    backgroundColor: Globals.color.white,
    elevation: 0,
    width: 120
  },
  simpleText: {
    textAlign: "center",
    color: Globals.color.midGreen,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "400",
    width: "100%"
  }
});

export const ThemeForm = StyleSheet.create({
  fieldContainer: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: Globals.color.midGrey,
    overflow: "hidden",
    height: 51
  },
  select: {
    width: 130,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 5
  },
  input: {
    backgroundColor: Globals.color.white,
    fontSize: 18,
    color: Globals.color.midGrey,
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 5,
    paddingRight: 5,
    width: "100%"
  },
  example: {
    fontSize: 13,
    fontStyle: "italic",
    color: Globals.color.lightGrey,
    marginLeft: 20
  },
  label: {
    fontSize: 18,
    color: Globals.color.midGrey
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

export const ThemeStatus = StyleSheet.create({
  paid: {
    opacity: 0.4
  },
  overdue: {
    color: Globals.color.midYellow
  },
  overdueBackground: {
    backgroundColor: Globals.color.lightYellow
  },
  negative: {
    color: Globals.color.midRed
  },
  positive: {
    color: Globals.color.midGreen
  }
});