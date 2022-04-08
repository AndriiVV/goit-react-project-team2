import { createSlice } from '@reduxjs/toolkit';
import { startTraining } from './trainingOperatons';

const initialState = [{
    "name": null,
    "email": null,
    "goingToRead": [
        {
            "title": null,
            "author": null,
            "publishYear": null,
            "totalPages": null,
            "pagesFinished": null,
            "_id": null,
            "__v": null
        }
    ],
    "currentlyReading": [],
    "finishedReading": []
}]

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
        [startTraining.fulfilled](state, action) {
            state.startDate = action.payload.startDate;
            state.endDate = action.payload.endDate;
            state.books = action.payload.year.books;
        },
    },
});

export default trainingReducer.reducer;
