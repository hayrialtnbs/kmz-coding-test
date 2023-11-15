import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {AppColors} from '../Utils/AppColors';
export default class ErorText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {eror, color} = this.props;
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5,left:2}}>
        <Text
          style={{
            color: color ? color : AppColors.ERRORCOLOR,
            fontWeight: 'normal',
          }}>
          {eror}
        </Text>
      </View>
    );
  }
}
