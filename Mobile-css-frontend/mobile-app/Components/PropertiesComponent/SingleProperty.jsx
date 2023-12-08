import React, { useState } from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SingleProperty({ i,cardWidth }) {
  const navigation = useNavigation()
  const scalingFactor = cardWidth / 200;

  return (
    <Card
      style={{
        width: cardWidth,
        marginTop: 16,
        marginLeft: i % 2 !== 0 ? 10 : 0,
        backgroundColor:'white'
      }}
      onPress={()=>{navigation.navigate('singleHouse')}} 
    >
      <Card.Cover style={{width:cardWidth}} source={{ uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/80813528.jpg?k=805ca38b6b7e46a0dec0d86597677378516a2e3239b9f17bc4f62b65e426e85e&o=&hp=1" }} />
      <Card.Content>
        <View style={{ marginTop: 5 }}>
          <Text variant="titleLarge">House 136</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{
                color: "blue",
                fontSize: 18*scalingFactor,
              }}
              variant="bodyMedium"
            >
              MYR 2300 /
            </Text>
            <Text
              style={{
                fontSize: 18*scalingFactor,
              }}
              variant="bodyMedium"
            >
              {" "}
              month
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Ionicons name="map" size={24} />
            <View style={{ marginLeft: 10, width: 150 }}>
              <Text style={{ lineHeight: 25, fontSize: 12*scalingFactor }}>
                JALAN PENDIDKAN 1, TAMANI UNIVERSITI, SKUDAI, JOHOR
              </Text>
            </View>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}
const styles = StyleSheet.create({});
