import AsyncStorage from '@react-native-async-storage/async-storage';
import {observable, action, makeObservable} from 'mobx';
import AuthServices from '../Service';

class AuthStore {
  userInfo = {};
  constructor() {
    makeObservable(this, {
      userInfo: observable,
      Login: action,
    });
  }
  setUserInfo = async userInfo => {
    this.userInfo = userInfo;
  };

  SetStoreData = async value => {
    try {
      await AsyncStorage.setItem('@user_info', JSON.stringify(value));
      await AsyncStorage.setItem('@token', value.data.token);
    } catch (err) {
      console.log('KULLANICI VERISI KAYIT HATASI', err);
    }
  };

  Login = async user_info => {
    this.setUserInfo({});
    return await AuthServices.login(user_info)
      .then(async response => {
        this.setUserInfo(response.data);
        await this.SetStoreData(response.data);
      })
      .catch(error => {
        console.log('İSTEK HATA', error);
      });
  };
  
}
export default new AuthStore();
