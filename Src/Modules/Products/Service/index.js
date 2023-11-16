import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api.js';
import {emptyHeader, HeaderWithoutORG} from '../../Global/Utils/RequestHeader';
import {
  ADDBASKET_LIST_URL,
  PRODUCTS_LIST_URL,
  PRODUCTSBASKET_LIST_URL,
} from '../Utils/ApiConstants';

export default class ProductService {
  static async productsListService(iD) {
    const url = `${PRODUCTS_LIST_URL}?Id=${iD}&PageNumber=1&PageSize=10`;
    return await api.get(url, {
      headers: 'GUID: 24BE-DB0E-D75E-4060',
    });
  }

  static async productsBasketListService() {
    let token = await AsyncStorage.getItem('@token');
    const headerData = {
      'GUID': '24BE-DB0E-D75E-4060',
      'Authorization': 'Bearer ' + token,
    };
    console.log('PRODUCTS BASket LİST',headerData)
    return await api.get(PRODUCTSBASKET_LIST_URL, {
      headers: headerData,
    });
  }

  static async addBasketService(val) {
    let token = await AsyncStorage.getItem('@token');
    const headerData = {
      'GUID': '24BE-DB0E-D75E-4060',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    return await api.post(ADDBASKET_LIST_URL, val, {
      headers: headerData,
    });
  }
}
