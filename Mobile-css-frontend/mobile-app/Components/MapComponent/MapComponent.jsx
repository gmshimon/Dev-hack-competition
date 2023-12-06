import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, TouchableOpacity, View, Text, Button } from 'react-native'
import * as Location from 'expo-location'
import { useNavigation } from '@react-navigation/native'

export default function MapComponent () {
  const markers = [
    {
      id: 1,
      title: 'House 136',
      coordinate: {
        latitude: 37.78091,
        longitude: -122.4247,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0759
      }
    },
    {
      id: 2,
      title: 'House 135',
      coordinate: {
        latitude: 37.76088,
        longitude: -122.38635,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0759
      }
    },
    {
      id: 3,
      title: 'House 134',
      coordinate: {
        latitude: 37.73488,
        longitude: -122.43690,
        latitudeDelta: 0.1845,
        longitudeDelta:0.1519
      }
    },
    {
      id: 3,
      title: 'House 134',
      coordinate: {
        latitude: -41.20452,
        longitude: -18.04429,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    },
    {
      id: 4,
      title: 'House 130',
      coordinate: {
        latitude: 37.75547,
        longitude: -122.44506,
        latitudeDelta: 0.1844,
        longitudeDelta: 0.1519
      }
    },
    {
      id: 5,
      title: 'House 139',
      coordinate: {
        latitude: 37.75498,
        longitude: -122.38507,
        latitudeDelta: 0.1844,
        longitudeDelta: 0.1519
      }
    },
    {
      id: 6,
      title: 'House 140',
      coordinate: {
        latitude: 37.78406,
        longitude: -122.38525,
        latitudeDelta: 0.1844,
        longitudeDelta: 0.1519
      }
    },
  ]

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
  // userLocation()
  // useEffect(() => {
  //   userLocation()
  // }, [])

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
      <MapView style={styles.map} region={mapRegion} >
        {markers.map((marker, index) => {
          // console.log(marker)
          return (
            <Marker
              draggable
              key={index}
              onPress={e=>console.log(marker?.title)}
              coordinate={marker.coordinate}
              title={marker.title}
            />
          )
        })}
      </MapView>
      <View style={{ position: 'absolute', top: 16, left: 16 }}>
        <TouchableOpacity onPress={handleZoomIn}>
          <Text style={{ fontSize: 20 }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleZoomOut}>
          <Text style={{ fontSize: 20 }}>-</Text>
        </TouchableOpacity>
      </View>
      {/* <Button title='Get Location' onPress={userLocation} /> */}
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
