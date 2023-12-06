import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddProperty from '../../AddProperty/AddProperty'
import AllProperties from '../../Properties/AllProperties'
import { Text } from 'react-native'
import SingleHouse from '../../../Components/UtilityProviderComponents/SingleHouse/SingleHouse'

const Stack = createNativeStackNavigator()

export default function PropertiesScreen({ navigation }) {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="properties"
          component={AllProperties}
          options={{
            title: 'Bookmarked Properties',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="singleHouse"
          component={SingleHouse}
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
