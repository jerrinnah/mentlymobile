import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import BigText from '../../components/SmallText/BigText';
import Colors from '../../utils/Colors';
import BackArrowButton from '../../components/Buttons/BackArrowButton';
import NotificationListItem from '../../components/Notifications/NotificationListItem';
import RegularText from '../../components/SmallText/RegularText';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';



type Navigate = {
  sendBack: () => void,
  
}

const AllNotifications = ({navigation}) => {
  const nav = useNavigation();

const sendBack = () => {
  // Alert.alert('pused')
  nav.goBack();
}



  return (
    <View style={styles.container}>
      <View style={styles.notificationTop}>
        <BackArrowButton onPress={sendBack} />
        <BigText style={styles.title}>Notifications</BigText>
      </View>
      <RegularText style={styles.subTitle}>Today</RegularText>
      <ScrollView>
        <View>
          <NotificationListItem />
          <NotificationListItem />
         
        </View>
        
      </ScrollView>
      <RegularText style={styles.subTitle}>Yesterday</RegularText>

        <ScrollView>
        <NotificationListItem />
          <NotificationListItem />
          <NotificationListItem />
          <NotificationListItem />
          <NotificationListItem />
        </ScrollView>
    </View>
  );
};

export default AllNotifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  notificationTop: {
    flexDirection: 'row',
    marginTop: 50,
    padding: 20,
    // backgroundColor: 'blue',
    width: '100%',
  },
  title: {
    paddingLeft: 30,
  },
  notificationPage: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'green',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 14,
    color: Colors.NavyBlue100,
    alignSelf: 'flex-start',
    paddingLeft: 50,
    paddingBottom:20,
  },
});
