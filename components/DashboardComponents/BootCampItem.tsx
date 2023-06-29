import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import React from 'react';
import RegularText from '../SmallText/RegularText';
import BigText from '../SmallText/BigText';
import Colors from '../../utils/Colors';
import ShortButton from '../Buttons/ShortButton';

const BootCampItem = ({ title, date, userCount }) => {
  return (
    <View style={styles.bootCampContainer}>
      {/* <Text>BootCampItem</Text> */}
      <Image
        style={styles.img}
        source={require('../../res/images/campImg.png')}
      />
      <View style={styles.bootcampInfo}>
        <View style={styles.indicatorContainer}>
          <View style={styles.indicator}></View>
          <Text>Offline</Text>
        </View>

        <BigText style={styles.bootCampTitle}>{title}</BigText>
        <View style={styles.bootCampBottom}>
          <View style={styles.dateContainer}>
            <View style={styles.circle}>
              <Image
                style={styles.imgIcon}
                source={require('../../res/icons/calendarIcon.png')}
              />
            </View>
            <Text>{date}</Text>
          </View>
          <View style={styles.userContainer}>
            <Image
              style={styles.userIcon}
              source={require('../../res/icons/user.png')}
            />
                      <RegularText style={styles.userCount}>{userCount}</RegularText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BootCampItem;

const styles = StyleSheet.create({
  bootCampContainer: {
    height: 295,
    width: 325,
    borderRadius: 10,
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  img: {
    height: 159,
    width: 325,
    position: 'absolute',
    zIndex: 1,
  },
  bootcampInfo: {
    height: 158,
    width: 325,
    backgroundColor: Colors.White,
    borderRadius: 10,
    position: 'absolute',
    zIndex: 1,
    top: 140,
    borderColor: Colors.Grey400,
    borderWidth: 1,
    marginBottom: 10,
  },
  indicator: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: Colors.Danger,
  },
  indicatorContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: 80,
  },
  bootCampTitle: {
    fontSize: 16,
    lineHeight: 25,
    paddingLeft: 10,
    paddingRight: 10,
  },
  bootCampBottom: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    width: '100%',
    top: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  imgIcon: {
    height: 10,
    width: 10,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: Colors.Blue700,
    justifyContent: 'center',
    alignItems: 'center',
    // opacity:0.9
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  userContainer: {
    height: 26,
    width: 60,
    borderRadius: 10,
    backgroundColor: Colors.Orange100,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 7,
  },
  userIcon: {
    height: 15,
    width: 15,
  },
  userCount: {
    fontSize: 12,
  },
});
