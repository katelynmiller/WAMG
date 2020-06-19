import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Button } from "react-native";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

function LGoToLogin() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
