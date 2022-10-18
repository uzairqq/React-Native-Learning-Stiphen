import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button
        onPress={() => {
          navigation.navigate("Components");
        }}
        title="Go To Components Screen"
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("PracticeComponents");
        }}
        title="Go To Practice Component Screen"
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("ImageScreen");
        }}
        title="Go To Image Component Screen"
      ></Button>
      <TouchableOpacity onPress={() => navigation.navigate("ListComponent")}>
        <Text>Go To List Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FlatListExercise")}>
        <Text>Go To FlatList Excercise Screen Component</Text>
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
