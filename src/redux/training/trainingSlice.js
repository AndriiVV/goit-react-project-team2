import { createSlice } from '@reduxjs/toolkit';
import { getTraningData, startTraining } from './trainingOperatons';

const initialState = {
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
<<<<<<< HEAD
    isTrainingGo: false,
}

const trainingReducer = createSlice({
    name: 'training',
    initialState,
    extraReducers: {
        // [addBookToTraining.fulfilled](state, action) {
        //     state.name = action.payload;
        //     state.author = action.payload;
        //     state.year = action.payload;
        //     state.page = action.payload;
        // },
        // [getTrainingList.fulfilled](state, action) {
        //     state.name = action.payload.name;
        //     state.author = action.payload.author;
        //     state.year = action.payload.year;
        //     state.page = action.payload.page;
        // },
        // [deleteTrainingBook.fulfilled](state, action) {
        //     state.name = null;
        //     state.author = null;
        //     state.year = null;
        //     state.page = null;
        // },
        [startTraining.fulfilled](state, { payload }) {
            state.startDate = payload.startDate;
            state.endDate = payload.endDate;
            state.books = payload.books;
            state.duration = payload.duration;
            state.pagesPerDay = payload.pagesPerDay;
            state.stats = payload.stats;
            state._id = payload._id
      },
      [getTraningData.pending](state) {
        state.error = null;
      },
      [getTraningData.fulfilled](state, {
        payload
      }) {
        state.isTrainingGo = true;
        // console.log(payload);
      }
=======
  isTrainingActive: false,
};

const trainingReducer = createSlice({
  name: 'training',
  initialState,
  extraReducers: {
    [startTraining.fulfilled](state, { payload }) {
      state.startDate = payload.startDate;
      state.endDate = payload.endDate;
      state.books = payload.books;
      state.duration = payload.duration;
      state.pagesPerDay = payload.pagesPerDay;
      state.stats = payload.stats;
      state._id = payload._id;
>>>>>>> 9d52a3f2d98d24cdeb3b3cdb9748b917377cf754
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
