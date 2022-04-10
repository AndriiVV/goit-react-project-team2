import s from './MyGoal.module.css';

const ResultGoal = ({ newBooks, daysLeft }) => {
  // console.log(window.matchMedia('(min-width: 320px) and (max-width: 768px)'));

  return (
    <div className={s.resGoal}>
      <h2 className={s.resTitle}>Моя мета прочитати</h2>
      <div className={s.boxResFlex}>
        <div className={s.centredBox}>
          <div className={s.goalBoxRes}>
            <span className={s.valueRes}>{newBooks.length}</span>
          </div>
          <div className={s.textRes}> Кількість книжок</div>
        </div>
        <div className={s.centredBox}>
          <div className={s.goalBoxRes}>
            <div className={s.valueRes}>
              {isNaN(daysLeft()) ? 0 : daysLeft()}
            </div>
          </div>
          <div className={s.textRes}>Кількість днів</div>
        </div>
        <div className={s.centredBox}>
          <div className={s.goalBoxRes}>
            <span className={s.valueRes}>
              {isNaN(daysLeft()) ? 0 : daysLeft()}
            </span>
          </div>
          <div className={s.textRes}>Залишилось книжок</div>
        </div>
      </div>
    </div>
  );
};

export default ResultGoal;
