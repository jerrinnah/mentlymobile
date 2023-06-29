import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';
import RegularText from '../SmallText/RegularText';
import BigText from '../SmallText/BigText';

const CallCard = () => {
  return (
    <View style={styles.callWidth}>
      <View style={styles.time}>
        <Text>TIME</Text>
      </View>
      <View style={styles.callRange}>
        <View style={styles.callDetails}>
          <BigText style={styles.callTitle}>Ui/Ux design class</BigText>
        </View>
        <View style={styles.classDetails}>
          <View style={styles.mentorInfo}>
            <Image
              style={styles.imgIcon}
              source={require('../../res/icons/user-circle.png')}
            />
            <RegularText style={styles.mentor}>Mentor Sam</RegularText>
          </View>
          <View style={styles.timeContainer}>
            <Image
              style={styles.clockIcon}
              source={require('../../res/icons/clock-time.png')}
            />
            <RegularText style={styles.mentor}>40 Mins</RegularText>
          </View>
        </View>
      </View>
      <View style={styles.navRight}>
        <Text>Test</Text>
      </View>
    </View>
  );
};

export default CallCard;

const styles = StyleSheet.create({
  callWidth: {
    display: 'flex',
    height: 72,
    width: 350,
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // overflow: 'hidden',
    backgroundColor: 'white',
  },
  time: {
    height: 75,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Orange100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  callDetails: {
    display: 'flex',
    alignItems: 'center',
  },
  callRange: {
    display: 'flex',
    height: 75,
    width: 230,
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'column',
    // borderEndWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    backgroundColor: 'white',
    borderRightColor: Colors.Grey400,
    borderTopColor: Colors.Grey400,
    borderBottomColor: Colors.Grey400,
  },
  classDetails: {
    display: 'flex',
    flexDirection: 'row',
  },
  imgIcon: {
    height: 22,
    width: 22,
  },
  clockIcon: {
    height: 19,
    width: 19,
  },
  mentorInfo: {
    flexDirection: 'row',
  },
  timeContainer: {
      flexDirection: 'row',
    //   width:'100%',
      marginLeft:10,
    //   backgroundColor:'red'
  },
  callTitle: {
    top: 10,
    fontSize: 19,
    marginBottom: 20,
  },
  navRight: {
    height: 75,
    width: 50,
    backgroundColor: 'white',
    borderTopEndRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: Colors.Grey400,
    borderRightColor: Colors.Grey400,
    borderBottomColor: Colors.Grey400,
    },
  
    mentor: {
        fontSize:14
    }
});
