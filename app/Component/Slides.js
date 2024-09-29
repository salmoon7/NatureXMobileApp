import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../Shares/Colors";
import AppButton from "./AppButton";

const { width, height } = Dimensions.get("screen");

const Slides = ({
  item,
  isLast,
  onPressLogin,
  onPressRegister,
  onPressButton,
}) => {
  return (
    <View>
      <Image source={item.image} style={{ width, height }} resizeMode="cover" />
      <View style={styles.stack}>
        <Text style={styles.text}>{item.desc}</Text>
      </View>
      {isLast && (
        <View style={styles.btnContainer}>
          <AppButton
            onPress={onPressLogin}
            btnStyle={styles.btnStyle}
            text="LOGIN"
          />
          <AppButton
            onPress={onPressRegister}
            btnStyle={[styles.btnStyle, { marginBottom: 30 }]}
            text="Register"
          />
        </View>
      )}
      {!isLast && (
        <TouchableOpacity onPress={onPressButton} style={styles.skipButton}>
          <Text style={styles.btnTxt}>Skip</Text>
          <AntDesign name="forward" size={24} color={Colors.bluewhite} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  stack: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
    color: Colors.bluewhite,
    fontFamily: Platform.OS === "android" ? "San-Serif" : "roboto",
  },
  btnStyle: {
    backgroundColor: Colors.skyblue,
    width: "70%",
    height: 50,
    borderRadius: 20,
    marginTop: 50,
  },
  btnContainer: {
    width: "100%",
    position: "absolute",
    bottom: 16,
    alignItems: "center", // Center horizontally
  },
  skipButton: {
    backgroundColor: Colors.skyblue,
    width: "30%",
    padding: 15,
    borderRadius: 20,
    position: "absolute",
    bottom: 20,
    right: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btnTxt: {
    color: Colors.bluewhite,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Slides;
