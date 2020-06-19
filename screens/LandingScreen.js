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

class LandingScreenScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Welcome to Where are My Groceries</Text>

        <Button
          title="Find Groceries near by"
          onPress={() => this.props.navigation.navigate("MapScreen")}
        ></Button>
        {/* <Button
          title="Sign UP"
          onPress={() => this.props.navigation.navigate("SignUp")}
        ></Button> */}
      </View>
      // <MapView style={{ flex: 1 }} initialRegion={defaultMapRegion}></MapView>
    );
  }
}

export default LandingScreenScreen;
