import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';
import BackArrowButton from '../../components/Buttons/BackArrowButton';
import BigText from '../../components/SmallText/BigText';
import { useNavigation } from '@react-navigation/native';
import RegularText from '../../components/SmallText/RegularText';
import CurriculumItem from '../../components/Curricullum/CurriculumItem';

const Curricullum = ({ navigation }) => {
  const nav = useNavigation();

  const returnHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <BackArrowButton onPress={returnHandler} />
        <BigText style={styles.title}>Curriculum</BigText>
      </View>

      <View style={styles.tableTop}>
        <View style={styles.topic}>
          <RegularText style={styles.tapTextC}>Topic</RegularText>
        </View>
        <View style={styles.desc}>
          <RegularText style={styles.tapText}>Description</RegularText>
        </View>
        <View style={styles.week}>
          <RegularText style={styles.tapTextC}>Week</RegularText>
        </View>
      </View>

      <View>
      <ScrollView  >
        <CurriculumItem />
        <CurriculumItem />
        <CurriculumItem />
        <CurriculumItem />
        <CurriculumItem />
        <CurriculumItem />
        <CurriculumItem />
        <CurriculumItem />
        <CurriculumItem />
        <CurriculumItem />
        <CurriculumItem />
        <CurriculumItem />
        <CurriculumItem />
        <CurriculumItem />
        <CurriculumItem />
        <CurriculumItem />
        <CurriculumItem />
      </ScrollView>
      </View>

      
    </View>
  );
};

export default Curricullum;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    justifyContent: 'flex-start',
    paddingTop: 70,
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,

    paddingLeft: 30,
  },

  tableTop: {
    height: 50,
    backgroundColor: 'grey',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topic: {
    height: '100%',
    width: 100,
    backgroundColor: Colors.Orange100,
    justifyContent: 'center',
  },
  desc: {
    height: '100%',
    width: 220,
    backgroundColor: Colors.Grey500,
    justifyContent: 'center',
  },

  week: {
    height: '100%',
    width: 100,
    backgroundColor: Colors.Orange100,
    justifyContent: 'center',
  },
  tapText: {
    fontSize: 12,
  },
  tapTextC: {
    color: 'white',
    fontSize: 12,
  },
});
