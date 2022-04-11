import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registerUserApi,
  loginUserApi,
  logOutApi,
  getTrainingDataApi,
  getUserDataApi,
  addNewBookApi,
} from '../../utils/bookReadApi';
import { getTraningData } from '../training/trainingOperatons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      // console.log('registerUser is running. Data is: ', credentials);
      await registerUserApi(credentials);
      toast.success('Реєстрація виконана успішно!', {
        theme: 'colored',
        closeOnClick: true,
        pauseOnHover: true,
        autoClose: 2000,
      });
      const data = loginUserApi({
        email: credentials.email,
        password: credentials.password,
      });

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

      const trainingData = await getTrainingDataApi();

      data.currentlyReading = trainingData.books;
      data.trainingData = trainingData;

      data.finishedReading = data.finishedReading.filter(
        book => !data.currentlyReading.map(book => book._id).includes(book._id)
      );

      data.goingToRead = data.goingToRead.filter(
        book =>
          !data.currentlyReading.map(book => book._id).includes(book._id)
      );

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
