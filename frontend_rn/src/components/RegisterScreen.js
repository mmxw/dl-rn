import React from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles from "../styles/appStyles";

export default function RegisterScreen() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => Alert.alert(
    "Form Data",
    JSON.stringify(data),
  );

  return (
    <View style={styles.form}>
      <Text style={styles.header}>Username</Text>
      <Controller
        as={TextInput}
        control={control}
        name="userName"
        onChange={args => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
        style={styles.textinput}
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Text style={styles.header}>Email</Text>
      <Controller
        as={TextInput}
        control={control}
        name="lastName"
        onChange={args => args[0].nativeEvent.text}
        defaultValue=""
        style={styles.textinput}
      />

      <Text style={styles.header}>Password</Text>
      <Controller
        as={TextInput}
        control={control}
        name="password"
        onChange={args => args[0].nativeEvent.text}
        defaultValue=""
        style={styles.textinput}
        secureTextEntry={true}
      />
      <Text style={styles.header}>Password Confirmation</Text>
      <Controller
        as={TextInput}
        control={control}
        name="passwordConfirmation"
        onChange={args => args[0].nativeEvent.text}
        defaultValue=""
        style={styles.textinput}
        secureTextEntry={true}
      />
      <Text style={styles.header}>Gender</Text>
      <Controller
        as={TextInput}
        control={control}
        name="GENDER"
        onChange={args => args[0].nativeEvent.text}
        defaultValue=""
        style={styles.textinput}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} style={styles.btn}/>
    </View>
  );
}
