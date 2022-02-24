import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Appointments from '../screens/Appointments';
import Search from '../screens/Search';
import Favorites from '../screens/Favorites';

import DrawerCustom from '../components/DrawerCustom';
import {Colors} from '../config/Colors';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerCustom {...props} />}
      screenOptions={{
        headerShown: true,
        headerTitle: 'Home',
        headerTitleAlign: 'center',
        headerTitleStyle: {color: `${Colors.white}`},
        headerTintColor: `${Colors.white}`,
        headerStyle: {
          backgroundColor: `${Colors.primary}`,
          shadowOpacity: 0,
          elevation: 0,
        },
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Appointments" component={Appointments} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
};
