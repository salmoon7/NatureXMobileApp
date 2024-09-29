import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import axios from "axios";

const NatureList = () => {
  const [observations, setObservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchObservations = async () => {
      try {
        const response = await axios.get(
          "https://api.inaturalist.org/v1/observations",
          {
            params: {
              user_login: "adebayo12345", // Replace with your iNaturalist username
            },
          }
        );
        console.log("API Response:", response.data); // Log the response
        setObservations(response.data.results);
      } catch (error) {
        console.error("Error fetching iNaturalist observations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchObservations();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        observations.map((observation) => (
          <Text key={observation.id} style={{ color: "black" }}>
            {observation.species_guess}
          </Text>
        ))
      )}
    </View>
  );
};

export default NatureList;
