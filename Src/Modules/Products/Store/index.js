import {observable, action, makeObservable} from 'mobx';
import ProductService from '../Service';

class ProductStore {
  ProductsList = [];
  constructor() {
    makeObservable(this, {
      ProductsList: observable,
      setProductsList: action,
    });
  }
  setProductsList = async val => {
    this.ProductsList = val;
  };
  productsList = async (id) => {
    this.setProductsList([]);
    return await ProductService.productsListService(id)
      .then(async response => {
        this.setProductsList(response.data.data);
      })
      .catch(error => {
        console.log('İSTEK HATA CATEGORY', error);
      });
  };
}
export default new ProductStore();