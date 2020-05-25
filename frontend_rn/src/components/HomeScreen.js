import React from "react";

import { View, Text, Image, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 150,
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 200,
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container1}>
        <Image
          source={require("../assets/logo1.png")}
          style={{ height: 250, width: 250, resizeMode: "stretch" }}
        />
        <Text style={{ fontSize: 20, padding: 5 }}>we are what we eat</Text>
      </View>
      <View style={styles.container2}>
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
    </>
  );
};

export default HomeScreen;
