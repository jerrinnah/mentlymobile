import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';

const SearchBar = () => {
  return (
      <View style={styles.container}>
          <TextInput placeholder='Search'/>
      {/* <Text>Search...</Text> */}
      <View style={styles.box}>
        <Image
          style={styles.searchIcon}
          source={require('../../res/icons/search.png')}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    height: 50,
    width: 325,
    borderRadius: 5,
        backgroundColor: Colors.Orange500,
    opacity:0.6,
    alignItems: 'center',
  },
  searchIcon: {
    height: 15,
    width: 15,
  },
  box: {
    height: 39,
    width: 37,
    borderRadius: 10,
      backgroundColor: Colors.Orange100,
      justifyContent: 'center',
    alignItems:'center'
  },
});
