import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';
import MentorTag from './MentorTag';
import RegularText from '../SmallText/RegularText';

const CurriculumItem = () => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.topic}>
        <View style={styles.id}>
          <RegularText style={styles.number}>1</RegularText>
        </View>
        <Text style={styles.topicTitle}>Introduction to frontend </Text>
      </View>
      <View style={styles.desc}>
        <Text style={styles.description}>
          this class covers html css and the basic forms of a static website{' '}
        </Text>
      </View>
      <View style={styles.week}>
        <RegularText style={styles.period}>1</RegularText>
        <MentorTag />
      </View>
    </View>
  );
};

export default CurriculumItem;

const styles = StyleSheet.create({
  id: {
    height: 15,
    width: 10,
    backgroundColor: Colors.Orange100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 7,
  },
  title: {
    fontSize: 28,
  },

  titleContainer: {
    height: 50,
    flexDirection: 'row',
    width: '100%',
  },

  topic: {
    height: '100%',
    width: 100,
    justifyContent: 'space-between',
    paddingTop: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    borderRightColor: Colors.Grey400,
    borderBottomColor: Colors.Grey400,
  },
  desc: {
    height: '100%',
    width: 220,
    backgroundColor: Colors.white,
      justifyContent: 'center',
      borderWidth: 1,
    borderColor:'white',
    borderBottomColor: Colors.Grey400,
  },

  week: {
    height: '100%',
    width: 95,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: 'white',
    borderLeftColor: Colors.Grey400,
    borderBottomColor: Colors.Grey400,
  },
  tapText: {
    fontSize: 12,
  },
  tapTextC: {
    color: 'white',
    fontSize: 12,
  },
  topicTitle: {
    fontSize: 12,
  },

  description: {
    fontSize: 12,
    paddingLeft: 10,
  },
  period: {
    fontSize: 11,
    alignSelf: 'center',
  },
});
