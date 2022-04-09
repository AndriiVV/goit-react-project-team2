import s from './MyGoal.module.css';

const StartGoal = ({ newBooks, daysLeft }) => {
  return (
    <div className={s.trainingGoal}>
      <h2 className={s.trainingTitle}>Моя мета прочитати</h2>
      <div className={s.boxFlex}>
        <div className={s.centredBox}>
          <div className={s.goalBox}>
            <span className={s.value}>{newBooks.length}</span>
          </div>
          <span className={s.textBox}> Кількість книжок</span>
        </div>
        <div className={s.centredBox}>
          <div className={s.goalBox}>
            <span className={s.value}>
              {isNaN(daysLeft()) ? 0 : daysLeft()}
            </span>
          </div>
          <span className={s.textBox}>Кількість днів</span>
        </div>
      </div>
    </div>
  );
};

export default StartGoal;
