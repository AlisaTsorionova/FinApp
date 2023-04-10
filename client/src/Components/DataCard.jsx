import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Chart from './Chart';
import './Styles/DataCard.css';
import { getCategoryChart } from '../Redux/Slices/chartSlice';

export default function dataCard() {
  const chartData = useSelector((store) => store.chart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const chartDataArr = Object.entries(chartData)
    .sort(([, a], [, b]) => b - a)
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

  useEffect(() => {
    dispatch(getCategoryChart());
    if (!Object.entries(chartData).length) navigate('/add');
  }, []);

  return (
    <div className="datacard">
      <Chart chartData={chartData} />
      <ul className="datacard_buttons_list">
        {Object.keys(chartDataArr).map((el) => (
          <li key={el.id}>
            <button
              className="datacard_buttons_list_item"
              onClick={() => navigate(`/list/${el}`)}
              type="button"
              key={el}
            >
              {el.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
