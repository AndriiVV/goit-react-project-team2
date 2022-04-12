import { createSlice } from '@reduxjs/toolkit';
import {
  getTraningData,
  setStatisticsPades,
  startTraining,
} from './trainingOperatons';
import { getUserData } from 'redux/book/bookOperations';
import { loginUser, logoutUser } from 'redux/auth/authOperations';
import { forceLogout } from 'redux/auth/authSlice';

const initialState = {
  // booksInTraining: [],
  // book: {
  //   _id: null,
  //   title: '',
  //   author: '',
  //   publishYear: null,
  //   pagesTotal: null,
  //   pagesFinished: null,
  // },
  startDate: null,
  endDate: null,
  books: [],
  duration: null,
  pagesPerDay: null,
  stats: [],
  _id: null,
  error: null,
  // isTrainingGo: false,
  // isTrainingActive: false,
};

const trainingReducer = createSlice({
  name: 'training',
  initialState,
  extraReducers: {
    [startTraining.fulfilled](state, { payload }) {
      state.startDate = payload.startDate;
      state.endDate = payload.endDate;
      state.booksInTraining = payload.books;
      state.books = payload.books;
      state.duration = payload.duration;
      state.pagesPerDay = payload.pagesPerDay;
      state.stats = payload.stats;
      state._id = payload._id;
      // state.isTrainingActive = true;
      // state.isTrainingGo = true;
    },
    [logoutUser.fulfilled]: state => {
      state.startDate = null;
      state.endDate = null;
      state.books = [];
      state.duration = null;
      state.pagesPerDay = null;
      state.stats = [];
      state._id = null;
      state.error = null;
    },
    [forceLogout]: state => {
      state.startDate = null;
      state.endDate = null;
      state.books = [];
      state.duration = null;
      state.pagesPerDay = null;
      state.stats = [];
      state._id = null;
      state.error = null;
    },
    [getTraningData.pending](state) {
      state.error = null;
      // state.isTrainingActive = false;
      // state.isTrainingGo = false;
    },
    [getTraningData.fulfilled](state, { payload }) {
      state.startDate = payload.startDate;
      state.endDate = payload.endDate;
      state.duration = payload.duration;
      state.pagesPerDay = payload.pagesPerDay;
      state.stats = payload.stats;
      state.books = payload.books;
      state._id = payload.id;
      // state.isTrainingActive = true;
      // state.isTrainingGo = true;
    },
    [getTraningData.rejected](state, { payload }) {
      state.error = payload;
      // state.isTrainingActive = false;
    },
    [loginUser.fulfilled](state, { payload }) {
      // state.startDate = payload.trainingData.startDate;
      // state.endDate = payload.trainingData.endDate;
      // state.duration = payload.trainingData.duration;
      // state.pagesPerDay = payload.trainingData.pagesPerDay;
      // state.stats = payload.trainingData.stats;
      // state.books = payload.trainingData.books;
      // state._id = payload.trainingData.id;
      // state.isTrainingActive = true;
      // state.isTrainingGo = true;
    },
    [getUserData.fulfilled](state, { payload }) {
      if (payload === null) {
        state.startDate = null;
        state.endDate = null;
        state.books = [];
        state.duration = null;
        state.pagesPerDay = null;
        state.stats = [];
        state._id = null;
        state.error = null;
      } else {
        state.startDate = payload.trainingData.startDate;
        state.endDate = payload.trainingData.endDate;
        state.duration = payload.trainingData.duration;
        state.pagesPerDay = payload.trainingData.pagesPerDay;
        state.stats = payload.trainingData.stats;
        state.books = payload.trainingData.books;
        state._id = payload.trainingData.id;
        // state.isTrainingActive = true;
        // state.isTrainingGo = true;
      }
    },
    [setStatisticsPades.pending](state) {
      state.error = null;
    },
    [setStatisticsPades.fulfilled](state, { payload }) {
      // state.booksInTraining = payload.books;
      state.stats = payload.planning.stats;
      state.books = state.books.map(book =>
        book._id === payload.book._id ? payload.book : book
      );
    },
  },
});

export default trainingReducer.reducer;
