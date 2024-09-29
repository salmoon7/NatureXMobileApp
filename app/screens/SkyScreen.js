import { StyleSheet, Text, View } from "react-native";
import NatureCategoryScreen from "./NatureCategoryScreen";
import React from "react";

const SkyScreen = ({ navigation }) => {
  return <NatureCategoryScreen categoryName="sky" navigation={navigation} />;
};

export default SkyScreen;

const styles = StyleSheet.create({});
