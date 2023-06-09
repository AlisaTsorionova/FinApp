import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: [],
  reducers: {
    setExpenses: (state, action) => action.payload,
    addExpense: (state, action) => [action.payload, ...state],
  },
});

export const { setExpenses, addExpense } = expenseSlice.actions;

export const getExpenses = () => (dispatch) => {
  axios.get('/expenses/list')
    .then((res) => {
      console.log(res.data);
      dispatch(setExpenses(res.data));
    })
    .catch((err) => console.log(err, 'no expenses found'));
};

export const addNewExpense = (expenseData) => (dispatch) => {
  axios.post('/expenses/add', expenseData)
    .then((res) => dispatch(addExpense(res.data)))
    .catch((err) => console.log(err, 'no adding'));
};

export const deleteExpense = (id, userId) => (dispatch) => {
  axios.post(`/expenses/delete/${id}`, { userId });
};

export default expenseSlice.reducer;
