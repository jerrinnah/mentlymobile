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

  // const pressHandler = () => {
  //   navigation.navigate('Unboarding3');
  // };
  
  return (
    // <View style={styles.container}>
    //   <View style={styles.imgContainer}>
    //     <Image
    //       style={styles.lady}
    //       source={require('../res/images/lady1.png')}
    //     />
    //   </View>

    //   <View style={styles.textContainer}>
    //     <View style={styles.textInfo}>
    //       <Header style={styles.headerText}>Teaching</Header>
    //       <SmallText style={styles.paragraph}>
    //         Share your knowledge and experiences to inspire, and equip mentees
    //         to reach their career goals. Join our mentorship community and start
    //         your journey to making a difference by providing guidance and
    //         support.
    //       </SmallText>
    //     </View>
    //     <Pressable onPress={() => setPage(1)}>
    //       <Image
    //         style={styles.nextIcon}
    //         source={require('../res/icons/nextFlow.png')}
    //       />
    //     </Pressable>
    //   </View>

    //   {/* <Button title='Goto 2' onPress={() => setPage(1)} /> */}
    // </View>
    <View>
      <Screen1 setPage={setPage}/>
    </View>
  );
};

const Welcome2 = ({ setPage }: { setPage: (val: number) => void }) => {
  return (
    <View>
      {/* <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.lady}
            source={require('../res/images/lady2.png')}
          />
        </View>

        <View style={styles.textContainer}>
          <View style={styles.textInfo}>
            <Header style={styles.headerText}>Learning!!</Header>
            <SmallText style={styles.paragraph}>
              Expand your horizons and acquire new skills through mentorship.
              Learn from experienced mentors who can guide you towards growth,
              knowledge, and self-improvement.
            </SmallText>
          </View>
          <Pressable onPress={() => setPage(2)}>
            <Image
              style={styles.nextIcon}
              source={require('../res/icons/nextFlow.png')}
            />
          </Pressable>
        </View>
      </View> */}

      {/* <Text>Page 2</Text>
      <Button title="Goto 3" onPress={() => setPage(2)} /> */}
      <Screen2 setPage={setPage} />
    </View>
  );
};

const Welcome3 = ({ setPage, navigation }: { setPage: (val: number) => void, navigation: any }) => {

  // const pressHandler = () => {
  //   navigation.navigate('SignIn');
  // };


  return (
    <View>
      {/* <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.lady}
            source={require('../res/images/lady3.png')}
          />
        </View>

        <View style={styles.textContainer}>
          <View style={styles.textInfo}>
            <Header style={styles.headerText}>Examination</Header>
            <SmallText style={styles.paragraph}>
              Get access to valuable resources, exam tips, and personalized
              advice to help you succeed
            </SmallText>
          </View>
          <Pressable onPress={(pressHandler)}>
            <Image
              style={styles.nextIcon}
              source={require('../res/icons/nextFlow.png')}
            />
          </Pressable>
        </View>
      </View> */}
      {/*       
      <Text>Page 3</Text>
      <Button title="Go back to 1" onPress={() => setPage(0)} /> */}
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
    // justifyContent:'space-between'
  },

  imgContainer: {
    height: '50%',
    // display: 'flex',
    width: '100%',
    justifyContent: 'center',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    height: '50%',
    flexDirection: 'column',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    // backgroundColor: 'green',
  },

  textColor: {
    color: Colors.White,
    fontFamily: 'Nunito_Sans',
    fontSize: 30,
  },

  textInfo: {
    // display: 'flex',
    // height: '100%',
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'orange',
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
    // color: 'white',
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
