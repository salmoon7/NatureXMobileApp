import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import FullCard from "./FullCard";
import Colors from "../Shares/Colors";

const videos = [
  {
    id: 1,
    source: require("../../assets/butterfly.mp4"),
  },
  {
    id: 2,
    source: require("../../assets/forest.mp4"),
  },

  {
    id: 3,
    source: require("../../assets/snowytree.mp4"),
  },
  {
    id: 4,
    source: require("../../assets/waterfall.mp4"),
  },
];

const ShortViews = () => {
  return (
    <FlatList
      data={videos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <FullCard
            cardStyle={styles.image}
            videoStyle={styles.video}
            videoSource={item.source}
            // Adjust the aspect ratio based on your needs
          />
        </View>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Colors.lightgrey,
  },
  imageContainer: {
    marginTop: 20,
    margin: 10,
  },
  video: {
    width: "100%",
    height: 140,
    aspectRatio: 16 / 9,
  },
});
export default ShortViews;
