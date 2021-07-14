import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'semantic-ui-css/semantic.min.css';


// add axios interceptors for the entire app

import axios from 'axios';

const updateEndtime = (response) => {
  response.customData = response.customData || {};
  response.customData.time = new Date().getTime() - response.config.customData.startTime;
  return response;
};

// request interceptor
axios.interceptors.request.use(request => {
  request.customData = request.customData || {};
  request.customData.startTime = new Date.getTime();
  return request;
});

// response interceptor
axios.interceptors.response.use(updateEndtime, e => {
  return Promise.reject(updateEndtime(e.response));
})



ReactDOM.render(<App/>, document.querySelector('#root'));