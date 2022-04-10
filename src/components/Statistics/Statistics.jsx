import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStatisticsPades } from 'redux/training/trainingOperatons';
import s from './Statistics.module.css';

const Statistics = () => {
  const dispatch = useDispatch()
  const [pages, setPages] = useState("")

  const handleCangePages = (e) => {
    const value  = e.target.value;
    setPages(value)
  }

  const handleSubmit = e => {
    dispatch(setStatisticsPades({ "pages": pages}))
  }

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
  const today = formatDate(new Date())


  return (
    <div className={s.resultsBox}>
      <h2 className={s.resultsTitle}>Результати</h2>
      <div className={s.positionTablet}>
        <div className={s.statisticsFlexTablet}>
          <div className={s.statisticsFlex}>
            <div className={s.inputFlex}>
              <label htmlFor="one" className={s.textResults}>
                Дата
                <input type="text" id="one" className={s.statisticsInput} value={today}/>
              </label>
            </div>
            <div className={s.inputFlex}>
              <label htmlFor="two" className={s.textResults}>
                Кількість сторінок
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
          <button type="button" className={s.resultBtn}
            onClick={handleSubmit}>
            Додати результат
          </button>
        </div>
        <h2 className={s.statisticsTitle}>Статистика</h2>
      </div>
    </div>
  );
};

export default Statistics;
