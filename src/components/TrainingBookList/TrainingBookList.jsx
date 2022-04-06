import s from './TrainingBookList.module.css';
import { ReactComponent as Training } from '../../images/training-icon.svg';
import { ReactComponent as Delete } from '../../images/delete.svg';

// { filter, books, addBookToTraining }

const TrainingBookList = ({ id, name, author, year, page }) => {
  //   const findBook = () => {
  //     return books.filter(book =>
  //       book.name.toLowerCase().includes(filter?.toLowerCase())
  //     );
  //   };

  const books = {
    name: 'Lord of the rings',
    author: 'Tolkien',
    year: 2006,
    page: 200,
  };

  return (
    <div>
      <table className={s.booksListTable}>
        <thead style={{ borderBottom: '1px solid #E0E5EB' }}>
          <tr className={s.booksList}>
            <th className={s.bookTitle}>Назва книги</th>
            <th className={s.bookAuthor}>Автор</th>
            <th className={s.bookYear}>Рік</th>
            <th className={s.bookPage}>Стор.</th>
            <th className={s.bookPage}></th>
          </tr>
        </thead>

        <tbody>
          {/* {books.map(({ id, name, author, year, page }) => ( */}
          <tr key={id}>
            <td className={s.flexCenter}>
              <Training width="33" height="33" />
              {books.name}
            </td>
            <td>{books.author}</td>
            <td>{books.year}</td>
            <td>{books.page}</td>
            <td className={`${s.iconDelete} ${s.book}`}>
              <Delete width="14" height="18" />
            </td>
          </tr>
          <tr key={id}>
            <td className={s.flexCenter}>
              <Training width="33" height="33" />
              {books.name}
            </td>
            <td>{books.author}</td>
            <td>{books.year}</td>
            <td>{books.page}</td>
            <td className={`${s.iconDelete} ${s.book}`}>
              <Delete width="14" height="18" />
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
      <button className={s.trainingBtn}>Почати тренування</button>
    </div>
  );
};

export default TrainingBookList;
