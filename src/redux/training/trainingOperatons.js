import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getTrainingDataApi,
  startTrainingApi,
  setStatisticsPadesApi,
  patchStatisticsPadesApi
} from '../../utils/bookReadApi';

// export const addBookToTraining = createAsyncThunk('training/post/:id', async (id, thunkApi) => {
//     try {
//         const book = addBookToTrainingApi(id);
//         return book;
//     } catch (error) {
//         return thunkApi.rejectWithValue(error.message);
//     }
// });

// export const getTrainingList = createAsyncThunk('training/get/:id', async (id, thunkApi) => {
//     try {
//         const trainingBooks = getTrainingListApi(id);
//         return trainingBooks;
//     } catch (error) {
//         return thunkApi.rejectWithValue(error.message);
//     }
// });

// export const deleteTrainingBook = createAsyncThunk('training/delete/:id', async (id, thunkApi) => {
//     try {
//         await deleteTrainingBookApi(id);
//         return id;
//     } catch (error) {
//         return thunkApi.rejectWithValue(error.message);
//     }
// });

export const startTraining = createAsyncThunk(
  'training/planning',
  async (books, thunkApi) => {
    try {
      const trainingData = await startTrainingApi(books);
      console.log(trainingData);
      return trainingData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getTraningData = createAsyncThunk(
  'training/data',
  async (accessToken, thunkApi) => {
    try {
      const traningData = getTrainingDataApi(accessToken);
      return traningData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const setStatisticsPades = createAsyncThunk(
  'training/setPades',
  async (pages, thunkApi) => {
    try {
      patchStatisticsPadesApi(pages)
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)
