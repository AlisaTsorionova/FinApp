import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryChart } from '../Redux/Slices/chartSlice';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
);

export default function Chart() {
  const chartData = useSelector((store) => store.chart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryChart());
    // console.log(Object.keys(chartData), '000000000000000000000000');
  }, []);

  const data = {
    labels: Object.keys(chartData),
    datasets: [{
      label: 'expensesList',
      data: Object.values(chartData),
      backgroundColor: ['black', 'red', 'yellow'],
      borderColor: ['black', 'red', 'yellow'],
    }],
  };

  const options = {

  };

  return (
    <div>
      <Doughnut>
        data =
        {' '}
        {data}
        options =
        {' '}
        {options}
      </Doughnut>
    </div>
  );
}
