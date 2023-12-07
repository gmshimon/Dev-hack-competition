import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UtilityAllProperties from '../UtilityProperties/UtilityAllProperties'
import { Text } from 'react-native'
import UtilitySingleHouse from '../../../Components/UtilityProviderComponents/UtilitySingleHouse/UtilitySingleHouse'

const Stack = createNativeStackNavigator()

export default function PropertiesScreen({ navigation }) {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="utilityProperties"
          component={UtilityAllProperties}
          options={{
            title: 'Bookmarked Properties',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="utilitySingleHouse"
          component={UtilitySingleHouse}
          options={{ title: 'House 136', headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="addProperty"
          component={AddProperty}
          options={{ title: 'Add Property', headerTitleAlign: 'center' }}
        />
      </Stack.Navigator>
    </>
  )
}
