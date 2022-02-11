import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Appointments from '../screens/Appointments';
import Search from '../screens/Search';
import Favorites from '../screens/Favorites';

import DrawerCustom from '../components/DrawerCustom';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerCustom {...props} />}
      screenOptions={{
        headerShown: true,
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#F5F6FA',
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
