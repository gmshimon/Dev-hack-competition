import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  TextInput,
  Button,
  Menu,
  Divider,
  Provider,
  ProgressBar,
  MD3Colors,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ExpenseChart from "./ExpenseChart";
export default function CustomerExpenses() {
  const navigation = useNavigation();

  return (
    <View style={styles.box}>
      <ExpenseChart />
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    marginBottom: 20,
    backgroundColor: "white",
    // marginHorizontal: 8,
    borderRadius: 5,
    paddingVertical: 20,
    paddingRight:15
  },
});
