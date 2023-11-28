import React, { useState } from "react";
import { TextInput, Button, Icon, MD3Colors } from "react-native-paper";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import MainContainer from "../Dashboard/MainContainer";

export default function AddProperty() {
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [unit, setUnit] = useState("");

  const handleAddAddress = () => {
    console.log("district: ", district);
    console.log("Street: ", street);
    console.log("Unit: ", unit);
  };
  return (
    <ScrollView style={{ paddingTop: 20, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 25, marginBottom: 10 }}>Add a Property</Text>
      <View
        style={{
          backgroundColor: "white",
          height: 500,
          borderRadius: 10,
          padding: 10,
          alignItems: "center",
        }}
      >
        <TextInput
          onChangeText={(e) => setDistrict(e)}
          mode="outlined"
          label="Region/City/District"
          style={{ width: 350, borderRadius: 5, marginBottom: 20, height: 60 }} // Adjust the width as per your requirement
          keyboardType="email-address"
        />
        <TextInput
          onChangeText={(e) => setStreet(e)}
          mode="outlined"
          label="Street/Building Name"
          style={{ width: 350, borderRadius: 5, marginBottom: 20, height: 60 }} // Adjust the width as per your requirement
          keyboardType="email-address"
        />
        <TextInput
          onChangeText={(e) => setUnit(e)}
          mode="outlined"
          label="Unit/Floor"
          style={{ width: 350, borderRadius: 5, marginBottom: 20, height: 60 }} // Adjust the width as per your requirement
          keyboardType="email-address"
        />
        <Button
          mode="contained"
          onPress={() => handleAddAddress()}
          style={{
            width: 310,
            alignItems: "center",
            backgroundColor: "#4285F4",
          }}
          labelStyle={{ fontSize: 18 }}
        >
          Add Address
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
