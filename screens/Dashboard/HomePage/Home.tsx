import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../../../utils/Colors';
import RegularText from '../../../components/SmallText/RegularText';
import SearchBar from '../../../components/DashboardComponents/SearchBar';
import BootCampItem from '../../../components/DashboardComponents/BootCampItem';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AllNotifications from '../../Notifications/AllNotifications';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: '6',
    title: 'Abnormal structures added to the earth sphere',
    status: 'online',
    date: '01 August 2013',
    userCount: 284,
  },
];

const baseUrl =
  'https://app.mymently.com/bootcamps/list-bootcamps?category=frontend';

type ItemProps = {
  title: string;
  userCount: number;
  coverImage: string;
  createdAt: string;
  numOfActiveMentees: number;
};

const Item = ({
  title,
  numOfActiveMentees,
  coverImage,
  createdAt,
}: ItemProps) => (
  <BootCampItem
    title={title}
    createdAt={createdAt}
    coverImage={coverImage}
    numOfActiveMentees={numOfActiveMentees}
  />
);

// const showNotification = () => {

// }

const Home = () => {
  const nav = useNavigation();

  const [showNotification, setShowNotification] = useState(false);
  const [camps, setCamps] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://app.mymently.com/bootcamps/list-bootcamps?category=frontend&take=1',
      )
      .then(response => setCamps(response.data.data[0].bootcamps));
  }, []);

  return (
    <>
      {showNotification ? (
        <AllNotifications navigation={useNavigation} />
      ) : (
        <View style={styles.container}>
          <View style={styles.topRow}>
            <View style={styles.user}>
              <View style={styles.topintro}>
                <View style={styles.welcome}>
                  <RegularText style={styles.greeting}>Hello,</RegularText>
                  <RegularText>John Smith 👋</RegularText>
                </View>

                <TouchableOpacity
                  onPress={() => setShowNotification(!showNotification)}
                >
                  <Image
                    style={styles.bell}
                    source={require('../../../res/icons/bell.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.searchBar}>
              <SearchBar />
            </View>
          </View>
          <View style={styles.courseAd}>
            <Image
              style={{ width: 325, height: 180 }}
              source={require('../../../res/images/navBackground.png')}
            />
          </View>
          <View style={styles.courseFeed}>
            <View style={styles.feedTitle}>
              <RegularText style={styles.bootcampTitle}>
                All Bootcamps
              </RegularText>
              <RegularText style={styles.seeAll}>See all</RegularText>
            </View>
            <View>
              <FlatList
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                data={camps}
                renderItem={({ item }) => (
                  <Item
                    title={item.title}
                    userCount={0}
                    coverImage={item.coverImage}
                    createdAt={item.createdAt}
                    numOfActiveMentees={item.numOfActiveMentees}
                  />
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    justifyContent: 'flex-start',
    paddingTop: 70,
    alignItems: 'center',
  },
  topRow: {
    height: '20%',
    width: 340,
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  topintro: {
    // backgroundColor: 'green',
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  greeting: {
    fontSize: 14,
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 70,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    height: 50,
    width: '50%',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  notification: {
    justifyContent: 'center',
    height: 50,
    width: '50%',
    // backgroundColor: 'red',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  bell: {
    height: 40,
    width: 40,
  },
  searchBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseAd: {
    height: 180,
    width: '100%',
    // backgroundColor: 'green',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseFeed: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'red',
    top: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  feedTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'green',
    width: '100%',
    padding: 5,
  },
  seeAll: {
    fontSize: 12,
    paddingRight: 30,
    color: Colors.Orange200,
  },
  bootcampTitle: {
    fontSize: 15,
    paddingLeft: 30,
  },
});
