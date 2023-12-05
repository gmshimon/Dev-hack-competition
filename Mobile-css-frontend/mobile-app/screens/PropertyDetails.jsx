import { useState } from 'react'
import { Avatar, Button, Card, Text, Icon, MD3Colors } from 'react-native-paper'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const property = [
  {
    coverImg: '',
    name: 'House 136',
    rent: 1600,
    address: 'jalan pendidikan 1, taman universiti, skudai, johor',
    status: ['water', 'electricity', 'assessment', 'sewerage'],
  },
]

const bills = [
  {
    title: 'water',
    amount: '150',
    dueDate: 3,
    img: 'https://static.vecteezy.com/system/resources/previews/022/152/992/original/pure-water-icon-isolated-png.png',
  },
  {
    title: 'sewerage',
    amount: '299',
    dueDate: 3,
    img: 'https://cdn-icons-png.flaticon.com/512/5847/5847766.png',
  },
  {
    title: 'electricity',
    amount: '128',
    dueDate: 4,
    img: 'https://cdn-icons-png.flaticon.com/512/6778/6778937.png',
  },
]

const statusButtons = (status) => {
  let buttons = []
  if (status.includes('water')) {
    buttons.push(
      <Button
        mode="contained"
        uppercase={true}
        style={[styles.blueButton, styles.m5]}
      >
        water
      </Button>
    )
  }
  if (status.includes('electricity')) {
    buttons.push(
      <Button
        mode="contained"
        uppercase={true}
        style={[styles.greenButton, styles.m5]}
      >
        electricity
      </Button>
    )
  }
  if (status.includes('sewerage')) {
    buttons.push(
      <Button
        mode="contained"
        uppercase={true}
        style={[styles.redButton, styles.m5]}
      >
        sewerage
      </Button>
    )
  }
  if (status.includes('assessment')) {
    buttons.push(
      <Button
        mode="contained"
        uppercase={true}
        style={[styles.yellowButton, styles.m5]}
      >
        assessment
      </Button>
    )
  }
  return buttons
}

const PropertyDetails = () => {
  const { coverImg, name, rent, address, status } = property[0]

  return (
    <SafeAreaView>
      <ScrollView>
        <Card mode={'elevated'} style={styles.container}>
          <View style={[styles.flexRowWrap, styles.coverContainer]}>
            <Card.Cover
              source={{ uri: 'https://picsum.photos/700' }}
              style={styles.coverImages}
            />
            <Card.Cover
              source={{ uri: 'https://picsum.photos/700' }}
              style={styles.coverImages}
            />
          </View>
          <Card.Content>
            <Text variant="titleLarge" style={styles.p5}>
              {name}
            </Text>
            <Text variant="bodyLarge" style={styles.p5}>
              <Text style={{ color: '#0647B3' }}>MYR {rent}</Text> / month
            </Text>
            <Text
              variant="labelSmall"
              style={[styles.upperCaseText, styles.mb5]}
            >
              <Icon source="map-marker" />
              {address}
            </Text>
            <View style={styles.flexRowWrap}>{statusButtons(status)}</View>

            <View>
              {bills.map((bill, index) => (
                <Card style={styles.billCards}>
                  <View style={styles.flexRowWrap}>
                    <View style={styles.billLeftSection}>
                      <Image
                        style={styles.billIcons}
                        source={{ uri: bill.img }}
                      />
                      <Text variant="labelMedium" style={styles.billTitles}>
                        {bill.title}
                      </Text>
                    </View>
                    <View style={styles.billMiddleSection} flex={1}>
                      <Text variant="bodyMedium" style={{ color: '#0647B3' }}>
                        MYR {bill.amount}
                      </Text>
                      <Text variant="bodySmall">
                        Due in {bill.dueDate} days
                      </Text>
                    </View>
                  </View>
                </Card>
              ))}
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
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
    marginHorizontal: 6,
    borderRadius: 4,
    marginBottom: 6,
    minWidth: '46%',
    textAlign: 'center',
  },

  coverContainer: {
    justifyContent: 'space-between',
  },

  m5: {
    margin: 5,
  },

  mb5: {
    marginBottom: 5,
  },

  p5: {
    padding: 5,
  },

  billIcons: {
    width: 64,
    height: 64,
  },

  billCards: {
    marginVertical: 8,
    backgroundColor: '#fff',
  },

  billTitles: { textTransform: 'capitalize' },

  billLeftSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    marginVertical: 12,
    borderRightWidth: 1.5,
  },

  billMiddleSection: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
    rowGap: 8,
  },
})

export default PropertyDetails
