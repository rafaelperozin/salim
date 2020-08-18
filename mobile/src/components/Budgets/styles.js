import { StyleSheet } from "react-native";
// import Constants from "expo-constants";

export default StyleSheet.create({
  progressBarBg: {
    borderRadius: 3,
    width: "100%",
    height: 6,
    position: "relative"
  },
  progressBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 6,
    backgroundColor: "#4ADBA9",
    borderRadius: 3,
    width: 0
  },
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
    backgroundColor: "#EBEBEB"
  },
  budgetTitle: {
    fontSize: 16,
    color: "#1D1D1D",
    marginBottom: 3
  },
  budgetSpent: {
    fontSize: 16,
    color: "#7B7B7B"
  },
  budgetAvailable: {
    fontSize: 16,
    color: "#7B7B7B"
  }
});