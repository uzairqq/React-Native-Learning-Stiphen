import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails title="Forest" image="image#1" />
      <ImageDetails title="Beach" image="image#2" />
      <ImageDetails title="Mountain" image="image#3" />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
