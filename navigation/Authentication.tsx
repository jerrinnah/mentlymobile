import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding/Onboarding';
import Welcome from './Welcome';
import Home from './Home';
import Dashboard from './Dashboard';
import SignIn from '../screens/SignIn.tsx';

const Stack = createNativeStackNavigator();

const Authentication = () => {
  return (
   
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen options={{headerShown:false}} name='Onboarding' component={Onboarding}/>
          <Stack.Screen options={{headerShown:false}} name='Welcome' component={Welcome}/>
          <Stack.Screen options={{headerShown:false}} name='Home' component={Home}/>
          {/* <Stack.Screen options={{headerShown:false}} name='SignUp' component={Dashboard}/> */}
          <Stack.Screen options={{headerShown:false}} name='SignIn' component={SignIn}/>
      </Stack.Navigator>
  )
}

export default Authentication

const styles = StyleSheet.create({})