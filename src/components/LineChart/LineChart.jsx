import React from 'react';
import s from './LineChart.module.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      position: 'top',
      display: true,
      text: 'КІЛЬКІСТЬ СТОРІНОК/ДЕНЬ',
    },
  },
};

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'ЧАС',
];

export const data = {
  labels,
  datasets: [
    {
      label: 'ПЛАН',
      data: [65, 59, 80, 81, 56, 55, 40, 80],
      borderColor: '#091E3F',
      backgroundColor: '#091E3F',
      tension: 0.4,
    },
    {
      label: 'ФАКТ',
      data: [78, 30, 90, 40, 47, 27, 80, 40],
      borderColor: '#FF6B08',
      backgroundColor: '#FF6B08',
      tension: 0.4,
    },
  ],
};

const LineChart = () => {
  return (
    <div className={s.chartWrap}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
