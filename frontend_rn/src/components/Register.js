import React from "react";
import { View, Text, Button } from "react-native";

const Register = ({ navigation }) => {
  return (
    <View>
      <Button
      title="Register"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
    </View>
  );
};

export default Register;
