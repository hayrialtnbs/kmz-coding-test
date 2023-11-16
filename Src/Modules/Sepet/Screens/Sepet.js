import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {AppColors} from '../../Global/Utils/AppColors';

const Sepet = props => {
  useEffect(() => {}, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: AppColors.WHITE,
      }}>
      <View>
        <Text>Sepet.js</Text>
      </View>
    </SafeAreaView>
  );
};
export default Sepet;
