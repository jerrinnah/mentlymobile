import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import CallCard from '../../../components/Calls/CallCard';
import BigText from '../../../components/SmallText/BigText';
import RegularText from '../../../components/SmallText/RegularText';
import Colors from '../../../utils/Colors';

const Calls = () => {
  return (
    <SafeAreaView>
      <View  style={styles.container}>
        <BigText style={styles.callsTitle}>All Calls</BigText>

        <View style={styles.nextCallCard}>
          <RegularText>Begins in 20 minutes 🔔</RegularText>
          <CallCard />
        </View>

        <BigText style={styles.schedule}>Scheduled Calls</BigText>

        <View>
          <ScrollView>
            <CallCard />
            <CallCard />
            <CallCard />
            <CallCard />
            <CallCard />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Calls;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: Colors.White,
  },
  img: {
    top: 20,
    height: 160,
    width: 250,
  },
  callsTitle: {
    // marginBottom: 90,
  },
  nextCallCard: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // backgroundColor: 'blue',
    marginTop:30,
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
  schedule: {
    fontSize: 16,
    marginBottom: 20,
    alignSelf: 'flex-start',
    paddingLeft: 30,
    // backgroundColor:'red'
  },
});
