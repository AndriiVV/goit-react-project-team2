import s from './TrainingBookList.module.css';
import { ReactComponent as Training } from '../../images/training-icon.svg';
import { ReactComponent as Delete } from '../../images/delete.svg';

const TrainingBookList = ({ id, name, author, year, page }) => {
  const books = [
    {
      name: 'Lord of the rings',
      author: 'Tolkien',
      year: 2006,
      page: 200,
    },
  ];

  return (
    <div>
      <table className={s.booksListTable}>
        <thead>
          <tr className={s.booksList}>
            <th
              style={{ borderBottom: '1px solid #E0E5EB' }}
              className={s.bookTitle}
            >
              Назва книги
            </th>
            <th
              style={{ borderBottom: '1px solid #E0E5EB' }}
              className={s.bookAuthor}
            >
              Автор
            </th>
            <th
              style={{ borderBottom: '1px solid #E0E5EB' }}
              className={s.bookYear}
            >
              Рік
            </th>
            <th
              style={{ borderBottom: '1px solid #E0E5EB' }}
              className={s.bookPage}
            >
              Стор.
            </th>
            <th style={{ borderBottom: '1px solid #E0E5EB' }}></th>
          </tr>
        </thead>

        <tbody>
          {books.map(({ id, name, author, year, page }) => (
            <tr key={id}>
              <td className={s.flexCenter}>
                <Training width="33" height="33" />
                {name}
              </td>
              <td>{author}</td>
              <td>{year}</td>
              <td>{page}</td>
              <td className={`${s.iconDelete} ${s.book}`}>
                <Delete width="14" height="18" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className={s.trainingBtn}>
        Почати тренування
      </button>
    </div>
  );
};

export default TrainingBookList;
