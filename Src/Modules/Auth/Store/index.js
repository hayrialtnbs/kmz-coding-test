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
      await AsyncStorage.setItem('@token', value.data.token);
    } catch (err) {
      console.log('KULLANICI VERISI KAYIT HATASI', err);
    }
  };

  Login = async (user_info) => {
    this.setUserInfo({});
    return await AuthServices.login(user_info)
      .then(async response => {
        // setLoading(false);
        this.setUserInfo(response.data);
        await this.SetStoreData(response.data);
      })
      .catch(error => {
        // setLoading(false);
        console.log('İSTEK HATA', error);
      });
  };
}
export default new AuthStore();
