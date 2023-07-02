import {
  StyleSheet,
  Text,
  View,
  Image,
  GestureResponderEvent,
  Alert,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import RegularText from '../../components/SmallText/RegularText';
import RegularButton from '../../components/Buttons/RegularButton';
import Colors from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import LogIn from './UserSignin/LogIn';

const OtpVerification = ({ navigation }) => {
  const [modal, setModal] = useState(false);

  const nav = useNavigation<any>();


  const Success = () => {
      setModal(!modal);
      setTimeout(() => {
        setModal(false);
      }, 5000);
      nav.navigate('Dashboard')
  };
  const SuccessfulReg = () => {
    // return  Alert.prompt('Successful')
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
        Enter the 4 digits code sent to helenchinweike@gmail.com
      </RegularText>

      <View style={styles.frames}>
        <View style={styles.frame}>
          <RegularText style={styles.code}>*</RegularText>
        </View>
        <View style={styles.frame}>
          <RegularText style={styles.code}>*</RegularText>
        </View>
        <View style={styles.frame}>
          <RegularText style={styles.code}>*</RegularText>
        </View>
        <View style={styles.frame}>
          <RegularText style={styles.code}>*</RegularText>
        </View>
      </View>

      <RegularText>You can resend code in 30s</RegularText>

      <RegularButton style={styles.verifyButton} onPress={Success}>
        Verify
      </RegularButton>

      {/* Modal  */}

      <Modal visible={modal} transparent={false}>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'black',
            opacity: 0.8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={styles.whiteBg}>
            <Image
              style={{ height: 150, width: 150, marginBottom:50, }}
              source={require('../../res/images/success.png')}
            />
                      <RegularText style={styles.textColor}>Congratulations</RegularText>
                      <RegularText>Your account is ready...🚀</RegularText>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  frames: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 30,
  },
  frame: {
    height: 55,
    width: 55,
    borderWidth: 2,
    borderColor: ' green',
    opacity: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    top: 20,
    margin: 3,
  },
  code: {
    fontSize: 29,
    alignSelf: 'center',
  },
  verifyButton: {
    top: 20,
    backgroundColor: Colors.NavyBlue100,
  },

  //   Modal
  background: {
    // display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'red%',
  },
  textColor: {
      color: 'black',
      fontSize:25,
  },

  whiteBg: {
    height: '60%',
    width: '90%',
    backgroundColor: 'white',
      borderRadius: 10,
      justifyContent: 'center',
    alignItems:'center'
  },
});
