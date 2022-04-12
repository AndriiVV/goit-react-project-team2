import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import {
  addBookReviewApi,
  addNewBookApi,
  getUserDataApi,
} from 'utils/bookReadApi';
import { getTrainingDataApi } from 'utils/bookReadApi';

export const addBook = createAsyncThunk('book/add', async (book, thunkApi) => {
  try {
    const addedBook = await addNewBookApi(book);
    Notify.success(
      `Книга "${book.title}" додана до списка "Маю намір прочитати"`
    );
    return addedBook;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getUserData = createAsyncThunk(
  'auth/getData',
  async (accessToken, thunkApi) => {
    try {
      const data = await getUserDataApi(accessToken);

      const trainingData = await getTrainingDataApi().catch(error => {
        console.log('Data ', error.request);
        if (error.request?.status === 403) {
          return null;
        } else {
          throw error;
        }
      });
      // console.log("TD", trainingData);
      if (trainingData === null) {
        data.currentlyReading = [];
        data.trainingData = null;
      } else {
        data.currentlyReading = trainingData.books;
        data.trainingData = trainingData;
      }

      // data.currentlyReading = trainingData.books;

      data.finishedReading = data.finishedReading.filter(
        book => !data.currentlyReading.map(book => book._id).includes(book._id)
      );

      data.goingToRead = data.goingToRead.filter(
        book => !data.currentlyReading.map(book => book._id).includes(book._id)
      );

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addBookReview = createAsyncThunk(
  'book/addReview',
  async (bookId, thunkApi) => {
    try {
      await addBookReviewApi(bookId);
    } catch (error) {}
  }
);
