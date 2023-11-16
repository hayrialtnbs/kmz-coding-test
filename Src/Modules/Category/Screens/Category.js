import React, {useEffect, useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {AppColors} from '../../Global/Utils/AppColors';
import CategoryStore from '../Store';
import {observer} from 'mobx-react';
import {Card, Icon, Input} from '@ui-kitten/components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoryCard from '../Components/CategoryCard.component';

const Category = props => {
  const [SlideInLeft, setSlideInLeft] = useState(new Animated.Value(0));
  const [slideUpValue, setSlideUpValue] = useState(new Animated.Value(0));
  const [fadeValue, setFadeValue] = useState(new Animated.Value(0));
  const [value, setvalue] = useState('');
  const dataReq = async () => {
    await CategoryStore.categoryList();
  };
  const _start = () => {
    return Animated.parallel([
      Animated.timing(SlideInLeft, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideUpValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const renderHeaderComponent = () => {
    return (
      <View style={{padding: 5, backgroundColor: '#ececec'}}>
        <Input
          style={{
            borderRadius: 15,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          }}
          value={value}
          placeholder="Search..."
          accessoryLeft={<Ionicons name={'search-outline'} size={20} />}
          onChangeText={text => {
            setvalue(text);
            CategoryStore.searchCategoryData(text);
          }}
        />
      </View>
    );
  };
  useEffect(() => {
    dataReq();
    _start();
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ececec',
      }}>
      <Animated.View
        style={{
          transform: [
            {
              translateX: slideUpValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-600, 0],
              }),
            },
          ],
          flex: 1,
        }}>
        <FlatList
          numColumns={2}
          keyExtractor={item => item.id}
          data={CategoryStore.CategoryList}
          ListHeaderComponent={renderHeaderComponent()}
          renderItem={({item, index}) => (
            <CategoryCard item={item} {...props} />
          )}
        />
      </Animated.View>
    </SafeAreaView>
  );
};
export default observer(Category);