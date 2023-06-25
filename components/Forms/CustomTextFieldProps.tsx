import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RegularText from '../SmallText/RegularText';
import { TextInput } from 'react-native';


const CustomTextFieldProps = () => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username:'',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmpassword:'',
    },

  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <View>
       <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <RegularText> Name </RegularText>
            <TextInput
              // placeholder=''
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.textInput}
            />
          </View>
        )}
        name='firstName'
      />
      {errors.firstName && <Text>This is required.</Text>}
    </View>
  )
}

export default CustomTextFieldProps


const styles = StyleSheet.create({
  container: {
  
      top:80,
    height: '100%',
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    width: 320,
    borderRadius: 5,
    borderWidth: 2,
  },

  inputContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    },
    button: {
        top: 30,
       
    },
    bgColor: {
        backgroundColor: Colors.NavyBlue100
    }
});
