import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import LandingScreen from "./screens/LandingScreen";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/Maps";
import MapView from "react-native-maps";
const Stack = createStackNavigator();

export default function App(props) {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Root" component={LandingScreen} />
          <Stack.Screen name="MapScreen" component={MapScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
