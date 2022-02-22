import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import OnBoarding from '../screens/OnBoarding';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MainTab from '../stacks/MainTab';

import MainDrawer from './MainDrawer';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="OnBoarding" component={OnBoarding} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="MainTab" component={MainTab} />
    <Stack.Screen
      name="MainDrawer"
      component={MainDrawer}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
