import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable, Button } from 'react-native';
import { useFonts } from 'expo-font';
import Colors from '../../utils/Colors';
import Header from '../../utils/Header';
import SmallText from '../../utils/SmallText';
import Welcome, { Welcome2, Welcome3 } from '../../navigation/Welcome';




const Onboarding = ({ navigation }) => {

  const [page, setPage] = useState(0);

  
  const renderPage = React.useCallback(() => { 
    switch (page) {
      case 0: {
        return <Welcome setPage={setPage} />
      }
      case 1: {
        return <Welcome2 setPage={setPage} />
      }
      case 2: {
        return <Welcome3  navigation={navigation} setPage={setPage} />
      }
      default: {
        return <Welcome setPage={setPage}/>
        }
    }
  }, [page])
  
  return (
      <View style={styles.container}>
        { renderPage() }
      </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
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
    // fontFamily: 'Nunito_Sans',
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
    fontWeight: 200,
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
