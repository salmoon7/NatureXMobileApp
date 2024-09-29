import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NatureCategoryScreen from "./NatureCategoryScreen";

const WildAnimalScreen = ({ navigation }) => {
  return <NatureCategoryScreen categoryName="wild" navigation={navigation} />;
};

export default WildAnimalScreen;

const styles = StyleSheet.create({});
