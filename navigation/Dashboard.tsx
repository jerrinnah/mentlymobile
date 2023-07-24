import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import Home from '../screens/Dashboard/HomePage/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bootcamps from '../screens/Dashboard/AllBootCamps/Bootcamps';
import Calls from '../screens/Dashboard/Calls/Calls';
import Settings from '../screens/Dashboard/Settings/Settings';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import Colors from '../utils/Colors';
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

let home = require('../res/icons/home.png');
let lighHome = require('../res/icons/home_light.png');

let bootcamp = require('../res/icons/bootcamp.png');
let lighBootcamp = require('../res/icons/bootcamp_light.png');

let calls = require('../res/icons/calendar.png');
let lightCalls = require('../res/icons/calendar_light.png');

let settings = require('../res/icons/settings.png');
let lightSettings = require('../res/icons/settings_light.png');

const Dashboard = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarActiveTintColor: Colors.NavyBlue100,
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Image style={{ height: 25, width: 25 }} source={home} />
            ) : (
              <Image style={{ height: 25, width: 25 }} source={lighHome} />
            ),
        }}
      />
      <Tab.Screen
        
        name="Bootcamps"
        component={Bootcamps}
        options={{
          // tabBarStyle: { height: 50 },
          // tabBarLabelStyle: {
          //   height:15
          // },
          tabBarActiveTintColor: Colors.NavyBlue100,
          headerShown: false,
          tabBarLabel: 'Bootcamps',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Image style={{ height: 25, width: 25, }} source={bootcamp}  />
            ) : (
              <Image style={{ height: 25, width: 25 }} source={lighBootcamp} />
            ),
       
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarActiveTintColor: Colors.NavyBlue100,
          headerShown: false,
          tabBarLabel: 'Calls',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Image style={{ height: 25, width: 25 }} source={calls} />
            ) : (
              <Image style={{ height: 25, width: 25 }} source={lightCalls} />
            ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarActiveTintColor: Colors.NavyBlue100,
          headerShown:false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Image style={{ height: 25, width: 25 }} source={settings} />
            ) : (
              <Image style={{ height: 25, width: 25 }} source={lightSettings} />
            ),
        }}
      />
     
    </Tab.Navigator>

  );
};

export default Dashboard;

const styles = StyleSheet.create({});
