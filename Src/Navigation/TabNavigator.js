import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppColors } from "../Modules/Global/Utils/AppColors";
import Profil from "../Modules/User/Screens/Profil";
import { CATEGORY } from "../Modules/Category/Utils/Routes";
import Category from "../Modules/Category/Screens/Category";
import { PROFIL } from "../Modules/User/Utils/Routes";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: AppColors.WHITE,
        },
        headerTintColor: AppColors.MIDNIGHTBLUE,
        headerLeft: () => {
          return (
            <TouchableOpacity
              style={{
                paddingHorizontal: 10,
              }}
            >
              <Ionicons
                size={30}
                color={AppColors.MIDNIGHTBLUE}
                name="ios-menu-sharp"
              />
            </TouchableOpacity>
          );
        },
        headerShown: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: AppColors.BLUE,
        tabBarInactiveTintColor: AppColors.SECONDARY,
        headerTitleAlign: "left",
      })}
    >
      <Tab.Screen
        name={CATEGORY}
        component={Category}
        options={({ navigation, route }) => ({
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              size={size}
              color={color}
              name={focused ? "wallet" : "wallet-outline"}
            />
          ),
        })}
      />

      <Tab.Screen
        name={PROFIL}
        component={Profil}
        options={{
          tabBarBadgeStyle: { backgroundColor: "yellow" },
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              size={size}
              color={color}
              name={focused ? "person" : "person-outline"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
