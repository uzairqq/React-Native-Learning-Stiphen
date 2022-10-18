import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button
        onPress={() => {
          console.log("Buttons Pressed");
        }}
        title="Go To Components Screen"
      ></Button>
      <TouchableOpacity onPress={() => console.log("List Pressed")}>
        <Text>Go To List Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
