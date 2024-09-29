import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NatureCategoryScreen from "./NatureCategoryScreen";

const WindScreen = ({ navigation }) => {
  return <NatureCategoryScreen categoryName="wind" navigation={navigation} />;
};

export default WindScreen;

const styles = StyleSheet.create({});
