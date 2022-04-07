import { createAsyncThunk } from '@reduxjs/toolkit';
import { startTrainingApi, addNewBookApi } from '../../utils/bookReadApi';

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

export const startTraining = createAsyncThunk('training/planning', async (id, thunkApi) => {
    try {
        await startTrainingApi(id);
        return id;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const addBook = createAsyncThunk(
  'book/add',
  async ({formBook, token}, thunkApi) => {
    try {
      const addedBook = addNewBookApi({formBook, token})
      return addedBook;
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  });
