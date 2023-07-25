import { StyleSheet, Text, View, FlatList, Touchable, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import BootCampItem from '../../../components/DashboardComponents/BootCampItem';
import Colors from '../../../utils/Colors';
import BigText from '../../../components/SmallText/BigText';
import SearchBar from '../../../components/DashboardComponents/SearchBar';
import { SafeAreaView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '@ailibs/feather-react-ts'


// const Data = [
//     {
//       id: '1',
//       status: 'online',
//       title: 'EPR Systems and Management',
//       date: '01 August 2013',
//       menteees: '237',
//       img: require(''),
//     },
//     {
//       id: '2',
//       status: 'online',
//       title: 'Manipulation of physiz fuel',
//       date: '01 June 2013',
//       menteees: '237',
//       img: require(''),
//     },
//     {
//       id: '3',
//       status: 'online',
//       title: 'Phases of growth assesment',
//       date: '01 August 2013',
//       menteees: '237',
//       img: require(''),
//     },
//     {
//       id: '4',
//       status: 'online',
//       title: 'Coral phases',
//       date: '01 August 2013',
//       menteees: '237',
//       img: require(''),
//     },
//     {
//       id: '5',
//       status: 'online',
//       title: 'Interneal fixes',
//       date: '01 August 2013',
//       menteees: '237',
//       img: require(''),
//     },
//     {
//       id: '6',
//       status: 'online',
//       title: 'Abnormal structures',
//       date: '01 August 2013',
//       menteees: '237',
//       img: require(''),
//     },
//   ];


type ItemProps = {
  title: string;
  userCount: number;
  coverImage: URL;
  createdAt: string;
  numOfActiveMentees: number;
  orgId: string;

};

const Item = ({title,createdAt,coverImage,numOfActiveMentees, orgId}: ItemProps) => (
  <BootCampItem
    title={title}
    createdAt={createdAt}
    coverImage={coverImage}
    numOfActiveMentees={numOfActiveMentees}
  />
);

export type Camp = {
  id: string;
  orgId: string;
  title: string;
  desc: string;
  coverImage: URL;
  category: string;
  email: string;
  phone: number;
  active: boolean;
  duration: number;
  createdAt: string;
  numOfActiveMentees: number;
  organizer: string;
  location: string;
};

const Bootcamps = ({route}) => {
  const nav = useNavigation<any>();

  const [camps, setCamps] = useState<Camp[]>([]);

  useEffect(() => {
    axios
      .get(
        'https://app.mymently.com/bootcamps/list-bootcamps?category=frontend&take=20',
      )
      .then(response => setCamps(response.data.data[0].bootcamps));
      // .then(response =>console.log(response.data.data[0].bootcamps));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BigText style={styles.bootcampTitle}> All Bootcamps</BigText>
        <SearchBar />
      </View>
      <View>
        <SafeAreaView style={styles.flatlist}>
          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            data={camps}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Pressable onPress={() => nav.navigate('Singlebootcamp', {
                orgId: item.orgId,
                bootTitle: item.title,
                orgDesc: item.desc,
                orgPhone: item.phone,
                orgCategory: item.phone,
                activeMentees: item.numOfActiveMentees,
                orgOrganizer: item.organizer,
                bootcampImg: item.coverImage,
                campVenue: item.location,
                date: item.createdAt,
                campCategory: item.category,

            
              })}>
                <Item
                  title={item.title}
                  coverImage={item.coverImage}
                  createdAt={item.createdAt}
                  numOfActiveMentees={item.numOfActiveMentees} userCount={0} orgId={item.orgId}/>
              </Pressable>
            )}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Bootcamps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    justifyContent: 'flex-start',
    paddingTop: 70,
    alignItems: 'center',
  },
  topBar: {
    // backgroundColor: 'red',
    // marginBottom: 80,
    justifyContent: 'space-around',
    height: 100,
    // paddingBottom:30,
  },
  bootcampTitle: {
    fontSize: 22,
    color: Colors.NavyBlue100,
  },
  flatlist: {
    // top:70,
    // marginBottom:90,
    // paddingTop:90,
  },
});
