import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// import Snackbar from 'react-native-snackbar';
import { AppwriteContext } from "../appwrite/AppwriteContext";

const ProfileScreen = () => {
  const [userData, setUserData] = useState();
  const { appwrite, setIsLoggedIn } = useContext(AppwriteContext);

  const handleLogout = () => {
    console.log("Attempting to log out...");
    appwrite.logout().then(() => {
      setIsLoggedIn(false);
      console.log("Logout successful");
      console.log("isLoggedIn:", isLoggedIn); // Add this line
    });
  };

  useEffect(() => {
    appwrite.getCurrentUser().then((response) => {
      if (response) {
        const user = {
          name: response.username,
          email: response.email,
        };
        setUserData(user);
      }
    });
  }, [appwrite]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image
          source={{
            uri: "https://appwrite.io/images-ee/blog/og-private-beta.png",
            width: 400,
            height: 300,
            cache: "default",
          }}
          resizeMode="contain"
        />
        <Text style={styles.message}>
          Build Fast. Scale Big. All in One Place.
        </Text>
        {userData && (
          <View style={styles.userContainer}>
            <Text style={styles.userDetails}>Name: {userData.name}</Text>
            <Text style={styles.userDetails}>Email: {userData.email}</Text>
          </View>
        )}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: "black",
    marginVertical: 10,
  },
  userContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  userDetails: {
    fontSize: 16,
    color: "black",
    marginBottom: 8,
  },
  logoutButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ProfileScreen;
