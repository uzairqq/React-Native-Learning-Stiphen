import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        image={require("../../assets/images/forest.jpg")}
        score={9}
      />
      <ImageDetails
        title="Beach"
        image={require("../../assets/images/beach.jpg")}
        score={7}
      />
      <ImageDetails
        title="Mountain"
        image={require("../../assets/images/mountain.jpg")}
        score={10}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
