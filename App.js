import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [ counter, setCounter ]= useState(0);

  const increase = () => {
    console.log("increase");
  }

  const decrease = () => {
    console.log("decrease");
  }

  return (
    <View style={styles.container}>
      <Button style="button" title="increase" onPress={() => console.log("increase")} />
      <Button style="button" title="decrease" onPress={() => console.log("decrease")} />
      <Text style="text">you clicked 0 times</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
