import { useSelector } from 'react-redux';
import { getBooks } from '../../redux/auth/authSelectors';
import { ReactComponent as Training } from '../../images/training-icon.svg';
import s from './GoToReadMobile.module.css'
import GoingToRead from 'components/GointToRead/GoingToRead';

const GoToReadMobile = () => {

    const books = useSelector(getBooks);

    return (
        <>
            <div className={s.wraper}>
                <h1 className={s.blockTitle}>Маю намір прочитати</h1>
                {books.map(({ _id, title, author, publishYear, pagesTotal }) => (
                    <ul className={s.bookList}>
                        <li key={_id} className={s.bookItem}>
                            <div className={s.bookIcon}>
                                <Training className={s.icon}/> 
                            </div>
                            <div>
                                <h3 className={s.bookTitle}>{title}</h3>
                                <div className={s.item}>
                                    <span className={s.label}>Автор :</span>
                                    <span className={s.value}>{author}</span>
                                </div>
                                <div className={s.item}>
                                    <span className={s.label}>Рік :</span>
                                    <span className={s.value}>{publishYear}</span>
                                </div>
                                <div className={s.item}>
                                    <span className={s.label}>Стор.:</span>
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