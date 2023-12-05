import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function MapComponent () {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78826,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })
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
          onDragEnd={e => console.log(e.nativeEvent.coordinate)}
          coordinate={mapRegion}
          title='marker'
        />
      </MapView>
      <View style={{ position: 'absolute', top: 16, left: 16 }}>
        <TouchableOpacity onPress={handleZoomIn}>
          <Text style={{ fontSize: 20 }}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={{ position: 'absolute', top: 16, right: 16 }}>
        <TouchableOpacity onPress={handleZoomOut}>
          <Text style={{ fontSize: 20 }}>-</Text>
        </TouchableOpacity>
      </View>
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
