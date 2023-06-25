import { StyleSheet, Text, View, Image, GestureResponderEvent } from 'react-native'
import React from 'react'
import RegularText from '../../components/SmallText/RegularText'
import RegularButton from '../../components/Buttons/RegularButton'
import Colors from '../../utils/Colors'
import { useNavigation } from '@react-navigation/native';
import LogIn from './UserSignin/LogIn'


const OtpVerification = () => {

    const nav = useNavigation<any>()

    const clickHandler = () => {
        nav.navigate('LogIn')
    }

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

          <RegularText >
          You can resend code in 30s
          </RegularText>
          
          <RegularButton  style={styles.verifyButton} onPress={clickHandler}>Verify</RegularButton>
    </View> 
  )
}

export default OtpVerification

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:70,
    },
    frames: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom:30,
    },
    frame: {
        height: 55,
        width: 55,
        borderWidth: 2,
        borderColor: ' green',
        opacity: 0.4,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
        top: 20,
        margin:3,
      
      
    },
    code: {
        fontSize: 29,
        alignSelf: 'center',
        
    },
    verifyButton: {
        top: 20,
        backgroundColor: Colors.NavyBlue100
    }
})