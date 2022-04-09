import { createSlice } from '@reduxjs/toolkit';
import { getTraningData, startTraining } from './trainingOperatons';

const initialState = {
  book: {
    _id: "625002e476089806882e3c4b",
    title: "фыва",
    author: "афыва",
    publishYear: 2441,
    pagesTotal: 123,
    pagesFinished: 100,
    __v: 0
  },
    startDate: null,
    endDate: null,
    books: [],
    duration: null,
    pagesPerDay: null,
    stats: {
        date: null,
        pagesCount: null
    },
  _id: null,
    error: null,
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
        console.log(payload);
      }
    },
});

export default trainingReducer.reducer;
