import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registerUserApi,
  loginUserApi,
  logOutApi,
  getUserDataApi,
  addNewBookApi,
} from '../../utils/bookReadApi';
import { getTraningData } from '../training/trainingOperatons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      // console.log('registerUser is running. Data is: ', credentials);
      const data = await registerUserApi(credentials);
      toast.success('Реєстрація виконана успішно!', {
        theme: 'colored',
        closeOnClick: true,
        pauseOnHover: true,
        autoClose: 2000,
      });
      // console.log('registerUser completed'); //credentials - учётные данные
      return data;
    } catch (error) {
      toast.error('Користувач с таким Email уже існує', {
        theme: 'colored',
        closeOnClick: true,
        pauseOnHover: true,
        autoClose: 2000,
      });
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const data = await loginUserApi(userData);
      toast.success('Логiнiзація виконана успішно!', {
        theme: 'colored',
        closeOnClick: true,
        pauseOnHover: true,
        autoClose: 2000,
      });
      // setTimeout(() => {
      //   thunkApi.dispatch(getTraningData(data.accessToken));
      // }, 0);
      return data;
    } catch (error) {
      toast.error('Неправильний Email або пароль', {
        theme: 'colored',
        closeOnClick: true,
        pauseOnHover: true,
      });
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (token, thunkApi) => {
    try {
      logOutApi(token);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);




