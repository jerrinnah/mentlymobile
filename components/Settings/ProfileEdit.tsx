import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import BigText from '../SmallText/BigText';
import RegularText from '../SmallText/RegularText';
import Colors from '../../utils/Colors';
import RegularButton from '../Buttons/RegularButton';
import { useNavigation } from '@react-navigation/native';
import BackArrowButton from '../Buttons/BackArrowButton';




const ProfileEdit = ({navigation}) => {

  const returnHandler = () => (
    navigation.goBack()
  )

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
    console.log(data);
    // nav.navigate('')
  };

  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <BackArrowButton onPress={returnHandler}/>
        <BigText style={styles.pageTitle}>Profile</BigText>
      </View>

      <View style={styles.settingHeader}>
        <Image
          style={styles.aviIcon}
          source={require('../../res/icons/aviEdit.png')}
        />
        <Image
          style={styles.avi}
          source={require('../../res/images/userAvi.png')}
        />
      </View>
      <View>
        {/* Form field  */}

        <View style={styles.formContainer}>
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
          {/* {errors.firstName && <Text>This is required.</Text>} */}
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
                <RegularText>Email address</RegularText>
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
            name="firstName"
          />
          {/* {errors.firstName && <Text>This is required.</Text>} */}
        </View>

        <RegularButton
          style={[styles.button, styles.bgColor]}
          onPress={handleSubmit(onSubmit)}
        >
          Confirm
        </RegularButton>

        {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
      </View>
    </View>
  );
};

export default ProfileEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
  },
  settingHeader: {
    height: 130,
    marginTop: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  avi: {
    height: 70,
    width: 70,
    borderRadius: 20,
  },
  userName: {
    fontSize: 20,
  },
  userEmail: {
    fontSize: 14,
  },

  userIcon: {
    height: 19,
    width: 19,
  },
  arrowIcon: {
    height: 15,
    width: 8,
  },
  settingStyle: {
    paddingLeft: 30,
  },
  aviIcon: {
    height: 20,
    width: 20,
    position: 'absolute',
    zIndex: 1,
    top: 55,
    left: 50,
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
  
    box: {
        height: 40,
        width: 40,
        backgroundColor: Colors.Grey300,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 10,
      },
      leftBtn: {
        height: 15,
        width: 15,
    },
      
    titleRow: {
        flexDirection: 'row',
        // backgroundColor: 'green',
        width:350,
    },

    pageTitle: {
        paddingLeft:60,
    }
});
