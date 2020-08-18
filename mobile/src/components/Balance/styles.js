import { StyleSheet } from "react-native";
// import Constants from "expo-constants";

import { Globals } from '../../styles/globals';

export default StyleSheet.create({
  hero: {
    height: 325,
    backgroundColor: Globals.color.midGreen,
    justifyContent: "center",
    alignItems: "center"
  }, 
  heroTitle: {
    color: Globals.color.white,
    fontSize: 18
  },
  heroValue: {
    color: Globals.color.white,
    fontSize: 44,
    fontWeight: "bold"
  },
  heroProgessBarBg: {
    backgroundColor: Globals.color.white,
    marginTop: 30,
    marginBottom: 15,
    maxWidth: 250
  },
  heroText: {
    color: Globals.color.lightGreen,
    fontSize: 16
  }
});