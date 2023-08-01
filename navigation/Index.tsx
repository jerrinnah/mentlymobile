import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Authentication from './Authentication';
import Home from './Home';
import { useUtils } from '../store/store';

const Navigation = () => {
  const { isLoggedIn } = useUtils((state) => state)
  return (
    <NavigationContainer>
      {!isLoggedIn && <Authentication />}
      { isLoggedIn && <Home /> }
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
