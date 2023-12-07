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
import UtilityCustomerRent from '../../../Components/UtilityProviderComponents/UtilityCustomerRent/UtilityCustomerRent'

export default function MapDashboard() {
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: 'grey' }}>
        <UtilityCustomerRent />
      </ScrollView>
    </>
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
