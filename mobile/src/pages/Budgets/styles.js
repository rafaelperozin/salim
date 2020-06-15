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
    height: 34,
    marginLeft: 5
  },
  form: {
    marginRight: 5
  },
  periodPicker: {
    borderWidth: 1,
    borderColor: "red",
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
  heroProgressBarBg: {
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 250,
    height: 6,
    marginTop: 30,
    marginBottom: 15,
    position: "relative"
  },
  heroProgressBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 6,
    backgroundColor: "#4ADBA9",
    borderRadius: 50,
    width: 0
  },
  heroText: {
    color: "#4ADBA9",
    fontSize: 16
  },
  pageTitle: {
    color: "#1D1D1D",
    fontSize: 24,
    fontWeight: "bold"
  }
});