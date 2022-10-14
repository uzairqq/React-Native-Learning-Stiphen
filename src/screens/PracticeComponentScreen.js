import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PracticeComponentScreen = () => {
  const myName = "Uzair Iqbal";
  return (
    <View>
      <Text>Getting Started With React Native</Text>
      <Text>My Name is {myName}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 45,
  },
  textStyle2: {
    fontSize: 20,
  },
});

export default PracticeComponentScreen;
