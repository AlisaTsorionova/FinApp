import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { createTheme, TextField, ThemeProvider } from '@mui/material';
import dayjs from 'dayjs';
import { getCategory } from '../Redux/Slices/categorySlice';
import { addNewExpense } from '../Redux/Slices/expenseSlice';
import './Styles/AddForm.css';

const theme = createTheme({
  palette: {
    primary: { main: 'rgba(255, 0, 0, 0.712)' },
    secondary: { main: 'rgba(255, 0, 0, 0.712)' },
  },
});

export default function addExpense() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const [exDate, setExDate] = useState(dayjs(`${year}-${month}-${day}`));
  const categories = useSelector((store) => store.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    formData.date = exDate;
    dispatch(addNewExpense(formData));
    window.location.href = '/datacard';
  };

  return (
    <form className="add-form frame" onSubmit={submitHandler}>
      <select
        name="category_id"
        className="add-form_label_input add-form_select"
        placeholder="category"

      >
        <option className="add-form_cat_option add-form_option" value="" disabled selected>Category</option>
        {categories.map((el) => (<option className="add-form_option" value={el.id} key={el.id}>{el.title}</option>))}
      </select>
      <input
        required
        className="add-form_label_input"
        name="title"
        type="text"
        placeholder="Title"
      />
      <input
        required
        className="add-form_label_input"
        name="sum"
        type="number"
        placeholder="Sum"
      />
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disableFuture
            name="date"
            label="Date"
            openTo="year"
            views={['year', 'month', 'day']}
            value={exDate}
            onChange={(newValue) => {
              setExDate(newValue);
              console.log(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </ThemeProvider>
      <textarea
        className="add-form_label_input"
        name="description"
      />
      <button
        type="submit"
        className="add-form_button"
      >
        SUBMIT
      </button>
    </form>

  );
}
