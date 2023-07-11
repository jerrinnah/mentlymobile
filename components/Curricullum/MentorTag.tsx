import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';
import RegularText from '../SmallText/RegularText';

const MentorTag = () => {
  return (
    <>
      <View style={styles.mentorContainer}>
        <RegularText style={styles.mentor}>Mentor</RegularText>
        <View style={styles.tag}>
          <Text style={styles.mentorName}>Smith James</Text>
        </View>
      </View>
    </>
  );
};

export default MentorTag;

const styles = StyleSheet.create({
    mentorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
  tag: {
    height: 20,
    width: 53,
    backgroundColor: Colors.Orange100,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mentorName: {
    fontSize: 7,
    color: 'white',
  },
  mentor: {
      fontSize: 7,
      paddingLeft:30,
  },
});
