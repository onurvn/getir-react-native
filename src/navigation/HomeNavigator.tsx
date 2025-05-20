import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { Image } from "react-native";

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Image
              style={{ width: 70, height: 30 }}
              source={require("../../assets/logo.png")}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
