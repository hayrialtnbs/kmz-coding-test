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

  //Kullanıcı Verisi AsyncStorage kaydeder ki herseferinde login olmak zorunda kalmasın

  SetStoreData = async value => {
    try {
      await AsyncStorage.setItem('@user_info', JSON.stringify(value));
      await AsyncStorage.setItem('@token', value.data.token);
    } catch (err) {
      console.log('KULLANICI VERISI KAYIT HATASI', err);
    }
  };
  //Kullanıcı Verisi AsyncStorage dan siler logout oldugunda
  removeStore = async () => {
    const keys = ['@user_info', '@token'];
    try {
      await AsyncStorage.multiRemove(keys);
    } catch (e) {
      console.log('renove', e);
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
