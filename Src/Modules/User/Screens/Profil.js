import React, {useContext, useEffect} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../../Global/Utils/AppColors';
import {setHeight, setWidth} from '../../Global/Utils/Functions';
import { AuthContext } from '../../../../App';

const Profil = props => {
  const {signOut} = useContext(AuthContext);
  useEffect(() => {}, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ececec',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
     <Text>
      Profil.js
      </Text>
    </SafeAreaView>
  );
};
export default Profil;
