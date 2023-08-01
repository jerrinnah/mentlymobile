import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Colors from '../../../utils/Colors';
import RegularButton from '../../../components/Buttons/RegularButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../../store/store';
import BigText from '../../../components/SmallText/BigText';
import { ScrollView } from 'react-native-gesture-handler';
import CurIntro from '../../../components/Curriculum/CurIntro';

const SingleBootcamp = ({ route, navigation: { goBack } }) => {
  const user = useUser(state => state);

  // const applyHandler=> {

  // }skippT55ed

  const [detail, setDetail] = useState();
  const nav = useNavigation();

  // Recieveing the data from bootcampscreen
  const {
    id,
    orgId,
    bootTitle,
    organizer,
    phone,
    desc,
    date,
    activeMentees,
    img,
    category,
    campDate,
    venue,
  } = route.params;

  let createdDate = date;
  let postedTime = new Date(createdDate).getTime();
  let postedDay = new Date(createdDate).getDay();
  let postedMonth = new Date(createdDate).getMonth() + 1;
  let postedYear = new Date(postedTime).getFullYear();

  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://app.mymently.com/bootcamps/get-bootcamp/?title=test bootcamp&orgId=7',
  //     )
  //     .then(response => setDetail(response.data.data[0]));
  //   //   .then(response => console.log(response.data.data));
  // }, []);

  const func = async () => {
    const response = await axios.post(
      `https://app.mymently.com/bootcamps/request-access/`,
      {
        menteeName: user.user.firstname,
        menteeEmail: user.user.email,
        phone: user.user.phone,
        bootcampTitle: bootTitle,
      },

      // nav.navigate('home')
    );
  };

  console.log(user.user.firstname);
  console.log(user.user.email);
  console.log(user.user.phone);
  console.log(bootTitle);

  return (
    <View style={styles.container}>
      <View style={styles.contentColumn}>
        <Ionicons
          onPress={goBack}
          style={styles.arrowBack}
          name="arrow-back"
          size={35}
          color="white"
        />

        <Image style={styles.img} source={{ uri: img }} />
      </View>

      <View style={styles.textContent}>
        <Text style={{ fontSize: 30, fontWeight: '700' }}> {bootTitle}</Text>
        {/* <Text> Organization id: {orgId}</Text> */}

        <View style={styles.textDesc}>
          <Text>{id}</Text>
          <Text style={styles.organized}>Organised by: {organizer}</Text>
          <Text>
            Lorem ipsum sit amet consectetur, adipisicing elit. Harum dolore
            perspiciatis assumenda commodi eligendi eius? Beatae eligendi
            suscipit cumque velit aperiam dolorem inventore. Dolore atque cum
            odio, sit dolorem error?
          </Text>
        </View>

        <View style={{ height: 300, justifyContent:'center', alignItems:'center'}}>
          <ScrollView>
            <View style={styles.titleBorder}>
              <BigText style={{ fontSize: 18, color: Colors.NavyBlue100 }}>
                Overview
              </BigText>
            </View>

            <View style={styles.column}>
              <View>
                <View style={styles.infoItem}>
                  <Text style={styles.subTitle}>Date</Text>
                  {/* <Text> {date}</Text> */}
                  <View style={styles.date}>
                    <Text>{postedDay}-</Text>
                    <Text>{postedMonth}-</Text>
                    <Text>{postedYear}</Text>
                  </View>
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

            <View style={styles.curriculumContainer}>
              <CurIntro/>
            </View>
          </ScrollView>
        </View>
      </View>

      {/* <RegularButton onPress={() => func('hey')}>Apply Here</RegularButton> */}
      <RegularButton onPress={func}>Apply Here</RegularButton>
    </View>
  );
};

export default SingleBootcamp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'grey',
    marginBottom: 50,
  },
  img: {
    minHeight: 274,
    width: '100%',
    backgroundColor: 'orange',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // bottom: 30,
    position: 'relative',
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
    // backgroundColor: 'blue',
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
    justifyContent: 'space-between',
    height: 200,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 100,
    // paddingBottom:60,
  },
  infoItem: {
    marginBottom: 10,
  },
  arrowBack: {
    position: 'absolute',
    top: 50,
    zIndex: 1,
    left: 20,
  },
  date: {
    flexDirection: 'row',
  },

  titleBorder: {
    height: 40,
    width: '100%',
    backgroundColor: Colors.Grey400,
    justifyContent: 'center',
    paddingLeft: 20,
    marginBottom: 20,
    marginTop: 20,


  },
  curriculumContainer: {
    height: 256,
    alignSelf: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue', 
    // margin: 10,
    // marginBottom: 50,
    paddingBottom:5,

  },
});
