import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

const ImageCard = ({ images }) => {
  if (!images || images.length === 0) {
    return <Text>No images to display</Text>;
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <ImageBackground
        source={{ uri: item.webformatURL }}
        style={styles.image}
      />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
});
