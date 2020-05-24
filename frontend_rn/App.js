import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import "react-native-gesture-handler";
import Login from "./src/components/Login";
import Register from "./src/components/Register";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <View style={styles.container1}>
        <Image
          source={require("./src/assets/logo1.png")}
          style={{ height: 250, width: 250, resizeMode: "stretch" }}
        />
        <Text style={{ fontSize: 20, padding: 5 }}>we are what we eat</Text>
      </View>
      <View style={styles.container2}>
        <Register />
        <Login />
      </View>
    </>
  );
}

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
