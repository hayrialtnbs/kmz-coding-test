import {observer} from 'mobx-react';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const SepetCard = ({props, item}) => {
console.log(props)
  return (
    <View>
      <Text>SepetCard.component.js</Text>
    </View>
  );
};
export default observer(SepetCard);
