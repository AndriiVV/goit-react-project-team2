import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import bookReducer from './book/bookSlice';
import trainingReducer from './training/trainingSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer,
    training: trainingReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
