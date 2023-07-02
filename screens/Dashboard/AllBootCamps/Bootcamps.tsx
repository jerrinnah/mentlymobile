import { StyleSheet, Text, View, FlatList, Touchable } from 'react-native';
import React, { useEffect, useState } from 'react';
import BootCampItem from '../../../components/DashboardComponents/BootCampItem';
import Colors from '../../../utils/Colors';
import BigText from '../../../components/SmallText/BigText';
import SearchBar from '../../../components/DashboardComponents/SearchBar';
import { SafeAreaView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


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

const DATA = [
  {
    id: '6',
    title: 'Network Support Technician Certificate',
    status: 'online',
    date: '01 August 2013',
    userCount: 530,
    // coverImage: require('../../../res/images/daph-eiffel-tower.jpeg')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'International Polytechnic Winter School',
    date: '01 August 2013',
    userCount: 942,
    // coverImage: require('../../../res/images/daph-eiffel-tower.jpeg')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Computer Networking - Local Area Networks and ',
    date: '31 July 2011',
    userCount: 144,
  },
  {
    id: '58694a0f-3da1-471f-bds96-145571e29d72',
    title:
      'Cybersecurity: Managing Risk in the Information Age Online Short Course',
    date: '01 Sept 2011',
    userCount: 844,
  },
  {
    id: '58694a0f-3da1-471f-bd9a6-145571e29d72',
    title: 'Digitization of the Legal Sector',
    date: '01 January 2013',
    userCount: 1832,
  },
  {
    id: '58694ae0f-3da1-471f-bd96-145571e29d72',
    title: 'Applied Quantitative Methods to Analyse Business Data',
    date: '01 August 2013',
    userCount: 443,
  },
];

type ItemProps = {
  title: string;
  userCount: number;
  coverImage: URL;
  createdAt: string;
  numOfActiveMentees: number;
};

const Item = ({title,createdAt,coverImage,numOfActiveMentees,}: ItemProps) => (
  <BootCampItem
    title={title}
    createdAt={createdAt}
    coverImage={coverImage}
    numOfActiveMentees={numOfActiveMentees}
  />
);

export type Camp = {
  id: string;
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
  
};

const Bootcamps = ({navigation}) => {
  // const nav = useNavigation<any>();

  const [camps, setCamps] = useState<Camp[]>([]);

  useEffect(() => {
    axios
      .get(
        'https://app.mymently.com/bootcamps/list-bootcamps?category=frontend&take=10',
      )
      .then(response => setCamps(response.data.data[0].bootcamps));
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
            bounces={true}
            showsVerticalScrollIndicator={false}
            data={camps}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>(navigation.navigate('BootcampDetail', {item}))}>
                <Item
                  title={item.title}
                  coverImage={item.coverImage}
                  createdAt={item.createdAt}
                  numOfActiveMentees={item.numOfActiveMentees} userCount={0}              />
              </TouchableOpacity>
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
