import {observable, action, makeObservable} from 'mobx';
import CategoryService from '../Service';

class CategoryStore {
  CategoryList = [];
  SubCategoryList = [];
  nosearchData = [];
  constructor() {
    makeObservable(this, {
      CategoryList: observable,
      nosearchData: observable,
      SubCategoryList: observable,
      setSubCategory: action,
      setNoSearchData: action,
      setCategoryList: action,
    });
  }
  setCategoryList = async val => {
    this.CategoryList = val;
  };
  setSubCategory = async val => {
    this.SubCategoryList = val;
  };
  setNoSearchData(value) {
    this.nosearchData = value;
  }
  categoryList = async () => {
    this.setCategoryList([]);
    return await CategoryService.categoryListService()
      .then(async response => {
        this.setCategoryList(response.data.data.categories);
        this.setNoSearchData(response.data.data.categories);
      })
      .catch(error => {
        console.log('İSTEK HATA CATEGORY', error);
      });
  };
  subCategory = async (cateogryID) => {
    this.setSubCategory([]);
    return await CategoryService.subCategoryListService(cateogryID)
      .then(async response => {
        this.setSubCategory(response.data.data.categories);
      })
      .catch(error => {
        console.log('İSTEK HATA CATEGORY', error);
      });
  };

  searchCategoryData(searchtext) {
    this.CategoryList = this.nosearchData;
    if (searchtext) {
      this.CategoryList = this.CategoryList.filter(x => {
        return x.categoryName.includes(searchtext);
      });
    }
  }
}
export default new CategoryStore();
