import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function StartPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.house}
          source={require('../../assets/lock-icon.png')}
        />
        <Text style={styles.logoText}>Bills Go</Text>
      </View>
      <Text style={styles.welcomeText}>
        All in One Utility Bill Payment and Collection App
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("Login")}
        >
          Get Started
        </Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.welcomeImage}
          resizeMode="cover"
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/sqjix0bbx5-54779%3A25140?alt=media&token=0468953c-3d41-4485-8520-00976cdf3021",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
    width: "101%",
  },
  logo: {
    alignItems: "center",
    marginVertical: 10,
  },
  house: {
    width: 85,
            height: 116,
    marginBottom: 4,
  },
  logoText: {
    color: "#013668",
    fontSize: 25,
    // fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  welcomeText: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    // fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.1,
    marginBottom: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#4285f4",
    paddingVertical: 10,
    width: 250,
    borderRadius: 5,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    // fontFamily: "Roboto-Regular",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.1,
  },
  welcomeImage: {
    marginTop: 10,
    flex: 1,
  },
});
