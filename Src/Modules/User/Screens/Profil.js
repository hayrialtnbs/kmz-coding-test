import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {AppColors} from '../../Global/Utils/AppColors';

const Profil = props => {
  useEffect(() => {}, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: AppColors.WHITE,
      }}>
      <View>
        <Text>Profil.js</Text>
      </View>
    </SafeAreaView>
  );
};
export default Profil;
