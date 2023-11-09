import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput, Button, Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const handleSignUp = () => {
    navigation.navigate("Login");
  };
  return (
    <ScrollView style={{ flex: 1, paddingTop: 50, backgroundColor: "white" }}>
      <View>
        <Image
          style={{
            alignSelf: "center",
            marginBottom: 10,
            width: 80,
            height: 80,
          }}
          source={require("../../assets/lock-icon.png")}
        />
        <Text style={styles.SignIn}>Sign up</Text>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <TextInput
            //   onChangeText={(e) => setEmail(e)}
            mode="outlined"
            label="First Name"
            placeholder="First name"
            style={{ width: 175, marginRight: 30 }} // Adjust the width as per your requirement
            keyboardType="email-address"
          />
          <TextInput
            //   onChangeText={(e) => setEmail(e)}
            mode="outlined"
            label="Last Name"
            placeholder="Last name"
            style={{ width: 175 }} // Adjust the width as per your requirement
            keyboardType="email-address"
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TextInput
            //   onChangeText={(e) => setEmail(e)}
            mode="outlined"
            label="Email"
            placeholder="Please Enter your email address"
            style={{ width: 380, marginBottom: 15 }} // Adjust the width as per your requirement
            keyboardType="email-address"
          />
          <TextInput
            //   onChangeText={(e) => setEmail(e)}
            mode="outlined"
            label="Phone Number"
            placeholder="Phone Number"
            style={{ width: 380, marginBottom: 15 }} // Adjust the width as per your requirement
            keyboardType="default"
          />
          <TextInput
            //   onChangeText={(e) => setEmail(e)}
            mode="outlined"
            label="Password"
            placeholder="Please Enter your password"
            style={{ width: 380, marginBottom: 15 }} // Adjust the width as per your requirement
            secureTextEntry
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => setChecked(!checked)}
        />
        <Text style={{ fontSize: 17, marginLeft: 5 }}>
          I have read and agreed to the{" "}
          <Text style={{ color: "blue" }}>Terms and Conditions</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={{
          marginLeft: 20,
          marginTop: 10,
        }}
        onPress={(e) => navigation.navigate("Login")}
      >
        <Text style={styles.forgotPasswordText}>Already have an account?</Text>
      </TouchableOpacity>
      <Button
        mode="contained"
        onPress={() => handleSignUp()}
        style={{
          width: 310,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#4285F4",
        }}
        labelStyle={{ fontSize: 18 }}
        disabled={!checked}
      >
        Sign up
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  SignIn: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    textAlign: "center",
    // lineHeight: "140%",
    // fontFamily: "Roboto, sans-serif",
    fontWeight: "600",
    marginBottom: 40,
  },
  forgotPasswordText: {
    fontSize: 15,
    color: "blue",
    textDecorationLine: "underline",
  },
});
