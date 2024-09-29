import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NatureCategoryScreen from "./NatureCategoryScreen";

const FlowerScreen = ({ navigation }) => {
  return (
    <NatureCategoryScreen categoryName="Flowers" navigation={navigation} />
  );
};

export default FlowerScreen;
