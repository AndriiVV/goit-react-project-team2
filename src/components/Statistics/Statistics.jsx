import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatisticsPades } from 'redux/training/trainingOperatons';
import { getStats } from 'redux/training/trainingSelectors';
import s from './Statistics.module.css';
import StatisticsList from '../StatisticsList/StatisticsList';
import { useTranslation } from 'react-i18next';

const Statistics = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const stats = useSelector(getStats);
  const [pages, setPages] = useState('');

  console.log("Stats: ", stats);

  const handleCangePages = e => {
    const value = e.target.value;
    setPages(value);
  };

  const handleSubmit = e => {
    dispatch(setStatisticsPades({ pages: Number(pages) }));
    setPages('');
  };

  // Today
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('.');
  }
  const today = formatDate(new Date());

  return (
    <div className={s.resultsBox}>
      <h2 className={s.resultsTitle}>{t('statistics.results')}</h2>
      <div className={s.positionTablet}>
        <div className={s.statisticsFlexTablet}>
          <div className={s.statisticsFlex}>
            <div className={s.inputFlex}>
              <label htmlFor="one" className={s.textResults}>
                {t('statistics.date')}
                <input
                  type="text"
                  id="one"
                  className={s.statisticsInput}
                  value={today}
                />
              </label>
            </div>
            <div className={s.inputFlex}>
              <label htmlFor="two" className={s.textResults}>
                {t('statistics.pages')}
              </label>
              <input
                type="text"
                id="two"
                className={s.statisticsInput}
                value={pages}
                onChange={handleCangePages}
              />
            </div>
          </div>
          <button type="button" className={s.resultBtn} onClick={handleSubmit}>
            {t('statistics.addResult')}
          </button>
        </div>
        <h2 className={s.statisticsTitle}>{t('statistics.statistic')}</h2>
        <StatisticsList stats={stats}/>
      </div>
    </div>
  );
};

export default Statistics;
