import { useSelector } from 'react-redux';
import { getUserBooks } from '../../redux/book/bookSelectors';
import { ReactComponent as Training } from '../../images/training-icon.svg';
import s from './GoingToReadMobile.module.css';
import { useTranslation } from 'react-i18next';
import LibraryBtn from 'components/LibraryBtnToTraining/LibraryBtnToTraining';

const GoingToReadMobile = () => {
  const { t } = useTranslation();

  const books = useSelector(getUserBooks);

  return (
    <>
      <div className={s.wraper}>
        <h1 className={s.blockTitle}>{t('GoToRead.header')}</h1>
        {books.goingToRead.map(
          ({ _id, title, author, publishYear, pagesTotal }, index) => (
            <ul className={s.bookList}>
              <li key={_id + index} className={s.bookItem}>
                <div className={s.bookIcon}>
                  <Training className={s.icon} />
                </div>
                <div>
                  <h3 className={s.bookTitle}>{title}</h3>
                  <div className={s.item}>
                    <span className={s.label}>
                      {t('GoToReadMobile.author')}
                    </span>
                    <span className={s.value}>{author}</span>
                  </div>
                  <div className={s.item}>
                    <span className={s.label}>{t('GoToReadMobile.year')}</span>
                    <span className={s.value}>{publishYear}</span>
                  </div>
                  <div className={s.item}>
                    <span className={s.label}>{t('GoToReadMobile.pages')}</span>
                    <span className={s.value}>{pagesTotal}</span>
                  </div>
                </div>
              </li>
            </ul>
          )
        )}
        <LibraryBtn />
        <button className={s.plusBtn}> &#43; </button>
      </div>
    </>
  );
};

export default GoingToReadMobile;
