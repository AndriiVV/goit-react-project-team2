import s from './Library.module.css';
import { ReactComponent as Book } from '../../images/book-icon.svg';
import { ReactComponent as BookOrange } from '../../images/book-icon-orange.svg';
import { ReactComponent as Star } from '../../images/star-icon.svg';
import GoingToRead from '../GoingToRead/GoingToRead';
import { useSelector } from 'react-redux';
import { getUserBooks } from '../../redux/book/bookSelectors';
import { useTranslation } from 'react-i18next';

const Library = () => {
  const { t } = useTranslation();
  const books = useSelector(getUserBooks);

  return (
    
    <div>
      <table className={s.table}>
        <caption className={s.tableCaption}>{t('finishedReading.header')}</caption>
        <thead>
          <tr className={s.tableHeader}>
            <th className={s.titleDone}>{t('GoToRead.title')}</th>
            <th className={s.authorDone}>{t('GoToRead.author')}</th>
            <th className={s.yearDone}>{t('GoToRead.year')}</th>
            <th className={s.pageDone}>{t('GoToRead.pages')}</th>
            <th className={s.rating}>{t('finishedReading.bookRating')}</th>
            <th className={s.resume}></th>
          </tr>
        </thead>
        <tbody className={s.wrapPage}>
          {books.finishedReading.map(({ _id, title, author, publishYear, pagesTotal }) => (
            <tr key={_id} className={s.bookItem}>
              <td className={s.itemTitle}>
                <Book className={s.marginBook} /> {title}
              </td>
              <td>{author}</td>
              <td>{publishYear}</td>
              <td>{pagesTotal}</td>
              <td>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </td>
              <td>
              <button className={s.resumeBtn}>{t('finishedReading.button')}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className={s.table}>
        <caption className={s.tableCaption}>{t('currentlyReading.header')}</caption>
        <thead>
          <tr className={s.tableHeader}>
            <th className={s.title}>{t('GoToRead.title')}</th>
            <th className={s.author}>{t('GoToRead.author')}</th>
            <th className={s.year}>{t('GoToRead.year')}</th>
            <th className={s.page}>{t('GoToRead.pages')}</th>
          </tr>
        </thead>
        <tbody className={s.wrapPage}>
          {books.currentlyReading.map(({ _id, title, author, publishYear, pagesTotal }) => (
            <tr key={_id} className={s.bookItem}>
              <td className={s.itemTitle}>
                <BookOrange className={s.marginBook} /> {title}
              </td>
              <td>{author}</td>
              <td>{publishYear}</td>
              <td>{pagesTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <GoingToRead />
    </div>
  );
};

export default Library;
