import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";

const AppButton = ({ onPress, text, btnStyle }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.buttonContainer, btnStyle]}>
        <Text style={styles.txtStyle}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#3498db", // You can customize the background color
  },
  txtStyle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white", // You can customize the text color
  },
});

export default AppButton;
