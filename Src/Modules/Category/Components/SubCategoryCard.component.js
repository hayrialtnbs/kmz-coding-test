import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card} from '@ui-kitten/components';
import {AppColors} from '../../Global/Utils/AppColors';
import {useNavigation} from '@react-navigation/native';
import {SUBCATEGORY} from '../Utils/Routes';
import {setHeight, setWidth} from '../../Global/Utils/Functions';

const SubCategoryCard = ({props, item}) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 10,
      }}>
      <Card
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
          height: setHeight(25),
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{
              width: 150,
              height: 150,
            }}
            source={{
              uri: item.imagePath.imagePath,
            }}
          />
          <Text
            style={{
              color: AppColors.MIDNIGHTBLUE,
              fontWeight: '600',
              textAlign: 'center',
              fontSize: 17,
            }}>
            {item.categoryName}
          </Text>
        </View>
      </Card>
    </View>
  );
};
export default SubCategoryCard;