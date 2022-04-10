import { createSlice } from '@reduxjs/toolkit';
import {
  addBook,
  getUserData,
  loginUser,
  logoutUser,
  registerUser,
} from './authOperations';

const getFromLS = key => {
  const valueFromLS = localStorage.getItem(key);
  return typeof valueFromLS === 'string'
    ? valueFromLS
    : JSON.parse(valueFromLS);
};

const initialState = {
  // user: {
  //   name: '',
  //   email: '',
  //   id: null,
  //   goingToRead: [],
  //   currentlyReading: [],
  //   finishedReading: [],
  // },
  accessToken: getFromLS('accessToken'),
  refreshToken: getFromLS('refreshToken'),
  sid: getFromLS('sid'),
  isLoading: false,
  isLoggedIn: false,
  error: null,
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
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        // state.isLoggedIn = false;
      })
      .addCase(loginUser.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        localStorage.setItem('accessToken', payload.accessToken);
        localStorage.setItem('refreshToken', payload.refreshToken);
        localStorage.setItem('sid', payload.sid);
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
      })
      .addCase(logoutUser.fulfilled, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = null;
        state.sid = null;
        state.accessToken = null;
        state.refreshToken = null;
        localStorage.clear();
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
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
