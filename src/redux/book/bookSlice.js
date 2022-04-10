import { createSlice } from '@reduxjs/toolkit';
import { addBook } from './bookOperations';

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: {
      goingToRead: [],
      currentlyReading: [],
      finishedReading: [],
    },
  },

  extraReducers: builder => {
    builder
      .addCase(addBook.fulfilled, (state, { payload }) => {
      state.books.goingToRead = [...state.books.goingToRead, payload]
    })
  }


})

export default bookSlice.reducer
