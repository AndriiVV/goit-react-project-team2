import { useTranslation } from 'react-i18next';
import { ReactComponent as Book } from '../../images/book-icon.svg';
// import { ReactComponent as BookOrange } from '../../images/book-icon-orange.svg';
import { ReactComponent as Star } from '../../images/star-icon.svg';

import { useSelector } from 'react-redux';
import { getBooks } from '../../redux/auth/authSelectors';
import s from './CurrentlyReadingMobile.module.css'


const CurrentlyReadingMobile = () => {
  return (
    <div>CurrentlyReadingMobile</div>
  )
}

export default CurrentlyReadingMobile