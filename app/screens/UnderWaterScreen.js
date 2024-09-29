import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NatureCategoryScreen from "./NatureCategoryScreen";

const UnderWaterScreen = ({ navigation }) => {
  return (
    <NatureCategoryScreen categoryName="Aquatic" navigation={navigation} />
  );
};

export default UnderWaterScreen;

const styles = StyleSheet.create({});
