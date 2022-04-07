import s from '../Library/Library.module.css';
import { ReactComponent as Training } from '../../images/training-icon.svg';

const GoingToRead = () => {
  const books = [
    {
      name: 'Психбольница в руках пациентов...',
      author: 'Купер Алан',
      year: '2009',
      page: '183',
    },
    {
      name: 'Психбольница в руках пациентов...',
      author: 'Купер Алан',
      year: '2009',
      page: '183',
    },
  ];

  return (
    <table className={s.table}>
      <caption className={s.tableCaption}>Маю намір прочитати</caption>
      <thead>
        <tr className={s.tableHeader}>
          <th className={s.title}>Назва книги</th>
          <th className={s.author}>Автор</th>
          <th className={s.year}>Рік</th>
          <th className={s.page}>Стор.</th>
        </tr>
      </thead>
      <tbody>
        {books.map(({ id, name, author, year, page }) => (
          <tr key={id} className={s.bookItem}>
            <td className={s.itemTitle}>
              <Training className={s.orange} /> {name}
            </td>
            <td>{author}</td>
            <td>{year}</td>
            <td>{page}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GoingToRead;
