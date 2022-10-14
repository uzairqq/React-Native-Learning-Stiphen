import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  const greet = "Bye There";

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
