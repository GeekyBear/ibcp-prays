import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyPrayers from "./MyPrayers";

import CreateLocal from "./CreateLocal";
import PrayDetail from "./PrayDetail";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My prayers"
        options={{ headerShown: false }}
        component={MyPrayers}
      />
      <Stack.Screen
        name="Create local prayer"
        options={{ headerShown: false }}
        component={CreateLocal}
      />
      <Stack.Screen
        name="Pray detail"
        options={{ headerShown: false }}
        component={PrayDetail}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
