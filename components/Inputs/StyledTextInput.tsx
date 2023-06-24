// import React, { FunctionComponent } from 'react';
// import styled from 'styled-components/native'
// import Colors from '../../utils/Colors';


// const InputWrapper = styled.View`
//     width: 100%;

// `

// const StyledView = styled.View`
// flex: 1;
// padding: 25px;
// padding-top:40;
// background-color: ${Colors.Grey200};
// justify-content: center;
// align-items: center;
// `;

// import { InputProps } from './types';

// const StyledTextInput: FunctionComponent<InputProps> = (props) => { 
//     return <InputWrapper>
            
//         </InputWrapper>
// };


// export default StyledTextInput;
 


import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Colors from '../../utils/Colors';
import { useForm, Controller } from 'react-hook-form';

const StyledInput = ({ name, control, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>

      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
          />
        )}
      
      />
    </View>
  );
};

export default StyledInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.White,
  },
  input: {
    borderColor: Colors.Orange400,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});
