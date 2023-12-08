import { View, Pressable, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { IconButton, MD3Colors } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Dashboard from './Dashboard'
import Properties from '../Properties/PropertiesScreen'
import Settings from './Settings'
import { useEffect, useState } from 'react'

//Screen name
const DashboardName = 'Dashboard'
const PropertiesName = 'Properties'
const settingsName = 'Settings'
const Tab = createBottomTabNavigator()

export default function MainContainer({navigation}) {

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
            iconName = focused ? 'apps' : 'apps-outline'
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
        component={Dashboard}
        options={{
          headerRight: renderHeaderRight,
        }}
      />
      <Tab.Screen
        name={PropertiesName}
        component={Properties}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name={settingsName} component={Settings} options={{
        headerRight: renderHeaderRight,
      }} />
    </Tab.Navigator>
  )
}
