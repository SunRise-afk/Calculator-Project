import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.emptyBar}></View>
      <View style = {styles.calculationString}></View>
      <View style = {styles.greyDivRow}></View>
      <View style = {styles.memoryRow}></View>
      <View style = {styles.firstRow}></View>
      <View style = {styles.secondRow}></View>
      <View style = {styles.thirdRow}></View>
      <View style = {styles.fourthRow}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  emptyBar:{
    flex: 1,
    backgroundColor: 'blue',
  },
  calculationString:{
    flex: 1,
    backgroundColor: 'red',
  },
  greyDivRow:{
    flex: 1,
    backgroundColor: 'yellow',
  },
  memoryRow:{
    flex: 1,
    backgroundColor: 'green'
  },
  firstRow:{
    flex: 1,
    backgroundColor: 'magenta',
  },
  secondRow:{
    flex: 1,
    backgroundColor: 'aquamarine'
  },
  thirdRow:{
    flex: 1,
    backgroundColor: 'brown'
  },
  fourthRow:{
    flex: 1,
    backgroundColor: 'bisque'
  },
});
