import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Alert,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState, useMemo } from 'react';
import BigText from '../../components/SmallText/BigText';
import RegularText from '../../components/SmallText/RegularText';
import RegularButton from '../../components/Buttons/RegularButton';
import Colors from '../../utils/Colors';
import { Formik, Field, Form } from 'formik';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import StyledInput from '../../components/Inputs/StyledTextInput';
import CustomTextFieldProps from '../../components/Forms/CustomTextFieldProps';
import SmallerText from '../../components/SmallText/SmallerText';
import RadioButton from '../../components/Radio/RadioProp';
import RadioT, { AccountTypePicker } from '../../components/Radio/RadioT';
import { RadioGroup } from 'react-native-radio-buttons-group';
import Screen2 from '../Onboarding/Screen2';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const arr = ['A mentee', 'A mentor'];

const SignIn = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1);

  const signUp = React.useCallback(async () => {
    console.log(handleAccountType());
    try {
      const request = await axios.post(
        `https://mently-api.herokuapp.com/auth/signup?entity=${'mentee'}`,
        {
          username: 'hiatus_1',
          firstname: 'Victor',
          lastname: 'Orlunda',
          email: 'example3@email.com',
          phone: '+2345566778899',
          password: 'skippT55ed',
          entity: 'mentee',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const result = await request.data;
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const nav = useNavigation<any>();

  // const pressHandler = () => {
  //   nav.navigate('Screen1')
  // };

  const handleCheck = React.useCallback(
    (index: number) => {
      setActiveIndex(index);
      if (index === 0) {
        nav.navigate('MenteeSignup');
        setModalVisible(false);
      }
    },
    [activeIndex],
  );

  const signInHandler = () => {
    nav.navigate('LogIn');
  };

  const handleAccountType = () => {
    switch (activeIndex) {
      case 0:
        return 'mentee';
      case 1:
        return 'mentor';
      default:
        return 'mentee';
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require('../../res/images/mently_logoBlack.png')}
        />
      </View>

      <Image
        style={styles.target}
        source={require('../../res/images/target.png')}
      />
      <View style={styles.textContainer}>
        <BigText>Welcome</BigText>
        <View style={styles.textD}>
          <RegularText>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </RegularText>
        </View>

        <View style={styles.buttonContainer}>
          <RegularButton
            style={styles.signUpBtn}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            Sign Up
          </RegularButton>
          <RegularButton style={[styles.buttons]} onPress={signInHandler}>
            Sign In
          </RegularButton>
        </View>
      </View>

      {/* Modal section  */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <BigText>Sign Up as</BigText>
            {arr.map((item, index) => (
              <AccountTypePicker
                key={index}
                label={item}
                index={index}
                isChecked={activeIndex === index}
                onCheck={handleCheck}
              />
            ))}
            {/* <RadioT/> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  logo: {
    marginTop: 80,
    height: 45,
    width: 104,
  },
  target: {
    top: 100,
    height: 280,
    width: 280,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 150,
  },
  welcomeTitle: {
    // top: 150,
  },
  welcomeDesc: {
    fontSize: 19,
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 40,
  },

  buttons: {
    top: 20,
  },
  signUpBtn: {
    backgroundColor: Colors.NavyBlue100,
  },

  textColor: {
    color: 'red',
  },
  textD: {
    marginLeft: 30,
    marginRight: 30,
    paddingRight: 20,
    paddingLeft: 20,
  },

  // Modal style

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    top: 240,
    marginTop: 22,
  },
  modalView: {
    height: 390,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  radioContainer: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    padding: 10,
    width: '60%',
  },

  radioBtn: {
    height: 20,
    width: 20,
    borderRadius: 10,
    // backgroundColor: 'green',
    borderBottomColor: 'blue',
  },

  borderline: {
    borderWidth: 1,
    borderColor: Colors.NavyBlue200,
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  radioText: {
    // backgroundColor: 'orange',
    paddingLeft: 20,
  },

  radioColor: {
    backgroundColor: Colors.Orange300,
  },
});
