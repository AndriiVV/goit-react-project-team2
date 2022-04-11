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
import { useTranslation } from 'react-i18next';
import { formatISO, formatRFC7231, intlFormat, lightFormat } from 'date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const { t } = useTranslation();
  const pages = useSelector(state => state.training.pagesPerDay);
  const duration = useSelector(state => state.training.duration);
  const groupStats = useSelector(state => state.training.stats);

  let arrDays = [];

  for (let i = 0; i < duration; i++) {
    arrDays[i] = i + 1;
  }

  let arrPages = [];

  for (let i = 0; i <= pages; i++) {
    arrPages[i] = i;
  }

  const planningPages = arrPages.fill(pages);

  let factPages = [];

  for (let i = 0; i < groupStats.length; i++) {
    factPages[i] = groupStats[i].pagesCount;
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
        text: `${t('chart.title')} ${pages === null ? 0 : pages}`,
        color: '#242A37',
        font: {
          family: 'Montserrat',
          weight: 500,
          size: 12,
          lineHeight: 3.2,
        },
      },
    },
    animations: {
      y: {
        easing: 'easeInOutElastic',
        from: ctx => {
          if (ctx.type === 'data') {
            if (ctx.mode === 'default' && !ctx.dropped) {
              ctx.dropped = true;
              return 0;
            }
          }
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        display: true,
      },
      y: {
        stacked: true,
        display: false,
      },
    },
  };

  const labels = [0, ...arrDays];
  // let dateNow = new Date();
  // const labels = [];

  // for (let i = 0; i <= duration; i++) {
  //   let time = new Date(Date.now(dateNow) + i * (3600 * 1000 * 24));
  //   labels[i] = lightFormat(new Date(time), 'yyyy-dd-MM');
  // }

  const data = {
    labels,
    datasets: [
      {
        label: t('chart.plan'),
        animations: {
          y: {
            duration: 2000,
            delay: 700,
          },
        },
        data: [...planningPages],
        borderColor: '#091E3F',
        backgroundColor: '#091E3F',
        tension: 0.4,
      },
      {
        label: t('chart.fact'),
        animations: {
          y: {
            duration: 2000,
            delay: 700,
          },
        },
        data: factPages,
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
