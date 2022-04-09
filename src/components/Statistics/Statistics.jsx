import s from './Statistics.module.css';

const Statistics = () => {
  return (
    <div className={s.resultsBox}>
      <h2 className={s.resultsTitle}>Результати</h2>
      <div className={s.statisticsFlex}>
        <label htmlFor="" className={s.textResults}>
          Дата
          <input type="date" className={s.statisticsInput} />
        </label>
        <label htmlFor="" className={s.textResults}>
          Кількість сторінок
          <input type="text" className={s.statisticsInput} />
        </label>
      </div>
      <button type="button" className={s.resultBtn}>
        Додати результат
      </button>
      <h2 className={s.resultsTitle}>Статистика</h2>
    </div>
  );
};

export default Statistics;
