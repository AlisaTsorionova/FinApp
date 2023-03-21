import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const categorySlice = createSlice({
  name: 'category',
  initialState: [],
  reducers: {
    setCategory: (state, action) => action.payload,
  },
});

export const { setCategory } = categorySlice.actions; // ??

export const getCategory = () => (dispatch) => {
  axios('/categories/all')
    .then((res) => dispatch(setCategory(res.data)))
    .catch((err) => console.log(err, 'no categories found'));
};

export default categorySlice.reducer;
