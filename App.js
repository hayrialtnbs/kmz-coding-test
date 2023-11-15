import React, {createContext, useEffect, useMemo, useReducer} from 'react';
import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {AuthNavigator} from './Src/Navigation/AuthNavigator';
import {AppColors} from './Src/Modules/Global/Utils/AppColors';
import {IonIconsPack} from './Src/Assets/Icons/IonIconsPack';
import SignIn from './Src/Modules/Auth/Screens/SignIn';
import {SIGNIN} from './Src/Modules/Auth/Utils/Routes';

const Stack = createNativeStackNavigator();
export default function App(props) {
  useEffect(() => {}, []);
  return (
      <NavigationContainer>
        <IconRegistry icons={[EvaIconsPack, IonIconsPack]} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <StatusBar
            backgroundColor={AppColors.WHITE}
            barStyle="dark-content"
          />
          <Stack.Navigator
            screenOptions={{
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              headerShown: false,
            }}>
            <Stack.Screen name={SIGNIN} component={SignIn} />

            {/* {state.userToken == null ? (
              <Stack.Screen name={'AUTH'} component={AuthNavigator} />
            ) : (
              <Stack.Screen
                name={'StackNavigator'}
                component={StackNavigator}
              />
            )} */}
          </Stack.Navigator>
        </ApplicationProvider>
      </NavigationContainer>
  );
}