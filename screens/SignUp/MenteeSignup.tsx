import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import RegularText from '../../components/SmallText/RegularText';
import Colors from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation/Index';
import { Platform, ScrollView, ActivityIndicator } from 'react-native';
import * as yup from 'yup';
import useForm from '../../hooks/useForm';
import { CustomTextInput } from '../../components/form/CustomTextInput';
import { SubmitButton } from '../../components/form/SubmitButton';
import { useEffect } from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';
import RegularButton from '../../components/Buttons/RegularButton';

const schema = yup.object({
  username: yup.string().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required().max(11),
  password: yup.string().required().min(8),
  confirmPassword: yup.string().required().min(8),
});

export default function MenteeSignup({ navigation }) {
  const nav = useNavigation<any>();

  const { isLoading, mutate, isError, isSuccess } = useMutation({
    mutationFn: (data: any) =>
      axios.post('https://app.mymently.com/auth/signup?entity=student', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    onError: (error: any) => {
      console.log(error.response.data);
      alert(error.response.data.message);
    },
    onSuccess: data => {
      alert(data.data.message);
      console.log(data.data);
      nav.navigate('LogIn', {
        userName: 'NewUser'
      });
    },
  });

  const {
    renderForm,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: schema,
  });

  const onPressSignedIn = data => {
    //  Validate user
    mutate({
      ...data,
      entity: 'mentee',
    });
    console.log(data);
  };

  return renderForm(
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.main}>
            <View>
              <Image
                style={{ height: 45, width: 103 }}
                source={require('../../res/images/mently_logoBlack.png')}
              />
            </View>
            <RegularText>
              Enter your details as a mentee to create your account
            </RegularText>

            <View style={{ paddingTop: 20, width: '95%' }}>
              <CustomTextInput
                name="username"
                placeholder="Username"
                inputTitle={'Username'}
                required={true}
              />
              <View style={{ height: 15 }} />
              <CustomTextInput
                name="firstname"
                placeholder="Firstnames"
                inputTitle={'First Name'}
              />
              <View style={{ height: 15 }} />
              <CustomTextInput
                name="lastname"
                placeholder="Lastname"
                inputTitle={'Last Name'}
              />
              <View style={{ height: 15 }} />
              <CustomTextInput
                name="email"
                placeholder="Email"
                inputTitle={'Email'}
                required={true}
              />
              <View style={{ height: 15 }} />
              <CustomTextInput
                name="phone"
                placeholder="Phone"
                inputTitle={'Phone'}
                required={true}
                keyboardType={'numeric'}
              />
              <View style={{ height: 15 }} />
              <CustomTextInput
                name="password"
                placeholder="Password"
                isPassword
                inputTitle={'Password'}
              />
              <View style={{ height: 15 }} />
              <CustomTextInput
                name="confirmPassword"
                placeholder="Confirm Password"
                isPassword
                inputTitle={'Confirm Password'}
                required={true}
              />
              <View style={{ height: 15 }} />
            </View>

            <SubmitButton
              label="Submit"
              onSubmit={data => onPressSignedIn(data)}
            />
            {/* <RegularButton onPress={hanldeSubmit(onPressSignedIn)}> Submit</RegularButton> */}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>,
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: 'orange',
    alignItems: 'center',
    paddingTop: 40,
    margin:10,
  },

  textInput: {
    paddingLeft: 10,
    height: 50,
    width: 320,
    borderRadius: 5,
    borderWidth: 2,
    color: Colors.Grey200,
    borderColor: Colors.Grey300,
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
});
