import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {AppColors} from '../../Global/Utils/AppColors';
import ProductStore from '../Store';
import {observer} from 'mobx-react';
import ProductsCard from '../Components/ProductsCard.component';

const Products = props => {
  const data = props.route.params.item;

  const dataReq = async () => {
    await ProductStore.productsList(data.id);
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
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={ProductStore.ProductsList}
        renderItem={({item, index}) => <ProductsCard item={item} {...props} />}
      />
    </SafeAreaView>
  );
};
export default observer(Products);