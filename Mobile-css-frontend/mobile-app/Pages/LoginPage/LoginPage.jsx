import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput, Button, Icon, MD3Colors } from "react-native-paper";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSignIn = () => {
    console.log("email: ", email);
    console.log("Password: ", pass);
  };
  return (
    <ScrollView style={{ flex: 1, paddingTop: 60, backgroundColor: "white" }}>
      <View>
        <Image source={require("../../assets/lock-icon.png")} />
        <Text style={styles.SignIn}>Sign In</Text>
      </View>
      <View style={styles.textContainer}>
        <TextInput
          onChangeText={(e) => setEmail(e)}
          mode="outlined"
          label="Email"
          placeholder="Please Enter your email address"
          style={{ width: 310 }} // Adjust the width as per your requirement
          keyboardType="email-address"
        />
        <TextInput
          onChangeText={(e) => setPass(e)}
          mode="outlined"
          label="Password"
          placeholder="Please Enter your password"
          style={{ width: 310, marginVertical: 30 }} // Adjust the width as per your requirement
          secureTextEntry
        />
        <Button
          mode="contained"
          onPress={() => handleSignIn()}
          style={{ width: 310, alignItems: "center" }}
        >
          Sign in
        </Button>
      </View>
      <View style={styles.lastContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>Don't have an account?Sign up</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  LockIcon: {
    width: 48,
    height: 48,
    marginRight: 8,
  },
  textContainer: {
    alignItems: "center",
  },
  SignIn: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    textAlign: "center",
    // lineHeight: "140%",
    // fontFamily: "Roboto, sans-serif",
    fontWeight: "600",
    marginBottom: 40,
  },
  lastContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 20,
  },
  forgotPasswordText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  signUpText: {
    color: "blue",
    textDecorationLine: "underline",
    marginLeft: 25,
  },
});
