import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../utils/Colors';
import CurTitle from './CurTitle';
import CurBody from './CurBody';
import CurMentor from './CurMentor';
import BigText from '../SmallText/BigText';

const CurIntro = () => {

   

  return (
    <>
      <View style={styles.titleBorder}>
        <BigText style={{ fontSize: 18, color: Colors.NavyBlue100, }}>
          Curriculum
        </BigText>
      </View>
      <View style={styles.body}>
        <CurTitle />
        <CurBody />
        <CurMentor />
      </View>
    </>
  );
};

export default CurIntro;

const styles = StyleSheet.create({
  body: {
    minHeight: 257.5,
    width: 361.2,
    backgroundColor: Colors.Grey400,
    borderRadius: 5,
    // paddingBottom: 20,
    // marginBottom:20,
  },

  titleBorder: {
    height: 40,
    backgroundColor: Colors.Grey400,
    justifyContent: 'center',
    paddingLeft: 20,
    marginBottom: 20,
  },
});
