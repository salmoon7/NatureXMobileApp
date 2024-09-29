import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../Shares/Colors";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={Colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.textInput}
        placeholderTextColor={Colors.medium}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.light,
    borderRadius: 25,
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    color: Colors.dark,
  },
  icon: {
    marginRight: 10,
  },
});
