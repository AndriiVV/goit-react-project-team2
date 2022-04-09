import s from './GoinToRead.module.css'
import { ReactComponent as Training } from '../../images/training-icon.svg';
import { useSelector } from 'react-redux';
import { getBooks } from '../../redux/auth/authSelectors';
import { useTranslation } from 'react-i18next';

const GoingToRead = () => {
  const { t } = useTranslation();
  const books = useSelector(getBooks);

  return (
    <table className={s.table}>
      <caption className={s.tableCaption}>{t('GoToRead.header')}</caption>
      <thead>
        <tr className={s.tableHeader}>
          <th className={s.title}>{t('GoToRead.title')}</th>
          <th className={s.author}>{t('GoToRead.author')}</th>
          <th className={s.year}>{t('GoToRead.year')}</th>
          <th className={s.page}>{t('GoToRead.pages')}</th>
        </tr>
      </thead>
      <tbody className={s.wrapPage}>
        {books.map(({ _id, title, author, publishYear, pagesTotal }) => (
          <tr key={_id} className={s.bookItem}>
            <td className={s.itemTitle}>
              <Training className={s.marginBook} /> {title}
            </td>
            <td>{author}</td>
            <td>{publishYear}</td>
            <td>{pagesTotal}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GoingToRead;
