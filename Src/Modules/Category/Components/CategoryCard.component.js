import React from 'react';
import {View, Text} from 'react-native';
import {Card} from '@ui-kitten/components';
import {AppColors} from '../../Global/Utils/AppColors';
import {useNavigation} from '@react-navigation/native';
import {SUBCATEGORY} from '../Utils/Routes';
import {setHeight} from '../../Global/Utils/Functions';

const CategoryCard = ({props, item}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        marginTop: 10,
      }}>
      <Card
        onPress={() =>
          navigation.navigate(SUBCATEGORY, {
            item: item,
          })
        }
        style={{
          borderRadius: 15,
          margin: 4,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
          backgroundColor: AppColors.WHITE,
          height: setHeight(20),
        }}>
        <View style={{alignItems: 'center'}}>
          <Text>{'Image'}</Text>
          <Text>{item.categoryName}</Text>
        </View>
      </Card>
    </View>
  );
};
export default CategoryCard;
