import React, { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import FullCard from "../Component/FullCard";
import Colors from "../Shares/Colors";
import Header from "../Component/Header";
import CategoriessList from "../Component/CategoriessList";

const BirdScreen = ({ navigation }) => {
  const [birdVideos, setBirdVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const fetchBirdVideos = async () => {
    try {
      const response = await axios.get(
        `https://api.pexels.com/videos/search?query=bird&page=${page}&per_page=10`,
        {
          headers: {
            Authorization:
              "Phm3FlBjXjeZZdcglTdZSUxGTT0gnJRUtDYi3dP3uX2gNsTX8oVZhhKH",
          },
        }
      );
      setBirdVideos((prevVideos) => [...prevVideos, ...response.data.videos]);
    } catch (error) {
      console.error("Error fetching bird videos:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    fetchBirdVideos();
  }, []);

  const onEndReached = () => {
    if (!loading && birdVideos.length > 0) {
      setPage((prevPage) => prevPage + 1);
      fetchBirdVideos();
    }
  };

  useEffect(() => {
    fetchBirdVideos();
  }, [page]);

  const renderVideo = ({ item }) => (
    <FullCard
      cardStyle={styles.card}
      videoSource={{ uri: item.video_files[0].link }}
      videoStyle={styles.video}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.skyblue} />
      <Header />
      <CategoriessList navigation={navigation} />
      <FlatList
        data={birdVideos}
        keyExtractor={(item, index) => `${item.id}_${index}`}
        renderItem={renderVideo}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
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
    height: 250,
    borderRadius: 10,
    aspectRatio: 16 / 9,
  },
  loader: {
    marginTop: 20,
  },
});

export default BirdScreen;
