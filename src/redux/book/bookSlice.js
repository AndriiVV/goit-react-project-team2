import { createSlice } from '@reduxjs/toolkit';
import {
  addBook,
  getUserData,
  loginUser,
  logoutUser,
  registerUser,
} from '../auth/authOperations';

const getFromLS = key => {
  const valueFromLS = localStorage.getItem(key);
  return typeof valueFromLS === 'string'
    ? valueFromLS
    : JSON.parse(valueFromLS);
};

const initialState = {
  // name: '',
  // email: '',
  // id: null, // user id
  goingToRead: [],
  currentlyReading: [],
  finishedReading: [],
  isLoading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,

  reducers: {
    // setAccessToken(state, { payload }) {
    //   state.accessToken = payload;
    // },
  },

  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.goingToRead = payload.goingToRead;
        state.currentlyReading = payload.currentlyReading;
        state.finishedReading = payload.finishedReading;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.goingToRead = [];
        state.currentlyReading = [];
        state.finishedReading = [];
        state.error = null;
      })

      // .addCase(getUserData.pending, (state, { payload }) => {
      //   state.error = null;
      // })
      // .addCase(getUserData.fulfilled, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.user.name = payload.name;
      //   state.user.email = payload.email;
      //   state.user.goingToRead = payload.goingToRead;
      //   state.user.currentlyReading = payload.currentlyReading;
      //   state.user.finishedReading = payload.finishedReading;
      // })
      // .addCase(getUserData.rejected, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = payload;
      // })
      .addCase(addBook.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, { payload }) => {
        state.goingToRead = [...state.goingToRead, payload];
      });
  },
});

export default bookSlice.reducer;
