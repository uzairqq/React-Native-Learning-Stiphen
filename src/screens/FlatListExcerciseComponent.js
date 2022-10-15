import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const FlatListExcerciseComponent = () => {
  const freind = [
    { name: "freind 1", age: 20 },
    { name: "freind 2", age: 45 },
    { name: "freind 3", age: 32 },
    { name: "freind 4", age: 27 },
    { name: "freind 5", age: 53 },
    { name: "freind 6", age: 30 },
  ];
  return (
    <View>
      <Text>Flat List Excercise Component</Text>
      <FlatList
        data={freind}
        renderItem={({ item }) => {
          return (
            <Text style={style.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    marginVertical: 40,
  },
});

export default FlatListExcerciseComponent;
