import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import Colors from '../../../utils/Colors';
import RegularText from '../../../components/SmallText/RegularText';
import SearchBar from '../../../components/DashboardComponents/SearchBar';
import BootCampItem from '../../../components/DashboardComponents/BootCampItem';

const DATA = [
  {
    id: '6',
    title: 'Abnormal structures added to the earth sphere',
    status: 'online',
    date: '01 August 2013',
    userCount: 284,
  },
];

const baseUrl = "https://app.mymently.com/bootcamps/list-bootcamps?category=frontend";


type ItemProps = { title: string; date: string; userCount: number };

const Item = ({ title, date, userCount }: ItemProps) => (
  <BootCampItem title={title} date={date} userCount={userCount} />
);

const Home = () => {
    
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.user}>
          <View style={styles.welcome}>
            <RegularText style={styles.greeting}>Hello,</RegularText>
            <RegularText>John Smith 👋</RegularText>
          </View>
          <View style={styles.notification}>
            <Image
              style={styles.bell}
              source={require('../../../res/icons/bell.png')}
            />
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
          <RegularText style={styles.bootcampTitle}>All Bootcamps</RegularText>
          <RegularText style={styles.seeAll}>See all</RegularText>
        </View>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => (
              <Item title={item.title} date={item.date} userCount={item.userCount} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
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
    width: '100%',
    // backgroundColor:'red'
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
