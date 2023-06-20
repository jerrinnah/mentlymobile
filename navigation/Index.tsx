import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Authentication from './Authentication';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Authentication />
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
