import { StyleSheet } from "react-native";
// import Constants from "expo-constants";

import { Globals } from '../../styles/globals';

export default StyleSheet.create({
  footerNav: {
    height: 58
  },
  footerNavTab: {
    backgroundColor: Globals.color.white
  },
  footerButton: {
    backgroundColor: Globals.color.white,
    borderRadius: 0,
    borderTopWidth: 2,
    borderTopColor: Globals.color.white
  },
  footerButtonActive: {
    borderTopColor: Globals.color.midGreen,
    borderTopWidth: 2
  },
  footerBtnTxt: {
    fontSize: 16,
    color: Globals.color.midGrey
  },
  footerBtnTxtActive: {
    color: Globals.color.midGreen
  }
});