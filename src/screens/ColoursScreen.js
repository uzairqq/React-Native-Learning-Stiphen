import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ColoursScreen = () => {
  const [colors, setColours] = useState(`rgb(0,255,0)`);
  console.log(colors);
  const randomColors = () => {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    return `rgb(${red},${blue},${green})`;
  };

  return (
    <View>
      <Button
        title="Add a Colour"
        onPress={() => {
          setColours(randomColors());
        }}
      />
      <View style={{ height: 100, width: 100, backgroundColor: colors }} />
    </View>
  );
};
const style = StyleSheet.create({});

export default ColoursScreen;
