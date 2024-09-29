import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NatureCategoryScreen from "./NatureCategoryScreen";

const LakeScreen = ({ navigation }) => {
  return <NatureCategoryScreen categoryName="Lakes" navigation={navigation} />;
};

export default LakeScreen;

const styles = StyleSheet.create({});
