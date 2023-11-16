import api from '../../api.js';
import {emptyHeader, HeaderWithoutORG} from '../../Global/Utils/RequestHeader';
import {PRODUCTS_LIST_URL, PRODUCTSBASKET_LIST_URL} from '../Utils/ApiConstants';

export default class ProductService {
  static async productsListService(iD) {
    const url = `${PRODUCTS_LIST_URL}?Id=${iD}&PageNumber=1&PageSize=10`;
    return await api.get(url, {
      headers: 'GUID: 24BE-DB0E-D75E-4060',
    });
  }

  static async productsBasketListService() {
    return await api.get(PRODUCTSBASKET_LIST_URL, {
      headers:HeaderWithoutORG(),
    });
  }
}
