import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, TouchableOpacity, View, Text, Button } from 'react-native'
import * as Location from 'expo-location'
import { useNavigation } from '@react-navigation/native'

export default function Settings () {
  const [errorMsg, setErrorMsg] = useState('')
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78826,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied')
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true
    })
    setMapRegion({
      latitude: location?.coords?.latitude,
      longitude: location?.coords?.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    })
  }
  userLocation()
  useEffect(() => {
    userLocation()
  }, [])

  const handleZoomIn = () => {
    setMapRegion(prevRegion => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta / 2,
      longitudeDelta: prevRegion.longitudeDelta / 2
    }))
  }

  const handleZoomOut = () => {
    setMapRegion(prevRegion => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta * 2,
      longitudeDelta: prevRegion.longitudeDelta * 2
    }))
  }
  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker
          draggable
          onDrag={e => console.log(e.nativeEvent.coordinate)}
          coordinate={mapRegion}
          title='marker'
        />
      </MapView>
      <View style={{ position: 'absolute', top: 16, left: 16 }}>
        <TouchableOpacity onPress={handleZoomIn}>
          <Text style={{ fontSize: 20 }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleZoomOut}>
          <Text style={{ fontSize: 20 }}>-</Text>
        </TouchableOpacity>
      </View>
      <Button title='Get Location' onPress={userLocation} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: '100%',
    height: '100%'
  }
})
