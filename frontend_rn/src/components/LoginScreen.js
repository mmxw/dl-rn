// Formik x React Native example
import React from "react";

import { Button, TextInput, Text, View } from "react-native";
import { Formik } from "formik";
import style from '../styles/appStyles'
import styles from "../styles/appStyles";


const LoginScreen = () => {
  
  return (
    <Formik
      initialValues={{ username: "", password:"" }}
      onSubmit={(values) => console.log(values)}
    >
      <View style={styles.form}>
        <Text style={styles.header}>Username</Text>
        <TextInput />
        <Text style={styles.header}>Password</Text>
        <TextInput />
        <Button title="Submit" />
      </View>
    </Formik>
  );
};

export default LoginScreen;
