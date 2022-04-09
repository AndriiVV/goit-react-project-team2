import s from './AppDescription.module.css';
import arrowIcon from '../../images/arrow.svg';
import { useTranslation } from 'react-i18next';

const AppDescription = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={s.contentWrap}>
        <h1 className={s.heading}>Books Reading</h1>
        <h3 className={s.subheading}>{t('description.firstSubTitle')}</h3>
        <ul>
          <li>
            <img src={arrowIcon} alt="Arrow icon" />
            {t('description.goal')}
          </li>
          <li>
            <img src={arrowIcon} alt="Arrow icon" />
            {t('description.load')}
          </li>
          <li>
            <img src={arrowIcon} alt="Arrow icon" />
            {t('description.success')}
          </li>
        </ul>
        <h3 className={s.subheading}>{t('description.secondSubTitle')}</h3>
        <ul>
          <li>
            <img src={arrowIcon} alt="Arrow icon" />
            {t('description.form')}
          </li>
          <li>
            <img src={arrowIcon} alt="Arrow icon" />
            {t('description.skills')}
          </li>
          <li>
            <img src={arrowIcon} alt="Arrow icon" />
            {t('description.interlocutor')}
          </li>
        </ul>

        <div className={s.btnWrap}>
          <button type="button" className={`${s.singInBtn} ${s.btn}`}>
            {t('signInForm.button')}
          </button>
          <button type="button" className={`${s.singUpBtn} ${s.btn}`}>
            {t('description.signUp')}  
          </button>
        </div>
      </div>
    </>
  );
};

export default AppDescription;
