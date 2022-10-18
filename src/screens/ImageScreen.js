import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        image={require("../../assets/images/forest.jpg")}
      />
      <ImageDetails
        title="Beach"
        image={require("../../assets/images/beach.jpg")}
      />
      <ImageDetails
        title="Mountain"
        image={require("../../assets/images/mountain.jpg")}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
