import { createAsyncThunk } from "@reduxjs/toolkit";
import { addNewBookApi } from "utils/bookReadApi";

export const addBook = createAsyncThunk('book/add', async (book, thunkApi) => {
  try {
    const addedBook = await addNewBookApi(book);
    return addedBook;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
