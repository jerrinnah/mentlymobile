import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';
import RegularText from '../SmallText/RegularText';
import BigText from '../SmallText/BigText';
import ShortButton from '../Buttons/ShortButton';
import MidButton from '../Buttons/MidButton';
import RegularButton from '../Buttons/RegularButton';
import { useNavigation } from '@react-navigation/native';
import BackArrowButton from '../Buttons/BackArrowButton';

const BootcampClass = ({navigation}) => {

 
  const nav = useNavigation<any>();

  const callHandler = () => (
    nav.navigate('Calls')
  );

  const curicullumHandler = () => {
    nav.navigate('Curricullum')
  }

  const returnHandler = () => (
    navigation.goBack()
  )


  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <BackArrowButton onPress={returnHandler}/>
        <BigText style={styles.title}>Digital Marketing</BigText>
      </View>

      <Image
        style={styles.adImg}
        source={require('../../res/images/techrityImg.png')}
      />

      <View style={styles.buttons}>
        <MidButton onPress={callHandler} style={styles.callBtn}>
          <RegularText style={styles.callText}>Calls</RegularText>
        </MidButton>
        <MidButton onPress={curicullumHandler}>
          <RegularText >Curriculum</RegularText>
        </MidButton>
      </View>

      {/* Scroll region  */}
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <RegularText style={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </RegularText>
        </View>

        <View style={styles.CTAinfo}>
          <View style={styles.campInfo}>
            <View style={styles.textAl}>
              <BigText style={styles.detailTitle}>Date</BigText>
              <RegularText style={styles.detailPara}>April 21 2021</RegularText>
            </View>
            <View style={styles.textAl}>
              <BigText style={styles.detailTitle}>Time</BigText>
              <RegularText style={styles.detailPara}>
                9:00 AM - 3:00 PM
              </RegularText>
            </View>
          </View>
          <View style={styles.campInfo}>
            <View style={styles.textAl}>
              <BigText style={styles.detailTitle}>Language</BigText>
              <RegularText style={styles.detailPara}>English</RegularText>
            </View>
            <View style={styles.textAl}>
              <BigText style={styles.detailTitle}>Category</BigText>
              <RegularText style={styles.detailPara}>Design</RegularText>
            </View>
          </View>
          <View style={styles.campInfo}>
            <View style={styles.textAl}>
              <BigText style={styles.detailTitle}>Bootcamp Type</BigText>
              <RegularText style={styles.detailPara}>Physical</RegularText>
            </View>
            <View style={styles.textAl}>
              <BigText style={styles.detailTitle}>Venue</BigText>
              <RegularText style={styles.detailPara}>
                Tech Creek R/s
              </RegularText>
            </View>
          </View>
        </View>

        <View style={styles.comment}> 
          <View style={styles.aviRow}>
            <Image style={styles.avi} source={require('../../res/images/avi.png')}/>
            <RegularText style={styles.thinking}>What are you thinking?</RegularText>
            <Image style={styles.downIcon} source={require('../../res/icons/downIcon.png')} />
          </View>
          <TextInput style={styles.inout}></TextInput>
          <View style={styles.border}></View>
        </View>

        <RegularButton style={styles.postBtn}>Post</RegularButton>
      </ScrollView>
    </View>
  );
};

export default BootcampClass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
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

  title: {
    fontSize: 28,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
    marginTop: 70,
    paddingLeft: 30,
  },
  adImg: {
    height: 143,
    width: 324,
    // marginTop:10,
  },

  buttons: {
    display: 'flex',
    flexDirection: 'row',
    width: 350,
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom:10,
    // backgroundColor:'orange'
  },
  callBtn: {
    backgroundColor: Colors.NavyBlue100,
  },

  callText: {
    color: 'white',
  },
  textContainer: {
    height: 160,
    width: 360,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    // backgroundColor:'blue'
  },
  para: {
    fontSize: 14,
    textAlign: 'left',
  },
  CTAinfo: {
    paddingLeft: 40,
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleHeader: {
    fontSize: 20,
  },
  titlePara: {
    fontSize: 14,
    marginTop: 15,
  },
  titleName: {
    fontSize: 14,
    marginTop: 15,
    color: Colors.Orange100,
  },
  titleIntro: {
    padding: 15,
    height: 90,
    display: 'flex',
    alignItems: 'flex-start',
    // backgroundColor:'red'
  },
  organizeBy: {
    display: 'flex',
    flexDirection: 'row',
  },
  bootcampDesc: {
    padding: 20,
    // top: 20,
  },
  desc: {
    fontSize: 14,
    color: 'grey',
  },
  campInfo: {
    display: 'flex',
    flexDirection: 'row',
    width: 350,
    justifyContent: 'space-between',
    marginBottom: 30,
    // backgroundColor:'red'
  },

  detailTitle: {
    fontSize: 18,
    textAlign: 'left',
  },
  detailPara: {
    fontSize: 13,
    textAlign: 'left',
    top: 15,
  },
  textAl: {
    display: 'flex',
    // backgroundColor: 'green',
    width: 150,
  },
  applyButton: {
    top: 70,
    // bottom:40,
  },
  whiteBg: {
    height: '60%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: 'black',
    fontSize: 25,
  },
  postBtn: {
    backgroundColor: Colors.NavyBlue100,
    marginBottom:10,
  },
  scroll: {
    // backgroundColor: 'red',
    alignItems: 'center',
    paddingTop: 10,
    marginTop: 10,
    paddingBottom:60,

  },

  comment: {
    height: 169,
    width: 324, 
    backgroundColor: Colors.Grey400,
    borderRadius: 10,
    display: 'flex',
    bottom: 10,
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'center',
    // alignItems: 'center',
    // paddingLeft:20,
    overflow:'hidden'
   
  },

  border: {
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    marginTop:130,
  
  },
  inout: {
    // height: '100%',
    width: '100%',
    // backgroundColor: 'blue',
    textAlign: 'left',
    marginTop: 120,
    padding:20,
  },
  aviRow: {
    width: '60%',
    height: 20,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft:10,

  },

  avi: {
    height: 30,
    width:30
  },
  downIcon: {
    height: 10,
    width:10
  },
  thinking: {
    fontSize:12,
  }
});
