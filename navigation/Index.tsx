import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Authentication from './Authentication';
import Home from './Home';

const Navigation = () => {
  const [isLoggedin, setIsLoggedIn] = React.useState(false);
  return (
    <NavigationContainer>
      {!isLoggedin && <Authentication />}
      { isLoggedin && <Home /> }
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
