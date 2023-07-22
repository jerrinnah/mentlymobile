import {
  TextInputProps,
  TextInput,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';
import React from 'react';

interface IProps {
   
  required?: boolean;
  name: string;
  placeholder: string;
  isPassword?: boolean;
  inputTitle: string;
}

export const CustomTextInput = (props: IProps & TextInputProps) => {
  const [show, setShow] = React.useState(false);

  // form context
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: props.required || false,
        }}
        
        name={props.name}
        render={({ field: { onChange, value } }) => {
          return (
            <View>
              <Text style={{ paddingBottom: 7 }}>{props.inputTitle}</Text>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  width: '100%',
                  height: 50,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
              >
                <TextInput
                  {...props}
                  style={{ flex: 1 }}
                  placeholder={props.placeholder}
                  value={value}
                  secureTextEntry={props.isPassword ? !show : false}
                   onChangeText={onChange}
                          
                />

                {props.isPassword && (
                  <Text
                    style={{ fontSize: 12, marginTop: 5 }}
                    onPress={() => setShow(prev => !prev)}
                  >
                    {show ? 'Hide' : 'Show'}
                  </Text>
                )}
              </View>
            </View>
          );
        }}
      />
      {errors[props.name] && (
        <Text style={{ color: 'red' }}>
          {errors[props.name]?.message as any}
        </Text>
      )}
    </View>
  );
};

const Style = StyleSheet.create({
  parent: {
    width: '100%',
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textInput: {
    width: '100%',
    marginBottom: 10,
  },
});

// export CustomTextInput
