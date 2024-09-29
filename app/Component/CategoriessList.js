import { StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";
import Category from "./Category";
import { useNavigation } from "@react-navigation/native";

const Natures = [
  {
    id: 0,
    name: "All",
  },
  {
    id: 1,
    name: "Birds",
  },
  { id: 2, name: "Wild Animals" },
  {
    id: 3,
    name: "Aquatic",
  },
  {
    id: 4,
    name: "Montains",
  },
  {
    id: 5,
    name: "Trees",
  },
  {
    id: 6,
    name: "Wind",
  },
  {
    id: 7,
    name: "Sunsets",
  },
  {
    id: 8,
    name: "Sky",
  },
  {
    id: 9,
    name: "Beaches",
  },
  {
    id: 10,
    name: "Lakes",
  },
  {
    id: 11,
    name: "Insects",
  },
  {
    id: 12,
    name: "Flowers",
  },
];

const CategoriessList = ({ navigation }) => {
  // const navigation = useNavigation();
  const sortedNatures = Natures.slice().sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const navigateToCategoryScreen = (categoryName) => {
    // Use the navigation prop to navigate to the corresponding screen
    navigation.navigate(categoryName);
  };

  return (
    <FlatList
      data={sortedNatures}
      keyExtractor={(nature) => nature.id.toString()}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          onPress={() => navigateToCategoryScreen(item.name)}
        />
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CategoriessList;
