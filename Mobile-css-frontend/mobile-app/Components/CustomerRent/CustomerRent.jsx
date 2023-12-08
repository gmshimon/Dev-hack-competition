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
export default function CustomerRent() {
  const navigation = useNavigation()
  return (
    <View style={styles.box}>
      <View style={styles.cardContainer}>
        <View style={styles.firstContainer}>
          <Text
            style={{
              color: 'white',
              textAlign: 'right',
              fontSize: 15,
              marginBottom: 5,
            }}
          >
            RENT RECEIVED
          </Text>
          <Text
            style={{
              color: 'white',
              textAlign: 'right',
              fontWeight: 'bold',
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            21000 RM
          </Text>
          <Text style={{ color: 'white', textAlign: 'right', fontSize: 15 }}>
            LAST 20 DAYS
          </Text>
        </View>
        <View style={styles.secondContainer}>
          <Text
            style={{
              color: 'white',
              textAlign: 'right',
              fontSize: 15,
              marginBottom: 5,
            }}
          >
            UNPAID{'\n'} RENT
          </Text>
          <Text
            style={{
              color: 'white',
              textAlign: 'right',
              fontWeight: 'bold',
              fontSize: 18,
              marginBottom: 5,
              fontWeight: 900,
            }}
          >
            13850 RM
          </Text>
          <Text style={{ color: 'white', textAlign: 'right', fontSize: 15 }}>
            5 UNPAID
          </Text>
        </View>
        <View style={styles.thirdContainer}>
          <Text
            style={{
              color: 'white',
              textAlign: 'right',
              fontSize: 15,
              marginBottom: 5,
            }}
          >
            UTILITY{'\n'} BILLS DUE
          </Text>

          <Text
            style={{
              color: 'white',
              textAlign: 'right',
              fontWeight: 'bold',
              fontSize: 18,
              marginBottom: 5,
              fontWeight: 900,
            }}
          >
            3200 RM
          </Text>
          <Text style={{ color: 'white', textAlign: 'right', fontSize: 15 }}>
            8 UNPAID
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginTop: 20,
          marginLeft: 12,
          fontSize: 25,
        }}
      >
        Rent
      </Text>
      <View
        style={{
          paddingHorizontal: 12,
          marginTop: 20,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View>
              <Text style={{ color: 'red', fontSize: 22, fontWeight: 'bold' }}>
                15000 RM
              </Text>
              <Text style={{ fontSize: 14 }}>Outstanding in April</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 700, fontSize: 15 }}>25,000 RM</Text>
              <Text style={{ fontSize: 14 }}>Total Due</Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <ProgressBar
              progress={0.4}
              color="rgb(255,143,64)"
              style={{ height: 20, borderRadius: 10, marginBottom: 5 }}
            />
            <Text style={{ fontSize: 14 }}>10,000 RM Collected</Text>
          </View>
        </View>
        <View style={{ marginTop: 25 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>5000 RM</Text>
              <Text style={{ fontSize: 14 }}>Outstanding in May</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 700, fontSize: 15 }}>25,000 RM</Text>
              <Text style={{ fontSize: 14 }}>Total Due</Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <ProgressBar
              progress={0.8}
              color="rgb(24,150,199)"
              style={{ height: 20, borderRadius: 10, marginBottom: 5 }}
            />
            <Text style={{ fontSize: 14 }}>20,000 RM Collected</Text>
          </View>
        </View>
      </View>
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
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstContainer: {
    backgroundColor: 'green',
    width: 150,
    flex: 1,
    height: 110,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  secondContainer: {
    backgroundColor: 'orange',
    width: 150,
    flex: 1,
    height: 110,
    borderRadius: 10,
    padding: 10,
  },
  thirdContainer: {
    backgroundColor: 'red',
    flex: 1,
    width: 150,
    height: 110,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
})
