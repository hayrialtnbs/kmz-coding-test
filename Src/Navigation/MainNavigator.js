import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerNavigator} from '../Navigation/DrawerNavigator';
import {Menus, otherMenu} from './MainScreens';
import {AppColors} from '../Modules/Global/Utils/AppColors';

const MainStack = createNativeStackNavigator();
export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        headerBackTitle: 'Geri',
        headerTintColor: AppColors.MIDNIGHTBLUE,
        headerShadowVisible: false,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'normal',
        },
      }}>
      <MainStack.Screen name={'BottomMenu'} component={DrawerNavigator} />
      {Menus.map((item, index) => {
        if (!item.children) {
          return (
            <MainStack.Screen
              key={index}
              name={item.route}
              component={item.component}
              title={item.title}
              options={{
                headerShown: true,
              }}
            />
          );
        } else {
          let arr = [];
          for (let index = 0; index < item.children.length; index++) {
            if (item.children[index].route) {
              arr.push(
                <MainStack.Screen
                  key={index}
                  name={item.children[index].route}
                  component={item.children[index].component}
                  options={{
                    headerShown: true,
                  }}
                />,
              );
            }
          }
          return arr;
        }
      })}
      {otherMenu.map((item, index) => {
        return (
          <MainStack.Screen
            key={index}
            name={item.route}
            component={item.component}
            title={null}
            options={{
              headerShown: true,
            }}
          />
        );
      })}
    </MainStack.Navigator>
  );
};
