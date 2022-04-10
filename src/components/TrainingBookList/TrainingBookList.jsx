import s from './TrainingBookList.module.css';
import { ReactComponent as Training } from '../../images/training-icon.svg';
import { ReactComponent as Delete } from '../../images/delete.svg';

const TrainingBookList = ({ newBooks, deleteTrainingBook }) => {
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
          {newBooks.map(
            ({ _id, title, author, publishYear, pagesTotal }, index) => (
              <tr key={_id + index}>
                <td className={`${s.flexCenter} ${s.tableBorder}`}>
                  <Training className={s.marginBook} width="22" height="17" />
                  {title}
                </td>
                <td className={s.tableBorder}>{author}</td>
                <td className={s.tableBorder}>{publishYear}</td>
                <td className={s.tableBorder}>{pagesTotal}</td>
                <td className={`${s.iconDelete} ${s.book} ${s.tableBorder}`}>
                  <button
                    type="button"
                    onClick={() => deleteTrainingBook(_id)}
                    className={`${s.deleteBtn} ${s.tableBorder}`}
                  >
                    <Delete width="14" height="18" />
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TrainingBookList;
