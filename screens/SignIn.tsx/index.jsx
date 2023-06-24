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


const SignIn = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const pressHandler = () => {
    navigation.navigate('SignIn');
  };

  // switch (color) {
  //   case 0: {
  //     //  change color
  //     style={styles.radioBtn}
  //   }
  //   case 1: {
  //     // change color
  //   }
  //   case 2: {
  //     // change color
  //   }
  //   default: {
  //     //  back to default
  //   }
  // }

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
          <RegularButton
            style={[styles.buttons]}
            onPress={() => {
              alert('Press Me');
            }}
          >
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

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            ></Pressable>

            <View>
              <RadioButton />
            </View>
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
