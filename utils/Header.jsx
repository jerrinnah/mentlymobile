import { StyleSheet, Text } from 'react-native';
import React from 'react';

const Header = props => {
  return (
    <Text style={[styles.defaultStyle, props.style]}>{props.children}</Text>
  );
};

export default Header;

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: 20,
    fontFamily: 'Montserrat',
    // fontWeight: 200,
  },
});
