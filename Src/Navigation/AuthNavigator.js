import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SIGNIN} from '../Modules/Auth/Utils/Routes';
import SignIn from '../Modules/Auth/Screens/SignIn';

const Stack = createNativeStackNavigator();
export const AuthNavigator = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardShadowEnabled: false,
      }}>
      <Stack.Screen name={SIGNIN} component={SignIn} />
    </Stack.Navigator>
  );
};
