import axios from 'axios';
import authenticationSession from '@utils/authenticationSession';
import publicConfigs from '@constants/env';

export const request = axios.create();

request.interceptors.request.use(function (config) {
  config.baseURL = publicConfigs.VITE_API_URL;
  config.headers['Accept'] = 'application/json';
  return config;
});

export const requestAuthenticated = axios.create();

requestAuthenticated.interceptors.request.use(async function (config) {
  if (authenticationSession.initialProcessing()) {
    await authenticationSession.initialProcessing();
  }
  let authenticationInfo = authenticationSession.getAuthentication();
  config.baseURL = publicConfigs.VITE_API_URL;
  config.headers['Accept'] = 'application/json';

  if (!authenticationInfo) {
    return config;
  }
  config.headers['Accept'] = 'application/json';
  if (authenticationInfo?.accessToken) {
    config.headers['Authorization'] = `Bearer ${authenticationInfo.accessToken}`;
  }
  return config;
});
