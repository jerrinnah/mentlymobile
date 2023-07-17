import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Controller } from 'react-hook-form';

const CustomOtpInput = ({
  control,
  name,
  placeholder,
  secureTextEntry,
  rules = {},
  keyboardType,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View style={{height:55, width:55,  borderWidth:2, borderRadius:10, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
          <TextInput
            
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            style={[styles.textInput,
              { borderColor: error ? 'red' : 'transparent' },
            ]}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
          />
          {
            error && 
            <Text style={{color:'red', alignSelf:'stretch', padding:5, bottom:4,}}>{error.message || 'Error'}</Text>

           }
          
        </View>
      )}
    />
  );
};

export default CustomOtpInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: '100%',
  },
  textInput: {
    color: 'black',
    fontSize: 25,
  }
 
});
