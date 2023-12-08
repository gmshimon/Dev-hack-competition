import React, { useState } from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-paper'
import StatusDueButtons from '../StatusDueButtons/StatusDueButtons'

export default function SingleProperty() {
  const navigation = useNavigation()
  const status = ['water', 'electricity', 'assessment', 'sewerage']

  return (
    <Card
      flex={1}
      style={styles.container}
      onPress={() => {
        navigation.navigate('singleHouse')
      }}
    >
      <Card.Cover
        style={styles.coverImages}
        source={{
          uri: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/80813528.jpg?k=805ca38b6b7e46a0dec0d86597677378516a2e3239b9f17bc4f62b65e426e85e&o=&hp=1',
        }}
      />
      <Card.Content>
        <Text variant="titleMedium" style={styles.pv5}>
          House 136
        </Text>

        <Text variant="labelMedium" style={styles.pv5}>
          <Text style={{ color: '#0647B3' }}>MYR 2300</Text> / month
        </Text>

        <View style={[styles.addressContainer, styles.pv5]}>
          <Text variant="labelSmall" style={[styles.upperCaseText]}>
            <Icon source="map-marker" />
            jalan pendidikan 1, taman universiti, skudai, johor
          </Text>
        </View>
      </Card.Content>
    </Card>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  blueButton: {
    backgroundColor: '#4285F4',
  },

  redButton: {
    backgroundColor: '#EA4335',
  },

  greenButton: {
    backgroundColor: '#34A853',
  },

  yellowButton: {
    backgroundColor: '#FBBC05',
  },

  upperCaseText: {
    textTransform: 'uppercase',
  },

  flexRowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  coverImages: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: 8 * 13,
    objectFit: 'cover',
  },

  pv5: {
    paddingVertical: 5,
  },
})
