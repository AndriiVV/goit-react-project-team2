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
  const duration = useSelector(state => state.training.duration);
  const days = daysLeft();
  const averagePages = Math.ceil(pages / days);

  // let arrDays = [];

  // for (let i = 0; i < duration; i++) {
  //   arrDays[i] = i + 1;
  //   return arrDays;
  // }
  // console.log(arrDays);

  // let arrPages = [];

  // for (let page of arrPages) {
  //   arrPages[i] = i + 1;
  //   return arrPages;
  // }

  let delayed;
  const options = {
    // responsive: true,
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

  const labels = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'ПЛАН',
        data: [8, 8, 8, 8, 8, 8, 8],
        borderColor: '#091E3F',
        backgroundColor: '#091E3F',
        tension: 0.4,
      },
      {
        label: 'ФАКТ',
        data: [5, 6, 7, 1, 2, 3, 4],
        borderColor: '#FF6B08',
        backgroundColor: '#FF6B08',
        tension: 0.4,
      },
    ],
  };
  return (
    <div className={s.chartWrap}>
      <Line data={data} options={options} className={s.chart} />
    </div>
  );
};

export default LineChart;
