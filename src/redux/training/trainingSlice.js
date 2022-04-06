import { createSlice } from '@reduxjs/toolkit';
import { addBookToTraining, getTrainingList, deleteTrainingBook } from './trainingOperatons';

const initialState = {
    name: null,
    author: null,
    year: null,
    page: null,
};

const trainingReducer = createSlice({
    name: 'training',
    initialState,
    extraReducers: {
        [addBookToTraining.fulfilled](state, action) {
            state.name = action.payload;
            state.author = action.payload;
            state.year = action.payload;
            state.page = action.payload;
        },
        [getTrainingList.fulfilled](state, action) {
            state.name = action.payload.name;
            state.author = action.payload.author;
            state.year = action.payload.year;
            state.page = action.payload.page;
        },
        [deleteTrainingBook.fulfilled](state, action) {
            state.name = null;
            state.author = null;
            state.year = null;
            state.page = null;
        },
    },
});

export default trainingReducer.reducer;
