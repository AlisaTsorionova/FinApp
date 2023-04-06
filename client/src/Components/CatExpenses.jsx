/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteExpense } from '../Redux/Slices/expenseSlice';
import './Styles/CatExpenses.css';
import './Styles/General.css';

export default function CatExpenses({ isModal, setModal, currExp }) {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const clickHandler = (e, id, userId) => {
    dispatch(deleteExpense(id, userId));
  };

  return (
    <div className={isModal ? 'modal active' : 'modal'} onClick={() => setModal(false)}>
      <div className={isModal ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation}>
        {currExp.title}
        {currExp.sum}
        {' '}
        <br />
        {currExp.month}
        <button onClick={(e) => clickHandler(e, currExp.id, currExp.user_id)} type="button">REMOVE</button>
      </div>
    </div>
  );
}
