import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails />
      <ImageDetails />
      <ImageDetails />
      <ImageDetails />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
