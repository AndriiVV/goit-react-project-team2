import s from './Statistics.module.css';

const Statistics = () => {
  return (
    <div className={s.resultsBox}>
      <h2 className={s.resultsTitle}>Результати</h2>
      <div className={s.positionTablet}>
        <div className={s.statisticsFlexTablet}>
          <div className={s.statisticsFlex}>
            <div className={s.inputFlex}>
              <label htmlFor="one" className={s.textResults}>
                Дата
              </label>
              <input type="date" id="one" className={s.statisticsInput} />
            </div>
            <div className={s.inputFlex}>
              <label htmlFor="two" className={s.textResults}>
                Кількість сторінок
              </label>
              <input type="text" id="two" className={s.statisticsInput} />
            </div>
          </div>
          <button type="button" className={s.resultBtn}>
            Додати результат
          </button>
        </div>
        <h2 className={s.statisticsTitle}>Статистика</h2>
      </div>
    </div>
  );
};

export default Statistics;
