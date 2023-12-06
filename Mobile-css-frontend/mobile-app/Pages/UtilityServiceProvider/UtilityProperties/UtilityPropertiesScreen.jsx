import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddProperty from '../../AddProperty/AddProperty'
import AllProperties from '../../Properties/AllProperties'
import { Text } from 'react-native'
import UtilitySingleHouse from '../../../Components/UtilityProviderComponents/UtilitySingleHouse/UtilitySingleHouse'

const Stack = createNativeStackNavigator()

export default function UtilityPropertiesScreen({ navigation }) {
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
