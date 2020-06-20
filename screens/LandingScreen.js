import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";
import { StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MapView from "react-native-maps";
import Maps from "./Maps";

const defaultMapRegion = {
  latitude: 42.33,
  longitude: -71.09,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

class LandingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Find Groceries Near By"
          onPress={() => this.props.navigation.navigate("Stores Nearby")}
        ></Button>
      </View>
    );
  }
}

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

export default LandingScreen;
