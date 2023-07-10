import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import RegularText from '../SmallText/RegularText';
import Colors from '../../utils/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NotificationListItem = () => {
  return (
    <Pressable style={styles.listContainer}>
      <RegularText style={styles.notificationTitle}>
        Ui/Ux Design course has been updated
      </RegularText>
      <View>
        <RegularText style={styles.notificationdesc}>
          You get a special promo today!
        </RegularText>
      </View>

      <Text style={styles.timePosted}>2 mins ago</Text>
    </Pressable>
  );
};

export default NotificationListItem;

const styles = StyleSheet.create({
  listContainer: {
    height: 71,
    width: 325,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'flex-start',
    padding: 10,
    borderColor: Colors.Grey300,
    marginBottom:10,
  },
  notificationTitle: {
    fontSize: 15,
    textAlign: 'left',
  },
  notificationdesc: {
    fontSize: 12,
    color: Colors.Grey200
  },
  timePosted: {
    fontSize: 12,
    alignSelf:'flex-end'
  },
});
