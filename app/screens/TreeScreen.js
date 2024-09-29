import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NatureCategoryScreen from "./NatureCategoryScreen";

const TreeScreen = ({ navigation }) => {
  return <NatureCategoryScreen categoryName="trees" navigation={navigation} />;
};

export default TreeScreen;

const styles = StyleSheet.create({});
