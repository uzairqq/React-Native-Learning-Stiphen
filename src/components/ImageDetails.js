import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetails = ({ title, image }) => {
  return (
    <View>
      <Image source={image} />
      <Text>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageDetails;
