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
        console.log('İSTEK HATA CATEGORY', error);
      });
  };

  productsBasket = async () => {
    this.setProductsBasketList([]);
    return await ProductService.productsBasketListService()
      .then(async response => {
        this.setProductsBasketList(response.data.data);
      })
      .catch(error => {
        console.log('İSTEK HATA CATEGORY', error);
      });
  };

  addBasket = async val => {
    return await ProductService.addBasket(RequestValue)
      .then(response => {
        setLoading(false);
        this.productsBasket();
      })
      .catch(error => {
        setLoading(false);
      });
  };
}
export default new ProductStore();
