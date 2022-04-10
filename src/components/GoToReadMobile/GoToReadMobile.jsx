import { useSelector } from 'react-redux';
import { getBooks } from '../../redux/book/bookSelectors';
import { ReactComponent as Training } from '../../images/training-icon.svg';
import s from './GoToReadMobile.module.css'
import { useTranslation } from 'react-i18next';


const GoToReadMobile = () => {
    const { t } = useTranslation();

    const books = useSelector(getBooks);

    return (
        <>
            <div className={s.wraper}>
                <h1 className={s.blockTitle}>{t('GoToRead.header')}</h1>
                {books.map(({ _id, title, author, publishYear, pagesTotal }) => (
                    <ul className={s.bookList}>
                        <li key={_id} className={s.bookItem}>
                            <div className={s.bookIcon}>
                                <Training className={s.icon}/> 
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
                            </div>
                        </li>
                    </ul>
                ))}
            <button className={s.plusBtn}> &#43; </button>
            
            </div>
       </>
        
    )
}

export default GoToReadMobile;