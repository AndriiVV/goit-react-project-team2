import { createSlice } from '@reduxjs/toolkit';
import { getTraningData, startTraining } from './trainingOperatons';

const initialState = {
  booksInTraining: [],
  book: {
    _id: '625002e476089806882e3c4b',
    title: 'фыва',
    author: 'афыва',
    publishYear: 2441,
    pagesTotal: 123,
    pagesFinished: 100,
    __v: 0,
  },
  startDate: null,
  endDate: null,
  books: [],
  duration: null,
  pagesPerDay: null,
  stats: {
    date: null,
    pagesCount: null,
  },
  _id: null,
  error: null,
  isTrainingGo: false,
    isTrainingActive: false,
}

const trainingReducer = createSlice({
    name: 'training',
    initialState,
    extraReducers: {
        [startTraining.fulfilled](state, { payload }) {
            state.startDate = payload.startDate;
            state.endDate = payload.endDate;
            state.booksInTraining = payload.books;
            state.duration = payload.duration;
            state.pagesPerDay = payload.pagesPerDay;
            state.stats = payload.stats;
            state._id = payload._id
      },
      [getTraningData.fulfilled](state, {
        payload
      }) {
        state.isTrainingGo = true;
      },

    [getTraningData.pending](state) {
      state.error = null;
      state.isTrainingActive = false;
    },
    [getTraningData.fulfilled](state, { payload }) {
      state.startDate = payload.startDate;
      state.endDate = payload.endDate;
      state.duration = payload.duration;
      state.pagesPerDay = payload.pagesPerDay;
      state.stats = payload.stats;
      state.books = payload.books;
      state.isTrainingActive = true;
    },
    [getTraningData.rejected](state, { payload }) {
      state.error = payload;
      state.isTrainingActive = false;
    },
  },
});

export default trainingReducer.reducer;
