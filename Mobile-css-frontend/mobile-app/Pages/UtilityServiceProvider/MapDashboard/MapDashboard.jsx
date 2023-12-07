import React, { useState } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import {
  TextInput,
  Button,
  Menu,
  Divider,
  Provider,
  ProgressBar,
  MD3Colors,
} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import UtilityCustomerRent from '../../../Components/UtilityProviderComponents/UtilityCustomerRent/UtilityCustomerRent'
import MapComponent from '../../../Components/MapComponent/MapComponent'
export default function Map() {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: 'grey' }}>
      <UtilityCustomerRent />
      <MapComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    marginBottom: 20,
    backgroundColor: 'white',
    marginHorizontal: 8,
    borderRadius: 5,
    paddingVertical: 20,
  },
})
