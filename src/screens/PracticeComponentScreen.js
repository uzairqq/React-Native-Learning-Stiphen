import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PracticeComponentScreen = () => {
  const myName = "Uzair Iqbal";
  return (
    <View>
      <Text style={styles.headerStyle}>Getting Started With React Native</Text>
      <Text style={styles.subHeaderStyle}>My Name is {myName}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default PracticeComponentScreen;
