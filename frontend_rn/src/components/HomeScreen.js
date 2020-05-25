import React from "react";

import { View, Text, Image, Button } from "react-native";

import styles from '../styles/appStyles'
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.home}>
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
    </ScrollView>
  );
};

export default HomeScreen;
