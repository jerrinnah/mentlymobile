import { StyleSheet, Text, View, Image, TextInput, Pressable, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import RegularText from '../../../components/SmallText/RegularText';
import RegularButton from '../../../components/Buttons/RegularButton';
import Colors from '../../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';




const LogIn = () => {
  const [check, setCheck] = useState(false);

  // const nav = useNavigation();

  

  // const id = 98

  // const { isLoading: queryLoading, data, } = useQuery(['getQuery', id], () => axios.get(`hhttps://lendnqoneon.com/${id}`), {
  //   onError: () => { },
  //   onSuccess: () => { },
  // })

  const { isLoading, mutate, isError, isSuccess } = useMutation({
    mutationFn: (data: any) => axios.post('https://app.mymently.com/auth/signin?entity=student', data, {
      headers: {
        'Content-Type': 'application/json',
      }
    }),
    onError: (error: any) => { 
      console.log(error.response.data);
      alert(error.response.data.message);
    },
    onSuccess: (data) => {
      alert(data.data.message);
      console.log(data.data);
      nav.navigate('Home')
      
    }
  });



  const clickHandler = () => {
    setCheck(!check)

  }
  const nav = useNavigation<any>();


  const recoverPassword = () => {
    nav.navigate(ForgetPassword)
  }
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = data => {
    mutate(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo} >
        <Image
          style={{ height: 45, width: 103 }}
          source={require('../../../res/images/mently_logoBlack.png')}
        />
      </View>
      <RegularText>
        Enter your details as a mentee to create your account
      </RegularText>

      <View style={styles.textInputs}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <RegularText>Username</RegularText>
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
        {errors.email && <Text>{errors.email.message}</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <RegularText>Password</RegularText>
              <TextInput
                // placeholder="First name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.textInput}
              />
            </View>
          )}
          name="password"
        />
        {errors.password && <Text>Please input password or use correct password</Text>}

        <View style={styles.bottomRow}>
          <View  style={styles.checkContainer}>
            <Pressable onPress={clickHandler} style={styles.checkBox} >
              {check && <Image style={{ height: 15, width: 10 }} source={require('../../../res/icons/check-icon.png')} />}
              {!check && <Image style={{ display:'none'}} source={require('../../../res/icons/check-icon.png')} />}
            </Pressable>
            <Text style={styles.remember}>Remember Me</Text>
          </View>

          <Pressable onPress={recoverPassword}>
            <RegularText style={styles.recover}>Fogot Password</RegularText>
          </Pressable>
        </View>
      </View>
  

      <RegularButton
        style={[styles.button, styles.bgColor]}
        onPress={handleSubmit(onSubmit)}
      >
        {isLoading && <ActivityIndicator size='small' />}
        { !isLoading && 'Confirm' }
      </RegularButton>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  logo: {},

  container: {
    paddingTop:80,
    padding:30,
    height: '100%',
    alignItems: 'center',
    
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
  button: {
    top: 30,
  },
  bgColor: {
    backgroundColor: Colors.NavyBlue100,
  },
  textInputs: {
    // backgroundColor: 'red',
  },

  bottomRow: {
    display: 'flex',
    flexDirection: 'row',
    top: 10,
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  remember: {
    fontSize: 12,
    paddingLeft:10,
    // backgroundColor: 'red',
  },
  recover: {
    fontSize: 12,
  },

  checkBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    height: 20,
    width: 20,
    borderWidth: 2,

  },
  checkContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'blue',
    width:120,
    
  },

  // checkIcon: {
  //   display:'flex',
  //   height: 15,
  //   width: 10,
    
  // }
});
