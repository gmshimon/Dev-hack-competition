import React, { useLayoutEffect, useState } from 'react'
import { Avatar, Button, Card, Text, Icon } from 'react-native-paper'
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import PaidModal from '../PaidModal/PaidModal'

export default function SingleHouse ({ index,navigation }) {

  const [visible, setVisible] = React.useState(false)
  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  const [waterPaid, setWaterPaid] = useState(false)
  const [gasPaid, setGasPaid] = useState(false)
  const [powerPaid, setPowerPaid] = useState(false)
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

  return (
    <ScrollView>
      <Card
        style={{
          marginHorizontal: 5,
          marginTop: 20
        }}
      >
        {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.images}
            source={{
              uri: 'https://picsum.photos/700'
            }}
          />
          <Image
            style={styles.images}
            source={{
              uri: 'https://picsum.photos/700'
            }}
          />
        </View>

        <Card.Content>
          <Text
            style={{
              marginTop: 10
            }}
            variant='titleLarge'
          >
            House 136
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text
              style={{
                color: 'blue',
                fontSize: 18
              }}
              variant='bodyMedium'
            >
              MYR 2300 /
            </Text>
            <Text
              style={{
                fontSize: 18
              }}
              variant='bodyMedium'
            >
              {' '}
              month
            </Text>
          </View>
          <View style={styles.addressContainer}>
            <Ionicons name='map' size={24} />
            <View style={{ marginLeft: 10, width: 350 }}>
              <Text style={{ lineHeight: 25, fontSize: 12 }}>
                JALAN PENDIDKAN 1, TAMANI UNIVERSITI, SKUDAI, JOHOR
              </Text>
            </View>
          </View>
          {/* Payment Container */}
          <View style={{ marginTop: 20 }}>
            {billsData.map(obj => (
              <View
                key={obj.id}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 20
                }}
              >
                {/* right side details */}
                <View
                  style={{
                    flexDirection: 'row'
                  }}
                >
                  <View
                    style={{
                      borderRightWidth: 2,
                      width: 60
                    }}
                  >
                    <Image
                      style={{ width: 50, height: 50, resizeMode: 'contain' }}
                      source={{ uri: obj.icon }}
                    />
                    <Text style={{ marginLeft: 5 }}>{obj.title}</Text>
                  </View>
                  <View
                    style={{
                      marginLeft: 20
                    }}
                  >
                    <Text style={{ color: 'blue', marginBottom: 10 }}>
                      MYR {obj.bill}
                    </Text>
                    <Text>Due in 3 days</Text>
                  </View>
                </View>

                {/* paid button  */}
                <View>
                  {!obj.isPaid ? (
                    <Button
                      icon='google'
                      mode='contained-tonal'
                      style={{
                        backgroundColor: 'white',
                        shadowColor: 'black',
                        shadowOffset: {
                          width: 0,
                          height: 2
                        },
                        shadowOpacity: 0.3,
                        elevation: 5
                      }}
                      onPress={() => {
                        showModal()
                        if (obj.id == 1) setWaterPaid(true)
                        else if (obj.id == 2) setGasPaid(true)
                        else if (obj.id == 3) setPowerPaid(true)
                      }}
                    >
                      Pay
                    </Button>
                  ) : (
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <Icon source='check' color='green' size={25} />
                      <Text
                        style={{
                          fontSize: 20
                        }}
                      >
                        Paid
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>
        </Card.Content>
      </Card>
      <PaidModal visible={visible} hideModal={hideModal}/>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
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
