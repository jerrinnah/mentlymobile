import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../utils/Colors';
import CurTitle from './CurTitle';
import CurBody from './CurBody';
import CurMentor from './CurMentor';
import BigText from '../SmallText/BigText';

import { useToggle } from '../../store/store';
import RegularText from '../SmallText/RegularText';

const CurIntro = () => {
  const [collapse, setCollapse] = useState(false);
  const isToggled = useToggle(state => state.isToggled);
  const [toggle, setToggle] = useState(false);

  const toggleArrow = () => {
    // setCollapse(previousState => !previousState);
    setToggle(previousState => !previousState);
  };

  const closeModal = () => {
    if (toggle === true) {
      
    }
  };

  return (
    <>
      <View style={styles.body}>
        <View style={styles.top}>
          <RegularText style={styles.week}>Week 01;</RegularText>

          <BigText style={styles.title}>
            Introduction to Digital marketing
          </BigText>

          <Pressable onPress={toggleArrow} style={styles.iconContainer}>
            {toggle ? (
              <Image
                style={styles.icon}
                source={require('../../res/icons/arrow-up.png')}
              />
            ) : (
              <Image
                style={styles.icon}
                source={require('../../res/icons/arrow-dwn.png')}
              />
            )}
          </Pressable>
        </View>

        {toggle && (
          <View>
            <View
              style={{
                height: 1,
                width: '80%',
                backgroundColor: 'grey',
                alignSelf: 'center',
              }}
            ></View>
            <View style={[toggle ? styles.bodyFull : styles.body]}>
              <RegularText style={styles.text}>
                This class covers html css and the basic forms of a static
                website & basic forms of a statistics of website Lorem ipsum
                amet minim mollit non
              </RegularText>

              <View style={styles.textContainer}>
                <BigText style={styles.textMentor}>Mentor: </BigText>
                <RegularText style={styles.mentor}>Smith James</RegularText>
              </View>
            </View>
          </View>
        ) }
      </View>
    </>
  );
};

export default CurIntro;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    // backgroundColor:'red'
  },
  title: {
    fontSize: 16.7,
    width: '75%',
    // backgroundColor:'green',

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

  body: {
    minHeight: 90.5,
    width: 361.2,
    backgroundColor: Colors.Grey400,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    marginTop: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  bodyFull: {
    minHeight: 157.5,
    width: 361.2,
    backgroundColor: Colors.Grey400,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    // marginTop: 10,
    marginBottom: 20,
  },

  titleBorder: {
    height: 40,
    backgroundColor: Colors.Grey400,
    justifyContent: 'center',
    paddingLeft: 20,
    marginBottom: 20,
  },

  container: {
    width: '80%',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 15,
  },

  text: {
    fontSize: 17,
    textAlign: 'center',
    padding: 10,
  },
  textMentor: {
    fontSize: 14,
    // marginBottom:50,
  },
  textContainer: {
    flexDirection: 'row',
    paddingBottom: 20,
    // marginBottom: 70,
    alignItems: 'center',
    paddingLeft: 10,
  },
  mentor: {
    fontSize: 14,
  },
});
