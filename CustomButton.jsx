import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";

export const CustomButton = (props) => {
  return (
    <TouchableHighlight style={styles[props.styleProp.touchable]} onPress={() => {}}>
      <Text style={styles[props.styleProp.text]}>{props.buttonText}</Text>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  btnGreyBg: {
    backgroundColor: "#333333",
    borderRadius: 50,
    justifyContent: "center",
    width: 80,
    height: 80,
    alignItems: "center",
  },
  btnWhiteBg: {
    backgroundColor: "#a5a5a5",
    borderRadius: 50,
    justifyContent: "center",
    width: 80,
    height: 80,
    alignItems: "center",
  },
  btnOrangeBg: {
    backgroundColor: "#ff9a0a",
    borderRadius: 50,
    justifyContent: "center",
    width: 80,
    height: 80,
    alignItems: "center",
  },

  customBtnTextWhite: {
    color: "white",
    fontSize: 40,
  },
  customBtnTextBlack: {
    color: "black",
    fontSize: 40,
  },
});
