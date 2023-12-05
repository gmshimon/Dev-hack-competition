import React, { useLayoutEffect, useState } from 'react'
import { Avatar, Button, Card, Text, Icon } from 'react-native-paper'
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import PaidModal from '../PaidModal/PaidModal'

export default function SingleHouse ({ index, navigation }) {
  const [visible, setVisible] = React.useState(false)
  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  const [waterPaid, setWaterPaid] = useState(false)
  const [gasPaid, setGasPaid] = useState(false)
  const [powerPaid, setPowerPaid] = useState(false)

  const property = [
    {
      coverImg: '',
      name: 'House 136',
      rent: 1600,
      address: 'jalan pendidikan 1, taman universiti, skudai, johor',
      status: ['water', 'electricity', 'assessment', 'sewerage']
    }
  ]

  const bills = [
    {
      id: 1,
      title: 'water',
      amount: '150',
      dueDate: 3,
      img: 'https://static.vecteezy.com/system/resources/previews/022/152/992/original/pure-water-icon-isolated-png.png',
      isPaid: waterPaid
    },
    {
      id: 2,
      title: 'sewerage',
      amount: '299',
      dueDate: 3,
      img: 'https://cdn-icons-png.flaticon.com/512/5847/5847766.png',
      isPaid: gasPaid
    },
    {
      id: 3,
      title: 'electricity',
      amount: '128',
      dueDate: 4,
      img: 'https://cdn-icons-png.flaticon.com/512/6778/6778937.png',
      isPaid: powerPaid
    }
  ]

  const billsData = [
    {
      id: 1,
      icon: 'https://i.ibb.co/fMcQNYz/Vector.png',
      title: 'Water',
      bill: '150',
      isPaid: waterPaid
    },
    {
      id: 2,
      icon: 'https://i.ibb.co/bbS8SpB/Fire-Icon.png',
      title: 'Gas',
      bill: '299',
      isPaid: gasPaid
    },
    {
      id: 3,
      icon: 'https://i.ibb.co/c8Nv3y3/Power-Icon.png',
      title: 'Power',
      bill: '128',
      isPaid: powerPaid
    }
  ]

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `House 136`
    })
  }, [])

  const statusButtons = status => {
    let buttons = []
    if (status.includes('water')) {
      buttons.push(
        <Button
          mode='contained'
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
          mode='contained'
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
          mode='contained'
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
          mode='contained'
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
            <Text variant='titleLarge' style={styles.p5}>
              {name}
            </Text>
            <Text variant='bodyLarge' style={styles.p5}>
              <Text style={{ color: '#0647B3' }}>MYR {rent}</Text> / month
            </Text>
            <Text
              variant='labelSmall'
              style={[styles.upperCaseText, styles.mb5]}
            >
              <Icon source='map-marker' />
              {address}
            </Text>
            <View style={styles.flexRowWrap}>{statusButtons(status)}</View>

            <View>
              {bills.map((bill, index) => (
                <Card style={styles.billCards}>
                  <View style={{ flexDirection: 'row',justifyContent:'space-between',alignItems:'center' }}>
                    {/* <View style={styles.flexRowWrap}> */}
                      <View style={styles.billLeftSection}>
                        <Image
                          style={styles.billIcons}
                          source={{ uri: bill.img }}
                        />
                        <Text variant='labelMedium' style={styles.billTitles}>
                          {bill.title}
                        </Text>
                      </View>
                      <View style={styles.billMiddleSection} flex={1}>
                        <Text variant='bodyMedium' style={{ color: '#0647B3' }}>
                          MYR {bill.amount}
                        </Text>
                        <Text variant='bodySmall'>
                          Due in {bill.dueDate} days
                        </Text>
                      </View>
                    {/* </View> */}
                    <View>
                      {!bill.isPaid ? (
                        <Button
                          icon='google'
                          size={30}
                          mode="elevated"
                          labelStyle={{ fontSize: 20,color:'black' }}
                          style={{
                            marginRight:5,
                            backgroundColor: '#ffff',
                            shadowColor: 'black',
                            shadowOffset: {
                              width: 0,
                              height: 2
                            },
                            shadowOpacity: 0.3,
                            elevation: 8
                          }}
                          onPress={() => {
                            showModal()
                            if (bill.id == 1) setWaterPaid(true)
                            else if (bill.id == 2) setGasPaid(true)
                            else if (bill.id == 3) setPowerPaid(true)
                          }}
                        >
                          Pay
                        </Button>
                      ) : (
                        <View
                          style={{ flexDirection: 'row', alignItems: 'center',paddingRight:20 }}
                        >
                          <Icon source='check' color='green' size={25} />
                          <Text
                            style={{
                              fontSize: 20,
                               marginLeft:5
                            }}
                          >
                            Paid
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                </Card>
              ))}
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
      <PaidModal visible={visible} hideModal={hideModal}/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },

  blueButton: {
    backgroundColor: '#4285F4'
  },

  redButton: {
    backgroundColor: '#EA4335'
  },

  greenButton: {
    backgroundColor: '#34A853'
  },

  yellowButton: {
    backgroundColor: '#FBBC05'
  },

  upperCaseText: {
    textTransform: 'uppercase'
  },

  flexRowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  coverImages: {
    marginHorizontal: 6,
    borderRadius: 4,
    marginBottom: 6,
    minWidth: '46%',
    textAlign: 'center'
  },

  coverContainer: {
    justifyContent: 'space-between'
  },

  m5: {
    margin: 5
  },

  mb5: {
    marginBottom: 5
  },

  p5: {
    padding: 5
  },

  billIcons: {
    width: 64,
    height: 64
  },

  billCards: {
    marginVertical: 8,
    backgroundColor: '#fff'
  },

  billTitles: { textTransform: 'capitalize' },

  billLeftSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    marginVertical: 12,
    borderRightWidth: 1.5
  },

  billMiddleSection: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
    rowGap: 8
  },

  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    marginTop: 5
  },
  images: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 5
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  }
})
