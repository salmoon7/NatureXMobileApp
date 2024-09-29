import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you have Ionicons installed
import Colors from "../Shares/Colors";
import ImageCard from "../Component/ImageCard"; // Assuming ImageCard is in the same directory
import CategoriessList from "../Component/CategoriessList";
import SearchImage from "../Component/SearchImage";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([]);
  const [showNotFound, setShowNotFound] = useState(false);

  // Modify the handleSearch function to use the passed searchText
  const handleSearch = async (searchText) => {
    try {
      const apiKey = "39166039-a5458d73bc615575aa882501e";
      const response = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&q=${searchText}&image_type=photo`
      );

      if (response.ok) {
        const data = await response.json();
        //console.log("Pixabay API Response:", data); // Log the Pixabay API response
        setImages(data.hits);
        setShowNotFound(data.hits.length === 0);
      } else {
        console.error("Error fetching images from Pixabay");
        setShowNotFound(true);
      }
    } catch (error) {
      console.error("Error during search:", error);
      setShowNotFound(true);
    }
  };

  useEffect(() => {
    // Uncomment the line below if you want to perform an initial search when the component mounts
    // handleSearch();
  }, []);

  return (
    <SafeAreaView>
      <SearchImage
        onPress={() => handleSearch(searchText)} // Pass searchText to handleSearch
        onChangeText={(text) => setSearchText(text)}
      />
      {showNotFound ? (
        <Text style={styles.notFoundText}>No results found</Text>
      ) : (
        <ImageCard images={images} />
      )}

      <CategoriessList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flexDirection: "column", // Change to column to stack components vertically
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
    marginBottom: 10, // Add margin bottom to separate input and button
  },
  searchButton: {
    padding: 10,
    marginBottom: 10, // Add margin bottom to separate input and button
  },
});

export default SearchScreen;
