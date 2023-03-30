import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const chartSlice = createSlice({
  name: 'chart',
  initialState: {},
  reducers: {
    setCategoryChart: (state, action) => action.payload,
  },
});

export const { setCategoryChart } = chartSlice.actions;

export const getCategoryChart = () => (dispatch) => {
  axios('/categories/chart')
    .then((res) => dispatch(setCategoryChart(res.data)))
    .catch((err) => console.log(err, 'no categories chart found'));
};

export default chartSlice.reducer;
