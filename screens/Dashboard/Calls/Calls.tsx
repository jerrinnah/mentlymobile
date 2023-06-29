import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CallCard from '../../../components/Calls/CallCard';
import BigText from '../../../components/SmallText/BigText';
import RegularText from '../../../components/SmallText/RegularText';
import Colors from '../../../utils/Colors';

// const noCallsNotification = () => {
//   <View style={styles.infoDisplay}>
//     <Image
//       style={styles.img}
//       source={require('../../../res/images/noCallImg.png')}
//     />
//     <BigText style={styles.subText}>No Call available!</BigText>
//     <RegularText style={styles.smallText}>
//       Get a call and see all here.
//     </RegularText>
//   </View>;
// };

const Calls = () => {
  return (
      <View style={styles.container}>
          {/* <BigText>All Calls</BigText> */}
      {/* <Image
        style={styles.img}
        source={require('../../../res/images/noCallImg.png')}
      />
      <BigText style={styles.subText}>No Call available!</BigText>
      <RegularText style={styles.smallText}>
        Get a call and see all here.
      </RegularText> */}

      <BigText style={styles.callsTitle}>All Calls</BigText>
      
          <View>
              <CallCard/>
          </View>
    </View>
  );
};

export default Calls;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 70,
    height: '100%',
    width: '100%',
    alignItems: 'center',
        justifyContent: 'flex-start',
    backgroundColor:'white'
  },
  img: {
    top: 20,
    height: 160,
    width: 250,
  },
  callsTitle: {
    marginBottom: 90,
  },
  subText: {
    marginTop: 40,
    fontSize: 16,
  },
  smallText: {
    fontSize: 13,
  },
  infoDisplay: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
