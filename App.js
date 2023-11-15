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
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStore from './Src/Modules/Auth/Store';
import {StackNavigator} from './Src/Navigation/StackNavigator';

export const AuthContext = createContext();
const Stack = createNativeStackNavigator();
export default function App(props) {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action) {
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );
  const authContext = useMemo(
    () => ({
      signIn: async data => {
        let userToken;
        await AuthStore.Login(data);
        userToken = await AsyncStorage.getItem('@token');
        dispatch({type: 'SIGN_IN', token: userToken});
      },
    }),
    [],
  );
  useEffect(() => {}, []);
  return (
    <AuthContext.Provider value={authContext}>
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
            {state.userToken == null ? (
              <Stack.Screen name={'AUTH'} component={AuthNavigator} />
            ) : (
              <Stack.Screen
                name={'StackNavigator'}
                component={StackNavigator}
              />
            )}
          </Stack.Navigator>
        </ApplicationProvider>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
