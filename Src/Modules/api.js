// AXİOS İLE KENDİ İNTERCEPTORS YAPIMIZI OLUŞTURDUK

import axios from 'axios';

const api = axios.create();
let urlControle;
const urlReq = () => {
  if (__DEV__) {
    const Base_URL = `https://apiv5.akilliticaretim.com`;
    urlControle = Base_URL;
    return Base_URL;
  } else {
    const Base_URL = `https://apiv5.akilliticaretim.com`;
    urlControle = Base_URL;
    return Base_URL;
  }
};
api.interceptors.request.use(
  config => {
    urlReq()
    const configUrl = urlControle + '/' + config.url;
    config['url'] = configUrl;
    console.log('ATILAN İSTEKLER ', config.url);
    return config;
  },
  error => {
    console.log('ATILAN İSTEKLER HATA', error);
    return Promise.reject(error);
  },
);
export default api;