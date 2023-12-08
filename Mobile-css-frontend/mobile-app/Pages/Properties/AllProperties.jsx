import React, { useState } from "react";
import { Searchbar, FAB } from "react-native-paper";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SingleProperty from "../../Components/PropertiesComponent/SingleProperty";

export default function AllProperties() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const onFABPress = () => {
    // Handle FAB press, e.g., navigate to another screen or perform an action
    console.log("FAB Pressed!");
  };
  const subjects = [
    { id: 1, name: "Card 1" },
    { id: 2, name: "Card 2" },
    { id: 3, name: "Card 3" },
    { id: 4, name: "Card 4" },
  ];
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth - 20) / 2; 
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Searchbar
        style={{backgroundColor: "white"}}
          placeholder="Search for a property"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}> 
          {subjects.map((subject, i) => (
          <SingleProperty key={subject.id} i={i} cardWidth={cardWidth}/>
          ))}
        </View>
      </ScrollView>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => {
          navigation.navigate("addProperty");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 5,
    paddingBottom: 40,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: -10,
    backgroundColor:'white'
  },
});
