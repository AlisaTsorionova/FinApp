import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './Styles/DataCard.css';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Colors,
);

export default function Chart({ chartData }) {
  const data = {
    labels: Object.keys(chartData),
    datasets: [{
      label: 'expensesList',
      data: Object.values(chartData),
      backgroundColor: ['#b30000', '#7c1158', '#4421af', '#1a53ff', '#0d88e6', '#00b7c7', '#5ad45a', '#8be04e', '#cbde76', '#ebdc78', '#e85f5f'],
      borderColor: ['#b30000', '#7c1158', '#4421af', '#1a53ff', '#0d88e6', '#00b7c7', '#5ad45a', '#8be04e', '#cbde76', '#ebdc78', '#e85f5f']
      ,
    }],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltips: {
        callbacks: {
          label(tooltipItem) {
            return tooltipItem.yLabel;
          },
        },
      },
    },
  };

  return (
    <Doughnut
      className="datacard_chart"
      data={data}
      options={options}
    />
  );
}
