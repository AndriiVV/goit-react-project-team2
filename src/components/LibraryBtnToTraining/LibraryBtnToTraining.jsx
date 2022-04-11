import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import s from './LibraryBtnToTraining.module.css'


const LibraryBtnToTraining = () => {
  const { t } = useTranslation();

  return (
    <NavLink to="/training">
      <button type="button" className={s.LibraryBtnToTraining}
      >
        {t('GoToRead.button')}
        </button>
    </NavLink>
  )
}

export default LibraryBtnToTraining;
