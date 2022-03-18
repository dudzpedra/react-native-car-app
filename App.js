import React, { useState, useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
