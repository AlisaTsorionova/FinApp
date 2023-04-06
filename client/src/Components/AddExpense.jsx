/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { getCategory } from '../Redux/Slices/categorySlice';
import { addNewExpense } from '../Redux/Slices/expenseSlice';
import './Styles/AddForm.css';

export default function addExpense() {
  const [exDate, setExDate] = useState(dayjs('2000-01-01'));
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
        className="add-form_label_input"
      >
        {categories.map((el) => (<option value={el.id} key={el.id}>{el.title}</option>))}
      </select>
      <input
        className="add-form_label_input"
        name="title"
        type="text"
        placeholder="Add expense"
      />
      <input
        className="add-form_label_input"
        name="sum"
        type="number"
        placeholder="Sum"
      />
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
