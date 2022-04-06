import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerUser } from './authOperations';

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
    sid: null,
  },
  // accessToken: getFromLS('accessToken'),
  // refreshToken: getFromLS('refreshToken'),
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
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
      });
  },
});
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setAccessToken(state, { payload }) {
//       state.accessToken = payload;
//     },
//     logOut(state) {
//       state.user = {
//         name: '',
//         email: '',
//         sid: null,
//       };
//       state.accessToken = null;
//       state.refreshToken = null;
//       localStorage.setItem('accessToken', JSON.stringify(null));
//       localStorage.setItem('refreshToken', JSON.stringify(null));
//     },
//   },
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
