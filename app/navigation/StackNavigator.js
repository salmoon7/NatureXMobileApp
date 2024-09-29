import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import BirdScreen from "../screens/BirdScreen";
import WildAnimalScreen from "../screens/WildAnimalScreen";
import FlowerScreen from "../screens/FlowerScreen";
import MountainScreen from "../screens/MountainScreen";
import TreeScreen from "../screens/TreeScreen";
import WindScreen from "../screens/WindScreen";
import BeachScreen from "../screens/BeachScreen";
import SkyScreen from "../screens/SkyScreen";
import LakeScreen from "../screens/LakeScreen";
import CategoriessList from "../Component/CategoriessList";
import SunSet from "../screens/SunSet";
import UnderWaterScreen from "../screens/UnderWaterScreen";
import InsectScreen from "../screens/InsectScreen";
import NewHomeScreen from "../screens/NewHomeScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="All" component={NewHomeScreen} />
    <Stack.Screen name="Birds" component={BirdScreen} />
    <Stack.Screen name="category" component={CategoriessList} />
    <Stack.Screen name="Wild Animals" component={WildAnimalScreen} />
    <Stack.Screen name="Flowers" component={FlowerScreen} />
    <Stack.Screen name="Montains" component={MountainScreen} />
    <Stack.Screen name="Trees" component={TreeScreen} />
    <Stack.Screen name="Wind" component={WindScreen} />
    <Stack.Screen name="Beaches" component={BeachScreen} />
    <Stack.Screen name="Sky" component={SkyScreen} />
    <Stack.Screen name="Lakes" component={LakeScreen} />
    <Stack.Screen name="Insects" component={InsectScreen} />
    <Stack.Screen name="Sunsets" component={SunSet} />
    <Stack.Screen name="Aquatic" component={UnderWaterScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
