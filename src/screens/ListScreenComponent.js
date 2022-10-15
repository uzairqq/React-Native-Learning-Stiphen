import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreenComponent = () => {
  const freinds = [
    { name: "freind#1" },
    { name: "freind#2" },
    { name: "freind#3" },
    { name: "freind#4" },
    { name: "freind#5" },
    { name: "freind#6" },
    { name: "freind#7" },
  ];

  return (
    <View>
      <Text>List Screen Component</Text>
      <FlatList
        keyExtractor={(freind) => freind.name}
        data={freinds}
        renderItem={(element) => {
          return <Text style={styles.textStyle}>{element.item.name}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 15,
  },
});

export default ListScreenComponent;
