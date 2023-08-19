import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import BigText from '../SmallText/BigText';
import RegularText from '../SmallText/RegularText';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Icon } from '@ailibs/feather-react-ts';

import { useToggle } from '../../store/store';

const CurTitle = ({ onPress }) => {
  const isToggled = useToggle(state => state.isToggled);

  // const [collapse, setCollapse] = useState(false);

  return (
    <>
      <View style={styles.top}>
        <RegularText style={styles.week}>Week 01;</RegularText>

        <BigText style={styles.title}>
          Introduction to Digital marketing{' '}
        </BigText>
        <Pressable onPress={onPress} style={styles.iconContainer}>
          {/* <Ionicons name='arrow-up'/> */}
          {isToggled ? (
            <Image
              style={styles.icon}
              source={require('../../res/icons/arrow-dwn.png')}
            />
          ) : (
            <Image
              style={styles.icon}
              source={require('../../res/icons/arrow-up.png')}
            />
          )}
        </Pressable>
      </View>
      <View
        style={{
          height: 1,
          width: '80%',
          backgroundColor: 'grey',
          alignSelf: 'center',
        }}
      ></View>
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
    marginTop: 20,
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
