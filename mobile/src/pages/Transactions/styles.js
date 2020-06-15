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
    backgroundColor: "#fff"
  },
  periodPicker: {
    borderWidth: 1,
    borderColor: "red",
    width: 130
  }
});