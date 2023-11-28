import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PaperProvider } from 'react-native-paper'
import StartPage from './Pages/StartPage/StartPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import SignUp from './Pages/Signup/SignUp'
import MainContainer from './Pages/Dashboard/MainContainer'
import AddProperty from './Pages/AddProperty/AddProperty'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name='Sign up'
            options={{ headerShown: false }}
            component={SignUp}
          /> */}
          <Stack.Screen
            name='Dashboard'
            component={MainContainer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='addProperty'
            component={AddProperty}
            options={{
              headerTitleAlign: 'center'
            }}
          />
          {/* <Stack.Screen
            name='Login'
            options={{ headerShown: false }}
            component={LoginPage}
          />
          <Stack.Screen
            name='StartPage'
            options={{ headerShown: false }}
            component={StartPage}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
