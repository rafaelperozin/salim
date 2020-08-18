import { StyleSheet } from "react-native";
// import Constants from "expo-constants";

import { Globals } from '../../styles/globals';

export default StyleSheet.create({
  contentBudgets: {
    padding: 15
  },
  budget: {
    marginBottom: 40
  },
  budgetValues: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  budgetProgressBarBg: {
    marginTop: 5,
    backgroundColor: Globals.color.lighterGrey
  },
  budgetTitle: {
    fontSize: 16,
    color: Globals.color.darkGrey,
    marginBottom: 3
  },
  budgetSpent: {
    fontSize: 16,
    color: Globals.color.midGrey
  },
  budgetAvailable: {
    fontSize: 16,
    color: Globals.color.midGrey
  }
});