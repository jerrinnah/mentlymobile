import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Controller } from 'react-hook-form';

const CustomInput = ({
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
        <View style={{height:70, justifyContent:'space-between'}}>
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            style={[
              styles.input,
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

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: '100%',
  },
  input: {
    height: 50,
    width: 326,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems:'center'
    // marginBottom: 20,
  },
});
