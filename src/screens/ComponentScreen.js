import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  const greet = [123, "AAA", "456", uzair()];
  function uzair() {
    return "LARAIB";
  }

  return (
    <View>
      <Text style={styles.textStyle}>This is Component Screen</Text>
      <Text>{greet}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "green",
  },
});

export default ComponentScreen;
