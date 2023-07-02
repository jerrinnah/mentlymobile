import { StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';
import Header from '../utils/Header';
import SmallText from '../utils/SmallText';
import Colors from '../utils/Colors';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from '../screens/Onboarding/Screen1';
import Screen2 from '../screens/Onboarding/Screen2';
import Screen3 from '../screens/Onboarding/Screen3';

const Welcome = ({ setPage }: { setPage: (val: number) => void }) => {

  
  return (
    <View>
      <Screen1 setPage={setPage}/>
    </View>
  );
};

const Welcome2 = ({ setPage }: { setPage: (val: number) => void }) => {
  return (
    <View>
      <Screen2 setPage={setPage} />
    </View>
  );
};

const Welcome3 = ({ setPage, navigation }: { setPage: (val: number) => void, navigation: any }) => {


  return (
    <View>
      <Screen3 setPage={setPage} navigation={navigation}/>
    </View>
  );
};
export { Welcome2, Welcome3 };

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height:'100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.White,
 
  },

  imgContainer: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    height: '50%',
    flexDirection: 'column',
    width: '100%',
    padding: 20,
    alignItems: 'center',

  },

  textColor: {
    color: Colors.White,
    fontFamily: 'Nunito_Sans',
    fontSize: 30,
  },

  textInfo: {
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
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
