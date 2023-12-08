import { View, Pressable, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { IconButton, MD3Colors } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MapDashboard from './MapDashboard/MapDashboard'
import UtilityPropertiesScreen from './UtilityProperties/UtilityPropertiesScreen'
import Settings from '../Dashboard/Settings'
import { useEffect, useState } from 'react'

//Screen name
const DashboardName = 'Map'
const PropertiesName = 'Bookmarks'
const settingsName = 'Settings'
const Tab = createBottomTabNavigator()

export default function UtilityContainer({navigation}) {
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
        onPress={()=>navigation.navigate("Signup")}
      />
    </TouchableOpacity>
  );

  const [propertyTitle, setPropertyTitle] = useState(true)
  useEffect(() => {
    setPropertyTitle(true)
  }, [])
  return (
    <Tab.Navigator
      initialRouteName={DashboardName}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: {
          padding: 10,
          height: 60,
        },
        headerTitleAlign: 'center',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          let rn = route.name

          if (rn === DashboardName) {
            iconName = focused ? 'map' : 'map-outline'
          } else if (rn === PropertiesName) {
            iconName = focused ? 'home' : 'home-outline'
          } else if (rn === settingsName) {
            iconName = focused ? 'settings' : 'settings-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen
        name={DashboardName}
        component={MapDashboard}
        options={({ navigation }) => ({
          headerRight: renderHeaderRight,
        })}
      />
      <Tab.Screen
        name={PropertiesName}
        component={UtilityPropertiesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name={settingsName} component={Settings} 
        options={{
          headerRight: renderHeaderRight,
        }}
      />
    </Tab.Navigator>
  )
}
