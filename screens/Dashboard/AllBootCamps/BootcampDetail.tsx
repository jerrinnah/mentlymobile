import {
  StyleSheet,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Colors from '../../../utils/Colors';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import CampDetails from '../../../components/Bootcamps/CampDetails';

export type Camp = {
  id: string;
  desc: string;
  organizer: string;
  organizeBy: string;
  start: string;
  category: string;
  location: string;
  title: string;
  end: string;
};

const Item = ({
  id,
  title,
  desc,
  organizeBy,
  organizer,
  category,
  location,
  start,
  end,
}: Camp) => (
  <CampDetails
    id={id}
    title={title}
    desc={desc}
    organizeBy={organizeBy}
    organizer={organizer}
    category={category}
    location={location}
    start={start}
    end={end} 
  />
);
const BootcampDetail = ({ route, navigation }) => {
  const [campdetail, setCampdetail] = useState<Camp[]>([]);

  const nav = useNavigation<any>();

  useEffect(() => {
    axios
      .get(
        // 'https://app.mymently.com/bootcamps/get-bootcamp?title=test bootcamp',
        'https://app.mymently.com/bootcamps/get-bootcamp?title=nerdwork&orgid=3',
        'https://app.mymently.com/bootcamps/get-bootcamp',
        // 'https://app.mymently.com/bootcamps/get-bootcamp?title=test bootcamp',
      )
      // .then(response => console.log(response.data.data));
  }, []);

  const item = route.params;

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={campdetail}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Item
              desc={item.desc}
              organizer={item.organizer}
              organizeBy={item.organizer}
              start={item.start}
              end={item.end}
              category={item.category}
              location={item.location}
              title={item.title}
              id={item.id}
            />
          )}
        />
      </View>
    </>
  );
};

export default BootcampDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textContainer: {
    top: 20,
    // backgroundColor:'orange'
  },
  title: {
  },
  img: {
    height: 254,
    width: 416,
  },
  titleHeader: {
    fontSize: 20,
  },
  titlePara: {
    fontSize: 14,
    marginTop: 15,
  },
  titleName: {
    fontSize: 14,
    marginTop: 15,
    color: Colors.Orange100,
  },
  titleIntro: {
    padding: 15,
    height: 90,
    display: 'flex',
    alignItems: 'flex-start',
    // backgroundColor:'red'
  },
  organizeBy: {
    display: 'flex',
    flexDirection: 'row',
  },
  bootcampDesc: {
    padding: 20,
    top: 20,
  },
  desc: {
    fontSize: 14,
    color: 'grey',
  },
  campInfo: {
    display: 'flex',
    flexDirection: 'row',
    width: 350,
    justifyContent: 'space-between',
    marginBottom: 30,
    // backgroundColor:'red'
  },

  detailTitle: {
    fontSize: 18,
    textAlign: 'left',
  },
  detailPara: {
    fontSize: 13,
    textAlign: 'left',
    top: 15,
  },
  textAl: {
    display: 'flex',
    // backgroundColor: 'green',
    width: 150,
  },
  applyButton: {
    top: 70,
  },
});
