import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CATEGORY } from '../Modules/Category/Utils/Routes';
import Category from '../Modules/Category/Screens/Category';
import { AppColors } from '../Modules/Global/Utils/AppColors';

const Stack = createNativeStackNavigator();
export const StackNavigator = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        cardShadowEnabled: false,
        animation: 'default',
        headerTitleStyle: {color: AppColors.BLACK},
        headerTintColor: '#73a241',
        headerBackTitleStyle: {fontSize: 18},
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={CATEGORY}
        component={Category}
      />
    </Stack.Navigator>
  );
};
