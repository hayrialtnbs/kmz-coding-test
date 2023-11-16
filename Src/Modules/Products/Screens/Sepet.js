import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import ProductStore from '../Store';
import SepetCard from '../Components/SepetCard.component';

const Sepet = props => {
  const dataReq = async () => {
    await ProductStore.productsBasket();
  };

  useEffect(() => {
    dataReq();  
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ececec',
      }}>
        <Text>
          Sepet.js
        </Text>
      {/* <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={ProductStore.ProductsBasketList}
        renderItem={({item, index}) => <SepetCard item={item} {...props} />}
      /> */}
    </SafeAreaView>
  );
};
export default observer(Sepet);
