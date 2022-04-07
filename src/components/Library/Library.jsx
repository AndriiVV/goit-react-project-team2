import s from './Library.module.css';
import { ReactComponent as Training } from '../../images/training-icon.svg';
import { ReactComponent as Star } from '../../images/star-icon.svg';
import GoingToRead from '../GointToRead/GoingToRead';
import { useSelector } from 'react-redux';
import { getBooks } from '../../redux/auth/authSelectors';

const Library = () => {
  // const books = [
  //   {
  //     name: 'Психбольница в руках пациентов...',
  //     author: 'Купер Алан',
  //     year: '2009',
  //     page: '183',
  //   },
  //   {
  //     name: 'Психбольница в руках пациентов...',
  //     author: 'Купер Алан',
  //     year: '2009',
  //     page: '183',
  //   },
  // ];

  const books = useSelector(getBooks);

  return (
    <div>
      <table className={s.table}>
        <caption className={s.tableCaption}>Прочитано</caption>
        <thead>
          <tr className={s.tableHeader}>
            <th className={s.titleDone}>Назва книги</th>
            <th className={s.authorDone}>Автор</th>
            <th className={s.year}>Рік</th>
            <th className={s.page}>Стор.</th>
            <th className={s.rating}>Рейтинг книги</th>
            <th className={s.resume}></th>
          </tr>
        </thead>
        <tbody>
          {books.map(({ _id, title, author, publishYear, pagesTotal }) => (
            <tr key={_id} className={s.bookItem}>
              <td className={s.itemTitle}>
                <Training /> {title}
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
                <button className={s.resumeBtn}>Резюме</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className={s.table}>
        <caption className={s.tableCaption}>Читаю</caption>
        <thead>
          <tr className={s.tableHeader}>
            <th className={s.title}>Назва книги</th>
            <th className={s.author}>Автор</th>
            <th className={s.year}>Рік</th>
            <th className={s.page}>Стор.</th>
          </tr>
        </thead>
        <tbody>
          {books.map(({ _id, title, author, publishYear, pagesTotal }) => (
            <tr key={_id} className={s.bookItem}>
              <td className={s.itemTitle}>
                <Training className={s.orange} /> {title}
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
