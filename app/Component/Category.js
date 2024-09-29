// Category.js

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../Shares/Colors";

const Category = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <LinearGradient
        colors={[Colors.skyblue, Colors.lightwhite]}
        style={styles.gradientContainer}
        end={{ x: 0.5, y: 0.5 }}
      >
        <Text style={styles.itemName}>{name}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   margin: 10,
  //   marginBottom: 35,
  //   overflow: "hidden",
  // },
  gradientContainer: {
    height: 60,
    width: 120,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    margin: 10,
    marginBottom: 35,
  },
  itemName: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial-BoldMT",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.navyblue,
  },
});

export default Category;
