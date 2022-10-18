import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button
        onPress={() => {
          props.navigation.navigate("Components");
        }}
        title="Go To Components Screen"
      ></Button>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ListComponent")}
      >
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
