import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './Slices/categorySlice';
import chartSlice from './Slices/chartSlice';
import expenseSlice from './Slices/expenseSlice';
import userSlice from './Slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    category: categorySlice,
    expenses: expenseSlice,
    chart: chartSlice,
  },
});
