import axios from 'axios';

var http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 8000,
  headers: { 'X-Custom-Header': 'foobar' }
});

// Add a request interceptor - default request handler
http.interceptors.request.use(
  function(config) {
    console.log(
      '%cAPI ' + config.method.toUpperCase() + '%c ' + config.url,
      'color: #0071bc;font-weight: bold'
    );
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor - default response handler
http.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    console.log(
      '%cAPI ' +
        error.config.method.toUpperCase() +
        ' ' +
        error.response.status +
        '%c ' +
        error.config.url,
      'color: red;font-weight: bold'
    );
    return Promise.reject(error);
  }
);

/** API DEFINITION STARTS **/

export const getUsers = () => http.get('/users');

/**
 * @param {number} id
 */
export const getUserDetail = id => http.get('/users/' + id);
