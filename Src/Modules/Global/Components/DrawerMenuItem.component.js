import React, {Component, useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {observer} from 'mobx-react';
import {Divider, Icon} from '@ui-kitten/components';
import {AppColors} from '../Utils/AppColors';
import {setHeight} from '../Utils/Functions';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

function DrawerMenuItem(props) {
  const navigation = useNavigation();
  const renderIcon = (pack, icon) => {
    return <Ionicons name={icon} size={30} color={AppColors.PRIMARY} />;
  };
  const {pack, title, icon, route, subData, active, index} = props;
  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={()=>{
          navigation.navigate(route)
        }}
        style={{
          height: setHeight(6.5),
          paddingHorizontal: 8,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          borderLeftWidth: 3,
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          {renderIcon(pack, icon)}
          <Text
            style={{
              color: AppColors.BLACK,
              left:5,
              fontWeight:'600'
            }}>
            {route}
          </Text>
        </View>
        {subData && (
          <Icon
            name={'ios-chevron-down-sharp'}
            style={{
              width: 12,
              height: 12,
              color: AppColors.BLACK,
            }}
            fill={AppColors.BLACK}
            pack={'ion'}
          />
        )}
        <EvilIcons name="chevron-right" size={30} color={AppColors.GRAY} />
      </TouchableOpacity>
      <Divider />
    </View>
  );
}
export default observer(DrawerMenuItem);
