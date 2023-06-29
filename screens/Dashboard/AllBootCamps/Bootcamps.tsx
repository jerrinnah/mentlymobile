import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import BootCampItem from '../../../components/DashboardComponents/BootCampItem';
import Colors from '../../../utils/Colors';
import RegularText from '../../../components/SmallText/RegularText';
import BigText from '../../../components/SmallText/BigText';
import SearchBar from '../../../components/DashboardComponents/SearchBar';
import { SafeAreaView } from 'react-native';

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
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'International Polytechnic Winter School',
    date: '01 August 2013',
    userCount: 942,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Computer Networking - Local Area Networks and ',
    date: '31 July 2011',
    userCount: 144,
  },
  {
    id: '58694a0f-3da1-471f-bds96-145571e29d72',
    title: 'Cybersecurity: Managing Risk in the Information Age Online Short Course',
      date: '01 Sept 2011',
      userCount:844,
  },
  {
    id: '58694a0f-3da1-471f-bd9a6-145571e29d72',
    title: 'Digitization of the Legal Sector',
      date: '01 January 2013',
      userCount:1832,
  },
  {
    id: '58694ae0f-3da1-471f-bd96-145571e29d72',
    title: 'Applied Quantitative Methods to Analyse Business Data',
      date: '01 August 2013',
      userCount:443,
  },
];

type ItemProps = { title: string; date: string; userCount: number };

const Item = ({ title, date, userCount }: ItemProps) => (
  <BootCampItem title={title} date={date} userCount={userCount} />
);

const Bootcamps = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BigText style={styles.bootcampTitle}> All Bootcamps</BigText>
        <SearchBar />
      </View>
      <View>
        {/* <BootCampItem />
        <BootCampItem />
        <BootCampItem /> */}
    <SafeAreaView>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.title} date={item.date} userCount={item.userCount} />
          )}
          keyExtractor={item => item.id}
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
    marginBottom: 15,
    justifyContent: 'space-around',
    height: 100,
  },
  bootcampTitle: {
    fontSize: 22,
    color: Colors.NavyBlue100,
  },
});
