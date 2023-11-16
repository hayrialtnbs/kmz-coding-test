import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card} from '@ui-kitten/components';
import {AppColors} from '../../Global/Utils/AppColors';
import {useNavigation} from '@react-navigation/native';
import {SUBCATEGORY} from '../Utils/Routes';
import {setHeight, setWidth} from '../../Global/Utils/Functions';
import {PRODUCTS} from '../../Products/Utils/Routes';
import {observer} from 'mobx-react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductsCard = ({props, item}) => {
  const navigation = useNavigation();
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
          height: setHeight(27),
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{
              width: 150,
              height: 150,
              resizeMode:'center'
            }}
            source={{
              uri: item.productImages[0].imagePath,
            }}
          />
          <Text
            style={{
              color: AppColors.MIDNIGHTBLUE,
              fontWeight: '600',
              fontSize: 15,
              textAlign: 'center',
            }}>
            {item.stockName}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text>
            {item.priceVat} {''}
            {item.currency}
          </Text>
          <View
            style={{
              backgroundColor: AppColors.PRIMARY,
              borderRadius:20
            }}>
            <Ionicons
              name={'add-circle-outline'}
              size={30}
              color={AppColors.WHITE}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};
export default observer(ProductsCard);
