import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: "row"}}>
      <View style={{flex: 3, backgroundColor: "green"}}></View>
      <View style={{flex: 2, backgroundColor: "red"}}></View>
      <View style={{flex: 1, backgroundColor: "blue"}}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
