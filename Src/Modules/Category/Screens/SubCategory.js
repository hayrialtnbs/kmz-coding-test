import React, {useEffect} from 'react';
import {View, Text,SafeAreaView, FlatList} from 'react-native';
import {Card} from '@ui-kitten/components';
import {AppColors} from '../../Global/Utils/AppColors';
import {useNavigation} from '@react-navigation/native';
import CategoryStore from '../Store';
import SubCategoryCard from '../Components/SubCategoryCard.component';
import { observer } from 'mobx-react';
const SubCategory = props => {
  const item = props?.route?.params?.item;
  const navigation = useNavigation();
  const dataReq = async () => {
    await CategoryStore.subCategory(item.id);
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
        data={CategoryStore.SubCategoryList}
        renderItem={({item, index}) => (
          <SubCategoryCard item={item} {...props} />
        )}
      />
  </SafeAreaView>
  );
};
export default observer(SubCategory);