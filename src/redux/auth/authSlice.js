import { createSlice } from '@reduxjs/toolkit';
import {
  getUserData,
  loginUser,
  logoutUser,
  registerUser,
} from './authOperations';
import {
  addBook
} from '../book/bookOperations';

const getFromLS = key => {
  const valueFromLS = localStorage.getItem(key);
  return typeof valueFromLS === 'string'
    ? valueFromLS
    : JSON.parse(valueFromLS);
};

const initialState = {
  user: {
    name: '',
    email: '',
    id: null,
          goingToRead: [],
            currentlyReading: [],
            finishedReading: [],
  },
  accessToken: getFromLS('accessToken'),
  refreshToken: getFromLS('refreshToken'),
  sid: getFromLS('sid'),
  isLoading: false,
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setAccessToken(state, { payload }) {
      state.accessToken = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.email = payload.email;
        state.user.id = payload.id;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        // state.isLoggedIn = false;
      })
      .addCase(loginUser.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        localStorage.setItem('accessToken', payload.accessToken);
        localStorage.setItem('refreshToken', payload.refreshToken);
        localStorage.setItem('sid', payload.sid);
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.id = payload.id;
        state.user.goingToRead = payload.goingToRead;
        state.user.currentlyReading = payload.currentlyReading;
        state.user.finishedReading = payload.finishedReading;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.user = {
          name: '',
          email: '',
          id: '',
        };
        state.sid = null;
        state.accessToken = null;
        state.refreshToken = null;
        localStorage.setItem('accessToken', JSON.stringify(null));
        localStorage.setItem('refreshToken', JSON.stringify(null));
      })
      .addCase(logoutUser.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.user = {
          name: '',
          email: '',
          id: '',
        };
        state.sid = null;
        state.accessToken = null;
        state.refreshToken = null;
        localStorage.clear();
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getUserData.pending, (state, { payload }) => {
        state.error = null;
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.goingToRead = payload.goingToRead;
        state.user.currentlyReading = payload.currentlyReading;
        state.user.finishedReading = payload.finishedReading;
      })
      .addCase(getUserData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
    .addCase(addBook.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(addBook.fulfilled, (state, { payload }) => {
      state.user.goingToRead = [...state.user.goingToRead, payload]
    })
  },
});
//   extraReducers: {
//     [registerUser.pending]: state => {
//       state.isLoading = true;
//       // state.error = null;
//     },
//     [registerUser.fulfilled]: (state, { payload }) => {
//       localStorage.setItem('accessToken', payload.accessToken);
//       localStorage.setItem('refreshToken', payload.refreshToken);
//       state.isLoading = false;
//       // state.user.name = payload.name;
//       // state.user.email = payload.email;
//       // state.user.id = payload.id;
//       // state.token = payload.token;
//     },
//     [registerUser.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       // state.error = payload;
//     },
//     [loginUser.pending]: state => {
//       state.isLoading = true;
//       // state.error = null;
//     },
//     [loginUser.fulfilled]: (state, { payload }) => {
//       localStorage.setItem('accessToken', payload.accessToken);
//       localStorage.setItem('refreshToken', payload.refreshToken);
//       state.isLoading = false;
//       // state.user.name = payload.name;
//       // state.user.email = payload.email;
//       // state.user.id = payload.id;
//       // state.token = payload.token;
//     },
//     [loginUser.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       // state.error = payload;
//     },
//   },
// });

export const { setToken, logOut } = authSlice.actions;
export default authSlice.reducer;
