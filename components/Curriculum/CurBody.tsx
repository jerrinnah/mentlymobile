import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BigText from '../SmallText/BigText';
import RegularText from '../SmallText/RegularText';

const CurBody = () => {
  return (
    <View style={styles.container}>
      {/* <RegularText style={styles.text}>
        This class covers html css and the basic forms of a static website &
        basic forms of a statistics of website Lorem ipsum amet minim mollit non
      </RegularText> */}
    </View>
  );
};

export default CurBody;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 15,
    },
    
    text: {
        fontSize:18
    }
});
