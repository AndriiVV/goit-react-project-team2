import React from 'react';
import { useSelector } from 'react-redux';
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

const LineChart = ({ daysLeft }) => {
  const pages = useSelector(state => state.training.pagesPerDay);
  let delayed;
  const days = daysLeft();
  const averagePages = Math.ceil(pages / days);
  // const labels = ['', `Час: ${isNaN(days) ? 0 : days} (дні)`];
  const labels = ['january', 'february', 'march', 'april', 'may'];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    // cubicInterpolationMode: 'monotone',
    // showLine: false,
    plugins: {
      legend: {
        position: 'top',
        display: true,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      title: {
        position: 'top',
        align: 'start',
        display: true,
        text: `КІЛЬКІСТЬ СТОРІНОК/ДЕНЬ ${
          isNaN(averagePages) ? 0 : averagePages
        }`,
        color: '#242A37',
        font: {
          family: 'Montserrat',
          weight: 500,
          size: 12,
          lineHeight: 3.2,
        },
        hover: {
          mode: 'index',
          intersec: false,
        },
      },
    },
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: context => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 200 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: false,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'ПЛАН',
        data: [1, 2, 3, 4, 5],
        borderColor: '#091E3F',
        backgroundColor: '#091E3F',
        tension: 0.4,
      },
      {
        label: 'ФАКТ',
        data: [78, 65, 23, 98],
        borderColor: '#FF6B08',
        backgroundColor: '#FF6B08',
        tension: 0.4,
      },
    ],
  };
  return (
    <div className={s.chartWrap}>
      <Line options={options} data={data} className={s.chart} />
    </div>
  );
};

export default LineChart;
