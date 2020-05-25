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
      <Text>USERNAME</Text>
      <Controller
        as={TextInput}
        control={control}
        name="userName"
        onChange={args => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Text>EMAIL</Text>
      <Controller
        as={TextInput}
        control={control}
        name="lastName"
        onChange={args => args[0].nativeEvent.text}
        defaultValue=""
      />
      <Text>EMAIL</Text>
      <Controller
        as={TextInput}
        control={control}
        name="email"
        onChange={args => args[0].nativeEvent.text}
        defaultValue=""
      />
      <Text>PASSWORD</Text>
      <Controller
        as={TextInput}
        control={control}
        name="password"
        onChange={args => args[0].nativeEvent.text}
        defaultValue=""
      />
      <Text>PASSWORD CONFIRMATION</Text>
      <Controller
        as={TextInput}
        control={control}
        name="passwordConfirmation"
        onChange={args => args[0].nativeEvent.text}
        defaultValue=""
      />
      <Text>GENDER</Text>
      <Controller
        as={TextInput}
        control={control}
        name="GENDER"
        onChange={args => args[0].nativeEvent.text}
        defaultValue=""
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
