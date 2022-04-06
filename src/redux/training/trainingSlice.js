import { createSlice } from '@reduxjs/toolkit';
import { addBookToTraining, getTrainingList, deleteTrainingBook, startTraining } from './trainingOperatons';

const initialState = [{
    "name": "Test",
    "email": "user@example.com",
    "goingToRead": [
        {
            "title": "The Book of Five Rings",
            "author": "Miyamoto Musashi",
            "publishYear": 1643,
            "totalPages": 110,
            "pagesFinished": 110,
            "_id": "507f1f77bcf86cd799439013",
            "__v": 0
        }
    ],
    "currentlyReading": [],
    "finishedReading": []
}]

// const initialState = {
//     name: null,
//     author: null,
//     year: null,
//     page: null,
// };

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
        [startTraining.fulfilled](state, action) {
            state.name = action.payload.name;
            state.author = action.payload.author;
            state.year = action.payload.year;
            state.page = action.payload.page;
        },
    },
});

export default trainingReducer.reducer;
