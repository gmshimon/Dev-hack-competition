import React from 'react'
import { View } from 'react-native'
import {
  Modal,
  Portal,
  Text,
  Button,
  PaperProvider,
  Icon
} from 'react-native-paper'

export default function PaidModal ({ visible, hideModal }) {
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    height: 400,
    marginHorizontal: 50,
    borderRadius: 10
  }
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <View
          style={{
            alignItems: 'center'
          }}
        >
          <View>
            <View
              style={{
                backgroundColor: '#34A853',
                width: 50,
                height: 50,
                borderRadius: 25,
                marginBottom:20
              }}
            >
              <Icon source='check' color='white' size={50} />
            </View>
          </View>
          <Text style={{ textAlign: 'center', fontSize: 20 }}>
            Payment Successful
          </Text>
        </View>
      </Modal>
    </Portal>
  )
}
