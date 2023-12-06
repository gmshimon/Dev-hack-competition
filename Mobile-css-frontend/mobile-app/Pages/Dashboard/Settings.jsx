import React from 'react'
import { StyleSheet, View, } from 'react-native'
import MapComponent from '../../Components/MapComponent/MapComponent'

export default function Settings () {
  
  return (
    <View style={styles.container}>
      <MapComponent/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
