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
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/sqjix0bbx5-54719%3A24918?alt=media&token=7ee6d3e0-f472-435d-a37c-c8996f4c0087",
          }}
        />
        <Text style={styles.logoText}>Lorem Ipsu</Text>
      </View>
      <Text style={styles.welcomeText}>
        Welcome to your Community Application
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
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
    width: 64,
    height: 64,
    marginBottom: 4,
  },
  logoText: {
    color: "rgba(52, 168, 83, 1)",
    fontSize: 25,
    // fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  welcomeText: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    // fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.1,
    marginBottom: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgba(52, 168, 83, 1)",
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
