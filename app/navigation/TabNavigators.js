import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import StackNavigator from "./StackNavigator";
import FavoritesScreen from "../screens/FavoritesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DiscoverScreen from "../screens/DiscoverScreen"; // Assuming you create a DiscoverScreen component

const Tab = createBottomTabNavigator();

const TabNavigators = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Stack"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Favourite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="explore" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="EarthChronicle"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="explore" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigators;
