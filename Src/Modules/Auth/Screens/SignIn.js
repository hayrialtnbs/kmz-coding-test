import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {AppColors} from '../../Global/Utils/AppColors';

const SignIn = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: AppColors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Login</Text>
    </SafeAreaView>
  );
};
export default SignIn;