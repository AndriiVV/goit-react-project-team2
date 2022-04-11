import { createAsyncThunk } from "@reduxjs/toolkit";
import { addBookReviewApi, addNewBookApi, getUserDataApi } from "utils/bookReadApi";

export const addBook = createAsyncThunk('book/add', async (book, thunkApi) => {
  try {
    const addedBook = await addNewBookApi(book);
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
await addBookReviewApi(bookId)
    } catch (error) {

    }
  }
)
