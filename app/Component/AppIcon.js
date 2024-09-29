import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommuniityIcons } from "@expo/vector-icons";

const AppIcon = ({ name, size, color }) => {
  return <FontAwesome name={name} size={size} color={color} />;
};

export default AppIcon;

const styles = StyleSheet.create({});
