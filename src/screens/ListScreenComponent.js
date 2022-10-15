import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreenComponent = () => {
  const freinds = [
    { id: 1, name: "freind#1" },
    { id: 2, name: "freind#2" },
    { id: 3, name: "freind#3" },
    { id: 4, name: "freind#4" },
    { id: 5, name: "freind#5" },
    { id: 6, name: "freind#6" },
    { id: 7, name: "freind#7" },
  ];

  return (
    <View>
      <Text>List Screen Component</Text>
      <FlatList
        data={freinds}
        renderItem={(element) => {
          return <Text>{element.item.name}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default ListScreenComponent;
