import React from 'react'
import { IconButton, MD3Colors } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddProperty from '../../AddProperty/AddProperty'
import UtilityAllProperties from './UtilityAllProperties'
import { Text, TouchableOpacity } from 'react-native'
import UtilitySingleHouse from '../../../Components/UtilityProviderComponents/UtilitySingleHouse/UtilitySingleHouse'

const Stack = createNativeStackNavigator()

export default function UtilityPropertiesScreen({ navigation }) {
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
          name="utilityProperties"
          component={UtilityAllProperties}
          options={{
            title: 'Bookmarked Properties',
            headerTitleAlign: 'center',
            headerRight: renderHeaderRight,
          }}
        />
        <Stack.Screen
          name="utilitySingleHouse"
          component={UtilitySingleHouse}
          options={{ title: 'House 136', headerTitleAlign: 'center' ,
          headerRight: renderHeaderRight
        }}
        />
        <Stack.Screen
          name="addProperty"
          component={AddProperty}
          options={{ title: 'Add Property', headerTitleAlign: 'center',
          headerRight: renderHeaderRight, }}
        />
      </Stack.Navigator>
    </>
  )
}
