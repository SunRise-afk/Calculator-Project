import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const CalculationBar = (props) => {
  return (
    <View style={styles.calculationContainer}>
      <Text style={styles.calculationText}>
        {Number(props.text) > 1 &&
        Number(props.text) > 1e9 &&
        Number(props.text) < 1e21
          ? `${(
              Number(props.text) /
              (1 * Math.pow(10, props.text.length - 1))
            ).toFixed(4)}e+${props.text.length - 1}`
          : Number(props.text) < -1 &&
            Number(props.text) < -1e9 &&
            Number(props.text) > -1e21
          ? `${(
              Number(props.text) /
              (1 * Math.pow(10, props.text.length - 2))
            ).toFixed(4)}e+${props.text.length - 2}`
          : (Number(props.text) < 1 && Number(props.text) > 0) ||
            (Number(props.text) > -1 && Number(props.text) < 0)
          ? props.text.includes("e")
            ? `${props.text.slice(
                0,
                props.text.indexOf("e") > 5 ? 6 : props.text.indexOf("e")
              )}${props.text.slice(props.text.indexOf("e"))}`
            : props.text.slice(0, 9)
          : Number(props.text) >= 1e21 || Number(props.text) <= -1e21
          ? `${props.text.slice(
              0,
              props.text.indexOf("e") > 5 ? 6 : props.text.indexOf("e")
            )}${props.text.slice(props.text.indexOf("e"))}`
          : props.text.length > 9 ? Number(props.text).toFixed(1) : props.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  calculationContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  calculationText: {
    color: "white",
    fontSize: 80,
  },
});
