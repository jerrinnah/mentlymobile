import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import MidButton from '../Buttons/MidButton';
import CustomInput from './CustomInput';

const onSignInPressed = () => {};

const Form = () => {

  const { control, handleSubmit } = useForm();

  const onSignInPressed = data => {
    console.log(data);
    // 1- validate user
    //2 - navigate to dashboard
  };

  return (
    <View style={styles.mainContainer}>
      {/* <Text>Form</Text>
      <Text>Form</Text>
      <Text>Form</Text>
      <Text>Form</Text>
      <Text>Form</Text> */}
      <Text>Form</Text>

      {/* <Controller
              control={control}
              name="username"
              render={({ field: { value, onChange, onBlur } }) => <TextInput value={value} onChangeText={onChange} onBlur={onBlur } placeholder={'usernames'} />}
          /> */}

      <CustomInput
              name="username"
              placeholder="username"
              control={control} secureTextEntry={null}        
      />

      <CustomInput
        name="password"
        placeholder="password"
        control={control}
        secureTextEntry
      />
    

      <MidButton onPress={handleSubmit(onSignInPressed)}>
        <Text>Submit</Text>
      </MidButton>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 30,
  },
});
