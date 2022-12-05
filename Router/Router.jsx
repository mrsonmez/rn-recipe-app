import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./../components/Categories/Categories";
import Lister from "./../components/Lister/Lister";
import Detail from "./../components/Detail/Detail";

export default function Router() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          options={{
            title: "Categories",
            headerStyle: {
              backgroundColor: "#fff",
              textAlign: "center",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "#ffa500",
              fontWeight: "700",
            },
          }}
          component={Categories}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#fff",
              textAlign: "center",
              height: 50,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "#ffa500",
              fontWeight: "700",
            },
          }}
          name="Meals"
          component={Lister}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerStyle: {
              backgroundColor: "#fff",
              textAlign: "center",
              height: 50,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "#ffa500",
              fontWeight: "700",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
