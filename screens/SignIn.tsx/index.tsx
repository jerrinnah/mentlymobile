import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Header from '../../utils/Header';
import SmallText from '../../utils/SmallText';
import BigText from '../../components/SmallText/BigText';
import RegularText from '../../components/SmallText/RegularText';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require('../../res/images/mently_logoBlack.png')}
        />
      </View>

      <Image
        style={styles.target}
        source={require('../../res/images/target.png')}
      />
      <View style={styles.textContainer}>
        <BigText>Welcome</BigText>
        <RegularText>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </RegularText>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  logo: {
    marginTop: 80,
    height: 45,
    width: 104,
  },
  target: {
    top: 100,
    height: 280,
    width: 280,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 150,
    padding: 15,
  },
  welcomeTitle: {
    // top: 150,
  },
  welcomeDesc: {
    fontSize: 16,
    textAlign: 'center',
  },
});
