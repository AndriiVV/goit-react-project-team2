import s from './TrainingBookList.module.css';
import { ReactComponent as Training } from '../../images/training-icon.svg';
import { ReactComponent as Delete } from '../../images/delete.svg';

const TrainingBookList = ({ newBooks }) => {
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
          {newBooks.map(({ _id, title, author, publishYear, pagesTotal }) => (
            <tr key={_id}>
              <td className={s.flexCenter}>
                <Training className={s.marginBook} width="22" height="17" />
                {title}
              </td>
              <td>{author}</td>
              <td>{publishYear}</td>
              <td>{pagesTotal}</td>
              <td className={`${s.iconDelete} ${s.book}`}>
                <button
                  type="button"
                  // onClick={() => deleteTrainingBook(name)}
                  className={s.deleteBtn}
                >
                  <Delete width="14" height="18" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainingBookList;
