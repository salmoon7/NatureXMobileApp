import { StyleSheet } from "react-native";
import React from "react";
import NatureCategoryScreen from "./NatureCategoryScreen";

const BeachScreen = ({ navigation }) => {
  return <NatureCategoryScreen categoryName="beach" navigation={navigation} />;
};

export default BeachScreen;

const styles = StyleSheet.create({});
