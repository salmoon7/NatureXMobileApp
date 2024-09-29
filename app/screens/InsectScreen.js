import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NatureCategoryScreen from "./NatureCategoryScreen";

const InsectScreen = ({ navigation }) => {
  return (
    <NatureCategoryScreen categoryName="Insects" navigation={navigation} />
  );
};

export default InsectScreen;

const styles = StyleSheet.create({});
