import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './Styles/DataCard.css';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
);

export default function Chart({ chartData }) {
  const data = {
    labels: Object.keys(chartData),
    datasets: [{
      label: 'expensesList',
      data: Object.values(chartData),
      backgroundColor: ['black', 'red', 'yellow', 'green', 'blue'],
      borderColor: ['black', 'red', 'yellow', 'green', 'blue'],
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
