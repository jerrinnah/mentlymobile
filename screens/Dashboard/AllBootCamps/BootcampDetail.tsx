import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import RegularText from '../../../components/SmallText/RegularText';
import BigText from '../../../components/SmallText/BigText';
import Colors from '../../../utils/Colors';
import RegularButton from '../../../components/Buttons/RegularButton';

const BootcampDetail = () => {

    const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image
          style={styles.img}
          source={require('../../../res/images/marketingImg.png')}
        />
        <View style={styles.titleIntro}>
          <BigText style={styles.titleHeader}>Digital Marketing</BigText>
          <View style={styles.organizeBy}>
            <RegularText style={styles.titlePara}>Organized by:</RegularText>
            <RegularText style={styles.titleName}> Gordon</RegularText>
          </View>
        </View>
      </View>

      <View style={styles.bootcampDesc}>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat..... See more
        </Text>
      </View>

      <View style={styles.textContainer}> 
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
            <RegularText style={styles.detailPara}>
            Design
            </RegularText>
          </View>
        </View>
        <View style={styles.campInfo}>
          <View style={styles.textAl}>
            <BigText style={styles.detailTitle}>Bootcamp Type</BigText>
            <RegularText style={styles.detailPara}>Virtual</RegularText>
          </View>
          <View style={styles.textAl}>
            <BigText style={styles.detailTitle}>Venue</BigText>
            <RegularText style={styles.detailPara}>
            google meet
            </RegularText>
          </View>
        </View>
          </View>
          
          <RegularButton style={styles.applyButton} onPress={()=>nav.navigate('Dashboard')}>Apply here</RegularButton>
    </View>
  );
};

export default BootcampDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    },
    textContainer: {
        top:20,
        // backgroundColor:'orange'
    },
    title: {
    //   paddingTop:20,
    // backgroundColor: 'grey',
  },
  img: {
    height: 254,
    width: 416,
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
      top:20,
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
      textAlign:'left'
      
  },
  detailPara: {
      fontSize: 13,
      textAlign: 'left',
      top:15,
    },
    textAl: {
        display: 'flex',
        // backgroundColor: 'green',
        width:150,
    },
    applyButton: {
        top: 70,
    }
});
