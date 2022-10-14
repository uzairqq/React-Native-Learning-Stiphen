import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  return (
    <View>
      <Text>This is Component Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    color: "green",
  },
});

export default ComponentScreen;
