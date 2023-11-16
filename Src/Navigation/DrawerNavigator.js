import React from 'react';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from './TabNavigator';
import {setWidth} from '../Modules/Global/Utils/Functions';
const Drawer = createDrawerNavigator();


export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      // drawerContent={props => <DrawerMenu {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: setWidth(80)},
      }}
 >
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
