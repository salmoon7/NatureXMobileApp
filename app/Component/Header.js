import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

import Colors from "../Shares/Colors";

const Header = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>NatureX</Text>
      <Image
        source={require("../../assets/profileImage.jpg")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    height: 80,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 20,
    overflow: "hidden",
  },
  logo: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial-BoldMT, Arial",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    textAlign: "center",
    color: Colors.navyblue,
  },
});

export default Header;
