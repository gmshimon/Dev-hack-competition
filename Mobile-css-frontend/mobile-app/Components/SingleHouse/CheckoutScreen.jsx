import React, { useState, useEffect } from 'react'
import { Button, Alert } from 'react-native'
import { useStripe } from '@stripe/stripe-react-native'
import { Screen } from 'react-native-screens'
import { StripeProvider } from '@stripe/stripe-react-native'

export default function CheckoutScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe()
  const [loading, setLoading] = useState(false)

  //   const initializePaymentSheet = async () => {
  //     try {
  //       const { error } = await initPaymentSheet({
  //         merchantDisplayName: 'Example, Inc.',
  //         customerId: '123',

  //         allowsDelayedPaymentMethods: true,
  //         defaultBillingDetails: {
  //           name: 'Jane Doe',
  //         },
  //       })

  //       console.log(error)

  //       if (!error) {
  //         setLoading(true)
  //       } else {
  //         // Handle initialization error
  //         console.error('Error initializing payment sheet:', error)
  //       }
  //     } catch (error) {
  //       console.error('Error initializing payment sheet:', error)
  //     }
  //   }

  //   const openPaymentSheet = async () => {
  //     try {
  //       const { error } = await presentPaymentSheet()

  //       if (error) {
  //         Alert.alert(`Error code: ${error.code}`, error.message)
  //       } else {
  //         Alert.alert('Success', 'Your order is confirmed!')
  //       }
  //     } catch (error) {
  //       console.error('Error opening payment sheet:', error)
  //     }
  //     console.log(error)
  //   }

  //   useEffect(() => {
  //     initializePaymentSheet() // Initialize Payment Sheet on component mount
  //   }, [])

  const initializePaymentSheet = () => {
    initPaymentSheet({
      merchantDisplayName: 'Example, Inc.',
      customerId: '123',

      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      },
    })
  }

  const openPaymentSheet = () => {
    try {
      presentPaymentSheet()

      //   if (error) {
      //     Alert.alert(`Error code: ${error.code}`, error.message)
      //   } else {
      //     Alert.alert('Success', 'Your order is confirmed!')
      //   }
    } catch (error) {
      console.error('Error opening payment sheet:', error)
    }
  }

  useEffect(() => {
    initializePaymentSheet() // Initialize Payment Sheet on component mount
  }, [])

  return (
    <StripeProvider publishableKey="pk_test_51OKzqkAoq1C610ylRVHgb1RiYHgP8KHrDTa4oPrL7KLYgGEEOo0R5koniCGYWD4ybTUkG8vUJRaG54zJaU1eGpid00D5fYmMSF">
      <Screen>
        <Button variant="primary" title="Checkout" onPress={openPaymentSheet} />
      </Screen>
    </StripeProvider>
  )
}
