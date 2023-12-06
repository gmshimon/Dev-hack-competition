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
import CustomerRent from '../../../Components/UtilityProviderComponents/CustomerRent/CustomerRent'
export default function Map() {
  const navigation = useNavigation()

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'grey' }}>
      <CustomerRent />
    </ScrollView>
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
