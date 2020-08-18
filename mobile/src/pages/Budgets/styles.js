import { StyleSheet } from "react-native";
// import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1
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
  }
});