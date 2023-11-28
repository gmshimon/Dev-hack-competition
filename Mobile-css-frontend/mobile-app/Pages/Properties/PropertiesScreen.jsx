import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddProperty from "../AddProperty/AddProperty";
import AllProperties from "./AllProperties";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function PropertiesScreen({ navigation }) {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="properties"
          component={AllProperties}
          options={{ title: "Property", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="addProperty"
          component={AddProperty}
          options={{ title: "Add Property", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </>
  );
}
