import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ColoursScreen = () => {
  const randomColors = () => {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    return `rgb(${red},${blue},${green})`;
  };

  return (
    <View>
      <Button title="Add a Colour" />
      <View
        style={{ height: 100, width: 100, backgroundColor: randomColors() }}
      />
    </View>
  );
};
const style = StyleSheet.create({});

export default ColoursScreen;
