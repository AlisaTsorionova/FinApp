import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getExpenses } from '../Redux/Slices/expenseSlice';
import CatExpenses from './CatExpenses';

export default function expensesList() {
  const expenses = useSelector((store) => store.expenses);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = useParams();
  const [isModal, setModal] = useState(false);
  const [currExp, setCurrExp] = useState({});
  // фильтровать на фронте или на беке?

  useEffect(() => {
    dispatch(getExpenses());
    if (isModal === false && !expenses.filter((el) => el?.Category.title === category).length) navigate('/datacard'); // *
  }, [isModal]);

  // сюда компонент диаграммы, передать фильтрованное значение
  const clickHandler = (expense) => {
    setModal(true);
    setCurrExp(expense);
  };

  return (
    <>
      <article>
        <h3>{category}</h3>
        {expenses.filter((el) => el?.Category.title === category).map((el) => (
          <button onClick={(event) => clickHandler(el)} key={el.id} type="button">
            <h5>{el?.title && 'no title'}</h5>
            <div>{el.sum && 'no title'}</div>
          </button>
        ))}
      </article>
      <CatExpenses isModal={isModal} setModal={setModal} currExp={currExp} />
    </>
  );
}
