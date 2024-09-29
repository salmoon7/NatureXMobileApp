import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you have Ionicons installed

import Colors from "../Shares/Colors";

const SearchImage = ({ onPress, otherProps }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // Implement your search logic here using the searchText state
    onPress(searchText);
    console.log("Searching for:", searchText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search images..."
        placeholderTextColor={Colors.gray}
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        {...otherProps}
      />
      <TouchableOpacity style={styles.searchButton} onPress={onPress}>
        <Ionicons name="search" size={24} color={Colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flexDirection: "row",
    backgroundColor: Colors.skyblue,
    padding: 10,
    alignSelf: "center",
    alignItems: "center",
    width: 350,
  },
  input: {
    flex: 1,
    color: Colors.black,
    paddingLeft: 10,
  },
  searchButton: {
    padding: 10,
  },
});

export default SearchImage;
