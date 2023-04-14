/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from '../Redux/Slices/expenseSlice';
import './Styles/CatExpenses.css';
import './Styles/General.css';

export default function CatExpenses({ isModal, setModal, currExp }) {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const clickHandler = (e, id, userId) => {
    dispatch(deleteExpense(id, userId));
  };

  useEffect(() => {
    console.log(currExp.description, '0000000000');
  });

  return (
    <div className={isModal ? 'modal active' : 'modal'} onClick={() => setModal(false)}>
      <div className={isModal ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation}>
        <h4 className="modal_title">{currExp.title}</h4>
        <p className="modal_date">{`${currExp.month} ${currExp.day}, ${currExp.year}`}</p>
        <p className="modal_sum">{`${currExp.sum} rub`}</p>
        {currExp.description && (<p className="modal_desc">{currExp.description}</p>)}
        <button
          className="modal_button"
          onClick={(e) => clickHandler(e, currExp.id, currExp.user_id)}
          type="button"
        >
          REMOVE
        </button>
      </div>
    </div>
  );
}
