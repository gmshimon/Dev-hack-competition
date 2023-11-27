import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
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

  return (
    <ScrollView>
      <View
        style={{ paddingHorizontal: 10, paddingTop: 10, paddingBottom: 20 }}
      >
        <Searchbar
          placeholder="Search for a property"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          paddingHorizontal: 5,
        }}
      >
        {subjects.map((subject, i) => {
          return <SingleProperty key={subject.id} i={i} />;
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
