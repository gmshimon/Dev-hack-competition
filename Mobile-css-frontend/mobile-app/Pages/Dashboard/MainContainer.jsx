import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Dashboard from "./Dashboard";
import Properties from "./Properties";
import Settings from "./Settings";

//Screen name
const DashboardName = "Dashboard";
const PropertiesName = "Properties";
const settingsName = "Settings";
const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={DashboardName}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: {
          padding: 10,
          height: 60,
        },
        headerTitleAlign: "center",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === DashboardName) {
            iconName = focused ? "apps" : "apps-outline";
          } else if (rn === PropertiesName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === settingsName) {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={DashboardName} component={Dashboard} />
      <Tab.Screen name={PropertiesName} component={Properties} />
      <Tab.Screen name={settingsName} component={Settings} />
    </Tab.Navigator>
  );
}
