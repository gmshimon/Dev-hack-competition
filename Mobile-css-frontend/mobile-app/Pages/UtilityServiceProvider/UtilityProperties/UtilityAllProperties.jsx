import React, { useState } from 'react'
import { Searchbar, Button } from 'react-native-paper'
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import UtilitySingleProperty from '../../../Components/UtilityProviderComponents/PropertiesComponent/UtilitySingleProperty'

export default function AllProperties() {
  const navigation = useNavigation()
  const [searchQuery, setSearchQuery] = useState('')
  const onChangeSearch = (query) => setSearchQuery(query)
  const onFABPress = () => {
    // Handle FAB press, e.g., navigate to another screen or perform an action
    console.log('FAB Pressed!')
  }
  const subjects = [
    { id: 1, name: 'Card 1' },
    { id: 2, name: 'Card 2' },
    { id: 3, name: 'Card 3' },
    { id: 4, name: 'Card 4' },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Searchbar
          style={{ backgroundColor: 'white' }}
          placeholder="Search for a property"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView>
        <View style={styles.propertyContainer}>
          {subjects.map((subject) => (
            <View style={styles.propertyCard}>
              <UtilitySingleProperty key={subject.id} />
            </View>
          ))}
        </View>
      </ScrollView>
      <Button
        style={styles.addPropertyButton}
        icon="plus"
        mode="elevated"
        buttonColor="#4285F4"
        textColor="#fff"
        onPress={() => {
          navigation.navigate('addProperty')
        }}
      >
        Add Property
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  addPropertyButton: {
    position: 'absolute',
    marginHorizontal: 8,
    marginVertical: 16,
    right: 0,
    bottom: -8,
    width: 8 * 20,
  },
  flexRowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  propertyContainer: {
    marginHorizontal: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  propertyCard: {
    maxWidth: '48%',
    marginBottom: 16,
  },
})
