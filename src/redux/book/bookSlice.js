import { createSlice } from '@reduxjs/toolkit';
import { addBook, getUserData } from './bookOperations';
import { loginUser, logoutUser, registerUser } from '../auth/authOperations';
import { startTraining } from 'redux/training/trainingOperatons';

const getFromLS = key => {
  const valueFromLS = localStorage.getItem(key);
  return typeof valueFromLS === 'string'
    ? valueFromLS
    : JSON.parse(valueFromLS);
};

const initialState = {
  books: {
    goingToRead: [],
    // currentlyReading: JSON.parse(localStorage.getItem('currentlyReading')) || [],
    currentlyReading: [],
    finishedReading: [],
    inTraining: JSON.parse(localStorage.getItem('inTraining')) || [],
  },
  isLoading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
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

      .addCase(getUserData.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.books.goingToRead = payload.goingToRead;
        state.books.currentlyReading = payload.currentlyReading;
        state.books.finishedReading = payload.finishedReading;
      })
      .addCase(getUserData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addBook.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, { payload }) => {
        state.books.goingToRead = [...state.books.goingToRead, payload];
      })
      .addCase(addBook.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(startTraining.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(startTraining.fulfilled, (state, { payload }) => {
        const updateBooks = state.books.goingToRead
          .filter(({
            _id
          }) => _id !== payload.books.map(({_id}) => _id));
        state.books.goingToRead = updateBooks;
        
        state.books.currentlyReading = [
          ...state.books.currentlyReading,
          ...payload.books,
        ];
        localStorage.setItem(
          'currentlyReading',
          JSON.stringify([...payload.books])
        );
        state.books.inTraining = [payload.books];
        localStorage.setItem('inTraining', JSON.stringify([...payload.books]));
      })
      .addCase(startTraining.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default bookSlice.reducer;
