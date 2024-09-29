import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NewHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>NewHomeScreen</Text>
      <Text>How are you doing </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
});

export default NewHomeScreen;
