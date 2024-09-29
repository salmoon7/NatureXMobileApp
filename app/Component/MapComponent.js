import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import axios from "axios";

const MapComponent = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' and 'YOUR_NEWS_API_ENDPOINT' with your actual API key and endpoint
    const apiKey = "4a9c2fa02e5049f081d269b43a486f5f";
    const newsApiEndpoint = "https://newsapi.org/v2/top-headlines";

    // Fetch news articles data
    const fetchNews = async () => {
      try {
        const response = await axios.get(newsApiEndpoint, {
          params: {
            apiKey,
            category: "environment", // Category related to nature
            country: "nigeria", // Adjust as needed
            q: "nature", // Additional keyword for nature-related news
          },
        });

        setNewsArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Display news articles */}
      {newsArticles.map((article) => (
        <View key={article.title}>
          <Text>{article.title}</Text>
          <Text>{article.description}</Text>
          {/* Add more details as needed */}
        </View>
      ))}

      {/* Display Map with Markers */}
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 9.082, // Default to a central location in Nigeria
          longitude: 8.6753,
          latitudeDelta: 5, // Adjust as needed
          longitudeDelta: 5, // Adjust as needed
        }}
      >
        {newsArticles.map(
          (article) =>
            // Check if the article has location information before rendering the Marker
            article.latitude &&
            article.longitude && (
              <Marker
                key={article.title}
                coordinate={{
                  latitude: parseFloat(article.latitude),
                  longitude: parseFloat(article.longitude),
                }}
                title={article.title}
              >
                {/* Callout with additional information */}
                <Callout>
                  <View>
                    <Text>{article.title}</Text>
                    <Text>{article.description}</Text>
                    {/* Add more details as needed */}
                  </View>
                </Callout>
              </Marker>
            )
        )}
      </MapView>
    </View>
  );
};

export default MapComponent;
