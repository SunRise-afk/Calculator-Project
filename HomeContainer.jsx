import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";
import { CustomButton } from "./CustomButton";

export const HomeContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.emptyBar}></View>
      <View style={styles.calculationString}></View>
      <View style={styles.greyDivRow}>
        <CustomButton
          buttonText="AC"
          styleProp={{ touchable: "btnWhiteBg", text: "customBtnTextBlack" }}
        ></CustomButton>
        <CustomButton
          buttonText="+/-"
          styleProp={{ touchable: "btnWhiteBg", text: "customBtnTextBlack" }}
        ></CustomButton>
        <CustomButton
          buttonText="%"
          styleProp={{ touchable: "btnWhiteBg", text: "customBtnTextBlack" }}
        ></CustomButton>
        <CustomButton
          buttonText="/"
          styleProp={{ touchable: "btnOrangeBg", text: "customBtnTextWhite" }}
        ></CustomButton>
      </View>
      <View style={styles.memoryRow}>
        <CustomButton
          buttonText="mc"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
        ></CustomButton>
        <CustomButton
          buttonText="mr"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
        ></CustomButton>
        <CustomButton
          buttonText="m-"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
        ></CustomButton>
        <CustomButton
          buttonText="m+"
          styleProp={{ touchable: "btnOrangeBg", text: "customBtnTextWhite" }}
        ></CustomButton>
      </View>
      <View style={styles.firstRow}>
        <CustomButton
          buttonText="7"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
        ></CustomButton>
        <CustomButton
          buttonText="8"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
        ></CustomButton>
        <CustomButton
          buttonText="9"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
        ></CustomButton>
        <CustomButton
          buttonText="x"
          styleProp={{ touchable: "btnOrangeBg", text: "customBtnTextWhite" }}
        ></CustomButton>
      </View>
      <View style={styles.secondRow}>
        <CustomButton
          buttonText="4"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
        ></CustomButton>
        <CustomButton
          buttonText="5"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
        ></CustomButton>
        <CustomButton
          buttonText="6"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
        ></CustomButton>
        <CustomButton
          buttonText="-"
          styleProp={{ touchable: "btnOrangeBg", text: "customBtnTextWhite" }}
        ></CustomButton>
      </View>
      <View style={styles.thirdRow}>
        <CustomButton
          buttonText="1"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
        ></CustomButton>
        <CustomButton
          buttonText="2"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
        ></CustomButton>
        <CustomButton
          buttonText="3"
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
        ></CustomButton>
        <CustomButton
          buttonText="+"
          styleProp={{ touchable: "btnOrangeBg", text: "customBtnTextWhite" }}
        ></CustomButton>
      </View>
      <View style={styles.fourthRow}>
        <CustomButton
          style={{ flex: 2 }}
          buttonText="0"
          styleProp={{ touchable: "btnZero", text: "customBtnZeroText" }}
        ></CustomButton>
        <CustomButton
          style={{ flex: 1 }}
          buttonText="."
          styleProp={{ touchable: "btnGreyBg", text: "customBtnTextWhite" }}
        ></CustomButton>
        <CustomButton
          style={{ flex: 1 }}
          buttonText="="
          styleProp={{ touchable: "btnOrangeBg", text: "customBtnTextWhite" }}
        ></CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  emptyBar: {
    flex: 1,
    backgroundColor: "black",
  },
  calculationString: {
    flex: 1,
    backgroundColor: "red",
  },
  greyDivRow: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  memoryRow: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  firstRow: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  secondRow: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  thirdRow: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  fourthRow: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  zeroBtn: {
    flex: 2,
    width: 160,
  },
});
