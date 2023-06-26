import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import React from 'react';
import BigText from '../../../components/SmallText/BigText';
import Colors from '../../../utils/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import RegularText from '../../../components/SmallText/RegularText';
import { Controller, useForm } from 'react-hook-form';
import RegularButton from '../../../components/Buttons/RegularButton';

const ForgetPassword = () => {
  const nav = useNavigation<any>();

  const onPressHandler = () => {
    nav.navigate('LogIn');
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
     
    },
  });
    
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Pressable onPress={onPressHandler} style={styles.backbtn}>
          <Image
            style={styles.arrow}
            source={require('../../../res/icons/arrow-back.png')}
          />
        </Pressable>

        <BigText style={styles.title}>Forgot Password</BigText>
      </View>

          <View style={styles.infoContainer}>
          <RegularText style={styles.passwordInfo}>
      Please enter your email address to reset your password
          </RegularText>
      </View>
          
          <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <RegularText>Email Address</RegularText>
              <TextInput
                // placeholder="First name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.textInput}
              />
            </View>
          )}
          name="email"
        />
          {errors.email && <Text>Username required.</Text>}
          <RegularButton style={styles.submitButton}> Send</RegularButton>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    top: 80,
    height: '100%',
        alignItems: 'center',
    paddingLeft:20,
    paddingRight:20,
  },
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: 'red',
    padding: 20,
    justifyContent: 'flex-start',
  },
  backbtn: {
    height: 40,
    width: 40,
    borderRadius: 5,
    backgroundColor: Colors.NavyBlue400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    height: 30,
    width: 30,
  },
  title: {
    paddingLeft: 30,
    },
  
    textInput: {
        paddingLeft: 10,
        height: 50,
        width: 320,
        borderRadius: 5,
        borderWidth: 2,
        color: Colors.Grey200,
      },
    
      inputContainer: {
        display: 'flex',
        alignItems: 'flex-start',
    },
    infoContainer: {

        width: '70%',
        marginBottom:20,
    },
    passwordInfo: {
        fontSize: 14,
    },
    submitButton: {
        top:10,
        backgroundColor:Colors.NavyBlue200,
    }
});
