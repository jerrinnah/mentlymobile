import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding/Onboarding';
import Welcome from './Welcome';
import Home from './Home';
import SignIn from '../screens/SignIn';
import MenteeSignup from '../screens/SignUp/MenteeSignup';
import OtpVerification from '../screens/SignIn/OtpVerification';
import LogIn from '../screens/SignIn/UserSignin/LogIn';
import ForgetPassword from '../screens/SignIn/ForgetPassword/ForgetPassword';
import Dashboard from './Dashboard';
import BootcampDetail from '../screens/Dashboard/AllBootCamps/BootcampDetail';
import BootcampClass from '../components/Bootcamps/BootcampClass';
import ProfileEdit from '../components/Settings/ProfileEdit';
import Badges from '../components/Badges/Badges';
import UpdatePassword from '../components/Settings/UpdatePassword';
import Curricullum from '../screens/Curricullum/Curricullum';

const Stack = createNativeStackNavigator();

// export type RootStackParams = {
//   Onboarding;
//   Welcome;
//   Home;
//   SignIn;
//   MenteeSignup;
//   OtpVerification;
//   LogIn;
//   ForgetPassword;
//   Dashboard;
//   BootcampDetail;

// }

const Authentication = () => {
  return (
   
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen options={{headerShown:false}} name='Onboarding' component={Onboarding}/>
          <Stack.Screen options={{headerShown:false}} name='Welcome' component={Welcome}/>
          <Stack.Screen options={{headerShown:false}} name='Home' component={Home}/>
          <Stack.Screen options={{headerShown:false}} name='SignIn' component={SignIn}/>
          <Stack.Screen options={{headerShown:false}} name='MenteeSignup' component={MenteeSignup}/>
          <Stack.Screen options={{headerShown:false}} name='OtpVerification' component={OtpVerification}/>
          <Stack.Screen options={{headerShown:false}} name='LogIn' component={LogIn}/>
          <Stack.Screen options={{ headerShown: false }} name='ForgetPassword' component={ForgetPassword} />
          <Stack.Screen options={{ headerShown: false }} name='Dashboard' component={Dashboard} />
          <Stack.Screen options={{ headerShown: false }} name='BootcampDetail' component={BootcampDetail} />
          <Stack.Screen options={{ headerShown: false }} name='BootcampClass' component={BootcampClass} />
          <Stack.Screen options={{ headerShown: false }} name='Profile' component={ProfileEdit} />
          <Stack.Screen options={{ headerShown: false }} name='Badge' component={Badges} />
          <Stack.Screen options={{ headerShown: false }} name='Password' component={UpdatePassword} />
          <Stack.Screen options={{ headerShown: false }} name='Curricullum' component={Curricullum} />
          
      
      </Stack.Navigator>
  )
}

export default Authentication

const styles = StyleSheet.create({})