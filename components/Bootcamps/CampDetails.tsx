import { StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BigText from '../SmallText/BigText';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RegularButton from '../Buttons/RegularButton';
import RegularText from '../SmallText/RegularText';
import { useNavigation } from '@react-navigation/native';

const CampDetails = ({id,end,desc,organizeBy,start,category,location, title, navigation}) => {

  const nav = useNavigation<any>();

  const [modal, setModal] = useState(false);

  const clickHandler = () => {
    setModal(!modal);
    setTimeout(() => {
      setModal(false);
    }, 3000);
    nav.navigate('BootcampClass');
  };

  const returnHandler = () => (
    nav.goBack()
  )

 
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View>
          <Image
            style={styles.img}
            source={require('../../res/images/marketingImg.png')}
          />
          <TouchableOpacity onPress={returnHandler} style={styles.iconLeft}>
          <Image style={styles.icon}  source={require('../../res/icons/leftIconOrng.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.titleIntro}>
          <BigText style={styles.titleHeader}>{title}</BigText>
          {/* <BigText style={styles.titleHeader}>{JSON.stringify(item)}</BigText> */}

          {/* <Text>{ navigation.getParent('title')}</Text> */}
          <View style={styles.organizeBy}>
            <RegularText style={styles.titlePara}>Organized by:</RegularText>
            <RegularText style={styles.titleName}> {organizeBy}</RegularText>
          </View>
        </View>
      </View>

      <View style={styles.bootcampDesc}>
        <Text style={styles.desc}>{desc}</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.campInfo}>
          <View style={styles.textAl}>
            <BigText style={styles.detailTitle}>Date</BigText>
            <RegularText style={styles.detailPara}>{start}</RegularText>
          </View>
          <View style={styles.textAl}>
            <BigText style={styles.detailTitle}>Time</BigText>
            <RegularText style={styles.detailPara}>{end}</RegularText>
          </View>
        </View>
        <View style={styles.campInfo}>
          <View style={styles.textAl}>
            <BigText style={styles.detailTitle}>Language</BigText>
            <RegularText style={styles.detailPara}>English</RegularText>
          </View>
          <View style={styles.textAl}>
            <BigText style={styles.detailTitle}>Category</BigText>
            <RegularText style={styles.detailPara}>{category}</RegularText>
          </View>
        </View>
        <View style={styles.campInfo}>
          <View style={styles.textAl}>
            <BigText style={styles.detailTitle}>Bootcamp Type</BigText>
            <RegularText style={styles.detailPara}>Virtual</RegularText>
          </View>
          <View style={styles.textAl}>
            <BigText style={styles.detailTitle}>Venue</BigText>
            <RegularText style={styles.detailPara}>{location}</RegularText>
          </View>
        </View>
      </View>

      <RegularButton style={styles.applyButton} onPress={clickHandler}>
        Apply here
      </RegularButton>

      <Modal visible={modal} transparent={false} collapsable={true}>
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
              style={{ height: 150, width: 150, marginBottom: 50 }}
              source={require('../../res/images/success.png')}
            />
            <RegularText style={styles.textColor}>Bootcamp Applied</RegularText>
            <RegularText>Awaiting verification..</RegularText>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CampDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textContainer: {
    top: 20,
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
    top: 20,
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
  iconLeft: {
    height: 15,
    width: 15,
    position: 'absolute',
    left: 30,
    top:60,
  },

  icon: {
    height: 15,
    width:15
  }
});
