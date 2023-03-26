import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../Redux/Slices/categorySlice';

export default function dataCard() {
  const categories = useSelector((store) => store.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currCategories = categories.filter((el) => el.Expenses.length);
  console.log(categories);

  useEffect(() => {
    dispatch(getCategory());
  }, []);// если параллельно с окном добавления, вставть в массив зависимостей изменение

  return (
    <article>
      {currCategories.map((el) => <button onClick={() => navigate(`/list/${el.title}`)} type="button" key={el.id}>{el.title}</button>)}
    </article>
  );
}
