import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
const MapScreen = (props) => {
  const defaultMapRegion = {
    latitude: 42.33,
    longitude: -71.09,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };
  return <MapView region={defaultMapRegion}></MapView>;
};

export default MapScreen;
