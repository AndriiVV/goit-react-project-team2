import s from './MyGoal.module.css';



const StartGoal = ({ newBooks, daysLeft }) => {
  // console.log(window.matchMedia('(min-width: 320px) and (max-width: 768px)'));

  
  return (
    <div className={s.trainingGoal}>
      <h2 className={s.goalTitle}>Моя мета прочитати</h2>
      <div className={s.boxFlex}>
        <div className={s.centredContant}>
          <div className={s.goalBox}>
            <span className={s.value}>{newBooks.length}</span>
          </div>
          <span className={s.textBox}> Кількість книжок</span>
        </div>
        <div className={s.centredContant}>
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
