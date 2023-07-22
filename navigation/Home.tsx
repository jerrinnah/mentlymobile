import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from './Dashboard';
import AllNotifications from '../screens/Notifications/AllNotifications';
import Badges from '../components/Badges/Badges';
import BootcampClass from '../components/Bootcamps/BootcampClass';
import ProfileEdit from '../components/Settings/ProfileEdit';
import UpdatePassword from '../components/Settings/UpdatePassword';
import Curricullum from '../screens/Curricullum/Curricullum';
import BootcampDetail from '../screens/Dashboard/AllBootCamps/BootcampDetail';
import axios from 'axios';

const { Navigator, Screen  } = createNativeStackNavigator();

const Home = () => {
  return (
    <Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Dashboard} />
      <Screen name='notification' component={AllNotifications} />
      <Screen options={{ headerShown: false }} name='BootcampDetail' component={BootcampDetail} />
      <Screen options={{ headerShown: false }} name='BootcampClass' component={BootcampClass} />
      <Screen options={{ headerShown: false }} name='Profile' component={ProfileEdit} />
      <Screen options={{ headerShown: false }} name='Badge' component={Badges} />
      <Screen options={{ headerShown: false }} name='Password' component={UpdatePassword} />
      <Screen options={{ headerShown: false }} name='Curricullum' component={Curricullum} />
    </Navigator>
  )
}

export default Home