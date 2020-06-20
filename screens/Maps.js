import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
const MapScreen = (props) => {
  const defaultMapRegion = {
    latitude: 42.33,
    longitude: -71.09,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };
  return <MapView style={styles.mapStyle} region={defaultMapRegion}></MapView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
