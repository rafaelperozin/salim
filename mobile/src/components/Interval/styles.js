import { StyleSheet } from "react-native";
// import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 78
  },
  logo: {
    height: 36,
    width: 83,
    marginLeft: 5
  },
  form: {
    marginRight: 5
  },
  periodPicker: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottom: "1px solid #7B7B7B",
    width: 130,
    fontSize: 14,
    color: "#7B7B7B",
    height: 34
  },
  hero: {
    height: 325,
    backgroundColor: "#2AA77C",
    justifyContent: "center",
    alignItems: "center"
  },
  heroTitle: {
    color: "#fff",
    fontSize: 18
  },
  heroValue: {
    color: '#fff',
    fontSize: 44,
    fontWeight: "bold"
  },
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
  heroProgessBarBg: {
    backgroundColor: "#fff",
    marginTop: 30,
    marginBottom: 15,
    maxWidth: 250
  },
  heroText: {
    color: "#4ADBA9",
    fontSize: 16
  },
  budgets: {
    paddingTop: 30,
    paddingBottom: 70,
    backgroundColor: "#fff"
  },
  pageTitle: {
    color: "#1D1D1D",
    fontSize: 24,
    fontWeight: "bold"
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15
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
  },
  primaryButton: {
    height: 62,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginTop: 30,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#333",
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "600",
    width: "100%"
  },
  footerNav: {
    height: 58
  },
  footerNavTab: {
    backgroundColor: "#fff"
  },
  footerButton: {
    backgroundColor: "#fff",
    borderRadius: 0,
    marginTop: -3
  },
  footerButtonActive: {
    borderTopColor: "#2AA77C",
    borderTopWidth: 2
  },
  footerBtnTxt: {
    fontSize: 16,
    lineHeight: 18,
    color: "#666"
  },
  footerBtnTxtActive: {
    color: "#2AA77C"
  }
});