import { StyleSheet, FlatList, View, Button } from "react-native";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";

import Slides from "../Component/Slides";

// import AppButton from "../Component/AppButton";
// import Colors from "../Shares/Colors";

const slides = [
  {
    id: 1,
    image: require("../../assets/image1.jpg"),
    desc: "Welcome to Naturex /n Join Naturex to explore Nature, Life and more ",
  },
  {
    id: 2,
    image: require("../../assets/image2.jpg"),
    desc: "Discover the  Wonders of Nature",
  },
  {
    id: 3,
    image: require("../../assets/image3.jpg"),
    desc: "Wild Life Observation ",
  },
  {
    id: 4,
    image: require("../../assets/image4.jpg"),
    desc: "Documentation",
  },
  {
    id: 5,
    image: require("../../assets/image5.jpg"),
    desc: "Documentation",
  },
];

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const handleLogin = () => {
    // Handle the login action
    console.log("Login button pressed");
    // You can navigate to the login screen or perform any other action
    navigation.navigate("Login");
  };

  const handleRegister = () => {
    // Handle the register action
    console.log("Register button pressed");
    // You can navigate to the register screen or perform any other action
    navigation.navigate("Register");
  };

  const renderItem = ({ item, index }) => {
    const isLast = index === slides.length - 1;

    return (
      <Slides
        item={item}
        isLast={isLast}
        onPressLogin={handleLogin}
        onPressRegister={handleRegister}
        onPressButton={() =>
          flatListRef.current.scrollToIndex({ index: index + 1 })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OnboardingScreen;
