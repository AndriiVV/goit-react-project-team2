import {
  createSlice
} from '@reduxjs/toolkit';
import {
  addBook,
  getUserData
} from './bookOperations';
import {
  loginUser,
  logoutUser,
  registerUser,
} from '../auth/authOperations';

const getFromLS = key => {
  const valueFromLS = localStorage.getItem(key);
  return typeof valueFromLS === 'string' ?
    valueFromLS :
    JSON.parse(valueFromLS);
};

const initialState = {
  books: {
    goingToRead: [],
    currentlyReading: [],
    finishedReading: [],
  },
  isLoading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, {
        payload
      }) => {
        state.isLoading = false;
        state.books.goingToRead = payload.goingToRead;
        state.books.currentlyReading = payload.currentlyReading;
        state.books.finishedReading = payload.finishedReading;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.books.goingToRead = [];
        state.books.currentlyReading = [];
        state.books.finishedReading = [];
        state.error = null;
      })

      .addCase(getUserData.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getUserData.fulfilled, (state, {
        payload
      }) => {
        state.isLoading = false;
        state.error = null;
        state.books.goingToRead = payload.goingToRead;
        state.books.currentlyReading = payload.currentlyReading;
        state.books.finishedReading = payload.finishedReading;
      })
      .addCase(getUserData.rejected, (state, {
        payload
      }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addBook.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, {
        payload
      }) => {
        state.books.goingToRead = [...state.books.goingToRead, payload];
      });
  },
});

export default bookSlice.reducer;
