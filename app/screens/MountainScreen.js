import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NatureCategoryScreen from "./NatureCategoryScreen";

const MountainScreen = ({ navigation }) => {
  return (
    <NatureCategoryScreen categoryName="montains" navigation={navigation} />
  );
};

export default MountainScreen;

const styles = StyleSheet.create({});
