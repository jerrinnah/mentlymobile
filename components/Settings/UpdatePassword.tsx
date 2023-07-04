import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Modal,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import BackArrowButton from '../Buttons/BackArrowButton';
import BigText from '../SmallText/BigText';
import { Controller, useForm } from 'react-hook-form';
import RegularText from '../SmallText/RegularText';
import Colors from '../../utils/Colors';
import RegularButton from '../Buttons/RegularButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

const returnHandler = () => {
  console.log('first');
};

const UpdatePassword = () => {
  const [modal, setMModal] = useState(false);

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

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <BackArrowButton onPress={returnHandler} />
        <BigText style={styles.pageTitle}>Update Password</BigText>
      </View>

      <View style={styles.settingHeader}>
        <Image
          style={styles.avi}
          source={require('../../res/images/userAvi.png')}
        />
        <TouchableOpacity >
          <Image  style={styles.aviIcon} source={require('../../res/icons/aviEdit.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <RegularText style={styles.label}>Current password</RegularText>
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
        {/* {errors.firstName && <Text>This is required.</Text>} */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <RegularText style={styles.label}>New password</RegularText>
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
              <RegularText style={styles.label}>Confirm password</RegularText>
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
      </View>

      <RegularButton style={styles.saveButton}> Save Changes</RegularButton>
    </View>
  );
};

export default UpdatePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
    alignSelf: 'center',
 
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    // backgroundColor:'red'
  },
  pageTitle: {
    fontSize: 25,
    left:20,
  },
  settingHeader: {
    top: 50,
    flexDirection: 'row',
  },
  avi: {
    height: 70,
    width: 70,
  },
  aviIcon: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: 50,
    left: -10,
    // right: 30,
  },
  textInput: {
    paddingLeft: 10,
    height: 50,
    width: 320,
    borderRadius: 5,
    borderWidth: 1,
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
  form: {
    marginTop: 90,
  },
  label: {
    color: Colors.Grey200,
  },
  saveButton: {
    top: 140,
    backgroundColor: Colors.NavyBlue100,
  },
});
