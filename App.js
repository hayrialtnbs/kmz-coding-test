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
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStore from './Src/Modules/Auth/Store';
import {MainNavigator} from './Src/Navigation/MainNavigator';
import Splash from './Src/Modules/Splash/Screens/Splash.js';
import AuthServices from './Src/Modules/Auth/Service';
export const AuthContext = createContext();
const Stack = createNativeStackNavigator();
export default function App(props) {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
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
  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      let userInfo;
      try {
        userToken = await AsyncStorage.getItem('@token');
        userInfo = await AsyncStorage.getItem('@user_info');
        await AuthStore.setUserInfo(JSON.parse(userInfo));
      } catch (e) {
      } finally {
        console.log('FİNALLY');
      }

      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };
    bootstrapAsync();
  }, []);
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
            {state.isLoading ? (
              <Stack.Screen name={'Splash'} component={Splash} />
            ) : state.userToken == null ? (
              <Stack.Screen name={'AUTH'} component={AuthNavigator} />
            ) : (
              <Stack.Screen name={'MAINNAVIGATOR'} component={MainNavigator} />
            )}
          </Stack.Navigator>
        </ApplicationProvider>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
