import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import BackArrowButton from '../Buttons/BackArrowButton';
import BigText from '../SmallText/BigText';
import RegularText from '../SmallText/RegularText';
import BadgeList from './BadgeList';

function BadgeNotify() {
  return (
    <View style={styles.badgeContainer}>
      <Image
        style={styles.badge}
        source={require('../../res/icons/badgeLogo.png')}
      />
      <RegularText>You don’t have any badges yet!</RegularText>
    </View>
  );
}

const Badges = ({ navigation }) => {
  const returnHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <BackArrowButton onPress={returnHandler} />
        <BigText style={styles.title}>Badges</BigText>
      </View>

      <ScrollView style={styles.scroll}>
        <BadgeList />
        <BadgeList />
        <BadgeList />
        <BadgeList />
      </ScrollView>
      {/* <BadgeNotify/> */}
    </View>
  );
};

export default Badges;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  textContainer: {
    height: 160,
    width: 360,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    // backgroundColor:'blue'
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
    marginTop: 70,
    paddingLeft: 30,
  },
  title: {
    paddingLeft: 70,
    fontSize: 20,
  },
  badgeContainer: {
    height: 590,
    width: '100%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },

  badge: {
    height: 140,
    width: 130,
  },
  scroll: {
    padding: 30,
    bottom:20,
  }
});
