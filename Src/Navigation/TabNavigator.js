import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppColors} from '../Modules/Global/Utils/AppColors';
import Profil from '../Modules/User/Screens/Profil';
import {CATEGORY} from '../Modules/Category/Utils/Routes';
import Category from '../Modules/Category/Screens/Category';
import {PROFIL} from '../Modules/User/Utils/Routes';
import {DrawerActions} from '@react-navigation/native';
import Sepet from '../Modules/Products/Screens/Sepet';
import {SEPET} from '../Modules/Products/Utils/Routes';

const Tab = createBottomTabNavigator();
const TabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={({navigation, route}) => ({
        headerStyle: {
          backgroundColor: AppColors.WHITE,
        },
        headerTintColor: AppColors.MIDNIGHTBLUE,
        headerLeft: () => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.dispatch(DrawerActions.openDrawer());
              }}
              style={{
                paddingHorizontal: 10,
              }}>
              <Ionicons size={30} color={AppColors.MIDNIGHTBLUE} name="menu" />
            </TouchableOpacity>
          );
        },
        headerShown: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: AppColors.PRIMARY,
        tabBarInactiveTintColor: AppColors.SECONDARY,
        headerTitleAlign: 'left',
      })}>
      <Tab.Screen
        name={CATEGORY}
        component={Category}
        options={({navigation, route}) => ({
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              size={size}
              color={color}
              name={focused ? 'home' : 'home-outline'}
            />
          ),
        })}
      />
      <Tab.Screen
        name={SEPET}
        component={Sepet}
        options={{
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              size={30}
              color={color}
              name={focused ? 'basket' : 'basket-outline'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={PROFIL}
        component={Profil}
        options={{
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              size={size}
              color={color}
              name={focused ? 'person' : 'person-outline'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
