import s from './MyGoal.module.css';
import { useTranslation } from 'react-i18next';
const ResultGoal = ({ newBooks, daysLeft }) => {
  const { t } = useTranslation();
  // console.log(window.matchMedia('(min-width: 320px) and (max-width: 768px)'));

  return (
    <div className={s.resGoal}>
      <h2 className={s.resTitle}>{t('startgoals.goal')}</h2>
      <div className={s.boxResFlex}>
        <div className={s.centredBox}>
          <div className={s.goalBoxRes}>
            <span className={s.valueRes}>{newBooks.length}</span>
          </div>
          <div className={s.textRes}>{t('startgoals.books')}</div>
        </div>
        <div className={s.centredBox}>
          <div className={s.goalBoxRes}>
            <div className={s.valueRes}>
              {isNaN(daysLeft()) ? 0 : daysLeft()}
            </div>
          </div>
          <div className={s.textRes}>{t('startgoals.days')}</div>
        </div>
        <div className={s.centredBox}>
          <div className={s.goalBoxRes}>
            <span className={s.valueResRemainder}>{newBooks.length}</span>
          </div>
          <div className={s.textRes}>{t('resultGoal.left')}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultGoal;
