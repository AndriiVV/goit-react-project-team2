import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import s from './LibraryBtn.module.css'

const LibraryBtn = () => {
  const { t } = useTranslation();

  return (
    <NavLink to="/training">
        <button type="button" className={s.libraryBtn}>
        {t('GoToRead.button')}
        </button>
    </NavLink>
  )
}

export default LibraryBtn;