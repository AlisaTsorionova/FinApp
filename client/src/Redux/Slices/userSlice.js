import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (state, action) => action.payload,
  },
});

export const { setUser } = userSlice.actions; // ??

export const regUser = (userData) => (dispatch) => {
  axios.post('/user/register', userData)
    .then((res) => dispatch(setUser(res.data)))
    .catch(console.log('no register'));
};

export const logUser = (userData) => (dispatch) => {
  axios.post('/user/login', userData)
    .then((res) => {
      console.log(res.data, ']]]]]]]]]]]]]]');
      dispatch(setUser(res.data));
    })
    .catch(console.log('no login'));
};

export const checkAuth = () => (dispatch) => {
  axios.post('/user/check')
    .then((res) => dispatch(setUser(res.data)))
    .catch(() => console.log('no user'));
};

export const logoutUser = () => (dispatch) => {
  axios.get('/user/logout');
};

export default userSlice.reducer;
