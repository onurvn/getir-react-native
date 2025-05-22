import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { Image, Text, TouchableOpacity } from "react-native";
import { Foundation, Ionicons } from "@expo/vector-icons";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";

const Stack = createStackNavigator();

function MyStack({ navigation, route }) {
  const tabHiddenRoutes = ["ProductDetails"];

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);
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

      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürünler
            </Text>
          ),
        }}
      />

      <Stack.Screen
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Foundation
                style={{ marginRight: 8 }}
                name="heart"
                size={26}
                color="#32177a"
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürün Detayı
            </Text>
          ),
        }}
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator({ navigation, route }) {
  return <MyStack navigation={navigation} route={route} />;
}
