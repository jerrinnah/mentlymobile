import React, { useEffect, useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

// const Item = ({
//   <CallCard/>
// })

const Calls = () => {
  const nav = useNavigation<any>();
  const [calls, setCalls] = useState();

  // const callData = async () => {
  //   const response = await axios.post(
  //     'https://app.mymently.com/mentorship/calls/list-users/2?userType=mentee',
  //     { userType: 'mentee', id: 3 },
  //   );
  //   console.log(response.data.data);
  // };

  useEffect(() => {
    axios
      .get(
        'https://app.mymently.com/mentorship/calls/list-users/2?userType=mentee',
    ).then(response => {
        console.log(response.data.data[0].bootcampId)
      })

  })

  return (
    <SafeAreaView>
      <View style={styles.container}>
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
    marginTop: 30,
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
