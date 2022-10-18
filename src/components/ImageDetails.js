import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ImageDetails = ({ title, image }) => {
  return (
    <View>
      <Text>
        {title}-{image}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageDetails;
