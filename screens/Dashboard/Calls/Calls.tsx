import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import CallCard from '../../../components/Calls/CallCard';
import BigText from '../../../components/SmallText/BigText';
import RegularText from '../../../components/SmallText/RegularText';
import Colors from '../../../utils/Colors';



const Calls = () => {
  return (
    <View style={styles.container}>
    

      <BigText style={styles.callsTitle}>All Calls</BigText>

      <View>
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
    // justifyContent: 'flex-start',
    backgroundColor: 'white',
    
    
   
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
  schedule: {
    fontSize: 16,
    marginBottom: 20,
    alignSelf: 'flex-start',
    paddingLeft:30
  }
});
