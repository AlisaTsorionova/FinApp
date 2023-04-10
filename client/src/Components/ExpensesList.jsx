import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getExpenses } from '../Redux/Slices/expenseSlice';
import CatExpenses from './CatExpenses';
import './Styles/ExpensesList.css';

export default function expensesList() {
  const expenses = useSelector((store) => store.expenses);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = useParams();
  const [isModal, setModal] = useState(false);
  const [currExp, setCurrExp] = useState({});

  useEffect(() => {
    dispatch(getExpenses());
    if (isModal === false && !expenses.filter((el) => el?.Category.title === category).length) navigate('/datacard'); // *
  }, [isModal]);

  const clickHandler = (expense) => {
    setModal(true);
    setCurrExp(expense);
  };

  return (
    <>
      <article className="expList">
        <h3 className="expList_header">{category}</h3>
        <ul className="expList_list">
          {expenses.filter((el) => el?.Category.title === category).map((el) => (
            <li className="expList_list_item">
              <button className="expList_button" onClick={() => clickHandler(el)} key={el.id} type="button">
                <h5 className="expList_button_header">{el?.title || 'no title'}</h5>
                <div className="expList_button_sum">{`${el.sum} rub` || 'no sum'}</div>
              </button>
            </li>
          ))}
        </ul>
      </article>
      <CatExpenses isModal={isModal} setModal={setModal} currExp={currExp} />
    </>
  );
}
