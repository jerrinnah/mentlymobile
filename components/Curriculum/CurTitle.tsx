import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import BigText from '../SmallText/BigText';
import RegularText from '../SmallText/RegularText';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Icon } from '@ailibs/feather-react-ts';

const CurTitle = () => {
  return (
    <>
      <View style={styles.top}>
        <RegularText style={styles.week}>Week 01;</RegularText>

        <BigText style={styles.title}>
          Introduction to Digital marketing{' '}
        </BigText>
        <View style={styles.iconContainer}>
          {/* <Ionicons name='arrow-up'/> */}
          <Image
            style={styles.icon}
            source={require('../../res/icons/arrow-up.png')}
          />
        </View>
          </View>
          <View style={{height:1, width:'80%', backgroundColor:'grey', alignSelf:'center'}}></View>
    </>
  );
};

export default CurTitle;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    padding: 10,
        alignItems: 'center',
        marginBottom: 10,
        marginTop:20

  },
  title: {
    fontSize: 18,
    width: '75%',

    textAlign: 'center',
  },
  week: {
    fontSize: 12,
    width: '15%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: '10%',

    paddingLeft: 10,
  },
  icon: {
    height: 13,
    width: 20,
    // backgroundColor: 'red',
  },
});
