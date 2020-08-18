import { StyleSheet } from "react-native";
// import Constants from "expo-constants";

export default StyleSheet.create({
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
  }
});