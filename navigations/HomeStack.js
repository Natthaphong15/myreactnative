import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ex1 from "../screens/week2/Ex1";
import Ex2 from "../screens/week2/Ex2";

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "Home"  ,headerShown : false }}
            />
            <Stack.Screen
                name="Ex1"
                component={Ex1}
                options={{ title: "Exercise 1" }}
            />
            <Stack.Screen
                name="Ex2"
                component={Ex2}
                options={{ title: "Exercise 2" }}
            />
            <Stack.Screen
                name="Ex3"
                component={Ex3}
                options={{ title: "Exercise 3" }}
            />
             </Stack.Navigator>
      );
    
  
}