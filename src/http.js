import axios from 'axios'
import md5 from 'js-md5';

const instance = axios.create({
    baseURL: 'https://api.2pay.co',
    timeout: 15000,
  });

  function calculateVerifySign(contents) {
    let sortArray = []
  
    Object.keys(contents).sort().forEach(k => {
      if(contents[k] || contents[k] === false) {
        sortArray.push(`${k}=${contents[k]}`)
      }
    })
    sortArray.push(md5('yj3msy9v5o2kam2ct4psc2o8y3rr5qnw'))
    const tempStr = sortArray.join('&')
    const verifySign = md5(tempStr)
    return verifySign;
  }

  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.data.verifySign = calculateVerifySign(config.data)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

 export default instance;