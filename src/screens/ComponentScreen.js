import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  return (
    <View>
      <Text style={style.textStyle}>This is Component Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 50,
    color: "green",
  },
});

export default ComponentScreen;
