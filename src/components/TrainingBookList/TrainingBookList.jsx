import s from './TrainingBookList.module.css';
import { ReactComponent as Training } from '../../images/training-icon.svg';
import { ReactComponent as Delete } from '../../images/delete.svg';
import { useTranslation } from 'react-i18next';

const TrainingBookList = ({ newBooks, deleteTrainingBook, isTraining }) => {
  const { t } = useTranslation();
  return (
    <div className={s.listScroll}>
      <table className={s.booksListTable}>
        <thead>
          <tr className={s.booksList}>
            <th
              style={{ borderBottom: '1px solid #E0E5EB' }}
              className={s.bookTitle}
            >
              {t('addingBookForm.title')}
            </th>
            <th
              style={{ borderBottom: '1px solid #E0E5EB' }}
              className={s.bookAuthor}
            >
              {t('all.author')}
            </th>
            <th
              style={{ borderBottom: '1px solid #E0E5EB' }}
              className={s.bookYear}
            >
              {t('all.year')}
            </th>
            <th
              style={{ borderBottom: '1px solid #E0E5EB' }}
              className={s.bookPage}
            >
              {t('all.pages')}
            </th>
            {!isTraining && (
              <th style={{ borderBottom: '1px solid #E0E5EB' }}></th>
            )}
          </tr>
        </thead>

        <tbody className={s.tableText}>
          {newBooks.map(
            ({ _id, title, author, publishYear, pagesTotal }, index) => (
              <tr key={_id + index} className={s.fontSize}>
                <td className={`${s.flexCenter} ${s.tableBorder}`}>
                  <Training className={s.marginBook} />
                  {title}
                </td>
                <td className={s.tableBorder}>{author}</td>
                <td className={s.tableBorder}>{publishYear}</td>
                <td className={s.tableBorder}>{pagesTotal}</td>
                {!isTraining && (
                  <td className={`${s.iconDelete} ${s.book} ${s.tableBorder}`}>
                    <button
                      type="button"
                      onClick={() => deleteTrainingBook(_id)}
                      className={`${s.deleteBtn} ${s.tableBorder}`}
                    >
                      <Delete width="14" height="18" />
                    </button>
                  </td>
                )}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TrainingBookList;
