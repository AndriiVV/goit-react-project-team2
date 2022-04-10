import { ReactComponent as Book } from '../../images/book-icon.svg';
import { ReactComponent as Star } from '../../images/star-icon.svg';
import { useSelector } from 'react-redux';
import { getUserBooks } from '../../redux/book/bookSelectors';
import s from './FinishedReadingMobile.module.css'
import { useTranslation } from 'react-i18next';

const FinishedReadingMobile = () => {
    const { t } = useTranslation();
    const books = useSelector(getUserBooks);
  return (
    <div className={s.wraper}>
        <h1 className={s.blockTitle}>{t('finishedReading.header')}</h1>
        {books.finishedReading.map(({ _id, title, author, publishYear, pagesTotal }) => (
            <ul className={s.bookList}>
                <li key={_id} className={s.bookItem}>
                    <div className={s.bookIcon}>
                        <Book className={s.icon}/> 
                    </div>
                    <div>
                        <h3 className={s.bookTitle}>{title}</h3>
                        <div className={s.item}>
                            <span className={s.label}>{t('GoToReadMobile.author')}</span>
                            <span className={s.value}>{author}</span>
                        </div>
                        <div className={s.item}>
                            <span className={s.label}>{t('GoToReadMobile.year')}</span>
                            <span className={s.value}>{publishYear}</span>
                        </div>
                        <div className={s.item}>
                            <span className={s.label}>{t('GoToReadMobile.pages')}</span>
                            <span className={s.value}>{pagesTotal}</span>
                        </div>
                        <div className={s.rating}>
                            <div className={s.ratingLabel}>{t('finishedReading.rating')}</div>
                            <div className={s.ratingValue}>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                        </div>
                        <button className={s.resumeBtn}>{t('finishedReading.button')}</button>
                    </div>    
                </li>
            </ul>
        ))}                               
    </div> 
  )
}

export default FinishedReadingMobile