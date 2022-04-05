import axios from 'axios';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

export const registerUserApi = userData => {
  return axios.post('/auth/register', userData).then(({ data }) => ({
    email: data.email,
    id: data.id,
  }));
};

export const loginUserApi = userData => {
  return axios.post('/auth/login', userData).then(({ data }) => ({
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
    sid: data.sid,
    name: data.userData.name,
    email: data.userData.email,
    id: data.userData.id,
    goingToRead: data.userData.goingToRead,
    currentlyReading: data.userData.currentlyReading,
    finishedReading: data.userData.finishedReading,
  }));
};
