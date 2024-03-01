import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen/LoginScreen.tsx";
import RegisterScreen from "../../screens/RegisterScreen/RegisterScreen.tsx";
import HomeScreen from "../../screens/HomeScreen/HomeScreen.tsx";
import { View } from "react-native";
import TabNavigator from "./TabNavigator.tsx";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen
        name="TabNavigator"
        options={{
          title: "TabNavigator",
        }}
        component={TabNavigator}
      />
      <Stack.Screen
        name="Login"
        options={{
          title: "Connexion",
        }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Register"
        options={{
          title: "Inscription",
        }}
        component={RegisterScreen}
      />
      <Stack.Screen
        name="Home"
        options={{
          title: "Accueil",
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
