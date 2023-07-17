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
import { useForm, Controller } from 'react-hook-form';
import RegularText from '../../components/SmallText/RegularText';
import RegularButton from '../../components/Buttons/RegularButton';
import Colors from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation/Index';
import { Platform, ScrollView } from 'react-native';
import Form from '../../components/Forms/Form';
import CustomInput from '../../components/Forms/CustomInput';

export default function MenteeSignup({ navigation }) {
  const nav = useNavigation<any>();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch('password');

  const onPressSignedIn = data => {
    //  Validate user
    console.log(data);
    nav.navigate('OtpVerification');
  };

  return (
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

            {/* Form field  */}

            <View style={styles.main}>
            <View>
            </View>
          

            {/* Form fields  */}

            <View style={{paddingTop:20}}>
              <CustomInput
                control={control}
                rules={{ required: 'Username is required' }}
                name="username"
                placeholder="username"
                // secureTextEntry={null}
              />
              <CustomInput
                control={control}
                name="firstname"
                placeholder="First Name"
                // secureTextEntry={null}
              />
              <CustomInput
                control={control}
                name="lastname"
                placeholder="Last Name"
                // secureTextEntry={null}
              />
              <CustomInput
                rules={{
                  required: 'Email address is required',
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Invalid email format!',
                  },
                }}
                control={control}
                name="email"
                placeholder="Email address"
                // secureTextEntry={null}
              />
              <CustomInput
                rules={{ required: 'Please input phone number' }}
                control={control}
                name="phone"
                placeholder="Phone Number"
                keyboardType={'numeric'}

                // secureTextEntry={null}
              />
              <CustomInput
                control={control}
                rules={{
                  
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password should be at least 6 characters long',
                  },
                }}
                name="password"
                placeholder="Create Password"
                secureTextEntry
              />
              <CustomInput
                control={control}
                rules={{ required: "Password doesn't match", validate: value => value === password || 'Password do not match' } }
                name="confirmPassword"
                placeholder="Confirm Password"
                secureTextEntry
                
              />
            </View>

            <RegularButton onPress={handleSubmit(onPressSignedIn)}>
              {' '}
              Submit{' '}
            </RegularButton>
          </View>

            
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>

    // <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <KeyboardAvoidingView
    //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
     
    //     <ScrollView >
         
    //     </ScrollView>
    //   </KeyboardAvoidingView>
    // </SafeAreaView>
  );

  //   return (
  //     <>
  //       <Form/>
  //     </>
  //   )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'center',
    // justifyContent: 'center',
    top: 20,
    // mpaddingBottom:30,
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
  // containerKeyboard: {
  //   flex: 1,
  //   alignItems: 'center',
  // },
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
