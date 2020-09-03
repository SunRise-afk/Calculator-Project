import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";
import { CustomButton } from "./CustomButton";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.emptyBar}></View>
      <View style={styles.calculationString}></View>
      <View style={styles.greyDivRow}>
        <CustomButton buttonText = "7" styleProp = {{touchable: "btnGreyBg", text: "customBtnTextWhite"}}></CustomButton>
        <CustomButton buttonText = "8" styleProp = {{touchable: "btnOrangeBg", text: "customBtnTextWhite"}}></CustomButton>
        <CustomButton buttonText = "9" styleProp = {{touchable: "btnWhiteBg", text: "customBtnTextBlack"}}></CustomButton>
        <CustomButton buttonText = "X" styleProp = {{touchable: "btnOrangeBg", text: "customBtnTextBlack"}}></CustomButton>
      </View>
      <View style={styles.memoryRow}></View>
      <View style={styles.firstRow}></View>
      <View style={styles.secondRow}></View>
      <View style={styles.thirdRow}></View>
      <View style={styles.fourthRow}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  emptyBar: {
    flex: 1,
    backgroundColor: "blue",
  },
  calculationString: {
    flex: 1,
    backgroundColor: "red",
  },
  greyDivRow: {
    flex: 1,
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  memoryRow: {
    flex: 1,
    backgroundColor: "green",
  },
  firstRow: {
    flex: 1,
    backgroundColor: "magenta",
  },
  secondRow: {
    flex: 1,
    backgroundColor: "aquamarine",
  },
  thirdRow: {
    flex: 1,
    backgroundColor: "brown",
  },
  fourthRow: {
    flex: 1,
    backgroundColor: "bisque",
  },

  customBtnBG: {
    backgroundColor: "#333333",
    borderRadius: 50,
    justifyContent: "center",
    width: 80,
    height: 80,
    alignItems: "center",
  },
  customBtnText: {
    color: "white",
    fontSize: 40,
  },
});
