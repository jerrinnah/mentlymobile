import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Colors from '../../../utils/Colors';
import RegularButton from '../../../components/Buttons/RegularButton';

const SingleBootcamp = ({ route }) => {
  const [detail, setDetail] = useState();

  const orgId = route.params.orgId;
  const title = route.params.bootTitle;
  const organizer = route.params.orgOrganizer;
  const phone = route.params.orgPhone;
  const desc = route.params.orgDesc;
  const date = route.params.activeMentees;
  const activeMentees = route.params.activeMentees;
  const img = route.params.bootcampImg;
  const category = route.params.campCategory;
  const campDate = route.params.date;
  const venue = route.params.campVenue;

  //   useEffect(() => {
  //     axios
  //       .get(
  //         'https://app.mymently.com/bootcamps/get-bootcamp/?title=test bootcamp&orgId=7',
  //       )
  //       .then(response => setDetail(response.data.data[0]));
  //     //   .then(response => console.log(response.data.data));
  //   }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentColumn}>
        <Image style={styles.img} source={{ uri: img }} />
      </View>

      <View style={styles.textContent}>
        <Text style={{ fontSize: 25 }}> {title}</Text>
        {/* <Text> Organization id: {orgId}</Text> */}

        <View style={styles.textDesc}>
          <Text style={styles.organized}>Organised by: {organizer}</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            dolore perspiciatis assumenda commodi eligendi eius? Beatae eligendi
            suscipit cumque velit aperiam dolorem inventore. Dolore atque cum
            odio, sit dolorem error?
          </Text>
        </View>

        <View style={styles.column}>
          <View>
            <View style={styles.infoItem}>
              <Text style={styles.subTitle}>Date</Text>
              <Text> {campDate}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.subTitle}>Language</Text>
              <Text>English</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.subTitle}>Bootcamp Type</Text>
              <Text>Virtual</Text>
            </View>
          </View>
          <View>
            <View style={styles.infoItem}>
              <Text style={styles.subTitle}>Time</Text>
              <Text>9:00am</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.subTitle}>Category</Text>
              <Text>{category}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.subTitle}>Venue</Text>
              <Text>{venue}</Text>
            </View>
          </View>
        </View>
      </View>
      <RegularButton onPress={null}>ApplyHere</RegularButton>
    </View>
  );
};

export default SingleBootcamp;

const styles = StyleSheet.create({
  container: {
        flex: 1,
      alignItems:'center'
    // backgroundColor: 'grey',
  },
  img: {
    minHeight: 274,
    width: '100%',
    backgroundColor: 'orange',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // bottom: 30,
  },
  textContent: {
    paddingTop: 20,
    padding: 10,
    height: '60%',
    // backgroundColor: 'red',
  },
  contentColumn: {
    flexDirection: 'row',
    width: '100%',
    //   backgroundColor: 'blue',
    justifyContent: 'space-between',
  },
  subTitle: {
    fontSize: 19,
    fontWeight: '500',
    color: Colors.NavyBlue100,
    marginBottom: 13,
  },
  organized: {
    // top: 10,
  },

  textDesc: {
    // backgroundColor: 'blue',
    height: 150,
    padding: 10,
    justifyContent: 'space-around',
  },
  column: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'green',
    justifyContent: 'space-around',
    height: 200,
    paddingTop: 30,
  },
  infoItem: {
    marginBottom: 10,
    height: 50,
  },
});
