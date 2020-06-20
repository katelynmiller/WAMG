import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import LandingScreen from "./screens/LandingScreen";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/Maps";
import MapView from "react-native-maps";
const Stack = createStackNavigator();

const defaultMapRegion = {
  latitude: 42.33,
  longitude: -71.09,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

export default function App(props) {
  return (
    // <View style={styles.container}>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Root" component={LandingScreen} />
    //       <Stack.Screen name="MapScreen" component={MapScreen}></Stack.Screen>
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </View>
    <View style={styles.container}>
      {/* <MapView style={styles.map} region={defaultMapRegion}></MapView> */}
      <Text>HEllo Testing Testing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffd77",
  },
  texts: {
    textAlign: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
