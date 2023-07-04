import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import RegularText from '../../components/SmallText/RegularText';
import RegularButton from '../../components/Buttons/RegularButton';
import Colors from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation/Index';




export default function MenteeSignup({navigation}) {

  
    const nav = useNavigation<any>();
    
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmpassword: '',
    },
  });

  
    
  const onSubmit = data => {
      console.log(data)
      nav.navigate('OtpVerification')
  };
    

  return (
    <View style={styles.container}>
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

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <RegularText>First Name</RegularText>
            <TextInput
              // placeholder="First name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.textInput}
            />
          </View>
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <RegularText>Last Name</RegularText>
            <TextInput
              // placeholder="First name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.textInput}
            />
          </View>
        )}
        name="lastName"
      />
      {errors.lastName && <Text>This is required.</Text>}

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
      {errors.email && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <RegularText>Phone Number</RegularText>
            <TextInput
              // placeholder="First name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.textInput}
            />
          </View>
        )}
        name="phoneNumber"
      />
      {errors.email && <Text>This is required.</Text>}

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
      {errors.firstName && <Text>This is required.</Text>}

      {/* <CustomTextFieldProps name={'Username'} data /> */}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <RegularText>Confirm Password</RegularText>
            <TextInput
              // placeholder="First name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.textInput}
            />
          </View>
        )}
        name="confirmpassword"
      />
      {errors.confirmpassword && <Text>This is required.</Text>}

      <RegularButton
        style={[styles.button, styles.bgColor]}
        onPress={handleSubmit(onSubmit)}
      >
        Confirm
      </RegularButton>

      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 80,
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
});
