/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { getCategory } from '../Redux/Slices/categorySlice';
import { addNewExpense } from '../Redux/Slices/expenseSlice';

export default function addExpense() {
  const [exDate, setExDate] = useState(dayjs('2000-01-01'));
  // const [data, setData] = useState({});
  // const user = useSelector((store) => store.user);
  const categories = useSelector((store) => store.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    formData.date = exDate;
    dispatch(addNewExpense(formData));
    navigate('/datacard');
    // console.log({ ...date, data: Object.fromEntries(new FormData(e.target.name)) }, '+++++++++++++++++');
    // console.log(formData, '+++++++++++++++++');
  };

  return (
    <form onSubmit={submitHandler}>
      <select name="category_id">
        {categories.map((el) => (<option value={el.id} key={el.id}>{el.title}</option>))}
      </select>
      <input name="title" type="text" placeholder="Add expense" />
      <input name="sum" type="number" placeholder="Sum" />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disableFuture
          name="date"
          label="Дата рождения"
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
      <textarea name="description" />
      <button type="submit">
        {/* <a href="/datacard"> */}
        SUBMIT
        {/* </a> */}
      </button>
    </form>

  );
}
