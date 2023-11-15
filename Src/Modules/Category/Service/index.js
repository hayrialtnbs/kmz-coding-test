import api from '../../api.js';
import {HeaderWithoutORG} from '../../Global/Utils/RequestHeader';
import {CATEGORY_LIST_URL, SUBCATEGORY_LIST_URL} from '../Utils/ApiConstants';

export default class CategoryService {
  static async categoryListService() {
    return await api.get(CATEGORY_LIST_URL, {
      headers: 'GUID: 24BE-DB0E-D75E-4060',
    });
  }
  static async subCategoryListService(cateogryID) {
    const url = `${CATEGORY_LIST_URL}${'?parentId='}${cateogryID}`;
    return await api.get(url, {
      headers: 'GUID: 24BE-DB0E-D75E-4060',
    });
  }
}
