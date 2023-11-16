import {observable, action, makeObservable} from 'mobx';
import ProductService from '../Service';

class ProductStore {
  ProductsList = [];
  ProductsBasketList = [];
  constructor() {
    makeObservable(this, {
      ProductsList: observable,
      ProductsBasketList: observable,
      setProductsBasketList: action,
      setProductsList: action,
    });
  }
  setProductsList = async val => {
    this.ProductsList = val;
  };

  setProductsBasketList = async val => {
    this.ProductsBasketList = val;
  };

  productsList = async id => {
    this.setProductsList([]);
    return await ProductService.productsListService(id)
      .then(async response => {
        this.setProductsList(response.data.data);
      })
      .catch(error => {
        console.log('İSTEK HATA productsList', error);
      });
  };

  productsBasket = async () => {
    this.setProductsBasketList([]);
    return await ProductService.productsBasketListService()
      .then(async response => {
        this.setProductsBasketList(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log('İSTEK HATA productsBasket', error);
      });
  };

  addBasket = async val => {
    return await ProductService.addBasketService(val)
      .then(response => {
        this.productsBasket();
      })
      .catch(error => {
        console.log('HATa',error)
      });
  };
}
export default new ProductStore();
