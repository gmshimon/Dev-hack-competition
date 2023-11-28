import React, { useState } from "react";
import { Searchbar, FAB } from "react-native-paper";
import { StyleSheet, View, ScrollView } from "react-native";
import SingleProperty from "../../Components/PropertiesComponent/SingleProperty";

const subjects = [
  { id: 1, name: "Card 1" },
  { id: 2, name: "Card 2" },
  { id: 3, name: "Card 3" },
  { id: 4, name: "Card 4" },
];

export default function PropertiesScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const onFABPress = () => {
    // Handle FAB press, e.g., navigate to another screen or perform an action
    console.log("FAB Pressed!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Searchbar
          placeholder="Search for a property"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}>
          {subjects.map((subject, i) => (
            <SingleProperty key={subject.id} i={i} />
          ))}
        </View>
      </ScrollView>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => alert("Button Clicked")}
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
  },
});
