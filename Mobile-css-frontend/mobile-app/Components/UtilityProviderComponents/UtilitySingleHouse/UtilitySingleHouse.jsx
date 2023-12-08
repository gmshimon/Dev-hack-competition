import React, { useLayoutEffect, useState } from 'react'
import { Avatar, Button, Card, Text, Icon } from 'react-native-paper'
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function UtilitySingleHouse({ index, navigation, route }) {
  const title = route.params?.title
  const [visible, setVisible] = React.useState(false)
  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  console.log(title)
  const [waterDisconnected, setWaterDisconnected] = useState(false)
  const [sewerageDisconnected, setSewerageDisconnected] = useState(false)
  const [powerDisconnected, setPowerDisconnected] = useState(false)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title || 'House',
    })
  }, [title])

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
      id: 1,
      title: 'water',
      amount: '150',
      dueDate: 3,
      img: 'https://static.vecteezy.com/system/resources/previews/022/152/992/original/pure-water-icon-isolated-png.png',
      isDisconnected: waterDisconnected,
    },
    {
      id: 2,
      title: 'sewerage',
      amount: '299',
      dueDate: 3,
      img: 'https://cdn-icons-png.flaticon.com/512/5847/5847766.png',
      isDisconnected: sewerageDisconnected,
    },
    {
      id: 3,
      title: 'electricity',
      amount: '128',
      dueDate: 4,
      img: 'https://cdn-icons-png.flaticon.com/512/6778/6778937.png',
      isDisconnected: powerDisconnected,
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

  const { coverImg, name, rent, address, status } = property[0]
  return (
    // <SafeAreaView>
    <ScrollView>
      <Card mode={'elevated'} style={styles.container}>
        <Card.Cover
          source={{
            uri: 'https://apicms.thestar.com.my/uploads/images/2023/06/23/2141370.jpg',
          }}
        />
        <Card.Content>
          <Text variant="titleLarge" style={styles.p5}>
            {title || name}
          </Text>
          <Text variant="bodyLarge" style={styles.p5}>
            <Text style={{ color: '#0647B3' }}>MYR {rent}</Text> / month
          </Text>
          <Text variant="labelSmall" style={[styles.upperCaseText, styles.mb5]}>
            <Icon source="map-marker" />
            {address}
          </Text>
          <View style={styles.flexRowWrap}>{statusButtons(status)}</View>

          <View>
            {bills.map((bill, index) => (
              <Card style={styles.billCards}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {/* <View style={styles.flexRowWrap}> */}
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
                    <Text variant="bodySmall">Due in {bill.dueDate} days</Text>
                  </View>

                  {!bill.isDisconnected ? (
                    <View style={styles.disconnectButton}>
                      <Button
                        icon="close"
                        buttonColor="#EA4335"
                        textColor="#fff"
                        mode="text"
                        onPress={() => {
                          showModal()
                          if (bill.id == 1) setWaterDisconnected(true)
                          else if (bill.id == 2) setSewerageDisconnected(true)
                          else if (bill.id == 3) setPowerDisconnected(true)
                        }}
                      >
                        Disconnect
                      </Button>
                    </View>
                  ) : (
                    <View style={styles.disconnected}>
                      <Button mode="text" icon="close" textColor="#EA4335">
                        Disconnected
                      </Button>
                    </View>
                  )}
                </View>
              </Card>
            ))}
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
    // </SafeAreaView>
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

  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  images: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  disconnectButton: {
    paddingRight: 16,
  },
  disconnected: {
    paddingRight: 8,
  },
})
