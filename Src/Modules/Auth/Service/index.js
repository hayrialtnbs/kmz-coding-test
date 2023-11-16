import {TOKEN_URL,REFRESH_URL} from '../Utils/ApiConstant';
import {emptyHeader} from '../../Global/Utils/RequestHeader';
import api from '../../api.js';

export default class AuthServices {
  static async login(user_info) {
    return await api.post(TOKEN_URL, user_info, {
      headers: emptyHeader(),
    });
  }

  static async getNewToken(value) {
    const reqData = {refresh_token: value};
    return await api.post(REFRESH_URL, reqData);
  }
}