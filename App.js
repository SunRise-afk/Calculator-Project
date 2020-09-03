import React from "react";
import { StyleSheet, View } from "react-native";
import { HomeContainer } from "./HomeContainer";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeContainer></HomeContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
