import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export function setWidth(value) {
  return (width * value) / 100;
}
export function setHeight(value) {
  return (height * value) / 100;
}
