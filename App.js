import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [ counter, setCounter ]= useState(0);

  const increase = () => {
    console.log("increase");
    setCounter((currentCounter) => currentCounter + 1);
    console.log(counter);
  }

  const decrease = () => {
    setCounter((currentCounter) => currentCounter - 1);
    console.log("decrease");
  }

  return (
    <View style={styles.container}>
      <Button style="button" title="increase" onPress={increase} />
      <Button style="button" title="decrease" onPress={decrease} />
      <Text style="text">you clicked {counter} times</Text>
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
