import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import FullCard from "../Component/FullCard";
import Colors from "../Shares/Colors";
import Header from "../Component/Header";
import CategoriessList from "../Component/CategoriessList";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  const [natureVideos, setNatureVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1); // Track the page number for infinite scrolling

  const fetchNatureVideos = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/videos/?key=39166039-a5458d73bc615575aa882501e&q=nature&page=${page}`
      );

      // Pixabay API response structure is different, adjust accordingly
      setNatureVideos((prevVideos) => [...prevVideos, ...response.data.hits]);
    } catch (error) {
      console.error("Error fetching nature videos:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    fetchNatureVideos();
  }, []);

  const onEndReached = () => {
    if (!loading && natureVideos.length > 0) {
      // Load more videos when the user reaches the end of the list
      setPage((prevPage) => prevPage + 1);
      fetchNatureVideos();
    }
  };

  useEffect(() => {
    fetchNatureVideos();
  }, [page]); // Trigger a fetch when the page changes

  const renderVideo = ({ item }) => (
    <FullCard
      cardStyle={styles.card}
      videoSource={{ uri: item.videos.large.url }}
      videoStyle={styles.video}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.skyblue} />
      <Header />

      <CategoriessList navigation={navigation} />

      <FlatList
        data={natureVideos}
        keyExtractor={(item, index) => `${item.id}_${index}`}
        renderItem={renderVideo}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1} // Load more when the user is near the end
        refreshing={refreshing}
        onRefresh={onRefresh}
      />

      {loading && !refreshing && (
        <ActivityIndicator
          size="large"
          color={Colors.green}
          style={styles.loader}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.skyblue,
  },
  card: {
    backgroundColor: Colors.lightgrey,
    marginTop: 20,
    width: "100%",
    height: 250,
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: 250, // Adjust the height as needed
    borderRadius: 10,
    aspectRatio: 16 / 9,
  },
  loader: {
    marginTop: 20,
  },
});

export default HomeScreen;
