import s from './MyGoal.module.css';
import { useTranslation } from 'react-i18next';


const StartGoal = ({ newBooks, daysLeft }) => {
  const { t } = useTranslation();
  // console.log(window.matchMedia('(min-width: 320px) and (max-width: 768px)'));

  
  return (
    <div className={s.trainingGoal}>
      <h2 className={s.goalTitle}>{t('startgoals.goal')}</h2>
      <div className={s.boxFlex}>
        <div className={s.centredContant}>
          <div className={s.goalBox}>
            <span className={s.value}>{newBooks.length}</span>
          </div>
          <span className={s.textBox}> {t('startgoals.books')}</span>
        </div>
        <div className={s.centredContant}>
          <div className={s.goalBox}>
            <span className={s.value}>
              {isNaN(daysLeft()) ? 0 : daysLeft()}
            </span>
          </div>
          <span className={s.textBox}>{t('startgoals.days')}</span>
        </div>
      </div>
    </div>
  );
};

export default StartGoal;
