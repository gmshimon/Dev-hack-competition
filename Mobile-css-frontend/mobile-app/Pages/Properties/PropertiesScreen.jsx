import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddProperty from "../AddProperty/AddProperty";
import AllProperties from "./AllProperties";
import { Text, TouchableOpacity } from "react-native";
import SingleHouse from "../../Components/SingleHouse/SingleHouse";
import { IconButton, MD3Colors } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function PropertiesScreen({ navigation }) {

  const renderHeaderRight = () => (
    <TouchableOpacity
      onPress={() => {
        
        // Handle the press event
        // This can be any action you want to perform when the right button is pressed
      }}
    >
      <IconButton
        icon="account-arrow-left"
        size={20}
        onPress={()=>navigation.navigate("Login")}
      />
    </TouchableOpacity>
  );

  return (
    <>
      <Stack.Navigator>
      <Stack.Screen
          name="properties"
          component={AllProperties}
          options={{ title: "Property", headerTitleAlign: "center" ,
          headerRight:renderHeaderRight,   
          headerStyle: {
            height: 20, // Adjust the height as needed
          },
      }}                                                                                                                                                                                                                                                 
        />
        <Stack.Screen
          name="singleHouse"
          component={SingleHouse}
          options={{ title: "House 136", headerTitleAlign: "center", headerRight:renderHeaderRight,    }}
        />
        <Stack.Screen
          name="addProperty"
          component={AddProperty}
          options={{ title: "Add Property", headerTitleAlign: "center", headerRight:renderHeaderRight,    }}
        />
      </Stack.Navigator>
    </>
  );
}
 