import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../utils/Header'
import SmallText from '../../utils/SmallText'
import Colors from '../../utils/Colors'
import BigText from '../../components/SmallText/BigText'
import RegularText from '../../components/SmallText/RegularText'


const Screen2 = ({setPage}) => {
  return (
    <View>
       <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.lady}
            source={require('../../res/images/lady2.png')}
          />
        </View>

        <View style={styles.textContainer}>
          <View style={styles.textInfo}>
            <BigText>Learning</BigText>
            {/* <Header style={styles.headerText}>Learning!!</Header> */}

            <RegularText>
            Expand your horizons and acquire new skills through mentorship.
              Learn from experienced mentors who can guide you towards growth,
              knowledge, and self-improvement.
            </RegularText>
            
          </View>
          <Pressable onPress={() => setPage(2)}>
            <Image
              style={styles.nextIcon}
              source={require('../../res/icons/nextFlow.png')}
            />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Screen2


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // height:'100%',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: Colors.White,
      // justifyContent:'space-between'
    },
  
    imgContainer: {
      height: '50%',
      // display: 'flex',
      width: '100%',
      justifyContent: 'center',
      // backgroundColor: 'red',
      alignItems: 'center',
    },
    textContainer: {
      display: 'flex',
      height: '30%',
      flexDirection: 'column',
      width: '100%',
      padding: 20,
      alignItems: 'center',
      // backgroundColor: 'green',
    },
  
    textColor: {
      color: Colors.White,
      fontFamily: 'Nunito_Sans',
      fontSize: 30,
    },
  
    textInfo: {
      // display: 'flex',
      // height: '100%',
      marginTop: 50,
      width: '100%',
      alignItems: 'center',
      // justifyContent: 'center',
      // backgroundColor: 'orange',
      paddingBottom: 70,
      marginBottom: 20,
    },
    headerText: {
      fontStyle: 'normal',
      fontWeight: '200',
    },
    paragraph: {
      top: 20,
      textAlign: 'center',
      // color: 'white',
      fontSize: 16,
    },
  
    lady: {
      width: 387,
      height: 329,
      top: 50,
    },
    nextIcon: {
      height: 63,
      width: 63,
    },
  });
  