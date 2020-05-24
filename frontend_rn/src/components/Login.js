import React from "react";
import { View, Text, Button } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View>
      <Button
      title="Login"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
    </View>
  );
};

export default Login;
