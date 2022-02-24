import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import OnBoarding from '../screens/OnBoarding';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MainTab from './MainTab';
import MainDrawer from './MainDrawer';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import EmailVerificationScreen from '../screens/EmailVerificationScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';

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
    <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
    <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
    <Stack.Screen
      name="EmailVerificationScreen"
      component={EmailVerificationScreen}
    />
  </Stack.Navigator>
);
